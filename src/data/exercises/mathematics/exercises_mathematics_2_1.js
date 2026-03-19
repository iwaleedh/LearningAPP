export const exercises_mathematics_2_1 = {
    mcq: [
        // Language of proof
        {
            id: 'mcq-1',
            stem: 'What does "theorem" mean in mathematics?',
            options: ['A statement derived from axioms', 'A statement believed to be true without proof', 'A statement accepted as true without proof'],
            correctAnswer: 0,
            rationale: 'A theorem is a mathematical statement that has been proven true using rigorous logical reasoning, based on accepted axioms.',
            topic: 'Language of proof'
        },
        {
            id: 'mcq-2',
            stem: 'Which symbol means "implies" (if and only if)?',
            options: ['⟺', '⟹', '⇒', '→'],
            correctAnswer: 1,
            rationale: 'The symbol ⟺ means "implies if and only if" — left statement implies → right statement, and vice versa. This is standard symbol used in mathematical proof for a one-way implication.',
            topic: 'Language of proof'
        },
        // Language of proof
        {
            id: 'mcq-3',
            stem: 'What is a counter-example?',
            options: ['An example that disproves a conjecture', 'A statement that proves the opposite of what was claimed', 'A single value that satisfies all conditions except one'],
            correctAnswer: 0,
            rationale: 'A counter-example is a specific example that shows a conjecture is false. By providing just one case where the statement fails (while satisfying all other conditions), you disprove the claim.',
            topic: 'Language of proof'
        },
        // Number sets
        {
            id: 'mcq-4',
            stem: 'What is ℕ?',
            options: ['All natural numbers', 'All integers', 'Real numbers'],
            correctAnswer: 2,
            rationale: 'ℕ represents set of natural numbers {0, 1, 2, 3, ...}. ℕ represents set of positive integers {1, 2, 3, ...}. ℝ represents all real numbers.',
            topic: 'Language of proof'
        },
        {
            id: 'mcq-5',
            stem: 'What is ℚ?',
            options: ['All integers', 'Natural numbers', 'ℕ', 'ℤ', 'ℝ'],
            correctAnswer: 1,
            rationale: 'ℚ represents set of non-negative integers {−1, −2, −3, ...}. This is the set of all integers except negative integers.',
            topic: 'Language of proof'
        },
        {
            id: 'mcq-6',
            stem: 'What does 2n represent algebraically?',
            options: ['n × 2', '2n', '2(n+1)', 'n²'],
            correctAnswer: 0,
            rationale: '2n represents any integer that is a multiple of 2. This is the standard algebraic representation for even integers: 2n where n is an integer.',
            topic: 'Algebraic representations in proof'
        },
        // Algebraic representations
        {
            id: 'mcq-7',
            stem: 'What is set of positive integers called?',
            options: ['ℕ⁺', 'ℤ'],
            correctAnswer: 2,
            rationale: 'ℤ⁺ represents set of positive integers {1, 2, 3, ...}. For example, 2k represents numbers like 2, 6, 10.',
            topic: 'Algebraic representations in proof'
        },
        // Logical symbols
        {
            id: 'mcq-8',
            stem: 'What does ⟹ mean?',
            options: ['⟺', '⇒', '→'],
            correctAnswer: 1,
            rationale: 'The symbol ⟹ means "implies if and only if" — left statement implies → right statement, and vice versa.',
            topic: 'Language of proof'
        },
        {
            id: 'mcq-9',
            stem: 'What does ↔ mean?',
            options: ['⇒', '→'],
            correctAnswer: 1,
            rationale: 'The symbol ↔ means "if and only if" — left statement implies right, and right statement implies left.',
            topic: 'Language of proof'
        },
        {
            id: 'mcq-10',
            stem: 'What does ≡ mean?',
            options: ['If and only if', 'Therefore', '∴'],
            correctAnswer: 1,
            rationale: 'The symbol ≡ means "if and only if — therefore". This is commonly used to mark the end of a proof chain.',
            topic: 'Language of proof'
        },
        {
            id: 'mcq-11',
            stem: 'What does ∀ mean?',
            options: ['For all', 'Only if', 'If and only if'],
            correctAnswer: 0,
            rationale: 'The symbol ∀ means "for all" — it applies to every element in the set under consideration.',
            topic: 'Language of proof'
        },
    ],
    fillblank: [
        {
            id: 'fb-1',
            stem: 'A mathematical statement that has been proved is called a __BLANK__.',
            blanks: [{ answer: 'theorem' }],
            rationale: 'A theorem is a statement proven true from axioms.',
        },
        {
            id: 'fb-2',
            stem: 'A statement believed true but not yet proved is called a __BLANK__.',
            blanks: [{ answer: 'conjecture' }],
            rationale: 'A conjecture is a statement believed to be true but not yet proven.',
        },
        {
            id: 'fb-3',
            stem: 'A helper result proved to establish a larger result is called a __BLANK__.',
            blanks: [{ answer: 'lemma' }],
            rationale: 'A lemma is a smaller result proved to help prove a larger theorem.',
        },
        {
            id: 'fb-4',
            stem: 'A result that follows directly from a theorem is called a __BLANK__.',
            blanks: [{ answer: 'corollary' }],
            rationale: 'A corollary is a result that follows immediately from an established theorem.',
        },
        {
            id: 'fb-5',
            stem: 'An equation true for all values of a variable is called an __BLANK__.',
            blanks: [{ answer: 'identity' }],
            rationale: 'An identity is an equation that holds true for all values of a variable, typically using ≡ symbol.',
        },
        {
            id: 'fb-6',
            stem: 'The symbol ⟺ means __BLANK__.',
            blanks: [{ answer: 'implies' }],
            rationale: 'The symbol ⟺ is the standard "implies if and only if" symbol.',
        },
        {
            id: 'fb-7',
            stem: 'The set of natural numbers is denoted by __BLANK__.',
            blanks: [{ answer: 'ℕ' }],
            rationale: 'ℕ represents set of natural numbers {0, 1, 2, 3, ...}.',
        },
    ],
    dragdrop: [
        {
            id: 'dd-1',
            stem: 'Categorise these mathematical statements.',
            categories: ['Theorem', 'Conjecture', 'Lemma', 'Corollary', 'Identity', 'Axiom'],
            items: [
                { text: 'The sum of angles in a triangle is 180°', category: 'Theorem' },
                { text: 'There are infinitely many prime numbers', category: 'Conjecture' },
                { text: 'If n² + n is even, then n is even', category: 'Lemma' },
                { text: 'sin² x + cos² x = 1', category: 'Identity' },
                { text: 'Parallel postulate', category: 'Axiom' },
                { text: 'All right angles are equal', category: 'Axiom' },
            ],
        },
        {
            id: 'dd-2',
            stem: 'Categorise these number properties.',
            categories: ['Even (divisible by 2)', 'Odd (divisible by 2)', 'Prime (only divisible by 1)', 'Composite (has factors other than 1 and itself)'],
            items: [
                { text: '4', category: 'Even (divisible by 2)' },
                { text: '7', category: 'Odd (divisible by 2 with remainder 1)' },
                { text: '12', category: 'Prime (only divisible by 1)' },
                { text: '15', category: 'Composite (has factors 2, 3, 5, 15)' },
                { text: '5', category: 'Even (divisible by 2)' },
                { text: '9', category: 'Composite (has factors 2, 3, 5, 6, 9, 18, 27, 36, 45, 54)' },
                { text: '6', category: 'Even (divisible by 2)' },
                { text: '25', category: 'Composite (has factors 2, 3, 5, 6, 10, 15, 25, 30, 50)' },
            ],
        },
        {
            id: 'dd-3',
            stem: 'Sort these number properties.',
            categories: ['Even (divisible by 2)', 'Odd (divisible by 2 with remainder 1)', 'Prime (only divisible by 1 and itself)', 'Composite (has factors other than 1 and itself)'],
            items: [
                { text: '2', category: 'Prime (only divisible by 1 and itself)' },
                { text: '10', category: 'Even (divisible by 2)' },
                { text: '17', category: 'Prime (only divisible by 1 and itself)' },
                { text: '6', category: 'Even (divisible by 2)' },
                { text: '25', category: 'Composite (has factors other than 1 and itself)' },
                { text: '5', category: 'Prime (only divisible by 1 and itself)' },
                { text: '9', category: 'Composite (has factors other than 1 and itself)' },
            ],
        },
    ],
    sequence: [
        {
            id: 'seq-1',
            stem: 'Put steps for proving that n² + n is even using algebra in order:',
            steps: [
                'Let n be any integer',
                'Consider parity of n: n = 2k or n = 2k + 1',
                'Case 1: If n = 2k (even), then n² = 4k² (even), and n² + n is divisible by 4',
                'Write as 2k(n + 1): n² + n = 4k²(n + 1)',
                'Factorise: n² + n = n(2k + 1)',
                'Conclusion: n² + n is divisible by 4'
            ],
        },
        {
            id: 'seq-2',
            stem: 'Put steps for proving that if n is even, then n² is divisible by 4 in order:',
            steps: [
                'Let n be an integer',
                'Case 1: If n is even, write n = 2k',
                'Then n² = 4k² (even)',
                'Since 4k² is divisible by 4, n² + n is divisible by 4',
                'Case 2: If n is odd, write n = 2k + 1',
                'Then n² = 4k² + 4k + 1)',
                'Since 4k² is divisible by 4 and 4k + 1 is divisible by 4, n² + n is divisible by 4',
                'Factorise: n² + n = n(2k + 1)',
                'Conclusion: If n is even or n ≡ 2 (mod 4), then n² + n is divisible by 4'
            ],
        },
    ],
    keyword: [
        {
            id: 'kw-1',
            stem: 'Define theorem and conjecture in mathematics. [2 marks]',
            marks: 2,
            keywords: ['theorem', 'proven', 'true', 'belief', 'not proven', 'axioms', 'rigorous', 'counter-example'],
            modelAnswer: 'A theorem is a mathematical statement that has been proven true using rigorous logical reasoning, based on accepted axioms — it is universally valid. A conjecture is a statement believed to be true but not yet proven. The key difference is that theorems have been rigorously established, while conjectures are tentative claims awaiting proof.',
        },
        {
            id: 'kw-2',
            stem: 'Explain what is meant by proving for ALL integers n rather than specific values. [2 marks]',
            marks: 2,
            keywords: ['universal', 'every case', 'algebraic', 'variable', 'general proof', 'algebraic'],
            modelAnswer: 'Proving for ALL integers n requires using a variable n that represents any integer, not a specific number like n = 3 or n = 5. The proof must use algebraic properties and logical deduction that apply universally to all elements of the set. For example, using n = 2k or n = 2k + 1 to prove even/odd properties, using n = 2k + 1 to prove divisibility by 4.',
        },
        {
            id: 'kw-3',
            stem: 'State and prove that if n is even, then n² is divisible by 2 in two different ways. [3 marks]',
            marks: 3,
            keywords: ['algebraic manipulation', 'direct proof', '2k', 'n²', 'divisible', 'remainder'],
            modelAnswer: 'Method 1: Using parity: if n = 2k, then n = 2k (even). Write n² = 4k² and note that 4k² is divisible by 4. Method 2: Using direct proof: If n = 2k + 1 (odd), write n = 2k + 1. Then n² = 4k² + 4k + 1, which is divisible by 4. Both methods show n² + n is even.',
        },
        {
            id: 'kw-4',
            stem: 'State three main methods of proof at A-level. [3 marks]',
            marks: 3,
            keywords: ['deduction', 'exhaustion', 'counter-example', 'algebraic', 'logical steps'],
            modelAnswer: 'The three main methods are: (1) Proof by deduction — a chain of algebraic/logical steps from assumptions to conclusion, most common method. (2) Proof by exhaustion — checking every case in a finite set individually, useful for problems with limited possibilities. (3) Disproof by counter-example — finding one specific example that makes a statement false.',
        },
        {
            id: 'kw-5',
            stem: 'What are the four main methods of proof at A-level?',
            options: ['Proof by deduction', 'Proof by exhaustion', 'Disproof by counter-example', 'Algebraic', 'Induction'],
            correctAnswer: 2,
            rationale: 'The three main methods are: (1) Proof by deduction — a chain of algebraic/logical steps from assumptions to conclusion, most common method. (2) Proof by exhaustion — checking every case in a finite set individually, useful for problems with limited possibilities. (3) Disproof by counter-example — finding one specific example that makes a statement false.'
        },
    ],
    flashcards: [
        {
            id: 'fc-1',
            front: 'What is ℕ?',
            back: 'Set of natural numbers: {0, 1, 2, 3, ...}. ℕ represents set of positive integers {1, 2, 3, ...}.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-2',
            front: 'What is ℤ?',
            back: 'Set of non-negative integers: {−1, −2, −3, ...}. ℤ represents set of non-negative integers.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-3',
            front: 'What is ℚ?',
            back: 'Set of non-negative integers: {..., −2, −3, ...}. ℚ represents set of non-negative integers.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-4',
            front: 'What is ⟂?',
            back: 'Real numbers set: ℝ',
            topic: 'Language of proof'
        },
        {
            id: 'fc-5',
            front: 'What is ℝ?',
            back: 'Real numbers set: ℝ — includes all rational and irrational numbers.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-6',
            front: 'What is ℝ?',
            back: 'Real numbers set: ℝ — includes all rational and irrational numbers.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-7',
            front: 'What does 2n represent algebraically?',
            back: 'Any integer that is a multiple of 2 — 2n = 2k where k is an integer.',
            topic: 'Algebraic representations in proof'
        },
        {
            id: 'fc-8',
            front: 'What does ↔ mean?',
            back: 'If and only if — →, left statement implies → right statement, and vice versa.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-9',
            front: 'What does ≡ mean?',
            back: 'If and only if — →, therefore',
            topic: 'Language of proof'
        },
        {
            id: 'fc-10',
            front: 'What does ∀ mean?',
            back: 'For all — any element, or value.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-11',
            front: 'What does ⟺ mean?',
            back: 'There exists — for all x',
            topic: 'Language of proof'
        },
        {
            id: 'fc-12',
            front: 'What is "therefore"?',
            back: 'The statement is believed true before being proved, often indicated by "therefore" in proofs.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-13',
            front: 'What does "iff" mean?',
            back: 'If and only if — then — both directions must hold: you must prove A ⟹ B and also B ⟹ A. Simply proving one direction is insufficient.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-14',
            front: 'What is "a" or "A"?',
            back: 'First you must state A — what it is.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-15',
            front: 'What is "a" or "A"? How do you know?',
            back: 'By axioms or previously proved theorems that establish truth of both statements.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-16',
            front: 'What are the symbols ⟺, →, ≡ used in mathematical proof?',
            back: '⟺ means "if and only if" — left → right, ⟺ = "if and only if" — both, →',
            topic: 'Language of proof'
        },
        {
            id: 'fc-17',
            front: 'What does "x ∈ ℤ" mean?',
            back: 'x is an element of the set of natural numbers.',
            topic: 'Language of proof'
        },
        {
            id: 'fc-18',
            front: 'What does "y ∈ ℝ" mean?',
            back: 'y is a real number.',
            topic: 'Language of proof'
        },
    ],
};
