/* Load before the stylesheet so saved overrides apply before first paint.
   With no override, CSS follows the system preference, including live changes. */
(() => {
  const storageKey = 'stasis-color-theme';
  const root = document.documentElement;
  const normalize = value => value === 'light' || value === 'dark' ? value : 'system';
  const apply = value => {
    const theme = normalize(value);
    if (theme === 'system') root.removeAttribute('data-theme');
    else root.dataset.theme = theme;
    const select = document.getElementById('theme-select');
    if (select) select.value = theme;
  };

  try { apply(localStorage.getItem(storageKey)); } catch { /* Use system if storage is unavailable. */ }

  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('theme-select');
    if (!select) return;
    select.value = normalize(root.dataset.theme);
    select.closest('.theme-control').hidden = false;
    select.addEventListener('change', () => {
      apply(select.value);
      try {
        if (select.value === 'system') localStorage.removeItem(storageKey);
        else localStorage.setItem(storageKey, select.value);
      } catch { /* The override still works for this page without storage. */ }
    });
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) apply(event.newValue);
  });
})();
