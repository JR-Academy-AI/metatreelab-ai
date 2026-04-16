export type ConsultantGender = 'male' | 'female';
export type RateUnit = 'hour' | 'day';

export interface ConsultantRate {
  unit: RateUnit;
  value: number;
}

export interface ConsultantEntry {
  slug: string;
  name: string;
  gender: ConsultantGender;
  city: { en: string; zh: string };
  tags: string[];
  profile: { en: string; zh: string };
  highlights: { en: string[]; zh: string[] };
  rates: ConsultantRate[];
  avatar: string;
  order: number;
}

export const consultants: ConsultantEntry[] = [
  {
    slug: 'lightman',
    name: 'Lightman',
    gender: 'male',
    city: { en: 'Brisbane', zh: '布里斯班' },
    tags: ['Founder', 'Principal', 'AI Engineer'],
    profile: {
      en: 'Founder of Metatree Lab and JR Academy. 5+ years shipping AI-powered platforms; has guided 50+ businesses from AI strategy to production systems they actually use.',
      zh: 'Metatree Lab 与 JR Academy 创始人。5+ 年 AI 平台交付经验，已帮助 50+ 家企业把 AI 从战略落到真正能用的系统。',
    },
    highlights: {
      en: [
        'Founder · JR Academy (AI education for Chinese-speaking devs)',
        '50+ enterprise AI adoptions across AU & APAC',
        'Full cycle: strategy → architecture → production',
        'Fluent across Chinese and English-speaking markets',
      ],
      zh: [
        '创始人 · JR Academy（华人开发者 AI 教育品牌）',
        '50+ 家澳洲 / 亚太企业 AI 落地经验',
        '战略 → 架构 → 生产 全链路覆盖',
        '中英文双市场沟通',
      ],
    },
    rates: [{ unit: 'hour', value: 880 }],
    avatar: '/consultants/lightman.svg',
    order: 1,
  },
  {
    slug: 'jason',
    name: 'Jason',
    gender: 'male',
    city: { en: 'Melbourne', zh: '墨尔本' },
    tags: ['AI Build', 'Principal', 'LLM'],
    profile: {
      en: 'Principal AI Engineer with 10+ large-scale AI projects delivered end-to-end — takes architectural ownership and ships to production, not just prototypes.',
      zh: 'Principal AI Engineer，已交付 10+ 个大型 AI 项目——从架构负责到生产上线，不止停在 demo 阶段。',
    },
    highlights: {
      en: [
        '10+ large-scale enterprise AI projects shipped',
        'Agent system architecture & orchestration',
        'End-to-end delivery ownership',
        'Principal-level decision making on AI engineering',
      ],
      zh: [
        '10+ 个大型企业 AI 项目已上线',
        'Agent 系统架构与编排',
        '端到端交付负责制',
        'AI 工程 Principal 级决策能力',
      ],
    },
    rates: [{ unit: 'day', value: 2000 }],
    avatar: '/consultants/jason.svg',
    order: 2,
  },
  {
    slug: 'chris',
    name: 'Chris',
    gender: 'male',
    city: { en: 'Melbourne', zh: '墨尔本' },
    tags: ['Web3', 'FinTech', 'Product'],
    profile: {
      en: '10+ years in product and engineering. Founded and commercialised a SaaS platform from 0 to 1; later led growth-systems frontend at ByteDance E-commerce (Douyin).',
      zh: '10+ 年产品研发经验。曾独立创立 SaaS 平台完成从 0 到 1 商业化；后任字节跳动电商（抖店）核心成长体系前端负责人。',
    },
    highlights: {
      en: [
        'Ex-ByteDance E-commerce (Douyin) platform',
        'Founded and shipped a SaaS platform to commercialisation',
        'Web3 × FinTech specialist since 2019',
        'Blockchain payments + asset tokenization delivery',
      ],
      zh: [
        '前字节跳动电商（抖店）平台',
        '独立创立 SaaS 平台并完成商业化',
        '2019 年起深耕 Web3 × 金融科技',
        '主导区块链支付与资产代币化项目',
      ],
    },
    rates: [{ unit: 'hour', value: 300 }],
    avatar: '/consultants/chris.svg',
    order: 3,
  },
  {
    slug: 'jojo',
    name: 'Jojo',
    gender: 'female',
    city: { en: 'Perth', zh: '珀斯' },
    tags: ['BA', 'AI Adoption'],
    profile: {
      en: 'AI consultant trusted by non-technical industries. BA and data analytics foundation; delivers automation and CX upgrades that non-tech teams can actually run without you in the room.',
      zh: '专门服务非技术行业的 AI 顾问。BA + 数据分析背景扎实，交付的自动化与客户体验方案是"非技术团队自己就能跑起来"的那种。',
    },
    highlights: {
      en: [
        'SQL · Tableau · WordPress · AI workflows',
        'Stakeholder communication + process mapping',
        'Bridges business needs and technical delivery',
      ],
      zh: [
        'SQL / Tableau / WordPress / AI 工作流',
        '需求梳理 + 流程设计',
        '业务需求与技术交付之间的桥梁',
      ],
    },
    rates: [{ unit: 'hour', value: 128 }],
    avatar: '/consultants/jojo.svg',
    order: 4,
  },
  {
    slug: 'kevin',
    name: 'Kevin',
    gender: 'male',
    city: { en: 'Canberra', zh: '堪培拉' },
    tags: ['Cyber Security', 'BA', 'AI Adoption'],
    profile: {
      en: 'Cybersecurity professional combining software engineering, network engineering, and BA experience. Microsoft SC-200 and Google Cybersecurity Professional certified.',
      zh: '跨软件 + 网络工程 + BA 多面手的网络安全专家。持 Microsoft SC-200 与 Google Cybersecurity Professional 两项认证。',
    },
    highlights: {
      en: [
        'Microsoft SC-200 certified',
        'Google Cybersecurity Professional certified',
        'Software + network engineering foundation',
        'Translates business requirements into secure systems',
      ],
      zh: [
        'Microsoft SC-200 认证',
        'Google Cybersecurity Professional 认证',
        '软件 + 网络工程技术底子',
        '擅长把业务需求翻成可落地的安全方案',
      ],
    },
    rates: [{ unit: 'hour', value: 120 }],
    avatar: '/consultants/kevin.svg',
    order: 5,
  },
  {
    slug: 'dexter',
    name: 'Dexter',
    gender: 'male',
    city: { en: 'Melbourne', zh: '墨尔本' },
    tags: ['IT Support', 'Non-tech Industries'],
    profile: {
      en: '3–5 years of IT support delivered exclusively to non-tech sectors — real estate, legal, and healthcare clients rely on him for fast response and clear communication.',
      zh: '3–5 年专门服务非 IT 行业的 IT 支持老手——房地产、律所、医疗客户看重他的响应速度与清晰沟通。',
    },
    highlights: {
      en: [
        'CompTIA A+ certified',
        'Microsoft 365 + Google Workspace rollouts',
        'Windows / macOS maintenance & hardware setup',
        'Plain-language communication with non-tech clients',
      ],
      zh: [
        'CompTIA A+ 认证',
        'Microsoft 365 + Google Workspace 部署',
        'Windows / macOS 维护 + 硬件配置',
        '与非技术客户沟通用"人话"而非术语',
      ],
    },
    rates: [{ unit: 'hour', value: 87 }],
    avatar: '/consultants/dexter.svg',
    order: 6,
  },
  {
    slug: 'rick',
    name: 'Rick',
    gender: 'male',
    city: { en: 'Sydney', zh: '悉尼' },
    tags: ['LLM', 'AI Engineer'],
    profile: {
      en: 'Founding AI Engineer at one AI startup; concurrently Senior AI Engineer at another. Ships frontier LLM capabilities as production-grade systems, not demos.',
      zh: '一家 AI 创业公司的创始 AI 工程师，同时兼任另一家 AI 公司的资深 AI 工程师。把前沿 LLM 能力做成生产级系统，不停在 demo 阶段。',
    },
    highlights: {
      en: [
        'Founding-level AI engineer role',
        'Dual role across two AI startups',
        'LLM · Web systems · AWS deployment',
        'Translates frontier AI for non-technical clients',
      ],
      zh: [
        '创始级 AI 工程师角色',
        '同时在两家 AI 公司任职',
        'LLM · Web 系统 · AWS 部署',
        '擅长把前沿 AI 讲给非技术客户听',
      ],
    },
    rates: [{ unit: 'hour', value: 83 }],
    avatar: '/consultants/rick.svg',
    order: 7,
  },
  {
    slug: 'shawn',
    name: 'Shawn',
    gender: 'male',
    city: { en: 'Melbourne', zh: '墨尔本' },
    tags: ['Cloud', 'DevOps', 'AWS'],
    profile: {
      en: 'Cloud/DevOps engineer at an AWS Premier Partner with 3+ years on production cloud infrastructure. Holds three AWS Associate certifications plus Azure Fundamentals.',
      zh: 'AWS Premier Partner 合作伙伴公司的 Cloud / DevOps 工程师，3+ 年生产级云基础设施经验。持 3 项 AWS Associate 与 Azure Fundamentals 认证。',
    },
    highlights: {
      en: [
        'AWS Premier Partner — large-scale production infra',
        '3× AWS Associate (SA · Developer · SysOps)',
        'Azure Fundamentals certified',
        'Terraform · AWS CDK · GitHub Actions · Python',
      ],
      zh: [
        'AWS Premier Partner 合作方——大规模生产基础设施',
        '3 项 AWS Associate 认证（SA / Developer / SysOps）',
        'Azure Fundamentals 认证',
        'Terraform · AWS CDK · GitHub Actions · Python',
      ],
    },
    rates: [{ unit: 'hour', value: 75 }],
    avatar: '/consultants/shawn.svg',
    order: 8,
  },
  {
    slug: 'devin',
    name: 'Devin',
    gender: 'male',
    city: { en: 'Melbourne', zh: '墨尔本' },
    tags: ['DevOps', 'IT Support'],
    profile: {
      en: 'DevOps and IT support engineer with hands-on production experience deploying OpenClaw and Hermes Agent — not textbook knowledge.',
      zh: 'DevOps / IT Support 工程师，具备一手的 OpenClaw 与 Hermes Agent 生产部署经验——不是纸上谈兵。',
    },
    highlights: {
      en: [
        'Hands-on OpenClaw deployment',
        'Hermes Agent installation & tuning',
        'DevOps + IT support dual stack',
      ],
      zh: [
        'OpenClaw 部署实战经验',
        'Hermes Agent 安装与调优',
        'DevOps + IT Support 双栈',
      ],
    },
    rates: [{ unit: 'hour', value: 68 }],
    avatar: '/consultants/devin.svg',
    order: 9,
  },
  {
    slug: 'andrew',
    name: 'Andrew',
    gender: 'male',
    city: { en: 'Melbourne', zh: '墨尔本' },
    tags: ['DevOps', 'Automation'],
    profile: {
      en: 'DevOps engineer who turns technical complexity into operational efficiency. Pairs Python/C# automation with Azure, AWS, and Terraform infrastructure for secure, cost-efficient systems.',
      zh: '把技术复杂度转化为运营效率的 DevOps 工程师。Python / C# 自动化搭配 Azure / AWS / Terraform 基础设施，交付安全、低成本、可维护的系统。',
    },
    highlights: {
      en: [
        'Python + C# custom automation',
        'Azure · AWS · Terraform infrastructure',
        'Docker containerization & Infrastructure-as-Code',
        'Secure, cost-efficient system design',
      ],
      zh: [
        'Python + C# 自动化开发',
        'Azure · AWS · Terraform 基础设施',
        'Docker 容器化 + IaC 实践',
        '安全、低成本、可维护的系统设计',
      ],
    },
    rates: [{ unit: 'hour', value: 60 }],
    avatar: '/consultants/andrew.svg',
    order: 10,
  },
  {
    slug: 'eric-ye',
    name: 'Eric Ye',
    gender: 'male',
    city: { en: 'Brisbane', zh: '布里斯班' },
    tags: ['Full-stack', 'AWS'],
    profile: {
      en: 'Full-stack software engineer who owns web applications from prototype to production deployment on AWS — frontend, backend, infra, all of it.',
      zh: '全栈软件工程师，Web 应用从原型到 AWS 上线全程负责——前端、后端、部署，全都做。',
    },
    highlights: {
      en: [
        'React · Next.js · TypeScript',
        'Node.js · .NET · AWS (S3 / EC2 / Lambda)',
        'Full frontend + backend + deployment ownership',
      ],
      zh: [
        'React · Next.js · TypeScript',
        'Node.js · .NET · AWS (S3 / EC2 / Lambda)',
        '前后端 + 部署全流程负责',
      ],
    },
    rates: [{ unit: 'hour', value: 60 }],
    avatar: '/consultants/eric-ye.svg',
    order: 11,
  },
  {
    slug: 'fengyan-shi',
    name: 'Fengyan Shi',
    gender: 'female',
    city: { en: 'Melbourne', zh: '墨尔本' },
    tags: ['Windows', 'OpenClaw'],
    profile: {
      en: 'Monash PhD in Chemical Engineering who moved into tech — brings research-grade rigour to Windows systems and OpenClaw deployments. Built production pipelines from scratch.',
      zh: 'Monash 化工博士转技术路线，把学术级严谨带进 Windows 系统与 OpenClaw 落地工作。从零搭建过多个生产级流水线。',
    },
    highlights: {
      en: [
        'Monash PhD, Chemical Engineering',
        'Built Docker + WSL2 OpenClaw deployment from scratch',
        'CDP browser automation + multi-agent architecture',
        'Shipped XiaoHongshu auto-publishing pipeline',
      ],
      zh: [
        'Monash 化工博士',
        '从零搭建 Docker + WSL2 OpenClaw 本地部署',
        'CDP 浏览器自动化 + 多 Agent 架构',
        '实战过小红书自动发布流水线',
      ],
    },
    rates: [{ unit: 'hour', value: 53 }],
    avatar: '/consultants/fengyan-shi.svg',
    order: 12,
  },
  {
    slug: 'alex-liu',
    name: 'Alex Liu',
    gender: 'male',
    city: { en: 'Melbourne', zh: '墨尔本' },
    tags: ['Full-stack', 'AI Tools'],
    profile: {
      en: 'Full-stack engineer at an AI startup, specialising in practical AI tools that non-technical teams can actually run day to day.',
      zh: 'AI 创业公司全栈工程师，专门做"非技术团队每天能用起来"的实用 AI 工具。',
    },
    highlights: {
      en: [
        'Full-stack engineer · AI startup',
        'React · Node.js · AWS architecture',
        'OpenClaw + Claude Code AI-assisted development',
      ],
      zh: [
        '全栈工程师 · AI 创业公司',
        'React · Node.js · AWS 架构',
        'OpenClaw + Claude Code AI 辅助开发',
      ],
    },
    rates: [{ unit: 'hour', value: 53 }],
    avatar: '/consultants/alex-liu.svg',
    order: 13,
  },
  {
    slug: 'miro',
    name: 'Miro',
    gender: 'female',
    city: { en: 'Sydney', zh: '悉尼' },
    tags: ['Cybersecurity', 'DevOps'],
    profile: {
      en: 'Cyber Operations Analyst at a local Australian company. Security-first mindset, patient communicator, and detail-oriented by default — the three qualities that matter most in day-to-day cyber work.',
      zh: '澳洲本地公司 Cyber Operations Analyst。安全意识贯穿日常工作、沟通耐心、注重细节——这三点在安全工作中最关键。',
    },
    highlights: {
      en: [
        'Hands-on Cyber Operations role in production',
        'Web maintenance + account troubleshooting',
        'Working knowledge of DevOps & web development',
        'Patient, detail-oriented communicator',
      ],
      zh: [
        '澳洲本地 Cyber Operations 一线岗位',
        '网站维护 + 账号排障',
        '兼修 DevOps 与 Web 开发',
        '沟通耐心、注重细节',
      ],
    },
    rates: [{ unit: 'hour', value: 53 }],
    avatar: '/consultants/miro.svg',
    order: 14,
  },
  {
    slug: 'paco',
    name: 'Paco',
    gender: 'male',
    city: { en: 'Adelaide', zh: '阿德莱德' },
    tags: ['Full-stack', 'AI'],
    profile: {
      en: 'Full-stack developer at an AI-focused company. Takes ownership from design through to cloud deployment — React/Next.js frontend, NestJS backend, automation that sticks.',
      zh: '全栈开发者，当前任职于 AI 创业公司。从设计到云端部署全流程负责——React/Next.js 前端、NestJS 后端，交付能长期运行的自动化系统。',
    },
    highlights: {
      en: [
        'Full-stack · AI-focused company',
        'React · Next.js · Node.js · NestJS',
        'Cloud deployment + system integration',
        'AI customer service automation',
      ],
      zh: [
        'AI 公司全栈工程师',
        'React · Next.js · Node.js · NestJS',
        '云端部署 + 系统集成',
        'AI 客户服务自动化',
      ],
    },
    rates: [{ unit: 'hour', value: 45 }],
    avatar: '/consultants/paco.svg',
    order: 15,
  },
  {
    slug: 'elliott-jing',
    name: 'Elliott Jing',
    gender: 'male',
    city: { en: 'Adelaide', zh: '阿德莱德' },
    tags: ['Full-stack', 'AWS', 'GIS'],
    profile: {
      en: 'Full-stack and GIS developer holding AWS Certified Solutions Architect – Professional — one of AWS\'s most demanding credentials.',
      zh: '全栈 + GIS 开发者，持 AWS Certified Solutions Architect – Professional 认证——AWS 体系里最难拿的认证之一。',
    },
    highlights: {
      en: [
        'AWS Solutions Architect – Professional',
        'Full-stack across TypeScript, JavaScript, Python, Golang',
        'GIS expertise layered on top of cloud',
      ],
      zh: [
        'AWS Solutions Architect – Professional 认证',
        '全栈：TypeScript / JavaScript / Python / Golang',
        '云端基础 + GIS 专业能力',
      ],
    },
    rates: [{ unit: 'hour', value: 45 }],
    avatar: '/consultants/elliott-jing.svg',
    order: 16,
  },
];
