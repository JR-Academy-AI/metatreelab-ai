---
client: "{{client-company-name}}"
contact: "{{contact-name}}, {{contact-role}}"
stage: D
generated: "{{YYYY-MM-DD}}"
deal_band: "{{AU$X-Yk}}"
artifact: pitch-outline
locale: "{{zh|en}}"
note: |
  这是 pitch deck 的内容大纲，不是 deck 本身。生成 deck 需要手动：
  cp -r /Users/lightman/Documents/sites/LandIQ/land-iq-pitch ~/Documents/sites/{{client-slug}}-pitch
  然后改 design tokens + 把本文件每一节内容填进对应的 slide component。
---

# Pitch Deck Outline · {{客户公司名}}

**目标受众**：{{investor / 客户老板 / 合作伙伴}}
**演示场景**：{{投资 pitch / 内部 board / 客户 kickoff}}
**Slide 数**：18（参照 LandIQ pitch deck 结构）
**时长**：12-15 分钟讲，5 分钟 Q&A

---

## 01 · TitleSlide

- 项目名：{{Project Name}}
- 一句话定位：{{我们用 X，让 Y 客户在 Z 时间内得到 W 结果}}
- Logo / 客户 logo
- Presenter：{{Presenter name + role}}
- Date

---

## 02 · MarketSlide — 市场 / 痛点放大

3-4 个 animated counter（参照 LandIQ "10,000+ developers · 8hrs lost · $250K wasted · 12 weeks delayed" 模式）：

- {{数字 1}} — {{说明}}
- {{数字 2}} — {{说明}}
- {{数字 3}} — {{说明}}
- {{数字 4}} — {{说明}}

> 关键 vertical rotated text（侧边）：{{一句对市场的犀利观察}}

---

## 03 · ProblemSlide — 我们要解决什么

3 个具体痛点（不是抽象概念）：

1. **{{Pain 1}}** — 现状：{{X}}。结果：{{Y 的代价}}
2. **{{Pain 2}}** — 现状：{{X}}。结果：{{Y 的代价}}
3. **{{Pain 3}}** — 现状：{{X}}。结果：{{Y 的代价}}

> 视觉：3 列对比 / 3 个 callout 卡片

---

## 04 · SolutionSlide — 我们的方案

一句话方案 + 3 个支撑点：

> **{{用 1 句话描述方案 — 不能超过 12 字}}**

支撑点：
1. {{Differentiator 1 — 我们怎么做}}
2. {{Differentiator 2 — 我们怎么做}}
3. {{Differentiator 3 — 我们怎么做}}

> 视觉：方案截图 / 产品 mockup / 演示视频 placeholder

---

## 05 · WhyNowSlide — 为什么是现在

3 条"时机"理由：
- 技术：{{什么新能力刚成熟}}
- 市场：{{什么市场窗口刚打开}}
- 监管 / 合规：{{什么外部变化迫使行动}}

---

## 06 · FeaturesSlide — 核心功能矩阵

| 模块 | 功能 | 阶段 |
|------|------|------|
| {{Module 1}} | {{Feature}} | MVP |
| {{Module 2}} | {{Feature}} | MVP |
| {{Module 3}} | {{Feature}} | Phase 2 |

---

## 07 · DemoSlide — 真实 demo / 用例 walkthrough

3 步用户旅程：
1. 用户输入：{{X}}
2. 系统处理：{{Y}}
3. 结果输出：{{Z（带截图 / 数据样本）}}

> 视觉：流程图 / 截图序列 / Loom 视频

---

## 08 · DataSlide — 数据 / 算法基础

我们的数据来自哪里、有什么独特优势：

- {{Source 1}} — {{规模 / refresh 频率 / 唯一性}}
- {{Source 2}}
- 算法 / 模型：{{什么 LLM 组合 + 我们的 fine-tune / RAG / agent 框架}}

---

## 09 · TechStackSlide

| Layer | 技术选型 | 为什么 |
|-------|---------|------|
| Frontend | {{Next.js / React Native / etc}} | {{...}} |
| Backend | {{NestJS / FastAPI / etc}} | {{...}} |
| Data | {{Postgres + pgvector / etc}} | {{...}} |
| LLM | {{Claude + GPT-5 router}} | 成本 + 质量 + 合规 |
| Cloud | {{AWS Sydney}} | data residency |

---

## 10 · CaseSlide — 已有客户 / dogfood 案例

1-2 个真实运行案例：
- **{{Case 1}}** — {{规模 / 上线时间 / 业务结果}}
- **{{Case 2}}** — 链接 / 截图 / 演示 URL

> Metatree 自己的 dogfood：JR Academy training-rag · Hermes Agent · OpenClaw · LandIQ pitch deck

---

## 11 · BusinessModelSlide — 怎么赚钱

| Stream | Pricing | 启动 vs 成熟 |
|--------|---------|------------|
| {{Subscription}} | ${{X}}/月 | year 1: 100 user / year 3: 10k user |
| {{Per-report}} | ${{Y}} per call | ... |
| {{Custom build}} | ${{Z}}+ project | ... |

---

## 12 · MarketSizeSlide — TAM / SAM / SOM

- **TAM** ({{describe whole market}})：${{XB}}/year
- **SAM** ({{describe addressable}})：${{XB}}/year
- **SOM** ({{realistic 3yr capture}})：${{XM}}/year

> 数据源必须可验证（IBISWorld / Statista / 政府数据），不能编

---

## 13 · CompetitorSlide — 我们 vs 现有方案

| 维度 | {{Competitor A}} | {{Competitor B}} | DIY | **我们** |
|------|---------|---------|-----|---------|
| {{Dim 1}} | ✗ | ✓ | ✗ | ✓ |
| {{Dim 2}} | ✗ | ✗ | ✗ | ✓ |
| {{Dim 3}} | ✓ | ✓ | — | ✓ |
| 价格 | $$ | $$$ | 时间成本 | $ |

---

## 14 · PricingSlide — 投资人版（cost saved）

> 客户传统方式 sunk cost：${{X}}+ vs 我们的方案：${{Y}}
> **节省 {{Z}}%**

6 行 cost comparison table：
| Item | 传统方式 | 我们的方案 |
|------|---------|----------|
| ... | ${{X}} | ${{Y}} |

---

## 15 · TeamSlide

- {{Lightman}} — Director, JR Academy / Metatree Lab — {{背景一句话}}
- {{核心成员 2}} — {{role / 背景}}
- {{核心成员 3}}
- 顾问 / 投资人：{{如有}}

---

## 16 · TractionSlide — 已有进展 / metrics

- {{Metric 1：用户数 / GMV / API call / etc}}
- {{Metric 2：增长率 / retention / NPS}}
- 关键合作：{{LOI / 已签 customer / 战略伙伴}}

---

## 17 · AskSlide — 这次要什么

- **金额**：${{X}}M raise / ${{Y}}k project
- **用途**：{{breakdown — eng / marketing / data}}
- **回报**：{{equity / project return / partnership}}
- **决策时间窗**：{{下个月底 / Q3 / etc}}

---

## 18 · CTASlide / Thank you

- 联系方式：{{email / 微信 / cal.com link}}
- 下一步：{{schedule deep dive / sign LOI / pilot start}}
- QR code / link to 完整 pitch deck 在线版

---

## 关于这份 outline 的使用

每个 slide 段落都对应 LandIQ pitch deck 里一个 React component（在 `land-iq-pitch/src/app/pitch/slides/`）。生成实际 deck 时：

1. 复制 LandIQ pitch repo → rebrand
2. 把上面每一节的内容填进对应 slide component 的 props / data
3. 跑 `pnpm dev` 本地预览
4. 跑 puppeteer 导出 PDF
5. 部署到 GitHub Pages 给客户分享 URL

参照 [[landiq-stack]] 第 6 节的"升级到 Next.js 物料站"步骤。
