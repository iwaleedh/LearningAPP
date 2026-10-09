import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { JSDOM } from 'jsdom';
import { getSyllabusBySubject, subjectNoteCounts } from './syllabusIndex.js';

// seedNotes/index.js relies on import.meta.glob (Vite only), so this test walks the folders directly
// using the same file-name convention: note_[subject_]<unit>_<topic>_<subtopicIndex>.js
const SEED_DIR = join(dirname(fileURLToPath(import.meta.url)), 'seedNotes');

function noteKeyFromFile(subject, fileName) {
    const remainder = fileName.startsWith(`note_${subject}_`)
        ? fileName.slice(`note_${subject}_`.length, -3)
        : fileName.slice('note_'.length, -3);
    const parts = remainder.split('_');
    return parts.length === 3 ? `${subject}:${parts.join(':')}` : null;
}

async function loadSeedNotes() {
    const notes = new Map();
    const subjects = readdirSync(SEED_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

    for (const subject of subjects) {
        for (const fileName of readdirSync(join(SEED_DIR, subject))) {
            if (!/^note.*\.js$/.test(fileName)) continue;
            const key = noteKeyFromFile(subject, fileName);
            if (!key) continue;
            const module = await import(pathToFileURL(join(SEED_DIR, subject, fileName)));
            const note = module.default && typeof module.default === 'object'
                ? module.default
                : Object.entries(module).find(([name, value]) => name.startsWith('note_') && value && typeof value === 'object')?.[1];
            notes.set(key, { note, file: `${subject}/${fileName}` });
        }
    }
    return notes;
}

const notesPromise = loadSeedNotes();

test('every seed diagram is valid SVG markup with a usable coordinate system', async () => {
    const window = new JSDOM('').window;
    const parser = new window.DOMParser();
    const problems = [];
    for (const [key, { note }] of await notesPromise) {
        for (const block of note?.blocks || []) {
            if (block.type !== 'svg') continue;
            const doc = parser.parseFromString(block.data?.svg || '', 'image/svg+xml');
            const error = doc.querySelector('parsererror');
            const svg = doc.documentElement;
            if (error || svg.localName !== 'svg') {
                problems.push(`${key}/${block.id}: ${error?.textContent || 'Missing SVG root'}`);
                continue;
            }
            const box = svg.getAttribute('viewBox')?.trim().split(/[\s,]+/).map(Number);
            const validBox = box?.length === 4 && box.every(Number.isFinite) && box[2] > 0 && box[3] > 0;
            const validDimensions = Number(svg.getAttribute('width')) > 0 && Number(svg.getAttribute('height')) > 0;
            if (!validBox && !validDimensions) problems.push(`${key}/${block.id}: Missing valid viewBox or intrinsic dimensions`);
        }
    }
    window.close();
    assert.deepEqual(problems, [], `Invalid diagrams:\n${problems.join('\n')}`);
});

test('every syllabus subtopic has a seed note and every seed note is reachable', async () => {
    const notes = await notesPromise;
    const syllabusKeys = new Set();
    const missing = [];

    for (const subject of Object.keys(subjectNoteCounts)) {
        const syllabus = await getSyllabusBySubject(subject);
        for (const unit of syllabus.units) {
            for (const topic of unit.topics) {
                topic.subtopics.forEach((title, index) => {
                    const key = `${subject}:${unit.id}:${topic.id}:${index}`;
                    syllabusKeys.add(key);
                    if (!notes.has(key)) missing.push(`${key} (${title})`);
                });
            }
        }
    }

    const orphans = [...notes.keys()].filter((key) => !syllabusKeys.has(key));
    assert.deepEqual(missing, [], `Syllabus subtopics without a note:\n${missing.join('\n')}`);
    assert.deepEqual(orphans, [], `Notes not linked from any syllabus subtopic:\n${orphans.join('\n')}`);
});

test('seed notes have unique block ids, valid recall cues and no placeholder content', async () => {
    const notes = await notesPromise;
    const problems = [];

    for (const [key, { note, file }] of notes) {
        if (!note || !Array.isArray(note.blocks)) {
            problems.push(`${file}: no blocks array`);
            continue;
        }
        const ids = new Set();
        for (const block of note.blocks) {
            if (!block.id) continue;
            // Duplicate ids collide as React keys and break table-of-contents scrolling.
            if (ids.has(block.id)) problems.push(`${key}: duplicate block id "${block.id}"`);
            ids.add(block.id);
        }
        for (const cue of note.recall?.cues || []) {
            if (cue.blockId && !ids.has(cue.blockId)) problems.push(`${key}: cue "${cue.id}" points to missing block "${cue.blockId}"`);
        }
        if (/placeholder seed note|placeholder maths tip/i.test(JSON.stringify(note.blocks))) {
            problems.push(`${key}: placeholder content`);
        }
    }

    assert.deepEqual(problems, [], problems.join('\n'));
});
