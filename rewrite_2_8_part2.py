import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_8_3: Partial fractions integration ───────────────────────────────
note_2_8_3 = """/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 3
 * "Integration using partial fractions"
 */

export const note_mathematics_2_8_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Decompose rational functions into partial fractions and integrate each term.' },
            terms: []
        },
        {
            id: 'h-pf',
            type: 'heading',
            data: { text: 'Partial Fractions Recap', level: 2 },
            terms: []
        },
        {
            id: 'callout-pf-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Partial Fraction Forms',
                text: 'Two distinct linear factors:\\n  f(x)/[(ax+b)(cx+d)] = A/(ax+b) + B/(cx+d)\\n\\nRepeated linear factor:\\n  f(x)/(ax+b)² = A/(ax+b) + B/(ax+b)²\\n\\nIrreducible quadratic factor:\\n  f(x)/[(ax+b)(cx²+d)] = A/(ax+b) + (Bx+C)/(cx²+d)\\n\\nFind A, B, C by multiplying through by the denominator and substituting convenient values of x, or equating coefficients.'
            },
            terms: []
        },
        {
            id: 'h-int-pf',
            type: 'heading',
            data: { text: 'Integrating Partial Fractions', level: 2 },
            terms: []
        },
        {
            id: 'callout-int-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'This is Why Partial Fractions are Useful',
                text: 'Each term after decomposition has the form A/(ax + b), which integrates to:\\n\\n  ∫ A/(ax+b) dx = (A/a) ln|ax+b| + c\\n\\nOr A/(ax+b)ⁿ (n ≥ 2), which integrates using the power rule:\\n\\n  ∫ A/(ax+b)² dx = −A/[a(ax+b)] + c'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫ (5x − 3)/[(x+1)(x−2)] dx.',
                text: '(5x − 3)/[(x+1)(x−2)] = A/(x+1) + B/(x−2)\\n\\nMultiply through: 5x − 3 = A(x−2) + B(x+1)\\n\\nLet x = 2: 7 = 3B  →  B = 7/3\\nLet x = −1: −8 = −3A  →  A = 8/3\\n\\n∫ [(8/3)/(x+1) + (7/3)/(x−2)] dx\\n= (8/3)ln|x+1| + (7/3)ln|x−2| + c'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Definite Integral', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate ∫₁³ 4/[(x)(x+2)] dx.',
                text: '4/[x(x+2)] = A/x + B/(x+2)\\n4 = A(x+2) + Bx\\n\\nLet x = 0: A = 2\\nLet x = −2: B = −2\\n\\n∫₁³ [2/x − 2/(x+2)] dx\\n= [2 ln|x| − 2 ln|x+2|]₁³\\n= [2 ln(3/5)] − [2 ln(1/3)]\\n= 2 ln(3/5) − 2 ln(1/3)\\n= 2 ln(9/5)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Improper Fractions',
                text: 'If the degree of the numerator ≥ degree of the denominator, perform polynomial long division FIRST.\\n\\nExample: ∫ (x²+1)/(x+1) dx — divide x²+1 by x+1 first to get a mixed expression, then integrate.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Decompose into partial fractions: A/(ax+b) + B/(cx+d) etc. Each A/(ax+b) integrates to (A/a)ln|ax+b|+c. For repeated factors A/(ax+b)², use the power rule giving −A/[a(ax+b)]+c. If degree(top) ≥ degree(bottom): long-divide first.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-int-key', prompt: 'What does A/(ax+b) integrate to?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find ∫ (5x−3)/[(x+1)(x−2)] dx.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'What must you do before using partial fractions if the fraction is improper?' },
            { id: 'c4', blockId: 'callout-pf-key', prompt: 'State the partial fraction forms for two distinct linear factors and for a repeated linear factor.' }
        ],
        summaryText: 'Partial fractions: split into A/(ax+b)+B/(cx+d). Integrate: A/(ax+b)→(A/a)ln|ax+b|+c. Repeated: A/(ax+b)²→−A/[a(ax+b)]+c. If improper fraction: long divide first.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_8_4: Definite integration and areas ───────────────────────────────
note_2_8_4 = """/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 4
 * "Definite integration and areas"
 */

export const note_mathematics_2_8_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use definite integration to find areas under and between curves, handling regions below the x-axis carefully.' },
            terms: []
        },
        {
            id: 'h-ftc',
            type: 'heading',
            data: { text: 'The Fundamental Theorem of Calculus', level: 2 },
            terms: []
        },
        {
            id: 'eq-ftc',
            type: 'equation',
            data: {
                html: '∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)   where F\'(x) = f(x)',
                caption: 'The definite integral gives the signed area between the curve and the x-axis'
            },
            terms: []
        },
        {
            id: 'svg-area',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180"><defs><marker id="ah67" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#374151"/></marker></defs><line x1="30" y1="155" x2="300" y2="155" stroke="#374151" stroke-width="1.5" marker-end="url(#ah67)"/><line x1="40" y1="15" x2="40" y2="160" stroke="#374151" stroke-width="1.5" marker-end="url(#ah67)"/><path d="M 50,135 C 80,120 100,60 140,50 C 180,40 200,90 240,100 C 260,105 270,100 280,90" stroke="#4f46e5" stroke-width="2" fill="none"/><path d="M 100,155 L 100,87 C 120,72 140,50 160,50 C 180,50 200,90 210,100 L 210,155 Z" fill="#4f46e5" fill-opacity="0.18" stroke="none"/><line x1="100" y1="145" x2="100" y2="165" stroke="#374151" stroke-width="1.2"/><line x1="210" y1="145" x2="210" y2="165" stroke="#374151" stroke-width="1.2"/><text x="96" y="174" font-size="12" fill="#374151" font-family="sans-serif">a</text><text x="206" y="174" font-size="12" fill="#374151" font-family="sans-serif">b</text><text x="290" y="158" font-size="12" fill="#374151" font-family="sans-serif">x</text><text x="44" y="14" font-size="12" fill="#374151" font-family="sans-serif">y</text><text x="140" y="120" font-size="12" fill="#4f46e5" font-family="sans-serif">A = ∫ f(x)dx</text></svg>',
                caption: 'Shaded area A = ∫ₐᵇ f(x) dx when f(x) ≥ 0 throughout [a, b]'
            },
            terms: []
        },
        {
            id: 'h-below',
            type: 'heading',
            data: { text: 'Area Below the x-axis', level: 2 },
            terms: []
        },
        {
            id: 'callout-below',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Negative Integrals',
                text: 'When f(x) < 0 in an interval, ∫ f(x) dx gives a NEGATIVE result.\\n\\nTo find the area (always positive):\\n  Area = |∫ f(x) dx|\\n\\nFor a region partly above and partly below the x-axis:\\n  1. Find the x-value(s) where f(x) = 0 (the x-intercepts).\\n  2. Integrate each segment separately.\\n  3. Take the absolute value of each integral.\\n  4. ADD the absolute values.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Simple Area', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area enclosed by y = x² − 4 and the x-axis.',
                text: 'Curve crosses x-axis: x² = 4  →  x = ±2\\n\\nArea = |∫₋₂² (x² − 4) dx| (integrand is ≤ 0 in this region)\\n\\n∫₋₂² (x² − 4) dx = [x³/3 − 4x]₋₂²\\n= (8/3 − 8) − (−8/3 + 8)\\n= (8/3 − 8) − (−8/3 + 8)\\n= 8/3 − 8 + 8/3 − 8 = 16/3 − 16 = −32/3\\n\\nArea = 32/3'
            },
            terms: []
        },
        {
            id: 'h-between',
            type: 'heading',
            data: { text: 'Area Between Two Curves', level: 2 },
            terms: []
        },
        {
            id: 'callout-between',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Formula for Area Between Curves',
                text: 'If f(x) ≥ g(x) on [a, b]:\\n\\n  Area = ∫ₐᵇ [f(x) − g(x)] dx\\n\\nFind a and b by solving f(x) = g(x) to get the intersection points.\\nAlways check which curve is on top before integrating.'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Between Curves', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area between y = x + 2 and y = x² for 0 ≤ x ≤ 2.',
                text: 'Check intersection in [0,2]: x² = x + 2 → x²−x−2=0 → x=2 (in range), x=−1 (out)\\n\\nFor 0 ≤ x ≤ 2: y = x + 2 is above y = x² (check x=1: 3 > 1 ✓)\\n\\nArea = ∫₀² [(x+2) − x²] dx = ∫₀² (x + 2 − x²) dx\\n= [x²/2 + 2x − x³/3]₀²\\n= (2 + 4 − 8/3) − 0\\n= 6 − 8/3 = 10/3'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Area = ∫ₐᵇ f(x) dx when f(x) ≥ 0. If f(x) < 0: area = |∫ f(x) dx|. Mixed sign: split at zeros, integrate each part separately, sum absolutes. Between curves: ∫[top − bottom] dx, limits at intersections.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-below', prompt: 'What happens to ∫ f(x) dx when f(x) < 0? How do you find the actual area?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the area between y = x² − 4 and the x-axis.' },
            { id: 'c3', blockId: 'callout-between', prompt: 'State the formula for the area between two curves f(x) ≥ g(x) on [a, b].' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Find the area between y = x + 2 and y = x² for 0 ≤ x ≤ 2.' }
        ],
        summaryText: 'Definite integral gives signed area. Negative below x-axis → take absolute value. Mixed: split at zeros. Between curves: ∫(top−bottom)dx, limits at intersections.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_8_5: Trapezium rule ───────────────────────────────────────────────
note_2_8_5 = """/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 5
 * "The trapezium rule"
 */

export const note_mathematics_2_8_5 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use the trapezium rule to estimate definite integrals and determine whether the estimate is an over- or under-estimate.' },
            terms: []
        },
        {
            id: 'h-formula',
            type: 'heading',
            data: { text: 'The Trapezium Rule', level: 2 },
            terms: []
        },
        {
            id: 'eq-trap',
            type: 'equation',
            data: {
                html: '∫<sub>a</sub><sup>b</sup> f(x) dx ≈ <span class="nb-frac"><span class="nb-num">h</span><span class="nb-den">2</span></span>[y<sub>0</sub> + 2(y<sub>1</sub> + y<sub>2</sub> + … + y<sub>n−1</sub>) + y<sub>n</sub>]',
                caption: 'where h = (b − a)/n is the strip width and y₀, y₁, …, yₙ are the y-values at equally spaced x-values'
            },
            terms: []
        },
        {
            id: 'svg-trap',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 185" width="320" height="185"><defs><marker id="ah68" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#374151"/></marker></defs><line x1="30" y1="155" x2="300" y2="155" stroke="#374151" stroke-width="1.5" marker-end="url(#ah68)"/><line x1="40" y1="15" x2="40" y2="160" stroke="#374151" stroke-width="1.5" marker-end="url(#ah68)"/><path d="M 60,130 Q 120,60 180,50 Q 230,45 260,80" stroke="#4f46e5" stroke-width="2" fill="none"/><polygon points="60,155 60,130 110,90 110,155" fill="#4f46e5" fill-opacity="0.2" stroke="#4f46e5" stroke-width="1"/><polygon points="110,155 110,90 160,56 160,155" fill="#4f46e5" fill-opacity="0.2" stroke="#4f46e5" stroke-width="1"/><polygon points="160,155 160,56 210,51 210,155" fill="#4f46e5" fill-opacity="0.2" stroke="#4f46e5" stroke-width="1"/><polygon points="210,155 210,51 260,80 260,155" fill="#4f46e5" fill-opacity="0.2" stroke="#4f46e5" stroke-width="1"/><text x="82" y="172" font-size="10" fill="#374151" font-family="sans-serif">h</text><text x="133" y="172" font-size="10" fill="#374151" font-family="sans-serif">h</text><text x="183" y="172" font-size="10" fill="#374151" font-family="sans-serif">h</text><text x="233" y="172" font-size="10" fill="#374151" font-family="sans-serif">h</text><text x="53" y="142" font-size="9" fill="#374151" font-family="sans-serif">y₀</text><text x="103" y="85" font-size="9" fill="#374151" font-family="sans-serif">y₁</text><text x="153" y="52" font-size="9" fill="#374151" font-family="sans-serif">y₂</text><text x="203" y="47" font-size="9" fill="#374151" font-family="sans-serif">y₃</text><text x="253" y="76" font-size="9" fill="#374151" font-family="sans-serif">y₄</text><text x="290" y="158" font-size="11" fill="#374151" font-family="sans-serif">x</text><text x="44" y="13" font-size="11" fill="#374151" font-family="sans-serif">y</text></svg>',
                caption: 'Four trapezoid strips (n = 4) approximating the area under the curve'
            },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Step-by-Step Method',
                text: '1. Calculate h = (b − a)/n where n = number of strips.\\n2. List the x-values: x₀=a, x₁=a+h, x₂=a+2h, …, xₙ=b.\\n3. Calculate y₀, y₁, …, yₙ by substituting each x into f(x).\\n4. Apply the formula: (h/2)[first + last + 2×(all middle values)].\\n5. Include appropriate rounding and units.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Use the trapezium rule with 4 strips to estimate ∫₁³ ln x dx.',
                text: 'h = (3 − 1)/4 = 0.5\\n\\nx:   1.0    1.5    2.0    2.5    3.0\\ny:   0.000  0.405  0.693  0.916  1.099\\n  (in y = ln x, 4 d.p.)\\n\\nFirst: y₀ = 0.000, Last: y₄ = 1.099\\nMiddle sum: y₁ + y₂ + y₃ = 0.405 + 0.693 + 0.916 = 2.014\\n\\nEstimate = (0.5/2)[0.000 + 1.099 + 2 × 2.014]\\n         = 0.25 × [0.000 + 1.099 + 4.028]\\n         = 0.25 × 5.127\\n         = 1.282 (4 s.f.)\\n\\n(Exact value = [x ln x − x]₁³ = (3 ln 3 − 3) − (0 − 1) = 3 ln 3 − 2 ≈ 1.296.)'
            },
            terms: []
        },
        {
            id: 'h-accuracy',
            type: 'heading',
            data: { text: 'Over- or Under-estimate?', level: 2 },
            terms: []
        },
        {
            id: 'table-accuracy',
            type: 'comparisonTable',
            data: {
                headers: ['Curve shape', 'Estimate is...', 'Reason'],
                rows: [
                    ['Concave up (∪)', 'Over-estimate', 'Trapezoids lie above the curve'],
                    ['Concave down (∩)', 'Under-estimate', 'Trapezoids lie below the curve']
                ],
                caption: 'Determined by the sign of d²y/dx²'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Improving Accuracy',
                text: 'Use more strips (larger n) → smaller h → trapezoids fit the curve better → more accurate estimate.\\n\\nThe exact value of the integral gives the benchmark to compare against.'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can state and apply the trapezium rule formula correctly', checked: false },
                    { text: 'I know to multiply ALL middle y-values by 2', checked: false },
                    { text: 'I can determine whether the estimate is an over- or under-estimate from the curve\'s concavity', checked: false },
                    { text: 'I can calculate h = (b − a)/n and list x-values correctly', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Trapezium rule: (h/2)[y₀ + 2(y₁ + … + yₙ₋₁) + yₙ] where h=(b−a)/n. Middle y-values multiplied by 2; first and last multiplied by 1. Concave up → over-estimate; concave down → under-estimate. Increasing n improves accuracy.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-trap', prompt: 'State the trapezium rule formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Use the trapezium rule with 4 strips to estimate ∫₁³ ln x dx.' },
            { id: 'c3', blockId: 'table-accuracy', prompt: 'Is the trapezium rule an over- or under-estimate when the curve is concave up?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How can you improve the accuracy of the trapezium rule?' }
        ],
        summaryText: 'Trapezium rule: (h/2)[y₀+2(middle y\'s)+yₙ]; h=(b−a)/n. Concave up→overestimate; concave down→underestimate. More strips = better approximation.',
        ready: true
    },
    evidence: []
};
"""

files = {
    'note_2_8_3.js': note_2_8_3,
    'note_2_8_4.js': note_2_8_4,
    'note_2_8_5.js': note_2_8_5,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 8 Part 2 (Integration notes 3–5) done. ALL 45 WMA12 notes written!')
