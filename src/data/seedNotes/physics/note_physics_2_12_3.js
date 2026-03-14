export const note_physics_2_12_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Wave Speed on a Stretched String" } },
    { id: 'head-1', type: 'heading', data: { text: "Wave Speed on a Stretched String", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Wave Speed on a Stretched String Wave Speed on a Stretched String The speed of a wave travelling along a string with two fixed ends is given by: Where:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "T = tension in the string (N) μ = mass per unit length of the string (kg m ) At the fundamental frequency, f of a stationary wave of length L, the wavelength, λ = 2L Therefore, according to the wave equation, the speed of the stationary wave is:" } },
    { id: 'para-4', type: 'paragraph', data: { text: "v = fλ = f × 2L Combining these two equations leads to the equation for the fundamental frequency (sometimes referred to as the first harmonic): Where:" } },
    { id: 'para-5', type: 'paragraph', data: { text: "f = frequency (Hz) L = the length of the string (m) T = the tension in the string (N) µ = mass per unit length (kg m )" } },
    { id: 'para-6', type: 'paragraph', data: { text: "Mass per unit length, µ can be calculated by dividing the mass of the string by the length of the string –1 0" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Diagram showing the first three modes of vibration of a stretched string with corresponding frequencies Worked Example A guitar string of mass 3.2 g and length 90 cm is fixed onto a guitar." } },
    { id: 'para-8', type: 'paragraph', data: { text: "The string is tightened to a tension of 65 N between two bridges at a distance of 75 Calculate the a) speed of the waves on the string b) fundamental frequency of the string" } },
    { id: 'para-9', type: 'paragraph', data: { text: "Answer: Part (a) Step 1: Write the known quantities in S.I. units Tension, T = 65 N" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Mass, m = 3.2 g = 3.2 × 10  kg Length of string, L = 90 cm = 0.90 m Mass per unit length, μ = m L=3 .2 ×10−3" } },
    { id: 'para-11', type: 'paragraph', data: { text: "0 .9 = 3.56 × 10  kg m Step 2: Write the equation for speed on a string and calculate v = f λ = f × 2LANDf = 1 2LT" } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <rect x="50" y="50" width="300" height="100" fill="#1e293b" rx="8" stroke="#38bdf8" stroke-width="2"/>
  <text x="200" y="80" fill="#f8fafc" font-size="16" text-anchor="middle">Stress (σ) = F / A</text>
  <text x="200" y="110" fill="#f8fafc" font-size="16" text-anchor="middle">Strain (ε) = Δx / x</text>
  <text x="200" y="140" fill="#fbbf24" font-size="18" text-anchor="middle" font-weight="bold">Young Modulus (E) = σ / ε</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Wave Speed on a Stretched String' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
