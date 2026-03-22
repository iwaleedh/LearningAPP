export const note_mathematics_5_5_1 = {
  pdfPath: '/notes/mathematics/forces-and-newtons-laws/coefficient-of-friction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand friction as a variable force, calculate the normal reaction, and use $F = \\mu R$ to solve limiting equilibrium problems.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Coefficient of Friction ($\\mu$)', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'Friction opposes the relative motion (or tendency of motion) between two rough surfaces. The maximum possible frictional force before sliding occurs depends on the roughness of the surfaces (coefficient of friction, $\\mu$) and the Normal Reaction force ($R$).' }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        html: 'F<sub>max</sub> = &mu; R'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Not moving:</b> Friction is only as large as it needs to be to prevent motion: $F < \\mu R$.' },
          { text: '<b>Limiting equilibrium:</b> On the exact point of slipping. Friction has reached its maximum: $F = \\mu R$.' },
          { text: '<b>In motion:</b> Sliding is occurring. Friction is at its maximum constant value: $F = \\mu R$.' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Calculating the Normal Reaction ($R$)', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'The normal reaction $R$ is NOT always simply $mg$. It changes if there are external vertical pushing/pulling forces, or if the particle is on an inclined plane. Always resolve perpendicular to the surface first to find $R$.' }
    },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not automatically assume $R = mg$. For example, if a force $P$ pulls upwards at an angle $\\theta$ to the horizontal, $R + P \\sin \\theta = mg$, so $R = mg - P \\sin \\theta$. The reaction is reduced, making it easier to pull the object as maximum friction is lower.'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Limiting Equilibrium',
        text: 'A block of mass 10 kg rests on a rough horizontal plane. The coefficient of friction is $\\mu = 0.4$. A horizontal force $P$ is applied. Find the value of $P$ required to just make the block slide.<br><br><b>1. Find R:</b><br>Vertically: $R = 10g = 98$ N.<br><br><b>2. Calculate Max Friction:</b><br>$F_{max} = \\mu R = 0.4 \\times 98 = 39.2$ N.<br><br><b>3. Limiting Equilibrium:</b><br>Since it is on the point of sliding, forward force equals max opposing force.<br>$P = F_{max} = 39.2$ N.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Friction opposes motion. Maximum friction is given by $F_{max} = \\mu R$. For an object on the point of slipping or already sliding, $F = \\mu R$. For stationary objects not on the point of slipping, $F < \\mu R$.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Remember that F = \u03bcR strictly applies only when the object is moving or exactly in limiting equilibrium (about to slip). If the object is resting comfortably, static friction simply matches the opposing force up to that maximum threshold. Read the question carefully to identify if 'limiting' is implied."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: "Maximum friction is F = μR. Use this when sliding or in limiting equilibrium.",
    ready: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-1', prompt: 'State the formula connecting maximum friction, coefficient of friction, and normal reaction.', answer: '$F_{max} = \\mu R$' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What does "limiting equilibrium" mean?', answer: 'The object is exactly on the point of sliding, where frictional force has reached its maximum possible value ($F = \\mu R$).' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'If an object is stationary but not on the point of sliding, what do we know about the friction $F$?', answer: '$F < \\mu R$. The friction is only as large as necessary to prevent motion.' },
      { id: 'cue-4', blockId: 'callout-1', prompt: 'Why is it dangerous to assume $R = mg$?', answer: 'If $R$ has other vertical force components acting on it, or if it is on an incline ($R = mg \\cos \\theta$), the normal reaction will not simply be weight.' }
    ]
  },
  evidence: [],
  mentions: []
};