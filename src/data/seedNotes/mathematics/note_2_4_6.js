/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 6
 * "Sigma notation"
 */

export const note_mathematics_2_4_6 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Interpret and evaluate expressions written in sigma notation, including standard results.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Sigma Notation?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'Sigma notation uses the Greek letter Σ (capital sigma) as a compact way to write a sum. The general form is:' },
            terms: []
        },
        {
            id: 'eq-sigma',
            type: 'equation',
            data: {
                html: '<span style="font-size:1.3em">∑</span><sub style="font-size:0.8em">r = 1</sub><sup style="font-size:0.8em">n</sup> f(r) = f(1) + f(2) + f(3) + … + f(n)',
                caption: 'Read as "the sum of f(r) as r goes from 1 to n"'
            },
            terms: []
        },
        {
            id: 'callout-parts',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Parts of Sigma Notation',
                text: '∑ f(r) from r = a to r = b\n\n• r: the index variable (substituted as 1, 2, 3, …)\n• a: lower limit (starting value of r)\n• b: upper limit (ending value of r)\n• f(r): the general term (the formula applied to each value of r)\n\nThe sum has (b − a + 1) terms.'
            },
            terms: []
        },
        {
            id: 'h-rules',
            type: 'heading',
            data: { text: 'Properties of Sigma Notation', level: 2 },
            terms: []
        },
        {
            id: 'list-rules',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Linearity:</strong> ∑(af(r) + bg(r)) = a·∑f(r) + b·∑g(r)' },
                    { text: '<strong>Constant factor:</strong> ∑c = c × (number of terms) = c(b−a+1)' },
                    { text: '<strong>Split limits:</strong> ∑ from r=1 to n = ∑ from r=1 to k + ∑ from r=k+1 to n' },
                    { text: '<strong>Offset sum:</strong> ∑ from r=3 to n = ∑ from r=1 to n − f(1) − f(2)' }
                ]
            },
            terms: []
        },
        {
            id: 'h-standard',
            type: 'heading',
            data: { text: 'Standard Results', level: 2 },
            terms: []
        },
        {
            id: 'eq-sum1',
            type: 'equation',
            data: {
                html: '∑<sub>r=1</sub><sup>n</sup> 1 = n',
                caption: 'Sum of n ones'
            },
            terms: []
        },
        {
            id: 'eq-sum-r',
            type: 'equation',
            data: {
                html: '∑<sub>r=1</sub><sup>n</sup> r = <span class="nb-frac"><span class="nb-num">n(n+1)</span><span class="nb-den">2</span></span>',
                caption: 'Sum of the first n natural numbers'
            },
            terms: []
        },
        {
            id: 'eq-sum-r2',
            type: 'equation',
            data: {
                html: '∑<sub>r=1</sub><sup>n</sup> r² = <span class="nb-frac"><span class="nb-num">n(n+1)(2n+1)</span><span class="nb-den">6</span></span>',
                caption: 'Sum of squares (given on formula sheet)'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Writing Out the Sum', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Write out ∑ from r=1 to 5 of (2r − 1) and evaluate.',
                text: '∑(2r−1) for r=1 to 5 = (2·1−1) + (2·2−1) + (2·3−1) + (2·4−1) + (2·5−1)\n                     = 1 + 3 + 5 + 7 + 9\n                     = 25\n\nNote: this is the sum of the first 5 odd numbers = 5² = 25 ✓'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Evaluating Sigma with Standard Results', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∑ from r=1 to 20 of (3r + 4).',
                text: '∑(3r + 4) = 3·∑r + ∑4 (for r=1 to 20)\n\n∑r from 1 to 20 = 20(21)/2 = 210\n∑4 from 1 to 20 = 4 × 20 = 80\n\n∴ ∑(3r + 4) = 3(210) + 80 = 630 + 80 = 710'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Sigma with Offset Lower Limit', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∑ from r=5 to 15 of 2r.',
                text: '∑_{r=5}^{15} 2r = ∑_{r=1}^{15} 2r − ∑_{r=1}^{4} 2r\n\n= 2·∑_{r=1}^{15} r − 2·∑_{r=1}^{4} r\n\n= 2·(15×16/2) − 2·(4×5/2)\n\n= 2·120 − 2·10\n\n= 240 − 20 = 220'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Sigma notation questions often test whether you can use the standard results for ∑r and ∑r². You should also be comfortable identifying a sum as an arithmetic or geometric series — ∑(a + (r−1)d) is arithmetic; ∑arⁿ⁻¹ is geometric.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Sigma notation: ∑f(r) sums f(r) for each integer r from lower to upper limit. Properties: linearity, constant factor rule, split/offset limits. Key results: ∑r = n(n+1)/2, ∑r² = n(n+1)(2n+1)/6. For offset limits: ∑ from a to b = ∑ from 1 to b − ∑ from 1 to a−1.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When evaluating sigma notation, pay close attention to the starting index. If it starts at r=0 instead of r=1, there will be n+1 terms in total, not n terms. This is a very frequent source of error."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-parts', prompt: 'What do the upper limit, lower limit, index variable, and general term mean in sigma notation?' },
            { id: 'c2', blockId: 'eq-sum-r', prompt: 'State the formula for ∑r from r=1 to n.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find ∑(3r+4) from r=1 to 20 using linearity and standard results.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'How do you evaluate ∑ from r=5 to 15 of 2r?' }
        ],
        summaryText: 'Σ notation: sum of f(r) from r=lower to upper. Standard results: Σr=n(n+1)/2, Σr²=n(n+1)(2n+1)/6. Linearity: split into Σr terms + constants. For offset limits: Σ from a to b = Σ from 1 to b minus Σ from 1 to a−1.',
        ready: true
    },
    evidence: []
};
