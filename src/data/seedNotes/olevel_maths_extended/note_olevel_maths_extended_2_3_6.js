export const note_olevel_maths_extended_2_3_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/factorising-by-grouping.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Factorise expressions with four terms by grouping into pairs and extracting common factors from each pair.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Factorising by Grouping', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Some expressions with <strong>four terms</strong> can be factorised by splitting them into two groups of two, taking out a common factor from each group, and then taking out the common bracket.' }
    },
    {
      id: 'callout-key-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Factorising by Grouping — Steps',
        text: '1. Split the expression into two groups of two terms<br>2. Factorise each group separately<br>3. Both groups should now share a <strong>common bracket</strong><br>4. Take out the common bracket as a factor<br><br>If the brackets don\'t match, try rearranging the terms.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Factorise <em>x</em>³ + 3<em>x</em>² + 2<em>x</em> + 6<br><br><strong>Group:</strong> (<em>x</em>³ + 3<em>x</em>²) + (2<em>x</em> + 6)<br><strong>Factorise each:</strong> <em>x</em>²(<em>x</em> + 3) + 2(<em>x</em> + 3)<br><strong>Common bracket:</strong> <strong>(<em>x</em> + 3)(<em>x</em>² + 2)</strong>'
      }
    },
    {
      id: 'h-neg',
      type: 'heading',
      data: { text: 'Grouping with Negative Terms', level: 2 }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Factorise 2<em>xy</em> + 6<em>x</em> − <em>y</em> − 3<br><br><strong>Group:</strong> (2<em>xy</em> + 6<em>x</em>) + (−<em>y</em> − 3)<br><strong>Factorise each:</strong> 2<em>x</em>(<em>y</em> + 3) − 1(<em>y</em> + 3)<br><strong>Common bracket:</strong> <strong>(<em>y</em> + 3)(2<em>x</em> − 1)</strong><br><br>Note: we factored out <strong>−1</strong> from the second pair so the brackets match.'
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Factorise 3<em>a</em> − 3<em>b</em> + <em>ca</em> − <em>cb</em><br><br><strong>Group:</strong> (3<em>a</em> − 3<em>b</em>) + (<em>ca</em> − <em>cb</em>)<br><strong>Factorise each:</strong> 3(<em>a</em> − <em>b</em>) + <em>c</em>(<em>a</em> − <em>b</em>)<br><strong>Common bracket:</strong> <strong>(<em>a</em> − <em>b</em>)(3 + <em>c</em>)</strong>'
      }
    },
    {
      id: 'callout-warning-rearrange',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'When Grouping Doesn\'t Work',
        text: 'If the brackets don\'t match after your first grouping, try <strong>rearranging the terms</strong> before grouping.<br><br>For example: <em>ax</em> + <em>by</em> + <em>bx</em> + <em>ay</em><br>Rearrange: (<em>ax</em> + <em>ay</em>) + (<em>bx</em> + <em>by</em>)<br>= <em>a</em>(<em>x</em> + <em>y</em>) + <em>b</em>(<em>x</em> + <em>y</em>) = (<em>x</em> + <em>y</em>)(<em>a</em> + <em>b</em>)'
      }
    },
    {
      id: 'callout-tip-link',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Factorising by grouping is the final step of the <strong>ac method</strong> for harder quadratics. Practise it with four-term expressions so that the grouping step becomes automatic.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To factorise by grouping: split four terms into two pairs, factorise each pair to reveal a common bracket, then take out the bracket. If brackets don\'t match, rearrange terms or factor out a negative.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Factorise four-term expressions by grouping into pairs, factorising each, then extracting the common bracket.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-steps', prompt: 'What are the steps for factorising by grouping?', answer: 'Split into two groups, factorise each group, then take out the common bracket.' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Factorise x³ + 3x² + 2x + 6.', answer: '(x + 3)(x² + 2)' },
      { id: 'cue-3', blockId: 'callout-worked-2', prompt: 'What do you do when the second pair needs a negative factor?', answer: 'Factor out −1 from the second pair so the bracket matches the first pair.' },
      { id: 'cue-4', blockId: 'callout-warning-rearrange', prompt: 'What should you try if the brackets don\'t match?', answer: 'Rearrange the terms into a different grouping.' }
    ]
  },
  evidence: []
};
