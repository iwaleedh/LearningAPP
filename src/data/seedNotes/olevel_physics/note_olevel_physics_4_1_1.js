export const note_olevel_physics_4_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-1-2-electric-fields.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe electric fields, draw field line patterns for common configurations, and use E = F/Q to calculate field strength.' },
    },
    {
      id: 'h-field-def',
      type: 'heading',
      data: { text: 'What is an Electric Field?', level: 2 },
    },
    {
      id: 'para-field-def',
      type: 'paragraph',
      data: {
        text: 'An <strong>electric field</strong> is a region in space where a charged object experiences a force. The field is created by any charged object and exerts a force on any other charged object placed within it.',
      },
    },
    {
      id: 'h-field-lines',
      type: 'heading',
      data: { text: 'Electric Field Lines', level: 2 },
    },
    {
      id: 'para-field-lines',
      type: 'paragraph',
      data: {
        text: 'Electric field lines (also called lines of force) show the direction of the force that would act on a <strong>positive</strong> test charge placed at that point. Key rules for drawing field lines:',
      },
    },
    {
      id: 'list-field-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Lines go <strong>from positive (+) to negative (−)</strong>' },
          { text: 'Lines never cross each other' },
          { text: 'Closer lines indicate a <strong>stronger</strong> field' },
          { text: 'Lines enter and leave surfaces at <strong>right angles</strong>' },
          { text: 'A negative charge experiences a force <em>opposite</em> to the field direction' },
        ],
      },
    },
    {
      id: 'h-patterns',
      type: 'heading',
      data: { text: 'Common Field Patterns', level: 2 },
    },
    {
      id: 'svg-fields',
      type: 'svg',
      data: {
        caption: 'Left: Uniform field between parallel plates. Right: Radial field around a positive point charge.',
        svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <!-- UNIFORM FIELD left panel -->
  <rect x="10" y="15" width="180" height="170" rx="4" fill="#0f172a" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Positive plate top -->
  <rect x="25" y="25" width="150" height="12" rx="3" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5"/>
  <text x="100" y="35" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="11">+ + + + + +</text>
  <!-- Negative plate bottom -->
  <rect x="25" y="163" width="150" height="12" rx="3" fill="#1250a0" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="100" y="173" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="11">− − − − − −</text>
  <!-- Uniform field lines with arrows -->
  <defs>
    <marker id="arr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#6366f1"/>
    </marker>
  </defs>
  <line x1="45" y1="40" x2="45" y2="160" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr1)"/>
  <line x1="70" y1="40" x2="70" y2="160" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr1)"/>
  <line x1="100" y1="40" x2="100" y2="160" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr1)"/>
  <line x1="130" y1="40" x2="130" y2="160" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr1)"/>
  <line x1="157" y1="40" x2="157" y2="160" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr1)"/>
  <text x="100" y="195" text-anchor="middle" fill="#475569" font-size="11">Uniform field (parallel plates)</text>

  <!-- RADIAL FIELD right panel -->
  <rect x="220" y="15" width="185" height="170" rx="4" fill="#0f172a" stroke="#e2e8f0" stroke-width="1"/>
  <circle cx="312" cy="100" r="14" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
  <text x="312" y="105" text-anchor="middle" fill="#dc2626" font-weight="bold">+</text>
  <!-- Radial lines outward -->
  <defs>
    <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#6366f1"/>
    </marker>
  </defs>
  <line x1="326" y1="100" x2="390" y2="100" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="298" y1="100" x2="234" y2="100" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="312" y1="86" x2="312" y2="28" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="312" y1="114" x2="312" y2="172" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="322" y1="90" x2="362" y2="50" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="302" y1="90" x2="262" y2="50" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="322" y1="110" x2="362" y2="150" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="302" y1="110" x2="262" y2="150" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <text x="312" y="195" text-anchor="middle" fill="#475569" font-size="11">Radial field (point charge +)</text>
</svg>`,
      },
    },
    {
      id: 'h-uniform',
      type: 'heading',
      data: { text: 'Uniform Electric Field', level: 3 },
    },
    {
      id: 'para-uniform',
      type: 'paragraph',
      data: {
        text: 'Between two oppositely charged <strong>parallel plates</strong>, the field is uniform — the field lines are equally spaced, parallel, and perpendicular to the plates. The field strength is the same at every point between the plates.',
      },
    },
    {
      id: 'h-radial',
      type: 'heading',
      data: { text: 'Radial Field Around a Point Charge', level: 3 },
    },
    {
      id: 'para-radial',
      type: 'paragraph',
      data: {
        text: 'Around a single point charge the field is <strong>radial</strong> — lines point outward (for +) or inward (for −) in all directions. The field is strongest near the charge (lines close together) and weakens with distance.',
      },
    },
    {
      id: 'h-strength',
      type: 'heading',
      data: { text: 'Electric Field Strength', level: 2 },
    },
    {
      id: 'para-strength',
      type: 'paragraph',
      data: {
        text: 'Electric field strength <em>E</em> is defined as the force per unit charge at a point in the field.',
      },
    },
    {
      id: 'eq-field',
      type: 'equation',
      data: {
        html: 'E = <span class="nb-frac"><span class="nb-num">F</span><span class="nb-den">Q</span></span>',
        caption: 'E = field strength (N/C or V/m), F = force (N), Q = charge (C)',
      },
    },
    {
      id: 'call-units',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Units of Electric Field Strength',
        text: 'E has units <strong>N/C</strong> (newtons per coulomb) or equivalently <strong>V/m</strong> (volts per metre). Both are correct and interchangeable.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A charge of 4 × 10<sup>−6</sup> C experiences a force of 0.02 N in an electric field. Find the field strength.\n\nE = F/Q = 0.02 / (4 × 10<sup>−6</sup>) = 5000 N/C = 5 kN/C',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'An electric field is a region where a charge experiences a force. Field lines go from + to −. Parallel plates give a uniform field; point charges give radial fields. Field strength E = F/Q in units N/C or V/m.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Electric fields: direction from + to −; uniform between plates, radial around point charges; E = F/Q.',
    cues: [
      { id: 'cue-1', blockId: 'para-field-def', prompt: 'What is an electric field?', answer: 'A region where a charged object experiences a force.' },
      { id: 'cue-2', blockId: 'list-field-rules', prompt: 'In which direction do electric field lines point?', answer: 'From positive (+) to negative (−) — the direction of force on a positive test charge.' },
      { id: 'cue-3', blockId: 'para-uniform', prompt: 'What type of field exists between two parallel charged plates?', answer: 'A uniform field — equally spaced parallel lines perpendicular to the plates, same field strength everywhere between the plates.' },
      { id: 'cue-4', blockId: 'eq-field', prompt: 'Write the equation for electric field strength and state its units.', answer: 'E = F/Q; units are N/C or V/m.' },
    ],
  },
  evidence: [],
  mentions: [],
};
