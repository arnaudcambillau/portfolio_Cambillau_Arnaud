/* ==========================================
   CONTACT.JS - Formulaire EmailJS
   ========================================== */

console.log('🔍 contact.js chargé !');

// 🔑 CONFIGURATION
const SERVICE_ID = "service_lkznmif";
const TEMPLATE_ID = "template_vdz4j3c";  // ⬅️ NOUVEAU ID !

// Initialisation EmailJS
emailjs.init("frgOv28kaTULYD4F9");

console.log('✅ EmailJS initialisé !');

// Gestion du formulaire
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM chargé !');
    
    const form = document.getElementById('contactForm');
    
    if (!form) {
        console.error('❌ Formulaire non trouvé !');
        return;
    }
    
    console.log('📋 Formulaire trouvé !');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('🚀 Formulaire soumis !');
        
        const submitBtn = document.getElementById('submitBtn');
        const successAlert = document.getElementById('successAlert');
        const errorAlert = document.getElementById('errorAlert');
        
        // Cacher les alertes
        successAlert.classList.remove('show');
        errorAlert.classList.remove('show');
        
        // Désactiver le bouton et afficher loading
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        console.log('📤 Envoi à EmailJS...');
        
        // Envoyer l'email
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(function(response) {
                console.log('✅ SUCCÈS !', response.status, response.text);
                
                // Afficher message de succès
                successAlert.classList.add('show');
                successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Réinitialiser le formulaire
                form.reset();
                
                // Restaurer le bouton
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
                submitBtn.disabled = false;
                
            }, function(error) {
                console.error('❌ ERREUR :', error);
                
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