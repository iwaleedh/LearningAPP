export const note_olevel_maths_extended_2_8_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/adding-and-subtracting-algebraic-fractions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Add and subtract algebraic fractions by finding a common denominator.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Adding & Subtracting Algebraic Fractions', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Adding and subtracting algebraic fractions uses the <strong>same principle</strong> as numerical fractions: find a <strong>common denominator</strong>, rewrite each fraction, then combine the numerators.' }
    },
    {
      id: 'callout-key-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Method',
        text: '<strong>Step 1:</strong> Find the lowest common denominator (LCD)<br><strong>Step 2:</strong> Multiply each fraction\'s top and bottom by the needed factor<br><strong>Step 3:</strong> Add or subtract the numerators<br><strong>Step 4:</strong> Simplify the result if possible'
      }
    },
    {
      id: 'h-numeric-denom',
      type: 'heading',
      data: { text: 'Numeric Denominators', level: 2 }
    },
    {
      id: 'callout-worked-num',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Numeric Denominators',
        text: 'Simplify <span class="nb-frac"><span class="nb-num"><em>x</em></span><span class="nb-den">3</span></span> + <span class="nb-frac"><span class="nb-num"><em>x</em> + 1</span><span class="nb-den">4</span></span><br><br>LCD = 12<br><br>= <span class="nb-frac"><span class="nb-num">4<em>x</em></span><span class="nb-den">12</span></span> + <span class="nb-frac"><span class="nb-num">3(<em>x</em> + 1)</span><span class="nb-den">12</span></span><br><br>= <span class="nb-frac"><span class="nb-num">4<em>x</em> + 3<em>x</em> + 3</span><span class="nb-den">12</span></span> = <span class="nb-frac"><span class="nb-num">7<em>x</em> + 3</span><span class="nb-den">12</span></span>'
      }
    },
    {
      id: 'h-linear-denom',
      type: 'heading',
      data: { text: 'Linear Denominators', level: 2 }
    },
    {
      id: 'p-linear',
      type: 'paragraph',
      data: { text: 'When the denominators are different linear expressions (e.g. <em>x</em> and <em>x</em> + 1), the LCD is their <strong>product</strong>.' }
    },
    {
      id: 'callout-worked-linear',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Linear Denominators',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den"><em>x</em></span></span> + <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den"><em>x</em> + 1</span></span><br><br>LCD = <em>x</em>(<em>x</em> + 1)<br><br>= <span class="nb-frac"><span class="nb-num">3(<em>x</em> + 1)</span><span class="nb-den"><em>x</em>(<em>x</em> + 1)</span></span> + <span class="nb-frac"><span class="nb-num">2<em>x</em></span><span class="nb-den"><em>x</em>(<em>x</em> + 1)</span></span><br><br>= <span class="nb-frac"><span class="nb-num">3<em>x</em> + 3 + 2<em>x</em></span><span class="nb-den"><em>x</em>(<em>x</em> + 1)</span></span> = <span class="nb-frac"><span class="nb-num">5<em>x</em> + 3</span><span class="nb-den"><em>x</em>(<em>x</em> + 1)</span></span>'
      }
    },
    {
      id: 'h-subtract',
      type: 'heading',
      data: { text: 'Subtraction — Watch the Signs!', level: 2 }
    },
    {
      id: 'callout-worked-sub',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Subtraction',
        text: 'Simplify <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den"><em>x</em> − 2</span></span> − <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den"><em>x</em> + 1</span></span><br><br>LCD = (<em>x</em> − 2)(<em>x</em> + 1)<br><br>= <span class="nb-frac"><span class="nb-num">5(<em>x</em> + 1) − 3(<em>x</em> − 2)</span><span class="nb-den">(<em>x</em> − 2)(<em>x</em> + 1)</span></span><br><br>Expand top: 5<em>x</em> + 5 − 3<em>x</em> + 6 = 2<em>x</em> + 11<br><br>= <span class="nb-frac"><span class="nb-num">2<em>x</em> + 11</span><span class="nb-den">(<em>x</em> − 2)(<em>x</em> + 1)</span></span>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• <strong>Sign errors when subtracting</strong> — the minus applies to the <em>entire</em> numerator, not just the first term. Use a bracket: −3(<em>x</em> − 2) = −3<em>x</em> <strong>+ 6</strong>, not −3<em>x</em> − 6<br>• Forgetting to multiply the numerator when creating equivalent fractions<br>• Not simplifying the final answer'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When subtracting, always put brackets around the second numerator before expanding. This prevents sign errors — the biggest source of lost marks.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'To add or subtract algebraic fractions: find the LCD, rewrite each fraction with that denominator, combine numerators (using brackets for subtraction), expand and simplify. Always watch signs when subtracting.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Find LCD, rewrite fractions, combine numerators, expand and simplify. Brackets are essential when subtracting.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-method', prompt: 'What are the four steps for adding algebraic fractions?', answer: '1. Find LCD, 2. Multiply top and bottom by needed factor, 3. Add/subtract numerators, 4. Simplify.' },
      { id: 'cue-2', blockId: 'callout-worked-linear', prompt: 'What is the LCD of 3/x and 2/(x+1)?', answer: 'x(x + 1) — multiply the two different denominators.' },
      { id: 'cue-3', blockId: 'callout-worked-sub', prompt: 'Why must you use brackets when subtracting fractions?', answer: 'The minus sign applies to the entire numerator. Without brackets, you may get the wrong sign on the second term.' },
      { id: 'cue-4', blockId: 'callout-worked-num', prompt: 'Simplify x/3 + (x+1)/4.', answer: 'LCD = 12: (4x + 3x + 3)/12 = (7x + 3)/12.' },
      { id: 'cue-5', blockId: 'callout-warning', prompt: 'What is the most common mistake in subtracting algebraic fractions?', answer: 'Sign errors — forgetting the minus distributes to ALL terms in the second numerator.' }
    ]
  },
  evidence: []
};
