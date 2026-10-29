import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

type Entry = CollectionEntry<'posts'>;

export interface Post {
  slug: string;
  english: Entry;
  portuguese?: Entry;
}

export interface PostPageProps {
  post: Post;
  locale: Locale;
}

export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection('posts');
  const english = new Map<string, Entry>();
  const portuguese = new Map<string, Entry>();

  for (const entry of entries) {
    if (entry.id.startsWith('pt-br/')) {
      portuguese.set(entry.id.slice('pt-br/'.length), entry);
    } else {
      english.set(entry.id, entry);
    }
  }

  for (const slug of portuguese.keys()) {
    if (!english.has(slug)) {
      throw new Error(`The pt-BR translation "${slug}" needs an English post with the same filename.`);
    }
  }

  return [...english].map(([slug, entry]) => ({ slug, english: entry, portuguese: portuguese.get(slug) }))
    .sort((a, b) => b.english.data.date.valueOf() - a.english.data.date.valueOf() || a.slug.localeCompare(b.slug));
}

export function localizePost(post: Post, locale: Locale) {
  const translated = locale === 'pt-br' && post.portuguese;
  return {
    entry: translated || post.english,
    contentLocale: translated ? 'pt-br' as const : 'en' as const,
  };
}

export async function getPostPaths(locale: Locale) {
  return (await getPosts()).map((post) => ({
    params: { id: post.slug },
    props: { post, locale },
  }));
}
