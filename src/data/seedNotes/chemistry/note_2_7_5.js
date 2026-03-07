/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 5
 * "Choosing solvents and predicting solubility"
 * Source: Pearson Edexcel IAL Chemistry — Section 7C
 */
export const note_chemistry_2_7_5 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply knowledge of intermolecular forces to predict whether a given solute will dissolve in a given solvent.' },
            terms: []
        },
        {
            id: 'p-energy',
            type: 'paragraph',
            data: { text: 'Dissolving is an energy-driven process. For a substance to dissolve, the energy released when new intermolecular forces form between the solute and solvent must be roughly equal to or greater than the energy required to break the existing solute-solute and solvent-solvent forces.' },
            terms: []
        },
        {
            id: 'h-examples',
            type: 'heading',
            data: { text: 'Specific Examples to Know', level: 2 },
            terms: []
        },
        {
            id: 'callout-iodine',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Solubility of Iodine (I₂)',
                text: '• <strong>In water:</strong> Almost completely insoluble. I₂ is non-polar and can only form London forces, which don\'t release enough energy to break water\'s strong hydrogen bonds.<br/>• <strong>In hexane (or other organic solvents):</strong> Highly soluble. The London forces forming between I₂ and hexane are similar in strength to those being broken in pure I₂ and pure hexane. The resulting solution is purple.'
            },
            terms: []
        },
        {
            id: 'callout-hcl',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Solubility of Hydrogen Chloride (HCl)',
                text: '• <strong>In water:</strong> Extremely soluble. However, it doesn\'t just dissolve—it reacts. The highly polar H₂O molecules pull the polar HCl molecule apart, ionizing it completely to form H⁺(aq) and Cl⁻(aq).<br/>• <strong>In methylbenzene (non-polar):</strong> It dissolves as intact HCl molecules (gas dissolved in liquid) held by weak dipole-induced dipole forces. It does not ionize and the solution does not act as an acid.'
            },
            terms: ['Ionization']
        },
        {
            id: 'table-summary',
            type: 'comparisonTable',
            data: {
                caption: 'Summary of solvent types',
                headers: ['Solvent type', 'Examples', 'Dissolves...'],
                rows: [
                    ['Polar (capable of H-bonding)', 'Water', 'Ionic salts, alcohols, amines, carboxylic acids'],
                    ['Polar (cannot H-bond)', 'Propanone, halogenoalkanes', 'Polar covalent molecules with permanent dipoles'],
                    ['Non-polar', 'Hexane, cyclohexane', 'Alkanes, halogens (I₂, Br₂, Cl₂), large non-polar organic molecules']
                ]
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-energy', prompt: 'In terms of energy, why do most non-polar substances fail to dissolve in water?' },
            { id: 'c2', blockId: 'callout-iodine', prompt: 'Explain the difference in solubility of iodine crystals in water versus in hexane, detailing the specific forces involved.' },
            { id: 'c3', blockId: 'callout-hcl', prompt: 'What happens to hydrogen chloride gas when it dissolves in water compared to when it dissolves in a non-polar solvent like methylbenzene?' }
        ],
        summaryText: 'For dissolution, energy released by forming new solute-solvent bonds must roughly cover energy to break old bonds. Iodine (non-polar) dissolves in hexane (London forces) but not water. HCl dissolves AND ionizes in water, but only dissolves as discrete interacting molecules in non-polar solvents. Solvents are classed as polar H-bonding, polar non-H-bonding, or non-polar.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_7_5;
