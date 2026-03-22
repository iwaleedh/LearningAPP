export const note_mathematics_5_5_0 = {
  pdfPath: '/notes/mathematics/forces-and-newtons-laws/equilibrium.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve problems involving coplanar forces in equilibrium (in one and two dimensions).' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Equilibrium Overview', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'A particle is in equilibrium if it is at rest, or moving with constant velocity. In both cases, its acceleration is zero ($a = 0$). By Newton\'s Second Law, this means the resultant (net) force is also zero ($F_{net} = 0$).' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>1D Equilibrium:</b> Total force forwards = Total force backwards.' },
          { text: '<b>2D Equilibrium:</b> The forces resolved in any two perpendicular directions must independently equal zero. Usually, resolving horizontally and vertically, or parallel and perpendicular to an inclined plane.' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Resolving in 2D', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'When dealing with multiple forces acting at various angles from a particle, we set up two independent simultaneous equations:' }
    },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Principle for 2D Equilibrium',
        text: '1. Resolve all forces horizontally: sum of rightward components = sum of leftward components ($\\Sigma F_x = 0$).<br>2. Resolve all forces vertically: sum of upward components = sum of downward components ($\\Sigma F_y = 0$).'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Three Forces',
        text: 'A particle is in equilibrium under three forces: $T$ acting left, $P$ acting vertically up, and $10$ N acting at an angle of 30° below the horizontal to the right.<br><br><b>1. Resolve Horizontally:</b><br>Forces Left = Forces Right<br>$T = 10 \\cos 30$<br>$T = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$ N<br><br><b>2. Resolve Vertically:</b><br>Forces Up = Forces Down<br>$P = 10 \\sin 30$<br>$P = 10 \\times 0.5 = 5$ N'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Equilibrium means $a=0$ and resultant force is zero. Set up two equations by resolving in two perpendicular directions ($\\Sigma F_x = 0$ and $\\Sigma F_y = 0$).' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "If a particle is maintained in equilibrium by three non-parallel forces, resolving horizontally and vertically is reliable, but do keep an eye out for an opportunity to use Lami's theorem or construct a closed force triangle. These can offer a much faster route to the solution."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: "Equilibrium means resultant force = 0. Forces balance in all perpendicular directions.",
    ready: true,
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What does equilibrium mean physically for a particle?', answer: 'The particle is either at rest or moving at a constant velocity, meaning its acceleration is zero.' },
      { id: 'cue-2', blockId: 'p-1', prompt: 'What is the net force acting on a particle in equilibrium?', answer: 'The net force is zero.' },
      { id: 'cue-3', blockId: 'callout-1', prompt: 'How do you solve 2D equilibrium problems?', answer: 'Resolve all forces into two perpendicular directions (e.g., horizontally and vertically) and equate opposing directions: ΣFx = 0 and ΣFy = 0.' },
      { id: 'cue-4', blockId: 'callout-we1', prompt: 'If a 10 N force acts at 30° to the horizontal, what is its vertical component?', answer: '10 sin 30°.' }
    ]
  },
  evidence: [],
  mentions: []
};