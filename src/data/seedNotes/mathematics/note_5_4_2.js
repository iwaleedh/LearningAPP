export const note_mathematics_5_4_2 = {
  pdfPath: '/notes/mathematics/forces-and-newtons-laws/connected-bodies-and-pulleys.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Model and solve problems involving connected particles (cars and trailers, pulleys, and lifts) using Newton\'s Second and Third Laws.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Key Modeling Assumptions', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Light string / inextensible string:</b> The tension is the same throughout the string. The connected particles will have the same acceleration ($a$) and the same velocity.' },
          { text: '<b>Smooth pulley / smooth peg:</b> There is no friction on the string at the pulley, meaning tension is equal on both sides.' },
          { text: '<b>Tow bar / rigid rod:</b> Can be in tension (pulling apart) or thrust (compressing/pushing together).' }
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Pulleys', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'In a standard pulley problem, two masses hang vertically. The heavier mass accelerates downwards, dragging the lighter mass upwards with the same acceleration.' }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'A smooth pulley with two masses $m_1$ and $m_2$ ($m_1 > m_2$).',
        svg: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-sm mx-auto" aria-labelledby="pulleyTitle" role="img">
  <title id="pulleyTitle">Pulley Diagram</title>
  
  <!-- Ceiling & Mount -->
  <line x1="100" y1="20" x2="200" y2="20" stroke="#9ca3af" stroke-width="4"/>
  <line x1="150" y1="20" x2="150" y2="80" stroke="#9ca3af" stroke-width="4"/>
  
  <!-- Pulley -->
  <circle cx="150" cy="110" r="30" fill="#1e293b" stroke="#6b7280" stroke-width="4"/>
  <circle cx="150" cy="110" r="4" fill="#6b7280"/>
  
  <!-- Strings -->
  <line x1="120" y1="110" x2="120" y2="280" stroke="#4b5563" stroke-width="2"/>
  <line x1="180" y1="110" x2="180" y2="200" stroke="#4b5563" stroke-width="2"/>
  
  <!-- Mass 1 (Left - heavier) -->
  <rect x="100" y="280" width="40" height="40" fill="#6366f1" rx="4"/>
  <text x="110" y="305" font-family="sans-serif" fill="#1e293b" font-size="16">m₁</text>
  
  <!-- Mass 2 (Right - lighter) -->
  <rect x="165" y="200" width="30" height="30" fill="#065f46" rx="4"/>
  <text x="170" y="220" font-family="sans-serif" fill="#1e293b" font-size="14">m₂</text>
  
  <!-- Tension Arrows -->
  <path d="M 120 280 L 120 240" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-yellow-p)"/>
  <text x="100" y="260" font-family="sans-serif" fill="#f59e0b" font-size="18">T</text>
  
  <path d="M 180 200 L 180 160" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-yellow-p)"/>
  <text x="190" y="180" font-family="sans-serif" fill="#f59e0b" font-size="18">T</text>
  
  <!-- Acceleration Arrows -->
  <path d="M 70 270 L 70 320" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red-p)"/>
  <text x="50" y="300" font-family="sans-serif" fill="#ef4444" font-size="18">a</text>
  
  <path d="M 230 220 L 230 170" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red-p)"/>
  <text x="240" y="200" font-family="sans-serif" fill="#ef4444" font-size="18">a</text>

  <!-- Weights -->
  <path d="M 120 320 L 120 370" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red-p-w)"/>
  <text x="130" y="360" font-family="sans-serif" fill="#dc2626" font-size="16">m₁g</text>

  <path d="M 180 230 L 180 270" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red-p-w)"/>
  <text x="190" y="260" font-family="sans-serif" fill="#dc2626" font-size="16">m₂g</text>

  <defs>
    <marker id="arrow-yellow-p" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
    </marker>
    <marker id="arrow-red-p" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-red-p-w" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
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
        title: 'Forming Equations for Connected Bodies',
        text: 'Do NOT try to form an equation for the whole system at once. Form a separate $F = ma$ equation for <b>each particle individually</b> in its direction of motion. You will get simultaneous equations which you can solve to find Tension ($T$) and Acceleration ($a$).'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Cars and Trailers', level: 2 }
    },
    {
      id: 'p-2',
      type: 'paragraph',
      data: { text: 'For a car towing a trailer horizontally, both have the same acceleration. The tension $T$ acts backwards on the car, and forwards on the trailer (Newton\'s Third Law: equal and opposite).' }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Lifts',
        text: 'A person of mass 70 kg stands in a lift of mass 300 kg. The lift accelerates upwards at 1.5 m s⁻². Find the tension in the lift cable.<br><br><b>Whole System Method:</b><br>Total mass = 370 kg. Driving force = Tension ($T$). Total resistance (weight) = 370g.<br>Apply $F_{net} = ma$ upwards:<br>$T - 370g = 370 \\times 1.5$<br>$T - 3626 = 555$<br>$T = 4181$ N.<br><br><i>Note: To find the Normal Reaction of the floor on the person, you would apply F=ma to the <b>person only</b>: $R - 70g = 70 \times 1.5$.</i>'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'For connected bodies, draw separate diagrams or clearly label all internal and external forces. Form separate $F=ma$ equations for each body and solve simultaneously.' }
    },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "For questions involving connected particles (like a car towing a trailer), writing a separate F=ma equation for each object is often much safer than treating the entire system as a single particle. It explicitly isolates the tension force and minimizes sign errors."
            },
            terms: []
        }
  ],
  recall: {
    enabled: true,
    summaryText: "Model connected bodies individually using simultaneous equations for F=ma.",
    ready: true,
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What does a "smooth pulley" tell us about the system?', answer: 'There is no friction in the pulley, so tension is exactly the same on both sides of the string.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What does "inextensible string" tell us?', answer: 'The string does not stretch, meaning both connected particles share exactly the same acceleration and velocity.' },
      { id: 'cue-3', blockId: 'callout-1', prompt: 'What is the correct approach to forming equations for two connected masses?', answer: 'Form separate F=ma equations for each mass in its direction of motion, then solve them simultaneously.' },
      { id: 'cue-4', blockId: 'callout-we1', prompt: 'How do you find the Normal Reaction feeling (apparent weight) for a person inside a moving lift?', answer: 'Apply F=ma solely to the person: R - mg = ma (if going up) or mg - R = ma (if going down).' }
    ]
  },
  evidence: [],
  mentions: []
};