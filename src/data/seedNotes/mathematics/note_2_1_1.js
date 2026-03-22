/**
 * Seed note: Mathematics · WMA12 · Topic 1 · Subtopic 1
 * "Proof by deduction"
 */

export const note_mathematics_2_1_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use algebraic manipulation and logical deduction to prove mathematical statements rigorously.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Proof by Deduction?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: '<strong>Proof by deduction</strong> is the most common proof method at A-level. Starting from known definitions, axioms, or given assumptions, you use a chain of valid algebraic and logical steps to arrive at the conclusion. Every step must follow necessarily from the previous one — there can be no gaps or assumptions.' },
            terms: []
        },
        {
            id: 'h-key',
            type: 'heading',
            data: { text: 'Key Algebraic Representations', level: 2 },
            terms: []
        },
        {
            id: 'list-reps',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Even integer: <strong>2n</strong> for some n ∈ ℤ' },
                    { text: 'Odd integer: <strong>2n + 1</strong> for some n ∈ ℤ' },
                    { text: 'Multiple of 3: <strong>3n</strong> for some n ∈ ℤ' },
                    { text: 'Two consecutive integers: <strong>n</strong> and <strong>n + 1</strong>' },
                    { text: 'Two consecutive even integers: <strong>2n</strong> and <strong>2n + 2</strong>' },
                    { text: 'Two consecutive odd integers: <strong>2n + 1</strong> and <strong>2n + 3</strong>' }
                ]
            },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Golden Rule of Deductive Proof',
                text: 'A proof must work for ALL integers n, where n can be any integer. You must use algebra throughout — testing specific numbers (e.g. n = 3, n = 5) is never sufficient as a proof. Only when you have an algebraic expression like 2k, where k ∈ ℤ, can you conclude divisibility.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Prove n² + n is even for all n ∈ ℤ', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Proof: n² + n is always even',
                text: 'Let n be any integer.\n\nn² + n = n(n + 1)\n\nNote that n and (n + 1) are consecutive integers. One of any two consecutive integers must be even (they alternate odd/even).\n\n∴ n(n + 1) = (even number) × (some integer) OR (some integer) × (even number)\n∴ n(n + 1) is even.\n\nAlternatively, factoring confirms this: if n = 2k (even), then n² + n = 4k² + 2k = 2(2k² + k) — even. If n = 2k + 1 (odd), then n² + n = 4k² + 6k + 2 = 2(2k² + 3k + 1) — even. □'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Prove the sum of two consecutive odd numbers is divisible by 4', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Proof: two consecutive odd numbers sum to a multiple of 4',
                text: 'Let the two consecutive odd integers be (2n + 1) and (2n + 3), where n ∈ ℤ.\n\nSum = (2n + 1) + (2n + 3)\n    = 4n + 4\n    = 4(n + 1)\n\nSince (n + 1) is an integer, 4(n + 1) is divisible by 4.\n∴ The sum of any two consecutive odd integers is divisible by 4. □'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Prove that the square of any odd number is odd', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Proof: odd² is always odd',
                text: 'Let n be odd, so n = 2k + 1 for some k ∈ ℤ.\n\nn² = (2k + 1)²\n   = 4k² + 4k + 1\n   = 2(2k² + 2k) + 1\n\nLet m = 2k² + 2k ∈ ℤ. Then n² = 2m + 1, which is odd.\n∴ The square of any odd number is odd. □'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique for Deductive Proofs',
                text: '① Define your variable: "Let n ∈ ℤ" ② Write the expression algebraically ③ Factorise or manipulate to reach the required form (e.g. 2k for even, 4k for multiple of 4) ④ State clearly what the factored expression proves ⑤ End with "∴ [result], as required □"'
            },
            terms: []
        },
        {
            id: 'h-common',
            type: 'heading',
            data: { text: 'Common Results Worth Knowing', level: 2 },
            terms: []
        },
        {
            id: 'list-common',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Even ± Even = Even' },
                    { text: 'Odd ± Odd = Even' },
                    { text: 'Even ± Odd = Odd' },
                    { text: 'Even × anything = Even' },
                    { text: 'Odd × Odd = Odd' },
                    { text: 'n(n+1) is always even (consecutive integers)' },
                    { text: 'n(n+1)(n+2) is always divisible by 6' }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Proof by deduction: use algebra to prove for ALL n. Even = 2n, odd = 2n+1. Key steps: define n, manipulate algebraically, factorise to reveal the required form (e.g. 2k = even, 4k = multiple of 4), conclude with a clear statement. Never prove using specific numerical examples.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always state a clear conclusion at the end of your proof. Examiners look for a concluding statement (e.g., 'Therefore, the statement is true for all n') to award the final communication mark."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-what', prompt: 'What is proof by deduction, and what must every step be based on?' },
            { id: 'c2', blockId: 'callout-key', prompt: 'Why is testing specific numerical examples (like n = 3, n = 5) not sufficient as a proof?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Prove that n² + n is even for all integers n.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Prove that the sum of any two consecutive odd integers is divisible by 4.' },
            { id: 'c5', blockId: 'callout-we3', prompt: 'Prove that the square of any odd integer is odd.' }
        ],
        summaryText: 'Proof by deduction uses algebra to prove a result for all integers. Key reps: 2n (even), 2n+1 (odd), 2n+1 & 2n+3 (consecutive odd), n & n+1 (consecutive). Factorise the result to show it equals 2k (even) or 4k (multiple of 4) etc. Always conclude with a clear statement.',
        ready: true
    },
    evidence: []
};
