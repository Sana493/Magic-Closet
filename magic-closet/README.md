# Magic Closet ✨

**Enchanted Sustainable Fashion** by Sana & Aditi

A fully multi-page e-commerce website for Magic Closet — where recycled, reworked, and ethically crafted fashion meets fairy-tale magic.

---

## 📁 Project Structure

```
magic-closet/
├── index.html              ← Homepage (hero, collections, featured products)
├── css/
│   ├── base.css            ← Design tokens, reset, animations, shared components
│   └── nav.css             ← Navigation, footer, card colour palettes
├── js/
│   ├── main.js             ← Cart state, cursor, particles, toast, scroll reveal
│   ├── nav-template.js     ← Shared nav + footer injected on every page
│   └── products-data.js    ← 🔑 SINGLE SOURCE OF TRUTH for all products
├── pages/
│   ├── shop.html           ← Shop with filters (collection, price, sustainability)
│   ├── sustainability.html ← Tabbed: Carbon | Eco Materials | Ethical | Certifications
│   ├── supply-chain.html   ← Interactive SVG map + journey timeline + product tracer
│   ├── recycling.html      ← Gamified recycling: form, badges, leaderboard
│   ├── rewards.html        ← Loyalty tiers, redeem rewards, points history
│   └── cart.html           ← Working cart with qty control, totals, checkout
└── assets/
    └── logo/
        └── logo.svg        ← Official Magic Closet circular badge logo
```

---

## 🚀 How to Edit

### Add or Edit a Product
Open **`js/products-data.js`** — all products live here. Add a new object to the `PRODUCTS` array:

```js
{
  id: 'unique-id',
  name: 'Product Name',
  collection: 'Collection Name',
  collectionKey: 'glass',   // glass | gold | story | time | drag | gem
  colourClass: 'cv-glass',
  colourHex: '#7b5ea7',
  emoji: '👠',
  tags: ['New','♻️ Recycled'],
  price: 45,
  original: 90,             // null if no sale price
  ecoScore: 9.5,
  ecoTag: '♻️ Upcycled',
  materials: 'Recycled PET, natural rubber',
  carbon: '2.1 kg CO₂ saved vs new',
  badge: 'b-glass',
},
```
This automatically updates the homepage, shop, and materials table.

### Edit Navigation Links
Open **`js/nav-template.js`** → update `injectNav()` or `injectFooter()`.

### Edit Sustainability Content
Open **`pages/sustainability.html`** — each tab is a `<div class="tab-panel">`. Edit the HTML inside directly.

### Edit the Supply Chain Map
Open **`pages/supply-chain.html`** — the SVG map has labelled `<circle>` pins with country flags. Add new partners by copying a pin and adjusting `cx/cy` coordinates.

### Edit Loyalty Tiers
Open **`pages/rewards.html`** for the tier cards, or **`js/main.js`** for the tier thresholds in `updatePlayer()`.

---

## 🌐 Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **`main` branch, / (root)**
4. Your site will be live at `https://yourusername.github.io/magic-closet/`

---

## 📦 Pages Overview

| Page | File | Key Features |
|---|---|---|
| Home | `index.html` | Logo hero, collection grid, featured products, newsletter |
| Shop | `pages/shop.html` | Sidebar filters, sort, eco score + materials shown |
| Sustainability | `pages/sustainability.html` | 4 tabs: carbon stats, materials breakdown, ethical practices, certificates |
| Supply Chain | `pages/supply-chain.html` | SVG world map with animated pins, 5-step journey, product tracer |
| Recycling | `pages/recycling.html` | Petal calculator, form → label, badges, community leaderboard |
| Rewards | `pages/rewards.html` | Tier progress, redeem rewards, points history |
| Cart | `pages/cart.html` | Live cart from localStorage, qty controls, eco note, donation toggle |

---

## 🎨 Brand Colours

```css
--rose:        #e8a0b8   /* Blush pink */
--violet:      #7b5ea7   /* Primary brand purple */
--violet-light:#9b7fc4
--sage:        #7ab89a   /* Eco green */
--gold:        #c9a84c   /* Luxury gold */
--ink:         #2d1e3a   /* Deep purple-black */
--cream:       #fdf8f2   /* Warm white background */
```

---

Made with ✨ and sustainable magic by **Sana & Aditi**
