export const note_mathematics_5_2_1 = {
  pdfPath: '/notes/mathematics/kinematics/horizontal-and-vertical-components.pdf',
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand horizontal and vertical components of initial velocity and acceleration for a projectile.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Projectile Motion Overview', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'A projectile is a particle moving freely, under gravity, in a two-dimensional plane. Sports like basketball and archery involve projectile motion. In our modelling, we assume there is no air resistance and no horizontal forces. The object moves freely under gravity, any spin is ignored, and its motion is symmetrical along a parabolic path.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Acceleration of a Projectile', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'As it is 2D motion, there are horizontal (a<sub class="nb-sub">x</sub>) and vertical (a<sub class="nb-sub">y</sub>) components of acceleration:' }
    },
    {
      id: 'list-accel',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'There is no horizontal acceleration (a<sub class="nb-sub">x</sub> = 0) because no forces act horizontally. Horizontal speed is constant.' },
          { text: 'There is a constant vertical acceleration due to gravity (a<sub class="nb-sub">y</sub> = &plusmn;g).' }
        ]
      }
    },
    {
      id: 'eq-accel',
      type: 'equation',
      data: {
        html: 'a = 0i &minus; gj',
        caption: 'Acceleration as a 2D vector'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Initial Velocity', level: 2 }
    },
    {
      id: 'p-3',
      type: 'paragraph',
      data: { text: 'The initial velocity also has horizontal (u<sub class="nb-sub">x</sub>) and vertical (u<sub class="nb-sub">y</sub>) components. If a projectile is launched with an initial speed U m s<sup class="nb-sup">&minus;1</sup> at an angle &theta; to the horizontal, these components are:' }
    },
    {
      id: 'callout-components',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Velocity Components',
        text: 'Horizontal component: u<sub class="nb-sub">x</sub> = U cos&theta;<br>Vertical component: u<sub class="nb-sub">y</sub> = U sin&theta;'
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding Initial Velocity',
        text: 'A projectile is launched at an angle of 25&deg; to the horizontal with speed 5 m s<sup class="nb-sup">&minus;1</sup>. Find the initial velocity, u m s<sup class="nb-sup">&minus;1</sup>, of the projectile.\n\nHorizontal component: u<sub class="nb-sub">x</sub> = 5 cos 25&deg; &approx; 4.53\nVertical component: u<sub class="nb-sub">y</sub> = 5 sin 25&deg; &approx; 2.11\nSo, u = 4.53i + 2.11j'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'For projectiles, horizontal acceleration is zero (constant horizontal velocity) and vertical acceleration is &plusmn;g. The initial velocity components are found using U cos&theta; and U sin&theta;.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "A very common mistake is mixing up horizontal and vertical components. Remember that horizontal velocity remains constant (acceleration is 0), while vertical velocity changes due to gravity (acceleration is -g). Write out your horizontal and vertical suvat variables separately."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What modelling assumptions are made for a projectile?' },
      { id: 'cue-2', blockId: 'list-accel', prompt: 'What are the horizontal and vertical components of acceleration for a projectile?' },
      { id: 'cue-3', blockId: 'callout-components', prompt: 'How do you calculate the horizontal and vertical components of initial velocity?' },
      { id: 'cue-4', blockId: 'list-accel', prompt: 'Why is there no horizontal acceleration for a projectile?' }
    ],
    summaryText: 'Projectile motion assumes no air resistance, resulting in zero horizontal acceleration and constant vertical acceleration of &plusmn;g. Initial velocity is resolved with U cos&theta; and U sin&theta;.',
    ready: true
  },
  evidence: [],
  mentions: []
};