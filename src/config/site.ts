/**
 * Metatree Lab — Global site config
 * Single source of truth for brand info, contact, and locales.
 */

export const siteConfig = {
  name: 'Metatree AI Lab',

  tagline: {
    en: 'Cut costs. Ship faster. AI that works.',
    zh: '降本增效，AI 真正落地。',
  },

  description: {
    en: 'We help businesses automate operations, train teams on AI, and build custom AI systems — saving time and money. Plus fast, affordable property marketing powered by AI.',
    zh: '帮企业自动化运营、培训团队使用 AI、搭建定制 AI 系统——省时省钱。同时提供 AI 驱动的快速高性价比房产营销。',
  },

  url: 'https://metatreelab.ai',
  repo: 'https://github.com/Metatree-AI-Lab/metatreelab-ai',

  parent: {
    name: 'JR Academy',
    nameZh: '匠人学院',
    url: 'https://jiangren.com.au',
    yearsInProduction: 5,
  },

  // Default byline for Insights articles — drives the visible byline and the
  // BlogPosting `author` Person (E-E-A-T). Mirrors the team.ts entry.
  author: {
    name: 'Lightman Wang',
    jobTitle: 'Founder & AI Strategy Lead',
    url: 'https://www.linkedin.com/in/lightman-wang/',
    bio: 'Full-stack product leader with 5+ years building AI-powered education and SaaS platforms. Leads AI strategy engagements, agent architecture design, and platform engineering for enterprise clients across Australia and APAC.',
    avatar: '/consultants/lightman.svg',
  },

  contact: {
    email: 'hello@jiangren.com.au',
    phone: '+61 421 672 555',
    apiUrl: 'https://api.jiangren.com.au/business-inquiry',
  },

  offices: [
    { city: 'Brisbane', address: 'Level 10b, 144 Edward Street, Brisbane QLD 4000' },
    { city: 'Melbourne', address: 'Level 2, 171 La Trobe St, Melbourne VIC 3000' },
    { city: 'Adelaide', address: 'Business Hub, 155 Waymouth St, Adelaide SA 5000' },
  ],

  social: {
    github: 'https://github.com/JR-Academy-AI',
    linkedin: 'https://www.linkedin.com/company/metatree-ai-lab',
    instagram: 'https://www.instagram.com/jracademyau/',
  },

  locales: ['en', 'zh'] as const,
  defaultLocale: 'en' as const,
} as const;

export type Locale = (typeof siteConfig.locales)[number];

export const isDefaultLocale = (locale: string): locale is 'en' =>
  locale === siteConfig.defaultLocale;

/** Prefix a path with locale when not default. '/about' -> '/zh/about/' */
export const localizedHref = (path: string, locale: Locale): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return isDefaultLocale(locale) ? normalized : `/zh${normalized}`;
};
