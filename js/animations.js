/* ==========================================
   ANIMATIONS.JS — Scroll reveal & animations
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {

  // --- Page fade-in ---
  document.body.classList.add('loaded');

  // --- Scroll Reveal ---
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObs.observe(el));
  }

  // --- Skill Bars Animation ---
  const bars = document.querySelectorAll('.skill-bar');
  if (bars.length) {
    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('animated'), 200);
          barObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    bars.forEach(bar => barObs.observe(bar));
  }

  // --- Active nav link on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (sections.length && navLinks.length) {
    const onScroll = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 160) current = s.getAttribute('id');
      });
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current ||
            a.getAttribute('href') === current + '.html') {
          a.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
