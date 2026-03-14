export const note_physics_4_19_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Energy Stored by a Capacitor" } },
    { id: 'head-1', type: 'heading', data: { text: "Energy Stored by a Capacitor", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Energy Stored by a Capacitor Energy Stored by a Capacitor When charging a capacitor, the power supply 'pushes' electrons to one of the metal plates" } },
    { id: 'para-3', type: 'paragraph', data: { text: "It therefore does work on the electrons and electrical energy becomes stored on the plates The power supply 'pulls' electrons off of the other metal plate, attracting them to the positive terminal" } },
    { id: 'para-4', type: 'paragraph', data: { text: "This leaves one side positively charged, while the other side becomes negatively charged Hence, in this way, charge is 'stored' by the capacitor Gradually, this stored charge builds up" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Adding more electrons to the negative plate at first is relatively easy since there is little repulsion As the charge of the negative plate increases, i.e., becomes more negatively charged, the force of repulsion between the electrons on the plate and the new electrons being" } },
    { id: 'para-6', type: 'paragraph', data: { text: "pushed onto it increases This means a greater amount of work must be done to increase the charge on the negative plate or in other words: The potential difference across the capacitor increases as the amount of charge" } },
    { id: 'para-7', type: 'paragraph', data: { text: "increases As the charge on the negative plate builds up, more work needs to be done to add more charge Alternative Equations for Energy Stored" } },
    { id: 'para-8', type: 'paragraph', data: { text: "The energy stored by a capacitor is given by: W =1 2QV Substituting the charge Q with the capacitance equation Q = CV, the energy stored can" } },
    { id: 'para-9', type: 'paragraph', data: { text: "also be calculated by the following equation: W =1 2CV2 By substituting the potential difference V, the energy stored can also be defined in" } },
    { id: 'para-10', type: 'paragraph', data: { text: "terms of just the charge stored Q and the capacitance, C: W =Q2 2C Worked Example" } },
    { id: 'para-11', type: 'paragraph', data: { text: "Calculate the change in the energy stored in a capacitor of capacitance 1500 μ F when the potential difference across the capacitor changes from 10 V to 30 V." } },
    {
      id: 'svg-energy-capacitor',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="50,150 50,30 50,150 250,150" fill="none" stroke="#000" stroke-width="2"/><line x1="50" y1="150" x2="200" y2="50" stroke="#3B82F6" stroke-width="3"/><text x="25" y="90" font-family="Arial" font-size="14" transform="rotate(-90 25,90)">V (Volts)</text><text x="150" y="170" font-family="Arial" font-size="14">Q (Coulombs)</text><polygon points="50,150 200,150 200,50" fill="#93C5FD" fill-opacity="0.5"/><text x="140" y="125" font-family="Arial" font-size="14" fill="#1E3A8A">Area = Energy (W)</text></svg>',
        caption: 'Energy Stored in a Capacitor'
      }
    },
    {
      id: 'svg-energy-formulae',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#F8FAFC" rx="10"/><text x="175" y="40" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#1E3A8A">Energy Stored (W)</text><text x="175" y="75" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 Q V</text><text x="175" y="105" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 C V&sup2;</text><text x="175" y="135" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 Q&sup2; / C</text></svg>',
        caption: 'Energy Formulas'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Energy Stored by a Capacitor' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
