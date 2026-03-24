function filterCards(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.first-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

window.addEventListener('scroll', () => {
  const doc = document.documentElement;
  const scrolled = doc.scrollTop || document.body.scrollTop;
  const total = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = (scrolled / total * 100) + '%';
});

if (typeof module !== 'undefined') module.exports = { filterCards };
