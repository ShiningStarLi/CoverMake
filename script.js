// ===== I18N =====
const i18n = {
    zh: {
        randomColor: '随机配色', reset: '重置', download: '下载封面',
        basicSettings: '基础设置', textContent: '文字内容', icons: '图标',
        presetTemplates: '预设模板',
        platformSize: '平台尺寸', blogCover: '博客封面', wechat: '公众号',
        xiaohongshu: '小红书', videoCover: '视频封面', pptCover: 'PPT 封面',
        douyin: '抖音/竖版', bgSettings: '背景设置', bgType: '背景类型',
        gradientBg: '渐变背景', solidBg: '纯色背景', customImage: '自定义图片',
        meshBg: '网格渐变', noiseBg: '噪点纹理',
        gradientType: '渐变类型', linear: '线性渐变', radial: '径向渐变', conic: '圆锥渐变',
        angle: '角度', bgColor: '背景颜色', uploadBg: '点击上传背景图片',
        uploadHint: '支持 JPG、PNG、WebP 格式', bgBlur: '背景模糊度',
        bgDarken: '背景暗化', remove: '移除', replace: '更换',
        mainTitle: '主标题', subTitle: '副标题', author: '作者',
        fontSize: '字号', color: '颜色', fontFamily: '字体', position: '位置',
        dragHint: '(拖拽画布调整)', opacity: '透明度',
        addIcon: '添加图标', add: '添加图标', iconList: '图标列表',
        noIcons: '暂无图标<br>请从 <a href="https://yesicon.app" target="_blank" rel="noopener noreferrer">yesicon.app</a> 添加 SVG',
        uploadSvg: '点击上传 SVG 文件', uploadSvgHint: '支持 .svg 格式',
        svgHint: '💡 使用步骤：<br>1. 访问 <a href="https://yesicon.app" target="_blank" rel="noopener noreferrer">yesicon.app</a> 搜索图标<br>2. 点击图标 → 复制 SVG 代码<br>3. 粘贴到下方输入框，点击添加<br>4. 或上传 .svg 文件',
        notoSans: '思源黑体', notoSerif: '思源宋体',
        xiaowei: '站酷小薇体', kuaile: '站酷快乐体', mashan: '马善政毛笔',
        huangyou: '站酷庆科黄油体', longcang: '龙苍手书', zhimang: '志莽行书',
        liujian: '刘建毛草', lxgw: '霞鹜文楷', smiley: '得意黑',
        kuhei: '站酷酷黑', wenyi: '站酷文艺体', canger: '站酷仓耳渔阳',
        addict: '站酷庆科上瘾体', gaoduan: '站酷高端黑',
        systemFont: '系统默认', georgia: 'Georgia 衬线',
        arial: 'Arial 无衬线', configManage: '配置管理',
        configDesc: '导出当前所有设置为 JSON 文件，或导入之前保存的配置。',
        export: '导出配置', import: '导入配置', downloadSettings: '下载设置',
        defaultFormat: '默认下载格式', png: 'PNG (无损，推荐)',
        jpeg: 'JPEG (有损压缩，体积小)', webp: 'WebP (现代格式，兼容性好)',
        quality: 'JPEG/WebP 质量',
        downloadFormat: '选择下载格式', pngDesc: '无损压缩，透明背景，文件较大',
        jpegDesc: '有损压缩，体积较小，不支持透明',
        webpDesc: '现代格式，压缩率高，兼容性好',
        compressQuality: '压缩质量', cancel: '取消', confirmDownload: '确认下载',
        generating: '正在生成...', resetConfirm: '确定要重置所有设置吗？此操作不可撤销。',
        resetTitle: '确认重置', configImported: '配置导入成功！',
        invalidConfig: '配置文件无效', invalidSvg: '请输入有效的 SVG 代码',
        exportSuccess: '配置导出成功', importSuccess: '配置导入成功',
        downloadSuccess: '封面下载成功', resetSuccess: '已重置所有设置',
        customSize: '自定义尺寸', applySize: '应用尺寸',
        gradientStops: '渐变节点', addStop: '+ 添加节点', removeStop: '- 移除节点',
        meshColors: '网格颜色 (4个节点)', meshComplexity: '复杂度',
        noiseIntensity: '噪点强度', noiseScale: '噪点颗粒', noiseColor: '噪点颜色', noiseBgColor: '背景底色',
        customTexts: '自定义文字', addCustomText: '添加自定义文字',
        mobileTitle: 'Cover Designer', mobileSubtitle: '在线封面设计工具',
        previewTag: '封面设计', previewTitle: '一键生成精美封面',
        feature1: '多平台尺寸预设', feature2: '渐变背景 · SVG 图标', feature3: '自定义文字 · 高清导出',
        feature4: '实时预览 · 所见即所得', feature5: '无需登录 · 开箱即用', feature6: '节省时间 · 效率翻倍',
        noticeTitle: '建议在电脑上使用', noticeDesc: '封面设计需要较大屏幕空间以获得最佳体验',
        copyLink: '复制链接到电脑打开',
        linkCopied: '链接已复制！请在电脑上粘贴打开', copyFailed: '复制失败，请手动复制链接'
    },
    en: {
        randomColor: 'Random Color', reset: 'Reset', download: 'Download',
        basicSettings: 'Basic Settings', textContent: 'Text Content', icons: 'Icons',
        presetTemplates: 'Preset Templates',
        platformSize: 'Platform Size', blogCover: 'Blog Cover', wechat: 'WeChat',
        xiaohongshu: 'Xiaohongshu', videoCover: 'Video Cover', pptCover: 'PPT Cover',
        douyin: 'Douyin/Portrait', bgSettings: 'Background', bgType: 'Background Type',
        gradientBg: 'Gradient', solidBg: 'Solid Color', customImage: 'Custom Image',
        meshBg: 'Mesh Gradient', noiseBg: 'Noise Texture',
        gradientType: 'Gradient Type', linear: 'Linear', radial: 'Radial', conic: 'Conic',
        angle: 'Angle', bgColor: 'Background Color', uploadBg: 'Click to upload background',
        uploadHint: 'Supports JPG, PNG, WebP', bgBlur: 'Background Blur',
        bgDarken: 'Background Darken', remove: 'Remove', replace: 'Replace',
        mainTitle: 'Main Title', subTitle: 'Subtitle', author: 'Author',
        fontSize: 'Font Size', color: 'Color', fontFamily: 'Font', position: 'Position',
        dragHint: '(Drag on canvas)', opacity: 'Opacity',
        addIcon: 'Add Icon', add: 'Add Icon', iconList: 'Icon List',
        noIcons: 'No icons yet<br>Add SVG from <a href="https://yesicon.app" target="_blank" rel="noopener noreferrer">yesicon.app</a>',
        uploadSvg: 'Click to upload SVG file', uploadSvgHint: 'Supports .svg format',
        svgHint: '💡 Steps:<br>1. Visit <a href="https://yesicon.app" target="_blank" rel="noopener noreferrer">yesicon.app</a><br>2. Copy SVG code<br>3. Paste below and add<br>4. Or upload .svg file',
        notoSans: 'Noto Sans SC', notoSerif: 'Noto Serif SC',
        xiaowei: 'ZCOOL XiaoWei', kuaile: 'ZCOOL KuaiLe', mashan: 'Ma Shan Zheng',
        huangyou: 'ZCOOL HuangYou', longcang: 'Long Cang', zhimang: 'Zhi Mang Xing',
        liujian: 'Liu Jian Mao Cao', lxgw: 'LXGW WenKai', smiley: 'Smiley Sans',
        kuhei: 'ZCOOL KuHei', wenyi: 'ZCOOL WenYi', canger: 'ZCOOL CangErYuYang',
        addict: 'ZCOOL Addict', gaoduan: 'ZCOOL GaoDuanHei',
        systemFont: 'System Default', georgia: 'Georgia',
        arial: 'Arial', configManage: 'Config Management',
        configDesc: 'Export current settings to JSON, or import saved config.',
        export: 'Export Config', import: 'Import Config', downloadSettings: 'Download Settings',
        defaultFormat: 'Default Format', png: 'PNG (Lossless, Recommended)',
        jpeg: 'JPEG (Compressed, Small)', webp: 'WebP (Modern, Compatible)',
        quality: 'JPEG/WebP Quality',
        downloadFormat: 'Select Download Format', pngDesc: 'Lossless, transparent, larger file',
        jpegDesc: 'Compressed, smaller, no transparency',
        webpDesc: 'Modern format, high compression, compatible',
        compressQuality: 'Compression Quality', cancel: 'Cancel', confirmDownload: 'Confirm Download',
        generating: 'Generating...', resetConfirm: 'Reset all settings? This cannot be undone.',
        resetTitle: 'Confirm Reset', configImported: 'Config imported successfully!',
        invalidConfig: 'Invalid config file', invalidSvg: 'Please enter valid SVG code',
        exportSuccess: 'Config exported', importSuccess: 'Config imported',
        downloadSuccess: 'Cover downloaded', resetSuccess: 'All settings reset',
        customSize: 'Custom Size', applySize: 'Apply Size',
        gradientStops: 'Gradient Stops', addStop: '+ Add Stop', removeStop: '- Remove Stop',
        meshColors: 'Mesh Colors (4 nodes)', meshComplexity: 'Complexity',
        noiseIntensity: 'Noise Intensity', noiseScale: 'Noise Scale', noiseColor: 'Noise Color', noiseBgColor: 'Background Color',
        customTexts: 'Custom Texts', addCustomText: 'Add Custom Text',
        mobileTitle: 'Cover Designer', mobileSubtitle: 'Online Cover Design Tool',
        previewTag: 'Cover Design', previewTitle: 'Create Beautiful Covers in One Click',
        feature1: 'Multi-platform size presets', feature2: 'Gradient · SVG Icons', feature3: 'Custom Text · HD Export',
        feature4: 'Real-time Preview', feature5: 'No Login Required', feature6: 'Save Time, Boost Efficiency',
        noticeTitle: 'Recommended for Desktop', noticeDesc: 'Cover design needs a larger screen for the best experience',
        copyLink: 'Copy Link to Open on PC',
        linkCopied: 'Link copied! Paste it on your computer to open', copyFailed: 'Copy failed, please copy the link manually'
    }
};

let currentLang = 'zh';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = i18n[lang][key];
            } else {
                el.innerHTML = i18n[lang][key];
            }
        }
    });
    const tooltips = {
        basic: lang === 'zh' ? '基础设置' : 'Basic Settings',
        text: lang === 'zh' ? '文字内容' : 'Text Content',
        svg: lang === 'zh' ? '图标' : 'Icons',
        font: lang === 'zh' ? '字体样式' : 'Font Style',
        config: lang === 'zh' ? '配置管理' : 'Config Management'
    };
    // nav-tooltip 已通过 data-i18n 自动更新
    if (currentPanel) {
        document.getElementById('panelTitle').textContent = panelTitles[currentPanel][lang];
    }
    updateSvgList();
    updateCustomTextList();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ===== Toast System =====
function showToast(type, title, message, duration = 3000) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;

    const icons = {
        success: '<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        error: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
        info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
        warning: '<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    };

    toast.innerHTML = `
<div class="toast-icon">${icons[type]}</div>
<div class="toast-content">
    <div class="toast-title">${title}</div>
    <div class="toast-message">${message}</div>
</div>
<button class="toast-close" onclick="this.parentElement.remove()">
    <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
</button>
`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ===== Confirm Dialog =====
let confirmResolve = null;

function showConfirm(title, message) {
    return new Promise((resolve) => {
        confirmResolve = resolve;
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmMessage').textContent = message;
        document.getElementById('confirmOverlay').classList.add('show');
    });
}

document.getElementById('confirmCancel').addEventListener('click', () => {
    document.getElementById('confirmOverlay').classList.remove('show');
    if (confirmResolve) confirmResolve(false);
});

document.getElementById('confirmOk').addEventListener('click', () => {
    document.getElementById('confirmOverlay').classList.remove('show');
    if (confirmResolve) confirmResolve(true);
});

document.getElementById('confirmOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('confirmOverlay')) {
        document.getElementById('confirmOverlay').classList.remove('show');
        if (confirmResolve) confirmResolve(false);
    }
});

// ===== Inline Color Picker =====
let activeInlinePicker = null;

function hsbToHex(h, s, b) {
    s /= 100; b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    const r = Math.round(f(5) * 255);
    const g = Math.round(f(3) * 255);
    const bl = Math.round(f(1) * 255);
    return '#' + [r, g, bl].map(x => x.toString(16).padStart(2, '0')).join('');
}

function hexToHsb(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const d = max - min;
    let h = 0;
    if (d !== 0) {
        if (max === r) h = ((g - b) / d + 6) % 6;
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h *= 60;
    }
    const s = max === 0 ? 0 : (d / max) * 100;
    const v = max * 100;
    return { h, s, b: v };
}

function createInlinePicker(initialHex, onChange, onClose) {
    const hsb = hexToHsb(initialHex);
    let currentHSB = { ...hsb };
    let isDragging = false;
    let dragMode = null;

    const container = document.createElement('div');
    container.className = 'inline-color-picker';
    container.innerHTML = `
        <div class="picker-sb-area">
            <div class="picker-sb-cursor"></div>
        </div>
        <div class="picker-hue-track">
            <div class="picker-hue-thumb"></div>
        </div>
        <div class="picker-preview-row">
            <div class="picker-preview">
                <div class="picker-preview-fill"></div>
            </div>
            <button class="picker-close-btn">
                <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
        </div>
    `;

    const sbArea = container.querySelector('.picker-sb-area');
    const cursor = container.querySelector('.picker-sb-cursor');
    const hueTrack = container.querySelector('.picker-hue-track');
    const hueThumb = container.querySelector('.picker-hue-thumb');
    const previewFill = container.querySelector('.picker-preview-fill');

    const closeBtn = container.querySelector('.picker-close-btn');

    function updateSBBackground() {
        sbArea.style.background = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${currentHSB.h}, 100%, 50%))`;
    }

    function updateUI() {
        const hex = hsbToHex(currentHSB.h, currentHSB.s, currentHSB.b);
        const sbRect = sbArea.getBoundingClientRect();
        const hueRect = hueTrack.getBoundingClientRect();

        cursor.style.left = (currentHSB.s / 100 * sbRect.width) + 'px';
        cursor.style.top = ((1 - currentHSB.b / 100) * sbRect.height) + 'px';
        hueThumb.style.left = (currentHSB.h / 360 * hueRect.width) + 'px';
        hueThumb.style.background = `hsl(${currentHSB.h}, 100%, 50%)`;
        previewFill.style.background = hex;

        updateSBBackground();
        if (onChange) onChange(hex);
    }

    function handleSBMove(clientX, clientY) {
        const rect = sbArea.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        currentHSB.s = x * 100;
        currentHSB.b = (1 - y) * 100;
        updateUI();
    }

    function handleHueMove(clientX) {
        const rect = hueTrack.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        currentHSB.h = x * 360;
        updateUI();
    }

    function onMouseMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        if (dragMode === 'sb') handleSBMove(e.clientX, e.clientY);
        else if (dragMode === 'hue') handleHueMove(e.clientX);
    }

    function onMouseUp() {
        isDragging = false;
        dragMode = null;
    }

    sbArea.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragMode = 'sb';
        handleSBMove(e.clientX, e.clientY);
    });

    hueTrack.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragMode = 'hue';
        handleHueMove(e.clientX);
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch
    sbArea.addEventListener('touchstart', (e) => {
        isDragging = true;
        dragMode = 'sb';
        handleSBMove(e.touches[0].clientX, e.touches[0].clientY);
        e.preventDefault();
    }, { passive: false });

    hueTrack.addEventListener('touchstart', (e) => {
        isDragging = true;
        dragMode = 'hue';
        handleHueMove(e.touches[0].clientX);
        e.preventDefault();
    }, { passive: false });

    function onTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        if (dragMode === 'sb') handleSBMove(e.touches[0].clientX, e.touches[0].clientY);
        else if (dragMode === 'hue') handleHueMove(e.touches[0].clientX);
    }
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onMouseUp);

    function close() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onMouseUp);
        container.remove();
        if (activeInlinePicker === container) activeInlinePicker = null;
        if (onClose) onClose();
    }

    closeBtn.addEventListener('click', close);

    requestAnimationFrame(() => {
        function outsideClick(e) {
            if (!container.contains(e.target) && !e.target.closest('.color-picker-wrapper') && !e.target.closest('.color-bar')) {
                close();
                document.removeEventListener('click', outsideClick);
            }
        }
        document.addEventListener('click', outsideClick);
    });

    updateSBBackground();
    requestAnimationFrame(() => updateUI());

    return container;
}

// ===== Shared Helpers =====
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Open (or replace) the inline color picker attached to a host element.
function openInlinePicker(host, hex, onChange) {
    if (activeInlinePicker) {
        activeInlinePicker.remove();
        activeInlinePicker = null;
    }
    const picker = createInlinePicker(hex, onChange);
    host.appendChild(picker);
    activeInlinePicker = picker;
    return picker;
}

// Centralized font list used by the main-title select, the custom-text list and i18n.
const FONTS = [
    { value: "'Noto Sans SC', sans-serif", label: '思源黑体' },
    { value: "'Noto Serif SC', serif", label: '思源宋体' },
    { value: "'ZCOOL XiaoWei', serif", label: '站酷小薇体' },
    { value: "'ZCOOL KuaiLe', cursive", label: '站酷快乐体' },
    { value: "'Ma Shan Zheng', cursive", label: '马善政毛笔' },
    { value: "'ZCOOL QingKe HuangYou', sans-serif", label: '站酷黄油体' },
    { value: "'Long Cang', cursive", label: '龙藏体' },
    { value: "'Zhi Mang Xing', cursive", label: '知芒星' },
    { value: "'Liu Jian Mao Cao', cursive", label: '刘辩毛草' },
    { value: "'LXGW WenKai', serif", label: '霞鹜文楷' },
    { value: "'Smiley Sans', sans-serif", label: '得意黑' },
    { value: "'ZCOOL KuHei', sans-serif", label: '站酷酷黑' },
    { value: "'ZCOOL WenYi', serif", label: '站酷文艺' },
    { value: "'ZCOOL CangErYuYang', cursive", label: '站酷仓耳渔阳' },
    { value: "'ZCOOL Addict', sans-serif", label: '站酷 addicts' },
    { value: "'ZCOOL GaoDuanHei', sans-serif", label: '站酷高端黑' },
    { value: "'ZCOOL AiLe', cursive", label: '站酷爱乐体' },
    { value: "'ZCOOL KuBi', sans-serif", label: '站酷酷毕体' },
    { value: "'ZCOOL TeZhuan', sans-serif", label: '站酷特专体' },
    { value: "'Alimama FangDaTi', sans-serif", label: '阿里妈妈方大体' },
    { value: "'Alimama ShuHeiTi', sans-serif", label: '阿里妈妈数黑体' },
    { value: "'Douyin Sans', sans-serif", label: '抖音美好体' },
    { value: "'Douyin Good', sans-serif", label: '抖音好字体' },
    { value: "'Black Ops One', cursive", label: 'Black Ops One' },
    { value: "'Bungee', cursive", label: 'Bungee' },
    { value: "'Permanent Marker', cursive", label: 'Permanent Marker' },
    { value: "'Pacifico', cursive", label: 'Pacifico' },
    { value: "'Caveat', cursive", label: 'Caveat 手写' },
    { value: "'Righteous', sans-serif", label: 'Righteous' },
    { value: 'Georgia, serif', label: 'Georgia' },
    { value: 'Arial, sans-serif', label: 'Arial' }
];

function fontOptionsHTML(selected) {
    return FONTS.map(f => '<option value="' + f.value + '"' + (f.value === selected ? ' selected' : '') + '>' + f.label + '</option>').join('');
}

// ===== Default State =====
const DEFAULT_STATE = {
    width: 1200, height: 675,
    bgType: 'gradient', gradientType: 'linear', gradientAngle: 135,
    color1: '#0ea5e9', color2: '#8b5cf6', color3: '#ec4899',
    gradientStops: 3,
    solidColor: '#1a1a1a',
    bgImage: null, bgBlur: 0, bgDarken: 0,
    mainTitleFont: "'Smiley Sans', sans-serif",
    mainTitle: 'Cover Designer', mainTitleSize: 80, mainTitleColor: '#ffffff', mainTitleX: 0.5, mainTitleY: 0.5,
    customTexts: [],
    svgs: [],
    defaultFormat: 'png',
    downloadQuality: 0.92,
    meshColor1: '#0ea5e9', meshColor2: '#8b5cf6', meshColor3: '#ec4899', meshColor4: '#f5576c', meshComplexity: 5,
    noiseIntensity: 20, noiseScale: 3, noiseColor: '#ffffff', noiseBgColor: '#0a0a0a'
};

let state = JSON.parse(JSON.stringify(DEFAULT_STATE));
let svgIdCounter = 0;
let customTextIdCounter = 0;
const canvas = document.getElementById('coverCanvas');
const ctx = canvas.getContext('2d');
let dragTarget = null, isDragging = false;
let selectedFormat = 'png';
let bgImageObj = null;
let currentPanel = null;

// High-DPI support: render the editing canvas at device resolution for crispness,
// but keep exports at the logical design size (see renderExportCanvas).
const dpr = Math.min(window.devicePixelRatio || 1, 2);
let bgCanvas = null;
let bgKey = null;

const panelTitles = {
    basic: { zh: '基础设置', en: 'Basic Settings' },
    text: { zh: '文字内容', en: 'Text Content' },
    svg: { zh: '图标管理', en: 'Icon Management' },
    font: { zh: '字体样式', en: 'Font Style' },
    config: { zh: '配置管理', en: 'Config Management' }
};

function openPanel(tabName) {
    currentPanel = tabName;
    document.getElementById('panelTitle').textContent = panelTitles[tabName][currentLang];
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    document.getElementById('configPanel').classList.remove('collapsed');
    document.querySelectorAll('.nav-item[data-tab]').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tabName);
    });
}

function closePanel() {
    document.getElementById('configPanel').classList.add('collapsed');
    document.querySelectorAll('.nav-item[data-tab]').forEach(item => {
        item.classList.remove('active');
    });
    currentPanel = null;
}

document.querySelectorAll('.nav-item[data-tab]').forEach(item => {
    item.addEventListener('click', () => {
        const tab = item.dataset.tab;
        if (currentPanel === tab) {
            closePanel();
        } else {
            openPanel(tab);
        }
    });
});

document.getElementById('panelCloseBtn').addEventListener('click', closePanel);

let canvasScale = 1;
const canvasWrapper = document.getElementById('canvasWrapper');

function resetCanvasScale() {
    canvasScale = Math.min((window.innerWidth - 200) / state.width, (window.innerHeight - 200) / state.height, 1);
    canvas.style.width = (state.width * canvasScale) + 'px';
    canvas.style.height = (state.height * canvasScale) + 'px';
}

function initCanvas() {
    canvas.width = state.width * dpr;
    canvas.height = state.height * dpr;
    resetCanvasScale();
    document.getElementById('sizeInfo').textContent = state.width + ' x ' + state.height;
    draw();
}

canvasWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newScale = Math.max(0.2, Math.min(3, canvasScale + delta));
    if (newScale !== canvasScale) {
        canvasScale = newScale;
        canvas.style.width = (state.width * canvasScale) + 'px';
        canvas.style.height = (state.height * canvasScale) + 'px';
    }
}, { passive: false });

function randomColor() {
    const hue = Math.random() * 360;
    return 'hsl(' + hue + ', ' + (65 + Math.random() * 25) + '%, ' + (45 + Math.random() * 15) + '%)';
}

function hslToHex(hsl) {
    const tmp = document.createElement('div');
    tmp.style.color = hsl;
    document.body.appendChild(tmp);
    const rgb = getComputedStyle(tmp).color;
    document.body.removeChild(tmp);
    const m = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (!m) return '#000000';
    return '#' + [m[1], m[2], m[3]].map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
}

function generateRandomColors() {
    pushHistory();
    // 提取当前颜色的色相，用于确保新颜色有足够差异
    let prevHue = null;
    try {
        const tmp = document.createElement('div');
        tmp.style.color = state.color1;
        document.body.appendChild(tmp);
        const rgb = getComputedStyle(tmp).color;
        document.body.removeChild(tmp);
        const m = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (m) {
            const r = parseInt(m[1]) / 255, g = parseInt(m[2]) / 255, b = parseInt(m[3]) / 255;
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            if (max !== min) {
                let h;
                if (max === r) h = ((g - b) / (max - min) + 6) % 6;
                else if (max === g) h = (b - r) / (max - min) + 2;
                else h = (r - g) / (max - min) + 4;
                prevHue = h * 60;
            }
        }
    } catch (e) {}

    // 生成与之前颜色差异至少80度的baseHue
    let baseHue = Math.random() * 360;
    if (prevHue !== null) {
        let diff = Math.abs(baseHue - prevHue);
        if (diff > 180) diff = 360 - diff;
        if (diff < 80) {
            baseHue = (prevHue + 120 + Math.random() * 120) % 360;
        }
    }

    // 三个颜色之间至少相隔90度，确保对比度
    const hue1 = baseHue;
    const hue2 = (baseHue + 90 + Math.random() * 90) % 360;
    const hue3 = (baseHue + 210 + Math.random() * 90) % 360;

    state.color1 = hslToHex('hsl(' + hue1 + ', 75%, 55%)');
    state.color2 = hslToHex('hsl(' + hue2 + ', 70%, 50%)');
    if (state.gradientStops >= 3) {
        state.color3 = hslToHex('hsl(' + hue3 + ', 65%, 55%)');
    }
    state.gradientAngle = Math.floor(Math.random() * 360);
    document.getElementById('gradientAngle').value = state.gradientAngle;
    document.getElementById('angleValue').textContent = state.gradientAngle + '°';
    updateColorBars();
    draw();
}

function updateColorBars() {
    const bar1 = document.getElementById('colorBar1');
    const bar2 = document.getElementById('colorBar2');
    const bar3 = document.getElementById('colorBar3');
    bar1.style.background = state.color1;
    bar1.setAttribute('data-color', state.color1);
    bar2.style.background = state.color2;
    bar2.setAttribute('data-color', state.color2);
    if (state.gradientStops >= 3) {
        bar3.style.background = state.color3;
        bar3.setAttribute('data-color', state.color3);
        bar3.style.display = 'block';
    } else {
        bar3.style.display = 'none';
    }
}

function updateColorPreview(inputId, previewId, textId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const text = document.getElementById(textId);
    if (preview) preview.style.background = input.value;
    if (text) text.textContent = input.value.toUpperCase();
}

// ===== SVG Cache =====
const svgImageCache = new Map(); // 存储 { svgCode: { img: Image, url: string } }
const svgPreviewCache = new Map(); // 列表预览图 URL 缓存: svgCode -> ObjectURL

function getSvgPreviewUrl(svgCode) {
    if (!svgPreviewCache.has(svgCode)) {
        const blob = new Blob([svgCode], { type: 'image/svg+xml' });
        svgPreviewCache.set(svgCode, URL.createObjectURL(blob));
    }
    return svgPreviewCache.get(svgCode);
}

function getSvgImage(svgCode, iconColor = '#ffffff') {
    // 如果SVG包含currentColor，替换为指定颜色
    let processedSvg = svgCode;
    if (svgCode.includes('currentColor')) {
        processedSvg = svgCode.replace(/currentColor/g, iconColor);
    }
    
    const cacheKey = processedSvg; // 使用处理后的SVG作为缓存key
    if (svgImageCache.has(cacheKey)) {
        return svgImageCache.get(cacheKey).img;
    }
    
    const img = new Image();
    const svgBlob = new Blob([processedSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    img.src = url;
    svgImageCache.set(cacheKey, { img, url });
    return img;
}

function cleanupSvgCache(svgCode) {
    const cached = svgImageCache.get(svgCode);
    if (cached) {
        URL.revokeObjectURL(cached.url);
        svgImageCache.delete(svgCode);
    }
    const pv = svgPreviewCache.get(svgCode);
    if (pv) {
        URL.revokeObjectURL(pv);
        svgPreviewCache.delete(svgCode);
    }
}

function cleanupAllSvgCache() {
    svgImageCache.forEach(cached => {
        URL.revokeObjectURL(cached.url);
    });
    svgImageCache.clear();
    svgPreviewCache.forEach(url => {
        URL.revokeObjectURL(url);
    });
    svgPreviewCache.clear();
}

// ===== Mesh Gradient =====
function drawMesh(ctx, w, h) {
    const colors = [state.meshColor1, state.meshColor2, state.meshColor3, state.meshColor4];
    const complexity = state.meshComplexity;

    // 使用确定性伪随机函数，基于索引生成固定随机数
    function seededRandom(seed) {
        let x = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
        return x - Math.floor(x);
    }

    const points = [];
    for (let i = 0; i <= complexity; i++) {
        for (let j = 0; j <= complexity; j++) {
            const seed = i * 1000 + j;
            points.push({
                x: (w / complexity) * j + (seededRandom(seed) - 0.5) * (w / complexity) * 0.3,
                y: (h / complexity) * i + (seededRandom(seed + 5000) - 0.5) * (h / complexity) * 0.3,
                color: colors[(i + j) % 4]
            });
        }
    }
    for (let i = 0; i < complexity; i++) {
        for (let j = 0; j < complexity; j++) {
            const idx = i * (complexity + 1) + j;
            const p1 = points[idx];
            const p2 = points[idx + 1];
            const p3 = points[idx + complexity + 1];
            const p4 = points[idx + complexity + 2];
            const grad = ctx.createLinearGradient(p1.x, p1.y, p4.x, p4.y);
            grad.addColorStop(0, p1.color);
            grad.addColorStop(0.5, p2.color);
            grad.addColorStop(1, p4.color);
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.closePath();
            ctx.fill();
        }
    }
}

// ===== Noise Texture =====
function drawNoise(ctx, w, h) {
    ctx.fillStyle = state.noiseBgColor;
    ctx.fillRect(0, 0, w, h);
    const intensity = state.noiseIntensity / 100;
    const scale = state.noiseScale;
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < intensity) {
            const noise = (Math.random() - 0.5) * 2 * scale * 20;
            data[i] = Math.min(255, Math.max(0, data[i] + noise));
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
        }
    }
    ctx.putImageData(imageData, 0, 0);
}

// ===== Background Cache =====
function frac(x) { return x - Math.floor(x); }

function backgroundKey() {
    const img = bgImageObj && bgImageObj.complete && bgImageObj.naturalWidth > 0 ? (bgImageObj.src || 'loaded') : (bgImageObj ? 'loading' : 'none');
    return [
        state.width, state.height,
        state.bgType, state.gradientType, state.gradientAngle,
        state.color1, state.color2, state.color3, state.gradientStops,
        state.solidColor,
        state.meshColor1, state.meshColor2, state.meshColor3, state.meshColor4, state.meshComplexity,
        state.noiseIntensity, state.noiseScale, state.noiseColor, state.noiseBgColor,
        state.bgBlur, state.bgDarken, img
    ].join('|');
}

function renderBackground(g) {
    if (state.bgType === 'image' && bgImageObj) {
        g.save();
        const imgRatio = bgImageObj.width / bgImageObj.height;
        const canvasRatio = state.width / state.height;
        let sx, sy, sw, sh;
        if (imgRatio > canvasRatio) {
            sh = bgImageObj.height;
            sw = sh * canvasRatio;
            sx = (bgImageObj.width - sw) / 2;
            sy = 0;
        } else {
            sw = bgImageObj.width;
            sh = sw / canvasRatio;
            sx = 0;
            sy = (bgImageObj.height - sh) / 2;
        }
        g.drawImage(bgImageObj, sx, sy, sw, sh, 0, 0, state.width, state.height);
        if (state.bgBlur > 0) {
            g.filter = 'blur(' + state.bgBlur + 'px)';
            g.globalCompositeOperation = 'copy';
            g.drawImage(g.canvas, 0, 0, state.width, state.height);
            g.filter = 'none';
            g.globalCompositeOperation = 'source-over';
        }
        if (state.bgDarken > 0) {
            g.fillStyle = 'rgba(0,0,0,' + (state.bgDarken / 100) + ')';
            g.fillRect(0, 0, state.width, state.height);
        }
        g.restore();
    } else if (state.bgType === 'gradient') {
        let grad;
        if (state.gradientType === 'linear') {
            const a = state.gradientAngle * Math.PI / 180;
            const cx = state.width / 2, cy = state.height / 2, d = Math.sqrt(cx * cx + cy * cy);
            grad = g.createLinearGradient(cx - Math.cos(a) * d, cy - Math.sin(a) * d, cx + Math.cos(a) * d, cy + Math.sin(a) * d);
        } else if (state.gradientType === 'radial') {
            grad = g.createRadialGradient(state.width / 2, state.height / 2, 0, state.width / 2, state.height / 2, Math.max(state.width, state.height) / 1.5);
        } else {
            grad = g.createConicGradient(state.gradientAngle * Math.PI / 180, state.width / 2, state.height / 2);
        }
        grad.addColorStop(0, state.color1);
        if (state.gradientStops >= 3) {
            grad.addColorStop(0.5, state.color2);
            grad.addColorStop(1, state.color3);
        } else {
            grad.addColorStop(1, state.color2);
        }
        g.fillStyle = grad;
        g.fillRect(0, 0, state.width, state.height);
    } else if (state.bgType === 'mesh') {
        drawMesh(g, state.width, state.height);
    } else if (state.bgType === 'noise') {
        drawNoise(g, state.width, state.height);
    } else {
        g.fillStyle = state.solidColor;
        g.fillRect(0, 0, state.width, state.height);
    }

    // Deterministic subtle film grain (stable across frames)
    g.fillStyle = 'rgba(255,255,255,0.012)';
    for (let i = 0; i < 80; i++) {
        const rx = frac(Math.sin(i * 12.9898) * 43758.5453);
        const ry = frac(Math.sin(i * 78.2330) * 43758.5453);
        const rw = frac(Math.sin(i * 39.4250) * 43758.5453) * 2;
        const rh = frac(Math.sin(i * 93.9898) * 43758.5453) * 2;
        g.fillRect(rx * state.width, ry * state.height, Math.max(1, rw), Math.max(1, rh));
    }
}

function getBgCanvas() {
    if (!bgCanvas || bgCanvas.width !== canvas.width || bgCanvas.height !== canvas.height) {
        bgCanvas = document.createElement('canvas');
        bgCanvas.width = canvas.width;
        bgCanvas.height = canvas.height;
        bgKey = null;
    }
    if (bgKey !== backgroundKey()) {
        const bctx = bgCanvas.getContext('2d');
        bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        renderBackground(bctx);
        bgKey = backgroundKey();
    }
    return bgCanvas;
}

// Draw text + SVG overlays on top of the (cached) background.
// g is expected to already have a transform that maps logical canvas coords.
function drawOverlays(g) {
    const srcScale = g.canvas.width / state.width;

    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = '900 ' + state.mainTitleSize + 'px ' + state.mainTitleFont;
    g.fillStyle = state.mainTitleColor;
    g.shadowColor = 'rgba(0,0,0,0.3)';
    g.shadowBlur = 20;
    g.shadowOffsetY = 4;
    wrapTextCenter(g, state.mainTitle, state.mainTitleX * state.width, state.mainTitleY * state.height, state.width * 0.84, state.mainTitleSize * 1.4);
    g.shadowColor = 'transparent';

    state.customTexts.forEach(ct => {
        const ctRgb = hexToRgb(ct.color);
        g.font = (ct.bold ? '700 ' : '400 ') + ct.size + 'px ' + (ct.fontFamily || state.mainTitleFont);
        g.fillStyle = 'rgba(' + ctRgb.r + ',' + ctRgb.g + ',' + ctRgb.b + ',' + ct.opacity + ')';
        g.shadowColor = 'rgba(0,0,0,0.2)';
        g.shadowBlur = 10;
        g.shadowOffsetY = 2;
        g.fillText(ct.text, ct.x * state.width, ct.y * state.height);
        g.shadowColor = 'transparent';
    });

    state.svgs.forEach(svgItem => {
        const img = getSvgImage(svgItem.svgCode, svgItem.iconColor || '#ffffff');
        if (img.complete && img.naturalWidth > 0) {
            g.save();
            const x = svgItem.x * state.width;
            const y = svgItem.y * state.height;
            const boxSize = svgItem.boxSize;
            const iconSize = svgItem.size;
            const radius = svgItem.radius;
            const boxX = x - boxSize / 2;
            const boxY = y - boxSize / 2;
            const showBox = svgItem.showBox !== false;

            const boxPath = (cv) => {
                cv.beginPath();
                if (svgItem.boxShape === 'circle') {
                    cv.arc(x, y, boxSize / 2, 0, Math.PI * 2);
                } else if (svgItem.boxShape === 'diamond') {
                    cv.moveTo(x, boxY);
                    cv.lineTo(x + boxSize / 2, y);
                    cv.lineTo(x, boxY + boxSize);
                    cv.lineTo(x - boxSize / 2, y);
                    cv.closePath();
                } else {
                    if (cv.roundRect) {
                        cv.roundRect(boxX, boxY, boxSize, boxSize, radius);
                    } else {
                        cv.rect(boxX, boxY, boxSize, boxSize);
                    }
                }
            };

            if (showBox) {
                boxPath(g);

                if (svgItem.boxShadow) {
                    g.shadowColor = 'rgba(0, 0, 0, 0.3)';
                    g.shadowBlur = 15;
                    g.shadowOffsetX = 0;
                    g.shadowOffsetY = 5;
                }

                if (svgItem.boxStyle === 'glass') {
                    const offCanvas = document.createElement('canvas');
                    offCanvas.width = boxSize;
                    offCanvas.height = boxSize;
                    const offCtx = offCanvas.getContext('2d');
                    offCtx.drawImage(g.canvas, boxX * srcScale, boxY * srcScale, boxSize * srcScale, boxSize * srcScale, 0, 0, boxSize, boxSize);
                    offCtx.filter = 'blur(8px)';
                    offCtx.globalCompositeOperation = 'copy';
                    offCtx.drawImage(offCanvas, 0, 0);
                    offCtx.filter = 'none';
                    offCtx.globalCompositeOperation = 'source-over';

                    g.save();
                    boxPath(g);
                    g.clip();
                    g.globalAlpha = svgItem.boxOpacity;
                    g.drawImage(offCanvas, boxX, boxY);
                    g.restore();

                    g.save();
                    boxPath(g);
                    g.clip();
                    g.fillStyle = 'rgba(255, 255, 255, 0.15)';
                    g.globalAlpha = svgItem.boxOpacity;
                    g.fill();
                    g.restore();

                    g.save();
                    const highlightGrad = g.createLinearGradient(boxX, boxY, boxX, boxY + boxSize * 0.4);
                    highlightGrad.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
                    highlightGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.15)');
                    highlightGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    boxPath(g);
                    g.clip();
                    g.fillStyle = highlightGrad;
                    g.globalAlpha = svgItem.boxOpacity * 0.8;
                    g.fill();
                    g.restore();

                    g.save();
                    g.globalAlpha = svgItem.boxOpacity * 0.5;
                    g.strokeStyle = 'rgba(255, 255, 255, 0.7)';
                    g.lineWidth = 1.2;
                    g.stroke();
                    g.restore();

                    g.save();
                    const shadowGrad = g.createLinearGradient(boxX, boxY + boxSize * 0.7, boxX, boxY + boxSize);
                    shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
                    shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
                    boxPath(g);
                    g.clip();
                    g.fillStyle = shadowGrad;
                    g.globalAlpha = 1;
                    g.fill();
                    g.restore();
                } else {
                    g.globalAlpha = svgItem.boxOpacity;
                    g.fillStyle = svgItem.boxColor;
                    g.fill();
                }

                g.shadowColor = 'transparent';
                g.shadowBlur = 0;

                if (svgItem.boxBorder && svgItem.boxStyle !== 'glass') {
                    g.globalAlpha = 1;
                    g.strokeStyle = svgItem.boxBorderColor || '#ffffff';
                    g.lineWidth = svgItem.boxBorderWidth || 2;
                    g.stroke();
                }
            }

            g.globalAlpha = svgItem.opacity;
            g.drawImage(img, x - iconSize / 2, y - iconSize / 2, iconSize, iconSize);
            g.restore();
        }
    });
}

// ===== Main Draw Function =====
let drawQueued = false;
function draw() {
    if (drawQueued) return;
    drawQueued = true;
    requestAnimationFrame(() => {
        drawQueued = false;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, state.width, state.height);
        ctx.drawImage(getBgCanvas(), 0, 0, state.width, state.height);
        drawOverlays(ctx);
    });
}

// Export always renders at the logical design size (never scaled by devicePixelRatio).
function renderExportCanvas() {
    const ec = document.createElement('canvas');
    ec.width = state.width;
    ec.height = state.height;
    const ectx = ec.getContext('2d');
    ectx.drawImage(getBgCanvas(), 0, 0, state.width, state.height);
    drawOverlays(ectx);
    return ec;
}

function wrapTextCenter(ctx, text, x, y, maxW, lineH) {
    const chars = text.split('');
    let lines = [], line = '';
    for (let i = 0; i < chars.length; i++) {
        const test = line + chars[i];
        if (ctx.measureText(test).width > maxW && line) {
            lines.push(line); line = chars[i];
        } else line = test;
    }
    lines.push(line);
    const startY = y - (lines.length - 1) * lineH / 2;
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, startY + i * lineH);
    }
}

function hexToRgb(hex) {
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
    };
}

function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: (e.clientX - rect.left) * (state.width / rect.width),
        y: (e.clientY - rect.top) * (state.height / rect.height)
    };
}

function hitTest(x, y) {
    // Custom texts first
    for (let i = state.customTexts.length - 1; i >= 0; i--) {
        const ct = state.customTexts[i];
        const ctx2 = document.createElement('canvas').getContext('2d');
        ctx2.font = (ct.bold ? '700 ' : '400 ') + ct.size + 'px ' + (ct.fontFamily || state.mainTitleFont);
        const tw = ctx2.measureText(ct.text).width;
        const tx = ct.x * state.width, ty = ct.y * state.height;
        if (Math.abs(x - tx) < tw / 2 + 20 && Math.abs(y - ty) < ct.size / 2 + 10) {
            return { type: 'customText', index: i };
        }
    }
    for (let i = state.svgs.length - 1; i >= 0; i--) {
        const s = state.svgs[i];
        const sx = s.x * state.width, sy = s.y * state.height;
        if (Math.abs(x - sx) < s.boxSize / 2 && Math.abs(y - sy) < s.boxSize / 2) {
            return { type: 'svg', index: i };
        }
    }
    const targets = [
        { key: 'mainTitle', x: state.mainTitleX * state.width, y: state.mainTitleY * state.height, size: state.mainTitleSize }
    ];
    for (let t of targets) {
        const dx = x - t.x, dy = y - t.y;
        if (Math.sqrt(dx * dx + dy * dy) < Math.max(t.size * 1.5, 60)) {
            return { type: 'text', key: t.key };
        }
    }
    return null;
}

canvas.addEventListener('mousedown', e => {
    const pos = getCanvasPos(e);
    const hit = hitTest(pos.x, pos.y);
    if (hit) {
        dragTarget = hit;
        isDragging = true;
        canvas.style.cursor = 'grabbing';
    }
});

window.addEventListener('mousemove', e => {
    if (!isDragging || !dragTarget) return;
    const pos = getCanvasPos(e);
    const nx = Math.max(0.05, Math.min(0.95, pos.x / state.width));
    const ny = Math.max(0.05, Math.min(0.95, pos.y / state.height));
    if (dragTarget.type === 'text') {
        state[dragTarget.key + 'X'] = nx;
        state[dragTarget.key + 'Y'] = ny;
        updatePosDisplay();
    } else if (dragTarget.type === 'svg') {
        state.svgs[dragTarget.index].x = nx;
        state.svgs[dragTarget.index].y = ny;
        updateSvgList();
    } else if (dragTarget.type === 'customText') {
        state.customTexts[dragTarget.index].x = nx;
        state.customTexts[dragTarget.index].y = ny;
        updateCustomTextList();
    }
    draw();
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    dragTarget = null;
    canvas.style.cursor = 'crosshair';
});

canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    const t = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = (t.clientX - rect.left) * (state.width / rect.width);
    const y = (t.clientY - rect.top) * (state.height / rect.height);
    const hit = hitTest(x, y);
    if (hit) { dragTarget = hit; isDragging = true; }
}, { passive: false });

canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    if (!isDragging || !dragTarget) return;
    const t = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const nx = Math.max(0.05, Math.min(0.95, (t.clientX - rect.left) * (state.width / rect.width) / state.width));
    const ny = Math.max(0.05, Math.min(0.95, (t.clientY - rect.top) * (state.height / rect.height) / state.height));
    if (dragTarget.type === 'text') {
        state[dragTarget.key + 'X'] = nx;
        state[dragTarget.key + 'Y'] = ny;
        updatePosDisplay();
    } else if (dragTarget.type === 'svg') {
        state.svgs[dragTarget.index].x = nx;
        state.svgs[dragTarget.index].y = ny;
        updateSvgList();
    } else if (dragTarget.type === 'customText') {
        state.customTexts[dragTarget.index].x = nx;
        state.customTexts[dragTarget.index].y = ny;
        updateCustomTextList();
    }
    draw();
}, { passive: false });

canvas.addEventListener('touchend', () => { isDragging = false; dragTarget = null; });

function updatePosDisplay() {
    document.getElementById('mainTitlePos').textContent = 'X: ' + Math.round(state.mainTitleX * state.width) + ' | Y: ' + Math.round(state.mainTitleY * state.height);
}

// ===== Custom Text =====
function updateCustomTextList() {
    const list = document.getElementById('customTextList');
    if (state.customTexts.length === 0) {
        list.innerHTML = '';
        return;
    }
    const lang = currentLang;
    const fontSizeLabel = lang === 'zh' ? '字号' : 'Font Size';
    const colorLabel = lang === 'zh' ? '颜色' : 'Color';
    const opacityLabel = lang === 'zh' ? '透明度' : 'Opacity';
    const boldLabel = lang === 'zh' ? '加粗' : 'Bold';
    const positionLabel = lang === 'zh' ? '位置' : 'Position';
    const dragLabel = lang === 'zh' ? '(拖拽画布调整)' : '(Drag on canvas)';
    const normalText = lang === 'zh' ? '正常' : 'Normal';
    const boldText = lang === 'zh' ? '加粗' : 'Bold';
    const html = state.customTexts.map((ct, idx) => {
        const ctFont = ct.fontFamily || "'Noto Sans SC', sans-serif";
        const labelText = (lang === 'zh' ? '文字 ' : 'Text ') + (idx + 1);
        const placeholder = lang === 'zh' ? '输入文字' : 'Enter text';
        const fontLabel = lang === 'zh' ? '字体' : 'Font';
        return `
            <div class="custom-text-item">
                <div class="custom-text-item-header">
                    <span class="custom-text-item-label">${labelText}</span>
                    <button class="custom-text-remove" data-idx="${idx}" aria-label="删除">×</button>
                </div>
                <div class="form-group">
                    <input type="text" class="custom-text-input" data-idx="${idx}" value="${escapeHtml(ct.text)}" placeholder="${placeholder}">
                </div>
                <div class="form-group">
                    <label>${fontLabel}</label>
                    <select class="custom-text-font" data-idx="${idx}">
                        ${fontOptionsHTML(ctFont)}
                    </select>
                </div>
                <div class="two-col">
                    <div class="form-group">
                        <label>${fontSizeLabel}</label>
                        <input type="range" class="custom-text-size" data-idx="${idx}" min="10" max="100" value="${ct.size}">
                        <div class="range-value">${ct.size}px</div>
                    </div>
                    <div class="form-group">
                        <label>${colorLabel}</label>
                        <div class="color-picker-wrapper custom-text-color-wrapper" data-idx="${idx}">
                            <div class="color-preview-circle" style="background:${escapeHtml(ct.color)}"></div>
                            <span class="color-value-text">${escapeHtml(ct.color.toUpperCase())}</span>
                            <input type="color" class="custom-text-color" data-idx="${idx}" value="${escapeHtml(ct.color)}">
                        </div>
                    </div>
                </div>
                <div class="two-col">
                    <div class="form-group">
                        <label>${opacityLabel}</label>
                        <input type="range" class="custom-text-opacity" data-idx="${idx}" min="0" max="100" value="${Math.round(ct.opacity * 100)}">
                        <div class="range-value">${Math.round(ct.opacity * 100)}%</div>
                    </div>
                    <div class="form-group">
                        <label>${boldLabel}</label>
                        <select class="custom-text-bold" data-idx="${idx}">
                            <option value="0" ${!ct.bold ? 'selected' : ''}>${normalText}</option>
                            <option value="1" ${ct.bold ? 'selected' : ''}>${boldText}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>${positionLabel} <span style="color:#555;font-size:11px;">${dragLabel}</span></label>
                    <div class="pos-display" id="ctPos_${idx}">X: ${Math.round(ct.x * state.width)} | Y: ${Math.round(ct.y * state.height)}</div>
                </div>
            </div>`;
    }).join('');
    list.innerHTML = html;
}

document.getElementById('customTextList').addEventListener('click', function (e) {
    const btn = e.target.closest('.custom-text-remove');
    if (btn) {
        const idx = parseInt(btn.dataset.idx);
        pushHistory();
        state.customTexts.splice(idx, 1);
        updateCustomTextList();
        draw();
        return;
    }
    const wrapper = e.target.closest('.custom-text-color-wrapper');
    if (wrapper && !e.target.closest('.inline-color-picker')) {
        e.preventDefault();
        e.stopPropagation();
        const idx = parseInt(wrapper.dataset.idx);
        const input = wrapper.querySelector('.custom-text-color');
        if (!input) return;

        openInlinePicker(wrapper, input.value, (hex) => {
            input.value = hex;
            state.customTexts[idx].color = hex;
            const preview = wrapper.querySelector('.color-preview-circle');
            const text = wrapper.querySelector('.color-value-text');
            if (preview) preview.style.background = hex;
            if (text) text.textContent = hex.toUpperCase();
            draw();
        });
    }
});

document.getElementById('customTextList').addEventListener('input', function (e) {
    const input = e.target.closest('.custom-text-input');
    if (input) {
        const idx = parseInt(input.dataset.idx);
        state.customTexts[idx].text = input.value;
        draw();
        return;
    }
    const slider = e.target.closest('.custom-text-size');
    if (slider) {
        const idx = parseInt(slider.dataset.idx);
        state.customTexts[idx].size = parseInt(slider.value);
        draw();
        return;
    }
    const opacitySlider = e.target.closest('.custom-text-opacity');
    if (opacitySlider) {
        const idx = parseInt(opacitySlider.dataset.idx);
        state.customTexts[idx].opacity = parseInt(opacitySlider.value) / 100;
        draw();
        return;
    }
    const boldSelect = e.target.closest('.custom-text-bold');
    if (boldSelect) {
        const idx = parseInt(boldSelect.dataset.idx);
        state.customTexts[idx].bold = boldSelect.value === '1';
        draw();
        return;
    }
    const fontSelect = e.target.closest('.custom-text-font');
    if (fontSelect) {
        const idx = parseInt(fontSelect.dataset.idx);
        state.customTexts[idx].fontFamily = fontSelect.value;
        const ct = state.customTexts[idx];
        document.fonts.load(ct.size + 'px ' + ct.fontFamily).then(() => {
            draw();
        }).catch(() => {
            draw();
        });
    }
});

document.getElementById('addCustomTextBtn').addEventListener('click', () => {
    const newFont = "'Noto Sans SC', sans-serif";
    pushHistory();
    state.customTexts.push({
        id: ++customTextIdCounter,
        text: '自定义文字',
        x: 0.5,
        y: 0.7 + state.customTexts.length * 0.05,
        size: 24,
        color: '#ffffff',
        opacity: 0.8,
        bold: false,
        fontFamily: newFont
    });
    updateCustomTextList();
    // 确保字体加载完成后再绘制
    document.fonts.load('24px ' + newFont).then(() => {
        draw();
    }).catch(() => {
        draw();
    });
});

// ===== SVG List =====
function updateSvgList() {
    const list = document.getElementById('svgList');
    if (state.svgs.length === 0) {
        list.innerHTML = '<div class="empty-state">' + i18n[currentLang].noIcons + '</div>';
        return;
    }
    const lang = currentLang;
    const boxSizeLabel = lang === 'zh' ? '框大小' : 'Box Size';
    const iconSizeLabel = lang === 'zh' ? '图标大小' : 'Icon Size';
    const iconColorLabel = lang === 'zh' ? '图标颜色' : 'Icon Color';
    const radiusLabel = lang === 'zh' ? '圆角' : 'Radius';
    const boxOpacityLabel = lang === 'zh' ? '框透明度' : 'Box Opacity';
    const opacityLabel = lang === 'zh' ? '图标透明度' : 'Icon Opacity';
    const boxColorLabel = lang === 'zh' ? '框颜色' : 'Box Color';
    const posLabel = lang === 'zh' ? '位置' : 'Position';
    const dragLabel = lang === 'zh' ? '(拖拽画布调整)' : '(Drag on canvas)';
    const boxStyleLabel = lang === 'zh' ? '背景样式' : 'Bg Style';
    const boxShapeLabel = lang === 'zh' ? '形状' : 'Shape';
    const boxShadowLabel = lang === 'zh' ? '阴影' : 'Shadow';
    const boxBorderLabel = lang === 'zh' ? '边框' : 'Border';
    const borderColorLabel = lang === 'zh' ? '边框颜色' : 'Border Color';
    const borderWidthLabel = lang === 'zh' ? '边框宽度' : 'Border Width';
    const showBoxLabel = lang === 'zh' ? '显示背景' : 'Show Box';
    const html = state.svgs.map((svg, idx) => {
        const url = getSvgPreviewUrl(svg.svgCode);
        const previewBg = svg.boxStyle === 'glass' ? svg.boxColor + '80' : svg.boxColor;
        const borderRadius = svg.boxShape === 'circle' ? '50%' : svg.radius + 'px';
        const previewBorder = svg.boxBorder ? (svg.boxBorderWidth + 'px solid ' + escapeHtml(svg.boxBorderColor)) : 'none';
        const shapeVal = escapeHtml(svg.boxShape);
        const styleVal = escapeHtml(svg.boxStyle);
        return `
            <div class="svg-item">
                <div class="svg-box-preview" style="background:${escapeHtml(previewBg)};border-radius:${borderRadius};border:${previewBorder};">
                    <img src="${url}" style="width:28px;height:28px;" alt="">
                </div>
                <div class="svg-info">
                    ${boxSizeLabel}: ${svg.boxSize}px · ${iconSizeLabel}: ${svg.size}px<br>
                    ${boxStyleLabel}: ${styleVal} · ${boxShapeLabel}: ${shapeVal}<br>
                    ${posLabel}: ${Math.round(svg.x * state.width)}, ${Math.round(svg.y * state.height)}
                </div>
                <div class="svg-actions">
                    <button class="btn btn-secondary btn-small svg-edit-btn" data-idx="${idx}" aria-label="编辑">⚙</button>
                    <button class="btn btn-danger btn-small svg-remove-btn" data-idx="${idx}" aria-label="删除">✕</button>
                </div>
            </div>
            <div class="card svg-edit-panel" id="svgEdit_${idx}" style="display:none;margin-top:4px;" data-idx="${idx}">
                <div class="svg-effect-row">
                    <label class="svg-toggle"><input type="checkbox" data-idx="${idx}" data-prop="showBox" ${svg.showBox !== false ? 'checked' : ''}><span>${showBoxLabel}</span></label>
                </div>
                <div class="svg-style-section">
                    <div class="form-group"><label>${boxStyleLabel}</label>
                        <div class="svg-style-grid">
                            <label class="svg-style-option"><input type="radio" name="boxStyle_${idx}" value="solid" ${svg.boxStyle === 'solid' ? 'checked' : ''} data-idx="${idx}" data-prop="boxStyle"><span>纯色</span></label>
                            <label class="svg-style-option"><input type="radio" name="boxStyle_${idx}" value="glass" ${svg.boxStyle === 'glass' ? 'checked' : ''} data-idx="${idx}" data-prop="boxStyle"><span>毛玻璃</span></label>
                        </div>
                    </div>
                </div>
                <div class="two-col">
                    <div class="form-group"><label>${boxShapeLabel}</label>
                        <select class="svg-select" data-idx="${idx}" data-prop="boxShape">
                            <option value="rounded" ${svg.boxShape === 'rounded' ? 'selected' : ''}>圆角矩形</option>
                            <option value="circle" ${svg.boxShape === 'circle' ? 'selected' : ''}>圆形</option>
                            <option value="diamond" ${svg.boxShape === 'diamond' ? 'selected' : ''}>菱形</option>
                        </select>
                    </div>
                    <div class="form-group"><label>${boxSizeLabel}</label>
                        <input type="range" class="svg-slider" data-idx="${idx}" data-prop="boxSize" min="40" max="300" value="${svg.boxSize}">
                        <div class="range-value">${svg.boxSize}px</div>
                    </div>
                </div>
                <div class="two-col">
                    <div class="form-group"><label>${radiusLabel}</label>
                        <input type="range" class="svg-slider" data-idx="${idx}" data-prop="radius" min="0" max="100" value="${svg.radius}">
                        <div class="range-value">${svg.radius}px</div>
                    </div>
                    <div class="form-group"><label>${iconSizeLabel}</label>
                        <input type="range" class="svg-slider" data-idx="${idx}" data-prop="size" min="20" max="200" value="${svg.size}">
                        <div class="range-value">${svg.size}px</div>
                    </div>
                </div>
                <div class="svg-solid-section"><div class="form-group"><label>${boxColorLabel}</label>
                    <div class="color-picker-wrapper svg-color-wrapper" data-idx="${idx}" data-prop="boxColor">
                        <div class="color-preview-circle" style="background:${escapeHtml(svg.boxColor)}"></div>
                        <span class="color-value-text">${escapeHtml(svg.boxColor.toUpperCase())}</span>
                        <input type="color" class="svg-color-input" data-idx="${idx}" data-prop="boxColor" value="${escapeHtml(svg.boxColor)}">
                    </div>
                </div></div>
                <div class="form-group"><label>${iconColorLabel}</label>
                    <div class="color-picker-wrapper svg-color-wrapper" data-idx="${idx}" data-prop="iconColor">
                        <div class="color-preview-circle" style="background:${escapeHtml(svg.iconColor || '#ffffff')}"></div>
                        <span class="color-value-text">${escapeHtml((svg.iconColor || '#ffffff').toUpperCase())}</span>
                        <input type="color" class="svg-color-input" data-idx="${idx}" data-prop="iconColor" value="${escapeHtml(svg.iconColor || '#ffffff')}">
                    </div>
                </div>
                <div class="two-col">
                    <div class="form-group"><label>${boxOpacityLabel}</label>
                        <input type="range" class="svg-slider" data-idx="${idx}" data-prop="boxOpacity" min="0" max="100" value="${Math.round(svg.boxOpacity * 100)}">
                        <div class="range-value">${Math.round(svg.boxOpacity * 100)}%</div>
                    </div>
                    <div class="form-group"><label>${opacityLabel}</label>
                        <input type="range" class="svg-slider" data-idx="${idx}" data-prop="opacity" min="0" max="100" value="${Math.round(svg.opacity * 100)}">
                        <div class="range-value">${Math.round(svg.opacity * 100)}%</div>
                    </div>
                </div>
                <div class="svg-effect-row">
                    <label class="svg-toggle"><input type="checkbox" data-idx="${idx}" data-prop="boxShadow" ${svg.boxShadow ? 'checked' : ''}><span>${boxShadowLabel}</span></label>
                    <label class="svg-toggle"><input type="checkbox" data-idx="${idx}" data-prop="boxBorder" ${svg.boxBorder ? 'checked' : ''}><span>${boxBorderLabel}</span></label>
                </div>
                <div class="two-col svg-border-section"${svg.boxBorder ? '' : ' style="display:none;"'}>
                    <div class="form-group"><label>${borderColorLabel}</label>
                        <div class="color-picker-wrapper svg-color-wrapper" data-idx="${idx}" data-prop="boxBorderColor">
                            <div class="color-preview-circle" style="background:${escapeHtml(svg.boxBorderColor)}"></div>
                            <span class="color-value-text">${escapeHtml(svg.boxBorderColor.toUpperCase())}</span>
                            <input type="color" class="svg-color-input" data-idx="${idx}" data-prop="boxBorderColor" value="${escapeHtml(svg.boxBorderColor)}">
                        </div>
                    </div>
                    <div class="form-group"><label>${borderWidthLabel}</label>
                        <input type="range" class="svg-slider" data-idx="${idx}" data-prop="boxBorderWidth" min="1" max="10" value="${svg.boxBorderWidth}">
                        <div class="range-value">${svg.boxBorderWidth}px</div>
                    </div>
                </div>
            </div>`;
    }).join('');
    list.innerHTML = html;
}
document.getElementById('svgList').addEventListener('click', function (e) {
    const btn = e.target.closest('.svg-edit-btn');
    if (btn) {
        const idx = parseInt(btn.dataset.idx);
        const panel = document.getElementById('svgEdit_' + idx);
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        return;
    }
    const removeBtn = e.target.closest('.svg-remove-btn');
    if (removeBtn) {
        const idx = parseInt(removeBtn.dataset.idx);
        const svgCode = state.svgs[idx].svgCode;
        pushHistory();
        cleanupSvgCache(svgCode);
        state.svgs.splice(idx, 1);
        updateSvgList();
        draw();
        return;
    }
    const wrapper = e.target.closest('.svg-color-wrapper');
    if (wrapper && !e.target.closest('.inline-color-picker')) {
        e.preventDefault();
        e.stopPropagation();
        const idx = parseInt(wrapper.dataset.idx);
        const prop = wrapper.dataset.prop;
        const input = wrapper.querySelector('.svg-color-input');
        if (!input) return;

        openInlinePicker(wrapper, input.value, (hex) => {
            input.value = hex;
            state.svgs[idx][prop] = hex;
            const preview = wrapper.querySelector('.color-preview-circle');
            const text = wrapper.querySelector('.color-value-text');
            if (preview) preview.style.background = hex;
            if (text) text.textContent = hex.toUpperCase();

            // 如果是图标颜色，等待新图片加载完成后再绘制
            if (prop === 'iconColor') {
                const svgItem = state.svgs[idx];
                const img = getSvgImage(svgItem.svgCode, svgItem.iconColor || '#ffffff');
                if (img.complete && img.naturalWidth > 0) {
                    draw();
                } else {
                    img.onload = draw;
                }
            } else {
                draw();
            }
        });
    }
});

document.getElementById('svgList').addEventListener('input', function (e) {
    const slider = e.target.closest('.svg-slider');
    if (slider) {
        const idx = parseInt(slider.dataset.idx);
        const prop = slider.dataset.prop;
        let val = parseFloat(slider.value);
        if (prop === 'boxOpacity' || prop === 'opacity') val = val / 100;
        state.svgs[idx][prop] = val;

        const valueDisplay = slider.parentElement.querySelector('.range-value');
        if (valueDisplay) {
            const suffix = prop.includes('Width') || prop === 'boxSize' || prop === 'radius' || prop === 'size' ? 'px' : '%';
            valueDisplay.textContent = (prop.includes('Opacity') || prop === 'opacity') ? Math.round(val * 100) + suffix : val + suffix;
        }

        draw();
        return;
    }

    const radio = e.target.closest('input[type="radio"]');
    if (radio && radio.dataset.prop === 'boxStyle') {
        const idx = parseInt(radio.dataset.idx);
        state.svgs[idx].boxStyle = radio.value;

        const panel = document.getElementById('svgEdit_' + idx);
        const gradientSection = panel.querySelector('.svg-gradient-section');
        const solidSection = panel.querySelector('.svg-solid-section');

        if (state.svgs[idx].boxStyle === 'gradient') {
            if (gradientSection) gradientSection.style.display = 'block';
            if (solidSection) solidSection.style.display = 'none';
        } else {
            if (gradientSection) gradientSection.style.display = 'none';
            if (solidSection) solidSection.style.display = 'block';
        }

        draw();
        return;
    }

    const checkbox = e.target.closest('input[type="checkbox"]');
    if (checkbox) {
        const idx = parseInt(checkbox.dataset.idx);
        const prop = checkbox.dataset.prop;
        state.svgs[idx][prop] = checkbox.checked;

        const panel = document.getElementById('svgEdit_' + idx);
        if (prop === 'boxBorder') {
            const borderSection = panel.querySelector('.svg-border-section');
            if (borderSection) {
                borderSection.style.display = checkbox.checked ? 'flex' : 'none';
            }
        }

        draw();
        return;
    }

    const select = e.target.closest('.svg-select');
    if (select) {
        const idx = parseInt(select.dataset.idx);
        const prop = select.dataset.prop;
        state.svgs[idx][prop] = select.value;
        draw();
        return;
    }

    // 处理颜色输入变化
    const colorInput = e.target.closest('.svg-color-input');
    if (colorInput) {
        const idx = parseInt(colorInput.dataset.idx);
        const prop = colorInput.dataset.prop;
        const hex = colorInput.value;
        state.svgs[idx][prop] = hex;

        // 获取新颜色的图片，等待加载完成后再绘制
        const svgItem = state.svgs[idx];
        const img = getSvgImage(svgItem.svgCode, svgItem.iconColor || '#ffffff');
        if (img.complete && img.naturalWidth > 0) {
            draw();
        } else {
            img.onload = draw;
        }
        return;
    }
});

function addSvgFromCode(code) {
    if (!code || !code.includes('<svg')) {
        showToast('error', i18n[currentLang].invalidSvg, '');
        return false;
    }
    
    // 复用最后一个SVG的样式（如果有）
    const lastSvg = state.svgs[state.svgs.length - 1];
    const defaultSvgStyle = {
        x: 0.5,
        y: lastSvg ? lastSvg.y + 0.05 : 0.25,
        size: lastSvg ? lastSvg.size : 60,
        boxSize: lastSvg ? lastSvg.boxSize : 100,
        boxColor: lastSvg ? lastSvg.boxColor : '#4a90d9',
        boxOpacity: lastSvg ? lastSvg.boxOpacity : 0.9,
        boxStyle: lastSvg ? lastSvg.boxStyle : 'solid',
        showBox: lastSvg ? lastSvg.showBox : true,
        boxShadow: lastSvg ? lastSvg.boxShadow : true,
        boxBorder: lastSvg ? lastSvg.boxBorder : false,
        boxBorderColor: lastSvg ? lastSvg.boxBorderColor : '#ffffff',
        boxBorderWidth: lastSvg ? lastSvg.boxBorderWidth : 2,
        boxShape: lastSvg ? lastSvg.boxShape : 'rounded',
        radius: lastSvg ? lastSvg.radius : 20,
        opacity: lastSvg ? lastSvg.opacity : 1,
        iconColor: lastSvg ? lastSvg.iconColor : '#ffffff' // 图标颜色
    };
    
    pushHistory();
    state.svgs.push({
        id: ++svgIdCounter,
        svgCode: code,
        ...defaultSvgStyle
    });
    const iconColor = defaultSvgStyle.iconColor;
    const img = getSvgImage(code, iconColor);
    if (img.complete && img.naturalWidth > 0) {
        draw();
    } else {
        img.onload = draw;
    }
    document.getElementById('svgInput').value = '';
    updateSvgList();
    draw();
    showToast('success', i18n[currentLang].add, 'SVG icon added');
    return true;
}

document.getElementById('addSvgBtn').addEventListener('click', () => {
    addSvgFromCode(document.getElementById('svgInput').value.trim());
});

document.getElementById('svgUploadArea').addEventListener('click', () => {
    document.getElementById('svgFileInput').click();
});

document.getElementById('svgFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
        addSvgFromCode(event.target.result);
    };
    reader.readAsText(file);
    e.target.value = '';
});

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

async function calculateFileSizes() {
    const quality = state.downloadQuality;
    const formats = ['png', 'jpeg', 'webp'];

    for (const fmt of formats) {
        const sizeEl = document.querySelector('.file-size[data-size="' + fmt + '"]');
        if (!sizeEl) continue;
        sizeEl.textContent = '计算中...';
    }

    // Render once at the logical design size, then encode per format.
    const exportCanvas = renderExportCanvas();

    for (const fmt of formats) {
        const sizeEl = document.querySelector('.file-size[data-size="' + fmt + '"]');
        if (!sizeEl) continue;

        try {
            let blob;
            if (fmt === 'jpeg') {
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = exportCanvas.width;
                tempCanvas.height = exportCanvas.height;
                const tempCtx = tempCanvas.getContext('2d');
                tempCtx.fillStyle = '#ffffff';
                tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
                tempCtx.drawImage(exportCanvas, 0, 0);
                blob = await new Promise(resolve => tempCanvas.toBlob(resolve, 'image/jpeg', quality));
            } else if (fmt === 'webp') {
                blob = await new Promise(resolve => exportCanvas.toBlob(resolve, 'image/webp', quality));
            } else {
                blob = await new Promise(resolve => exportCanvas.toBlob(resolve, 'image/png'));
            }

            if (blob) {
                sizeEl.textContent = '约 ' + formatFileSize(blob.size);
            } else {
                sizeEl.textContent = '不支持';
            }
        } catch (e) {
            sizeEl.textContent = '不支持';
        }
    }
}

function openDownloadModal() {
    selectedFormat = state.defaultFormat;
    const radios = document.querySelectorAll('input[name="format"]');
    for (let r of radios) {
        r.checked = r.value === selectedFormat;
    }
    document.querySelectorAll('.modal-option').forEach(opt => {
        opt.classList.toggle('selected', opt.querySelector('input').value === selectedFormat);
    });
    updateModalQualityControl();
    document.getElementById('downloadModal').classList.add('show');
    calculateFileSizes();
}

function closeDownloadModal() {
    document.getElementById('downloadModal').classList.remove('show');
}

window.selectFormat = function (fmt) {
    selectedFormat = fmt;
    document.querySelectorAll('input[name="format"]').forEach(r => {
        r.checked = r.value === fmt;
    });
    document.querySelectorAll('.modal-option').forEach(opt => {
        opt.classList.toggle('selected', opt.querySelector('input').value === fmt);
    });
    updateModalQualityControl();
};

function updateModalQualityControl() {
    const section = document.getElementById('modalQualitySection');
    if (selectedFormat === 'png') {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
        document.getElementById('modalQuality').value = state.downloadQuality;
        document.getElementById('modalQualityValue').textContent = Math.round(state.downloadQuality * 100) + '%';
    }
}

let sizeCalcTimer = null;
document.getElementById('modalQuality').addEventListener('input', function () {
    state.downloadQuality = parseFloat(this.value);
    document.getElementById('modalQualityValue').textContent = Math.round(state.downloadQuality * 100) + '%';
    clearTimeout(sizeCalcTimer);
    sizeCalcTimer = setTimeout(calculateFileSizes, 300);
});

window.confirmDownload = function () {
    closeDownloadModal();
    document.getElementById('loading').classList.add('show');

    // Let the browser paint the loading state before the (synchronous) export.
    requestAnimationFrame(() => {
        setTimeout(() => {
            let dataUrl, ext;
            const quality = state.downloadQuality;
            const exportCanvas = renderExportCanvas();

            if (selectedFormat === 'jpeg') {
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = exportCanvas.width;
                tempCanvas.height = exportCanvas.height;
                const tempCtx = tempCanvas.getContext('2d');
                tempCtx.fillStyle = '#ffffff';
                tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
                tempCtx.drawImage(exportCanvas, 0, 0);
                dataUrl = tempCanvas.toDataURL('image/jpeg', quality);
                ext = 'jpg';
            } else if (selectedFormat === 'webp') {
                dataUrl = exportCanvas.toDataURL('image/webp', quality);
                ext = 'webp';
            } else {
                dataUrl = exportCanvas.toDataURL('image/png');
                ext = 'png';
            }

            const link = document.createElement('a');
            link.download = 'cover-' + Date.now() + '.' + ext;
            link.href = dataUrl;
            link.click();
            document.getElementById('loading').classList.remove('show');
            showToast('success', i18n[currentLang].downloadSuccess, '');
        }, 0);
    });
};

document.getElementById('exportBtn').addEventListener('click', () => {
    const exportState = JSON.parse(JSON.stringify(state));
    if (bgImageObj) {
        exportState.bgImageData = renderExportCanvas().toDataURL('image/jpeg', 0.5);
    }
    const config = JSON.stringify(exportState, null, 2);
    const blob = new Blob([config], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'cover-config-' + Date.now() + '.json';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    showToast('success', i18n[currentLang].exportSuccess, '');
});

document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFileInput').click();
});

document.getElementById('importFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const config = JSON.parse(event.target.result);
            if (!config.width || !config.height) {
                throw new Error('Invalid config');
            }

            pushHistory();
            state = JSON.parse(JSON.stringify(DEFAULT_STATE));

            Object.keys(config).forEach(key => {
                if (key !== 'bgImageData' && config[key] !== undefined) {
                    state[key] = config[key];
                }
            });

            if (config.bgImageData) {
                bgImageObj = new Image();
                bgImageObj.onload = () => {
                    updateBgImageUI();
                    initCanvas();
                };
                bgImageObj.src = config.bgImageData;
            }

            syncAllUI();
            // 确保字体加载完成后再绘制
            document.fonts.load(state.mainTitleSize + 'px ' + state.mainTitleFont).then(() => {
                initCanvas();
            }).catch(() => {
                initCanvas();
            });
            showToast('success', i18n[currentLang].importSuccess, '');
        } catch (err) {
            showToast('error', i18n[currentLang].invalidConfig, err.message);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
});

document.getElementById('bgUploadArea').addEventListener('click', () => {
    document.getElementById('bgImageInput').click();
});

document.getElementById('bgImageInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        bgImageObj = new Image();
        bgImageObj.onload = () => {
            state.bgImage = event.target.result;
            updateBgImageUI();
            draw();
        };
        bgImageObj.src = event.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
});

function updateBgImageUI() {
    const hasImage = !!bgImageObj;
    document.getElementById('bgImagePreviewContainer').style.display = hasImage ? 'block' : 'none';
    document.getElementById('bgUploadArea').style.display = hasImage ? 'none' : 'block';
    if (hasImage) {
        document.getElementById('bgImagePreview').src = bgImageObj.src;
    }
}

document.getElementById('removeBgImageBtn').addEventListener('click', () => {
    bgImageObj = null;
    state.bgImage = null;
    updateBgImageUI();
    draw();
});

document.getElementById('replaceBgImageBtn').addEventListener('click', () => {
    document.getElementById('bgImageInput').click();
});

document.getElementById('bgBlur').addEventListener('input', (e) => {
    state.bgBlur = parseInt(e.target.value);
    document.getElementById('bgBlurValue').textContent = state.bgBlur + 'px';
    draw();
});

document.getElementById('bgDarken').addEventListener('input', (e) => {
    state.bgDarken = parseInt(e.target.value);
    document.getElementById('bgDarkenValue').textContent = state.bgDarken + '%';
    draw();
});

// ===== Sync All UI =====
function syncAllUI() {
    document.getElementById('bgType').value = state.bgType;
    document.getElementById('gradientType').value = state.gradientType;
    document.getElementById('gradientAngle').value = state.gradientAngle;
    document.getElementById('solidColor').value = state.solidColor;
    document.getElementById('bgBlur').value = state.bgBlur;
    document.getElementById('bgDarken').value = state.bgDarken;

    document.getElementById('mainTitle').value = state.mainTitle;
    document.getElementById('mainTitleSize').value = state.mainTitleSize;
    document.getElementById('mainTitleColor').value = state.mainTitleColor;
    document.getElementById('mainTitleFontSelect').value = state.mainTitleFont;

    document.getElementById('defaultFormat').value = state.defaultFormat;
    document.getElementById('downloadQuality').value = state.downloadQuality;


    document.getElementById('meshComplexity').value = state.meshComplexity;

    document.getElementById('noiseIntensity').value = state.noiseIntensity;
    document.getElementById('noiseScale').value = state.noiseScale;
    document.getElementById('noiseColor').value = state.noiseColor;
    document.getElementById('noiseBgColor').value = state.noiseBgColor;

    document.querySelectorAll('.platform-item').forEach(el => {
        el.classList.remove('active');
        if (parseInt(el.dataset.w) === state.width && parseInt(el.dataset.h) === state.height) {
            el.classList.add('active');
        }
    });

    document.getElementById('gradientControls').style.display = state.bgType === 'gradient' ? 'block' : 'none';
    document.getElementById('solidControls').style.display = state.bgType === 'solid' ? 'block' : 'none';
    document.getElementById('imageControls').style.display = state.bgType === 'image' ? 'block' : 'none';
    document.getElementById('meshControls').style.display = state.bgType === 'mesh' ? 'block' : 'none';
    document.getElementById('noiseControls').style.display = state.bgType === 'noise' ? 'block' : 'none';
    document.getElementById('angleControl').style.display = state.gradientType === 'linear' ? 'block' : 'none';
    document.getElementById('randomColorBtn').style.display = state.bgType === 'gradient' ? 'flex' : 'none';

    updateColorBars();
    updateColorPreview('mainTitleColor', 'mainTitleColorPreview', 'mainTitleColorText');
    updateColorPreview('solidColor', 'solidColorPreview', 'solidColorText');
    updateColorPreview('noiseColor', 'noiseColorPreview', 'noiseColorText');
    updateColorPreview('noiseBgColor', 'noiseBgColorPreview', 'noiseBgColorText');

    document.getElementById('mainTitleSizeValue').textContent = state.mainTitleSize + 'px';
    document.getElementById('angleValue').textContent = state.gradientAngle + '°';
    document.getElementById('downloadQualityValue').textContent = Math.round(state.downloadQuality * 100) + '%';
    document.getElementById('bgBlurValue').textContent = state.bgBlur + 'px';
    document.getElementById('bgDarkenValue').textContent = state.bgDarken + '%';
    document.getElementById('meshComplexityValue').textContent = state.meshComplexity;
    document.getElementById('noiseIntensityValue').textContent = state.noiseIntensity + '%';
    document.getElementById('noiseScaleValue').textContent = state.noiseScale;



    updatePosDisplay();
    updateSvgList();
    updateCustomTextList();


}

// 全局 color-picker-wrapper 点击事件委托
document.addEventListener('click', function(e) {
    const wrapper = e.target.closest('.color-picker-wrapper[data-color-target]');
    if (wrapper && !e.target.closest('.inline-color-picker')) {
        e.preventDefault();
        e.stopPropagation();

        if (activeInlinePicker) {
            activeInlinePicker.remove();
            activeInlinePicker = null;
        }

        const targetId = wrapper.dataset.colorTarget;
        const input = document.getElementById(targetId);
        if (!input) return;

        const previewId = targetId + 'Preview';
        const textId = targetId + 'Text';
        const stateKeyMap = {
            'mainTitleColor': 'mainTitleColor',
            'solidColor': 'solidColor',
            'noiseColor': 'noiseColor',
            'noiseBgColor': 'noiseBgColor'
        };
        const stateKey = stateKeyMap[targetId];
        if (!stateKey) return;

        openInlinePicker(wrapper, input.value, (hex) => {
            input.value = hex;
            const preview = document.getElementById(previewId);
            const text = document.getElementById(textId);
            if (preview) preview.style.background = hex;
            if (text) text.textContent = hex.toUpperCase();
            state[stateKey] = hex;
            draw();
        });
    }
});

// ===== Event Listeners =====
document.getElementById('resetNavBtn').addEventListener('click', async () => {
    const confirmed = await showConfirm(
        i18n[currentLang].resetTitle,
        i18n[currentLang].resetConfirm
    );
    if (!confirmed) return;

    pushHistory();
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    bgImageObj = null;
    svgIdCounter = 0;
    customTextIdCounter = 0;
    cleanupAllSvgCache();

    syncAllUI();
    updateBgImageUI();
    // 确保字体加载完成后再绘制
    document.fonts.load(state.mainTitleSize + 'px ' + state.mainTitleFont).then(() => {
        initCanvas();
    }).catch(() => {
        initCanvas();
    });
    showToast('success', i18n[currentLang].resetSuccess, '');
});

document.getElementById('randomColorBtn').addEventListener('click', generateRandomColors);

document.getElementById('bgType').addEventListener('change', e => {
    state.bgType = e.target.value;
    document.getElementById('gradientControls').style.display = state.bgType === 'gradient' ? 'block' : 'none';
    document.getElementById('solidControls').style.display = state.bgType === 'solid' ? 'block' : 'none';
    document.getElementById('imageControls').style.display = state.bgType === 'image' ? 'block' : 'none';
    document.getElementById('meshControls').style.display = state.bgType === 'mesh' ? 'block' : 'none';
    document.getElementById('noiseControls').style.display = state.bgType === 'noise' ? 'block' : 'none';
    document.getElementById('randomColorBtn').style.display = state.bgType === 'gradient' ? 'flex' : 'none';
    draw();
});

document.getElementById('gradientType').addEventListener('change', e => {
    state.gradientType = e.target.value;
    document.getElementById('angleControl').style.display = state.gradientType === 'linear' ? 'block' : 'none';
    draw();
});

document.getElementById('gradientAngle').addEventListener('input', e => {
    state.gradientAngle = parseInt(e.target.value);
    document.getElementById('angleValue').textContent = e.target.value + '°';
    draw();
});

document.getElementById('addColorStop').addEventListener('click', () => {
    if (state.gradientStops < 3) {
        state.gradientStops = 3;
        updateColorBars();
        draw();
    }
});

document.getElementById('removeColorStop').addEventListener('click', () => {
    if (state.gradientStops > 2) {
        state.gradientStops = 2;
        updateColorBars();
        draw();
    }
});



document.getElementById('mainTitle').addEventListener('input', e => {
    state.mainTitle = e.target.value;
    draw();
});

document.getElementById('mainTitleSize').addEventListener('input', e => {
    state.mainTitleSize = parseInt(e.target.value);
    document.getElementById('mainTitleSizeValue').textContent = e.target.value + 'px';
    draw();
});

document.getElementById('mainTitleFontSelect').addEventListener('change', e => {
    state.mainTitleFont = e.target.value;
    // 确保字体加载完成后再绘制
    document.fonts.load(state.mainTitleSize + 'px ' + state.mainTitleFont).then(() => {
        draw();
    }).catch(() => {
        draw();
    });
});



document.querySelectorAll('.platform-item').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.platform-item').forEach(p => p.classList.remove('active'));
        el.classList.add('active');
        pushHistory();
        state.width = parseInt(el.dataset.w);
        state.height = parseInt(el.dataset.h);
        initCanvas();
    });
});



document.getElementById('downloadNavBtn').addEventListener('click', openDownloadModal);

document.getElementById('defaultFormat').addEventListener('change', e => {
    state.defaultFormat = e.target.value;
});

document.getElementById('downloadQuality').addEventListener('input', e => {
    state.downloadQuality = parseFloat(e.target.value);
    document.getElementById('downloadQualityValue').textContent = Math.round(state.downloadQuality * 100) + '%';
});

document.getElementById('downloadModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('downloadModal')) {
        closeDownloadModal();
    }
});

// Mesh events
document.getElementById('meshComplexity').addEventListener('input', e => {
    state.meshComplexity = parseInt(e.target.value);
    document.getElementById('meshComplexityValue').textContent = e.target.value;
    draw();
});

['meshColor1', 'meshColor2', 'meshColor3', 'meshColor4'].forEach((id, idx) => {
    const bar = document.getElementById(id);
    if (bar) {
        bar.addEventListener('click', (e) => {
            e.stopPropagation();
            openInlinePicker(bar.parentElement, state[id], (hex) => {
                state[id] = hex;
                bar.style.background = hex;
                bar.setAttribute('data-color', hex);
                draw();
            });
        });
    }
});

// Noise events
document.getElementById('noiseIntensity').addEventListener('input', e => {
    state.noiseIntensity = parseInt(e.target.value);
    document.getElementById('noiseIntensityValue').textContent = e.target.value + '%';
    draw();
});

document.getElementById('noiseScale').addEventListener('input', e => {
    state.noiseScale = parseInt(e.target.value);
    document.getElementById('noiseScaleValue').textContent = e.target.value;
    draw();
});





window.addEventListener('resize', resetCanvasScale);

// ===== Color bar click handlers =====
function attachColorBarPicker(barId, stateKey) {
    const bar = document.getElementById(barId);
    if (!bar) return;
    bar.addEventListener('click', (e) => {
        e.stopPropagation();
        openInlinePicker(bar.parentElement, state[stateKey], (hex) => {
            state[stateKey] = hex;
            updateColorBars();
            draw();
        });
    });
}

attachColorBarPicker('colorBar1', 'color1');
attachColorBarPicker('colorBar2', 'color2');
attachColorBarPicker('colorBar3', 'color3');

// ===== Keyboard Shortcuts =====
function initShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        // Ctrl/Cmd + Z: Undo
        if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z') {
            e.preventDefault();
            undoAction();
            return;
        }

        // Ctrl/Cmd + Y or Ctrl/Cmd + Shift + Z: Redo
        if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'y' || (e.shiftKey && e.key.toLowerCase() === 'z'))) {
            e.preventDefault();
            redoAction();
            return;
        }

        // Ctrl/Cmd + S: Export Config
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            document.getElementById('exportBtn')?.click();
        }

        // Ctrl/Cmd + D: Download
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            document.getElementById('downloadNavBtn')?.click();
        }

        // Ctrl/Cmd + R: Reset
        if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
            e.preventDefault();
            document.getElementById('resetNavBtn')?.click();
        }

        // Ctrl/Cmd + B: Toggle Sidebar (Mobile)
        if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
            e.preventDefault();
            document.getElementById('sidebarToggle')?.click();
        }
    });
}



// ===== Undo / Redo History =====
const undoStack = [];
const redoStack = [];
const HISTORY_LIMIT = 50;
function pushHistory() {
    undoStack.push(JSON.stringify(state));
    if (undoStack.length > HISTORY_LIMIT) undoStack.shift();
    redoStack.length = 0;
}
function restoreHistoryState(snap) {
    state = JSON.parse(snap);
    if (state.bgImage) {
        bgImageObj = new Image();
        bgImageObj.onload = () => { updateBgImageUI(); initCanvas(); };
        bgImageObj.src = state.bgImage;
    } else {
        bgImageObj = null;
    }
    syncAllUI();
    updateBgImageUI();
    if (!state.bgImage) initCanvas();
}
function undoAction() {
    if (undoStack.length === 0) {
        showToast('info', '撤销', '没有可撤销的操作');
        return;
    }
    redoStack.push(JSON.stringify(state));
    restoreHistoryState(undoStack.pop());
}
function redoAction() {
    if (redoStack.length === 0) {
        showToast('info', '重做', '没有可重做的操作');
        return;
    }
    undoStack.push(JSON.stringify(state));
    restoreHistoryState(redoStack.pop());
}

// ===== Init =====
document.getElementById('mainTitleFontSelect').innerHTML = fontOptionsHTML(state.mainTitleFont);
initShortcuts();
syncAllUI();
updateBgImageUI();
// 确保字体加载完成后再初始化画布
document.fonts.ready.then(() => {
    initCanvas();
}).catch(() => {
    initCanvas();
});

// ===== Mobile Landing Page Logic =====
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function showMobileLanding() {
    document.body.classList.add('mobile-detected', 'mobile-landing-active');
    document.getElementById('mobileLanding').classList.add('active');
    setLanguage(currentLang);
}

function hideMobileLanding() {
    document.body.classList.remove('mobile-detected', 'mobile-landing-active');
    document.getElementById('mobileLanding').classList.remove('active');
}

// Auto-detect mobile on load
window.addEventListener('DOMContentLoaded', () => {
    if (isMobile()) {
        showMobileLanding();
    }
});
