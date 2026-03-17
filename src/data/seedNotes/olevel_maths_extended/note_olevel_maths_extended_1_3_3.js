export const note_olevel_maths_extended_1_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/multiplying-and-dividing-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Multiply and divide fractions and mixed numbers, simplifying answers where possible.' }
    },
    {
      id: 'h-multiply',
      type: 'heading',
      data: { text: 'Multiplying Fractions', level: 2 }
    },
    {
      id: 'p-multiply',
      type: 'paragraph',
      data: { text: 'To multiply fractions: <strong>multiply the numerators together</strong> and <strong>multiply the denominators together</strong>. Simplify the result.' }
    },
    {
      id: 'eq-mult',
      type: 'equation',
      data: { html: '<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> × <span class="nb-frac"><span class="nb-num">c</span><span class="nb-den">d</span></span> = <span class="nb-frac"><span class="nb-num">a × c</span><span class="nb-den">b × d</span></span>', caption: 'Multiplying fractions rule' }
    },
    {
      id: 'callout-key-cancel',
      type: 'callout',
      data: { style: 'key', title: 'Cross-Cancelling', text: 'Before multiplying, you can <strong>cross-cancel</strong>: divide any numerator and any denominator by a common factor. This keeps the numbers small and avoids simplifying at the end.' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Calculate <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span> × <span class="nb-frac"><span class="nb-num">8</span><span class="nb-den">9</span></span>.\n\n<strong>Solution:</strong>\nCross-cancel: 3 and 9 share factor 3 (giving 1 and 3). 4 and 8 share factor 4 (giving 1 and 2).\n<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">1</span></span> × <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span>' }
    },
    {
      id: 'h-divide',
      type: 'heading',
      data: { text: 'Dividing Fractions', level: 2 }
    },
    {
      id: 'p-divide',
      type: 'paragraph',
      data: { text: 'To divide by a fraction, <strong>multiply by its reciprocal</strong> (flip the second fraction). "Keep, Change, Flip" — keep the first fraction, change ÷ to ×, flip the second fraction.' }
    },
    {
      id: 'eq-div',
      type: 'equation',
      data: { html: '<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> ÷ <span class="nb-frac"><span class="nb-num">c</span><span class="nb-den">d</span></span> = <span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> × <span class="nb-frac"><span class="nb-num">d</span><span class="nb-den">c</span></span> = <span class="nb-frac"><span class="nb-num">a × d</span><span class="nb-den">b × c</span></span>', caption: 'Dividing fractions rule' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Calculate <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">6</span></span> ÷ <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span>.\n\n<strong>Solution:</strong>\nKeep, Change, Flip:\n<span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">6</span></span> × <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span>\nCross-cancel: 6 and 3 share factor 3 &rarr; gives 2 and 1.\n<span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">2</span></span> × <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">4</span></span> = 1<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">4</span></span>' }
    },
    {
      id: 'h-mixed',
      type: 'heading',
      data: { text: 'With Mixed Numbers', level: 2 }
    },
    {
      id: 'p-mixed',
      type: 'paragraph',
      data: { text: 'Always <strong>convert mixed numbers to improper fractions</strong> before multiplying or dividing.' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'Calculate 2<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span> × 1<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>.\n\n<strong>Solution:</strong>\nConvert: <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">3</span></span> × <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">2</span></span>\nCross-cancel: 3 and 3 &rarr; 1 and 1.\n<span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">1</span></span> × <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> = <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">2</span></span> = 3<span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'Remember: you do NOT need a common denominator for multiplication/division — only for addition/subtraction. "Keep, Change, Flip" is the key phrase for division.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Multiply fractions: multiply numerators and denominators (cross-cancel first). Divide fractions: Keep, Change, Flip — multiply by the reciprocal. Always convert mixed numbers to improper fractions before calculating.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-multiply', prompt: 'How do you multiply two fractions?' },
      { id: 'cue-2', blockId: 'p-divide', prompt: 'How do you divide one fraction by another?' },
      { id: 'cue-3', blockId: 'callout-key-cancel', prompt: 'What is cross-cancelling and why is it useful?' },
      { id: 'cue-4', blockId: 'p-mixed', prompt: 'What must you do with mixed numbers before multiplying or dividing?' },
      { id: 'cue-5', blockId: 'callout-tip-1', prompt: 'Do you need a common denominator to multiply fractions?' }
    ],
    summaryText: 'Multiply numerators and denominators; divide by flipping and multiplying; cross-cancel to simplify early.',
    ready: true
  },
  evidence: []
};
