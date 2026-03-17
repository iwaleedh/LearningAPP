export const note_olevel_maths_extended_2_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/expanding-and-simplifying-single-brackets.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Expand single brackets by multiplying each term inside the bracket by the term outside; simplify the resulting expression.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Expanding Single Brackets', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Expanding</strong> (or <em>multiplying out</em>) a bracket means removing the bracket by multiplying every term inside by the term outside. This is the <strong>distributive law</strong>.' }
    },
    {
      id: 'eq-dist',
      type: 'equation',
      data: {
        html: '<em>a</em>(<em>b</em> + <em>c</em>) = <em>ab</em> + <em>ac</em>',
        caption: 'The distributive law'
      }
    },
    {
      id: 'callout-worked-basic',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Expand 3(<em>x</em> + 4)<br><br>= 3 × <em>x</em> + 3 × 4<br>= <strong>3<em>x</em> + 12</strong>'
      }
    },
    {
      id: 'h-negative',
      type: 'heading',
      data: { text: 'Expanding with Negative Terms', level: 2 }
    },
    {
      id: 'p-negative',
      type: 'paragraph',
      data: { text: 'Take extra care when the term outside the bracket is negative. Remember the sign rules for multiplication: positive × negative = negative, negative × negative = positive.' }
    },
    {
      id: 'callout-worked-neg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Expand −2(3<em>x</em> − 5)<br><br>= (−2) × 3<em>x</em> + (−2) × (−5)<br>= −6<em>x</em> + 10<br><br>Answer: <strong>−6<em>x</em> + 10</strong>'
      }
    },
    {
      id: 'callout-warning-minus',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — The Minus Sign',
        text: 'When a minus is in front of a bracket with no coefficient, treat it as −1:<br><br>−(<em>x</em> − 3) = (−1)(<em>x</em> − 3) = −<em>x</em> + 3<br><br>Every sign inside the bracket changes!'
      }
    },
    {
      id: 'h-simplify',
      type: 'heading',
      data: { text: 'Expanding and Simplifying', level: 2 }
    },
    {
      id: 'p-simplify',
      type: 'paragraph',
      data: { text: 'Often you need to expand two or more brackets and then collect like terms.' }
    },
    {
      id: 'callout-worked-simplify',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Expand and simplify 4(2<em>x</em> + 3) − 3(<em>x</em> − 2)<br><br>Expand each bracket:<br>= 8<em>x</em> + 12 − 3<em>x</em> + 6<br><br>Collect like terms:<br>= (8<em>x</em> − 3<em>x</em>) + (12 + 6)<br>= <strong>5<em>x</em> + 18</strong>'
      }
    },
    {
      id: 'h-variables',
      type: 'heading',
      data: { text: 'Variable Outside the Bracket', level: 2 }
    },
    {
      id: 'callout-worked-var',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4',
        text: 'Expand <em>x</em>(3<em>x</em> − 2)<br><br>= <em>x</em> × 3<em>x</em> + <em>x</em> × (−2)<br>= 3<em>x</em>² − 2<em>x</em><br><br>Answer: <strong>3<em>x</em>² − 2<em>x</em></strong>'
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Checking',
        text: 'Substitute a value (e.g. <em>x</em> = 2) into both the original and expanded expressions. If they give the same answer, your expansion is correct.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To expand a single bracket, multiply every term inside by the term outside. Watch signs carefully — a negative outside changes all the signs inside. After expanding multiple brackets, collect like terms to simplify.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Expanding a single bracket: multiply each term inside by the term outside. Then simplify by collecting like terms.',
    cues: [
      { id: 'cue-1', blockId: 'eq-dist', prompt: 'State the distributive law.', answer: 'a(b + c) = ab + ac — multiply every term inside by the term outside.' },
      { id: 'cue-2', blockId: 'callout-worked-neg', prompt: 'Expand −2(3x − 5).', answer: '−6x + 10' },
      { id: 'cue-3', blockId: 'callout-warning-minus', prompt: 'How do you expand −(x − 3)?', answer: '−x + 3. The minus acts as −1, changing every sign inside.' },
      { id: 'cue-4', blockId: 'callout-worked-simplify', prompt: 'Expand and simplify 4(2x + 3) − 3(x − 2).', answer: '8x + 12 − 3x + 6 = 5x + 18' }
    ]
  },
  evidence: []
};
