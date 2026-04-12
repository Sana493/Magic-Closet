/* ════════════════════════════════════════════
   MAGIC CLOSET — nav-template.js
   Injects shared nav + footer into every page.
   Call: injectNav(); injectFooter();
════════════════════════════════════════════ */

/* Read logo SVG inline so it works from any path */
const LOGO_SVG = `<svg viewBox="0 0 680 680" xmlns="http://www.w3.org/2000/svg" role="img" style="width:100%;height:100%;">
  <defs>
    <path id="topArc" d="M 140,340 A 200,200 0 0,1 540,340"/>
    <path id="bottomArc" d="M 172,372 A 170,170 0 0,0 508,372"/>
    <linearGradient id="bgFill" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f9edf7"/><stop offset="100%" stop-color="#ede6f8"/>
    </linearGradient>
    <linearGradient id="doorLeft" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5dde8"/><stop offset="100%" stop-color="#e8d0f0"/>
    </linearGradient>
    <linearGradient id="doorRight" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d6eee3"/><stop offset="100%" stop-color="#ddd0f4"/>
    </linearGradient>
    <linearGradient id="cabinetG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cdc0ec"/><stop offset="100%" stop-color="#b8a8e0"/>
    </linearGradient>
    <linearGradient id="roseRing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e8a0c0"/><stop offset="50%" stop-color="#9b7fc4"/><stop offset="100%" stop-color="#7ab89a"/>
    </linearGradient>
  </defs>
  <circle cx="340" cy="340" r="298" fill="none" stroke="#e8d4f0" stroke-width="5"/>
  <circle cx="340" cy="340" r="291" fill="none" stroke="#c4a8e0" stroke-width="1"/>
  <circle cx="340" cy="340" r="283" fill="url(#bgFill)"/>
  <circle cx="340" cy="340" r="270" fill="none" stroke="#ddd0f0" stroke-width="0.7"/>
  <circle cx="340" cy="340" r="254" fill="none" stroke="url(#roseRing)" stroke-width="1.4" stroke-dasharray="5 7"/>
  <!-- Cabinet body -->
  <rect x="196" y="183" width="288" height="232" rx="14" fill="url(#cabinetG)"/>
  <rect x="184" y="167" width="312" height="32" rx="10" fill="#b8a4e4"/>
  <!-- Left door -->
  <rect x="198" y="185" width="138" height="228" rx="9" fill="url(#doorLeft)"/>
  <rect x="206" y="194" width="122" height="116" rx="7" fill="rgba(248,228,240,0.6)" stroke="#d4b8d8" stroke-width="0.8"/>
  <rect x="206" y="318" width="122" height="88" rx="6" fill="rgba(248,228,240,0.5)" stroke="#d4b8d8" stroke-width="0.8"/>
  <!-- Right door -->
  <rect x="344" y="185" width="138" height="228" rx="9" fill="url(#doorRight)"/>
  <rect x="352" y="194" width="122" height="116" rx="7" fill="rgba(210,238,222,0.6)" stroke="#a8c8b8" stroke-width="0.8"/>
  <rect x="352" y="318" width="122" height="88" rx="6" fill="rgba(210,238,222,0.5)" stroke="#a8c8b8" stroke-width="0.8"/>
  <!-- Centre split -->
  <line x1="340" y1="185" x2="340" y2="413" stroke="#a898d8" stroke-width="2.5" opacity="0.5"/>
  <!-- Knobs -->
  <circle cx="334" cy="305" r="7" fill="#e8a0b8"/>
  <circle cx="348" cy="305" r="7" fill="#7ab89a"/>
  <!-- Feet -->
  <rect x="218" y="413" width="28" height="18" rx="5" fill="#a898d8" opacity="0.7"/>
  <rect x="434" y="413" width="28" height="18" rx="5" fill="#a898d8" opacity="0.7"/>
  <!-- Moon -->
  <path d="M256 248 Q224 266 228 298 Q232 330 268 338 Q234 334 226 304 Q218 272 256 248Z" fill="#c8a8d8" opacity="0.85"/>
  <circle cx="310" cy="238" r="13" fill="url(#doorLeft)"/>
  <!-- Stars -->
  <path d="M289 222 L290.5 227 L295.5 227 L291.5 230 L293 235 L289 232 L285 235 L286.5 230 L282.5 227 L287.5 227Z" fill="#c4a8d4" transform="scale(0.55) translate(235 148)"/>
  <path d="M289 222 L290.5 227 L295.5 227 L291.5 230 L293 235 L289 232 L285 235 L286.5 230 L282.5 227 L287.5 227Z" fill="#d8b8e4" transform="scale(0.38) translate(475 310)"/>
  <!-- Hanger -->
  <path d="M379 217 Q379 211 374 209 Q369 207 368 213 Q366 219 373 222 L362 244 L396 244 L385 222 Q392 219 390 213 Q389 207 384 209 Q379 211 379 217Z" fill="none" stroke="#7ab89a" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round"/>
  <line x1="370" y1="244" x2="368" y2="268" stroke="#9ec4b0" stroke-width="1" stroke-dasharray="2 2"/>
  <line x1="388" y1="244" x2="390" y2="268" stroke="#9ec4b0" stroke-width="1" stroke-dasharray="2 2"/>
  <path d="M364 268 Q371 274 379 268 Q387 274 394 268" fill="none" stroke="#9ec4b0" stroke-width="1" stroke-linecap="round"/>
  <!-- Top dots -->
  <circle cx="320" cy="170" r="3" fill="#e8a0b8" opacity="0.85"/>
  <circle cx="340" cy="166" r="4" fill="#9b7fc4"/>
  <circle cx="360" cy="170" r="3" fill="#7ab89a" opacity="0.85"/>
  <!-- Tagline banner -->
  <rect x="240" y="405" width="200" height="21" rx="10.5" fill="#f0e0f0" opacity="0.55"/>
  <text x="340" y="420" text-anchor="middle" font-family="Georgia,serif" font-size="10.5" font-style="italic" letter-spacing="2.5" fill="#9b6fc4">enchanted sustainable fashion</text>
  <!-- Bottom ornament -->
  <line x1="256" y1="444" x2="314" y2="444" stroke="#d8b8e0" stroke-width="0.8"/>
  <circle cx="340" cy="444" r="3.5" fill="#9b7fc4"/>
  <path d="M322 444 L327 440 L332 444 L327 448Z" fill="#e8a0b8" opacity="0.8"/>
  <path d="M348 444 L353 440 L358 444 L353 448Z" fill="#7ab89a" opacity="0.8"/>
  <line x1="366" y1="444" x2="424" y2="444" stroke="#d8b8e0" stroke-width="0.8"/>
  <!-- Curved texts -->
  <text font-size="38" fill="#5a3a8a" letter-spacing="12" font-family="Georgia,serif" font-style="italic" font-weight="bold" opacity="0.92">
    <textPath href="#topArc" startOffset="8%">Magic Closet</textPath>
  </text>
  <text font-size="22" fill="#9b6fc4" letter-spacing="6" font-family="Georgia,serif">
    <textPath href="#bottomArc" startOffset="10%">BY SANA &amp; ADITI</textPath>
  </text>
  <!-- Accent dots -->
  <circle cx="208" cy="228" r="3" fill="#e8a0b8" opacity="0.5"/>
  <circle cx="470" cy="228" r="3" fill="#7ab89a" opacity="0.5"/>
</svg>`;

function injectNav() {
  const root = document.getElementById('app-nav');
  if (!root) return;
  // Auto-detect if we are in pages/ subfolder or at root
  const inPages = window.location.pathname.includes('/pages/');
  const base    = inPages ? '../' : '';
  const pagesDir= inPages ? ''    : 'pages/';

  root.innerHTML = `
<nav id="main-nav">
  <div class="nav-left">
    <a href="${base}index.html" style="display:block;width:48px;height:48px;">${LOGO_SVG}</a>
    <div class="nav-brand">
      <span class="nav-brand-name">Magic Closet</span>
      <span class="nav-brand-sub">Enchanted Sustainable Fashion</span>
    </div>
  </div>
  <ul class="nav-links">
    <li><a href="${base}index.html">Home</a></li>
    <li><a href="${base}${pagesDir}shop.html">Shop</a></li>
    <li><a href="${base}${pagesDir}sustainability.html">Sustainability</a></li>
    <li><a href="${base}${pagesDir}supply-chain.html">Supply Chain</a></li>
    <li><a href="${base}${pagesDir}recycling.html">Recycling</a></li>
    <li><a href="${base}${pagesDir}rewards.html">Rewards</a></li>
  </ul>
  <div class="nav-actions">
    <button class="nav-icon-btn">🔍</button>
    <button class="nav-icon-btn">🤍</button>
    <button class="cart-pill" onclick="window.location.href='${base}${pagesDir}cart.html'">Bag <span class="cart-count">(0)</span></button>
  </div>
</nav>`;
}

function injectFooter() {
  const root = document.getElementById('app-footer');
  if (!root) return;
  const inPages = window.location.pathname.includes('/pages/');
  const base    = inPages ? '../' : '';
  const pagesDir= inPages ? ''    : 'pages/';
  root.innerHTML = `
<footer>
  <div class="footer-grid">
    <div>
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:42px;height:42px;flex-shrink:0;">${LOGO_SVG}</div>
        <div>
          <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.3rem;color:#e8d5f5;">Magic Closet</div>
          <div style="font-size:.52rem;letter-spacing:.2em;text-transform:uppercase;color:#e8a0b8;opacity:.8;">By Sana &amp; Aditi</div>
        </div>
      </div>
      <p class="footer-desc">Sustainable fairy-tale fashion for dreamers who care. Six enchanted collections, ethically made.</p>
      <div class="footer-social">
        <a href="#" class="soc-btn">📸</a><a href="#" class="soc-btn">🐦</a>
        <a href="#" class="soc-btn">📌</a><a href="#" class="soc-btn">▶️</a>
      </div>
    </div>
    <div class="footer-col"><h4>Collections</h4>
      <ul class="footer-links">
        <li><a href="#">👠 Glass Slipper Muse</a></li>
        <li><a href="#">🌟 Golden Thread Muse</a></li>
        <li><a href="#">📖 Storykeeper Muse</a></li>
        <li><a href="#">🧭 Timeless Companion</a></li>
        <li><a href="#">🐉 Dragonheart Ethic</a></li>
        <li><a href="#">💎 Infinite Gem</a></li>
      </ul>
    </div>
    <div class="footer-col"><h4>Our World</h4>
      <ul class="footer-links">
        <li><a href="${base}${pagesDir}sustainability.html">Sustainability</a></li>
        <li><a href="${base}${pagesDir}supply-chain.html">Supply Chain</a></li>
        <li><a href="${base}${pagesDir}recycling.html">Recycling Program</a></li>
        <li><a href="#">Impact Report</a></li>
        <li><a href="#">Artisan Partners</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div class="footer-col"><h4>Help</h4>
      <ul class="footer-links">
        <li><a href="#">Size Guide</a></li>
        <li><a href="#">Shipping &amp; Returns</a></li>
        <li><a href="${base}${pagesDir}recycling.html">Recycle &amp; Earn</a></li>
        <li><a href="${base}${pagesDir}rewards.html">Rewards Club</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Magic Closet. Crafted with ✨ and sustainable magic by Sana &amp; Aditi.</p>
  </div>
</footer>`;
}
