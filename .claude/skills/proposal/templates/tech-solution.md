---
client: "{{client-company-name}}"
contact: "{{contact-name}}, {{contact-role}}"
stage: "{{B|C}}"
generated: "{{YYYY-MM-DD}}"
deal_band: "{{AU$X-Yk}}"
artifact: tech-solution
locale: "{{zh|en}}"
---

# Technical Solution · {{客户公司名}}

> Companion to `proposal.md` and `sow.md`. 这份是 M0 交付物的预览 — 给客户的技术决策人（CTO / Tech Lead / 架构师）看的。

---

## 01 · Overview

### Problem we're solving

{{1 段 — 把客户业务问题翻译成技术语言。eg: "客户当前 customer support 平均首响 4h，主要瓶颈是 70% 的咨询都是 FAQ 重复问题，但无法被检索到。"}}

### Solution at a glance

{{1 段 — 我们要做什么，用一句话能说清楚。eg: "在 Slack + 微信里部署一个 AI customer support agent，背靠 RAG 检索客户的 FAQ + 历史工单，针对 FAQ 类问题 24x7 即时回复，复杂问题升级人工。"}}

### Why this approach

{{2-3 条理由，必须包含至少 1 条"为什么不用 X"（消除 alternative）。eg:
- 不用 OpenAI Custom GPT — 数据不离开客户 AWS 账户，合规
- 不重新训练模型 — 用 prompt + RAG，迭代周期 1 天 vs 1 月
- 复用 Hermes Agent 框架 — 减少 60% 工程时间}}

---

## 02 · Architecture

```
{{ASCII 或文字描述系统组件关系图}}

[Client touchpoints]   →   [Gateway / Router]   →   [Agent runtime]
    Slack / 微信                  Rate limit              Tool calls + LLM
                                  Authentication                ↓
                                       ↓                  [Memory layer]
                                  [Audit log]              short / long / episodic
                                                                ↓
                                                          [RAG retrieval]
                                                          pgvector + FTS5
```

### Components

| 组件 | 技术选型 | 为什么 |
|------|---------|------|
| Agent runtime | {{Hermes / OpenClaw / custom}} | {{...}} |
| LLM router | Haiku → Sonnet → Opus（按任务复杂度自动 fallback）| 成本控制 + 质量保证 |
| Memory | SQLite + FTS5（开始）→ pgvector（扩展时）| 启动成本低，扩展路径清晰 |
| Knowledge base | {{客户文档 source — Notion / SharePoint / Drive / etc}} | 客户已有 |
| Channel adapters | Slack Bolt + 微信企业号 SDK | 客户已用 |
| Observability | OpenTelemetry → {{Datadog / Sentry / Grafana}} | 客户已用 |

---

## 03 · Data Engine（如涉及数据集成）

### Data sources

| Source | Type | Refresh | Cost |
|--------|------|---------|------|
| {{Client 内部文档}} | Notion API | daily incremental | free |
| {{第三方 API 1}} | REST/GraphQL | on-demand | {{free / paid}} |
| {{第三方 API 2}} | ... | ... | ... |

### Ingestion pipeline

1. **Extract** — {{cron / webhook / event-driven}}
2. **Transform** — chunking strategy: {{sentence-aware, 400 token / 50 token overlap}}
3. **Load** — embeddings via {{text-embedding-3-small / Cohere multilingual}}; metadata-aware indexing
4. **Refresh** — automated daily + manual trigger on demand
5. **Quality gate** — eval set + LLM-judge before promoting to prod

### Data hygiene & quality

- 评估基建：{{golden test set N entries / recall@5 target X% / precision target Y%}}
- 数据敏感性：{{PII redaction yes/no, level / 加密策略}}
- 数据 staleness：{{warning threshold / auto-refresh trigger}}

---

## 04 · Cloud / Infrastructure

### Deployment target

{{AWS Sydney (ap-southeast-2) / Azure AU East / Aliyun Singapore / Client's existing cluster}}

### MVP topology

| Component | Instance / Service | Monthly run-rate (AUD) |
|-----------|-------------------|------------------------|
| API server | {{EC2 t4g.medium}} | ${{38}} |
| Worker | {{EC2 t4g.medium}} | ${{38}} |
| Database | {{RDS PG + pgvector}} | ${{91}} |
| Cache / Queue | {{ElastiCache Redis}} | ${{20}} |
| Storage | {{S3 + CloudFront}} | ${{38}} |
| Misc | Route53 + ACM + monitoring | ${{30}} |
| **Total** | | **${{~250}}** |

**Budget cap**: {{$500/month}}, leaving room for traffic spikes / corpus growth.

### Upgrade triggers

| Trigger | Action | Δ/mo |
|---------|--------|------|
| DAU > 50 | API → t4g.large | +$25 |
| > 1000 requests/day | Worker → t4g.large | +$25 |
| Compliance: Multi-AZ | RDS Multi-AZ | +$60 |

---

## 05 · Integrations

| System | Direction | Method | Implementation effort |
|--------|-----------|--------|---------------------|
| {{Slack}} | bi-directional | Bolt SDK + webhooks | 0.5 week |
| {{微信企业号}} | bi-directional | enterprise WeChat API | 1 week |
| {{客户 CRM}} | outbound | HubSpot / Salesforce webhook | 0.5 week |
| {{客户 IAM}} | inbound (auth) | SAML / OIDC | 0.5-1 week |

---

## 06 · AI / LLM

### Model strategy

- **Routing**：根据任务类型自动选模型 — quick classification 用 Haiku/Nano，长报告用 Sonnet，难题降级 Opus
- **Prompt caching**：system prompt + RAG context cached，重复调用 token 成本下降 ~10x
- **Vendor**：默认 Anthropic Claude（合规更友好），OpenAI as fallback
- **Self-hosted**：**不建议** — Frontier 模型质量优势 + vendor 已合同保证不训练；除非有合规硬性要求

### Indicative cost (after cache hit)

| Call type | AUD per call |
|-----------|-------------|
| Quick lookup | $0.005-0.02 |
| Standard reply | $0.05-0.15 |
| Long-form generation | $0.20-0.50 |

按预估 {{volume}} 量，月度 LLM 成本约 AUD ${{X-Y}}/月（pass-through，不 mark up，走 Client 自己的 vendor 账户）。

---

## 07 · Security & Compliance

- **Data residency**：所有 PII 存 {{AU region / Client's AWS account}}，inference 流量可控制 region
- **Auth**：{{SAML / OIDC / API key + rotation}}
- **Encryption**：in-transit TLS 1.3，at-rest AES-256（AWS KMS or equiv）
- **Audit log**：所有 LLM 调用 + tool use 都有 prompt + response + model version 记录，保留 {{N}} 天
- **PII handling**：{{redaction 策略 / 不传给 LLM 的字段清单}}
- **Compliance gaps to flag**：{{客户行业的特殊要求 — APRA / Privacy Act / HIPAA / SOC2}}
- **Vendor contractual guarantees**：Anthropic enterprise tier explicitly 不用 API 输入训练；OpenAI API + Azure OpenAI 同样

---

## 08 · Delivery & Phases

### Phase 1 (this SOW) — what ships

{{对齐 sow.md 第 05 节的 milestones — 这里只列出技术维度的产出，不重复商业 milestone}}

- M0 → architecture + data model + API design + Terraform skeleton
- M1 → core agent runtime + 1 channel + 5 skills
- M2 → multi-channel + memory layer + RAG corpus loaded
- M3 → eval harness + UAT
- M4 → production cutover + handover + runbooks

### Phase 2 (future, separately scoped)

可能的下一波（仅作规划参考，本 SOW 不含）：
- {{Expansion idea 1}}
- {{Expansion idea 2}}

---

## 09 · Risks & mitigations

| Risk | Likelihood | Mitigation |
|------|-----------|-----------|
| {{LLM vendor 突然涨价 / 模型下架}} | medium | Model router 设计上可切换；retainer 含 model migration |
| {{客户数据质量低于预期}} | high | M0 数据 audit；如必要 Change Order 加数据清洗 phase |
| {{第三方 API rate limit}} | low | 缓存层 + 重试策略；超量需升级 vendor 计划 |

---

## 10 · References / appendices

- **Companion docs**：`proposal.md` (business case) · `sow.md` (contract scope) · MCA (legal terms)
- **Live examples we built**：
  - JR Academy training-rag (LangChain + pgvector on AWS Lambda) — daily prod traffic
  - Hermes Agent — multi-channel deployment template we'll reuse
  - LandIQ (public pitch deck: https://australiaitgroup.github.io/landiq/pitch)
- **Open questions**：{{我们还需要客户回答什么才能进入 M0}}
