/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 3
 * "Standard enthalpy changes: reaction, formation, combustion, neutralization"
 * Source: Pearson Edexcel IAL Chemistry — Section 6A.4
 */
export const note_chemistry_2_6_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Define standard enthalpy of reaction, formation, combustion, and neutralization. Write equations representing these enthalpy changes including state symbols.' },
            terms: []
        },
        {
            id: 'h-reaction',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Reaction', level: 2 },
            terms: []
        },
        {
            id: 'callout-reaction',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Reaction (ΔᵣH⦵)',
                text: 'The enthalpy change when the reaction occurs in the molar quantities shown in the chemical equation, under standard conditions, with all reactants and products in their standard states.<br/><br/>Example: N₂(g) + 3H₂(g) → 2NH₃(g)   ΔᵣH⦵ = –92 kJ mol⁻¹<br/>This value is specifically for 1 mole of N₂ reacting with 3 moles of H₂.'
            },
            terms: ['Standard enthalpy of reaction']
        },
        {
            id: 'h-formation',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Formation', level: 2 },
            terms: []
        },
        {
            id: 'callout-formation',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Formation (ΔfH⦵)',
                text: 'The enthalpy change when <strong>one mole of a compound</strong> is formed from its <strong>elements</strong>, under standard conditions, with all reactants and products in their standard states.<br/><br/><strong>Crucial rule:</strong> The enthalpy of formation of an element in its standard state is ZERO.<br/><br/>Equation example (formation of ethanol):<br/>2C(s, graphite) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)<br/>Notice that ½O₂ is used because the equation MUST produce exactly 1 mole of the compound.'
            },
            terms: ['Standard enthalpy of formation']
        },
        {
            id: 'h-combustion',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Combustion', level: 2 },
            terms: []
        },
        {
            id: 'callout-combustion',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Combustion (ΔcH⦵)',
                text: 'The enthalpy change when <strong>one mole of a substance</strong> reacts <strong>completely with oxygen</strong>, under standard conditions, with all reactants and products in their standard states.<br/><br/>Equation example (combustion of methane):<br/>CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)<br/>(Note: H₂O must be (l) because liquid is its standard state at 298 K, even though flame is hot!)'
            },
            terms: ['Standard enthalpy of combustion']
        },
        {
            id: 'h-neutralization',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Neutralization', level: 2 },
            terms: []
        },
        {
            id: 'callout-neut',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Neutralization (ΔneutH⦵)',
                text: 'The enthalpy change when an acid and an alkali react to form <strong>one mole of water</strong>, under standard conditions.<br/><br/>Equation example:<br/>H⁺(aq) + OH⁻(aq) → H₂O(l)   ΔneutH⦵ = –57 kJ mol⁻¹<br/>(This value is mostly constant for all strong acids reacting with strong alkalis.)'
            },
            terms: ['Standard enthalpy of neutralization']
        },
        {
            id: 'h-atomization',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Atomization', level: 2 },
            terms: []
        },
        {
            id: 'callout-atom',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Atomization (ΔatH⦵)',
                text: 'The enthalpy change when <strong>one mole of gaseous atoms</strong> is formed from its element in its standard state, under standard conditions.<br/><br/>Equation examples:<br/>Na(s) → Na(g)<br/>½ Cl₂(g) → Cl(g)<br/>(Note: We use ½ Cl₂ because we must form exactly 1 mole of atoms, not a molecule!)'
            },
            terms: ['Standard enthalpy of atomization']
        },
        {
            id: "h-qmc",
            type: "heading",
            data: { "text": "Calculating Heat Energy: q = mcΔT", "level": 2 },
            terms: []
        },
        {
            id: "callout-qmc",
            type: "callout",
            data: {
                style: "key",
                title: "The Heat Energy Equation",
                text: "<strong>q = mcΔT</strong><br/>Where:<br/>• <strong>q</strong> = heat energy transferred (in Joules, J).<br/>• <strong>m</strong> = mass of the substance heated/cooled (usually water, in grams, g). Assume 1 cm³ of aqueous solution = 1 g.<br/>• <strong>c</strong> = specific heat capacity (for water: 4.18 J g⁻¹ K⁻¹).<br/>• <strong>ΔT</strong> = temperature change (in K or °C)."
            },
            terms: []
        },
        {
            id: "callout-enth-calc",
            type: "callout",
            data: {
                style: "worked",
                title: "Worked Example: Standard Enthalpy of Reaction",
                text: "<strong>50.0 cm³ of 1.0 mol dm⁻³ HCl reacts with 50.0 cm³ of 1.0 mol dm⁻³ NaOH. The temperature rises from 21.0 °C to 27.5 °C. Calculate ΔH per mole of water formed.</strong><br/><br/><em>Step 1: Calculate q.</em><br/>m = total mass of liquid = 50.0 + 50.0 = 100.0 g.<br/>ΔT = 27.5 - 21.0 = 6.5 °C.<br/>q = 100.0 × 4.18 × 6.5 = 2717 J = <strong>2.717 kJ</strong>.<br/><br/><em>Step 2: Calculate moles (n).</em><br/>Moles of HCl = 50.0/1000 × 1.0 = 0.050 mol. Since the ratio is 1:1, 0.050 mol of water is formed.<br/><br/><em>Step 3: Calculate ΔH (ΔH = -q / n).</em><br/>Since temperature rose, the reaction is exothermic, so ΔH is negative.<br/>ΔH = -(2.717) / 0.050 = <strong>-54.3 kJ mol⁻¹</strong>."
            },
            terms: []
        },
        {
            id: "h-cooling",
            type: "heading",
            data: { "text": "Improving Accuracy: Cooling Curve Extrapolation", "level": 2 },
            terms: []
        },
        {
            id: "p-cooling",
            type: "paragraph",
            data: { "text": "In a simple coffee-cup calorimeter, heat is constantly lost to the surroundings while the reaction is occurring. Therefore, the highest temperature recorded on the thermometer is <em>lower</em> than the true maximum temperature if no heat was lost.<br/><br/>To find the true ΔT, we plot a <strong>Temperature vs Time</strong> graph and extrapolate the cooling curve back to the point of mixing." },
            terms: []
        },
        {
            id: "list-cooling",
            type: "list",
            data: {
                style: "numbered",
                items: [
                    "Measure the temperature of the initial solution(s) every minute for 3 minutes to establish a stable baseline.",
                    "Mix the reactants exactly at minute 4. <strong>Do not record a temperature at minute 4.</strong>",
                    "Measure the temperature every minute from minute 5 onwards, for about 10 minutes, as the solution cools.",
                    "Plot the points. Draw a line of best fit through the initial points, and another line of best fit through the cooling points (from min 5 onwards).",
                    "<strong>Extrapolate (extend)</strong> both lines to exactly minute 4 (the mixing point).",
                    "The vertical distance between the two lines at minute 4 is the true, theoretical <strong>ΔT</strong>."
                ]
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-formation', prompt: 'Define standard enthalpy of formation (ΔfH⦵). What is the value for an element in its standard state?' },
            { id: 'c2', blockId: 'callout-formation', prompt: 'Write the equation, with state symbols, for the standard enthalpy of formation of methanol (CH₃OH(l)).' },
            { id: 'c3', blockId: 'callout-combustion', prompt: 'Define standard enthalpy of combustion (ΔcH⦵). Write the equation for the standard combustion of carbon.' },
            { id: 'c4', blockId: 'callout-neut', prompt: 'Define standard enthalpy of neutralization. Why is the value roughly the same (–57 kJ/mol) for any strong acid reacting with any strong alkali?' },
            { id: 'c5', blockId: 'callout-atom', prompt: 'Define standard enthalpy of atomization. Write the equation for atomizing chlorine.' },
            { id: 'c6', blockId: 'callout-qmc', prompt: 'State the equation for calculating heat energy transferred (q). What does the m represent when reacting two aqueous solutions?' },
            { id: 'c7', blockId: 'list-cooling', prompt: 'Why do we extrapolate a cooling curve graph back to the point of mixing, instead of just taking the highest temperature reached?' }
        ],
        summaryText: 'Standard enthalpy definitions specify 1 mole. Formation: 1 mole compound from elements. Combustion: 1 mole substance burned in O₂. Neutralization: formation of 1 mole H₂O. Atomization: formation of 1 mole gaseous atoms. q=mcΔT calculates heat energy (J). Extrapolating a Temperature-Time graph to the mixing point accounts for heat lost to surroundings.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_3;
