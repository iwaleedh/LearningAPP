/**
 * WBI15 — Topic 7.0: Aerobic Respiration Overview
 * Overall equation, stages, ATP yield
 */

export const note_biology_5_7_0 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the overall aerobic respiration equation, the four key stages, theoretical ATP yields, and how eukaryotic yields differ from prokaryotic due to membrane structure.',
      },
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'Aerobic Respiration Overview', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: {
        text: 'Aerobic respiration is the controlled oxidation of glucose (or other organic substrates) in the presence of oxygen, releasing energy that is conserved in ATP molecules. This process is highly efficient, yielding much more ATP per glucose than anaerobic pathways.',
      },
    },
    {
      id: 'h-eq',
      type: 'heading',
      data: { text: 'Overall Equation', level: 3 },
    },
    {
      id: 'eq-main',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + Energy (ΔG° = −30.5 kJ/mol ATP)',
        caption: 'Overall aerobic respiration of glucose',
      },
    },
    {
      id: 'p-energy',
      type: 'paragraph',
      data: {
        text: 'The free energy change (ΔG°) is −30.5 kJ per mole of glucose. However, not all of this energy is captured as ATP; some is lost as heat during the process. Approximately 38% of the total energy is captured as ATP under theoretical conditions.',
      },
    },
    {
      id: 'h-stages',
      type: 'heading',
      data: { text: 'Four Stages of Aerobic Respiration', level: 3 },
    },
    {
      id: 'table-stages',
      type: 'comparisonTable',
      data: {
        headers: ['Stage', 'Location', 'Input', 'Output', 'Key Feature'],
        rows: [
          [
            'Glycolysis',
            'Cytoplasm',
            'Glucose (1)',
            '2 Pyruvate, 2 ATP, 2 NADH',
            'Glucose split into 2 × 3C units',
          ],
          [
            'Link Reaction',
            'Mitochondrial matrix',
            'Pyruvate (2)',
            '2 Acetyl-CoA, 2 CO₂, 2 NADH',
            'Pyruvate decarboxylated, oxidised',
          ],
          [
            'Krebs Cycle',
            'Mitochondrial matrix',
            'Acetyl-CoA (2)',
            '4 CO₂, 6 NADH, 2 FADH₂, 2 ATP',
            'Complete oxidation of acetyl groups',
          ],
          [
            'Oxidative Phosphorylation',
            'Inner mitochondrial membrane',
            'NADH (10), FADH₂ (2)',
            '~30 ATP (eukaryotes) or ~38 ATP (prokaryotes)',
            'Electron transport chain, chemiosmosis',
          ],
        ],
        caption: 'Stages of aerobic respiration and their outputs',
      },
    },
    {
      id: 'h-yield',
      type: 'heading',
      data: { text: 'ATP Yield and Efficiency', level: 3 },
    },
    {
      id: 'p-prokaryote',
      type: 'paragraph',
      data: {
        text: 'In prokaryotes with no internal membrane compartments, the theoretical maximum ATP yield is approximately 38 ATP per glucose molecule: 2 ATP from glycolysis + 2 ATP from the Krebs cycle (substrate-level) + ~34 ATP from oxidative phosphorylation (at 2.5 ATP/NADH and 1.5 ATP/FADH₂).',
      },
    },
    {
      id: 'p-eukaryote',
      type: 'paragraph',
      data: {
        text: 'In eukaryotes, the actual yield is lower, approximately 30 ATP per glucose. This is because: (1) NADH molecules produced in the cytoplasm during glycolysis cannot directly enter the mitochondrial matrix, so they must be shuttled across the outer membrane, costing 1 ATP per NADH (the glycerol-3-phosphate shuttle); (2) the inner mitochondrial membrane is slightly permeable to protons, causing some leakage of the proton gradient (proton leak). This leakage dissipates the electrochemical gradient without producing ATP.',
      },
    },
    {
      id: 'callout-leak',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Proton Leak & Real-World Efficiency',
        text: 'The ~30 ATP figure is more realistic than 38 ATP. In real cells, additional energy losses occur due to proton leak, allowing some protons to return to the matrix without passing through ATP synthase. This is actually beneficial during thermoregulation (see thermogenesis in brown adipose tissue).',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Aerobic respiration involves controlled, stepwise oxidation of glucose across four coupled stages. The majority of ATP is made in the final stage via chemiosmosis, where the electron transport chain oxidises electron carriers (NADH, FADH₂) and uses the energy to pump protons across the inner mitochondrial membrane.',
        apply: 'If 1 glucose yields ~30 ATP in eukaryotes, and each ATP hydrolysis releases ~30.5 kJ/mol, calculate the total energy captured. Compare this to the ΔG° of −2,880 kJ/mol for glucose oxidation. What percentage is captured?',
        analyze: 'Compare the location and inputs/outputs of glycolysis vs the Krebs cycle. Why does glycolysis occur in the cytoplasm whilst the Krebs cycle requires the mitochondrial matrix?',
        evaluate: 'Evaluate the statement: "Aerobic respiration is much more efficient than anaerobic respiration because it yields more ATP." What other factors (time, substrate availability, evolutionary context) might make this statement incomplete?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Write out the overall equation for aerobic respiration', checked: false },
          { text: 'State the location of each of the four stages', checked: false },
          { text: 'Explain why eukaryotic ATP yield (~30) is lower than prokaryotic (~38)', checked: false },
          { text: 'Calculate ATP yield from NADH, FADH₂ and substrate-level phosphorylation', checked: false },
          { text: 'Describe the concept of proton leak and its significance', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Aerobic respiration oxidises glucose to CO₂ and H₂O across four coupled stages (glycolysis, link reaction, Krebs cycle, oxidative phosphorylation) in the presence of O₂. The overall ΔG° is −30.5 kJ/mol, yielding approximately 30–38 ATP per glucose (lower in eukaryotes due to proton leak and shuttle costs). This represents ~32–40% energy capture efficiency.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-main',
        prompt: 'Write the overall equation for aerobic respiration and state the ΔG° value.',
      },
      {
        id: 'cue-2',
        blockId: 'table-stages',
        prompt: 'Name the four stages of aerobic respiration and state where each occurs.',
      },
      {
        id: 'cue-3',
        blockId: 'p-prokaryote',
        prompt: 'Why is the ATP yield approximately 38 ATP in prokaryotes but ~30 ATP in eukaryotes?',
      },
      {
        id: 'cue-4',
        blockId: 'callout-leak',
        prompt: 'What is proton leak and how does it reduce ATP yield in real cells?',
      },
      {
        id: 'cue-5',
        blockId: 'h-yield',
        prompt: 'What is the theoretical maximum ATP yield per glucose, and what percentage of total energy does this represent?',
      },
    ],
    summaryText:
      'Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (ΔG° = −30.5 kJ/mol). Four stages: glycolysis (cytoplasm, 2 ATP net), link reaction (matrix), Krebs cycle (matrix, 2 ATP), oxidative phosphorylation (inner membrane, ~26–34 ATP). Yield ~30 ATP eukaryotes vs ~38 prokaryotes due to proton leak and shuttle costs.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Glucose oxidation energy',
      detail: 'Glucose contains ~2,880 kJ/mol available energy; ~32–40% captured as ATP',
      year: '—',
      source: 'Biochemistry texts',
      tags: ['energetics'],
    },
  ],
};
