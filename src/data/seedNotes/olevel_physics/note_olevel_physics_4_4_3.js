export const note_olevel_physics_4_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-4-electromagnetic-induction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State Faraday\'s law of electromagnetic induction, Lenz\'s law, and the factors that increase induced EMF.' },
    },
    {
      id: 'h-induction',
      type: 'heading',
      data: { text: 'Electromagnetic Induction', level: 2 },
    },
    {
      id: 'para-induction',
      type: 'paragraph',
      data: {
        text: 'When a conductor <strong>moves relative to a magnetic field</strong> (or the field changes), an <strong>electromotive force (EMF) is induced</strong> in the conductor. If the conductor is part of a closed circuit, this drives an <strong>induced current</strong>. This is the principle behind generators and transformers.',
      },
    },
    {
      id: 'h-faraday',
      type: 'heading',
      data: { text: 'Faraday\'s Law', level: 2 },
    },
    {
      id: 'call-faraday',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Faraday\'s Law',
        text: 'The size of the induced EMF is proportional to the rate of change of magnetic flux through the circuit. In simpler terms: faster change = larger induced EMF.',
      },
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Factors Increasing Induced EMF', level: 2 },
    },
    {
      id: 'list-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Moving the magnet (or wire) <strong>faster</strong>.' },
          { text: 'Using a <strong>stronger magnet</strong>.' },
          { text: 'Using more <strong>turns</strong> in the coil.' },
          { text: 'Using a <strong>soft iron core</strong> (concentrates flux).' },
        ],
      },
    },
    {
      id: 'h-lenz',
      type: 'heading',
      data: { text: 'Lenz\'s Law', level: 2 },
    },
    {
      id: 'call-lenz',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Lenz\'s Law',
        text: 'The direction of the induced current is always such that it opposes the change that caused it. (A consequence of conservation of energy — you must do work to push the magnet against the opposing force.)',
      },
    },
    {
      id: 'para-lenz-example',
      type: 'paragraph',
      data: {
        text: 'Example: if the N pole of a magnet is pushed towards a coil, the induced current creates a N pole facing it in the coil to <strong>repel</strong> the magnet (opposing the motion). If the magnet is pulled away, the coil creates a S pole to <strong>attract</strong> it.',
      },
    },
    {
      id: 'svg-induction',
      type: 'svg',
      data: {
        caption: 'Magnet moving into coil: galvanometer deflects, indicating induced current',
        svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Coil -->
  <rect x="130" y="60" width="100" height="80" rx="8" fill="#2d2f72" stroke="#6366f1" stroke-width="2"/>
  <ellipse cx="130" cy="100" rx="10" ry="40" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
  <ellipse cx="145" cy="100" rx="10" ry="40" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
  <ellipse cx="215" cy="100" rx="10" ry="40" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
  <ellipse cx="230" cy="100" rx="10" ry="40" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="155" y="108" fill="#6366f1" font-weight="bold">Coil</text>
  <!-- Magnet (moving towards coil) -->
  <rect x="15" y="80" width="80" height="40" rx="5" fill="#0a3020" stroke="#16a34a" stroke-width="2"/>
  <line x1="55" y1="80" x2="55" y2="120" stroke="#9ca3af" stroke-width="1"/>
  <text x="20" y="104" fill="#ef4444" font-weight="bold" font-size="14">S</text>
  <text x="62" y="104" fill="#16a34a" font-weight="bold" font-size="14">N</text>
  <!-- Motion arrow -->
  <line x1="96" y1="100" x2="128" y2="100" stroke="#d97706" stroke-width="2.5"/>
  <polygon points="128,95 138,100 128,105" fill="#d97706"/>
  <text x="95" y="90" fill="#d97706" font-size="9">→ motion</text>
  <!-- Galvanometer -->
  <circle cx="300" cy="100" r="28" fill="#44370a" stroke="#d97706" stroke-width="2"/>
  <text x="282" y="97" fill="#d97706" font-weight="bold" font-size="12">G</text>
  <text x="285" y="113" fill="#d97706" font-size="9">deflects</text>
  <!-- Wires from coil to galvanometer -->
  <line x1="230" y1="70" x2="280" y2="70" stroke="#374151" stroke-width="1.5"/>
  <line x1="280" y1="70" x2="300" y2="72" stroke="#374151" stroke-width="1.5"/>
  <line x1="230" y1="130" x2="280" y2="130" stroke="#374151" stroke-width="1.5"/>
  <line x1="280" y1="130" x2="300" y2="128" stroke="#374151" stroke-width="1.5"/>
  <!-- Lenz label -->
  <rect x="130" y="155" width="100" height="22" rx="4" fill="#3d1212" stroke="#ef4444" stroke-width="1"/>
  <text x="140" y="170" fill="#ef4444" font-size="9">N face repels magnet (Lenz)</text>
</svg>`,
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The key phrase for marks: "an EMF is induced because there is a changing magnetic flux through the circuit". Simply moving a stationary magnet near a stationary conductor or moving a conductor in a static field — both change the flux and induce an EMF.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'EMF induced when conductor moves in magnetic field (or flux changes). Faraday: EMF ∝ rate of flux change. Increase EMF by faster motion, stronger field, more turns. Lenz\'s law: induced current opposes change (energy conservation).',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Faraday: EMF ∝ rate of change of flux. Lenz: induced current opposes cause. EMF increases with speed, field strength, turns.',
    cues: [
      { id: 'cue-1', blockId: 'call-faraday', prompt: 'State Faraday\'s law of electromagnetic induction.', answer: 'The induced EMF is proportional to the rate of change of magnetic flux through the circuit.' },
      { id: 'cue-2', blockId: 'list-factors', prompt: 'State three ways to increase the EMF induced in a coil.', answer: 'Move the magnet faster; use a stronger magnet; use more turns in the coil.' },
      { id: 'cue-3', blockId: 'call-lenz', prompt: 'State Lenz\'s law.', answer: 'The induced current flows in a direction that opposes the change that caused it.' },
      { id: 'cue-4', blockId: 'para-lenz-example', prompt: 'A N pole is pushed into a coil. What pole does the near face of the coil become?', answer: 'North pole — it repels the incoming magnet (Lenz\'s law: opposes the change).' },
    ],
  },
  evidence: [],
  mentions: [],
};
