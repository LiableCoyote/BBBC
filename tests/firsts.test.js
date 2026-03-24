'use strict';

function setupDOM() {
  document.body.innerHTML = `
    <div id="progress-bar" style="width:0%"></div>
    <button class="filter-btn active" data-cat="all">All Firsts</button>
    <button class="filter-btn" data-cat="political">Political</button>
    <button class="filter-btn" data-cat="sports">Sports & Athletics</button>
    <button class="filter-btn" data-cat="arts">Arts & Entertainment</button>
    <button class="filter-btn" data-cat="military">Military</button>
    <button class="filter-btn" data-cat="science">Science & Academia</button>
    <button class="filter-btn" data-cat="community">Community</button>

    <div class="first-card" data-cat="political">Political card 1</div>
    <div class="first-card" data-cat="political">Political card 2</div>
    <div class="first-card" data-cat="sports">Sports card 1</div>
    <div class="first-card" data-cat="arts">Arts card 1</div>
    <div class="first-card" data-cat="military">Military card 1</div>
    <div class="first-card" data-cat="science">Science card 1</div>
    <div class="first-card" data-cat="community">Community card 1</div>
  `;
}

describe('firsts.js', () => {
  let mod;

  beforeEach(() => {
    jest.resetModules();
    setupDOM();
    mod = require('../scripts/firsts.js');
  });

  // ── filterCards ───────────────────────────────────────
  describe('filterCards', () => {
    test('filterCards("all") shows every card', () => {
      const allBtn = document.querySelector('[data-cat="all"]');
      mod.filterCards('all', allBtn);
      const hidden = document.querySelectorAll('.first-card.hidden');
      expect(hidden.length).toBe(0);
    });

    test('filterCards with a specific category hides non-matching cards', () => {
      const btn = document.querySelector('[data-cat="political"]');
      mod.filterCards('political', btn);
      const hiddenCards = document.querySelectorAll('.first-card.hidden');
      const visibleCards = document.querySelectorAll('.first-card:not(.hidden)');
      expect(visibleCards.length).toBe(2);       // 2 political cards
      expect(hiddenCards.length).toBe(5);        // everything else
    });

    test('filterCards shows only cards matching the selected category', () => {
      const btn = document.querySelector('[data-cat="sports"]');
      mod.filterCards('sports', btn);
      const visible = Array.from(document.querySelectorAll('.first-card:not(.hidden)'));
      visible.forEach(card => expect(card.dataset.cat).toBe('sports'));
    });

    test('marks the clicked button as active', () => {
      const btn = document.querySelector('[data-cat="arts"]');
      mod.filterCards('arts', btn);
      expect(btn.classList.contains('active')).toBe(true);
    });

    test('removes active class from all other buttons', () => {
      const btn = document.querySelector('[data-cat="military"]');
      mod.filterCards('military', btn);
      const otherActives = Array.from(document.querySelectorAll('.filter-btn.active'))
        .filter(b => b !== btn);
      expect(otherActives.length).toBe(0);
    });

    test('switching from a category filter back to "all" shows every card', () => {
      const politicalBtn = document.querySelector('[data-cat="political"]');
      mod.filterCards('political', politicalBtn);

      const allBtn = document.querySelector('[data-cat="all"]');
      mod.filterCards('all', allBtn);

      expect(document.querySelectorAll('.first-card.hidden').length).toBe(0);
    });

    test('filterCards("science") shows only the science card', () => {
      const btn = document.querySelector('[data-cat="science"]');
      mod.filterCards('science', btn);
      const visible = document.querySelectorAll('.first-card:not(.hidden)');
      expect(visible.length).toBe(1);
      expect(visible[0].dataset.cat).toBe('science');
    });
  });
});
