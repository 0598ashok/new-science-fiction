document.addEventListener("DOMContentLoaded", function () {
      AOS.init({ duration: 800, once: true, offset: 100 });

      // Clean navbar styles on scroll
      window.addEventListener('scroll', function() {
          const header = document.querySelector('.site-header');
          if (window.scrollY > 50) {
              header.classList.add('scrolled');
          } else {
              header.classList.remove('scrolled');
          }
      });
    });