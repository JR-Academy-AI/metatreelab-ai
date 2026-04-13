/**
 * Quote Calculator — modular pricing for non-technical users.
 *
 * Structure:
 * 1. Project scope (pages) — single select
 * 2. Design level — single select
 * 3. Essential features — multi-select, things most sites need
 * 4. Growth features — multi-select, for lead gen and engagement
 * 5. Advanced features — multi-select, serious functionality
 * 6. AI superpowers — multi-select
 * 7. Launch & support — multi-select
 *
 * Every item has a benefit-oriented description written for
 * non-technical business owners, not developers.
 *
 * Prices in AUD.
 */

export interface PricingItem {
  id: string;
  price: number;
  label: { en: string; zh: string };
  benefit: { en: string; zh: string };
}

export interface PricingCategory {
  id: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  selectionMode: 'single' | 'multiple';
  items: PricingItem[];
}

/* ──────────────────────────────────────────────
 * 1. Project Scope — how big is your website?
 * ────────────────────────────────────────────── */
export const projectScope: PricingCategory = {
  id: 'scope',
  title: {
    en: 'How big is your website?',
    zh: '你的网站有多大？',
  },
  subtitle: {
    en: 'Choose the size that fits your needs. You can always add more pages later.',
    zh: '选择适合你的规模。之后随时可以加页面。',
  },
  selectionMode: 'single',
  items: [
    {
      id: 'single-page',
      price: 800,
      label: {
        en: 'Single Page',
        zh: '单页网站',
      },
      benefit: {
        en: 'One long scrolling page with all your key info. Great for a product launch, event, or personal brand.',
        zh: '一个长滚动页面，展示所有关键信息。适合产品发布、活动或个人品牌。',
      },
    },
    {
      id: '3-pages',
      price: 1500,
      label: {
        en: '3 Pages',
        zh: '3 页网站',
      },
      benefit: {
        en: 'Typically: Home + About + Contact. Enough for a simple business presence.',
        zh: '通常：首页 + 关于 + 联系。满足简单企业展示需求。',
      },
    },
    {
      id: '5-pages',
      price: 2500,
      label: {
        en: '5 Pages',
        zh: '5 页网站',
      },
      benefit: {
        en: 'The sweet spot. Home, About, Services, Portfolio, Contact — a complete small business site.',
        zh: '黄金搭配。首页、关于、服务、案例、联系 — 一个完整的中小企业网站。',
      },
    },
    {
      id: '8-pages',
      price: 4000,
      label: {
        en: '8 Pages',
        zh: '8 页网站',
      },
      benefit: {
        en: 'Room for dedicated service pages, team bios, FAQs, and more. For businesses with diverse offerings.',
        zh: '有空间放独立的服务页、团队介绍、FAQ 等。适合业务类型丰富的企业。',
      },
    },
    {
      id: '12-pages',
      price: 6000,
      label: {
        en: '12+ Pages',
        zh: '12+ 页网站',
      },
      benefit: {
        en: 'A full corporate site. Multiple service lines, case studies, blog, careers — everything you need.',
        zh: '完整企业站。多条业务线、案例研究、博客、招聘 — 你需要的一切。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 2. Design Level — how should it look?
 * ────────────────────────────────────────────── */
export const designLevel: PricingCategory = {
  id: 'design',
  title: {
    en: 'How should it look?',
    zh: '你想要什么样的设计？',
  },
  subtitle: {
    en: 'All options are mobile-friendly and professional. Pick the level of uniqueness you want.',
    zh: '所有选项都适配手机且专业。选择你想要的个性化程度。',
  },
  selectionMode: 'single',
  items: [
    {
      id: 'standard',
      price: 0,
      label: {
        en: 'Standard Template',
        zh: '标准模板',
      },
      benefit: {
        en: 'Clean, modern template adapted to your brand colours and content. Looks great, ships fast. Included in base price.',
        zh: '干净、现代的模板，适配你的品牌色和内容。好看又快速上线。含在基础价格内。',
      },
    },
    {
      id: 'custom',
      price: 3000,
      label: {
        en: 'Custom Design',
        zh: '定制设计',
      },
      benefit: {
        en: 'A unique look designed from scratch just for you. Includes wireframes, mockups, and revisions until you love it.',
        zh: '从零为你设计的独特外观。包含线框图、设计稿，改到你满意为止。',
      },
    },
    {
      id: 'premium',
      price: 6000,
      label: {
        en: 'Premium Brand Design',
        zh: '高端品牌设计',
      },
      benefit: {
        en: 'The full package: logo, colour system, typography, brand guidelines, plus a bespoke website design that makes you stand out from competitors.',
        zh: '全套服务：Logo、色彩体系、字体、品牌规范，加上让你从竞品中脱颖而出的定制网站设计。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 3. Essentials — things most websites need
 * ────────────────────────────────────────────── */
export const essentials: PricingCategory = {
  id: 'essentials',
  title: {
    en: 'Essentials',
    zh: '基础必备',
  },
  subtitle: {
    en: 'The basics that every good website should have.',
    zh: '每个好网站都应该具备的基础功能。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'contact-form',
      price: 300,
      label: {
        en: 'Contact Form',
        zh: '联系表单',
      },
      benefit: {
        en: "Visitors fill in their name, email and message — you get it straight in your inbox. The simplest way to get enquiries from your website.",
        zh: '访客填写姓名、邮箱和留言，你直接在邮箱收到。从网站获取咨询的最简单方式。',
      },
    },
    {
      id: 'seo',
      price: 1500,
      label: {
        en: 'Google SEO Setup',
        zh: 'Google SEO 优化',
      },
      benefit: {
        en: "Get found when people search for your business on Google. We set up page titles, descriptions, site maps, and speed optimisation so Google ranks you higher.",
        zh: '当人们在 Google 搜索你的业务时能找到你。我们配置页面标题、描述、站点地图和速度优化，让 Google 给你更高排名。',
      },
    },
    {
      id: 'analytics',
      price: 500,
      label: {
        en: 'Visitor Analytics',
        zh: '访客统计',
      },
      benefit: {
        en: "See how many people visit your site, where they come from, and which pages they look at — so you know what's working and what isn't.",
        zh: '看到多少人访问你的网站、从哪里来、看了哪些页面 — 知道什么有效、什么需要改进。',
      },
    },
    {
      id: 'mobile',
      price: 800,
      label: {
        en: 'Mobile & Tablet Optimisation',
        zh: '手机和平板适配',
      },
      benefit: {
        en: "Over 60% of visitors browse on their phones. We make sure your site looks perfect on every screen size — not just desktop.",
        zh: '超过 60% 的访客用手机浏览。我们确保你的网站在每种屏幕上都完美展示 — 不只是电脑。',
      },
    },
    {
      id: 'maps',
      price: 200,
      label: {
        en: 'Google Maps Location',
        zh: 'Google 地图定位',
      },
      benefit: {
        en: "Show your business on an interactive map so customers can find your office, shop, or restaurant easily.",
        zh: '在互动地图上展示你的位置，方便客户找到你的办公室、店铺或餐厅。',
      },
    },
    {
      id: 'social-links',
      price: 200,
      label: {
        en: 'Social Media Links',
        zh: '社交媒体链接',
      },
      benefit: {
        en: "Connect your Instagram, Facebook, LinkedIn, WeChat, and other social accounts — so visitors can follow you everywhere.",
        zh: '关联你的 Instagram、Facebook、LinkedIn、微信等社交账号 — 让访客在各平台关注你。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 4. Growth — get more customers
 * ────────────────────────────────────────────── */
export const growth: PricingCategory = {
  id: 'growth',
  title: {
    en: 'Get More Customers',
    zh: '获取更多客户',
  },
  subtitle: {
    en: 'Features that help you capture leads, build an audience, and grow your business.',
    zh: '帮你获取线索、积累受众、发展业务的功能。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'newsletter',
      price: 400,
      label: {
        en: 'Newsletter / Email Signup',
        zh: '邮件订阅 / Newsletter',
      },
      benefit: {
        en: "Collect email addresses from interested visitors. Build a mailing list to send updates, promotions, and keep your brand top-of-mind.",
        zh: '收集感兴趣访客的邮箱地址。建立邮件列表，发送更新、促销信息，让客户始终记得你。',
      },
    },
    {
      id: 'live-chat',
      price: 800,
      label: {
        en: 'Live Chat Widget',
        zh: '在线客服聊天',
      },
      benefit: {
        en: "A chat bubble on your site so visitors can ask questions in real time. Reply from your phone or desktop — never miss a potential customer.",
        zh: '网站上的聊天气泡，访客可以实时提问。你用手机或电脑回复 — 不再错过潜在客户。',
      },
    },
    {
      id: 'booking',
      price: 1000,
      label: {
        en: 'Booking / Appointment Calendar',
        zh: '预约 / 日历系统',
      },
      benefit: {
        en: "Let customers pick a time and book directly on your site. No more back-and-forth emails. Syncs with your Google or Outlook calendar.",
        zh: '让客户直接在你网站上选时间预约。不再来回发邮件。同步你的 Google 或 Outlook 日历。',
      },
    },
    {
      id: 'gallery',
      price: 500,
      label: {
        en: 'Photo / Video Gallery',
        zh: '图片 / 视频展示',
      },
      benefit: {
        en: "Showcase your work, products, or projects in a beautiful visual gallery. Visitors can browse, zoom, and get inspired.",
        zh: '在精美的视觉展廊中展示你的作品、产品或项目。访客可以浏览、放大，获得灵感。',
      },
    },
    {
      id: 'testimonials',
      price: 400,
      label: {
        en: 'Customer Reviews / Testimonials',
        zh: '客户评价 / 推荐',
      },
      benefit: {
        en: "Display what your happy customers say about you. Social proof is the #1 factor that convinces new visitors to trust you.",
        zh: '展示你满意客户的评价。社会认同是说服新访客信任你的第一要素。',
      },
    },
    {
      id: 'blog',
      price: 1500,
      label: {
        en: 'Blog / News Section',
        zh: '博客 / 新闻版块',
      },
      benefit: {
        en: "Publish articles and updates. Keeps your site fresh, improves Google rankings, and positions you as an industry expert.",
        zh: '发布文章和动态。保持网站活跃、提高 Google 排名，树立行业专家形象。',
      },
    },
    {
      id: 'bilingual',
      price: 2000,
      label: {
        en: 'Multi-language (EN + ZH)',
        zh: '多语言（中文 + 英文）',
      },
      benefit: {
        en: "Reach both English and Chinese-speaking audiences. Your entire site available in two languages with an easy language switcher.",
        zh: '同时覆盖中英文受众。整个网站提供双语版本，配有便捷的语言切换器。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 5. Advanced — serious business functionality
 * ────────────────────────────────────────────── */
export const advanced: PricingCategory = {
  id: 'advanced',
  title: {
    en: 'Advanced Features',
    zh: '高级功能',
  },
  subtitle: {
    en: 'For businesses that need more than a brochure site — user accounts, payments, admin tools.',
    zh: '适合需要比展示站更多功能的企业 — 用户账户、在线支付、管理工具。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'auth',
      price: 2500,
      label: {
        en: 'User Registration & Login',
        zh: '用户注册与登录',
      },
      benefit: {
        en: "Let visitors create their own account on your site. Useful for membership areas, online courses, client portals, or gated content.",
        zh: '让访客在你的网站上创建自己的账户。适用于会员区域、在线课程、客户门户或付费内容。',
      },
    },
    {
      id: 'admin',
      price: 4000,
      label: {
        en: 'Admin Dashboard',
        zh: '管理后台',
      },
      benefit: {
        en: "A control panel where you can update content, manage users, and view enquiries — without touching any code. Like a command centre for your website.",
        zh: '一个控制面板，让你更新内容、管理用户、查看咨询 — 不用碰任何代码。相当于你网站的指挥中心。',
      },
    },
    {
      id: 'payment',
      price: 3500,
      label: {
        en: 'Online Payment',
        zh: '在线支付',
      },
      benefit: {
        en: "Accept credit card, debit card, or digital wallet payments directly on your website. Secure checkout powered by Stripe — works globally.",
        zh: '直接在网站上接受信用卡、借记卡或数字钱包支付。由 Stripe 驱动的安全结账 — 全球可用。',
      },
    },
    {
      id: 'crm',
      price: 1200,
      label: {
        en: 'CRM Integration',
        zh: 'CRM 客户管理对接',
      },
      benefit: {
        en: "Every enquiry from your website automatically goes into your CRM (HubSpot, Salesforce, etc). No manual copy-pasting — your sales team gets leads instantly.",
        zh: '网站上的每条咨询自动进入你的 CRM（HubSpot、Salesforce 等）。无需手动复制 — 销售团队即时获得线索。',
      },
    },
    {
      id: 'email-notifications',
      price: 800,
      label: {
        en: 'Automated Emails',
        zh: '自动化邮件',
      },
      benefit: {
        en: "Automatic emails when someone signs up, makes a purchase, or resets a password. Professional, branded, and instant — no manual sending.",
        zh: '当有人注册、购买或重置密码时自动发邮件。专业、品牌化、即时 — 无需手动发送。',
      },
    },
    {
      id: 'search',
      price: 1500,
      label: {
        en: 'Site Search',
        zh: '站内搜索',
      },
      benefit: {
        en: "A search bar that helps visitors quickly find what they're looking for. Essential if your site has lots of content, products, or articles.",
        zh: '一个搜索栏，帮访客快速找到他们要的内容。如果你的网站有很多内容、产品或文章，这是必备功能。',
      },
    },
    {
      id: 'file-upload',
      price: 1200,
      label: {
        en: 'File Upload',
        zh: '文件上传',
      },
      benefit: {
        en: "Let users upload documents, photos, or files through your website. Useful for applications, portfolios, or support tickets.",
        zh: '让用户通过你的网站上传文档、照片或文件。适用于申请、作品集或工单提交。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 6. AI Superpowers
 * ────────────────────────────────────────────── */
export const aiPowers: PricingCategory = {
  id: 'ai',
  title: {
    en: 'AI Superpowers',
    zh: 'AI 超能力',
  },
  subtitle: {
    en: 'Make your website smarter. These features use artificial intelligence to automate work and delight customers.',
    zh: '让你的网站更聪明。这些功能用人工智能帮你自动化工作、取悦客户。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'ai-chatbot',
      price: 5000,
      label: {
        en: 'AI Customer Assistant',
        zh: 'AI 智能客服',
      },
      benefit: {
        en: "A smart chatbot that answers customer questions 24/7 — trained on your business data. It never sleeps, never forgets, and handles dozens of conversations at once.",
        zh: '一个 7x24 小时回答客户问题的智能聊天机器人 — 基于你的业务数据训练。它不休息、不忘事，同时处理几十个对话。',
      },
    },
    {
      id: 'ai-content',
      price: 2000,
      label: {
        en: 'AI Content Generation',
        zh: 'AI 内容生成',
      },
      benefit: {
        en: "Auto-generate blog posts, product descriptions, and marketing copy in your brand voice. Save hours of writing every week.",
        zh: '用你的品牌风格自动生成博客文章、产品描述和营销文案。每周省下数小时写作时间。',
      },
    },
    {
      id: 'ai-recommendations',
      price: 3000,
      label: {
        en: 'Smart Recommendations',
        zh: '智能推荐',
      },
      benefit: {
        en: "Show each visitor personalised content, products, or services based on their behaviour — like Netflix, but for your website.",
        zh: '根据每个访客的行为展示个性化的内容、产品或服务 — 像 Netflix 一样，但在你的网站上。',
      },
    },
    {
      id: 'ai-lead-scoring',
      price: 2500,
      label: {
        en: 'AI Lead Scoring',
        zh: 'AI 线索评分',
      },
      benefit: {
        en: "Automatically rank incoming leads by quality — so your sales team focuses on the ones most likely to buy, not the tyre-kickers.",
        zh: '自动按质量对进来的线索排名 — 让销售团队专注最可能成交的客户，而不是浪费时间在观望者身上。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * 7. Launch & Support
 * ────────────────────────────────────────────── */
export const launchSupport: PricingCategory = {
  id: 'support',
  title: {
    en: 'Launch & Ongoing Support',
    zh: '上线与持续支持',
  },
  subtitle: {
    en: 'Get your site live, and keep it running smoothly after launch.',
    zh: '帮你网站上线，并在上线后保持顺畅运行。',
  },
  selectionMode: 'multiple',
  items: [
    {
      id: 'hosting-setup',
      price: 500,
      label: {
        en: 'Domain & Hosting Setup',
        zh: '域名与托管配置',
      },
      benefit: {
        en: "We register your domain (yourcompany.com), set up secure hosting, SSL certificate (the lock icon), and make your site go live.",
        zh: '我们注册你的域名（yourcompany.com），配置安全托管、SSL 证书（浏览器的锁图标），让你的网站正式上线。',
      },
    },
    {
      id: 'training',
      price: 500,
      label: {
        en: 'How-to-Use Training',
        zh: '使用培训',
      },
      benefit: {
        en: "A 1-hour video call where we walk you through how to update content, manage enquiries, and use every feature of your new site.",
        zh: '一小时视频通话，手把手教你如何更新内容、管理咨询，以及使用新网站的每个功能。',
      },
    },
    {
      id: 'maintenance-monthly',
      price: 800,
      label: {
        en: 'Monthly Maintenance',
        zh: '月度维护',
      },
      benefit: {
        en: "We keep your site safe and up-to-date: security patches, bug fixes, small content updates, and uptime monitoring. You focus on your business, we handle the tech.",
        zh: '我们保持你的网站安全和最新：安全补丁、Bug 修复、小内容更新、在线率监控。你专注业务，技术的事交给我们。',
      },
    },
    {
      id: 'priority-support',
      price: 2500,
      label: {
        en: 'Priority Support',
        zh: '优先支持',
      },
      benefit: {
        en: "Dedicated support channel with 4-hour response time. Need a new feature or urgent fix? We're on it — like having your own tech team on call.",
        zh: '专属支持通道，4 小时内响应。需要新功能或紧急修复？我们随时在线 — 相当于你自己的技术团队随叫随到。',
      },
    },
  ],
};

/* ──────────────────────────────────────────────
 * All categories in display order
 * ────────────────────────────────────────────── */
export const allCategories: PricingCategory[] = [
  projectScope,
  designLevel,
  essentials,
  growth,
  advanced,
  aiPowers,
  launchSupport,
];

/** IDs of recurring (per-month) items */
export const RECURRING_IDS = new Set(['maintenance-monthly', 'priority-support']);
