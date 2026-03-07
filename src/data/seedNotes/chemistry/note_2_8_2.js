/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 2
 * "Constructing ionic equations and Disproportionation"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8A.1, 8A.5
 */
export const note_chemistry_2_8_2 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand that disproportionation involves simultaneous oxidation and reduction of the same element, and construct full ionic equations by combining half-equations.' },
            terms: []
        },
        {
            id: 'h-disproportionation',
            type: 'heading',
            data: { text: 'Disproportionation', level: 2 },
            terms: []
        },
        {
            id: 'callout-disproportionation',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Disproportionation Reactions',
                text: 'A <strong>disproportionation</strong> reaction is a specific type of redox reaction where an element in a single species is <strong>simultaneously oxidised and reduced</strong>.<br/><br/><strong>Example 1: Chlorine in water</strong><br/>Cl₂ + H₂O ⇌ HCl + HClO<br/>• Oxidation number of Cl in Cl₂ is 0.<br/>• Oxidation number of Cl in HCl is –1 (Reduction).<br/>• Oxidation number of Cl in HClO is +1 (Oxidation).<br/><br/><strong>Example 2: Copper(I) ions</strong><br/>Cu₂O + H₂SO₄ → CuSO₄ + Cu + H₂O<br/>In terms of copper species:<br/>2Cu⁺ → Cu²⁺ + Cu<br/>• One Cu⁺ is oxidised to Cu²⁺ (loses 1 electron).<br/>• One Cu⁺ is reduced to Cu (gains 1 electron).'
            },
            terms: ['Disproportionation']
        },
        {
            id: 'h-combining',
            type: 'heading',
            data: { text: 'Constructing Full Ionic Equations', level: 2 },
            terms: []
        },
        {
            id: 'p-combining',
            type: 'paragraph',
            data: { text: 'To construct a full redox equation from two half-equations, you must ensure that the number of electrons lost in the oxidation half-equation exactly equals the number of electrons gained in the reduction half-equation. Electrons must cancel out in the final ionic equation.' },
            terms: ['Ionic equation']
        },
        {
            id: 'callout-steps',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Steps for combining half-equations',
                text: 'Combine these half-equations for the reaction of Fe²⁺ with MnO₄⁻ in acidic conditions:<br/><br/>1. <strong>Oxidation:</strong> Fe²⁺ → Fe³⁺ + e⁻<br/>2. <strong>Reduction:</strong> MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O<br/><br/><strong>Step A: Equalise electrons.</strong> Multiply the oxidation equation by 5.<br/>5Fe²⁺ → 5Fe³⁺ + 5e⁻<br/><br/><strong>Step B: Add them together.</strong> Gather all reactants on the left, all products on the right.<br/>MnO₄⁻ + 8H⁺ + 5Fe²⁺ + 5e⁻ → Mn²⁺ + 4H₂O + 5Fe³⁺ + 5e⁻<br/><br/><strong>Step C: Cancel out electrons (and any other common species like H⁺ or H₂O if they appear on both sides).</strong><br/>MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O<br/><br/><strong>Step D: Check.</strong> Ensure both total atoms and total charges match on both sides.'
            },
            terms: []
        },
        {
            id: 'h-balancing-on',
            type: 'heading',
            data: { text: 'Balancing Equations Using Oxidation Numbers', level: 2 },
            terms: []
        },
        {
            id: 'p-balancing-on',
            type: 'paragraph',
            data: { text: 'You can also balance full redox equations directly without half-equations by equalising the total change in oxidation numbers.' },
            terms: []
        },
        {
            id: 'callout-balancing-on',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Balancing with Oxidation Numbers',
                text: 'Balance this skeleton equation:<br/>SO₂ + Ag⁺ + H₂O → SO₄²⁻ + Ag + H⁺<br/><br/><strong>Step 1: Identify all oxidation states and find the changes.</strong><br/>• Sulfur (in SO₂): +4 → Sulfur (in SO₄²⁻): +6. Change is <strong>+2</strong> (loss of 2 electrons).<br/>• Silver (Ag⁺): +1 → Silver (Ag): 0. Change is <strong>–1</strong> (gain of 1 electron).<br/><br/><strong>Step 2: Balance the electron transfer.</strong><br/>To balance the 2e⁻ lost by sulfur, we need 2e⁻ gained by silver. Therefore, multiply the Ag and Ag⁺ species by <strong>2</strong>.<br/>SO₂ + 2Ag⁺ + H₂O → SO₄²⁻ + 2Ag + H⁺<br/><br/><strong>Step 3: Balance remaining atoms (usually O and H) by inspection.</strong><br/>• We have 2 Oxygen on the left (SO₂) and 4 on the right (SO₄²⁻). Add 2 H₂O on the left: SO₂ + 2H₂O<br/>• Now we have 4 Hydrogen on the left. Add 4 H⁺ on the right.<br/><strong>Final Equation:</strong> SO₂ + 2Ag⁺ + 2H₂O → SO₄²⁻ + 2Ag + 4H⁺'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-disproportionation', prompt: 'Define a disproportionation reaction.' },
            { id: 'c2', blockId: 'callout-disproportionation', prompt: 'Show how the reaction 2Cu⁺ → Cu²⁺ + Cu represents disproportionation.' },
            { id: 'c3', blockId: 'callout-steps', prompt: 'What is the most crucial step before adding two half-equations together to form a full standard ionic redox equation?' },
            { id: 'c4', blockId: 'callout-steps', prompt: 'In a full balanced ionic equation, what should be cancelled out from both sides?' },
            { id: 'c5', blockId: 'callout-balancing-on', prompt: 'If substance A oxidises by +2 and substance B reduces by –1, what ratio must they react in?' }
        ],
        summaryText: 'Disproportionation is when the same element in a single substance is simultaneously oxidised and reduced (e.g., Cl₂ forming Cl⁻ and ClO⁻ or Cu⁺ forming Cu²⁺ and Cu). To combine half-equations into a full ionic equation, multiply the half-equations so the number of electrons lost equals electrons gained, then add the equations and cancel out the electrons. To balance full equations directly, equalise the total change in oxidation numbers, then balance hydrogens and oxygens.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_2;
