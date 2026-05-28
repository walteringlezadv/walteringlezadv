import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const articles = await getCollection('articles');
  return rss({
    title: 'Walter Inglez Advocacia — Blog Jurídico',
    description: 'Gestão estratégica de passivo bancário empresarial. Conteúdo técnico para empresários PJ.',
    site: context.site,
    items: articles.map((post: any) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.excerpt,
      link: `/artigos/${post.slug}/`,
    })),
    customData: `<language>pt-BR</language>`,
  });
}
