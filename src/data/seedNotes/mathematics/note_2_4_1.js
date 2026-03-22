/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 1
 * "Recurrence relations"
 */

export const note_mathematics_2_4_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Define sequences using recurrence relations and generate terms by substitution.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is a Recurrence Relation?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A <strong>recurrence relation</strong> expresses each term of a sequence as a function of the previous term(s): uₙ₊₁ = f(uₙ). Together with an initial term u₁ (or u₀), a recurrence relation completely defines the sequence. You generate terms by substituting each term into the formula to get the next.' },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Notation',
                text: 'u_{n+1} = f(u_n),  u_1 = a\n\nThis is read: "the (n+1)th term equals f applied to the nth term, given that the first term is a."\n\nSpecial cases:\n• Arithmetic: uₙ₊₁ = uₙ + d  (add constant d each time)\n• Geometric: uₙ₊₁ = r · uₙ  (multiply by constant r each time)'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Generate Five Terms', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'u_{n+1} = 3u_n − 4, u_1 = 5. Find u_2, u_3, u_4, u_5.',
                text: 'u₁ = 5\nu₂ = 3(5) − 4 = 15 − 4 = 11\nu₃ = 3(11) − 4 = 33 − 4 = 29\nu₄ = 3(29) − 4 = 87 − 4 = 83\nu₅ = 3(83) − 4 = 249 − 4 = 245\n\nThe sequence 5, 11, 29, 83, 245, … is divergent (growing rapidly).'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Periodic Sequence from a Recurrence Relation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'u_{n+1} = 4 − u_n, u_1 = 1. Show the sequence is periodic and find the period.',
                text: 'u₁ = 1\nu₂ = 4 − 1 = 3\nu₃ = 4 − 3 = 1\nu₄ = 4 − 1 = 3\nu₅ = 4 − 3 = 1\n\nThe sequence is: 1, 3, 1, 3, 1, 3, …\n\nThe sequence repeats with period 2 (every 2 terms the same values recur). ✓\n\nSince the sequence oscillates between 1 and 3, it is also oscillating.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Finding the Recurrence Relation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A sequence satisfies u_{n+1} = ku_n + 3. Given u_1 = 2 and u_2 = 7, find k.',
                text: 'Substitute n = 1 into the recurrence relation:\n  u₂ = k·u₁ + 3\n  7 = k(2) + 3\n  7 − 3 = 2k\n  k = 2'
            },
            terms: []
        },
        {
            id: 'h-we4',
            type: 'heading',
            data: { text: 'Worked Example 4: Finding a Specific Term', level: 2 },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'u_{n+1} = (u_n)² − 3, u_1 = 2. Find the first term greater than 100.',
                text: 'u₁ = 2\nu₂ = 4 − 3 = 1\nu₃ = 1 − 3 = −2\nu₄ = 4 − 3 = 1\nu₅ = 1 − 3 = −2\n\nThe sequence is: 2, 1, −2, 1, −2, …  (periodic with period 2 from u₂)\n\nNone of these terms exceeds 100 — we need to reconsider the problem or check if we have found all terms. In this case the sequence is bounded and NEVER exceeds 2, so there is no term greater than 100.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: 'In exam questions on recurrence relations: ① substitute the given first term to find subsequent terms ② look for a repeating pattern (periodic behaviour) ③ if asked for the "behaviour" of the sequence, describe convergence, divergence, or periodicity ④ if asked to "show a sequence is periodic with period p", generate enough terms to observe p repetitions.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Recurrence relation: uₙ₊₁ = f(uₙ) with initial term u₁ = a. Generate terms by substituting each into the formula. Arithmetic: uₙ₊₁ = uₙ + d. Geometric: uₙ₊₁ = r·uₙ. Sequences can be convergent, divergent, or periodic. To find k in uₙ₊₁ = kuₙ + c: substitute known consecutive terms and solve.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When working with recurrence relations, always read carefully whether the sequence starts at n=1 or n=0 (or u1 vs u0). This completely shifts the terms and is a classic way to lose easy marks."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-what', prompt: 'What is a recurrence relation and what information do you need to fully define a sequence?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Given u_{n+1} = 3u_n − 4, u_1 = 5, find u_2, u_3, u_4.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Show that u_{n+1} = 4 − u_n with u_1 = 1 gives a periodic sequence. What is the period?' },
            { id: 'c4', blockId: 'callout-key', prompt: 'How do you write arithmetic and geometric sequences as recurrence relations?' }
        ],
        summaryText: 'Recurrence relation: uₙ₊₁ = f(uₙ), need u₁ to define the sequence. Generate by substitution. Arithmetic: uₙ₊₁=uₙ+d. Geometric: uₙ₊₁=r·uₙ. Can be periodic (look for repeating pattern), convergent, or divergent.',
        ready: true
    },
    evidence: []
};
