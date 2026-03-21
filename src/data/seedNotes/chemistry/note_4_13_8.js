export const note_chemistry_4_13_8 = {
    blocks: [
        {
            id: 'obj-ksp-calc',
            type: 'objective',
            data: {
                text: 'Perform calculations involving solubility products, including calculating Ksp from solubility and calculating solubility from Ksp.'
            }
        },
        {
            id: 'h-solubility-to-ksp',
            type: 'heading',
            data: {
                text: 'Calculating Solubility Products from Solubilities',
                level: 2
            }
        },
        {
            id: 'p-solubility-units',
            type: 'paragraph',
            data: {
                text: 'To calculate a solubility product, you must use the solubility in <strong>mol dm⁻³</strong>. If you are given the solubility in g dm⁻³, you must first divide it by the molar mass (Mᵣ) of the compound to convert it to mol dm⁻³.'
            }
        },
        {
            id: 'callout-1-to-1-ratio',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example 1: 1:1 Ratio (Barium Sulphate)',
                text: 'The solubility of barium sulphate (BaSO₄) at 298 K is 1.05 × 10⁻⁵ mol dm⁻³. Calculate the solubility product.<br/><br/><strong>1. Write the equilibrium:</strong><br/>BaSO₄(s) ⇌ Ba²⁺(aq) + SO₄²⁻(aq)<br/><br/><strong>2. Deduce ion concentrations:</strong><br/>Since 1 mole of BaSO₄ produces 1 mole of Ba²⁺ and 1 mole of SO₄²⁻:<br/>[Ba²⁺] = 1.05 × 10⁻⁵ mol dm⁻³<br/>[SO₄²⁻] = 1.05 × 10⁻⁵ mol dm⁻³<br/><br/><strong>3. Calculate Ksp:</strong><br/>K<sub>sp</sub> = [Ba²⁺][SO₄²⁻]<br/>K<sub>sp</sub> = (1.05 × 10⁻⁵) × (1.05 × 10⁻⁵) = <strong>1.10 × 10⁻¹⁰ mol² dm⁻⁶</strong>'
            }
        },
        {
            id: 'callout-1-to-2-ratio',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example 2: 1:2 Ratio (Magnesium Hydroxide)',
                text: 'The solubility of magnesium hydroxide (Mg(OH)₂) at 298 K is 1.71 × 10⁻⁴ mol dm⁻³. Calculate the solubility product.<br/><br/><strong>1. Write the equilibrium:</strong><br/>Mg(OH)₂(s) ⇌ Mg²⁺(aq) + 2OH⁻(aq)<br/><br/><strong>2. Deduce ion concentrations:</strong><br/>For every 1 mole of Mg(OH)₂ that dissolves, 1 mole of Mg²⁺ and <strong>2 moles</strong> of OH⁻ are produced.<br/>[Mg²⁺] = 1.71 × 10⁻⁴ mol dm⁻³<br/>[OH⁻] = 2 × (1.71 × 10⁻⁴) = 3.42 × 10⁻⁴ mol dm⁻³<br/><br/><strong>3. Calculate Ksp:</strong><br/>K<sub>sp</sub> = [Mg²⁺][OH⁻]²<br/>K<sub>sp</sub> = (1.71 × 10⁻⁴) × (3.42 × 10⁻⁴)²<br/>K<sub>sp</sub> = (1.71 × 10⁻⁴) × (1.17 × 10⁻⁷) = <strong>2.00 × 10⁻¹¹ mol³ dm⁻⁹</strong>'
            }
        },
        {
            id: 'callout-ksp-calc-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Calculator Use Check',
                text: 'When calculating squares or cubes of scientific notation values (like (3.42 × 10⁻⁴)²), ensure you use the <strong>EXP</strong> or <strong>×10ˣ</strong> button correctly on your calculator, and ideally wrap the value in brackets to avoid order-of-operation errors.'
            }
        },
        {
            id: 'h-ksp-to-solubility',
            type: 'heading',
            data: {
                text: 'Calculating Solubilities from Solubility Products',
                level: 2
            }
        },
        {
            id: 'p-ksp-to-solubility',
            type: 'paragraph',
            data: {
                text: 'To reverse the calculation, you assign an algebraic unknown (often <strong>s</strong>) to represent the solubility in mol dm⁻³. You then express the concentrations of all ions in terms of <strong>s</strong>.'
            }
        },
        {
            id: 'callout-reverse-MgOH2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Finding Solubility from Ksp',
                text: 'If the solubility product of Mg(OH)₂ is 2.00 × 10⁻¹¹ mol³ dm⁻⁹ at 298 K, calculate its solubility in mol dm⁻³.<br/><br/><strong>1. Assign unknown solubility:</strong><br/>Let solubility = <strong>s</strong> mol dm⁻³.<br/><br/><strong>2. Express ion concentrations in terms of s:</strong><br/>Mg(OH)₂(s) ⇌ Mg²⁺(aq) + 2OH⁻(aq)<br/>[Mg²⁺] = <strong>s</strong><br/>[OH⁻] = <strong>2s</strong><br/><br/><strong>3. Substitute into Ksp expression and solve for s:</strong><br/>K<sub>sp</sub> = [Mg²⁺][OH⁻]²<br/>2.00 × 10⁻¹¹ = (s) × (2s)²<br/>2.00 × 10⁻¹¹ = (s) × (4s²)<br/>2.00 × 10⁻¹¹ = 4s³<br/>s³ = 5.00 × 10⁻¹²<br/>s = ∛(5.00 × 10⁻¹²) = <strong>1.71 × 10⁻⁴ mol dm⁻³</strong>'
            }
        },
        {
            id: 'summary-ksp-calcs',
            type: 'summary',
            data: {
                text: 'When calculating Ksp from solubility, remember to multiply the solubility by the stoichiometric coefficients to find the concentration of each specific ion. For reverse calculations (finding solubility from Ksp), use an algebraic variable "s". For an AB₂ molecule, the Ksp expression comes out to exactly 4s³.'
            }
        },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Unit Conversion Essential",
        text: "Solubility MUST be converted to mol dm\u207b\u00b3 before calculating Ksp. If given in g dm\u207b\u00b3, divide by molar mass first. Calculator error with scientific notation when squaring (3.42 \u00d7 10\u207b\u2074)\u00b2 \u2014 always use brackets."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Reverse Ksp Calculations: 's' Variable Setup",
        text: "Let solubility = s mol dm\u207b\u00b3. For Mg(OH)\u2082, [Mg\u00b2\u207a] = s, [OH\u207b] = 2s. Substitute into Ksp = [Mg\u00b2\u207a][OH\u207b]\u00b2 = s(2s)\u00b2 = 4s\u00b3. Master this algebra \u2014 it appears frequently in exams."
      }
    }
    ],
    recall: {
        enabled: true,
        cues: [
            {
                id: 'cue-1',
                blockId: 'p-solubility-units',
                prompt: 'What unit must solubility be in before calculating Ksp, and how do you convert from g dm⁻³ to it?'
            },
            {
                id: 'cue-2',
                blockId: 'callout-1-to-2-ratio',
                prompt: 'If the solubility of Mg(OH)₂ is 1.0 × 10⁻⁴ mol dm⁻³, what is the concentration of hydroxide ions [OH⁻] in the saturated solution?'
            },
            {
                id: 'cue-3',
                blockId: 'callout-reverse-MgOH2',
                prompt: 'If solving for solubility "s" given Ksp for a 1:2 generic compound like AB₂, what is the expanded formula for Ksp in terms of "s"?'
            }
        ],
        summaryText: 'Solubility must be in mol dm⁻³ (divide g dm⁻³ by Mᵣ). For Mg(OH)₂, [OH⁻] is twice the solubility because of the 1:2 ratio. When working backward, an AB₂ compound like Mg(OH)₂ yields the algebraic equation Ksp = 4s³.',
        ready: true
    },
    evidence: []
};