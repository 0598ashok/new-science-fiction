document.addEventListener("DOMContentLoaded", function() {
      if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 100 });
      }

      // Sticky Header Logic
      const header = document.querySelector('.site-header');
      if (header) {
        window.addEventListener('scroll', () => {
          header.classList.toggle('scrolled', window.scrollY > 100);
        });
      }
    });