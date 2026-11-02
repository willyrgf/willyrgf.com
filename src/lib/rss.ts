import rss from '@astrojs/rss';
import { languageTags, localizedPath, type Locale } from '../i18n';
import { siteConfig } from '../site.config';
import { getPosts, localizePost } from './posts';

export async function getRssFeed(locale: Locale) {
  const posts = await getPosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description[locale],
    site: new URL(localizedPath(locale), siteConfig.url),
    customData: `<language>${languageTags[locale]}</language>`,
    items: posts.map((post) => {
      const { entry } = localizePost(post, locale);
      return {
        title: entry.data.title,
        description: entry.data.description,
        pubDate: post.english.data.date,
        link: new URL(localizedPath(locale, `posts/${post.slug}`), siteConfig.url).href,
      };
    }),
  });
}
