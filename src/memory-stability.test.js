import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcRoot = __dirname; // this file lives in src/

// ── M1: Timer leak prevention ─────────────────────────────────────────────────

test('M1a: ShareDialog.jsx tracks setTimeout via copyTimerRef', () => {
    const src = readFileSync(join(srcRoot, 'components', 'annotation', 'ShareDialog.jsx'), 'utf8');
    assert.ok(src.includes('copyTimerRef'), 'ShareDialog should have copyTimerRef');
    assert.ok(src.includes('clearTimeout(copyTimerRef.current)'), 'ShareDialog should clear timeout on unmount');
});

test('M1b: FlashcardExercise.jsx tracks setTimeout via nextTimerRef', () => {
    const src = readFileSync(join(srcRoot, 'components', 'exercises', 'FlashcardExercise.jsx'), 'utf8');
    assert.ok(src.includes('nextTimerRef'), 'FlashcardExercise should have nextTimerRef');
    assert.ok(src.includes('clearTimeout(nextTimerRef.current)'), 'FlashcardExercise should clear timeout on unmount');
});

// ── M3: BroadcastChannel cleanup ──────────────────────────────────────────────

test('M3a: LiveClassPage.jsx calls closeSyncChannel in both student and teacher cleanup paths', () => {
    const src = readFileSync(join(srcRoot, 'pages', 'LiveClassPage.jsx'), 'utf8');
    const count = (src.match(/closeSyncChannel\(\)/g) || []).length;
    assert.ok(count >= 2, `closeSyncChannel() should appear ≥ 2 times (found ${count})`);
});

test('M3b: LiveClassPage.jsx sets unmountedRef.current = true in cleanup', () => {
    const src = readFileSync(join(srcRoot, 'pages', 'LiveClassPage.jsx'), 'utf8');
    const count = (src.match(/unmountedRef\.current\s*=\s*true/g) || []).length;
    assert.ok(count >= 2, `unmountedRef.current = true should appear ≥ 2 times (found ${count})`);
});

test('M3c: localLiveClassStore.js exports closeSyncChannel function', () => {
    const src = readFileSync(join(srcRoot, 'services', 'liveclass', 'localLiveClassStore.js'), 'utf8');
    assert.ok(src.includes('export function closeSyncChannel'), 'localLiveClassStore should export closeSyncChannel');
});

test('M3d: localLiveClassStore.js registers beforeunload to close sync channel', () => {
    const src = readFileSync(join(srcRoot, 'services', 'liveclass', 'localLiveClassStore.js'), 'utf8');
    assert.ok(src.includes('beforeunload'), 'localLiveClassStore should register a beforeunload handler');
});

// ── M4: Callback arrays ──────────────────────────────────────────────────────

test('M4a: healthMonitor.js has MAX_LISTENERS constant', () => {
    const src = readFileSync(join(srcRoot, 'services', 'health', 'healthMonitor.js'), 'utf8');
    assert.ok(src.includes('MAX_LISTENERS'), 'healthMonitor should define MAX_LISTENERS');
});

test('M4b: healthMonitor.js exposes listenerCount method', () => {
    const src = readFileSync(join(srcRoot, 'services', 'health', 'healthMonitor.js'), 'utf8');
    assert.ok(src.includes('listenerCount'), 'healthMonitor should expose listenerCount()');
});

test('M4c: convex-client.js callback arrays have unsubscribe functions', () => {
    const src = readFileSync(join(srcRoot, 'convex-client.js'), 'utf8');
    // Each onConvex* function should return a cleanup function
    const patterns = ['connectionCallbacks.indexOf', 'errorCallbacks.indexOf', 'disconnectCallbacks.indexOf'];
    for (const pattern of patterns) {
        assert.ok(src.includes(pattern), `convex-client.js should have cleanup for ${pattern}`);
    }
});

// ── M5: Log buffer max size ───────────────────────────────────────────────────

test('M5a: logBuffer.js has MAX_BUFFER_SIZE constant', () => {
    const src = readFileSync(join(srcRoot, 'services', 'logger', 'logBuffer.js'), 'utf8');
    assert.ok(src.includes('MAX_BUFFER_SIZE'), 'logBuffer should define MAX_BUFFER_SIZE');
});

test('M5b: logBuffer.js tracks and exposes droppedCount', () => {
    const src = readFileSync(join(srcRoot, 'services', 'logger', 'logBuffer.js'), 'utf8');
    assert.ok(src.includes('droppedCount'), 'logBuffer should track droppedCount');
    assert.ok(src.includes('getDroppedCount'), 'logBuffer should export getDroppedCount');
});

test('M5c: logBuffer.js stores visibilityHandler ref for cleanup', () => {
    const src = readFileSync(join(srcRoot, 'services', 'logger', 'logBuffer.js'), 'utf8');
    assert.ok(src.includes('visibilityHandler'), 'logBuffer should store visibilityHandler reference');
    assert.ok(src.includes('removeEventListener'), 'logBuffer should remove visibility listener in stop');
});

// ── R1: useSyllabus dependencies ──────────────────────────────────────────────

test('R1a: useSyllabus.js has no eslint-disable', () => {
    const src = readFileSync(join(srcRoot, 'hooks', 'useSyllabus.js'), 'utf8');
    // Match actual directives, not natural-language mentions in comments
    const hasDirective = /\/[/*]\s*eslint-disable(?:-next-line)?(?:\s|$|\*)/m.test(src);
    assert.ok(!hasDirective, 'useSyllabus should not have eslint-disable directives');
});

test('R1b: useSyllabus.js uses useRef for dedup guard', () => {
    const src = readFileSync(join(srcRoot, 'hooks', 'useSyllabus.js'), 'utf8');
    assert.ok(src.includes('fetchedKeysRef'), 'useSyllabus should use fetchedKeysRef');
});

// ── R4: Granular error boundaries ─────────────────────────────────────────────

test('R4a: ErrorBoundary.jsx supports name, fallback, resetKeys, inline, onError props', () => {
    const src = readFileSync(join(srcRoot, 'components', 'ErrorBoundary.jsx'), 'utf8');
    for (const prop of ['name', 'fallback', 'resetKeys', 'inline', 'onError']) {
        assert.ok(src.includes(prop), `ErrorBoundary should reference prop "${prop}"`);
    }
});

test('R4b: ErrorBoundary.jsx has inline fallback with retry button', () => {
    const src = readFileSync(join(srcRoot, 'components', 'ErrorBoundary.jsx'), 'utf8');
    assert.ok(src.includes('eb-inline'), 'ErrorBoundary should have .eb-inline className');
    assert.ok(src.includes('Retry'), 'ErrorBoundary inline fallback should have Retry button');
});

test('R4c: ErrorBoundary.jsx logs to logger in componentDidCatch', () => {
    const src = readFileSync(join(srcRoot, 'components', 'ErrorBoundary.jsx'), 'utf8');
    assert.ok(src.includes('logger.error'), 'ErrorBoundary should log errors to logger');
    assert.ok(src.includes('componentStack'), 'ErrorBoundary should capture componentStack');
});

test('R4d: FlashcardsPage.jsx uses ErrorBoundary', () => {
    const src = readFileSync(join(srcRoot, 'pages', 'FlashcardsPage.jsx'), 'utf8');
    assert.ok(src.includes('ErrorBoundary'), 'FlashcardsPage should import/use ErrorBoundary');
    assert.ok(src.includes('FlashcardDisplay'), 'FlashcardsPage should have named boundary for display');
});

test('R4e: PastPapersPage.jsx uses ErrorBoundary for PerformanceChart', () => {
    const src = readFileSync(join(srcRoot, 'pages', 'PastPapersPage.jsx'), 'utf8');
    assert.ok(src.includes('ErrorBoundary'), 'PastPapersPage should import/use ErrorBoundary');
    assert.ok(src.includes('PerformanceChart'), 'PastPapersPage boundary should wrap PerformanceChart');
});

test('R4f: ChapterPage.jsx uses ErrorBoundary for unit sections', () => {
    const src = readFileSync(join(srcRoot, 'pages', 'ChapterPage.jsx'), 'utf8');
    assert.ok(src.includes('ErrorBoundary'), 'ChapterPage should import/use ErrorBoundary');
    assert.ok(src.includes('ChapterUnit'), 'ChapterPage should have named boundary for units');
});

test('R4g: ProgressPage.jsx uses ErrorBoundary for ring chart and chapter progress', () => {
    const src = readFileSync(join(srcRoot, 'pages', 'ProgressPage.jsx'), 'utf8');
    assert.ok(src.includes('ProgressRing'), 'ProgressPage should have boundary for ring chart');
    assert.ok(src.includes('ChapterProgress'), 'ProgressPage should have boundary for chapter progress');
});

test('R4h: ExercisePage.jsx uses ErrorBoundary for controls and types grid', () => {
    const src = readFileSync(join(srcRoot, 'pages', 'ExercisePage.jsx'), 'utf8');
    assert.ok(src.includes('ExerciseControls'), 'ExercisePage should have boundary for controls');
    assert.ok(src.includes('ExerciseTypesGrid'), 'ExercisePage should have boundary for types grid');
});

test('R4i: NotePage.jsx wraps NoteBlockRenderer in ErrorBoundary', () => {
    const src = readFileSync(join(srcRoot, 'pages', 'NotePage.jsx'), 'utf8');
    assert.ok(src.includes('NoteContent'), 'NotePage should have boundary for NoteContent');
    assert.ok(src.includes('StudyTools'), 'NotePage should have boundary for StudyTools');
});

test('R4j: NoteBlockRenderer.jsx wraps each block in ErrorBoundary', () => {
    const src = readFileSync(join(srcRoot, 'components', 'notes', 'NoteBlockRenderer.jsx'), 'utf8');
    assert.ok(src.includes('ErrorBoundary'), 'NoteBlockRenderer should use ErrorBoundary');
    assert.ok(
        src.includes('block:${block.type}') || src.includes('`block:'),
        'NoteBlockRenderer should name each boundary with block type',
    );
});
