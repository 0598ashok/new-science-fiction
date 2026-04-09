document.addEventListener("DOMContentLoaded", function () {
      AOS.init({ duration: 1000, once: true, offset: 100 });

      // Update Nav Dots
      window.addEventListener('scroll', updateNavDots);
      function updateNavDots() {
        const sections = ['hero', 'series', 'lexicon', 'archive'];
        const dots = document.querySelectorAll('.nav-dot');
        sections.forEach((id, index) => {
          const section = document.getElementById(id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              dots.forEach(d => d.classList.remove('active'));
              dots[index].classList.add('active');
            }
          }
        });
      }
    });

    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }