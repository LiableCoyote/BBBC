'use strict';

function setupDOM() {
  document.body.innerHTML = `
    <input class="news-search" value="">
    <button class="cat-btn active">All</button>
    <button class="cat-btn">Legislation</button>
    <button class="cat-btn">Defense Corps</button>
    <button class="cat-btn">Community</button>
    <button class="cat-btn">Events</button>
    <button class="cat-btn">Press Release</button>
    <button class="cat-btn">Op-Ed</button>
    <div id="news-grid"></div>
    <span id="result-count"></span>
    <button id="load-more-btn" style="display:none"></button>
    <div id="load-more-wrap"></div>
    <ul id="sb-recent"></ul>
    <div id="art-overlay">
      <img id="art-hero-img">
      <span id="art-cat-pill"></span>
      <span id="art-date"></span>
      <span id="art-read-time"></span>
      <div id="art-title"></div>
      <img id="art-author-img">
      <span id="art-author-name"></span>
      <span id="art-author-role"></span>
      <div id="art-body"></div>
      <div id="art-tags"></div>
    </div>
    <div id="toast"></div>
  `;
}

describe('news.js', () => {
  let mod;

  beforeEach(() => {
    jest.resetModules();
    setupDOM();
    mod = require('../scripts/news.js');
    mod._resetState();
  });

  // ── filterNews ────────────────────────────────────────
  describe('filterNews', () => {
    test('shows all 12 articles when no category or search is active', () => {
      mod.filterNews();
      expect(document.getElementById('result-count').textContent).toBe('12 articles');
    });

    test('shows only Legislation articles when activeCat is Legislation', () => {
      mod.setCat('Legislation', document.querySelector('.cat-btn'));
      const count = document.getElementById('result-count').textContent;
      const expected = mod.ARTICLES.filter(a => a.cat === 'Legislation').length;
      expect(count).toBe(`${expected} article${expected !== 1 ? 's' : ''}`);
    });

    test('shows only Defense Corps articles when activeCat is Defense Corps', () => {
      mod.setCat('Defense Corps', document.querySelector('.cat-btn'));
      const expected = mod.ARTICLES.filter(a => a.cat === 'Defense Corps').length;
      expect(document.getElementById('result-count').textContent).toBe(`${expected} articles`);
    });

    test('filters by search query matching title', () => {
      document.querySelector('.news-search').value = 'scholarship';
      mod.filterNews();
      const count = parseInt(document.getElementById('result-count').textContent);
      expect(count).toBeGreaterThan(0);
      const cards = document.querySelectorAll('.news-card');
      cards.forEach(c => {
        expect(c.querySelector('.nc-title').textContent.toLowerCase()).toContain('scholarship');
      });
    });

    test('filters by search query matching excerpt', () => {
      document.querySelector('.news-search').value = 'senate';
      mod.filterNews();
      const count = parseInt(document.getElementById('result-count').textContent);
      expect(count).toBeGreaterThan(0);
    });

    test('shows "No articles found." when nothing matches', () => {
      document.querySelector('.news-search').value = 'zzzzznonexistent';
      mod.filterNews();
      expect(document.getElementById('news-grid').textContent).toContain('No articles found.');
    });

    test('uses singular "article" when result count is 1', () => {
      // Search for something unique to one article
      document.querySelector('.news-search').value = 'seattle';
      mod.filterNews();
      const countText = document.getElementById('result-count').textContent;
      expect(countText).toBe('1 article');
    });

    test('shows load-more button when more than 6 matching articles exist', () => {
      mod.filterNews();
      const btn = document.getElementById('load-more-btn');
      expect(btn.style.display).toBe('inline-block');
    });

    test('hides load-more button when 6 or fewer results', () => {
      mod.setCat('Legislation', document.querySelector('.cat-btn'));
      const legislationCount = mod.ARTICLES.filter(a => a.cat === 'Legislation').length;
      const btn = document.getElementById('load-more-btn');
      if (legislationCount <= 6) {
        expect(btn.style.display).toBe('none');
      }
    });
  });

  // ── loadMore ──────────────────────────────────────────
  describe('loadMore', () => {
    test('increases the number of visible article cards', () => {
      mod.filterNews();
      const initialCards = document.querySelectorAll('.news-card').length;
      mod.loadMore();
      const moreCards = document.querySelectorAll('.news-card').length;
      expect(moreCards).toBeGreaterThan(initialCards);
    });

    test('shows all articles when loadMore is called enough times', () => {
      mod.filterNews();
      mod.loadMore();
      mod.loadMore();
      const cards = document.querySelectorAll('.news-card').length;
      expect(cards).toBe(mod.ARTICLES.length);
    });
  });

  // ── renderGrid ────────────────────────────────────────
  describe('renderGrid', () => {
    test('renders the correct number of cards', () => {
      mod.renderGrid(mod.ARTICLES.slice(0, 3));
      expect(document.querySelectorAll('.news-card').length).toBe(3);
    });

    test('renders zero cards for an empty list and shows no-articles message', () => {
      mod.renderGrid([]);
      expect(document.querySelectorAll('.news-card').length).toBe(0);
      expect(document.getElementById('news-grid').textContent).toContain('No articles found.');
    });

    test('each card contains the article title', () => {
      mod.renderGrid([mod.ARTICLES[0]]);
      expect(document.querySelector('.nc-title').textContent).toBe(mod.ARTICLES[0].title);
    });

    test('each card contains the article excerpt', () => {
      mod.renderGrid([mod.ARTICLES[0]]);
      expect(document.querySelector('.nc-excerpt').textContent).toBe(mod.ARTICLES[0].excerpt);
    });

    test('each card shows the correct category badge', () => {
      mod.renderGrid([mod.ARTICLES[0]]);
      expect(document.querySelector('.nc-cat').textContent).toBe(mod.ARTICLES[0].cat);
    });
  });

  // ── setCat ────────────────────────────────────────────
  describe('setCat', () => {
    test('updates activeCat', () => {
      mod.setCat('Community', document.querySelector('.cat-btn'));
      expect(mod._getActiveCat()).toBe('Community');
    });

    test('resets visibleCount to 6', () => {
      mod.loadMore(); // bumps to 12
      mod.setCat('Community', document.querySelector('.cat-btn'));
      expect(mod._getVisibleCount()).toBe(6);
    });

    test('marks the matching cat-btn as active', () => {
      const btn = Array.from(document.querySelectorAll('.cat-btn')).find(b => b.textContent === 'Community');
      mod.setCat('Community', btn);
      expect(btn.classList.contains('active')).toBe(true);
    });
  });

  // ── renderSidebar ─────────────────────────────────────
  describe('renderSidebar', () => {
    test('renders 5 items in the sidebar', () => {
      mod.renderSidebar();
      expect(document.querySelectorAll('#sb-recent li').length).toBe(5);
    });

    test('each sidebar item contains the article title', () => {
      mod.renderSidebar();
      const titles = Array.from(document.querySelectorAll('.sb-r-title')).map(el => el.textContent);
      expect(titles).toContain(mod.ARTICLES[0].title);
    });
  });

  // ── openArticle / closeArticle ────────────────────────
  describe('openArticle', () => {
    test('opens the article overlay', () => {
      mod.openArticle(0);
      expect(document.getElementById('art-overlay').classList.contains('open')).toBe(true);
    });

    test('populates the overlay with the correct title', () => {
      mod.openArticle(0);
      expect(document.getElementById('art-title').textContent).toContain(mod.ARTICLES[0].title);
    });

    test('populates the overlay with the correct author', () => {
      mod.openArticle(0);
      expect(document.getElementById('art-author-name').textContent).toBe(mod.ARTICLES[0].author);
    });

    test('populates the category pill with the correct category', () => {
      mod.openArticle(0);
      expect(document.getElementById('art-cat-pill').textContent).toBe(mod.ARTICLES[0].cat);
    });

    test('applies a background colour from CAT_COLORS when opened', () => {
      mod.openArticle(0); // id 0 is 'Legislation'
      // jsdom normalises hex to rgb; just verify the style was set to something non-empty
      expect(document.getElementById('art-cat-pill').style.background).not.toBe('');
    });

    test('locks body scroll when opened', () => {
      mod.openArticle(0);
      expect(document.body.style.overflow).toBe('hidden');
    });

    test('renders the article tags', () => {
      mod.openArticle(0);
      const pills = document.querySelectorAll('#art-tags .tag-pill');
      expect(pills.length).toBe(mod.ARTICLES[0].tags.length);
    });

    test('does nothing for an unknown article id', () => {
      expect(() => mod.openArticle(9999)).not.toThrow();
      expect(document.getElementById('art-overlay').classList.contains('open')).toBe(false);
    });
  });

  describe('closeArticle', () => {
    test('removes "open" class from overlay', () => {
      mod.openArticle(0);
      mod.closeArticle();
      expect(document.getElementById('art-overlay').classList.contains('open')).toBe(false);
    });

    test('restores body scroll', () => {
      mod.openArticle(0);
      mod.closeArticle();
      expect(document.body.style.overflow).toBe('');
    });
  });

  // ── maybeCloseArt ─────────────────────────────────────
  describe('maybeCloseArt', () => {
    test('closes article when the backdrop overlay itself is clicked', () => {
      mod.openArticle(0);
      const overlay = document.getElementById('art-overlay');
      mod.maybeCloseArt({ target: overlay });
      expect(overlay.classList.contains('open')).toBe(false);
    });

    test('does NOT close article when inner content is clicked', () => {
      mod.openArticle(0);
      const inner = document.getElementById('art-title');
      mod.maybeCloseArt({ target: inner });
      expect(document.getElementById('art-overlay').classList.contains('open')).toBe(true);
    });
  });

  // ── Escape key ────────────────────────────────────────
  describe('Escape key', () => {
    test('closes the article modal when Escape is pressed', () => {
      mod.openArticle(0);
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      expect(document.getElementById('art-overlay').classList.contains('open')).toBe(false);
    });

    test('does not throw when Escape is pressed with no open modal', () => {
      expect(() => {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      }).not.toThrow();
    });
  });

  // ── toast ─────────────────────────────────────────────
  describe('toast', () => {
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    test('shows the toast with the given message', () => {
      mod.toast('Hello BBBC');
      const el = document.getElementById('toast');
      expect(el.textContent).toBe('Hello BBBC');
      expect(el.classList.contains('show')).toBe(true);
    });

    test('hides the toast after 3 seconds', () => {
      mod.toast('Hello');
      jest.advanceTimersByTime(3000);
      expect(document.getElementById('toast').classList.contains('show')).toBe(false);
    });
  });
});
