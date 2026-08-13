import type { APIRoute } from "astro";
import {
  getArticleTags,
  getPublishedArticles,
  getPublishedProjects,
} from "../lib/content";
import {
  escapeXml,
  getConfigurationCollection,
  toAbsoluteUrl,
} from "../lib/utils";

export const prerender = true;

export const GET: APIRoute = async () => {
  const { data: config } = await getConfigurationCollection();
  const [articles, projects, tags] = await Promise.all([
    getPublishedArticles(),
    getPublishedProjects(),
    getArticleTags(),
  ]);
  const paths = [
    "/",
    "/blog",
    "/projects",
    "/daily",
    "/travel",
    "/about",
    "/archive",
    "/tags",
    ...articles.map((article) => `/blog/${article.data.slug}`),
    ...projects.map((project) => `/projects/${project.data.slug}`),
    ...tags.map((tag) => `/tags/${tag.slug}`),
  ];
  const urls = paths
    .map(
      (path) =>
        `<url><loc>${escapeXml(toAbsoluteUrl(path, config.site.baseUrl))}</loc></url>`,
    )
    .join("\n  ");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
