export const note_physics_2_11_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand The Wave Equation" } },
    { id: 'head-1', type: 'heading', data: { text: "The Wave Equation", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "The Wave Equation The Wave Equation This equation links wave speed, frequency and wavelength Where:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "v = velocity of the wave (m s) f = frequency of the wave (Hz) λ = wavelength (m) The wave equation tells us that for a wave of constant speed:" } },
    { id: 'para-4', type: 'paragraph', data: { text: "As the wavelength increases, the frequency decreases As the wavelength decreases, the frequency increases The relationship between frequency and wavelength of a wave –1" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Worked Example A travelling wave has a period of 1.0  μ s and travels at a velocity of 100 cm s." } },
    { id: 'para-6', type: 'paragraph', data: { text: "Calculate the wavelength of the wave. Give your answer in metres (m)." } },
    { id: 'para-7', type: 'paragraph', data: { text: "Answer: Step 1: Write down the known quantities Period, T = 1.0 μ s = 1.0 × 10  s Velocity, c = 100 cm s = 1.0 m s" } },
    { id: 'para-8', type: 'paragraph', data: { text: "Note the conversions: The period must be converted from microseconds ( μ s) into seconds (s) The velocity must be converted from cm s into m s Step 2: Write down the relationship between the frequency f and the period T" } },
    { id: 'para-9', type: 'paragraph', data: { text: "f = 1 T Step 3: Substitute the value of the period into the above equation to calculate the frequency" } },
    { id: 'para-10', type: 'paragraph', data: { text: "f = 1 1 ×10−6 f = 1.0 × 10 Hz Step 4: Write down the wave equation" } },
    { id: 'para-11', type: 'paragraph', data: { text: "c = f λ Step 5: Rearrange the wave equation to calculate the wavelength λ λ = c f" } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <path d="M50 80 Q 200 80 350 40" fill="none" stroke="#f472b6" stroke-width="3" stroke-dasharray="8,4"/>
  <path d="M50 100 Q 200 100 350 100" fill="none" stroke="#f472b6" stroke-width="4"/>
  <path d="M50 120 Q 200 120 350 160" fill="none" stroke="#f472b6" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="200" y="30" fill="#f8fafc" font-size="16" text-anchor="middle">Turbulent vs Laminar Flow</text>
  <circle cx="200" cy="100" r="10" fill="#fbbf24"/>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise The Wave Equation' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
