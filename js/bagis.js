 let currentStep = 0;
        const totalSteps = 3;
        let currentPaymentMethod = 'card';

        const form = document.getElementById('donationForm');
        const formSteps = document.querySelectorAll('.form-step');
        const stepIndicators = document.querySelectorAll('.step');
        const stepProgress = document.getElementById('stepProgress');
        const successMessage = document.getElementById('successMessage');

        // Payment tab elements
        const paymentTabs = document.querySelectorAll('.payment-tab');
        const paymentContents = document.querySelectorAll('.payment-content');

        const donationTypeInputs = document.querySelectorAll('input[name="donationType"]');
        const step0NextBtn = document.getElementById('step0Next');

        const donorTypeInputs = document.querySelectorAll('input[name="donorType"]');
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const step1BackBtn = document.getElementById('step1Back');
        const step1NextBtn = document.getElementById('step1Next');

        const cardHolderInput = document.getElementById('cardHolder');
        const cardNumberInput = document.getElementById('cardNumber');
        const amountInput = document.getElementById('amount');
        const ibanAmountInput = document.getElementById('ibanAmount');
        const bankSelect = document.getElementById('bankSelect');
        const expiryMonthSelect = document.getElementById('expiryMonth');
        const expiryYearSelect = document.getElementById('expiryYear');
        const cvvInput = document.getElementById('cvv');
        const step2BackBtn = document.getElementById('step2Back');
        const submitButton = document.getElementById('submitButton');

        // Bank data
        const bankData = {
            bursa_sube_albaraka: {
                name: 'İlim Yayma Cemiyeti Bursa Şubesi - AlbarakaTürk',
                iban: 'TR26 0020 3000 0400 3535 0000 33',
                branch: 'Bursa Şubesi'
            },
            bursa_sube_kuveyt: {
                name: 'İlim Yayma Cemiyeti Bursa Şubesi - Kuveyt Türk',
                iban: 'TR76 0020 5000 0083 3121 5000 01',
                branch: 'Bursa Şubesi'
            },
            bursa_sube_vakif: {
                name: 'İlim Yayma Cemiyeti Bursa Şubesi - Vakıfbank',
                iban: 'TR68 0001 5001 5800 7301 4137 58',
                branch: 'Bursa Şubesi'
            },
            bursa_iktisadi: {
                name: 'İlim Yayma Cemiyeti Bursa İktisadi İşletmesi',
                iban: 'TR30 0001 5001 5800 7298 9784 81',
                branch: 'Vakıfbank'
            },
            abdurrahman_tutan: {
                name: 'Abdurrahman Tutan Yükseköğretim Erkek Öğrenci Yurdu',
                iban: 'TR30 0001 5001 5800 7298 9784 81',
                branch: 'Vakıfbank'
            },
            gevher_sonmez: {
                name: 'Gevher Sönmez Yükseköğretim Erkek Öğrenci Yurdu',
                iban: 'TR10 0001 5001 5800 7306 1847 77',
                branch: 'Vakıfbank'
            },
            mehmet_akif: {
                name: 'Mehmet Akif Buharalı Yükseköğretim Kız Öğrenci Yurdu',
                iban: 'TR29 0001 5001 5800 7301 3455 90',
                branch: 'Vakıfbank'
            },
            keles_yurt: {
                name: 'Keles Yükseköğretim Kız Öğrenci Yurdu',
                iban: 'TR09 0001 0005 0773 8418 1350 01',
                branch: 'Ziraat Bankası'
            },
            mustafa_dortcelik: {
                name: 'Mustafa Dörtçelik Yükseköğretim Kız Öğrenci Konukevi',
                iban: 'TR73 0001 5001 5800 7303 9187 90',
                branch: 'Vakıfbank'
            },
            fethiye_konukevi: {
                name: 'Fethiye Yükseköğretim Kız Öğrenci Konukevi',
                iban: 'TR70 0001 5001 5800 7306 1849 58',
                branch: 'Vakıfbank'
            },
            unsal_konukevi: {
                name: 'Ünsal Yükseköğretim Kız Öğrenci Konukevi',
                iban: 'TR33 0001 5001 5800 7304 8788 40',
                branch: 'Vakıfbank'
            },
            saban_guzeler: {
                name: 'Şaban Güzeler Ortaöğretim Erkek Öğrenci Yurdu',
                iban: 'TR30 0001 5001 5800 7304 8788 94',
                branch: 'Vakıfbank'
            },
            akman_konukevi: {
                name: 'Akman Ortaöğretim Kız Öğrenci Konukevi',
                iban: 'TR42 0001 5001 5800 7304 8786 78',
                branch: 'Vakıfbank'
            }
        };

        const cardNumberDisplay = document.getElementById('cardNumberDisplay');
        const cardHolderDisplay = document.getElementById('cardHolderDisplay');
        const cardExpiryDisplay = document.getElementById('cardExpiryDisplay');

        function initializeYearSelect() {
            const currentYear = new Date().getFullYear();
            for (let i = 0; i < 15; i++) {
                const year = currentYear + i;
                const option = document.createElement('option');
                option.value = year.toString().slice(-2);
                option.textContent = year;
                expiryYearSelect.appendChild(option);
            }
        }

        function updateStepIndicator() {
            stepIndicators.forEach((step, index) => {
                step.classList.remove('active', 'completed');
                if (index < currentStep) {
                    step.classList.add('completed');
                } else if (index === currentStep) {
                    step.classList.add('active');
                }
            });

            const progressWidth = (currentStep / (totalSteps - 1)) * 100;
            stepProgress.style.width = progressWidth + '%';
        }

        function showStep(stepIndex) {
            formSteps.forEach((step, index) => {
                step.classList.remove('active');
                if (index === stepIndex) {
                    step.classList.add('active');
                }
            });
            currentStep = stepIndex;
            updateStepIndicator();
        }

        function validateStep0() {
            const donationType = document.querySelector('input[name="donationType"]:checked');
            step0NextBtn.disabled = !donationType;
        }

        function validateStep1() {
            const donorType = document.querySelector('input[name="donorType"]:checked');
            const firstName = firstNameInput.value.trim();
            const lastName = lastNameInput.value.trim();
            const phone = phoneInput.value.trim();
            const email = emailInput.value.trim();
            const gender = document.querySelector('input[name="gender"]:checked');

            const isValid = donorType && firstName && lastName && phone && email && gender;
            step1NextBtn.disabled = !isValid;
        }

        function validateStep2() {
            let isValid = false;
            
            if (currentPaymentMethod === 'card') {
                const cardHolder = cardHolderInput.value.trim();
                const cardNumber = cardNumberInput.value.replace(/\s/g, '');
                const amount = parseFloat(amountInput.value);
                const expiryMonth = expiryMonthSelect.value;
                const expiryYear = expiryYearSelect.value;
                const cvv = cvvInput.value.trim();

                isValid = cardHolder && 
                         cardNumber.length === 16 && 
                         amount >= 10 && 
                         expiryMonth && 
                         expiryYear && 
                         cvv.length === 3;
            } else if (currentPaymentMethod === 'iban') {
                const ibanAmount = parseFloat(ibanAmountInput.value);
                const selectedBank = hiddenInput ? hiddenInput.value : document.getElementById('bankSelect').value;
                isValid = ibanAmount >= 10 && selectedBank;
            }

            submitButton.disabled = !isValid;
        }

        // Payment tab functionality
        function switchPaymentMethod(method) {
            currentPaymentMethod = method;
            
            // Update tab active states
            paymentTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === method) {
                    tab.classList.add('active');
                }
            });
            
            // Update content active states
            paymentContents.forEach(content => {
                content.classList.remove('active');
            });
            
            if (method === 'card') {
                document.getElementById('cardPayment').classList.add('active');
            } else if (method === 'iban') {
                document.getElementById('ibanPayment').classList.add('active');
            }
            
            validateStep2();
        }



        // Copy selected IBAN function
        function copySelectedIban() {
            const selectedBank = bankSelect.value;
            if (selectedBank && bankData[selectedBank]) {
                const ibanText = bankData[selectedBank].iban;
                navigator.clipboard.writeText(ibanText).then(() => {
                    const copyBtn = document.querySelector('.copy-btn');
                    const originalHTML = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                    copyBtn.style.background = 'rgba(76, 175, 80, 0.3)';
                    
                    setTimeout(() => {
                        copyBtn.innerHTML = originalHTML;
                        copyBtn.style.background = 'rgba(255, 255, 255, 0.2)';
                    }, 2000);
                });
            }
        }

        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            value = value.replace(/\D/g, '');
            if (value.length > 16) value = value.slice(0, 16);
            
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;

            if (value.length > 0) {
                let displayValue = value.match(/.{1,4}/g)?.join(' ') || value;
                while (displayValue.length < 19) {
                    displayValue += '•';
                }
                cardNumberDisplay.textContent = displayValue;
            } else {
                cardNumberDisplay.textContent = '•••• •••• •••• ••••';
            }

            validateStep2();
        });

        cardHolderInput.addEventListener('input', function(e) {
            const value = e.target.value.toUpperCase();
            e.target.value = value;
            cardHolderDisplay.textContent = value || 'AD SOYAD';
            validateStep2();
        });

        function updateExpiryDisplay() {
            const month = expiryMonthSelect.value;
            const year = expiryYearSelect.value;
            if (month && year) {
                cardExpiryDisplay.textContent = `${month}/${year}`;
            } else {
                cardExpiryDisplay.textContent = 'AA/YY';
            }
            validateStep2();
        }

        expiryMonthSelect.addEventListener('change', updateExpiryDisplay);
        expiryYearSelect.addEventListener('change', updateExpiryDisplay);

        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
            validateStep2();
        });

        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 0) {
                if (value.length <= 4) {
                    e.target.value = value;
                } else if (value.length <= 7) {
                    e.target.value = value.slice(0, 4) + ' ' + value.slice(4);
                } else if (value.length <= 9) {
                    e.target.value = value.slice(0, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7);
                } else {
                    e.target.value = value.slice(0, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7, 9) + ' ' + value.slice(9);
                }
            }
            validateStep1();
        });

        donationTypeInputs.forEach(input => {
            input.addEventListener('change', validateStep0);
        });

        step0NextBtn.addEventListener('click', () => {
            showStep(1);
        });

        donorTypeInputs.forEach(input => {
            input.addEventListener('change', validateStep1);
        });

        [firstNameInput, lastNameInput, emailInput].forEach(input => {
            input.addEventListener('input', validateStep1);
        });

        genderInputs.forEach(input => {
            input.addEventListener('change', validateStep1);
        });

        step1BackBtn.addEventListener('click', () => {
            showStep(0);
        });

        step1NextBtn.addEventListener('click', () => {
            showStep(2);
        });

        [amountInput, ibanAmountInput].forEach(input => {
            input.addEventListener('input', validateStep2);
        });

        // Custom select functionality
        const customSelect = document.getElementById('customSelect');
        const selectTrigger = customSelect.querySelector('.select-trigger');
        const selectOptions = customSelect.querySelector('.select-options');
        const selectText = customSelect.querySelector('.select-text');
        const hiddenInput = document.getElementById('bankSelect');
        const options = customSelect.querySelectorAll('.option');

        selectTrigger.addEventListener('click', () => {
            selectTrigger.classList.toggle('active');
            selectOptions.classList.toggle('show');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.dataset.value;
                const text = option.querySelector('span').textContent;
                
                // Update display
                selectText.textContent = text;
                selectText.classList.remove('placeholder');
                
                // Update hidden input
                hiddenInput.value = value;
                
                // Update selected state
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                // Close dropdown
                selectTrigger.classList.remove('active');
                selectOptions.classList.remove('show');
                
                // Trigger bank selection
                handleBankSelection();
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!customSelect.contains(e.target)) {
                selectTrigger.classList.remove('active');
                selectOptions.classList.remove('show');
            }
        });

        // Update handleBankSelection to work with hidden input
        function handleBankSelection() {
            const selectedBank = hiddenInput.value;
            const bankInfo = document.getElementById('selectedBankInfo');
            
            if (selectedBank && bankData[selectedBank]) {
                const bank = bankData[selectedBank];
                document.getElementById('bankName').textContent = bank.name;
                document.getElementById('selectedIban').textContent = bank.iban;
                document.getElementById('branchCode').textContent = bank.branch;
                bankInfo.style.display = 'block';
            } else {
                bankInfo.style.display = 'none';
            }
            
            validateStep2();
        }

        // Payment tab event listeners
        paymentTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                switchPaymentMethod(tab.dataset.tab);
            });
        });

        step2BackBtn.addEventListener('click', () => {
            showStep(1);
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const baseFormData = {
                donationType: document.querySelector('input[name="donationType"]:checked').value,
                donorType: document.querySelector('input[name="donorType"]:checked').value,
                firstName: firstNameInput.value.trim(),
                lastName: lastNameInput.value.trim(),
                phone: phoneInput.value.trim(),
                email: emailInput.value.trim(),
                gender: document.querySelector('input[name="gender"]:checked').value,
                note: document.getElementById('note').value.trim(),
                paymentMethod: currentPaymentMethod
            };

            let formData = { ...baseFormData };

            if (currentPaymentMethod === 'card') {
                formData = {
                    ...formData,
                    cardHolder: cardHolderInput.value.trim(),
                    cardNumber: cardNumberInput.value.replace(/\s/g, ''),
                    amount: parseFloat(amountInput.value),
                    expiryMonth: expiryMonthSelect.value,
                    expiryYear: expiryYearSelect.value,
                    cvv: cvvInput.value.trim()
                };
            } else if (currentPaymentMethod === 'iban') {
                const selectedBank = document.getElementById('bankSelect').value;
                formData = {
                    ...formData,
                    amount: parseFloat(ibanAmountInput.value),
                    selectedBank: selectedBank,
                    accountName: bankData[selectedBank]?.name,
                    iban: bankData[selectedBank]?.iban
                };
            }

            console.log('[v0] Bağış Bilgileri:', formData);

            form.style.display = 'none';
            document.querySelector('.step-indicator').style.display = 'none';
            successMessage.classList.add('show');

            setTimeout(() => {
                form.reset();
                currentStep = 0;
                currentPaymentMethod = 'card';
                switchPaymentMethod('card');
                showStep(0);
                validateStep0();
                validateStep1();
                validateStep2();
                form.style.display = 'block';
                document.querySelector('.step-indicator').style.display = 'flex';
                successMessage.classList.remove('show');
                cardNumberDisplay.textContent = '•••• •••• •••• ••••';
                cardHolderDisplay.textContent = 'AD SOYAD';
                cardExpiryDisplay.textContent = 'AA/YY';
            }, 5000);
        });

        initializeYearSelect();
        updateStepIndicator();
        validateStep0();
        // Make copyIban function globally accessible
        window.copyIban = function() {
            const ibanText = 'TR64 0006 4000 0011 2345 6789 01';
            navigator.clipboard.writeText(ibanText).then(() => {
                const copyBtn = document.querySelector('.copy-btn');
                const originalHTML = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                copyBtn.style.background = 'rgba(76, 175, 80, 0.3)';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                    copyBtn.style.background = 'rgba(255, 255, 255, 0.2)';
                }, 2000);
            });
        };

        // Make copy function globally accessible
        window.copySelectedIban = copySelectedIban;