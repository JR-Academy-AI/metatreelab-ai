/**
 * Project portfolio — reference cases for the Work page.
 *
 * Categories:
 * - ai-systems → AI products/infrastructure (parent company or clients)
 * - property   → Property marketing sites (real clients)
 * - brand      → Brand identity / design work
 */

export type ProjectCategory = 'ai-systems' | 'property' | 'brand';

export interface ProjectEntry {
  slug: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  featured: boolean;
  order: number;

  name: string;
  client: string;

  summary: { en: string; zh: string };
  outcomes?: { en: string[]; zh: string[] };
  stack?: string[];
  url?: string;
}

export const projects: ProjectEntry[] = [
  {
    slug: 'sigmaq',
    category: 'ai-systems',
    tags: ['AI', 'SaaS'],
    year: 2024,
    featured: true,
    order: 2,
    name: 'SigmaQ',
    client: 'JR Academy',
    summary: {
      en: 'Multi-tenant enterprise assessment SaaS with Stripe subscriptions, LMS integration via webhooks, and an anti-cheat engine. Powers certification prep for IT professionals at scale.',
      zh: '多租户企业级测评 SaaS，带 Stripe 订阅、LMS webhook 集成、防作弊引擎。规模化服务 IT 专业人士的认证备考。',
    },
    outcomes: {
      en: [
        '4-tier subscription (Free / $29 / $49 / Enterprise)',
        'Multi-tenant domain routing ({org}.sigmaq.co)',
        '93 LinkedIn skill assessments + AWS SAA-C03 library',
      ],
      zh: [
        '4 档订阅（免费 / $29 / $49 / 企业）',
        '多租户域名路由（{org}.sigmaq.co）',
        '93 个 LinkedIn 技能测评 + AWS SAA-C03 题库',
      ],
    },
    stack: ['NestJS', 'MongoDB', 'React', 'Stripe', 'AWS'],
    url: 'https://sigmaq.co',
  },
  {
    slug: 'metatown',
    category: 'ai-systems',
    tags: ['AI', 'SaaS', 'Platform'],
    year: 2025,
    featured: true,
    order: 2,
    name: 'MetaTown',
    client: 'Metatree Lab',
    cover: '/work/metatown.png',
    summary: {
      en: 'Virtual office and campus platform that turns remote collaboration into an immersive shared world. Customisable avatars, real-time spatial movement, video meetings, whiteboard, SSO — supporting 100+ users simultaneously.',
      zh: '虚拟办公与线上校园平台，把远程协作变成可沉浸的共享世界。自定义头像、实时空间移动、视频会议、白板、SSO — 支持 100+ 人同时在线。',
    },
    outcomes: {
      en: [
        'Spatial virtual world replacing grid-style video calls',
        'Real-time avatar movement with proximity-based audio/video',
        'Integrated video meetings, screen sharing, and whiteboard',
        'SSO authentication and 100+ concurrent user support',
      ],
      zh: [
        '空间虚拟世界，替代网格式视频通话',
        '实时头像移动 + 基于距离的音视频',
        '集成视频会议、屏幕共享、白板',
        'SSO 认证，支持 100+ 人同时在线',
      ],
    },
    stack: ['React', 'WebRTC', 'Canvas', 'WebSocket', 'SSO'],
    url: 'https://metatown.ai',
  },

  {
    slug: 'jobpin-ai',
    category: 'ai-systems',
    tags: ['AI', 'SaaS', 'Agent'],
    year: 2025,
    featured: true,
    order: 3,
    name: 'Jobpin AI',
    client: 'Metatree Lab',
    cover: '/work/jobpin-ai.png',
    summary: {
      en: 'AI-powered job matching platform with intelligent agent that searches across the web for hidden opportunities, auto-generates tailored resumes and cover letters, and connects candidates to insider referral networks. Trusted by 100+ companies.',
      zh: 'AI 驱动的智能求职平台。AI Agent 全网搜索隐藏岗位机会，自动生成定制简历和求职信，连接内推人脉网络。已获 100+ 企业信任。',
    },
    outcomes: {
      en: [
        'AI Job Agent scanning web + company networks for off-market roles',
        'Resume & cover letter generator tailored per JD with keyword optimization',
        'Insider referral network connecting candidates to target companies',
        'Daily personalized job recommendations with compatibility scoring',
      ],
      zh: [
        'AI Job Agent 全网 + 企业内网扫描 off-market 岗位',
        '按 JD 定制的简历和求职信生成器，带关键词优化',
        '内推人脉网络，连接候选人与目标公司',
        '每日个性化岗位推荐 + 匹配度评分',
      ],
    },
    stack: ['Next.js', 'AI Agent', 'LLM', 'RAG'],
    url: 'https://jobpin.ai',
  },

  {
    slug: 'forma-property',
    category: 'property',
    tags: ['Property', 'Web'],
    year: 2024,
    featured: true,
    order: 8,
    name: 'Forma Property',
    client: 'Forma Group',
    cover: '/work/forma-property.png',
    summary: {
      en: 'Developer group main site for a Sydney-based property firm. Editorial minimal aesthetic with commercial + residential project showcases and investor-grade positioning.',
      zh: '悉尼一家房地产开发商集团的主站。编辑级极简美学，商业 + 住宅项目集合展示，投资级品牌定位。',
    },
    outcomes: {
      en: [
        'Unified commercial & residential portfolio',
        'Investor-facing brand positioning',
        'Shipped and live in production',
      ],
      zh: [
        '商业与住宅项目统一作品集',
        '面向投资人的品牌定位',
        '已上线生产环境',
      ],
    },
    url: 'https://www.formaproperty.com.au',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectsByCategory = {
  'ai-systems': projects.filter((p) => p.category === 'ai-systems'),
  property: projects.filter((p) => p.category === 'property'),
  brand: projects.filter((p) => p.category === 'brand'),
};
