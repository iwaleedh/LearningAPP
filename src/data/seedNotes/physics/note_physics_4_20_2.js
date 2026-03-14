export const note_physics_4_20_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Magnetic Force on a Current-Carrying Conductor" } },
    { id: 'head-1', type: 'heading', data: { text: "Magnetic Force on a Current-Carrying Conductor", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Magnetic Flux Density, Flux & Flux Linkage Magnetic Flux Density, Flux & Flux Linkage Magnetic Flux Density" } },
    { id: 'para-3', type: 'paragraph', data: { text: "The strength of a magnetic field is defined by the density of the magnetic field lines, or magnetic flux density, at that point Magnetic flux density is defined by the symbol B It is measured in Tesla (T)" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Rearranging the equation for magnetic force on a wire, the magnetic flux density is defined by the equation: Where: B = magnetic flux density (T)" } },
    { id: 'para-5', type: 'paragraph', data: { text: "F = magnetic force on a current-carrying wire (N) I = current (A) L = length of the wire (m) For reference, the Earth's magnetic flux density is around 0.032 mT and an ordinary" } },
    { id: 'para-6', type: 'paragraph', data: { text: "fridge magnet is around 5 mT The magnetic flux density is sometimes referred to as the magnetic field strength Magnetic Flux Magnetic flux is a quantity which signifies how much of a magnetic field passes" } },
    { id: 'para-7', type: 'paragraph', data: { text: "perpendicularly through some area For example, the amount of magnetic flux through a rotating coil will vary as the coil rotates in the magnetic field It is a maximum when the magnetic field lines are perpendicular to the coil area" } },
    { id: 'para-8', type: 'paragraph', data: { text: "It is at a minimum when the magnetic field lines are parallel to the coil area The magnetic flux is defined as: The product of the magnetic flux density and the cross-sectional area perpendicular to the direction of the magnetic flux density" } },
    { id: 'para-9', type: 'paragraph', data: { text: "Magnetic flux is defined by the symbol Φ  (greek letter ‘phi') It is measured in units of Webers (Wb) Magnetic flux can be calculated using the equation: Φ = BA" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Where: Φ = magnetic flux (Wb) B = magnetic flux density (T) A = cross-sectional area (m )" } },
    { id: 'para-11', type: 'paragraph', data: { text: "The magnetic flux is maximised when the magnetic field lines and the area through which they are passing through are perpendicular When magnetic flux is not completely perpendicular to the area A, then the component of magnetic flux density B perpendicular to the area is taken" } },
    {
      id: 'svg-circular-path',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="250" fill="#F1F5F9" rx="10"/><path d="M 20 20 L 30 30 M 30 20 L 20 30" stroke="#94A3B8" stroke-width="2"/><path d="M 80 20 L 90 30 M 90 20 L 80 30" stroke="#94A3B8" stroke-width="2"/><path d="M 140 20 L 150 30 M 150 20 L 140 30" stroke="#94A3B8" stroke-width="2"/><path d="M 200 20 L 210 30 M 210 20 L 200 30" stroke="#94A3B8" stroke-width="2"/><path d="M 260 20 L 270 30 M 270 20 L 260 30" stroke="#94A3B8" stroke-width="2"/><path d="M 20 80 L 30 90 M 30 80 L 20 90" stroke="#94A3B8" stroke-width="2"/><path d="M 80 80 L 90 90 M 90 80 L 80 90" stroke="#94A3B8" stroke-width="2"/><path d="M 140 80 L 150 90 M 150 80 L 140 90" stroke="#94A3B8" stroke-width="2"/><path d="M 200 80 L 210 90 M 210 80 L 200 90" stroke="#94A3B8" stroke-width="2"/><path d="M 260 80 L 270 90 M 270 80 L 260 90" stroke="#94A3B8" stroke-width="2"/><path d="M 20 140 L 30 150 M 30 140 L 20 150" stroke="#94A3B8" stroke-width="2"/><path d="M 80 140 L 90 150 M 90 140 L 80 150" stroke="#94A3B8" stroke-width="2"/><path d="M 140 140 L 150 150 M 150 140 L 140 150" stroke="#94A3B8" stroke-width="2"/><path d="M 200 140 L 210 150 M 210 140 L 200 150" stroke="#94A3B8" stroke-width="2"/><path d="M 260 140 L 270 150 M 270 140 L 260 150" stroke="#94A3B8" stroke-width="2"/><circle cx="150" cy="120" r="60" fill="none" stroke="#3B82F6" stroke-width="3"/><circle cx="150" cy="60" r="10" fill="#EF4444"/><text x="145" y="65" font-family="Arial" font-size="14" fill="#FFF" font-weight="bold">+</text><line x1="162" y1="60" x2="200" y2="60" stroke="#10B981" stroke-width="3" marker-end="url(#arrow-vel)"/><text x="210" y="65" font-family="Arial" font-size="16" fill="#065F46">v</text><line x1="150" y1="72" x2="150" y2="110" stroke="#9333EA" stroke-width="3" marker-end="url(#arrow-force)"/><text x="130" y="100" font-family="Arial" font-size="16" fill="#6B21A8">F</text><defs><marker id="arrow-vel" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#10B981"/></marker><marker id="arrow-force" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#9333EA"/></marker></defs></svg>',
        caption: 'Charged Particle in a Magnetic Field'
      }
    },
    {
      id: 'svg-circular-formula',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="120" fill="#F8FAFC" rx="10"/><text x="175" y="50" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#1E3A8A">r = mv / BQ</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Momentum (mv) balanced by Magnetic Force (BQv)</text></svg>',
        caption: 'Radius of Circular Path Orbit'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Magnetic Force on a Current-Carrying Conductor' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
