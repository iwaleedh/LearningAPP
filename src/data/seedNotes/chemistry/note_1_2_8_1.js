/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 1
 * Electron-transfer redox
 */

export const note_chemistry_1_2_8_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: {
                text: 'Define oxidation and reduction in terms of electron transfer. Identify oxidising and reducing agents. Write half-equations for oxidation and reduction and combine them into full ionic equations.',
            },
        },
        {
            id: 'h-halfeq',
            type: 'heading',
            data: { text: 'Half-Equations and Electron Transfer', level: 2 },
            terms: ['Oxidation', 'Reduction', 'Half-equation'],
        },
        {
            id: 'callout-halfeq-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Half-Equations',
                text: 'A half-equation shows either the oxidation or reduction process separately.\n\nOxidation half-equation: species loses electrons → electrons on the RIGHT\n  e.g. Mg → Mg²⁺ + 2e⁻\n\nReduction half-equation: species gains electrons → electrons on the LEFT\n  e.g. Cu²⁺ + 2e⁻ → Cu\n\nTo combine: ensure electrons cancel (multiply if necessary), then add the two half-equations.',
            },
            terms: ['Half-equation', 'Oxidation', 'Reduction'],
        },
        {
            id: 'callout-we-halfeq',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Worked Example — Combining Half-Equations',
                text: 'Write the overall ionic equation for the reaction of Mg with Fe²⁺ ions.\n\nOxidation: Mg → Mg²⁺ + 2e⁻\nReduction: Fe²⁺ + 2e⁻ → Fe\n\nElectrons balance (2e⁻ each) — add directly:\n  Mg + Fe²⁺ + 2e⁻ → Mg²⁺ + 2e⁻ + Fe\n  Cancel e⁻:\n  Mg + Fe²⁺ → Mg²⁺ + Fe\n\nCheck: charge balanced (0 + 2+ → 2+ + 0 ✓); atoms balanced ✓',
            },
            terms: ['Half-equation'],
        },
        {
            id: 'callout-we-unequal',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Worked Example — Unequal Electrons',
                text: 'Write the ionic equation for Al reacting with Cu²⁺ ions.\n\nOxidation: Al → Al³⁺ + 3e⁻\nReduction: Cu²⁺ + 2e⁻ → Cu\n\nElectrons don\'t balance — find LCM (6):\n  ×2: 2Al → 2Al³⁺ + 6e⁻\n  ×3: 3Cu²⁺ + 6e⁻ → 3Cu\n\nAdd and cancel e⁻:\n  2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu',
            },
            terms: ['Half-equation'],
        },
        {
            id: 'h-agents',
            type: 'heading',
            data: { text: 'Oxidising and Reducing Agents', level: 2 },
            terms: ['Oxidising agent', 'Reducing agent'],
        },
        {
            id: 'callout-agents-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Oxidising and Reducing Agents',
                text: 'Oxidising agent: causes oxidation of another species → itself gets REDUCED\n  (gains electrons; oxidation number decreases)\n  Common oxidising agents: O₂, Cl₂, F₂, MnO₄⁻, Cr₂O₇²⁻, H₂O₂, Fe³⁺\n\nReducing agent: causes reduction of another species → itself gets OXIDISED\n  (loses electrons; oxidation number increases)\n  Common reducing agents: Na, Mg, Zn, Fe, H₂, CO, I⁻, SO₂',
            },
            terms: ['Oxidising agent', 'Reducing agent'],
        },
        {
            id: 'table-agents',
            type: 'comparisonTable',
            data: {
                caption: 'Summary: oxidising vs reducing agents',
                headers: ['Agent', 'Effect on other species', 'What happens to itself', 'Oxidation number change'],
                rows: [
                    ['Oxidising agent', 'Oxidises it (takes electrons)', 'Gets reduced', 'Decreases'],
                    ['Reducing agent', 'Reduces it (gives electrons)', 'Gets oxidised', 'Increases'],
                ],
            },
            terms: ['Oxidising agent', 'Reducing agent'],
        },
        {
            id: 'callout-tip-halfeq',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Exam Tip — Writing Half-Equations with Water/H⁺',
                text: 'For half-equations in acidic solution involving oxyanions (e.g. MnO₄⁻, Cr₂O₇²⁻):\n  1. Write the species and their products\n  2. Balance O atoms by adding H₂O\n  3. Balance H atoms by adding H⁺\n  4. Balance charge by adding e⁻\n\nExample: MnO₄⁻ → Mn²⁺  (in acid)\n  MnO₄⁻ → Mn²⁺ + 4H₂O      (balance O)\n  MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O  (balance H)\n  MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O  (balance charge)',
            },
            terms: ['Half-equation'],
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
                    { text: 'Oxidation half-equation: electrons on RIGHT (lost)', checked: false },
                    { text: 'Reduction half-equation: electrons on LEFT (gained)', checked: false },
                    { text: 'To combine: multiply to equalise e⁻ count, then add and cancel', checked: false },
                    { text: 'Oxidising agent gets reduced; reducing agent gets oxidised', checked: false },
                    { text: 'In acid: balance O with H₂O, H with H⁺, charge with e⁻', checked: false },
                ],
            },
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Half-equations show either oxidation (e⁻ on right) or reduction (e⁻ on left). To combine, equalise electron counts by multiplying, then add and cancel. Oxidising agents gain electrons (get reduced); reducing agents lose electrons (get oxidised). In acidic solution, balance O with H₂O and H with H⁺.',
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-halfeq-key', prompt: 'Write the oxidation and reduction half-equations for Mg reacting with Cu²⁺. Combine them into a full ionic equation.' },
            { id: 'cue-2', blockId: 'callout-we-unequal', prompt: 'Write half-equations for Al/Cu²⁺ reaction. Why must you multiply before combining? What is the overall ionic equation?' },
            { id: 'cue-3', blockId: 'callout-agents-key', prompt: 'Define oxidising agent and reducing agent. Give 2 examples of each.' },
        ],
        summaryText: 'Half-equations, combining half-equations, oxidising/reducing agents, acidic solution balancing.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 8: Redox', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Redox', 'Half-equations'] }],
};
