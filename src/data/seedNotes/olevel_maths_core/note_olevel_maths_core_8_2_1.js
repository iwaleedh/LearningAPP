export const note_olevel_maths_core_8_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Probability/probability-tree-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Draw and use tree diagrams for two or more successive events. Multiply probabilities along branches to find combined outcomes. Add branch probabilities for "or" situations. Distinguish between independent events (with replacement) and dependent events (without replacement).',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What is a Tree Diagram?', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'A <b>tree diagram</b> is a systematic way of listing outcomes of two or more events that happen in sequence. Each <b>branch</b> represents one possible outcome. Probabilities are written <b>on the branches</b>, and each set of branches at any point must add up to 1.',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Two Rules for Tree Diagrams',
        text: '<b>Multiply along branches:</b> P(A, then B) = P(A) × P(B along that branch)<br><b>Add across branches:</b> For "or" events, add the probabilities of the relevant end branches.',
      },
    },
    {
      id: 'h-replacement',
      type: 'heading',
      data: { text: 'With and Without Replacement', level: 2 },
    },
    {
      id: 'p-replacement',
      type: 'paragraph',
      data: {
        text: 'Whether an item is put back changes subsequent probabilities:<br>• <b>With replacement</b> — the item is returned. Probabilities on the second set of branches are the same as the first. Events are <b>independent</b>.<br>• <b>Without replacement</b> — the item is kept. Probabilities on the second set of branches change because there are fewer items. Events are <b>dependent</b>.',
      },
    },
    {
      id: 'svg-tree',
      type: 'svg',
      data: {
        caption: 'Tree diagram: choosing 2 balls from a bag of 3 red and 2 blue (without replacement)',
        svg: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" font-size="13">
  <!-- Title -->
  <text x="240" y="18" text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="13">Bag: 3 Red, 2 Blue — Without Replacement</text>

  <!-- Starting node -->
  <circle cx="60" cy="160" r="8" fill="#3b82f6"/>

  <!-- 1st pick: Red branch -->
  <line x1="68" y1="155" x2="172" y2="88" stroke="#ef4444" stroke-width="2"/>
  <text x="105" y="110" fill="#ef4444" font-weight="bold">3/5</text>
  <circle cx="180" cy="84" r="8" fill="#ef4444"/>
  <text x="195" y="89" fill="#ef4444" font-weight="bold">Red</text>

  <!-- 1st pick: Blue branch -->
  <line x1="68" y1="165" x2="172" y2="232" stroke="#3b82f6" stroke-width="2"/>
  <text x="105" y="215" fill="#3b82f6" font-weight="bold">2/5</text>
  <circle cx="180" cy="236" r="8" fill="#3b82f6"/>
  <text x="195" y="241" fill="#3b82f6" font-weight="bold">Blue</text>

  <!-- 2nd pick given 1st=Red: Red (2/4) -->
  <line x1="188" y1="80" x2="292" y2="42" stroke="#ef4444" stroke-width="2"/>
  <text x="225" y="52" fill="#ef4444" font-weight="bold">2/4</text>
  <circle cx="300" cy="38" r="8" fill="#ef4444"/>
  <text x="315" y="43" fill="#374151">Red, Red</text>
  <!-- Probability -->
  <text x="395" y="43" fill="#374151" font-size="12">= 3/5 × 2/4 = <tspan font-weight="bold" fill="#3b82f6">6/20</tspan></text>

  <!-- 2nd pick given 1st=Red: Blue (2/4) -->
  <line x1="188" y1="88" x2="292" y2="126" stroke="#3b82f6" stroke-width="2"/>
  <text x="225" y="100" fill="#3b82f6" font-weight="bold">2/4</text>
  <circle cx="300" cy="130" r="8" fill="#3b82f6"/>
  <text x="315" y="135" fill="#374151">Red, Blue</text>
  <text x="395" y="135" fill="#374151" font-size="12">= 3/5 × 2/4 = <tspan font-weight="bold" fill="#3b82f6">6/20</tspan></text>

  <!-- 2nd pick given 1st=Blue: Red (3/4) -->
  <line x1="188" y1="232" x2="292" y2="194" stroke="#ef4444" stroke-width="2"/>
  <text x="225" y="204" fill="#ef4444" font-weight="bold">3/4</text>
  <circle cx="300" cy="190" r="8" fill="#ef4444"/>
  <text x="315" y="195" fill="#374151">Blue, Red</text>
  <text x="395" y="195" fill="#374151" font-size="12">= 2/5 × 3/4 = <tspan font-weight="bold" fill="#3b82f6">6/20</tspan></text>

  <!-- 2nd pick given 1st=Blue: Blue (1/4) -->
  <line x1="188" y1="240" x2="292" y2="278" stroke="#3b82f6" stroke-width="2"/>
  <text x="225" y="274" fill="#3b82f6" font-weight="bold">1/4</text>
  <circle cx="300" cy="282" r="8" fill="#3b82f6"/>
  <text x="315" y="287" fill="#374151">Blue, Blue</text>
  <text x="395" y="287" fill="#374151" font-size="12">= 2/5 × 1/4 = <tspan font-weight="bold" fill="#3b82f6">2/20</tspan></text>

  <!-- Stage labels -->
  <text x="60"  y="310" text-anchor="middle" fill="#9ca3af" font-size="11">Start</text>
  <text x="180" y="310" text-anchor="middle" fill="#9ca3af" font-size="11">1st pick</text>
  <text x="300" y="310" text-anchor="middle" fill="#9ca3af" font-size="11">2nd pick</text>
</svg>`,
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Without Replacement',
        text: 'A bag contains 3 red and 2 blue balls. Two balls are taken out without replacement. Find:<br>(a) P(both red) &nbsp; (b) P(one of each colour)<br><br>(a) P(Red then Red) = 3/5 × 2/4 = 6/20 = <b>3/10</b><br><br>(b) P(one of each) = P(Red then Blue) + P(Blue then Red)<br>= (3/5 × 2/4) + (2/5 × 3/4)<br>= 6/20 + 6/20 = 12/20 = <b>3/5</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — With Replacement',
        text: 'A bag contains 3 red and 2 blue balls. A ball is chosen and replaced, then another is chosen. Find P(both red).<br><br>Since the ball is replaced, probabilities stay the same:<br>P(Red) = 3/5 on both picks<br><br>P(both red) = 3/5 × 3/5 = 9/25',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Two Coins',
        text: 'Two fair coins are tossed. Draw a tree diagram and find P(at least one head).<br><br>First coin: P(H) = 1/2, P(T) = 1/2<br>Second coin: P(H) = 1/2, P(T) = 1/2 (independent)<br><br>Outcomes and probabilities:<br>HH: 1/2 × 1/2 = 1/4<br>HT: 1/2 × 1/2 = 1/4<br>TH: 1/2 × 1/2 = 1/4<br>TT: 1/2 × 1/2 = 1/4<br><br>P(at least one H) = P(HH) + P(HT) + P(TH) = 1/4 + 1/4 + 1/4 = <b>3/4</b><br>OR: P(at least one H) = 1 − P(TT) = 1 − 1/4 = <b>3/4</b> ✓',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Check: probabilities on each set of branches must sum to 1.<br>• Check: all end-branch probabilities must sum to 1.<br>• "At least one" is often quickest using the complement: 1 − P(none).',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Without Replacement — Adjust Denominators',
        text: 'When drawing without replacement, the denominator decreases by 1 for the second draw. Also adjust the numerator if the same colour is drawn again. Always re-read the question carefully.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>Multiply along branches; add across branches.</b> With replacement → independent (probabilities unchanged). Without replacement → dependent (probabilities change). Check all branch sets sum to 1. "At least one" = 1 − P(none).',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Tree diagrams: multiply along branches for AND; add across branches for OR. With replacement = independent; without replacement = dependent.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key1',
        prompt: 'What are the two key rules for using a tree diagram?',
        answer: 'Multiply along branches to find P(A and B). Add across branches for P(A or B).',
      },
      {
        id: 'cue-2',
        blockId: 'h-replacement',
        prompt: 'How does "without replacement" change the second set of branch probabilities?',
        answer: 'The total number of items decreases by 1, so the denominator decreases by 1. The numerator also changes if the same colour is picked again.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we1',
        prompt: 'A bag has 3 red and 2 blue balls (no replacement). What is P(both red)?',
        answer: 'P(Red) × P(Red | 1 red gone) = 3/5 × 2/4 = 6/20 = 3/10.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we3',
        prompt: 'Two fair coins are tossed. What is the quickest way to find P(at least one head)?',
        answer: 'Use complement: P(at least one H) = 1 − P(TT) = 1 − 1/4 = 3/4.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-tip',
        prompt: 'How do you check your tree diagram is correct?',
        answer: 'Each set of branches at any node must sum to 1. All end-branch probabilities must also sum to 1.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
