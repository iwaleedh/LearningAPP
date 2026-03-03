/**
 * WCH12 | Topic 7: Intermolecular Forces | Subtopic 6
 * Solvent choice factors
 */

export const note_chemistry_1_2_7_6 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: {
                text: 'Explain how intermolecular forces determine the choice of solvent for a given solute. Apply the "like dissolves like" principle. Understand why water and organic solvents dissolve different types of substances.',
            },
        },
        {
            id: 'h-like',
            type: 'heading',
            data: { text: '"Like Dissolves Like" Principle', level: 2 },
            terms: ['Solvent', 'Intermolecular forces'],
        },
        {
            id: 'callout-like-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Like Dissolves Like',
                text: 'A substance dissolves in a solvent when the solute–solvent interactions are similar in strength to the solute–solute and solvent–solvent interactions.\n\nPolar / ionic solutes → dissolve in polar solvents (e.g. water)\nNon-polar solutes → dissolve in non-polar solvents (e.g. hexane, cyclohexane)\n\nReason: the energy released forming new solute–solvent interactions must be sufficient to break the original solute–solute and solvent–solvent interactions.',
            },
            terms: ['Solvent'],
        },
        {
            id: 'table-solvent',
            type: 'comparisonTable',
            data: {
                caption: 'Solvent choice based on solute type and intermolecular forces',
                headers: ['Solute type', 'Best solvent', 'Interaction type', 'Example'],
                rows: [
                    ['Ionic (e.g. NaCl)', 'Water (polar)', 'Ion–dipole; H-bonding', 'NaCl dissolves in water, not hexane'],
                    ['Polar molecule (e.g. ethanol)', 'Water or polar organic', 'H-bonds / dipole–dipole', 'Ethanol miscible with water'],
                    ['Non-polar molecule (e.g. iodine)', 'Non-polar solvent (hexane)', 'London forces only', 'I₂ dissolves in hexane, not water'],
                    ['Grease / oils', 'Non-polar solvent', 'London forces', 'Grease dissolves in cyclohexane'],
                    ['Polar + non-polar groups (e.g. long-chain alcohols)', 'Intermediate polarity', 'Mixed', 'Propan-1-ol miscible with water and some organics'],
                ],
            },
            terms: ['Solvent'],
        },
        {
            id: 'h-water',
            type: 'heading',
            data: { text: 'Water as a Solvent', level: 2 },
            terms: ['Solvent', 'Hydrogen bond'],
        },
        {
            id: 'callout-water-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Why Water Dissolves Ionic Compounds',
                text: 'Process: hydration of ions\n  1. Water molecules cluster around ions (δ− O faces cation; δ+ H faces anion)\n  2. Ion–dipole interactions and H-bonds form between water and ions\n  3. These new interactions release energy that compensates for breaking the ionic lattice\n  4. Ion is surrounded by a "shell" of water molecules — it is hydrated\n\nIf lattice enthalpy > hydration enthalpy → ionic solid does NOT dissolve (e.g. BaSO₄)',
            },
            terms: ['Solvent', 'Hydrogen bond'],
        },
        {
            id: 'h-organic',
            type: 'heading',
            data: { text: 'Organic Solvents', level: 2 },
            terms: ['Solvent'],
        },
        {
            id: 'callout-organic-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Why Non-polar Solvents Dissolve Non-polar Solutes',
                text: 'Non-polar organic solvents (hexane, cyclohexane, DCM) dissolve non-polar solutes because:\n  • Both solute and solvent have only London forces\n  • New London forces formed between solute and solvent ≈ those broken in pure substances\n  • No energy "penalty" — dissolution is favourable\n\nNon-polar solvents do NOT dissolve ionic compounds:\n  • Ionic lattice is held by very strong electrostatic forces\n  • London forces alone cannot provide enough energy to break the lattice\n  • No dipole interactions to hydrate/solvate the ions',
            },
            terms: ['Solvent'],
        },
        {
            id: 'callout-alcohol-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Alcohols — Dual Solubility',
                text: 'Short-chain alcohols (methanol, ethanol, propanol) are miscible with water:\n  → O–H group forms H-bonds with water\n\nLong-chain alcohols (hexanol, octanol) are much less soluble in water:\n  → Large non-polar hydrocarbon chain dominates\n  → Disrupts water H-bond network significantly\n  → Overall dissolution not thermodynamically favourable\n\nGeneral rule: as chain length ↑ in alcohols, water solubility ↓.',
            },
            terms: ['Hydrogen bond', 'Solvent'],
        },
        {
            id: 'callout-tip-solvent',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Exam Tip — Choosing Solvents in Synthesis',
                text: 'In organic synthesis, solvent choice affects:\n  • Solubility of reactants and products\n  • Reaction rate (polar solvents stabilise ionic intermediates/transition states)\n  • Ease of product separation (e.g. extraction with immiscible solvents)\n\nCommon solvents at A-level:\n  Water — polar, H-bonding, cheap, safe\n  Ethanol — polar, H-bonding, miscible with water\n  Hexane / cyclohexane — non-polar, dissolves fats/oils\n  Ethyl acetate — medium polarity, good for extraction',
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
                    { text: '"Like dissolves like" — polar/ionic → polar solvent; non-polar → non-polar solvent', checked: false },
                    { text: 'Water dissolves ionic compounds by hydration — ion–dipole interactions', checked: false },
                    { text: 'Non-polar solvents (hexane) dissolve non-polar solutes via London forces', checked: false },
                    { text: 'Short-chain alcohols miscible with water; long-chain alcohols less soluble', checked: false },
                    { text: 'Energy released forming new solute–solvent bonds must compensate for bonds broken', checked: false },
                ],
            },
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: '"Like dissolves like" — polar solvents dissolve ionic/polar solutes; non-polar solvents dissolve non-polar solutes. Water dissolves ionic compounds by hydrating ions with ion–dipole interactions. Short-chain alcohols are miscible with water due to H-bonding; water solubility decreases with chain length as the hydrocarbon chain dominates.',
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-like-key', prompt: 'State the "like dissolves like" principle. Why does NaCl dissolve in water but not in hexane?' },
            { id: 'cue-2', blockId: 'callout-water-key', prompt: 'Explain the process by which water dissolves an ionic compound like NaCl.' },
            { id: 'cue-3', blockId: 'callout-alcohol-key', prompt: 'Why is ethanol miscible with water but hexanol much less so? Relate your answer to intermolecular forces.' },
        ],
        summaryText: 'Like dissolves like, hydration of ions, non-polar solvents, alcohol solubility trends.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 7: Intermolecular Forces', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Solvent', 'Intermolecular forces'] }],
};
