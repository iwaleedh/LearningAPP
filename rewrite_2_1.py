import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_1_0: Language of proof ──────────────────────────────────────────
note_2_1_0 = """/**
 * Seed note: Mathematics · WMA12 · Topic 1 · Subtopic 0
 * "Language of proof"
 */

export const note_mathematics_2_1_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Understand the key vocabulary, notation, and algebraic conventions used in mathematical proof.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is a Mathematical Proof?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A <strong>proof</strong> is a rigorous logical argument that demonstrates a mathematical statement is true for <em>every</em> case in its domain. Unlike checking examples, a proof works universally, using agreed definitions (axioms) and previously proved results (theorems) to build an unbreakable chain of reasoning.' },
            terms: []
        },
        {
            id: 'h-vocab',
            type: 'heading',
            data: { text: 'Key Mathematical Vocabulary', level: 2 },
            terms: []
        },
        {
            id: 'table-vocab',
            type: 'comparisonTable',
            data: {
                headers: ['Term', 'Meaning'],
                rows: [
                    ['Theorem', 'A mathematical statement that has been proved true'],
                    ['Conjecture', 'A statement believed to be true but not yet proved'],
                    ['Axiom', 'A statement accepted as true without proof (a starting assumption)'],
                    ['Lemma', 'A helper result proved in order to prove a larger theorem'],
                    ['Corollary', 'A result that follows directly from a theorem with little extra work'],
                    ['Identity', 'An equation true for all values of the variable (uses ≡ not =)']
                ],
                caption: 'Core vocabulary for mathematical proof'
            },
            terms: []
        },
        {
            id: 'h-sets',
            type: 'heading',
            data: { text: 'Number Set Notation', level: 2 },
            terms: []
        },
        {
            id: 'list-sets',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>ℕ</strong> — Natural numbers: {1, 2, 3, 4, ...}' },
                    { text: '<strong>ℤ</strong> — Integers: {..., −2, −1, 0, 1, 2, ...}' },
                    { text: '<strong>ℚ</strong> — Rational numbers: all fractions p/q where p, q ∈ ℤ, q ≠ 0' },
                    { text: '<strong>ℝ</strong> — Real numbers: all points on the number line (includes irrationals like π, √2)' },
                    { text: '<strong>ℤ⁺</strong> — Positive integers: {1, 2, 3, ...}' }
                ]
            },
            terms: []
        },
        {
            id: 'h-logic',
            type: 'heading',
            data: { text: 'Logical Symbols', level: 2 },
            terms: []
        },
        {
            id: 'table-logic',
            type: 'comparisonTable',
            data: {
                headers: ['Symbol', 'Meaning', 'Read as'],
                rows: [
                    ['⟹', 'Implies', 'If … then …'],
                    ['⟺', 'If and only if (iff)', 'Is equivalent to'],
                    ['∴', 'Therefore', 'It follows that'],
                    ['∵', 'Because / since', 'Given that'],
                    ['∀', 'For all', 'For every'],
                    ['∃', 'There exists', 'There is at least one']
                ],
                caption: 'Logical symbols used in mathematical proof'
            },
            terms: []
        },
        {
            id: 'callout-iff',
            type: 'callout',
            data: {
                style: 'key',
                title: 'If and Only If (⟺)',
                text: 'A ⟺ B requires proving BOTH directions: you must show A ⟹ B and also B ⟹ A. Simply proving one direction is insufficient. The symbol ≡ is used for identities true for all variable values.'
            },
            terms: []
        },
        {
            id: 'h-alg',
            type: 'heading',
            data: { text: 'Algebraic Representations in Proof', level: 2 },
            terms: []
        },
        {
            id: 'p-alg',
            type: 'paragraph',
            data: { text: 'To prove results about integers, we represent them algebraically rather than testing specific numbers:' },
            terms: []
        },
        {
            id: 'list-alg',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Even integer:</strong> 2n, where n ∈ ℤ' },
                    { text: '<strong>Odd integer:</strong> 2n + 1, where n ∈ ℤ' },
                    { text: '<strong>Multiple of k:</strong> kn, where n ∈ ℤ' },
                    { text: '<strong>Consecutive integers:</strong> n, n + 1, n + 2, …' },
                    { text: '<strong>Consecutive even integers:</strong> 2n, 2n + 2, 2n + 4, …' },
                    { text: '<strong>Consecutive odd integers:</strong> 2n + 1, 2n + 3, 2n + 5, …' }
                ]
            },
            terms: []
        },
        {
            id: 'h-methods',
            type: 'heading',
            data: { text: 'Methods of Proof at A-Level', level: 2 },
            terms: []
        },
        {
            id: 'list-methods',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Proof by deduction</strong> — chain of algebraic/logical steps from assumptions to conclusion (most common)' },
                    { text: '<strong>Proof by exhaustion</strong> — check every case in a finite set individually' },
                    { text: '<strong>Disproof by counter-example</strong> — find one value that makes a conjecture false' }
                ]
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Proof Writing Conventions',
                text: '① Always define what n represents: "Let n ∈ ℤ" ② Show each step clearly with ∴ or "therefore" ③ End with a clear conclusion: "Therefore… is even / a multiple of k / etc." ④ Write QED (quod erat demonstrandum) or □ to signal the proof is complete.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Proof establishes truth rigorously for all cases. Key vocab: theorem (proved), conjecture (unproved), axiom (assumed). Symbols: ⟹ (implies), ⟺ (iff — both directions). Sets: ℕ (naturals), ℤ (integers), ℚ (rationals), ℝ (reals). Algebraic reps: even = 2n, odd = 2n+1. Three A-level methods: deduction, exhaustion, counter-example.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-vocab', prompt: 'What is the difference between a theorem and a conjecture?' },
            { id: 'c2', blockId: 'table-logic', prompt: 'What does ⟺ mean, and what must you prove to establish an "if and only if" result?' },
            { id: 'c3', blockId: 'list-alg', prompt: 'How do you represent an even integer algebraically? An odd integer? Two consecutive odd integers?' },
            { id: 'c4', blockId: 'list-sets', prompt: 'What are the four main number sets ℕ, ℤ, ℚ, ℝ?' },
            { id: 'c5', blockId: 'list-methods', prompt: 'Name the three methods of proof required at A-level.' }
        ],
        summaryText: 'Language of proof: theorem = proved result; conjecture = unproved claim; axiom = assumed true. ⟹ = implies; ⟺ = iff (both directions). Even = 2n, odd = 2n+1. Number sets: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Proof methods: deduction (algebraic argument), exhaustion (all finite cases), counter-example (one failure to disprove).',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_1_1: Proof by deduction ─────────────────────────────────────────
note_2_1_1 = """/**
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
                text: 'Let n be any integer.\\n\\nn² + n = n(n + 1)\\n\\nNote that n and (n + 1) are consecutive integers. One of any two consecutive integers must be even (they alternate odd/even).\\n\\n∴ n(n + 1) = (even number) × (some integer) OR (some integer) × (even number)\\n∴ n(n + 1) is even.\\n\\nAlternatively, factoring confirms this: if n = 2k (even), then n² + n = 4k² + 2k = 2(2k² + k) — even. If n = 2k + 1 (odd), then n² + n = 4k² + 6k + 2 = 2(2k² + 3k + 1) — even. □'
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
                text: 'Let the two consecutive odd integers be (2n + 1) and (2n + 3), where n ∈ ℤ.\\n\\nSum = (2n + 1) + (2n + 3)\\n    = 4n + 4\\n    = 4(n + 1)\\n\\nSince (n + 1) is an integer, 4(n + 1) is divisible by 4.\\n∴ The sum of any two consecutive odd integers is divisible by 4. □'
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
                text: 'Let n be odd, so n = 2k + 1 for some k ∈ ℤ.\\n\\nn² = (2k + 1)²\\n   = 4k² + 4k + 1\\n   = 2(2k² + 2k) + 1\\n\\nLet m = 2k² + 2k ∈ ℤ. Then n² = 2m + 1, which is odd.\\n∴ The square of any odd number is odd. □'
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
"""

# ─── note_2_1_2: Proof by exhaustion ────────────────────────────────────────
note_2_1_2 = """/**
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
                text: 'Check each case in turn:\\n\\nn = 1: 1 × 3 = 3. Is 3 a perfect square? No (√3 is irrational). ✓\\nn = 2: 2 × 4 = 8. Is 8 a perfect square? No (√8 is irrational). ✓\\nn = 3: 3 × 5 = 15. Is 15 a perfect square? No. ✓\\nn = 4: 4 × 6 = 24. Is 24 a perfect square? No. ✓\\n\\nAll four cases have been checked and the result holds in every case.\\n∴ For every integer n with 1 ≤ n ≤ 4, n(n + 2) is not a perfect square. □'
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
                text: 'Identify all integers in the range 11–19: {11, 12, 13, 14, 15, 16, 17, 18, 19}.\\n\\nFilter to primes:\\n  11 — prime (not divisible by 2, 3, 5, 7) — ODD ✓\\n  12 = 4 × 3 — not prime (skip)\\n  13 — prime — ODD ✓\\n  14 = 2 × 7 — not prime (skip)\\n  15 = 3 × 5 — not prime (skip)\\n  16 = 2⁴ — not prime (skip)\\n  17 — prime — ODD ✓\\n  18 = 2 × 9 — not prime (skip)\\n  19 — prime — ODD ✓\\n\\nAll primes in this range ({11, 13, 17, 19}) are odd.\\n∴ All prime numbers between 10 and 20 are odd. □'
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
                text: 'n = 1: 1³ − 1 = 0 = 3 × 0. Divisible by 3. ✓\\nn = 2: 2³ − 2 = 8 − 2 = 6 = 3 × 2. Divisible by 3. ✓\\nn = 3: 3³ − 3 = 27 − 3 = 24 = 3 × 8. Divisible by 3. ✓\\n\\nAll three cases verified.\\n∴ n³ − n is divisible by 3 for n ∈ {1, 2, 3}. □\\n\\nNote: This particular result holds for ALL integers (via deduction), but the problem only required proof for the given finite set.'
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
"""

# ─── note_2_1_3: Disproof by counter-example ─────────────────────────────────
note_2_1_3 = """/**
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
                text: 'Counter-example: n = 2.\\n\\n2 is prime (its only factors are 1 and 2). However, 2 is even, not odd.\\n\\n∴ n = 2 is a counter-example. The conjecture "all prime numbers are odd" is false. □'
            },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Disprove: "For all n ∈ ℤ⁺, n² + n + 41 is prime"',
                text: 'Try n = 40:\\n  40² + 40 + 41 = 1600 + 40 + 41 = 1681\\n  1681 = 41 × 41 = 41²\\n  41² is not prime (it is divisible by 41).\\n\\n∴ n = 40 is a counter-example. The conjecture is false. □\\n\\n(Note: this formula does give primes for n = 0, 1, 2, …, 39 — but n = 40 disproves the general claim.)'
            },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Disprove: "For all integers n > 0, 2n > n + 1"',
                text: 'Try n = 1:\\n  LHS: 2(1) = 2\\n  RHS: 1 + 1 = 2\\n  2 > 2? NO — 2 is not strictly greater than 2.\\n\\n∴ n = 1 is a counter-example. The statement is false. □'
            },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Disprove: "For all real x, (x + 1)² = x² + 1"',
                text: 'Try x = 2:\\n  LHS: (2 + 1)² = 3² = 9\\n  RHS: 2² + 1 = 4 + 1 = 5\\n  9 ≠ 5.\\n\\n∴ x = 2 is a counter-example. The conjecture is false. (The correct expansion is x² + 2x + 1.) □'
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
"""

files = {
    'note_2_1_0.js': note_2_1_0,
    'note_2_1_1.js': note_2_1_1,
    'note_2_1_2.js': note_2_1_2,
    'note_2_1_3.js': note_2_1_3,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 1 (Proof) — all 4 notes done.')
