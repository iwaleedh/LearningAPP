/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 13
 * "Linear inequalities"
 */

export const note_mathematics_1_1_13 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/linear.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve linear inequalities in one variable; express solutions using inequality notation and on a number line; understand when the inequality sign must be reversed.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'What is a Linear Inequality?', level: 2 },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: { text: 'An inequality states that one expression is greater than (or less than, or equal to) another. A <strong>linear inequality</strong> contains the variable only to the first power. Linear inequalities are solved using the same steps as linear equations, with one critical exception: <strong>multiplying or dividing by a negative number reverses the inequality sign</strong>.' },
            terms: []
        },
        {
            id: 'key-rule',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Golden Rule',
                text: 'When you multiply or divide both sides of an inequality by a <em>negative</em> number, the inequality sign reverses direction.<br/><br/>e.g.  −2x < 6  ÷(−2)  →  x > −3  (sign flips!)'
            },
            terms: []
        },
        {
            id: 'h-solve',
            type: 'heading',
            data: { text: 'Solving a Linear Inequality', level: 2 },
            terms: []
        },
        {
            id: 'p-solve',
            type: 'paragraph',
            data: { text: 'Solve a linear inequality using the same steps as a linear equation: collect x-terms on one side, constants on the other, then divide. The only extra care is tracking whether you are dividing by a positive or negative number.' },
            terms: []
        },
        {
            id: 'worked-basic',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Standard Linear Inequality',
                text: 'Solve  3x − 5 > x + 3<br/><br/>3x − x > 3 + 5<br/>2x > 8<br/><strong>x > 4</strong>'
            },
            terms: []
        },
        {
            id: 'worked-neg',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Division by Negative',
                text: 'Solve  5 − 3x ≥ 11<br/><br/>−3x ≥ 6<br/>Dividing by −3 (negative!): sign reverses:<br/><strong>x ≤ −2</strong>'
            },
            terms: []
        },
        {
            id: 'h-double',
            type: 'heading',
            data: { text: 'Double Inequalities', level: 2 },
            terms: []
        },
        {
            id: 'p-double',
            type: 'paragraph',
            data: { text: 'A double (compound) inequality such as a < f(x) < b can be solved by performing the same operations on all three parts simultaneously.' },
            terms: []
        },
        {
            id: 'worked-double',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Double Inequality',
                text: 'Solve  −1 < 3x + 2 ≤ 14<br/><br/>Subtract 2 from all parts:  −3 < 3x ≤ 12<br/>Divide by 3:  <strong>−1 < x ≤ 4</strong><br/>(x is greater than −1 and at most 4)'
            },
            terms: []
        },
        {
            id: 'svg-numline',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80" style="width:100%;max-width:380px;display:block;margin:0 auto;"><style>.ln{font-family:sans-serif;font-size:11px;fill:#374151}.hl{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><line x1="20" y1="40" x2="280" y2="40" stroke="#374151" stroke-width="1.5"/><line x1="273" y1="37" x2="280" y2="40" stroke="#374151" stroke-width="1.5"/><line x1="273" y1="43" x2="280" y2="40" stroke="#374151" stroke-width="1.5"/><line x1="20" y1="35" x2="20" y2="45" stroke="#374151" stroke-width="1"/><line x1="80" y1="35" x2="80" y2="45" stroke="#374151" stroke-width="1"/><line x1="140" y1="35" x2="140" y2="45" stroke="#374151" stroke-width="1"/><line x1="200" y1="35" x2="200" y2="45" stroke="#374151" stroke-width="1"/><line x1="260" y1="35" x2="260" y2="45" stroke="#374151" stroke-width="1"/><text x="14" y="60" class="ln">\u22122</text><text x="74" y="60" class="ln">\u22121</text><text x="138" y="60" class="ln">0</text><text x="197" y="60" class="ln">1</text><text x="258" y="60" class="ln">2</text><line x1="80" y1="40" x2="270" y2="40" stroke="#4f46e5" stroke-width="3"/><circle cx="80" cy="40" r="5" fill="#1e293b" stroke="#4f46e5" stroke-width="2"/><circle cx="270" cy="40" r="5" fill="#4f46e5" stroke="#4f46e5" stroke-width="2"/><text x="68" y="25" class="hl">\u22121</text><text x="260" y="25" class="hl">2</text><text x="88" y="22" style="font-family:sans-serif;font-size:10px;fill:#6b7280">open = strict &lt;</text></svg>',
                caption: 'Number line: open circle = strict inequality (< or >); filled circle = inclusive (≤ or ≥). Example shows −1 < x ≤ 2.'
            },
            terms: []
        },
        {
            id: 'svg-numline-or',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80" style="width:100%;max-width:380px;display:block;margin:0 auto;"><style>.ln{font-family:sans-serif;font-size:11px;fill:#374151}.hl{font-family:sans-serif;font-size:11px;fill:#ef4444;font-weight:600}</style><line x1="20" y1="40" x2="280" y2="40" stroke="#374151" stroke-width="1.5"/><line x1="20" y1="35" x2="20" y2="45" stroke="#374151" stroke-width="1"/><line x1="80" y1="35" x2="80" y2="45" stroke="#374151" stroke-width="1"/><line x1="140" y1="35" x2="140" y2="45" stroke="#374151" stroke-width="1"/><line x1="200" y1="35" x2="200" y2="45" stroke="#374151" stroke-width="1"/><line x1="260" y1="35" x2="260" y2="45" stroke="#374151" stroke-width="1"/><text x="14" y="60" class="ln">\u22122</text><text x="74" y="60" class="ln">\u22121</text><text x="138" y="60" class="ln">0</text><text x="197" y="60" class="ln">1</text><text x="258" y="60" class="ln">2</text><line x1="20" y1="40" x2="80" y2="40" stroke="#ef4444" stroke-width="3"/><line x1="260" y1="40" x2="280" y2="40" stroke="#ef4444" stroke-width="3"/><circle cx="80" cy="40" r="5" fill="#1e293b" stroke="#ef4444" stroke-width="2"/><circle cx="260" cy="40" r="5" fill="#ef4444" stroke="#ef4444" stroke-width="2"/><text x="68" y="25" class="hl">x &lt; \u22121</text><text x="245" y="25" class="hl">x ≥ 2</text><text x="140" y="25" class="hl" style="fill:#6b7280;font-weight:400">OR</text></svg>',
                caption: 'An "OR" inequality requires two separate distinct regions (e.g. x < −1 OR x ≥ 2)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Use open circles ○ on a number line for strict inequalities (< or >).<br/>• Use filled circles ● for inclusive inequalities (≤ or ≥).<br/>• The safest way to avoid sign errors: <em>always</em> rearrange so you are dividing by a positive coefficient.<br/>• For a double inequality, apply every operation to all three parts simultaneously.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Solve linear inequalities like equations, but reverse the inequality sign whenever you multiply or divide by a negative number. Express solutions using inequality notation (x > a, x ≤ b, etc.) or on a number line (open circle for strict, filled for inclusive). Double inequalities are solved by acting on all three parts at once.' },
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
            { id: 'cue-1', blockId: 'key-rule', prompt: 'State the golden rule for inequalities when dividing by a negative number.' },
            { id: 'cue-2', blockId: 'worked-neg', prompt: 'Solve 5 − 3x ≥ 11 and explain the sign reversal step.' },
            { id: 'cue-3', blockId: 'worked-double', prompt: 'Solve the double inequality −1 < 3x + 2 ≤ 14.' },
            { id: 'cue-4', blockId: 'svg-numline', prompt: 'What is the difference between an open and a filled circle on a number line inequality?' }
        ],
        summaryText: 'Linear inequalities: same steps as equations BUT reverse sign when multiplying or dividing by a negative. Open circle = strict (</>); filled circle = inclusive (≤/≥). Apply all operations to all three parts in a double inequality.',
        ready: true
    },
    evidence: []
};
