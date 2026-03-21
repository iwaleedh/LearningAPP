export const note_physics_4_19_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Charge & Discharge Curves" } },
    { id: 'head-1', type: 'heading', data: { text: "Charge & Discharge Curves", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Charge & Discharge Curves Charge & Discharge Curves Charging Curves Capacitors are charged by a power supply (e.g. a battery)" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "When charging, electrons are 'pulled' from the plate connected to the positive terminal of the power supply Hence the plate nearest the positive terminal is positively charged Oppositely, electrons are 'pushed' onto the plate connected to the negative terminal" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "Hence the plate nearest the negative terminal is negatively charged As the negative charge builds up, fewer electrons are pushed onto the plate due to electrostatic repulsion from the electrons already on the plate When no more electrons can be pushed onto the negative plate, the charging stops" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "A parallel plate <strong>capacitor</strong> is made up of two conductive plates with opposite charges building up on each plate At the start of charging, the current is large and gradually falls to zero as the electrons stop flowing through the circuit" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "The current decreases exponentially This means the rate at which the charge decreases is proportional to the amount of charge it has left Since an equal but opposite charge builds up on each plate, the <strong>potential difference</strong>" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "between the plates slowly increases until it is the same as that of the power supply Therefore, the charge stored on the <strong>capacitor</strong> plates increases until the <strong>potential difference</strong> across the plates matches that of the power supply Graphs of variation of current, p.d and charge with time for a <strong>capacitor</strong> charging through" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "a battery The key features of the charging graphs are: The shapes of the p.d. and charge against time graphs are identical The current against time graph is an <strong>exponential decay</strong> curve" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "The initial value of the current starts on the y axis and decreases exponentially The initial value of the p.d and charge starts at 0 up to a maximum value Discharging Curves Capacitors are discharged through a resistor with no power supply present" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "The electrons now flow back from the negative plate to the positive terminal of the power supply until there is no <strong>potential difference</strong> across the <strong>capacitor</strong> plates Charging and discharging is commonly achieved by moving a switch that connects the <strong>capacitor</strong> between a power supply and a resistor" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>capacitor</strong> charges when connected to terminal P and discharges when connected to terminal Q At the start of discharge, the current is large (but in the opposite direction to when it was charging) and gradually falls to zero" }] } },
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
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/><path d="M 40 160 Q 120 70 340 50" fill="none" stroke="#6366f1" stroke-width="3"/><path d="M 40 50 Q 120 140 340 158" fill="none" stroke="#ef4444" stroke-width="3"/><line x1="40" y1="20" x2="40" y2="170" stroke="#374151" stroke-width="2"/><line x1="30" y1="160" x2="360" y2="160" stroke="#374151" stroke-width="2"/><text x="60" y="45" font-family="Arial" font-size="13" fill="#6366f1">Charge</text><text x="60" y="175" font-family="Arial" font-size="13" fill="#ef4444">Discharge</text></svg>',
        caption: 'Charge vs Discharge: V or Q against time — charging rises exponentially to V_max; discharging falls exponentially to zero.'
      }
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Time Constant',
        text: 'A 470 μF <strong>capacitor</strong> charges through a 10 kΩ resistor. Find the <strong>time constant</strong> τ.\n\nτ = RC = 10 × 10³ × 470 × 10⁻⁶ = <strong>4.7 s</strong>\n\nAfter one <strong>time constant</strong>, the <strong>capacitor</strong> reaches ≈ 63% of the supply voltage.'
      }
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Exponential Decay',
        text: 'Remember: Q = Q₀e<sup>−t/RC</sup> and V = V₀e<sup>−t/RC</sup> apply during <em>discharge</em>. During charging use V = V₀(1 − e<sup>−t/RC</sup>). Always check which equation the question requires.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Discharge vs Charging Equations",
        text: "Discharge: Q = Q\u2080e^(\u2212t/RC) and V = V\u2080e^(\u2212t/RC). Charging: V = V\u2080(1 \u2212 e^(\u2212t/RC)). Both describe exponential behavior with same time constant."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Equation Selection",
        text: "Always check which equation your question requires \u2014 discharge and charging curves have opposite signs and are easily confused."
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Charge & Discharge Curves' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
