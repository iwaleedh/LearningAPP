export const note_biology_4_5_2 = {
  blocks: [
    {
      id: 'obj-calvin',
      type: 'objective',
      data: {
        text: 'Understand the Calvin cycle (light-independent reactions): CO₂ fixation by RuBisCO, reduction of 3-phosphoglycerate to G3P, regeneration of RuBP, and the ATP and NADPH requirements per CO₂ fixed.',
      },
    },
    {
      id: 'h-calvin-overview',
      type: 'heading',
      data: {
        text: 'The Calvin Cycle Overview',
        level: 2,
      },
    },
    {
      id: 'p-calvin-intro',
      type: 'paragraph',
      data: {
        text: 'The Calvin cycle, also called the light-independent reactions or dark reactions, occurs in the stroma of the chloroplast. Despite the name "dark reactions," they require the ATP and NADPH produced by the light-dependent reactions. The cycle fixes atmospheric carbon dioxide into organic molecules through a series of enzyme-catalysed reactions. One complete turn of the cycle fixes three molecules of CO₂, producing one net molecule of G3P (glyceraldehyde-3-phosphate), which can be used for glucose synthesis or other metabolic pathways.',
      },
    },
    {
      id: 'h-co2-fixation',
      type: 'heading',
      data: {
        text: 'CO₂ Fixation by RuBisCO',
        level: 2,
      },
    },
    {
      id: 'p-rubisco-desc',
      type: 'paragraph',
      data: {
        text: 'The first step of the Calvin cycle is the fixation of CO₂ by the enzyme ribulose bisphosphate carboxylase-oxygenase (RuBisCO), the most abundant protein on Earth. RuBisCO catalyses the addition of CO₂ to a 5-carbon sugar, ribulose-1,5-bisphosphate (RuBP), forming a 6-carbon intermediate that immediately splits into two molecules of 3-phosphoglycerate (GP, also called 3-PG).',
      },
    },
    {
      id: 'eq-fixation',
      type: 'equation',
      data: {
        html: 'CO<sub>2</sub> + RuBP (5C) → 2 × GP (3C)',
        caption: 'Fixation reaction catalysed by RuBisCO',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'RuBisCO Properties',
        text: 'RuBisCO is remarkably slow, catalysing only ~3 reactions per second. Its abundance compensates for this low catalytic rate. RuBisCO also has oxygenase activity, catalysing the oxidative breakdown of RuBP when O₂ concentration is high relative to CO₂, leading to photorespiration (a wasteful process).',
      },
    },
    {
      id: 'h-reduction',
      type: 'heading',
      data: {
        text: 'Reduction Phase',
        level: 2,
      },
    },
    {
      id: 'p-reduction-desc',
      type: 'paragraph',
      data: {
        text: 'The 3-phosphoglycerate (GP) molecules produced by fixation are reduced in a two-step process using ATP and NADPH from the light-dependent reactions. First, GP is phosphorylated by ATP to form 1,3-bisphosphoglycerate. This intermediate is then reduced by NADPH to form glyceraldehyde-3-phosphate (G3P). This reduction step is the key energy-requiring phase of the Calvin cycle.',
      },
    },
    {
      id: 'list-reduction-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          {
            text: 'GP + ATP → 1,3-bisphosphoglycerate (phosphorylation)',
          },
          {
            text: '1,3-bisphosphoglycerate + NADPH → G3P (reduction)',
          },
        ],
      },
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Energy Cost of Fixation',
        text: 'For one turn of the cycle (fixing 3 CO₂): 3 GP molecules are produced, requiring 3 ATP and 3 NADPH for their reduction to G3P. However, calculating per CO₂ fixed: 3 ATP ÷ 3 = 1 ATP per CO₂ for this step, but overall the cycle uses 3 ATP and 2 NADPH per CO₂ when accounting for RuBP regeneration.',
      },
    },
    {
      id: 'h-regeneration',
      type: 'heading',
      data: {
        text: 'Regeneration of RuBP',
        level: 2,
      },
    },
    {
      id: 'p-regeneration-desc',
      type: 'paragraph',
      data: {
        text: 'The G3P molecules must be recycled to regenerate RuBP, the CO₂ acceptor. Of the six G3P molecules produced per two turns of the cycle (from fixing 6 CO₂), five are used in a complex series of rearrangement reactions involving transketolase and aldolase enzymes. These reactions rearrange three 5-carbon sugars back into a C-3 sugar framework that combines to regenerate three RuBP molecules, requiring one additional ATP per CO₂ to phosphorylate the RuBP precursor.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Tracking Carbon Through the Cycle',
        text: 'To understand the cycle quantitatively: fix 3 CO₂ → 6 GP → 6 G3P produced. One G3P (net, 3C) exits for biosynthesis. Five G3P (15C) are rearranged via sugar-phosphate interconversions to regenerate 3 RuBP (15C total). This complex rearrangement is where 3 more ATP are used.',
      },
    },
    {
      id: 'table-calvin',
      type: 'comparisonTable',
      data: {
        headers: ['Stage', 'Substrate', 'Product', 'Enzyme', 'Cofactors'],
        rows: [
          ['Fixation', 'CO₂ + RuBP (5C)', '2 × GP (3C)', 'RuBisCO', 'None'],
          ['Reduction (step 1)', 'GP (3C)', '1,3-bPG', 'GP kinase', 'ATP'],
          ['Reduction (step 2)', '1,3-bPG', 'G3P (3C)', 'GAPDH', 'NADPH'],
          ['Regeneration', '5 G3P (15C)', '3 RuBP (15C)', 'Various', 'ATP'],
        ],
        caption: 'Summary of Calvin cycle stages',
      },
    },
    {
      id: 'h-net-products',
      type: 'heading',
      data: {
        text: 'Net Products and ATP/NADPH Requirements',
        level: 2,
      },
    },
    {
      id: 'p-net-equation',
      type: 'paragraph',
      data: {
        text: 'Per complete cycle (fixing three CO₂ molecules), the Calvin cycle produces six G3P molecules, of which five are used to regenerate three RuBP molecules. One G3P exits the cycle and can be used for glucose synthesis or other biosynthetic pathways. The cycle requires 9 ATP (3 for reduction, 6 for regeneration) and 6 NADPH (3 for reduction). Per CO₂ fixed, this equates to 3 ATP and 2 NADPH, matching the ATP:NADPH ratio (~3:2) produced by non-cyclic photophosphorylation.',
      },
    },
    {
      id: 'eq-cycle-summary',
      type: 'equation',
      data: {
        html: '3CO<sub>2</sub> + 9 ATP + 6 NADPH → 1 G3P + 9 ADP + 6 NADP<sup>+</sup>',
        caption: 'Overall equation for one turn of the Calvin cycle',
      },
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Glucose Synthesis',
        text: 'Two G3P molecules are needed to synthesise one glucose (C₆H₁₂O₆). Therefore, six turns of the Calvin cycle (fixing 18 CO₂) are needed to produce one glucose molecule. This requires 54 ATP and 36 NADPH.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The Calvin cycle occurs in three phases: (1) fixation of CO₂ to RuBP by RuBisCO, producing GP; (2) reduction of GP using ATP and NADPH to form G3P; (3) regeneration of RuBP from G3P using additional ATP. For every three CO₂ fixed, six G3P are made, one exits for biosynthesis, and five regenerate the three RuBP acceptors. The cycle requires 3 ATP and 2 NADPH per CO₂, and operates in the stroma using substrates from the light-dependent reactions.',
        apply: 'A plant photosynthesises at a rate of 100 μmol CO₂ fixed per hour. Calculate the rate of ATP and NADPH consumption in the Calvin cycle, assuming all CO₂ is processed through the cycle.',
        analyze: 'Compare the energy requirements of the Calvin cycle (ATP and NADPH) with the energy available from light absorption. Why is the cycle most efficient in bright light?',
        evaluate: 'RuBisCO is catalytically slow (~3 reactions/s) yet is the most abundant protein on Earth. Evaluate why plants invest in such a slow enzyme despite the energetic cost, and discuss alternative strategies plants use to overcome RuBisCO limitations.',
      },
      terms: [],
    },
    {
      id: 'checklist-calvin',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe the three stages of the Calvin cycle', checked: false },
          { text: 'I understand the role of RuBisCO in CO₂ fixation', checked: false },
          { text: 'I can write the equation for fixation and name the products', checked: false },
          { text: 'I can explain the reduction phase and its energy requirements', checked: false },
          { text: 'I understand how RuBP is regenerated from G3P', checked: false },
          { text: 'I can calculate ATP and NADPH requirements per CO₂ fixed', checked: false },
        ],
      },
    },
    {
      id: 'summary-calvin',
      type: 'summary',
      data: {
        text: 'The Calvin cycle (light-independent reactions) occurs in the stroma in three phases. (1) Fixation: RuBisCO adds CO₂ to RuBP, forming two GP molecules. (2) Reduction: GP is phosphorylated by ATP and reduced by NADPH to form G3P. (3) Regeneration: Five G3P are rearranged using ATP to regenerate three RuBP. Per turn (3 CO₂), the cycle requires 9 ATP and 6 NADPH, or 3 ATP and 2 NADPH per CO₂. One G3P exits per turn for biosynthesis.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-fixation',
        prompt: 'Write the equation for CO₂ fixation and name the enzyme that catalyses it. What is unusual about this enzyme?',
      },
      {
        id: 'cue-2',
        blockId: 'list-reduction-steps',
        prompt: 'Describe the two steps of the reduction phase of the Calvin cycle, including which molecules are produced and consumed.',
      },
      {
        id: 'cue-3',
        blockId: 'h-regeneration',
        prompt: 'How many ATP and NADPH molecules are required per CO₂ fixed in the Calvin cycle? Why is this specific ratio important?',
      },
      {
        id: 'cue-4',
        blockId: 'eq-cycle-summary',
        prompt: 'Write the overall equation for one complete turn of the Calvin cycle. How many turns are needed to produce one glucose molecule?',
      },
      {
        id: 'cue-5',
        blockId: 'callout-key1',
        prompt: 'Why does RuBisCO catalyse the oxygenase reaction, and what is the consequence of this dual activity?',
      },
    ],
    summaryText: 'The Calvin cycle has three phases: (1) Fixation: RuBisCO catalyses CO₂ + RuBP → 2 GP. (2) Reduction: GP + ATP + NADPH → G3P. (3) Regeneration: 5 G3P + ATP → 3 RuBP. Per cycle (3 CO₂ fixed), 6 G3P are produced, 1 exits for glucose synthesis, 5 regenerate RuBP using 9 ATP total and 6 NADPH. This is 3 ATP and 2 NADPH per CO₂. RuBisCO is slow and also catalyses a wasteful oxygenase reaction when O₂ is high.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Calvin Cycle Discovery',
      detail: 'Melvin Calvin, Andrew Benson, and others used radioactive ¹⁴C tracing (1945-1950) to determine the sequence of reactions in the cycle, earning Calvin the Nobel Prize in Chemistry (1961).',
      year: '2023',
      source: 'Historical landmark in photosynthesis research',
      tags: ['history', 'methods'],
    },
    {
      id: 'ev-2',
      title: 'RuBisCO Abundance',
      detail: 'RuBisCO comprises up to 50% of soluble protein in green leaves and is considered the most abundant enzyme on Earth. Its slow catalytic rate is compensated by massive abundance.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14)',
      tags: ['enzyme', 'carbon fixation'],
    },
  ],
};
