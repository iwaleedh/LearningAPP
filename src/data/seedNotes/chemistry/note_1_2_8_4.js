/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 4
 * Group 2 trends and compounds
 */

export const note_chemistry_1_2_8_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: {
                text: 'Describe and explain trends in Group 2 (alkaline earth metals): reactivity, ionisation energies, reactions with water and oxygen. Describe the uses and properties of Group 2 compounds (oxides, hydroxides, carbonates, sulfates).',
            },
        },
        {
            id: 'h-group2',
            type: 'heading',
            data: { text: 'Group 2 — The Alkaline Earth Metals', level: 2 },
            terms: ['Group 2'],
        },
        {
            id: 'callout-trends-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Group 2 Trends Down the Group (Mg → Ba)',
                text: 'Atomic radius: INCREASES (more shells)\nIonisation energy (1st + 2nd): DECREASES (outer electrons more shielded, further from nucleus)\nReactivity: INCREASES (easier to lose 2 outer electrons)\nMelting point: generally DECREASES\n\nGroup 2 metals lose 2 electrons (s²) to form 2+ ions:\n  M → M²⁺ + 2e⁻\nAll form ionic compounds with oxidation state +2.',
            },
            terms: ['Group 2'],
        },
        {
            id: 'callout-water-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Reactions with Water',
                text: 'M(s) + 2H₂O(l) → M(OH)₂(aq) + H₂(g)\n\nMg: reacts very slowly with cold water; faster with steam:\n  Mg + H₂O(g) → MgO + H₂\n\nCa: reacts steadily with cold water; milky solution (Ca(OH)₂ slightly soluble)\n  Ca + 2H₂O → Ca(OH)₂ + H₂\n\nSr, Ba: react vigorously with cold water\n\nReactivity increases down the group — easier to ionise.',
            },
            terms: ['Group 2'],
        },
        {
            id: 'h-compounds',
            type: 'heading',
            data: { text: 'Group 2 Compounds — Trends in Solubility', level: 2 },
            terms: ['Group 2'],
        },
        {
            id: 'table-solubility',
            type: 'comparisonTable',
            data: {
                caption: 'Solubility trends of Group 2 hydroxides and sulfates',
                headers: ['Compound', 'Hydroxides M(OH)₂', 'Sulfates MSO₄'],
                rows: [
                    ['Mg', 'Slightly soluble', 'Soluble'],
                    ['Ca', 'Slightly soluble (limewater)', 'Slightly soluble'],
                    ['Sr', 'Moderately soluble', 'Insoluble'],
                    ['Ba', 'Soluble', 'Insoluble'],
                    ['Trend', 'Solubility INCREASES down group', 'Solubility DECREASES down group'],
                ],
            },
            terms: ['Group 2'],
        },
        {
            id: 'callout-uses-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Uses of Group 2 Compounds',
                text: 'Magnesium oxide (MgO): refractory material (high melting point); antacid\nCalcium oxide (CaO / quicklime): neutralise acidic soils; manufacture of cement\nCalcium hydroxide (Ca(OH)₂ / slaked lime): neutralise acidic soils; treat acid mine drainage; limewater test for CO₂\nCalcium carbonate (CaCO₃): antacid (indigestion tablets); building material (limestone); manufacture of glass\nBarium sulfate (BaSO₄): X-ray contrast agent ("barium meal") — insoluble so non-toxic',
            },
            terms: ['Group 2'],
        },
        {
            id: 'callout-thermal-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Thermal Decomposition of Group 2 Carbonates',
                text: 'MCO₃(s) → MO(s) + CO₂(g)\n\nAll Group 2 carbonates decompose on heating.\nStability of carbonate increases DOWN the group:\n  MgCO₃ decomposes at lowest temperature (~300°C)\n  BaCO₃ decomposes at highest temperature (~1400°C)\n\nReason: larger cation (down the group) has less polarising power → less distortion of CO₃²⁻ → more stable.\nSmaller, more charge-dense cation (Mg²⁺) polarises CO₃²⁻ more → easier to decompose.',
            },
            terms: ['Group 2'],
        },
        {
            id: 'callout-tip-exam',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Exam Tips — Group 2',
                text: 'Hydroxide solubility: INCREASES down group (opposite to sulfates)\nSulfate solubility: DECREASES down group\n\nCO₂ + Ca(OH)₂(aq) → CaCO₃(s) + H₂O  — limewater turns MILKY\nExcess CO₂: CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂(aq) — milky then CLEARS\n\nBaSO₄ is used as barium meal because it is insoluble and therefore non-toxic (Ba²⁺ ions are toxic).',
            },
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
                    { text: 'Group 2 reactivity increases down: lower IE, larger radius, more shielding', checked: false },
                    { text: 'M + 2H₂O → M(OH)₂ + H₂ (Ca, Sr, Ba with cold water)', checked: false },
                    { text: 'Hydroxide solubility: INCREASES down Group 2', checked: false },
                    { text: 'Sulfate solubility: DECREASES down Group 2', checked: false },
                    { text: 'Carbonate thermal stability: INCREASES down Group 2', checked: false },
                    { text: 'CO₂ + Ca(OH)₂ → CaCO₃ (milky); excess CO₂ clears the solution', checked: false },
                    { text: 'BaSO₄ used as barium meal — insoluble so non-toxic', checked: false },
                ],
            },
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Group 2 reactivity increases down the group as ionisation energies decrease. Hydroxide solubility increases and sulfate solubility decreases down the group. Carbonate thermal stability increases down the group due to decreasing polarising power of the cation. Key uses: CaO and Ca(OH)₂ neutralise acids; BaSO₄ as X-ray contrast agent.',
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-trends-key', prompt: 'State the trend in reactivity and ionisation energy down Group 2. Explain why reactivity increases.' },
            { id: 'cue-2', blockId: 'table-solubility', prompt: 'State the solubility trends for Group 2 hydroxides and sulfates. Which is more soluble: Mg(OH)₂ or Ba(OH)₂? BaSO₄ or MgSO₄?' },
            { id: 'cue-3', blockId: 'callout-thermal-key', prompt: 'Write the equation for thermal decomposition of a Group 2 carbonate. Does stability increase or decrease down the group? Explain why.' },
        ],
        summaryText: 'Group 2 trends, reactions with water, solubility of hydroxides/sulfates, thermal stability of carbonates.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 8: Group 2', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Group 2', 'Alkaline earth metals'] }],
};
