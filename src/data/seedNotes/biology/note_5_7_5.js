/**
 * WBI15 — Topic 7.5: Anaerobic Respiration
 * Fermentation, lactate & ethanol, NAD⁺ regeneration, EPOC
 */

export const note_biology_5_7_5 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand anaerobic respiration in the absence of oxygen, including lactate fermentation in animals and alcoholic fermentation in yeast/plants, the regeneration of NAD⁺, ATP yield, and oxygen debt.',
      },
    },
    {
      id: 'h-anaerobic',
      type: 'heading',
      data: { text: 'Anaerobic Respiration: Life Without Oxygen', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'When oxygen is unavailable (anoxic conditions), the electron transport chain cannot operate because oxygen is the final electron acceptor. This halts NAD⁺ regeneration from NADH, which would quickly deplete the NAD⁺ pool and stop glycolysis. To maintain ATP production, cells use fermentation pathways: they regenerate NAD⁺ by reducing pyruvate, allowing glycolysis to continue at the expense of accumulating lactate or ethanol.',
      },
    },
    {
      id: 'h-lactate',
      type: 'heading',
      data: { text: 'Lactate Fermentation (Animals)', level: 3 },
    },
    {
      id: 'p-lactate',
      type: 'paragraph',
      data: {
        text: 'In animal cells, pyruvate is reduced to lactate by the enzyme lactate dehydrogenase (LDH). This reaction regenerates NAD⁺ from NADH, allowing glycolysis to continue and producing net 2 ATP per glucose (from glycolysis only, as the Krebs cycle and oxidative phosphorylation are inactive).',
      },
    },
    {
      id: 'eq-lactate',
      type: 'equation',
      data: {
        html: 'Pyruvate + NADH + H<sup>+</sup> → Lactate + NAD<sup>+</sup> (catalysed by lactate dehydrogenase)',
        caption: 'Lactate fermentation reaction',
      },
    },
    {
      id: 'p-lactate-fate',
      type: 'paragraph',
      data: {
        text: 'Lactate accumulates in anaerobic cells and diffuses into the bloodstream. It is transported to the liver, where it is converted back to pyruvate and then glucose via gluconeogenesis (Cori cycle). During recovery, the lactate is oxidised back to pyruvate and fed into the Krebs cycle, generating ATP to "repay" the oxygen debt.',
      },
    },
    {
      id: 'h-ethanol',
      type: 'heading',
      data: { text: 'Alcoholic Fermentation (Yeast & Plants)', level: 3 },
    },
    {
      id: 'p-ethanol',
      type: 'paragraph',
      data: {
        text: 'In yeast and plants, pyruvate is converted to ethanol and CO₂ via two enzymes: (1) pyruvate decarboxylase removes CO₂ to form acetaldehyde; (2) alcohol dehydrogenase reduces acetaldehyde to ethanol using NADH, regenerating NAD⁺. Like lactate fermentation, this yields net 2 ATP per glucose.',
      },
    },
    {
      id: 'eq-ethanol',
      type: 'equation',
      data: {
        html: 'Pyruvate → Acetaldehyde + CO<sub>2</sub> (pyruvate decarboxylase) → Ethanol (alcohol dehydrogenase)',
        caption: 'Alcoholic fermentation pathway',
      },
    },
    {
      id: 'callout-compare',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Lactate vs Ethanol Fermentation',
        text: 'Both pathways regenerate NAD⁺ and yield 2 ATP per glucose. Key difference: lactate can be recovered and oxidised later (reversible); ethanol is toxic and excreted (irreversible in animals). Yeast use ethanol as a signalling molecule; plants tolerate it during root flooding.',
      },
    },
    {
      id: 'h-oxygen-debt',
      type: 'heading',
      data: { text: 'Oxygen Debt and EPOC', level: 3 },
    },
    {
      id: 'p-debt',
      type: 'paragraph',
      data: {
        text: 'During intense anaerobic exercise (e.g., sprinting), cells accumulate lactate and incur an "oxygen debt." After exercise, the athlete must breathe heavily to repay this debt: the elevated oxygen consumption after exercise (excess post-exercise oxygen consumption, EPOC, or "recovery oxygen consumption") is used to: (1) oxidise lactate back to pyruvate and CO₂ (via the Krebs cycle); (2) convert pyruvate to glucose (gluconeogenesis); (3) replenish phosphocreatine stores; (4) restore normal body temperature and cardiac function.',
      },
    },
    {
      id: 'p-epoc-time',
      type: 'paragraph',
      data: {
        text: 'EPOC typically lasts 15–60 minutes after exercise, depending on exercise intensity and duration. The ATP cost of converting lactate back to glucose is substantial (it is a "debt" that must be repaid), which is why recovery takes time.',
      },
    },
    {
      id: 'h-yeast',
      type: 'heading',
      data: { text: 'Anaerobic Respiration in Yeast: Industrial Applications', level: 3 },
    },
    {
      id: 'p-yeast',
      type: 'paragraph',
      data: {
        text: 'Yeast (Saccharomyces cerevisiae) naturally ferments glucose to ethanol under anaerobic conditions. This is the basis of beer, wine, and spirit production. Yeast can survive indefinitely on anaerobic fermentation, making it ideal for industrial fermentation. The ethanol product inhibits growth at high concentrations (typically >15%), limiting fermentation efficiency.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Anaerobic respiration (fermentation) regenerates NAD⁺ from NADH by reducing pyruvate without oxidising it further. In animals, pyruvate → lactate; in yeast, pyruvate → ethanol + CO₂. Both yield only 2 ATP (from glycolysis), far less than aerobic respiration (~30 ATP).',
        apply: 'A sprinter runs a 400 m race in 50 seconds at maximum intensity, relying on anaerobic metabolism. Calculate the lactate produced (assume 100 g muscle tissue, initial glucose 5 mM). If lactate is 10 mM/L of blood at recovery, estimate blood volume of this athlete.',
        analyze: 'Why can yeast survive indefinitely on fermentation whilst animals cannot? What limits anaerobic survival?',
        evaluate: 'Discuss why lactate is sometimes called a "waste product" but is actually valuable. How does the Cori cycle change this interpretation?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Write the equation for lactate fermentation', checked: false },
          { text: 'Write the equations for alcoholic fermentation', checked: false },
          { text: 'Explain why NAD⁺ regeneration is essential for anaerobic glycolysis', checked: false },
          { text: 'Describe the Cori cycle and oxygen debt', checked: false },
          { text: 'Compare ATP yield of anaerobic vs aerobic respiration', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Anaerobic respiration (fermentation) occurs when O₂ is unavailable. Animals: pyruvate → lactate (LDH); yeast/plants: pyruvate → ethanol + CO₂. Both regenerate NAD⁺ allowing glycolysis to continue, yielding 2 ATP per glucose. Lactate accumulates during exercise; after exercise, EPOC repays oxygen debt by oxidising lactate via Krebs cycle. Much less efficient than aerobic respiration (~30 ATP).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-lactate',
        prompt: 'Write the equation for lactate fermentation and state the role of lactate dehydrogenase.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-ethanol',
        prompt: 'Write the equations for alcoholic fermentation. Which organisms use this pathway?',
      },
      {
        id: 'cue-3',
        blockId: 'p-lactate',
        prompt: 'Why must pyruvate be reduced to lactate in anaerobic conditions? What is the biological purpose?',
      },
      {
        id: 'cue-4',
        blockId: 'p-debt',
        prompt: 'What is oxygen debt (EPOC)? Describe what happens to lactate during recovery after intense exercise.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-compare',
        prompt: 'Compare lactate and ethanol fermentation. Which is reversible and why?',
      },
    ],
    summaryText:
      'Anaerobic respiration: pyruvate → lactate (animals, LDH) or ethanol + CO₂ (yeast). Regenerates NAD⁺ from NADH, allowing glycolysis to continue. Yields 2 ATP per glucose (much less than ~30 from aerobic). Lactate accumulates, causing "oxygen debt." EPOC: elevated O₂ consumption after exercise to oxidise lactate and repay debt.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Lactate as signalling molecule',
      detail: 'Lactate is now recognised as a signalling molecule and can be oxidised in other tissues',
      year: '2010s',
      source: 'Recent biochemistry',
      tags: ['signalling'],
    },
  ],
};
