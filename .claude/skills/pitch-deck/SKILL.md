---
name: pitch-deck
description: 为客户生成「land-and-expand 分阶段」HTML pitch deck（横向 16:9 自包含幻灯片，可直接发链接/部署到 metatreelab.ai）。核心商业模式=低价上车 + 后续逐阶段收费 + 大量 hook 持续挖需求。强制：Phase 1 写清"具体包含什么 + 明确不包含什么"、每阶段一屏独立、只 Phase 1 报价(后续不出吓人数字)、内嵌真实设计稿/真实 logo/动画图表做吸引力、固定 16:9 零 responsive、部署在公司 repo public/{slug}/。Use when 用户说"做个 pitch/演示给甲方"、"把方案做成 PPT/在线 deck"、"做个分阶段报价的展示"、"land and expand 的提案"。先有需求/方案基础（可配合 /proposal 产出的研究），再产出 deck。NOT for 纯 markdown 提案(用 /proposal)、NOT for 单页报价、NOT for 内部 PRD。
argument-hint: "[客户名 / slug，如 'AISA' 或 'aisa-school-alliance']"
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, WebFetch, Agent
---

# Metatree Pitch Deck · land-and-expand 在线提案生成器

> 产出：一个**横向 16:9、自包含、零 responsive** 的 HTML pitch deck（+ 可选的内嵌设计稿 mockup），发链接即可演示，部署到 `metatreelab.ai/{slug}/`。
> 范例（canonical）：`proposals/aisa-school-alliance-2026-06-03/aisa-pitch.html` → 线上 https://metatreelab.ai/aisa-pitch/

---

## 🧠 先理解商业模式：land-and-expand

这套 deck 服务的是一种**特定销售模式**，所有设计决策都为它服务：

1. **低价上车** —— Phase 1 固定价、金额小（让甲方"付得起、不犹豫"，例：AISA $6,600）。
2. **逐阶段收费** —— Phase 2 / 3 / Roadmap 模块化，一次一小步，**只在前一步见效后再谈下一步**。
3. **大量 hook** —— 把所有未来能做的功能铺成长长的路线图，让甲方看到 3 年价值跑道 = 你后续的持续收入。
4. **每阶段都便宜** —— 除 Phase 1 外**不在 deck 上写吓人的大数字**（写 "small step / per module / scoped to your budget"），怕吓跑 / 怕他们觉得付不起。

> deck 的任务不是"卖一个大项目"，是"**先上车 + 让甲方持续想要更多**"。

---

## 🚨 8 条铁律（这些是真实踩过的坑，违反必返工）

| # | 红线 | 正确做法 |
|---|------|---------|
| 1 | ❌ Phase 1 没写清楚 | **必须有一屏**"Phase 1 · EXACTLY WHAT'S INCLUDED"：三/四栏列**具体功能** + 一条醒目红字 **"NOT in Phase 1（后续阶段）"**。甲方默认会以为"全都包括"，必须主动划界。 |
| 2 | ❌ 后续阶段标大价格 | 只有 **Phase 1 有明确价格**。Phase 2/3/Roadmap 写 "small step / per module / later / scoped to your budget"，**不出大数字**（land-and-expand 怕吓跑）。 |
| 3 | ❌ hook 不够 / 埋太深 | 把未来需求铺成 **Phase 2 → Phase 3 → Roadmap** 三档，每档可视化。能挖的都列上（成本计算器/中介门户/佣金/选校匹配/AI助手/招生官门户/实时学位/支付/SIS/homestay/合规/BI…）。 |
| 4 | ❌ 不够吸引力（甲方非技术） | 必须"看得见"：**内嵌真实设计稿**（iframe 实时官网+后台）、**入场动画**、**图表**（条形/环形/滚动数字）、**真实 logo 墙**、前后对比**流程图**。文字清单 ≠ 吸引力。 |
| 5 | ❌ 编造内容/占位图蒙混 | 真实 logo（抓客户官网）、真实数据、真实团队（src/data/consultants.ts、team.ts、projects.ts）。占位必须标 "Design mockup"。功能描述要 **"做什么 → 帮到什么(business 结果)"**，不是干巴巴功能名。 |
| 6 | ❌ responsive / 排版会崩 | **固定 16:9，零 @media reflow**。stage 用 `width:min(100vw,177.78vh)`，所有尺寸用 **container-query 单位 cqw**（随舞台等比缩放）。甲方常用手机打开，排版一崩就不看了 —— 宁可整体变小，不可重排。 |
| 7 | ❌ 部署到个人仓库/乱域名 | **部署在本 repo** `public/{slug}/` → 随主站 deploy 到 **metatreelab.ai/{slug}/**。绝不单开个人 GitHub 仓库。**只传网页资源**（HTML+图），**绝不传 internal-notes/sow 等内部 markdown**。 |
| 8 | ❌ 每个 phase 商业逻辑不顺 | 阶段叙事必须是：**能用 → 省力 → 多赚钱**。Phase 1=基础能用+高效；Phase 2=自动化省人力；Phase 3=AI 帮转化/多招生（最易想象的功能放第一，配可想象场景，如"家长半夜中文提问→秒回→抓住线索"）。 |

---

## 📐 验证过的 deck 结构（~15 屏，按客户改）

| # | 屏 | 要点 |
|---|---|---|
| 01 | **Hero** | "{N} → 1" 式大标题（如 "20 schools, one application"）+ 右侧**真实大图/内嵌预览**。可做浅色屏突出（注意浅底要把白 logo 反色）。 |
| 02 | What we heard | 痛点叙事（用客户原话/真实场景）。 |
| 03 | The pain today | 痛点**表**（维度/现状/代价）。 |
| 04 | We've done the homework | **数据可视化**（条形图+环形图+滚动数字）—— 提前建立"我们做足功课"的可信度。 |
| 05 | The shift | **前后对比流程图**（今天的人工链 vs 平台自动链，方框+箭头，瓶颈标红、核心标绿）。 |
| 06 | **Phase 1 · 包含什么** | 铁律 1：三/四栏具体功能 + 红字"NOT in Phase 1" + cloud cost + 部署 logo（如 AWS Partner）。 |
| 07 | Phase 1 设计预览 A | **iframe 内嵌真实官网设计稿**（浏览器框）。 |
| 08 | Phase 1 设计预览 B | **iframe 内嵌真实后台设计稿**（让非技术甲方看"登录后怎么用"）。 |
| 09 | **Phase 2** | 4 栏功能清单（每栏一类），标 "next stage"，价格写 "small modular step"。 |
| 10 | 差异化 | "为你的市场而建"等差异点，**放 Phase 2 之后**；每条标阶段(Phase 1/2/3)。 |
| 11 | **Phase 3 & Beyond** | 3 张 Phase 3 高亮卡（"做什么→帮到什么"）+ 其余 hook 标 Roadmap。 |
| 12 | Why us | **团队（真实顾问数/城市/认证）+ 项目（真实案例）+ 为什么适合你**。不要只堆能力词。 |
| 13 | The Plan | 阶段汇总表：**只 Phase 1 有价**，其余 small step/per module/later。 |
| 14 | Timeline | Phase 1 的 M0–M3 周计划 + 每里程碑金额。 |
| 15 | Investment + CTA | Phase 1 大价格 + "Book a call"。 |

> 顺序逻辑：钩子 → 共情痛点 → 已做功课 → 变化承诺 → **Phase 1(包含/排除/设计稿)** → Phase 2 → 差异化 → Phase 3 → 凭什么是我们 → 汇总 → 时间线 → 成交。报价靠后、可信度靠前。

---

## 🎨 技术/构建约定（直接复用 aisa-pitch.html）

- **舞台**：`.stage{width:min(100vw,177.78vh);height:min(56.25vw,100vh);container-type:size}`，幻灯片绝对定位、`translateX` 左右翻页。
- **缩放**：所有字号/间距/卡片用 **cqw**（= 舞台宽的 %），整张随舞台等比缩放 → 天然非 responsive、手机不崩。
- **导航**：← → / 空格 / 两侧 ‹ › / 底部点 / 触屏滑动 / Home·End。计数器 "NN / 总数"。
- **入场动画**：`.stage.anim .slide.active` 驱动 label/h1/lead/卡片逐级 fade-up（stagger transition-delay）。
- **图表（纯 CSS/SVG，无库）**：条形图(`.barfill` 宽 = `var(--w)`)、环形图(SVG stroke-dasharray)、滚动数字(requestAnimationFrame countUp)。
- **内嵌设计稿**：`<iframe src="...-mockup.html">` 放浏览器框里 —— ⚠️ **file:// 下部分浏览器拦截 iframe，部署到 https 后才正常**。
- **配色**：跟客户调性（AISA=navy `#16294C` + 金 `#C39A4E` + 米白）。studio 外壳可暗黑，内嵌产品预览用客户暖色（双层）。
- **logo**：studio logo **base64 内联**（便携）；客户/学校 logo 抓官网放 `logos/`（dark 屏上白 logo 用白底 chip，浅屏把白 logo `filter:brightness(0)` 反深）。

### 已知 bug 清单（别再犯）
- ⚠️ `.barfill` 等填充用 `<span>` 必须加 **`display:block`** —— inline 元素 width/height 不生效（条形图不显示就是这个）。
- ⚠️ 浅色 Hero 屏的白色 studio logo 会消失 → JS 给该屏切 class 后 `filter:brightness(0)` 反色。
- ⚠️ 抠图透明 PNG（不规则图）放黑底会露黑缺口 → 该屏改浅底。
- ⚠️ 改 section 顺序/插屏后**务必重编号** `/ NN —` 标签 + 计数器总数。

---

## 🔧 工作流（5 步）

### Step 0 · 读真实素材
- 客户研究：若有 `/proposal` 产出的 `proposals/{slug}-{date}/`（research/requirements/schools-data/PRD），直接用。没有就先抓客户官网（WebFetch）+ 真实数据。
- studio 真实数据：`src/data/consultants.ts`(顾问数/城市/认证)、`team.ts`、`projects.ts`、根 `design.md`(品牌 token)。
- 抓客户真实 logo / 大图，存 `proposals/{slug}-{date}/logos/` 与图片。

### Step 1 · 确认商业结构（关键，问清楚）
- Phase 1 范围 + **固定价**（land 价，要小）。
- 各 phase 怎么切（能用→省力→多赚钱），哪些功能进哪个 phase。
- 确认"后续不写大数字"。

### Step 2 · 生成 deck
- 复制 `aisa-pitch.html` 为模板，按本结构改 15 屏 + 客户配色 + 真实素材。
- 需要时同步做 `{slug}-site-mockup.html` / `{slug}-admin-mockup.html`（成品级设计稿，供 iframe 内嵌）。
- 落在 `proposals/{slug}-{date}/`。

### Step 3 · 自检（逐条）
- [ ] Phase 1 有"包含 + 明确 NOT included"屏
- [ ] 只 Phase 1 有价格，后续无大数字
- [ ] hook 铺到 Phase 2/3/Roadmap
- [ ] 有内嵌设计稿 + 动画 + 图表 + 真 logo
- [ ] 真实数据/团队/案例，占位标 mockup
- [ ] 固定 16:9、0 个 @media reflow
- [ ] 标号连续、计数器对、`.barfill` 有 display:block
- [ ] 功能描述是"做什么→帮到什么"

### Step 4 · 部署到 metatreelab.ai
```bash
SLUG=aisa-pitch   # 客户 slug
SRC="proposals/{slug}-{date}"
rm -rf public/$SLUG && mkdir -p public/$SLUG
cp "$SRC/{slug}-pitch.html" public/$SLUG/index.html      # deck 设为 index.html
cp "$SRC"/*-mockup.html "$SRC"/*.png public/$SLUG/
cp -r "$SRC/logos" public/$SLUG/logos
# ⚠️ 绝不拷 *.md（internal-notes/sow 等内部文件）
git add public/$SLUG && git commit -m "feat(pitch): add {client} pitch deck at /$SLUG/"
git push origin main      # 触发 deploy.yml → metatreelab.ai/$SLUG/
gh run watch <id> --exit-status
curl -s -o /dev/null -w '%{http_code}' https://metatreelab.ai/$SLUG/   # 期望 200
```
- 部署后 file:// 的 iframe 限制消失，内嵌设计稿正常。
- 发 **https://metatreelab.ai/{slug}/** 给甲方。

---

## 触发示例
- "给 AISA 做个 pitch / 在线演示" · "把方案做成 PPT 发甲方" · "做个分阶段报价的 deck" · "land and expand 的提案" · "部署个 online 版给客户看"

## 不要误触
- 纯文字 markdown 提案 → `/proposal`；单页报价 → 网站 /quote/；内部 PRD → 手写。
