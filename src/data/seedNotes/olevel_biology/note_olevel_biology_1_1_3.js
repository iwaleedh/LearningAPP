export const note_olevel_biology_1_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/1 Characteristics And Classification Of Living Organisms/1-1-5-features-of-organisms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand what a dichotomous key is, how to construct and use one, and apply a dichotomous key to identify organisms from observable features.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is a Dichotomous Key?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Dichotomous Key',
        text: 'A <strong>dichotomous key</strong> is a tool used to identify organisms based on their observable features. It works by presenting a series of questions or statements with exactly <strong>two choices</strong> (YES/NO or A/B). Each choice leads to either another question or an identification. "Dichotomous" means "divided into two".'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'How to Construct a Dichotomous Key', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Examine all the organisms to be identified and list their observable features.' },
          { text: 'Choose a feature that divides the organisms into exactly TWO groups.' },
          { text: 'Write question 1 with two options (e.g. "Has wings" / "Has no wings").' },
          { text: 'For each group, choose another feature that further divides those organisms into two.' },
          { text: 'Continue until each organism is uniquely identified.' },
          { text: 'Number each step/question clearly; each answer leads to either the next question number or an organism name.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Rules for a Good Dichotomous Key',
        text: 'Features used must be:<br/><strong>1. Observable</strong> — you can see or measure them directly (e.g. "has 6 legs", not "is aggressive")<br/><strong>2. Clear and objective</strong> — not subjective (e.g. "large" is too vague; "longer than 10 mm" is precise)<br/><strong>3. Contrasting</strong> — the two options must be mutually exclusive<br/><strong>4. Consistent</strong> — the feature must be present in all individuals of that species'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Worked Example: Identifying Four Insects', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Use the dichotomous key below to identify four insects: <strong>Bee</strong>, <strong>Ant</strong>, <strong>Dragonfly</strong>, and <strong>Beetle</strong>.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Dichotomous Key for Four Insects',
        text: '<strong>Step 1:</strong> Does the organism have wings?<br/>— YES → Go to Step 2<br/>— NO → <strong>Ant</strong><br/><br/><strong>Step 2:</strong> Does the organism have two pairs of wings?<br/>— YES → Go to Step 3<br/>— NO (one pair of wings, hard wing cases) → <strong>Beetle</strong><br/><br/><strong>Step 3:</strong> Does the organism have a striped abdomen (yellow and black bands)?<br/>— YES → <strong>Bee</strong><br/>— NO (long, thin abdomen; wings held horizontally) → <strong>Dragonfly</strong><br/><br/><em>Note: Beetles have hardened front wings (elytra) covering one functional pair. Bees have a hairy body and yellow/black banding. Dragonflies have two pairs of transparent wings held out horizontally.</em>'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Dichotomous key structure — branching diagram for four insects',
        svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="560" height="320" fill="#f0fdf4" rx="12"/>
  <text x="280" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">Dichotomous Key — Four Insects</text>
  <!-- Step 1 box -->
  <rect x="180" y="44" width="200" height="38" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="280" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Step 1: Has wings?</text>
  <text x="280" y="74" text-anchor="middle" font-size="10" fill="#166534">YES or NO</text>
  <!-- NO branch to Ant -->
  <line x1="180" y1="63" x2="80" y2="112" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="118" y="96" font-size="10" fill="#dc2626">NO</text>
  <rect x="20" y="112" width="120" height="32" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="80" y="132" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">ANT</text>
  <!-- YES branch to Step 2 -->
  <line x1="380" y1="63" x2="460" y2="112" stroke="#16a34a" stroke-width="1.5"/>
  <text x="432" y="96" font-size="10" fill="#16a34a">YES</text>
  <!-- Step 2 box -->
  <rect x="360" y="112" width="190" height="38" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="455" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Step 2: Two pairs</text>
  <text x="455" y="140" text-anchor="middle" font-size="11" fill="#166534">of wings?</text>
  <!-- NO branch (1 pair) to Beetle -->
  <line x1="360" y1="131" x2="280" y2="192" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="302" y="168" font-size="10" fill="#dc2626">NO</text>
  <rect x="210" y="192" width="130" height="32" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="275" y="212" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">BEETLE</text>
  <!-- YES branch to Step 3 -->
  <line x1="550" y1="131" x2="550" y2="192" stroke="#16a34a" stroke-width="1.5"/>
  <text x="554" y="168" font-size="10" fill="#16a34a">YES</text>
  <!-- Step 3 box -->
  <rect x="390" y="192" width="190" height="44" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="485" y="208" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Step 3: Striped</text>
  <text x="485" y="222" text-anchor="middle" font-size="11" fill="#166534">yellow/black abdomen?</text>
  <text x="485" y="234" text-anchor="middle" font-size="10" fill="#166534">YES / NO</text>
  <!-- YES to Bee -->
  <line x1="390" y1="214" x2="320" y2="268" stroke="#16a34a" stroke-width="1.5"/>
  <text x="342" y="250" font-size="10" fill="#16a34a">YES</text>
  <rect x="250" y="268" width="120" height="32" rx="8" fill="#d1fae5" stroke="#16a34a" stroke-width="2"/>
  <text x="310" y="288" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">BEE</text>
  <!-- NO to Dragonfly -->
  <line x1="580" y1="214" x2="540" y2="268" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="566" y="250" font-size="10" fill="#dc2626">NO</text>
  <rect x="400" y="268" width="140" height="32" rx="8" fill="#d1fae5" stroke="#16a34a" stroke-width="2"/>
  <text x="470" y="288" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">DRAGONFLY</text>
</svg>`
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Using a Numbered Key Format', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Dichotomous keys can also be presented as a numbered list (rather than a branching diagram). Each number has two lettered options; each option gives either another number to go to, or a name:'
      }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'a) Has wings → go to 2 <br/>b) Has no wings → <strong>Ant</strong>' },
          { text: 'a) Has two pairs of wings → go to 3 <br/>b) Has hard wing cases (elytra) → <strong>Beetle</strong>' },
          { text: 'a) Has striped yellow and black abdomen → <strong>Bee</strong> <br/>b) Has long thin transparent wings held horizontally → <strong>Dragonfly</strong>' }
        ]
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Never use <strong>subjective features</strong> such as "is large", "is beautiful", or "looks dangerous". Features must be precisely observable and measurable. Also, do not use features that can change with age or season (e.g. "is green" for a deciduous leaf).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'A dichotomous key identifies organisms using a series of paired choices based on observable features. Each question splits organisms into two groups until each is identified. Features used must be observable, objective, and contrasting — not subjective or variable.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'A dichotomous key uses paired YES/NO questions based on observable features to identify organisms. Features must be objective and contrasting.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Define a dichotomous key.',
        answer: 'A dichotomous key is a tool to identify organisms using a series of questions with exactly two choices (YES/NO), based on observable features.'
      },
      {
        id: 'cue-2',
        blockId: 'call-2',
        prompt: 'State TWO properties that features used in a dichotomous key must have.',
        answer: 'Features must be observable (can be directly seen/measured) and objective (not subjective or vague), e.g. "has 6 legs" not "is small".'
      },
      {
        id: 'cue-3',
        blockId: 'call-3',
        prompt: 'Using a dichotomous key, an organism has wings and two pairs of wings but no striped abdomen. What is it?',
        answer: 'Dragonfly.'
      },
      {
        id: 'cue-4',
        blockId: 'call-4',
        prompt: 'Give ONE example of a feature that would NOT be suitable for use in a dichotomous key, and explain why.',
        answer: 'Example: "is large" — this is subjective and not precisely measurable. A better feature would be "body length greater than 20 mm".'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_1_1_3;
