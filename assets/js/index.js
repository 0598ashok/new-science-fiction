document.addEventListener("DOMContentLoaded", function () {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });

      // Sticky Header Logic
      const header = document.querySelector('.site-header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });

      // Testimonial Carousel Initialization
      const testimonialSwiper = new Swiper('.testimonial-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }
      });

      // FAQ Accordion Logic
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          
          // Close all other items
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
          });

          // Toggle current item
          if (!isActive) {
            item.classList.add('active');
          }
        });
      });
    });

    // 3D Card Tilt Interaction with Parallax and Shine
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
      const shine = card.querySelector('.shine-layer');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15; // Increased Tilt for depth visibility
        const rotateY = ((x - centerX) / centerX) * 15;

        // Update Card Transform
        card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

        // Update Shine Position
        const shineX = (x / rect.width) * 100;
        const shineY = (y / rect.height) * 100;
        card.style.setProperty('--shine-x', `${shineX}%`);
        card.style.setProperty('--shine-y', `${shineY}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease';
        card.style.transform = `perspective(2000px) rotateX(4deg) rotateY(-4deg) scale3d(1, 1, 1)`;
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.05s linear, box-shadow 0.3s ease';
      });
    });