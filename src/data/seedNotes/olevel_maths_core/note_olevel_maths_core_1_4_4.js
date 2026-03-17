export const note_olevel_maths_core_1_4_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/multiplying-and-dividing-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Multiply and divide fractions, including mixed numbers; simplify before multiplying (cross-cancelling) where possible.' }
    },
    {
      id: 'h-multiply',
      type: 'heading',
      data: { text: 'Multiplying Fractions', level: 2 }
    },
    {
      id: 'p-multiply',
      type: 'paragraph',
      data: { text: 'To multiply fractions, multiply the numerators together and multiply the denominators together. Simplify the result if possible.' }
    },
    {
      id: 'callout-key-mult',
      type: 'callout',
      data: { style: 'key', title: 'Fraction Multiplication Rule', text: '<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> × <span class="nb-frac"><span class="nb-num">c</span><span class="nb-den">d</span></span> = <span class="nb-frac"><span class="nb-num">a × c</span><span class="nb-den">b × d</span></span><br><br>Example: <sup>2</sup>/<sub>3</sub> × <sup>3</sup>/<sub>5</sub> = <sup>6</sup>/<sub>15</sub> = <sup>2</sup>/<sub>5</sub>' }
    },
    {
      id: 'h-cross-cancel',
      type: 'heading',
      data: { text: 'Cross-Cancelling (Simplifying Early)', level: 2 }
    },
    {
      id: 'p-cross-cancel',
      type: 'paragraph',
      data: { text: '<strong>Cross-cancelling</strong> simplifies calculation by dividing a numerator and a denominator (from either fraction) by a common factor <em>before</em> multiplying. This keeps the numbers smaller.' }
    },
    {
      id: 'callout-worked-mult',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 4/9 × 3/8',
        text: 'Without cancelling: 4/9 × 3/8 = 12/72 = 1/6<br><br>With cross-cancelling:<br>4 and 8 share factor 4: 4÷4=1, 8÷4=2<br>9 and 3 share factor 3: 9÷3=3, 3÷3=1<br><br><sup>1</sup>/<sub>3</sub> × <sup>1</sup>/<sub>2</sub> = <strong>1/6</strong> &nbsp;(same answer, easier to calculate)'
      }
    },
    {
      id: 'h-divide',
      type: 'heading',
      data: { text: 'Dividing Fractions', level: 2 }
    },
    {
      id: 'p-divide',
      type: 'paragraph',
      data: { text: 'To divide by a fraction, multiply by its <strong>reciprocal</strong> (flip the second fraction). This is sometimes remembered as "KCF": <strong>K</strong>eep the first, <strong>C</strong>hange the sign to ×, <strong>F</strong>lip the second.' }
    },
    {
      id: 'callout-key-divide',
      type: 'callout',
      data: { style: 'key', title: 'Fraction Division Rule', text: '<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> ÷ <span class="nb-frac"><span class="nb-num">c</span><span class="nb-den">d</span></span> = <span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">b</span></span> × <span class="nb-frac"><span class="nb-num">d</span><span class="nb-den">c</span></span><br><br>Keep, Change, Flip (KCF)' }
    },
    {
      id: 'callout-worked-div',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: 3/4 ÷ 2/5',
        text: 'Step 1: Keep 3/4, Change ÷ to ×, Flip 2/5 → 5/2<br>Step 2: 3/4 × 5/2 = 15/8<br>Step 3: Convert: 15/8 = 1 7/8<br><br>Answer: <strong>1 and 7/8</strong>'
      }
    },
    {
      id: 'h-mixed',
      type: 'heading',
      data: { text: 'Multiplying and Dividing Mixed Numbers', level: 2 }
    },
    {
      id: 'p-mixed',
      type: 'paragraph',
      data: { text: 'Always convert mixed numbers to improper fractions first, then multiply or divide as usual.' }
    },
    {
      id: 'callout-tip-kcf',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Division of Fractions', text: 'Never divide fractions directly — always flip the second and multiply. A common mistake is flipping the first fraction instead of the second.<br>3/4 ÷ 2 → 3/4 × 1/2 = 3/8 (not 4/3 × 2)' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Multiply fractions: top × top, bottom × bottom. Simplify first using cross-cancelling. Divide fractions: keep first, flip second, multiply (KCF). Always convert mixed numbers to improper fractions before operating.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-multiply', prompt: 'Calculate 3/5 × 2/7. Simplify your answer.' },
      { id: 'cue-2', blockId: 'h-cross-cancel', prompt: 'What is cross-cancelling? Use it to calculate 6/7 × 7/9.' },
      { id: 'cue-3', blockId: 'h-divide', prompt: 'What does KCF stand for? How do you divide 5/6 ÷ 2/3?' },
      { id: 'cue-4', blockId: 'callout-worked-div', prompt: 'Calculate 7/8 ÷ 3/4 and write as a mixed number.' },
      { id: 'cue-5', blockId: 'h-mixed', prompt: 'Calculate 2 1/2 × 1 3/5. Show all working.' }
    ],
    summaryText: 'Multiply: top × top ÷ bottom × bottom. Divide: KCF (Keep, Change to ×, Flip second fraction).',
    ready: true
  },
  evidence: []
};
