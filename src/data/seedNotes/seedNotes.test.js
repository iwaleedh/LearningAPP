import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';

test('all seed notes load and have unique block IDs for contents navigation', async () => {
    const root = new URL('./', import.meta.url);
    let notesChecked = 0;
    for (const directory of await readdir(root, { withFileTypes: true })) {
        if (!directory.isDirectory()) continue;
        const subjectUrl = new URL(`${directory.name}/`, root);
        for (const filename of await readdir(subjectUrl)) {
            if (!/^note.*\.js$/.test(filename)) continue;
            const module = await import(new URL(filename, subjectUrl));
            const note = module.default || Object.entries(module).find(([key]) => key.startsWith('note_'))?.[1];
            assert.ok(Array.isArray(note?.blocks), `${directory.name}/${filename}: missing blocks`);
            const ids = new Set();
            for (const block of note.blocks) {
                assert.ok(typeof block.id === 'string' && block.id.length > 0, `${directory.name}/${filename}: missing block ID`);
                assert.ok(!ids.has(block.id), `${directory.name}/${filename}: duplicate ${block.id}`);
                ids.add(block.id);
            }
            notesChecked++;
        }
    }
    assert.ok(notesChecked > 0);
});
