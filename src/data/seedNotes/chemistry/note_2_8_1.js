/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 1
 * "Oxidation numbers and nomenclature"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8A.2, 8A.3, 8A.4
 */
export const note_chemistry_2_8_1 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply rules to assign oxidation numbers, use them to recognise redox reactions, and indicate the oxidation number of an element in a compound using Roman numerals.' },
            terms: []
        },
        {
            id: 'h-rules',
            type: 'heading',
            data: { text: 'Rules for Assigning Oxidation Numbers', level: 2 },
            terms: []
        },
        {
            id: 'list-rules',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Uncombined elements:</strong> Always 0 (e.g., O₂, Na, S₈).',
                    '<strong>Simple ions:</strong> Same as the charge on the ion (e.g., Na⁺ is +1, Cl⁻ is –1).',
                    '<strong>Group 1, 2, 3 metals:</strong> Always +1, +2, +3 respectively in their compounds.',
                    '<strong>Fluorine:</strong> Always –1 in compounds.',
                    '<strong>Oxygen:</strong> Usually –2 (Exceptions: –1 in peroxides like H₂O₂, and +2 in F₂O).',
                    '<strong>Hydrogen:</strong> Usually +1 (Exception: –1 in metal hydrides like NaH).',
                    '<strong>Sum of oxidation numbers:</strong> Equals 0 in a neutral compound, or equals the total charge in a polyatomic ion.'
                ]
            },
            terms: ['Oxidation number']
        },
        {
            id: 'callout-polyatomic',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Calculating Oxidation Numbers in Polyatomic Ions',
                text: '<strong>Example 1: Chlorate(VII) ion, ClO₄⁻</strong><br/>• Oxygen is –2. We have 4 oxygens: 4 × (–2) = –8.<br/>• The overall charge on the ion is –1.<br/>• Cl + (–8) = –1.<br/>• Therefore, the oxidation number of Cl is <strong>+7</strong>.<br/><br/><strong>Example 2: Manganate(VII) ion, MnO₄⁻</strong><br/>• Oxygen is –2. 4 × (–2) = –8.<br/>• Overall charge = –1.<br/>• Mn + (–8) = –1.<br/>• Therefore, the oxidation number of Mn is <strong>+7</strong>.'
            },
            terms: []
        },
        {
            id: 'callout-identifying',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Recognising Redox Reactions',
                text: 'By checking oxidation numbers before and after a reaction, we can identify redox processes:<br/>• If an oxidation number <strong>increases</strong> (becomes more positive), the element has been <strong>oxidised</strong>.<br/>• If an oxidation number <strong>decreases</strong> (becomes more negative), the element has been <strong>reduced</strong>.<br/><br/>If no oxidation numbers change, it is NOT a redox reaction (e.g., acid-base neutralisation or precipitation).'
            },
            terms: []
        },
        {
            id: 'h-naming',
            type: 'heading',
            data: { text: 'Naming Compounds Using Roman Numerals', level: 2 },
            terms: []
        },
        {
            id: 'p-naming',
            type: 'paragraph',
            data: { text: 'Many elements (especially transition metals and p-block elements like nitrogen, sulfur, and chlorine) can have variable oxidation states. We use Roman numerals in brackets after the element\'s name to specify its oxidation number.' },
            terms: []
        },
        {
            id: 'table-names',
            type: 'comparisonTable',
            data: {
                caption: 'Examples of systematic nomenclature',
                headers: ['Formula', 'Oxidation Number of Key Element', 'Systematic Name', 'Common Name'],
                rows: [
                    ['Cu₂O', 'Cu is +1', 'Copper(I) oxide', 'Cuprous oxide'],
                    ['CuO', 'Cu is +2', 'Copper(II) oxide', 'Cupric oxide'],
                    ['K₂SO₄', 'S is +6', 'Potassium sulfate(VI)', 'Potassium sulfate'],
                    ['K₂SO₃', 'S is +4', 'Potassium sulfate(IV)', 'Potassium sulfite'],
                    ['NaClO₃', 'Cl is +5', 'Sodium chlorate(V)', 'Sodium chlorate']
                ]
            },
            terms: ['Systematic name']
        },
        {
            id: 'callout-formula-names',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Deducing Formulae from Systematic Names',
                text: '<strong>Example: Iron(III) sulfate</strong><br/>• The name tells us iron has an oxidation number of +3 (so the ion is Fe³⁺).<br/>• Sulfate is an SO₄²⁻ ion with a generic charge of –2.<br/>• To balance the overall charge to 0, we need the lowest common multiple of 3 and 2, which is 6.<br/>• We need two Fe³⁺ ions (to get +6) and three SO₄²⁻ ions (to get –6).<br/>• Therefore, the formula is <strong>Fe₂(SO₄)₃</strong>.'
            },
            terms: []
        },
        {
            id: 'callout-fractional',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Fractional Oxidation Numbers',
                text: 'Occasionally, an element can have a fractional average oxidation number. This happens when the compound contains multiple atoms of the same element in <i>different</i> oxidation states.<br/><br/><strong>Past Paper Example: Tetrathionate ion, S₄O₆²⁻</strong><br/>• Oxygen is always –2. Total for 6 O atoms = –12.<br/>• Overall ion charge = –2.<br/>• Total charge from 4 Sulfur atoms must be +10 (since +10 – 12 = –2).<br/>• Average oxidation number of S = +10 / 4 = <strong>+2.5</strong>.<br/>This simply means the four sulfur atoms do not all have the exact same oxidation state, but +2.5 describes the overall average.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-rules', prompt: 'What is the sum of the oxidation numbers of all atoms in the dichromate(VI) ion, Cr₂O₇²⁻ ?' },
            { id: 'c2', blockId: 'list-rules', prompt: 'State the oxidation number of oxygen in H₂O₂.' },
            { id: 'c3', blockId: 'callout-polyatomic', prompt: 'Calculate the oxidation state of Chlorine in the ClO₄⁻ ion.' },
            { id: 'c4', blockId: 'callout-identifying', prompt: 'If the oxidation number of sulfur changes from +4 to +6, has it been oxidised or reduced?' },
            { id: 'c5', blockId: 'callout-formula-names', prompt: 'Use logic and charges to write the formula for Iron(III) sulfate.' },
            { id: 'c6', blockId: 'callout-fractional', prompt: 'Calculate the average oxidation number of sulfur in the tetrathionate ion, S₄O₆²⁻.' }
        ],
        summaryText: 'Oxidation numbers track electron distribution. Uncombined elements = 0. In compounds: Group 1 = +1, Group 2 = +2, F = –1, O = usually –2 (–1 in peroxides), H = usually +1 (–1 in hydrides). Sum of oxidation numbers = overall neutral charge. Increase in oxidation number = oxidation; decrease = reduction. Roman numerals are used in systematic names to indicate the oxidation state of elements with variable states. Fractional oxidation numbers (like +2.5 in S₄O₆²⁻) represent an average state for multiple atoms of the same element.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_1;
