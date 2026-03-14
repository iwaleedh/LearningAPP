export const note_physics_2_8_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Resistance & Illumination" } },
    { id: 'head-1', type: 'heading', data: { text: "Resistance & Illumination", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Electromotive Force Electromotive Force When charge passes through a power supply such as a battery, it gains electrical energy The electromotive force (e.m.f.) is defined as:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "The amount of chemical energy converted to electrical energy per unit charge when charge passes through a power supply e.m.f. is measured in Volts (V) Definition of e.m.f. with regards to energy transfer" } },
    { id: 'para-4', type: 'paragraph', data: { text: "This can also be written as: E.m.f. is: represented by the symbol ε (greek letter epsilon) not actually a force, but a measure of energy transferred per coulomb of charge" } },
    { id: 'para-5', type: 'paragraph', data: { text: "is measured in volts (V), which is J C  in S.I. units e.m.f. is also the potential difference across the cell when no current is flowing e.m.f. can be measured by connecting a high-resistance voltmeter around the terminals of the cell in an open circuit" } },
    { id: 'para-6', type: 'paragraph', data: { text: "e.m.f. is measured using a voltmeter connected in parallel with the cell −1 Internal Resistance Internal Resistance" } },
    { id: 'para-7', type: 'paragraph', data: { text: "All power supplies have some resistance between their terminals This is called internal resistance (r) Internal resistance causes some electrical energy to be transformed to heat energy in the power supply itself" } },
    { id: 'para-8', type: 'paragraph', data: { text: "This is why the cell becomes warm after a period of time Therefore, the internal resistance causes energy loss in a power supply A cell can be thought of as a source of e.m.f. with an internal resistance connected in series" } },
    { id: 'para-9', type: 'paragraph', data: { text: "The amount of voltage lost is known as the 'lost volts' A higher internal resistance will result in a higher value for lost volts Circuit showing the e.m.f and internal resistance of a power supply Where:" } },
    { id: 'para-10', type: 'paragraph', data: { text: "R = resistance of the circuit (the ‘load resistor') r = internal resistance ε = e.m.f." } },
    { id: 'para-11', type: 'paragraph', data: { text: "V = 'lost volts' V= voltage across the load (sometimes also called V, the terminal voltage)r R T Examiner Tips and Tricks" } },

      {
      "id": "svg-ldr-graph",
      "type": "svg",
      "data": {
        "caption": "Resistance against Light Intensity for an LDR",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 300\"><path d=\"M50 250 L50 50 M50 250 L350 250\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"220\" y=\"280\" font-family=\"Arial\" font-size=\"18\" fill=\"#1e293b\">Light Intensity (Lux)</text><text x=\"30\" y=\"150\" font-family=\"Arial\" font-size=\"18\" fill=\"#1e293b\" transform=\"rotate(-90 30,150)\">Resistance (\u03a9)</text><path d=\"M70 60 Q 100 220 320 230\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"4\"/><rect x=\"200\" y=\"50\" width=\"160\" height=\"90\" rx=\"8\" fill=\"#fdfde8\" stroke=\"#fef08a\" stroke-width=\"2\"/><text x=\"280\" y=\"75\" font-family=\"Arial\" font-size=\"14\" fill=\"#ca8a04\" text-anchor=\"middle\">LDR (Light Dependent Resistor)</text><text x=\"280\" y=\"95\" font-family=\"Arial\" font-size=\"12\" fill=\"#a16207\" text-anchor=\"middle\">Dark = High R (M\u03a9)</text><text x=\"280\" y=\"115\" font-family=\"Arial\" font-size=\"12\" fill=\"#854d0e\" text-anchor=\"middle\">Light = Low R (\u03a9)</text></svg>"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Resistance & Illumination' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
