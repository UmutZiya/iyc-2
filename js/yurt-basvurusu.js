// Yurt Başvuru Formu JavaScript
document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;
    const totalSteps = 4;
    
    const form = document.getElementById('yurtForm');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // İlerleme çubuğunu güncelle
    function updateProgress() {
        const progressFill = document.querySelector('.progress-fill');
        const steps = document.querySelectorAll('.step');
        
        // İlerleme çubuğu genişliği
        const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressFill.style.width = progressWidth + '%';
        
        // Adım durumlarını güncelle
        steps.forEach((step, index) => {
            const stepNumber = index + 1;
            step.classList.remove('active', 'completed');
            
            if (stepNumber < currentStep) {
                step.classList.add('completed');
            } else if (stepNumber === currentStep) {
                step.classList.add('active');
            }
        });
    }
    
    // Form adımlarını göster/gizle
    function showStep(step) {
        const formSteps = document.querySelectorAll('.form-step');
        
        formSteps.forEach((formStep, index) => {
            formStep.classList.remove('active');
            if (index + 1 === step) {
                formStep.classList.add('active');
            }
        });
        
        // Buton görünürlüğü
        prevBtn.style.display = step === 1 ? 'none' : 'inline-flex';
        nextBtn.style.display = step === totalSteps ? 'none' : 'inline-flex';
        submitBtn.style.display = step === totalSteps ? 'inline-flex' : 'none';
        
        updateProgress();
    }
    
    // Form doğrulama
    function validateStep(step) {
        const currentFormStep = document.querySelector(`.form-step[data-step="${step}"]`);
        const requiredFields = currentFormStep.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            const errorMessage = field.parentNode.querySelector('.error-message');
            
            // Önceki hata mesajlarını temizle
            field.classList.remove('error');
            if (errorMessage) {
                errorMessage.classList.remove('show');
            }
            
            // Doğrulama kontrolü
            if (!field.value.trim()) {
                field.classList.add('error');
                showError(field, 'Bu alan zorunludur.');
                isValid = false;
            } else {
                // Özel doğrulamalar
                if (field.type === 'email' && !isValidEmail(field.value)) {
                    field.classList.add('error');
                    showError(field, 'Geçerli bir e-posta adresi giriniz.');
                    isValid = false;
                } else if (field.name === 'tcno' && !isValidTCNo(field.value)) {
                    field.classList.add('error');
                    showError(field, 'Geçerli bir T.C. Kimlik No giriniz.');
                    isValid = false;
                } else if (field.type === 'tel' && !isValidPhone(field.value)) {
                    field.classList.add('error');
                    showError(field, 'Geçerli bir telefon numarası giriniz.');
                    isValid = false;
                }
            }
        });
        
        return isValid;
    }
    
    // Hata mesajı göster
    function showError(field, message) {
        let errorMessage = field.parentNode.querySelector('.error-message');
        
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            field.parentNode.appendChild(errorMessage);
        }
        
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
    }
    
    // E-posta doğrulama
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // T.C. Kimlik No doğrulama
    function isValidTCNo(tcno) {
        if (tcno.length !== 11 || !/^\d+$/.test(tcno)) return false;
        
        const digits = tcno.split('').map(Number);
        const sum1 = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
        const sum2 = digits[1] + digits[3] + digits[5] + digits[7];
        
        return (sum1 * 7 - sum2) % 10 === digits[9] &&
               (digits.slice(0, 10).reduce((a, b) => a + b) % 10) === digits[10];
    }
    
    // Telefon doğrulama
    function isValidPhone(phone) {
        const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
    
    // İleri butonu
    nextBtn.addEventListener('click', function() {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            }
        }
    });
    
    // Geri butonu
    prevBtn.addEventListener('click', function() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });
    
    // Form gönderimi
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            // Form verilerini topla
            const formData = new FormData(form);
            
            // Başarı mesajı göster
            showSuccessMessage();
            
            // Gerçek uygulamada burada form verilerini sunucuya gönderebilirsiniz
            console.log('Form gönderildi:', Object.fromEntries(formData));
        }
    });
    
    // Başarı mesajı
    function showSuccessMessage() {
        const container = document.querySelector('.form-container');
        container.innerHTML = `
            <div class="success-message" style="text-align: center; padding: 60px 20px;">
                <div style="color: #28a745; font-size: 4rem; margin-bottom: 20px;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="color: #28a745; margin-bottom: 15px; font-size: 1.8rem;">Başvurunuz Alındı!</h3>
                <p style="color: #6c757d; margin-bottom: 30px; font-size: 1.1rem;">
                    Yurt başvurunuz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </p>
                <a href="index.html" class="btn-next" style="text-decoration: none;">
                    Ana Sayfaya Dön
                    <i class="fas fa-home"></i>
                </a>
            </div>
        `;
    }
    
    // Dosya yükleme görsel geri bildirimi
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const placeholder = this.parentNode.querySelector('.upload-placeholder');
            
            if (this.files.length > 0) {
                const fileName = this.files[0].name;
                placeholder.innerHTML = `
                    <i class="fas fa-check-circle" style="color: #28a745;"></i>
                    <span style="color: #28a745;">${fileName}</span>
                `;
                this.parentNode.style.borderColor = '#28a745';
                this.parentNode.style.background = 'rgba(40, 167, 69, 0.05)';
            }
        });
    });
    
    // T.C. Kimlik No sadece rakam girişi
    const tcInput = document.getElementById('tcno');
    if (tcInput) {
        tcInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
        });
    }
    
    // Telefon formatı
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.startsWith('90')) {
                    value = '+' + value;
                } else if (value.startsWith('5') && value.length === 10) {
                    value = '0' + value;
                }
            }
            this.value = value;
        });
    });
    
    // Sayfa yüklendiğinde ilk adımı göster
    showStep(1);
});