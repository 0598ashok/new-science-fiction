document.addEventListener("DOMContentLoaded", function() {
      if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 100 });
      }

      const togglePassword = document.querySelector('#togglePassword');
      const password = document.querySelector('#password');
      const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
      const confirmPassword = document.querySelector('#confirm-password');
  
      if (togglePassword && password) {
          togglePassword.addEventListener('click', function (e) {
              const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
              password.setAttribute('type', type);
              this.classList.toggle('fa-eye-slash');
          });
      }

      if (toggleConfirmPassword && confirmPassword) {
          toggleConfirmPassword.addEventListener('click', function (e) {
              const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
              confirmPassword.setAttribute('type', type);
              this.classList.toggle('fa-eye-slash');
          });
      }
    });