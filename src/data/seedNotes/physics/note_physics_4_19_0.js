export const note_physics_4_19_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Capacitance" } },
    { id: 'head-1', type: 'heading', data: { text: "Capacitance", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Capacitance Capacitance Capacitors are electrical devices used to store energy in electronic circuits, commonly for a backup release of energy if the power fails" } },
    { id: 'para-3', type: 'paragraph', data: { text: "Capacitors do this by storing electric charge, which creates a build up of electric potentialenergy They are made in the form of two conductive metalplates connected to a voltage supply (parallel plate capacitor)" } },
    { id: 'para-4', type: 'paragraph', data: { text: "There is commonly a dielectric in between the plates, to ensure charge does not flow across them The capacitor circuit symbol is: The capacitor circuit symbol is two parallel lines" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Capacitors are marked with a value of their capacitance Capacitance is defined as: The charge stored per unit potential difference (between the plates) The greater the capacitance, the greater the charge stored in the capacitor" } },
    { id: 'para-6', type: 'paragraph', data: { text: "The capacitance of a capacitor is defined by the equation: Where: C = capacitance (F) Q = charge stored (C)" } },
    { id: 'para-7', type: 'paragraph', data: { text: "V = potential difference across the capacitor plates (V) A capacitor used in small circuits Capacitance is measured in the unit Farad (F) In practice, 1 F is a very large unit" } },
    { id: 'para-8', type: 'paragraph', data: { text: "Often it will be quoted in the order of micro Farads ( μ F), nanofarads (nF) or picofarads (pF) If the capacitor is made of parallel plates, Q is the charge on the plates and V is the potential difference across the capacitor" } },
    { id: 'para-9', type: 'paragraph', data: { text: "The charge Q is not the charge of the capacitor itself, it is the charge stored on the plates This capacitance equation shows that an object's capacitance is the ratio of the charge stored by the capacitor to the potential difference between the plates" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Worked Example A parallel plate capacitor has a capacitance of 1 nF and is connected to a voltage supply of 0.3 kV." } },
    { id: 'para-11', type: 'paragraph', data: { text: "Calculate the charge on the plates." } },
    {
      id: 'svg-capacitor-basic',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="40" width="20" height="120" fill="#3B82F6" stroke="#1E40AF" stroke-width="2"/><rect x="280" y="40" width="20" height="120" fill="#EF4444" stroke="#991B1B" stroke-width="2"/><text x="110" y="30" font-family="Arial" font-size="14" text-anchor="middle" fill="#1E40AF">+Q</text><text x="290" y="30" font-family="Arial" font-size="14" text-anchor="middle" fill="#991B1B">-Q</text><path d="M125 60 L275 60" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><path d="M125 100 L275 100" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><path d="M125 140 L275 140" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><text x="200" y="120" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Electric Field E</text><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#9CA3AF"/></marker></defs></svg>',
        caption: 'Parallel Plate Capacitor'
      }
    },
    {
      id: 'svg-capacitance-formula',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="150" fill="#F8FAFC" rx="10"/><text x="150" y="60" font-family="Verdana" font-size="28" font-weight="bold" text-anchor="middle" fill="#1E3A8A">C = Q / V</text><text x="150" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">C = Capacitance (F)</text><text x="150" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">Q = Charge (C)</text><text x="150" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">V = Potential Difference (V)</text></svg>',
        caption: 'Capacitance Relationship'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Capacitance' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
