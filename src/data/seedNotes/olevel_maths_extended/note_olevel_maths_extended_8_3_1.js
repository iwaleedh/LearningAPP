export const note_olevel_maths_extended_8_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/combined-conditional-probabilities.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve problems combining conditional probability with tree diagrams and the multiplication rule for dependent events.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Combined Conditional Probabilities', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When events are <strong>dependent</strong>, the outcome of the first affects the probabilities of the second. Tree diagrams handle this naturally — the second set of branches shows the <em>conditional</em> probabilities.' }
    },
    {
      id: 'callout-key-mult',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Multiplication Rule for Dependent Events',
        text: 'P(A and B) = P(A) × P(B | A)<br><br>Multiply the probability of A by the probability of B <em>given</em> A has happened.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Without Replacement',
        text: 'A box has 4 red and 6 green sweets. Two are taken without replacement. Find P(both red).<br><br><strong>Solution:</strong><br>P(R₁) = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">10</span></span><br>P(R₂ | R₁) = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">9</span></span> (one red fewer, one fewer total)<br>P(both red) = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">10</span></span> × <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">9</span></span> = <span class="nb-frac"><span class="nb-num">12</span><span class="nb-den">90</span></span> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">15</span></span>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — "At Least One"',
        text: 'Using the same box (4 red, 6 green, without replacement), find P(at least one red).<br><br><strong>Solution:</strong><br>P(at least one red) = 1 − P(no red) = 1 − P(both green)<br>P(G₁) = <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">10</span></span>, P(G₂|G₁) = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">9</span></span><br>P(both green) = <span class="nb-frac"><span class="nb-num">6</span><span class="nb-den">10</span></span> × <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">9</span></span> = <span class="nb-frac"><span class="nb-num">30</span><span class="nb-den">90</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span><br>P(at least one red) = 1 − <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span> = <strong><span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">3</span></span></strong>'
      }
    },
    {
      id: 'callout-tip-atleast',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — "At Least One"',
        text: 'P(at least one) = 1 − P(none). This shortcut avoids adding up many paths on a tree diagram.'
      }
    },
    {
      id: 'callout-warning-common',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Don\'t use the same denominator for the second pick without replacement. If one item is removed, both the numerator <em>and</em> denominator change.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'For dependent events: P(A and B) = P(A) × P(B|A). Tree diagrams show conditional probabilities on the second branches. For "at least one", use 1 − P(none).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Dependent events: P(A and B) = P(A) × P(B|A). "At least one" = 1 − P(none).',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-mult', prompt: 'State the multiplication rule for dependent events.', answer: 'P(A and B) = P(A) × P(B|A).' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: '4 red and 6 green, no replacement. What is P(both red)?', answer: '(4/10) × (3/9) = 12/90 = 2/15.' },
      { id: 'cue-3', blockId: 'callout-tip-atleast', prompt: 'How do you find P(at least one)?', answer: 'P(at least one) = 1 − P(none).' },
      { id: 'cue-4', blockId: 'callout-warning-common', prompt: 'What common mistake is made with "without replacement" problems?', answer: 'Forgetting to reduce both the numerator and denominator for the second pick.' }
    ]
  },
  evidence: []
};
