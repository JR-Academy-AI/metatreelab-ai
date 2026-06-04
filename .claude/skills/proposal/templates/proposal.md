---
client: "{{client-company-name}}"
contact: "{{contact-name}}, {{contact-role}}"
stage: "{{A|B|C|D|E}}"
generated: "{{YYYY-MM-DD}}"
deal_band: "{{AU$X-Yk}}"
artifact: proposal
locale: "{{zh|en}}"
---

# Proposal · {{客户公司名}}

> 准备人：Metatree Lab (metatreelab.ai) · JR Academy Pty Ltd
> 日期：{{YYYY-MM-DD}}
> 版本：v1
> 联系人：hello@jiangren.com.au

---

## 01 · 我们听到的需求

{{用客户自己的话复述 2-4 句。证明我们听懂了 — 不是模板。引用客户邮件 / 通话里的原话或具体业务场景。}}

**核心痛点**：
- {{痛点 1 — 具体业务场景，不是 "效率低"}}
- {{痛点 2}}
- {{痛点 3}}

**成功标准**：
{{客户希望多久看到什么具体变化。如："3 个月内把客服首响时间从 4 小时压到 15 分钟"}}

---

## 02 · 推荐方案

我们建议从 **{{flagship-service-name}}** 起手，原因是：

{{1-2 句解释为什么这个服务匹配 — 结合客户场景，不是 service subtitle 的复读。}}

### 方案构成

| # | 服务 | 周期 | 投入区间 (AUD) |
|---|-----|------|---------------|
| 1 | {{service-title-zh}}（旗舰） | {{duration}} | {{price-band}} |
| 2 | {{service-title-zh}}（可选） | {{duration}} | {{price-band}} |
| | **合计** | **{{总周期}}** | **{{总区间}}** |

> 这是建议起手包。Phase 2 / Phase 3 看 Phase 1 结果再定 — 我们不强卖你不需要的东西。

---

## 03 · 交付物（Phase 1）

来自 `{{flagship-service-slug}}` 服务的标准交付：

- {{deliverable 1，来自 services.ts}}
- {{deliverable 2}}
- {{deliverable 3}}
- {{deliverable 4}}
- {{deliverable 5}}

每项交付都以"可运行的东西 + 文档 + 培训"三件套交付，**不是 PPT**。

---

## 04 · 工作方式与时间线

| Milestone | 交付物 | 周次 | 客户配合 |
|-----------|-------|------|---------|
| M0 | Technical Solution Package — 架构、stack 选型、API 设计 | Week 0-1 | Kickoff call + 数据/环境 access |
| M1 | {{Phase 1 第一交付物}} | Week 2-{{N}} | Weekly 30-min sync |
| M2 | {{Phase 1 第二交付物}} | Week {{N+1}}-{{M}} | 关键决策点 review |
| M3 | {{Phase 1 第三交付物}} | Week {{M+1}}-{{K}} | UAT 验收 |
| M4 | Production cutover + handover + 培训 | Week {{K+1}}-{{end}} | 接收团队 1-2 人参加培训 |

**沟通节奏**：Slack/微信群 + 每周 30 分钟 sync + 关键里程碑 demo。

---

## 05 · 投资与付款

- **方案总价**：{{区间}} AUD（含税前 / +GST），最终以 SOW 合同为准
- **付款节奏**：milestone-based，net-14 from milestone acceptance
- **首付**：M0 acceptance 后开 invoice（通常 ~$5k），保证项目正式启动
- **含**：方案设计、开发、部署、文档、上线培训、{{N}} 天上线后陪跑
- **不含**：客户侧第三方账号费用（OpenAI / Anthropic API / 云服务）、超出 SOW 的新增需求、长期运维（可走 retainer，见 §07）

---

## 06 · 案例佐证

{{从 services.ts proof 或 projects.ts 选 1-2 个真实相关案例。}}

> 我们的 RAG / Agent 架构正在 **JR Academy（匠人学院）training-rag** 上线运行（LangChain + pgvector on AWS Lambda），每天服务真实学员。同一套底层也驱动 Hermes Agent 与 OpenClaw — 都是我们自己 dogfood 的系统，不是 demo-ware。

{{可选 — 客户是 AU 房产 / 大型 build 时加：}}

> 我们用同样的"先 collateral 打开对话、再 milestone 分期 build"打法服务了 **LandIQ**（AI 房产可行性平台）— 完整在线 pitch deck：https://australiaitgroup.github.io/landiq/pitch

---

## 07 · 上线后支持（可选）

完整交付后，提供两档可选 retainer：

| Tier | 价格 (AUD) | 含 |
|------|-----------|---|
| Continuity | $800/月 + GST | 99% 业务时间 availability target / P1 1 BD 响应 / 数据 refresh / 月度 cost report / 4 hrs 工程时间 |
| Continuity+ | $1,800/月 + GST | + 99.5% availability / P1 4 BH 响应 / 8 hrs 工程时间（可做 small enhancements） |

也可按需 pay-as-you-go：consultant rate AU$45-880/hr 按 seniority。Principal advisory AU$880/hr。
12 个月 commitment 享 10% 折扣，24 个月 20%。

60 天 no-fault 终止条款，双方都可触发。

---

## 08 · 团队

| 角色 | 配置 |
|-----|------|
| 项目负责人 | {{team 名字 / Metatree senior consultant}} |
| 技术 lead | {{根据 track 配}} |
| 实施工程师 | 1-2 人 |

需要 specific consultant 介绍可指定 — 详见 `metatreelab.ai/consultants/`。

---

## 09 · 边界与前提（必读）

**我们能做的**：
- {{基于推荐服务的具体能力，3-4 条}}

**我们不做 / 需要客户配合**：
- 不做硬件采购、不做基础设施长期托管（推荐云原生方案）
- 客户需提供：{{数据样本 / API 权限 / 业务 SME 每周 1 小时 / etc}}
- 模型成本（OpenAI / Anthropic API 调用费）由客户账户承担，我们协助优化
- Change Order 总额不超过合同价的 10%（如超出需重新评估）

如果以上前提不满足，我们会在 kickoff 前重新评估或推迟。

---

## 10 · 下一步

1. **本周内**：回复确认对方案的初步反馈（哪里要改 / 哪里要详谈）
2. **下周**：30 分钟 deep-dive call — 我们约时间
3. **签约**：确认 → SOW → MCA → kickoff，整体 1-2 周内可启动

有任何不清楚或想换方向 — 直接回邮件或微信。**proposal 是讨论起点，不是最终答案。**

---

> Metatree Lab is a digital studio by JR Academy（匠人学院）.
> 法律实体：JR Academy Pty Ltd · ABN 26 621 887 572 · ACN 621 887 572
> 办公室：Brisbane · Melbourne · Adelaide · 远程交付澳洲与亚太。
