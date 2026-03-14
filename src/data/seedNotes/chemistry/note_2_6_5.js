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
            id: 'svg-hess-cycle',
            type: 'svg',
            data: {
                svg: '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><defs><marker id="hess-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,1 8,4 0,7" fill="#6366f1"/></marker><marker id="hess-b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,1 8,4 0,7" fill="#0ea5e9"/></marker></defs><text x="210" y="12" text-anchor="middle" fill="#374151" font-size="11" font-weight="bold">Hess\'s Law — Two Routes, Same Enthalpy Change</text><rect x="28" y="18" width="108" height="36" rx="5" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/><text x="82" y="34" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="11">Reactants</text><text x="82" y="48" text-anchor="middle" fill="#1d4ed8" font-size="10">(A)</text><rect x="286" y="18" width="108" height="36" rx="5" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/><text x="340" y="34" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">Products</text><text x="340" y="48" text-anchor="middle" fill="#15803d" font-size="10">(B)</text><rect x="160" y="152" width="100" height="38" rx="5" fill="#fdf4ff" stroke="#d8b4fe" stroke-width="1.5"/><text x="210" y="168" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="11">Shared</text><text x="210" y="182" text-anchor="middle" fill="#7c3aed" font-size="10">intermediates (C)</text><line x1="138" y1="36" x2="284" y2="36" stroke="#6366f1" stroke-width="2" marker-end="url(#hess-a)"/><text x="211" y="30" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="bold">\u0394H = ? (Route 1, direct)</text><line x1="96" y1="54" x2="188" y2="150" stroke="#0ea5e9" stroke-width="2" marker-end="url(#hess-b)"/><text x="120" y="108" text-anchor="middle" fill="#0ea5e9" font-size="11" font-weight="bold" transform="rotate(44,120,108)">\u0394H\u2082</text><line x1="234" y1="152" x2="328" y2="56" stroke="#0ea5e9" stroke-width="2" marker-end="url(#hess-a)"/><text x="300" y="108" text-anchor="middle" fill="#0ea5e9" font-size="11" font-weight="bold" transform="rotate(-44,300,108)">\u0394H\u2083</text><text x="210" y="104" text-anchor="middle" fill="#6b7280" font-size="10" font-style="italic">Route 2 (indirect)</text><rect x="56" y="199" width="308" height="18" rx="3" fill="#f0fdf4" stroke="#86efac"/><text x="210" y="212" text-anchor="middle" fill="#15803d" font-size="11" font-weight="bold">By Hess\'s Law: \u0394H = \u0394H\u2082 + \u0394H\u2083</text></svg>',
                caption: 'Hess\'s Law cycle: the direct route (A → B, ΔH) gives the same enthalpy change as the indirect route via shared intermediates C (ΔH₂ + ΔH₃). This works because energy is conserved — if it were not true, you could create energy from nothing.'
            },
            terms: []
        },
        {
            id: 'callout-benzene',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Classic Hess\'s Law Example: Formation of Benzene (C₆H₆)',
                text: 'The standard enthalpy of formation of benzene <strong>cannot be measured directly</strong> — carbon and hydrogen do not react under standard conditions to give benzene.<br/><br/>Instead, we use combustion data and a Hess\'s Law cycle:<br/><br/>From combustion data: ΔcH⦵ / kJ mol⁻¹<br/>• C(s): −394   • H₂(g): −286   • C₆H₆(l): −3267<br/><br/>Formation equation: 6C(s) + 3H₂(g) → C₆H₆(l)<br/><br/>Using ΔfH⦵ = ΣΔcH⦵(reactants) − ΔcH⦵(product):<br/>ΔfH⦵ = 6(−394) + 3(−286) − (−3267)<br/>= −2364 − 858 + 3267 = <strong>+45 kJ mol⁻¹</strong><br/><br/>Note: accurate values give +49 kJ mol⁻¹. The small difference arises from rounding errors — multiplying by 6 and 3 amplifies the error. Always use given values without rounding intermediate answers.'
            },
            terms: []
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
