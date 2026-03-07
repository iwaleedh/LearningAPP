/**
 * Seed note: Chemistry · Unit 3 · Topic 3A · Subtopic 4
 * "Method evaluation and uncertainty"
 * Source: wch13 practical skills specification
 */

export const note_chemistry_3_3A_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Evaluate experimental methods and suggest improvements; understand sources of error (systematic and random); calculate percentage error and percentage uncertainty; assess accuracy, precision, reliability and validity.' },
        },
        {
            id: 'h-errors',
            type: 'heading',
            data: { text: 'Types of Error', level: 2 },
        },
        {
            id: 'table-random-systematic',
            type: 'comparisonTable',
            data: {
                caption: 'Random vs Systematic Errors',
                headers: ['Feature', 'Random Error', 'Systematic Error'],
                rows: [
                    ['<strong>Predictability</strong>', 'Unpredictable (scatter in data)', 'Predictable (always offsets in same direction)'],
                    ['<strong>Effect on results</strong>', 'Reduces precision', 'Reduces accuracy (but precision can still be high)'],
                    ['<strong>Detection</strong>', 'Seen in wide spread of repeated data', 'Seen when comparing to known/true value'],
                    ['<strong>Solution</strong>', 'Repeat measurements and calculate a mean', 'Calibrate or fix the equipment/method']
                ]
            },
            terms: ['Random error', 'Systematic error']
        },
        {
            id: 'table-error-examples',
            type: 'comparisonTable',
            data: {
                caption: 'Examples of Errors in Context',
                headers: ['Situation', 'Error Type', 'Explanation'],
                rows: [
                    ['Reading burette slightly differently each time', '<strong>Random</strong>', 'Small, unpredictable variations in eye position (parallax error)'],
                    ['Different people timing a reaction stopclock', '<strong>Random</strong>', 'Human reaction time varies randomly per person'],
                    ['Balance reads 0.01 g too high always', '<strong>Systematic</strong>', 'Calibration error; every reading will be offset by +0.01 g'],
                    ['Heat loss during enthalpy experiment', '<strong>Systematic</strong>', 'Energy consistently escapes to surroundings, always causing a lower temp change']
                ]
            },
            terms: []
        },
        {
            id: 'callout-key-terms',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Terms — Accuracy, Precision, Reliability, Validity',
                text: 'Accuracy — how close a result is to the true value\nPrecision — how close repeated measurements are to each other (small spread)\nReliability — results are consistent when repeated (by same or different person)\nValidity — the experiment actually measures what it claims to measure (correct variables controlled)'
            },
        },
        {
            id: 'h-percentage',
            type: 'heading',
            data: { text: 'Percentage Error and Uncertainty', level: 2 },
        },
        {
            id: 'eq-pct-error',
            type: 'equation',
            data: {
                html: '% error = <span class="nb-frac"><span class="nb-num">|experimental value − accepted value|</span><span class="nb-den">accepted value</span></span> × 100',
                caption: 'Percentage error — measures accuracy'
            },
        },
        {
            id: 'callout-error-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example: Percentage Error (Enthalpy)',
                text: '<strong>Question:</strong> The accepted enthalpy change is -57.0 kJ mol⁻¹. A student measures -52.0 kJ mol⁻¹. Calculate the percentage error.<br/><br/><strong>Solution:</strong><br/>% Error = $|-52.0 - (-57.0)| \\div |-57.0| \\times 100$<br/>% Error = $|5.0| \\div 57.0 \\times 100$<br/>% Error = <strong>8.77%</strong>'
            },
            terms: []
        },
        {
            id: 'eq-pct-uncert',
            type: 'equation',
            data: {
                html: '% uncertainty = <span class="nb-frac"><span class="nb-num">absolute uncertainty</span><span class="nb-den">measured value</span></span> × 100',
                caption: 'Percentage uncertainty — quantifies the significance of an instrument\'s uncertainty relative to the reading'
            },
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Worked Example 1: Single vs Multiple Measurements',
                text: '<strong>Single Measurement (e.g., Mass):</strong><br/>A mass of 2.50 g is measured on a balance with ±0.01 g uncertainty.<br/>% Uncertainty = (0.01 / 2.50) × 100 = <strong>0.4%</strong><br/><br/><strong>Multiple Measurements (e.g., Titre Volume):</strong><br/>A burette has an uncertainty of ±0.05 cm³ per reading. A titre requires TWO readings (initial + final), so total absolute uncertainty = ±0.10 cm³.<br/>If the titre is 25.00 cm³:<br/>% Uncertainty = (2 × 0.05 / 25.00) × 100 = <strong>0.4%</strong>'
            },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Worked Example 2: Measurement Size Effect',
                text: 'Compare the percentage uncertainty using the same burette (±0.05 cm³ per reading):<br/><strong>a) 10.00 cm³ titre:</strong> % Uncertainty = (0.10 / 10.00) × 100 = <strong>1.0%</strong><br/><strong>b) 25.00 cm³ titre:</strong> % Uncertainty = (0.10 / 25.00) × 100 = <strong>0.4%</strong><br/><br/><strong>Conclusion:</strong> Larger measurements yield <em>lower</em> percentage uncertainties. This is why we use larger sample sizes and titre volumes.'
            },
            terms: []
        },
        {
            id: 'h-total-uncert',
            type: 'heading',
            data: { text: 'Total Percentage Uncertainty', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Worked Example 3: Combining Uncertainties',
                text: 'When combining multiple distinct measurements in a calculation (e.g., mass AND volume), you must <strong>ADD</strong> the percentage uncertainties together.<br/><br/><strong>Question:</strong> In a titration:<br/>Mass weighed: 2.50 g (balance ±0.01 g)<br/>Volume made up: 250 cm³ (flask ±0.15 cm³)<br/>Titre volume: 25.00 cm³ (burette ±0.05 cm³ per reading)<br/>Calculate total percentage uncertainty.<br/><br/><strong>Solution:</strong><br/>Mass: % = (0.01 / 2.50) × 100 = 0.4%<br/>Volumetric Flask: % = (0.15 / 250) × 100 = 0.06%<br/>Burette (2 readings): % = (2 × 0.05 / 25.00) × 100 = 0.4%<br/>Result = 0.4% + 0.06% + 0.4% = <strong>0.86% total uncertainty</strong>'
            },
            terms: []
        },
        {
            id: 'h-eval',
            type: 'heading',
            data: { text: 'Evaluating Methods & Improving Accuracy', level: 2 },
            terms: []
        },
        {
            id: 'table-improve-general',
            type: 'comparisonTable',
            data: {
                caption: 'General Strategies for Improvement',
                headers: ['Strategy', 'How it Helps', 'Example'],
                rows: [
                    ['Use more precise equipment', 'Reduces absolute uncertainty', 'Using a 3 d.p. balance instead of 2 d.p.'],
                    ['Increase measurement size', 'Reduces percentage uncertainty', 'Using a larger mass or titre volume'],
                    ['Repeat measurements', 'Reduces random error', 'Taking 3+ concordant titres and averaging'],
                    ['Calibrate equipment', 'Reduces systematic error', 'Checking a balance with standard weights']
                ]
            },
            terms: []
        },
        {
            id: 'h-errors-titration',
            type: 'heading',
            data: { text: 'Specific Error Analysis: Titrations', level: 3 },
            terms: []
        },
        {
            id: 'table-errors-titration',
            type: 'comparisonTable',
            data: {
                caption: 'Common Titration Errors',
                headers: ['Error Source', 'Effect on Result', 'Type of Error'],
                rows: [
                    ['Air bubble in burette jet releases during titre', 'Titre volume recorded is too high', 'Systematic or Random'],
                    ['Not rinsing burette with titrant', 'Titre volume too high (titrant is diluted by water)', 'Systematic'],
                    ['Overshooting the end point', 'Titre volume too high', 'Random'],
                    ['Wrong indicator chosen', 'End point does not match equivalence point volume', 'Systematic']
                ]
            },
            terms: []
        },
        {
            id: 'h-errors-mass',
            type: 'heading',
            data: { text: 'Specific Error Analysis: Mass & Temperature', level: 3 },
            terms: []
        },
        {
            id: 'table-errors-mass',
            type: 'comparisonTable',
            data: {
                caption: 'Common Mass and Temperature Errors',
                headers: ['Error Source', 'Effect', 'Type of Error'],
                rows: [
                    ['Balance not tared/zeroed', 'All masses offset by same amount', 'Systematic'],
                    ['Weighing a hot/warm object', 'Convection currents lift the pan, reading fluctuates or is too low', 'Systematic/Random'],
                    ['Hygroscopic substance absorbs moisture', 'Recorded mass is too high', 'Systematic'],
                    ['Heat loss to surroundings (Enthalpy)', 'Temperature change (ΔT) is always lower than it should be', 'Systematic']
                ]
            },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Worked Example 4: Percentage Error vs Uncertainty Bounds',
                text: '<strong>Question:</strong> A student determines the M_r of a gas as 42.0. The true value is 44.0. The experimental uncertainty is 5%.<br/>a) Calculate the percentage error.<br/>b) Is the error within the experimental uncertainty?<br/><br/><strong>Solution:</strong><br/>a) % Error = $|42.0 - 44.0| \\div 44.0 \\times 100$ = <strong>4.55%</strong><br/><br/>b) Uncertainty range: $42.0 \\pm 5\\%$ = $42.0 \\pm 2.1$.<br/>The bounds are 39.9 to 44.1. The true value (44.0) falls <strong>within</strong> this range, so yes.'
            },
            terms: []
        },
        {
            id: 'callout-we-identify',
            type: 'callout',
            data: {
                style: 'worked',
                title: '✏️ Worked Example 5: Identifying Error Types',
                text: 'Identify whether each error is random or systematic:<br/>a) Balance reads 0.02 g too high $\\rightarrow$ <strong>Systematic</strong> (always in same direction, calibration error)<br/>b) Different students read the burette differently $\\rightarrow$ <strong>Random</strong> (unpredictable parallax error)<br/>c) Heat escapes during enthalpy experiment $\\rightarrow$ <strong>Systematic</strong> (always causes a lower temperature change)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Exam Tip — Evaluation Questions',
                text: 'When asked to evaluate a method:\n1. Identify the biggest source of error\n2. State whether it is systematic or random\n3. State the direction of effect (result too high/low)\n4. Suggest a specific improvement\n\nAvoid vague answers like "use better equipment" — name the specific instrument (e.g., "Use a 3 d.p. balance instead of 2 d.p. to reduce percentage uncertainty").'
            },
            terms: []
        },
        // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
        // ── SUMMARY ─────────────────────────────────────────────────────────
        // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
        {
          id: 'bloom-understand',
          type: 'callout',
          data: {
            style: 'key',
            title: '🧠 Deeper Understanding — Why It Matters',
            text: 'Understand: Percentage uncertainty quantifies how significant a measurement error is relative to the reading size. A ±0.05 cm³ uncertainty is negligible for a 25 cm³ titre but significant for a 2 cm³ reading.\n\nApply: In a calorimetry experiment, the thermometer has ±0.5 °C uncertainty and the temperature rise is 8.5 °C. Calculate the percentage uncertainty. Then calculate it if the rise were 28.5 °C. Which gives a more reliable result?\n\nAnalyze: A student obtains a molar volume of 25.1 dm³ mol⁻¹ (accepted: 24.0). Calculate the percentage error. Is this likely due to a systematic or random error? Suggest the most likely cause.\n\nEvaluate: "Repeating an experiment and averaging always improves accuracy." Critically assess this — under what circumstances does repetition fail to improve the result?'
          },
          terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Errors are either random (reduced by repeating) or systematic (not reduced by repeating). Accuracy = closeness to true value; precision = closeness of repeats. % error = |experimental − accepted| / accepted × 100. % uncertainty = absolute uncertainty / measured value × 100. Evaluate methods by identifying the largest uncertainty source, stating its direction of effect, and suggesting specific improvements.'
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-key-terms', prompt: 'Define accuracy vs precision, and reliability vs validity.' },
            { id: 'cue-error-types', blockId: 'table-random-systematic', prompt: 'State the difference between random and systematic errors in terms of predictability, effect on results, and how to reduce them.' },
            { id: 'cue-2', blockId: 'eq-pct-error', prompt: 'State the formula for percentage error. Does a negative answer matter?' },
            { id: 'cue-3', blockId: 'eq-pct-uncert', prompt: 'State the formula for percentage uncertainty.' },
            { id: 'cue-4', blockId: 'callout-we1', prompt: 'Why must you multiply the absolute uncertainty of a burette reading by 2 when calculating the percentage uncertainty of a titre?' },
            { id: 'cue-measure-size', blockId: 'callout-we2', prompt: 'What effect does using a LARGER measurement (e.g. 25cm³ titre instead of 10cm³) have on the percentage uncertainty?' },
            { id: 'cue-combine', blockId: 'callout-we3', prompt: 'How do you calculate the TOTAL percentage uncertainty for an experiment involving multiple measurements (e.g., mass and titre)?' },
            { id: 'cue-eval-strategies', blockId: 'table-improve-general', prompt: 'State four general strategies to improve experimental accuracy/precision.' },
            { id: 'cue-errors-titre', blockId: 'table-errors-titration', prompt: 'In a titration, what is the effect on the titre volume if your burette jet contains an air bubble that releases during the titration?' },
            { id: 'cue-errors-mass', blockId: 'table-errors-mass', prompt: 'In a mass measurement, what is the effect of weighing a completely hot/warm object?' }
        ],
        summaryText: 'Random vs Systematic: Random = unpredictable, affects precision, fix by repeating. Systematic = predictable offset, affects accuracy, fix by calibrating. % Error = |Exp - True| / True × 100. % Uncertainty = (Uncertainty / Measurement) × 100. *Burettes require ×2 uncertainty* because you read them twice. Larger measurements = lower % uncertainty. Total % Uncertainty = Sum of all % uncertainties. Common Errors: Air bubble (titre too high), Hot object on balance (convection lifts pan, reading too low).',
        ready: false
    },
    evidence: [
        {
            id: 'ev-1',
            title: 'Pearson Edexcel IAL Chemistry Spec — WCH13 Paper 3',
            detail: 'Assessment of practical skills: evaluation of methods, uncertainty calculations, sources of error.',
            year: '2024',
            source: 'Pearson Edexcel',
            tags: ['practical skills', 'evaluation', 'uncertainty']
        }
    ]
};
