#!/usr/bin/env node
/**
 * validate-memory-stability.mjs
 *
 * Stand-alone validation script for the M1/M3–M5/R1/R4 memory-stability items.
 * Runs static analysis checks on source files to confirm every fix is in place.
 *
 * Usage:   node scripts/validate-memory-stability.mjs
 * Exit:    0 = all checks pass, 1 = one or more checks failed
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcRoot = join(__dirname, '..', 'src');

let passed = 0;
let failed = 0;

function check(label, condition, detail = '') {
    if (condition) {
        console.log(`  ✅ ${label}`);
        passed++;
    } else {
        console.log(`  ❌ ${label}${detail ? ` — ${detail}` : ''}`);
        failed++;
    }
}

function read(relPath) {
    const abs = join(srcRoot, relPath);
    if (!existsSync(abs)) {
        console.log(`  ❌ File not found: ${relPath}`);
        failed++;
        return null;
    }
    return readFileSync(abs, 'utf8');
}

function countMatches(src, pattern) {
    return (src.match(pattern) || []).length;
}

// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n🔍 M1 — Timer Leak Prevention\n');

const shareDialog = read('components/annotation/ShareDialog.jsx');
if (shareDialog) {
    check('ShareDialog has copyTimerRef',                shareDialog.includes('copyTimerRef'));
    check('ShareDialog clearTimeout in cleanup',         shareDialog.includes('clearTimeout(copyTimerRef.current)'));
}

const flashcardEx = read('components/exercises/FlashcardExercise.jsx');
if (flashcardEx) {
    check('FlashcardExercise has nextTimerRef',          flashcardEx.includes('nextTimerRef'));
    check('FlashcardExercise clearTimeout in cleanup',   flashcardEx.includes('clearTimeout(nextTimerRef.current)'));
}

// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n🔍 M3 — BroadcastChannel Cleanup\n');

const liveClass = read('pages/LiveClassPage.jsx');
if (liveClass) {
    check('closeSyncChannel() in ≥2 cleanup paths',     countMatches(liveClass, /closeSyncChannel\(\)/g) >= 2,
          `found ${countMatches(liveClass, /closeSyncChannel\(\)/g)}`);
    check('unmountedRef.current = true in ≥2 paths',    countMatches(liveClass, /unmountedRef\.current\s*=\s*true/g) >= 2);
    check('bc.close() in ≥2 cleanup paths',             countMatches(liveClass, /bc\.close\(\)/g) >= 2);
}

const localStore = read('services/liveclass/localLiveClassStore.js');
if (localStore) {
    check('closeSyncChannel export exists',              localStore.includes('export function closeSyncChannel'));
    check('beforeunload handler registered',             localStore.includes('beforeunload'));
}

// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n🔍 M4 — Callback Array Bounds\n');

const healthMon = read('services/health/healthMonitor.js');
if (healthMon) {
    check('MAX_LISTENERS constant defined',              healthMon.includes('MAX_LISTENERS'));
    check('warn log on cap reached',                     healthMon.includes('listener cap reached'));
    check('listenerCount() method exposed',              healthMon.includes('listenerCount'));
    check('subscribe returns unsubscribe function',      healthMon.includes('listeners.filter'));
}

const convexClient = read('convex-client.js');
if (convexClient) {
    check('onConvexReady has cleanup (indexOf + splice)',   convexClient.includes('connectionCallbacks.indexOf'));
    check('onConvexError has cleanup',                      convexClient.includes('errorCallbacks.indexOf'));
    check('onConvexDisconnect has cleanup',                 convexClient.includes('disconnectCallbacks.indexOf'));
}

// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n🔍 M5 — Log Buffer Max Size\n');

const logBuffer = read('services/logger/logBuffer.js');
if (logBuffer) {
    check('MAX_BUFFER_SIZE defined',                     logBuffer.includes('MAX_BUFFER_SIZE'));
    check('droppedCount tracking',                       logBuffer.includes('droppedCount'));
    check('getDroppedCount exported',                    logBuffer.includes('getDroppedCount'));
    check('console.warn on overflow',                    logBuffer.includes('Buffer overflow'));
    check('visibilityHandler stored for cleanup',        logBuffer.includes('visibilityHandler'));
    check('removeEventListener in stopBufferFlush',      logBuffer.includes('removeEventListener'));
}

// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n🔍 R1 — useSyllabus Dependencies\n');

const useSyllabus = read('hooks/useSyllabus.js');
if (useSyllabus) {
    // Match actual eslint directives (/* eslint-disable or // eslint-disable-next-line),
    // but ignore natural-language comments that merely mention the phrase.
    const hasDirective = /\/[/*]\s*eslint-disable(?:-next-line)?(?:\s|$|\*)/m.test(useSyllabus);
    check('No eslint-disable directive in file',         !hasDirective);
    check('Uses useRef for dedup (fetchedKeysRef)',      useSyllabus.includes('fetchedKeysRef'));
    check('Has cancellation flag (let cancelled)',       useSyllabus.includes('cancelled'));
    check('Deletes from fetchedKeysRef on error',        useSyllabus.includes('.delete(subjectKey)'));
    check('Depends on [subjectKey] only',                useSyllabus.includes('}, [subjectKey])'));
}

// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n🔍 R4 — Granular Error Boundaries\n');

const errorBoundary = read('components/ErrorBoundary.jsx');
if (errorBoundary) {
    check('ErrorBoundary supports name prop',            errorBoundary.includes("name"));
    check('ErrorBoundary supports inline prop',          errorBoundary.includes('inline'));
    check('ErrorBoundary supports resetKeys prop',       errorBoundary.includes('resetKeys'));
    check('ErrorBoundary supports onError prop',         errorBoundary.includes('onError'));
    check('ErrorBoundary has .eb-inline fallback',       errorBoundary.includes('eb-inline'));
    check('ErrorBoundary logs to logger',                errorBoundary.includes('logger.error'));
}

const pages = {
    'FlashcardsPage':   { path: 'pages/FlashcardsPage.jsx',   names: ['ErrorBoundary', 'FlashcardDisplay'] },
    'PastPapersPage':   { path: 'pages/PastPapersPage.jsx',   names: ['ErrorBoundary', 'PerformanceChart'] },
    'ChapterPage':      { path: 'pages/ChapterPage.jsx',      names: ['ErrorBoundary', 'ChapterUnit'] },
    'ProgressPage':     { path: 'pages/ProgressPage.jsx',     names: ['ProgressRing', 'ChapterProgress'] },
    'ExercisePage':     { path: 'pages/ExercisePage.jsx',      names: ['ExerciseControls', 'ExerciseTypesGrid'] },
    'NotePage':         { path: 'pages/NotePage.jsx',          names: ['NoteContent', 'StudyTools'] },
};

for (const [page, { path, names }] of Object.entries(pages)) {
    const src = read(path);
    if (src) {
        for (const name of names) {
            check(`${page} has "${name}" boundary`,      src.includes(name));
        }
    }
}

const blockRenderer = read('components/notes/NoteBlockRenderer.jsx');
if (blockRenderer) {
    check('NoteBlockRenderer uses ErrorBoundary',        blockRenderer.includes('ErrorBoundary'));
}

// ═══════════════════════════════════════════════════════════════════════════════
console.log(`\n${'═'.repeat(60)}`);
console.log(`\n  Results: ${passed} passed, ${failed} failed, ${passed + failed} total\n`);

if (failed > 0) {
    console.log('  ⚠️  Some checks failed. Review the output above.\n');
    process.exit(1);
} else {
    console.log('  🎉 All memory-stability checks passed!\n');
    process.exit(0);
}
