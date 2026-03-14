export const note_physics_2_8_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Resistance & Temperature" } },
    { id: 'head-1', type: 'heading', data: { text: "Resistance & Temperature", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Resistance & Temperature will be updated." } },

      {
      "id": "svg-thermistor-graph",
      "type": "svg",
      "data": {
        "caption": "Resistance against Temperature for an NTC Thermistor",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 300\"><path d=\"M50 250 L50 50 M50 250 L350 250\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"250\" y=\"280\" font-family=\"Arial\" font-size=\"18\" fill=\"#1e293b\">Temperature (°C)</text><text x=\"30\" y=\"150\" font-family=\"Arial\" font-size=\"18\" fill=\"#1e293b\" transform=\"rotate(-90 30,150)\">Resistance (\u03a9)</text><path d=\"M70 60 Q 90 220 320 230\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"4\"/><rect x=\"200\" y=\"40\" width=\"150\" height=\"80\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"275\" y=\"65\" font-family=\"Arial\" font-size=\"14\" fill=\"#334155\" text-anchor=\"middle\">NTC Thermistor</text><text x=\"275\" y=\"85\" font-family=\"Arial\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"middle\">As Temp \u2191, n \u2191</text><text x=\"275\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#64748b\" text-anchor=\"middle\">Resistance \u2193 drops rapidly</text></svg>"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Resistance & Temperature' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
