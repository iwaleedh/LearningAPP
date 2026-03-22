export const note_mathematics_5_3_6 = {
  pdfPath: '/notes/mathematics/kinematics/kinematics.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and derive the Cartesian equation of a projectile\'s trajectory.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is the trajectory of a projectile?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'The trajectory of a projectile is the physical path it follows through space. Assuming constant gravity and no air resistance, this results in a symmetric, negatively quadratic curve called a <b>parabola</b>.' }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'Normally, kinematics describes horizontal and vertical displacement parametrically as functions of time, t (e.g. x(t) and y(t)). A Cartesian equation removes the parameter t to link the vertical displacement y directly to the horizontal displacement x: y = f(x).' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Deriving the Equation of Trajectory', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: { text: 'For a projectile launched from the origin (0,0) with initial speed V at an angle α to the horizontal:' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Start with the parametric equations: <br>x = (V cosα)t <br>y = (V sinα)t − <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>gt²' },
          { text: 'Rearrange the horizontal equation for t: t = <span class="nb-frac"><span class="nb-num">x</span><span class="nb-den">V cosα</span></span>' },
          { text: 'Substitute t into the vertical equation for y.' },
          { text: 'Use trigonometric identities (like <span class="nb-frac"><span class="nb-num">sinα</span><span class="nb-den">cosα</span></span> = tanα) to simplify the result.' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Standard Cartesian Equation',
        text: 'The trajectory can be written as: <br>y = x tanα − <span class="nb-frac"><span class="nb-num">gx²</span><span class="nb-den">2V²cos²α</span></span>'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Examiner Advice',
        text: 'A common way to make these questions difficult is by using different letters, like capital U instead of V, or θ instead of α. Ensure you show enough working-out if it’s a "show that" question. Also, you may need to use sec²α = 1 + tan²α.'
      }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "To derive the Cartesian equation of a projectile's trajectory, the standard algebraic procedure is to eliminate time 't' by making it the subject of the horizontal displacement equation, and then substituting into the vertical displacement expression. Expect to use the identity sec^2(theta) = 1 + tan^2(theta)."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'The trajectory of a projectile is a parabola. The Cartesian equation y = x tanα − gx² / 2V²cos²α is found by eliminating time t from the parametric equations.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'What shape is the trajectory of a projectile under constant gravity?', answer: 'A parabola' },
      { id: 'cue-2', blockId: 'para-2', prompt: 'What does a Cartesian equation of a trajectory represent?', answer: 'It is an equation linking the vertical displacement (y) directly to the horizontal displacement (x), eliminating time (t).' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'How do you eliminate time to find the Cartesian trajectory equation?', answer: 'Rearrange the horizontal displacement equation to make t the subject, then substitute it into the vertical displacement equation.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'Provide the standard Cartesian equation for a projectile launched at speed V and angle α.', answer: 'y = x tanα − gx² / (2V² cos²α)' }
    ]
  },
  evidence: [],
  mentions: []
};