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

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Internal Resistance' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
