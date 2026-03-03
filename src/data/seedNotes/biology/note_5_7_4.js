/**
 * WBI15 — Topic 7.4: Oxidative Phosphorylation and Electron Transport Chain
 * NADH & FADH₂ oxidation, proton pumping, chemiosmosis, P/O ratios
 */

export const note_biology_5_7_4 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand oxidative phosphorylation as the coupling of electron transport to ATP synthesis via chemiosmosis, including the electron transport chain complexes, oxygen as the final electron acceptor, and P/O ratios.',
      },
    },
    {
      id: 'h-oxphos',
      type: 'heading',
      data: { text: 'Oxidative Phosphorylation: ETC and Chemiosmosis', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Oxidative phosphorylation is the process by which the free energy released by electron transport is used to pump protons across the inner mitochondrial membrane, creating an electrochemical gradient that drives ATP synthesis. This process generates the vast majority of ATP in aerobic respiration (~26–34 ATP per glucose in eukaryotes).',
      },
    },
    {
      id: 'h-etc',
      type: 'heading',
      data: { text: 'The Electron Transport Chain (ETC)', level: 3 },
    },
    {
      id: 'p-chain',
      type: 'paragraph',
      data: {
        text: 'The electron transport chain is a series of protein complexes (I, II, III, IV) embedded in the inner mitochondrial membrane. Electrons from NADH enter at Complex I (NADH dehydrogenase), whilst FADH₂ electrons enter at Complex II (succinate dehydrogenase). Electrons are passed from complex to complex via diffusible carriers (ubiquinone, cytochrome c) and ultimately transferred to oxygen (Complex IV, cytochrome c oxidase) to form water.',
      },
    },
    {
      id: 'table-complexes',
      type: 'comparisonTable',
      data: {
        headers: ['Complex', 'Name', 'Input', 'Output', 'Protons Pumped'],
        rows: [
          ['I', 'NADH dehydrogenase', 'NADH', 'Ubiquinone (reduced)', '4 H⁺'],
          ['II', 'Succinate dehydrogenase', 'FADH₂', 'Ubiquinone (reduced)', '0 H⁺'],
          ['III', 'Cytochrome bc₁', 'Ubiquinol', 'Cytochrome c (reduced)', '4 H⁺'],
          ['IV', 'Cytochrome c oxidase', 'Cytochrome c', 'O₂ + 4 H⁺ → 2 H₂O', '2 H⁺'],
        ],
        caption: 'Electron transport chain complexes and proton pumping',
      },
    },
    {
      id: 'p-oxygen',
      type: 'paragraph',
      data: {
        text: 'Oxygen is the final electron acceptor at Complex IV. The complete reduction of one O₂ molecule (to form 2 H₂O) requires 4 electrons and 4 protons from the matrix. This is why oxygen is essential for aerobic respiration; without oxygen, the ETC backs up and NADH cannot be reoxidised to NAD⁺, halting the entire respiration process.',
      },
    },
    {
      id: 'h-chemiosmosis',
      type: 'heading',
      data: { text: 'Chemiosmosis and ATP Synthesis', level: 3 },
    },
    {
      id: 'p-chemiosmosis',
      type: 'paragraph',
      data: {
        text: 'As electrons move through the ETC, the energy released is used to pump protons (H⁺) from the matrix into the intermembrane space. Complex I pumps 4 H⁺, Complex III pumps 4 H⁺, and Complex IV pumps 2 H⁺, for a total of 10 H⁺ per NADH. This creates a proton concentration gradient (ΔpH) and an electrical potential (Δψ), together forming the proton-motive force (PMF).',
      },
    },
    {
      id: 'p-synthase',
      type: 'paragraph',
      data: {
        text: 'ATP synthase (ATP-ase) is a large protein complex spanning the inner mitochondrial membrane. Protons flow down their electrochemical gradient through ATP synthase, driving the phosphorylation of ADP + Pi → ATP. The enzyme can synthesise approximately 1 ATP for every 3–4 protons that pass through it (the H⁺/ATP ratio).',
      },
    },
    {
      id: 'callout-miracle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemiosmosis: A Remarkable Process',
        text: 'The coupling of electron transport to ATP synthesis via chemiosmosis is one of the most important discoveries in biochemistry (Mitchell, 1961). The proton gradient acts like a "battery" driving ATP synthesis. Disruption of this gradient (by proton leak or uncoupling) prevents ATP synthesis and dissipates energy as heat.',
      },
    },
    {
      id: 'h-por',
      type: 'heading',
      data: { text: 'P/O Ratios: ATP Yield Per NADH and FADH₂', level: 3 },
    },
    {
      id: 'p-por',
      type: 'paragraph',
      data: {
        text: 'The P/O ratio is the number of ATP molecules synthesised per atom of oxygen (or equivalently, per pair of electrons) consumed. Current understanding: NADH yields ~2.5 ATP per molecule (entering at Complex I and pumping 10 H⁺, with ~4 H⁺ per ATP); FADH₂ yields ~1.5 ATP per molecule (entering at Complex II and pumping only 6 H⁺, bypassing Complex I).',
      },
    },
    {
      id: 'table-por',
      type: 'comparisonTable',
      data: {
        headers: ['Reducing Agent', 'Entry Point', 'H⁺ Pumped', 'ATP Yield'],
        rows: [
          ['NADH', 'Complex I', '10 H⁺', '~2.5 ATP'],
          ['FADH₂', 'Complex II', '6 H⁺', '~1.5 ATP'],
        ],
        caption: 'P/O ratios and ATP yield for reducing equivalents',
      },
    },
    {
      id: 'h-uncoupling',
      type: 'heading',
      data: { text: 'Uncoupling and Proton Leak', level: 3 },
    },
    {
      id: 'p-uncoupling',
      type: 'paragraph',
      data: {
        text: 'If the proton gradient is dissipated without driving ATP synthesis, the energy is released as heat instead. This can occur via: (1) uncoupling proteins (UCP, e.g., thermogenin in brown adipose tissue) that allow protons to leak across the membrane; (2) small-molecule uncouplers like DNP (2,4-dinitrophenol) that carry protons across the membrane; (3) normal proton leak through the membrane. These processes reduce ATP yield but are important for thermogenesis (heat production) in mammals.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Oxidative phosphorylation couples electron transport to ATP synthesis. The ETC (Complexes I–IV) oxidises NADH and FADH₂, using the energy to pump protons into the intermembrane space. The resulting proton gradient drives ATP synthase to make ATP. This coupling mechanism (chemiosmosis) is the fundamental principle.',
        apply: 'If 10 NADH and 2 FADH₂ are produced per glucose, calculate the maximum ATP yield from oxidative phosphorylation alone. (Answer: 10 × 2.5 + 2 × 1.5 = 28 ATP)',
        analyze: 'Why does FADH₂ yield fewer ATP than NADH? Compare the entry points and proton-pumping efficiency.',
        evaluate: 'Discuss the evolutionary advantage of chemiosmosis over direct ATP synthesis. Why is the proton gradient "better" than a single direct reaction?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Name the four complexes of the electron transport chain and their substrates', checked: false },
          { text: 'Explain the roles of ubiquinone and cytochrome c as carriers', checked: false },
          { text: 'Describe chemiosmosis and the role of ATP synthase', checked: false },
          { text: 'State the P/O ratios for NADH and FADH₂', checked: false },
          { text: 'Explain uncoupling proteins and their role in thermogenesis', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Oxidative phosphorylation: ETC (Complexes I–IV) oxidises NADH and FADH₂, pumping protons into intermembrane space. Proton gradient drives ATP synthase (chemiosmosis) → ATP. P/O ratios: NADH ~2.5 ATP, FADH₂ ~1.5 ATP. Uncoupling proteins allow proton leak → heat. Per glucose: ~28 ATP from oxidative phosphorylation + 2–4 ATP from substrate-level = ~30–32 ATP total (eukaryotes).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-complexes',
        prompt: 'Name the four complexes of the electron transport chain, their substrates, and the number of protons pumped.',
      },
      {
        id: 'cue-2',
        blockId: 'p-oxygen',
        prompt: 'Why is oxygen essential for aerobic respiration? What is its role in the electron transport chain?',
      },
      {
        id: 'cue-3',
        blockId: 'p-chemiosmosis',
        prompt: 'Describe the proton-motive force and how it is established by the electron transport chain.',
      },
      {
        id: 'cue-4',
        blockId: 'table-por',
        prompt: 'What is the P/O ratio? State the ATP yield for NADH and FADH₂.',
      },
      {
        id: 'cue-5',
        blockId: 'p-uncoupling',
        prompt: 'What are uncoupling proteins and how do they affect ATP production and heat generation?',
      },
    ],
    summaryText:
      'Oxidative phosphorylation: ETC in inner mitochondrial membrane oxidises NADH/FADH₂. Electrons passed through Complexes I, III, IV; protons pumped into intermembrane space. Proton gradient (PMF) drives ATP synthase → ATP (chemiosmosis). P/O: NADH ~2.5 ATP, FADH₂ ~1.5 ATP. Uncoupling proteins dissipate gradient as heat. Total per glucose: ~28–30 ATP from oxidative phosphorylation.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Mitchell chemiosmotic hypothesis',
      detail: 'Proposed 1961; confirmed experimentally; fundamentally changed understanding of bioenergetics',
      year: '1961',
      source: 'Peter Mitchell, Nobel Prize 1978',
      tags: ['history', 'mechanism'],
    },
  ],
};
