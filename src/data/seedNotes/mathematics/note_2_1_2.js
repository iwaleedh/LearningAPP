/**
 * Seed note: Mathematics · WMA12 · Topic 1 · Subtopic 2
 * "Proof by exhaustion"
 */

export const note_mathematics_2_1_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use proof by exhaustion to verify a result by checking every case in a finite set.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Proof by Exhaustion?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: '<strong>Proof by exhaustion</strong> verifies that a mathematical statement is true by checking <em>every single possible case</em>. Because every case is tested and found to be true, the result must hold generally. This method is only valid when the number of cases is <strong>finite</strong> and small enough to test individually.' },
            terms: []
        },
        {
            id: 'callout-warn',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'When Can You Use Proof by Exhaustion?',
                text: 'Proof by exhaustion ONLY works for a finite set of cases — for example, "all integers n where 1 ≤ n ≤ 5" or "all single-digit primes". If the statement is about all integers or all real numbers, exhaustion is impossible — use deduction instead.'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Proof by Exhaustion', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Identify the complete finite set of cases that must be checked' },
                    { text: 'Test each case individually, showing the result holds for that case' },
                    { text: 'Once all cases are verified, state a clear conclusion' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: n(n + 2) for 1 ≤ n ≤ 4', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: for every integer n with 1 ≤ n ≤ 4, n(n + 2) is not a perfect square',
                text: 'Check each case in turn:\n\nn = 1: 1 × 3 = 3. Is 3 a perfect square? No (√3 is irrational). ✓\nn = 2: 2 × 4 = 8. Is 8 a perfect square? No (√8 is irrational). ✓\nn = 3: 3 × 5 = 15. Is 15 a perfect square? No. ✓\nn = 4: 4 × 6 = 24. Is 24 a perfect square? No. ✓\n\nAll four cases have been checked and the result holds in every case.\n∴ For every integer n with 1 ≤ n ≤ 4, n(n + 2) is not a perfect square. □'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Primes between 10 and 20', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: all prime numbers between 10 and 20 are odd',
                text: 'Identify all integers in the range 11–19: {11, 12, 13, 14, 15, 16, 17, 18, 19}.\n\nFilter to primes:\n  11 — prime (not divisible by 2, 3, 5, 7) — ODD ✓\n  12 = 4 × 3 — not prime (skip)\n  13 — prime — ODD ✓\n  14 = 2 × 7 — not prime (skip)\n  15 = 3 × 5 — not prime (skip)\n  16 = 2⁴ — not prime (skip)\n  17 — prime — ODD ✓\n  18 = 2 × 9 — not prime (skip)\n  19 — prime — ODD ✓\n\nAll primes in this range ({11, 13, 17, 19}) are odd.\n∴ All prime numbers between 10 and 20 are odd. □'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Remainders mod 3', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: for n ∈ {1, 2, 3}, n³ − n is divisible by 3',
                text: 'n = 1: 1³ − 1 = 0 = 3 × 0. Divisible by 3. ✓\nn = 2: 2³ − 2 = 8 − 2 = 6 = 3 × 2. Divisible by 3. ✓\nn = 3: 3³ − 3 = 27 − 3 = 24 = 3 × 8. Divisible by 3. ✓\n\nAll three cases verified.\n∴ n³ − n is divisible by 3 for n ∈ {1, 2, 3}. □\n\nNote: This particular result holds for ALL integers (via deduction), but the problem only required proof for the given finite set.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: 'When using proof by exhaustion: ① list ALL possible cases clearly ② check each one individually with a brief calculation ③ tick each passing case ④ write a concluding statement noting all cases have been verified. Missing even one case makes the proof incomplete.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Proof by exhaustion: test every case in a finite set. Each case must be checked individually and shown to satisfy the result. Only works when the number of cases is finite. End with "all n cases verified, therefore…". Cannot be used for infinite domains — use deduction instead.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-what', prompt: 'What is proof by exhaustion and when is it valid to use?' },
            { id: 'c2', blockId: 'callout-warn', prompt: 'Why can proof by exhaustion not be used to prove a result about ALL integers?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Use proof by exhaustion to show n(n+2) is not a perfect square for n = 1, 2, 3, 4.' },
            { id: 'c4', blockId: 'list-method', prompt: 'What are the three steps in a proof by exhaustion?' }
        ],
        summaryText: 'Proof by exhaustion: only valid for finite sets. List all cases, check each one, conclude all verified. Cannot use for infinite domains. Classic examples: testing all single-digit primes, checking n from 1 to some small bound.',
        ready: true
    },
    evidence: []
};
