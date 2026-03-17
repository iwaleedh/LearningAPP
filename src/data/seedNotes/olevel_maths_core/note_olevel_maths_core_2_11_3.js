export const note_olevel_maths_core_2_11_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/quadratic-and-cubic-sequences.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify quadratic and cubic sequences using second and third differences, and find nth term formulas for quadratic sequences.' }
    },
    {
      id: 'h-recap',
      type: 'heading',
      data: { text: 'Recap: First Differences', level: 2 }
    },
    {
      id: 'p-recap',
      type: 'paragraph',
      data: { text: 'For a linear (arithmetic) sequence, the <strong>first differences</strong> (Tₙ₊₁ − Tₙ) are constant. For more complex sequences, we look at <strong>second differences</strong> (differences of the first differences).' }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key: Identifying Sequence Types by Differences',
        text: '• <strong>Constant first differences</strong> → Linear (arithmetic) sequence: Tₙ = an + b<br>• <strong>Constant second differences</strong> → Quadratic sequence: Tₙ = an² + bn + c<br>• <strong>Constant third differences</strong> → Cubic sequence: Tₙ = an³ + ...'
      }
    },
    {
      id: 'h-quadratic',
      type: 'heading',
      data: { text: 'Quadratic Sequences', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Identifying a Quadratic Sequence',
        text: 'Sequence: 3, 9, 19, 33, 51, ...<br><br>First differences:    6, 10, 14, 18, ...<br>Second differences:  4,  4,  4, ...<br><br>Second differences are <strong>constant (= 4)</strong> → this is a <strong>quadratic sequence</strong>.<br><br>Next term: last first difference = 18, next first difference = 22.<br>Next term = 51 + 22 = <strong>73</strong>.'
      }
    },
    {
      id: 'h-nth-quad',
      type: 'heading',
      data: { text: 'Finding the nth Term of a Quadratic Sequence', level: 2 }
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Coefficient of n² Formula',
        text: 'If the constant second difference is k, then the coefficient of n² is:<br><br>a = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">2</span></span><br><br>So for second difference = 4: a = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">2</span></span> = <strong>2</strong>, so Tₙ = 2n² + ...'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding the Quadratic nth Term',
        text: 'Sequence: 3, 9, 19, 33, 51 (from above, second diff = 4, so a = 2).<br>Tₙ = 2n² + bn + c<br><br>Use T₁: 2(1)² + b(1) + c = 3 → 2 + b + c = 3 → b + c = 1 ...(i)<br>Use T₂: 2(2)² + b(2) + c = 9 → 8 + 2b + c = 9 → 2b + c = 1 ...(ii)<br><br>(ii) − (i): b = 0<br>From (i): c = 1<br><br>Tₙ = <strong>2n² + 1</strong><br><br>Check: T₃ = 2(9)+1 = 19 ✓; T₄ = 2(16)+1 = 33 ✓'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Another Quadratic nth Term',
        text: 'Sequence: 5, 12, 21, 32, 45, ...<br><br>First differences: 7, 9, 11, 13<br>Second differences: 2, 2, 2 → constant → quadratic, a = 1<br>Tₙ = n² + bn + c<br><br>T₁: 1 + b + c = 5 → b + c = 4 ...(i)<br>T₂: 4 + 2b + c = 12 → 2b + c = 8 ...(ii)<br>(ii) − (i): b = 4, c = 0<br><br>Tₙ = <strong>n² + 4n</strong> = n(n + 4)<br>Check: T₃ = 9 + 12 = 21 ✓'
      }
    },
    {
      id: 'h-cubic',
      type: 'heading',
      data: { text: 'Cubic Sequences', level: 2 }
    },
    {
      id: 'callout-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Identifying a Cubic Sequence',
        text: 'Sequence: 1, 8, 27, 64, 125 (cube numbers: n³)<br><br>First differences: 7, 19, 37, 61<br>Second differences: 12, 18, 24<br>Third differences: 6, 6 → <strong>constant third differences → cubic sequence</strong>.<br><br>At IGCSE level you are mainly expected to recognise cubic sequences (like cube numbers) and continue them, not always find the full nth term formula.'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Work in a Table of Differences',
        text: 'Write the sequence neatly in a row, then write the differences below, then the second differences below that. This makes it easy to see when you have constant differences and also lets you extend the sequence forwards.<br><br>Sequence: 3 | 9 | 19 | 33 | 51<br>1st diff: &nbsp;&nbsp;&nbsp;6 | 10 | 14 | 18<br>2nd diff: &nbsp;&nbsp;&nbsp;&nbsp;4 |  4 |  4'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Forgetting to Halve the Second Difference',
        text: 'Students often write the coefficient of n² as the second difference itself.<br>❌ Wrong: If second difference = 6, write Tₙ = 6n² + ...<br>✅ Correct: coefficient of n² = 6 ÷ 2 = <strong>3</strong>, so Tₙ = 3n² + ...'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can find first and second differences of a sequence', checked: false },
          { text: 'I recognise constant second differences as the signature of a quadratic sequence', checked: false },
          { text: 'I know the coefficient of n² is (second difference) ÷ 2', checked: false },
          { text: 'I can set up and solve simultaneous equations to find b and c in Tₙ = an² + bn + c', checked: false },
          { text: 'I can recognise cubic sequences by their constant third differences', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Quadratic sequences have <strong>constant second differences</strong>. The coefficient of n² is (second difference) ÷ 2. Find b and c by substituting T₁ and T₂ into Tₙ = an² + bn + c and solving simultaneously. Cubic sequences have constant third differences.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What type of sequence has constant second differences? What form does its nth term take?' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Find the first and second differences of: 3, 9, 19, 33, 51. Is it quadratic?' },
      { id: 'cue-3', blockId: 'callout-key2', prompt: 'If the constant second difference of a sequence is 6, what is the coefficient of n² in the nth term?' },
      { id: 'cue-4', blockId: 'callout-worked2', prompt: 'For sequence 3, 9, 19, 33 (second diff = 4): find Tₙ = 2n² + bn + c by substituting T₁ and T₂.' },
      { id: 'cue-5', blockId: 'callout-warning1', prompt: 'What is the most common mistake when finding the nth term of a quadratic sequence?' },
    ],
    summaryText: 'Constant second differences → quadratic Tₙ = an² + bn + c where a = (2nd diff) ÷ 2. Find b and c by substituting two terms. Cubic sequences have constant third differences.',
    ready: true,
  },
  evidence: [],
};
