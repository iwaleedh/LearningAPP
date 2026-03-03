export const note_biology_4_5_1 = {
  blocks: [
    {
      id: 'obj-lightdep',
      type: 'objective',
      data: {
        text: 'Understand the detailed mechanisms of light-dependent reactions: photolysis of water, photoactivation of photosystems, electron transport chain, chemiosmosis, ATP synthesis, and the difference between cyclic and non-cyclic photophosphorylation.',
      },
    },
    {
      id: 'h-water-photolysis',
      type: 'heading',
      data: {
        text: 'Photolysis of Water',
        level: 2,
      },
    },
    {
      id: 'p-water-photolysis',
      type: 'paragraph',
      data: {
        text: 'Water molecules are split in the thylakoid membrane at Photosystem II in response to light energy. This process, called photolysis, is catalysed by a manganese-containing enzyme complex (oxygen-evolving complex, OEC) in the thylakoid membrane. The reaction releases electrons (which replace those lost by the reaction centre chlorophyll), protons (contributing to the proton gradient), and oxygen.',
      },
    },
    {
      id: 'eq-photolysis',
      type: 'equation',
      data: {
        html: '2H<sub>2</sub>O → 4H<sup>+</sup> + 4e<sup>−</sup> + O<sub>2</sub>',
        caption: 'Photolysis of water in the thylakoid lumen',
      },
    },
    {
      id: 'h-psii-psi',
      type: 'heading',
      data: {
        text: 'Photoactivation of PSII and PSI',
        level: 2,
      },
    },
    {
      id: 'p-photoactivation',
      type: 'paragraph',
      data: {
        text: 'When light photons are absorbed by chlorophyll molecules in the antenna complex, energy is transferred to the reaction centre (P680 in PSII, P700 in PSI). This excitation raises electrons to a higher energy level, a process called photoactivation. The excited electron leaves the chlorophyll and enters the electron transport chain, whilst the chlorophyll becomes oxidised and accepts an electron from water (at PSII) or from the previous electron carrier (at PSI).',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Energy Elevation',
        text: 'Photoactivation raises an electron to a higher energy level than ground state. The energy difference as it descends through the electron transport chain is harnessed to pump protons into the thylakoid lumen, creating a gradient that drives ATP synthesis.',
      },
    },
    {
      id: 'h-electron-transport',
      type: 'heading',
      data: {
        text: 'Electron Transport Chain',
        level: 2,
      },
    },
    {
      id: 'p-etc-intro',
      type: 'paragraph',
      data: {
        text: 'Electrons released from PSII are passed through a series of carriers: plastoquinone (PQ) in the thylakoid membrane, the cytochrome b₆f complex (also in the membrane), and plastocyanin (PC) in the thylakoid lumen. Each carrier is at a progressively lower energy level. As electrons move along this chain, they lose energy in discrete steps. This energy is used to pump protons from the stroma into the thylakoid lumen, creating a proton gradient across the membrane.',
      },
    },
    {
      id: 'list-carriers',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Plastoquinone (PQ): Lipid-soluble carrier in the thylakoid membrane; shuttles electrons and protons between PSII and the cytochrome b₆f complex.',
          },
          {
            text: 'Cytochrome b₆f complex: Membrane protein complex that catalyses proton pumping; increases the proton gradient.',
          },
          {
            text: 'Plastocyanin (PC): Water-soluble protein in the thylakoid lumen; transfers electrons to PSI.',
          },
        ],
      },
    },
    {
      id: 'h-chemiosmosis',
      type: 'heading',
      data: {
        text: 'Chemiosmosis and ATP Synthase',
        level: 2,
      },
    },
    {
      id: 'p-chemiosmosis',
      type: 'paragraph',
      data: {
        text: 'The pumping of protons into the thylakoid lumen creates a proton gradient (ΔpH), with a higher concentration of H⁺ inside the lumen than in the stroma. This is an electrochemical gradient. Protons cannot cross the thylakoid membrane except through ATP synthase, a channel protein with a catalytic head. As protons flow down the gradient through ATP synthase, the enzyme couples this energy release to the phosphorylation of ADP to form ATP.',
      },
    },
    {
      id: 'eq-atp-synthesis',
      type: 'equation',
      data: {
        html: 'ADP + Pi + energy → ATP + H<sub>2</sub>O',
        caption: 'ATP synthesis driven by the proton gradient',
      },
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Proton Gradient Calculation',
        text: 'If the thylakoid lumen has a [H⁺] of 10 mM and the stroma has 1 μM, the ratio is 10,000:1. Using ΔG° = 2.3RT log ([H⁺]ₗᵤₘₑₙ / [H⁺]ₛₜᵣₒₘₐ), the free energy released is ~23 kJ/mol at 25°C. ATP synthesis requires ~30.5 kJ/mol, so additional energy from the electron transport chain is needed. This shows how both the chemical and electrical gradients contribute.',
      },
    },
    {
      id: 'h-nadph',
      type: 'heading',
      data: {
        text: 'NADP⁺ Reduction to NADPH',
        level: 2,
      },
    },
    {
      id: 'p-nadph-production',
      type: 'paragraph',
      data: {
        text: 'Electrons exiting Photosystem I at a high energy level are used to reduce NADP⁺ to NADPH. This reaction is catalysed by ferredoxin-NADP reductase (FNR) at the stromal side of the thylakoid membrane. NADPH is then available in the stroma for the Calvin cycle, where it acts as a reducing agent to produce G3P from 3-phosphoglycerate.',
      },
    },
    {
      id: 'eq-nadph',
      type: 'equation',
      data: {
        html: 'NADP<sup>+</sup> + 2e<sup>−</sup> + H<sup>+</sup> → NADPH',
        caption: 'Formation of NADPH at the end of the electron transport chain',
      },
    },
    {
      id: 'h-cyclic-noncyclic',
      type: 'heading',
      data: {
        text: 'Cyclic vs Non-Cyclic Photophosphorylation',
        level: 2,
      },
    },
    {
      id: 'p-noncyclic',
      type: 'paragraph',
      data: {
        text: 'Non-cyclic photophosphorylation involves both PSII and PSI, with electrons flowing from water through the electron transport chain to NADP⁺. This process produces ATP, NADPH, and O₂. It is the dominant pathway during the day and supplies both energy and reducing power for the Calvin cycle.',
      },
    },
    {
      id: 'p-cyclic',
      type: 'paragraph',
      data: {
        text: 'Cyclic photophosphorylation involves PSI alone. Electrons excited at PSI are passed to ferredoxin, then back through the electron transport chain (cytochrome b₆f and PQ) to PSI, forming a cycle. This produces ATP but no NADPH or O₂. Cyclic photophosphorylation predominates when the Calvin cycle requires more ATP relative to NADPH, or when the NADPH pool is already saturated.',
      },
    },
    {
      id: 'table-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Non-Cyclic', 'Cyclic'],
        rows: [
          ['Photosystems involved', 'PSII and PSI', 'PSI only'],
          ['Water photolysis', 'Yes (O₂ released)', 'No'],
          ['ATP produced', 'Yes', 'Yes'],
          ['NADPH produced', 'Yes', 'No'],
          ['Electron source', 'H₂O', 'Ferredoxin (recycled)'],
          ['Electron destination', 'NADP⁺', 'Ferredoxin (recycled)'],
          ['When predominant', 'Day (normal conditions)', 'When ATP > NADPH needed'],
        ],
        caption: 'Comparison of cyclic and non-cyclic photophosphorylation',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'ATP to NADPH Ratio',
        text: 'The Calvin cycle uses 3 ATP and 2 NADPH per CO₂ fixed. The ratio is 3:2. In non-cyclic photophosphorylation, the ratio of ATP to NADPH produced is approximately 3:2, matching the Calvin cycle demand. When conditions change, cyclic photophosphorylation fine-tunes this ratio.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Photolysis of water occurs at the oxygen-evolving complex in PSII, releasing electrons that replace those excited by light in the chlorophyll. These electrons descend through a series of carriers (PQ, cytochrome b₆f, PC), losing energy at each step. The energy drives proton pumping into the thylakoid lumen, creating a gradient that ATP synthase uses to make ATP. PSI raises electrons to an even higher energy level, allowing them to reduce NADP⁺ to NADPH. Non-cyclic photophosphorylation produces both ATP and NADPH; cyclic photophosphorylation produces ATP alone by recycling electrons.',
        apply: 'Calculate the number of photons needed to produce one O₂ molecule (hint: photolysis releases 1 O₂ from 2 H₂O, requiring 4 electrons; count photons absorbed per electron excited in PSII and PSI).',
        analyze: 'Explain how the proton gradient across the thylakoid membrane represents stored potential energy, and how ATP synthase converts this gradient into chemical energy in ATP bonds.',
        evaluate: 'In low-light conditions, a plant might favour cyclic photophosphorylation. Evaluate why this is advantageous when light energy is limited, considering the ATP requirements of the Calvin cycle versus NADPH demands.',
      },
      terms: [],
    },
    {
      id: 'checklist-lightdep',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write the equation for water photolysis and explain its role in PSII', checked: false },
          { text: 'I understand how photoactivation excites electrons in chlorophyll', checked: false },
          { text: 'I can name the carriers in the electron transport chain and their roles', checked: false },
          { text: 'I can explain the proton gradient and how ATP synthase uses it', checked: false },
          { text: 'I can distinguish between cyclic and non-cyclic photophosphorylation', checked: false },
          { text: 'I know the products of each pathway and when each predominates', checked: false },
        ],
      },
    },
    {
      id: 'summary-lightdep',
      type: 'summary',
      data: {
        text: 'Light-dependent reactions in the thylakoid membrane split water (photolysis) at PSII, releasing electrons that travel through an electron transport chain (PQ, cyt b₆f, PC). As electrons descend, energy pumps protons into the lumen, creating a gradient. ATP synthase harnesses this gradient to phosphorylate ADP to ATP. PSI raises electrons to a high energy level, reducing NADP⁺ to NADPH. Non-cyclic photophosphorylation produces ATP and NADPH; cyclic photophosphorylation (PSI alone) produces ATP only by recycling electrons through the cytochrome b₆f complex.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-photolysis',
        prompt: 'Write the equation for photolysis of water and explain what each product is used for.',
      },
      {
        id: 'cue-2',
        blockId: 'list-carriers',
        prompt: 'Name the three main electron carriers in the thylakoid electron transport chain and describe their roles.',
      },
      {
        id: 'cue-3',
        blockId: 'h-chemiosmosis',
        prompt: 'How does the proton gradient created by the electron transport chain drive ATP synthesis? What is the role of ATP synthase?',
      },
      {
        id: 'cue-4',
        blockId: 'table-comparison',
        prompt: 'What is the key difference between cyclic and non-cyclic photophosphorylation? When is cyclic photophosphorylation most important?',
      },
      {
        id: 'cue-5',
        blockId: 'eq-nadph',
        prompt: 'How is NADPH produced, and where does it come from in the electron transport pathway?',
      },
    ],
    summaryText: 'Water photolysis at PSII releases electrons (replacing excited chlorophyll), protons (contributing to the gradient), and oxygen. Electrons pass through carriers: plastoquinone, cytochrome b₆f (which pumps protons), and plastocyanin. PSI raises electrons to a high energy level, reducing NADP⁺ to NADPH. The proton gradient drives ATP synthase, which synthesises ATP. Non-cyclic photophosphorylation involves both PSII and PSI, producing ATP, NADPH, and O₂; cyclic photophosphorylation involves PSI alone, recycling electrons and producing ATP only.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Thylakoid Membrane Proteins',
      detail: 'Structural studies show PSII, cytochrome b₆f, PSI, and ATP synthase are embedded in the thylakoid membrane in defined stoichiometries. X-ray crystallography has resolved their atomic structures.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14)',
      tags: ['structure', 'electron transport'],
    },
    {
      id: 'ev-2',
      title: 'Proton Gradient Demonstration',
      detail: 'Jagendorf and Uribe (1966) demonstrated that an artificially imposed pH gradient across thylakoid membranes could drive ATP synthesis, proving the chemiosmotic hypothesis.',
      year: '2023',
      source: 'Historical landmark experiment',
      tags: ['chemiosmosis', 'ATP synthesis'],
    },
  ],
};
