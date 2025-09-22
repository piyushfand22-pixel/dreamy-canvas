// Shared site-wide behaviors

// Mark active nav link based on current pathname
(function highlightActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
    else link.classList.remove('active');
  });
})();

// Mobile hamburger toggle (if markup present)
(function setupHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  if (!hamburger || !menu) return;
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
})();


