export const note_mathematics_5_6_0 = {
  pdfPath: '/notes/mathematics/moments/using-moments-with-equilibrium.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the concept of a moment, calculate the resultant moment, and apply moments to solve problems involving bodies in equilibrium.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is a Moment?', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'When an object is modelled as a rigid body, we need to consider its rotation due to forces. The moment of a force is the measure of its ability to cause a body to rotate about a specific point, usually called the pivot.' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The units for moments are newton metres (N m).' },
          { text: 'A force can cause a body to rotate clockwise or anti-clockwise.' },
          { text: 'The moment of a force about a point is calculated by multiplying the magnitude of the force by the perpendicular distance from the line of action of the force to the point.' },
          { text: 'The moment of a force about a point is zero if the line of action of the force goes through the point.' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Calculating Moments',
        text: 'moment = force × perpendicular distance from pivot<br><br>If the force is not acting perpendicular to the given distance, you must use right-angled trigonometry to find the perpendicular distance.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Resultant Moment', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'The resultant moment is the sum of all the moments acting on a body (both positive and negative). The sign of the resultant moment indicates which direction the body will rotate.' }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Define the positive direction (clockwise or anti-clockwise).' },
          { text: 'Add together all the moments in that direction.' },
          { text: 'Subtract all the moments in the opposite direction.' }
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'A force applied to a beam resting on a pivot results in a moment.',
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><!-- Pivot/Fulcrum --><polygon points="200,100 180,140 220,140" fill="#a0aec0" stroke="#4a5568" stroke-width="2"/><text x="200" y="160" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#4a5568">Pivot</text><!-- Beam --><rect x="50" y="90" width="300" height="10" fill="#1e293b" stroke="#4a5568" stroke-width="2"/><!-- Force Arrow --><g transform="translate(320, 90)"><line x1="0" y1="-50" x2="0" y2="-5" stroke="#e53e3e" stroke-width="3" marker-end="url(#arrow-f)"/><text x="10" y="-25" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e53e3e">F</text></g><!-- Distance --><g transform="translate(200, 70)"><line x1="0" y1="0" x2="120" y2="0" stroke="#3182ce" stroke-width="2" stroke-dasharray="4"/><line x1="0" y1="-5" x2="0" y2="5" stroke="#3182ce" stroke-width="2"/><line x1="120" y1="-5" x2="120" y2="5" stroke="#3182ce" stroke-width="2"/><text x="60" y="-10" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#3182ce">d</text></g><!-- Curved Moment Arrow --><path d="M 330 110 A 100 100 0 0 1 200 180" fill="none" stroke="#e53e3e" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow-f)"/><defs><marker id="arrow-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"/></marker></defs></svg>'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Bodies in Equilibrium', level: 2 }
    },
    {
      id: 'p-3',
      type: 'paragraph',
      data: { text: 'For a rigid body to be in equilibrium, it must satisfy two conditions:' }
    },
    {
      id: 'list-3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The resultant force is 0 N.' },
          { text: 'The resultant moment about any point is 0 N m. This means the sum of the clockwise moments equals the sum of the anti-clockwise moments.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Choosing a Pivot',
        text: 'Pick your pivot wisely! If there is an unknown force, choosing the pivot to be on its line of action will eliminate it from the equation, as its moment becomes zero.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A moment is a measure of an ability to rotate a body, equal to the force multiplied by the perpendicular distance to the pivot. In equilibrium, the sum of clockwise and anti-clockwise moments is equal.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When taking moments to solve for equilibrium, choose your pivot point wisely. Taking moments about a point through which an unknown force acts will eliminate that force from your equation entirely, often giving a direct one-step solution for another unknown force."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: 'Moments represent rotational effect (Force × distance). Equilibrium requires zero resultant force and zero resultant moment.',
    cues: [
      { id: 'cue-1', blockId: 'h-1', prompt: 'What is the formula for the moment of a force?' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'When is the moment of a force about a point equal to zero?' },
      { id: 'cue-3', blockId: 'h-3', prompt: 'What are the two conditions for a rigid body to be in equilibrium?' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'How can you cleverly choose a pivot to simplify calculations?' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
