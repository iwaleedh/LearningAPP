import DOMPurify from 'dompurify';

function dimensions(svg) {
    const values = svg.getAttribute('viewBox')?.trim().split(/[\s,]+/).map(Number);
    if (values?.length === 4 && values.every(Number.isFinite) && values[2] > 0 && values[3] > 0) {
        return values;
    }
    const width = Number(svg.getAttribute('width'));
    const height = Number(svg.getAttribute('height'));
    if (width > 0 && height > 0) {
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        return [0, 0, width, height];
    }
    return null;
}

/** Sanitise and isolate each diagram without altering its authored geometry. */
export function prepareSvgMarkup(markup = '', label = 'Diagram', instanceId = 'diagram') {
    const fragment = DOMPurify.sanitize(markup, {
        USE_PROFILES: { svg: true, svgFilters: true },
        ADD_TAGS: ['use'],
        // IDs are namespaced below before insertion; preserve names such as
        // 'title' here so their references can be rewritten consistently.
        SANITIZE_DOM: false,
        FORBID_ATTR: ['name'],
        ADD_ATTR: ['role', 'aria-label', 'aria-labelledby', 'focusable', 'preserveAspectRatio'],
        RETURN_DOM_FRAGMENT: true,
    });
    const svg = fragment.querySelector('svg');
    if (!svg) return { markup: '', minWidth: 0 };

    const prefix = `nb-svg-${instanceId.replace(/[^a-zA-Z0-9_-]/g, '-')}`;
    const ids = new Map();
    for (const element of [svg, ...svg.querySelectorAll('[id]')]) {
        if (element.id) ids.set(element.id, `${prefix}-${element.id}`);
    }
    // The root ID also anchors embedded CSS, preventing generic .label/text rules
    // from changing neighbouring diagrams or the rest of the page.
    const rootId = svg.id ? ids.get(svg.id) : prefix;
    for (const element of [svg, ...svg.querySelectorAll('*')]) {
        if (element.id) element.id = ids.get(element.id);
        for (const attribute of [...element.attributes]) {
            if (attribute.name === 'id') continue;
            let value = attribute.value.replace(/url\(\s*(['"]?)#([^)'"\s]+)\1\s*\)/g,
                (match, quote, id) => ids.has(id) ? `url(#${ids.get(id)})` : match);
            if (['href', 'xlink:href'].includes(attribute.name) && value.startsWith('#') && ids.has(value.slice(1))) {
                value = `#${ids.get(value.slice(1))}`;
            }
            if (['aria-labelledby', 'aria-describedby'].includes(attribute.name)) {
                value = value.split(/\s+/).map(id => ids.get(id) || id).join(' ');
            }
            element.setAttribute(attribute.name, value);
        }
    }
    svg.id = rootId;
    for (const use of svg.querySelectorAll('use')) {
        const href = use.getAttribute('href') || use.getAttribute('xlink:href') || '';
        if (!href.startsWith('#')) use.remove();
    }
    for (const style of svg.querySelectorAll('style')) {
        // Seed diagram styles are simple selector/declaration rules. At-rules
        // are not needed and are dropped rather than leaking global styles.
        const rules = [];
        for (const match of style.textContent.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
            const urls = [...match[2].matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/gi)];
            if (match[1].includes('@') || urls.some(url => !url[2].trim().startsWith('#'))) continue;
            const selectors = match[1].trim().split(',').map(selector => {
                const local = selector.trim().replace(/#([a-zA-Z_][\w-]*)/g,
                    (original, id) => ids.has(id) ? `#${ids.get(id)}` : original);
                return `#${rootId} ${local}`;
            });
            const declarations = match[2].replace(/url\(\s*(['"]?)#([^)'"\s]+)\1\s*\)/g,
                (original, quote, id) => ids.has(id) ? `url(#${ids.get(id)})` : original);
            rules.push(`${selectors.join(', ')} {${declarations}}`);
        }
        style.textContent = rules.join('\n');
    }

    const viewBox = dimensions(svg);
    if (viewBox) {
        // Intrinsic or inline fixed dimensions must not override responsive CSS.
        // The viewBox keeps the original coordinate system and aspect ratio.
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        for (const property of ['width', 'height', 'min-width', 'max-width', 'min-height', 'max-height']) {
            svg.style.removeProperty(property);
        }
    }
    const fonts = [...svg.querySelectorAll('[font-size]'), svg]
        .map(element => Number.parseFloat(element.getAttribute('font-size')))
        .filter(size => Number.isFinite(size) && size > 0);
    for (const match of svg.outerHTML.matchAll(/font-size\s*:\s*([\d.]+)px/gi)) fonts.push(Number(match[1]));
    const hasLabels = Boolean(svg.querySelector('text'));
    const smallestFont = fonts.length ? Math.min(...fonts) : 16;
    // Scale the whole diagram, rather than enlarging text inside fixed boxes.
    const minWidth = hasLabels && viewBox ? Math.ceil(viewBox[2] * 12 / smallestFont) : 0;
    svg.classList.add('nb-inline-svg');
    svg.setAttribute('role', 'img');
    if (!svg.hasAttribute('aria-label') && !svg.hasAttribute('aria-labelledby')) svg.setAttribute('aria-label', label);
    svg.setAttribute('focusable', 'false');
    if (!svg.hasAttribute('preserveAspectRatio')) svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    if (!svg.querySelector('title')) {
        const title = svg.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = label;
        svg.prepend(title);
    }
    return { markup: new window.XMLSerializer().serializeToString(svg), minWidth };
}
