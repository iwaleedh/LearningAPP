export const note_physics_5_29_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Binding Energy per Nucleon Graph" } },
    { id: 'head-1', type: 'heading', data: { text: "Binding Energy per Nucleon Graph", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Binding Energy per Nucleon Graph Binding Energy per Nucleon Graph When comparing the stability of different nuclei, it is useful to look at the binding energy per nucleon" } },
    { id: 'para-3', type: 'paragraph', data: { text: "The binding energy per nucleon is defined as: The binding energy of a nucleus divided by the number of nucleons in the nucleus A higherbinding energy per nucleon indicates a higher stability since it requires more energy to pull the nucleus apart" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Iron (A = 56) has the highest binding energy per nucleon, which makes it the most stable of all the elements By plotting a graph of binding energy per nucleon against nucleon number, the stability of elements can be inferred" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Key Features of the Graph At low values of A: Nuclei tend to have a lower binding energy per nucleon, hence, they are generally less stable" } },
    { id: 'para-6', type: 'paragraph', data: { text: "This means the lightest elements have weaker electrostatic forces and are the most likely to undergo fusion Helium (He), carbon (C) and oxygen (O) do not fit the trend Helium-4 is a particularly stable nucleus hence it has a high binding energy per" } },
    { id: 'para-7', type: 'paragraph', data: { text: "nucleon Carbon-12 and oxygen-16 can be considered to be three and four helium nuclei, respectively, bound together At high values of A:" } },
    { id: 'para-8', type: 'paragraph', data: { text: "The general binding energy per nucleon is high and gradually decreases with A This means the heaviest elements are the most unstable and likely to undergo fission4 12 16 Worked Example" } },
    { id: 'para-9', type: 'paragraph', data: { text: "Determine the binding energy per nucleon of Iron-56 (2656Fe) in MeV Mass of a neutron = 1.675 × 10  kg Mass of a proton = 1.673 × 10  kg Mass of a 2656Fe nucleus = 9.288 × 10  kg" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Answer: Step 1: Calculate the mass defect Number of protons, Z = 26 Number of neutrons, A – Z = 56 – 26 = 30" } },
    { id: 'para-11', type: 'paragraph', data: { text: "Mass defect, Δ m = Zm  + (A – Z)m  – m Δm = (26 × 1.673 × 10 ) + (30 × 1.675 × 10 ) – (9.288 × 10 ) Δm = 8.680 × 10  kg Step 2: Calculate the binding energy of the nucleus" } },
    {
      "id": "svg-fusion-process",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"100\" cy=\"80\" r=\"15\" fill=\"#F87171\"/><circle cx=\"100\" cy=\"120\" r=\"15\" fill=\"#34D399\"/><path d=\"M 120 100 L 200 100\" stroke=\"#94A3B8\" stroke-width=\"2\"/><circle cx=\"230\" cy=\"100\" r=\"25\" fill=\"#60A5FA\"/><text x=\"230\" y=\"100\" text-anchor=\"middle\" fill=\"white\" font-size=\"12\">He-4</text><path d=\"M 260 100 L 320 100\" stroke=\"#F59E0B\" stroke-width=\"2\"/><text x=\"350\" y=\"105\" fill=\"#F59E0B\" font-weight=\"bold\">Energy</text></svg>",
        "caption": "Nuclear Fusion Process"
      }
    },
    {
      "id": "svg-coulomb-barrier",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><circle cx=\"100\" cy=\"75\" r=\"20\" fill=\"#F87171\"/><circle cx=\"200\" cy=\"75\" r=\"20\" fill=\"#F87171\"/><text x=\"100\" y=\"79\" text-anchor=\"middle\" fill=\"white\" font-weight=\"bold\">+</text><text x=\"200\" y=\"79\" text-anchor=\"middle\" fill=\"white\" font-weight=\"bold\">+</text><path d=\"M 70 75 L 40 75\" stroke=\"#EF4444\" stroke-width=\"3\" marker-end=\"url(#arrow)\"/><path d=\"M 230 75 L 260 75\" stroke=\"#EF4444\" stroke-width=\"3\" marker-end=\"url(#arrow)\"/></svg>",
        "caption": "Coulomb Repulsion"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Binding Energy per Nucleon Graph' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
