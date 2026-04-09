/**
 * Main JavaScript File
 * Author Template: Science Fiction / Fantasy
 */

document.addEventListener('DOMContentLoaded', () => {
  // ── Mobile Menu Setup ──────────────────────────────────────────────────────
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu      = document.querySelector('.nav-menu');

  // Inject overlay backdrop into body (once)
  let navOverlay = document.querySelector('.nav-overlay');
  if (!navOverlay) {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
  }

  function openMenu() {
    navMenu.classList.add('active');
    mobileToggle.classList.add('active');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('active');
    mobileToggle.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
    // Collapse all open dropdowns
    document.querySelectorAll('.nav-item-dropdown.open').forEach(d => d.classList.remove('open'));
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close on overlay click
  navOverlay.addEventListener('click', closeMenu);

  // ── Mobile Accordion Dropdowns ─────────────────────────────────────────────
  // On mobile widths, dropdown-toggle clicks open/close inline panel
  document.querySelectorAll('.nav-item-dropdown').forEach(dropdownEl => {
    const toggle = dropdownEl.querySelector('.dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      // Only intercept on mobile breakpoint
      if (window.innerWidth > 1100) return;

      e.preventDefault();
      e.stopPropagation();

      const isOpen = dropdownEl.classList.contains('open');
      // Close all others first
      document.querySelectorAll('.nav-item-dropdown.open').forEach(d => {
        if (d !== dropdownEl) d.classList.remove('open');
      });
      dropdownEl.classList.toggle('open', !isOpen);
    });
  });

  // Close menu when a non-dropdown nav link is clicked (mobile)
  navMenu && navMenu.querySelectorAll('a.nav-link:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1100) closeMenu();
    });
  });

  // Close menu when a dropdown item is clicked (mobile)
  navMenu && navMenu.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 1100) closeMenu();
    });
  });

  // Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Dark/Light Theme Toggle
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const userPref = localStorage.getItem('theme');
  const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  const currentTheme = userPref || systemPref;
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      let isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      let toggleTo = isDark ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', toggleTo);
      localStorage.setItem('theme', toggleTo);
    });
  });

  // Basic Particles Effect Placeholder (Hero Section)
  const particlesContainer = document.querySelector('.particles');
  if (particlesContainer) {
    createParticles(particlesContainer);
  }

  // Initialize Skeleton Loaders removal mock
  setTimeout(() => {
    document.querySelectorAll('.skeleton').forEach(el => {
      el.classList.remove('skeleton');
    });
  }, 1000);
});

// Simple floating orbs effect placeholder
function createParticles(container) {
  for(let i=0; i<30; i++) {
    const p = document.createElement('div');
    p.style.position = 'absolute';
    p.style.width = Math.random() * 5 + 'px';
    p.style.height = p.style.width;
    p.style.background = 'rgba(212, 175, 55, ' + (Math.random() * 0.5 + 0.1) + ')';
    p.style.borderRadius = '50%';
    p.style.top = Math.random() * 100 + '%';
    p.style.left = Math.random() * 100 + '%';
    p.style.boxShadow = '0 0 10px rgba(212,175,55,0.8)';
    
    // Animate them
    let delay = Math.random() * 5 + 's';
    let duration = Math.random() * 10 + 10 + 's';
    
    p.style.animation = `float ${duration} infinite ease-in-out ${delay}`;
    
    container.appendChild(p);
  }
}

// Global CSS animation for particles
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translate(0, 0) scale(1); opacity: 0.2; }
    50% { transform: translate(${Math.random() * 50 - 25}px, -${Math.random() * 100 + 50}px) scale(1.5); opacity: 0.8; }
    100% { transform: translate(0, -200px) scale(0); opacity: 0; }
  }
`;
document.head.appendChild(style);
