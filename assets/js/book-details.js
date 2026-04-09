document.addEventListener("DOMContentLoaded", function() {
      AOS.init({ duration: 1000, once: true, offset: 100 });
      
      // Basic 3D Card Hover Logic (if needed for custom effects)
      const bookCard = document.querySelector('.book-3d-card');
      const container = document.querySelector('.book-3d-wrap');
      
      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        bookCard.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
      });
      
      container.addEventListener('mouseleave', () => {
        bookCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      });
    });