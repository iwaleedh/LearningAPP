import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_5_4: Exponential growth and decay ────────────────────────────────
note_2_5_4 = """/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 4
 * "Exponential growth and decay"
 */

export const note_mathematics_2_5_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Recognise and work with models of the form y = Aeᵏˣ to describe growth and decay.' },
            terms: []
        },
        {
            id: 'h-models',
            type: 'heading',
            data: { text: 'Exponential Growth and Decay Models', level: 2 },
            terms: []
        },
        {
            id: 'p-models',
            type: 'paragraph',
            data: { text: 'Many real-world quantities increase or decrease at a rate proportional to their current value. This gives the model y = Ae^{kx}, where A and k are constants.' },
            terms: []
        },
        {
            id: 'callout-model',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Model y = Ae^{kt}',
                text: 'y = A · e^{kt}\\n\\n• A = value when t = 0 (initial value / y-intercept)\\n• k > 0: GROWTH (y increases over time)\\n• k < 0: DECAY (y decreases over time)\\n• |k| controls the rate: larger |k| means faster change\\n• The model has a horizontal asymptote y = 0'
            },
            terms: []
        },
        {
            id: 'svg-growth-decay',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200"><defs><marker id="ah64" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><line x1="20" y1="10" x2="20" y2="180" stroke="#374151" stroke-width="1.5" marker-end="url(#ah64)"/><line x1="10" y1="165" x2="305" y2="165" stroke="#374151" stroke-width="1.5" marker-end="url(#ah64)"/><text x="300" y="178" font-size="11" fill="#374151" font-family="sans-serif">t</text><text x="28" y="15" font-size="11" fill="#374151" font-family="sans-serif">y</text><path d="M20,145 Q 60,140 100,125 Q 140,108 170,85 Q 200,60 220,38 Q 235,22 245,14" stroke="#4f46e5" stroke-width="2.5" fill="none"/><text x="248" y="14" font-size="12" fill="#4f46e5" font-family="sans-serif">growth (k&gt;0)</text><path d="M20,40 Q 60,55 100,80 Q 140,110 170,132 Q 200,148 250,158 Q 270,162 295,163" stroke="#10b981" stroke-width="2.5" fill="none"/><text x="248" y="130" font-size="12" fill="#10b981" font-family="sans-serif">decay (k&lt;0)</text><circle cx="20" cy="145" r="4" fill="#4f46e5"/><text x="24" y="142" font-size="11" fill="#4f46e5" font-family="sans-serif">A</text><circle cx="20" cy="40" r="4" fill="#10b981"/><text x="24" y="38" font-size="11" fill="#10b981" font-family="sans-serif">A</text></svg>',
                caption: 'Exponential growth (k>0) and decay (k<0); both start at y = A when t = 0'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Population Growth', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A population P (in thousands) at time t years is given by P = 5e^{0.02t}. Find: (a) initial population; (b) P when t = 10; (c) when P = 8.',
                text: '(a) t=0: P = 5e⁰ = 5 thousand\\n\\n(b) t=10: P = 5e^{0.2} = 5×1.2214... ≈ 6.107 thousand\\n\\n(c) 5e^{0.02t} = 8\\n    e^{0.02t} = 1.6\\n    0.02t = ln(1.6) = 0.4700...\\n    t = 0.4700.../0.02 = 23.5 years'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Half-Life (Radioactive Decay)', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The mass of a radioactive sample at time t hours is M = 100e^{kt}. After 3 hours, M = 75 g. Find k and the half-life.',
                text: 'Finding k:\\n  75 = 100e^{3k}\\n  e^{3k} = 0.75\\n  3k = ln(0.75) = −0.2877...\\n  k = −0.0959... ≈ −0.0959\\n\\nHalf-life: find t when M = 50 g\\n  50 = 100e^{kt}\\n  e^{kt} = 0.5\\n  kt = ln(0.5) = −0.6931...\\n  t = −0.6931/(−0.0959) = 7.22 hours'
            },
            terms: []
        },
        {
            id: 'h-lin',
            type: 'heading',
            data: { text: 'Making the Model Linear: Using ln', level: 2 },
            terms: []
        },
        {
            id: 'p-lin',
            type: 'paragraph',
            data: { text: 'If y = Ae^{kx}, taking ln of both sides gives a linear relationship between ln(y) and x.' },
            terms: []
        },
        {
            id: 'eq-lin',
            type: 'equation',
            data: {
                html: 'ln(y) = ln(A) + kx',
                caption: 'Linear form — plotting ln(y) against x gives gradient k and y-intercept ln(A)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Using ln to Find A and k',
                text: 'In experiments, data from y = Ae^{kx} is "linearised" by plotting ln(y) against x:\\n• gradient = k\\n• y-intercept = ln A, so A = e^{y-intercept}\\n\\nThis is tested in sketching/interpreting graphs questions.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Growth/decay model: y = Ae^{kt}. A = initial value. k > 0 growth; k < 0 decay. To find k: substitute known point, take ln, solve. To find when y = value: set equation, take ln. Linearising: ln y = ln A + kx gives gradient k and y-intercept ln A.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-model', prompt: 'State the general exponential model and explain what A and k represent.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'P = 5e^{0.02t}. When does P = 8?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'M = 100e^{kt}, M = 75 when t = 3. Find k and the half-life.' },
            { id: 'c4', blockId: 'eq-lin', prompt: 'How do you linearise y = Ae^{kx}? What does the gradient represent?' }
        ],
        summaryText: 'y = Ae^{kt}: A = initial value; k>0 growth, k<0 decay. Find k by substituting known point and taking ln. Half-life: set y = A/2 and solve. Linearise: ln y = ln A + kx has gradient k, y-int ln A.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_5_5: Exponential modelling with y = Abˣ ──────────────────────────
note_2_5_5 = """/**
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
                text: 'Start: y = axⁿ\\nTake log: log y = log(axⁿ) = log a + n log x\\n\\nLet Y = log y and X = log x:\\n  Y = n·X + log a\\n\\nThis is y = mx + c with m = n and c = log a.\\nPlot log y against log x; gradient = n, y-intercept = log a → a = 10^{intercept}.'
            },
            terms: []
        },
        {
            id: 'callout-how2',
            type: 'callout',
            data: {
                style: 'key',
                title: 'How to Linearise y = abˣ',
                text: 'Start: y = abˣ\\nTake log: log y = log a + x log b\\n\\nPlot log y against x; gradient = log b → b = 10^{gradient}, y-intercept = log a → a = 10^{intercept}.'
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
                text: 'gradient n = (3.0 − 1.2)/(2 − 0) = 1.8/2 = 0.9\\n\\ny-intercept = 1.2, so log a = 1.2 → a = 10^{1.2} ≈ 15.8\\n\\nModel: y = 15.8 x^{0.9}'
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
                text: 'gradient k = (4.6 − 2.1)/(5 − 0) = 2.5/5 = 0.5\\n\\ny-intercept = 2.1 = ln A → A = e^{2.1} ≈ 8.17\\n\\nModel: y = 8.17 e^{0.5x}'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Log or ln?',
                text: 'The exam may use log₁₀ (written log) or ln (natural log). Read the question carefully:\\n• If "log y against x" with model y=abˣ: gradient = log b, intercept = log a → use 10^(…)\\n• If "ln y against x" with model y=Ae^{kx}: gradient = k, intercept = ln A → use e^(…)\\n\\nThe method is identical — just use the right base when converting back.'
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
"""

# ─── note_2_5_6: Solving natural log equations / applications ─────────────────
note_2_5_6 = """/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 6
 * "Further logarithmic equations and applications"
 */

export const note_mathematics_2_5_6 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Solve more complex equations involving logarithms and exponentials, including change of base and simultaneous equations.' },
            terms: []
        },
        {
            id: 'h-change',
            type: 'heading',
            data: { text: 'Change of Base and Harder Equations', level: 2 },
            terms: []
        },
        {
            id: 'callout-cob',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Change of Base',
                text: 'log_a(b) = ln(b) / ln(a)\\n\\nUseful for: evaluating log₅(17), log₃(2), etc. on a calculator.\\nAlso: log_a(b) = 1 / log_b(a)  (reciprocal relationship)'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Using Change of Base', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve log₅(x) = 3.',
                text: 'Method 1 (direct): log₅(x) = 3 → x = 5³ = 125\\n\\nMethod 2 (change of base): log₅(x) = ln(x)/ln(5) = 3\\n  ln(x) = 3·ln(5) = ln(5³) = ln(125)\\n  x = 125'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Equation with Two Different Logs', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 2log₃(x) − log₃(x−2) = 2.',
                text: 'log₃(x²) − log₃(x−2) = 2\\nlog₃(x²/(x−2)) = 2\\n\\nApply inverse: x²/(x−2) = 3² = 9\\nx² = 9(x−2) = 9x − 18\\nx² − 9x + 18 = 0\\n(x−3)(x−6) = 0\\nx = 3 or x = 6\\n\\nCheck domain: x > 0 and x−2 > 0, so x > 2\\nx = 3 ✓, x = 6 ✓ — both valid.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Quadratic in a Log', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve [ln(x)]² − 3ln(x) + 2 = 0.',
                text: 'Let u = ln(x):\\n  u² − 3u + 2 = 0\\n  (u−1)(u−2) = 0\\n  u = 1 or u = 2\\n\\nso ln(x) = 1 → x = e\\n   ln(x) = 2 → x = e²'
            },
            terms: []
        },
        {
            id: 'h-we4',
            type: 'heading',
            data: { text: 'Worked Example 4: Mixing ln and Polynomial', level: 2 },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the x-coordinates where y = e^x and y = 3 − 2e^{−x} intersect.',
                text: 'Set equal: eˣ = 3 − 2e^{−x}\\nMultiply through by eˣ: e^{2x} = 3eˣ − 2\\ne^{2x} − 3eˣ + 2 = 0\\n\\nLet u = eˣ:\\n  u² − 3u + 2 = 0\\n  (u−1)(u−2) = 0\\n  u = 1 or u = 2\\n\\neˣ = 1 → x = 0\\neˣ = 2 → x = ln 2'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can apply the change of base formula to evaluate logs in any base', checked: false },
                    { text: 'I can combine log terms before applying the inverse function', checked: false },
                    { text: 'I can identify when to use u = ln(x) substitution (quadratic in log)', checked: false },
                    { text: 'I always check the domain when solving log equations', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Change of base: log_a(b) = ln b / ln a. Solving log equations: combine logs using laws, apply inverse (e^ or 10^), solve, check domain. Quadratic in log: substitute u = ln x, solve quadratic, back-substitute. Always check domain: arguments of logs must be positive.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-cob', prompt: 'State the change of base formula for log_a(b).' },
            { id: 'c2', blockId: 'callout-we2', prompt: 'Solve 2log₃(x) − log₃(x−2) = 2.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Solve [ln x]² − 3 ln x + 2 = 0.' },
            { id: 'c4', blockId: 'callout-we4', prompt: 'Find where y = eˣ and y = 3 − 2e^{−x} intersect.' }
        ],
        summaryText: 'Change of base: log_a b = ln b / ln a. Complex log equations: combine logs, apply inverse, check domain. Disguised quadratics: u = ln x. Intersections of exponentials: multiply out to get e^{2x} − ... form.',
        ready: true
    },
    evidence: []
};
"""

files = {
    'note_2_5_4.js': note_2_5_4,
    'note_2_5_5.js': note_2_5_5,
    'note_2_5_6.js': note_2_5_6,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 5 Part 2 (Exp/Log notes 4-6) — all 3 notes done.')
print('Topic 5 complete: all 7 notes written.')
