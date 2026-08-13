---
name: Jihang Pan Personal Website
description: 复古像素工作台式的中文写作与项目系统
colors:
  signal-green: "oklch(76.5% 0.177 163.223)"
  signal-green-dark: "oklch(59.6% 0.145 163.225)"
  ink: "oklch(20.5% 0 none)"
  paper: "oklch(97% 0 none)"
  muted-ink: "oklch(43.9% 0 none)"
  muted-paper: "oklch(70.8% 0 none)"
typography:
  display:
    fontFamily: "press-start-2p, SFMono-Regular, Noto Sans Mono CJK SC, monospace"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.625
  headline:
    fontFamily: "press-start-2p, SFMono-Regular, Noto Sans Mono CJK SC, monospace"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.625
  title:
    fontFamily: "SFMono-Regular, Cascadia Code, Noto Sans Mono CJK SC, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: "Literata Variable, Noto Serif CJK SC, Source Han Serif SC, Songti SC, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.88
  label:
    fontFamily: "SFMono-Regular, Cascadia Code, Noto Sans Mono CJK SC, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  square: "0"
spacing:
  tight: "8px"
  base: "16px"
  group: "24px"
  section: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
    height: "48px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "6px 9px"
  brand-mark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    width: "36px"
    height: "36px"
---

# Design System: Jihang Pan Personal Website

## Overview

**Creative North Star: "像素工作台"**

界面像一个持续使用的个人数字工作台：方正、直接、带有早期计算机界面的节奏，但不模拟破旧硬件或虚构材质。显示字体、硬边框、点阵头像和高对比主题建立记忆；文章正文主动退出视觉表演，让中文长读成为主要体验。

系统是克制的复古，而不是怀旧装饰集合。绿色只标记草稿、交互反馈和视觉焦点；主要结构始终依靠黑白反转、2px 分隔线、留白和明确的文字层级。

**Key Characteristics:**

- 方角、硬线、零圆角
- 黑白反转的浅色与深色主题
- 少量信号绿，而非大面积彩色装饰
- 像素显示字体只承担品牌和短标题
- 中文正文使用长读 serif 字体和宽松行距

## Colors

调色策略为限制性色彩：纸白与墨黑构成绝大多数表面，信号绿只用于状态与焦点。

### Primary

- **信号绿**：用于 JP 点阵区域、草稿状态、标签 hover 和选择反馈。
- **深色信号绿**：深色主题下替代浅色信号绿，维持足够对比。

### Neutral

- **墨黑**：浅色主题正文、边框、主按钮和品牌标记。
- **纸白**：浅色主题背景，也是深色主题的正文和主按钮表面。
- **弱墨 / 弱纸**：日期、说明和次级信息；必须保持正文对比，不用于关键操作。

**The Signal Rule.** 绿色表示状态、响应或品牌焦点；普通内容结构保持黑白。

## Typography

**Display Font:** Press Start 2P，中文回退到等宽 CJK 字体。

**Body Font:** Literata Variable，中文回退到 Noto/Source Han/Songti serif。

**Label/Mono Font:** 系统等宽栈。

**Character:** 显示字体像像素终端的字标，正文像可长期阅读的技术笔记。两者分工明确，不让等宽字体占领连续段落。

### Hierarchy

- **Display**：仅用于首页姓名等短而关键的品牌标题，桌面最大约 48px。
- **Headline**：用于文章与项目详情标题，移动端主动缩小并允许自然换行。
- **Title**：列表标题使用 20–24px 等宽粗体与 2px 下划线。
- **Body**：文章正文 17px、约 32px 行高，阅读列保持约 45–75 字符。
- **Label**：标签、状态和导航辅助文字使用 11–12px 等宽粗体。

**The Two-Voice Rule.** 像素字体负责识别，serif 正文负责阅读；不得把像素或等宽字体重新铺满长文章。

## Layout

全站使用两种内容宽度：文章与列表约 672px，首页与页眉约 1024px。首页首屏在桌面采用 224px JP 模块加内容列，文章和项目随后等宽并排；小于 768px 后全部变为单列。主导航在 640px 以下折叠，触控目标至少 44px。

垂直节奏以 8px 为基础，组内使用 16–24px，主要区块使用 40px 以上。标题上方空间始终大于标题与其说明之间的空间。

## Elevation & Depth

系统不使用柔和阴影。深度来自黑白反转、2px 描边、分隔线以及 JP 模块右下方的结构性错位框；它属于复古像素世界的几何结构，不扩散为通用卡片阴影。

**The Flat Workbench Rule.** 普通内容平铺在页面上，不为列表或文章添加浮动卡片和柔光阴影。

## Shapes

所有主要组件保持零圆角。按钮、标签、品牌标记、图片和空状态通过 1–2px 直角描边建立边界。小标签可以紧凑，但不使用胶囊轮廓。

## Components

### Buttons

- **Shape:** 直角、2px 描边，最低高度 48px。
- **Primary:** 墨黑底与纸白文字；深色主题反转。
- **Secondary:** 透明/纸白表面与墨黑描边；深色主题反转。
- **Hover / Focus:** hover 位移 2px；focus 使用 2px 外轮廓，不用 glow。

### Chips

- **Style:** 1px 直角描边、紧凑内边距、等宽小字。
- **State:** hover 使用信号绿；项目标签为静态，文章标签可导航。

### Cards / Containers

- **Corner Style:** 零圆角。
- **Background:** 与页面同色，不创建独立卡片表面。
- **Shadow Strategy:** 无阴影。
- **Border:** 列表与区块使用 2px 分隔线，空状态使用虚线。

### Navigation

桌面导航横排，当前栏目使用黑白反转。移动端使用三线菜单并在打开时变为关闭符号；关闭状态必须同时从视觉、Tab 顺序和辅助技术树中退出。

### JP Pixel Module

首页签名组件由信号绿点阵底、墨黑内核、JP 像素字标与右下错位描边组成。它可以缩放，但不得被圆形头像、渐变或柔光替代。

## Do's and Don'ts

### Do:

- **Do** 用 2px 硬线、黑白反转和明确留白表达层级。
- **Do** 在移动端保持 44px 触控目标、可见焦点和无横向溢出。
- **Do** 让文章正文使用 serif 长读字体，代码与元数据使用等宽字体。
- **Do** 把信号绿保留给品牌焦点与状态。

### Don't:

- **Don't** 添加圆角卡片、玻璃效果、渐变文字或柔光阴影。
- **Don't** 在主标题上方添加 kicker、eyebrow 或无意义编号。
- **Don't** 使用 emoji 或 Unicode 字符代替图标；继续使用同一套内联 SVG。
- **Don't** 用像素字体排连续正文，或用两端对齐拉伸中文段落。
