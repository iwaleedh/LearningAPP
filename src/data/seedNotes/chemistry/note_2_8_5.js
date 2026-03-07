/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 5
 * "Flame tests and testing for cations"
 * Source: Pearson Edexcel IAL Chemistry — Section 8B.6
 */
export const note_chemistry_2_8_5 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand how to carry out flame tests, know the distinctive flame colours for Group 1 and 2 metal ions, and the test for the ammonium ion.' },
            terms: []
        },
        {
            id: 'h-procedure',
            type: 'heading',
            data: { text: 'Flame Test Procedure', level: 2 },
            terms: []
        },
        {
            id: 'list-procedure',
            type: 'list',
            data: {
                style: 'ordered',
                items: [
                    'Dip a clean nichrome or platinum wire into concentrated hydrochloric acid (HCl).',
                    'Dip the moistened wire into a sample of the solid metal compound.',
                    'Hold the wire in the hot, entirely <strong>non-luminous (blue)</strong> part of a Bunsen burner flame.',
                    'Observe the colour of the flame.'
                ]
            },
            terms: ['Nichrome wire']
        },
        {
            id: 'callout-cause',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why do they produce a colored flame?',
                text: '1. Heat energy from the flame causes an <strong>electron transition</strong>: electrons are <strong>excited/promoted</strong> and jump to higher energy levels.<br/>2. These excited electrons are unstable and immediately fall back down to their original <strong>ground state</strong>.<br/>3. As they drop, they emit energy in the form of a <strong>photon</strong> of light. The specific energy gap corresponds to a specific wavelength.<br/>4. If that wavelength falls entirely within the <strong>visible region</strong> (400 – 800 nm), we observe a specific colour.'
            },
            terms: ['Electron excitation', 'Ground state', 'Visible region']
        },
        {
            id: 'table-colours',
            type: 'comparisonTable',
            data: {
                caption: 'Flame Test Colours for Metal Cations',
                headers: ['Metal Cation', 'Group', 'Flame Colour'],
                rows: [
                    ['Lithium, Li⁺', '1', 'Red'],
                    ['Sodium, Na⁺', '1', 'Yellow / Orange'],
                    ['Potassium, K⁺', '1', 'Lilac'],
                    ['Rubidium, Rb⁺', '1', 'Red / Purple'],
                    ['Caesium, Cs⁺', '1', 'Blue / Violet'],
                    ['Magnesium, Mg²⁺', '2', 'No flame colour (energy emitted is outside the visible spectrum)'],
                    ['Calcium, Ca²⁺', '2', 'Brick-red'],
                    ['Strontium, Sr²⁺', '2', 'Crimson-red'],
                    ['Barium, Ba²⁺', '2', 'Apple-green']
                ]
            },
            terms: []
        },
        {
            id: 'callout-drawbacks',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Drawbacks of Flame Tests',
                text: '• Describe colour is highly <strong>subjective</strong>. What one person calls "crimson-red", another might just see as "red".<br/>• Many compounds contain <strong>sodium impurities</strong>. Because sodium emits such a very intense yellow/orange flame, it effectively masks out the more subtle colours of other ions.'
            },
            terms: []
        },
        {
            id: 'h-ammonium',
            type: 'heading',
            data: { text: 'Testing for the Ammonium Ion (NH₄⁺)', level: 2 },
            terms: []
        },
        {
            id: 'callout-ammonium',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Test for NH₄⁺',
                text: '<strong>Reagent:</strong> Add aqueous sodium hydroxide (NaOH(aq)) to the solution and warm gently.<br/><strong>Equation:</strong> NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l)<br/><strong>Observation:</strong> Ammonia gas (NH₃) is evolved. It has a pungent smell and turns damp red litmus paper <strong>blue</strong>.'
            },
            terms: ['Ammonium ion', 'Litmus paper']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-procedure', prompt: 'Why is the nichrome wire dipped in concentrated HCl before picking up the sample in a flame test?' },
            { id: 'c2', blockId: 'callout-cause', prompt: 'Explain, in terms of electrons, why heating a metal compound produces a flame colour.' },
            { id: 'c3', blockId: 'callout-drawbacks', prompt: 'Give two reasons or drawbacks as to why flame tests can be an unreliable method of ion identification.' },
            { id: 'c4', blockId: 'table-colours', prompt: 'State the flame test colours for: Lithium, Sodium, Potassium, Calcium, and Barium.' },
            { id: 'c5', blockId: 'table-colours', prompt: 'Why does magnesium not produce a visible flame colour?' },
            { id: 'c6', blockId: 'callout-ammonium', prompt: 'Describe the chemical test for ammonium ions (NH₄⁺) and state the expected observation.' }
        ],
        summaryText: 'Flame tests: clean nichrome wire with conc. HCl, dip in solid, place in blue flame. Heat excites electrons to higher levels; they emit a photon as they drop back to ground state. If that photon\'s wavelength is in the visible region, we see a colour. Colours: Li (red), Na (yellow), K (lilac), Ca (brick-red), Sr (crimson), Ba (apple-green). Mg emits in the UV range (no visible colour). Test for NH₄⁺: add warm NaOH(aq), ammonia gas is evolved which turns damp red litmus blue.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_5;
