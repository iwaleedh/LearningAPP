/**
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
                text: 'y = eˣ  ⟺  x = ln(y)\n\nThese are inverse functions.\n\nConsequences:\n  ln(eˣ) = x  for all x\n  e^{ln(x)} = x  for x > 0\n  ln(1) = 0  (since e⁰ = 1)\n  ln(e) = 1  (since e¹ = e)'
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
                text: '(a) ln(e³) = 3  (since ln undoes e^: ln(eˣ) = x)\n(b) e^{ln 5} = 5  (since e^ undoes ln: e^{ln x} = x)\n(c) ln(1/e) = ln(e⁻¹) = −1'
            },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve: (a) eˣ = 7  (b) ln(x) = 3  (c) e^{2x+1} = 5',
                text: '(a) eˣ = 7 → x = ln(7) ≈ 1.946\n\n(b) ln(x) = 3 → x = e³ ≈ 20.09\n\n(c) e^{2x+1} = 5\n    2x + 1 = ln(5)\n    2x = ln(5) − 1\n    x = (ln 5 − 1)/2 ≈ 0.305'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Inverse Operations',
                text: 'ln and e are inverse functions — apply one to undo the other:\n• To solve eˣ = k: take ln of both sides → x = ln(k)\n• To solve ln(x) = k: apply e to both sides → x = eᵏ\n\nNever take ln of a negative number or zero — there is no real answer.'
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
