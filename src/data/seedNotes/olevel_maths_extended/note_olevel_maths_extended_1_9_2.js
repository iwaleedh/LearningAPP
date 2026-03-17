export const note_olevel_maths_extended_1_9_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/working-with-proportion.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand direct and inverse proportion, set up proportionality equations, and solve problems involving proportional relationships.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Working with Proportion', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'Two quantities are <b>proportional</b> if they are connected by a multiplicative relationship. IGCSE Extended requires you to work with both direct and inverse proportion, including squared and cubed relationships.' } },

    { id: 'h-direct', type: 'heading', data: { text: 'Direct Proportion', level: 2 } },
    { id: 'p-direct', type: 'paragraph', data: { text: 'If y is <b>directly proportional</b> to x, written y ∝ x, then y = kx for some constant k. When x doubles, y doubles. The graph of y against x is a straight line through the origin.' } },

    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Direct Proportion Variations', text: 'y ∝ x &rarr; y = kx\ny ∝ x² &rarr; y = kx²\ny ∝ x³ &rarr; y = kx³\ny ∝ √x &rarr; y = k√x\n\nIn each case, find k by substituting a known pair of values.' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: 'y is directly proportional to x². When x = 3, y = 36. Find y when x = 5.\n\n<b>Step 1:</b> Write the equation: y = kx²\n<b>Step 2:</b> Find k: 36 = k × 3² = 9k &rarr; k = 4\n<b>Step 3:</b> Use the equation: y = 4 × 5² = 4 × 25 = 100\n\n<b>Answer:</b> y = 100' } },

    { id: 'h-inverse', type: 'heading', data: { text: 'Inverse Proportion', level: 2 } },
    { id: 'p-inverse', type: 'paragraph', data: { text: 'If y is <b>inversely proportional</b> to x, written y ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x</span></span>, then y = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">x</span></span>. When x doubles, y halves. The graph is a reciprocal curve.' } },

    { id: 'callout-key-2', type: 'callout', data: { style: 'key', title: 'Inverse Proportion Variations', text: 'y ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x</span></span> &rarr; y = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">x</span></span>\ny ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">x²</span></span> &rarr; y = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">x²</span></span>\ny ∝ <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">√x</span></span> &rarr; y = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">√x</span></span>' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'y is inversely proportional to x. When x = 4, y = 6. Find y when x = 8.\n\n<b>Step 1:</b> y = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">x</span></span>\n<b>Step 2:</b> 6 = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">4</span></span> &rarr; k = 24\n<b>Step 3:</b> y = <span class="nb-frac"><span class="nb-num">24</span><span class="nb-den">8</span></span> = 3\n\n<b>Answer:</b> y = 3' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: 'The force F between two magnets is inversely proportional to d², where d is the distance apart. When d = 2 cm, F = 50 N. Find F when d = 5 cm.\n\nF = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">d²</span></span>\n\n50 = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">4</span></span> &rarr; k = 200\n\nF = <span class="nb-frac"><span class="nb-num">200</span><span class="nb-den">25</span></span> = 8 N\n\n<b>Answer:</b> F = 8 N' } },

    { id: 'h-recognise', type: 'heading', data: { text: 'Recognising Proportion from a Table', level: 2 } },
    { id: 'p-recognise', type: 'paragraph', data: { text: 'To identify the type of proportion from a table of values, check: if y/x is constant &rarr; direct proportion. If xy is constant &rarr; inverse proportion. If y/x² is constant &rarr; y ∝ x².' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The three-step method always works: (1) Write the proportionality as an equation with k, (2) Substitute known values to find k, (3) Use your equation with the new values. Show all three steps for full marks.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'Don\'t confuse the proportionality symbol ∝ with the equals sign =. "y ∝ x²" does NOT mean y = x². It means y = kx² where k is a constant you need to find.' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Direct proportion: y ∝ xⁿ &rarr; y = kxⁿ. Inverse proportion: y ∝ 1/xⁿ &rarr; y = k/xⁿ. Always use three steps: write equation, find k, use equation. Identify proportion type from tables by checking for constant ratios or products.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-direct', prompt: 'What does y ∝ x mean, and what is its equation?' },
      { id: 'cue-2', blockId: 'p-inverse', prompt: 'What happens to y when x doubles in inverse proportion?' },
      { id: 'cue-3', blockId: 'callout-key-1', prompt: 'How do you find the constant k in a proportion equation?' },
      { id: 'cue-4', blockId: 'p-recognise', prompt: 'How do you recognise direct vs inverse proportion from a table?' },
      { id: 'cue-5', blockId: 'callout-worked-3', prompt: 'If F ∝ 1/d² and F=50 when d=2, what is F when d=5?' }
    ],
    summaryText: 'Direct: y = kxⁿ. Inverse: y = k/xⁿ. Three steps: write equation, find k from known values, substitute new values.',
    ready: true
  },
  evidence: []
};
