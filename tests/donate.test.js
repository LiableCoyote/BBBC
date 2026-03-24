'use strict';

// Build minimal DOM required by donate.js before importing
function setupDOM() {
  document.body.innerHTML = `
    <button class="amt-btn active" id="btn-10">$10</button>
    <button class="amt-btn" id="btn-25">$25</button>
    <button class="amt-btn" id="btn-50">$50</button>
    <input id="custom-amt" value="">
    <button class="freq-btn active" id="freq-once">One-Time</button>
    <button class="freq-btn" id="freq-monthly">Monthly</button>
    <button class="freq-btn" id="freq-quarterly">Quarterly</button>
    <button class="freq-btn" id="freq-annually">Annually</button>
    <button id="donate-btn"></button>
    <div id="ty-overlay"></div>
    <span id="ty-ref"></span>
    <div id="toast"></div>
  `;
}

describe('donate.js', () => {
  let mod;

  beforeEach(() => {
    jest.resetModules();
    setupDOM();
    mod = require('../scripts/donate.js');
    // Reset state to known default
    mod._setSelectedAmt(50);
  });

  // ── setAmt ──────────────────────────────────────────
  describe('setAmt', () => {
    test('sets selectedAmt to the given value', () => {
      mod.setAmt(document.getElementById('btn-10'), 10);
      expect(mod._getSelectedAmt()).toBe(10);
    });

    test('removes active class from all amt-btns', () => {
      mod.setAmt(document.getElementById('btn-25'), 25);
      const actives = document.querySelectorAll('.amt-btn.active');
      expect(actives.length).toBe(1);
    });

    test('adds active class to the clicked button', () => {
      const btn = document.getElementById('btn-25');
      mod.setAmt(btn, 25);
      expect(btn.classList.contains('active')).toBe(true);
    });

    test('clears the custom-amt input', () => {
      document.getElementById('custom-amt').value = '75';
      mod.setAmt(document.getElementById('btn-50'), 50);
      expect(document.getElementById('custom-amt').value).toBe('');
    });
  });

  // ── clearAmtBtns ────────────────────────────────────
  describe('clearAmtBtns', () => {
    test('removes active class from all preset amount buttons', () => {
      mod.clearAmtBtns();
      const actives = document.querySelectorAll('.amt-btn.active');
      expect(actives.length).toBe(0);
    });

    test('reads the custom-amt value as selectedAmt', () => {
      document.getElementById('custom-amt').value = '150';
      mod.clearAmtBtns();
      expect(mod._getSelectedAmt()).toBe(150);
    });

    test('defaults to 0 when custom-amt is empty', () => {
      document.getElementById('custom-amt').value = '';
      mod.clearAmtBtns();
      expect(mod._getSelectedAmt()).toBe(0);
    });
  });

  // ── setFreq ─────────────────────────────────────────
  describe('setFreq', () => {
    test('removes active class from all freq-btns', () => {
      mod.setFreq(document.getElementById('freq-monthly'), 'monthly');
      const actives = document.querySelectorAll('.freq-btn.active');
      expect(actives.length).toBe(1);
    });

    test('adds active class to the clicked button', () => {
      const btn = document.getElementById('freq-monthly');
      mod.setFreq(btn, 'monthly');
      expect(btn.classList.contains('active')).toBe(true);
    });
  });

  // ── updateDonateBtn ──────────────────────────────────
  describe('updateDonateBtn', () => {
    test('shows selected preset amount with "Now" for one-time', () => {
      mod._setSelectedAmt(50);
      mod.updateDonateBtn();
      expect(document.getElementById('donate-btn').textContent).toBe('Donate $50 Now');
    });

    test('shows custom amount when custom-amt input is filled', () => {
      document.getElementById('custom-amt').value = '75';
      mod.updateDonateBtn();
      expect(document.getElementById('donate-btn').textContent).toBe('Donate $75 Now');
    });

    test('shows /month suffix for Monthly frequency', () => {
      const btn = document.getElementById('freq-monthly');
      mod.setFreq(btn, 'monthly');
      mod._setSelectedAmt(25);
      mod.updateDonateBtn();
      expect(document.getElementById('donate-btn').textContent).toBe('Donate $25 /month');
    });

    test('shows /quarter suffix for Quarterly frequency', () => {
      const btn = document.getElementById('freq-quarterly');
      mod.setFreq(btn, 'quarterly');
      mod._setSelectedAmt(100);
      mod.updateDonateBtn();
      expect(document.getElementById('donate-btn').textContent).toBe('Donate $100 /quarter');
    });

    test('shows /annual suffix for Annually frequency', () => {
      const btn = document.getElementById('freq-annually');
      mod.setFreq(btn, 'annually');
      mod._setSelectedAmt(250);
      mod.updateDonateBtn();
      expect(document.getElementById('donate-btn').textContent).toBe('Donate $250 /annual');
    });
  });

  // ── handleDonate ─────────────────────────────────────
  describe('handleDonate', () => {
    test('prevents default form submission', () => {
      const event = { preventDefault: jest.fn() };
      mod.handleDonate(event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });

    test('adds "open" class to the thank-you overlay', () => {
      const event = { preventDefault: jest.fn() };
      mod.handleDonate(event);
      expect(document.getElementById('ty-overlay').classList.contains('open')).toBe(true);
    });

    test('sets a reference number in ty-ref', () => {
      const event = { preventDefault: jest.fn() };
      mod.handleDonate(event);
      const ref = document.getElementById('ty-ref').textContent;
      expect(ref).toMatch(/^Reference #: BBBC-/);
    });
  });

  // ── closeTY ──────────────────────────────────────────
  describe('closeTY', () => {
    test('removes "open" class from the thank-you overlay', () => {
      document.getElementById('ty-overlay').classList.add('open');
      mod.closeTY();
      expect(document.getElementById('ty-overlay').classList.contains('open')).toBe(false);
    });

    test('is a no-op when the overlay is already closed', () => {
      expect(() => mod.closeTY()).not.toThrow();
    });
  });
});
