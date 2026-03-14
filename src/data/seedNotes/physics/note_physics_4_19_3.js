export const note_physics_4_19_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Core Practical 11: Investigating Capacitor Charge & Discharge" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 11: Investigating Capacitor Charge & Discharge", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Core Practical 11: Investigating Capacitor Charge & Discharge will be updated." } },
    {
      id: 'svg-exponential-decay',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="50,150 50,30 50,150 260,150" fill="none" stroke="#000" stroke-width="2"/><path d="M 50 40 Q 110 120 250 145" fill="none" stroke="#3B82F6" stroke-width="3"/><line x1="50" y1="80" x2="110" y2="80" stroke="#9CA3AF" stroke-dasharray="4"/><line x1="110" y1="150" x2="110" y2="80" stroke="#9CA3AF" stroke-dasharray="4"/><text x="20" y="45" font-family="Arial" font-size="12">V_0</text><text x="15" y="85" font-family="Arial" font-size="12">0.37 V_0</text><text x="105" y="170" font-family="Arial" font-size="12">t = RC</text><text x="25" y="90" font-family="Arial" font-size="14" transform="rotate(-90 25,90)">Voltage</text><text x="150" y="185" font-family="Arial" font-size="14">Time</text></svg>',
        caption: 'Exponential Decay & Time Constant'
      }
    },
    {
      id: 'svg-decay-formula',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" fill="#F0FDF4" rx="10"/><text x="150" y="55" font-family="Times New Roman" font-size="24" font-weight="bold" font-style="italic" text-anchor="middle" fill="#065F46">x = x&#8320; e<tspan dy="-10" font-size="16">&#8722;t/RC</tspan></text><text x="150" y="85" font-family="Arial" font-size="14" text-anchor="middle" fill="#047857">Where x can be Q, V, or I</text></svg>',
        caption: 'Decay Equation'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Core Practical 11: Investigating Capacitor Charge & Discharge' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
