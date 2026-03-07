/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 0
 * "General Principles: Reaction types and intermediate species"
 * Source: Pearson Edexcel IAL Chemistry — Section 10A
 */
export const note_chemistry_2_10_0 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Classify reactions as substitution, addition, elimination, oxidation, reduction, hydrolysis, or polymerization, and understand the difference between electrophiles, nucleophiles, and radicals.' },
            terms: []
        },
        {
            id: 'h-types',
            type: 'heading',
            data: { text: 'Reaction Types', level: 2 },
            terms: []
        },
        {
            id: 'table-types',
            type: 'comparisonTable',
            data: {
                caption: 'Important Organic Reaction Types',
                headers: ['Reaction Type', 'Description', 'Characteristic feature'],
                rows: [
                    ['Substitution', 'An atom or group is replaced by a different atom or group.', 'Two reactants form two products.'],
                    ['Addition', 'Two molecules join to form a single product.', 'Involves breaking a double (π) bond.'],
                    ['Elimination', 'A small molecule is removed from a larger one.', 'Forms a double bond (the opposite of addition).'],
                    ['Hydrolysis', 'Splitting a molecule using water (often catalysed by acid or alkali).', 'Water or OH⁻ is a reactant.'],
                    ['Polymerisation', 'Many monomer molecules join to form a giant long-chain molecule.', 'Forms a polymer.'],
                    ['Oxidation', 'Gain of oxygen or loss of hydrogen.', 'Often denoted by [O] over the arrow.'],
                    ['Reduction', 'Loss of oxygen or gain of hydrogen.', 'Often denoted by [H] over the arrow.']
                ]
            },
            terms: ['Substitution', 'Addition', 'Elimination', 'Hydrolysis', 'Oxidation', 'Reduction']
        },
        {
            id: 'h-reagents',
            type: 'heading',
            data: { text: 'Reactive Species (Reagents)', level: 2 },
            terms: []
        },
        {
            id: 'list-reagents',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Nucleophile:</strong> An electron pair DONOR. Typically a negative ion (e.g. OH⁻, CN⁻) or a neutral molecule with a lone pair (e.g. H₂O, NH₃). They attack areas of positive charge (δ+).',
                    '<strong>Electrophile:</strong> An electron pair ACCEPTOR. Typically a positive ion (e.g. H⁺, NO₂⁺) or a molecule with a partial positive charge (δ+). They attack areas of high electron density (like C=C double bonds).',
                    '<strong>Free Radical:</strong> A species with an unpaired electron (e.g. Cl•). They are highly reactive and formed by <em>homolytic</em> fission.'
                ]
            },
            terms: ['Nucleophile', 'Electrophile', 'Free radical']
        },
        {
            id: 'callout-fission',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Bond Fission',
                text: '• <strong>Homolytic Fission:</strong> A covalent bond breaks evenly, with one electron going to each atom, forming two <strong>radicals</strong>. Shown with single-headed (fish-hook) curly arrows.<br/>• <strong>Heterolytic Fission:</strong> A covalent bond breaks unevenly, with both electrons going to one atom, forming a positive and negative <strong>ion</strong>. Shown with a double-headed curly arrow.'
            },
            terms: ['Homolytic fission', 'Heterolytic fission']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-types', prompt: 'Which type of reaction involves the removal of a small molecule to form a carbon-carbon double bond?' },
            { id: 'c2', blockId: 'list-reagents', prompt: 'Define a "nucleophile" and give one clear example.' },
            { id: 'c3', blockId: 'list-reagents', prompt: 'Why is the hydroxide ion (OH⁻) considered a nucleophile rather than an electrophile?' },
            { id: 'c4', blockId: 'callout-fission', prompt: 'What type of bond breaking (fission) results in the formation of two highly reactive free radicals?' }
        ],
        summaryText: 'Organic reactions are classified by what happens overall: Addition (joining, forms double bonds), Elimination (removing, creates double bonds), Substitution (swapping). Oxidation is gaining oxygen/losing hydrogen, while Reduction is the reverse. Reagents are classified by how they act: Nucleophiles (electron pair DONORS, attack δ+), Electrophiles (electron pair ACCEPTORS, attack δ- or C=C). Bonds break homolytically (evenly) to form radicals, or heterolytically (unevenly) to form ions.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_0;
