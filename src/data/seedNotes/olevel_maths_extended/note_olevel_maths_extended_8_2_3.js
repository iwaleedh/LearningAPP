export const note_olevel_maths_extended_8_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/probability-tree-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Draw and use probability tree diagrams for two or more successive events, with and without replacement.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Probability Tree Diagrams', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>tree diagram</strong> shows all possible outcomes for a sequence of events. Each branch represents one possible outcome, labelled with its probability. Branches from the same point must sum to 1.' }
    },
    {
      id: 'callout-key-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Tree Diagram Rules',
        text: '• Probabilities on branches from the same node <strong>add to 1</strong><br>• <strong>Multiply</strong> along branches to find P(combined outcome)<br>• <strong>Add</strong> probabilities of separate paths that satisfy the same condition'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — With Replacement',
        text: 'A bag has 3 red and 7 blue balls. A ball is picked, its colour noted, and replaced. A second ball is then picked. Find P(both red).<br><br><strong>Solution:</strong><br>P(R₁) = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">10</span></span>, P(R₂) = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">10</span></span><br>P(both red) = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">10</span></span> × <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">10</span></span> = <span class="nb-frac"><span class="nb-num">9</span><span class="nb-den">100</span></span>'
      }
    },
    {
      id: 'h-wo',
      type: 'heading',
      data: { text: 'Without Replacement', level: 2 }
    },
    {
      id: 'p-wo',
      type: 'paragraph',
      data: { text: 'When the first item is <strong>not replaced</strong>, the probabilities on the second set of branches change because the total has reduced by one.' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Without Replacement',
        text: 'Same bag: 3 red, 7 blue. Ball picked, <strong>not replaced</strong>, then a second picked. Find P(one of each colour).<br><br><strong>Solution:</strong><br>P(R then B) = <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">10</span></span> × <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">9</span></span> = <span class="nb-frac"><span class="nb-num">21</span><span class="nb-den">90</span></span><br>P(B then R) = <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">10</span></span> × <span class="nb-frac"><span class="nb-num">3</span><span class="nb-den">9</span></span> = <span class="nb-frac"><span class="nb-num">21</span><span class="nb-den">90</span></span><br><br>P(one of each) = <span class="nb-frac"><span class="nb-num">21</span><span class="nb-den">90</span></span> + <span class="nb-frac"><span class="nb-num">21</span><span class="nb-den">90</span></span> = <span class="nb-frac"><span class="nb-num">42</span><span class="nb-den">90</span></span> = <span class="nb-frac"><span class="nb-num">7</span><span class="nb-den">15</span></span>'
      }
    },
    {
      id: 'callout-tip-check',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Check Your Tree',
        text: 'All the end probabilities on a tree diagram must add to 1. If they don\'t, you\'ve made an error somewhere.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Tree diagrams show sequential events. Multiply along branches, add between paths. Without replacement changes the denominator on the second pick. All end probabilities must sum to 1.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Multiply along branches, add between paths. Without replacement reduces the denominator.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-rules', prompt: 'What must the probabilities on branches from the same node do?', answer: 'Add to 1.' },
      { id: 'cue-2', blockId: 'callout-key-rules', prompt: 'How do you find the probability of a specific path on a tree?', answer: 'Multiply along the branches.' },
      { id: 'cue-3', blockId: 'p-wo', prompt: 'What changes when picking without replacement?', answer: 'The total number of items decreases, changing the second set of probabilities.' },
      { id: 'cue-4', blockId: 'callout-worked-2', prompt: 'How do you find P(one of each colour) from a tree diagram?', answer: 'Add the probabilities of all paths giving one of each (RB + BR).' },
      { id: 'cue-5', blockId: 'callout-tip-check', prompt: 'How can you check a tree diagram is correct?', answer: 'All end probabilities must sum to 1.' }
    ]
  },
  evidence: []
};
