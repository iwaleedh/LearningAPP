export const note_olevel_maths_extended_2_6_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/formulas-where-subject-appears-twice.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Rearrange formulas where the new subject appears more than once by collecting terms and factorising.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Formulas Where the Subject Appears Twice', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When the variable you want to make the subject appears in <strong>two or more places</strong>, you cannot simply "undo" operations. Instead, you must <strong>collect</strong> all terms containing that variable on one side and then <strong>factorise</strong> it out.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Method',
        text: '1. Get every term containing the target variable on <strong>one side</strong><br>2. Get everything else on the <strong>other side</strong><br>3. <strong>Factorise</strong> out the target variable<br>4. <strong>Divide</strong> to isolate it'
      }
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Examples', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Make <em>x</em> the subject of &nbsp; 5<em>x</em> + 3 = 2<em>x</em> + <em>y</em><br><br>Collect <em>x</em> terms on one side:<br>5<em>x</em> − 2<em>x</em> = <em>y</em> − 3<br>3<em>x</em> = <em>y</em> − 3<br><br>Divide by 3:<br><em>x</em> = <span class="nb-frac"><span class="nb-num"><em>y</em> − 3</span><span class="nb-den">3</span></span>'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Factorising Out',
        text: 'Make <em>x</em> the subject of &nbsp; <em>y</em> = <span class="nb-frac"><span class="nb-num">3<em>x</em> + 1</span><span class="nb-den"><em>x</em> − 2</span></span><br><br>Multiply by (<em>x</em> − 2):<br><em>y</em>(<em>x</em> − 2) = 3<em>x</em> + 1<br><em>xy</em> − 2<em>y</em> = 3<em>x</em> + 1<br><br>Collect <em>x</em> terms on the left:<br><em>xy</em> − 3<em>x</em> = 1 + 2<em>y</em><br><br>Factorise out <em>x</em>:<br><em>x</em>(<em>y</em> − 3) = 1 + 2<em>y</em><br><br>Divide:<br><em>x</em> = <span class="nb-frac"><span class="nb-num">1 + 2<em>y</em></span><span class="nb-den"><em>y</em> − 3</span></span>'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Make <em>a</em> the subject of &nbsp; <em>p</em> = <span class="nb-frac"><span class="nb-num"><em>a</em> + <em>b</em></span><span class="nb-den"><em>a</em> − <em>b</em></span></span><br><br>Multiply by (<em>a</em> − <em>b</em>):<br><em>p</em>(<em>a</em> − <em>b</em>) = <em>a</em> + <em>b</em><br><em>pa</em> − <em>pb</em> = <em>a</em> + <em>b</em><br><br>Collect <em>a</em> terms:<br><em>pa</em> − <em>a</em> = <em>b</em> + <em>pb</em><br><br>Factorise:<br><em>a</em>(<em>p</em> − 1) = <em>b</em>(1 + <em>p</em>)<br><br>Divide:<br><em>a</em> = <span class="nb-frac"><span class="nb-num"><em>b</em>(1 + <em>p</em>)</span><span class="nb-den"><em>p</em> − 1</span></span>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'When moving terms, remember to <strong>change the sign</strong>. Moving +3<em>x</em> to the other side gives −3<em>x</em>. Careless sign errors are the most frequent mistake in rearranging.'
      }
    },
    {
      id: 'table-comparison',
      type: 'comparisonTable',
      data: {
        caption: 'Subject appears once vs twice',
        headers: ['Subject appears once', 'Subject appears twice'],
        rows: [
          ['Undo operations in reverse order', 'Collect all terms with the subject on one side'],
          ['No factorising needed', 'Factorise out the subject'],
          ['Example: A = πr² &rarr; r = √(A/π)', 'Example: y = (3x+1)/(x−2) &rarr; collect, factorise, divide']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If you see the target variable on both sides of a fraction, <strong>multiply out the denominator first</strong> to clear the fraction, then collect and factorise.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'When the subject appears twice: (1) clear fractions, (2) collect all terms with the subject on one side, (3) factorise out the subject, (4) divide to isolate it. The factorising step is what makes this different from single-appearance rearrangements.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Collect terms containing the subject on one side, factorise it out, then divide. Clear any fractions first.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'What four steps do you use when the subject appears twice?', answer: '(1) Collect target variable terms on one side, (2) everything else on the other, (3) factorise out the variable, (4) divide.' },
      { id: 'cue-2', blockId: 'callout-worked2', prompt: 'Make x the subject of y = (3x + 1)/(x − 2).', answer: 'x = (1 + 2y)/(y − 3).' },
      { id: 'cue-3', blockId: 'callout-worked3', prompt: 'Make a the subject of p = (a + b)/(a − b).', answer: 'a = b(1 + p)/(p − 1).' },
      { id: 'cue-4', blockId: 'table-comparison', prompt: 'What is the key difference between rearranging when the subject appears once vs twice?', answer: 'When it appears twice, you must collect and factorise; when once, you simply undo operations.' }
    ]
  },
  evidence: []
};
