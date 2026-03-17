export const note_olevel_maths_extended_1_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/order-of-operations-bidmasbodmas.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the correct order of operations (BIDMAS/BODMAS) to evaluate numerical expressions.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Why Order Matters', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Without a standard order, the expression 2 + 3 × 4 could equal 20 (doing addition first) or 14 (doing multiplication first). The agreed convention, known as <strong>BIDMAS</strong> (or BODMAS), ensures everyone gets the same answer.' }
    },
    {
      id: 'callout-key-bidmas',
      type: 'callout',
      data: { style: 'key', title: 'BIDMAS / BODMAS', text: '<strong>B</strong> — Brackets (do these first)\n<strong>I/O</strong> — Indices / Orders (powers and roots)\n<strong>D</strong> — Division\n<strong>M</strong> — Multiplication\n<strong>A</strong> — Addition\n<strong>S</strong> — Subtraction\n\nNote: Division and Multiplication have <em>equal priority</em> (work left to right). Similarly, Addition and Subtraction have equal priority (work left to right).' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 1', text: 'Evaluate 5 + 2 × 3² − 4.\n\n<strong>Solution:</strong>\nStep 1 — Indices: 3² = 9\nExpression becomes: 5 + 2 × 9 − 4\nStep 2 — Multiplication: 2 × 9 = 18\nExpression becomes: 5 + 18 − 4\nStep 3 — Addition/Subtraction (left to right): 5 + 18 = 23, then 23 − 4 = <strong>19</strong>' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 2', text: 'Evaluate 48 ÷ (2 + 6) × 3.\n\n<strong>Solution:</strong>\nStep 1 — Brackets: 2 + 6 = 8\nExpression becomes: 48 ÷ 8 × 3\nStep 2 — Division and Multiplication (left to right): 48 ÷ 8 = 6, then 6 × 3 = <strong>18</strong>' }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: { style: 'worked', title: 'Worked Example 3', text: 'Evaluate <span class="nb-frac"><span class="nb-num">8 + 4²</span><span class="nb-den">2 × 3</span></span>.\n\n<strong>Solution:</strong>\nTreat the fraction bar like a bracket — evaluate the numerator and denominator separately.\nNumerator: 8 + 4² = 8 + 16 = 24\nDenominator: 2 × 3 = 6\nResult: <span class="nb-frac"><span class="nb-num">24</span><span class="nb-den">6</span></span> = <strong>4</strong>' }
    },
    {
      id: 'callout-warning-1',
      type: 'callout',
      data: { style: 'warning', title: 'Common Mistake', text: 'Division and multiplication are NOT done "D before M". They have <em>equal priority</em> — work <strong>left to right</strong>. Same for addition and subtraction. 12 − 4 + 3 = 8 + 3 = 11, NOT 12 − 7 = 5.' }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'A fraction bar acts as a bracket. Always evaluate the numerator and denominator separately before dividing. On a calculator, use bracket keys to enter fractions correctly.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'BIDMAS: Brackets &rarr; Indices &rarr; Division/Multiplication (left to right) &rarr; Addition/Subtraction (left to right). Division and multiplication have equal priority, as do addition and subtraction. A fraction bar acts as a bracket.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key-bidmas', prompt: 'What does BIDMAS stand for and what is the order?' },
      { id: 'cue-2', blockId: 'callout-warning-1', prompt: 'Do multiplication and division have the same priority? How do you decide which to do first?' },
      { id: 'cue-3', blockId: 'callout-worked-3', prompt: 'How do you apply BIDMAS to a fraction?' },
      { id: 'cue-4', blockId: 'p-intro', prompt: 'Why is a standard order of operations necessary?' },
      { id: 'cue-5', blockId: 'callout-worked-1', prompt: 'Evaluate 5 + 2 × 3² − 4 step by step.' }
    ],
    summaryText: 'BIDMAS defines the order of operations: Brackets, Indices, Division/Multiplication, Addition/Subtraction — with equal-priority operations evaluated left to right.',
    ready: true
  },
  evidence: []
};
