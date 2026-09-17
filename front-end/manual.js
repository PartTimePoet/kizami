document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.manual-section');
  const scrollArrow = document.querySelector('.scroll-arrow');

  window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY + window.innerHeight / 2;
    
    let currentIndex = 0;
    sections.forEach((sec, idx) => {
      if (sec.offsetTop <= currentScroll) {
        currentIndex = idx;
      }
    });

    if (currentIndex < sections.length - 1) {
      // Point to next section within the page
      const targetId = sections[currentIndex + 1].id;
      scrollArrow.setAttribute('href', `#${targetId}`);
      scrollArrow.textContent = '↓';
      scrollArrow.style.display = 'flex';
    } else {
      // At the last section — link to history page
      scrollArrow.setAttribute('href', 'history.html');
      scrollArrow.textContent = '→';
      scrollArrow.style.display = 'flex';
    }
  });
});
