# Consultants Page — PRD

**Status**: Draft · 2026-04-16
**Owner**: @lightman
**Data source**: `data/consultant-draft.csv`

---

## 1. Goal

在 Metatree Lab 官网上线 "Consultants / 顾问团队" 模块，展示 14 位可外派的技术顾问，每人含头像、城市、方向、简介、对外小时费率（顾问底价 +50%）。双语 (EN/ZH)。

## 2. Why now

- 现有服务页（AI Build / AI Adopt / Property）讲的是"能做什么"，缺"谁来做"的人脸与信任背书。
- Consultant 名册是 JR Academy 承接项目时的实际交付资源池，展示出来能：
  1. 给客户看到真人梯队，提升专业感；
  2. 让定价透明（用 `XX+` 形式暗示可议价）；
  3. 作为内部 sales 工具——销售直接发链接给客户看团队。

## 3. Consultant 名册（含性别 + 对外报价）

> **报价规则**：取 consultant 底价（区间取下限），× 1.5，四舍五入取整，后接 `+` 号。
> **单位**：每个 consultant 支持 **hour / day 两种报价单位**（v1 至少填一种，未来两种可并存）。
> **性别**：由名字 + 自我介绍措辞推断；未来如有变动在 `consultants.ts` 里改即可。
> **方向 tag**：映射到 Metatree 的三条品牌线——**AI Build**（开发/交付）、**AI Adoption**（咨询/BA/落地）、**Property**（房产营销）。原 CSV 里的 "BA" **同时保留 BA 并追加 AI Adoption**，既忠实于 consultant 自我定位，又对齐品牌术语。
>
> v1 卡片最多显示前 3 个 tag，完整 tag 列表存在 `consultants.ts` 里供未来搜索/筛选。

排序按**对外时薪等值**降序（日薪按 `/8` 折算成时薪比较）。

| # | Consultant | 性别 | 城市 | 方向 | 底价 | 对外 |
|---|---|---|---|---|---|---|
| 1 | **Lightman** | M | Brisbane | Founder · Principal · AI Engineer | 880/h *(no markup)* | **880+/hr** |
| 2 | **Jason** | M | Melbourne | AI Build · Principal · LLM | 2000/day *(no markup)* | **2000+/day** |
| 3 | Chris | M | Melbourne | Web3 · FinTech · Product | 200/h | **300+/hr** |
| 4 | Jojo | F | Perth | BA · AI Adoption | 85/h | **128+/hr** |
| 5 | Kevin | M | Canberra | Cyber Security · BA · AI Adoption | 80/h | **120+/hr** |
| 6 | Dexter | M | Melbourne | IT Support · Non-tech Industries | 58/h | **87+/hr** |
| 7 | Rick | M | Sydney | LLM · AI Engineer | 55/h | **83+/hr** |
| 8 | Shawn | M | Melbourne | Cloud · DevOps · AWS | 50/h | **75+/hr** |
| 9 | Devin | M | Melbourne | DevOps · IT Support | 45/h | **68+/hr** |
| 10 | Andrew | M | Melbourne | DevOps · Automation | 40/h | **60+/hr** |
| 11 | Eric Ye | M | Brisbane | Full-stack · AWS | 40/h | **60+/hr** |
| 12 | Fengyan Shi | F | Melbourne | Windows · OpenClaw | 35/h | **53+/hr** |
| 13 | Alex Liu | M | Melbourne | Full-stack · AI Tools | 35/h | **53+/hr** |
| 14 | Miro | F | Sydney | Cybersecurity · DevOps | 35/h | **53+/hr** |
| 15 | Paco | M | Adelaide | Full-stack · AI | 30/h | **45+/hr** |
| 16 | Elliott Jing | M | Adelaide | Full-stack · AWS | 30/h | **45+/hr** |

**Gender summary**: Male 13, Female 3（Fengyan Shi · Jojo · Miro）。
**Unit summary**: 按小时 15 人（含 Lightman $880/h），按天 1 人（Jason $2000/天）。

### 3.5 Bios — 结构：profile + highlights[]

**v2 结构**：每人拆成两块——
- `profile`：1–2 句整体定位，不提城市（城市由卡片 header 展示）
- `highlights`：3–4 条短 bullet，聚焦技术栈/认证/代表项目

卡片渲染为 profile 段落 + `→` 前缀的 bullet list，视觉上更扫读友好。

**所有 16 人的 profile + highlights 定稿直接维护在 `src/data/consultants.ts`**（不在本 PRD 里重复一份，避免失同步）。

Lightman 和 Jason 的条目是 Claude 撰写的占位，如需本人改写，直接编辑 `src/data/consultants.ts` 对应 entry 的 `profile` 与 `highlights` 字段。

## 4. 头像方案（NFT Style）

### 4.1 选型对比

| 方案 | License | NFT 感 | 支持性别 | 一致性 | 结论 |
|---|---|---|---|---|---|
| **DiceBear `lorelei`** | CC0 | 中（插画感强，类似 Azuki 简化版） | ✅ flip + seed | ✅ 同风格 | ⭐ 推荐 |
| DiceBear `pixel-art` | CC0 | 高（CryptoPunks 风） | ✅ | ✅ | 备选 |
| DiceBear `notionists` | CC0 | 中（手绘感） | ✅ | ✅ | 备选 |
| Nouns.wtf 官方 API | CC0 | 极高 | ❌ 无性别 | ✅ | 男女不区分不符合需求 |
| Bored Apes / Azuki 官图 | ❌ 不 CC0 | 高 | — | — | 版权风险，弃用 |

### 4.2 决策

采用 **DiceBear Lorelei** 风格（https://www.dicebear.com/styles/lorelei/）。

- **URL 模板**：`https://api.dicebear.com/9.x/lorelei/svg?seed={NAME}&flip={true|false}&backgroundColor=00e5a0,00b4d8&backgroundType=gradientLinear`
- **性别区分**：
  - Female (`Jojo`, `Fengyan Shi`): 使用默认参数 + `hair=variant01,variant02,...` 女性发型子集
  - Male: `flip=true` 或 `hair=variant30+` 男性发型子集
  - 具体发型白名单在 `consultants.ts` 里硬编码，避免随机切换风格不稳定
- **背景色**：用品牌色 `#00E5A0 → #00B4D8` 渐变，保证头像和 Metatree 主站视觉统一
- **下载到本地**：构建时用 script 把 14 个 SVG 拉下来存到 `public/consultants/{slug}.svg`，避免运行时依赖外部 API、也避免 API 改版破图

### 4.3 真实证件照的处理

CSV 里每人都有真实照片 URL（`New%20form/*.jpeg`），本次**不使用**真实照片。理由：
1. 客户侧顾虑（个人肖像授权）
2. NFT 头像统一风格更 brand-consistent
3. 真人照片质量、构图不一致，视觉噪声大

真实照片可作为 admin 内部资料保留，不进仓库。

## 5. 页面设计

### 5.1 路由

- EN: `/consultants`
- ZH: `/zh/consultants`

### 5.2 布局

遵循现有 `AboutPage.astro` / `WorkPage.astro` 的视觉规范：

```
┌─────────────────────────────────────┐
│ PageHero                            │
│ Title: "Consultants" / "顾问团队"   │
│ Sub: "14 senior engineers across    │
│      Australia, ready to deploy."    │
└─────────────────────────────────────┘

/ 01 — TEAM

┌──────┬──────┬──────┬──────┐
│card-1│card-2│card-3│card-4│   4 列 (desktop)
├──────┼──────┼──────┼──────┤   2 列 (tablet)
│card-5│card-6│...           │   1 列 (mobile)
└──────┴──────┴──────┴──────┘

Card structure:
┌─────────────────────────┐
│  [Avatar 120x120]       │
│                         │
│  Chris               M  │  <- name + small gender icon
│  Melbourne              │
│  Web3 · FinTech         │  <- up to 3 tags, dot separator
│                         │
│  "短简介截取前 60 字…"   │
│                         │
│  ─────────────────────  │
│  From AUD 300+/hr       │  <- 对外报价
└─────────────────────────┘

/ 02 — HOW TO HIRE

CTA → 跳到 /contact
```

### 5.3 交互

- **卡片悬停**：轻微抬起 + border 变亮（复用 `.card-glass` hover）
- **点击卡片**：不做详情页（第一版不做个人主页，避免数据维护成本）。改为 expand modal 或直接禁用点击。
  - **决策**：禁用点击，纯展示卡。第二版再加详情页。
- **筛选**（可选，v1.1）：按城市 / 方向 tag 过滤。v1 不做。

### 5.4 文案

- **简介**：CSV 里每人的自我介绍中英混杂，需要整理成**中英文双版本各 1 段**，每段 ≤ 80 字/words。
  - ZH 版：提炼成 60–80 字的一句话
  - EN 版：translate 或 summarise 成 60–80 words
  - **决策**：lightman 先提供修订版 CSV 或直接在 `consultants.ts` 里改；不让 Claude 自己意译自我介绍（过翻可能失真）
- **方向 tag**：限 1–2 个英文短标签，不翻译

### 5.5 定价展示

- 单位支持 `hour` 和 `day` 两种，每人数据里至少填一种，两种可并存。
- 卡片文案：
  - Hour only → EN `From AUD XXX+/hr` / ZH `AUD XXX+/小时起`
  - Day only → EN `From AUD X,XXX+/day` / ZH `AUD X,XXX+/天起`
  - Both → EN `From AUD XXX+/hr · X,XXX+/day` / ZH `AUD XXX+/小时 · X,XXX+/天 起`
- **不**显示"consultant 底价"，只显示对外报价
- 卡片底部用 `.section-label` 风格的小字，不用大字号抢焦点
- Jason 目前只有日薪（2000/天 → 对外 **3000+/day**），其余 15 人只有时薪

## 6. 技术实现

### 6.1 数据模型

`src/data/consultants.ts`:

**原则**：数据里存对外展示值，卡片纯渲染，不做任何换算。markup 规则（+50%、下限取整、no-markup 特例）在人工填表时处理好，代码不关心。

```ts
export type ConsultantGender = 'male' | 'female';
export type RateUnit = 'hour' | 'day';

export interface ConsultantRate {
  unit: RateUnit;            // 'hour' 或 'day'
  value: number;             // 对外展示值，卡片显示为 `AUD {value}+/{unit}`
}

export interface ConsultantEntry {
  slug: string;              // 'chris', 'alex-liu', 'lightman', 'jason'
  name: string;
  gender: ConsultantGender;
  city: { en: string; zh: string };
  tags: string[];            // 英文，不翻译，卡片最多显示 3 个
  profile: { en: string; zh: string };    // 1–2 句整体定位，不提城市
  highlights: { en: string[]; zh: string[] };  // 3–4 条技术栈/认证/代表项目
  rates: ConsultantRate[];   // 至少 1 项；未来 hour + day 并存支持
  avatar: string;            // '/consultants/chris.svg' — 本地路径
  education?: string;        // 可选，第二版再用
}

export const consultants: ConsultantEntry[] = [ /* 16 条 */ ];
```

### 6.2 卡片渲染（不计算，只拼字符串）

```astro
---
// ConsultantCard.astro
const { consultant, locale } = Astro.props;
const unitLabel = (u: RateUnit) =>
  locale === 'en' ? (u === 'hour' ? 'hr' : 'day')
                  : (u === 'hour' ? '小时' : '天');
const priceStr = consultant.rates
  .map(r => `AUD ${r.value.toLocaleString()}+/${unitLabel(r.unit)}`)
  .join(' · ');
---
```

### 6.3 文件清单

新增：
- `src/data/consultants.ts` — 数据
- `src/components/pages/ConsultantsPage.astro` — 主页面
- `src/components/cards/ConsultantCard.astro` — 卡片
- `src/pages/consultants.astro` — EN 入口
- `src/pages/zh/consultants.astro` — ZH 入口
- `scripts/fetch-consultant-avatars.mjs` — 一次性 pull DiceBear SVG 到 `public/consultants/`
- `public/consultants/*.svg` — 16 个头像

修改：
- `src/components/layout/Nav.astro` — 加一个 "Consultants / 顾问" 导航项
- `src/i18n/en.json` + `zh.json` — nav 文案 + consultants 页文案
- `src/config/site.ts` — 不改

### 6.4 头像生成脚本

`scripts/fetch-consultant-avatars.mjs` 大致逻辑：

```js
import { consultants } from '../src/data/consultants.ts';
import fs from 'node:fs/promises';

for (const c of consultants) {
  const url = `https://api.dicebear.com/9.x/lorelei/svg?seed=${encodeURIComponent(c.name)}&flip=${c.gender === 'male'}&backgroundColor=00e5a0,00b4d8&backgroundType=gradientLinear`;
  const svg = await fetch(url).then(r => r.text());
  await fs.writeFile(`public/consultants/${c.slug}.svg`, svg);
}
```

运行一次后，头像 commit 进仓库，之后不再依赖 DiceBear。

## 7. Open questions / 待 lightman confirm

已解决：Jojo = F；Bio 文案由 Claude 提炼（已写入 §3.5）。

待确认：

1. **Jason 细节**：城市、背景、学历、tag 是否按 "AI Build · Principal · LLM" 处理？需要什么认证/项目点进 bio？
2. **Lightman 自己的条目**：
   - 城市是墨尔本？
   - Tags 是否用 "AI Strategy · Founder · Principal"？
   - Bio §3.5 里的占位是否需要改？（现在写的是 Metatree Lab + JR Academy 创始人 + 0→1 AI × 教育 × 房产）
   - 头像：跟其他人一样用 DiceBear Lorelei 生成，还是想用真人照/自定义？
   - 作为 owner，对外 1320+/hr 是否合理？（若觉得突兀可改成"价格另议 / Contact for rate"）
3. **排序**：当前按对外时薪降序（Lightman → Jason → Chris → …）。要不要改成字母序或其他？
4. **导航位置**：插在 `Work` 和 `About` 之间？
5. **v1 是否加筛选**（城市 / 方向）？默认不加。
6. **头像风格**：锁定 DiceBear Lorelei，还是先看 pixel-art 对比图再定？

## 8. Out of scope (v1 不做)

- 顾问个人详情页
- 真实证件照
- 在线预约/匹配系统
- 项目案例 → consultant 反查
- 筛选/搜索
- 顾问后台自助更新
