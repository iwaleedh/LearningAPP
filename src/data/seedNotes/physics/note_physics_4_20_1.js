export const note_physics_4_20_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Magnetic Force on a Charged Particle" } },
    { id: 'head-1', type: 'heading', data: { text: "Magnetic Force on a Charged Particle", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Magnetic Force on a Charged Particle Magnetic Force on a Charged Particle The magnetic force on an isolated moving charged particle, such as a proton, is given by the equation:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "F = BQv Where: F = magnetic force on the particle (N) B = magnetic flux density (T)" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Q = charge of the particle (C) v = speed of the particle (m s) This is the maximum force on the charged particle, when F, B and v are mutually perpendicular" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Therefore if a particle travels parallel to a magnetic field, it will not experience a magnetic force Current is the rate of flow of positive charge This means that the direction of the 'current' for a flow of negative charge (e.g. an" } },
    { id: 'para-6', type: 'paragraph', data: { text: "electron beam) is in the opposite direction to its motion If the charged particle is moving at an angle  θ to the magnetic field lines, then the size of the magnetic force F is given by the equation: F = BQv sin θ" } },
    { id: 'para-7', type: 'paragraph', data: { text: "This equation shows that: The size of the magnetic force is zero if the angle θ is zero (i.e. the particle moves parallel to the field lines) The size of the magnetic force is maximum if the angle θ is 90° (i.e. the particle" } },
    { id: 'para-8', type: 'paragraph', data: { text: "moves perpendicular to field lines)-1 Worked Example A beta particle is incident at 70° to a magnetic field of flux density 0.5 mT, travelling at Calculate:" } },
    { id: 'para-9', type: 'paragraph', data: { text: "a) The magnitude of the magnetic force on the beta particle b) The magnitude of the maximum possible force on a beta particle in this magnetic field, travelling with the same speed Answer:" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Part (a) Step 1: Write out the known quantities Magnetic flux density B = 0.5 mT = 0.5 × 10  T Speed v = 1.5 × 10 m s" } },
    { id: 'para-11', type: 'paragraph', data: { text: "Angle  θ between the flux and the velocity = 70° Step 2: Substitute quantities into the equation for magnetic force on a charged particle A beta particle is an electron" } },
    {
      id: 'svg-force-formula-wire',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#F8FAFC" rx="10"/><text x="175" y="50" font-family="Arial" font-size="32" font-weight="bold" text-anchor="middle" fill="#1E40AF">F = B I l sin(&theta;)</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">B = Magnetic flux density (Tesla)</text><text x="175" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">I = Current (Amps), l = Length (m)</text><text x="175" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">&theta; = Angle between wire and field</text></svg>',
        caption: 'Magnetic Force on a Wire'
      }
    },
    {
      id: 'svg-force-formula-charge',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#FFFBEB" rx="10"/><text x="175" y="50" font-family="Arial" font-size="32" font-weight="bold" text-anchor="middle" fill="#065F46">F = B Q v</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">B = Magnetic flux density (Tesla)</text><text x="175" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Q = Charge (Coulombs)</text><text x="175" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">v = Velocity (m/s)</text></svg>',
        caption: 'Magnetic Force on a Charge'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Magnetic Force on a Charged Particle' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
