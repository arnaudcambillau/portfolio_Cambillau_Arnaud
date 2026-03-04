/* ==========================================
   CONTACT.JS - Formulaire EmailJS
   ========================================== */

// 🔑 CONFIGURATION
const SERVICE_ID = "service_lkznmif";
const TEMPLATE_ID = "template_vdz4j3c";

// Initialisation EmailJS
emailjs.init("frgOv28kaTULYD4F9");

// Gestion du formulaire
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const successAlert = document.getElementById('successAlert');
        const errorAlert = document.getElementById('errorAlert');
        
        // Cacher les alertes
        successAlert.classList.remove('show');
        errorAlert.classList.remove('show');
        
        // Désactiver le bouton et afficher loading
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        // Envoyer l'email
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(function(response) {
                // Afficher message de succès
                successAlert.classList.add('show');
                successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Réinitialiser le formulaire
                form.reset();
                
                // Restaurer le bouton
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
                submitBtn.disabled = false;
                
            }, function(error) {
                // Afficher message d'erreur
                document.getElementById('errorMessage').textContent = 
                    'Une erreur s\'est produite : ' + error.text;
                errorAlert.classList.add('show');
                errorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Restaurer le bouton
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
                submitBtn.disabled = false;
            });
    });
    
    // Validation en temps réel
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.validity.valid) {
                this.style.borderColor = 'var(--accent-green)';
            } else {
                this.style.borderColor = '#ef4444';
            }
        });
        
        input.addEventListener('input', function() {
            this.style.borderColor = 'var(--border-color)';
        });
    });
});
