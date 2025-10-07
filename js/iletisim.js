// İletişim Formu JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Form alanları için real-time validasyon
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidation);
        });
    }
});

// Form gönderimi
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Form validasyonu
    if (!validateForm(form)) {
        return;
    }
    
    // Loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Form verilerini topla
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simüle edilmiş form gönderimi (gerçek implementasyonda API çağrısı yapılacak)
    setTimeout(() => {
        console.log('Form verileri:', data);
        
        // Başarı mesajı göster
        showMessage('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
        
        // Formu temizle
        form.reset();
        clearAllValidations(form);
        
        // Loading state'i kaldır
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
    }, 2000);
}

// Form validasyonu
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Tek alan validasyonu
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let message = '';
    
    // Boş alan kontrolü
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'Bu alan zorunludur.';
    }
    
    // E-posta validasyonu
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Geçerli bir e-posta adresi giriniz.';
        }
    }
    
    // Telefon validasyonu
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            message = 'Geçerli bir telefon numarası giriniz.';
        }
    }
    
    // Minimum karakter kontrolü
    if (field.name === 'message' && value && value.length < 10) {
        isValid = false;
        message = 'Mesajınız en az 10 karakter olmalıdır.';
    }
    
    // Validasyon sonucunu göster
    showFieldValidation(field, isValid, message);
    
    return isValid;
}

// Alan validasyon görselini göster
function showFieldValidation(field, isValid, message) {
    // Önceki validasyon sınıflarını temizle
    field.classList.remove('is-valid', 'is-invalid');
    
    // Önceki mesajları temizle
    const existingFeedback = field.parentNode.querySelector('.invalid-feedback, .valid-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    if (field.value.trim()) {
        if (isValid) {
            field.classList.add('is-valid');
        } else {
            field.classList.add('is-invalid');
            
            // Hata mesajı ekle
            const feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            feedback.textContent = message;
            field.parentNode.appendChild(feedback);
        }
    }
}

// Validasyon temizleme
function clearValidation(e) {
    const field = e.target;
    if (!field.value.trim()) {
        field.classList.remove('is-valid', 'is-invalid');
        const feedback = field.parentNode.querySelector('.invalid-feedback, .valid-feedback');
        if (feedback) {
            feedback.remove();
        }
    }
}

// Tüm validasyonları temizle
function clearAllValidations(form) {
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(field => {
        field.classList.remove('is-valid', 'is-invalid');
        const feedback = field.parentNode.querySelector('.invalid-feedback, .valid-feedback');
        if (feedback) {
            feedback.remove();
        }
    });
}

// Mesaj gösterme
function showMessage(text, type = 'info') {
    // Önceki mesajları temizle
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Yeni mesaj oluştur
    const message = document.createElement('div');
    message.className = `form-message alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
    message.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} me-2"></i>
        ${text}
    `;
    
    // Mesajı forma ekle
    const form = document.getElementById('contactForm');
    form.appendChild(message);
    
    // Mesajı otomatik kaldır
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 5000);
    
    // Mesaja scroll yap
    message.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Telefon numarası formatlaması
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.startsWith('90')) {
                    value = '+' + value;
                } else if (value.startsWith('0')) {
                    value = '+90 ' + value.substring(1);
                } else if (!value.startsWith('+')) {
                    value = '+90 ' + value;
                }
            }
            e.target.value = value;
        });
    }
});

// Smooth scroll için harita tıklama
document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.addEventListener('click', function() {
            this.scrollIntoView({ behavior: 'smooth' });
        });
    }
});