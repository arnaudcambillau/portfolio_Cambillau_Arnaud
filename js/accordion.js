/* ==========================================
   ACCORDION.JS — Accordéons interactifs
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  if (!accordionHeaders.length) return;

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isActive = item.classList.contains('active');

      // Fermer tous
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
        const btn = el.querySelector('.accordion-header');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      // Ouvrir si pas déjà actif
      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
