export const note_olevel_maths_extended_8_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/conditional-probability.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and calculate conditional probability — the probability of an event given that another event has already occurred.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Conditional Probability', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: '<strong>Conditional probability</strong> is the probability that event A occurs <em>given that</em> event B has already occurred. It is written P(A | B), read as "P of A given B".' }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conditional Probability Formula',
        text: 'P(A | B) = <span class="nb-frac"><span class="nb-num">P(A ∩ B)</span><span class="nb-den">P(B)</span></span><br><br>In words: P(A given B) = P(both A and B) ÷ P(B).'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — From a Table',
        text: '100 students: 40 boys, 60 girls. 30 boys passed, 45 girls passed.<br>Find P(passed | boy).<br><br><strong>Solution:</strong><br>P(passed | boy) = <span class="nb-frac"><span class="nb-num">30</span><span class="nb-den">40</span></span> = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">4</span></span><br><br>The condition "boy" restricts the sample space to 40 boys.'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Using the Formula',
        text: 'P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Find P(A | B).<br><br><strong>Solution:</strong><br>P(A | B) = <span class="nb-frac"><span class="nb-num">P(A ∩ B)</span><span class="nb-den">P(B)</span></span> = <span class="nb-frac"><span class="nb-num">0.2</span><span class="nb-den">0.5</span></span> = <strong>0.4</strong>'
      }
    },
    {
      id: 'h-restrict',
      type: 'heading',
      data: { text: 'Restricted Sample Space', level: 2 }
    },
    {
      id: 'p-restrict',
      type: 'paragraph',
      data: { text: 'The key idea of conditional probability is that the "given" condition <strong>restricts the sample space</strong>. Instead of looking at all outcomes, you only look at those where the condition is satisfied.' }
    },
    {
      id: 'callout-tip-keywords',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Spotting Conditional Probability',
        text: 'Look for keywords: "given that", "if", "knowing that", "among those who". These signal that you need conditional probability — the denominator changes to the restricted group.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Conditional probability P(A|B) is the probability of A given B has occurred. It restricts the sample space to B. Formula: P(A|B) = P(A∩B) ÷ P(B).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'P(A|B) = P(A∩B)/P(B). The condition restricts the sample space to where B is true.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-formula', prompt: 'State the formula for P(A|B).', answer: 'P(A|B) = P(A ∩ B) ÷ P(B).' },
      { id: 'cue-2', blockId: 'p-def', prompt: 'What does P(A|B) mean in words?', answer: 'The probability that A occurs given that B has already occurred.' },
      { id: 'cue-3', blockId: 'p-restrict', prompt: 'How does conditional probability change the sample space?', answer: 'It restricts the sample space to only those outcomes where the condition (B) is true.' },
      { id: 'cue-4', blockId: 'callout-tip-keywords', prompt: 'What keywords signal conditional probability?', answer: '"Given that", "if", "knowing that", "among those who".' }
    ]
  },
  evidence: []
};
