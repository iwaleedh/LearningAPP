/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 10
 * "The Ideal Gas Equation"
 * Source: Pearson Edexcel IAL Chemistry — Section 1D.2
 */
export const note_chemistry_1_1_10 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use the ideal gas equation pV = nRT to find the amount of substance in moles or to calculate unknown state variables (pressure, volume, temperature).' },
            terms: []
        },
        {
            id: 'h-equation',
            type: 'heading',
            data: { text: 'The Ideal Gas Equation', level: 2 },
            terms: []
        },
        {
            id: 'p-equation',
            type: 'paragraph',
            data: { text: 'The ideal gas equation can be used for gases (or volatile liquids above their boiling temperatures) to relate pressure, volume, temperature, and moles of substance. It is crucial to use the correct SI units when applying this formula.' },
            terms: ['Ideal gas']
        },
        {
            id: 'h-assumptions',
            type: 'heading',
            data: { text: 'Ideal vs Real Gases', level: 2 },
            terms: []
        },
        {
            id: 'table-assumptions',
            type: 'comparisonTable',
            data: {
                caption: 'Assumptions of an Ideal Gas',
                headers: ['Assumption', 'Description'],
                rows: [
                    ['<strong>No intermolecular forces</strong>', 'Gas particles do not attract or repel each other.'],
                    ['<strong>Elastic collisions</strong>', 'No kinetic energy is lost when particles collide with each other or the walls.'],
                    ['<strong>Negligible volume</strong>', 'The volume of the particles themselves is insignificant compared to the container volume.'],
                    ['<strong>Random motion</strong>', 'Particles move in constant, random, straight-line motion.']
                ]
            },
            terms: ['Elastic collision']
        },
        {
            id: 'callout-real-gases',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'When do real gases deviate from ideal behaviour?',
                text: 'Real gases behave most ideally at <strong>high temperatures</strong> and <strong>low pressures</strong>.<br/><br/>They deviate from ideal behaviour at:<br/>• <strong>High Pressure:</strong> The particles are forced close together, so their actual volume is no longer negligible.<br/>• <strong>Low Temperature:</strong> Particles move slowly enough that intermolecular forces (attractions) become significant.'
            },
            terms: []
        },
        {
            id: 'callout-equation',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Equation: pV = nRT',
                text: '• <strong>p</strong> = pressure in Pascals (Pa)<br/>• <strong>V</strong> = volume in cubic metres (m³)<br/>• <strong>n</strong> = amount of substance in moles (mol)<br/>• <strong>R</strong> = the gas constant (8.31 J mol⁻¹ K⁻¹)<br/>• <strong>T</strong> = temperature in Kelvin (K)'
            },
            terms: ['Pressure', 'Volume', 'Gas constant', 'Kelvin']
        },
        {
            id: 'h-conversions',
            type: 'heading',
            data: { text: 'Crucial Unit Conversions', level: 2 },
            terms: []
        },
        {
            id: 'table-conversions',
            type: 'comparisonTable',
            data: {
                caption: 'Converting from common units to SI units for pV=nRT',
                headers: ['Variable', 'Given Unit', 'How to convert to SI unit'],
                rows: [
                    ['Pressure (p)', 'kilopascals (kPa)', 'Multiply by 1000 (× 10³) to get Pa'],
                    ['Volume (V)', 'cubic decimetres (dm³)', 'Divide by 1000 (× 10⁻³) to get m³'],
                    ['Volume (V)', 'cubic centimetres (cm³)', 'Divide by 1,000,000 (× 10⁻⁶) to get m³'],
                    ['Temperature (T)', 'degrees Celsius (°C)', 'Add 273 (+ 273) to get K']
                ]
            },
            terms: []
        },
        {
            id: 'callout-rearranging',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rearranging the Equation',
                text: 'You must be able to confidently rearrange $pV = nRT$ for any variable:<br/>• $p = \\frac{nRT}{V}$<br/>• $V = \\frac{nRT}{p}$<br/>• $n = \\frac{pV}{RT}$<br/>• $T = \\frac{pV}{nR}$'
            },
            terms: []
        },
        {
            id: 'h-mr',
            type: 'heading',
            data: { text: 'Calculating Molar Mass (Mᵣ) from Gas Data', level: 2 },
            terms: []
        },
        {
            id: 'callout-mr-calc',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Finding the Molar Mass of a Volatile Liquid',
                text: 'Since $n = \\frac{mass}{M_r}$, we can substitute this into the ideal gas equation:<br/><br/>$pV = \\frac{mass \\times RT}{M_r}$<br/><br/>Rearranging for $M_r$ gives:<br/><br/><strong>$M_r = \\frac{mass \\times RT}{pV}$</strong><br/><br/><em>Method:</em> Convert all measurements to SI units (Pa, m³, K). Keep mass in grams. Plug into the equation to find $M_r$, which can then be used to identify an unknown gas.'
            },
            terms: []
        },
        {
            id: 'h-combined',
            type: 'heading',
            data: { text: 'The Combined Gas Law', level: 2 },
            terms: []
        },
        {
            id: 'callout-combined',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Changing Conditions at Constant Moles',
                text: 'When the <strong>amount of gas ($n$) stays constant</strong>, but the physical conditions (pressure, volume, temperature) change, $R$ and $n$ are both constant, leading to the Combined Gas Law:<br/><br/><strong>$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$</strong><br/><br/><em>Note on units here:</em> As long as you use the SAME units on both sides (e.g. both volumes in cm³, both pressures in kPa), you do not strictly need SI units. <strong>However, Temperature MUST still always be in Kelvin.</strong>'
            },
            terms: ['Combined Gas Law']
        },
        {
            id: 'callout-mistakes',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes & Unit Conversion Checklist',
                text: 'Before plugging numbers into $pV = nRT$, always verify:<br/>✓ Is $T$ in <strong>Kelvin</strong>? (Add 273 to °C. This is the #1 mistake!)<br/>✓ Is $V$ in <strong>m³</strong>? (Divide cm³ by 1,000,000; divide dm³ by 1,000)<br/>✓ Is $p$ in <strong>Pa</strong>? (Multiply kPa by 1,000)'
            },
            terms: []
        },
        {
            id: 'h-practice',
            type: 'heading',
            data: { text: 'Practice Questions', level: 2 },
            terms: []
        },
        {
            id: 'callout-worked-basic',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practice Q1: Basic Calculation',
                text: '<strong>Question:</strong> Find the volume in cm³ of 0.50 mol of CO₂ gas at 100 kPa and 25°C.<br/><br/><strong>Step 1 (Convert units):</strong><br/>p = 100 × 10³ = 100,000 Pa<br/>T = 25 + 273 = 298 K<br/>n = 0.50 mol<br/><br/><strong>Step 2 (Calculate):</strong><br/>$V = \\frac{nRT}{p}$<br/>$V = \\frac{0.50 \\times 8.31 \\times 298}{100000} = 0.01238$ m³<br/><br/><strong>Step 3 (Convert back to cm³):</strong><br/>V in cm³ = 0.01238 × 1,000,000 = <strong>12,380 cm³</strong>'
            },
            terms: []
        },
        {
            id: 'callout-worked-mr',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practice Q2: Molar Mass Calculation',
                text: '<strong>Question:</strong> 0.200 g of an unknown gas occupies 80.0 cm³ at 100 kPa and 298 K. Calculate its $M_r$.<br/><br/><strong>Step 1 (Convert units):</strong><br/>$p$ = 100,000 Pa<br/>$V$ = 80.0 cm³ = $80.0 \\times 10^{-6}$ = 0.000080 m³<br/>$T$ = 298 K<br/>$mass$ = 0.200 g<br/><br/><strong>Step 2 (Calculate Moles):</strong><br/>$n = \\frac{pV}{RT} = \\frac{100,000 \\times 0.000080}{8.31 \\times 298} = \\frac{8.00}{2476.38} = 0.00323$ mol<br/><br/><strong>Step 3 (Calculate Mr):</strong><br/>$M_r = \\frac{mass}{moles} = \\frac{0.200}{0.00323} =$ <strong>$61.9$ g mol⁻¹</strong>'
            },
            terms: []
        },
        {
            id: 'callout-worked-combined',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practice Q3: Combined Gas Law',
                text: '<strong>Question:</strong> A gas occupies 300 cm³ at 100 kPa and 27°C. What volume will it occupy at 150 kPa and 77°C?<br/><br/><strong>Step 1 (Convert Temperatures to K):</strong><br/>$T_1 = 27 + 273 = 300$ K<br/>$T_2 = 77 + 273 = 350$ K<br/><br/><strong>Step 2 (Apply Combined Law):</strong><br/>$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$<br/><br/>$\\frac{100 \\times 300}{300} = \\frac{150 \\times V_2}{350}$<br/><br/>$100 = \\frac{150 \\times V_2}{350}$<br/><br/>$V_2 = \\frac{100 \\times 350}{150} =$ <strong>$233$ cm³</strong>'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-equation', prompt: 'State the ideal gas equation. What are the SI units for p, V, T and n?' },
            { id: 'c-assumptions', blockId: 'table-assumptions', prompt: 'State the four main assumptions of an ideal gas.' },
            { id: 'c-deviations', blockId: 'callout-real-gases', prompt: 'Under what two specific conditions do real gases deviate most from ideal behaviour, and why?' },
            { id: 'c2', blockId: 'table-conversions', prompt: 'How do you convert a temperature from °C to Kelvin?' },
            { id: 'c3', blockId: 'table-conversions', prompt: 'How do you convert a volume from cm³ to m³ for use in the ideal gas equation?' },
            { id: 'c4', blockId: 'table-conversions', prompt: 'How do you convert pressure from kPa to Pa?' },
            { id: 'c-mr', blockId: 'callout-mr-calc', prompt: 'State the rearranged formula used to directly calculate the Molar Mass (Mr) of an unknown gas using p, V, T, and mass.' },
            { id: 'c-combined', blockId: 'callout-combined', prompt: 'State the Combined Gas Law equation for a fixed amount of gas under changing conditions.' }
        ],
        summaryText: 'Ideal gas equation: pV = nRT with SI units (Pa, m³, K). Assumptions: no intermolecular forces, elastic collisions, negligible volume, random motion. Real gases deviate at high pressure (volume significant) and low temperature (forces significant). Molar mass calculation: M_r = (mass × RT) / pV. Combined gas law: (p₁V₁)/T₁ = (p₂V₂)/T₂ (T must be in Kelvin). Conversions: add 273 to °C to get K; multiply kPa by 10³ to get Pa; cm³ to m³ is ×10⁻⁶; dm³ to m³ is ×10⁻³.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_1_1_10;
