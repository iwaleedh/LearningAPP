export const note_physics_5_30_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Equations for Nuclear Physics" } },
    { id: 'head-1', type: 'heading', data: { text: "Equations for Nuclear Physics", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Background Radiation Background Radiation Radiation is a natural phenomenon, with radioactive elements having always existed on Earth and in outer space" } },
    { id: 'para-3', type: 'paragraph', data: { text: "However, human activity has added to the amount of radiation that humans are exposed to in various ways Background radiation is defined as: Low levels of radiation from environmental sources, which are always present around" } },
    { id: 'para-4', type: 'paragraph', data: { text: "us Radiation is measured in counts per second in a unit called Becquerel (Bq) Different amounts of radiation are present in different places around the world, including in the UK." } },
    { id: 'para-5', type: 'paragraph', data: { text: "There are two types of background radiation: Natural sources Man-made sources Background radiation is the radiation that is present all around the environment. Radon" } },
    { id: 'para-6', type: 'paragraph', data: { text: "gas is given off from some types of rock Every second of the day there is some radiation emanating from natural sources such as: Rocks" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Cosmic rays from space Foods Natural Sources Radon gas from rocks and soil" } },
    { id: 'para-8', type: 'paragraph', data: { text: "Heavy radioactive elements, such as uranium and thorium, occur naturally in rocks in the ground Uranium decays into radon gas, which is an alpha emitter This is particularly dangerous if inhaled into the lungs in large quantities" } },
    { id: 'para-9', type: 'paragraph', data: { text: "Cosmic rays from space The sun emits an enormous number of protons every second Some of these enter the Earth's atmosphere at high speeds When they collide with molecules in the air, this leads to the production of gamma" } },
    { id: 'para-10', type: 'paragraph', data: { text: "radiation Other sources of cosmic rays are supernovae and other high energy cosmic events Carbon-14 in biological material All organic matter contains a tiny amount of carbon-14" } },
    { id: 'para-11', type: 'paragraph', data: { text: "Living plants and animals constantly replace the supply of carbon in their systems hence the amount of carbon-14 in the system stays almost constant Radioactive material in food and drink Naturally occurring radioactive elements can get into food and water since they are" } },
    {
      "id": "svg-nuclear-stability",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"250\" x2=\"350\" y2=\"250\" stroke=\"#64748B\" stroke-width=\"2\"/><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"250\" stroke=\"#64748B\" stroke-width=\"2\"/><path d=\"M 50 250 L 300 50\" stroke=\"#94A3B8\" stroke-dasharray=\"4,4\"/><path d=\"M 50 250 Q 200 150 250 50\" stroke=\"#10B981\" fill=\"none\" stroke-width=\"4\"/><text x=\"200\" y=\"280\" fill=\"#64748B\">Protons (Z)</text><text x=\"0\" y=\"150\" fill=\"#64748B\" transform=\"rotate(-90 20,150)\">Neutrons (N)</text></svg>",
        "caption": "N vs Z Graph"
      }
    },
    {
      "id": "svg-decay-modes",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"150\" cy=\"100\" r=\"5\" fill=\"#10B981\"/><path d=\"M 150 100 L 120 130\" stroke=\"#EF4444\" marker-end=\"url(#arrow)\"/><text x=\"100\" y=\"140\" fill=\"#EF4444\">α</text><path d=\"M 150 100 L 170 80\" stroke=\"#3B82F6\" marker-end=\"url(#arrow)\"/><text x=\"180\" y=\"80\" fill=\"#3B82F6\">β⁻</text></svg>",
        "caption": "Decay Modes on Graph"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Equations for Nuclear Physics' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
