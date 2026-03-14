export const note_physics_5_30_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Alpha, Beta & Gamma Radiation" } },
    { id: 'head-1', type: 'heading', data: { text: "Alpha, Beta & Gamma Radiation", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Alpha, Beta & Gamma Radiation Nuclear Decay Equations Core Practical 15: Investigating Gamma Radiation Absorption The Random Nature of Nuclear Decay" } },
    { id: 'para-3', type: 'paragraph', data: { text: "Background Radiation Background Radiation Radiation is a natural phenomenon, with radioactive elements having always existed on Earth and in outer space" } },
    { id: 'para-4', type: 'paragraph', data: { text: "However, human activity has added to the amount of radiation that humans are exposed to in various ways Background radiation is defined as: Low levels of radiation from environmental sources, which are always present around" } },
    { id: 'para-5', type: 'paragraph', data: { text: "us Radiation is measured in counts per second in a unit called Becquerel (Bq) Different amounts of radiation are present in different places around the world, including in the UK." } },
    { id: 'para-6', type: 'paragraph', data: { text: "There are two types of background radiation: Natural sources Man-made sources Background radiation is the radiation that is present all around the environment. Radon" } },
    { id: 'para-7', type: 'paragraph', data: { text: "gas is given off from some types of rock Every second of the day there is some radiation emanating from natural sources such as: Rocks" } },
    { id: 'para-8', type: 'paragraph', data: { text: "Cosmic rays from space Foods Natural Sources Radon gas from rocks and soil" } },
    { id: 'para-9', type: 'paragraph', data: { text: "Heavy radioactive elements, such as uranium and thorium, occur naturally in rocks in the ground Uranium decays into radon gas, which is an alpha emitter This is particularly dangerous if inhaled into the lungs in large quantities" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Cosmic rays from space The sun emits an enormous number of protons every second Some of these enter the Earth's atmosphere at high speeds When they collide with molecules in the air, this leads to the production of gamma" } },
    { id: 'para-11', type: 'paragraph', data: { text: "radiation Other sources of cosmic rays are supernovae and other high energy cosmic events Carbon-14 in biological material All organic matter contains a tiny amount of carbon-14" } },
    {
      "id": "svg-decay-curve",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 250\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"200\" x2=\"350\" y2=\"200\" stroke=\"#64748B\" stroke-width=\"2\"/><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"200\" stroke=\"#64748B\" stroke-width=\"2\"/><path d=\"M 50 60 Q 150 180 350 190\" stroke=\"#8B5CF6\" fill=\"none\" stroke-width=\"3\"/><text x=\"180\" y=\"220\" fill=\"#64748B\">Time (t)</text><text x=\"0\" y=\"140\" fill=\"#64748B\" transform=\"rotate(-90 20,140)\">Activity (A) / Number (N)</text></svg>",
        "caption": "Exponential Decay Curve"
      }
    },
    {
      "id": "svg-half-life",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><rect x=\"50\" y=\"50\" width=\"40\" height=\"100\" fill=\"#F87171\"/><rect x=\"110\" y=\"100\" width=\"40\" height=\"50\" fill=\"#F87171\"/><rect x=\"170\" y=\"125\" width=\"40\" height=\"25\" fill=\"#F87171\"/><text x=\"70\" y=\"170\" text-anchor=\"middle\" fill=\"#64748B\">N₀</text><text x=\"130\" y=\"170\" text-anchor=\"middle\" fill=\"#64748B\">N₀/2</text><text x=\"190\" y=\"170\" text-anchor=\"middle\" fill=\"#64748B\">N₀/4</text></svg>",
        "caption": "Half Life Illustration"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Alpha, Beta & Gamma Radiation' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
