const LOGO_SVG = `
  <svg class="logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="posterLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00E5A0"></stop>
        <stop offset="100%" stop-color="#00B4D8"></stop>
      </linearGradient>
    </defs>
    <path d="M5 25V7L16 17L27 7V25" stroke="url(#posterLogoGrad)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <circle cx="5" cy="7" r="3.5" fill="url(#posterLogoGrad)"></circle>
    <circle cx="27" cy="7" r="3.5" fill="url(#posterLogoGrad)"></circle>
    <circle cx="16" cy="17" r="3.5" fill="url(#posterLogoGrad)"></circle>
  </svg>
`;

const FIGURE_SVG = `
  <svg class="poster-figure-svg" viewBox="0 0 420 720" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="figureGrad" x1="50" y1="40" x2="320" y2="620" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="rgba(255,255,255,0.92)"></stop>
        <stop offset="45%" stop-color="rgba(0,229,160,0.55)"></stop>
        <stop offset="100%" stop-color="rgba(0,180,216,0.18)"></stop>
      </linearGradient>
    </defs>
    <circle cx="238" cy="118" r="68" fill="url(#figureGrad)"></circle>
    <path d="M116 698C124 536 159 430 235 430C311 430 345 536 355 698H116Z" fill="url(#figureGrad)"></path>
    <path d="M132 474C132 419 178 376 235 376C292 376 336 419 336 474V522H132V474Z" fill="rgba(255,255,255,0.34)"></path>
    <path d="M176 206C188 170 212 150 241 150C271 150 295 170 304 206L321 276C329 313 301 348 264 348H211C174 348 146 313 155 276L176 206Z" fill="rgba(255,255,255,0.5)"></path>
  </svg>
`;

const FIGURE_PAIR_SVG = `
  <svg class="poster-figure-svg" viewBox="0 0 520 760" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="pairGradA" x1="70" y1="70" x2="250" y2="650" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="rgba(255,255,255,0.85)"></stop>
        <stop offset="60%" stop-color="rgba(0,229,160,0.38)"></stop>
        <stop offset="100%" stop-color="rgba(0,229,160,0.1)"></stop>
      </linearGradient>
      <linearGradient id="pairGradB" x1="240" y1="90" x2="420" y2="660" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="rgba(255,255,255,0.72)"></stop>
        <stop offset="60%" stop-color="rgba(0,180,216,0.35)"></stop>
        <stop offset="100%" stop-color="rgba(0,180,216,0.1)"></stop>
      </linearGradient>
    </defs>
    <circle cx="170" cy="126" r="62" fill="url(#pairGradA)"></circle>
    <circle cx="338" cy="148" r="58" fill="url(#pairGradB)"></circle>
    <path d="M54 730C66 555 104 448 173 448C245 448 279 555 293 730H54Z" fill="url(#pairGradA)"></path>
    <path d="M228 730C238 570 274 470 338 470C402 470 438 570 450 730H228Z" fill="url(#pairGradB)"></path>
    <path d="M113 250C123 208 148 180 176 180C206 180 230 206 240 250L251 302C259 336 233 368 198 368H152C117 368 91 336 99 302L113 250Z" fill="rgba(255,255,255,0.38)"></path>
    <path d="M286 266C296 229 318 203 343 203C370 203 392 227 400 266L411 312C417 343 394 370 363 370H322C291 370 268 343 275 312L286 266Z" fill="rgba(255,255,255,0.34)"></path>
  </svg>
`;

function renderPoster(config) {
  if (!config) return;

  document.body.classList.add(config.lang === 'zh' ? 'lang-zh' : 'lang-en');
  const isPreview = window.self !== window.top || new URLSearchParams(window.location.search).has('preview');
  if (isPreview) document.body.classList.add('is-preview');
  document.title = config.pageTitle;

  const app = document.getElementById('app');
  if (!app) return;

  const headlineHtml = config.headline
    .map((line) => {
      if (typeof line === 'string') return `${line}<br>`;
      return `<span class="accent">${line.text}</span><br>`;
    })
    .join('');

  const tagsHtml = config.tags
    .map((tag) => `<div class="tag"><span class="tag-dot"></span>${tag}</div>`)
    .join('');

  const statsHtml = config.stats
    .map(
      (stat) => `
        <div class="stat-item">
          <div class="stat-value">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `,
    )
    .join('');

  const footerLinesHtml = config.footer.lines
    .map((line) => `<div class="footer-line">${line}</div>`)
    .join('');

  const layout = config.layout || 'outcome';
  const sideLabels = {
    delivery: config.sideLabels?.delivery || (config.lang === 'zh' ? '交付指标' : 'Delivery metrics'),
    stack: config.sideLabels?.stack || (config.lang === 'zh' ? '服务构成' : 'Service stack'),
    adoption: config.sideLabels?.adoption || (config.lang === 'zh' ? '落地证明' : 'Adoption proof'),
  };

  const peopleFigure = config.figureImage
    ? `<img class="poster-figure-image" src="${config.figureImage}" alt="" loading="eager" decoding="sync">`
    : (layout === 'adopt' ? FIGURE_PAIR_SVG : FIGURE_SVG);

  const tagsBlock = `
    <div class="service-tags">
      ${tagsHtml}
    </div>
  `;

  const proofBlock = `
    <div class="proof-strip">
      <div class="proof-label">${config.proofLabel}</div>
      <div class="proof-copy">${config.proofCopy}</div>
    </div>
  `;

  const statsBlock = `
    <div class="stats">
      ${statsHtml}
    </div>
  `;

  const topBlock = `
    <div class="section-label">${config.sectionLabel}</div>
    <div class="eyebrow">${config.eyebrow}</div>
  `;

  const headlineBlock = `
    <div class="headline">
      <h1>${headlineHtml}</h1>
    </div>
  `;

  const subtitleBlock = `<div class="subtitle">${config.subtitle}</div>`;

  let bodyMarkup = '';

  if (layout === 'build') {
    bodyMarkup = `
      <div class="poster-body poster-body--build">
        <div class="poster-main">
          ${topBlock}
          ${headlineBlock}
          ${subtitleBlock}
          ${proofBlock}
        </div>
        <aside class="poster-side">
          <div class="side-panel side-panel--stats">
            <div class="side-label">${sideLabels.delivery}</div>
            ${statsBlock}
          </div>
          <div class="side-panel side-panel--tags">
            <div class="side-label">${sideLabels.stack}</div>
            ${tagsBlock}
          </div>
        </aside>
      </div>
    `;
  } else if (layout === 'adopt') {
    bodyMarkup = `
      <div class="poster-body poster-body--adopt">
        <div class="poster-main">
          ${topBlock}
          ${headlineBlock}
          ${subtitleBlock}
          ${tagsBlock}
        </div>
        <div class="adopt-rail">
          <div class="adopt-card">
            <div class="side-label">${config.proofLabel}</div>
            <div class="proof-copy">${config.proofCopy}</div>
          </div>
          <div class="adopt-card adopt-card--stats">
            <div class="side-label">${sideLabels.adoption}</div>
            ${statsBlock}
          </div>
        </div>
      </div>
    `;
  } else {
    bodyMarkup = `
      <div class="poster-body poster-body--outcome">
        <div class="poster-main">
          ${topBlock}
          ${headlineBlock}
          ${subtitleBlock}
          ${tagsBlock}
          ${proofBlock}
          ${statsBlock}
        </div>
      </div>
    `;
  }

  app.innerHTML = `
    <div class="toolbar" data-html-to-image-ignore="true">
      <button type="button" id="download-poster">${config.downloadLabel}</button>
    </div>

    <div class="poster-stage">
      <div class="poster">
        <div class="grid-overlay"></div>
        <div class="glow-top"></div>
        <div class="glow-bottom"></div>
        <div class="people-layer people-layer--${layout}">
          ${peopleFigure}
        </div>
        <div class="accent-line"></div>
        <div class="node node-1"></div>
        <div class="node node-2"></div>
        <div class="node node-3"></div>
        <svg class="connection-line" viewBox="0 0 100 100" aria-hidden="true">
          <line x1="0" y1="0" x2="50" y2="95"></line>
          <line x1="0" y1="0" x2="98" y2="50"></line>
          <line x1="50" y1="95" x2="98" y2="50"></line>
        </svg>

        <div class="logo-area">
          ${LOGO_SVG}
          <span class="logo-text">Metatree Lab</span>
          <div class="logo-divider"></div>
          <span class="logo-sub">Digital Studio</span>
        </div>

        ${bodyMarkup}

        <div class="bottom-bar">
          <div class="footer-meta">
            <div class="footer-site">${config.footer.site}</div>
            ${footerLinesHtml}
          </div>
          <div class="footer-note">${config.footer.note}</div>
        </div>
      </div>
    </div>
  `;

  const button = document.getElementById('download-poster');
  const poster = document.querySelector('.poster');
  const stage = document.querySelector('.poster-stage');

  function syncPreviewScale() {
    if (!isPreview || !poster || !stage) return;
    const scale = Math.min(
      (window.innerWidth - 24) / 1080,
      (window.innerHeight - 24) / 1350,
      1,
    );
    poster.style.transform = `scale(${scale})`;
    stage.style.width = `${1080 * scale}px`;
    stage.style.height = `${1350 * scale}px`;
  }

  syncPreviewScale();
  window.addEventListener('resize', syncPreviewScale);

  async function downloadPoster() {
    if (!poster || !window.htmlToImage) return;

    button.disabled = true;
    button.textContent = config.downloadPreparingLabel;

    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      const dataUrl = await window.htmlToImage.toPng(poster, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#000',
        filter: (node) => node?.dataset?.htmlToImageIgnore !== 'true',
      });

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = config.fileName;
      link.click();
    } finally {
      button.disabled = false;
      button.textContent = config.downloadLabel;
    }
  }

  button.addEventListener('click', downloadPoster);
  window.downloadPoster = downloadPoster;
}

window.renderPoster = renderPoster;
