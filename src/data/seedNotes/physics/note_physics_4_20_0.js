export const note_physics_4_20_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Magnetic Flux</strong> Density</strong>, Flux & Flux Linkage" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Magnetic Flux</strong> Density</strong>, Flux & Flux Linkage", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Magnetic Flux</strong> Density</strong>, Flux & Flux Linkage Magnetic Force on a Charged Particle <strong>Magnetic Flux</strong> Density</strong>, Flux & Flux Linkage <strong>Magnetic Flux</strong> Density</strong>, Flux & Flux" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Linkage <strong>Magnetic Flux</strong> Density</strong> The strength of a <strong>magnetic field</strong> is defined by the density of the <strong>magnetic field</strong> lines, or <strong>magnetic flux</strong> density</strong>, at that point" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Magnetic flux</strong> density</strong> is defined by the symbol B It is measured in Tesla (T) Rearranging the equation for magnetic force on a wire, the <strong>magnetic flux</strong> density</strong> is defined by the equation:" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Where: B = <strong>magnetic flux</strong> density</strong> (T) F = magnetic force on a current-carrying wire (N) I = current (A)" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "L = length of the wire (m) For reference, the Earth's <strong>magnetic flux</strong> density</strong> is around 0.032 mT and an ordinary fridge magnet is around 5 mT The <strong>magnetic flux</strong> density</strong> is sometimes referred to as the magnetic field strength" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Magnetic Flux</strong> <strong>Magnetic flux</strong> is a quantity which signifies how much of a <strong>magnetic field</strong> passes perpendicularly through some area For example, the amount of <strong>magnetic flux</strong> through a rotating coil will vary as the coil" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "rotates in the <strong>magnetic field</strong> It is a maximum when the <strong>magnetic field</strong> lines are perpendicular to the coil area It is at a minimum when the <strong>magnetic field</strong> lines are parallel to the coil area The <strong>magnetic flux</strong> is defined as:" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "The product of the <strong>magnetic flux</strong> density</strong> and the cross-sectional area perpendicular to the direction of the <strong>magnetic flux</strong> density</strong> <strong>Magnetic flux</strong> is defined by the symbol Φ  (greek letter ‘phi') It is measured in units of Webers (Wb)" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Magnetic flux</strong> can be calculated using the equation: Φ = BA Where: Φ = <strong>magnetic flux</strong> (Wb)" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "B = <strong>magnetic flux</strong> density</strong> (T) A = cross-sectional area (m ) The <strong>magnetic flux</strong> is maximised when the <strong>magnetic field</strong> lines and the area through which they are passing through are perpendicular" }] } },
    {
      id: 'svg-magnetic-field-wire',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="100" y1="20" x2="100" y2="180" stroke="#B45309" stroke-width="6"/><path d="M 95 30 L 100 20 L 105 30" fill="none" stroke="#FFF" stroke-width="2"/><circle cx="100" cy="100" r="40" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="4"/><path d="M 140 100 L 138 92 L 144 94" fill="none" stroke="#2563EB" stroke-width="2"/><circle cx="100" cy="100" r="70" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="6"/><path d="M 170 100 L 168 92 L 174 94" fill="none" stroke="#2563EB" stroke-width="2"/><text x="120" y="50" font-family="Arial" font-size="16" fill="#B45309">Current (I)</text></svg>',
        caption: 'Magnetic Field of a Wire'
      }
    },
    {
      id: 'svg-flemings-left-hand',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><line x1="150" y1="120" x2="150" y2="40" stroke="#3B82F6" stroke-width="4" marker-end="url(#arrow-blue)"/><text x="160" y="60" font-family="Arial" font-size="14" fill="#1E3A8A">Thrust / Force (Thumb)</text><line x1="150" y1="120" x2="230" y2="120" stroke="#10B981" stroke-width="4" marker-end="url(#arrow-green)"/><text x="160" y="140" font-family="Arial" font-size="14" fill="#065F46">Field (First Finger)</text><line x1="150" y1="120" x2="90" y2="180" stroke="#EF4444" stroke-width="4" marker-end="url(#arrow-red)"/><text x="60" y="170" font-family="Arial" font-size="14" fill="#991B1B">Current (Second Finger)</text><defs><marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#3B82F6"/></marker><marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#10B981"/></marker><marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#EF4444"/></marker></defs></svg>',
        caption: 'Fleming\'s Left Hand Rule'
      }
    },
    {
      id: 'enr-svg-force',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><defs><marker id="bArr0" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#3B82F6"/></marker></defs><rect width="500" height="260" fill="#0f172a" rx="8"/><line x1="250" y1="0" x2="250" y2="260" stroke="#E2E8F0" stroke-width="1.5"/><text x="125" y="18" font-family="Arial" font-size="10" text-anchor="middle" fill="#6B7280">Right-hand rule: field loops</text><circle cx="125" cy="135" r="78" fill="none" stroke="#BFDBFE" stroke-width="1.5"/><circle cx="125" cy="135" r="53" fill="none" stroke="#93C5FD" stroke-width="2"/><circle cx="125" cy="135" r="28" fill="none" stroke="#2563EB" stroke-width="2.5"/><line x1="125" y1="30" x2="125" y2="225" stroke="#B45309" stroke-width="7"/><polygon points="120,43 130,43 125,30" fill="#FBBF24"/><text x="140" y="180" font-family="Arial" font-size="12" fill="#92400E">I (up)</text><text x="154" y="133" font-family="Arial" font-size="14" fill="#2563EB">&#8594;</text><text x="375" y="18" font-family="Arial" font-size="10" text-anchor="middle" fill="#6B7280">F = BIL sin&#x03B8; (wire in field)</text><line x1="265" y1="85" x2="488" y2="85" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArr0)"/><text x="492" y="89" font-family="Arial" font-size="11" fill="#3B82F6">B</text><line x1="265" y1="115" x2="488" y2="115" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArr0)"/><line x1="265" y1="145" x2="488" y2="145" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArr0)"/><line x1="265" y1="175" x2="488" y2="175" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArr0)"/><line x1="375" y1="55" x2="375" y2="210" stroke="#B45309" stroke-width="7"/><polygon points="370,68 380,68 375,55" fill="#FBBF24"/><text x="386" y="210" font-family="Arial" font-size="11" fill="#92400E">I (up)</text><circle cx="375" cy="36" r="13" fill="#3d1212" stroke="#DC2626" stroke-width="2"/><circle cx="375" cy="36" r="4" fill="#DC2626"/><text x="375" y="53" font-family="Arial" font-size="9" text-anchor="middle" fill="#DC2626">F (out)</text><text x="250" y="248" font-family="Arial" font-size="9" text-anchor="middle" fill="#4B5563">LHR: Thumb = Force, Index = B-field, Middle = Conventional current</text></svg>',
        caption: 'Force on conductor: F = BIL sinθ'
      }
    },
    {
      id: 'enr-worked-motor',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Motor Coil & MRI Forces',
        text: 'Motor coil: N = 50 turns, L = 0.08 m, I = 2 A, B = 0.15 T. Force on one side: F = NBIL sinθ = 50 × 0.15 × 2 × 0.08 × sin 90° = 1.2 N. Torque: τ = F × width = 1.2 × 0.05 = 0.06 N·m. MRI coil (B = 3 T): even small currents create significant forces — metallic objects near MRI scanners experience large attractive forces (F = BIL).'
      }
    },
    {
      id: 'enr-tip-motor',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: F = BIL & F = BQv',
        text: 'F = BIL sinθ (θ = angle between wire and field; maximum when θ = 90°). F = BQv sinθ (for a moving charge). Fleming\'s LEFT-hand rule: Thumb → Force (motor effect), Index → B-field, Middle → Conventional current. B = 1 T means 1 N force on 1 m wire carrying 1 A at right angles. Units: Tesla T = N A⁻¹ m⁻¹.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Flux Density vs Flux",
        text: "Students confuse B (magnetic flux density in Tesla) with \u03a6 (magnetic flux in Weber). Remember: B is field strength at a point (independent of area); \u03a6 depends on the area. \u03a6 = BA (or BAcos\u03b8 if at an angle)."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Right Force Direction",
        text: "Use Fleming's LEFT-hand rule for motor/force direction (F = BIL). Thumb = force direction; Index = B field; Middle finger = conventional current. Maximum force when wire is perpendicular to B; zero force when parallel."
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise <strong>Magnetic Flux</strong> Density</strong>, Flux & Flux Linkage' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
