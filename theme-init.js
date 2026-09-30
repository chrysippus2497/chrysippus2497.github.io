/* Runs before the stylesheet so a saved preference is applied before first paint. */
(() => {
  'use strict';
  const key = 'portfolio-v2-theme';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: light)');
  const valid = value => ['dark', 'light', 'system'].includes(value);
  let preference = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (valid(saved)) preference = saved;
  } catch { /* Storage may be unavailable; keep a working session preference. */ }

  function apply() {
    const theme = preference === 'system' ? (system.matches ? 'light' : 'dark') : preference;
    root.dataset.theme = theme;
    root.dataset.themePreference = preference;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#141514' : '#f4f1e9');
    window.dispatchEvent(new Event('portfolio-theme-change'));
  }
  window.portfolioTheme = {
    set(value) {
      if (!valid(value)) return;
      preference = value;
      try {
        if (value === 'system') localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      } catch { /* Controls remain usable without persistent storage. */ }
      apply();
    }
  };
  system.addEventListener('change', () => { if (preference === 'system') apply(); });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = valid(event.newValue) ? event.newValue : 'system';
    apply();
  });
  apply();
})();
