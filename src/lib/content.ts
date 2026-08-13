import { getCollection } from "astro:content";

export const toTagSlug = (tag: string) => {
  const normalized = tag
    .normalize("NFKC")
    .toLocaleLowerCase("zh-CN")
    .trim()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

  return (
    normalized ||
    `tag-${Array.from(tag)
      .map((character) => character.codePointAt(0)?.toString(16))
      .join("-")}`
  );
};

export const getPublishedArticles = async () =>
  (
    await getCollection(
      "blog",
      ({ data }) => import.meta.env.DEV || !data.draft,
    )
  ).sort((a, b) => b.data.timestamp.valueOf() - a.data.timestamp.valueOf());

export const getPublishedProjects = async () =>
  (
    await getCollection(
      "project",
      ({ data }) => import.meta.env.DEV || !data.draft,
    )
  ).sort((a, b) => b.data.timestamp.valueOf() - a.data.timestamp.valueOf());

export const getArticleTags = async () => {
  const articles = await getPublishedArticles();
  const counts = new Map<string, number>();

  for (const article of articles) {
    for (const tag of article.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, slug: toTagSlug(name) }))
    .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
};

export const getRelatedArticles = async (
  currentSlug: string,
  tags: string[],
  limit = 3,
) => {
  const articles = await getPublishedArticles();

  return articles
    .filter((article) => article.data.slug !== currentSlug)
    .map((article) => ({
      article,
      relevance: article.data.tags.filter((tag) => tags.includes(tag)).length,
    }))
    .filter(({ relevance }) => relevance > 0)
    .sort(
      (a, b) =>
        b.relevance - a.relevance ||
        b.article.data.timestamp.valueOf() - a.article.data.timestamp.valueOf(),
    )
    .slice(0, limit)
    .map(({ article }) => article);
};
