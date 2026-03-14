export const note_physics_2_8_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Internal Resistance" } },
    { id: 'head-1', type: 'heading', data: { text: "Internal Resistance", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Internal Resistance Internal Resistance All power supplies have some resistance between their terminals This is called internal resistance (r)" } },
    { id: 'para-3', type: 'paragraph', data: { text: "Internal resistance causes some electrical energy to be transformed to heat energy in the power supply itself This is why the cell becomes warm after a period of time Therefore, the internal resistance causes energy loss in a power supply" } },
    { id: 'para-4', type: 'paragraph', data: { text: "A cell can be thought of as a source of e.m.f. with an internal resistance connected in series The amount of voltage lost is known as the 'lost volts' A higher internal resistance will result in a higher value for lost volts" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Circuit showing the e.m.f and internal resistance of a power supply Where: R = resistance of the circuit (the ‘load resistor') r = internal resistance" } },
    { id: 'para-6', type: 'paragraph', data: { text: "ε = e.m.f." } },
    { id: 'para-7', type: 'paragraph', data: { text: "V = 'lost volts' V= voltage across the load (sometimes also called V, the terminal voltage)r R T Examiner Tips and Tricks" } },
    { id: 'para-8', type: 'paragraph', data: { text: "The internal resistance concept catches many students out. Make sure you fully understand the circuit diagram; Internal resistance of the cell can be treated as though it were a separate resistor - although it isn't!" } },
    { id: 'para-9', type: 'paragraph', data: { text: "The load  resistance is treated as another resistor in series Potential difference is measured across the load resistor The lost volts are calculated as though they were the potential difference across" } },

      {
      "id": "svg-internal-resistance",
      "type": "svg",
      "data": {
        "caption": "Model of a real cell: An ideal E.M.F source in series with an internal resistance (r)",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 250\"><rect x=\"100\" y=\"50\" width=\"300\" height=\"150\" rx=\"15\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"8 4\"/><text x=\"250\" y=\"220\" font-family=\"Arial\" font-size=\"16\" fill=\"#64748b\" text-anchor=\"middle\">Real Cell</text><path d=\"M50 125 L150 125\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/><path d=\"M150 100 L150 150 M170 110 L170 140\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"4\"/><text x=\"160\" y=\"90\" font-family=\"Arial\" font-size=\"22\" font-weight=\"bold\" font-style=\"italic\" fill=\"#2563eb\" text-anchor=\"middle\">ε</text><path d=\"M170 125 L250 125\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/><rect x=\"250\" y=\"110\" width=\"80\" height=\"30\" fill=\"#fff\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"290\" y=\"132\" font-family=\"Arial\" font-size=\"22\" font-style=\"italic\" fill=\"#ef4444\" text-anchor=\"middle\">r</text><path d=\"M330 125 L450 125\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/><circle cx=\"50\" cy=\"125\" r=\"4\" fill=\"#1e293b\"/><circle cx=\"450\" cy=\"125\" r=\"4\" fill=\"#1e293b\"/><text x=\"250\" y=\"30\" font-family=\"Arial\" font-size=\"18\" fill=\"#334155\" text-anchor=\"middle\">Terminal P.D. (V)</text><path d=\"M50 40 L50 20 M450 40 L450 20 M50 20 L450 20\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/><path d=\"M240 15 L250 20 L240 25 Z\" fill=\"#94a3b8\"/><path d=\"M260 15 L250 20 L260 25 Z\" fill=\"#94a3b8\"/></svg>"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Internal Resistance' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
