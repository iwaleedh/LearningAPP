/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 7
 * "Halide tests and reactions with H₂SO₄"
 * Source: Pearson Edexcel IAL Chemistry — Section 8C.3
 */
export const note_chemistry_2_8_7 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the reactions of solid Group 1 halides with concentrated sulfuric acid, and the chemical tests used to identify halide ions in aqueous solution.' },
            terms: []
        },
        {
            id: 'h-acid',
            type: 'heading',
            data: { text: 'Solid Halides + Concentrated H₂SO₄', level: 2 },
            terms: []
        },
        {
            id: 'p-acid',
            type: 'paragraph',
            data: { text: 'When solid Group 1 halides (e.g. NaCl, KBr, KI) react with concentrated sulfuric acid, the products formed depend on the reducing power of the halide ion. Chloride ions are poor reducing agents, so they only undergo an acid-base reaction. Bromide and iodide ions are stronger reducing agents as you go down the group. They will reduce the sulfur (+6) in sulfuric acid into multiple lower oxidation states.' },
            terms: ['Reducing power', 'Sulfuric acid', 'Oxidation state']
        },
        {
            id: 'table-acid',
            type: 'comparisonTable',
            data: {
                caption: 'Reactions of solid halides with conc. H₂SO₄',
                headers: ['Halide (X⁻)', 'Reaction Type', 'Sulfur Reduction (extent)', 'Products & Observations'],
                rows: [
                    ['Chloride (Cl⁻)', 'Acid-base only', 'None (S stays at +6)', '<strong>Observation:</strong> Steamy fumes.<br/><strong>Product:</strong> Hydrogen chloride (HCl) gas.'],
                    ['Bromide (Br⁻)', 'Acid-Base & Redox', 'Reduced to +4', '<strong>Observations:</strong> Steamy fumes, orange-brown fumes, choking gas.<br/><strong>Products:</strong> HBr(g), Bromine (Br₂), and Sulfur Dioxide (SO₂).'],
                    ['Iodide (I⁻)', 'Acid-Base & Redox', 'Reduced to +4, 0, and -2', '<strong>Observations:</strong> Steamy fumes, purple fumes/black solid, choking gas, yellow solid, rotten egg smell.<br/><strong>Products:</strong> HI(g), Iodine (I₂), SO₂, Sulfur (S solid), and Hydrogen Sulfide (H₂S gas).']
                ]
            },
            terms: []
        },
        {
            id: 'h-silvernitrate',
            type: 'heading',
            data: { text: 'Testing Aqueous Halides: The Silver Nitrate Test', level: 2 },
            terms: []
        },
        {
            id: 'callout-silvernitrate',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Procedure for Silver Nitrate Test',
                text: '1. Add <strong>dilute nitric acid (HNO₃)</strong> to the aqueous sample. (This removes any interfering carbonate/hydroxide ions that would confusingly form Ag₂CO₃ or AgOH precipitates).<br/>2. Add <strong>aqueous silver nitrate (AgNO₃)</strong>.<br/>3. A precipitate of silver halide (AgX) will form.<br/>4. <strong>Confirmation:</strong> Because the precipitate colours (white, cream, yellow) are highly subjective and difficult to accurately distinguish visually, we confirm by adding dilute, then concentrated aqueous ammonia (NH₃) to test their solubility.'
            },
            terms: ['Silver nitrate test']
        },
        {
            id: 'table-precipitates',
            type: 'comparisonTable',
            data: {
                caption: 'Silver Halide Precipitates and Ammonia Solubility',
                headers: ['Halide Ion', 'Colour of AgX Precipitate', 'Effect of adding DILUTE NH₃', 'Effect of adding CONC. NH₃'],
                rows: [
                    ['Chloride, Cl⁻(aq)', 'White', 'Dissolves / Soluble', 'Dissolves / Soluble'],
                    ['Bromide, Br⁻(aq)', 'Cream', 'Insoluble', 'Dissolves / Soluble'],
                    ['Iodide, I⁻(aq)', 'Yellow', 'Insoluble', 'Insoluble']
                ]
            },
            terms: ['Precipitate', 'Aqueous ammonia']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-acid', prompt: 'In terms of their reducing power, explain the difference in reactions when solid NaCl and solid KI are added to concentrated H₂SO₄.' },
            { id: 'c2', blockId: 'table-acid', prompt: 'What gas is responsible for the "bad egg" smell when solid potassium iodide reacts with concentrated sulfuric acid, and what is the oxidation state of sulfur in it?' },
            { id: 'c3', blockId: 'table-acid', prompt: 'State all five products formed when Potassium Iodide reacts with concentrated sulfuric acid.' },
            { id: 'c4', blockId: 'callout-silvernitrate', prompt: 'Why is dilute nitric acid added BEFORE silver nitrate when testing for halide ions?' },
            { id: 'c5', blockId: 'callout-silvernitrate', prompt: 'Why is the subsequent ammonia test necessary after observing the silver halide precipitates?' },
            { id: 'c6', blockId: 'table-precipitates', prompt: 'A halide solution is tested with AgNO₃(aq) and forms a cream precipitate. Which reagent could you add to further confirm its identity, and what would you expect to see?' }
        ],
        summaryText: 'Solid salts with conc. H₂SO₄: Cl⁻ makes only HCl gas (steamy fumes, acid-base). Br⁻ and I⁻ are stronger reducing agents: Br⁻ reduces S(+6) down to SO₂ (+4). I⁻ is the strongest, reducing S(+6) to SO₂, S (0, yellow solid), and H₂S (-2, rotten egg smell). Aqueous halide test: Add dilute HNO₃, then AgNO₃. Cl⁻ = white ppt (dissolves in dilute NH₃). Br⁻ = cream ppt (dissolves only in conc. NH₃). I⁻ = yellow ppt (insoluble in any NH₃). Ammonia distinguishes between them objectively.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_7;
