import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
globalThis.window = window;
globalThis.document = window.document;
const { prepareSvgMarkup } = await import('./svgMarkup.js');
const parse = markup => new window.DOMParser().parseFromString(markup, 'image/svg+xml');

test('diagrams with the same marker names keep independent references and styles', () => {
    const raw = '<svg viewBox="0 0 600 200"><defs><marker id="arrow"><path d="M0 0 L5 5"/></marker></defs><style>.label, text {fill:blue}</style><path marker-end="url(#arrow)"/><text class="label" x="10" y="20">Example</text></svg>';
    const first = parse(prepareSvgMarkup(raw, 'One', 'first').markup);
    const second = parse(prepareSvgMarkup(raw, 'Two', 'second').markup);
    assert.notEqual(first.querySelector('marker').id, second.querySelector('marker').id);
    for (const doc of [first, second]) {
        assert.equal(doc.querySelector('path[marker-end]').getAttribute('marker-end'), `url(#${doc.querySelector('marker').id})`);
        const rootId = doc.documentElement.id;
        assert.match(doc.querySelector('style').textContent, new RegExp(`#${rootId} \\.label, #${rootId} text`));
    }
});

test('small lettering scales with the diagram instead of changing its geometry', () => {
    const result = prepareSvgMarkup('<svg viewBox="0,0,600,200"><text x="12" y="20" font-size="8">Label</text></svg>', 'Diagram', 'small');
    const doc = parse(result.markup);
    assert.equal(doc.documentElement.getAttribute('viewBox'), '0,0,600,200');
    assert.equal(doc.querySelector('text').getAttribute('font-size'), '8');
    assert.equal(doc.querySelector('text').getAttribute('x'), '12');
    assert.equal(result.minWidth, 900);
});

test('authored fills and inherited label colours are preserved', () => {
    const result = prepareSvgMarkup('<svg width="300" height="100"><g fill="white"><rect fill="#172554" width="300" height="100"/><text x="20" y="50">White label</text></g></svg>', 'Colours', 'paint');
    const doc = parse(result.markup);
    assert.equal(doc.querySelector('g').getAttribute('fill'), 'white');
    assert.equal(doc.querySelector('text').getAttribute('fill'), null);
    assert.equal(doc.querySelector('rect').getAttribute('fill'), '#172554');
    assert.equal(doc.documentElement.getAttribute('viewBox'), '0 0 300 100');
});

test('local gradient, use and accessible-title references follow renamed IDs', () => {
    const raw = '<svg viewBox="0 0 300 100" aria-labelledby="title"><title id="title">Original</title><defs><linearGradient id="paint"/><g id="symbol"><circle r="3"/></g></defs><rect fill="url(\'#paint\')"/><use href="#symbol"/></svg>';
    const doc = parse(prepareSvgMarkup(raw, 'Fallback', 'links').markup);
    assert.equal(doc.documentElement.getAttribute('aria-labelledby'), doc.querySelector('title').id);
    assert.equal(doc.querySelector('rect').getAttribute('fill'), `url(#${doc.querySelector('linearGradient').id})`);
    assert.equal(doc.querySelector('use').getAttribute('href'), `#${doc.querySelector('g').id}`);
});

test('sanitisation removes executable SVG and uses labels as text', () => {
    const doc = parse(prepareSvgMarkup('<svg viewBox="0 0 100 100" onload="alert(1)"><script>alert(2)</script><foreignObject><div>HTML</div></foreignObject><style>@import url(https://example.com/leak); text {fill:red}</style><text onclick="alert(3)">Safe</text></svg>', '<script>label</script>', 'safe').markup);
    assert.equal(doc.querySelector('script, foreignObject, [onclick], [onload]'), null);
    assert.equal(doc.querySelector('title').textContent, '<script>label</script>');
    assert.equal(doc.documentElement.getAttribute('aria-label'), '<script>label</script>');
    assert.ok(!doc.querySelector('style').textContent.includes('@import'));
});

test('non-SVG input does not render an HTML fragment as a diagram', () => {
    assert.deepEqual(prepareSvgMarkup('<img src=x onerror="alert(1)">', 'Missing', 'none'), { markup: '', minWidth: 0 });
});

test('fixed SVG dimensions cannot override fitting to a phone screen', () => {
    const doc = parse(prepareSvgMarkup('<svg width="900" height="300" style="width:900px!important;height:300px;min-width:900px;max-width:none;background:white"><text font-size="12">Label</text></svg>', 'Fixed diagram', 'responsive').markup);
    const svg = doc.documentElement;
    assert.equal(svg.getAttribute('viewBox'), '0 0 900 300');
    assert.equal(svg.hasAttribute('width'), false);
    assert.equal(svg.hasAttribute('height'), false);
    assert.ok(!/\b(?:width|height)\s*:/.test(svg.getAttribute('style')));
    assert.match(svg.getAttribute('style'), /background:\s*white/);
});
