export const note_olevel_maths_extended_2_3_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/deciding-the-factorisation-method.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Choose the correct factorisation method for a given expression: common factor, simple quadratic, harder quadratic, difference of two squares, or grouping.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Deciding the Factorisation Method', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'There are several factorisation methods, and choosing the right one depends on the structure of the expression. Always start by looking for <strong>common factors</strong>, then decide which technique applies.' }
    },
    {
      id: 'callout-key-flowchart',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Decision Flowchart',
        text: '<strong>Step 1:</strong> Is there a common factor? &rarr; Take it out first<br><br><strong>Step 2:</strong> How many terms remain inside?<br>• <strong>2 terms</strong> (a² − b²) &rarr; Difference of two squares<br>• <strong>3 terms</strong> (quadratic):<br>&nbsp;&nbsp;&nbsp;– Coefficient of x² = 1 &rarr; Simple quadratic (find two numbers)<br>&nbsp;&nbsp;&nbsp;– Coefficient of x² ≠ 1 &rarr; Harder quadratic (ac method)<br>• <strong>4 terms</strong> &rarr; Factorising by grouping'
      }
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Identifying the Method', level: 2 }
    },
    {
      id: 'table-decide',
      type: 'comparisonTable',
      data: {
        caption: 'Which method to use',
        headers: ['Expression', 'Common factor?', 'Method', 'Answer'],
        rows: [
          ['6x + 18', 'Yes (6)', 'Common factor', '6(x + 3)'],
          ['x² − 49', 'No', 'Difference of two squares', '(x + 7)(x − 7)'],
          ['x² + 5x + 6', 'No', 'Simple quadratic', '(x + 2)(x + 3)'],
          ['3x² − 7x + 2', 'No', 'ac method', '(3x − 1)(x − 2)'],
          ['xy + 3x + 2y + 6', 'No', 'Grouping', '(y + 3)(x + 2)'],
          ['5x² − 45', 'Yes (5)', 'CF then DOTS', '5(x + 3)(x − 3)']
        ]
      }
    },
    {
      id: 'h-practice',
      type: 'heading',
      data: { text: 'Worked Practice', level: 2 }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Factorise 3<em>x</em>² − 12<br><br>Step 1: Common factor = 3 &rarr; 3(<em>x</em>² − 4)<br>Step 2: <em>x</em>² − 4 = <em>x</em>² − 2² &rarr; DOTS<br><br>= <strong>3(<em>x</em> + 2)(<em>x</em> − 2)</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Factorise 2<em>x</em>² + 10<em>x</em> + 12<br><br>Step 1: Common factor = 2 &rarr; 2(<em>x</em>² + 5<em>x</em> + 6)<br>Step 2: Simple quadratic. Need: <em>p</em> × <em>q</em> = 6, <em>p</em> + <em>q</em> = 5 &rarr; 2 and 3<br><br>= <strong>2(<em>x</em> + 2)(<em>x</em> + 3)</strong>'
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Factorise fully 4<em>x</em>³ + 8<em>x</em>² − <em>x</em> − 2<br><br>Step 1: No overall common factor<br>Step 2: 4 terms &rarr; try grouping<br><br>(4<em>x</em>³ + 8<em>x</em>²) + (−<em>x</em> − 2)<br>= 4<em>x</em>²(<em>x</em> + 2) − 1(<em>x</em> + 2)<br>= (<em>x</em> + 2)(4<em>x</em>² − 1)<br><br>Step 3: 4<em>x</em>² − 1 = (2<em>x</em>)² − 1² &rarr; DOTS again!<br><br>= <strong>(<em>x</em> + 2)(2<em>x</em> + 1)(2<em>x</em> − 1)</strong>'
      }
    },
    {
      id: 'callout-warning-stop',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Don\'t Stop Too Early',
        text: '"Factorise fully" means check whether each factor can itself be factorised further. After grouping or taking out a common factor, look again for DOTS or another quadratic factorisation inside.'
      }
    },
    {
      id: 'callout-tip-always',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Golden Rule',
        text: '<strong>Always look for a common factor FIRST.</strong> It simplifies the remaining expression and often reveals a standard pattern inside.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Always start by taking out <strong>common factors</strong>. Then decide: 2 terms &rarr; DOTS; 3 terms &rarr; simple/harder quadratic; 4 terms &rarr; grouping. "Factorise fully" means check each bracket can\'t be factorised further.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Start with common factors. Then: 2 terms = DOTS, 3 terms = quadratic, 4 terms = grouping.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-flowchart', prompt: 'What is the first step in any factorisation?', answer: 'Look for and take out a common factor.' },
      { id: 'cue-2', blockId: 'table-decide', prompt: 'How do you decide between methods for a 3-term expression?', answer: 'If coefficient of x² is 1 &rarr; simple quadratic. If not 1 &rarr; use the ac method.' },
      { id: 'cue-3', blockId: 'callout-worked-3', prompt: 'Factorise fully 4x³ + 8x² − x − 2.', answer: '(x + 2)(2x + 1)(2x − 1) — grouping first, then DOTS.' },
      { id: 'cue-4', blockId: 'callout-warning-stop', prompt: 'What does "factorise fully" mean?', answer: 'Every factor must be checked for further factorisation — don\'t stop until nothing more can be done.' }
    ]
  },
  evidence: []
};
