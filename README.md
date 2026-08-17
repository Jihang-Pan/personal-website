# Jihang Pan — 个人博客与项目站点

基于 Astro、TypeScript、Tailwind CSS 和 Content Collections 构建的静态个人站点。中文为默认语言，收录文章、项目、日常与旅游记录，并保留复古像素视觉。

## 本地运行

项目使用 pnpm：

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
pnpm preview
```

## 首次配置

编辑 `content/configuration.toml`：

- 把 `baseUrl` 换成正式域名；
- 确认姓名、首页文案和 GitHub 地址；
- 按需补充邮箱、头像和其他社交账号；
- 调整导航、SEO 标题与描述。

当前配置没有使用未经确认的履历、职业或个人照片。

## 发布文章

在 `content/blogs/` 新建 Markdown 文件。可以复制 `content/templates/article.md`：

```yaml
---
title: 文章标题
slug: stable-english-slug
description: 一句话摘要
tags: ["标签"]
readTime: 5
featured: false
draft: false
timestamp: 2026-08-10T00:00:00+08:00
---
```

中文标题必须填写稳定的英文或数字 slug，例如 `building-my-blog`。草稿设置为 `draft: true` 后不会生成公开页面，也不会进入 RSS 和站点地图。

文章添加 `日常` 标签后会同时出现在 `/daily` 栏目；添加 `旅游`（或 `旅行`）标签后会同时出现在 `/travel` 栏目。

开发服务器会显示草稿并标注“草稿预览”，方便本地检查；生产构建会自动排除草稿。

## 发布项目

在 `content/projects/` 新建 Markdown 文件，或复制 `content/templates/project.md`。支持 GitHub、在线演示、标签、精选和草稿状态。

## 自动生成页面

- `/blog`：文章列表
- `/projects`：项目列表
- `/daily`：带有“日常”标签的文章
- `/travel`：带有“旅游”或“旅行”标签的文章
- `/about`：个人介绍、兴趣与联系方式
- `/now`：最近正在投入时间的事情
- `/uses`：带品牌图标的后端开发工具清单
- `/resume`：工作履历、专业技能与教育背景
- `/archive`：按年份归档
- `/tags`：标签目录
- `/rss.xml`：RSS
- `/sitemap.xml`：站点地图

模板自带的 HTML 示例文章与 Zaggonaut 示例项目已设为草稿，可作为字段参考，正式发布前可以删除。

## 更新个人页面

`/now`、`/uses` 与 `/resume` 的内容集中保存在 `content/configuration.toml`：

- `_.now`：更新时间与近期事项；
- `_.uses`：按分组维护设备和软件；
- `_.resume`：个人简介、技能、工作经历、教育经历和技能证书。

公开前请确认联系方式，并避免填写手机号、详细住址、证件号码等不必要的隐私信息。
