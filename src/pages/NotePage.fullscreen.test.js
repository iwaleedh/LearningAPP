import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('NotePage promotes mobile fullscreen reading to the page shell', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './NotePage.jsx'), 'utf8');
    const styles = fs.readFileSync(path.resolve(__dirname, './NotePage.css'), 'utf8');

    assert.match(source, /const PAGE_CONTENT_FULLSCREEN_CLASS = 'page-content--note-fullscreen';/);
    assert.match(source, /mainContent\.classList\.toggle\(PAGE_CONTENT_FULLSCREEN_CLASS, mobileFullscreenActive\);/);
    assert.match(styles, /\.page-content\.page-content--note-fullscreen \{/);
    assert.match(styles, /\.note-scroll-area--fullscreen \{/);
    assert.match(styles, /border:\s*none;/);
    assert.match(styles, /border-radius:\s*0;/);
});