export const note_olevel_maths_extended_1_8_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/laws-of-indices.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand and apply the laws of indices to simplify expressions involving integer, fractional, and negative exponents.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Laws of Indices', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'An <b>index</b> (plural: indices) tells you how many times a base number is multiplied by itself. For example, 2³ = 2 × 2 × 2 = 8. The laws of indices allow us to simplify expressions involving powers without expanding them fully.' } },

    { id: 'h-laws', type: 'heading', data: { text: 'The Seven Laws', level: 2 } },
    { id: 'table-laws', type: 'comparisonTable', data: {
      caption: 'Laws of Indices',
      headers: ['Law', 'Rule', 'Example'],
      rows: [
        ['Multiplication', 'a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>', '3² × 3⁴ = 3⁶ = 729'],
        ['Division', 'a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>', '5⁷ ÷ 5³ = 5⁴ = 625'],
        ['Power of a power', '(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>', '(2³)⁴ = 2¹² = 4096'],
        ['Zero index', 'a⁰ = 1', '7⁰ = 1'],
        ['Negative index', 'a<sup>−n</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">a<sup>n</sup></span></span>', '2<sup>−3</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">8</span></span>'],
        ['Fractional index (root)', 'a<sup><span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">n</span></span></sup> = ⁿ√a', '8<sup><span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span></sup> = ³√8 = 2'],
        ['Fractional index (general)', 'a<sup><span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">n</span></span></sup> = (ⁿ√a)<sup>m</sup>', '27<sup><span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span></sup> = (³√27)² = 9']
      ]
    }},

    { id: 'callout-key-zero', type: 'callout', data: { style: 'key', title: 'Why a⁰ = 1', text: 'Consider a³ ÷ a³ = a<sup>3−3</sup> = a⁰. But a³ ÷ a³ = 1 (any non-zero number divided by itself is 1). Therefore a⁰ = 1 for any a ≠ 0.' } },

    { id: 'h-simplify', type: 'heading', data: { text: 'Simplifying Expressions', level: 2 } },
    { id: 'p-simplify', type: 'paragraph', data: { text: 'When simplifying, deal with <b>numbers</b> and <b>letters</b> separately. Apply the index laws to each variable independently.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'Simplify 4x³y² × 3x⁵y\n\n<b>Step 1:</b> Multiply the coefficients: 4 × 3 = 12\n<b>Step 2:</b> Add indices for x: x<sup>3+5</sup> = x⁸\n<b>Step 3:</b> Add indices for y: y<sup>2+1</sup> = y³\n\n<b>Answer:</b> 12x⁸y³' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'Simplify <span class="nb-frac"><span class="nb-num">12a⁵b³</span><span class="nb-den">4a²b⁷</span></span>\n\n<b>Step 1:</b> Divide coefficients: 12 ÷ 4 = 3\n<b>Step 2:</b> Subtract indices for a: a<sup>5−2</sup> = a³\n<b>Step 3:</b> Subtract indices for b: b<sup>3−7</sup> = b<sup>−4</sup> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">b⁴</span></span>\n\n<b>Answer:</b> <span class="nb-frac"><span class="nb-num">3a³</span><span class="nb-den">b⁴</span></span>' } },

    { id: 'h-frac', type: 'heading', data: { text: 'Fractional and Negative Indices', level: 2 } },
    { id: 'p-frac', type: 'paragraph', data: { text: 'Fractional indices represent roots. The denominator of the fraction is the root, and the numerator is the power. Always take the root first to keep numbers manageable.' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'Evaluate 16<sup><span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span></sup>\n\n<b>Step 1:</b> Take the 4th root first: ⁴√16 = 2\n<b>Step 2:</b> Raise to the power 3: 2³ = 8\n\n<b>Answer:</b> 8' } },

    { id: 'callout-worked-4', type: 'callout', data: { style: 'worked', title: 'Worked Example 4', text: 'Evaluate (<span class="nb-frac"><span class="nb-num">8</span><span class="nb-den">27</span></span>)<sup>−<span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span></sup>\n\n<b>Step 1:</b> Flip the fraction (negative index): (<span class="nb-frac"><span class="nb-num">27</span><span class="nb-den">8</span></span>)<sup><span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span></sup>\n<b>Step 2:</b> Cube root of numerator and denominator: <span class="nb-frac"><span class="nb-num">³√27</span><span class="nb-den">³√8</span></span> = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span>\n<b>Step 3:</b> Square: (<span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span>)² = <span class="nb-frac"><span class="nb-num">9</span><span class="nb-den">4</span></span>\n\n<b>Answer:</b> <span class="nb-frac"><span class="nb-num">9</span><span class="nb-den">4</span></span>' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'When the question says "evaluate", give a numerical answer. When it says "simplify", leave your answer in index form. Always root before powering with fractional indices to keep numbers small.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'Students often confuse 2³ × 2⁴ with (2 × 2)<sup>3+4</sup>. The multiplication law only works when the <b>bases are the same</b>. 2³ × 3⁴ cannot be simplified using index laws.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'The seven laws of indices let you simplify expressions with the same base. Fractional indices represent roots (denominator = root, numerator = power). Negative indices mean reciprocals. Always root before powering, and only combine terms with the same base.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-laws', prompt: 'What is the rule when multiplying powers with the same base?' },
      { id: 'cue-2', blockId: 'table-laws', prompt: 'What does a⁰ equal, and why?' },
      { id: 'cue-3', blockId: 'table-laws', prompt: 'How do you interpret a fractional index like a^(m/n)?' },
      { id: 'cue-4', blockId: 'callout-key-zero', prompt: 'What does a negative index mean?' },
      { id: 'cue-5', blockId: 'callout-worked-4', prompt: 'How do you evaluate a fraction raised to a negative fractional index?' }
    ],
    summaryText: 'Index laws: multiply &rarr; add indices, divide &rarr; subtract, power of power &rarr; multiply, zero &rarr; 1, negative &rarr; reciprocal, fractional &rarr; root then power.',
    ready: true
  },
  evidence: []
};
