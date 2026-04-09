document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }

  // Sidebar Toggle logic
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  
  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Dashboard Navigation Logic
  const navItems = document.querySelectorAll('.dash-nav-item[data-section]');
  const sections = document.querySelectorAll('.dash-section');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all nav items and sections
      navItems.forEach(nav => nav.classList.remove('active'));
      sections.forEach(sec => sec.classList.remove('active'));

      // Add active class to clicked nav item
      item.classList.add('active');

      // Add active class to corresponding section
      const targetId = item.getAttribute('data-section');
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.classList.add('active');
      }

      // On mobile, close sidebar after making a selection
      if (window.innerWidth <= 992 && sidebar) {
        sidebar.classList.remove('open');
      }
    });
  });
});