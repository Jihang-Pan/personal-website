# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- 站点所有者使用 Markdown 持续发布中文文章与项目记录。
- 访客可以阅读文章、了解项目，并在两类内容之间继续探索。
- 主要访客画像尚未明确；不得据此编造职业、客户、履历或专业成就。

## Product Purpose

这是 Jihang Pan 的个人博客与项目站点。写作和项目展示拥有同等权重；成功意味着访客能快速理解站点包含什么，并顺畅进入文章或项目内容。

## Positioning

以复古像素风统一呈现中文写作与项目实践。视觉个性不能牺牲长文阅读、移动体验和无障碍。

## Operating Context

- 内容保存在仓库内，通过 Astro Content Collections 读取 Markdown。
- 站点静态构建，可部署到任意静态托管服务。
- 中文为默认语言；未来是否支持双语仍是开放决定。

## Capabilities and Constraints

- 保留现有 Astro、TypeScript、Tailwind CSS 和 Content Collections 技术底座。
- 支持文章、项目、标签、归档、RSS、站点地图、明暗主题、响应式导航，以及近况、开发工具、网页简历页面。
- 文章需要显式、稳定的 URL slug；中文标题不能导致空 slug。
- 姓名、正式域名、头像、真实简介、社交账号和实际内容必须由用户确认或替换。

## Brand Commitments

- 完整保留复古像素风，而不是改造成普通编辑部或极简博客。
- 像素字体负责品牌与短标题；长文正文必须优先保证中文阅读体验。
- 首页对博客和项目保持同等重视。

## Evidence on Hand

- 现有仓库包含一篇主题示例文章和一个 Zaggonaut 示例项目，它们不是用户经历的证据。
- GitHub 仓库所有者为 `Jihang-Pan`；没有已确认的个人照片、简介、履历或正式域名。

## Product Principles

1. 作者事实集中配置，不在组件中散落占位信息。
2. 复古表达用于建立记忆，正文排版用于承载阅读。
3. 文章与项目互相证明、互相导流，但不伪造关联。
4. 核心内容无需客户端 JavaScript 也能访问。
5. 中文、键盘操作、移动端和空状态都是默认场景，不是后补功能。

## Accessibility & Inclusion

- 导航和主题切换应暴露明确状态，并支持键盘操作。
- 正文保持可缩放、足够对比和舒适行长。
- 动效遵循 `prefers-reduced-motion`。
