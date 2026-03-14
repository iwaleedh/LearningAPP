export const note_physics_4_20_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Magnetic Flux Density, Flux & Flux Linkage" } },
    { id: 'head-1', type: 'heading', data: { text: "Magnetic Flux Density, Flux & Flux Linkage", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Magnetic Flux Density, Flux & Flux Linkage Magnetic Force on a Charged Particle Magnetic Flux Density, Flux & Flux Linkage Magnetic Flux Density, Flux & Flux" } },
    { id: 'para-3', type: 'paragraph', data: { text: "Linkage Magnetic Flux Density The strength of a magnetic field is defined by the density of the magnetic field lines, or magnetic flux density, at that point" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Magnetic flux density is defined by the symbol B It is measured in Tesla (T) Rearranging the equation for magnetic force on a wire, the magnetic flux density is defined by the equation:" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Where: B = magnetic flux density (T) F = magnetic force on a current-carrying wire (N) I = current (A)" } },
    { id: 'para-6', type: 'paragraph', data: { text: "L = length of the wire (m) For reference, the Earth's magnetic flux density is around 0.032 mT and an ordinary fridge magnet is around 5 mT The magnetic flux density is sometimes referred to as the magnetic field strength" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Magnetic Flux Magnetic flux is a quantity which signifies how much of a magnetic field passes perpendicularly through some area For example, the amount of magnetic flux through a rotating coil will vary as the coil" } },
    { id: 'para-8', type: 'paragraph', data: { text: "rotates in the magnetic field It is a maximum when the magnetic field lines are perpendicular to the coil area It is at a minimum when the magnetic field lines are parallel to the coil area The magnetic flux is defined as:" } },
    { id: 'para-9', type: 'paragraph', data: { text: "The product of the magnetic flux density and the cross-sectional area perpendicular to the direction of the magnetic flux density Magnetic flux is defined by the symbol Φ  (greek letter ‘phi') It is measured in units of Webers (Wb)" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Magnetic flux can be calculated using the equation: Φ = BA Where: Φ = magnetic flux (Wb)" } },
    { id: 'para-11', type: 'paragraph', data: { text: "B = magnetic flux density (T) A = cross-sectional area (m ) The magnetic flux is maximised when the magnetic field lines and the area through which they are passing through are perpendicular" } },
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
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Magnetic Flux Density, Flux & Flux Linkage' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
