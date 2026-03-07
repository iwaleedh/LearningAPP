/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 6
 * "Water of crystallisation and solute solubility"
 * Source: Pearson Edexcel IAL Chemistry — Section 7C.2
 */
export const note_chemistry_2_7_6 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand that some ionic compounds dissolve in water to form hydrated ions, while others form crystalline lattices containing water of crystallisation.' },
            terms: []
        },
        {
            id: 'h-hydration',
            type: 'heading',
            data: { text: 'Hydration of Ions', level: 2 },
            terms: []
        },
        {
            id: 'p-hydration',
            type: 'paragraph',
            data: { text: 'When an ionic lattice like NaCl dissolves in water, the lattice is broken down. The individual Na⁺ and Cl⁻ ions are completely surrounded by water molecules. The δ– oxygen atoms of water attract the Na⁺ ions, and the δ+ hydrogen atoms attract the Cl⁻ ions. The ions are said to be <strong>hydrated</strong>. This releases <strong>hydration energy</strong>.' },
            terms: ['Hydration', 'Hydrated ion']
        },
        {
            id: 'h-crystallisation',
            type: 'heading',
            data: { text: 'Water of Crystallisation', level: 2 },
            terms: []
        },
        {
            id: 'callout-crystallisation',
            type: 'callout',
            data: {
                style: 'key',
                title: 'What is water of crystallisation?',
                text: 'Some ionic salts do not completely separate from water when they crystallize out of an aqueous solution. Instead, water molecules become incorporated directly into the solid ionic lattice. This is called <strong>water of crystallisation</strong>.'
            },
            terms: ['Water of crystallisation']
        },
        {
            id: 'p-example',
            type: 'paragraph',
            data: { text: 'A salt containing water of crystallisation is termed <strong>hydrated</strong>. If the water is completely removed (usually by heating), the salt becomes <strong>anhydrous</strong>.' },
            terms: ['Hydrated salt', 'Anhydrous salt']
        },
        {
            id: 'callout-formula',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Chemical formula formatting',
                text: 'The presence of water of crystallisation is shown by a dot (·) followed by the number of water molecules per formula unit.<br/><br/><strong>Example:</strong> Hydrated copper(II) sulfate is CuSO₄·5H₂O. This means there are 5 moles of water for every 1 mole of CuSO₄ in the crystal lattice. When heated, it turns into anhydrous CuSO₄ (white powder).'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-hydration', prompt: 'Describe how a sodium chloride lattice dissolves in water, mentioning the specific partial charges on the water molecules.' },
            { id: 'c2', blockId: 'callout-crystallisation', prompt: 'Define "water of crystallisation".' },
            { id: 'c3', blockId: 'p-example', prompt: 'What is the difference between a hydrated salt and an anhydrous salt?' },
            { id: 'c4', blockId: 'callout-formula', prompt: 'What does the formula MgSO₄·7H₂O indicate about the composition of the solid?' }
        ],
        summaryText: 'When ionic compounds dissolve in water, they become hydrated ions (surrounded by polar water molecules). When crystallising, some salts trap water molecules within their solid lattice (water of crystallisation). A salt with water is "hydrated"; heated to remove the water it becomes "anhydrous". Example formula: CuSO₄·5H₂O.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_7_6;
