export const note_olevel_maths_extended_1_6_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/rounding-and-estimation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Round numbers to a given number of decimal places or significant figures. Estimate calculations by rounding. Calculate upper and lower bounds and apply them to problems.' }
    },
    {
      id: 'h-dp',
      type: 'heading',
      data: { text: 'Rounding to Decimal Places (d.p.)', level: 2 }
    },
    {
      id: 'p-dp',
      type: 'paragraph',
      data: { text: 'Count the required number of digits <strong>after</strong> the decimal point. Look at the <strong>next</strong> digit: if it is 5 or more, round up; if it is less than 5, round down.' }
    },
    {
      id: 'callout-worked-dp',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Decimal Places', text: 'Round 3.4572 to:\n(a) 1 d.p. &rarr; look at 2nd d.p. (5) &rarr; round up &rarr; <strong>3.5</strong>\n(b) 2 d.p. &rarr; look at 3rd d.p. (7) &rarr; round up &rarr; <strong>3.46</strong>\n(c) 3 d.p. &rarr; look at 4th d.p. (2) &rarr; round down &rarr; <strong>3.457</strong>' }
    },
    {
      id: 'h-sf',
      type: 'heading',
      data: { text: 'Rounding to Significant Figures (s.f.)', level: 2 }
    },
    {
      id: 'p-sf-rule',
      type: 'paragraph',
      data: { text: 'Start counting from the <strong>first non-zero digit</strong>. After that, every digit counts (including zeros).' }
    },
    {
      id: 'callout-key-sf',
      type: 'callout',
      data: { style: 'key', title: 'Significant Figures Rules', text: '<strong>Rule 1:</strong> Start at the first non-zero digit.\n<strong>Rule 2:</strong> Zeros between non-zero digits ARE significant (e.g. 3007 has 4 s.f.).\n<strong>Rule 3:</strong> Trailing zeros after a decimal ARE significant (e.g. 2.50 has 3 s.f.).\n<strong>Rule 4:</strong> Leading zeros are NOT significant (e.g. 0.0045 has 2 s.f.).' }
    },
    {
      id: 'callout-worked-sf',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Significant Figures', text: 'Round to 3 s.f.:\n(a) 45 678 &rarr; <strong>45 700</strong>\n(b) 0.003 461 &rarr; <strong>0.003 46</strong>\n(c) 20.049 &rarr; <strong>20.0</strong>' }
    },
    {
      id: 'h-estimation',
      type: 'heading',
      data: { text: 'Estimation', level: 2 }
    },
    {
      id: 'p-estimation',
      type: 'paragraph',
      data: { text: 'To <strong>estimate</strong> a calculation, round each number to <strong>1 significant figure</strong> first, then compute. This gives an approximate answer that should be close to the exact value.' }
    },
    {
      id: 'callout-worked-est',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Estimation', text: 'Estimate: <span class="nb-frac"><span class="nb-num">48.7 × 0.0523</span><span class="nb-den">0.198</span></span>\n\nRound each to 1 s.f.:\n≈ <span class="nb-frac"><span class="nb-num">50 × 0.05</span><span class="nb-den">0.2</span></span> = <span class="nb-frac"><span class="nb-num">2.5</span><span class="nb-den">0.2</span></span> = <strong>12.5</strong>\n\n(Exact answer ≈ 12.86… so the estimate is reasonable.)' }
    },
    {
      id: 'h-truncation',
      type: 'heading',
      data: { text: 'Truncation', level: 2 }
    },
    {
      id: 'p-truncation',
      type: 'paragraph',
      data: { text: '<strong>Truncation</strong> means cutting off digits without rounding. For example, 3.847 truncated to 1 d.p. is 3.8 (not 3.9). The remaining digits are simply removed.' }
    },
    {
      id: 'h-bounds',
      type: 'heading',
      data: { text: 'Upper and Lower Bounds', level: 2 }
    },
    {
      id: 'p-bounds',
      type: 'paragraph',
      data: { text: 'When a measurement is rounded, the true value lies within a range. The <strong>lower bound</strong> (LB) is the smallest value that rounds up. The <strong>upper bound</strong> (UB) is the smallest value that would round to the next value.' }
    },
    {
      id: 'callout-key-bounds',
      type: 'callout',
      data: { style: 'key', title: 'Finding Bounds', text: 'Given a value rounded to a certain degree of accuracy:\n<strong>Lower bound</strong> = rounded value − ½ unit of accuracy\n<strong>Upper bound</strong> = rounded value + ½ unit of accuracy\n\nExample: A length is 4.7 cm (to 1 d.p.)\nLB = 4.7 − 0.05 = <strong>4.65 cm</strong>\nUB = 4.7 + 0.05 = <strong>4.75 cm</strong>\nSo 4.65 ≤ length < 4.75' }
    },
    {
      id: 'callout-worked-bounds',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example — Bounds in Calculations', text: 'A rectangle has length 12 cm and width 5 cm, both measured to the nearest cm. Find the upper and lower bounds of the area.\n\nLength: LB = 11.5, UB = 12.5\nWidth: LB = 4.5, UB = 5.5\n\n<strong>Maximum area</strong> = 12.5 × 5.5 = <strong>68.75 cm²</strong>\n<strong>Minimum area</strong> = 11.5 × 4.5 = <strong>51.75 cm²</strong>' }
    },
    {
      id: 'callout-key-ops',
      type: 'callout',
      data: { style: 'key', title: 'Bounds for ÷ and −', text: 'For <strong>maximum of A ÷ B</strong>: use UB of A ÷ LB of B\nFor <strong>minimum of A ÷ B</strong>: use LB of A ÷ UB of B\nFor <strong>maximum of A − B</strong>: use UB of A − LB of B\nFor <strong>minimum of A − B</strong>: use LB of A − UB of B' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'For division bounds, you divide by the <strong>opposite</strong> bound. To get the maximum of a fraction, divide the largest numerator by the smallest denominator — not both upper bounds.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Round to d.p. by counting digits after the decimal point; round to s.f. by starting at the first non-zero digit. Estimate by rounding to 1 s.f. Bounds are found by adding/subtracting half the unit of accuracy. Use opposite bounds for division and subtraction.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-sf', prompt: 'State the four rules for counting significant figures.' },
      { id: 'cue-2', blockId: 'p-estimation', prompt: 'How do you estimate a calculation?' },
      { id: 'cue-3', blockId: 'callout-key-bounds', prompt: 'How do you find the upper and lower bounds of a rounded measurement?' },
      { id: 'cue-4', blockId: 'callout-key-ops', prompt: 'How do bounds work for division and subtraction?' },
      { id: 'cue-5', blockId: 'p-truncation', prompt: 'What is the difference between rounding and truncation?' }
    ],
    summaryText: 'Rounding uses d.p. or s.f.; estimation uses 1 s.f.; bounds = rounded value ± half the accuracy unit; division/subtraction use opposite bounds.',
    ready: true
  },
  evidence: []
};
