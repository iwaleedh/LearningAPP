/**
 * WBI15 — Topic 7.3: Krebs Cycle (Citric Acid Cycle)
 * Acetyl-CoA entry, intermediates, CO₂ & reducing power, ATP
 */

export const note_biology_5_7_3 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the Krebs cycle (citric acid cycle) as an 8-step cycle in the mitochondrial matrix, including acetyl-CoA entry, intermediate regeneration, and the production of CO₂, NADH, FADH₂, and ATP per turn.',
      },
    },
    {
      id: 'h-krebs',
      type: 'heading',
      data: { text: 'The Krebs Cycle (Citric Acid Cycle)', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'The Krebs cycle (also called the citric acid cycle or TCA cycle) is a central metabolic pathway in the mitochondrial matrix. It accepts acetyl groups from Acetyl-CoA and oxidises them completely to CO₂, transferring the electrons to NAD⁺ and FAD. The cycle also generates one ATP per turn via substrate-level phosphorylation. It occurs once per Acetyl-CoA, so twice per glucose.',
      },
    },
    {
      id: 'h-cycle',
      type: 'heading',
      data: { text: 'The Eight Steps of the Krebs Cycle', level: 3 },
    },
    {
      id: 'list-cycle',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Acetyl-CoA (2C) + Oxaloacetate (4C) → Citrate (6C) [citrate synthase]',
          'Citrate → Isocitrate [aconitase]',
          'Isocitrate → α-Ketoglutarate (5C) + CO₂ + NADH [isocitrate dehydrogenase]',
          'α-Ketoglutarate → Succinyl-CoA (4C) + CO₂ + NADH [α-ketoglutarate dehydrogenase]',
          'Succinyl-CoA → Succinate + ATP [succinyl-CoA synthetase, substrate-level phosphorylation]',
          'Succinate → Fumarate + FADH₂ [succinate dehydrogenase]',
          'Fumarate → Malate [fumarase]',
          'Malate → Oxaloacetate + NADH [malate dehydrogenase]',
        ],
      },
    },
    {
      id: 'p-regenerate',
      type: 'paragraph',
      data: {
        text: 'The cycle is called a "cycle" because oxaloacetate (4C) is regenerated at the end, allowing it to condense with another Acetyl-CoA and repeat. This is crucial for the cycle to continue; without oxaloacetate regeneration, the cycle would stop.',
      },
    },
    {
      id: 'h-peryield',
      type: 'heading',
      data: { text: 'Products Per Turn and Per Glucose', level: 3 },
    },
    {
      id: 'table-yield',
      type: 'comparisonTable',
      data: {
        headers: ['Product', 'Per Turn (1 Acetyl-CoA)', 'Per Glucose (2 Acetyl-CoA)'],
        rows: [
          ['CO₂ released', '2', '4'],
          ['NADH produced', '3', '6'],
          ['FADH₂ produced', '1', '2'],
          ['ATP (substrate-level)', '1', '2'],
        ],
        caption: 'Krebs cycle outputs per turn and per glucose',
      },
    },
    {
      id: 'p-nadh',
      type: 'paragraph',
      data: {
        text: 'The three NADH molecules produced per turn come from three separate dehydrogenase reactions: isocitrate dehydrogenase (step 3), α-ketoglutarate dehydrogenase (step 4), and malate dehydrogenase (step 8). These NADH molecules are the primary products of the cycle that will be oxidised in the electron transport chain to generate most of the ATP.',
      },
    },
    {
      id: 'p-fadh',
      type: 'paragraph',
      data: {
        text: 'The FADH₂ is produced in step 6 by succinate dehydrogenase (also called Complex II of the electron transport chain). This is the only redox reaction that produces FADH₂ instead of NADH; it reflects the lower redox potential of the FAD/FADH₂ couple compared to NAD⁺/NADH.',
      },
    },
    {
      id: 'h-regulation',
      type: 'heading',
      data: { text: 'Regulation of the Krebs Cycle', level: 3 },
    },
    {
      id: 'p-regulation',
      type: 'paragraph',
      data: {
        text: 'The Krebs cycle is regulated at three key points: (1) entry via acetyl-CoA availability (controlled by pyruvate dehydrogenase); (2) isocitrate dehydrogenase, which is inhibited by ATP and NADH (high energy signals); (3) α-ketoglutarate dehydrogenase, also inhibited by ATP and NADH. These feedback inhibitions ensure the cycle slows when energy is abundant and speeds up when energy is needed.',
      },
    },
    {
      id: 'callout-key-enzymes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Enzymes: Isocitrate & α-Ketoglutarate Dehydrogenases',
        text: 'Isocitrate dehydrogenase and α-ketoglutarate dehydrogenase are the main regulatory points of the Krebs cycle. Both are inhibited by ATP and NADH (signals of plenty) and activated by ADP (signal of need). This is classic allosteric feedback regulation.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The Krebs cycle is an 8-step cycle in the mitochondrial matrix that completely oxidises the 2-carbon acetyl group from Acetyl-CoA to 2 CO₂. The cycle regenerates oxaloacetate (4C) and produces 3 NADH, 1 FADH₂, and 1 ATP per turn. These reducing equivalents are the major source of ATP via the electron transport chain.',
        apply: 'Per glucose, how many NADH and FADH₂ molecules are produced in glycolysis, link reaction, and Krebs cycle combined? (Answer: 10 NADH, 2 FADH₂)',
        analyze: 'Compare the roles of isocitrate dehydrogenase and α-ketoglutarate dehydrogenase. Why are these two enzymes chosen as regulatory points rather than other steps?',
        evaluate: 'The Krebs cycle produces only 2 ATP directly per glucose (via substrate-level phosphorylation). Why is the cycle still considered the main ATP-producing stage of respiration?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Name the eight intermediates of the Krebs cycle in order', checked: false },
          { text: 'State the products of the Krebs cycle per turn and per glucose', checked: false },
          { text: 'Identify isocitrate dehydrogenase and α-ketoglutarate dehydrogenase as regulatory enzymes', checked: false },
          { text: 'Explain why oxaloacetate regeneration is essential', checked: false },
          { text: 'Describe the three NADH-producing steps of the cycle', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'The Krebs cycle oxidises acetyl groups to CO₂ in eight steps in the mitochondrial matrix. Per turn: 2 CO₂, 3 NADH, 1 FADH₂, 1 ATP. Per glucose: 4 CO₂, 6 NADH, 2 FADH₂, 2 ATP. Oxaloacetate is regenerated each turn, allowing the cycle to repeat. The cycle is regulated at isocitrate dehydrogenase and α-ketoglutarate dehydrogenase via feedback inhibition by ATP and NADH.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-yield',
        prompt: 'What are the products of one turn of the Krebs cycle? What is the total output per glucose?',
      },
      {
        id: 'cue-2',
        blockId: 'list-cycle',
        prompt: 'Name the eight steps of the Krebs cycle and the enzyme catalysing each.',
      },
      {
        id: 'cue-3',
        blockId: 'p-nadh',
        prompt: 'Which three enzymes of the Krebs cycle produce NADH? Where do they occur in the cycle?',
      },
      {
        id: 'cue-4',
        blockId: 'callout-key-enzymes',
        prompt: 'Identify the two main regulatory enzymes of the Krebs cycle and how they are regulated.',
      },
      {
        id: 'cue-5',
        blockId: 'p-regenerate',
        prompt: 'Why is the regeneration of oxaloacetate at the end of the cycle essential?',
      },
    ],
    summaryText:
      'Krebs cycle: 8-step cycle in mitochondrial matrix, oxidises Acetyl-CoA → 2 CO₂. Per turn: 3 NADH, 1 FADH₂, 1 ATP. Per glucose: 6 NADH, 2 FADH₂, 2 ATP. Oxaloacetate regenerated each turn. Key regulatory enzymes: isocitrate dehydrogenase and α-ketoglutarate dehydrogenase (inhibited by ATP, NADH).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Central role in metabolism',
      detail: 'Krebs cycle intermediates serve as precursors for amino acid and other biosynthetic pathways',
      year: '—',
      source: 'Biochemistry',
      tags: ['central metabolism'],
    },
  ],
};
