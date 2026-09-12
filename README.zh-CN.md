# Cover Make

> **开箱即用的在线封面设计工具**
> 多平台预设、丰富背景、自定义文字与 SVG 图标，所见即所得，一键导出高清封面。

[![在线使用](https://img.shields.io/badge/%F0%9F%9A%80%20%E5%9C%A8%E7%BA%BF%E4%BD%BF%E7%94%A8-cover.eucalyptus.cc-8b5cf6?style=flat-square)](https://cover.eucalyptus.cc)
[![开源协议](https://img.shields.io/badge/%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE-MIT-blue?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![零依赖](https://img.shields.io/badge/%E9%9B%B6%E4%BE%9D%E8%B5%96-0-success?style=flat-square)](#技术栈)

![Cover Make 预览](https://img.eucalyptus.cc/images/covermake.png)

**语言：** [English](README.md) | **中文**

---

## 目录

- [功能特性](#功能特性)
- [快速开始](#快速开始)
- [在线部署 GitHub Pages](#在线部署-github-pages)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [使用小贴士](#使用小贴士)
- [贡献指南](#贡献指南)
- [开源协议](#开源协议)

---

## 功能特性

### 背景系统

- **渐变背景** — 线性 / 径向 / 圆锥三种渐变，最多 3 个颜色节点，角度自由调节
- **纯色背景** — 一键取色，简洁干净
- **自定义图片** — 上传本机图片，支持**模糊度**与**暗化**调节，自动裁剪填充
- **网格渐变** — 4 节点配色 + 复杂度调节，生成流动的网格质感
- **噪点纹理** — 可调强度、颗粒大小与颜色，电影质感颗粒
- **随机配色** — 任意背景一键随机，配色自动保持对比度

### 文字系统

- **主标题**独立控制：字体、字号、颜色，画布拖拽定位
- **多组自定义文字**：任意添加多组文字，单独设置字体 / 字号 / 颜色 / 透明度 / 加粗 / 位置
- **30+ 款精选字体**：得意黑、霞鹜文楷、站酷系列、阿里妈妈系列、抖音美好体等中文字体，及多种英文艺术字体

### 图标系统

- 支持**粘贴 SVG 代码**或**上传 `.svg` 文件**
- 容器样式：**纯色** / **毛玻璃**（真实背景模糊 + 高光 + 反光边框）
- 容器形状：圆角矩形 / 圆形 / 菱形
- 支持阴影、边框、透明度等细节，画布拖拽定位

### 平台预设

内置 6 种常用尺寸，切换即用：

- **博客封面** — 1200 × 675 (16:9)
- **公众号** — 900 × 500
- **小红书** — 800 × 800 (1:1)
- **视频封面** — 1280 × 720
- **PPT 封面** — 1920 × 1080
- **抖音 / 竖版** — 1080 × 1920 (9:16)

### 其他能力

- **多语言** — 中 / 英一键切换
- **配置管理** — 所有设置导出为 JSON，随时导入复用
- **多格式导出** — PNG（无损，推荐）/ JPEG / WebP，质量可调
- **键盘快捷键**
  - `Ctrl/Cmd + S` — 导出配置
  - `Ctrl/Cmd + D` — 下载封面
  - `Ctrl/Cmd + R` — 重置所有设置
  - `Ctrl/Cmd + B` — 切换侧边栏（移动端）

---

## 快速开始

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

---

## 在线部署 GitHub Pages

访问地址：**<https://cover.eucalyptus.cc>**

自行部署：

1. 将代码推送到 GitHub 仓库
2. 仓库 **Settings → Pages**，Source 选 `Deploy from a branch`
3. Branch 选 `main`，目录选 `/ (root)`，保存
4. 使用自定义域名时，`CNAME` 文件会自动生效（本项目为 `cover.eucalyptus.cc`）

---

## 技术栈

- **结构** — HTML5
- **样式** — CSS3（响应式、动画、毛玻璃效果）
- **逻辑** — 原生 JavaScript
- **绘图** — HTML5 Canvas
- **依赖** — **0 个第三方依赖**

纯前端实现，无框架与构建工具，轻量、加载快、易维护。

---

## 项目结构

```
CoverMake/
├── CNAME             # GitHub Pages 自定义域名
├── index.html        # 主页面（移动端落地页 + 编辑器）
├── style.css         # 全局样式
├── script.js         # 核心逻辑（绘图 / 交互 / 导出）
├── LICENSE           # MIT 开源协议
├── README.md         # 项目说明（英文）
└── README.zh-CN.md   # 项目说明（中文）
```

---

## 使用小贴士

- **添加图标** — 访问 [yesicon.app](https://yesicon.app) 搜图标 → 复制 SVG 代码 → 粘贴到「图标」面板，或直接上传 `.svg` 文件
- **配色技巧** — 用「随机配色」快速生成和谐色板，再微调
- **复用设计** — 用「导出配置」保存为 JSON，同类封面直接「导入配置」复用

---

## 贡献指南

欢迎提 Issue 和 Pull Request，请确保：

- 代码风格与原项目保持一致
- 新增功能不影响默认行为
- 提交前自行测试通过

---

## 开源协议

本项目基于 [MIT License](LICENSE) 开源，欢迎自由使用、修改与分发。

---

> 让封面设计更简单 —— **Cover Make**。

---

[回到顶部](#cover-make)
