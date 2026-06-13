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
