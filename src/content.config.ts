import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { parse as parseToml } from "toml";

const optionalImage = z
  .string()
  .refine(
    (value) => value.startsWith("/") || URL.canParse(value),
    "图片必须是站内绝对路径或完整 URL",
  )
  .optional();

const optionalLink = z
  .string()
  .refine(
    (value) => value.startsWith("/") || URL.canParse(value),
    "链接必须是站内绝对路径或完整 URL",
  )
  .optional();

const pageMetadata = z.object({
  title: z.string(),
  description: z.string(),
  longDescription: z.string().optional(),
  cardImage: optionalImage,
  keywords: z.array(z.string()).optional(),
});

const slug = z
  .string()
  .min(1, "slug 不能为空")
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug 只能使用小写字母、数字和连字符");

const configuration = defineCollection({
  loader: file("content/configuration.toml", {
    parser: (text) => JSON.parse(JSON.stringify(parseToml(text))),
  }),
  schema: z.object({
    site: z.object({
      baseUrl: z.url(),
      language: z.string().default("zh-CN"),
      locale: z.string().default("zh-CN"),
    }),
    globalMeta: pageMetadata,
    blogMeta: pageMetadata,
    projectMeta: pageMetadata,
    archiveMeta: pageMetadata,
    tagMeta: pageMetadata,
    aboutMeta: pageMetadata,
    nowMeta: pageMetadata,
    usesMeta: pageMetadata,
    resumeMeta: pageMetadata,
    notFoundMeta: pageMetadata,
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      image: optionalImage,
      primaryCtaText: z.string(),
      primaryCtaUrl: z.string(),
      secondaryCtaText: z.string(),
      secondaryCtaUrl: z.string(),
    }),
    personal: z.object({
      name: z.string(),
      initials: z.string().min(1).max(4),
      role: z.string(),
      location: z.string(),
      interests: z.array(z.string()).min(1),
      bio: z.string(),
      email: z.email().optional(),
      githubProfile: z.url().optional(),
      twitterProfile: z.url().optional(),
      linkedinProfile: z.url().optional(),
    }),
    texts: z.object({
      articlesName: z.string(),
      projectsName: z.string(),
      archiveName: z.string(),
      tagsName: z.string(),
      viewAll: z.string(),
      readArticle: z.string(),
      viewProject: z.string(),
      noArticles: z.string(),
      noProjects: z.string(),
      minutesToRead: z.string(),
      updatedAt: z.string(),
      previousArticle: z.string(),
      nextArticle: z.string(),
      relatedArticles: z.string(),
      backToBlog: z.string(),
    }),
    menu: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      }),
    ),
    profileMenu: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      }),
    ),
    now: z.object({
      updatedAt: z.coerce.date(),
      intro: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          status: z.string().optional(),
          url: optionalLink,
        }),
      ),
    }),
    uses: z.object({
      updatedAt: z.coerce.date(),
      intro: z.string(),
      groups: z.array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          items: z.array(
            z.object({
              name: z.string(),
              description: z.string(),
              url: optionalLink,
            }),
          ),
        }),
      ),
    }),
    resume: z.object({
      status: z.string().optional(),
      targetRoles: z.array(z.string()),
      summary: z.string(),
      availability: z.string().optional(),
      downloadUrl: optionalLink,
      skills: z.array(
        z.object({
          title: z.string(),
          items: z.array(z.string()),
        }),
      ),
      experiences: z.array(
        z.object({
          organization: z.string(),
          role: z.string(),
          location: z.string().optional(),
          start: z.string(),
          end: z.string(),
          description: z.string().optional(),
          highlights: z.array(z.string()).default([]),
        }),
      ),
      education: z.array(
        z.object({
          institution: z.string(),
          degree: z.string(),
          start: z.string().optional(),
          end: z.string().optional(),
          description: z.string().optional(),
        }),
      ),
    }),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/blogs" }),
  schema: z.object({
    title: z.string(),
    slug,
    description: z.string(),
    longDescription: z.string().optional(),
    cardImage: optionalImage,
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    author: z.string().optional(),
    language: z.string().default("zh-CN"),
    readTime: z.number().int().positive().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    timestamp: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
  schema: z.object({
    title: z.string(),
    slug,
    description: z.string(),
    longDescription: z.string().optional(),
    cardImage: optionalImage,
    tags: z.array(z.string()).default([]),
    githubUrl: z.url().optional(),
    liveDemoUrl: z.url().optional(),
    timestamp: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, project, configuration };
