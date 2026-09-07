document.addEventListener('DOMContentLoaded', () => {

  // ── Smooth scroll to hash section on page load ──
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }

  // ── Pie chart animation ──
  const charts = document.querySelectorAll('.pie-chart');

  setTimeout(() => {
    charts.forEach((chart) => {
      chart.classList.add('animated');
    });
  }, 150);

  // Re-trigger chart on card hover
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      const chart = card.querySelector('.pie-chart');
      if (chart) {
        chart.classList.remove('animated');
        void chart.offsetWidth;
        chart.classList.add('animated');
      }
    });
  });

});
