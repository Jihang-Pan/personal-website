import type { APIRoute } from "astro";
import { getPublishedArticles } from "../lib/content";
import {
  escapeXml,
  getConfigurationCollection,
  toAbsoluteUrl,
} from "../lib/utils";

export const prerender = true;

export const GET: APIRoute = async () => {
  const { data: config } = await getConfigurationCollection();
  const articles = await getPublishedArticles();
  const items = articles
    .map((article) => {
      const url = toAbsoluteUrl(
        `/blog/${article.data.slug}`,
        config.site.baseUrl,
      );
      return `<item>
  <title>${escapeXml(article.data.title)}</title>
  <link>${escapeXml(url)}</link>
  <guid isPermaLink="true">${escapeXml(url)}</guid>
  <description>${escapeXml(article.data.description)}</description>
  <pubDate>${article.data.timestamp.toUTCString()}</pubDate>
  ${article.data.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n  ")}
</item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${escapeXml(config.blogMeta.title)}</title>
  <link>${escapeXml(toAbsoluteUrl("/blog", config.site.baseUrl))}</link>
  <description>${escapeXml(config.blogMeta.description)}</description>
  <language>${escapeXml(config.site.language)}</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${items}
</channel>
</rss>`;

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
