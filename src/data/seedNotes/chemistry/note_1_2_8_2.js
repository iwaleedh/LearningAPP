/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 2
 * Redox and disproportionation equations
 */

export const note_chemistry_1_2_8_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: {
                text: 'Define disproportionation and identify it from oxidation number changes. Write balanced redox equations using oxidation number changes. Recognise common disproportionation reactions.',
            },
        },
        {
            id: 'h-disproportionation',
            type: 'heading',
            data: { text: 'Disproportionation', level: 2 },
            terms: ['Disproportionation'],
        },
        {
            id: 'callout-disp-def',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Definition — Disproportionation',
                text: 'Disproportionation is a redox reaction in which the SAME element is simultaneously OXIDISED and REDUCED.\n\nOne part of the element increases in oxidation number (oxidation) while another part decreases (reduction) — all in the same reaction.\n\nExample: Cl₂ + 2NaOH → NaCl + NaOCl + H₂O\n  Cl₂  (0) → Cl⁻ (−1) = reduction\n  Cl₂  (0) → OCl⁻ (+1) = oxidation\n  ∴ Cl disproportionates from 0 to −1 and +1',
            },
            terms: ['Disproportionation'],
        },
        {
            id: 'callout-we-disp1',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Example 1 — Cl₂ in NaOH (cold, dilute)',
                text: 'Cl₂(g) + 2NaOH(aq) → NaCl(aq) + NaOCl(aq) + H₂O(l)\n\nOxidation numbers of Cl:\n  Cl₂: 0\n  NaCl (Cl⁻): −1  ← reduction\n  NaOCl (OCl⁻): +1  ← oxidation\n\nSame element (Cl) both oxidised (+1) and reduced (−1) → DISPROPORTIONATION\n\nThis reaction is used in the manufacture of bleach.',
            },
            terms: ['Disproportionation'],
        },
        {
            id: 'callout-we-disp2',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Example 2 — H₂O₂ Decomposition',
                text: '2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nOxidation numbers of O:\n  H₂O₂: −1\n  H₂O: −2  ← reduction\n  O₂: 0  ← oxidation\n\nO disproportionates from −1 to −2 and 0 → DISPROPORTIONATION\n\nCatalysed by MnO₂ — used to test for H₂O₂ (effervescence of O₂).',
            },
            terms: ['Disproportionation'],
        },
        {
            id: 'h-balancing',
            type: 'heading',
            data: { text: 'Balancing Redox Equations Using Oxidation Numbers', level: 2 },
            terms: ['Oxidation number'],
        },
        {
            id: 'callout-balancing-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Balancing Redox Equations — Oxidation Number Method',
                text: 'Step 1 — Assign oxidation numbers to all atoms\nStep 2 — Identify which atoms are oxidised (increase) and reduced (decrease)\nStep 3 — Calculate the change in oxidation number for each\nStep 4 — Balance the changes: total increase must = total decrease\n          (multiply species by appropriate factors)\nStep 5 — Balance remaining atoms and charges (add H⁺, H₂O as needed)\nStep 6 — Check: atoms and charges balanced',
            },
            terms: ['Oxidation number'],
        },
        {
            id: 'callout-we-balance',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Worked Example — Balancing with Oxidation Numbers',
                text: 'Balance: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺  (in acid)\n\nStep 1 & 2 — Changes:\n  Mn: +7 → +2  (decrease of 5 — reduction)\n  Fe: +2 → +3  (increase of 1 — oxidation)\n\nStep 4 — Balance changes: need 5 Fe²⁺ per MnO₄⁻\n  MnO₄⁻ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺\n\nStep 5 — Balance O: add 4H₂O right; add 8H⁺ left:\n  MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O\n\nStep 6 — Check charge:\n  Left:  −1 + 10 + 8 = +17\n  Right: +2 + 15 + 0 = +17  ✓',
            },
            terms: ['Oxidation number'],
        },
        {
            id: 'h-checklist',
            type: 'heading',
            data: { text: 'Exam Checklist', level: 2 },
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Disproportionation: same element simultaneously oxidised AND reduced', checked: false },
                    { text: 'Cl₂ + NaOH → NaCl + NaOCl: Cl goes 0 → −1 and +1', checked: false },
                    { text: 'H₂O₂ → H₂O + O₂: O goes −1 → −2 and 0', checked: false },
                    { text: 'Balancing redox: total oxidation number increase = total decrease', checked: false },
                    { text: 'In acid: add H₂O to balance O, H⁺ to balance H', checked: false },
                ],
            },
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Disproportionation occurs when the same element is simultaneously oxidised and reduced. Examples: Cl₂ in NaOH (Cl: 0 → −1 and +1) and H₂O₂ decomposition (O: −1 → −2 and 0). Redox equations are balanced by ensuring total oxidation number increases equal total decreases, then balancing remaining atoms using H₂O and H⁺.',
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-disp-def', prompt: 'Define disproportionation. How can you identify it from oxidation numbers?' },
            { id: 'cue-2', blockId: 'callout-we-disp1', prompt: 'Cl₂ + NaOH → NaCl + NaOCl + H₂O. Show this is a disproportionation reaction using oxidation numbers.' },
            { id: 'cue-3', blockId: 'callout-we-balance', prompt: 'Balance: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in acid. Show all steps.' },
        ],
        summaryText: 'Disproportionation definition, Cl₂/H₂O₂ examples, balancing redox equations.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 8: Redox', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Redox', 'Disproportionation'] }],
};
