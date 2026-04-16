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
      en: 'Founder of Metatree Lab and JR Academy. Product + engineering background, focused on enterprise AI adoption and Chinese-speaking tech education.',
      zh: 'Metatree Lab 与 JR Academy 创始人。AI 产品 + 工程双背景，长期深耕企业 AI 落地与华人技术教育。',
    },
    highlights: {
      en: [
        'Founded JR Academy — AI education for Chinese-speaking developers',
        'Led multiple 0→1 ventures across AI, education, and property',
        'Bridges Chinese and English-speaking markets',
      ],
      zh: [
        '创立 JR Academy，华人开发者 AI 教育品牌',
        '主导过多个 0→1 AI × 教育 × 房产项目',
        '中英文市场双向沟通能力',
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
      en: 'Principal AI Engineer with a portfolio of enterprise AI engineering projects — owning the path from architecture to production.',
      zh: 'Principal AI Engineer，主导过多个企业级 AI engineering 项目，负责从架构设计到生产落地的全流程。',
    },
    highlights: {
      en: [
        'LLM applications at scale',
        'Agent system architecture & orchestration',
        'End-to-end ownership of AI delivery',
      ],
      zh: [
        '规模化 LLM 应用工程',
        'Agent 系统架构与编排',
        'AI 项目端到端交付负责制',
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
      en: '10+ years in product & engineering. Founded a SaaS platform through full productization, then led growth-systems frontend at ByteDance E-commerce.',
      zh: '10+ 年产品研发经验。曾创立 SaaS 平台完成从 0 到 1 商业化，后在字节跳动电商负责核心成长体系前端。',
    },
    highlights: {
      en: [
        'Web3 × FinTech specialisation since 2019',
        'Blockchain payments + asset tokenization projects',
        'ByteDance e-commerce (Douyin) platform experience',
      ],
      zh: [
        '2019 年起深耕 Web3 × 金融科技',
        '主导区块链支付与资产代币化项目',
        '字节跳动抖店电商平台经验',
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
      en: 'AI consultant with a BA + data analytics background. Helps non-technical industries turn workflows into AI-powered automation and better customer experience.',
      zh: 'AI 顾问，BA + 数据分析背景。擅长用 AI 帮非技术行业做流程自动化与客户体验升级。',
    },
    highlights: {
      en: [
        'Previously at Chemist Warehouse (pharmacy retail)',
        'SQL · Tableau · WordPress · AI workflows',
        'Requirements gathering + process mapping',
      ],
      zh: [
        '曾任职 Chemist Warehouse（零售药房）',
        'SQL / Tableau / WordPress / AI 工作流',
        '需求梳理 + 流程设计',
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
      en: 'Cybersecurity specialist with software and network engineering roots and BA experience. Translates business requirements into secure, practical systems.',
      zh: '网络安全专家，软件与网络工程出身，做过 BA。擅长把业务需求翻译成可落地的安全方案。',
    },
    highlights: {
      en: [
        'Microsoft SC-200 certified',
        'Google Cybersecurity Professional certified',
        'Software + network engineering foundation',
      ],
      zh: [
        'Microsoft SC-200 认证',
        'Google 网络安全专业认证',
        '软件 + 网络工程技术底子',
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
      en: 'IT support specialist (3–5 yrs) serving non-tech clients — real estate, law, and healthcare. Turns complex tech into simple solutions.',
      zh: 'IT 技术支持专家，3–5 年经验，主力服务房地产、律所、医疗等非 IT 行业。擅长把复杂的技术问题转化成简单易懂的解决方案。',
    },
    highlights: {
      en: [
        'Windows / macOS maintenance',
        'Network troubleshooting & hardware setup',
        'M365 + Google Workspace rollouts',
        'CompTIA A+ certified',
      ],
      zh: [
        'Windows / macOS 系统维护',
        '网络排障 + 硬件配置',
        'M365 + Google Workspace 部署',
        'CompTIA A+ 认证',
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
      en: 'Founding AI Engineer at JobPin AI and Senior AI Engineer at Omega AI. Turns frontier LLM capabilities into enterprise-grade systems.',
      zh: 'JobPin AI 创始 AI 工程师 + Omega AI 资深 AI 工程师。把前沿 LLM 能力工程化为企业可用系统。',
    },
    highlights: {
      en: [
        'LLM application engineering',
        'Web system development',
        'AWS deployment & operations',
        'Strong non-technical client communication',
      ],
      zh: [
        'LLM 应用工程化',
        'Web 系统开发',
        'AWS 云端部署与运维',
        '非技术客户沟通能力强',
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
      en: 'Cloud/DevOps engineer at an AWS Premier Partner (3+ yrs). Builds and maintains cloud-native infra for large-scale environments.',
      zh: 'Cloud / DevOps 工程师，任职 AWS Premier Partner，3+ 年云基础设施经验。',
    },
    highlights: {
      en: [
        'Terraform · AWS CDK · CloudFormation',
        'GitHub Actions · Python (boto3) · Bash',
        '3× AWS Associate + Azure Fundamentals',
        'Cost optimisation & infra automation',
      ],
      zh: [
        'Terraform / AWS CDK / CloudFormation',
        'GitHub Actions · Python (boto3) · Bash',
        '3 项 AWS Associate + Azure Fundamentals',
        '成本优化与基础设施自动化',
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
      en: 'DevOps and IT support engineer (Monash Master in DevOps). Hands-on, delivery-focused.',
      zh: 'DevOps / IT Support 工程师，Monash DevOps 硕士。动手能力强，注重落地。',
    },
    highlights: {
      en: [
        'First-hand OpenClaw deployment experience',
        'Hermes Agent installation & tuning',
        'IT support + DevOps dual stack',
      ],
      zh: [
        '一手的 OpenClaw 部署经验',
        'Hermes Agent 安装与调优',
        'IT Support + DevOps 双栈',
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
      en: 'DevOps engineer (Swinburne CS). Turns technical complexity into business efficiency.',
      zh: 'DevOps 工程师，Swinburne 本科计算机。擅长把技术复杂度转化为业务效率。',
    },
    highlights: {
      en: [
        'Python + C# custom automation',
        'Azure · AWS · Terraform infra',
        'Docker containerization & IaC patterns',
        'Focus on secure, cost-efficient systems',
      ],
      zh: [
        'Python + C# 自动化开发',
        'Azure / AWS / Terraform 基础设施',
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
      en: 'Full-stack software engineer (UNSW Master of IT). Ships web applications end-to-end — prototype to production.',
      zh: '全栈软件工程师，UNSW IT 硕士。擅长 Web 应用的端到端交付——从原型到上线。',
    },
    highlights: {
      en: [
        'React · Next.js · TypeScript',
        'Node.js · .NET',
        'AWS S3 / EC2 / Lambda',
        'Full frontend + backend + deployment ownership',
      ],
      zh: [
        'React / Next.js / TypeScript',
        'Node.js / .NET',
        'AWS S3 / EC2 / Lambda',
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
      en: 'Windows systems specialist and OpenClaw practitioner (Monash PhD, Chemical Engineering → tech).',
      zh: 'Windows 系统与 OpenClaw 落地专家，Monash 化工博士转技术路线。',
    },
    highlights: {
      en: [
        'Docker + WSL2 local deployment from scratch',
        'CDP browser automation',
        'Multi-agent architecture design',
        'XiaoHongshu publishing workflow automation',
      ],
      zh: [
        'Docker + WSL2 本地部署从零搭建',
        'CDP 浏览器自动化',
        '多 Agent 架构设计',
        '小红书自动发布流水线',
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
      en: 'Full-stack engineer at JobPin AI (Monash M.AI). Builds practical AI tools for real workflows.',
      zh: 'JobPin AI 全栈工程师，Monash AI 硕士。擅长把 AI 做成能真正用起来的办公小工具。',
    },
    highlights: {
      en: [
        'React · Node.js · AWS architecture',
        'OpenClaw + Claude Code AI-assisted dev',
        'Automation of repetitive document work',
        'Practical AI for non-technical teams',
      ],
      zh: [
        'React / Node.js / AWS 架构',
        'OpenClaw + Claude Code AI 辅助开发',
        '自动化繁琐文档处理',
        '面向非技术团队的实用 AI 工具',
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
      en: 'Cyber Operations Analyst at a local company (WSU Master in ICT Cybersecurity). Security-first mindset.',
      zh: 'Cyber Operations Analyst，西悉尼大学网络安全硕士。日常工作以安全意识为核心。',
    },
    highlights: {
      en: [
        'Web maintenance + account troubleshooting',
        'Workflow optimisation',
        'Basic DevOps & web development',
        'Patient, detail-oriented communicator',
      ],
      zh: [
        '网站维护 + 账号排障',
        '工作流优化',
        'DevOps 与 Web 开发基础',
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
      en: 'Full-stack developer at an AI-focused company. Delivers end-to-end from design to deployment.',
      zh: 'AI 公司全栈工程师。擅长从设计到上线的端到端交付。',
    },
    highlights: {
      en: [
        'React · Next.js · Node.js · NestJS',
        'Cloud deployment + system integration',
        'AI customer service automation',
        'Production-ready workflow focus',
      ],
      zh: [
        'React / Next.js / Node.js / NestJS',
        '云端部署 + 系统集成',
        'AI 客户服务自动化',
        '可落地的生产级流程',
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
      en: 'Full-stack and GIS developer (Uni of Adelaide, CS). Multi-language, cloud-native stack.',
      zh: '全栈 + GIS 工程师，阿德莱德大学计算机科学。多语言、云原生技术栈。',
    },
    highlights: {
      en: [
        'AWS · TypeScript · JavaScript',
        'Python · Golang',
        'AWS Certified Solutions Architect – Professional',
      ],
      zh: [
        'AWS / TypeScript / JavaScript',
        'Python / Golang',
        'AWS Solutions Architect – Professional 认证',
      ],
    },
    rates: [{ unit: 'hour', value: 45 }],
    avatar: '/consultants/elliott-jing.svg',
    order: 16,
  },
];
