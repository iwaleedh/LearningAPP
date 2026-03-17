export const note_olevel_maths_core_2_11_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/continuing-sequences.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify the pattern in a variety of sequences and continue them by writing the next terms, including geometric, Fibonacci-type, and pattern-based sequences.' }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'How to Continue a Sequence', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Strategy for Continuing Any Sequence',
        text: '1. Calculate the differences between consecutive terms (first differences).<br>2. If constant → arithmetic: keep adding the same d.<br>3. If not constant, look at second differences (differences of the differences).<br>4. Check for ratio (each term ÷ previous) → geometric if constant.<br>5. Check if terms are squares, cubes, triangular numbers, or a Fibonacci rule (add previous two).'
      }
    },
    {
      id: 'h-geometric',
      type: 'heading',
      data: { text: 'Geometric Sequences', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Geometric Sequence',
        text: '<strong>(a)</strong> Sequence: 5, 10, 20, 40, ...<br>Ratio = 10 ÷ 5 = 2 (check: 20/10 = 2, 40/20 = 2) ✓<br>Next two terms: 40 × 2 = <strong>80</strong>, 80 × 2 = <strong>160</strong><br><br><strong>(b)</strong> Sequence: 81, 27, 9, 3, ...<br>Ratio = 27 ÷ 81 = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span><br>Next two terms: 3 × <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span> = <strong>1</strong>, 1 × <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span> = <strong><span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span></strong>'
      }
    },
    {
      id: 'h-fibonacci',
      type: 'heading',
      data: { text: 'Fibonacci-type Sequences', level: 2 }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Fibonacci-Type Sequence',
        text: 'In a Fibonacci sequence, each term = sum of the <strong>two preceding terms</strong>.<br><br>Classic Fibonacci: 1, 1, 2, 3, 5, 8, 13, ...<br>1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13<br>Next term: 8 + 13 = <strong>21</strong><br><br>Modified: 3, 5, 8, 13, 21, ...<br>Same rule: 5+8=13, 8+13=21, 13+21 = <strong>34</strong>'
      }
    },
    {
      id: 'h-triangular',
      type: 'heading',
      data: { text: 'Triangular Number Sequences', level: 2 }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Triangular Numbers',
        text: 'Triangular numbers: 1, 3, 6, 10, 15, 21, ...<br>Differences: +2, +3, +4, +5, +6, ...<br>(Each difference increases by 1.)<br><br>Next terms: 21 + 7 = <strong>28</strong>, 28 + 8 = <strong>36</strong><br><br>Formula: Tₙ = <span class="nb-frac"><span class="nb-num">n(n + 1)</span><span class="nb-den">2</span></span>'
      }
    },
    {
      id: 'h-mixed',
      type: 'heading',
      data: { text: 'Mixed Pattern Examples', level: 2 }
    },
    {
      id: 'callout-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Mixed Patterns',
        text: '<strong>(a)</strong> Sequence: 2, 5, 10, 17, 26, ...<br>Differences: +3, +5, +7, +9 (increasing by 2) → second differences constant = 2 → quadratic pattern.<br>Next: 26 + 11 = <strong>37</strong><br><br><strong>(b)</strong> Sequence: 1, 8, 27, 64, 125, ...<br>These are 1³, 2³, 3³, 4³, 5³ → cube numbers.<br>Next: 6³ = <strong>216</strong><br><br><strong>(c)</strong> Sequence: 1, −1, 2, −2, 3, −3, 4, ...<br>Pattern: +1, −1 alternating pairs → next: <strong>−4</strong>'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Show Your Pattern Clearly',
        text: 'When asked to "write the next term", also briefly describe the rule you used. Examiners often award a mark for identifying the rule (e.g. "the common ratio is 2", or "each term is the sum of the two previous terms") even if your final calculated term is slightly wrong.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can continue an arithmetic sequence using the common difference', checked: false },
          { text: 'I can identify and continue a geometric sequence using the common ratio', checked: false },
          { text: 'I can continue Fibonacci-type sequences (add previous two terms)', checked: false },
          { text: 'I can recognise triangular, square, and cube number sequences', checked: false },
          { text: 'I check second differences to spot quadratic/other patterns', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'To continue a sequence, find the pattern: constant first differences → arithmetic; constant ratio → geometric; equal second differences → quadratic; add previous two → Fibonacci. Recognise square (n²), cube (n³), and triangular [n(n+1)/2] sequences by inspection.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-worked1', prompt: 'Continue the geometric sequence: 81, 27, 9, 3, ... What is the common ratio?' },
      { id: 'cue-2', blockId: 'callout-worked2', prompt: 'What is the rule for a Fibonacci sequence? Write the next term of: 3, 5, 8, 13, 21, ...' },
      { id: 'cue-3', blockId: 'callout-worked3', prompt: 'What are the triangular numbers? How are the differences between triangular numbers related?' },
      { id: 'cue-4', blockId: 'callout-worked4', prompt: 'The sequence 2, 5, 10, 17, 26, ... has differences +3, +5, +7, +9. What are the second differences? What type of sequence is this?' },
      { id: 'cue-5', blockId: 'callout-key1', prompt: 'List the five steps for figuring out how to continue an unfamiliar sequence.' },
    ],
    summaryText: 'Identify the pattern using differences or ratios. Arithmetic: constant d. Geometric: constant ratio. Fibonacci: add previous two. Check for square/cube/triangular patterns.',
    ready: true,
  },
  evidence: [],
};
