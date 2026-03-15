import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_5_0: Exponential functions ───────────────────────────────────────
note_2_5_0 = """/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 0
 * "Exponential functions"
 */

export const note_mathematics_2_5_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Sketch and understand the key properties of exponential functions y = aˣ and y = eˣ.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is an Exponential Function?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'An <strong>exponential function</strong> has the form f(x) = aˣ, where a &gt; 0, a ≠ 1. The variable is in the <em>exponent</em> (power), not the base. This is different from power functions like x². The key base used in A-level mathematics is <strong>e ≈ 2.718…</strong>, giving f(x) = eˣ.' },
            terms: []
        },
        {
            id: 'callout-e',
            type: 'callout',
            data: {
                style: 'key',
                title: "Euler's Number e",
                text: 'e = 2.71828182845…  (irrational, like π)\\n\\ne is defined as the unique base such that the gradient of y = eˣ equals eˣ at every point — i.e. d/dx(eˣ) = eˣ.\\n\\nAlternative definitions:\\n  e = lim_{n→∞} (1 + 1/n)ⁿ\\n  e = 1 + 1/1! + 1/2! + 1/3! + …'
            },
            terms: []
        },
        {
            id: 'svg-exp',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" width="300" height="220"><defs><marker id="ah62" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><line x1="30" y1="10" x2="30" y2="200" stroke="#374151" stroke-width="1.5" marker-end="url(#ah62)"/><line x1="10" y1="170" x2="280" y2="170" stroke="#374151" stroke-width="1.5" marker-end="url(#ah62)"/><text x="35" y="210" font-size="11" fill="#374151" font-family="sans-serif">O</text><text x="275" y="184" font-size="11" fill="#374151" font-family="sans-serif">x</text><text x="38" y="15" font-size="11" fill="#374151" font-family="sans-serif">y</text><path d="M 10,168 Q 40,165 70,155 Q 100,140 120,118 Q 140,96 155,70 Q 165,52 175,32 Q 180,22 185,14" stroke="#4f46e5" stroke-width="2.5" fill="none"/><text x="188" y="20" font-size="13" fill="#4f46e5" font-family="sans-serif" font-style="italic">y = eˣ</text><circle cx="30" cy="148" r="4" fill="#10b981"/><text x="34" y="145" font-size="11" fill="#10b981" font-family="sans-serif">(0, 1)</text><line x1="10" y1="148" x2="280" y2="148" stroke="#4f46e5" stroke-width="0.8" stroke-dasharray="4,3"/><text x="245" y="143" font-size="10" fill="#4f46e5" font-family="sans-serif">y=1</text><text x="8" y="174" font-size="11" fill="#374151" font-family="sans-serif">asymptote y=0 (x-axis)</text></svg>',
                caption: 'Graph of y = eˣ: passes through (0,1), asymptote y=0, always increasing'
            },
            terms: []
        },
        {
            id: 'h-props',
            type: 'heading',
            data: { text: 'Key Properties of y = eˣ', level: 2 },
            terms: []
        },
        {
            id: 'list-props',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Domain: all real numbers (−∞ < x < ∞)' },
                    { text: 'Range: y &gt; 0 (always positive)' },
                    { text: 'Passes through (0, 1) since e⁰ = 1' },
                    { text: '<strong>Asymptote</strong>: y = 0 as x → −∞' },
                    { text: 'Always <strong>increasing</strong> (gradient = eˣ &gt; 0 always)' },
                    { text: 'd/dx(eˣ) = eˣ (the function is its own derivative)' }
                ]
            },
            terms: []
        },
        {
            id: 'h-trans',
            type: 'heading',
            data: { text: 'Transformations of y = eˣ', level: 2 },
            terms: []
        },
        {
            id: 'table-trans',
            type: 'comparisonTable',
            data: {
                headers: ['Function', 'Transformation', 'Key point / Asymptote'],
                rows: [
                    ['y = eˣ + k', 'Translate k units up (k>0) or down (k<0)', 'Passes through (0, 1+k); asymptote y=k'],
                    ['y = eˣ⁺ᵃ', 'Translate −a units in x-direction', 'Passes through (−a, 1); asymptote y=0'],
                    ['y = keˣ', 'Stretch by factor k in the y-direction', 'Passes through (0, k); asymptote y=0'],
                    ['y = e⁻ˣ', 'Reflect in the y-axis', 'Passes through (0, 1); decreasing; asymptote y=0'],
                    ['y = e^(kx)', 'Stretch by factor 1/k in x-direction', 'Passes through (0, 1); grows faster if k>1']
                ],
                caption: 'Transformations of exponential functions'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Sketch Method',
                text: 'To sketch y = eˣ + k:\\n1. Identify the asymptote y = k\\n2. Find the y-intercept: x=0 → y = 1+k\\n3. Show the curve approaching y=k from above as x → −∞\\n4. Show the curve rising steeply for large positive x'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Exponential function y = aˣ (a>0, a≠1). y = eˣ where e ≈ 2.718 is the natural base. Key properties: domain ℝ, range y>0, passes through (0,1), asymptote y=0, increasing. d/dx(eˣ) = eˣ. Transformations follow standard rules (translate, reflect, stretch).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-e', prompt: 'What is e? State its approximate value and its key calculus property.' },
            { id: 'c2', blockId: 'list-props', prompt: 'State four key properties of y = eˣ (domain, range, intercept, asymptote).' },
            { id: 'c3', blockId: 'table-trans', prompt: 'How does the graph of y = eˣ + 3 differ from y = eˣ?' },
            { id: 'c4', blockId: 'svg-exp', prompt: 'Sketch y = eˣ, labelling the asymptote and y-intercept.' }
        ],
        summaryText: 'y = eˣ: domain ℝ, range y>0, y-int (0,1), asymptote y=0, always increasing, d/dx(eˣ)=eˣ. e≈2.718. Transformations: translate, reflect, stretch follow standard rules.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_5_1: Logarithmic functions ───────────────────────────────────────
note_2_5_1 = """/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 1
 * "Logarithmic functions"
 */

export const note_mathematics_2_5_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Understand logarithms as the inverse of exponentials, and sketch y = ln x.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is a Logarithm?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'The <strong>logarithm</strong> of a number is the power to which a base must be raised to equal that number. If aˣ = y, then logₐ(y) = x. The <strong>natural logarithm</strong> uses base e and is written ln(x) = logₑ(x).' },
            terms: []
        },
        {
            id: 'callout-def',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Definition — Linking eˣ and ln(x)',
                text: 'y = eˣ  ⟺  x = ln(y)\\n\\nThese are inverse functions.\\n\\nConsequences:\\n  ln(eˣ) = x  for all x\\n  e^{ln(x)} = x  for x > 0\\n  ln(1) = 0  (since e⁰ = 1)\\n  ln(e) = 1  (since e¹ = e)'
            },
            terms: []
        },
        {
            id: 'svg-ln',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" width="300" height="220"><defs><marker id="ah63" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><line x1="30" y1="10" x2="30" y2="200" stroke="#374151" stroke-width="1.5" marker-end="url(#ah63)"/><line x1="10" y1="110" x2="280" y2="110" stroke="#374151" stroke-width="1.5" marker-end="url(#ah63)"/><text x="275" y="124" font-size="11" fill="#374151" font-family="sans-serif">x</text><text x="38" y="15" font-size="11" fill="#374151" font-family="sans-serif">y</text><path d="M 31,200 Q 35,170 45,148 Q 60,120 85,100 Q 110,82 145,65 Q 175,52 210,42 Q 240,34 270,26" stroke="#4f46e5" stroke-width="2.5" fill="none"/><text x="240" y="22" font-size="13" fill="#4f46e5" font-family="sans-serif" font-style="italic">y = ln x</text><circle cx="57" cy="110" r="4" fill="#10b981"/><text x="62" y="106" font-size="11" fill="#10b981" font-family="sans-serif">(1, 0)</text><circle cx="103" cy="80" r="4" fill="#10b981"/><text x="108" y="76" font-size="11" fill="#10b981" font-family="sans-serif">(e, 1)</text><line x1="30" y1="10" x2="30" y2="210" stroke="#4f46e5" stroke-width="1" stroke-dasharray="4,3"/><text x="5" y="220" font-size="10" fill="#4f46e5" font-family="sans-serif">asymptote x=0</text></svg>',
                caption: 'Graph of y = ln(x): passes through (1,0) and (e,1); vertical asymptote x=0'
            },
            terms: []
        },
        {
            id: 'h-props',
            type: 'heading',
            data: { text: 'Key Properties of y = ln(x)', level: 2 },
            terms: []
        },
        {
            id: 'list-props',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Domain: x &gt; 0 (logarithm only defined for positive arguments)' },
                    { text: 'Range: all real numbers (−∞ < y < ∞)' },
                    { text: 'Passes through (1, 0) since ln(1) = 0' },
                    { text: 'Passes through (e, 1) since ln(e) = 1' },
                    { text: '<strong>Vertical asymptote</strong>: x = 0 (y → −∞ as x → 0⁺)' },
                    { text: 'Always <strong>increasing</strong>; d/dx(ln x) = 1/x' },
                    { text: 'Reflection of y = eˣ in the line y = x' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we',
            type: 'heading',
            data: { text: 'Worked Examples', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate: (a) ln(e³)  (b) e^{ln 5}  (c) ln(1/e)',
                text: '(a) ln(e³) = 3  (since ln undoes e^: ln(eˣ) = x)\\n(b) e^{ln 5} = 5  (since e^ undoes ln: e^{ln x} = x)\\n(c) ln(1/e) = ln(e⁻¹) = −1'
            },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve: (a) eˣ = 7  (b) ln(x) = 3  (c) e^{2x+1} = 5',
                text: '(a) eˣ = 7 → x = ln(7) ≈ 1.946\\n\\n(b) ln(x) = 3 → x = e³ ≈ 20.09\\n\\n(c) e^{2x+1} = 5\\n    2x + 1 = ln(5)\\n    2x = ln(5) − 1\\n    x = (ln 5 − 1)/2 ≈ 0.305'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Inverse Operations',
                text: 'ln and e are inverse functions — apply one to undo the other:\\n• To solve eˣ = k: take ln of both sides → x = ln(k)\\n• To solve ln(x) = k: apply e to both sides → x = eᵏ\\n\\nNever take ln of a negative number or zero — there is no real answer.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'ln(x) = logₑ(x) is the inverse of eˣ. Domain x>0, range ℝ. Passes through (1,0), vertical asymptote x=0. Key: ln(eˣ)=x and e^{ln x}=x. To solve eˣ=k: x=ln k. To solve ln x=k: x=eᵏ.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-def', prompt: 'State the relationship between y = eˣ and x = ln(y).' },
            { id: 'c2', blockId: 'list-props', prompt: 'State the domain, range, and intercepts of y = ln(x).' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Evaluate ln(e³) and e^{ln 5}.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Solve: eˣ = 7 and ln(x) = 3.' }
        ],
        summaryText: 'ln is inverse of e^. ln(eˣ)=x; e^{ln x}=x. Domain x>0, range ℝ. Passes through (1,0) and (e,1). Asymptote x=0. Solve by applying the inverse operation.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_5_2: Laws of logarithms ──────────────────────────────────────────
note_2_5_2 = """/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 2
 * "Laws of logarithms"
 */

export const note_mathematics_2_5_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply the laws of logarithms to simplify expressions and solve equations.' },
            terms: []
        },
        {
            id: 'h-laws',
            type: 'heading',
            data: { text: 'The Laws of Logarithms', level: 2 },
            terms: []
        },
        {
            id: 'p-laws',
            type: 'paragraph',
            data: { text: 'These laws hold for <strong>any base a &gt; 0, a ≠ 1</strong>, and for all valid arguments (M, N &gt; 0). They are usually stated for log base a or for ln (natural log).' },
            terms: []
        },
        {
            id: 'eq-mul',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub>(MN) = log<sub>a</sub>M + log<sub>a</sub>N',
                caption: 'Multiplication rule: log of a product = sum of logs'
            },
            terms: []
        },
        {
            id: 'eq-div',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub><span class="nb-frac"><span class="nb-num">M</span><span class="nb-den">N</span></span> = log<sub>a</sub>M − log<sub>a</sub>N',
                caption: 'Division rule: log of a quotient = difference of logs'
            },
            terms: []
        },
        {
            id: 'eq-pow',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub>(Mᵏ) = k · log<sub>a</sub>M',
                caption: 'Power rule: power comes down as a multiplier'
            },
            terms: []
        },
        {
            id: 'eq-recip',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub><span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">M</span></span> = −log<sub>a</sub>M',
                caption: 'Reciprocal rule (special case of power rule with k = −1)'
            },
            terms: []
        },
        {
            id: 'eq-special',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub>a = 1       log<sub>a</sub>1 = 0',
                caption: 'Special values: log of the base = 1; log of 1 = 0'
            },
            terms: []
        },
        {
            id: 'callout-change',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Change of Base Formula',
                text: 'log_a(b) = ln(b) / ln(a) = log(b) / log(a)\\n\\nUsed to evaluate log base a on a calculator (which only has log₁₀ and ln).'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Simplify Using Log Laws', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Write 2ln(3) + ln(4) − ln(6) as a single logarithm.',
                text: '2ln(3) = ln(3²) = ln(9)\\n\\n2ln(3) + ln(4) − ln(6) = ln(9) + ln(4) − ln(6)\\n                       = ln(9×4) − ln(6)\\n                       = ln(36) − ln(6)\\n                       = ln(36/6)\\n                       = ln(6)'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Solve Using Log Laws', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve: log₂(x+3) + log₂(x−1) = 5.',
                text: 'log₂((x+3)(x−1)) = 5\\n(x+3)(x−1) = 2⁵ = 32\\nx² + 2x − 3 = 32\\nx² + 2x − 35 = 0\\n(x+7)(x−5) = 0\\nx = −7 or x = 5\\n\\nCheck: log₂ requires argument > 0:\\n• x = −7: x+3 = −4 < 0 ✗ (reject)\\n• x = 5: x+3=8>0, x−1=4>0 ✓\\n\\nTherefore x = 5.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Expansion Using Log Laws', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Express ln(x²√(x+1)) in terms of ln(x) and ln(x+1).',
                text: 'ln(x²√(x+1)) = ln(x²) + ln((x+1)^{1/2})\\n             = 2ln(x) + (1/2)ln(x+1)'
            },
            terms: []
        },
        {
            id: 'callout-warn',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '✗ ln(A + B) ≠ ln(A) + ln(B)   — the SUM rule only works for a PRODUCT inside the log\\n✗ ln(A − B) ≠ ln(A) − ln(B)   — the DIFFERENCE rule only works for a QUOTIENT inside the log\\n✗ ln(A)·ln(B) ≠ ln(AB)         — the product of logs is NOT a useful simplification\\n\\n✓ Always check that arguments are positive after solving.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Log laws: ln(MN)=ln M+ln N; ln(M/N)=ln M−ln N; ln(Mᵏ)=k·ln M. Special: ln 1=0, ln e=1. Change of base: log_a(b)=ln b/ln a. Common mistake: ln(A+B) ≠ ln A + ln B. Always check domain after solving log equations (arguments must be positive).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-mul', prompt: 'State the three main laws of logarithms (multiplication, division, power).' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write 2ln 3 + ln 4 − ln 6 as a single logarithm.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Solve log₂(x+3) + log₂(x−1) = 5.' },
            { id: 'c4', blockId: 'callout-warn', prompt: 'What is the most common mistake students make with logarithm laws?' }
        ],
        summaryText: 'Log laws: log(MN)=log M+log N; log(M/N)=log M−log N; log(Mᵏ)=k log M. Solve log equations by combining into one log, then applying the inverse (e^ or 10^). Always check domain.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_5_3: Equations involving logarithms and exponentials ──────────────
note_2_5_3 = """/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 3
 * "Equations involving logarithms and exponentials"
 */

export const note_mathematics_2_5_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Solve equations of the form aˣ = b and equations in which the unknown appears in a logarithm.' },
            terms: []
        },
        {
            id: 'h-exp-eq',
            type: 'heading',
            data: { text: 'Solving Exponential Equations', level: 2 },
            terms: []
        },
        {
            id: 'p-exp-eq',
            type: 'paragraph',
            data: { text: 'When the unknown is in the <em>power</em>, take <strong>ln</strong> of both sides and use the power rule ln(aˣ) = x·ln(a) to bring the index down.' },
            terms: []
        },
        {
            id: 'callout-method',
            type: 'callout',
            data: {
                style: 'key',
                title: 'General Strategy',
                text: 'To solve aˣ = b (a, b > 0):\\n  Take ln of both sides: ln(aˣ) = ln(b)\\n  x · ln(a) = ln(b)\\n  x = ln(b) / ln(a)\\n\\nOr equivalently using change of base: x = log_a(b)'
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
                title: 'Solve 3ˣ = 20, giving your answer to 3 significant figures.',
                text: 'Take ln of both sides:\\n  ln(3ˣ) = ln(20)\\n  x · ln(3) = ln(20)\\n  x = ln(20)/ln(3) = 2.996.../1.099... ≈ 2.73 (3 s.f.)'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 5^{2x−1} = 8.',
                text: '5^{2x−1} = 8\\nTake ln: (2x−1)·ln(5) = ln(8)\\n2x−1 = ln(8)/ln(5) = 2.079.../1.609... = 1.292...\\n2x = 2.292...\\nx = 1.15 (3 s.f.)'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Simultaneous Exponential Equations', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve simultaneously: 2ˣ = 3ʸ and x − 2y = 5.',
                text: 'From 2ˣ = 3ʸ:\\n  x·ln(2) = y·ln(3)\\n  x = y·ln(3)/ln(2)  … (i)\\n\\nFrom x − 2y = 5 and (i):\\n  y·ln(3)/ln(2) − 2y = 5\\n  y(ln(3)/ln(2) − 2) = 5\\n  y(1.585 − 2) = 5\\n  y(−0.415) = 5\\n  y = −12.05...\\n  x = 5 + 2(−12.05) = −19.1'
            },
            terms: []
        },
        {
            id: 'h-we4',
            type: 'heading',
            data: { text: 'Worked Example 4: Disguised Quadratic', level: 2 },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve e^{2x} − 5eˣ + 6 = 0.',
                text: 'Let u = eˣ (so u > 0):\\n  u² − 5u + 6 = 0\\n  (u−2)(u−3) = 0\\n  u = 2 or u = 3\\n\\nSo eˣ = 2 → x = ln(2) ≈ 0.693\\n   eˣ = 3 → x = ln(3) ≈ 1.099'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Disguised Quadratic Technique',
                text: 'When you see e^{2x} in an equation, substitute u = eˣ since e^{2x} = (eˣ)² = u². This converts the equation into a quadratic in u, which you can factorise or solve by the formula. Remember u = eˣ > 0 always — reject any solution u ≤ 0.'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can solve aˣ = b by taking ln of both sides', checked: false },
                    { text: 'I can solve e^{kx+c} = d by using x = (ln d − c)/k', checked: false },
                    { text: 'I recognise when to use the substitution u = eˣ for disguised quadratics', checked: false },
                    { text: 'I remember to reject eˣ = negative (impossible)', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Exponential equations aˣ = b: take ln both sides, bring power down, solve. Disguised quadratic: substitute u = eˣ; solve quadratic; convert back; reject u ≤ 0. Simultaneous: express one variable in terms of the other using ln, then substitute.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-method', prompt: 'How do you solve aˣ = b using logarithms?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve 3ˣ = 20, giving your answer to 3 s.f.' },
            { id: 'c3', blockId: 'callout-we4', prompt: 'Solve e^{2x} − 5eˣ + 6 = 0.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What substitution converts e^{2x} − 5eˣ + 6 = 0 into a quadratic?' }
        ],
        summaryText: 'aˣ=b: x=ln b/ln a. Solve by taking ln and using power rule. Disguised quadratic: u=eˣ, solve, back-substitute, reject u≤0. Simultaneous: eliminate one variable using ln relationships.',
        ready: true
    },
    evidence: []
};
"""

files = {
    'note_2_5_0.js': note_2_5_0,
    'note_2_5_1.js': note_2_5_1,
    'note_2_5_2.js': note_2_5_2,
    'note_2_5_3.js': note_2_5_3,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 5 Part 1 (Exp/Log notes 0-3) — all 4 notes done.')
