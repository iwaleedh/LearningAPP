export const note_olevel_maths_extended_2_11_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/nth-terms-of-linear-sequences.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Find and use the nth term formula for arithmetic (linear) sequences.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'nth Terms of Linear Sequences', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'An <strong>arithmetic (linear) sequence</strong> has a constant common difference <em>d</em>. The nth term formula lets you find <strong>any</strong> term without listing all the terms before it.' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The nth Term Formula',
        text: '<strong><em>T</em><sub><em>n</em></sub> = <em>a</em> + (<em>n</em> − 1)<em>d</em></strong><br><br>or equivalently: <strong><em>T</em><sub><em>n</em></sub> = <em>dn</em> + (<em>a</em> − <em>d</em>)</strong><br><br>where:<br>• <em>a</em> = first term<br>• <em>d</em> = common difference<br>• <em>n</em> = term number'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Finding the nth Term', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Find the common difference <em>d</em> (subtract consecutive terms)' },
          { text: 'Write <em>dn</em> as the starting point (e.g. if <em>d</em> = 3, write 3<em>n</em>)' },
          { text: 'Compare 3<em>n</em> values with the actual sequence to find the adjustment' },
          { text: 'Write the final formula: <em>T</em><sub><em>n</em></sub> = <em>dn</em> + adjustment' }
        ]
      }
    },
    {
      id: 'callout-worked-find',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Find the nth Term',
        text: 'Find the nth term of: 5, 8, 11, 14, 17, …<br><br><strong>Step 1:</strong> <em>d</em> = 8 − 5 = 3<br><br><strong>Step 2:</strong> Start with 3<em>n</em>:<br>3(1) = 3, 3(2) = 6, 3(3) = 9, …<br><br><strong>Step 3:</strong> Actual: 5, 8, 11 &rarr; each is 2 more than 3<em>n</em><br><br><strong>Step 4:</strong> <em>T</em><sub><em>n</em></sub> = 3<em>n</em> + 2<br><br>Check: <em>T</em>₁ = 3(1) + 2 = 5 ✓ &nbsp; <em>T</em>₅ = 3(5) + 2 = 17 ✓'
      }
    },
    {
      id: 'h-using',
      type: 'heading',
      data: { text: 'Using the nth Term', level: 2 }
    },
    {
      id: 'callout-worked-use1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding a Specific Term',
        text: '<em>T</em><sub><em>n</em></sub> = 4<em>n</em> − 7. Find the 50th term.<br><br><em>T</em>₅₀ = 4(50) − 7 = 200 − 7 = <strong>193</strong>'
      }
    },
    {
      id: 'callout-worked-use2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Is a Number in the Sequence?',
        text: 'Is 85 a term in the sequence <em>T</em><sub><em>n</em></sub> = 3<em>n</em> + 1?<br><br>Set 3<em>n</em> + 1 = 85<br>3<em>n</em> = 84<br><em>n</em> = 28<br><br>Since <em>n</em> = 28 is a whole number, <strong>yes</strong> — 85 is the 28th term.'
      }
    },
    {
      id: 'callout-worked-use3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Not in the Sequence',
        text: 'Is 100 a term in <em>T</em><sub><em>n</em></sub> = 7<em>n</em> − 3?<br><br>7<em>n</em> − 3 = 100<br>7<em>n</em> = 103<br><em>n</em> = <span class="nb-frac"><span class="nb-num">103</span><span class="nb-den">7</span></span> = 14.71…<br><br>Not a whole number, so <strong>no</strong> — 100 is NOT in the sequence.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Confusing common difference with the first term<br>• Forgetting to check formula works for the first few terms<br>• Saying a number IS in the sequence when <em>n</em> is not a positive integer'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The coefficient of <em>n</em> in the nth term is <strong>always</strong> the common difference. If <em>d</em> = 3, the formula starts 3<em>n</em> + something.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'For arithmetic sequences: find d (common difference), write dn, add the adjustment &rarr; Tₙ = dn + c. Use it to find any term, or check if a number is in the sequence by solving for n (must be a positive integer).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'nth term = dn + (a − d). The coefficient of n equals the common difference. Solve Tₙ = k for n to check membership.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'What is the nth term formula for an arithmetic sequence?', answer: 'Tₙ = a + (n−1)d, or equivalently Tₙ = dn + (a−d).' },
      { id: 'cue-2', blockId: 'callout-worked-find', prompt: 'Find the nth term of 5, 8, 11, 14, 17.', answer: 'd=3, starts 3n. Adjustment +2. Tₙ = 3n + 2.' },
      { id: 'cue-3', blockId: 'callout-worked-use2', prompt: 'How do you check if 85 is in the sequence Tₙ = 3n + 1?', answer: 'Solve 3n + 1 = 85 &rarr; n = 28. Since n is a positive integer, yes.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'What does the coefficient of n represent?', answer: 'The common difference d.' },
      { id: 'cue-5', blockId: 'callout-worked-use1', prompt: 'If Tₙ = 4n − 7, find the 50th term.', answer: 'T₅₀ = 4(50) − 7 = 193.' }
    ]
  },
  evidence: []
};
