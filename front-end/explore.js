document.addEventListener('DOMContentLoaded', () => {
  // Trigger pie chart animation on load
  const charts = document.querySelectorAll('.pie-chart');

  // Small timeout to allow the browser to paint before starting transition
  setTimeout(() => {
    charts.forEach((chart) => {
      chart.classList.add('animated');
    });
  }, 150);

  // Optional: re-trigger chart spin/fill effect on card hover
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {

    card.addEventListener('mouseenter', () => {
      const chart = card.querySelector('.pie-chart');
      if (chart) {
        chart.classList.remove('animated');
        void chart.offsetWidth; // Force reflow
        chart.classList.add('animated');
      }
    });
  });
});
