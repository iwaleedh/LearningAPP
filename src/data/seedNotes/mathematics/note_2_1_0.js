/**
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
