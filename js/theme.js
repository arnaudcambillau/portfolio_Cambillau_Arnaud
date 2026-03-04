/* ==========================================
   THEME.JS — Dark / Light Mode
   ========================================== */

const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const html        = document.documentElement;

// Récupérer le thème sauvegardé ou dark par défaut
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current  = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
    themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => { themeToggle.style.transform = ''; }, 300);
  });
}

function updateIcon(theme) {
  if (!themeIcon) return;
  themeIcon.classList.toggle('fa-moon', theme === 'dark');
  themeIcon.classList.toggle('fa-sun',  theme === 'light');
}

// Suivre la préférence système si pas de choix sauvegardé
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    updateIcon(newTheme);
  }
});
