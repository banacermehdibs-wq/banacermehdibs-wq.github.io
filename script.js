// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Keyboard accessibility: show cell-info on focus
document.querySelectorAll('.cell-link').forEach(link => {
  link.addEventListener('focus', () => {
    link.closest('.cell').querySelector('.cell-info').style.opacity = 1;
  });
  link.addEventListener('blur', () => {
    link.closest('.cell').querySelector('.cell-info').style.opacity = '';
  });
});

// =============================================
// PROJECT SLIDER — auto-advancing slideshow
// =============================================
document.querySelectorAll('[data-slider]').forEach(slider => {
  const track = slider.querySelector('.proj-slides');
  const dotsWrap = slider.querySelector('.proj-slider-dots');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  // Wait a tick so onerror can hide broken slides before we count them
  setTimeout(() => {
    const slides = Array.from(slider.querySelectorAll('.proj-slide'))
      .filter(s => s.style.display !== 'none');

    if (slides.length <= 1) {
      // nothing to slide — hide controls
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      return;
    }

    let index = 0;
    let timer = null;

    // build dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => { go(i); reset(); });
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function go(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }
    function reset() {
      clearInterval(timer);
      timer = setInterval(next, 4000);
    }

    nextBtn.addEventListener('click', () => { next(); reset(); });
    prevBtn.addEventListener('click', () => { prev(); reset(); });

    // pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', reset);

    reset(); // start auto-advance
  }, 100);
});
