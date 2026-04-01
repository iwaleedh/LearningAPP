export const note_mathematics_5_4_1 = {
  pdfPath: '/notes/mathematics/forces-and-newtons-laws/inclined-planes-and-resolving.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Resolve forces on horizontal and inclined planes and apply $F = ma$ to more complex scenarios involving friction.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Resolving Forces into Components', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'When a force acts at an angle, it can be split (resolved) into two perpendicular components. For a force $F$ at an angle $\\theta$ to the horizontal:' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Adjacent to angle:</b> $F \\cos \\theta$' },
          { text: '<b>Opposite to angle:</b> $F \\sin \\theta$' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Inclined Planes', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'When an object is on an inclined plane (at angle $\\alpha$ to the horizontal), we resolve the weight component $W = mg$ parallel and perpendicular to the plane.' }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Forces acting on a particle on a rough inclined plane.',
        svg: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-md mx-auto" aria-labelledby="inclinedPlaneTitle" role="img">
  <title id="inclinedPlaneTitle">Inclined Plane Force Diagram</title>
  <!-- Triangle/Plane -->
  <polygon points="50,300 450,300 50,100" fill="#1e293b" />
  <path d="M 50 300 L 450 300 L 50 100 Z" stroke="#9ca3af" stroke-width="2" fill="none"/>
  <!-- Angle arc -->
  <path d="M 380 300 A 70 70 0 0 0 350 250" fill="none" stroke="#6b7280" stroke-width="2"/>
  <text x="390" y="290" font-family="sans-serif" font-size="18" fill="#4b5563">α</text>
  
  <!-- Block -->
  <g transform="translate(180, 180) rotate(26.5)"> <!-- approx tan^-1(200/400) = 26.5 deg -->
    <rect x="-30" y="-30" width="60" height="60" fill="#3b82f6" rx="4" />
    
    <!-- Normal Reaction R (Perpendicular to plane) -->
    <path d="M 0 -30 L 0 -110" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow-red-inc)"/>
    <text x="-20" y="-100" font-family="sans-serif" font-size="20" fill="#ef4444" transform="rotate(-26.5)">R</text>
    
    <!-- Friction F (Up the plane) -->
    <path d="M 30 0 L 100 0" stroke="#f59e0b" stroke-width="4" marker-end="url(#arrow-yellow-inc)"/>
    <text x="90" y="25" font-family="sans-serif" font-size="20" fill="#f59e0b" transform="rotate(-26.5)">F</text>
  </g>
  
  <!-- Weight W (Directly downwards, outside the rotated group) -->
  <path d="M 180 180 L 180 320" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow-red-inc)"/>
  <text x="195" y="310" font-family="sans-serif" font-size="20" fill="#ef4444">mg</text>
  
  <defs>
    <marker id="arrow-red-inc" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-yellow-inc" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Resolving Weight on an Incline',
        text: 'For a particle of mass $m$ on a plane inclined at $\\alpha$:<br>• Component <b>parallel</b> to (down) the plane: $mg \\sin \\alpha$<br>• Component <b>perpendicular</b> to (into) the plane: $mg \\cos \\alpha$'
      }
    },
    {
      id: 'p-3',
      type: 'paragraph',
      data: { text: 'To form equations of motion, we apply $F = ma$ parallel to the plane, and equate forces perpendicular to the plane (since there is no acceleration vertically off the plane, so $R = mg \\cos \\alpha$).' }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Resolving on Incline',
        text: 'A particle of mass 5 kg slides down a rough slope inclined at 30°. The frictional force is 15 N. Find its acceleration.<br><br>1. Resolve parallel to the slope (downwards is positive):<br>Forward force = $5g \\sin 30$<br>Backward force = $15$ N<br><br>2. Apply $F_{net} = ma$:<br>$5g \\sin 30 - 15 = 5a$<br>$5(9.8)(0.5) - 15 = 5a$<br>$24.5 - 15 = 5a$<br>$9.5 = 5a$<br>$a = 1.9 \\text{ m s}^{-2}$'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Always resolve the weight of an object on a ramp into $mg \\sin \\alpha$ (down the slope) and $mg \\cos \\alpha$ (perpendicular to the slope). Then use $F = ma$ in the direction of travel.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When resolving forces on an inclined plane, remember the normal reaction R is not necessarily equal to just mg*cos(alpha). It must balance the perpendicular component of the weight plus or minus any other applied forces acting perpendicular to the plane. Do not make unsafe assumptions without checking your diagram."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: "Resolve weight on an inclined plane: mg sin(α) down plane, mg cos(α) perpendicular to plane.",
    ready: true,
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'How do you resolve a force $F$ adjacent to the angle $\\theta$?', answer: '$F \\cos \\theta$' },
      { id: 'cue-2', blockId: 'callout-1', prompt: 'What is the component of weight parallel to an inclined plane at angle $\\alpha$?', answer: '$mg \\sin \\alpha$ (down the plane)' },
      { id: 'cue-3', blockId: 'callout-1', prompt: 'What is the component of weight perpendicular to an inclined plane at angle $\\alpha$?', answer: '$mg \\cos \\alpha$ (into the plane)' },
      { id: 'cue-4', blockId: 'p-3', prompt: 'Why do we equate forces perpendicular to the plane ($R = mg \\cos \\alpha$)?', answer: 'Because the particle does not accelerate vertically off the plane, meaning net vertical forces are 0.' }
    ]
  },
  evidence: [],
  mentions: []
};