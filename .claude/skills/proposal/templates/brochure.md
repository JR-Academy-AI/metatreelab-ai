---
client: "{{client-company-name}}"
contact: "{{contact-name}}, {{contact-role}}"
stage: D
generated: "{{YYYY-MM-DD}}"
deal_band: "{{AU$X-Yk}}"
artifact: brochure
locale: "{{zh|en}}"
note: |
  这是 8 页 marketing brochure 的内容大纲。参照 LandIQ
  land-iq-pitch/src/app/brochure/ 的结构：
  Cover → Vision → Problem → Solution → Features → Data → ROI → Back Cover
---

# Brochure Outline · {{客户公司名}}

**用途**：prospect 阶段的"我们做什么"宣传册 — 比 pitch deck 短、比 proposal 轻
**页数**：8（A4 print-friendly）
**受众**：客户内部 champion 用来对内 socialize 我们的方案

---

## P1 · Cover

- **大标题**：{{Project Name}}
- **副标题**：一句话价值主张（不超过 15 字）
- **视觉锚点**：{{客户行业相关图 / product mockup placeholder}}
- 底部：Metatree Lab · metatreelab.ai

---

## P2 · Vision — 我们认为这个行业会变成什么样

1 段大字（80-120 字）：

> {{描绘 3 年后的状态。eg："3 年内，AU 房产开发商的 feasibility analysis 不会再有人手动跑 GIS — 它会变成一次 API 调用、3 分钟内出报告，准确率高于初级 planner。"}}

3 条支撑点：
- {{支撑点 1 — 技术趋势}}
- {{支撑点 2 — 市场信号}}
- {{支撑点 3 — 客户行为变化}}

---

## P3 · Problem — 现状有多痛

| 问题维度 | 现状 | 代价 |
|---------|------|------|
| 时间 | {{现在做 X 要 N 周}} | {{机会成本 / 错失 deal}} |
| 钱 | {{每次 X 要 $Y}} | {{每年 ${{Z}} sunk cost}} |
| 质量 | {{X% 错误率 / 不一致}} | {{下游决策风险}} |
| 人 | {{依赖少数专家}} | {{专家离职 → 业务停摆}} |

> 一句小结：**{{客观陈述客户行业的痛 — 不夸张，但准确}}**

---

## P4 · Solution — 我们的方案

> **一句话方案**

3 部分组成：

**1. {{Component 1}}** — {{做什么 / 输入输出}}
**2. {{Component 2}}** — {{做什么 / 输入输出}}
**3. {{Component 3}}** — {{做什么 / 输入输出}}

视觉：架构示意（3 个框 + 箭头），不要复杂技术细节。

---

## P5 · Features — 核心能力 6-9 个 bullet

按"客户能做什么"组织（不是按技术模块）：

- ✅ {{Capability 1 — 客户视角动词}}
- ✅ {{Capability 2}}
- ✅ {{Capability 3}}
- ✅ {{Capability 4}}
- ✅ {{Capability 5}}
- ✅ {{Capability 6}}
- ✅ {{Capability 7 — optional}}
- ✅ {{Capability 8 — optional}}
- ✅ {{Capability 9 — optional}}

---

## P6 · Data / 数据基础

我们的方案不是空中楼阁，建立在 3 类数据上：

1. **{{Data source 1}}** — {{规模 / refresh / 唯一性}}
2. **{{Data source 2}}**
3. **{{Data source 3}}**

> 数据集成示意图（来源 logo + 流向）

---

## P7 · ROI — 投入产出对比

| 维度 | 现状 ({{客户现状}}) | 用我们的方案 |
|------|--------------------|------------|
| 完成 1 个 X 的时间 | {{N 小时 / 天 / 周}} | {{M}} → {{减少 X%}} |
| 单次成本 | {{$X}} | {{$Y}} → {{减少 X%}} |
| 团队规模 | {{N 人}} | {{M 人}} → {{释放 X% 产能}} |
| 月度 throughput | {{N units}} | {{M units}} → {{提升 X%}} |

**Payback period**：{{N 个月}}（基于 {{volume 假设}}）

---

## P8 · Back Cover — 下一步

**想看更多？**
- 完整 pitch deck：{{link if available}}
- 技术方案 deep-dive：约 30 分钟通话
- 试点项目：{{1-2 周 POC，AU${{X}}k 起}}

**联系**
- Email：hello@jiangren.com.au
- Web：metatreelab.ai
- 办公室：Brisbane · Melbourne · Adelaide

> Metatree Lab · a digital studio by JR Academy（匠人学院）

---

## 关于这份 outline 的使用

参照 LandIQ `land-iq-pitch/src/app/brochure/` 是 React 组件实现。生成实际 brochure：

1. 复制 LandIQ pitch repo → 改 design tokens
2. 修改 `src/app/brochure/` 各 page component 内容
3. 跑 puppeteer 导出 A4 PDF（参照 `scripts/generate-brochure-pdf.mjs`）
4. PDF 发给客户

如果不做完整 Next.js 站，可以直接用本文件 .md 内容，导出为 PDF（pandoc / markdown-pdf 任意工具）— 没有品牌排版但内容能用。
