export const note_olevel_maths_core_8_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Probability/two-way-tables.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Read two-way tables and find joint frequencies and marginal totals. Calculate probabilities from two-way tables including conditional probabilities of the form P(A given B).',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Two-Way Tables', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'A <b>two-way table</b> (also called a contingency table) shows data for <b>two categories at once</b>. One category labels the rows; the other labels the columns. Cells show <b>joint frequencies</b> — how many items fall in both categories. The row and column <b>totals</b> (marginal totals) are shown in the margins.',
      },
    },
    {
      id: 'tbl-main',
      type: 'comparisonTable',
      data: {
        caption: 'A survey of 80 students: gender vs favourite subject',
        headers: ['', 'Maths', 'English', 'Science', 'Total'],
        rows: [
          ['Boys', '15', '8', '17', '40'],
          ['Girls', '10', '18', '12', '40'],
          ['Total', '25', '26', '29', '80'],
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Basic Probability from the Table',
        text: 'Using the table above (80 students). A student is chosen at random. Find:<br>(a) P(Boy) &nbsp; (b) P(favourite is Maths) &nbsp; (c) P(Girl who likes Science)<br><br>(a) Total boys = 40. <b>P(Boy) = 40/80 = 1/2</b><br>(b) Total who like Maths = 25. <b>P(Maths) = 25/80 = 5/16</b><br>(c) Girls who like Science = 12. <b>P(Girl and Science) = 12/80 = 3/20</b>',
      },
    },
    {
      id: 'h-conditional',
      type: 'heading',
      data: { text: 'Conditional Probability from a Table', level: 2 },
    },
    {
      id: 'p-conditional',
      type: 'paragraph',
      data: {
        text: '<b>Conditional probability</b> is the probability of one event <i>given</i> that another has already occurred. For example, "given that the student is a girl, what is P(favourite is English)?" — you now use only the girls\' row as your new total.',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conditional Probability from a Table',
        text: 'P(A given B) = <br>number in both A and B ÷ total in B<br><br>"Given B" means you restrict your attention to the row (or column) for B only.',
      },
    },
    {
      id: 'eq-conditional',
      type: 'equation',
      data: {
        html: 'P(A | B) = <span class="nb-frac"><span class="nb-num">number in A and B</span><span class="nb-den">total in B</span></span>',
        caption: 'Conditional probability (read from a two-way table)',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Conditional Probability',
        text: 'Using the table of 80 students. Find:<br>(a) P(Maths | Boy) — probability of liking Maths, given the student is a boy<br>(b) P(Girl | English) — probability of being a girl, given the favourite is English<br><br>(a) Look at boys\' row only: total boys = 40, maths boys = 15<br><b>P(Maths | Boy) = 15/40 = 3/8</b><br><br>(b) Look at English column only: total English = 26, girls who like English = 18<br><b>P(Girl | English) = 18/26 = 9/13</b>',
      },
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Completing and Using Two-Way Tables', level: 2 },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Completing a Table',
        text: 'Complete the two-way table:<br><br>| &nbsp; | Pass | Fail | Total |<br>|-------|------|------|-------|<br>| Revised | 36 | ? | 45 |<br>| Did not revise | ? | 22 | ? |<br>| Total | ? | ? | 80 |<br><br><b>Step 1:</b> Revised + Fail = 45 − 36 = 9<br><b>Step 2:</b> Did not revise total = 80 − 45 = 35; Did not revise + Pass = 35 − 22 = 13<br><b>Step 3:</b> Total Pass = 36+13 = 49; Total Fail = 9+22 = 31<br><br>Now find P(Pass | Did not revise) = 13/35',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When answering "given that…" questions, <b>identify the relevant row or column</b> first. Use the marginal total of that row/column as your denominator — not the overall total.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'For conditional probability, do NOT use the grand total as the denominator. Use only the total for the given condition (the row or column total).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>Two-way tables show frequencies for two categories.</b> P(Event) = cell value ÷ grand total. P(A | B) = cell in A∩B ÷ row or column total for B. Always check that row and column totals add up correctly.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Two-way tables: basic P = cell ÷ grand total; conditional P(A|B) = cell in A∩B ÷ total for B (use row/column total, not grand total).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-intro',
        prompt: 'What are the "marginal totals" in a two-way table?',
        answer: 'The row and column totals shown in the margins — they show the total for each individual category.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-conditional',
        prompt: 'How do you find P(A | B) from a two-way table?',
        answer: 'P(A | B) = number in both A and B ÷ total in B (use the B row/column total, not grand total).',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we2',
        prompt: 'In a table with 40 boys, 15 of whom like Maths. What is P(Maths | Boy)?',
        answer: 'P(Maths | Boy) = 15/40 = 3/8.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-warning',
        prompt: 'Why is it wrong to use the grand total as the denominator in a conditional probability question?',
        answer: 'Because the condition "given B" restricts the sample to only those in group B. The denominator should be the total for B, not the overall total.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-we3',
        prompt: 'How do you complete a two-way table with some missing values?',
        answer: 'Use the row and column totals to subtract and find missing values. Work outward from known cells.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
