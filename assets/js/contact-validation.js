/**
 * Form Validation for Contact Page
 */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input[required], textarea[required], select[required]');
            
            inputs.forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                showSuccessMessage();
            }
        });
        
        // Real-time validation
        contactForm.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('is-invalid')) {
                    validateInput(input);
                }
            });
        });
    }
    
    function validateInput(input) {
        let isValid = true;
        const value = input.value.trim();
        
        // Remove existing state
        input.classList.remove('is-invalid');
        
        // Required check
        if (input.hasAttribute('required') && value === '') {
            isValid = false;
        }
        
        // Email check
        if (isValid && input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
            }
        }
        
        if (!isValid) {
            input.classList.add('is-invalid');
            
            // Add error feedback if it doesn't exist
            let feedback = input.parentNode.querySelector('.invalid-feedback');
            if (!feedback) {
                feedback = document.createElement('div');
                feedback.className = 'invalid-feedback';
                input.parentNode.appendChild(feedback);
            }
            
            if (value === '') {
                feedback.textContent = 'This transmission channel cannot be empty.';
            } else if (input.type === 'email') {
                feedback.textContent = 'Please provide a valid galactic coordinate (email).';
            } else {
                feedback.textContent = 'Invalid transmission content.';
            }
        }
        
        return isValid;
    }
    
    function showSuccessMessage() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Transmitting...';
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.style.backgroundColor = '#10b981';
            submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Transmission Received';
            
            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                
                // Remove all validation states
                contactForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
            }, 3000);
        }, 1500);
    }
});
