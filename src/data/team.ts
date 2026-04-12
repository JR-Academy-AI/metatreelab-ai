/**
 * Consultant profiles for the About / Team section.
 *
 * Data source: JR Academy AI instructors (stored in MongoDB,
 * accessible via /admin-cms/teachers API). Fill in real data
 * from the admin portal.
 */

export interface ConsultantEntry {
  slug: string;
  name: string;
  role: { en: string; zh: string };
  bio: { en: string; zh: string };
  specialties: string[];
  photo?: string; // /team/name.jpg
  linkedin?: string;
  order: number;
}

export const consultants: ConsultantEntry[] = [
  {
    slug: 'lightman',
    name: 'Lightman Wang',
    role: {
      en: 'Founder & AI Strategy Lead',
      zh: '创始人 & AI 战略负责人',
    },
    bio: {
      en: 'Full-stack product leader with 5+ years building AI-powered education and SaaS platforms. Leads AI strategy engagements, agent architecture design, and platform engineering for enterprise clients across Australia and APAC.',
      zh: '全栈产品负责人，5 年以上 AI 教育与 SaaS 平台建设经验。主导 AI 战略咨询、Agent 架构设计和企业级平台工程，服务澳洲和亚太客户。',
    },
    specialties: ['AI Strategy', 'Agent Architecture', 'Platform Engineering', 'Product'],
    linkedin: 'https://linkedin.com/in/lightman-wang',
    order: 1,
  },
  {
    slug: 'consultant-2',
    name: 'AI Engineering Lead',
    role: {
      en: 'Senior AI Engineer',
      zh: '资深 AI 工程师',
    },
    bio: {
      en: 'Specialises in production RAG systems, LLM evaluation frameworks, and multi-agent orchestration. Hands-on with LangChain, pgvector, Claude API, and OpenClaw deployment.',
      zh: '专注生产级 RAG 系统、LLM 评估框架和多 Agent 编排。精通 LangChain、pgvector、Claude API 和 OpenClaw 部署。',
    },
    specialties: ['RAG', 'LLM Eval', 'Agent Orchestration', 'Claude API'],
    order: 2,
  },
  {
    slug: 'consultant-3',
    name: 'Claude Cowork Specialist',
    role: {
      en: 'AI Adoption Consultant',
      zh: 'AI 落地顾问',
    },
    bio: {
      en: 'Helps engineering and product teams adopt Claude Code, Cursor, and AI-assisted workflows. Designs MCP server integrations, custom subagents, and team SOPs for maximum developer productivity.',
      zh: '帮助工程和产品团队落地 Claude Code、Cursor 和 AI 辅助工作流。设计 MCP 服务器集成、定制 subagents 和团队 SOP，最大化开发者生产力。',
    },
    specialties: ['Claude Code', 'MCP', 'Developer Productivity', 'AI Adoption'],
    order: 3,
  },
  {
    slug: 'consultant-4',
    name: 'OpenClaw Architect',
    role: {
      en: 'Automation & Agent Architect',
      zh: '自动化与 Agent 架构师',
    },
    bio: {
      en: 'Expert in self-hosted agent frameworks and workflow automation. Deploys OpenClaw on client infrastructure with custom TypeScript skills, WeChat/Feishu integration, and enterprise-grade data governance.',
      zh: '自托管 Agent 框架和工作流自动化专家。在客户基建上部署 OpenClaw，开发 TypeScript 定制 skill，集成微信/飞书，实现企业级数据治理。',
    },
    specialties: ['OpenClaw', 'n8n', 'WeChat/Feishu', 'Self-hosted'],
    order: 4,
  },
];
