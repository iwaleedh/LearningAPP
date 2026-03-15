import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_7_4: Implicit and parametric differentiation ─────────────────────
note_2_7_4 = """/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 4
 * "Implicit and parametric differentiation"
 */

export const note_mathematics_2_7_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Differentiate implicitly and find dy/dx for parametrically defined curves.' },
            terms: []
        },
        {
            id: 'h-implicit',
            type: 'heading',
            data: { text: 'Implicit Differentiation', level: 2 },
            terms: []
        },
        {
            id: 'callout-key-impl',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Implicit Differentiation Rule',
                text: 'When differentiating a term in y with respect to x, use the chain rule:\\n\\n  d/dx[f(y)] = f\'(y) · dy/dx\\n\\nThis is because y is a function of x, so the chain rule applies.\\n\\nFor example:\\n  d/dx(y²) = 2y · dy/dx\\n  d/dx(sin y) = cos y · dy/dx\\n  d/dx(eʸ) = eʸ · dy/dx'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Implicit Differentiation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find dy/dx for x² + y² = 25.',
                text: 'Differentiate both sides with respect to x:\\n  2x + 2y · dy/dx = 0\\n  2y · dy/dx = −2x\\n  dy/dx = −x/y'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Mixed Terms', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find dy/dx for x³ + 2xy + y³ = 5.',
                text: 'Differentiate each term with respect to x:\\n  3x² + 2[1·y + x·dy/dx] + 3y²·dy/dx = 0\\n              ↑ product rule on 2xy\\n  3x² + 2y + 2x·dy/dx + 3y²·dy/dx = 0\\n  (2x + 3y²)·dy/dx = −3x² − 2y\\n  dy/dx = (−3x² − 2y)/(2x + 3y²)'
            },
            terms: []
        },
        {
            id: 'h-param',
            type: 'heading',
            data: { text: 'Parametric Differentiation', level: 2 },
            terms: []
        },
        {
            id: 'callout-key-param',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Parametric Differentiation Formula',
                text: 'For a curve defined parametrically as x = f(t), y = g(t):\\n\\n  dy/dx = (dy/dt) ÷ (dx/dt)  =  g\'(t) / f\'(t)\\n\\nThis follows directly from the chain rule:\\n  dy/dx = dy/dt · dt/dx = (dy/dt) / (dx/dt)'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Parametric Curve', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Given x = t² + 1, y = 2t³ − t, find dy/dx and the gradient at t = 2.',
                text: 'dx/dt = 2t\\ndy/dt = 6t² − 1\\n\\ndy/dx = (6t² − 1)/(2t)\\n\\nAt t = 2:\\n  dy/dx = (6·4 − 1)/(2·2) = 23/4'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Tangent/Normal for Parametric Curves',
                text: 'For a tangent at parameter t = t₀:\\n1. Find dy/dx using (dy/dt)/(dx/dt), evaluated at t = t₀\\n2. Find the point (x₀, y₀) by substituting t₀ into x and y expressions\\n3. Line: y − y₀ = m(x − x₀)\\n\\nFor the normal: gradient = −1/m (perpendicular)'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Implicit: differentiate every term w.r.t. x, treating y as a function of x: d/dx[f(y)] = f\'(y)·dy/dx. Collect dy/dx terms, factorise, rearrange. Parametric: dy/dx = (dy/dt)/(dx/dt).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key-impl', prompt: 'What rule allows you to differentiate y² with respect to x? What is the result?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find dy/dx for x² + y² = 25.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find dy/dx implicitly for x³ + 2xy + y³ = 5.' },
            { id: 'c4', blockId: 'callout-key-param', prompt: 'State the formula for dy/dx when a curve is given parametrically.' }
        ],
        summaryText: 'Implicit: d/dx[f(y)] = f\'(y)·dy/dx (chain rule). Differentiate, collect dy/dx, rearrange. Parametric: dy/dx = (dy/dt)/(dx/dt). Evaluate at specific t for gradient at a point.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_7_5: Connected rates of change ────────────────────────────────────
note_2_7_5 = """/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 5
 * "Connected rates of change"
 */

export const note_mathematics_2_7_5 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use the chain rule to relate rates of change of different quantities.' },
            terms: []
        },
        {
            id: 'h-idea',
            type: 'heading',
            data: { text: 'The Idea', level: 2 },
            terms: []
        },
        {
            id: 'eq-chain',
            type: 'equation',
            data: {
                html: '<span class="nb-frac"><span class="nb-num">dy</span><span class="nb-den">dt</span></span> = <span class="nb-frac"><span class="nb-num">dy</span><span class="nb-den">dx</span></span> · <span class="nb-frac"><span class="nb-num">dx</span><span class="nb-den">dt</span></span>',
                caption: 'Chain rule connecting rates of change with respect to time'
            },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Strategy for Connected Rates of Change',
                text: '1. Write down what you know: dV/dt = ..., dA/dt = ..., dr/dt = ...\\n2. Write down what you want to find.\\n3. Find the relationship between the quantities (e.g. V and r).\\n4. Differentiate to get the required derivative (e.g. dV/dr).\\n5. Apply the chain rule to connect the rates.\\n6. Substitute known values to find the answer.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Expanding Sphere', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A spherical balloon is inflated so that its volume increases at 20 cm³ s⁻¹. Find the rate of increase of radius when r = 5 cm.',
                text: 'Given: dV/dt = 20 cm³ s⁻¹. Find: dr/dt when r = 5.\\n\\nV = (4/3)πr³\\ndV/dr = 4πr²\\n\\nChain rule: dr/dt = (dr/dV) · (dV/dt) = (1/(dV/dr)) · (dV/dt)\\n           = (1/(4πr²)) · 20\\n\\nAt r = 5: dr/dt = 20/(4π·25) = 20/(100π) = 1/(5π) cm s⁻¹'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Area and Radius', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The area of a circle is increasing at 6 cm² s⁻¹. Find dr/dt when r = 4 cm.',
                text: 'Given: dA/dt = 6. Find: dr/dt when r = 4.\\n\\nA = πr²\\ndA/dr = 2πr\\n\\ndr/dt = dA/dt × dr/dA = dA/dt × 1/(dA/dr)\\n      = 6 × 1/(2π·4)\\n      = 6/(8π) = 3/(4π) cm s⁻¹'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Two Connected Variables', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Given y = 3x² − x and dx/dt = 4, find dy/dt when x = 2.',
                text: 'dy/dx = 6x − 1\\n\\ndy/dt = dy/dx · dx/dt = (6x − 1) · 4\\n\\nAt x = 2: dy/dt = (12 − 1) · 4 = 11 · 4 = 44'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Units and Sign',
                text: 'Always include units in your final answer — rates have units!\\n\\nA negative rate of change means the quantity is decreasing (e.g. a deflating balloon would have dV/dt < 0).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Use the chain rule: dy/dt = (dy/dx)·(dx/dt). Identify the quantities, find the geometric relationship, differentiate, then chain-link to the known rate. Don\'t forget units.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the 6-step strategy for connected rates of change problems.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'A sphere inflates at 20 cm³ s⁻¹. Find dr/dt when r = 5 cm.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'If y = 3x² − x and dx/dt = 4, find dy/dt at x = 2.' },
            { id: 'c4', blockId: 'callout-warning', prompt: 'What does a negative rate of change mean in context?' }
        ],
        summaryText: 'Connected rates: dy/dt = (dy/dx)·(dx/dt). Find the geometric formula (V, A, etc.), differentiate to get d(quantity)/d(variable), apply chain rule, substitute known values. Always include units.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_7_6: Stationary points and second derivative ─────────────────────
note_2_7_6 = """/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 6
 * "Stationary points and the second derivative"
 */

export const note_mathematics_2_7_6 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Find and classify stationary points using the second derivative test, and use calculus to solve optimisation problems.' },
            terms: []
        },
        {
            id: 'h-stat',
            type: 'heading',
            data: { text: 'Stationary Points', level: 2 },
            terms: []
        },
        {
            id: 'callout-key-stat',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Finding and Classifying Stationary Points',
                text: 'A stationary point occurs where dy/dx = 0.\\n\\nTo classify using the second derivative:\\n  • d²y/dx² < 0 → local maximum (curve concave down)\\n  • d²y/dx² > 0 → local minimum (curve concave up)\\n  • d²y/dx² = 0 → inconclusive — use the sign-of-gradient method\\n\\nSign-of-gradient method: check the sign of dy/dx just before and just after the point:\\n  neg → 0 → pos:  minimum\\n  pos → 0 → neg:  maximum\\n  no sign change:  point of inflection'
            },
            terms: []
        },
        {
            id: 'svg-stationary',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" width="340" height="160"><defs><marker id="ah66" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#374151"/></marker></defs><line x1="20" y1="130" x2="320" y2="130" stroke="#374151" stroke-width="1.2" marker-end="url(#ah66)"/><line x1="30" y1="10" x2="30" y2="135" stroke="#374151" stroke-width="1.2" marker-end="url(#ah66)"/><path d="M40,110 C70,110 90,20 120,20 C150,20 160,95 190,95 C220,95 240,15 270,15 C290,15 300,40 310,60" stroke="#4f46e5" stroke-width="2" fill="none"/><circle cx="120" cy="20" r="4" fill="#10b981"/><circle cx="190" cy="95" r="4" fill="#ef4444"/><text x="110" y="14" font-size="11" fill="#10b981" font-family="sans-serif">max</text><text x="180" y="110" font-size="11" fill="#ef4444" font-family="sans-serif">min</text><text x="252" y="11" font-size="11" fill="#10b981" font-family="sans-serif">max</text><circle cx="270" cy="15" r="4" fill="#10b981"/><text x="35" y="12" font-size="11" fill="#374151" font-family="sans-serif">y</text><text x="315" y="142" font-size="11" fill="#374151" font-family="sans-serif">x</text><text x="100" y="148" font-size="10" fill="#4f46e5" font-family="sans-serif">dy/dx = 0 at each circled point</text></svg>',
                caption: 'Local maxima (green) and minima (red) — stationary points where dy/dx = 0'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Finding Stationary Points', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find and classify the stationary points of y = 2x³ − 9x² + 12x − 4.',
                text: 'dy/dx = 6x² − 18x + 12 = 6(x² − 3x + 2) = 6(x−1)(x−2)\\n\\nSet dy/dx = 0: x = 1 or x = 2\\n\\nd²y/dx² = 12x − 18\\n\\nAt x = 1: d²y/dx² = 12 − 18 = −6 < 0  → local maximum\\n  y = 2 − 9 + 12 − 4 = 1.  Maximum at (1, 1).\\n\\nAt x = 2: d²y/dx² = 24 − 18 = 6 > 0  → local minimum\\n  y = 16 − 36 + 24 − 4 = 0.  Minimum at (2, 0).'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Optimisation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A rectangle has perimeter 40 cm. Find the dimensions that maximise its area.',
                text: 'Let length = x, width = (20 − x)  [since 2x + 2w = 40]\\nArea A = x(20 − x) = 20x − x²\\n\\ndA/dx = 20 − 2x = 0  →  x = 10\\nd²A/dx² = −2 < 0  → maximum  ✓\\n\\nWidth = 20 − 10 = 10 cm.  Square with side 10 cm has maximum area 100 cm².'
            },
            terms: []
        },
        {
            id: 'callout-inflection',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Points of Inflection',
                text: 'A point of inflection is where the curve changes concavity (from concave up to concave down or vice versa).\\n\\nNecessary condition: d²y/dx² = 0\\nBut this is NOT sufficient — also need d²y/dx² to change sign through the point.\\n\\nA stationary point of inflection additionally has dy/dx = 0.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Optimisation Strategy',
                text: '1. Define variables and write the objective function (what you are maximising/minimising).\\n2. Use any constraint to express in terms of one variable.\\n3. Differentiate and set equal to zero.\\n4. Verify it is a max/min using the second derivative.\\n5. Answer the question fully — state the value of x and the quantity you were asked to maximise/minimise.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Stationary points: dy/dx = 0. Classify: d²y/dx² < 0 → max; d²y/dx² > 0 → min; d²y/dx² = 0 → check sign change of dy/dx. Point of inflection: d²y/dx² = 0 and sign changes. Optimisation: form the function, differentiate, solve, verify nature.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key-stat', prompt: 'How do you use the second derivative to classify a stationary point?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find and classify the stationary points of y = 2x³ − 9x² + 12x − 4.' },
            { id: 'c3', blockId: 'callout-inflection', prompt: 'What is a point of inflection and when does it occur?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'State the 5-step strategy for optimisation problems.' }
        ],
        summaryText: 'dy/dx=0 at stationary points. d²y/dx²<0→max; >0→min; =0→inconclusive→sign test. Point of inflection: d²y/dx²=0 AND sign of d²y/dx² changes. Optimisation: one variable, differentiate, solve, verify.',
        ready: true
    },
    evidence: []
};
"""

files = {
    'note_2_7_4.js': note_2_7_4,
    'note_2_7_5.js': note_2_7_5,
    'note_2_7_6.js': note_2_7_6,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 7 Part 2 (notes 4–6) done. Topic 7 complete.')
