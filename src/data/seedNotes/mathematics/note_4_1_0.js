/**
 * WMA14 · Topic 1 · Subtopic 0 — Proof by contradiction
 */
export const note_mathematics_4_1_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Construct proofs by contradiction, including proving that \u221a2 is irrational and that there are infinitely many primes.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Method: Proof by Contradiction', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Steps',
                text: '1. Assume the negation of what you want to prove.\n2. Reason logically from that assumption.\n3. Arrive at a statement that contradicts a known fact (or the assumption itself).\n4. Conclude that the original assumption was false, so the proposition is true.'
            }, terms: []
        },
        {
            id: 'h-sqrt2', type: 'heading',
            data: { text: 'Proof: \u221a2 is Irrational', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove that \u221a2 is irrational.',
                text: 'Assume \u221a2 is rational. Then \u221a2 = p/q where p, q \u2208 \u2124 and the fraction is in lowest terms (gcd(p,q) = 1).\n\nSquaring: 2 = p\u00b2/q\u00b2  \u27a2  p\u00b2 = 2q\u00b2\nSo p\u00b2 is even  \u27a2  p is even (if p were odd, p\u00b2 would be odd).\nWrite p = 2k. Then 4k\u00b2 = 2q\u00b2  \u27a2  q\u00b2 = 2k\u00b2  \u27a2  q is even.\n\nBoth p and q are even, contradicting gcd(p,q) = 1. \u2234 \u221a2 is irrational. \u25a0'
            }, terms: []
        },
        {
            id: 'h-primes', type: 'heading',
            data: { text: 'Proof: Infinitely Many Primes', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove there are infinitely many prime numbers.',
                text: 'Assume for contradiction that there are finitely many primes: p\u2081, p\u2082, \u2026, p_n.\n\nForm N = p\u2081 \u00b7 p\u2082 \u00b7 \u2026 \u00b7 p_n + 1.\nN is not divisible by any p_i (remainder 1 each time).\nSo either N is prime, or N has a prime factor not in our list.\nEither way, there is a prime not in {p\u2081, \u2026, p_n}. Contradiction. \u25a0'
            }, terms: []
        },
        {
            id: 'h-other', type: 'heading',
            data: { text: 'Other Common Examples', level: 2 }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: if n\u00b2 is even, then n is even.',
                text: 'Assume n is odd. Then n = 2k + 1 for some integer k.\nn\u00b2 = (2k+1)\u00b2 = 4k\u00b2 + 4k + 1 = 2(2k\u00b2+2k) + 1, which is odd.\nThis contradicts n\u00b2 being even. \u2234 n must be even. \u25a0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: 'Always state clearly: "Assume for contradiction that \u2026". End with: "This is a contradiction, therefore \u2026 is proved." Use \u25a0 or QED to signal the end of the proof.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Proof by contradiction: assume the negation, derive a logical impossibility, conclude the original statement is true. Key examples: \u221a2 is irrational; infinitely many primes.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'List the 4 steps of a proof by contradiction.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Outline the proof that \u221a2 is irrational.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Outline Euclid\u2019s proof that there are infinitely many primes.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Prove by contradiction: if n\u00b2 is even then n is even.' }
        ],
        summaryText: 'Proof by contradiction: assume negation \u2192 deduce contradiction \u2192 original statement true. Classic: \u221a2 irrational, infinitely many primes.',
        ready: true
    },
    evidence: []
};
