/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 0
 * "Laws of indices"
 */

export const note_mathematics_1_1_0 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/laws-of-indices.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand and apply the laws of indices to simplify and manipulate algebraic expressions, including fractional and negative indices.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'The Laws of Indices', level: 2 },
            terms: []
        },
        {
            id: 'list-intro',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'An <strong>index</strong> (also called a <strong>power</strong> or <strong>exponent</strong>) shows how many times a base is multiplied by itself.' },
                    { text: 'The terms “power”, “exponent” and “index” are interchangeable.' },
                    { text: 'Index laws only apply to terms that share the <strong>same base</strong>.' }
                ]
            },
            terms: []
        },
        {
            id: 'table-laws',
            type: 'comparisonTable',
            data: {
                caption: 'Summary of the Index Laws',
                headers: ['Law', 'Rule', 'Example'],
                rows: [
                    ['Multiplication', 'a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>', 'x<sup>3</sup> × x<sup>4</sup> = x<sup>7</sup>'],
                    ['Division', 'a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>', 'y<sup>8</sup> ÷ y<sup>2</sup> = y<sup>6</sup>'],
                    ['Brackets', '(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>', '(x<sup>3</sup>)<sup>4</sup> = x<sup>12</sup>'],
                    ['Zero Index', 'a<sup>0</sup> = 1', '7<sup>0</sup> = 1'],
                    ['Negative Index', 'a<sup>−m</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">a<sup>m</sup></span></span>', '2<sup>−3</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">8</span></span>'],
                    ['Fractional Index', 'a<sup><span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">n</span></span></sup> = <sup>n</sup>√a', 'x<sup><span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span></sup> = √x'],
                    ['Fractional Index II', 'a<sup><span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">n</span></span></sup> = (<sup>n</sup>√a)<sup>m</sup>', '8<sup><span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span></sup> = (∛8)<sup>2</sup> = 4']
                ]
            }
        },
        {
            id: 'svg-fractional',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" style="width:100%;max-width:350px;display:block;margin:0 auto;"><defs><marker id="ah0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6b7280"/></marker></defs><style>.t0{font-family:sans-serif;font-size:24px;fill:#374151;font-weight:700}.l0{font-family:sans-serif;font-size:11px;fill:#6b7280;font-weight:600}</style><text x="140" y="65" text-anchor="middle" class="t0">a<tspan dy="-10" font-size="16" fill="#2563eb">m</tspan><tspan dy="10" font-size="18">/</tspan><tspan dy="10" font-size="16" fill="#10b981">n</tspan><tspan dy="-10"> = (</tspan><tspan dy="-8" font-size="12" fill="#10b981">n</tspan><tspan dy="8">√a)</tspan><tspan dy="-12" font-size="16" fill="#2563eb">m</tspan></text><path d="M 152 42 Q 170 20 200 25" fill="none" stroke="#2563eb" stroke-width="1.5" marker-end="url(#ah0)"/><text x="205" y="28" class="l0" style="fill:#2563eb">POWER (Numerator)</text><path d="M 152 82 Q 170 100 200 95" fill="none" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah0)"/><text x="205" y="98" class="l0" style="fill:#10b981">ROOT (Denominator)</text></svg>',
                caption: 'Anatomy of a fractional index: the denominator dictates the root, the numerator is the power'
            },
            terms: []
        },
        {
            id: 'h-bases',
            type: 'heading',
            data: { text: 'Changing the Base of a Term', level: 2 },
            terms: []
        },
        {
            id: 'list-bases',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Rewrite a number as a power of a smaller base — e.g. 9 = 3<sup>2</sup>, 8 = 2<sup>3</sup>, 27 = 3<sup>3</sup>.' },
                    { text: 'Apply the bracket law (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup> to simplify after changing the base.' },
                    { text: 'Useful when two terms appear to have different bases but share a common prime factor.' }
                ]
            },
            terms: []
        },
        {
            id: 'callout-worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example: Changing Bases',
                text: 'Simplify: 9<sup>4</sup> ÷ 3<sup>7</sup><br/><br/>Step 1: Write 9 as 3<sup>2</sup><br/>(3<sup>2</sup>)<sup>4</sup> ÷ 3<sup>7</sup><br/><br/>Step 2: Use the bracket law (multiply powers)<br/>3<sup>8</sup> ÷ 3<sup>7</sup><br/><br/>Step 3: Use the division law (subtract powers)<br/>3<sup>8−7</sup> = 3<sup>1</sup> = <strong>3</strong>'
            },
            terms: []
        },
        {
            id: 'tip-bases',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Examiner Tip',
                text: 'Index laws only work with terms that have the <strong>same base</strong>. An expression like 2<sup>3</sup> × 5<sup>2</sup> cannot be simplified logically using the laws of indices because the bases (2 and 5) differ.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Index laws (same base only): multiply → add powers; divide → subtract powers; bracket → multiply powers. Zero index: a⁰ = 1. Negative index: a<sup>−m</sup> = 1÷a<sup>m</sup>. Fractional index: a<sup>1/n</sup> = <sup>n</sup>\u221aa; a<sup>m/n</sup> = (<sup>n</sup>\u221aa)<sup>m</sup>. Change base by rewriting as a power of a smaller common prime.'
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
            { id: 'cue-1', blockId: 'table-laws', prompt: 'What is the sum rule for powers with the same base?' },
            { id: 'cue-2', blockId: 'table-laws', prompt: 'How do you rewrite a negative index a⁻ᵐ?' },
            { id: 'cue-3', blockId: 'tip-bases', prompt: 'Why can’t you evaluate 2³ × 5² using index laws?' }
        ],
        summaryText: 'You add powers when multiplying, you flip the value over a fraction for negative indexes, and index laws only apply on elements with matching bases.',
        ready: true
    },
    evidence: []
};
