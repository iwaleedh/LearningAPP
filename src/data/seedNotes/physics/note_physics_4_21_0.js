export const note_physics_4_21_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Induced E.M.F in a Moving Coil" } },
    { id: 'head-1', type: 'heading', data: { text: "Induced E.M.F in a Moving Coil", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Induced E.M.F in a Moving Coil Induced E.M.F in a Moving Coil Electromagnetic induction is a phenomenon which occurs when an e.m.f is induced when a conductor moves through a magnetic field" } },
    { id: 'para-3', type: 'paragraph', data: { text: "If there is a change in magnetic flux Φ or magnetic flux linkage N Φ Mechanical work (from moving the conductor in the field) is transformed into electrical energy Therefore, if attached to a complete circuit, a current will be induced in the conductor" } },
    { id: 'para-4', type: 'paragraph', data: { text: "This is known as electromagnetic induction and is defined as: The process in which an e.m.f is induced in a closed circuit due to changes in magnetic flux (linkage) This can occur either when:" } },
    { id: 'para-5', type: 'paragraph', data: { text: "A conductor cuts through a magnetic field The magnetic flux (linkage) through a coil changes, e.g. becomes more or less dense, or changes direction Electromagnetic induction is used in:" } },
    { id: 'para-6', type: 'paragraph', data: { text: "Electrical generators which convert mechanical energy to electrical energy Transformers which are used in electrical power transmission This phenomenon can easily be demonstrated with a magnet and a coil, or a wire and two magnets" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Relative Motion between a Coil and a Magnet When a coil is connected to a sensitive voltmeter, a bar magnet can be moved in and out A bar magnet is moved through a coil connected to a voltmeter to induce an e.m.f The observations are:" } },
    { id: 'para-8', type: 'paragraph', data: { text: "When the bar magnet is not moving, the voltmeter shows a zero reading When the bar magnet is held still inside, or outside, the coil, the rate of change of flux is zero, so, there is no e.m.f induced When the bar magnet begins to move inside the coil, there is a reading on the voltmeter" } },
    { id: 'para-9', type: 'paragraph', data: { text: "As the bar magnet moves, its magnetic field lines ‘cut through' the coil, generating a change in magnetic flux ( ΔΦ ) This induces an e.m.f within the coil, shown momentarily by the reading on the voltmeter" } },
    { id: 'para-10', type: 'paragraph', data: { text: "When the bar magnet is taken back out of the coil, an e.m.f is induced in the opposite direction As the magnet changes direction, the direction of the current changes The voltmeter will momentarily show a reading with the opposite sign" } },
    { id: 'para-11', type: 'paragraph', data: { text: "Increasing the speed of the magnet induces an e.m.f with a higher magnitude As the speed of the magnet increases, the rate of change of flux increases The direction of the electric current, and e.m.f, induced in the conductor is such that it opposes the change that produces it" } },
    {
      id: 'svg-magnetic-flux',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="100" height="100" fill="#DBEAFE" stroke="#2563EB" stroke-width="2" transform="skewY(20)"/><path d="M 50 120 L 250 120" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><path d="M 50 140 L 250 140" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><path d="M 50 160 L 250 160" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><text x="260" y="145" font-family="Arial" font-size="14" fill="#991B1B">B Field</text><text x="120" y="130" font-family="Arial" font-size="14" fill="#1E3A8A" transform="skewY(20)">Area (A)</text><defs><marker id="arrow-flux" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#EF4444"/></marker></defs></svg>',
        caption: 'Magnetic Flux'
      }
    },
    {
      id: 'svg-flux-equation',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="120" fill="#F0FDF4" rx="10"/><text x="175" y="50" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#065F46">&Phi; = B A</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Flux (Weber, Wb) = Flux Density (T) &times; Area (m&sup2;)</text></svg>',
        caption: 'Magnetic Flux Formula'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Induced E.M.F in a Moving Coil' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
