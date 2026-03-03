export const note_biology_4_5_0 = {
  blocks: [
    {
      id: 'obj-overview',
      type: 'objective',
      data: {
        text: 'Understand the overall equation for photosynthesis, the structure of the chloroplast, and the separation of light-dependent and light-independent reactions into distinct compartments.',
      },
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: {
        text: 'Photosynthesis Overview',
        level: 2,
      },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: {
        text: 'Photosynthesis is the process by which green plants convert light energy into chemical energy stored in organic molecules. It occurs in two main stages: light-dependent reactions in the thylakoid membrane and light-independent reactions (Calvin cycle) in the stroma. This process is fundamental to all life on Earth, as it fixes atmospheric carbon dioxide and produces oxygen.',
      },
    },
    {
      id: 'eq-overall',
      type: 'equation',
      data: {
        html: '6CO<sub>2</sub> + 6H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>',
        caption: 'Overall equation for photosynthesis (simplified)',
      },
    },
    {
      id: 'h-chloroplast',
      type: 'heading',
      data: {
        text: 'Chloroplast Structure',
        level: 2,
      },
    },
    {
      id: 'p-chloroplast-desc',
      type: 'paragraph',
      data: {
        text: 'The chloroplast is a double-membrane organelle specialised for photosynthesis. It is typically 5–10 μm long and contains several key structural regions, each with specific functions in the photosynthetic pathway.',
      },
    },
    {
      id: 'list-structure',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Outer and inner envelope membranes: Separate the chloroplast from the cytoplasm; the inner membrane is selectively permeable.',
          },
          {
            text: 'Thylakoids: Flattened sac-like structures arranged in stacks called grana; contain chlorophyll and electron transport proteins; site of light-dependent reactions.',
          },
          {
            text: 'Granum (pl. grana): Stack of thylakoids connected by stroma lamellae; increases surface area for light capture.',
          },
          {
            text: 'Stroma lamellae: Interconnecting thylakoid membranes between grana; part of the thylakoid system.',
          },
          {
            text: 'Stroma: Fluid-filled space surrounding thylakoids; contains enzymes (e.g. RuBisCO) for the Calvin cycle.',
          },
          {
            text: 'DNA and ribosomes: Chloroplasts contain their own circular DNA and ribosomes (70S); evidence of endosymbiotic origin.',
          },
        ],
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Compartmentalisation',
        text: 'The separation of light-dependent reactions in the thylakoid membrane and light-independent reactions in the stroma allows for independent regulation and optimal enzyme activity for each process.',
      },
    },
    {
      id: 'h-light-dependent',
      type: 'heading',
      data: {
        text: 'Light-Dependent Reactions',
        level: 2,
      },
    },
    {
      id: 'p-light-dep-summary',
      type: 'paragraph',
      data: {
        text: 'Light-dependent reactions occur in the thylakoid membrane and involve the absorption of light energy by chlorophyll molecules. These reactions produce ATP and NADPH, which are then used to power the Calvin cycle in the stroma. The reactions also release oxygen as a byproduct of water photolysis.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Light-Dependent Location',
        text: 'These reactions depend on light and occur exclusively in the thylakoid membrane where chlorophyll and electron transport chains are located. They cannot occur in darkness.',
      },
    },
    {
      id: 'h-photosystems',
      type: 'heading',
      data: {
        text: 'Photosystems I and II',
        level: 2,
      },
    },
    {
      id: 'p-photosys',
      type: 'paragraph',
      data: {
        text: 'Photosystems are light-harvesting complexes embedded in the thylakoid membrane. They contain chlorophyll molecules and accessory pigments that work together to capture light energy. Photosystem II (PSII, P680) operates first in the light-dependent pathway, absorbing light at 680 nm. Photosystem I (PSI, P700) absorbs light at 700 nm and operates second. This seemingly backwards numbering reflects the historical order of discovery rather than the functional sequence.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The chloroplast is a highly organised structure where compartmentalisation allows the light-dependent reactions to generate energy carriers (ATP and NADPH) in the membrane, while the Calvin cycle uses these carriers in the stroma. This spatial separation enables independent regulation and prevents futile cycles. Photosystems I and II are named by discovery order, not functional sequence: PSII operates at the start of the electron transport chain.',
        apply: 'If you observe chloroplasts of an aquatic plant under the microscope, predict how the number and size of grana would differ between cells from bright sunlight versus shade positions, and explain why using photosystem function.',
        analyze: 'Compare the location of light-dependent reactions (thylakoid membrane) with light-independent reactions (stroma). Why is this compartmentalisation essential for regulating photosynthetic rate?',
        evaluate: 'The overall equation 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂ is simplified and does not show intermediate products. Evaluate how and where the intermediate compounds (ATP, NADPH, G3P) fit into the real photosynthetic pathway.',
      },
      terms: [],
    },
    {
      id: 'checklist-overview',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write the overall equation for photosynthesis', checked: false },
          { text: 'I can label and describe the functions of chloroplast structures', checked: false },
          { text: 'I understand why light-dependent and light-independent reactions are spatially separated', checked: false },
          { text: 'I can name and describe Photosystems I and II', checked: false },
          { text: 'I know that P680 and P700 refer to the wavelengths of maximum light absorption', checked: false },
        ],
      },
    },
    {
      id: 'summary-overview',
      type: 'summary',
      data: {
        text: 'Photosynthesis converts light energy into chemical energy via two stages occurring in different chloroplast regions. Light-dependent reactions in the thylakoid produce ATP and NADPH from water photolysis and oxygen release. Light-independent reactions (Calvin cycle) in the stroma use ATP and NADPH to fix CO₂ into glucose. Photosystems I and II are light-harvesting complexes that drive electron flow and energy production.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-overall',
        prompt: 'Write the overall equation for photosynthesis and state which products are used for energy and which for plant growth.',
      },
      {
        id: 'cue-2',
        blockId: 'list-structure',
        prompt: 'Name the two membranes that form the chloroplast envelope and identify the main site of light-dependent reactions.',
      },
      {
        id: 'cue-3',
        blockId: 'h-photosystems',
        prompt: 'What is the difference between Photosystem II (P680) and Photosystem I (P700)? Why are they numbered this way?',
      },
      {
        id: 'cue-4',
        blockId: 'callout-key1',
        prompt: 'Explain why the separation of light-dependent and light-independent reactions into different chloroplast regions is advantageous.',
      },
    ],
    summaryText: 'The overall photosynthetic equation is 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Light-dependent reactions occur in the thylakoid membrane of grana and stroma lamellae, while the Calvin cycle occurs in the stroma. Photosystems I and II are complexes containing chlorophyll and accessory pigments that absorb light; PSII absorbs at 680 nm (P680), PSI at 700 nm (P700). The numbering reflects discovery order, not function—PSII operates first in the electron transport chain.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Chloroplast Structure and Function',
      detail: 'Electron microscopy shows the characteristic double membrane and stacked thylakoid structures; biochemical analysis confirms the localisation of electron transport proteins in thylakoids.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14)',
      tags: ['structure', 'compartmentalisation'],
    },
    {
      id: 'ev-2',
      title: 'Photosystem Discovery',
      detail: 'Hill and Ruben (1939) discovered that isolated chloroplasts could produce oxygen when exposed to light and an electron acceptor, establishing the photochemical nature of the light reactions.',
      year: '2023',
      source: 'Historical evidence, confirmed in modern textbooks',
      tags: ['history', 'light-dependent'],
    },
  ],
};
