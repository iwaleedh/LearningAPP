export const note_mathematics_5_6_1 = {
  pdfPath: '/notes/mathematics/moments/centres-of-mass.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Determine the centre of mass for uniform and non-uniform rods and use it to solve equilibrium problems.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is the Centre of Mass?', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'The centre of mass of an object is the point at which the weight of the object may be considered to act.' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'For a uniform object, the centre of mass is at the centre of the object where the lines of symmetry intersect.' },
          { text: 'For a uniform rod, the centre of mass is exactly at its midpoint.' },
          { text: 'For a uniform rectangular lamina, it is where the diagonals intersect.' },
          { text: 'For a non-uniform object, the centre of mass is not necessarily at the geometrical centre of the object.' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Uniform Rods', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'If a rod is described as uniform, its weight acts precisely at its midpoint. When a rod rests on a support or peg, there is a normal reaction force acting perpendicular to the rod at that point. If suspended by strings, there are tension forces keeping it in place.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Two Supports Strategy',
        text: 'If there are two supports with unknown reaction forces, taking moments about one of the supports will eliminate its force from the equation, allowing you to find the reaction force at the other support. This method works for strings and tension too.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Non-uniform Rods', level: 2 }
    },
    {
      id: 'p-3',
      type: 'paragraph',
      data: { text: 'For a non-uniform rod, you must determine carefully where the weight acts by applying conditions for equilibrium.' }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Label the weight of the rod at an unknown point on the rod.' },
          { text: 'Call the perpendicular distance between the pivot and the weight x (or a variable of your choice).' },
          { text: 'Form a moment equation using the fact that the rod is in equilibrium.' },
          { text: 'Solve the equation to find the distance x.' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Read the Question Carefully',
        text: 'Make sure you read the question carefully to see exactly which distance you are asked to find (e.g., distance from the left end or the right end of the rod).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The centre of mass is where the total weight acts. For a uniform rod, it is at the midpoint. For a non-uniform rod, moments equations are used to find its precise location.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Pay careful attention to whether a rod is described as 'uniform' or 'non-uniform'. If uniform, its weight acts precisely at the midpoint. If it is non-uniform, you will usually be tasked with setting up a moment equation to find the exact position of its centre of mass."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: 'Centre of mass acts at midpoint for uniform rods. For non-uniform rods, setup an unknown distance x and take moments to solve.',
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What is the definition of the centre of mass?' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Where does the centre of mass act for a uniform rod?' },
      { id: 'cue-3', blockId: 'call-1', prompt: 'How do you handle a problem with two unknown support forces?' },
      { id: 'cue-4', blockId: 'list-2', prompt: 'What approach should be used to find the centre of mass of a non-uniform rod?' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
