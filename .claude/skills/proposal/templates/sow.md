---
client: "{{client-company-name}}"
contact: "{{contact-name}}, {{contact-role}}"
stage: C
generated: "{{YYYY-MM-DD}}"
deal_band: "{{AU$X-Yk}}"
artifact: sow
locale: "{{zh|en}}"
---

# Statement of Work · {{客户公司名}}

> **Engagement**：{{Project name}} — Phase 1
> **Total fee**：AUD ${{X,XXX}} + GST
> **Document version**：v1.0
> **Issue date**：{{YYYY-MM-DD}}
> **Prepared for**：{{Contact name}}, {{Role}}, {{Client legal entity}}
> **Prepared by**：JR Academy Pty Ltd · ABN 26 621 887 572 · Level 10b, 144 Edward Street, Brisbane QLD 4000
> **Status**：For Client review

---

## 01 · Scope (In)

This SOW covers the following deliverables under the {{Phase 1}} engagement:

- {{Deliverable 1 — 具体可验收的产物，不是 "consulting services"}}
- {{Deliverable 2}}
- {{Deliverable 3}}
- ...

**Reference document**：本 SOW scope 以 `proposal.md` 第 02-03 节为准。如冲突，以本 SOW 为准。

---

## 02 · Scope (Out — explicitly excluded)

为避免边界争议，以下明确不在本 SOW 范围内（任何一项需要时走 Change Order 单独报价）：

- {{Exclusion 1 — 如 "international market expansion (Phase 2)"}}
- {{Exclusion 2}}
- {{Exclusion 3}}
- 第三方账号费用（OpenAI / Anthropic API、AWS、第三方数据源订阅）— 由 Client 账户直接支付，pass-through 不 mark up
- 客户业务侧的内容创作 / 数据清洗 / 内部沟通 / 培训对象的时间投入

---

## 03 · Definitions

| 术语 | 定义 |
|------|-----|
| Business Day (BD) | 周一至周五，澳大利亚 AEST/AEDT 时区，公共节假日除外 |
| Milestone Acceptance | Client 在 review 窗口内书面签字接受 milestone 交付 |
| Production-down (P1) | 生产环境完全不可用 或 核心功能失效影响 >50% 用户 |
| Change Order | 超出本 SOW scope 的新增工作 — 单独报价、签字后才执行 |
| RAG / Agent / etc | （如有客户不熟悉的术语，在此定义） |

---

## 04 · Assumptions

本 SOW 价格和时间线基于以下假设。如假设不成立，需重新评估：

- Client 在 kickoff 后 {{N}} 个 BD 内提供：{{数据样本 / API 权限 / 测试环境 / 业务 SME 联系方式}}
- Client 配备一名 nominated Product Owner，每周可用 {{N}} 小时参与 sync 与决策
- 第三方 API（{{如 NSW ePlanning, OpenAI, etc}}）保持当前可用性与定价
- Client 的目标用户量在 {{X}} DAU 内 — 超过触发 cloud upgrade trigger（单独报价）

---

## 05 · Delivery — Milestones

| Milestone | Scope | Fee (AUD) | Target completion |
|-----------|-------|-----------|------------------|
| M0 | Technical Solution Package — 架构、stack、API design、data model | ${{5,000}} | Week 1 |
| M1 | {{第一个可用产出}} | ${{X,XXX}} | Week {{N}} |
| M2 | {{第二个可用产出}} | ${{X,XXX}} | Week {{N}} |
| M3 | {{第三个可用产出 + Calibration / UAT}} | ${{X,XXX}} | Week {{N}} |
| M4 | Production cutover + handover + documentation + training | ${{X,XXX}} | Week {{N}} |
| **Total** | | **${{X,XXX}}** | **~{{N}} weeks** |

### Acceptance process

1. Supplier delivers milestone with email + Slack 通知。
2. Client 有 **10 BD** 的 review 窗口。
3. Day 5 + Day 8 Supplier 主动发书面 reminder。
4. Client 在 10 BD 内提供以下之一：**(a)** 书面 acceptance / **(b)** 书面 defects list（具体可修复）/ **(c)** 书面 extension request。
5. **不存在 "silent acceptance"** — 必须有书面动作。
6. 如 Client 连续 3+ milestones 未在 10 BD 内回应，双方进入 joint review 调整流程。

---

## 06 · Governance

- **Weekly sync**：每周 30 分钟 video call，Supplier owns agenda + meeting notes
- **Comms channel**：Slack / 微信 dedicated channel
- **Documentation**：所有 architecture decision / runbook 维护在 {{Notion / GitHub / shared drive}} 由双方可访问
- **Escalation**：normal issue → PM → 周 sync 提；urgent (P1) → 直接 ping Director (Lightman)

---

## 07 · Fees and payment terms

- **Total contract value**：AUD ${{X,XXX}} + GST
- **Payment schedule**：milestone-based — 每个 milestone acceptance 后开 invoice
- **Payment terms**：**net-14** from invoice date
- **Currency**：AUD（如 Client 是海外实体，可选 USD/CNY 等值结算，汇率以发票日 RBA 中间价为准）
- **Late payment**：超过 net-14 不付 → 暂停后续 milestone 工作（不收滞纳金，只暂停服务）
- **GST**：10%（如 Client 是 GST-registered AU 实体，invoice 含 GST tax invoice 信息）

### Change Order policy

- 任何 scope 之外的新工作 → 单独 Change Order，固定价格 + 签字后才执行
- **聚合 Change Order 上限为合同总价的 10%**（${{X,XXX}}）— 超出此需双方书面 amendment
- Change Order 触发条件（exhaustive）：
  - 新增不在 §01 In-scope 内的需求
  - 上游 API material change 导致 > 2 days rework
  - Client dependency 延迟 > 5 BD
  - 非功能性目标的提高（如 SLA 从 800ms 改 sub-200ms）

---

## 08 · Legal

- **Governing law**：Queensland, Australia
- **Jurisdiction**：Brisbane（或双方书面同意的非排他司法管辖）
- **Liability cap**：Supplier total liability 不超过 total fees paid under this SOW
- **Consequential loss**：双方互相 exclude consequential loss / lost profits / business interruption damages
- **IP**：所有 Supplier 在本 engagement 中开发的代码、文档、数据 schema → Client 永久、非独占、可转让的使用权（含修改、内部部署、商业化）。Supplier 保留可复用的 generic patterns / open-source contributions。
- **Confidentiality**：双方互相保密，5 年期，常规 carve-outs
- **Termination**：either party 60 天书面 no-fault termination；触发后 Supplier 完成在做的 milestone 收 pro-rated fee，未启动的 milestone 取消
- **Data exit**：见 §09

完整法律条款见配套的 Master Consulting Agreement (MCA) v{{X}}。

---

## 09 · Data portability & exit

强约束承诺：

- 所有数据存 Client 自己的云账户（AWS/Azure/etc），Supplier 不 hold
- Daily automated PostgreSQL pg_dump + S3 sync to Client-owned bucket
- 政府/第三方数据以 raw GeoJSON / GeoPackage / JSON 存储，无 proprietary container
- 数据 on-demand export — 任何时候可拿，不需要 termination
- Termination 后 Client 获得：full DB dump + S3 inventory + infrastructure-as-code (Terraform) + **30-day read-only environment** 用于验证 export

---

## 10 · Sign-off

| Party | Name | Title | Signature | Date |
|-------|------|-------|-----------|------|
| Supplier | Lightman | Director, JR Academy Pty Ltd | | {{YYYY-MM-DD}} |
| Client | {{Client name}} | {{Title}} | | |

---

> Annexes（如适用）：
> - Annex A — Cloud Cost Budget Sheet
> - Annex B — Calibration / Quality Schedule
> - Annex C — Tech Solution Package (M0 deliverable)
> - Annex D — Model Maintenance Policy
