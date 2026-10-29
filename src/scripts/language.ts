import { getPreferredLocale, isLocale } from '../i18n';

const preferenceKey = 'site-language';

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('a[data-language]');
  if (!link || !isLocale(link.dataset.language)) return;
  try {
    localStorage.setItem(preferenceKey, link.dataset.language);
  } catch {
    // The regular language links also work when browser storage is unavailable.
  }
});

// A prefixed URL is an explicit language choice. Only negotiate unprefixed URLs.
if (document.documentElement.dataset.locale === 'en') {
  let saved: string | null;
  try {
    saved = localStorage.getItem(preferenceKey);
  } catch {
    // Keep manual language selection usable when preferences cannot be saved.
    saved = 'en';
  }

  const preferred = isLocale(saved) ? saved : getPreferredLocale(navigator.languages ?? [navigator.language]);
  const target = document.documentElement.dataset.portugueseUrl;
  if (preferred === 'pt-br' && target && target !== location.pathname) {
    location.replace(`${target}${location.search}${location.hash}`);
  }
}
