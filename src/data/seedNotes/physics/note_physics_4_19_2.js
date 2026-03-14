export const note_physics_4_19_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Charge & Discharge Curves" } },
    { id: 'head-1', type: 'heading', data: { text: "Charge & Discharge Curves", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Charge & Discharge Curves Charge & Discharge Curves Charging Curves Capacitors are charged by a power supply (e.g. a battery)" } },
    { id: 'para-3', type: 'paragraph', data: { text: "When charging, electrons are 'pulled' from the plate connected to the positive terminal of the power supply Hence the plate nearest the positive terminal is positively charged Oppositely, electrons are 'pushed' onto the plate connected to the negative terminal" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Hence the plate nearest the negative terminal is negatively charged As the negative charge builds up, fewer electrons are pushed onto the plate due to electrostatic repulsion from the electrons already on the plate When no more electrons can be pushed onto the negative plate, the charging stops" } },
    { id: 'para-5', type: 'paragraph', data: { text: "A parallel plate capacitor is made up of two conductive plates with opposite charges building up on each plate At the start of charging, the current is large and gradually falls to zero as the electrons stop flowing through the circuit" } },
    { id: 'para-6', type: 'paragraph', data: { text: "The current decreases exponentially This means the rate at which the charge decreases is proportional to the amount of charge it has left Since an equal but opposite charge builds up on each plate, the potential difference" } },
    { id: 'para-7', type: 'paragraph', data: { text: "between the plates slowly increases until it is the same as that of the power supply Therefore, the charge stored on the capacitor plates increases until the potential difference across the plates matches that of the power supply Graphs of variation of current, p.d and charge with time for a capacitor charging through" } },
    { id: 'para-8', type: 'paragraph', data: { text: "a battery The key features of the charging graphs are: The shapes of the p.d. and charge against time graphs are identical The current against time graph is an exponential decay curve" } },
    { id: 'para-9', type: 'paragraph', data: { text: "The initial value of the current starts on the y axis and decreases exponentially The initial value of the p.d and charge starts at 0 up to a maximum value Discharging Curves Capacitors are discharged through a resistor with no power supply present" } },
    { id: 'para-10', type: 'paragraph', data: { text: "The electrons now flow back from the negative plate to the positive terminal of the power supply until there is no potential difference across the capacitor plates Charging and discharging is commonly achieved by moving a switch that connects the capacitor between a power supply and a resistor" } },
    { id: 'para-11', type: 'paragraph', data: { text: "The capacitor charges when connected to terminal P and discharges when connected to terminal Q At the start of discharge, the current is large (but in the opposite direction to when it was charging) and gradually falls to zero" } },
    {
      id: 'svg-charging-graph',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="40,160 40,40 40,160 260,160" fill="none" stroke="#000" stroke-width="2"/><path d="M 40 160 Q 100 80 240 60" fill="none" stroke="#10B981" stroke-width="3"/><line x1="40" y1="60" x2="260" y2="60" stroke="#9CA3AF" stroke-dasharray="4"/><text x="20" y="100" font-family="Arial" font-size="14" transform="rotate(-90 20,100)">V or Q</text><text x="150" y="180" font-family="Arial" font-size="14">Time (t)</text><text x="250" y="50" font-family="Arial" font-size="12" fill="#4B5563">V_max</text></svg>',
        caption: 'Charging a Capacitor'
      }
    },
    {
      id: 'svg-discharging-graph',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="40,160 40,40 40,160 260,160" fill="none" stroke="#000" stroke-width="2"/><path d="M 40 60 Q 100 140 240 155" fill="none" stroke="#EF4444" stroke-width="3"/><text x="20" y="100" font-family="Arial" font-size="14" transform="rotate(-90 20,100)">V, Q or I</text><text x="150" y="180" font-family="Arial" font-size="14">Time (t)</text></svg>',
        caption: 'Discharging a Capacitor'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Charge & Discharge Curves' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
