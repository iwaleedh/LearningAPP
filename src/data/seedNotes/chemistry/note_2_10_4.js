/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 4
 * "Alcohols: Classification and reactions"
 * Source: Pearson Edexcel IAL Chemistry — Section 10C.1
 */
export const note_chemistry_2_10_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Classify alcohols as primary, secondary, or tertiary, understand their reaction with sodium, combustion, halogenation reactions, and their industrial uses.' },
            terms: []
        },
        {
            id: 'h-classification',
            type: 'heading',
            data: { text: 'Classification of Alcohols', level: 2 },
            terms: []
        },
        {
            id: 'list-classification',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Primary (1°):</strong> The -OH group is on a carbon attached to 0 or 1 alkyl groups (e.g. ethanol, propan-1-ol).',
                    '<strong>Secondary (2°):</strong> The -OH group is on a carbon attached to 2 alkyl groups (e.g. propan-2-ol).',
                    '<strong>Tertiary (3°):</strong> The -OH group is on a carbon attached to 3 alkyl groups (e.g. 2-methylpropan-2-ol).'
                ]
            },
            terms: ['Primary alcohol', 'Secondary alcohol', 'Tertiary alcohol']
        },
        {
            id: 'h-physical-props',
            type: 'heading',
            data: { text: 'Physical Properties of Alcohols', level: 2 },
            terms: []
        },
        {
            id: 'p-bp-solubility',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Boiling points:</strong> Alcohols have significantly higher boiling points than alkanes of similar molar mass due to <strong>hydrogen bonding</strong> between the highly electronegative oxygen and the $\\delta+$ hydrogen on the –OH group. This requires more energy to overcome than London forces.',
                    '<strong>Solubility in water:</strong> Small alcohols (like methanol, ethanol, propanol) are completely soluble in water because they form hydrogen bonds with water molecules.',
                    '<strong>Effect of chain length:</strong> As the hydrocarbon chain gets longer, the molecule becomes increasingly non-polar. London forces between the long chains dominate, disrupting the hydrogen bonding lattice of water, so larger alcohols (e.g. pentanol, hexanol) are much less soluble or insoluble.'
                ]
            },
            terms: ['Hydrogen bonding', 'London forces']
        },
        {
            id: 'h-manufacture',
            type: 'heading',
            data: { text: 'Manufacture of Ethanol', level: 2 },
            terms: []
        },
        {
            id: 'table-manufacture',
            type: 'comparisonTable',
            data: {
                caption: 'Comparing Methods for Manufacturing Ethanol',
                headers: ['Feature', 'Hydration of Ethene', 'Fermentation of Sugars'],
                rows: [
                    ['<strong>Raw Material</strong>', 'Ethene (from cracking crude oil) — Finite resource', 'Carbohydrates/Sugars (e.g. sugar cane, maize) — Renewable resource'],
                    ['<strong>Reaction Conditions</strong>', '300 °C, 60 atm, solid H₃PO₄ catalyst', 'Warm (approx 35 °C), anaerobic (no air), yeast enzymes'],
                    ['<strong>Process Type</strong>', 'Continuous flow process (efficient for large scale)', 'Batch process (slower, less efficient)']
                ]
            },
            terms: ['Hydration', 'Fermentation']
        },
        {
            id: 'p-fermentation-details',
            type: 'paragraph',
            data: { text: '<strong>Fermentation details:</strong> Yeast undergoes anaerobic respiration, turning sugars (C₆H₁₂O₆) into ethanol (2C₂H₅OH) and carbon dioxide (2CO₂). The mixture must be kept anaerobic; otherwise, the ethanol will oxidise into ethanoic acid. Fermentation stops when the ethanol concentration hits ~15% because it kills the yeast. Fractional distillation is then required to purify the ethanol.' },
            terms: ['Anaerobic']
        },
        {
            id: 'p-hydration-details',
            type: 'paragraph',
            data: { text: '<strong>Addition across unsymmetrical alkenes:</strong> If reacting propene (CH₃CH=CH₂) with steam, you primarily obtain propan-2-ol, not propan-1-ol. This is because the hydrogen atom adds to the carbon already containing the most hydrogen atoms (Markovnikov\'s rule).' },
            terms: []
        },
        {
            id: 'h-combustion',
            type: 'heading',
            data: { text: 'Combustion', level: 2 },
            terms: []
        },
        {
            id: 'p-combustion',
            type: 'paragraph',
            data: { text: 'Alcohols combust completely in plenty of oxygen to produce carbon dioxide and water. They are highly flammable and often used as fuels or fuel additives. Example: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.' },
            terms: ['Combustion']
        },
        {
            id: 'h-halogenation',
            type: 'heading',
            data: { text: 'Halogenation (Conversion to Halogenoalkanes)', level: 2 },
            terms: []
        },
        {
            id: 'table-halogenation',
            type: 'comparisonTable',
            data: {
                caption: 'Reagents for making Halogenoalkanes from Alcohols',
                headers: ['Desired Product', 'Reagents Needed', 'Equation / Notes'],
                rows: [
                    ['Chloroalkane', 'PCl₅ (solid) <br/>OR PCl₃ (liquid) <br/>OR conc. HCl (for 3° alcohols)', '<strong>PCl₅:</strong> ROH + PCl₅ → RCl + POCl₃ + <strong>HCl</strong> (steamy fumes). Violent reaction at room temp, used as -OH test.<br/><strong>PCl₃:</strong> 3ROH + PCl₃ → 3RCl + H₃PO₃<br/><br/><em>Tertiary alcohols react rapidly with conc. HCl at room temp without extra heating!</em>'],
                    ['Bromoalkane', 'KBr + 50% conc. H₂SO₄ <br/>OR Red phosphorus + Bromine', '<strong>KBr/H₂SO₄:</strong> Forms HBr <em>in situ</em> which then reacts with the alcohol. ROH + HBr → RBr + H₂O<br/><strong>Red P / Br₂:</strong> Reacts to form PBr₃ in situ, which then reacts: 3ROH + PBr₃ → 3RBr + H₃PO₃'],
                    ['Iodoalkane', 'Red phosphorus + Iodine (makes PI₃)<br/>OR KI + conc. H₃PO₄', '3ROH + PI₃ → 3RI + H₃PO₃<br/><br/><em>Note: If using KI, we use H₃PO₄ instead of H₂SO₄ because H₂SO₄ would oxidise the iodide ions to I₂.</em>']
                ]
            },
            terms: ['PCl5 test', 'In situ']
        },
        {
            id: 'h-sodium',
            type: 'heading',
            data: { text: 'Reaction with Sodium', level: 2 },
            terms: []
        },
        {
            id: 'p-sodium',
            type: 'paragraph',
            data: { text: 'Alcohols react steadily with metallic sodium at room temperature, releasing bubbles of hydrogen gas and leaving a colourless solution of a sodium alkoxide (e.g. sodium ethoxide). If evaporated to dryness, a white solid remains.' },
            terms: ['Alkoxide']
        },
        {
            id: 'callout-sodium',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Sodium Reaction Equation',
                text: 'Like the reaction of sodium with water, the reaction with alcohols cleaves the O-H bond, but it is less vigorous.<br/><br/>2CH₃CH₂OH + 2Na → 2CH₃CH₂O⁻Na⁺ + H₂<br/><br/>This reaction can be used as a test for the -OH group (provided the liquid is strictly neutral and perfectly anhydrous, as sodium acts violently with acids and water). It is also commonly used to safely dispose of small pieces of leftover sodium in the lab.'
            },
            terms: []
        },
        {
            id: 'h-uses',
            type: 'heading',
            data: { text: 'Common Uses of Alcohols', level: 2 },
            terms: []
        },
        {
            id: 'list-uses',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Ethanol (CH₃CH₂OH):</strong> Used globally in alcoholic drinks. It is an excellent solvent for cosmetics and perfumes. Industrially, it is used as a motor fuel (either pure or mixed with petrol as "gasohol," which is essential for countries without oil industries). Ethanol mixed with poisonous methanol and dye is sold as "methylated spirits" to deter drinking and avoid beverage taxes.',
                    '<strong>Methanol (CH₃OH):</strong> Primarily used as a clean-burning fuel or petrol additive, and as a crucial industrial feedstock to manufacture other chemicals like methanal (formaldehyde), ethanoic acid, and various esters.',
                    '<strong>Propan-2-ol (CH₃CH(OH)CH₃):</strong> Extensively used as an industrial and household solvent (often called "rubbing alcohol") because it dissolves a wide range of non-polar compounds and evaporates quickly.'
                ]
            },
            terms: ['Methylated spirits', 'Gasohol']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-classification', prompt: 'Classify butan-2-ol as primary, secondary, or tertiary.' },
            { id: 'c-bg1', blockId: 'p-bp-solubility', prompt: 'Why is ethanol completely soluble in water but hexan-1-ol is almost insoluble?' },
            { id: 'c-bg2', blockId: 'p-bp-solubility', prompt: 'Why is the boiling point of ethanol much higher than that of an alkane of similar mass?' },
            { id: 'c-mfg1', blockId: 'table-manufacture', prompt: 'Give three differences between the industrial hydration of ethene and the fermentation of sugars to produce ethanol.' },
            { id: 'c-mfg2', blockId: 'p-fermentation-details', prompt: 'In the fermentation of sugars, why must air be excluded from the reaction vessel?' },
            { id: 'c-mfg3', blockId: 'p-hydration-details', prompt: 'Why does the hydration of propene with steam produce propan-2-ol rather than propan-1-ol?' },
            { id: 'c2', blockId: 'table-halogenation', prompt: 'What reagent is used to convert an alcohol into a chloroalkane, and what observation is made during this reaction?' },
            { id: 'c3', blockId: 'table-halogenation', prompt: 'When converting an alcohol to an iodoalkane using KI, why must we use concentrated H₃PO₄ rather than concentrated H₂SO₄?' },
            { id: 'c4', blockId: 'table-halogenation', prompt: 'State the reagents used to produce a bromoalkane from an alcohol.' },
            { id: 'c5', blockId: 'table-halogenation', prompt: 'How can a tertiary alcohol be converted into a chloroalkane very quickly at room temperature?' },
            { id: 'c-sodium', blockId: 'callout-sodium', prompt: 'Describe what is observed when a small piece of sodium is dropped into ethanol, and state the name of the organic product formed.' },
            { id: 'c-uses', blockId: 'list-uses', prompt: 'State one use for methanol, and two different uses for ethanol. Why is methanol often added to industrial ethanol?' }
        ],
        summaryText: 'Ethanol can be manufactured continuously by hydrating ethene (fossil-based, using steam + H₂PO₄) or via batch fermentation of sugars (renewable, anaerobic, needs purifying). Alcohols have higher boiling points than alkanes and are soluble in water (if short-chained) due to hydrogen bonding. They react with metallic sodium to form an alkoxide and hydrogen gas. They combust cleanly as fuels. They can be turned into halogenoalkanes. Chloroalkanes: use solid PCl₅ (violent, releases steamy HCl fumes), liquid PCl₃, or conc HCl for 3° alcohols. Bromoalkanes: use 50% H₂SO₄ + KBr to make HBr in situ. Iodoalkanes: use red phosphorus + iodine (to make PI₃), or KI + conc H₃PO₄ (H₂SO₄ cannot be used as it would oxidise iodide to iodine). Alcohols are widely used as fuels, solvents (ethanol in perfumes, propan-2-ol for cleaning), and industrial feedstocks (methanol).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_4;
