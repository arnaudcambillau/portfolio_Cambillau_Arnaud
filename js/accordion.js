/* ==========================================
   ACCORDION.JS - Accordéons interactifs
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Fermer tous les accordéons
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.accordion-header');
                if (btn) {
                    btn.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Ouvrir l'accordéon cliqué si il n'était pas actif
            if (!isActive) {
                accordionItem.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
});