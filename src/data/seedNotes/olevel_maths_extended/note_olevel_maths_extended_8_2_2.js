export const note_olevel_maths_extended_8_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/combined-probabilities.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the addition and multiplication rules for combined events involving "and" and "or".' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Combined Probabilities', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When two or more events are combined, we use <strong>AND</strong> (both happen) and <strong>OR</strong> (at least one happens) rules to find probabilities.' }
    },
    {
      id: 'callout-key-and',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The AND Rule (Multiplication)',
        text: 'For <strong>independent</strong> events A and B:<br><br>P(A <strong>and</strong> B) = P(A) × P(B)<br><br>"And" means <strong>multiply</strong>.'
      }
    },
    {
      id: 'callout-key-or',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The OR Rule (Addition)',
        text: 'For <strong>mutually exclusive</strong> events A and B:<br><br>P(A <strong>or</strong> B) = P(A) + P(B)<br><br>"Or" means <strong>add</strong>.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — AND',
        text: 'A coin is tossed and a die is rolled. Find P(Head and 6).<br><br><strong>Solution:</strong><br>P(H) = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>, P(6) = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span><br>P(H and 6) = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> × <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">12</span></span>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — OR',
        text: 'A die is rolled. Find P(1 or 6).<br><br><strong>Solution:</strong><br>1 and 6 are mutually exclusive.<br>P(1 or 6) = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span> + <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span> = <span class="nb-frac"><span class="nb-num">2</span><span class="nb-den">6</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span>'
      }
    },
    {
      id: 'callout-warning-me',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Watch Out',
        text: 'The OR rule P(A or B) = P(A) + P(B) only works when A and B are <strong>mutually exclusive</strong> (they cannot happen at the same time). If they can, use: P(A or B) = P(A) + P(B) − P(A and B).'
      }
    },
    {
      id: 'callout-tip-keywords',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Keyword Reminder',
        text: '"And" &rarr; multiply × <br>"Or" &rarr; add +<br>This is the single most important rule in probability questions.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'AND means multiply probabilities; OR means add them (for mutually exclusive events). For non-mutually exclusive events, subtract the overlap: P(A or B) = P(A) + P(B) − P(A and B).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '"And" means multiply, "or" means add. These rules are the foundation of all combined probability.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-and', prompt: 'State the AND rule for independent events.', answer: 'P(A and B) = P(A) × P(B).' },
      { id: 'cue-2', blockId: 'callout-key-or', prompt: 'State the OR rule for mutually exclusive events.', answer: 'P(A or B) = P(A) + P(B).' },
      { id: 'cue-3', blockId: 'callout-warning-me', prompt: 'What if the events in an OR are NOT mutually exclusive?', answer: 'P(A or B) = P(A) + P(B) − P(A and B).' },
      { id: 'cue-4', blockId: 'callout-tip-keywords', prompt: 'What keywords tell you to multiply vs add?', answer: '"And" &rarr; multiply; "Or" &rarr; add.' }
    ]
  },
  evidence: []
};
