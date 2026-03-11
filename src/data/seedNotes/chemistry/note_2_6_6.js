/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 6
 * "Mean bond enthalpies"
 * Source: Pearson Edexcel IAL Chemistry — Section 6D
 */
export const note_chemistry_2_6_6 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Define mean bond enthalpy and use mean bond enthalpies to calculate the enthalpy change of a reaction. Understand why these calculations represent approximate values.' },
            terms: []
        },
        {
            id: 'h-bond',
            type: 'heading',
            data: { text: 'Bond Enthalpy (Bond Energy)', level: 2 },
            terms: []
        },
        {
            id: 'callout-bond',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Bond Breaking and Making',
                text: '• <strong>Breaking bonds</strong> requires energy. It is an <strong>endothermic</strong> process (ΔH is positive).<br/>• <strong>Making bonds</strong> releases energy. It is an <strong>exothermic</strong> process (ΔH is negative).<br/><br/>The overall enthalpy change of a reaction is the total energy required to break all reactant bonds MINUS the total energy released when forming all product bonds.'
            },
            terms: ['Bond breaking', 'Bond making']
        },
        {
            id: 'h-mean',
            type: 'heading',
            data: { text: 'Mean Bond Enthalpy', level: 2 },
            terms: []
        },
        {
            id: 'callout-mean',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Bond Enthalpy vs Mean Bond Enthalpy',
                text: '<strong>Bond Dissociation Enthalpy:</strong> The energy required to break <em>one mole</em> of a specific covalent bond in a <em>specific molecule</em> in the gaseous state. For example, H–Cl(g) → H(g) + Cl(g): bond dissociation enthalpy = +432 kJ mol⁻¹.<br/><br/><strong>Why we need Mean Bond Enthalpies:</strong><br/>Consider methane (CH₄). It has four C–H bonds, but each one requires a slightly different energy to break, because each successive removal of a hydrogen atom changes the electronic environment:<br/>• CH₄ → CH₃ + H: requires a different energy than CH₃ → CH₂ + H, and so on<br/>• Total energy to break all 4 C–H bonds in methane = +1662 kJ<br/>• Mean C–H bond enthalpy = 1662 ÷ 4 = <strong>415.5 kJ mol⁻¹</strong><br/><br/>Mean bond enthalpies are also averaged across many <em>different</em> molecules containing that same bond type (e.g. C–H in methane vs ethane vs chloromethane). This is why they are averages, and why calculations using them give only approximate results.<br/><br/><strong>Critical rule: Bond enthalpies only apply to gas-phase species.</strong> All substances must be gaseous for bond enthalpy values to be valid.'
            },
            terms: ['Bond enthalpy', 'Mean bond enthalpy']
        },
        {
            id: 'p-approx',
            type: 'paragraph',
            data: { text: 'Calculations using mean bond enthalpies are always <strong>approximate</strong>. This is because:<br/>1. The actual strength of a bond (like C–H) depends slightly on the specific molecule it is in, whereas tables only provide an average value.<br/>2. Bond enthalpies apply strictly to gases. If a substance in the reaction is a liquid or solid, the calculation will be inaccurate because it ignores the latent heat of vaporization or fusion.' },
            terms: []
        },
        {
            id: 'callout-liquid-correction',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Liquid Products/Reactants: Must Add ΔHvap',
                text: 'Bond enthalpies are only valid for <strong>gaseous</strong> species. If a reaction produces or uses a <strong>liquid</strong> (e.g. H₂O(l) from combustion), you cannot directly apply bond enthalpy values — you must first account for the <strong>enthalpy of vaporisation</strong> (ΔHvap).<br/><br/>For water: ΔHvap(H₂O) = +41 kJ mol⁻¹ (liquid → gas)<br/><br/><strong>Method for CH₄ combustion (product is liquid H₂O):</strong><br/>CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)<br/><br/>Step 1: Work out ΔH as if products were gaseous: break C–H and O=O; make C=O and O–H bonds<br/>Step 2: Add the energy needed to condense H₂O from gas to liquid: −(2 × 41) = −82 kJ mol⁻¹<br/>Step 3: Overall ΔH ≈ −900 kJ mol⁻¹ (experimental value = −890; ~1% error from using mean bond enthalpies)'
            },
            terms: []
        },
        {
            id: 'table-bond-values',
            type: 'comparisonTable',
            data: {
                caption: 'Common Mean Bond Enthalpies (kJ mol⁻¹) — all positive (energy needed to break one mole of bond)',
                headers: ['Bond', 'Mean BDE (kJ mol⁻¹)', 'Bond', 'Mean BDE (kJ mol⁻¹)'],
                rows: [
                    ['C–H', '413', 'H–H', '436'],
                    ['C–C', '347', 'O–H', '464'],
                    ['C=C', '614', 'O=O', '498'],
                    ['C≡C', '839', 'N≡N', '945'],
                    ['C–O', '358', 'H–Cl', '432'],
                    ['C=O (in CO₂)', '805', 'Cl–Cl', '243'],
                    ['C–Cl', '340', 'C–N', '286']
                ]
            },
            terms: []
        },
        {
            id: 'callout-calc',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'How to calculate ΔᵣH from bond enthalpies',
                text: '<strong>Equation: ΔᵣH = ∑(Bonds Broken in Reactants) – ∑(Bonds Made in Products)</strong><br/><br/>Method:<br/>1. Draw out the full displayed structures of all molecules so you don\'t miss any bonds.<br/>2. Add up the energy needed to break every bond in the reactants.<br/>3. Add up the energy released when making every bond in the products.<br/>4. Subtract the "made" total from the "broken" total.'
            },
            terms: []
        },
        {
            id: 'callout-worked',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example: Combustion of Ethanol',
                text: '<strong>Calculate the enthalpy change for the complete combustion of ethanol:</strong><br/>C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O<br/><br/><em>Step 1: Draw out the full display structures.</em><br/>This is critical so you don\'t miss a bond. Ethanol has 5 C-H, 1 C-C, 1 C-O, 1 O-H. Oxygen is 3 lots of O=O.<br/>Carbon dioxide is 2 lots of O=C=O (so 4 C=O bonds in total!). Water is 3 lots of H-O-H (so 6 O-H bonds in total!).<br/><br/><em>Step 2: Calculate bonds broken (Reactants).</em><br/>(5 × 413) + (1 × 347) + (1 × 358) + (1 × 464) + (3 × 498) = <strong>+4733 kJ mol⁻¹</strong><br/><br/><em>Step 3: Calculate bonds made (Products).</em><br/>(4 × 805) + (6 × 464) = <strong>5977 kJ mol⁻¹</strong><br/><br/><em>Step 4: ΔH = Broken - Made.</em><br/>4733 - 5977 = <strong>−1244 kJ mol⁻¹</strong>'
            },
            terms: []
        },
        {
            id: 'callout-atom-calc',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Calculating Formation using Atomization',
                text: 'Sometimes you must calculate an Enthalpy of Formation using bond enthalpies and <strong>enthalpy of atomization</strong> (for solid elements like Carbon that don\'t have bond enthalpies).<br/><br/><strong>Example:</strong> Formation of Butane (4C(s) + 5H₂(g) → C₄H₁₀(g))<br/><strong>Bonds Broken (Reactants):</strong><br/>• Atomize 4 moles of C(s) → 4 × ΔatH(C)<br/>• Break 5 moles of H-H bonds → 5 × E(H-H)<br/><strong>Bonds Made (Products):</strong><br/>• Make 3 C-C bonds in butane → 3 × E(C-C)<br/>• Make 10 C-H bonds in butane → 10 × E(C-H)<br/><strong>ΔfH = ∑(Broken/Atomized) – ∑(Made)</strong>'
            },
            terms: ['Atomization']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-bond', prompt: 'Is bond breaking an exothermic or endothermic process? What about bond making?' },
            { id: 'c2', blockId: 'callout-mean', prompt: 'What is the difference between bond enthalpy and mean bond enthalpy? In what state must the substances be?' },
            { id: 'c3', blockId: 'p-approx', prompt: 'Give two reasons why enthalpy changes calculated from mean bond enthalpies are only approximate values.' },
            { id: 'c4', blockId: 'callout-calc', prompt: 'State the formula for calculating the enthalpy of reaction (ΔᵣH) using mean bond enthalpies.' },
            { id: 'c4b', blockId: 'callout-worked', prompt: 'When calculating the enthalpy of combustion for a molecule like Ethanol using bond enthalpies, why is it critical to draw out the full display structure of CO₂ and H₂O?' },
            { id: 'c5', blockId: 'callout-atom-calc', prompt: 'Explain how enthalpy of atomization is used alongside bond enthalpies to calculate the standard enthalpy of formation of an alkane (e.g. butane).' }
        ],
        summaryText: 'Bond breaking is endothermic (+); bond making is exothermic (–). Mean bond enthalpy is averaged across many environments (in gas phase). ΔᵣH = Σ(Broken) – Σ(Made). Results are approximate due to averages and ignoring phase changes. When finding ΔfH of organic molecules, use atomization energy for solid carbon plus bond enthalpies for everything else.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_6;
