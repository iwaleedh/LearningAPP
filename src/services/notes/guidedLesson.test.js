import test from 'node:test';
import process from 'node:process';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildGuidedLesson, plainText, splitReadingHtml, readLessonProgress, writeLessonProgress } from './guidedLesson.js';
import { chemistryFoundations } from '../../data/guidedLessons/chemistryFoundations.js';
import { getLessonGlossary } from './lessonGlossary.js';

const window = new JSDOM('').window;
const text = html => { const el = window.document.createElement('div'); el.innerHTML = html; return el.textContent.replace(/\s+/g, ' ').trim(); };

test('reading chunks keep formatting, formula subscripts and all scientific text', () => {
    const source = '<strong>Water is H<sub>2</sub>O. Its molecules contain hydrogen and oxygen. </strong>Each molecule has three atoms. Never change a formula to balance an equation.';
    const chunks = splitReadingHtml(source, 5);
    assert.ok(chunks.length > 1);
    assert.equal(chunks.map(text).join(' '), text(source));
    assert.ok(chunks.some(chunk => chunk.includes('<sub>2</sub>')));
    for (const chunk of chunks) {
        const xml = new window.DOMParser().parseFromString(`<div>${chunk}</div>`, 'application/xml');
        assert.equal(xml.querySelector('parsererror'), null);
    }
});

test('fallback lessons keep equations and every table value without forcing a wide table', () => {
    const note = { blocks: [
        { id: 'h', type: 'heading', data: { text: 'Particles' } },
        { id: 'table', type: 'comparisonTable', data: { headers: ['Particle', 'Charge'], rows: [['Proton', '+1'], ['Neutron', '0'], ['Electron', '−1']] } },
        { id: 'eq', type: 'equation', data: { html: 'n = m ÷ M' } },
        { id: 'advanced', type: 'deeper', data: { understand: 'More detail.' } },
    ] };
    const lesson = buildGuidedLesson(note);
    assert.equal(lesson.steps.filter(step => step.blocks[0]?.type === 'list').length, 3);
    assert.deepEqual(lesson.steps.at(-1).blocks[0].data, note.blocks[2].data);
    assert.equal(lesson.details[0].id, 'advanced');
    const contents = JSON.stringify(lesson.steps);
    for (const value of ['Proton', '+1', 'Neutron', 'Electron', '−1']) assert.ok(contents.includes(value));
});

test('progress survives returning to a lesson and ignores removed steps and invalid storage', () => {
    const values = new Map();
    const storage = { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) };
    const steps = [{ id: 'first' }, { id: 'second' }];
    writeLessonProgress('note:a', 'second', new Set(['first', 'removed']), storage);
    assert.deepEqual(readLessonProgress('note:a', steps, storage), { index: 1, completed: ['first'] });
    assert.deepEqual(readLessonProgress('note:b', steps, storage), { index: 0, completed: [] });
    assert.deepEqual(readLessonProgress('note:a', steps, { getItem: () => '{' }), { index: 0, completed: [] });
    assert.doesNotThrow(() => writeLessonProgress('note:a', 'first', [], { setItem: () => { throw new Error('Full'); } }));
});

test('table steps retain unlabelled columns and contextual captions', () => {
    const lesson = buildGuidedLesson({ blocks: [{ id: 'table', type: 'comparisonTable', data: {
        headers: ['Particle'], rows: [['Proton', '+1'], ['Neutron', '0'], ['Electron', '−1']], caption: 'Relative charges.'
    } }] });
    assert.ok(lesson.steps[0].blocks[0].data.items.some(item => item.includes('+1')));
    assert.ok(lesson.steps[0].blocks[0].data.items.some(item => item.includes('Relative charges.')));
});

test('authored foundation lessons contain explainable checks with valid answers', () => {
    assert.equal(Object.keys(chemistryFoundations).length, 11);
    for (const lesson of Object.values(chemistryFoundations)) {
        assert.ok(lesson.goal && lesson.start);
        assert.ok(lesson.steps.length >= 4);
        assert.equal(new Set(lesson.steps.map(step => step.id)).size, lesson.steps.length);
        for (const step of lesson.steps) {
            assert.ok(step.check.options[step.check.correctIndex]);
            assert.ok(step.check.explanation);
            assert.equal(new Set(step.blocks.map(block => block.id)).size, step.blocks.length);
            assert.ok(plainText(step.blocks.map(block => block.data.text || block.data.html || '').join(' ')) || step.blocks.some(block => block.data.items));
        }
    }
});

test('subject-independent support uses the current source and preserves explicit recall answers', () => {
    const note = { blocks: [
        { id: 'p', type: 'paragraph', data: { text: 'Profit is revenue minus costs.' } },
        { id: 'formula', type: 'equation', data: { html: 'v = s ÷ t' } },
        { id: 'diagram', type: 'svg', data: { svg: '<svg />', caption: 'Water moves into the cell.' } },
    ], recall: { summaryText: 'An unrelated whole-note summary.', cues: [{ id: 'profit', blockId: 'p', prompt: 'How is profit calculated?', answer: 'Subtract costs from revenue.' }] } };
    const before = JSON.stringify(note);
    const lesson = buildGuidedLesson(note);
    assert.equal(lesson.steps[0].check.answer, 'Subtract costs from revenue.');
    assert.equal(lesson.steps[1].check.answer, 'v = s ÷ t');
    assert.equal(lesson.steps[2].check.answer, 'Water moves into the cell.');
    assert.ok(lesson.steps.slice(0, 3).every(step => step.instruction));
    assert.equal(JSON.stringify(note), before, 'the complete reference must remain unchanged');
});

test('English and IGCSE learners receive word help from visible lesson content', () => {
    for (const subject of ['cae', 'cpe']) {
        const words = getLessonGlossary(subject, { blocks: [{ type: 'paragraph', data: { text: 'Use a formal register. Check common collocations.' } }] });
        assert.ok(words.some(word => word.term === 'register' && word.definition.includes('formal')));
        assert.ok(words.some(word => word.term === 'collocation'));
    }
    const words = getLessonGlossary('olevel_chemistry', { blocks: [{ type: 'svg', data: { svg: '<svg id="electron"></svg>', caption: 'An atom.' } }] });
    assert.ok(words.some(word => word.term.toLowerCase() === 'atom'));
    assert.ok(!words.some(word => word.term.toLowerCase() === 'electron'), 'hidden SVG IDs are not vocabulary');
});

test('every subject note has a guided path and fallback paths retain all teaching blocks', async () => {
    const base = join(process.cwd(), 'src/data/seedNotes');
    let total = 0;
    for (const dir of readdirSync(base, { withFileTypes: true }).filter(item => item.isDirectory())) {
        for (const file of readdirSync(join(base, dir.name)).filter(name => /^note.*\.js$/.test(name))) {
            const module = await import(pathToFileURL(join(base, dir.name, file)));
            const note = module.default || Object.values(module).find(value => value?.blocks);
            const lesson = buildGuidedLesson(note);
            assert.ok(lesson.steps.length, `${dir.name}/${file}: no learning steps`);
            assert.equal(new Set(lesson.steps.map(step => step.id)).size, lesson.steps.length, `${file}: duplicate step IDs`);
            assert.ok(lesson.steps.some(step => step.check?.answer || step.check?.options), `${file}: no supported practice check`);
            if (!lesson.authored) {
                const covered = new Set(lesson.steps.flatMap(step => step.sourceBlockIds || []));
                for (const block of note.blocks) if (!['objective', 'heading', 'deeper'].includes(block.type)) assert.ok(covered.has(block.id), `${file}: lost ${block.id}`);
                for (const step of lesson.steps) if (step.id !== 'lesson-review') assert.ok(step.instruction, `${file}: missing reading support`);
            }
            total++;
        }
    }
    assert.ok(total > 1000);
});
