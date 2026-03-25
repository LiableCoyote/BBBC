'use strict';

function setupDOM() {
  document.body.innerHTML = `
    <div id="login-view"></div>
    <div id="dashboard-view" style="display:none"></div>
    <form id="login-form">
      <input id="login-email" value="">
    </form>
    <table><tbody id="teaser-rows"></tbody></table>
    <div id="tiers"></div>
    <!-- Dashboard elements -->
    <span id="dash-name"></span>
    <span id="dash-tier-badge"></span>
    <span id="ds-since"></span>
    <span id="ds-chapter"></span>
    <span id="ds-tier"></span>
    <span id="ds-id"></span>
    <span id="prof-disp-name"></span>
    <span id="prof-disp-id"></span>
    <img id="prof-avatar" src="">
    <input id="pf-first" value="">
    <input id="pf-last" value="">
    <input id="pf-email" value="">
    <input id="pf-phone" value="">
    <textarea id="pf-bio"></textarea>
    <input id="pf-role" value="">
    <select id="pf-chapter">
      <option>Detroit HQ</option>
      <option>Atlanta</option>
      <option>Chicago</option>
      <option>Los Angeles</option>
      <option>New York</option>
      <option>Houston</option>
    </select>
    <span id="prof-tier-pill"></span>
    <ul id="activity-list"></ul>
    <div id="next-event-preview"></div>
    <!-- Directory -->
    <input id="dir-search" value="">
    <select id="filter-chapter"><option value=""></option><option>Detroit HQ</option></select>
    <select id="filter-tier"><option value=""></option><option>Guardian</option><option>Vanguard</option></select>
    <table><tbody id="dir-body"></tbody></table>
    <span id="member-count"></span>
    <!-- Events -->
    <div id="events-list"></div>
    <!-- Dues -->
    <table><tbody id="dues-history"></tbody></table>
    <!-- Tabs -->
    <div class="dash-tab active" id="tab-overview"></div>
    <div class="dash-tab" id="tab-directory"></div>
    <div class="dash-nav-item active"></div>
    <div class="dash-nav-item"></div>
    <!-- Toast -->
    <div id="toast"></div>
  `;
}

describe('members.js', () => {
  let mod;

  beforeEach(() => {
    jest.resetModules();
    localStorage.clear();
    setupDOM();
    mod = require('../scripts/members.js');
    mod._resetState();
  });

  // ── capitalize ────────────────────────────────────────
  describe('capitalize', () => {
    test('capitalizes first letter and lowercases the rest', () => {
      expect(mod.capitalize('john')).toBe('John');
    });

    test('handles already-capitalized strings', () => {
      expect(mod.capitalize('ALICE')).toBe('Alice');
    });

    test('returns empty string for empty input', () => {
      expect(mod.capitalize('')).toBe('');
    });

    test('returns empty string for null/undefined', () => {
      expect(mod.capitalize(null)).toBe('');
      expect(mod.capitalize(undefined)).toBe('');
    });

    test('handles single character', () => {
      expect(mod.capitalize('x')).toBe('X');
    });
  });

  // ── tierClass ─────────────────────────────────────────
  describe('tierClass', () => {
    test('returns lowercased tier with "tier-" prefix', () => {
      expect(mod.tierClass('Vanguard')).toBe('tier-vanguard');
      expect(mod.tierClass('Guardian')).toBe('tier-guardian');
      expect(mod.tierClass('Advocate')).toBe('tier-advocate');
      expect(mod.tierClass('Ally')).toBe('tier-ally');
    });
  });

  // ── handleLogin ───────────────────────────────────────
  describe('handleLogin', () => {
    test('creates a user from the email address', () => {
      document.getElementById('login-email').value = 'john.doe@example.com';
      const event = { preventDefault: jest.fn() };
      mod.handleLogin(event);
      const user = mod._getCurrentUser();
      expect(user).not.toBeNull();
      expect(user.fname).toBe('John');
      expect(user.lname).toBe('Doe');
      expect(user.email).toBe('john.doe@example.com');
    });

    test('assigns a valid MBR- id', () => {
      document.getElementById('login-email').value = 'test@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
      expect(mod._getCurrentUser().id).toMatch(/^MBR-/);
    });

    test('assigns a tier from the allowed set', () => {
      document.getElementById('login-email').value = 'test@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
      expect(['Advocate', 'Guardian', 'Vanguard']).toContain(mod._getCurrentUser().tier);
    });

    test('saves user to localStorage', () => {
      document.getElementById('login-email').value = 'test@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
      const stored = JSON.parse(localStorage.getItem('bbbc-member'));
      expect(stored).not.toBeNull();
      expect(stored.email).toBe('test@example.com');
    });

    test('prevents default form submission', () => {
      const event = { preventDefault: jest.fn() };
      document.getElementById('login-email').value = 'test@example.com';
      mod.handleLogin(event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });

    test('handles email with no separator gracefully', () => {
      document.getElementById('login-email').value = 'alice@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
      expect(mod._getCurrentUser().fname).toBe('Alice');
      expect(mod._getCurrentUser().lname).toBe('');
    });
  });

  // ── handleLogout ──────────────────────────────────────
  describe('handleLogout', () => {
    test('clears currentUser', () => {
      document.getElementById('login-email').value = 'test@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
      mod.handleLogout();
      expect(mod._getCurrentUser()).toBeNull();
    });

    test('removes user from localStorage', () => {
      document.getElementById('login-email').value = 'test@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
      mod.handleLogout();
      expect(localStorage.getItem('bbbc-member')).toBeNull();
    });

    test('shows login view after logout', () => {
      document.getElementById('login-email').value = 'test@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
      mod.handleLogout();
      expect(document.getElementById('login-view').style.display).toBe('block');
      expect(document.getElementById('dashboard-view').style.display).toBe('none');
    });
  });

  // ── filterDir ─────────────────────────────────────────
  describe('filterDir', () => {
    beforeEach(() => {
      // Render all members so there's data to filter
      mod.renderDir(mod.MEMBERS);
    });

    test('shows all members when search is empty and no filters selected', () => {
      mod.filterDir();
      expect(document.querySelectorAll('#dir-body tr').length).toBe(mod.MEMBERS.length);
    });

    test('filters by name query', () => {
      document.getElementById('dir-search').value = 'marcus';
      mod.filterDir();
      const rows = document.querySelectorAll('#dir-body tr');
      expect(rows.length).toBeGreaterThan(0);
      const names = Array.from(rows).map(r => r.querySelector('span').textContent.toLowerCase());
      names.forEach(n => expect(n).toContain('marcus'));
    });

    test('filters by chapter', () => {
      document.getElementById('filter-chapter').value = 'Detroit HQ';
      mod.filterDir();
      const expected = mod.MEMBERS.filter(m => m.chapter === 'Detroit HQ').length;
      expect(document.querySelectorAll('#dir-body tr').length).toBe(expected);
    });

    test('filters by tier', () => {
      document.getElementById('filter-tier').value = 'Vanguard';
      mod.filterDir();
      const expected = mod.MEMBERS.filter(m => m.tier === 'Vanguard').length;
      expect(document.querySelectorAll('#dir-body tr').length).toBe(expected);
    });

    test('updates member count label', () => {
      document.getElementById('dir-search').value = 'marcus';
      mod.filterDir();
      const countText = document.getElementById('member-count').textContent;
      expect(countText).toMatch(/^\d+ members?$/);
    });

    test('returns no rows when search matches nothing', () => {
      document.getElementById('dir-search').value = 'zzznonexistent';
      mod.filterDir();
      expect(document.querySelectorAll('#dir-body tr').length).toBe(0);
    });
  });

  // ── renderDir ─────────────────────────────────────────
  describe('renderDir', () => {
    test('renders the correct number of rows', () => {
      mod.renderDir(mod.MEMBERS.slice(0, 5));
      expect(document.querySelectorAll('#dir-body tr').length).toBe(5);
    });

    test('shows correct member count label — singular', () => {
      mod.renderDir([mod.MEMBERS[0]]);
      expect(document.getElementById('member-count').textContent).toBe('1 member');
    });

    test('shows correct member count label — plural', () => {
      mod.renderDir(mod.MEMBERS.slice(0, 3));
      expect(document.getElementById('member-count').textContent).toBe('3 members');
    });

    test('each row contains tier pill with correct class', () => {
      mod.renderDir([mod.MEMBERS[0]]);
      const pill = document.querySelector('#dir-body .tier-pill');
      expect(pill.classList.contains('tier-' + mod.MEMBERS[0].tier.toLowerCase())).toBe(true);
    });
  });

  // ── toggleRSVP ────────────────────────────────────────
  describe('toggleRSVP', () => {
    beforeEach(() => {
      // Need dashboard DOM — log in first so events-list is populated
      document.getElementById('login-email').value = 'test@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
    });

    test('adds event to rsvpd on first toggle', () => {
      mod.toggleRSVP(0);
      expect(mod._getRsvpd().has(0)).toBe(true);
    });

    test('removes event from rsvpd on second toggle', () => {
      mod.toggleRSVP(0);
      mod.toggleRSVP(0);
      expect(mod._getRsvpd().has(0)).toBe(false);
    });

    test('persists RSVP state in localStorage', () => {
      mod.toggleRSVP(1);
      const stored = JSON.parse(localStorage.getItem('bbbc-rsvp'));
      expect(stored).toContain(1);
    });

    test('removes RSVP from localStorage on second toggle', () => {
      mod.toggleRSVP(1);
      mod.toggleRSVP(1);
      const stored = JSON.parse(localStorage.getItem('bbbc-rsvp'));
      expect(stored).not.toContain(1);
    });
  });

  // ── saveProfile ───────────────────────────────────────
  describe('saveProfile', () => {
    beforeEach(() => {
      document.getElementById('login-email').value = 'jane.smith@example.com';
      mod.handleLogin({ preventDefault: jest.fn() });
    });

    test('updates currentUser name from form fields', () => {
      document.getElementById('pf-first').value = 'Janet';
      document.getElementById('pf-last').value = 'Jones';
      document.getElementById('pf-email').value = 'janet@example.com';
      document.getElementById('pf-phone').value = '555-1234';
      document.getElementById('pf-bio').value = 'Bio text';
      document.getElementById('pf-role').value = 'Advocate';
      document.getElementById('pf-chapter').value = 'Atlanta';
      mod.saveProfile();
      const user = mod._getCurrentUser();
      expect(user.fname).toBe('Janet');
      expect(user.lname).toBe('Jones');
      expect(user.name).toBe('Janet Jones');
    });

    test('persists updated profile to localStorage', () => {
      document.getElementById('pf-first').value = 'Janet';
      document.getElementById('pf-last').value = 'Jones';
      document.getElementById('pf-email').value = 'janet@example.com';
      document.getElementById('pf-phone').value = '';
      document.getElementById('pf-bio').value = '';
      document.getElementById('pf-role').value = 'General Member';
      document.getElementById('pf-chapter').value = 'Atlanta';
      mod.saveProfile();
      const stored = JSON.parse(localStorage.getItem('bbbc-member'));
      expect(stored.fname).toBe('Janet');
    });

    test('updates the displayed name in the dashboard header', () => {
      document.getElementById('pf-first').value = 'Updated';
      document.getElementById('pf-last').value = 'Name';
      document.getElementById('pf-email').value = 'test@test.com';
      document.getElementById('pf-phone').value = '';
      document.getElementById('pf-bio').value = '';
      document.getElementById('pf-role').value = 'General Member';
      document.getElementById('pf-chapter').value = 'Chicago';
      mod.saveProfile();
      expect(document.getElementById('dash-name').textContent).toBe('Updated Name');
    });
  });

  // ── showTab ───────────────────────────────────────────
  describe('showTab', () => {
    test('activates the requested tab panel', () => {
      const navItem = document.querySelectorAll('.dash-nav-item')[1];
      mod.showTab('directory', navItem);
      expect(document.getElementById('tab-directory').classList.contains('active')).toBe(true);
    });

    test('deactivates all other tab panels', () => {
      const navItem = document.querySelectorAll('.dash-nav-item')[1];
      mod.showTab('directory', navItem);
      expect(document.getElementById('tab-overview').classList.contains('active')).toBe(false);
    });

    test('marks the nav item as active', () => {
      const navItem = document.querySelectorAll('.dash-nav-item')[1];
      mod.showTab('directory', navItem);
      expect(navItem.classList.contains('active')).toBe(true);
    });
  });

  // ── buildTeaserRows ───────────────────────────────────
  describe('buildTeaserRows', () => {
    test('renders 6 teaser rows', () => {
      mod.buildTeaserRows();
      expect(document.querySelectorAll('#teaser-rows tr').length).toBe(6);
    });

    test('teaser rows contain member names', () => {
      mod.buildTeaserRows();
      const names = Array.from(document.querySelectorAll('#teaser-rows tr span')).map(s => s.textContent);
      expect(names).toContain(mod.MEMBERS[0].name);
    });
  });
});
