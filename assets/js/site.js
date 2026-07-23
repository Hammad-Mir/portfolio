(() => {
  const root = document.documentElement;
  const theme = document.querySelector('.theme-button');
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('.primary-nav');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.dataset.theme = savedTheme;
  const updateThemeLabel = () => theme?.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Use light theme' : 'Use dark theme');
  updateThemeLabel();
  theme?.addEventListener('click', () => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('theme', root.dataset.theme); updateThemeLabel(); });
  menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu?.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }));
})();
