/**
 * WBI15 — Topic 7.12: Thermoregulation in Ectotherms and Endotherms
 * Metabolic heat, vasoconstriction/dilation, shivering, sweating, brown adipose tissue
 */

export const note_biology_5_7_12 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand thermoregulation in endotherms (mammals, birds) and ectotherms (reptiles, fish), including physiological and behavioural mechanisms, metabolic costs, and brown adipose tissue.',
      },
    },
    {
      id: 'h-thermoregulation',
      type: 'heading',
      data: { text: 'Thermoregulation: Controlling Body Temperature', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Body temperature is maintained by balancing heat production (metabolism, muscle contraction) and heat loss (radiation, conduction, convection, evaporation). Two strategies evolved: endothermy (internal heat production, mammals/birds) and ectothermy (environmental heat acquisition, reptiles/fish).',
      },
    },
    {
      id: 'h-endotherms',
      type: 'heading',
      data: { text: 'Endothermy: Internal Heat Production', level: 3 },
    },
    {
      id: 'p-endotherms',
      type: 'paragraph',
      data: {
        text: 'Endotherms (mammals, birds, some fish) generate heat internally via metabolic rate and maintain a constant body temperature (~37°C in humans) independent of environment. This allows activity in cold climates but requires high food intake to fuel metabolism.',
      },
    },
    {
      id: 'h-warming-mechanisms',
      type: 'heading',
      data: { text: 'Warming Mechanisms in Endotherms', level: 3 },
    },
    {
      id: 'list-warming',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Shivering thermogenesis: involuntary muscle contractions generate heat via ATP hydrolysis; rapid and effective but metabolically expensive',
          'Non-shivering thermogenesis: brown adipose tissue (BAT) produces heat via uncoupling protein (UCP, thermogenin) in mitochondria',
          'Vasoconstriction: blood vessels in skin narrow, reducing heat loss to environment',
          'Piloerection: hair/fur stands up (vestigial in humans, functional in mammals) to trap air layer for insulation',
        ],
      },
    },
    {
      id: 'h-cooling-mechanisms',
      type: 'heading',
      data: { text: 'Cooling Mechanisms in Endotherms', level: 3 },
    },
    {
      id: 'list-cooling',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Sweating: sweat gland secretion; evaporation of water causes heat loss (latent heat of vaporisation ~2.4 kJ/mL)',
          'Vasodilation: blood vessels in skin dilate, increasing blood flow to surface for heat radiation',
          'Panting: rapid breathing increases evaporative cooling from respiratory tract (in animals without sweat glands)',
          'Behavioural: seeking shade, reducing activity, entering water',
        ],
      },
    },
    {
      id: 'h-bat',
      type: 'heading',
      data: { text: 'Brown Adipose Tissue (BAT) and Thermogenin', level: 3 },
    },
    {
      id: 'p-bat-overview',
      type: 'paragraph',
      data: {
        text: 'Brown adipose tissue (BAT) is specialised fat tissue that produces heat rather than storing energy. BAT is rich in mitochondria and is abundant in newborns and small mammals. Heat production occurs via thermogenin (uncoupling protein, UCP1), which allows protons to leak across the inner mitochondrial membrane without driving ATP synthase.',
      },
    },
    {
      id: 'p-bat-mechanism',
      type: 'paragraph',
      data: {
        text: 'In normal mitochondria, protons pumped by the ETC create a proton gradient that drives ATP synthesis. In BAT, UCP1 provides a "short circuit," allowing protons to return to the matrix without producing ATP. The energy from the electrochemical gradient is released as heat instead. This process is called non-shivering thermogenesis and is particularly important in newborns who cannot shiver.',
      },
    },
    {
      id: 'callout-bat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Brown vs White Adipose Tissue',
        text: 'White adipose: stores energy as triglycerides; few mitochondria; pale colour. Brown adipose: generates heat; many mitochondria (with UCP1); dark colour due to high myoglobin. Newborns rely heavily on BAT for thermoregulation, especially in cold environments.',
      },
    },
    {
      id: 'h-ectotherms',
      type: 'heading',
      data: { text: 'Ectothermy: Environmental Heat Dependence', level: 3 },
    },
    {
      id: 'p-ectotherms',
      type: 'paragraph',
      data: {
        text: 'Ectotherms (reptiles, amphibians, fish, invertebrates) cannot produce sufficient metabolic heat and depend on environmental heat to raise body temperature. Their metabolic rate varies with environmental temperature (Q10 effect). Ectothermy has low metabolic cost but limits activity in cold climates.',
      },
    },
    {
      id: 'p-ecto-behaviour',
      type: 'paragraph',
      data: {
        text: 'Ectotherms regulate temperature behaviourally: basking in sun to warm up, retreating to shade or burrows to cool down, entering water for temperature buffering. This is called behavioural thermoregulation and is the only thermoregulatory mechanism available to ectotherms.',
      },
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Aspect', 'Endotherms (Mammals, Birds)', 'Ectotherms (Reptiles, Fish)'],
        rows: [
          ['Heat source', 'Metabolic (internal)', 'Environmental'],
          ['Body temperature', 'Constant (~37°C)', 'Variable, matches environment'],
          ['Metabolic cost', 'High (food demand)', 'Low'],
          ['Activity in cold', 'Possible', 'Restricted'],
          ['Regulatory mechanisms', 'Physiological + behavioural', 'Behavioural only'],
          ['Examples', 'Humans, dogs, owls', 'Snakes, crocodiles, fish'],
        ],
        caption: 'Comparison of endothermy and ectothermy',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Endotherms generate internal heat (shivering, BAT) and maintain constant temperature via feedback control. Ectotherms rely on environmental heat and behavioural regulation. Thermoregulation is a trade-off: endotherms pay high metabolic cost but gain independence; ectotherms have low cost but limited cold tolerance.',
        apply: 'A human in a 5°C environment must maintain 37°C. Describe the physiological responses (shivering, vasoconstriction, BAT activation) and calculate the metabolic cost relative to resting rate.',
        analyze: 'Why do reptiles (ectotherms) bask on rocks in the morning? Explain the bioenergetic logic.',
        evaluate: 'Discuss the evolutionary trade-offs between endothermy and ectothermy. In what environments would each strategy be advantageous?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define endothermy and ectothermy', checked: false },
          { text: 'Describe physiological warming mechanisms in endotherms', checked: false },
          { text: 'Describe physiological cooling mechanisms in endotherms', checked: false },
          { text: 'Explain brown adipose tissue and thermogenin function', checked: false },
          { text: 'Compare metabolic costs and ecological niches of endo- and ectotherms', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Endotherms (mammals, birds): constant body temperature (~37°C) via metabolic heat (shivering, BAT/UCP1). Warming: shivering, vasoconstriction, piloerection; cooling: sweating, vasodilation. BAT: high mitochondria, UCP1 allows proton leak → heat. Ectotherms (reptiles, fish): variable temperature, behavioural regulation (basking, burrowing). Endothermy: high cost, cold-tolerant; ectothermy: low cost, temperature-dependent.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-overview',
        prompt: 'Define endothermy and ectothermy. What are the evolutionary trade-offs?',
      },
      {
        id: 'cue-2',
        blockId: 'list-warming',
        prompt: 'Describe four warming mechanisms in endotherms.',
      },
      {
        id: 'cue-3',
        blockId: 'list-cooling',
        prompt: 'Describe four cooling mechanisms in endotherms.',
      },
      {
        id: 'cue-4',
        blockId: 'p-bat-mechanism',
        prompt: 'Explain how brown adipose tissue generates heat via UCP1 (thermogenin).',
      },
      {
        id: 'cue-5',
        blockId: 'p-ecto-behaviour',
        prompt: 'Describe how ectotherms regulate body temperature behaviourally.',
      },
    ],
    summaryText:
      'Endotherms: constant T (~37°C) via metabolism. Warming: shivering, vasoconstriction, piloerection, BAT. Cooling: sweating, vasodilation, panting. BAT: high mitochondria, UCP1 (thermogenin) allows proton leak → heat instead of ATP. Ectotherms: variable T, behavioural regulation (basking, burrowing). Trade-off: endothermy high cost, ectothermy low cost.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'UCP1 discovery',
      detail: 'Thermogenin discovered in brown adipose tissue; recombinant studies confirmed proton leak mechanism',
      year: '1970s–1980s',
      source: 'Bioenergetics',
      tags: ['thermogenesis'],
    },
  ],
};
