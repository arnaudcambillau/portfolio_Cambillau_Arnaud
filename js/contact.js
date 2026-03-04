/* ==========================================
   CONTACT.JS — Formulaire EmailJS
   ========================================== */

const SERVICE_ID  = "service_lkznmif";
const TEMPLATE_ID = "template_vdz4j3c";

// Initialisation EmailJS
emailjs.init("frgOv28kaTULYD4F9");

document.addEventListener('DOMContentLoaded', () => {
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const successEl  = document.getElementById('successAlert');
  const errorEl    = document.getElementById('errorAlert');

  if (!form) return;

  // --- Soumission ---
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    successEl.classList.remove('show');
    errorEl.classList.remove('show');

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled  = true;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
      .then(() => {
        successEl.classList.add('show');
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        form.reset();
        // Retirer les classes de validation
        form.querySelectorAll('input, textarea').forEach(el => {
          el.classList.remove('valid', 'invalid');
          el.style.borderColor = '';
        });
      })
      .catch((err) => {
        const msg = document.getElementById('errorMessage');
        if (msg) msg.textContent = 'Erreur : ' + (err.text || 'inconnue');
        errorEl.classList.add('show');
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .finally(() => {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
        submitBtn.disabled  = false;
      });
  });

  // --- Validation en temps réel ---
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('blur', function () {
      if (this.value.trim() === '' && this.hasAttribute('required')) {
        this.style.borderColor = 'var(--danger)';
      } else if (this.validity.valid) {
        this.style.borderColor = 'var(--success)';
      } else {
        this.style.borderColor = 'var(--danger)';
      }
    });

    el.addEventListener('input', function () {
      this.style.borderColor = '';
    });
  });
});
