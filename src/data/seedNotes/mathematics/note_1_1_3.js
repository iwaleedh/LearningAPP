/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 3
 * "Expanding brackets"
 */

export const note_mathematics_1_1_3 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/expanding-brackets.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Expand single, double, squared and triple brackets using the distributive law and FOIL; recognise and apply the key algebraic identities (a+b)\u00b2, (a\u2212b)\u00b2 and (a+b)(a\u2212b).' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Expanding?', level: 2 },
            terms: []
        },
        {
            id: 'list-what',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Expanding brackets means multiplying out so that <strong>no brackets remain</strong>.' },
                    { text: 'Every term in one bracket must be multiplied by every term in the other bracket.' },
                    { text: 'After expanding, collect like terms to simplify.' }
                ]
            },
            terms: []
        },
        {
            id: 'h-single',
            type: 'heading',
            data: { text: 'Single Bracket', level: 2 },
            terms: []
        },
        {
            id: 'list-single',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Multiply the term outside the bracket by <strong>each term</strong> inside.' },
                    { text: 'Carry the sign (+ or \u2212) of each inside term.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-single',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Single Bracket',
                text: 'Expand: 3(2x + 5)<br/><br/>3 \u00d7 2x = 6x<br/>3 \u00d7 5 = 15<br/><br/><strong>Answer: 6x + 15</strong>'
            },
            terms: []
        },
        {
            id: 'h-double',
            type: 'heading',
            data: { text: 'Double Brackets \u2014 FOIL', level: 2 },
            terms: []
        },
        {
            id: 'list-foil',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>F</strong>irst \u2014 multiply the first terms of each bracket.' },
                    { text: '<strong>O</strong>uter \u2014 multiply the outer two terms.' },
                    { text: '<strong>I</strong>nner \u2014 multiply the inner two terms.' },
                    { text: '<strong>L</strong>ast \u2014 multiply the last terms of each bracket.' },
                    { text: 'Collect the four resulting terms, combining like terms.' }
                ]
            },
            terms: []
        },
        {
            id: 'svg-foil',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" style="width:100%;max-width:350px;display:block;margin:0 auto;"><defs><marker id="ah3_1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#2563eb"/></marker><marker id="ah3_2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#10b981"/></marker><marker id="ah3_3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#f59e0b"/></marker><marker id="ah3_4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#ec4899"/></marker></defs><style>.t3{font-family:sans-serif;font-size:24px;fill:#374151;font-weight:700}.st3{font-family:sans-serif;font-size:12px;font-weight:600}</style><text x="150" y="70" text-anchor="middle" class="t3">(a + b)(c + d)</text><path d="M 120 45 Q 150 20 185 45" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#ah3_1)"/><text x="150" y="25" text-anchor="middle" class="st3" fill="#2563eb">F</text><path d="M 120 85 Q 160 120 220 85" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#ah3_2)"/><text x="170" y="115" text-anchor="middle" class="st3" fill="#10b981">O</text><path d="M 148 45 Q 170 30 185 45" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#ah3_3)"/><text x="167" y="35" text-anchor="middle" class="st3" fill="#f59e0b">I</text><path d="M 148 85 Q 180 100 220 85" fill="none" stroke="#ec4899" stroke-width="2" marker-end="url(#ah3_4)"/><text x="185" y="100" text-anchor="middle" class="st3" fill="#ec4899">L</text></svg>',
                caption: 'The FOIL expansion sequence'
            },
            terms: []
        },
        {
            id: 'worked-foil',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 FOIL',
                text: 'Expand: (2x + 3)(x \u2212 5)<br/><br/>F: 2x \u00d7 x = 2x\u00b2<br/>O: 2x \u00d7 (\u22125) = \u221210x<br/>I: 3 \u00d7 x = +3x<br/>L: 3 \u00d7 (\u22125) = \u221215<br/><br/>2x\u00b2 \u2212 10x + 3x \u2212 15 = <strong>2x\u00b2 \u2212 7x \u2212 15</strong>'
            },
            terms: []
        },
        {
            id: 'h-squared',
            type: 'heading',
            data: { text: 'Squared Brackets and Key Identities', level: 2 },
            terms: []
        },
        {
            id: 'list-squared',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Write (a + b)\u00b2 as (a + b)(a + b), then expand with FOIL.' },
                    { text: 'There is <strong>always a middle term</strong>: (a + b)\u00b2 \u2260 a\u00b2 + b\u00b2.' }
                ]
            },
            terms: []
        },
        {
            id: 'key-identities',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Identities \u2014 Memorise These',
                text: '(a + b)\u00b2 = a\u00b2 + 2ab + b\u00b2<br/>(a \u2212 b)\u00b2 = a\u00b2 \u2212 2ab + b\u00b2<br/>(a + b)(a \u2212 b) = a\u00b2 \u2212 b\u00b2 &nbsp;<em>(difference of two squares \u2014 no middle term)</em>'
            },
            terms: []
        },
        {
            id: 'worked-squared',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Squared Bracket',
                text: 'Expand: (3x + 2)\u00b2<br/><br/>Using (a + b)\u00b2 = a\u00b2 + 2ab + b\u00b2 with a = 3x, b = 2:<br/>(3x)\u00b2 + 2(3x)(2) + 2\u00b2<br/>= 9x\u00b2 + 12x + 4<br/><br/><strong>Answer: 9x\u00b2 + 12x + 4</strong>'
            },
            terms: []
        },
        {
            id: 'h-triple',
            type: 'heading',
            data: { text: 'Triple Brackets', level: 2 },
            terms: []
        },
        {
            id: 'list-triple',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Choose any two of the three brackets and expand them first using FOIL.' },
                    { text: 'Multiply each term of the result by each term of the third bracket.' },
                    { text: 'Collect like terms.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-triple',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Triple Brackets',
                text: 'Expand: (x + 1)(x \u2212 2)(x + 3)<br/><br/>Step 1 \u2014 expand first two brackets:<br/>(x + 1)(x \u2212 2) = x\u00b2 \u2212 2x + x \u2212 2 = x\u00b2 \u2212 x \u2212 2<br/><br/>Step 2 \u2014 multiply by third bracket (x + 3):<br/>x\u00b2(x + 3) \u2212 x(x + 3) \u2212 2(x + 3)<br/>= x\u00b3 + 3x\u00b2 \u2212 x\u00b2 \u2212 3x \u2212 2x \u2212 6<br/>= x\u00b3 + 2x\u00b2 \u2212 5x \u2212 6<br/><br/><strong>Answer: x\u00b3 + 2x\u00b2 \u2212 5x \u2212 6</strong>'
            },
            terms: []
        },
        {
            id: 'warning-signs',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '\u2022 (a + b)\u00b2 \u2260 a\u00b2 + b\u00b2 \u2014 always expand properly; the 2ab term is missing if you skip FOIL.<br/>\u2022 Negative signs: (\u22122)(\u22125) = +10, not \u221210.<br/>\u2022 With triple brackets, never try to expand all three at once \u2014 always take two at a time.'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can expand a single bracket by multiplying each inside term.', checked: false },
                    { text: 'I can use FOIL to expand double brackets.', checked: false },
                    { text: 'I know the three key identities: (a+b)\u00b2, (a\u2212b)\u00b2, (a+b)(a\u2212b).', checked: false },
                    { text: 'I can expand triple brackets by taking two at a time.', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Expanding: multiply every term across brackets, then collect like terms. FOIL for double brackets. Key identities: (a+b)\u00b2 = a\u00b2+2ab+b\u00b2; (a\u2212b)\u00b2 = a\u00b2\u22122ab+b\u00b2; (a+b)(a\u2212b) = a\u00b2\u2212b\u00b2. Triple brackets: expand two at a time.' },
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
            { id: 'cue-1', blockId: 'list-foil', prompt: 'What does FOIL stand for? In what order do you multiply terms in double brackets?' },
            { id: 'cue-2', blockId: 'key-identities', prompt: 'State the three key bracket identities: (a+b)\u00b2, (a\u2212b)\u00b2, and (a+b)(a\u2212b).' },
            { id: 'cue-3', blockId: 'worked-foil', prompt: 'Expand (2x + 3)(x \u2212 5) using FOIL and simplify.' },
            { id: 'cue-4', blockId: 'list-triple', prompt: 'How do you expand three brackets? What is the strategy?' }
        ],
        summaryText: 'FOIL: First, Outer, Inner, Last. Key identities: (a+b)\u00b2=a\u00b2+2ab+b\u00b2, (a\u2212b)\u00b2=a\u00b2\u22122ab+b\u00b2, (a+b)(a\u2212b)=a\u00b2\u2212b\u00b2. Triple brackets: expand two at a time.',
        ready: true
    },
    evidence: []
};
