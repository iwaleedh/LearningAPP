export const note_chemistry_4_13_9 = {
    blocks: [
        {
            id: 'obj-common-ion-ksp',
            type: 'objective',
            data: {
                text: 'Understand the common ion effect in relation to solubility products, and perform calculations demonstrating how solubility decreases when a common ion is present.'
            }
        },
        {
            id: 'h-what-is-common-ion',
            type: 'heading',
            data: {
                text: 'What is the Common Ion Effect?',
                level: 2
            }
        },
        {
            id: 'p-definition-common-ion',
            type: 'paragraph',
            data: {
                text: 'The common ion effect describes the reduction in solubility of a sparingly soluble salt when it is dissolved in a solution that already contains one of its constituent ions (the "common ion").'
            }
        },
        {
            id: 'callout-le-chatelier',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Le Chatelier’s Principle and Solubility',
                text: 'Consider the equilibrium for lead(II) chloride:<br/><br/>PbCl₂(s) ⇌ Pb²⁺(aq) + 2Cl⁻(aq)<br/><br/>If you add sodium chloride (NaCl) to this saturated solution, you are adding extra Cl⁻ ions. According to Le Chatelier\'s principle, the equilibrium will shift to the left to oppose the increase in [Cl⁻], forming more solid PbCl₂. Thus, the solubility of PbCl₂ decreases.'
            }
        },
        {
            id: 'h-common-ion-calc',
            type: 'heading',
            data: {
                text: 'Calculations Involving the Common Ion Effect',
                level: 2
            }
        },
        {
            id: 'p-calc-assumption',
            type: 'paragraph',
            data: {
                text: 'In extreme dilution or sparingly soluble salts, the amount of the common ion coming from the dissolving solid is minuscule compared to the amount already present from the fully soluble added salt. Therefore, we assume the concentration of the common ion is entirely equal to the concentration of the added soluble salt.'
            }
        },
        {
            id: 'callout-worked-pbcl2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example Calculation',
                text: 'The Ksp of PbCl₂ is 1.70 × 10⁻⁵ mol³ dm⁻⁹ at 298 K. Calculate the solubility of PbCl₂ in a 0.100 mol dm⁻³ solution of NaCl.<br/><br/><strong>1. Write the equilibrium and Ksp expression:</strong><br/>PbCl₂(s) ⇌ Pb²⁺(aq) + 2Cl⁻(aq)<br/>K<sub>sp</sub> = [Pb²⁺][Cl⁻]²<br/><br/><strong>2. Establish concentrations using the common ion assumption:</strong><br/>Let the solubility = s mol dm⁻³.<br/>[Pb²⁺] = s<br/>The Cl⁻ comes almost entirely from the 0.100 mol dm⁻³ NaCl.<br/>[Cl⁻] ≈ 0.100 mol dm⁻³<br/><br/><strong>3. Substitute and solve for s:</strong><br/>1.70 × 10⁻⁵ = (s) × (0.100)²<br/>1.70 × 10⁻⁵ = (s) × 0.0100<br/>s = (1.70 × 10⁻⁵) / 0.0100 = <strong>1.70 × 10⁻³ mol dm⁻³</strong><br/><br/><em>Note: The solubility in pure water would be ~1.62 × 10⁻² mol dm⁻³. The common ion has reduced its solubility by a factor of nearly 10.</em>'
            }
        },
        {
            id: 'callout-math-simplification',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Why the assumption is made',
                text: 'Technically, [Cl⁻] = 0.100 + 2s. However, because s is so small, 0.100 + 2s ≈ 0.100. If you did not make this assumption, you would have to expand a cubic equation: (s)(0.100 + 2s)², which is beyond the scope of A-Level mathematics.'
            }
        },
        {
            id: 'summary-common-ion',
            type: 'summary',
            data: {
                text: 'The common ion effect reduces the solubility of sparingly soluble salts. This is driven by Le Chatelier\'s principle shifting the equilibrium to the solid side. In calculations, assume the concentration of the common ion is entirely determined by the major soluble compound.'
            }
        },
        {
            id: 'svg-equilibrium-constants',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 430" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">EQUILIBRIUM CONSTANTS COMPARISON</text><!-- Three columns --><rect x="10" y="32" width="214" height="364" rx="10" fill="rgba(52,211,153,0.1)" stroke="#34d399" stroke-width="1.5"/><text x="117" y="54" text-anchor="middle" font-size="12" fill="#34d399" font-weight="800">Kc</text><text x="117" y="70" text-anchor="middle" font-size="9" fill="#065f46">Concentration-based</text><text x="117" y="84" text-anchor="middle" font-size="8.5" fill="#065f46">A(g) + B(g) ⇌ C(g)</text><rect x="22" y="92" width="190" height="36" rx="6" fill="rgba(52,211,153,0.2)" stroke="#34d399" stroke-width="1"/><text x="117" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="#1e293b">Kc = [C] / ([A][B])</text><text x="117" y="121" text-anchor="middle" font-size="8" fill="#065f46">units: mol dm⁻³ (depends on powers)</text><text x="22" y="143" font-size="8.5" fill="#065f46">• Square brackets = concentration</text><text x="22" y="157" font-size="8.5" fill="#065f46">• Pure liquids and solids omitted</text><text x="22" y="171" font-size="8.5" fill="#065f46">• Use mol dm⁻³ units</text><text x="22" y="185" font-size="8.5" fill="#065f46">• Calculate using ICE table</text><text x="22" y="200" font-size="8.5" fill="#065f46">• Temperature ONLY changes Kc</text><text x="22" y="215" font-size="8.5" fill="#065f46">• Example: N₂+3H₂ ⇌ 2NH₃</text><text x="22" y="229" font-size="9" fill="#1e293b" font-weight="700">Kc = [NH₃]²/([N₂][H₂]³)</text><rect x="244" y="32" width="214" height="364" rx="10" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" stroke-width="1.5"/><text x="351" y="54" text-anchor="middle" font-size="12" fill="#60a5fa" font-weight="800">Kp</text><text x="351" y="70" text-anchor="middle" font-size="9" fill="#1e3a8a">Partial pressure-based (gases only)</text><text x="351" y="84" text-anchor="middle" font-size="8.5" fill="#1250a0">A(g) + B(g) ⇌ C(g)</text><rect x="256" y="92" width="190" height="36" rx="6" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1"/><text x="351" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="#1e293b">Kp = p(C) / (p(A)×p(B))</text><text x="351" y="121" text-anchor="middle" font-size="8" fill="#1e3a8a">units: Pa or atm (depends on powers)</text><text x="256" y="143" font-size="8.5" fill="#1e3a8a">• p = partial pressure = mole fraction × P</text><text x="256" y="157" font-size="8.5" fill="#1e3a8a">• Mole fraction: x = n/n_total</text><text x="256" y="171" font-size="8.5" fill="#1e3a8a">• p = x × P_total</text><text x="256" y="185" font-size="8.5" fill="#1e3a8a">• Only gases contribute to Kp</text><text x="256" y="200" font-size="8.5" fill="#1e3a8a">• Kp = Kc × (RT)^Δn (Δn = moles gas)</text><text x="256" y="215" font-size="8.5" fill="#1e3a8a">• If Δn=0: Kp = Kc</text><text x="256" y="229" font-size="9" fill="#1e293b" font-weight="700">Kp = p(NH₃)²/(p(N₂)×p(H₂)³)</text><rect x="478" y="32" width="214" height="364" rx="10" fill="rgba(251,146,60,0.1)" stroke="#fb923c" stroke-width="1.5"/><text x="585" y="54" text-anchor="middle" font-size="12" fill="#fb923c" font-weight="800">Ksp</text><text x="585" y="70" text-anchor="middle" font-size="9" fill="#532407">Solubility product</text><text x="585" y="84" text-anchor="middle" font-size="8.5" fill="#78350f">AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</text><rect x="490" y="92" width="190" height="36" rx="6" fill="rgba(251,146,60,0.2)" stroke="#fb923c" stroke-width="1"/><text x="585" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="#1e293b">Ksp = [Ag⁺][Cl⁻]</text><text x="585" y="121" text-anchor="middle" font-size="8" fill="#532407">units: mol² dm⁻⁶ (for 1:1 electrolyte)</text><text x="490" y="143" font-size="8.5" fill="#532407">• Solid never included (activity = 1)</text><text x="490" y="157" font-size="8.5" fill="#532407">• Only applies to SPARINGLY soluble</text><text x="490" y="171" font-size="8.5" fill="#532407">• If [Ag⁺][Cl⁻] &gt; Ksp → precipitate forms</text><text x="490" y="185" font-size="8.5" fill="#532407">• Common ion effect: add Cl⁻ → ppt</text><text x="490" y="200" font-size="8.5" fill="#532407">• AgCl: Ksp = s² (s = solubility)</text><text x="490" y="215" font-size="8.5" fill="#532407">• Ag₂CrO₄: Ksp = (2s)²×s = 4s³</text><!-- K magnitude guide --><rect x="10" y="404" width="680" height="22" rx="6" fill="rgba(99,102,241,0.2)" stroke="#818cf8" stroke-width="1"/><text x="350" y="419" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">K &gt;&gt; 1: products favoured (right). K &lt;&lt; 1: reactants favoured (left). K ≈ 1: mixture at equilibrium. K ONLY changes with Temperature.</text><!-- Bottom: Interpreting K --><rect x="10" y="398" width="680" height="0" rx="8" fill="rgba(99,102,241,0.12)"/></svg>',
                caption: 'Equilibrium Constants — Kc uses concentration, Kp uses partial pressure (gases only), Ksp is for sparingly soluble salts. All three only change with temperature. A larger K means more product at equilibrium.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            {
                id: 'cue-1',
                blockId: 'callout-le-chatelier',
                prompt: 'Use Le Chatelier\'s principle to explain why adding NaCl reduces the solubility of PbCl₂.'
            },
            {
                id: 'cue-2',
                blockId: 'p-calc-assumption',
                prompt: 'What mathematical assumption is made about the concentration of the common ion in Ksp calculations?'
            },
            {
                id: 'cue-3',
                blockId: 'callout-worked-pbcl2',
                prompt: 'In a calculation for PbCl₂ dissolving in 0.10 mol dm⁻³ NaCl, what value is used for [Cl⁻] in the Ksp expression?'
            }
        ],
        summaryText: 'Adding a common ion shifts the dissolution equilibrium left (Le Chatelier), decreasing solubility. In calculations, we assume the concentration of the common ion is completely dominated by the added soluble salt (e.g. [Cl⁻] = 0.10 mol dm⁻³), ignoring the tiny amount from the sparingly soluble salt.',
        ready: true
    },
    evidence: []
};