/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 6
 * "Purifying an organic liquid"
 * Source: Pearson Edexcel IAL Chemistry — Section 10C.3
 */
export const note_chemistry_2_10_6 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Know when and how to use various techniques (heating under reflux, distillation, solvent extraction, drying, boiling point determination) in the preparation and purification of a liquid organic compound.' },
            terms: []
        },
        {
            id: 'h-reflux',
            type: 'heading',
            data: { text: 'Preparation Techniques', level: 2 },
            terms: []
        },
        {
            id: 'table-prep',
            type: 'comparisonTable',
            data: {
                caption: 'Heating Techniques',
                headers: ['Technique', 'Apparatus Setup', 'Purpose'],
                rows: [
                    ['Heating under Reflux', 'Flask with a vertical Liebig condenser. Open at the top.', 'Allows a reaction to be heated for a long time without losing volatile reactants or products. Vapours condense and drop back into the flask.'],
                    ['Simple Distillation', 'Flask connected to a downward-sloping Liebig condenser. Thermometer at the T-junction.', 'Separates a volatile liquid from a reaction mixture (e.g., extracting an aldehyde before it oxidises to a carboxylic acid) based on boiling point.']
                ]
            },
            terms: ['Reflux', 'Simple distillation', 'Liebig condenser']
        },
        {
            id: 'callout-cp6',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Core Practical 6: Preparation of 2-chloro-2-methylpropane',
                text: '<strong>Reaction:</strong> 2-methylpropan-2-ol + conc. HCl → 2-chloro-2-methylpropane + H₂O<br/>This is carried out by mixing the tertiary alcohol and conc. HCl directly in a separating funnel. The mixture is shaken, and the pressure is frequently released by <strong>venting</strong> (opening the tap). After the reaction, the lower aqueous layer is drained off.'
            },
            terms: []
        },
        {
            id: 'h-purification',
            type: 'heading',
            data: { text: 'Purification Techniques', level: 2 },
            terms: []
        },
        {
            id: 'list-purification',
            type: 'list',
            data: {
                style: 'ordered',
                items: [
                    '<strong>Solvent Extraction (Using a Separating Funnel):</strong> Shake the mixture with water. It forms two layers. The aqueous layer (containing water-soluble impurities like unreacted acids or inorganic salts) is drained away. The organic layer is retained. <em>Always remember to momentarily open the tap to release internal pressure (venting) while shaking!</em>',
                    '<strong>Neutralisation:</strong> Add aqueous sodium hydrogencarbonate (NaHCO₃) or sodium carbonate to the impure liquid in the separating funnel to neutralize any remaining acid impurities. <em>Beware of CO₂ gas build-up — remember to invert and vent the funnel frequently!</em>',
                    '<strong>Drying:</strong> Add an anhydrous salt (e.g., <strong>anhydrous calcium chloride</strong> or <strong>anhydrous sodium sulfate</strong>) to the organic liquid. It absorbs water to become hydrated. Add until it stops clumping. Then filter or decant to remove the solid.',
                    '<strong>Fractional Distillation (or redistillation):</strong> Finally, distil the dried liquid and collect the fraction that boils precisely at the known boiling point of your target compound. A fractionating column containing glass beads is often used to provide a large surface area for repeated evaporation and condensation, ensuring better separation.'
                ]
            },
            terms: ['Separating funnel', 'Anhydrous salt', 'Venting']
        },
        {
            id: 'svg-separating-funnel',
            type: 'svg',
            data: {
                caption: 'Using a separating funnel to remove aqueous impurities and collect the organic layer.',
                svg: '<svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="orgLayer" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#fdba74"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient><linearGradient id="aqLayer" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient></defs><g transform="translate(100, 30)"><path d="M 0 50 C 40 50, 70 80, 70 140 L 40 250 L 40 300 L 20 300 L 20 250 L -10 140 C -10 80, 20 50, 60 50 Z" fill="none" stroke="#64748b" stroke-width="4"/><path d="M -8 110 C 20 110, 40 100, 68 110 L 40 250 L 20 250 L -8 140 Z" fill="url(#aqLayer)" opacity="0.8"/><path d="M -8 140 C 20 140, 40 130, 68 140 L 40 250 L 20 250 L -8 140 Z" fill="url(#orgLayer)" opacity="0.8"/><path d="M 15 280 L 45 280 L 45 290 L 15 290 Z" fill="#475569"/><circle cx="30" cy="285" r="5" fill="#f8fafc"/></g><text x="210" y="160" font-family="sans-serif" font-size="14" fill="#3b82f6">Aqueous layer (impurities)</text><line x1="170" y1="155" x2="200" y2="155" stroke="#3b82f6" stroke-width="2"/><text x="210" y="210" font-family="sans-serif" font-size="14" fill="#d97706">Organic layer (product)</text><line x1="150" y1="205" x2="200" y2="205" stroke="#d97706" stroke-width="2"/><text x="210" y="320" font-family="sans-serif" font-size="14" fill="#475569">Glass tap to release layers</text><line x1="140" y1="315" x2="200" y2="315" stroke="#475569" stroke-width="2"/><g transform="translate(100, 350)"><path d="M 10 0 L 50 0 L 60 60 L 0 60 Z" fill="none" stroke="#64748b" stroke-width="3"/></g><text x="30" y="20" font-family="sans-serif" font-size="16" font-weight="bold" fill="#333">Separating Funnel</text></svg>'
            }
        },
        {
            id: 'h-purity',
            type: 'heading',
            data: { text: 'Testing for Purity', level: 2 },
            terms: []
        },
        {
            id: 'p-purity',
            type: 'paragraph',
            data: { text: 'The purity of the final prepared liquid can be checked by determining its <strong>boiling point</strong> (or melting point for a solid). A pure substance will boil at a single, sharp temperature that perfectly matches the data book value. The presence of impurities will cause the substance to boil across a wider <strong>temperature range</strong>, and the average boiling/melting point will be lower than the true value.' },
            terms: ['Sharp temperature']
        },
        {
            id: 'callout-antibumping',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Anti-bumping granules',
                text: 'Whenever boiling a liquid (in reflux or distillation), you MUST add a few <strong>anti-bumping granules</strong>. These provide nucleation sites for small bubbles to form, preventing the liquid from "bumping" (boiling violently and splashing up into the condenser).'
            },
            terms: ['Anti-bumping granules']
        },
        {
            id: 'h-case-study',
            type: 'heading',
            data: { text: 'Case Study: Preparing Bromoethane', level: 2 },
            terms: []
        },
        {
            id: 'callout-bromoethane',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practical Steps: Making & Purifying Bromoethane',
                text: '<strong>1. Reaction:</strong> Ethanol is reacted with potassium bromide and concentrated sulfuric acid. The acid is added slowly with cooling because the reaction is highly exothermic.<br/><br/><strong>2. Collection:</strong> Heat gently. Bromoethane has a low boiling point and is very volatile. It is often distilled off as it forms and collected under water in a flask surrounded by ice. This prevents evaporation and dissolves any escaping HBr gas.<br/><br/><strong>3. Impurities:</strong> The unpurified bromoethane contains HBr, Br₂ (from oxidation of bromide), SO₂, unreacted ethanol, and ethoxyethane.<br/><br/><strong>4. Purification Sequence:</strong><br/>• <strong>Water wash:</strong> Removes water-soluble impurities (HBr, ethanol, SO₂). Bromoethane is the dense lower layer (which is kept).<br/>• <strong>Sodium carbonate wash:</strong> Neutralises remaining acidic impurities (HBr, SO₂). Important to vent CO₂!<br/>• <strong>Water wash:</strong> Removes inorganic salts formed in the previous step.<br/>• <strong>Drying:</strong> Add anhydrous calcium chloride. It absorbs water and can also absorb remaining ethanol.<br/>• <strong>Redistillation:</strong> Distil and collect the sweet-smelling fraction boiling at 35–40°C.'
            },
            terms: ['Volatile', 'Exothermic', 'Washing', 'Anhydrous calcium chloride']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c-br1', blockId: 'callout-bromoethane', prompt: 'When preparing bromoethane, why is the distillate often collected under cold water?' },
            { id: 'c-br2', blockId: 'callout-bromoethane', prompt: 'What is the purpose of washing crude bromoethane with sodium carbonate solution, and what safety precaution must be taken?' },
            { id: 'c-br3', blockId: 'callout-bromoethane', prompt: 'Which drying agent is particularly useful for drying bromoethane because it also absorbs unreacted ethanol?' },
            { id: 'c-cp6', blockId: 'callout-cp6', prompt: 'In Core Practical 6 (preparing 2-chloro-2-methylpropane), what reagents are used and what apparatus is the initial reaction carried out in?' },
            { id: 'c1', blockId: 'table-prep', prompt: 'Why is a condenser placed vertically when heating a mixture under reflux?' },
            { id: 'c2', blockId: 'list-purification', prompt: 'What piece of glassware is used to separate an organic liquid from an aqueous layer containing dissolved impurities?' },
            { id: 'c3', blockId: 'list-purification', prompt: 'During solvent extraction or neutralisation, why must you periodically open the tap of the separating funnel?' },
            { id: 'c4', blockId: 'list-purification', prompt: 'Name a suitable chemical used to dry an organic liquid before final distillation.' },
            { id: 'c5', blockId: 'p-purity', prompt: 'How would you test that your purified liquid is actually pure, and what result would you expect?' }
        ],
        summaryText: 'Core Practical 6: preparing 2-chloro-2-methylpropane in a separating funnel. Preparing organics often uses heating under reflux. To purify: (1) Use separating funnel to remove aqueous layer/acid via NaHCO₃ (venting often to release CO₂ pressure). (2) Add anhydrous salt (e.g. CaCl₂ or Na₂SO₄) to absorb water and dry liquid. (3) Redistil and collect fraction boiling at target temperature (using a fractionating column with glass beads). A pure substance boils sharply at a single temp.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_6;
