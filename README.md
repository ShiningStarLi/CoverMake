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

**Language:** **English** | [中文](README.zh-CN.md)

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
├── CNAME             # GitHub Pages custom domain
├── index.html        # Main page (mobile landing + editor)
├── style.css         # Global styles
├── script.js         # Core logic (drawing / interaction / export)
├── LICENSE           # MIT License
├── README.md         # Project docs (English)
└── README.zh-CN.md   # Project docs (Chinese)
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

[Back to top](#cover-make)
