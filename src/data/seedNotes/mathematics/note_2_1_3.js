/**
 * Seed note: Mathematics · WMA12 · Topic 1 · Subtopic 3
 * "Disproof by counter-example"
 */

export const note_mathematics_2_1_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Disprove mathematical conjectures by finding a single counter-example.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Disproof by Counter-example?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A <strong>conjecture</strong> is a statement believed to be true but not yet proved. To <strong>disprove</strong> a conjecture, you only need to find <em>one</em> value (called a <strong>counter-example</strong>) for which the statement is false. A single counter-example is enough — no matter how many examples satisfy the conjecture, one failure disproves it entirely.' },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'One Counter-example is Sufficient',
                text: 'To disprove "P is true for all n", you only need ONE value of n for which P is false. You do not need to find all counter-examples — just one. Once found, state it clearly and show that it makes the statement false.'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Read the conjecture carefully and identify the domain (e.g. all positive integers, all real numbers)' },
                    { text: 'Try simple values: 0, 1, 2, −1, fractions, primes' },
                    { text: 'Substitute the value into both sides of the statement' },
                    { text: 'Show clearly that the statement fails for that specific value' },
                    { text: 'Conclude: "This is a counter-example, therefore the conjecture is false."' }
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
                title: 'Disprove: "All prime numbers are odd"',
                text: 'Counter-example: n = 2.\n\n2 is prime (its only factors are 1 and 2). However, 2 is even, not odd.\n\n∴ n = 2 is a counter-example. The conjecture "all prime numbers are odd" is false. □'
            },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Disprove: "For all n ∈ ℤ⁺, n² + n + 41 is prime"',
                text: 'Try n = 40:\n  40² + 40 + 41 = 1600 + 40 + 41 = 1681\n  1681 = 41 × 41 = 41²\n  41² is not prime (it is divisible by 41).\n\n∴ n = 40 is a counter-example. The conjecture is false. □\n\n(Note: this formula does give primes for n = 0, 1, 2, …, 39 — but n = 40 disproves the general claim.)'
            },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Disprove: "For all integers n > 0, 2n > n + 1"',
                text: 'Try n = 1:\n  LHS: 2(1) = 2\n  RHS: 1 + 1 = 2\n  2 > 2? NO — 2 is not strictly greater than 2.\n\n∴ n = 1 is a counter-example. The statement is false. □'
            },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Disprove: "For all real x, (x + 1)² = x² + 1"',
                text: 'Try x = 2:\n  LHS: (2 + 1)² = 3² = 9\n  RHS: 2² + 1 = 4 + 1 = 5\n  9 ≠ 5.\n\n∴ x = 2 is a counter-example. The conjecture is false. (The correct expansion is x² + 2x + 1.) □'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Finding Counter-examples in Exams',
                text: 'Start with small, simple values: try n = 0, 1, 2, −1 first. For statements about squares/cubes, try negative numbers. For inequalities, try n = 1 (boundary) or fractional values. The examiner usually designs counter-examples to be small and obvious — do not overcomplicate your search.'
            },
            terms: []
        },
        {
            id: 'h-vs',
            type: 'heading',
            data: { text: 'Counter-example vs Proof', level: 2 },
            terms: []
        },
        {
            id: 'table-vs',
            type: 'comparisonTable',
            data: {
                headers: ['Situation', 'What you need'],
                rows: [
                    ['Show a statement is FALSE', 'ONE counter-example is sufficient'],
                    ['Show a statement is TRUE', 'A complete proof for ALL cases (deduction or exhaustion)'],
                    ['Find one value that works', 'Not a proof — only confirms one case, not all']
                ],
                caption: 'How many examples are needed?'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Disproof by counter-example: find ONE value that makes the conjecture fail. One counter-example is sufficient to disprove a general claim. Try simple values first (0, 1, 2, −1). State the counter-example clearly, show it makes the statement false, and conclude the conjecture is false.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'How many counter-examples are needed to disprove a conjecture? Why?' },
            { id: 'c2', blockId: 'callout-we2', prompt: 'Disprove: "For all n ∈ ℤ⁺, n² + n + 41 is prime." What counter-example should you try?' },
            { id: 'c3', blockId: 'table-vs', prompt: 'What is the difference between finding examples and giving a proof?' },
            { id: 'c4', blockId: 'list-method', prompt: 'What values should you try first when searching for a counter-example?' }
        ],
        summaryText: 'Disproof by counter-example: one failure = conjecture false. Try n = 0, 1, 2, −1 first. Classic example: n² + n + 41 fails at n = 40 (gives 41²). Quote the counter-example explicitly, substitute, show the statement is false, conclude.',
        ready: true
    },
    evidence: []
};
