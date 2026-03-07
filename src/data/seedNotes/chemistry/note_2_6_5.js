/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 5
 * "Hess's Law and enthalpy cycles"
 * Source: Pearson Edexcel IAL Chemistry — Section 6C
 */
export const note_chemistry_2_6_5 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand and apply Hess\'s Law to construct enthalpy cycles and calculate enthalpy changes that cannot be measured directly.' },
            terms: []
        },
        {
            id: 'h-hess',
            type: 'heading',
            data: { text: 'Hess\'s Law', level: 2 },
            terms: []
        },
        {
            id: 'callout-hess',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Definition: Hess\'s Law',
                text: 'Hess\'s Law states that the <strong>total enthalpy change</strong> of a reaction is <strong>independent of the route taken</strong> from reactants to products, provided the initial and final conditions are the same.<br/><br/>This is a direct application of the First Law of Thermodynamics (Conservation of Energy).'
            },
            terms: ['Hess\'s Law']
        },
        {
            id: 'h-cycles',
            type: 'heading',
            data: { text: 'Enthalpy Cycles', level: 2 },
            terms: []
        },
        {
            id: 'p-cycles',
            type: 'paragraph',
            data: { text: 'We use Hess\'s Law to calculate enthalpy changes that are impossible to measure directly in a lab (e.g. standard enthalpy of formation of a hydrocarbon, because carbon and hydrogen don\'t react directly under standard conditions). We construct an "enthalpy cycle" (a Hess cycle) linking the direct route to an indirect route.' },
            terms: []
        },
        {
            id: 'h-formation-data',
            type: 'heading',
            data: { text: 'Using Enthalpy of Formation Data', level: 3 },
            terms: []
        },
        {
            id: 'callout-formation',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Cycle using ΔfH data',
                text: 'If you are given <strong>Formation</strong> data for all reactants and products:<br/>1. Put the ELEMENTS at the bottom of the cycle.<br/>2. Draw arrows pointing UP from the elements to the Reactants, and UP from the elements to the Products.<br/>3. The route equation is:<br/><strong>ΔᵣH = ∑ΔfH(Products) – ∑ΔfH(Reactants)</strong>'
            },
            terms: []
        },
        {
            id: 'h-combustion-data',
            type: 'heading',
            data: { text: 'Using Enthalpy of Combustion Data', level: 3 },
            terms: []
        },
        {
            id: 'callout-combustion',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Cycle using ΔcH data',
                text: 'If you are given <strong>Combustion</strong> data for all reactants and products:<br/>1. Put the COMBUSTION PRODUCTS (usually CO₂ and H₂O) at the bottom of the cycle.<br/>2. Draw arrows pointing DOWN from the Reactants to the combustion products, and DOWN from the Products to the combustion products.<br/>3. The route equation is:<br/><strong>ΔᵣH = ∑ΔcH(Reactants) – ∑ΔcH(Products)</strong>'
            },
            terms: []
        },
        {
            id: 'h-examples',
            type: 'heading',
            data: { text: 'Applying Hess\'s Law: Examples', level: 2 },
            terms: []
        },
        {
            id: 'callout-decomp',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Thermal Decomposition',
                text: '<strong>Target: CaCO₃(s) → CaO(s) + CO₂(g)</strong><br/><br/>If given the enthalpy of reaction for both CaCO₃ and CaO reacting with HCl(aq):<br/>1. Place the common products (CaCl₂(aq) + H₂O(l) + CO₂(g)) at the bottom of the cycle.<br/>2. Draw arrows pointing DOWN from CaCO₃(s) and DOWN from CaO(s) (note: CO₂ is already formed, so it just carries over).<br/>3. ΔᵣH = ΔH(reaction of CaCO₃) – ΔH(reaction of CaO).'
            },
            terms: []
        },
        {
            id: 'callout-hydration',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Enthalpy of Hydration',
                text: '<strong>Target: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s)</strong><br/><br/>If given the enthalpy of solution (dissolving in water) for both the anhydrous and hydrated salts:<br/>1. Place the common dissolved ions (Cu²⁺(aq) + SO₄²⁻(aq)) at the bottom of the cycle.<br/>2. Draw arrows pointing DOWN from the anhydrous reactants and DOWN from the hydrated product.<br/>3. ΔᵣH = ΔH(solution of anhydrous) – ΔH(solution of hydrated).'
            },
            terms: []
        },
        {
            id: 'callout-formation-from-combustion',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Calculating ΔfH from ΔcH Data',
                text: '<strong>Target: 3C(s) + 4H₂(g) + ½O₂(g) → C₃H₇OH(l) (Formation of propan-1-ol)</strong><br/><br/>If given combustion data for C, H₂, and propan-1-ol:<br/>1. Place the combustion products (3CO₂(g) + 4H₂O(l)) at the bottom.<br/>2. Draw an arrow DOWN from the elements (combusting 3 moles of C and 4 moles of H₂).<br/>3. Draw an arrow DOWN from propan-1-ol.<br/>4. ΔfH = [3 × ΔcH(C) + 4 × ΔcH(H₂)] – [ΔcH(propan-1-ol)].'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-hess', prompt: 'State Hess\'s Law.' },
            { id: 'c2', blockId: 'p-cycles', prompt: 'Why is Hess\'s Law useful in chemistry?' },
            { id: 'c3', blockId: 'callout-formation', prompt: 'State the formula for calculating the enthalpy of reaction (ΔᵣH) when given enthalpy of FORMATION data for reactants and products.' },
            { id: 'c4', blockId: 'callout-combustion', prompt: 'State the formula for calculating the enthalpy of reaction (ΔᵣH) when given enthalpy of COMBUSTION data for reactants and products.' },
            { id: 'c5', blockId: 'callout-decomp', prompt: 'Describe how a Hess cycle is constructed to find the enthalpy of thermal decomposition of CaCO₃ using its reaction with HCl.' }
        ],
        summaryText: 'Hess\'s Law: total enthalpy change is independent of the route. Useful for impossible direct reactions (e.g. hydration, decomposition, formation of large carbons). Formation cycle: elements at bottom (arrows UP), ΔH = Σ(Prod) – Σ(React). Combustion cycle: oxides at bottom (arrows DOWN), ΔH = Σ(React) – Σ(Prod). Hydration/Decomp cycles use common products (dissolved ions or reaction with acid) at the bottom.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_5;
