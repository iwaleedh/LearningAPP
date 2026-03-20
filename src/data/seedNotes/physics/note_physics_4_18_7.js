export const note_physics_4_18_7 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Representing Radial & Uniform Electric Fields" } },
    { id: 'head-1', type: 'heading', data: { text: "Representing Radial & Uniform Electric Fields", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Defining an <strong>Electric Field</strong> Defining an <strong>Electric Field</strong> An <strong>electric field</strong> is defined as a region of space in which a charged particle experiences a force" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Hence, electric fields are a type of force field The charged particle could be stationary or moving, and will experience an electric force in that field All charged particles create their own electric fields" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "These fields exert an electrostatic force, F on other charged particles The electrostatic force between two charges Like charges (positive and positive, or negative and negative) repel each other This means the force on each charge are away from the other charge" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Opposite charged (positive and negative) attract each other This means the force on each charge is towards the other charge The size of the force changes with distanceE A repulsive force decreases with distance" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Examiner Tips and Tricks Electric fields are slightly different in that a charged particle will experience a force in this field whether it's stationary or moving." },
      { text: "Don't get this mixed up with a magnetic <strong>Electric Field</strong> Strength." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Electric Field</strong> Strength The <strong>electric field</strong> strength at a point is defined as: The force per unit charge acting on a positive test charge at that point The <strong>electric field</strong> strength can be calculated using the equation:" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "Where: E = <strong>electric field</strong> strength (N C ) F = electrostatic force on the charge (N) Q = charge (C)" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "It is important to use a positive test charge in this definition, as this determines the direction of the <strong>electric field</strong> Recall, the <strong>electric field</strong> strength is a vector quantity, it is always directed: Away from a positive charge" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "Towards a negative charge This direction is also denoted by the direction of the <strong>electric field</strong> <strong>Electric field</strong> lines are directed away from a positive point charge and towards a negative point charge" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "–1 Worked Example A charged particle is in an <strong>electric field</strong> with <strong>electric field</strong> strength 3.5 × 10 N C where it experiences a force of 0.3 N." }] } },

  
    {
      id: 'svg-physics_4_18_7-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <circle cx="200" cy="100" r="15" fill="#ef4444"/>
  <circle cx="200" cy="100" r="40" fill="none" stroke="#10b981" stroke-dasharray="4,4"/>
  <circle cx="200" cy="100" r="70" fill="none" stroke="#10b981" stroke-dasharray="4,4"/>
  <path d="M 200 40 L 200 10" stroke="#3b82f6" stroke-width="1" marker-end="url(#arrow-blue)"/>
  <path d="M 200 160 L 200 190" stroke="#3b82f6" stroke-width="1" marker-end="url(#arrow-blue)"/>
  <path d="M 140 100 L 110 100" stroke="#3b82f6" stroke-width="1" marker-end="url(#arrow-blue)"/>
  <path d="M 260 100 L 290 100" stroke="#3b82f6" stroke-width="1" marker-end="url(#arrow-blue)"/>
  <text x="200" y="30" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Equipotential Surfaces (Radial)</text>
  <text x="200" y="180" font-family="Arial" font-size="12" fill="#10b981" text-anchor="middle">Dashed = Equipotentials (V is constant)</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 18_7'
      }
    },
    {
      id: 'svg-physics_4_18_7-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <rect x="80" y="60" width="240" height="80" fill="none" stroke="#334155" stroke-width="2"/>
  <path d="M 140 60 L 140 140" stroke="#10b981" stroke-dasharray="4,4" stroke-width="2"/>
  <path d="M 200 60 L 200 140" stroke="#10b981" stroke-dasharray="4,4" stroke-width="2"/>
  <path d="M 260 60 L 260 140" stroke="#10b981" stroke-dasharray="4,4" stroke-width="2"/>
  <path d="M 80 100 L 320 100" stroke="#3b82f6" stroke-width="1" marker-end="url(#arrow-blue)"/>
  <text x="140" y="50" font-family="Arial" font-size="12" fill="#10b981" text-anchor="middle">50V</text>
  <text x="200" y="50" font-family="Arial" font-size="12" fill="#10b981" text-anchor="middle">100V</text>
  <text x="260" y="50" font-family="Arial" font-size="12" fill="#10b981" text-anchor="middle">150V</text>
  <text x="200" y="30" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Equipotential Surfaces (Uniform)</text>
  <text x="200" y="180" font-family="Arial" font-size="12" fill="#475569" text-anchor="middle">Always perpendicular to Field Lines</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 18_7'
      }
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="enr-arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/>
    </marker>
  </defs>
  <rect width="500" height="240" fill="#0f172a" rx="8"/>
  <text x="125" y="22" font-family="Arial" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Radial Field (+ve charge)</text>
  <circle cx="125" cy="125" r="42" fill="none" stroke="#10b981" stroke-dasharray="5,3" stroke-width="1.5"/>
  <circle cx="125" cy="125" r="72" fill="none" stroke="#10b981" stroke-dasharray="5,3" stroke-width="1.5"/>
  <line x1="139" y1="125" x2="194" y2="125" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="111" y1="125" x2="56" y2="125" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="125" y1="111" x2="125" y2="56" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="125" y1="139" x2="125" y2="194" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="134" y1="116" x2="173" y2="77" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="116" y1="116" x2="77" y2="77" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="134" y1="134" x2="173" y2="173" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="116" y1="134" x2="77" y2="173" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <circle cx="125" cy="125" r="13" fill="#ef4444"/>
  <text x="125" y="130" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">+</text>
  <text x="125" y="222" font-family="Arial" font-size="11" fill="#10b981" text-anchor="middle">Dashed circles = equipotentials</text>
  <line x1="249" y1="10" x2="249" y2="230" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="374" y="22" font-family="Arial" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Uniform Field (parallel plates)</text>
  <rect x="268" y="45" width="8" height="155" fill="#475569" rx="2"/>
  <rect x="474" y="45" width="8" height="155" fill="#475569" rx="2"/>
  <text x="272" y="37" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">+</text>
  <text x="478" y="37" font-family="Arial" font-size="14" font-weight="bold" fill="#3b82f6" text-anchor="middle">&#x2212;</text>
  <line x1="278" y1="82" x2="469" y2="82" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="278" y1="118" x2="469" y2="118" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="278" y1="154" x2="469" y2="154" stroke="#3b82f6" stroke-width="2" marker-end="url(#enr-arr)"/>
  <line x1="332" y1="45" x2="332" y2="200" stroke="#10b981" stroke-dasharray="5,3" stroke-width="1.5"/>
  <line x1="374" y1="45" x2="374" y2="200" stroke="#10b981" stroke-dasharray="5,3" stroke-width="1.5"/>
  <line x1="416" y1="45" x2="416" y2="200" stroke="#10b981" stroke-dasharray="5,3" stroke-width="1.5"/>
  <text x="374" y="222" font-family="Arial" font-size="11" fill="#10b981" text-anchor="middle">Dashed lines = equipotentials (perpendicular to E)</text>
</svg>`,
        caption: 'Left: 8 radial field lines from a positive point charge; concentric dashed circles are equipotentials. Right: uniform field between parallel plates; dashed vertical lines are equipotentials, always perpendicular to the field.'
      }
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Electric Force on a Charge',
        text: '<b>Question:</b> A particle with charge Q = 3.2 × 10<sup>−19</sup> C is placed in a uniform <strong>electric field</strong> of strength E = 2.5 × 10<sup>4</sup> N C<sup>−1</sup>. Calculate the electric force acting on the particle.<br><br><b>Step 1 — Write the formula:</b><br>E = F / Q &nbsp;⟹&nbsp; F = E × Q<br><br><b>Step 2 — Substitute values:</b><br>F = 2.5 × 10<sup>4</sup> × 3.2 × 10<sup>−19</sup><br><br><b>Step 3 — Calculate:</b><br>F = <b>8.0 × 10<sup>−15</sup> N</b><br><br>The force acts in the direction of the <strong>electric field</strong> (positive charge ⟹ force is along E).'
      }
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips — Field Lines and Equipotentials',
        text: '<b>1. Perpendicularity:</b> Equipotentials are <em>always</em> perpendicular to <strong>electric field</strong> lines — in both radial and uniform fields. Never parallel.<br><br><b>2. Line spacing → field strength:</b> Closely spaced field lines = strong E; widely spaced field lines = weak E.<br><br><b>3. Radial vs Uniform:</b> Radial field — E ∝ 1/r² (weakens with distance, lines spread out). Uniform field — E is constant (parallel, equally spaced lines).<br><br><b>4. Direction convention:</b> Field lines always point from + to − (away from positive charges, towards negative charges).<br><br><b>5. Field lines never cross</b> — if they did, the force on a charge at that point would have two directions, which is physically impossible.'
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Representing Radial & Uniform Electric Fields' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
