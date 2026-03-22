export const note_mathematics_5_3_3 = {
  pdfPath: '/notes/mathematics/kinematics/kinematics.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Learn how to use calculus to solve kinematics problems in 1D when acceleration is not constant.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Calculus in kinematics', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'When acceleration is not constant, the suvat equations cannot be used. Instead, displacement (s), velocity (v), and acceleration (a) are modeled as functions of time (t), and we use calculus to move between them.' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Velocity (v)</b> is the rate of change of displacement with respect to time: v = <span class="nb-frac"><span class="nb-num">ds</span><span class="nb-den">dt</span></span>' },
          { text: '<b>Acceleration (a)</b> is the rate of change of velocity with respect to time: a = <span class="nb-frac"><span class="nb-num">dv</span><span class="nb-den">dt</span></span> = <span class="nb-frac"><span class="nb-num">d²s</span><span class="nb-den">dt²</span></span>' }
        ]
      }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'To go the other way, we integrate:' }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'v = ∫ a dt' },
          { text: 's = ∫ v dt' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Constant of Integration',
        text: 'Every time you integrate, remember to include the constant of integration, +c. You must find it using initial conditions given in the question.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Finding constants and using definite integration', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: { text: 'Look for common phrases in the text to help find constants:' }
    },
    {
      id: 'list-3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '"... starting from rest ...": means v = 0 when t = 0' },
          { text: '"... initially ...": means t = 0' }
        ]
      }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: { text: 'You can also use definite integration:' }
    },
    {
      id: 'list-4',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Integrating acceleration between two values of time gives the <b>change in velocity</b>.' },
          { text: 'Integrating velocity between two values of time gives the <b>displacement</b> between those times.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Distance vs Displacement',
        text: 'Definite integration of velocity gives displacement! To find total distance travelled, you must find roots of the velocity equation (when v = 0) and integrate regions above and below the x-axis separately.'
      }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Check whether acceleration is constant. If it depends on time 't', you MUST use calculus (integration or differentiation) rather than suvat equations. Using suvat for variable acceleration is a fundamental error and scores zero marks."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'In 1D variable acceleration, differentiate displacement to get velocity, and velocity to get acceleration. Integrate a to get v, and v to get s. Remember +c!',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'How do you find velocity from displacement using calculus?', answer: 'Differentiate displacement with respect to time: v = ds/dt' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'How do you find velocity from acceleration?', answer: 'Integrate acceleration with respect to time: v = ∫ a dt' },
      { id: 'cue-3', blockId: 'call-1', prompt: 'What is essential to include every time you perform indefinite integration in kinematics?', answer: 'The constant of integration, +c.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'Does definite integration of velocity give distance or displacement?', answer: 'It gives displacement. For distance, you need to calculate areas above and below the axis separately.' }
    ]
  },
  evidence: [],
  mentions: []
};