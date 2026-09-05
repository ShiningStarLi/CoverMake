# 🎨 Cover Make

> **一款开箱即用的在线封面设计工具** · An out-of-the-box online cover design tool
> 多平台尺寸、丰富背景、自定义文字与 SVG 图标，所见即所得，一键导出高清图片。
> Multi-platform presets, rich backgrounds, custom text & SVG icons, WYSIWYG, one-click HD export.

[![在线使用 Live](https://img.shields.io/badge/%F0%9F%9A%80%20%E5%9C%A8%E7%BA%BF%E4%BD%BF%E7%94%A8%20Live-cover.eucalyptus.cc-8b5cf6?style=flat-square)](https://cover.eucalyptus.cc)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[![Zero Dependency](https://img.shields.io/badge/dependencies-0-success?style=flat-square)](#-技术栈tech-stack)

![CoverMake 预览 Preview](https://img.eucalyptus.cc/images/covermake.png)

---

## 📑 目录 · Contents

| 中文 | English |
| --- | --- |
| [✨ 功能特性](#-功能特性) | [✨ Features](#-features) |
| [🚀 快速开始](#-快速开始) | [🚀 Quick Start](#-quick-start) |
| [🔗 在线部署](#-在线部署-github-pages) | [🔗 Deploy (GitHub Pages)](#-deploy-github-pages) |
| [🖥️ 技术栈](#-技术栈) | [🖥️ Tech Stack](#-tech-stack) |
| [📁 项目结构](#-项目结构) | [📁 Project Structure](#-project-structure) |
| [🎯 使用小贴士](#-使用小贴士) | [🎯 Tips](#-tips) |
| [🤝 贡献指南](#-贡献指南) | [🤝 Contributing](#-contributing) |
| [📜 开源协议](#-开源协议) | [📜 License](#-license) |

---

## ✨ 功能特性

### 🖼️ 背景系统 · Background
| 类型 Type | 说明 Description |
| --- | --- |
| **渐变背景 Gradient** | 线性 / 径向 / 圆锥三种渐变，最多 3 个颜色节点，角度自由调节 · Linear / Radial / Conic, up to 3 color stops with adjustable angle |
| **纯色背景 Solid** | 一键取色，简洁干净 · One-click color picker |
| **自定义图片 Image** | 上传本机图片，支持**模糊度**与**暗化**调节，自动裁剪填充 · Upload image with **blur** & **darken**, auto-crop & cover |
| **网格渐变 Mesh** | 4 节点配色 + 复杂度调节，生成流动的网格质感 · 4-node colors + complexity, fluid mesh texture |
| **噪点纹理 Noise** | 可调强度、颗粒大小与颜色，电影质感颗粒 · Adjustable intensity, grain & color, cinematic grain |
| **随机配色 Random Color** | 任意背景一键随机，配色自动保持对比度 · One-click random palette with automatic contrast |

### 🔤 文字系统 · Text
- **主标题**独立控制：字体、字号、颜色，画布拖拽定位 · Independent **main title** control: font, size, color, drag on canvas
- **多组自定义文字**：任意添加多组文字，单独设置字体 / 字号 / 颜色 / 透明度 / 加粗 / 位置 · Unlimited **custom texts** with per-item font / size / color / opacity / bold / position
- **30+ 款精选字体**：得意黑、霞鹜文楷、站酷系列、阿里妈妈系列、抖音美好体等中文字体，及多种英文艺术字体 · **30+ curated fonts** including Smiley Sans, LXGW WenKai, ZCOOL series, Alimama series, plus English display fonts

### 🎯 图标系统 · Icons
- 支持**粘贴 SVG 代码**或**上传 `.svg` 文件** · Paste SVG code or upload `.svg` file
- 容器样式：**纯色** / **毛玻璃**（真实背景模糊 + 高光 + 反光边框） · Container: **solid** / **glassmorphism** (real background blur + highlight + reflective border)
- 容器形状：圆角矩形 / 圆形 / 菱形 · Shapes: rounded rectangle / circle / diamond
- 支持阴影、边框、透明度等细节，画布拖拽定位 · Shadow, border, opacity; drag on canvas

### 📐 平台预设 · Presets
内置 6 种常用尺寸 · 6 built-in presets:

| 预设 Preset | 尺寸 Size |
| --- | --- |
| 博客封面 Blog | 1200 × 675 (16:9) |
| 公众号 WeChat | 900 × 500 |
| 小红书 Xiaohongshu | 800 × 800 (1:1) |
| 视频封面 Video | 1280 × 720 |
| PPT 封面 PPT | 1920 × 1080 |
| 抖音 / 竖版 Douyin / Portrait | 1080 × 1920 (9:16) |

### ⚙️ 其他能力 · More
- 🌍 **多语言**：中 / 英一键切换 · Bilingual UI (Chinese / English)
- 💾 **配置管理**：所有设置导出为 JSON，随时导入复用 · Export all settings as JSON, re-import anytime
- ⬇️ **多格式导出**：PNG（无损，推荐）/ JPEG / WebP，质量可调 · Export PNG (lossless, recommended) / JPEG / WebP with adjustable quality
- ⌨️ **键盘快捷键 · Keyboard Shortcuts**
  | 快捷键 Shortcut | 功能 Action |
  | --- | --- |
  | `Ctrl/Cmd + S` | 导出配置 · Export config |
  | `Ctrl/Cmd + D` | 下载封面 · Download cover |
  | `Ctrl/Cmd + R` | 重置所有设置 · Reset all |
  | `Ctrl/Cmd + B` | 切换侧边栏（移动端） · Toggle sidebar (mobile) |

---

## 🚀 快速开始

无需安装任何依赖，直接本地打开即可：

```bash
# 克隆项目 · Clone
git clone <your-repo-url>.git

# 进入目录 · Enter
cd cover-make

# 直接在浏览器打开，或用本地静态服务器 · Open in browser / serve locally
python3 -m http.server 8080
# → http://localhost:8080
```

> 纯静态项目，零第三方依赖，打开即用 · Static project, zero dependencies, ready to use.

---

## 🔗 在线部署 (GitHub Pages)

访问地址 · Live URL：**[https://cover.eucalyptus.cc](https://cover.eucalyptus.cc)**

自行部署 · Deploy it yourself:

1. 将代码推送到 GitHub 仓库 · Push code to a GitHub repo
2. 仓库 **Settings → Pages**，Source 选 `Deploy from a branch` · In **Settings → Pages**, set Source to `Deploy from a branch`
3. Branch 选 `main`，目录选 `/ (root)`，保存 · Pick branch `main` and folder `/ (root)`, then save
4. 使用自定义域名时，`.CNAME` 文件会自动生效（本项目为 `cover.eucalyptus.cc`）· Custom domain via `.CNAME` file (here: `cover.eucalyptus.cc`)

---

## 🖥️ 技术栈 · Tech Stack

| 层 Layer | 技术 Tech |
| --- | --- |
| 结构 Structure | HTML5 |
| 样式 Style | CSS3（响应式、动画、毛玻璃效果 · responsive, animations, glassmorphism) |
| 逻辑 Logic | Vanilla JavaScript |
| 绘图 Drawing | HTML5 Canvas |
| 依赖 Dependencies | **0 个第三方依赖 · 0 third-party** |

纯前端实现，无框架与构建工具，轻量、加载快、易维护 · Pure frontend, no framework or build tool — lightweight & fast.

---

## 📁 项目结构 · Project Structure

```
cover-make/
├── CNAME           # GitHub Pages 自定义域名 · custom domain
├── index.html      # 主页面（移动端落地页 + 编辑器）· main page (mobile landing + editor)
├── style.css       # 全局样式 · global styles
├── script.js       # 核心逻辑（绘图 / 交互 / 导出）· core logic (draw / interact / export)
└── README.md       # 项目说明 · docs
```

---

## 🎯 使用小贴士 · Tips

- 💡 **添加图标**：访问 [yesicon.app](https://yesicon.app) 搜图标 → 复制 SVG 代码 → 粘贴到"图标"面板，或直接上传 `.svg` · **Add icons**: visit [yesicon.app](https://yesicon.app) → copy SVG → paste, or upload `.svg`
- 🎨 **配色技巧**：用"随机配色"快速生成和谐色板，再微调 · **Colors**: use "Random Color" for a harmonious palette, then fine-tune
- 💾 **复用设计**：用"导出配置"保存为 JSON，同类封面直接"导入配置"复用 · **Reuse**: "Export Config" to save as JSON, re-import for similar covers

---

## 🤝 贡献指南 · Contributing

欢迎提 Issue 和 Pull Request · Issues & PRs welcome. 请确保 · Please ensure:

- 代码风格与原项目保持一致 · Code style stays consistent
- 新增功能不影响默认行为 · New features don't break defaults
- 提交前自行测试通过 · Test before submitting

---

## 📜 开源协议 · License

本项目基于 [MIT License](LICENSE) 开源，欢迎自由使用、修改与分发 · Released under the [MIT License](LICENSE).

---

> ❤️ 用 **Cover Make**，让封面设计更简单 · Make cover design simple with **Cover Make**.
