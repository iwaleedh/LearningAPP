export const note_physics_5_26_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Stefan-Boltzmann Law" } },
    { id: 'head-1', type: 'heading', data: { text: "Stefan-Boltzmann Law", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Stefan-Boltzmann Law Stefan-Boltzmann Law An objects luminosity depends on two factors: Its surface temperature" } },
    { id: 'para-3', type: 'paragraph', data: { text: "Its surface area The relationship between these is known as the Stefan-Boltzmann Law, which states: The total energy emitted by a black body per unit area per second is proportional to the fourth power of the absolute temperature of the body" } },
    { id: 'para-4', type: 'paragraph', data: { text: "So, L ∝ AT The Stefan-Boltzmann Law equation is: L = σ AT Where:" } },
    { id: 'para-5', type: 'paragraph', data: { text: "L = luminosity of the star (W) A = surface area of the star σ = the Stefan-Boltzmann constant T = surface temperature of the star (K)" } },
    { id: 'para-6', type: 'paragraph', data: { text: "The surface area of a star (or other spherical object) can be calculated using: A =4 π r Where: r = radius of the star4" } },
    { id: 'para-7', type: 'paragraph', data: { text: "4 2 Worked Example A camel has a body temperature of 40°C and a surface area of 16 m . The peak" } },
    { id: 'para-8', type: 'paragraph', data: { text: "wavelength of the emitted spectrum from the camel is λ  = 8.6 × 10  m. Calculate the total power radiated by the camel." } },
    { id: 'para-9', type: 'paragraph', data: { text: "Answer: Step 1: List the known quantities Surface area, A = 16 m Temperature (in K), T = 40 + 273 = 313 K" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Stefan-Boltzmann constant, σ = 5.67 × 10  W m  K Step 2: Write down the Stefan-Boltzmann equation2 max–6 2" } },
    { id: 'para-11', type: 'paragraph', data: { text: "L = σAT Step 3: Substitute in the values L = (5.67 × 10 ) × 16 × 313 = 8707 W Step 4: Write the answer to correct significant figures and include units" } },,
    {
      "id": "svg-gen-26-2-1",
      "type": "svg",
      "data": {
        "svg": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#e8f4f8" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Black Body Radiation Curve</text>
  <line x1="50" y1="170" x2="350" y2="170" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="2"/>
  <path d="M 50 170 Q 80 20 150 120 T 350 165" fill="none" stroke="#8e44ad" stroke-width="3"/>
  <path d="M 50 170 Q 120 50 180 140 T 350 168" fill="none" stroke="#c0392b" stroke-width="3"/>
  <text x="120" y="50" font-family="sans-serif" font-size="10" fill="#8e44ad">6000 K</text>
  <text x="180" y="110" font-family="sans-serif" font-size="10" fill="#c0392b">4000 K</text>
  <text x="20" y="100" font-family="sans-serif" font-size="12" transform="rotate(-90 20 100)" text-anchor="middle">Intensity</text>
  <text x="200" y="190" font-family="sans-serif" font-size="12" text-anchor="middle">Wavelength (λ)</text>
</svg>`,
        "caption": "Diagram demonstrating concepts in Topic 26"
      }
    },
    {
      "id": "svg-gen-26-2-2",
      "type": "svg",
      "data": {
        "svg": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#1a1a2e" rx="10"/>
  <text x="200" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#fff">Luminosity &amp; Stefan-Boltzmann</text>
  <circle cx="200" cy="110" r="40" fill="#f1c40f">
    <animate attributeName="r" values="38;42;38" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="110" r="50" fill="none" stroke="#f39c12" stroke-width="2" stroke-dasharray="5,5"/>
  <circle cx="200" cy="110" r="70" fill="none" stroke="#e67e22" stroke-width="1" stroke-dasharray="2,8"/>
  <text x="200" y="115" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Star</text>
  <text x="50" y="180" font-family="sans-serif" font-size="14" fill="#fff">L = σ A T⁴</text>
</svg>`,
        "caption": "Further illustration for Topic 26"
      }
    }
  

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Stefan-Boltzmann Law' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
