export const note_physics_5_26_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Wien’s Law" } },
    { id: 'head-1', type: 'heading', data: { text: "Wien’s Law", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Black Body Radiation Black Body Radiation Black body radiation is the name given to the thermal radiation emitted by all bodies (objects)" } },
    { id: 'para-3', type: 'paragraph', data: { text: "All objects, no matter what temperature, emit black body radiation in the form of electromagnetic waves These electromagnetic waves usually lie in the infrared region of the spectrum but could be emitted in the form of visible light or other wavelengths, depending on the" } },
    { id: 'para-4', type: 'paragraph', data: { text: "temperature The hotter object, the more infrared radiation it radiates in a given time The infrared emitted from a hot object can be detected using a special camera A perfect black body is defined as:" } },
    { id: 'para-5', type: 'paragraph', data: { text: "An object that absorbs (or emits) all of the radiation incident on it and does not reflect or transmit any radiation Since a good absorber is also a good emitter, a perfect black body would be the best possible emitter too" } },
    { id: 'para-6', type: 'paragraph', data: { text: "As a result, an object which perfectly absorbs all radiation will be black This is because the colour black is what is seen when all colours from the visible light spectrum are absorbed Absorption and Emission For Different Colours Table" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Black Body Radiation Curves All bodies (objects) emit a spectrum of thermal radiation in the form of electromagnetic waves The intensity and wavelength distribution of any emitted waves depends on the" } },
    { id: 'para-8', type: 'paragraph', data: { text: "temperature of the body This is represented on a black body radiation curve As the temperature increases, the peak of the curve moves Black body spectrum for objects of different temperatures" } },
    { id: 'para-9', type: 'paragraph', data: { text: "From the electromagnetic spectrum, waves with a smaller wavelength have higher energy (e.g. UV rays, X-rays) When an object gets hotter, the amount of thermal radiation it emits increases This increases the thermal energy emitted and therefore the wavelength of the" } },
    { id: 'para-10', type: 'paragraph', data: { text: "emitted radiation decreases An ideal black body radiator is one that absorbs and emits all wavelengths This idealised black body is a theoretical object However, stars are the best approximation there is" } },
    { id: 'para-11', type: 'paragraph', data: { text: "The radiation emitted from a black body has a characteristic spectrum that is determined by the temperature alone The intensity-wavelength graph shows how thermodynamic temperature links to the peak wavelength for four different bodies" } },,
    {
      "id": "svg-gen-26-0-1",
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
      "id": "svg-gen-26-0-2",
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
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Wien’s Law' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
