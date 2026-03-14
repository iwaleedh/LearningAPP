export const note_physics_2_8_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand E.M.F. vs. Terminal Potential Difference" } },
    { id: 'head-1', type: 'heading', data: { text: "E.M.F. vs. Terminal Potential Difference", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "E.M.F. vs. Terminal Potential Difference E.M.F. vs. Terminal Potential Difference Terminal Potential Difference The terminal potential difference (p.d.) is the potential difference across the terminals" } },
    { id: 'para-3', type: 'paragraph', data: { text: "of a cell If there was no internal resistance, the terminal p.d. would be equal to the e.m.f." } },
    { id: 'para-4', type: 'paragraph', data: { text: "If a cell has internal resistance, the terminal p.d. is always lower than the e.m.f." } },
    { id: 'para-5', type: 'paragraph', data: { text: "If you have a load resistor R across the cell's terminals, then the terminal p.d. is also the potential difference across the load resistor Circuit showing the e.m.f. and internal resistance of a power supply Where:" } },
    { id: 'para-6', type: 'paragraph', data: { text: "Resistor R is the ‘load resistor' r is the internal resistance ε is the e.m.f." } },
    { id: 'para-7', type: 'paragraph', data: { text: "V is the lost volts V is the p.d across the load resistor, which is the same as the terminal p.d." } },
    { id: 'para-8', type: 'paragraph', data: { text: "Terminal potential difference is the voltage available to the rest of the circuit V= I × R ( from Ohm's law) Where: r" } },
    { id: 'para-9', type: 'paragraph', data: { text: "R R = load resistance ( Ω ) I = current in the circuit (A) V = Terminal p.d. (V)" } },
    { id: 'para-10', type: 'paragraph', data: { text: "When a load resistor is connected, current flows through the cell and a potential difference develops across the internal resistance." } },
    { id: 'para-11', type: 'paragraph', data: { text: "This voltage is not available to the rest of the circuit so is called the ‘lost volts' V is the lost volts This is the voltage lost in the cell due to internal resistance V = I × r (from Ohm's law)" } },

      {
      "id": "svg-v-vs-i",
      "type": "svg",
      "data": {
        "caption": "Graph of Terminal P.D. against Current (V = \u03b5 - Ir)",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 300\"><path d=\"M50 250 L50 50 M50 250 L350 250\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"300\" y=\"280\" font-family=\"Arial\" font-size=\"18\" fill=\"#1e293b\">Current, I (A)</text><text x=\"30\" y=\"150\" font-family=\"Arial\" font-size=\"18\" fill=\"#1e293b\" transform=\"rotate(-90 30,150)\">Terminal P.D., V (V)</text><path d=\"M50 80 L300 250\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"80\" r=\"5\" fill=\"#ef4444\"/><text x=\"60\" y=\"75\" font-family=\"Arial\" font-size=\"20\" font-weight=\"bold\" font-style=\"italic\" fill=\"#ef4444\">\u03b5 (E.M.F.)</text><path d=\"M150 148 L220 148 L220 195\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><text x=\"228\" y=\"170\" font-family=\"Arial\" font-size=\"16\" fill=\"#475569\">Gradient = -r</text><circle cx=\"300\" cy=\"250\" r=\"5\" fill=\"#10b981\"/><text x=\"310\" y=\"240\" font-family=\"Arial\" font-size=\"16\" fill=\"#10b981\">Short-circuit I</text></svg>"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise E.M.F. vs. Terminal Potential Difference' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
