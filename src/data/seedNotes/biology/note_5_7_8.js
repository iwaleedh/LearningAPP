/**
 * WBI15 — Topic 7.8: Muscle Structure and Contraction
 * Sarcomere, myofilaments, sliding filament theory, triad
 */

export const note_biology_5_7_8 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand skeletal muscle structure from gross anatomy to sarcomere level, including the sliding filament mechanism, and the role of the triad in excitation-contraction coupling.',
      },
    },
    {
      id: 'h-structure',
      type: 'heading',
      data: { text: 'Skeletal Muscle Structure: Hierarchical Organisation', level: 2 },
    },
    {
      id: 'list-hierarchy',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Muscle (gross level): entire organ (e.g., biceps)',
          'Fascicle: bundle of muscle fibres, surrounded by perimysium',
          'Muscle fibre (cell): syncytium (multinucleate), surrounded by sarcolemma',
          'Myofibril: contractile unit within fibre, consists of sarcomeres',
          'Sarcomere: functional unit of contraction, between Z lines',
        ],
      },
    },
    {
      id: 'h-sarcomere',
      type: 'heading',
      data: { text: 'The Sarcomere: Contractile Unit', level: 3 },
    },
    {
      id: 'p-sarcomere',
      type: 'paragraph',
      data: {
        text: 'A sarcomere is the contractile unit of the myofibril, bounded by Z lines (or Z discs) at each end. Within each sarcomere are thick and thin myofilaments arranged in a highly organised lattice. The sarcomere changes length during contraction, but the individual filaments do not change length (sliding filament theory).',
      },
    },
    {
      id: 'h-regions',
      type: 'heading',
      data: { text: 'Sarcomere Regions', level: 3 },
    },
    {
      id: 'table-regions',
      type: 'comparisonTable',
      data: {
        headers: ['Region', 'Description', 'Composition'],
        rows: [
          ['A band', 'Dark, anisotropic band; full length of thick filament', 'Myosin thick filaments + overlapping actin thin filaments'],
          ['I band', 'Light, isotropic band; between thick filaments', 'Actin thin filaments only (no myosin)'],
          ['H zone', 'Central region of A band', 'Myosin thick filaments only (no actin overlap)'],
          ['Z line', 'Boundary of sarcomere', 'Protein lattice anchoring actin filaments'],
          ['M line', 'Centre of H zone', 'Proteins anchoring myosin filaments'],
        ],
        caption: 'Sarcomere regions and their composition',
      },
    },
    {
      id: 'h-filaments',
      type: 'heading',
      data: { text: 'Thick and Thin Filaments', level: 3 },
    },
    {
      id: 'p-thick',
      type: 'paragraph',
      data: {
        text: 'Thick filaments (~15 nm diameter) are composed of myosin protein. Each myosin molecule has a globular head and a long tail. Myosin heads form cross-bridges with actin and have ATPase activity (hydrolyse ATP). Many myosin molecules are arranged parallel to form the thick filament.',
      },
    },
    {
      id: 'p-thin',
      type: 'paragraph',
      data: {
        text: 'Thin filaments (~7 nm diameter) are composed primarily of actin protein, arranged as a double helix. Associated with actin are regulatory proteins: tropomyosin and troponin. In the relaxed state, tropomyosin blocks the myosin-binding sites on actin. When Ca²⁺ binds to troponin, tropomyosin shifts, exposing the binding sites.',
      },
    },
    {
      id: 'h-sliding',
      type: 'heading',
      data: { text: 'Sliding Filament Theory', level: 3 },
    },
    {
      id: 'p-sliding',
      type: 'paragraph',
      data: {
        text: 'The sliding filament theory (Huxley, 1954) states that muscle contraction occurs by thick and thin filaments sliding past each other. The filaments themselves do NOT change length; rather, the overlapping region increases, causing the sarcomere to shorten. During contraction: Z lines move towards the M line, the I band and H zone decrease in length, the A band length remains constant.',
      },
    },
    {
      id: 'callout-sliding',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Evidence for Sliding Filament Theory',
        text: 'Electron microscopy shows: (1) thick and thin filaments do not change length during contraction; (2) overlap region increases; (3) I and H bands decrease in size whilst A band stays constant. This proves filaments slide, not shorten.',
      },
    },
    {
      id: 'h-triad',
      type: 'heading',
      data: { text: 'The Triad: Excitation-Contraction Coupling', level: 3 },
    },
    {
      id: 'p-triad',
      type: 'paragraph',
      data: {
        text: 'The triad is a specialised structure at the junction between the T-tubule and the sarcoplasmic reticulum (SR). It consists of: (1) a T-tubule (invagination of sarcolemma); (2) two SR cisternae (terminal sacs flanking the T-tubule). This structure allows rapid communication between the surface action potential and deep intracellular SR, enabling synchronised Ca²⁺ release throughout the fibre.',
      },
    },
    {
      id: 'p-excitation',
      type: 'paragraph',
      data: {
        text: 'When an action potential travels along the T-tubule, it triggers mechanical coupling (not chemical) at the triad: voltage sensors in the T-tubule communicate with ryanodine receptors in the SR, causing the SR to release Ca²⁺ into the sarcoplasm. This Ca²⁺ binds to troponin on thin filaments, initiating the power stroke.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Muscle is organised hierarchically: muscle → fascicle → fibre → myofibril → sarcomere. The sarcomere contains thick (myosin) and thin (actin) filaments arranged in A, I, H zones. Contraction: filaments slide past each other (filament lengths unchanged) via cross-bridges. The triad (T-tubule + SR cisternae) enables rapid Ca²⁺ release for fast, synchronised contraction.',
        apply: 'In a relaxed muscle, the H zone is 1.5 μm wide. During maximal contraction, actin filaments from both Z lines meet at the M line, eliminating the H zone. If thick filaments are 1.5 μm long, calculate the maximum sarcomere length.',
        analyze: 'Compare the roles of thick and thin filaments. Why are both essential for contraction?',
        evaluate: 'The triad represents specialisation for rapid contraction. How would muscle function differ without triads (hypothetically)?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Draw and label a sarcomere showing Z lines, A band, I band, H zone, and M line', checked: false },
          { text: 'Describe the composition and roles of thick and thin filaments', checked: false },
          { text: 'Explain the sliding filament theory and evidence supporting it', checked: false },
          { text: 'Describe the structure and function of the triad', checked: false },
          { text: 'Explain how I and H band lengths change during contraction', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Skeletal muscle: fascicles → fibres → myofibrils → sarcomeres. Sarcomere bounded by Z lines; contains thick filaments (myosin) in A band and thin filaments (actin + tropomyosin + troponin). Contraction: thick and thin filaments slide past each other (filament lengths unchanged). I and H bands shorten; A band unchanged. Triad (T-tubule + SR cisternae) enables rapid, synchronised Ca²⁺ release for excitation-contraction coupling.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-regions',
        prompt: 'Name the regions of a sarcomere (A band, I band, H zone, Z line, M line) and describe what is in each.',
      },
      {
        id: 'cue-2',
        blockId: 'p-thick',
        prompt: 'Describe the structure and composition of thick filaments.',
      },
      {
        id: 'cue-3',
        blockId: 'p-thin',
        prompt: 'Describe thin filaments and the roles of tropomyosin and troponin.',
      },
      {
        id: 'cue-4',
        blockId: 'p-sliding',
        prompt: 'State the sliding filament theory. What changes length during contraction and what does not?',
      },
      {
        id: 'cue-5',
        blockId: 'p-triad',
        prompt: 'Describe the triad and explain how it functions in excitation-contraction coupling.',
      },
    ],
    summaryText:
      'Sarcomere: contractile unit between Z lines. Contains thick filaments (myosin, in A band) and thin filaments (actin + tropomyosin + troponin, in I band). A band contains both; H zone is myosin-only; M line anchors myosin. Sliding filament theory: filaments slide past each other (lengths unchanged) → sarcomere shortens. Triad (T-tubule + 2 SR cisternae) enables rapid Ca²⁺ release.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Sliding filament theory',
      detail: 'Proposed by Huxley & Huxley (1954); confirmed by electron microscopy',
      year: '1954',
      source: 'History of muscle physiology',
      tags: ['history'],
    },
  ],
};
