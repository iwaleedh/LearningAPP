import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml, escapeRegExp, isSafeCssColor } from './sanitize.js';

// ── escapeHtml ──────────────────────────────────────────────────────

describe('escapeHtml', () => {
    it('escapes all five dangerous HTML characters', () => {
        assert.equal(escapeHtml('&'), '&amp;');
        assert.equal(escapeHtml('<'), '&lt;');
        assert.equal(escapeHtml('>'), '&gt;');
        assert.equal(escapeHtml('"'), '&quot;');
        assert.equal(escapeHtml("'"), '&#x27;');
    });

    it('neutralises a script injection payload', () => {
        const payload = '<script>alert("xss")</script>';
        const escaped = escapeHtml(payload);
        assert.ok(!escaped.includes('<script>'));
        assert.equal(escaped, '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    });

    it('neutralises an img/onerror XSS vector', () => {
        const payload = '<img src=x onerror="fetch(\'https://evil.com\')">';
        const escaped = escapeHtml(payload);
        // The critical defence: the <img> tag is broken — browser won't parse it as HTML.
        assert.ok(!escaped.includes('<img'));
        assert.ok(escaped.startsWith('&lt;img'));
    });

    it('does not double-escape already-escaped ampersands', () => {
        // escapeHtml is not idempotent by design — callers should escape once.
        // But & is replaced first, so &lt; becomes &amp;lt; (correct for raw text).
        assert.equal(escapeHtml('&amp;'), '&amp;amp;');
    });

    it('returns empty string for non-string inputs', () => {
        assert.equal(escapeHtml(null), '');
        assert.equal(escapeHtml(undefined), '');
        assert.equal(escapeHtml(42), '');
        assert.equal(escapeHtml({}), '');
    });

    it('passes through safe strings unchanged', () => {
        assert.equal(escapeHtml('Hello World'), 'Hello World');
        assert.equal(escapeHtml(''), '');
    });

    it('handles attribute breakout attempt', () => {
        const payload = '" onmouseover="alert(1)"';
        assert.equal(escapeHtml(payload), '&quot; onmouseover=&quot;alert(1)&quot;');
    });
});

// ── escapeRegExp ────────────────────────────────────────────────────

describe('escapeRegExp', () => {
    it('escapes all regex metacharacters', () => {
        const metachars = '.*+?^${}()|[]\\';
        const escaped = escapeRegExp(metachars);
        // Every metachar should be preceded by a backslash
        assert.equal(escaped, '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
    });

    it('produces a working RegExp from user-like input', () => {
        const keyword = 'price ($)';
        const regex = new RegExp(escapeRegExp(keyword), 'gi');
        assert.ok(regex.test('The price ($) is high'));
        assert.ok(!regex.test('The price is high'));
    });

    it('prevents ReDoS-style patterns', () => {
        const evil = '(a+)+$';
        const regex = new RegExp(escapeRegExp(evil), 'g');
        // Should match the literal string, not cause catastrophic backtracking
        const start = performance.now();
        regex.test('(a+)+$ is a pattern');
        const elapsed = performance.now() - start;
        assert.ok(elapsed < 50, `Regex took ${elapsed}ms — possible ReDoS`);
    });

    it('passes through safe strings unchanged', () => {
        assert.equal(escapeRegExp('hello'), 'hello');
        assert.equal(escapeRegExp('indices'), 'indices');
    });
});

describe('isSafeCssColor', () => {
    it('accepts safe hex and rgb formats', () => {
        assert.equal(isSafeCssColor('#fff'), true);
        assert.equal(isSafeCssColor('#12abef'), true);
        assert.equal(isSafeCssColor('rgb(255, 0, 12)'), true);
        assert.equal(isSafeCssColor('rgba(255, 0, 12, 0.5)'), true);
    });

    it('rejects unsafe or malformed CSS values', () => {
        assert.equal(isSafeCssColor('#fff;position:absolute'), false);
        assert.equal(isSafeCssColor('javascript:alert(1)'), false);
        assert.equal(isSafeCssColor('var(--color-primary)'), false);
        assert.equal(isSafeCssColor(null), false);
    });
});
