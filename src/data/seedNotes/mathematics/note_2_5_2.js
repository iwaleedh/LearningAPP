/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 2
 * "Laws of logarithms"
 */

export const note_mathematics_2_5_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply the laws of logarithms to simplify expressions and solve equations.' },
            terms: []
        },
        {
            id: 'h-laws',
            type: 'heading',
            data: { text: 'The Laws of Logarithms', level: 2 },
            terms: []
        },
        {
            id: 'p-laws',
            type: 'paragraph',
            data: { text: 'These laws hold for <strong>any base a &gt; 0, a ≠ 1</strong>, and for all valid arguments (M, N &gt; 0). They are usually stated for log base a or for ln (natural log).' },
            terms: []
        },
        {
            id: 'eq-mul',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub>(MN) = log<sub>a</sub>M + log<sub>a</sub>N',
                caption: 'Multiplication rule: log of a product = sum of logs'
            },
            terms: []
        },
        {
            id: 'eq-div',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub><span class="nb-frac"><span class="nb-num">M</span><span class="nb-den">N</span></span> = log<sub>a</sub>M − log<sub>a</sub>N',
                caption: 'Division rule: log of a quotient = difference of logs'
            },
            terms: []
        },
        {
            id: 'eq-pow',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub>(Mᵏ) = k · log<sub>a</sub>M',
                caption: 'Power rule: power comes down as a multiplier'
            },
            terms: []
        },
        {
            id: 'eq-recip',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub><span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">M</span></span> = −log<sub>a</sub>M',
                caption: 'Reciprocal rule (special case of power rule with k = −1)'
            },
            terms: []
        },
        {
            id: 'eq-special',
            type: 'equation',
            data: {
                html: 'log<sub>a</sub>a = 1       log<sub>a</sub>1 = 0',
                caption: 'Special values: log of the base = 1; log of 1 = 0'
            },
            terms: []
        },
        {
            id: 'callout-change',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Change of Base Formula',
                text: 'log_a(b) = ln(b) / ln(a) = log(b) / log(a)\n\nUsed to evaluate log base a on a calculator (which only has log₁₀ and ln).'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Simplify Using Log Laws', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Write 2ln(3) + ln(4) − ln(6) as a single logarithm.',
                text: '2ln(3) = ln(3²) = ln(9)\n\n2ln(3) + ln(4) − ln(6) = ln(9) + ln(4) − ln(6)\n                       = ln(9×4) − ln(6)\n                       = ln(36) − ln(6)\n                       = ln(36/6)\n                       = ln(6)'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Solve Using Log Laws', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve: log₂(x+3) + log₂(x−1) = 5.',
                text: 'log₂((x+3)(x−1)) = 5\n(x+3)(x−1) = 2⁵ = 32\nx² + 2x − 3 = 32\nx² + 2x − 35 = 0\n(x+7)(x−5) = 0\nx = −7 or x = 5\n\nCheck: log₂ requires argument > 0:\n• x = −7: x+3 = −4 < 0 ✗ (reject)\n• x = 5: x+3=8>0, x−1=4>0 ✓\n\nTherefore x = 5.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Expansion Using Log Laws', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Express ln(x²√(x+1)) in terms of ln(x) and ln(x+1).',
                text: 'ln(x²√(x+1)) = ln(x²) + ln((x+1)^{1/2})\n             = 2ln(x) + (1/2)ln(x+1)'
            },
            terms: []
        },
        {
            id: 'callout-warn',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '✗ ln(A + B) ≠ ln(A) + ln(B)   — the SUM rule only works for a PRODUCT inside the log\n✗ ln(A − B) ≠ ln(A) − ln(B)   — the DIFFERENCE rule only works for a QUOTIENT inside the log\n✗ ln(A)·ln(B) ≠ ln(AB)         — the product of logs is NOT a useful simplification\n\n✓ Always check that arguments are positive after solving.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Log laws: ln(MN)=ln M+ln N; ln(M/N)=ln M−ln N; ln(Mᵏ)=k·ln M. Special: ln 1=0, ln e=1. Change of base: log_a(b)=ln b/ln a. Common mistake: ln(A+B) ≠ ln A + ln B. Always check domain after solving log equations (arguments must be positive).' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When sketching exponential graphs like y = e^x, always clearly label the y-intercept (0, 1) and state the equation of the horizontal asymptote (y = 0). Examiners actively look for these two features for full marks."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-mul', prompt: 'State the three main laws of logarithms (multiplication, division, power).' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write 2ln 3 + ln 4 − ln 6 as a single logarithm.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Solve log₂(x+3) + log₂(x−1) = 5.' },
            { id: 'c4', blockId: 'callout-warn', prompt: 'What is the most common mistake students make with logarithm laws?' }
        ],
        summaryText: 'Log laws: log(MN)=log M+log N; log(M/N)=log M−log N; log(Mᵏ)=k log M. Solve log equations by combining into one log, then applying the inverse (e^ or 10^). Always check domain.',
        ready: true
    },
    evidence: []
};
