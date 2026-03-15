/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 5
 * "Logarithmic models and y = abˣ"
 */

export const note_mathematics_2_5_5 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use logarithms to linearise data from y = abˣ or y = axⁿ models and find constants from a straight-line graph.' },
            terms: []
        },
        {
            id: 'h-models',
            type: 'heading',
            data: { text: 'Two Common Non-Linear Models', level: 2 },
            terms: []
        },
        {
            id: 'table-models',
            type: 'comparisonTable',
            data: {
                headers: ['Model', 'Linear form', 'Plot', 'Gradient', 'Intercept'],
                rows: [
                    ['y = axⁿ', 'log y = log a + n log x', 'log y vs log x', 'n', 'log a'],
                    ['y = abˣ', 'log y = log a + x log b', 'log y vs x', 'log b', 'log a']
                ],
                caption: 'Linearising non-linear models using logarithms'
            },
            terms: []
        },
        {
            id: 'callout-how',
            type: 'callout',
            data: {
                style: 'key',
                title: 'How to Linearise y = axⁿ',
                text: 'Start: y = axⁿ\nTake log: log y = log(axⁿ) = log a + n log x\n\nLet Y = log y and X = log x:\n  Y = n·X + log a\n\nThis is y = mx + c with m = n and c = log a.\nPlot log y against log x; gradient = n, y-intercept = log a → a = 10^{intercept}.'
            },
            terms: []
        },
        {
            id: 'callout-how2',
            type: 'callout',
            data: {
                style: 'key',
                title: 'How to Linearise y = abˣ',
                text: 'Start: y = abˣ\nTake log: log y = log a + x log b\n\nPlot log y against x; gradient = log b → b = 10^{gradient}, y-intercept = log a → a = 10^{intercept}.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Finding Constants from a Graph', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A graph of log y against log x is a straight line passing through (0, 1.2) and (2, 3.0). The data follows y = axⁿ. Find a and n.',
                text: 'gradient n = (3.0 − 1.2)/(2 − 0) = 1.8/2 = 0.9\n\ny-intercept = 1.2, so log a = 1.2 → a = 10^{1.2} ≈ 15.8\n\nModel: y = 15.8 x^{0.9}'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Finding Constants for y = abˣ', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A graph of ln y against x passes through (0, 2.1) and (5, 4.6). The data follows y = Ae^{kx}. Find A and k.',
                text: 'gradient k = (4.6 − 2.1)/(5 − 0) = 2.5/5 = 0.5\n\ny-intercept = 2.1 = ln A → A = e^{2.1} ≈ 8.17\n\nModel: y = 8.17 e^{0.5x}'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Log or ln?',
                text: 'The exam may use log₁₀ (written log) or ln (natural log). Read the question carefully:\n• If "log y against x" with model y=abˣ: gradient = log b, intercept = log a → use 10^(…)\n• If "ln y against x" with model y=Ae^{kx}: gradient = k, intercept = ln A → use e^(…)\n\nThe method is identical — just use the right base when converting back.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Linearising y = axⁿ: plot log y vs log x; gradient = n, intercept = log a. Linearising y = abˣ: plot log y vs x; gradient = log b, intercept = log a. Linearising y = Aeᵏˣ: plot ln y vs x; gradient = k, intercept = ln A. Always convert back using 10^(…) or e^(…).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-models', prompt: 'How do you linearise y = axⁿ? What do you plot and what does the gradient represent?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'A log y vs log x graph has gradient 0.9 and y-intercept 1.2. Find a and n in y = axⁿ.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'An ln y vs x graph passes through (0, 2.1) and (5, 4.6). Find A and k in y = Ae^{kx}.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'When the exam gives a "ln y vs x" graph vs a "log y vs log x" graph, how does the analysis differ?' }
        ],
        summaryText: 'Linearise: take logs, identify linear form, read gradient and intercept. y=axⁿ: log y = n log x + log a (plot log y vs log x). y=abˣ: log y = log a + x log b. y=Aeᵏˣ: ln y = kx + ln A. Convert back using 10^ or e^.',
        ready: true
    },
    evidence: []
};
