/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 4
 * "Measuring enthalpy changes: q = mcΔT"
 * Source: Pearson Edexcel IAL Chemistry — Section 6B
 */
export const note_chemistry_2_6_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Calculate enthalpy changes from experimental data using q = mcΔT. Be able to calculate enthalpy change in kJ mol⁻¹.' },
            terms: []
        },
        {
            id: 'h-calc',
            type: 'heading',
            data: { text: 'Step 1: Calculating Heat Energy (q)', level: 2 },
            terms: []
        },
        {
            id: 'callout-q',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The heat energy formula: q = mcΔT',
                text: '<strong>q = m × c × ΔT</strong><br/><br/>• <strong>q</strong> = heat energy gained/lost (in Joules, J)<br/>• <strong>m</strong> = mass of the surroundings being heated/cooled (in g)<br/>• <strong>c</strong> = specific heat capacity of the surroundings (for water, 4.18 J g⁻¹ °C⁻¹)<br/>• <strong>ΔT</strong> = change in temperature (final – initial, in °C or K)'
            },
            terms: ['Heat energy', 'Specific heat capacity']
        },
        {
            id: 'list-assumptions',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Key assumption 1:</strong> 1 cm³ of any aqueous solution has a mass of 1 g. (Density = 1 g cm⁻³). If you have 50 cm³ of water, use m = 50 g.',
                    '<strong>Key assumption 2:</strong> Any aqueous solution has the same specific heat capacity as pure water (4.18 J g⁻¹ °C⁻¹).',
                    '<strong>Warning on mass:</strong> Only use the mass of the LIQUID that is changing temperature. Do NOT add the mass of a solid reactant that was added to it.'
                ]
            },
            terms: []
        },
        {
            id: 'h-molar',
            type: 'heading',
            data: { text: 'Step 2: Calculating Enthalpy Change per Mole (ΔH)', level: 2 },
            terms: []
        },
        {
            id: 'callout-deltaH',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Formula: ΔH = –q / n',
                text: '1. Convert q (Joules) into kJ by dividing by 1000.<br/>2. Find the number of moles (n) of the limiting reactant that reacted (using mass/Mᵣ or c×V).<br/>3. Divide heat energy (kJ) by moles (n).<br/>4. <strong>Crucial final step:</strong> attach a sign. If temp increased, reaction is exothermic (negative sign). If temp decreased, reaction is endothermic (positive sign).<br/><br/><strong>ΔH = (±) q(in kJ) / n</strong>'
            },
            terms: ['Enthalpy change']
        },
        {
            id: 'callout-worked',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked example',
                text: '0.050 mol of solid NaOH is dissolved in 100 cm³ of water. Temp rises from 21.0°C to 25.5°C.<br/>1. ΔT = 25.5 – 21.0 = +4.5°C<br/>2. q = m × c × ΔT = 100 × 4.18 × 4.5 = 1881 J = 1.881 kJ<br/>3. n = 0.050 mol<br/>4. Magnitude of ΔH = 1.881 / 0.050 = 37.62 kJ mol⁻¹<br/>5. Temp rose → exothermic → add negative sign.\\<br/><strong>ΔH = –37.6 kJ mol⁻¹</strong>'
            },
            terms: []
        },
        {
            id: 'h-combustion',
            type: 'heading',
            data: { text: 'Calorimetry: Enthalpy of Combustion', level: 2 },
            terms: []
        },
        {
            id: 'table-combustion',
            type: 'comparisonTable',
            data: {
                caption: 'Measuring Enthalpy of Combustion',
                headers: ['Method', 'Calculation note', 'Common Sources of Error (Why experimental value is less exothermic)'],
                rows: [
                    ['Use a <strong>spirit burner</strong> to burn a known mass of fuel (weigh burner before and after). Heat a known volume of water in a <strong>copper can</strong> (good conductor).', 'In q=mcΔT, <strong>m</strong> is the mass of the WATER in the copper can, NOT the mass of the fuel burned! The fuel mass is used to find moles (n).', '• <strong>Heat loss</strong> to the air and the copper can.<br/>• <strong>Incomplete combustion</strong> (soot forms on the bottom of the can).<br/>• Non-standard conditions.<br/>• Evaporation of the fuel.']
                ]
            },
            terms: ['Calorimetry']
        },
        {
            id: 'h-neutralization',
            type: 'heading',
            data: { text: 'Calorimetry: Enthalpy of Neutralization', level: 2 },
            terms: []
        },
        {
            id: 'table-neutralization',
            type: 'comparisonTable',
            data: {
                caption: 'Measuring Enthalpy of Neutralization',
                headers: ['Method', 'Calculation note', 'Common Sources of Error'],
                rows: [
                    ['Mix known volumes and concentrations of acid and alkali in a <strong>polystyrene cup</strong> (good insulator, placed in a beaker for stability). Measure initial temps (take the mean) and the maximum temp reached.', 'Total volume = V(acid) + V(alkali). Density is assumed to be 1 g cm⁻³. Number of moles (n) is the moles of <strong>water</strong> formed.', '• Assuming the specific heat capacity and density are exactly equivalent to pure water (dissolved ions change this).<br/>• Heat transfer to the thermometer or polystyrene cup.<br/>• Measurement uncertainties (pipettes, etc).']
                ]
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-q', prompt: 'State the equation used to calculate heat energy from a temperature change. What does each term mean and what are the units?' },
            { id: 'c2', blockId: 'list-assumptions', prompt: 'What two assumptions do we usually make about aqueous solutions when using q = mcΔT?' },
            { id: 'c3', blockId: 'callout-deltaH', prompt: 'State the 4 steps to convert a heat energy value (q in Joules) into an enthalpy change (ΔH in kJ mol⁻¹).' },
            { id: 'c4', blockId: 'table-combustion', prompt: 'Describe the apparatus used to measure enthalpy of combustion. State three reasons why the experimental value is usually less exothermic than the data book value.' },
            { id: 'c5', blockId: 'table-neutralization', prompt: 'Why is a polystyrene cup used for neutralization calorimetry instead of a glass beaker? State two major assumptions made in the calculation.' }
        ],
        summaryText: 'q = mcΔT calculates heat energy (J). m = mass of liquid heated, c = 4.18. To get ΔH (kJ mol⁻¹): convert q to kJ, divide by moles, and apply sign (exo = –, endo = +). Combustion calorimetry uses copper can (good conductor) & spirit burner; prone to heat loss & incomplete combustion. Neutralization uses polystyrene cup (insulator); assumes density/capacity equal to pure water.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_4;
