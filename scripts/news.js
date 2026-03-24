// ══ ARTICLE DATA ═════════════════════════════════════════
const ARTICLES = [
  {
    id: 0, cat: 'Legislation', date: 'March 18, 2026', read: '8 min', img: 'https://picsum.photos/800/420?random=201',
    title: 'BBBC Lobbies for Multiracial Recognition Act Before Senate Subcommittee',
    excerpt: 'Delegates delivered powerful testimony pressing for federal recognition of mixed-heritage identity in census, employment, and legal documentation.',
    author: 'Sofia Nguyen-Brooks', authorRole: 'Legislative Correspondent', authorImg: 'https://picsum.photos/60/60?random=301',
    tags: ['Legislation', 'Civil Rights', 'Identity', 'Washington D.C.'],
    body: `<p>In a landmark appearance before the Senate Subcommittee on Civil Rights, a five-person BBBC delegation led by Secretary General Andrew Peterson delivered hours of testimony outlining the systemic gaps facing multiracial and mixed-heritage Americans in federal documentation, employment classification, and legal identity frameworks.</p>`
  },
  {
    id: 1, cat: 'Defense Corps', date: 'March 10, 2026', read: '5 min', img: 'https://picsum.photos/800/420?random=202',
    title: 'Spring Training Cycle Opens — 200 Slots Available Across Six Regional Hubs',
    excerpt: 'The BBBC Defense Corps has opened registration for the Spring 2026 cycle. Applications close April 15 with enrollment at six regional hubs nationwide.',
    author: 'Col. (Ret.) Damon Reyes', authorRole: 'Defense Corps Commander', authorImg: 'https://picsum.photos/60/60?random=303',
    tags: ['Defense Corps', 'Training', 'Enrollment'],
    body: `<p>The Brotherhood of Blended Bloodlines Committee Defense Corps has officially opened enrollment for the Spring 2026 training cycle.</p>`
  },
  {
    id: 2, cat: 'Community', date: 'February 28, 2026', read: '4 min', img: 'https://picsum.photos/800/420?random=203',
    title: 'Annual Blended Heritage Summit Confirmed for Atlanta — July 18–20',
    excerpt: 'This year\'s summit will feature keynote speakers, policy panels, cultural exhibitions, chapter championships, and the largest gathering in BBBC history.',
    author: 'Aisha St. Claire-Webb', authorRole: 'Director of Advocacy', authorImg: 'https://picsum.photos/60/60?random=304',
    tags: ['Events', 'Community', 'Atlanta', 'Summit'],
    body: `<p>The Brotherhood of Blended Bloodlines Committee has confirmed Atlanta, Georgia as the host city for the 2026 Annual Blended Heritage Summit.</p>`
  },
  {
    id: 3, cat: 'Press Release', date: 'February 20, 2026', read: '3 min', img: 'https://picsum.photos/800/420?random=204',
    title: 'BBBC Condemns Hate Crime Wave Targeting Multiracial Families in Three States',
    excerpt: 'Following a series of documented incidents in Ohio, Texas, and Florida, the Brotherhood has issued an official condemnation and activated its legal aid rapid-response team.',
    author: 'BBBC Communications Office', authorRole: 'Official Statement', authorImg: 'https://picsum.photos/60/60?random=305',
    tags: ['Press Release', 'Civil Rights', 'Legal Aid'],
    body: `<p>The Brotherhood of Blended Bloodlines Committee today issued an official condemnation of a wave of targeted incidents.</p>`
  },
  {
    id: 4, cat: 'Op-Ed', date: 'February 12, 2026', read: '6 min', img: 'https://picsum.photos/800/420?random=205',
    title: 'Why "What Are You?" Is Still a Weapon — And What We Do About It',
    excerpt: 'BBBC Director of Advocacy Aisha St. Claire-Webb on the politics of the mixed-race question, identity policing, and why clarity is an act of resistance.',
    author: 'Aisha St. Claire-Webb', authorRole: 'Director of Advocacy', authorImg: 'https://picsum.photos/60/60?random=304',
    tags: ['Op-Ed', 'Identity', 'Advocacy'],
    body: `<p>I have been asked "what are you?" more times than I can count.</p>`
  },
  {
    id: 5, cat: 'Community', date: 'February 5, 2026', read: '4 min', img: 'https://picsum.photos/800/420?random=206',
    title: 'BBBC Youth Scholarship Fund Awards $120,000 to 24 Students Nationwide',
    excerpt: 'The 2026 scholarship cycle saw a record number of applicants. Recipients represent 14 states and a broad range of mixed-heritage backgrounds.',
    author: 'Amara Johansson-Bell', authorRole: 'Youth Program Lead', authorImg: 'https://picsum.photos/60/60?random=306',
    tags: ['Community', 'Youth', 'Scholarship'],
    body: `<p>The Brotherhood of Blended Bloodlines Committee Youth Scholarship Fund has awarded $120,000 in grants to 24 students.</p>`
  },
  {
    id: 6, cat: 'Defense Corps', date: 'January 28, 2026', read: '5 min', img: 'https://picsum.photos/800/420?random=207',
    title: 'Detroit Defense Corps Completes Winter Tactical Review — Highest Pass Rate on Record',
    excerpt: 'The Detroit HQ chapter posted an 89% completion rate across its Winter 2025–26 training cohort, with 12 graduates advancing to the command track.',
    author: 'Col. (Ret.) Damon Reyes', authorRole: 'Defense Corps Commander', authorImg: 'https://picsum.photos/60/60?random=303',
    tags: ['Defense Corps', 'Detroit', 'Training'],
    body: `<p>The Detroit Headquarters chapter of the BBBC Defense Corps concluded its Winter 2025–26 training cohort with an 89% completion and pass rate.</p>`
  },
  {
    id: 7, cat: 'Legislation', date: 'January 15, 2026', read: '5 min', img: 'https://picsum.photos/800/420?random=208',
    title: 'Federal Judge Rules in Favor of Multiracial Plaintiff in Landmark Identity Discrimination Case',
    excerpt: 'A federal ruling backed by BBBC legal support sets a significant precedent for mixed-heritage individuals facing identity-based discrimination in employment.',
    author: 'Sofia Nguyen-Brooks', authorRole: 'Legislative Correspondent', authorImg: 'https://picsum.photos/60/60?random=301',
    tags: ['Legislation', 'Legal Aid', 'Civil Rights'],
    body: `<p>A federal district court in the Northern District of Illinois ruled in favor of plaintiff Danielle Osei-Kofi.</p>`
  },
  {
    id: 8, cat: 'Events', date: 'January 8, 2026', read: '3 min', img: 'https://picsum.photos/800/420?random=209',
    title: 'Chapter Championship Season 4 Standings: Riceskins Lead 69–67 Entering Final Round',
    excerpt: 'With one round remaining in the Season 4 Inter-Chapter Championship, the East Chapter Riceskins hold a narrow two-point lead over the West Chapter Lightskins.',
    author: 'BBBC Events Office', authorRole: 'Championship Coverage', authorImg: 'https://picsum.photos/60/60?random=307',
    tags: ['Events', 'Championship'],
    body: `<p>Season 4 of the BBBC Inter-Chapter Championship has reached its final stretch.</p>`
  },
  {
    id: 9, cat: 'Press Release', date: 'December 20, 2025', read: '3 min', img: 'https://picsum.photos/800/420?random=210',
    title: 'BBBC Reaches 10,000 Member Milestone — Chairman Issues Statement',
    excerpt: 'The Brotherhood has crossed the 10,000 registered member threshold, marking a major milestone for the organization entering its 17th year.',
    author: 'BBBC Communications Office', authorRole: 'Official Statement', authorImg: 'https://picsum.photos/60/60?random=305',
    tags: ['Press Release', 'Milestone', 'Community'],
    body: `<p>The Brotherhood of Blended Bloodlines Committee has officially surpassed 10,000 registered members.</p>`
  },
  {
    id: 10, cat: 'Op-Ed', date: 'December 10, 2025', read: '7 min', img: 'https://picsum.photos/800/420?random=211',
    title: 'The Case for an Armed Blended Community: Why the Defense Corps Matters',
    excerpt: 'Chairman Joshua Wyand makes the case for why self-defense infrastructure is inseparable from civil rights advocacy for marginalized mixed-race communities.',
    author: 'Joshua A.C. Wyand', authorRole: 'Chairman & Founder', authorImg: 'https://picsum.photos/60/60?random=302',
    tags: ['Op-Ed', 'Defense Corps', 'Civil Rights'],
    body: `<p>I want to be direct with you: the BBBC Defense Corps is not a militaristic indulgence.</p>`
  },
  {
    id: 11, cat: 'Community', date: 'November 22, 2025', read: '4 min', img: 'https://picsum.photos/800/420?random=212',
    title: 'New Chapter Opens in Seattle — BBBC Now Active in 14 Cities',
    excerpt: 'The Seattle chapter officially launched with 47 founding members, marking the BBBC\'s first presence in the Pacific Northwest.',
    author: 'Aisha St. Claire-Webb', authorRole: 'Director of Advocacy', authorImg: 'https://picsum.photos/60/60?random=304',
    tags: ['Community', 'Seattle', 'Expansion'],
    body: `<p>The Brotherhood of Blended Bloodlines Committee officially launched its 14th chapter in Seattle, Washington.</p>`
  },
];

// ══ STATE ══════════════════════════════════════════════
let activeCat = '';
let visibleCount = 6;

// ══ INIT ═══════════════════════════════════════════════
function init() {
  renderSidebar();
  filterNews();
}

// ══ CATEGORY FILTER ════════════════════════════════════
function setCat(cat, btn) {
  activeCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.cat-btn').forEach(b => {
    if ((!cat && b.textContent === 'All') || (b.textContent === cat)) b.classList.add('active');
  });
  visibleCount = 6;
  filterNews();
}

function filterNews() {
  const searchEl = document.querySelector('.news-search');
  const q = searchEl ? searchEl.value.toLowerCase() : '';
  const filtered = ARTICLES.filter(a => {
    const matchCat = !activeCat || a.cat === activeCat;
    const matchQ = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.cat.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  renderGrid(filtered.slice(0, visibleCount));
  const countEl = document.getElementById('result-count');
  if (countEl) countEl.textContent = filtered.length + ' article' + (filtered.length !== 1 ? 's' : '');
  const lmBtn = document.getElementById('load-more-btn');
  if (lmBtn) lmBtn.style.display = filtered.length > visibleCount ? 'inline-block' : 'none';
  window._filteredArts = filtered;
}

function loadMore() {
  visibleCount += 6;
  filterNews();
}

// ══ RENDER GRID ════════════════════════════════════════
const CAT_COLORS = {
  'Legislation': '#1a4a8a', 'Defense Corps': '#8a1a1a', 'Community': '#1a6a2a',
  'Events': '#6a4a1a', 'Press Release': '#4a1a6a', 'Op-Ed': '#2a5a5a'
};

function renderGrid(list) {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.innerHTML = '';
  if (!list.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;padding:40px;text-align:center;color:rgba(245,240,232,0.3);font-style:italic;font-size:14px;">No articles found.</div>';
    return;
  }
  list.forEach(a => {
    const div = document.createElement('div');
    div.className = 'news-card';
    div.onclick = () => openArticle(a.id);
    div.innerHTML = `
      <div class="nc-img-wrap">
        <img src="${a.img}" alt="${a.title}" loading="lazy">
        <span class="nc-cat" style="background:${CAT_COLORS[a.cat] || '#333'}">${a.cat}</span>
      </div>
      <div class="nc-body">
        <div class="nc-title">${a.title}</div>
        <div class="nc-excerpt">${a.excerpt}</div>
        <div class="nc-footer">
          <span class="nc-date">${a.date} · ${a.read} read</span>
          <span class="nc-read">Read →</span>
        </div>
      </div>`;
    grid.appendChild(div);
  });
}

// ══ SIDEBAR ════════════════════════════════════════════
function renderSidebar() {
  const ul = document.getElementById('sb-recent');
  if (!ul) return;
  ARTICLES.slice(0, 5).forEach(a => {
    const li = document.createElement('li');
    li.onclick = () => openArticle(a.id);
    li.innerHTML = `<img src="${a.img}" alt=""><div><div class="sb-r-title">${a.title}</div><div class="sb-r-date">${a.date}</div></div>`;
    ul.appendChild(li);
  });
}

// ══ ARTICLE MODAL ══════════════════════════════════════
function openArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;
  document.getElementById('art-hero-img').src = a.img;
  const pill = document.getElementById('art-cat-pill');
  pill.textContent = a.cat;
  pill.style.background = CAT_COLORS[a.cat] || '#333';
  pill.style.color = '#fff';
  document.getElementById('art-date').textContent = a.date;
  document.getElementById('art-read-time').textContent = '· ' + a.read + ' read';
  document.getElementById('art-title').innerHTML = '<h1>' + a.title + '</h1>';
  document.getElementById('art-author-img').src = a.authorImg;
  document.getElementById('art-author-name').textContent = a.author;
  document.getElementById('art-author-role').textContent = a.authorRole;
  document.getElementById('art-body').innerHTML = a.body;
  const tagsEl = document.getElementById('art-tags');
  tagsEl.innerHTML = '<span>Tags:</span>';
  a.tags.forEach(t => {
    const s = document.createElement('span');
    s.className = 'tag-pill';
    s.textContent = t;
    tagsEl.appendChild(s);
  });
  document.getElementById('art-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  document.getElementById('art-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function maybeCloseArt(e) {
  if (e.target === document.getElementById('art-overlay')) closeArticle();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeArticle(); });

// ══ TOAST ══════════════════════════════════════════════
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

// Auto-initialise only in browser context
if (typeof module === 'undefined') {
  init();
}

if (typeof module !== 'undefined') {
  module.exports = {
    ARTICLES, CAT_COLORS,
    init, setCat, filterNews, loadMore, renderGrid, renderSidebar,
    openArticle, closeArticle, maybeCloseArt, toast,
    _getActiveCat: () => activeCat,
    _getVisibleCount: () => visibleCount,
    _resetState: () => { activeCat = ''; visibleCount = 6; },
  };
}
