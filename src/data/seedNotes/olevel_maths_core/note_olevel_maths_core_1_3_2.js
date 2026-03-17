export const note_olevel_maths_core_1_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/order-of-operations-bidmasbodmas.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the correct order of operations (BIDMAS/BODMAS) to evaluate mathematical expressions with multiple operations.' }
    },
    {
      id: 'h-bidmas',
      type: 'heading',
      data: { text: 'BIDMAS / BODMAS', level: 2 }
    },
    {
      id: 'p-bidmas',
      type: 'paragraph',
      data: { text: 'When an expression contains more than one operation, you must perform them in the correct order. <strong>BIDMAS</strong> (or <strong>BODMAS</strong>) is the acronym that tells you: Brackets first, then Indices (powers), then Division and Multiplication (left to right), then Addition and Subtraction (left to right).' }
    },
    {
      id: 'callout-key-bidmas',
      type: 'callout',
      data: { style: 'key', title: 'BIDMAS Order', text: '<strong>B</strong>rackets &nbsp; ( ) or [ ]<br><strong>I</strong>ndices &nbsp; (powers and roots)<br><strong>D</strong>ivision &nbsp; ÷<br><strong>M</strong>ultiplication &nbsp; ×<br><strong>A</strong>ddition &nbsp; +<br><strong>S</strong>ubtraction &nbsp; −<br><br><em>Division and Multiplication are equal priority — do left to right.<br>Addition and Subtraction are equal priority — do left to right.</em>' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Basic BIDMAS',
        text: 'Evaluate: 3 + 4 × 2 − 1<br><br>Step 1 (Multiplication first): 4 × 2 = 8<br>→ 3 + 8 − 1<br>Step 2 (Left to right): 3 + 8 = 11<br>Step 3: 11 − 1 = <strong>10</strong><br><br><em>Wrong approach: (3+4) × (2−1) = 7 × 1 = 7 ✗</em>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Brackets and Indices',
        text: 'Evaluate: (2 + 3)<sup>2</sup> − 4 × 3 + 8 ÷ 2<br><br>Step 1 (Brackets): 2 + 3 = 5<br>→ 5<sup>2</sup> − 4 × 3 + 8 ÷ 2<br>Step 2 (Indices): 5<sup>2</sup> = 25<br>→ 25 − 4 × 3 + 8 ÷ 2<br>Step 3 (Mult/Div left to right): 4 × 3 = 12, 8 ÷ 2 = 4<br>→ 25 − 12 + 4<br>Step 4 (Add/Sub left to right): 25 − 12 = 13, 13 + 4 = <strong>17</strong>'
      }
    },
    {
      id: 'h-nested',
      type: 'heading',
      data: { text: 'Nested Brackets', level: 2 }
    },
    {
      id: 'p-nested',
      type: 'paragraph',
      data: { text: 'When brackets are nested (one inside another), work from the <strong>innermost</strong> brackets outward.' }
    },
    {
      id: 'callout-worked-nested',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: Nested Brackets',
        text: 'Evaluate: 2 × [5 + (3 − 1)<sup>2</sup>]<br><br>Step 1 (Innermost brackets): 3 − 1 = 2<br>Step 2 (Indices): 2<sup>2</sup> = 4<br>Step 3 (Outer brackets): 5 + 4 = 9<br>Step 4 (Multiplication): 2 × 9 = <strong>18</strong>'
      }
    },
    {
      id: 'callout-tip-bidmas',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'D and M have equal priority — go left to right.<br>A and S have equal priority — go left to right.<br>So 12 ÷ 4 × 2: do division first (left) → 3 × 2 = 6, not 12 ÷ 8 = 1.5.<br><br>Also remember: a fraction bar acts as a bracket: <span class="nb-frac"><span class="nb-num">3 + 5</span><span class="nb-den">2</span></span> = (3 + 5) ÷ 2 = 4.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'BIDMAS: Brackets → Indices → Division/Multiplication (left to right) → Addition/Subtraction (left to right). Always evaluate brackets first, then powers, then multiply/divide, then add/subtract.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-bidmas', prompt: 'What does BIDMAS stand for? Write out all 6 levels.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Evaluate: 5 + 2 × 3 − 4. What common mistake might someone make?' },
      { id: 'cue-3', blockId: 'callout-worked-2', prompt: 'Evaluate step by step: (4 − 1)² + 6 ÷ 2 × 3.' },
      { id: 'cue-4', blockId: 'h-nested', prompt: 'How do you handle nested brackets? Give an example.' },
      { id: 'cue-5', blockId: 'callout-tip-bidmas', prompt: 'What is 18 ÷ 3 × 2? How does left-to-right rule apply here?' }
    ],
    summaryText: 'BIDMAS: Brackets, Indices, then Division/Multiplication left to right, then Addition/Subtraction left to right.',
    ready: true
  },
  evidence: []
};
