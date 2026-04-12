/* ════════════════════════════════════════════
   MAGIC CLOSET — main.js
   Shared: cursor, particles, toast, reveal, nav
   Cart state lives here too.
════════════════════════════════════════════ */

/* ── Cart state ─────────────────────────────── */
const Cart = {
  items: JSON.parse(localStorage.getItem('mc_cart') || '[]'),
  save()  { localStorage.setItem('mc_cart', JSON.stringify(this.items)); },
  add(name, price, emoji) {
    const existing = this.items.find(i => i.name === name);
    if (existing) existing.qty++;
    else this.items.push({ name, price, emoji, qty: 1 });
    this.save();
    this.updateBadge();
    showToast(`${emoji} <strong>${name}</strong> added to bag!`);
  },
  remove(name) {
    this.items = this.items.filter(i => i.name !== name);
    this.save();
    this.updateBadge();
  },
  total()  { return this.items.reduce((s,i) => s + i.qty, 0); },
  updateBadge() {
    const n = this.total();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = n > 0 ? `(${n})` : '(0)';
    });
  }
};

/* ── Custom cursor ───────────────────────────── */
function initCursor() {
  const cur  = document.getElementById('cur');
  const ring = document.getElementById('cur-ring');
  if (!cur || !ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx+'px'; cur.style.top = my+'px';
  });
  setInterval(() => {
    rx += (mx-rx)*.14; ry += (my-ry)*.14;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
  }, 16);
  document.querySelectorAll('button,a,.coll-card,.prod-card,.loyalty-card,.slider-card,.wow-card,.cert-card,.tab-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.width='20px'; cur.style.height='20px';
      ring.style.width='48px'; ring.style.height='48px';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.width='12px'; cur.style.height='12px';
      ring.style.width='32px'; ring.style.height='32px';
    });
  });
}

/* ── Floating particles ──────────────────────── */
function initParticles() {
  const pc = document.getElementById('particles');
  if (!pc) return;
  ['#f5d6e0','#dcd3f0','#c8ead8','#fdf0c2','#c9a84c','#e8a0b8','#9b7fc4'].forEach(c => {
    for (let j=0;j<4;j++){
      const p = document.createElement('div');
      p.className = 'particle';
      const s = Math.random()*7+3;
      p.style.cssText=`width:${s}px;height:${s}px;background:${c};left:${Math.random()*100}%;animation-duration:${Math.random()*14+9}s;animation-delay:${Math.random()*12}s;`;
      pc.appendChild(p);
    }
  });
}

/* ── Toast ───────────────────────────────────── */
let _tt;
function showToast(html) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.innerHTML = html;
  t.classList.add('show');
  clearTimeout(_tt);
  _tt = setTimeout(() => t.classList.remove('show'), 2800);
}
// Alias for simple string calls
window.toast = showToast;

/* ── Scroll reveal ───────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold:.1, rootMargin:'0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Nav scroll ──────────────────────────────── */
function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60));
}

/* ── Float animation delays ──────────────────── */
function initFloats() {
  document.querySelectorAll('.card-emoji,.slider-icon,.l-crown,.story-big').forEach((el,i) => {
    el.style.animationDelay = `${i*0.35}s`;
  });
}

/* ── Newsletter subscribe ────────────────────── */
function subscribe(inputId) {
  const v = document.getElementById(inputId)?.value;
  if (v && v.includes('@')) {
    showToast('✨ Welcome to the magic circle! 🌸');
    document.getElementById(inputId).value = '';
  } else {
    showToast('💫 Please enter a valid email!');
  }
}

/* ── Init all ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initParticles();
  initReveal();
  initNav();
  initFloats();
  Cart.updateBadge();
});
