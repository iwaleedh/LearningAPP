import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

test('R1a: useSyllabus.js contains no eslint-disable directives', () => {
    const src = readFileSync(join(__dirname, 'useSyllabus.js'), 'utf8');
    const hasDirective = /\/[/*]\s*eslint-disable(?:-next-line)?(?:\s|$|\*)/m.test(src);
    assert.ok(
        !hasDirective,
        'useSyllabus.js should not contain eslint-disable directives',
    );
});

test('R1b: useSyllabus.js uses useRef for fetch guard (not useState)', () => {
    const src = readFileSync(join(__dirname, 'useSyllabus.js'), 'utf8');
    assert.ok(
        src.includes('useRef'),
        'useSyllabus.js should use useRef for fetch guard',
    );
    assert.ok(
        src.includes('fetchedKeysRef'),
        'useSyllabus.js should have fetchedKeysRef',
    );
});

test('R1c: useSyllabus.js has cancellation guard in cleanup', () => {
    const src = readFileSync(join(__dirname, 'useSyllabus.js'), 'utf8');
    assert.ok(
        src.includes('cancelled'),
        'useSyllabus.js should have a cancellation guard',
    );
});

test('R1d: useSyllabus.js deletes key from fetchedKeysRef on error (retry support)', () => {
    const src = readFileSync(join(__dirname, 'useSyllabus.js'), 'utf8');
    assert.ok(
        src.includes('.delete(subjectKey)'),
        'useSyllabus.js should delete from fetchedKeysRef on error for retry support',
    );
});
