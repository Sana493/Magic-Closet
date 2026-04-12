/* ════════════════════════════════════════════
   MAGIC CLOSET — products-data.js
   Single source of truth for all products.
   Edit here → updates shop, home, cart everywhere.
════════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: 'glass-01',
    name: 'Moonlight Ballet Flat',
    collection: 'Glass Slipper Muse',
    collectionKey: 'glass',
    colourClass: 'cv-glass',
    colourHex: '#7b5ea7',
    emoji: '👠',
    tags: ['Bestseller','♻️ Recycled'],
    price: 38,
    original: 110,
    ecoScore: 9.2,
    ecoTag: '♻️ 100% Recycled Upper',
    materials: 'Recycled PET bottles, upcycled rubber sole',
    carbon: '1.2 kg CO₂ saved vs new',
    badge: 'b-glass',
    image: '../assets/images/glass-01.svg'   /* SVG illustration */
  },
  {
    id: 'gold-01',
    name: 'Blossom Crown Headpiece',
    collection: 'Golden Thread Muse',
    collectionKey: 'gold',
    colourClass: 'cv-gold',
    colourHex: '#9a7628',
    emoji: '🌸',
    tags: ['New','✨ Handmade'],
    price: 22,
    original: null,
    ecoScore: 9.8,
    ecoTag: '✨ Upcycled Fabric',
    materials: 'Upcycled silk offcuts, recycled wire frame',
    carbon: '0.4 kg CO₂ saved vs new',
    badge: 'b-gold',
    image: '../assets/images/gold-01.svg'
  },
  {
    id: 'story-01',
    name: 'Velvet Dusk Blazer',
    collection: 'Storykeeper Muse',
    collectionKey: 'story',
    colourClass: 'cv-story',
    colourHex: '#3a8a55',
    emoji: '🧥',
    tags: ['Limited','🌿 Upcycled'],
    price: 65,
    original: 180,
    ecoScore: 9.5,
    ecoTag: '🌿 Vintage Reworked',
    materials: 'Rescued velvet, organic cotton lining',
    carbon: '3.1 kg CO₂ saved vs new',
    badge: 'b-story',
    image: '../assets/images/story-01.svg'
  },
  {
    id: 'drag-01',
    name: 'Ember Scale Jacket',
    collection: 'Dragonheart Ethic Line',
    collectionKey: 'drag',
    colourClass: 'cv-drag',
    colourHex: '#a84a4a',
    emoji: '🐉',
    tags: ['Ethical','🔥 Statement'],
    price: 43,
    original: null,
    ecoScore: 9.0,
    ecoTag: '⚡ Fair Trade Certified',
    materials: 'Ethically sourced faux leather, upcycled lining',
    carbon: '2.8 kg CO₂ saved vs new',
    badge: 'b-drag',
    image: '../assets/images/drag-01.svg'
  },
  {
    id: 'gem-01',
    name: 'Starfall Pendant Necklace',
    collection: 'Infinite Gem Accessories',
    collectionKey: 'gem',
    colourClass: 'cv-gem',
    colourHex: '#3a7a9a',
    emoji: '💍',
    tags: ['Popular','💎 Recycled Metal'],
    price: 17,
    original: 40,
    ecoScore: 9.9,
    ecoTag: '💎 Recycled Silver',
    materials: '925 recycled silver, conflict-free semi-precious stone',
    carbon: '0.8 kg CO₂ saved vs new',
    badge: 'b-gem',
    image: '../assets/images/gem-01.svg'
  },
  {
    id: 'time-01',
    name: 'Whisper Silk Scarf',
    collection: 'Timeless Companion',
    collectionKey: 'time',
    colourClass: 'cv-time',
    colourHex: '#4a5fa8',
    emoji: '🧣',
    tags: ['Classic','⏳ Upcycled'],
    price: 38,
    original: null,
    ecoScore: 9.6,
    ecoTag: '♾️ Heritage Upcycled',
    materials: 'Rescued silk, natural plant dye',
    carbon: '1.5 kg CO₂ saved vs new',
    badge: 'b-time',
    image: '../assets/images/time-01.svg'
  },
  {
    id: 'glass-02',
    name: 'Crystal Rose Mule',
    collection: 'Glass Slipper Muse',
    collectionKey: 'glass',
    colourClass: 'cv-glass',
    colourHex: '#7b5ea7',
    emoji: '👡',
    tags: ['New','♻️ Recycled'],
    price: 52,
    original: 95,
    ecoScore: 9.4,
    ecoTag: '♻️ Recycled Leather',
    materials: 'Upcycled leather scraps, recycled EVA sole',
    carbon: '2.0 kg CO₂ saved vs new',
    badge: 'b-glass',
    image: '../assets/images/glass-02.svg'
  },
  {
    id: 'gold-02',
    name: 'Golden Vine Hair Comb',
    collection: 'Golden Thread Muse',
    collectionKey: 'gold',
    colourClass: 'cv-gold',
    colourHex: '#9a7628',
    emoji: '🌿',
    tags: ['Artisan'],
    price: 18,
    original: null,
    ecoScore: 9.7,
    ecoTag: '✨ Artisan Handmade',
    materials: 'Rescued brass, upcycled silk thread',
    carbon: '0.3 kg CO₂ saved vs new',
    badge: 'b-gold',
    image: '../assets/images/gold-02.svg'
  }
];

/* ── Product card HTML template ── */
function productCard(p, pathPrefix='') {
  const origHtml = p.original ? `<s style="font-size:.78rem;color:rgba(45,30,58,.38);font-weight:300;margin-left:5px;">$${p.original}</s>` : '';
  return `
  <div class="prod-card" data-id="${p.id}">
    <div class="prod-img ${p.colourClass}">
      <div class="prod-tags">${p.tags.map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
      <button class="wish-btn" onclick="event.stopPropagation();wishlist('${p.id}')" title="Save">🤍</button>
      <div style="font-size:5.5rem;animation:floatEm 3.5s ease-in-out infinite;filter:drop-shadow(0 8px 24px rgba(45,30,58,.18));">${p.emoji}</div>
    </div>
    <div class="prod-body">
      <div class="prod-col" style="color:${p.colourHex};">${p.collection}</div>
      <div class="prod-name">${p.name}</div>
      <div class="eco-row">🌿 Eco Score: ${p.ecoScore}/10</div>
      <div style="font-size:.72rem;color:rgba(45,30,58,.55);margin-top:4px;">${p.ecoTag}</div>
      <div class="prod-foot">
        <div class="prod-price">$${p.price} ${origHtml}</div>
        <button class="add-btn" onclick="Cart.add('${p.name}','${p.price}','${p.emoji}')">Add to Bag</button>
      </div>
    </div>
  </div>`;
}

function wishlist(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  showToast(`💖 <strong>${p.name}</strong> saved to wishlist!`);
}
