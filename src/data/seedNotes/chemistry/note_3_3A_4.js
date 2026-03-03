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
            id: 'list-error-types',
            type: 'list',
            data: {
                style: 'unordered',
                items: [
                    'Random errors — unpredictable variations in measurements (e.g. reading a burette, temperature fluctuations); reduced by repeating and averaging',
                    'Systematic errors — consistent offset in one direction (e.g. zero error on balance, heat loss in calorimetry); NOT reduced by repeating',
                    'Random errors affect precision; systematic errors affect accuracy'
                ]
            },
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
                title: '✏️ Worked Example — Percentage Uncertainty',
                text: 'A burette has an uncertainty of ±0.05 cm³ per reading.\nA titre requires two readings (initial + final), so total uncertainty = ±0.10 cm³.\n\nIf the titre is 25.30 cm³:\n% uncertainty = (0.10 / 25.30) × 100 = 0.40%\n\nIf the titre is 5.20 cm³:\n% uncertainty = (0.10 / 5.20) × 100 = 1.92%\n\n→ Smaller measurements have larger percentage uncertainties — this is why titres should not be too small.'
            },
        },
        {
            id: 'h-eval',
            type: 'heading',
            data: { text: 'Evaluating Methods — What Examiners Expect', level: 2 },
        },
        {
            id: 'list-eval-skills',
            type: 'list',
            data: {
                style: 'unordered',
                items: [
                    'Identify the largest source of uncertainty — this limits the overall accuracy',
                    'Suggest specific, practical improvements (not just "be more careful")',
                    'Link each source of error to its direction of effect (too high / too low)',
                    'Explain whether the error is systematic or random',
                    'Suggest how to check for systematic errors (e.g. use a different method, calibrate instruments)',
                    'Assess whether the method is valid — does it actually measure what is intended?'
                ]
            },
        },
        {
            id: 'table-instruments',
            type: 'comparisonTable',
            data: {
                caption: 'Common instrument uncertainties',
                headers: ['Instrument', 'Uncertainty', 'Note'],
                rows: [
                    ['Burette (50 cm³)', '±0.05 cm³ per reading', 'Two readings per titre → ±0.10 cm³'],
                    ['Volumetric pipette (25 cm³)', '±0.06 cm³', 'More precise than measuring cylinder'],
                    ['Measuring cylinder (100 cm³)', '±0.5 cm³', 'Less precise — use for approximate volumes'],
                    ['Electronic balance (2 d.p.)', '±0.01 g', 'Weigh by difference to cancel zero error'],
                    ['Thermometer (0.5°C)', '±0.5 °C', 'Use digital for better precision (±0.1 °C)'],
                    ['Volumetric flask (250 cm³)', '±0.23 cm³', 'Used for making standard solutions']
                ]
            },
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Exam Tip — Evaluation Questions',
                text: 'When asked to evaluate a method:\n1. Identify the biggest source of error\n2. State whether it is systematic or random\n3. State the direction of effect (result too high/low)\n4. Suggest a specific improvement\n5. Explain how the improvement would reduce the error\n\nAvoid vague answers like "use better equipment" — name the specific instrument and explain why.'
            },
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
            { id: 'cue-1', blockId: 'callout-key-terms', prompt: 'Define accuracy, precision, reliability and validity.' },
            { id: 'cue-2', blockId: 'eq-pct-error', prompt: 'State the formula for percentage error.' },
            { id: 'cue-3', blockId: 'eq-pct-uncert', prompt: 'State the formula for percentage uncertainty.' },
            { id: 'cue-4', blockId: 'callout-we1', prompt: 'A burette has ±0.05 cm³ uncertainty. Calculate % uncertainty for a 25.30 cm³ titre.' },
            { id: 'cue-5', blockId: 'list-eval-skills', prompt: 'What should you include when evaluating a practical method?' },
        ],
        summaryText: 'Errors: random (reduced by repeating) vs systematic (not reduced). Accuracy vs precision. % error and % uncertainty formulae. Evaluate by identifying largest source, direction, and improvement.',
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
