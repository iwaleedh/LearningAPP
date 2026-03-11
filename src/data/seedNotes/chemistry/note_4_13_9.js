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