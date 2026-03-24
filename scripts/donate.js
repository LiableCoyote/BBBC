let selectedAmt = 50;

function setAmt(btn, val) {
  document.querySelectorAll('.amt-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedAmt = val;
  document.getElementById('custom-amt').value = '';
  updateDonateBtn();
}

function clearAmtBtns() {
  document.querySelectorAll('.amt-btn').forEach(b => b.classList.remove('active'));
  selectedAmt = parseFloat(document.getElementById('custom-amt').value) || 0;
  updateDonateBtn();
}

function setFreq(btn, freq) {
  document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateDonateBtn();
}

function updateDonateBtn() {
  const amt = parseFloat(document.getElementById('custom-amt').value) || selectedAmt;
  const freq = document.querySelector('.freq-btn.active') ? document.querySelector('.freq-btn.active').textContent : 'One-Time';
  const label = freq === 'One-Time' ? 'Now' : '/' + freq.toLowerCase().replace('ly', '');
  document.getElementById('donate-btn').textContent = 'Donate $' + amt + ' ' + label;
}

function handleDonate(e) {
  e.preventDefault();
  const ref = 'BBBC-' + Date.now().toString(36).toUpperCase();
  document.getElementById('ty-ref').textContent = 'Reference #: ' + ref;
  document.getElementById('ty-overlay').classList.add('open');
}

function closeTY() {
  document.getElementById('ty-overlay').classList.remove('open');
}

// Auto-initialise only in browser context (not when required by Jest)
if (typeof module === 'undefined') {
  updateDonateBtn();
}

if (typeof module !== 'undefined') {
  module.exports = {
    setAmt, clearAmtBtns, setFreq, updateDonateBtn, handleDonate, closeTY,
    _getSelectedAmt: () => selectedAmt,
    _setSelectedAmt: (v) => { selectedAmt = v; },
  };
}
