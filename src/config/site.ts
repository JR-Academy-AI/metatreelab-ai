/**
 * Metatree Lab — Global site config
 * Single source of truth for brand info, contact, and locales.
 */

export const siteConfig = {
  name: 'Metatree Lab',

  tagline: {
    en: 'AI consulting that ships to production.',
    zh: '落地型 AI 咨询。',
  },

  description: {
    en: 'AI consulting and digital studio. We help companies ship production AI — from RAG and autonomous agents to Claude Code rollouts and OpenClaw automation.',
    zh: 'AI 咨询与 Digital Studio。帮企业落地生产级 AI — 从 RAG 和自主 Agent 到 Claude Code 团队落地和 OpenClaw 自动化。',
  },

  url: 'https://metatreelab.ai',
  repo: 'https://github.com/JR-Academy-AI/metatreelab-ai',

  parent: {
    name: 'JR Academy',
    nameZh: '匠人学院',
    url: 'https://jiangren.com.au',
    yearsInProduction: 5,
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
    linkedin: 'https://linkedin.com/school/jr-academy',
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
