// LED Growth Portfolio — script.js

// Fade-up scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Nav background on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('top-nav');
  nav.style.background = window.scrollY > 50
    ? 'rgba(10,10,10,0.97)'
    : 'rgba(10,10,10,0.88)';
});

// Contact form submit feedback
function handleSubmit(btn) {
  btn.textContent = 'Message sent! ✓';
  btn.style.background = '#60d4f0';
  btn.style.color = '#0a0a0a';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
}
