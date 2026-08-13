---
name: Jihang Pan Personal Website
description: 上海像素海报式的中文写作与项目系统
colors:
  vermilion: "#B53A2F"
  vermilion-dark: "#DB6A5D"
  ink: "#181716"
  paper: "#F4F1E8"
  muted-ink: "#666158"
  muted-paper: "#B8B3A8"
typography:
  display:
    fontFamily: "press-start-2p, Noto Sans SC Variable, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.625
  headline:
    fontFamily: "press-start-2p, Noto Sans SC Variable, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.625
  title:
    fontFamily: "SFMono-Regular, Cascadia Code, Noto Sans SC Variable, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: "Noto Sans SC Variable, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.88
  label:
    fontFamily: "SFMono-Regular, Cascadia Code, Noto Sans SC Variable, monospace"
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

**Creative North Star: "上海像素工作台"**

界面像一个持续使用的个人数字工作台：方正、直接、带有早期计算机界面的节奏，但不模拟破旧硬件或虚构材质。显示字体、硬边框、上海天际线像素插画和高对比主题建立记忆；文章正文主动退出视觉表演，让中文长读成为主要体验。

系统是克制的复古，而不是怀旧装饰集合。暗朱红只标记导航状态、箭头、地标和少量像素焦点；主要结构始终依靠暖纸白、暖墨黑、2px 分隔线、留白和明确的文字层级。

**Key Characteristics:**

- 方角、硬线、零圆角
- 黑白反转的浅色与深色主题
- 少量暗朱红，而非大面积彩色装饰
- 像素显示字体只承担品牌和短标题
- 中文标题与正文使用明确加载的现代黑体和宽松行距

## Colors

调色策略为限制性色彩：暖纸白与暖墨黑构成绝大多数表面，暗朱红只用于状态与焦点。

### Primary

- **暗朱红**：用于 JP 字标、当前导航、斜杠、箭头、东方明珠与像素标记。
- **亮朱红**：深色主题下替代暗朱红，在墨黑背景上维持足够对比。

### Neutral

- **墨黑**：浅色主题正文、边框、主按钮和品牌标记。
- **纸白**：浅色主题背景，也是深色主题的正文和主按钮表面。
- **弱墨 / 弱纸**：日期、说明和次级信息；必须保持正文对比，不用于关键操作。

**The Signal Rule.** 朱红表示状态、响应、上海地标或品牌焦点；普通内容结构保持纸白与墨黑。

## Typography

**Display Font:** Press Start 2P，中文回退到 Noto Sans SC Variable，并使用较高字重承接标题层级。

**Body Font:** Noto Sans SC Variable。中英文阅读文字共用一套比例字体，避免跨脚本时出现字形气质跳变。

**Label/Mono Font:** 拉丁字符使用系统等宽栈，中文字符明确回退到 Noto Sans SC Variable。

**Character:** 英文显示字体像像素终端的字标，中文标题保持方正克制，正文像可长期阅读的技术笔记。三者分工明确，不让等宽字体占领连续段落。

### Hierarchy

- **Display**：仅用于首页姓名等短而关键的品牌标题，桌面最大约 48px。
- **Headline**：用于文章与项目详情标题，移动端主动缩小并允许自然换行。
- **Title**：列表标题使用 20–24px 等宽粗体与 2px 下划线。
- **Body**：文章正文 17px、约 32px 行高，阅读列保持约 45–75 字符。
- **Label**：标签、状态和导航辅助文字使用 11–12px 等宽粗体。

**The Two-Voice Rule.** 像素/等宽字体负责英文识别与元数据，现代黑体负责中文标题和连续阅读；不得把像素或等宽字体铺满长文章。

## Layout

全站使用两种内容宽度：文章与列表约 672px，首页与页眉最大约 1320px。首页首屏在桌面采用约 55/45 的文字与上海插画双栏；头像缩为 64px 身份标记并嵌入岗位行，不与姓名和插画竞争。小于 768px 后首屏变为单列，上海插画移到操作按钮之后。主导航在 640px 以下折叠，触控目标至少 44px。

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
- **State:** hover 使用暗朱红；项目标签为静态，文章标签可导航。

### Cards / Containers

- **Corner Style:** 零圆角。
- **Background:** 与页面同色，不创建独立卡片表面。
- **Shadow Strategy:** 无阴影。
- **Border:** 列表与区块使用 2px 分隔线，空状态使用虚线。

### Navigation

桌面导航横排，当前栏目使用黑白反转。移动端使用三线菜单并在打开时变为关闭符号；关闭状态必须同时从视觉、Tab 顺序和辅助技术树中退出。

### Shanghai Pixel Skyline

首页签名组件由东方明珠、上海天际线、条纹落日、江面与渡轮组成。插画使用透明背景、暖墨黑、暖灰和少量暗朱红；它可以响应式缩放，但不得被照片、渐变或柔光替代。个人头像只作为 64px 方形身份标记出现。

## Do's and Don'ts

### Do:

- **Do** 用 2px 硬线、黑白反转和明确留白表达层级。
- **Do** 在移动端保持 44px 触控目标、可见焦点和无横向溢出。
- **Do** 让文章正文使用明确加载的 Noto Sans SC 比例字体，代码与元数据使用等宽字体。
- **Do** 把暗朱红保留给品牌焦点、交互状态与上海地标。

### Don't:

- **Don't** 添加圆角卡片、玻璃效果、渐变文字或柔光阴影。
- **Don't** 在主标题上方添加 kicker、eyebrow 或无意义编号。
- **Don't** 使用 emoji 或 Unicode 字符代替图标；继续使用同一套内联 SVG。
- **Don't** 用像素字体排连续正文，或用两端对齐拉伸中文段落。
