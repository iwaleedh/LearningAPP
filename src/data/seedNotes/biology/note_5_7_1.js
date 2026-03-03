/**
 * WBI15 — Topic 7.1: Glycolysis
 * 10 enzyme-catalysed steps, ATP investment & payoff, NADH, rate-limiting step
 */

export const note_biology_5_7_1 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand glycolysis as a ten-step pathway that splits glucose into pyruvate, including the ATP investment phase, payoff phase, NADH production, and the role of phosphofructokinase as a rate-limiting enzyme.',
      },
    },
    {
      id: 'h-glycolysis',
      type: 'heading',
      data: { text: 'Glycolysis: Glucose to Pyruvate', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: {
        text: 'Glycolysis is a cytoplasmic metabolic pathway that breaks down a single 6-carbon glucose molecule into two 3-carbon pyruvate molecules. It occurs in ten enzyme-catalysed steps and is the only process in the cell that does not require a mitochondrion.',
      },
    },
    {
      id: 'h-pathway',
      type: 'heading',
      data: { text: 'Ten Steps of Glycolysis', level: 3 },
    },
    {
      id: 'callout-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Glycolysis Steps Summary',
        text: 'Steps 1–3: Glucose → Glucose-6-phosphate → Fructose-6-phosphate → Fructose-1,6-bisphosphate (investment phase, 2 ATP used). Steps 4–10: F-1,6-BP → 3-carbon intermediates → 2 × Pyruvate (payoff phase, 4 ATP + 2 NADH produced). Overall net gain: 2 ATP, 2 NADH per glucose.',
      },
    },
    {
      id: 'p-invest',
      type: 'paragraph',
      data: {
        text: 'The investment phase (steps 1–3) requires the phosphorylation of glucose to activate it. Hexokinase catalyses the first step (glucose → glucose-6-phosphate, costing 1 ATP). Phosphofructokinase (PFK) catalyses the third and most important step, converting fructose-6-phosphate to fructose-1,6-bisphosphate, costing a second ATP. These two phosphorylations activate the sugar and commit the glucose to glycolysis.',
      },
    },
    {
      id: 'p-payoff',
      type: 'paragraph',
      data: {
        text: 'The payoff phase (steps 4–10) is where ATP is regenerated. Step 4 splits the 6-carbon sugar into two 3-carbon molecules (dihydroxyacetone phosphate, DHAP, and glyceraldehyde-3-phosphate, G3P). Steps 6–8 involve the oxidation of G3P by glyceraldehyde-3-phosphate dehydrogenase, producing NADH and a high-energy phosphate bond. Steps 9–10 perform substrate-level phosphorylation, transferring the high-energy phosphate to ADP to form ATP. Each 3-carbon molecule yields 2 ATP (total 4 ATP per glucose) and 1 NADH (total 2 NADH per glucose).',
      },
    },
    {
      id: 'p-net',
      type: 'paragraph',
      data: {
        text: 'Net equation per glucose: C₆H₁₂O₆ + 2 NAD⁺ + 2 ADP + 2 Pi → 2 Pyruvate + 2 NADH + 2 ATP. The net ATP gain is 2 ATP (4 produced − 2 invested). Under anaerobic conditions, NAD⁺ must be regenerated from NADH to continue glycolysis.',
      },
    },
    {
      id: 'h-pfk',
      type: 'heading',
      data: { text: 'Phosphofructokinase (PFK) as a Rate-Limiting Enzyme', level: 3 },
    },
    {
      id: 'p-pfk-def',
      type: 'paragraph',
      data: {
        text: 'PFK is the most important regulatory enzyme in glycolysis. It is feedback inhibited by ATP and citrate (both indicators of high energy status) and activated by AMP and ADP (indicators of low energy status). This ensures that glycolysis is activated when the cell needs energy and slowed when energy is abundant.',
      },
    },
    {
      id: 'table-pfk',
      type: 'comparisonTable',
      data: {
        headers: ['Regulator', 'Effect', 'Meaning'],
        rows: [
          ['ATP (high)', 'Inhibits PFK', 'Cell has plenty of energy, slow glycolysis'],
          ['AMP (high)', 'Activates PFK', 'Cell is energy-depleted, speed up glycolysis'],
          ['Citrate (high)', 'Inhibits PFK', 'Krebs cycle is running, slow glucose entry'],
          ['ADP (high)', 'Activates PFK', 'ATP is being consumed, increase glycolysis'],
        ],
        caption: 'Allosteric regulation of phosphofructokinase',
      },
    },
    {
      id: 'callout-rate',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Rate-Limiting Step',
        text: 'A rate-limiting enzyme is the slowest enzyme in a pathway and determines the overall rate of the pathway. PFK is the rate-limiting step of glycolysis because its activity directly controls how fast glucose is processed. By regulating PFK, the cell can adjust how much energy it extracts from glucose based on current energy needs.',
      },
    },
    {
      id: 'h-anaerobic',
      type: 'heading',
      data: { text: 'Glycolysis Under Anaerobic Conditions', level: 3 },
    },
    {
      id: 'p-nad',
      type: 'paragraph',
      data: {
        text: 'Under anaerobic conditions (when O₂ is unavailable), the electron transport chain cannot operate, so NAD⁺ is not regenerated from NADH. This would quickly deplete the NAD⁺ pool, halting glycolysis. To prevent this, cells regenerate NAD⁺ by reducing pyruvate: in animals, lactate dehydrogenase reduces pyruvate to lactate; in yeast and plants, pyruvate decarboxylase and alcohol dehydrogenase produce ethanol and CO₂. These fermentation pathways are discussed further in Topic 7.5.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Glycolysis splits glucose (6C) into 2 pyruvate (3C) in ten enzyme steps. The pathway has two phases: investment (2 ATP consumed, glucose activated) and payoff (4 ATP + 2 NADH produced). PFK is the rate-limiting enzyme, regulated by energy charge (ATP/AMP ratios) to match glycolysis rate to cellular energy needs.',
        apply: 'A cell in anaerobic conditions consumes glucose at 100 mmol/min for 2 minutes. How much lactate is produced? How much ATP is generated per minute? (Answer: 200 mmol lactate; 200 ATP/min)',
        analyze: 'Compare the investment and payoff phases of glycolysis. Why is the investment phase necessary? What is the strategy?',
        evaluate: 'Why is PFK feedback inhibited by ATP (its product) and activated by AMP? How does this create metabolic homeostasis?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the net equation for glycolysis and the ATP yield', checked: false },
          { text: 'Describe the investment phase and payoff phase', checked: false },
          { text: 'Identify phosphofructokinase and explain why it is rate-limiting', checked: false },
          { text: 'Explain allosteric regulation of PFK by ATP, ADP, and AMP', checked: false },
          { text: 'Describe how NAD⁺ is regenerated under anaerobic conditions', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Glycolysis converts glucose → 2 pyruvate in the cytoplasm via ten enzyme steps. Net yield: 2 ATP, 2 NADH. The pathway is divided into investment (2 ATP) and payoff (4 ATP) phases. Phosphofructokinase (PFK) is the rate-limiting enzyme, inhibited by ATP and citrate (high energy signals) and activated by AMP (low energy signal). Under anaerobic conditions, pyruvate is reduced to regenerate NAD⁺.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-net',
        prompt: 'Write the net equation for glycolysis and state the ATP and NADH yield per glucose.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-steps',
        prompt: 'Name the investment phase and payoff phase of glycolysis. What happens in each?',
      },
      {
        id: 'cue-3',
        blockId: 'p-pfk-def',
        prompt: 'What is phosphofructokinase (PFK) and why is it called the rate-limiting enzyme of glycolysis?',
      },
      {
        id: 'cue-4',
        blockId: 'table-pfk',
        prompt: 'How does ATP inhibit PFK whilst ADP activates it? What is the biological logic?',
      },
      {
        id: 'cue-5',
        blockId: 'p-nad',
        prompt: 'Why must NAD⁺ be regenerated during anaerobic glycolysis? How is this done in animals?',
      },
    ],
    summaryText:
      'Glycolysis: glucose → 2 pyruvate (10 steps, cytoplasm). Net yield: 2 ATP, 2 NADH. Two phases: investment (hexokinase + PFK, 2 ATP) and payoff (oxidation + substrate-level phosphorylation, 4 ATP + 2 NADH). PFK is rate-limiting, inhibited by ATP/citrate and activated by AMP/ADP. Anaerobic: pyruvate → lactate regenerates NAD⁺.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'PFK allosteric regulation',
      detail: 'PFK shows classic feedback inhibition: products (ATP, citrate) inhibit enzyme, whilst low-energy signals (AMP) activate it',
      year: '—',
      source: 'Biochemistry',
      tags: ['regulation'],
    },
  ],
};
