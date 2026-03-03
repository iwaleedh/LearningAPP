export const note_physics_2_4_5 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand potential dividers; calculate output voltage; use with thermistors and LDRs as sensors.' }, terms: ['potential divider'] },
    { id: 'h-pd', type: 'heading', data: { text: 'Potential Dividers', level: 2 }, terms: [] },
    { id: 'eq-pd', type: 'equation', data: { html: 'V<sub>out</sub> = V<sub>in</sub> \u00d7 R\u2082/(R\u2081+R\u2082)', caption: 'Potential divider output voltage' }, terms: [] },
    { id: 'p-sensor', type: 'paragraph', data: { text: 'Replacing one resistor with a thermistor or LDR creates a sensor circuit. As temperature/light changes, the resistance ratio changes, changing V_out. This voltage can trigger a switch or be measured.' }, terms: [] },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'V_in = 9V, R\u2081 = 3k\u03a9, R\u2082 = 6k\u03a9.\nV_out = 9 \u00d7 6/(3+6) = 9 \u00d7 2/3 = 6V' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate V_out for a potential divider', checked: false }, { text: 'I can design sensor circuits with thermistors/LDRs', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: A potential divider shares voltage in proportion to resistance. Changing one R changes V_out without needing a variable supply.\n\nApply: Design a circuit that outputs high voltage when temperature increases (NTC thermistor).\n\nAnalyze: What happens to V_out if a load (low resistance) is connected across R\u2082?\n\nEvaluate: Compare a potential divider with a variable resistor for controlling voltage. Advantages/disadvantages?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'V_out = V_in \u00d7 R\u2082/(R\u2081+R\u2082). Sensors: thermistor or LDR replaces one R. Change in conditions \u2192 change in V_out.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'eq-pd', prompt: 'State the potential divider equation.' },
  ], summaryText: 'V_out=V_in\u00d7R\u2082/(R\u2081+R\u2082). Thermistor/LDR as sensor.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 4', detail: 'Potential dividers', year: '2021', source: 'Pearson Edexcel', tags: ['potential divider'] }],
};
