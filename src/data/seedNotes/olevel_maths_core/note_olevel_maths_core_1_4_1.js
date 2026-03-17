export const note_olevel_maths_core_1_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/equivalent-and-simplified-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and generate equivalent fractions; simplify fractions to their lowest terms using the highest common factor (HCF).' }
    },
    {
      id: 'h-equivalent',
      type: 'heading',
      data: { text: 'Equivalent Fractions', level: 2 }
    },
    {
      id: 'p-equivalent',
      type: 'paragraph',
      data: { text: '<strong>Equivalent fractions</strong> represent the same value but use different numbers. You create them by multiplying or dividing both the numerator and denominator by the <em>same</em> non-zero number.' }
    },
    {
      id: 'callout-key-equiv',
      type: 'callout',
      data: { style: 'key', title: 'Creating Equivalent Fractions', text: 'Multiply numerator AND denominator by the same number:<br><br><span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span> = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">6</span></span> = <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">9</span></span> = <span class="nb-frac"><span class="nb-num">10</span><span class="nb-den">15</span></span><br><br>&nbsp;&nbsp;&nbsp;(×2) &nbsp;&nbsp; (×3) &nbsp;&nbsp; (×5)' }
    },
    {
      id: 'callout-worked-equiv',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Find Equivalent Fractions',
        text: 'Complete: <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span> = <span class="nb-frac"><span class="nb-num">?</span><span class="nb-den">20</span></span><br><br>4 × ? = 20 → multiply by 5<br>So numerator: 3 × 5 = 15<br><br>Answer: <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span> = <span class="nb-frac"><span class="nb-num">15</span><span class="nb-den">20</span></span>'
      }
    },
    {
      id: 'h-simplifying',
      type: 'heading',
      data: { text: 'Simplifying Fractions', level: 2 }
    },
    {
      id: 'p-simplifying',
      type: 'paragraph',
      data: { text: 'To <strong>simplify</strong> (or reduce) a fraction, divide both numerator and denominator by their <strong>Highest Common Factor (HCF)</strong>. A fraction in its <em>simplest form</em> (or <em>lowest terms</em>) has an HCF of 1 between numerator and denominator.' }
    },
    {
      id: 'callout-worked-simplify',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Simplify 24/36',
        text: 'Step 1: Find HCF of 24 and 36<br>Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24<br>Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36<br>HCF = 12<br><br>Step 2: Divide both by 12:<br>24 ÷ 12 = 2 &nbsp;|&nbsp; 36 ÷ 12 = 3<br><br>Answer: <strong>2/3</strong><br><br><em>Check: GCF of 2 and 3 is 1 ✓ (fully simplified)</em>'
      }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Using Equivalent Fractions to Compare', level: 2 }
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: { text: 'To compare fractions with different denominators, convert them to equivalent fractions with the same denominator (the <strong>Lowest Common Denominator, LCD</strong>) and then compare numerators.' }
    },
    {
      id: 'callout-worked-compare',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Compare 3/4 and 5/7',
        text: 'LCD of 4 and 7 = 28<br><br>3/4 = 21/28 &nbsp;(×7 numerator and denominator)<br>5/7 = 20/28 &nbsp;(×4 numerator and denominator)<br><br>21 > 20, so <strong>3/4 > 5/7</strong>'
      }
    },
    {
      id: 'callout-tip-simplify',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Step-by-Step Simplification', text: 'If the HCF is hard to spot, cancel in steps:<br>24/36 → divide by 2 → 12/18 → divide by 2 → 6/9 → divide by 3 → 2/3<br>(Same final answer, just takes more steps)' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Equivalent fractions: multiply/divide numerator AND denominator by the same number. Simplify: divide both by the HCF. A fraction is fully simplified when HCF of numerator and denominator is 1.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-equivalent', prompt: 'Write three equivalent fractions for 1/2.' },
      { id: 'cue-2', blockId: 'callout-worked-equiv', prompt: 'Complete: 5/8 = ?/40. Show your working.' },
      { id: 'cue-3', blockId: 'h-simplifying', prompt: 'What is the HCF and why is it used to simplify fractions?' },
      { id: 'cue-4', blockId: 'callout-worked-simplify', prompt: 'Simplify 18/30 to its lowest terms.' },
      { id: 'cue-5', blockId: 'h-compare', prompt: 'Which is larger: 2/3 or 3/5? Use equivalent fractions to decide.' }
    ],
    summaryText: 'Equivalent fractions: same value, different numerators/denominators. Simplify by dividing by HCF.',
    ready: true
  },
  evidence: []
};
