export const note_mathematics_5_4_0 = {
  pdfPath: '/notes/mathematics/forces-and-newtons-laws/force-diagrams-and-f-equals-ma.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand how to draw force diagrams and apply Newton\'s Second Law of Motion ($F = ma$).' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Force Diagrams', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'A force diagram (or free-body diagram) shows all the forces acting on an object. We model the object as a particle, drawing arrows to represent forces originating from the particle.' }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'A simple force diagram showing an object on a rough horizontal surface.',
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm mx-auto" aria-labelledby="forceDiagramTitle" role="img">
  <title id="forceDiagramTitle">Force Diagram</title>
  <!-- Surface -->
  <rect x="0" y="200" width="400" height="20" fill="#1e293b" />
  <!-- Particle/Block -->
  <rect x="150" y="100" width="100" height="100" fill="#3b82f6" rx="4" />
  <!-- Normal Reaction -->
  <path d="M 200 100 L 200 20" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow-red)" />
  <text x="210" y="50" font-family="sans-serif" font-size="20" fill="#ef4444">R</text>
  <!-- Weight -->
  <path d="M 200 200 L 200 280" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow-red)" />
  <text x="210" y="260" font-family="sans-serif" font-size="20" fill="#ef4444">W</text>
  <!-- Driving Force / Thrust -->
  <path d="M 250 150 L 330 150" stroke="#10b981" stroke-width="4" marker-end="url(#arrow-green)" />
  <text x="280" y="140" font-family="sans-serif" font-size="20" fill="#10b981">T</text>
  <!-- Friction -->
  <path d="M 150 150 L 70 150" stroke="#f59e0b" stroke-width="4" marker-end="url(#arrow-yellow)" />
  <text x="100" y="140" font-family="sans-serif" font-size="20" fill="#f59e0b">F</text>
  <defs>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
    </marker>
    <marker id="arrow-yellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
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
          { text: '<b>Weight (W):</b> Acts vertically downwards. W = mg, where g = 9.8 m s⁻².' },
          { text: '<b>Normal Reaction (R):</b> Acts perpendicular to the surface of contact.' },
          { text: '<b>Friction (F):</b> Acts parallel to the surface, opposing the direction of motion.' },
          { text: '<b>Tension (T) & Thrust:</b> Acts along strings, rods, or ropes. Tension pulls, thrust pushes.' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: "Newton's Second Law (F = ma)", level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: "Newton's Second Law states that the resultant (net) force acting on an object is proportional to its acceleration. We form equations of motion parallel to the direction of motion." }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        html: 'F<sub>net</sub> = ma'
      }
    },
    {
      id: 'callout-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Forming Equations of Motion',
        text: 'Always define a positive direction (the direction of acceleration). Forces in this direction are positive; forces opposing it are negative.<br/><br/>(Forces Forwards) − (Forces Backwards) = ma'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Single Particle',
        text: 'A car of mass 1200 kg is accelerating at 2 m s⁻². The driving force is 3500 N. Find the total resistance forces acting on the car.<br><br>Let resistance = F. Applying F<sub>net</sub> = ma in the direction of motion:<br>3500 − F = 1200 × 2<br>3500 − F = 2400<br>F = 3500 − 2400 = 1100 N.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: "Draw a diagram, label all forces, explicitly state the direction of motion, and use F = ma to form the equation of motion." }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always draw a large, clear force diagram before attempting to set up your equations of motion. Omitting a force\u2014very commonly a resolved component of weight or the normal reaction\u2014will lead to entirely incorrect equations down the line."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: "F = ma relates resultant force, mass, and acceleration.",
    ready: true,
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What does a force diagram show?', answer: 'All the forces acting on an object, modeled as arrows originating from a particle.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is the formula for Weight?', answer: 'W = mg (mass × gravitational acceleration, where g = 9.8 m s⁻²).' },
      { id: 'cue-3', blockId: 'eq-1', prompt: 'State Newton\'s Second Law mathematically.', answer: 'F_net = ma (Resultant force = mass × acceleration).' },
      { id: 'cue-4', blockId: 'callout-1', prompt: 'How should you determine the signs of forces when applying F=ma?', answer: 'Forces in the direction of acceleration are positive; forces opposing acceleration are negative.' }
    ]
  },
  evidence: [],
  mentions: []
};