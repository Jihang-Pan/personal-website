---
target: 把现有 Astro 项目改成个人博客站点
total_score: 17
max_score: 28
na_heuristics: 5,9,10
p0_count: 0
p1_count: 4
timestamp: 2026-08-10T09-28-43Z
slug: src-pages-index-astro
---
# 个人博客改造评审：`src/pages/index.astro`

## Design Health Score

| # | 启发式 | 分数 | 关键问题 |
|---|---|---:|---|
| 1 | 系统状态可见性 | 2/4 | 当前栏目无 active/`aria-current`；菜单和主题开关不公布状态 |
| 2 | 系统与现实世界匹配 | 3/4 | 导航、日期、阅读时间易懂，但内容仍在介绍主题而非作者 |
| 3 | 用户控制与自由 | 3/4 | 基础导航稳定；移动菜单无 Esc、关闭图标或焦点管理 |
| 4 | 一致性与标准 | 3/4 | 字体、间距、链接和主题一致；Hero 有 `<h2><p>` 非法语义结构 |
| 5 | 错误预防 | n/a | 审查路径没有表单、编辑或破坏性操作 |
| 6 | 识别优于回忆 | 2/4 | 移动端仅汉堡图标，当前栏目不标记 |
| 7 | 灵活性与效率 | 1/4 | 无标签入口、归档、搜索、目录或上一篇/下一篇 |
| 8 | 美学与极简设计 | 3/4 | 克制且统一，但长文排版偏展示性，页脚随机句抢作者声音 |
| 9 | 错误识别与恢复 | n/a | 没有可观察的错误流程 |
| 10 | 帮助与文档 | n/a | 静态个人博客无需独立帮助系统 |
| **总分** |  | **17/28** | **视觉基础良好；作者定位、阅读体验和可访问状态需加强** |

## Design Specificity Verdict

**视觉特异性中等，个人与内容特异性低。** Press Start 2P 像素标题、IBM Plex Mono、黑白高对比、分隔线和点阵 hover 构成了稳定的复古开发者气质。但当前被记住的是“Zaggonaut Astro 主题”，不是作者本人。删除像素字体后，页面几乎没有信息能回答“作者是谁、长期写什么、为什么值得关注”。

独立设计评审将首页视为 Experience，将博客列表和文章视为 Read。独立自动评审对 `src/pages/index.astro` 的 CLI 扫描返回 `[]`、0 条规则命中；这不是整站无问题的证明，因为入口文件主要组合组件。浏览器实测在 `src/components/Header.astro` 发现了检测器未覆盖的交互缺陷。

可变脚本注入预检成功，但 Impeccable live server 启动超时，未注入 `detect.js`，因此没有可靠的用户可见 overlay。替代证据为桌面/移动截图、语义快照、DOM 尺寸、键盘焦点和交互状态测试。

## Overall Impression

这是一个适合继续发展的 Astro 静态博客骨架，而不是需要推翻的成品。它的强项是轻量、类型化内容、清晰路由和稳定视觉令牌；最大机会是把“主题演示站”变成“有明确作者、中文写作能力和持续内容发现机制的博客”。

## What's Working

- **底座轻且可靠**：Astro Content Collections、静态路由和少量客户端脚本适合个人博客，构建成功生成 6 个页面。
- **组件边界清楚**：配置、内容 schema、页面 layout、列表 snippet、Header/Footer 已分开，个性化不必重写路由。
- **视觉系统可保留**：明暗主题、颜色 token、focus outline、reduced-motion 和约 640px 的阅读列提供了良好起点。

## Priority Issues

### [P1] 作者身份、内容主张与首页主路径缺席

**为什么重要**：首屏回答的是“这是一个 Astro 主题”，不是“谁在写、写什么、为什么值得读”。`content/configuration.toml` 仍是模板姓名、头像、域名和占位社交链接；Hero 已配置 CTA，但组件没有渲染，Projects 又排在 Articles 前。

**修复**：建立真实作者简介、一句明确写作主张、2–3 个长期主题和一个首要 CTA；若博客为核心，把最新文章放在项目之前，并新增 About/Now 入口。

**建议命令**：`$impeccable shape`

### [P1] 当前内容模型不能安全支持中文长期写作

**为什么重要**：自动 slug 逻辑删除所有非 `\w` 字符，纯中文标题可能生成空 slug；页面与元数据硬编码 `lang="en"`、English，日期使用系统默认 locale；远程字体只声明 Latin 字符集。`readTime` 是可选字段，但列表直接拼成 `${readTime} min`，缺失时会显示 `undefined min`。

**修复**：中文文章要求显式 slug，或引入可靠的中文 slug 策略；增加 `language`、`updatedAt`、`draft`、`series`、`author`、`cover` 等字段，日期按 `zh-CN` 输出，页面语言按文章切换，所有可选字段都提供真实空状态。

**建议命令**：`$impeccable harden`

### [P1] 长文排版服务于风格，不服务于阅读

**为什么重要**：`Prose.astro` 强制等宽字体和两端对齐；358px 移动列上出现明显拉伸字距。文章像素标题在移动端占三行，实测文章高度约 4483px，却没有目录、阅读进度或续读路径。

**修复**：正文改用适合中英文长读的 serif/sans 字体并左对齐，行宽约 60–68ch；像素字体只用于品牌字标和短标题。补摘要、标签、作者信息、上一篇/下一篇与相关内容。

**建议命令**：`$impeccable typeset`

### [P1] 移动菜单的隐藏状态对键盘与辅助技术不成立

**为什么重要**：关闭菜单只用 `translateY(-100%)`。实测视觉关闭时，home 和 projects 链接仍在 Tab 顺序中且位于屏幕外；按钮没有 `aria-expanded`/`aria-controls`，nav 没有 `aria-hidden`/`inert`，Esc 也不能关闭。

**修复**：同步视觉和语义状态，管理焦点，支持 Esc，提供明确关闭图标，并为当前栏目设置 `aria-current="page"`。主题切换也应动态说明当前/下一状态。

**建议命令**：`$impeccable adapt`

### [P2] 内容发现、订阅与 SEO 只完成了基础层

**为什么重要**：当前 tags 虽在 frontmatter 中，却不显示也不能浏览；没有归档、RSS、站点地图、Article JSON-LD、上一篇/下一篇或相关文章。内容增长后，发现与回访成本会快速增加。

**修复**：第一阶段增加标签页、归档、RSS、sitemap、文章结构化数据和续读模块；搜索与目录可等文章数量增长后再加。外部字体建议改为本地托管，减少网络依赖并统一中文回退。

**建议命令**：`$impeccable shape`

## Persona Red Flags

**首次访问者 Jordan**

- 五秒内只看到主题名和 Astro 技术栈，不知道作者身份、受众和内容承诺。
- Twitter、LinkedIn 指向平台首页，削弱可信度。
- 文章末尾只有 `~Zaggonaut`，没有可继续阅读或订阅的下一步。

**辅助技术用户 Sam**

- 关闭的移动菜单链接仍可被 Tab 聚焦；菜单和主题开关都不公布状态。
- 当前导航没有 `aria-current`，整站也没有 skip link。
- `Hero.astro` 在 `<h2>` 中嵌套 `<p>`；头像 alt 仍是泛化模板描述。
- 正面证据是链接有下划线，focus outline 和颜色对比较清楚。

**移动阅读者 Casey**

- 390px 首屏大部分被头像和模板标题占据，文章入口需要继续滚动。
- 文章标题占三行，正文两端对齐带来不均匀字距。
- 长文章没有目录、进度或返回入口，中断后难以重新定位。

## Minor Observations

- Hero 图片使用远程 URL，缺少固有 `width`/`height`，并且 image 字段允许为空，需处理布局移动和破图状态。
- 页脚随机长句在客户端写入空段落，可能造成布局移动；它目前比作者署名更容易成为最后记忆点。
- 博客/项目独立列表没有使用已经配置的 `noArticles`/`noProjects` 空状态。
- `menu` schema 固定为 home/projects/blog，新增 About/Now 必须改 TypeScript schema。
- 外链组件在 `external` 模式下没有显式 `rel="noopener noreferrer"`；社交链接当前又没有启用 external 模式。
- SEO/OG 代码散落在多个页面，后续适合抽成统一的 Head/SEO 组件。

## Questions to Consider

- 如果去掉像素字体，还有什么能让读者确认“这是你的博客”？
- 首页的首要目标是让访客认识你、阅读最新文章，还是查看项目？三者不能继续同权。
- Projects 应与 Articles 平级，还是作为写作观点的实践证据？
- 随机荒诞引语是真实性格表达，还是应该换成作者简介、Now 状态或订阅邀请？
- 如果写中文或双语，复古气质应该通过什么中文字体、排版和语言切换继续成立？
