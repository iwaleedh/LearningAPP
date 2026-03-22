export const note_mathematics_5_3_5 = {
  pdfPath: '/notes/mathematics/kinematics/kinematics.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Derive key projectile formulae for time of flight, horizontal range, and maximum height using suvat and vector components.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Deriving Projectile Formulae', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'A particle is projected with initial speed U m s⁻¹ at an angle of θ to the horizontal. By resolving the initial velocity into vertical and horizontal components (U_x = U cosθ, U_y = U sinθ) and applying the 1D suvat equations separately, we can derive standard formulae. All derivations assume the launching and landing sites are on horizontal ground at the same vertical level, and that the only force acting is gravity.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Formulae to Derive', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'You should be able to derive these four standard results:' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Time of flight:</b> <span class="nb-frac"><span class="nb-num">2U sinθ</span><span class="nb-den">g</span></span>' },
          { text: '<b>Time to reach maximum height:</b> <span class="nb-frac"><span class="nb-num">U sinθ</span><span class="nb-den">g</span></span>' },
          { text: '<b>Maximum height:</b> <span class="nb-frac"><span class="nb-num">U² sin²θ</span><span class="nb-den">2g</span></span>' },
          { text: '<b>Horizontal range:</b> <span class="nb-frac"><span class="nb-num">U² sin(2θ)</span><span class="nb-den">g</span></span>' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Approach to Derivation',
        text: 'Do not just memorise the final formulae. Memorise the method! To find maximum height, set vertical velocity v_y = 0. To find time of flight, set vertical displacement s_y = 0.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Exam Tips for Projectiles', level: 2 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Always draw a sketch showing the initial speed, angle of launch, and defining which directions are positive.' },
          { text: 'Take care with algebra — this is where most mistakes occur in deriving formulae.' },
          { text: 'Double angle identities from Pure Maths (e.g. sin(2θ) = 2 sinθ cosθ) are often needed for the horizontal range.' }
        ]
      }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When asked to derive standard projectile formulae like time of flight or maximum horizontal range, you must show all intermediate algebraic steps clearly using the horizontal and vertical suvat components. Stating the final result without full working will score zero marks."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Projectile formulae for time of flight, maximum height, and range can be derived by resolving V and using 1D suvat equations. E.g. Set v_y = 0 for max height.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'What are the horizontal and vertical components of an initial velocity U at angle θ?', answer: 'Horizontal: U cosθ, Vertical: U sinθ' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'What condition should you set in the suvat equations to find the maximum height of a projectile?', answer: 'Set the vertical velocity v_y = 0' },
      { id: 'cue-3', blockId: 'call-1', prompt: 'What condition should you set in the suvat equations to find the total time of flight over horizontal ground?', answer: 'Set the vertical displacement s_y = 0' },
      { id: 'cue-4', blockId: 'list-2', prompt: 'Which trigonometric identity is often used when deriving the formula for horizontal range?', answer: 'sin(2θ) = 2 sinθ cosθ' }
    ]
  },
  evidence: [],
  mentions: []
};