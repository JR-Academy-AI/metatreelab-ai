---
title: "Buy vs Build: When a Small Business Should Commission Custom AI"
description: "Off-the-shelf AI tool or custom build? A practical guide for SMB owners with real costs, timelines, and a clear threshold for when custom pays off."
pubDate: 2026-06-07
tags: ["AI strategy", "small business", "buy vs build", "custom AI"]
author: "Lightman Wang"
draft: false
---

Most AI spending decisions at small businesses come down to one question: buy a tool off the shelf or commission something built specifically for us? Get it wrong in either direction and you either pay for a SaaS subscription nobody uses, or commission a custom build that costs ten times what you expected and takes six months to deliver.

Here is the plain answer: **buy first, almost always.** Custom builds have a legitimate place — but only after you've hit a specific ceiling. Most SMBs never do.

## The case for off-the-shelf tools

The commercial AI tools available in 2026 cover the vast majority of SMB workflows. Support chat? Intercom Fin or Tidio. Receipt and invoice capture? Dext. Automated scheduling and follow-up? Zapier plus a GPT-4o integration. Document drafting? Notion AI or a lightweight setup using the Claude or OpenAI API. CRM enrichment and lead scoring? HubSpot's built-in AI features.

The cost ranges from $50 to $500/month for most of these. Setup time is days, not months. A 22-person professional services firm I worked with automated their entire quote follow-up sequence — every new proposal triggered a three-touch email series, CRM update, and task reminder — using a $180/month Zapier + GPT-4o setup. It took three weeks to configure and test. Within the quarter, they recovered 8 hours a week from their sales coordinator and closed 20% more quotes simply because nothing slipped through.

<div class="stat-row">
  <div class="stat"><b>$180/mo</b><span>total tooling cost</span></div>
  <div class="stat"><b>8 hrs/week</b><span>recovered by sales coordinator</span></div>
  <div class="stat"><b>20%</b><span>more quotes closed within one quarter</span></div>
</div>

The math is hard to beat: $2,160 a year in tooling against roughly $14,000 in recovered time. No ongoing engineering cost. No server to maintain.

## When off-the-shelf hits its ceiling

Off-the-shelf tools fail in specific, predictable ways. You'll feel it when:

<ul class="icon-list">
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"></path><line x1="12" y1="9" x2="12" y2="14"></line><line x1="12" y1="17" x2="12" y2="17.5"></line></svg>
    <span><strong>Your data is proprietary</strong> — the tool needs knowledge it can't access (your pricing logic, your product catalogue, your client history) and generic answers keep embarrassing your team.</span>
  </li>
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"></path><line x1="12" y1="9" x2="12" y2="14"></line><line x1="12" y1="17" x2="12" y2="17.5"></line></svg>
    <span><strong>The output needs constant heavy editing</strong> — if your team rewrites 80% of the AI's output every time, the tool is not actually saving time; it's just changing where the work happens.</span>
  </li>
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"></path><line x1="12" y1="9" x2="12" y2="14"></line><line x1="12" y1="17" x2="12" y2="17.5"></line></svg>
    <span><strong>You're paying for features you never use</strong> — using 20% of a platform and paying full enterprise pricing is a sign the tool was built for someone else's problem.</span>
  </li>
  <li>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"></path><line x1="12" y1="9" x2="12" y2="14"></line><line x1="12" y1="17" x2="12" y2="17.5"></line></svg>
    <span><strong>No commercial equivalent exists</strong> — you've spent 30 minutes searching and genuinely cannot find a tool that handles your specific workflow without significant manual workarounds.</span>
  </li>
</ul>

## The custom build case — when it actually makes sense

Custom AI is worth commissioning when three things are true simultaneously: the workflow is genuinely unique to your business, volume is high enough to justify it, and you can quantify at least $3,000/month in time or revenue impact from solving it.

A property marketing agency I work with needed AI to match new listings against their CRM's buyer preference data — suburb preferences, price bands, property type, even school zones — and automatically draft personalised match emails for their agents to review and send. No off-the-shelf tool does this accurately with their data structure. We built it custom: $28,000 upfront, $800/month to run. Within six months they had avoided hiring two part-time researchers, saving roughly $50,000 annually. Payback: under six months.

The key word is *simultaneously*. If volume is low, off-the-shelf is fine even if imperfect. If the workflow isn't genuinely unique, an existing tool almost certainly already solves it.

<div class="callout">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"></path></svg>
  <p>Custom AI earns its cost when annual savings exceed the build cost within 12 months. If you can't draw that line clearly before writing the cheque, buy off the shelf and revisit in six months.</p>
</div>

## The real cost of a custom build

Before you commission anything, know what you're signing up for. A realistic custom AI system for a 10-to-50-person business costs $15,000–$50,000 to build and $500–$2,000/month to run (LLM API calls, hosting, maintenance, prompt tuning). That running cost is often the surprise — it doesn't disappear when the build is done. Models update, prompts need adjusting, and edge cases surface for months after launch.

<figure class="chart">
  <figcaption>Estimated year-one cost by AI approach</figcaption>
  <div class="bar" style="--val:100%"><span class="bar-label">Custom build (mid-range)</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$50k yr 1</b></div>
  <div class="bar" style="--val:36%"><span class="bar-label">Integration + middleware</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$18k yr 1</b></div>
  <div class="bar" style="--val:8%"><span class="bar-label">Off-the-shelf SaaS</span><span class="bar-track"><span class="bar-fill"></span></span><b class="bar-value">~$4k yr 1</b></div>
</figure>

None of this means custom is wrong. It means custom requires a clear, quantified return to justify it. "It would be cool if our system could do that" is not a business case. "Solving this problem recovers $60,000 a year, and we can build it for $30,000" is.

## A quick decision framework

Before calling a developer, run through this sequence:

1. **Search the market first.** Spend 30 minutes looking. If a good-enough tool exists for under $500/month and handles 80% of your use case, start there. Don't commission what you can buy.
2. **Quantify the annual impact.** Add up hours saved × loaded hourly rate, plus any revenue gained. If the total is under $20,000/year, off-the-shelf will almost always win on economics — even imperfect off-the-shelf.
3. **Check whether the tool can learn your context.** Several off-the-shelf platforms now support custom knowledge bases, fine-tuning, or configurable workflows. If they can ingest your specific data, the gap between off-the-shelf and custom narrows considerably.
4. **Plan for maintenance before you sign.** Custom builds need owners. If no one on your team can manage a technical system, factor in an ongoing support arrangement with whoever built it — typically $300–$800/month for a small custom system.

The default stays buy first. But if the numbers genuinely stack up — unique workflow, high volume, clear ROI inside 12 months — a custom build is a straightforward investment decision, not a technology gamble.

Not sure which camp your problem falls into? We offer a free AI diagnostic at [/contact/](/contact/) — 45 minutes to walk through your workflows and tell you clearly whether off-the-shelf or custom is the right call. No pitch, just a specific recommendation.
