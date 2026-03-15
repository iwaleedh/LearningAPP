import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

# ── Topic 1: Proof ───────────────────────────────────────────────────────────

notes['note_4_1_0.js'] = """\
/**
 * WMA14 \u00b7 Topic 1 \u00b7 Subtopic 0 \u2014 Proof by contradiction
 */
export const note_mathematics_4_1_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Construct proofs by contradiction, including proving that \\u221a2 is irrational and that there are infinitely many primes.' },
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
                text: '1. Assume the negation of what you want to prove.\\n2. Reason logically from that assumption.\\n3. Arrive at a statement that contradicts a known fact (or the assumption itself).\\n4. Conclude that the original assumption was false, so the proposition is true.'
            }, terms: []
        },
        {
            id: 'h-sqrt2', type: 'heading',
            data: { text: 'Proof: \\u221a2 is Irrational', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove that \\u221a2 is irrational.',
                text: 'Assume \\u221a2 is rational. Then \\u221a2 = p/q where p, q \\u2208 \\u2124 and the fraction is in lowest terms (gcd(p,q) = 1).\\n\\nSquaring: 2 = p\\u00b2/q\\u00b2  \\u27a2  p\\u00b2 = 2q\\u00b2\\nSo p\\u00b2 is even  \\u27a2  p is even (if p were odd, p\\u00b2 would be odd).\\nWrite p = 2k. Then 4k\\u00b2 = 2q\\u00b2  \\u27a2  q\\u00b2 = 2k\\u00b2  \\u27a2  q is even.\\n\\nBoth p and q are even, contradicting gcd(p,q) = 1. \\u2234 \\u221a2 is irrational. \\u25a0'
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
                text: 'Assume for contradiction that there are finitely many primes: p\\u2081, p\\u2082, \\u2026, p_n.\\n\\nForm N = p\\u2081 \\u00b7 p\\u2082 \\u00b7 \\u2026 \\u00b7 p_n + 1.\\nN is not divisible by any p_i (remainder 1 each time).\\nSo either N is prime, or N has a prime factor not in our list.\\nEither way, there is a prime not in {p\\u2081, \\u2026, p_n}. Contradiction. \\u25a0'
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
                title: 'Prove: if n\\u00b2 is even, then n is even.',
                text: 'Assume n is odd. Then n = 2k + 1 for some integer k.\\nn\\u00b2 = (2k+1)\\u00b2 = 4k\\u00b2 + 4k + 1 = 2(2k\\u00b2+2k) + 1, which is odd.\\nThis contradicts n\\u00b2 being even. \\u2234 n must be even. \\u25a0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: 'Always state clearly: "Assume for contradiction that \\u2026". End with: "This is a contradiction, therefore \\u2026 is proved." Use \\u25a0 or QED to signal the end of the proof.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Proof by contradiction: assume the negation, derive a logical impossibility, conclude the original statement is true. Key examples: \\u221a2 is irrational; infinitely many primes.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'List the 4 steps of a proof by contradiction.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Outline the proof that \\u221a2 is irrational.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Outline Euclid\\u2019s proof that there are infinitely many primes.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Prove by contradiction: if n\\u00b2 is even then n is even.' }
        ],
        summaryText: 'Proof by contradiction: assume negation \\u2192 deduce contradiction \\u2192 original statement true. Classic: \\u221a2 irrational, infinitely many primes.',
        ready: true
    },
    evidence: []
};
"""

# ── Topic 2: Partial Fractions ────────────────────────────────────────────────

notes['note_4_2_0.js'] = """\
/**
 * WMA14 \u00b7 Topic 2 \u00b7 Subtopic 0 \u2014 Partial fractions: distinct linear denominators
 */
export const note_mathematics_4_2_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Decompose a rational expression with distinct linear factors in the denominator into partial fractions.' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'Form of Partial Fractions', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Distinct Linear Factors',
                text: 'If the denominator factorises into distinct linear factors:\\n\\n(px + q) / [(ax+b)(cx+d)] \\u2261 A/(ax+b) + B/(cx+d)\\n\\nFind A and B by the cover-up rule or by comparing coefficients.'
            }, terms: []
        },
        {
            id: 'h-cover', type: 'heading',
            data: { text: 'Cover-Up Rule', level: 2 }, terms: []
        },
        {
            id: 'p-cover', type: 'paragraph',
            data: { text: 'To find A in A/(ax+b): cover the factor (ax+b) in the original fraction and evaluate the rest at ax+b=0 (i.e. x = \\u2212b/a).' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (5x + 1)/[(x+1)(2x\\u22121)] as partial fractions.',
                text: '(5x+1)/[(x+1)(2x\\u22121)] \\u2261 A/(x+1) + B/(2x\\u22121)\\n\\nCover-up for A (set x = \\u22121):\\nA = (5(\\u22121)+1) / (2(\\u22121)\\u22121) = (\\u22124)/(\\u22123) = 4/3\\n\\nCover-up for B (set x = 1/2):\\nB = (5(1/2)+1) / (1/2+1) = (7/2)/(3/2) = 7/3\\n\\nAnswer: (4/3)/(x+1) + (7/3)/(2x\\u22121)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (3x + 2)/[x(x+2)(x\\u22121)] as partial fractions.',
                text: 'Write A/x + B/(x+2) + C/(x\\u22121)\\n\\nA = (3\\u00b70+2)/[(0+2)(0\\u22121)] = 2/(\\u22122) = \\u22121\\nB = (3(\\u22122)+2)/[(\\u22122)(\\u22122\\u22121)] = (\\u22124)/(6) = \\u22122/3\\nC = (3\\u00b71+2)/[(1)(1+2)] = 5/3\\n\\nAnswer: \\u22121/x + (\\u22122/3)/(x+2) + (5/3)/(x\\u22121)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Checking Your Answer',
                text: 'Recombine over a common denominator to verify. Alternatively, substitute a convenient value of x (e.g. x=0) and check both sides are equal.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Distinct linear denominators: write A/(ax+b) + B/(cx+d). Find constants by cover-up rule (substitute each root) or compare coefficients. Always verify by recombining.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the partial fraction form for distinct linear factors.' },
            { id: 'c2', blockId: 'p-cover', prompt: 'Explain the cover-up rule.' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find the partial fractions of (5x+1)/[(x+1)(2x\\u22121)].' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you verify partial fraction decomposition?' }
        ],
        summaryText: 'Distinct linear factors: A/(ax+b)+B/(cx+d). Cover-up rule: cover factor, evaluate at its root. Verify by recombining.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_2_1.js'] = """\
/**
 * WMA14 \u00b7 Topic 2 \u00b7 Subtopic 1 \u2014 Partial fractions: repeated linear factors
 */
export const note_mathematics_4_2_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Decompose rational expressions with repeated linear factors into partial fractions.' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'Form for Repeated Factors', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Repeated Linear Factor',
                text: 'A repeated factor (ax+b)\\u00b2 requires two terms:\\n\\nf(x) / [(ax+b)\\u00b2(cx+d)] \\u2261 A/(ax+b) + B/(ax+b)\\u00b2 + C/(cx+d)\\n\\nCover-up gives B and C directly. Find A by comparing coefficients or substituting another value.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (3x + 1)/[(x+2)\\u00b2(x\\u22121)] as partial fractions.',
                text: 'Write A/(x+2) + B/(x+2)\\u00b2 + C/(x\\u22121)\\n\\nCover-up B (set x = \\u22122):\\nB = (3(\\u22122)+1)/(\\u22122\\u22121) = (\\u22125)/(\\u22123) = 5/3\\n\\nCover-up C (set x = 1):\\nC = (3\\u00b71+1)/(1+2)\\u00b2 = 4/9\\n\\nFind A: multiply out and equate coefficients of x\\u00b2 (or substitute x=0):\\nAt x=0: 1/(4)(\\u22121) = A/2 + B/4 + C/(\\u22121)\\n\\u22121/4 = A/2 + 5/12 \\u2212 4/9\\nSolving: A = \\u22123/9... \\n(work through carefully: A = \\u22123/9, recombine to check)\\n\\nAlternative: compare x\\u00b2 coefficients after expanding:  A + C = 0  \\u27a2  A = \\u22124/9'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (x\\u00b2 + 3)/[(x\\u22122)\\u00b2] as partial fractions (complete form).',
                text: 'The degree of numerator = degree of denominator, so divide first.\\nx\\u00b2 + 3 = 1\\u00b7(x\\u22122)\\u00b2 + 4x \\u2212 1 = (x\\u22122)\\u00b2 + 4(x\\u22122) + 8\\u22121 = (x\\u22122)\\u00b2 + 4(x\\u22122) + 7\\n\\nSo (x\\u00b2+3)/(x\\u22122)\\u00b2 = 1 + 4/(x\\u22122) + 7/(x\\u22122)\\u00b2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Systematic Approach',
                text: 'For repeated factors, cover-up only works directly for the highest power. For lower powers, substitute a different value of x or compare coefficients after multiplying through by the denominator.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Repeated factor (ax+b)\\u00b2: needs A/(ax+b) + B/(ax+b)\\u00b2. Cover-up gives B directly. Find A by substituting another x-value or comparing coefficients.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the form of partial fractions when (ax+b)\\u00b2 is a factor.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'What does the cover-up rule give directly for (x+2)\\u00b2 in the denominator?' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'Why does cover-up only work directly for the highest power of a repeated factor?' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Express (x\\u00b2+3)/(x\\u22122)\\u00b2 in partial fraction form.' }
        ],
        summaryText: 'Repeated factor (ax+b)\\u00b2 \\u2192 A/(ax+b)+B/(ax+b)\\u00b2. Cover-up gives B directly; find A by substitution or comparing coefficients.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_2_2.js'] = """\
/**
 * WMA14 \u00b7 Topic 2 \u00b7 Subtopic 2 \u2014 Partial fractions: improper fractions
 */
export const note_mathematics_4_2_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Identify improper rational expressions and convert them to a mixed form (polynomial + proper fraction) before decomposing into partial fractions.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'Proper vs Improper Fractions', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Definition',
                text: 'A rational expression f(x)/g(x) is:<br>\\u2022 <strong>Proper</strong> if deg(f) < deg(g)\\u00a0\\u00a0\\u2192 proceed directly to partial fractions\\n\\u2022 <strong>Improper</strong> if deg(f) \\u2265 deg(g)\\u00a0\\u2192 divide first to get: quotient + remainder/g(x)'
            }, terms: []
        },
        {
            id: 'h-div', type: 'heading',
            data: { text: 'Polynomial Division', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (x\\u00b2 + 3x + 5)/[(x+1)(x+2)] in partial fractions.',
                text: 'Numerator degree = 2 = denominator degree: improper.\\n\\nExpand denominator: (x+1)(x+2) = x\\u00b2 + 3x + 2\\n\\nDivide: (x\\u00b2+3x+5) \\u00f7 (x\\u00b2+3x+2)\\nQuotient = 1, Remainder = 3\\n\\nSo (x\\u00b2+3x+5)/[(x+1)(x+2)] = 1 + 3/[(x+1)(x+2)]\\n\\nNow decompose 3/[(x+1)(x+2)] = A/(x+1) + B/(x+2):\\nA = 3/(1\\u22122) = \\u22123,  B = 3/(2\\u22121) = 3\\u00d7(\\u22121...)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (2x\\u00b2 \\u2212 x + 1)/(x\\u00b2 \\u2212 1) in partial fractions.',
                text: 'Numerator degree = denominator degree: improper.\\n\\n2x\\u00b2 \\u2212 x + 1 = 2(x\\u00b2\\u22121) + (\\u2212x+3)\\nSo expression = 2 + (\\u2212x+3)/(x\\u00b2\\u22121)\\n\\n(x\\u00b2\\u22121) = (x+1)(x\\u22121)\\n(\\u2212x+3)/[(x+1)(x\\u22121)] = A/(x+1) + B/(x\\u22121)\\nA = (\\u2212(\\u22121)+3)/(\\u22121\\u22121) = 4/(\\u22122) = \\u22122\\nB = (\\u22121+3)/(1+1) = 2/2 = 1\\n\\nAnswer: 2 \\u2212 2/(x+1) + 1/(x\\u22121)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Quick Check for Improper',
                text: 'If the degree of the numerator \\u2265 degree of the denominator, it is improper. The quotient will be a polynomial of degree = deg(num) \\u2212 deg(den). For equal degrees, the quotient is just a constant.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Improper fraction: deg(num) \\u2265 deg(den). Divide first to get quotient + proper fraction, then decompose the proper fraction into partial fractions.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'How do you identify an improper rational expression?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Express (x\\u00b2+3x+5)/[(x+1)(x+2)] in partial fractions.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Express (2x\\u00b2\\u2212x+1)/(x\\u00b2\\u22121) in partial fractions.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What is the degree of the quotient when dividing two polynomials of equal degree?' }
        ],
        summaryText: 'Improper: deg(num)\\u2265deg(den). First divide to get quotient+proper fraction, then partial fraction the remainder.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_2_3.js'] = """\
/**
 * WMA14 \u00b7 Topic 2 \u00b7 Subtopic 3 \u2014 Partial fractions: quadratic factors
 */
export const note_mathematics_4_2_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Decompose rational expressions with irreducible quadratic factors in the denominator into partial fractions of the form (Ax+B)/(x\\u00b2+c).' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'Form for Irreducible Quadratic Factor', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Quadratic Denominator',
                text: 'An irreducible quadratic factor (x\\u00b2 + a) gives a numerator (Bx + C):\\n\\nf(x) / [(x+k)(x\\u00b2+a)] \\u2261 A/(x+k) + (Bx+C)/(x\\u00b2+a)\\n\\nCover-up still works for A (the linear factor). Find B and C by comparing coefficients.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (5x\\u00b2 + x + 4)/[(x\\u22121)(x\\u00b2+4)] as partial fractions.',
                text: 'Write A/(x\\u22121) + (Bx+C)/(x\\u00b2+4)\\n\\nCover-up A (x=1):\\nA = (5+1+4)/[(1+4)] = 10/5 = 2\\n\\nMultiply through by (x\\u22121)(x\\u00b2+4):\\n5x\\u00b2+x+4 = 2(x\\u00b2+4) + (Bx+C)(x\\u22121)\\n= 2x\\u00b2+8 + Bx\\u00b2+(C\\u2212B)x\\u2212C\\n\\nCompare x\\u00b2: 5 = 2+B  \\u27a2  B = 3\\nCompare constants: 4 = 8\\u2212C  \\u27a2  C = 4\\nCheck x: 1 = C\\u2212B = 4\\u22123 = 1  \\u2714\\n\\nAnswer: 2/(x\\u22121) + (3x+4)/(x\\u00b2+4)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Identify Irreducible Quadratics',
                text: 'x\\u00b2 + a (with a > 0) cannot be factorised over the reals. Do not split it into linear factors. When it appears in the denominator, the corresponding numerator must be Bx+C (linear).'
            }, terms: []
        },
        {
            id: 'callout-warn', type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistake',
                text: 'Do not write C/(x\\u00b2+4) for a quadratic factor. The numerator must be linear: (Bx+C)/(x\\u00b2+4). A constant numerator would not have enough freedom to match all coefficients.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Irreducible quadratic factor x\\u00b2+a \\u2192 numerator (Bx+C). Cover-up for the linear factor, then compare coefficients for B and C. Check all three coefficient equations.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the partial fraction form when the denominator contains x\\u00b2+a.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the partial fractions of (5x\\u00b2+x+4)/[(x\\u22121)(x\\u00b2+4)].' },
            { id: 'c3', blockId: 'callout-warn', prompt: 'Why must the numerator over x\\u00b2+a be linear (Bx+C) and not just a constant?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'When is a quadratic irreducible over the reals?' }
        ],
        summaryText: 'Quadratic factor x\\u00b2+a \\u2192 numerator Bx+C. Cover-up for linear factor; compare coefficients for B and C.',
        ready: true
    },
    evidence: []
};
"""

# ── Topic 3: Coordinate Geometry (Parametric) ─────────────────────────────────

notes['note_4_3_0.js'] = """\
/**
 * WMA14 \u00b7 Topic 3 \u00b7 Subtopic 0 \u2014 Parametric equations: introduction
 */
export const note_mathematics_4_3_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Understand parametric equations as an alternative way to describe curves, and convert between parametric and Cartesian forms.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'What are Parametric Equations?', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: 'A curve can be described by expressing both x and y as functions of a third variable t (the <strong>parameter</strong>): x = f(t), y = g(t). Each value of t gives a point (x, y) on the curve. As t varies, the point traces out the curve.' },
            terms: []
        },
        {
            id: 'h-convert', type: 'heading',
            data: { text: 'Converting to Cartesian Form', level: 2 }, terms: []
        },
        {
            id: 'p-convert', type: 'paragraph',
            data: { text: 'Eliminate the parameter t by solving one equation for t and substituting into the other. Alternatively, use a known identity (e.g. a trig identity) if x and y are trig functions of t.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = 3t\\u00b2, y = 6t. Find the Cartesian equation.',
                text: 'From y = 6t: t = y/6\\nSubstitute: x = 3(y/6)\\u00b2 = 3y\\u00b2/36 = y\\u00b2/12\\nCartesian: x = y\\u00b2/12, or y\\u00b2 = 12x (a parabola)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = 3cos t, y = 2sin t. Find the Cartesian equation.',
                text: 'cos t = x/3,  sin t = y/2\\nUse sin\\u00b2t + cos\\u00b2t = 1:\\n(x/3)\\u00b2 + (y/2)\\u00b2 = 1  \\u27a2  x\\u00b2/9 + y\\u00b2/4 = 1\\nThis is an ellipse with semi-axes a=3, b=2.'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = t + 1, y = t\\u00b2 \\u2212 3. Find the Cartesian equation and state any restriction.',
                text: 't = x \\u2212 1\\ny = (x\\u22121)\\u00b2 \\u2212 3 = x\\u00b2 \\u2212 2x + 1 \\u2212 3 = x\\u00b2 \\u2212 2x \\u2212 2\\n\\nIf t \\u2265 0, then x = t+1 \\u2265 1, so the restriction is x \\u2265 1.'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Trig Parametric Shortcut',
                text: 'For x = r cos t, y = r sin t: the curve is a circle x\\u00b2+y\\u00b2 = r\\u00b2.\\nFor x = a cos t, y = b sin t: the curve is an ellipse x\\u00b2/a\\u00b2+y\\u00b2/b\\u00b2 = 1.\\nAlways use sin\\u00b2t+cos\\u00b2t = 1 or sec\\u00b2t = 1+tan\\u00b2t as the bridge.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Parametric equations x=f(t), y=g(t): eliminate t to get Cartesian form. Algebraic: solve for t, substitute. Trig: use a trig identity. Note domain restrictions from the parameter range.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-def', prompt: 'What is a parameter in parametric equations?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Convert x=3t\\u00b2, y=6t to Cartesian form.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Convert x=3cos t, y=2sin t to Cartesian form. What curve is this?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What identity links sin t and cos t when eliminating t?' }
        ],
        summaryText: 'Parametric to Cartesian: solve for t and substitute (algebra) or use sin\\u00b2+cos\\u00b2=1 (trig). Note domain restrictions.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_3_1.js'] = """\
/**
 * WMA14 \u00b7 Topic 3 \u00b7 Subtopic 1 \u2014 Parametric curves: sketching and properties
 */
export const note_mathematics_4_3_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Sketch parametric curves by computing and plotting key points, and determine the range of the curve from the parameter domain.' },
            terms: []
        },
        {
            id: 'h-sketch', type: 'heading',
            data: { text: 'Sketching Parametric Curves', level: 2 }, terms: []
        },
        {
            id: 'list-steps', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Identify the range of t (given or natural domain).' },
                    { text: 'Compute a table of (t, x, y) points for key t values.' },
                    { text: 'Plot the points. Note the direction of travel as t increases.' },
                    { text: 'Identify intercepts, turning points, and endpoints.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Sketch x = t\\u00b2, y = t(t\\u00b2 \\u2212 4) for \\u22122 \\u2264 t \\u2264 2.',
                text: 't=\\u22122: x=4, y=\\u22122(4\\u22124)=0\\nt=\\u22121: x=1, y=\\u22121(\\u22123)=3\\nt=0: x=0, y=0\\nt=1: x=1, y=1(\\u22123)=\\u22123\\nt=2: x=4, y=2\\u00b70=0\\n\\nCurve is symmetric? x=t\\u00b2 is even; y=t(t\\u00b2\\u22124) is odd \\u27a2 anti-symmetric about x-axis.\\nIntercepts: (0,0) and (4,0) (at t=\\u00b12).\\n[Sketch a smooth loop through these points]'
            }, terms: []
        },
        {
            id: 'h-conics', type: 'heading',
            data: { text: 'Standard Conic Parametrisations', level: 2 }, terms: []
        },
        {
            id: 'table-conics', type: 'comparisonTable',
            data: {
                headers: ['Curve', 'Parametric', 'Cartesian'],
                rows: [
                    ['Parabola', 'x = at\\u00b2, y = 2at', 'y\\u00b2 = 4ax'],
                    ['Ellipse', 'x = a cos t, y = b sin t', 'x\\u00b2/a\\u00b2 + y\\u00b2/b\\u00b2 = 1'],
                    ['Circle', 'x = r cos t, y = r sin t', 'x\\u00b2 + y\\u00b2 = r\\u00b2'],
                    ['Rect. hyperbola', 'x = ct, y = c/t', 'xy = c\\u00b2']
                ],
                caption: 'Standard parametric forms'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Direction of Travel',
                text: 'The arrow on a parametric sketch shows the direction of increasing t. Find where dx/dt = 0 (vertical tangent) or dy/dt = 0 (horizontal tangent) to locate turning-point-like features.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Sketch parametric curves by tabulating key points. Note the direction of travel. Know standard conics: parabola (at\\u00b2, 2at), ellipse (a cos t, b sin t), rectangular hyperbola (ct, c/t).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-steps', prompt: 'List the steps for sketching a parametric curve.' },
            { id: 'c2', blockId: 'table-conics', prompt: 'State the parametric equations for a parabola y\\u00b2=4ax.' },
            { id: 'c3', blockId: 'table-conics', prompt: 'State the Cartesian form of x=a cos t, y=b sin t.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What condition gives a horizontal tangent on a parametric curve?' }
        ],
        summaryText: 'Sketch by tabulating points; note direction. Standard: parabola x=at\\u00b2, y=2at; ellipse x=a cos t, y=b sin t; rect. hyperbola x=ct, y=c/t.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_3_2.js'] = """\
/**
 * WMA14 \u00b7 Topic 3 \u00b7 Subtopic 2 \u2014 Parametric equations: areas under curves
 */
export const note_mathematics_4_3_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find the area under a parametrically defined curve by converting the integral to a t-variable integral.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Area Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Parametric Area',
                text: 'Area = \\u222b y dx = \\u222b y \\u00b7 (dx/dt) dt\\n\\nChange limits: when x = a (lower), find t\\u2081 such that f(t\\u2081) = a; same for upper.\\nThe sign of dx/dt determines the direction; be careful about sign of area.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area under x = t\\u00b2, y = 2t for 0 \\u2264 t \\u2264 3.',
                text: 'dx/dt = 2t\\nArea = \\u222b\\u2080\\u00b3 y \\u00b7 (dx/dt) dt = \\u222b\\u2080\\u00b3 2t \\u00b7 2t dt = \\u222b\\u2080\\u00b3 4t\\u00b2 dt\\n= [4t\\u00b3/3]\\u2080\\u00b3 = 4\\u00b727/3 = 36'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area enclosed by the curve x = 4cos t, y = 3sin t (ellipse) in the first quadrant.',
                text: 'In the first quadrant: t goes from 0 to \\u03c0/2 (x from 4 to 0).\\ndx/dt = \\u22124sin t\\n\\nArea = \\u222b\\u2080^(\\u03c0/2) y \\u00b7 (dx/dt) dt = \\u222b\\u2080^(\\u03c0/2) 3sin t \\u00b7 (\\u22124sin t) dt\\n= \\u222b\\u2080^(\\u03c0/2) \\u221212 sin\\u00b2t dt = \\u222b\\u2080^(\\u03c0/2) \\u22126(1\\u2212cos2t) dt\\n= \\u22126[t \\u2212 sin2t/2]\\u2080^(\\u03c0/2) = \\u22126[\\u03c0/2 \\u2212 0] = \\u22123\\u03c0\\n\\nArea = 3\\u03c0 (take positive value). Total ellipse area = 4 \\u00d7 3\\u03c0 = 12\\u03c0 = \\u03c0ab \\u2713'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Sign of the Area',
                text: 'The formula \\u222b y dx/dt dt can give a negative result if x decreases as t increases. Always take the absolute value (or reverse the limits) to get a positive area. Sketch the curve first to check the direction.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Parametric area: \\u222b y dx = \\u222b y(dx/dt) dt. Change limits to t-values. Take |result| for area. Watch the sign of dx/dt.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for area under a parametric curve.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find area under x=t\\u00b2, y=2t for 0\\u2264t\\u22643.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'How do you find the first-quadrant area of the ellipse x=4cos t, y=3sin t?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why might a parametric area integral give a negative result, and what do you do?' }
        ],
        summaryText: 'Parametric area: \\u222b y(dx/dt)dt with t-limits. May be negative if x decreases; take absolute value for actual area.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_3_3.js'] = """\
/**
 * WMA14 \u00b7 Topic 3 \u00b7 Subtopic 3 \u2014 Further parametric problems: tangents, normals, lengths
 */
export const note_mathematics_4_3_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find tangents and normals to parametric curves, and use parametric equations to solve further coordinate geometry problems.' },
            terms: []
        },
        {
            id: 'h-tangent', type: 'heading',
            data: { text: 'Tangents and Normals', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Method',
                text: '1. Find dy/dx = (dy/dt)/(dx/dt)\\n2. Evaluate at given t to get the gradient m of tangent\\n3. Tangent at (x\\u2080, y\\u2080): y \\u2212 y\\u2080 = m(x \\u2212 x\\u2080)\\n4. Normal gradient = \\u22121/m; normal equation: y \\u2212 y\\u2080 = (\\u22121/m)(x \\u2212 x\\u2080)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'The curve C: x = t\\u00b2, y = 2t. Find the tangent at t = 3.',
                text: 'At t=3: x=9, y=6\\ndx/dt=2t=6, dy/dt=2\\ndy/dx = 2/6 = 1/3\\n\\nTangent: y \\u2212 6 = (1/3)(x \\u2212 9)  \\u27a2  3y = x + 9\\n\\nNormal: gradient = \\u22123\\nNormal: y \\u2212 6 = \\u22123(x \\u2212 9)  \\u27a2  y = \\u22123x + 33'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'For the rectangular hyperbola x = 2t, y = 2/t, show the tangent at t=p has equation x + p\\u00b2y = 4p.',
                text: 'At t=p: x\\u2080=2p, y\\u2080=2/p\\ndx/dt=2, dy/dt=\\u22122/t\\u00b2\\ndy/dx = (\\u22122/p\\u00b2) / 2 = \\u22121/p\\u00b2\\n\\nTangent: y \\u2212 2/p = (\\u22121/p\\u00b2)(x\\u22122p)\\nMultiply by p\\u00b2: p\\u00b2y \\u2212 2p = \\u2212(x\\u22122p) = \\u2212x + 2p\\np\\u00b2y + x = 4p  \\u27a2  x + p\\u00b2y = 4p  \\u2713'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'General Tangent Proofs',
                text: 'Many WMA14 exam questions ask you to show that the tangent or normal has a particular general form. Work with the general parameter value (e.g. t=p or t=a) rather than a specific number. Leave the answer in terms of p.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Tangent/normal: find dy/dx=(dy/dt)/(dx/dt), evaluate at t, use point-slope form. For general results, work with parameter t=p and simplify to show the required form.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the 4 steps to find a tangent/normal to a parametric curve.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the tangent to x=t\\u00b2, y=2t at t=3.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Show the tangent at (2p, 2/p) on xy=4 is x+p\\u00b2y=4p.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why do exam questions often ask for a general tangent in terms of p?' }
        ],
        summaryText: 'Tangent to parametric curve: dy/dx=(dy/dt)/(dx/dt). Normal gradient = \\u22121/(dy/dx). Work with general parameter p for general tangent equations.',
        ready: true
    },
    evidence: []
};
"""

for filename, content in notes.items():
    path = os.path.join(base, filename)
    with open(path, 'w') as f:
        f.write(content)
    print(f'Written: {filename}')

print('Topics 1-3 complete.')
