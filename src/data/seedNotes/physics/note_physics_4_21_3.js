export const note_physics_4_21_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Faraday\'s Law" } },
    { id: 'head-1', type: 'heading', data: { text: "Faraday\'s Law", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Faraday's Law Faraday's Law connects the rate of change of flux linkage with induced e.m.f It is defined in words as: The magnitude of the induced e.m.f is directly proportional to the rate of change of" } },
    { id: 'para-3', type: 'paragraph', data: { text: "magnetic flux linkage Faraday's Law as an equation is defined as: ε =∆ (NΦ ) ∆t" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Where: ε = induced e.m.f (V) Δ(Nɸ) = change in flux linkage (Wb turns) Δt = time interval (s)" } },
    { id: 'para-5', type: 'paragraph', data: { text: "If the interval of time becomes very small (i.e., in the limit of Δt → 0) the equation for Faraday's Law can be written as: ε =d (NΦ ) dt" } },
    { id: 'para-6', type: 'paragraph', data: { text: "Combining Lenz's Law and Faraday's Law Combining Lenz's Law into the equation for Faraday's Law is written as: ε = −d (NΦ ) dt" } },
    { id: 'para-7', type: 'paragraph', data: { text: "The negativesign represents Lenz's Law This is because it shows the induced e.m.f ε is set up in an 'oppositedirection' to oppose the changing flux linkage This equation also shows that the gradient of the graph of magnetic flux (linkage) against" } },
    { id: 'para-8', type: 'paragraph', data: { text: "time, ∆ (NΦ ) ∆t represents the magnitude of the induced e.m.f Note: the negative sign means if the gradient is positive, the induced e.m.f is negative" } },
    { id: 'para-9', type: 'paragraph', data: { text: "This is again due to Lenz's Law, which says the e.m.f. is set up to oppose the effects Worked Example A small rectangular coil contains 350 turns of wire. The longer sides are 3.5 cm and the shorter sides are 1.4 cm." } },
    { id: 'para-10', type: 'paragraph', data: { text: "The coil is held between the poles of a large magnet so that it can rotate about an axis through its centre." } },
    { id: 'para-11', type: 'paragraph', data: { text: "The magnet produces a uniform magnetic field of flux density 80 mT between its poles. The coil is positioned horizontally and then turned through an angle of 90° in a time of 0.18 s." } },
    {
      id: 'svg-ac-generator',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="60" height="100" fill="#EF4444"/><text x="60" y="105" font-family="Arial" font-size="20" fill="#FFF" text-anchor="middle">N</text><rect x="260" y="50" width="60" height="100" fill="#3B82F6"/><text x="290" y="105" font-family="Arial" font-size="20" fill="#FFF" text-anchor="middle">S</text><path d="M 90 70 L 260 70" stroke="#9CA3AF" stroke-dasharray="4"/><path d="M 90 100 L 260 100" stroke="#9CA3AF" stroke-dasharray="4"/><path d="M 90 130 L 260 130" stroke="#9CA3AF" stroke-dasharray="4"/><rect x="130" y="60" width="90" height="80" fill="none" stroke="#D97706" stroke-width="4" transform="rotate(30 175 100)"/><path d="M 150 145 C 130 180, 110 180, 110 200" fill="none" stroke="#D97706" stroke-width="3"/><path d="M 195 155 C 220 180, 240 180, 240 200" fill="none" stroke="#D97706" stroke-width="3"/></svg>',
        caption: 'Simple A.C. Generator'
      }
    },
    {
      id: 'svg-ac-graph',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><polyline points="20,120 20,20 20,70 280,70" fill="none" stroke="#000" stroke-width="2"/><path d="M 20 70 Q 50 -10 85 70 T 150 70 T 215 70 T 280 70" fill="none" stroke="#3B82F6" stroke-width="3"/><text x="15" y="30" font-family="Arial" font-size="12" text-anchor="end">V&#8320;</text><text x="15" y="120" font-family="Arial" font-size="12" text-anchor="end">-V&#8320;</text><text x="15" y="65" font-family="Arial" font-size="14" transform="rotate(-90 15,65)">Voltage</text><text x="250" y="90" font-family="Arial" font-size="14">Time (t)</text></svg>',
        caption: 'Alternating Current Output'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Faraday\'s Law' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
