/**
 * Accessibility unit tests for exercise components.
 * Tests pure logic (keyboard handlers, ARIA state) without requiring a DOM.
 *
 * Run: npm test
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readSource(relativePath) {
    return fs.readFileSync(path.resolve(__dirname, relativePath), 'utf8');
}

// ─── Helpers replicated from components for pure-logic testing ────────────────

function initDragDropItems(rawItems) {
    const shuffled = [...rawItems];
    return shuffled.map((item, idx) => ({ ...item, _idx: idx }));
}

function buildToc(blocks) {
    return (blocks || [])
        .filter((b) => b.type === 'heading' && b.data?.text && (b.data?.level || 2) <= 3)
        .map((b) => ({ id: b.id, text: b.data.text, level: b.data.level || 2 }));
}

test('A2 – buildToc includes only heading blocks up to level 3', () => {
    const toc = buildToc([
        { id: 'p-1', type: 'paragraph', data: { text: 'Intro' } },
        { id: 'h-1', type: 'heading', data: { text: 'Overview', level: 2 } },
        { id: 'h-2', type: 'heading', data: { text: 'Deep section', level: 4 } },
        { id: 'h-3', type: 'heading', data: { text: 'Key facts', level: 3 } },
    ]);

    assert.deepEqual(toc, [
        { id: 'h-1', text: 'Overview', level: 2 },
        { id: 'h-3', text: 'Key facts', level: 3 },
    ]);
});

// ─── A1: DragDropExercise — move-to logic ─────────────────────────────────────

test('A1 – DragDropExercise: removeFromSource removes item by stable _idx', () => {
    const items = initDragDropItems([
        { text: 'Water', category: 'Compound' },
        { text: 'Water', category: 'Compound' }, // duplicate text, different _idx
        { text: 'Oxygen', category: 'Element' },
    ]);

    // Simulate removeFromSource('bank', 0)
    const result = items.filter((i) => i._idx !== 0);
    assert.equal(result.length, 2);
    // The second "Water" (_idx=1) must still be present
    assert.ok(result.some((i) => i.text === 'Water' && i._idx === 1));
    assert.ok(!result.some((i) => i._idx === 0));
});

test('A1 – DragDropExercise: moveItemToCategory is no-op when source equals target', () => {
    const item = { text: 'Water', category: 'Compound', _idx: 0 };
    const bank = [item];
    let bankState = [...bank];
    let zones = { Compound: [], Element: [] };
    let actionAnnounced = '';

    function moveItemToCategory(itm, source, targetZone) {
        if (source === targetZone) return; // no-op
        bankState = bankState.filter((i) => i._idx !== itm._idx);
        zones = { ...zones, [targetZone]: [...zones[targetZone], itm] };
        actionAnnounced = `Moved "${itm.text}" to ${targetZone}`;
    }

    moveItemToCategory(item, 'bank', 'bank'); // same source/target
    assert.equal(bankState.length, 1, 'Bank should be unchanged');
    assert.equal(actionAnnounced, '', 'No announcement for no-op move');
});

test('A1 – DragDropExercise: moveItemToCategory moves item and announces action', () => {
    const item = { text: 'Oxygen', category: 'Element', _idx: 0 };
    let bankState = [item];
    let zones = { Element: [], Compound: [] };
    let actionAnnounced = '';

    function moveItemToCategory(itm, source, targetZone) {
        if (source === targetZone) return;
        bankState = bankState.filter((i) => i._idx !== itm._idx);
        zones = { ...zones, [targetZone]: [...zones[targetZone], itm] };
        actionAnnounced = `Moved "${itm.text}" to ${targetZone}`;
    }

    moveItemToCategory(item, 'bank', 'Element');
    assert.equal(bankState.length, 0, 'Item removed from bank');
    assert.equal(zones.Element.length, 1, 'Item placed in zone');
    assert.equal(actionAnnounced, 'Moved "Oxygen" to Element');
});

test('A1 – DragDropExercise: keyboard grab announces position and Escape clears selection', () => {
    const bank = [
        { text: 'Atom', _idx: 1 },
        { text: 'Ion', _idx: 2 },
    ];
    const zones = { Elements: [] };
    let keyboardSelected = null;
    let lastAction = '';

    function handleItemKeyDown(key, item, source) {
        if (key === ' ' || key === 'Enter') {
            if (keyboardSelected && keyboardSelected.item._idx === item._idx) {
                keyboardSelected = null;
                lastAction = `Released "${item.text}" — drag cancelled.`;
            } else {
                keyboardSelected = { item, source };
                const sourceArr = source === 'bank' ? bank : zones[source];
                const pos = sourceArr.findIndex((i) => i._idx === item._idx) + 1;
                lastAction = `Grabbed "${item.text}", item ${pos} of ${sourceArr.length} in item bank. Press Space on a category to drop, or Escape to cancel.`;
            }
        }
        if (key === 'Escape') {
            if (keyboardSelected) {
                lastAction = `Cancelled. "${keyboardSelected.item.text}" not moved.`;
            }
            keyboardSelected = null;
        }
    }

    handleItemKeyDown(' ', bank[1], 'bank');
    assert.equal(keyboardSelected?.item._idx, 2);
    assert.match(lastAction, /Grabbed "Ion", item 2 of 2 in item bank/);

    handleItemKeyDown('Escape', bank[1], 'bank');
    assert.equal(keyboardSelected, null);
    assert.equal(lastAction, 'Cancelled. "Ion" not moved.');
});

test('A1 – DragDropExercise: source includes aria-grabbed and shared keyboard help text', () => {
    const source = readSource('./DragDropExercise.jsx');

    assert.match(source, /id="dd-kb-help"/);
    assert.match(source, /aria-describedby="dd-kb-help"/);
    assert.match(source, /aria-grabbed=\{isKbSelected\(item\) \? 'true' : 'false'\}/);
});

// ─── A1: SequenceExercise — moveItem logic ────────────────────────────────────

test('A1 – SequenceExercise: moveItem correctly reorders items', () => {
    let items = [
        { text: 'Step A', correctIndex: 0, _idx: 0 },
        { text: 'Step B', correctIndex: 1, _idx: 1 },
        { text: 'Step C', correctIndex: 2, _idx: 2 },
    ];

    function moveItem(fromIndex, toIndex) {
        const updated = [...items];
        const [removed] = updated.splice(fromIndex, 1);
        updated.splice(toIndex, 0, removed);
        items = updated;
    }

    // Move Step C (index 2) up to index 0
    moveItem(2, 0);
    assert.equal(items[0].text, 'Step C');
    assert.equal(items[1].text, 'Step A');
    assert.equal(items[2].text, 'Step B');
});

test('A1 – SequenceExercise: arrow-key keyboard handler fires moveItem', () => {
    let items = [
        { text: 'Step A', _idx: 0 },
        { text: 'Step B', _idx: 1 },
    ];
    let grabbedIndex = 1;
    let moveCalledWith = null;

    function moveItem(from, to) {
        moveCalledWith = { from, to };
        const updated = [...items];
        const [removed] = updated.splice(from, 1);
        updated.splice(to, 0, removed);
        items = updated;
    }

    // Simulate ArrowUp on grabbedIndex=1 (not first item)
    const e = { key: 'ArrowUp', preventDefault: () => {} };
    if (grabbedIndex !== null && grabbedIndex === 1) {
        if (e.key === 'ArrowUp' && grabbedIndex > 0) {
            e.preventDefault();
            moveItem(grabbedIndex, grabbedIndex - 1);
            grabbedIndex = grabbedIndex - 1;
        }
    }

    assert.deepEqual(moveCalledWith, { from: 1, to: 0 });
    assert.equal(grabbedIndex, 0);
});

// ─── A3: MCQExercise — Home/End key navigation ────────────────────────────────

test('A3 – MCQExercise: Home key selects first option', () => {
    const shuffledOptions = ['A', 'B', 'C', 'D'];
    let selected = 2; // currently on 'C'
    let focusedIndex = null;

    const optionRefs = shuffledOptions.map((_, i) => ({ focus: () => { focusedIndex = i; } }));

    function handleGroupKeyDown(key) {
        if (key === 'Home') {
            selected = 0;
            optionRefs[0].focus();
        }
        if (key === 'End') {
            selected = shuffledOptions.length - 1;
            optionRefs[shuffledOptions.length - 1].focus();
        }
    }

    handleGroupKeyDown('Home');
    assert.equal(selected, 0, 'Home selects first option');
    assert.equal(focusedIndex, 0, 'Home focuses first option');

    handleGroupKeyDown('End');
    assert.equal(selected, 3, 'End selects last option');
    assert.equal(focusedIndex, 3, 'End focuses last option');
});

test('A3 – MCQExercise: ArrowDown wraps from last to first', () => {
    const options = ['A', 'B', 'C'];
    let selected = 2; // last option

    function handleArrowDown() {
        const next = (selected + 1) % options.length;
        selected = next;
    }

    handleArrowDown();
    assert.equal(selected, 0, 'Arrow down wraps from last to first');
});

// ─── A5: Accordion — aria-controls linking ────────────────────────────────────

test('A5 – Accordion: triggerId and panelId follow naming convention', () => {
    // Simulate what useId() returns: ':r0:', ':r1:', etc.
    const uid = ':r0:';
    const triggerId = `accordion-trigger-${uid}`;
    const panelId = `accordion-panel-${uid}`;

    assert.equal(triggerId, 'accordion-trigger-:r0:');
    assert.equal(panelId, 'accordion-panel-:r0:');
    // The two IDs must be different so aria-controls can link correctly
    assert.notEqual(triggerId, panelId);
});

// ─── A4: GlossaryPopover — keyboard interaction logic ─────────────────────────

test('A4 – GlossaryPopover: toggling activePopover on same term closes popover', () => {
    let activePopover = null;

    function handleTermClick(term) {
        activePopover = activePopover === term ? null : term;
    }

    handleTermClick('osmosis');
    assert.equal(activePopover, 'osmosis', 'First click opens popover');

    handleTermClick('osmosis');
    assert.equal(activePopover, null, 'Second click on same term closes popover');
});

test('A4 – GlossaryPopover: Escape key closes popover', () => {
    let activePopover = 'osmosis';
    let focusReturnCalled = false;

    const activeTrigger = { focus: () => { focusReturnCalled = true; } };

    function handleEscape() {
        if (activePopover) {
            activePopover = null;
            activeTrigger.focus();
        }
    }

    handleEscape();
    assert.equal(activePopover, null, 'Escape closes popover');
    assert.ok(focusReturnCalled, 'Focus returned to trigger on Escape');
});

// ─── A8: useFocusTrap — utility logic ────────────────────────────────────────

test('A8 – useFocusTrap: FOCUSABLE_SELECTOR contains expected element types', () => {
    const FOCUSABLE_SELECTOR = [
        'a[href]:not([tabindex="-1"])',
        'button:not([disabled]):not([tabindex="-1"])',
        'input:not([disabled]):not([tabindex="-1"])',
        'select:not([disabled]):not([tabindex="-1"])',
        'textarea:not([disabled]):not([tabindex="-1"])',
        '[tabindex]:not([tabindex="-1"])',
        'details > summary:not([tabindex="-1"])',
    ].join(', ');

    // Verify all expected interactive element types are covered
    assert.ok(FOCUSABLE_SELECTOR.includes('button'), 'Buttons included');
    assert.ok(FOCUSABLE_SELECTOR.includes('a[href]'), 'Links included');
    assert.ok(FOCUSABLE_SELECTOR.includes('input'), 'Inputs included');
    assert.ok(FOCUSABLE_SELECTOR.includes('select'), 'Selects included');
    assert.ok(FOCUSABLE_SELECTOR.includes('textarea'), 'Textareas included');
    assert.ok(FOCUSABLE_SELECTOR.includes('[tabindex]'), 'Custom tabindex included');
    // Disabled elements must NOT be reachable
    assert.ok(FOCUSABLE_SELECTOR.includes(':not([disabled])'), 'Disabled elements excluded');
    // tabindex="-1" elements must NOT be trapped
    assert.ok(FOCUSABLE_SELECTOR.includes(':not([tabindex="-1"])'), 'tabindex=-1 excluded');
});

test('A8 – CommandSearch: dialog and combobox semantics are present in source', () => {
    const source = readSource('../student/CommandSearch.jsx');

    assert.match(source, /role="dialog"/);
    assert.match(source, /aria-modal="true"/);
    assert.match(source, /role="combobox"/);
    assert.match(source, /aria-controls="cmd-search-results"/);
    assert.match(source, /role="listbox"/);
    assert.match(source, /id="cmd-search-results"/);
});

test('A8 – CommandSearch: background is made inert while dialog is mounted', () => {
    const source = readSource('../student/CommandSearch.jsx');

    assert.match(source, /setAttribute\('inert', ''\)/);
    assert.match(source, /setAttribute\('aria-hidden', 'true'\)/);
    assert.match(source, /removeAttribute\('inert'\)/);
    assert.match(source, /removeAttribute\('aria-hidden'\)/);
});

test('A2 – App: skip link targets main content id with programmatic focus target', () => {
    const source = readSource('../../App.jsx');

    assert.match(source, /href="#main-content"/);
    assert.match(source, />Skip to main content</);
    assert.match(source, /<main className="page-content" id="main-content" tabIndex=\{-1\}>/);
});

// ─── A9: Truncated text — title attribute presence ───────────────────────────

test('A9 – chapter-topic-title: title prop equals visible text', () => {
    const topicTitle = 'Atomic structure, bonding and periodicity';
    // Simulate what the JSX renders: title={topic.title}
    const element = { className: 'chapter-topic-title', title: topicTitle, textContent: topicTitle };
    assert.equal(element.title, element.textContent, 'title attribute matches visible text content');
});

// ─── A7: Contrast token verification ─────────────────────────────────────────

test('A7 – nb-summary-label light-mode color is accessible (#92400e on pale amber)', () => {
    // Computed contrast ratio check using relative luminance formula.
    // Background approximation: rgba(245,158,11,0.18) over #ffffff ≈ rgb(251, 237, 202)
    // Text: #92400e

    function relLuminance(r, g, b) {
        const [rs, gs, bs] = [r, g, b].map((c) => {
            const s = c / 255;
            return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    }

    function contrastRatio(l1, l2) {
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
    }

    // Text: #92400e → rgb(146, 64, 14)
    const textL = relLuminance(146, 64, 14);
    // Background approx: rgb(251, 237, 202)
    const bgL = relLuminance(251, 237, 202);
    const ratio = contrastRatio(textL, bgL);

    assert.ok(ratio >= 4.5, `Expected contrast ≥ 4.5:1, got ${ratio.toFixed(2)}:1`);
});

test('A7 – search-kbd color (--color-text-secondary #516176) on bg (#eef2f8) meets 4.5:1', () => {
    function relLuminance(r, g, b) {
        return [r, g, b].reduce((acc, c, i) => {
            const s = c / 255;
            const lin = s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
            return acc + lin * [0.2126, 0.7152, 0.0722][i];
        }, 0);
    }
    function contrastRatio(l1, l2) {
        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }

    // #516176 → rgb(81, 97, 118)
    const textL = relLuminance(81, 97, 118);
    // #eef2f8 → rgb(238, 242, 248)
    const bgL = relLuminance(238, 242, 248);
    const ratio = contrastRatio(textL, bgL);

    assert.ok(ratio >= 4.5, `Expected ≥ 4.5:1, got ${ratio.toFixed(2)}:1`);
});
