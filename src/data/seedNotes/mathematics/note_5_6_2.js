export const note_mathematics_5_6_2 = {
  pdfPath: '/notes/mathematics/moments/ladders-and-hinges.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Model and solve problems involving ladders leaning against walls and rods connected by hinges in equilibrium.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Modelling a Ladder', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'We model a ladder as a rod. Generally, it will rest on the ground and lean against a wall, peg, or other surface. This creates multiple reaction and friction forces.' }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'A ladder in equilibrium leaning against a rough wall and resting on a rough floor, showing vertical/horizontal reaction and friction forces.',
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Floor and Wall -->
  <line x1="50" y1="250" x2="350" y2="250" stroke="#4a5568" stroke-width="4"/>
  <line x1="300" y1="50" x2="300" y2="250" stroke="#4a5568" stroke-width="4"/>
  
  <!-- Ladder -->
  <line x1="100" y1="250" x2="300" y2="90" stroke="#ecc94b" stroke-width="6"/>
  
  <!-- Weight (W) -->
  <g transform="translate(200, 170)">
    <line x1="0" y1="0" x2="0" y2="60" stroke="#e53e3e" stroke-width="3" marker-end="url(#arrow)"/>
    <text x="10" y="55" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e53e3e">W</text>
  </g>
  
  <!-- Ground Reaction (Rf) -->
  <g transform="translate(100, 250)">
    <line x1="0" y1="0" x2="0" y2="-60" stroke="#3182ce" stroke-width="3" marker-end="url(#arrow)"/>
    <text x="-25" y="-50" font-family="sans-serif" font-size="16" font-weight="bold" fill="#3182ce">Rf</text>
  </g>
  
  <!-- Ground Friction (Ff) -->
  <g transform="translate(100, 250)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#dd6b20" stroke-width="3" marker-end="url(#arrow)"/>
    <text x="65" y="15" font-family="sans-serif" font-size="16" font-weight="bold" fill="#dd6b20">Ff</text>
  </g>

  <!-- Wall Reaction (Rw) -->
  <g transform="translate(300, 90)">
    <line x1="0" y1="0" x2="-60" y2="0" stroke="#3182ce" stroke-width="3" marker-end="url(#arrow)"/>
    <text x="-80" y="-10" font-family="sans-serif" font-size="16" font-weight="bold" fill="#3182ce">Rw</text>
  </g>
  
  <!-- Wall Friction (Fw) -->
  <g transform="translate(300, 90)">
    <line x1="0" y1="0" x2="0" y2="-60" stroke="#dd6b20" stroke-width="3" marker-end="url(#arrow)"/>
    <text x="10" y="-50" font-family="sans-serif" font-size="16" font-weight="bold" fill="#dd6b20">Fw</text>
  </g>
  
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke" />
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'There is a vertical reaction force at the bottom of the ladder (floor).' },
          { text: 'There is a perpendicular reaction force between the ladder and the surface it leans on (horizontal if the wall is vertical).' },
          { text: 'Frictional forces keep it in equilibrium. The floor friction acts horizontally towards the wall. Wall friction acts vertically upwards to prevent slipping down.' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Solving Ladder Problems', level: 2 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Include the weight of the ladder (at midpoint if uniform) and any extra weights like a person standing on it.' },
          { text: 'Form two equations using horizontal forces and vertical forces.' },
          { text: 'Use F ≤ µR if in equilibrium, or F = µR if on the point of slipping (limiting equilibrium).' },
          { text: 'Form moment equations. The best pivots are usually the points of contact with the floor or wall to eliminate unknowns.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Hinges', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'A hinge fixed to a surface allows rotation but not translation. There will be a resultant force acting from the hinge on the rod, which is not necessarily perpendicular. It will act at an angle.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Hinge Strategy',
        text: 'Taking moments about the hinge is a very effective way to avoid dealing with the unknown hinge force initially.<br><br>To find the hinge force:<br>1. Resolving the remaining horizontal and vertical forces will give the horizontal and vertical components of the hinge force.<br>2. Use Pythagoras to find the magnitude.<br>3. Use right-angled trigonometry to find the direction.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Ladders are modelled with vertical/horizontal reaction and friction forces. Hinges introduce tilted reaction forces. Use horizontal/vertical resolving and moment equations at pivots to find unknowns.' }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Ladders use horizontal/vertical reaction and friction forces. Pivot equations eliminate unknowns. Hinges have non-perpendicular reaction components computed via resolving.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What are the typical forces acting on a ladder resting against a rough vertical wall on a rough floor?' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Which points serve as the best pivots when solving ladder problems?' },
      { id: 'cue-3', blockId: 'p-2', prompt: 'What makes the reaction force from a hinge different from resting on a smooth surface?' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'What are the steps to compute the full magnitude and direction of a hinge force?' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
