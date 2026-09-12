# Cover Make

> **An out-of-the-box online cover design tool**
> Multi-platform presets, rich backgrounds, custom text and SVG icons — WYSIWYG editing with one-click high-resolution export.

[![Live](https://img.shields.io/badge/%F0%9F%9A%80%20Live-cover.eucalyptus.cc-8b5cf6?style=flat-square)](https://cover.eucalyptus.cc)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Zero Dependency](https://img.shields.io/badge/dependencies-0-success?style=flat-square)](#tech-stack)

![Cover Make preview](https://img.eucalyptus.cc/images/covermake.png)

**Language:** English | [中文](#中文文档)

---

## Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Deploy (GitHub Pages)](#deploy-github-pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Tips](#tips)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Background

- **Gradient** — linear, radial and conic gradients with up to 3 color stops and a freely adjustable angle
- **Solid** — one-click color picking, clean and simple
- **Image** — upload a local image with **blur** and **darken** controls, automatically cropped to cover
- **Mesh** — 4-node colors plus a complexity control for a fluid mesh texture
- **Noise** — adjustable intensity, grain size and color for a cinematic grain
- **Random Color** — one-click random palette for any background, contrast preserved automatically

### Text

- **Main title** with independent font, size and color, draggable on the canvas
- **Unlimited custom text blocks**, each with its own font, size, color, opacity, bold state and position
- **30+ curated fonts** — Smiley Sans, LXGW WenKai, the ZCOOL series, the Alimama series, Douyin Sans and other Chinese typefaces, plus a variety of English display fonts

### Icons

- Paste **SVG code** or upload an **`.svg` file**
- Container styles: **solid** or **glassmorphism** (real background blur, highlight and reflective border)
- Container shapes: rounded rectangle, circle, diamond
- Shadow, border and opacity controls, draggable on the canvas

### Presets

Six built-in sizes, ready to switch:

- **Blog** — 1200 × 675 (16:9)
- **WeChat** — 900 × 500
- **Xiaohongshu** — 800 × 800 (1:1)
- **Video** — 1280 × 720
- **PPT** — 1920 × 1080
- **Douyin / Portrait** — 1080 × 1920 (9:16)

### More

- **Bilingual UI** — one-click switch between Chinese and English
- **Config management** — export every setting as JSON and re-import it anytime
- **Multi-format export** — PNG (lossless, recommended), JPEG or WebP with adjustable quality
- **Keyboard shortcuts**
  - `Ctrl/Cmd + S` — export config
  - `Ctrl/Cmd + D` — download cover
  - `Ctrl/Cmd + R` — reset all settings
  - `Ctrl/Cmd + B` — toggle sidebar (mobile)

---

## Quick Start

No dependencies to install — just open it locally:

```bash
# Clone
git clone https://github.com/ShiningStarLi/CoverMake.git

# Enter the directory
cd CoverMake

# Open it in a browser, or serve it locally
python3 -m http.server 8080
# → http://localhost:8080
```

> A pure static project with zero third-party dependencies — open and use.

---

## Deploy (GitHub Pages)

Live URL: **<https://cover.eucalyptus.cc>**

Deploy it yourself:

1. Push the code to a GitHub repository
2. Open **Settings → Pages** and set Source to `Deploy from a branch`
3. Pick branch `main` and folder `/ (root)`, then save
4. With a custom domain, the `CNAME` file takes effect automatically (here: `cover.eucalyptus.cc`)

---

## Tech Stack

- **Structure** — HTML5
- **Style** — CSS3 (responsive, animations, glassmorphism)
- **Logic** — Vanilla JavaScript
- **Drawing** — HTML5 Canvas
- **Dependencies** — **0 third-party dependencies**

A pure frontend project with no framework and no build step — lightweight, fast to load and easy to maintain.

---

## Project Structure

```
CoverMake/
├── CNAME           # GitHub Pages custom domain
├── index.html      # Main page (mobile landing + editor)
├── style.css       # Global styles
├── script.js       # Core logic (drawing / interaction / export)
├── LICENSE         # MIT License
└── README.md       # Project docs
```

---

## Tips

- **Add icons** — visit [yesicon.app](https://yesicon.app), search for an icon, copy its SVG code and paste it into the "Icons" panel, or upload the `.svg` file directly
- **Colors** — use "Random Color" to generate a harmonious palette quickly, then fine-tune it
- **Reuse** — use "Export Config" to save your settings as JSON, then "Import Config" for similar covers

---

## Contributing

Issues and pull requests are welcome. Please make sure that:

- the code style stays consistent with the existing project
- new features do not break the default behaviour
- your changes are tested before you submit them

---

## License

Released under the [MIT License](LICENSE) — free to use, modify and distribute.

---

> Make cover design simple with **Cover Make**.

---

## 中文文档

**中文** | [English](#cover-make)

### 目录

- [功能特性](#功能特性)
- [快速开始](#快速开始)
- [在线部署 GitHub Pages](#在线部署-github-pages)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [使用小贴士](#使用小贴士)
- [贡献指南](#贡献指南)
- [开源协议](#开源协议)

### 功能特性

#### 背景系统

- **渐变背景** — 线性 / 径向 / 圆锥三种渐变，最多 3 个颜色节点，角度自由调节
- **纯色背景** — 一键取色，简洁干净
- **自定义图片** — 上传本机图片，支持**模糊度**与**暗化**调节，自动裁剪填充
- **网格渐变** — 4 节点配色 + 复杂度调节，生成流动的网格质感
- **噪点纹理** — 可调强度、颗粒大小与颜色，电影质感颗粒
- **随机配色** — 任意背景一键随机，配色自动保持对比度

#### 文字系统

- **主标题**独立控制：字体、字号、颜色，画布拖拽定位
- **多组自定义文字**：任意添加多组文字，单独设置字体 / 字号 / 颜色 / 透明度 / 加粗 / 位置
- **30+ 款精选字体**：得意黑、霞鹜文楷、站酷系列、阿里妈妈系列、抖音美好体等中文字体，及多种英文艺术字体

#### 图标系统

- 支持**粘贴 SVG 代码**或**上传 `.svg` 文件**
- 容器样式：**纯色** / **毛玻璃**（真实背景模糊 + 高光 + 反光边框）
- 容器形状：圆角矩形 / 圆形 / 菱形
- 支持阴影、边框、透明度等细节，画布拖拽定位

#### 平台预设

内置 6 种常用尺寸，切换即用：

- **博客封面** — 1200 × 675 (16:9)
- **公众号** — 900 × 500
- **小红书** — 800 × 800 (1:1)
- **视频封面** — 1280 × 720
- **PPT 封面** — 1920 × 1080
- **抖音 / 竖版** — 1080 × 1920 (9:16)

#### 其他能力

- **多语言** — 中 / 英一键切换
- **配置管理** — 所有设置导出为 JSON，随时导入复用
- **多格式导出** — PNG（无损，推荐）/ JPEG / WebP，质量可调
- **键盘快捷键**
  - `Ctrl/Cmd + S` — 导出配置
  - `Ctrl/Cmd + D` — 下载封面
  - `Ctrl/Cmd + R` — 重置所有设置
  - `Ctrl/Cmd + B` — 切换侧边栏（移动端）

### 快速开始

无需安装任何依赖，直接本地打开即可：

```bash
# 克隆项目
git clone https://github.com/ShiningStarLi/CoverMake.git

# 进入目录
cd CoverMake

# 直接在浏览器打开，或用本地静态服务器
python3 -m http.server 8080
# → http://localhost:8080
```

> 纯静态项目，零第三方依赖，打开即用。

### 在线部署 GitHub Pages

访问地址：**<https://cover.eucalyptus.cc>**

自行部署：

1. 将代码推送到 GitHub 仓库
2. 仓库 **Settings → Pages**，Source 选 `Deploy from a branch`
3. Branch 选 `main`，目录选 `/ (root)`，保存
4. 使用自定义域名时，`CNAME` 文件会自动生效（本项目为 `cover.eucalyptus.cc`）

### 技术栈

- **结构** — HTML5
- **样式** — CSS3（响应式、动画、毛玻璃效果）
- **逻辑** — 原生 JavaScript
- **绘图** — HTML5 Canvas
- **依赖** — **0 个第三方依赖**

纯前端实现，无框架与构建工具，轻量、加载快、易维护。

### 项目结构

```
CoverMake/
├── CNAME           # GitHub Pages 自定义域名
├── index.html      # 主页面（移动端落地页 + 编辑器）
├── style.css       # 全局样式
├── script.js       # 核心逻辑（绘图 / 交互 / 导出）
├── LICENSE         # MIT 开源协议
└── README.md       # 项目说明
```

### 使用小贴士

- **添加图标** — 访问 [yesicon.app](https://yesicon.app) 搜图标 → 复制 SVG 代码 → 粘贴到「图标」面板，或直接上传 `.svg` 文件
- **配色技巧** — 用「随机配色」快速生成和谐色板，再微调
- **复用设计** — 用「导出配置」保存为 JSON，同类封面直接「导入配置」复用

### 贡献指南

欢迎提 Issue 和 Pull Request，请确保：

- 代码风格与原项目保持一致
- 新增功能不影响默认行为
- 提交前自行测试通过

### 开源协议

本项目基于 [MIT License](LICENSE) 开源，欢迎自由使用、修改与分发。

---

[回到顶部 / Back to top](#cover-make)
