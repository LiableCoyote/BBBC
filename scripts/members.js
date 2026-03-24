// ══ DATA ══════════════════════════════════════════════════
const MEMBERS = [
  { id: 'MBR-A1B2C3', name: 'Terrence Okafor-Walsh', chapter: 'Detroit HQ', role: 'Chapter Marshal', tier: 'Vanguard', joined: 'Jan 2021', avatar: 'https://picsum.photos/80/80?random=101' },
  { id: 'MBR-D4E5F6', name: 'Mei-Ling Castillo', chapter: 'Los Angeles', role: 'Advocate', tier: 'Guardian', joined: 'Mar 2022', avatar: 'https://picsum.photos/80/80?random=102' },
  { id: 'MBR-G7H8I9', name: 'Darius St. Claire', chapter: 'Atlanta', role: 'Defense Corps Recruit', tier: 'Guardian', joined: 'Jun 2022', avatar: 'https://picsum.photos/80/80?random=103' },
  { id: 'MBR-J1K2L3', name: 'Sofia Nguyen-Brooks', chapter: 'New York', role: 'Legal Liaison', tier: 'Vanguard', joined: 'Aug 2020', avatar: 'https://picsum.photos/80/80?random=104' },
  { id: 'MBR-M4N5O6', name: 'Khalil Fernandez', chapter: 'Houston', role: 'General Member', tier: 'Advocate', joined: 'Nov 2022', avatar: 'https://picsum.photos/80/80?random=105' },
  { id: 'MBR-P7Q8R9', name: 'Amara Johansson-Bell', chapter: 'Chicago', role: 'Youth Program Lead', tier: 'Guardian', joined: 'Feb 2021', avatar: 'https://picsum.photos/80/80?random=106' },
  { id: 'MBR-S1T2U3', name: 'Remy Dubois-Washington', chapter: 'Miami', role: 'General Member', tier: 'Ally', joined: 'Jan 2024', avatar: 'https://picsum.photos/80/80?random=107' },
  { id: 'MBR-V4W5X6', name: 'Nia Petrov-Jackson', chapter: 'Seattle', role: 'Outreach Coordinator', tier: 'Advocate', joined: 'Sep 2022', avatar: 'https://picsum.photos/80/80?random=108' },
  { id: 'MBR-Y7Z8A1', name: 'Marcus Obi-Chen', chapter: 'Detroit HQ', role: 'Defense Corps Sergeant', tier: 'Vanguard', joined: 'Mar 2020', avatar: 'https://picsum.photos/80/80?random=109' },
  { id: 'MBR-B2C3D4', name: 'Lena Morales-Kim', chapter: 'Los Angeles', role: 'General Member', tier: 'Advocate', joined: 'Jul 2023', avatar: 'https://picsum.photos/80/80?random=110' },
  { id: 'MBR-E5F6G7', name: 'Devon Achebe-Taylor', chapter: 'Atlanta', role: 'Chapter Secretary', tier: 'Guardian', joined: 'Apr 2021', avatar: 'https://picsum.photos/80/80?random=111' },
  { id: 'MBR-H8I9J1', name: 'Priya Osei-Williams', chapter: 'New York', role: 'Legislative Advocate', tier: 'Vanguard', joined: 'Dec 2019', avatar: 'https://picsum.photos/80/80?random=112' },
  { id: 'MBR-K2L3M4', name: 'Elijah Nakamura-Brown', chapter: 'Chicago', role: 'General Member', tier: 'Ally', joined: 'Feb 2024', avatar: 'https://picsum.photos/80/80?random=113' },
  { id: 'MBR-N5O6P7', name: 'Yasmin Torres-Adeyemi', chapter: 'Houston', role: 'Defense Corps Recruit', tier: 'Guardian', joined: 'Oct 2022', avatar: 'https://picsum.photos/80/80?random=114' },
  { id: 'MBR-Q8R9S1', name: "Caden O'Brien-Diallo", chapter: 'Miami', role: 'General Member', tier: 'Advocate', joined: 'May 2023', avatar: 'https://picsum.photos/80/80?random=115' },
  { id: 'MBR-T2U3V4', name: 'Zara Singh-Morrison', chapter: 'Seattle', role: 'Media Director', tier: 'Guardian', joined: 'Aug 2021', avatar: 'https://picsum.photos/80/80?random=116' },
  { id: 'MBR-W5X6Y7', name: 'Isaiah Kowalski-Mensah', chapter: 'Detroit HQ', role: 'Treasurer', tier: 'Vanguard', joined: 'Jun 2020', avatar: 'https://picsum.photos/80/80?random=117' },
  { id: 'MBR-Z8A1B2', name: 'Camille Reyes-Park', chapter: 'Atlanta', role: 'General Member', tier: 'Ally', joined: 'Mar 2024', avatar: 'https://picsum.photos/80/80?random=118' },
  { id: 'MBR-C3D4E5', name: 'Tobias Nwosu-Fleming', chapter: 'Los Angeles', role: 'Corps Marshal', tier: 'Vanguard', joined: 'Jan 2020', avatar: 'https://picsum.photos/80/80?random=119' },
  { id: 'MBR-F6G7H8', name: 'Aaliyah Vasquez-Chen', chapter: 'New York', role: 'Community Organizer', tier: 'Guardian', joined: 'Nov 2021', avatar: 'https://picsum.photos/80/80?random=120' },
];

const EVENTS = [
  { month: 'MAR', day: 28, year: 2026, title: 'Detroit Chapter Monthly Meeting', type: 'Chapter Meeting', loc: 'BBBC HQ — 1847 Unity Blvd, Detroit', time: '7:00 PM EST', attending: 34, tag: 'Members Only' },
  { month: 'APR', day: 5, year: 2026, title: 'Self-Defense & Safety Workshop', type: 'Training', loc: 'Chicago Community Center, Chicago IL', time: '10:00 AM CST', attending: 62, tag: 'Guardian+' },
  { month: 'APR', day: 15, year: 2026, title: 'Spring Defense Corps Training — Enrollment Closes', type: 'Defense Corps', loc: 'All Regional Hubs', time: 'Deadline', attending: 0, tag: 'Guardian+' },
  { month: 'MAY', day: 3, year: 2026, title: 'National Legislative Summit', type: 'Advocacy', loc: 'Washington D.C. — Capitol Hill', time: '9:00 AM EST', attending: 88, tag: 'All Members' },
  { month: 'JUL', day: 18, year: 2026, title: 'Annual Blended Heritage Summit — Day 1', type: 'Annual Event', loc: 'Atlanta Convention Center', time: '8:00 AM EST', attending: 240, tag: 'All Members' },
];

const ACTIVITY = [
  { color: '#88cc66', txt: '<strong>Dues paid</strong> for March 2026', date: 'Mar 1, 2026' },
  { color: var_gold(), txt: '<strong>RSVP confirmed</strong> for Detroit Chapter Meeting', date: 'Feb 28, 2026' },
  { color: '#6699ff', txt: '<strong>Profile updated</strong> — bio & chapter info', date: 'Feb 14, 2026' },
  { color: '#ee8833', txt: '<strong>Donation made</strong> — $50 to Defense Corps fund', date: 'Feb 1, 2026' },
  { color: '#88cc66', txt: '<strong>Dues paid</strong> for February 2026', date: 'Feb 1, 2026' },
];

const DUES_HIST = [
  { date: 'Mar 1, 2026', amt: '$50.00', method: 'Visa ••4821', status: 'ok' },
  { date: 'Feb 1, 2026', amt: '$50.00', method: 'Visa ••4821', status: 'ok' },
  { date: 'Jan 1, 2026', amt: '$50.00', method: 'Visa ••4821', status: 'ok' },
  { date: 'Dec 1, 2025', amt: '$50.00', method: 'Visa ••4821', status: 'ok' },
  { date: 'Nov 1, 2025', amt: '$50.00', method: 'Visa ••4821', status: 'ok' },
];

function var_gold() { return '#c9a84c'; }

// ══ STATE ════════════════════════════════════════════════
let currentUser = JSON.parse(localStorage.getItem('bbbc-member') || 'null');
let rsvpd = new Set(JSON.parse(localStorage.getItem('bbbc-rsvp') || '[]'));

// ══ INIT ═════════════════════════════════════════════════
function init() {
  buildTeaserRows();
  if (currentUser) showDashboard();
  else showLogin();
}

function showLogin() {
  document.getElementById('login-view').style.display = 'block';
  document.getElementById('dashboard-view').style.display = 'none';
}

function showDashboard() {
  document.getElementById('login-view').style.display = 'none';
  document.getElementById('dashboard-view').style.display = 'block';
  populateDash();
}

// ══ LOGIN / LOGOUT ════════════════════════════════════════
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const parts = email.split('@')[0].split(/[._\-]/);
  const fname = capitalize(parts[0] || 'Member');
  const lname = capitalize(parts[1] || '');
  const tiers = ['Advocate', 'Guardian', 'Guardian', 'Vanguard'];
  const chapters = ['Detroit HQ', 'Atlanta', 'Chicago', 'Los Angeles', 'New York', 'Houston'];
  const user = {
    name: fname + (lname ? ' ' + lname : ''), fname, lname, email,
    phone: '', bio: '', role: 'General Member',
    tier: tiers[Math.floor(Math.random() * tiers.length)],
    chapter: chapters[Math.floor(Math.random() * chapters.length)],
    since: '2024',
    id: 'MBR-' + Math.random().toString(36).slice(2, 8).toUpperCase().replace(/[^A-Z0-9]/g, 'X'),
  };
  localStorage.setItem('bbbc-member', JSON.stringify(user));
  currentUser = user;
  showDashboard();
  toast('Welcome back, ' + user.fname + '.');
}

function handleLogout() {
  localStorage.removeItem('bbbc-member');
  currentUser = null;
  showLogin();
  toast('Signed out.');
}

function joinNow() { document.getElementById('tiers').scrollIntoView({ behavior: 'smooth' }); }

function capitalize(s) { return s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : ''; }

// ══ POPULATE DASHBOARD ══════════════════════════════════
function populateDash() {
  const u = currentUser;
  document.getElementById('dash-name').textContent = u.name;
  document.getElementById('dash-tier-badge').textContent = u.tier;
  document.getElementById('ds-since').textContent = u.since;
  document.getElementById('ds-chapter').textContent = u.chapter;
  document.getElementById('ds-tier').textContent = u.tier;
  document.getElementById('ds-id').textContent = u.id;

  document.getElementById('prof-disp-name').textContent = u.name;
  document.getElementById('prof-disp-id').textContent = u.id;
  document.getElementById('pf-first').value = u.fname || '';
  document.getElementById('pf-last').value = u.lname || '';
  document.getElementById('pf-email').value = u.email || '';
  document.getElementById('pf-phone').value = u.phone || '';
  document.getElementById('pf-bio').value = u.bio || '';
  document.getElementById('pf-role').value = u.role || '';
  const chSel = document.getElementById('pf-chapter');
  for (let i = 0; i < chSel.options.length; i++) {
    if (chSel.options[i].text === u.chapter) { chSel.selectedIndex = i; break; }
  }
  const tp = document.getElementById('prof-tier-pill');
  tp.textContent = u.tier;
  tp.className = 'tier-pill tier-' + u.tier.toLowerCase();

  const al = document.getElementById('activity-list');
  al.innerHTML = '';
  ACTIVITY.forEach(a => {
    const li = document.createElement('li');
    li.className = 'act-item';
    li.innerHTML = `<span class="act-dot" style="background:${a.color}"></span><div><div class="act-txt">${a.txt}</div><div class="act-date">${a.date}</div></div>`;
    al.appendChild(li);
  });

  const ne = EVENTS[0];
  document.getElementById('next-event-preview').innerHTML = `
    <div style="display:flex;gap:14px;align-items:center">
      <div class="event-date-box" style="min-width:60px;text-align:center;padding:8px 6px">
        <div class="edb-month">${ne.month}</div><div class="edb-day">${ne.day}</div>
      </div>
      <div><div>${ne.title}</div><div>${ne.time} · ${ne.loc}</div></div>
    </div>`;

  buildDirectory();
  buildEvents();
  buildDuesHistory();
}

// ══ DIRECTORY ════════════════════════════════════════════
function tierClass(t) { return 'tier-' + t.toLowerCase(); }

function buildDirectory() { renderDir(MEMBERS); }

function renderDir(list) {
  const tbody = document.getElementById('dir-body');
  tbody.innerHTML = '';
  list.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><div class="member-name-cell"><img class="member-avatar" src="${m.avatar}" alt="${m.name}"><span>${m.name}</span></div></td>
      <td>${m.chapter}</td><td>${m.role}</td>
      <td><span class="tier-pill ${tierClass(m.tier)}">${m.tier}</span></td>
      <td>${m.joined}</td>`;
    tbody.appendChild(tr);
  });
  const countEl = document.getElementById('member-count');
  if (countEl) countEl.textContent = list.length + ' member' + (list.length !== 1 ? 's' : '');
}

function filterDir() {
  const q = document.getElementById('dir-search').value.toLowerCase();
  const ch = document.getElementById('filter-chapter').value;
  const ti = document.getElementById('filter-tier').value;
  const filtered = MEMBERS.filter(m => {
    const matchQ = !q || m.name.toLowerCase().includes(q) || m.chapter.toLowerCase().includes(q) || m.role.toLowerCase().includes(q);
    const matchC = !ch || m.chapter === ch;
    const matchT = !ti || m.tier === ti;
    return matchQ && matchC && matchT;
  });
  renderDir(filtered);
}

// ══ EVENTS ═══════════════════════════════════════════════
function buildEvents() {
  const el = document.getElementById('events-list');
  el.innerHTML = '';
  EVENTS.forEach((ev, i) => {
    const going = rsvpd.has(i);
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <div class="event-date-box">
        <div class="edb-month">${ev.month}</div>
        <div class="edb-day">${ev.day}</div>
        <div class="edb-year">${ev.year}</div>
      </div>
      <div class="event-info">
        <div class="event-tag">${ev.tag}</div>
        <h3>${ev.title}</h3>
        <div class="emeta">
          <span>📍 ${ev.loc}</span>
          <span>🕐 ${ev.time}</span>
          <span>🏷 ${ev.type}</span>
        </div>
      </div>
      <div class="rsvp-col">
        <button class="rsvp-btn${going ? ' going' : ''}" id="rsvp-btn-${i}" onclick="toggleRSVP(${i})">${going ? '✓ Going' : 'RSVP'}</button>
        ${ev.attending > 0 ? `<div class="rsvp-cnt">${ev.attending} attending</div>` : ''}
      </div>`;
    el.appendChild(card);
  });
}

function toggleRSVP(i) {
  if (rsvpd.has(i)) { rsvpd.delete(i); toast('RSVP cancelled.'); }
  else { rsvpd.add(i); toast('RSVP confirmed for ' + EVENTS[i].title.split('—')[0].trim() + '!'); }
  localStorage.setItem('bbbc-rsvp', JSON.stringify([...rsvpd]));
  buildEvents();
}

// ══ DUES HISTORY ═════════════════════════════════════════
function buildDuesHistory() {
  const tb = document.getElementById('dues-history');
  tb.innerHTML = '';
  DUES_HIST.forEach(h => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${h.date}</td><td>${h.amt}</td><td>${h.method}</td>
      <td><span class="hist-status ${h.status === 'ok' ? 'hist-ok' : 'hist-pend'}">${h.status === 'ok' ? '✓ Paid' : 'Pending'}</span></td>`;
    tb.appendChild(tr);
  });
}

// ══ PROFILE SAVE ═════════════════════════════════════════
function saveProfile() {
  currentUser.fname = document.getElementById('pf-first').value;
  currentUser.lname = document.getElementById('pf-last').value;
  currentUser.name = currentUser.fname + ' ' + currentUser.lname;
  currentUser.email = document.getElementById('pf-email').value;
  currentUser.phone = document.getElementById('pf-phone').value;
  currentUser.bio = document.getElementById('pf-bio').value;
  currentUser.role = document.getElementById('pf-role').value;
  currentUser.chapter = document.getElementById('pf-chapter').value;
  localStorage.setItem('bbbc-member', JSON.stringify(currentUser));
  document.getElementById('dash-name').textContent = currentUser.name;
  document.getElementById('prof-disp-name').textContent = currentUser.name;
  toast('Profile saved.');
}

// ══ TABS ═════════════════════════════════════════════════
function showTab(name, el) {
  document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dash-nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  el.classList.add('active');
}

// ══ TEASER ROWS ══════════════════════════════════════════
function buildTeaserRows() {
  const tb = document.getElementById('teaser-rows');
  if (!tb) return;
  MEMBERS.slice(0, 6).forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><div class="member-name-cell"><img class="member-avatar" src="${m.avatar}" alt=""><span>${m.name}</span></div></td>
      <td>${m.chapter}</td><td>${m.role}</td>
      <td><span class="tier-pill ${tierClass(m.tier)}">${m.tier}</span></td>
      <td>${m.joined}</td>`;
    tb.appendChild(tr);
  });
}

// ══ TOAST ════════════════════════════════════════════════
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
    MEMBERS, EVENTS, DUES_HIST,
    init, showLogin, showDashboard,
    handleLogin, handleLogout, joinNow, capitalize,
    populateDash, tierClass, buildDirectory, renderDir, filterDir,
    buildEvents, toggleRSVP, buildDuesHistory, saveProfile, showTab,
    buildTeaserRows, toast, var_gold,
    _getCurrentUser: () => currentUser,
    _setCurrentUser: (u) => { currentUser = u; },
    _getRsvpd: () => rsvpd,
    _resetState: () => { currentUser = null; rsvpd = new Set(); },
  };
}
