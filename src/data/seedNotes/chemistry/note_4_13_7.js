export const note_chemistry_4_13_7 = {
    blocks: [
        {
            id: 'obj-ksp',
            type: 'objective',
            data: {
                text: 'Understand the concept of the solubility product (Ksp), write Ksp expressions, derive its units, and apply it to saturated solutions.'
            }
        },
        {
            id: 'h-intro-ksp',
            type: 'heading',
            data: {
                text: 'Introduction to Solubility Products (Ksp)',
                level: 2
            }
        },
        {
            id: 'p-what-is-ksp',
            type: 'paragraph',
            data: {
                text: 'Even so-called "insoluble" ionic compounds dissolve to a very small extent in water. A heterogeneous equilibrium is established when the rate at which ions break away from the solid lattice equals the rate at which they return from the solution.'
            }
        },
        {
            id: 'eq-barium-sulfate',
            type: 'equation',
            data: {
                html: 'BaSO<sub>4</sub>(s) ⇌ Ba<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2−</sup>(aq)',
                caption: 'Equilibrium of a sparingly soluble ionic compound'
            }
        },
        {
            id: 'callout-ksp-def',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Solubility Product (Ksp)',
                text: 'The equilibrium constant for the dissolution of a sparingly soluble ionic compound. It is the product of the molar concentrations of the constituent ions in a saturated solution, each raised to the power of its stoichiometric coefficient.'
            }
        },
        {
            id: 'p-why-no-solid',
            type: 'paragraph',
            data: {
                text: 'In the Ksp expression, the concentration of the undissolved solid is omitted. Because the concentration (density) of a pure solid is constant, it is incorporated into the value of the equilibrium constant Ksp.'
            }
        },
        {
            id: 'eq-ksp-barium',
            type: 'equation',
            data: {
                html: 'K<sub>sp</sub> = [Ba<sup>2+</sup>] [SO<sub>4</sub><sup>2−</sup>]'
            }
        },
        {
            id: 'h-complex-ksp',
            type: 'heading',
            data: {
                text: 'Expressions and Units for More Complex Solids',
                level: 3
            }
        },
        {
            id: 'p-calcium-phosphate',
            type: 'paragraph',
            data: {
                text: 'When writing Ksp expressions for compounds that produce differing ratios of ions, concentrations must be raised to the power of their coefficients.'
            }
        },
        {
            id: 'eq-calcium-phosphate',
            type: 'equation',
            data: {
                html: 'Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(s) ⇌ 3Ca<sup>2+</sup>(aq) + 2PO<sub>4</sub><sup>3−</sup>(aq)<br/><br/>K<sub>sp</sub> = [Ca<sup>2+</sup>]<sup>3</sup> [PO<sub>4</sub><sup>3−</sup>]<sup>2</sup>'
            }
        },
        {
            id: 'callout-units',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Working out Ksp Units',
                text: 'Unlike other equilibrium constants, there is almost always a different unit for different Ksp expressions.<br/><br/>• For <strong>BaSO₄</strong>: (mol dm⁻³) × (mol dm⁻³) = <strong>mol² dm⁻⁶</strong><br/><br/>• For <strong>Ca₃(PO₄)₂</strong>: (mol dm⁻³)³ × (mol dm⁻³)² = (mol dm⁻³)⁵ = <strong>mol⁵ dm⁻¹⁵</strong>'
            }
        },
        {
            id: 'callout-warning-soluble',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Only Sparingly Soluble Compounds',
                text: 'Solubility products strictly apply only to sparingly soluble ionic compounds. You cannot use them effectively for highly soluble salts like sodium chloride. In very concentrated solutions, interactions between ions interfere with the simplified equilibrium.'
            }
        },
        {
            id: 'h-saturated-sol',
            type: 'heading',
            data: {
                text: 'Relating Ksp to Saturated Solutions',
                level: 3
            }
        },
        {
            id: 'p-saturated-sol',
            type: 'paragraph',
            data: {
                text: 'The Ksp value represents the maximum possible product of ionic concentrations in a solution at a specific temperature. It defines the point of saturation.'
            }
        },
        {
            id: 'list-ionic-product',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Ionic Product < Ksp</strong>: The solution is unsaturated. No precipitate forms (more solid could dissolve if added).' },
                    { text: '<strong>Ionic Product = Ksp</strong>: The solution is completely saturated and is at equilibrium.' },
                    { text: '<strong>Ionic Product > Ksp</strong>: The solution is supersaturated. A precipitate corresponds out until the ionic product drops down to equal the Ksp.' }
                ]
            }
        },
        {
            id: 'callout-precipitate',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Predicting Precipitation (Ionic Product)',
                text: 'When two different solutions containing ions are mixed, you can calculate the "trial" ionic product (often called Q). If Q exceeds Ksp, a precipitate will form. This principle is used extensively in qualitative analysis to separate ions.'
            }
        },
        {
            id: 'summary-ksp',
            type: 'summary',
            data: {
                text: 'Solubility Product (Ksp) represents the equilibrium constant for a saturated solution of a sparingly soluble solid. Solids are omitted from its expression. Its units depend directly on the stoichiometry of the dissolved ions. A precipitate will only form if the product of the ionic concentrations in the mixture exceeds the Ksp value.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            {
                id: 'cue-1',
                blockId: 'callout-ksp-def',
                prompt: 'What is the definition of the Solubility Product (Ksp)?'
            },
            {
                id: 'cue-2',
                blockId: 'p-why-no-solid',
                prompt: 'Why is the solid omitted from the Ksp expression?'
            },
            {
                id: 'cue-3',
                blockId: 'eq-calcium-phosphate',
                prompt: 'Write the Ksp expression for Calcium Phosphate, Ca₃(PO₄)₂.'
            },
            {
                id: 'cue-4',
                blockId: 'list-ionic-product',
                prompt: 'What happens if the ionic product of two mixed solutions exceeds the Ksp value?'
            }
        ],
        summaryText: 'Ksp specifies the equilibrium condition for sparingly soluble salts. Only ions are included in the expression. Its units vary depending on the ion ratio (e.g. mol² dm⁻⁶ or mol³ dm⁻⁹). If the product of ionic concentrations exceeds Ksp, precipitation occurs.',
        ready: true
    },
    evidence: []
};