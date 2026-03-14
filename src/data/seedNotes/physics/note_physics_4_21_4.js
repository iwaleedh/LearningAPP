export const note_physics_4_21_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Alternating Currents & Potential Differences" } },
    { id: 'head-1', type: 'heading', data: { text: "Alternating Currents & Potential Differences", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Notes for Alternating Currents & Potential Differences will be updated." } },
    {
      id: 'svg-rms-values',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="30,160 30,30 30,160 280,160" fill="none" stroke="#000" stroke-width="2"/><path d="M 30 160 Q 60 40 90 160 T 150 160 T 210 160" fill="none" stroke="#93C5FD" stroke-width="2"/><path d="M 30 160 Q 60 10 90 160 T 150 160 T 210 160" fill="none" stroke="#EF4444" stroke-width="2"/><line x1="30" y1="85" x2="280" y2="85" stroke="#10B981" stroke-width="3" stroke-dasharray="6"/><text x="90" y="25" font-family="Arial" font-size="12" fill="#EF4444">Current Squared (I&sup2;)</text><text x="210" y="80" font-family="Arial" font-size="12" fill="#065F46">Mean Square Value</text><text x="20" y="90" font-family="Arial" font-size="12" transform="rotate(-90 20,90)">Value</text></svg>',
        caption: 'Root Mean Square (RMS) Concept'
      }
    },
    {
      id: 'svg-rms-formula',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#F8FAFC" rx="10"/><text x="175" y="50" font-family="Times New Roman" font-size="28" font-style="italic" font-weight="bold" text-anchor="middle" fill="#1E3A8A">V<tspan dy="6" font-size="16">rms</tspan> = V&#8320; / &radic;2</text><text x="175" y="90" font-family="Times New Roman" font-size="28" font-style="italic" font-weight="bold" text-anchor="middle" fill="#065F46">I<tspan dy="6" font-size="16">rms</tspan> = I&#8320; / &radic;2</text><text x="175" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">V&#8320; and I&#8320; are peak values (maximum amplitude)</text></svg>',
        caption: 'RMS Formulas'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Alternating Currents & Potential Differences' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
