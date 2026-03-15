/**
 * WMA13 · Topic 1 · Subtopic 0 — Language of functions
 */
export const note_mathematics_3_1_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Understand the language of functions: domain, range, mappings and function notation.' },
            terms: []
        },
        {
            id: 'h-map', type: 'heading',
            data: { text: 'Mappings and Functions', level: 2 }, terms: []
        },
        {
            id: 'p-map', type: 'paragraph',
            data: { text: 'A <strong>mapping</strong> is a rule connecting elements of one set to another. A <strong>function</strong> is a mapping where every input gives exactly one output. Not all mappings are functions.' },
            terms: []
        },
        {
            id: 'table-types', type: 'comparisonTable',
            data: {
                headers: ['Mapping type', 'Description', 'Is a function?'],
                rows: [
                    ['One-to-one', 'Each input maps to a unique output', '\u2713 Yes'],
                    ['Many-to-one', 'Several inputs map to the same output', '\u2713 Yes'],
                    ['One-to-many', 'One input maps to multiple outputs', '\u2717 No']
                ],
                caption: 'Only one-to-one and many-to-one mappings are functions'
            }, terms: []
        },
        {
            id: 'h-notation', type: 'heading',
            data: { text: 'Function Notation', level: 2 }, terms: []
        },
        {
            id: 'p-notation', type: 'paragraph',
            data: { text: 'f(x) denotes the output when x is the input. We also write f: x &#x21a6; expression. The <strong>domain</strong> is the set of allowed input values; the <strong>range</strong> (image set) is all possible output values.' },
            terms: []
        },
        {
            id: 'callout-restrict', type: 'callout',
            data: {
                style: 'key',
                title: 'Common Domain Restrictions',
                text: '\u2022 Denominator \u2260 0: e.g. f(x) = 1/(x \u2212 3), domain: x \u2260 3\n\u2022 Square root \u2265 0: e.g. f(x) = \u221a(x \u2212 2), domain: x \u2265 2\n\u2022 Logarithm > 0: e.g. f(x) = ln(x + 1), domain: x > \u22121\n\u2022 No restriction stated \u2192 assume domain is \u211d'
            }, terms: []
        },
        {
            id: 'h-range', type: 'heading',
            data: { text: 'Finding the Range', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the domain and range of f(x) = \u221a(5 \u2212 x).',
                text: 'Domain: 5 \u2212 x \u2265 0  \u2192  x \u2264 5\nRange: \u221a(5 \u2212 x) \u2265 0 (minimum when x = 5: f(5) = 0)\n  As x \u2192 \u2212\u221e, f(x) \u2192 \u221e\n\u2192 Range: f(x) \u2265 0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Range Tips',
                text: 'Sketch the graph \u2014 the range equals the set of y-values on the graph. For a quadratic, complete the square to find the vertex. A restricted domain restricts the range accordingly.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'A function is a one-to-one or many-to-one mapping. Domain = allowed inputs; range = all possible outputs. Restrictions: \u221a needs \u2265 0, fractions need denominator \u2260 0, ln needs argument > 0.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-types', prompt: 'Which mapping type is NOT a function: one-to-one, many-to-one, or one-to-many?' },
            { id: 'c2', blockId: 'callout-restrict', prompt: 'State the domain of f(x) = \u221a(x \u2212 4).' },
            { id: 'c3', blockId: 'p-notation', prompt: 'What is the difference between domain and range?' },
            { id: 'c4', blockId: 'callout-we1', prompt: 'Find the range of f(x) = \u221a(5 \u2212 x) for its natural domain.' }
        ],
        summaryText: 'Functions are one-to-one or many-to-one mappings. Domain = allowed inputs; range = possible outputs. Key restrictions: \u221a \u2265 0, denominator \u2260 0, ln argument > 0.',
        ready: true
    },
    evidence: []
};
