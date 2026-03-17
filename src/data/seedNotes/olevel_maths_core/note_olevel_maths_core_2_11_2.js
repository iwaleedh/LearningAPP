export const note_olevel_maths_core_2_11_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/nth-terms-of-linear-sequences.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Find the nth term formula for a linear (arithmetic) sequence, use it to find specific terms, and determine which term has a given value.' }
    },
    {
      id: 'h-formula',
      type: 'heading',
      data: { text: 'The nth Term Formula for an Arithmetic Sequence', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'nth Term Formula',
        text: 'For an arithmetic sequence with first term <strong>a</strong> and common difference <strong>d</strong>:<br><br>Tₙ = <strong>a + (n − 1)d</strong><br><br>Or equivalently: Tₙ = <strong>dn + (a − d)</strong><br><br>The coefficient of n always equals the common difference d.<br>The constant at the end is found by substituting n = 0 (or rearranging from d and a).'
      }
    },
    {
      id: 'h-finding-rule',
      type: 'heading',
      data: { text: 'Finding the nth Term', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding Tₙ',
        text: '<strong>(a)</strong> Sequence: 5, 8, 11, 14, ...<br>d = 8 − 5 = 3; a = 5<br>Tₙ = 3n + (5 − 3) = <strong>3n + 2</strong><br>Check: T₁ = 3(1)+2 = 5 ✓; T₃ = 3(3)+2 = 11 ✓<br><br><strong>(b)</strong> Sequence: 20, 17, 14, 11, ...<br>d = 17 − 20 = −3; a = 20<br>Tₙ = −3n + (20 + 3) = <strong>−3n + 23</strong><br>Check: T₁ = −3+23 = 20 ✓; T₄ = −12+23 = 11 ✓<br><br><strong>(c)</strong> Sequence: 4, 10, 16, 22, ...<br>d = 6; Tₙ = 6n + (4 − 6) = <strong>6n − 2</strong>'
      }
    },
    {
      id: 'h-using',
      type: 'heading',
      data: { text: 'Using the nth Term', level: 2 }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding Specific Terms',
        text: 'For the sequence 3n + 2: find T₁₀ and T₅₀.<br><br>T₁₀ = 3(10) + 2 = 30 + 2 = <strong>32</strong><br>T₅₀ = 3(50) + 2 = 150 + 2 = <strong>152</strong><br><br>Without the formula, you would need to list 50 terms!'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding Which Term Has a Given Value',
        text: 'The sequence has Tₙ = 5n − 3. Which term equals 97?<br><br>Set Tₙ = 97:<br>5n − 3 = 97<br>5n = 100<br>n = <strong>20</strong><br><br>So T₂₀ = 97.<br><br>Is 200 a term of this sequence?<br>5n − 3 = 200 → 5n = 203 → n = 40.6<br>n is not a whole number, so <strong>200 is not a term</strong> of the sequence.'
      }
    },
    {
      id: 'h-pattern-diagrams',
      type: 'heading',
      data: { text: 'Pattern Diagrams and nth Terms', level: 2 }
    },
    {
      id: 'callout-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: nth Term from a Shape Pattern',
        text: 'Matchstick squares: 1 square needs 4 matches; 2 squares in a row need 7; 3 squares need 10; ...<br><br>Sequence: 4, 7, 10, 13, ... with d = 3<br>Tₙ = 3n + (4 − 3) = <strong>3n + 1</strong><br><br>How many matchsticks for 20 squares?<br>T₂₀ = 3(20) + 1 = <strong>61 matchsticks</strong>'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Shortcut: nth Term = d × n + adjustment',
        text: 'The coefficient of n is always the common difference d. To find the constant:<br>Write "d × n" for the first term: if n=1, d×1 = d.<br>Your first term is a, so: constant = a − d.<br><br>Example: d = 5, a = 2 → constant = 2 − 5 = −3 → Tₙ = 5n − 3.'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Using the Wrong Formula',
        text: 'Some students write Tₙ = a + nd (forgetting the −1). This gives the wrong answer.<br>✅ Correct: Tₙ = a + (n−1)d = dn + (a − d)<br>❌ Wrong: Tₙ = a + nd (this gives the sequence starting from n=0)'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can find the common difference d of an arithmetic sequence', checked: false },
          { text: 'I can write the nth term as Tₙ = dn + (a−d)', checked: false },
          { text: 'I always verify by substituting n = 1 and n = 2 into my formula', checked: false },
          { text: 'I can use the formula to find any specific term', checked: false },
          { text: 'I can find which term equals a given value (or show it is not a term)', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The nth term of a linear sequence is Tₙ = dn + (a − d), where d is the common difference and a is the first term. To find a specific term, substitute n. To find which term equals a value, set Tₙ = value and solve for n — if n is not a positive integer, the value is not in the sequence.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'State the nth term formula for an arithmetic sequence with first term a and common difference d.' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Find the nth term of: 5, 8, 11, 14, ...' },
      { id: 'cue-3', blockId: 'callout-worked1', prompt: 'Find the nth term of: 20, 17, 14, 11, ... (decreasing sequence).' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Tₙ = 5n − 3. Which term equals 97? Is 200 in this sequence?' },
      { id: 'cue-5', blockId: 'callout-tip1', prompt: 'What is the shortcut for finding the constant in the nth term formula?' },
    ],
    summaryText: 'nth term of an arithmetic sequence: Tₙ = dn + (a − d). Coefficient of n is always d. Set Tₙ = value and solve for n to find a specific term (n must be a positive integer).',
    ready: true,
  },
  evidence: [],
};
