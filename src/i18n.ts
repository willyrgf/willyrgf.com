export const locales = ['en', 'pt-br'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const languageTags: Record<Locale, string> = { en: 'en', 'pt-br': 'pt-BR' };

const messages = {
  en: {
    navigation: 'Main navigation',
    about: 'About',
    posts: 'Posts',
    skipToContent: 'Skip to content',
    allPosts: '← All posts',
    switchLanguage: 'Ler em português brasileiro',
    englishOnly: 'In English',
    englishFallback: 'This post is available in English only.',
  },
  'pt-br': {
    navigation: 'Navegação principal',
    about: 'Sobre',
    posts: 'Publicações',
    skipToContent: 'Pular para o conteúdo',
    allPosts: '← Todos os textos',
    switchLanguage: 'Read in English',
    englishOnly: 'Em inglês',
    englishFallback: 'Este texto ainda não tem tradução para português. Exibindo a versão em inglês.',
  },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getMessages(locale: Locale) {
  return messages[locale];
}

export function getPreferredLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const code = language.toLowerCase().split('-')[0];
    if (code === 'pt') return 'pt-br';
    if (code === 'en') return 'en';
  }
  return defaultLocale;
}

export function localizedPath(locale: Locale, path = '', base = import.meta.env.BASE_URL): string {
  const prefix = base.endsWith('/') ? base : `${base}/`;
  const suffix = path.replace(/^\/+|\/+$/g, '');
  return `${prefix}${locale === defaultLocale ? '' : `${locale}/`}${suffix}${suffix ? '/' : ''}`;
}

export function unlocalizedPath(pathname: string, base = import.meta.env.BASE_URL): string {
  const prefix = base.endsWith('/') ? base : `${base}/`;
  const relative = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : pathname.replace(/^\/+/, '');
  const segments = relative.replace(/\/+$/, '').split('/');
  if (isLocale(segments[0])) segments.shift();
  return segments.join('/');
}
