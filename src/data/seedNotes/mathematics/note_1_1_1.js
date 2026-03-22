/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 1
 * "Manipulating surds"
 */

export const note_mathematics_1_1_1 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/manipulating-surds.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand and manipulate surds, including simplifying, adding, subtracting, multiplying, and dividing exact values.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'What are Surds?', level: 2 },
            terms: []
        },
        {
            id: 'list-intro',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'A <strong>surd</strong> is an irrational square root: \u221an where n is a positive integer that is <em>not</em> a perfect square.' },
                    { text: 'Examples of surds: \u221a2, \u221a3, \u221a5, \u221a7. Examples of non-surds: \u221a4 = 2, \u221a9 = 3 (these are integers).' },
                    { text: 'Surds are <strong>irrational</strong>: they cannot be written as exact fractions; their decimals are infinite and non-repeating.' },
                    { text: 'Leave answers in surd form to maintain <strong>exact values</strong> and avoid premature rounding.' }
                ]
            },
            terms: []
        },
        {
            id: 'h-rules',
            type: 'heading',
            data: { text: 'Rules for Manipulating Surds', level: 2 },
            terms: []
        },
        {
            id: 'list-rules',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Multiplication Rule:</strong> √(ab) = √a × √b',
                    '<strong>Division Rule:</strong> √(<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span>) = <span class="nb-frac"><span class="nb-num">√a</span><span class="nb-den">√b</span></span>',
                    '<strong>Addition & Subtraction:</strong> You can collect like terms with surds just like you do with letters in algebra (e.g., 3√2 + 5√2 = 8√2).',
                    '<strong>Warning:</strong> You cannot add or subtract "under the surd". √(a + b) is NOT equal to √a + √b.'
                ]
            }
        },
        {
            id: 'svg-surd-add',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" style="width:100%;max-width:380px;display:block;margin:0 auto;"><style>.sf{font-family:sans-serif;font-size:16px;fill:#374151;font-weight:700}.sl{font-family:sans-serif;font-size:12px;fill:#6b7280}</style><rect x="20" y="20" width="120" height="60" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1.5"/><rect x="180" y="20" width="120" height="60" rx="8" fill="#3d1212" stroke="#fecaca" stroke-width="1.5"/><text x="80" y="45" text-anchor="middle" class="sf">√16 + √9</text><text x="80" y="65" text-anchor="middle" class="sf" fill="#10b981">= 4 + 3 = 7</text><text x="240" y="45" text-anchor="middle" class="sf">√(16 + 9)</text><text x="240" y="65" text-anchor="middle" class="sf" fill="#ef4444">= √25 = 5</text><text x="150" y="55" text-anchor="middle" class="sf" fill="#ef4444">≠</text></svg>',
                caption: 'Visual proof that you cannot add terms under a square root'
            },
            terms: []
        },
        {
            id: 'callout-worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example: Simplifying a Surd',
                text: 'Simplify: √72<br/><br/>Step 1: Look for the largest square factor of 72. (Square numbers: 4, 9, 16, 25, 36...)<br/>72 = 36 × 2<br/><br/>Step 2: Split the surd using the multiplication rule.<br/>√(36 × 2) = √36 × √2<br/><br/>Step 3: Evaluate the square root of the square number.<br/>√36 = 6<br/><br/>Final Answer: <strong>6√2</strong>'
            },
            terms: []
        },
        {
            id: 'tip-exact',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Examiner Tip',
                text: 'Leaving answers in surd form is highly recommended to maintain <strong>exact values</strong> through to another part of your working. Using calculated decimal values too early can cause rounding errors and cost you accuracy marks.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Surd rules: \u221a(ab) = \u221aa \u00d7 \u221ab; \u221a(a/b) = \u221aa \u00f7 \u221ab; collect like surds: a\u221an + b\u221an = (a+b)\u221an. Never add under the root: \u221a(a+b) \u2260 \u221aa + \u221ab. To simplify, find the highest perfect square factor first.'
            },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "",
                text: ""
            },
            terms: []
        },
        {
            id: 'callout-tip-2',
            type: 'callout',
            data: {
                style: 'warning',
                title: "",
                text: ""
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-rules', prompt: 'What is the rule for multiplying surds: √(ab) = ?' },
            { id: 'cue-2', blockId: 'list-rules', prompt: 'Is √(x + y) equal to √x + √y?' },
            { id: 'cue-3', blockId: 'callout-worked-1', prompt: 'What should you look for when simplifying a single surd like √72?' }
        ],
        summaryText: '√(ab) = √a × √b. You cannot add under a root (√(x+y) ≠ √x + √y). When simplifying surds, you must look for the highest square factor of the number inside the root.',
        ready: true
    },
    evidence: []
};
