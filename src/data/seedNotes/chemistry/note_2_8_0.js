/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 0
 * "Electron loss and gain (Redox basics)"
 * Source: Pearson Edexcel IAL Chemistry — Section 8A.1
 */
export const note_chemistry_2_8_0 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand oxidation and reduction in terms of electron transfer, and know that oxidising agents gain electrons while reducing agents lose electrons.' },
            terms: []
        },
        {
            id: 'callout-oilrig',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Oxidation and Reduction (OILRIG)',
                text: '• <strong>Oxidation</strong> Is <strong>Loss</strong> of electrons.<br/>• <strong>Reduction</strong> Is <strong>Gain</strong> of electrons.<br/><br/>A redox reaction involves both oxidation and reduction occurring simultaneously.'
            },
            terms: ['Redox', 'Oxidation', 'Reduction']
        },
        {
            id: 'h-agents',
            type: 'heading',
            data: { text: 'Oxidising and Reducing Agents', level: 2 },
            terms: []
        },
        {
            id: 'table-agents',
            type: 'comparisonTable',
            data: {
                caption: 'Comparing Oxidising and Reducing Agents',
                headers: ['Agent', 'What it does to another species', 'What happens to the agent itself'],
                rows: [
                    ['Oxidising Agent', 'Removes electrons from it (oxidises it)', 'Gains electrons (is reduced)'],
                    ['Reducing Agent', 'Gives electrons to it (reduces it)', 'Loses electrons (is oxidised)']
                ]
            },
            terms: ['Oxidising agent', 'Reducing agent']
        },
        {
            id: 'callout-half',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Magnesium and Oxygen',
                text: 'Formation of magnesium oxide: 2Mg(s) + O₂(g) → 2MgO(s)<br/><br/><strong>Oxidation half-equation:</strong> Mg → Mg²⁺ + 2e⁻ (Mg loses electrons, it is the reducing agent)<br/><strong>Reduction half-equation:</strong> O₂ + 4e⁻ → 2O²⁻ (O₂ gains electrons, it is the oxidising agent)'
            },
            terms: ['Half-equation']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-oilrig', prompt: 'Define oxidation and reduction in terms of electron transfer.' },
            { id: 'c2', blockId: 'table-agents', prompt: 'What happens to an oxidising agent during a redox reaction?' },
            { id: 'c3', blockId: 'callout-half', prompt: 'In the reaction Cu²⁺ + Zn → Cu + Zn²⁺, identify the oxidising agent and the reducing agent.' }
        ],
        summaryText: 'OILRIG: Oxidation Is Loss of electrons, Reduction Is Gain of electrons. An oxidising agent oxidises another species by taking electrons from it, meaning the oxidising agent itself is reduced. A reducing agent reduces another species by giving it electrons, so it is oxidised.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_0;
