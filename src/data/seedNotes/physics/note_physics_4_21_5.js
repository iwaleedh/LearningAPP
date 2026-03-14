export const note_physics_4_21_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Root-Mean-Square Current & Potential Difference" } },
    { id: 'head-1', type: 'heading', data: { text: "Root-Mean-Square Current & Potential Difference", level: 2 } },
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
      id: 'svg-transformer-structure',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="250" height="120" fill="none" stroke="#6B7280" stroke-width="30"/><text x="175" y="105" font-family="Arial" font-size="14" text-anchor="middle" fill="#374151">Soft Iron Core</text><path d="M 20 60 Q 40 50 65 60 T 65 90 T 65 120 T 65 150 L 20 150" fill="none" stroke="#D97706" stroke-width="4"/><path d="M 330 50 Q 310 40 285 50 T 285 70 T 285 90 T 285 110 T 285 130 L 330 130" fill="none" stroke="#EF4444" stroke-width="4"/><text x="35" y="40" font-family="Arial" font-size="14" fill="#B45309">Primary (Np)</text><text x="290" y="30" font-family="Arial" font-size="14" fill="#991B1B">Secondary (Ns)</text></svg>',
        caption: 'Transformer Structure'
      }
    },
    {
      id: 'svg-transformer-equation',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#FEF3C7" rx="10"/><text x="175" y="55" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#92400E">Vp / Vs = Np / Ns</text><text x="175" y="100" font-family="Arial" font-size="16" text-anchor="middle" fill="#4B5563">For an ideal transformer (100% efficient):</text><text x="175" y="125" font-family="Courier New" font-size="20" font-weight="bold" text-anchor="middle" fill="#065F46">Ip Vp = Is Vs</text></svg>',
        caption: 'Transformer Equation'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Root-Mean-Square Current & Potential Difference' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
