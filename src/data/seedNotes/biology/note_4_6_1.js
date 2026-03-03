export const note_biology_4_6_1 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the four phases of bacterial growth curve (lag, log, stationary, death), the biological processes occurring in each phase, and be able to calculate population size using doubling time.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Bacterial Growth Curve Phases', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'When bacteria are cultured in a closed system (batch culture), their population follows a predictable growth curve with four distinct phases: lag, log (exponential), stationary, and death (decline). Understanding these phases is essential for culturing microorganisms, predicting growth, and managing microbial infections.'
      },
      terms: []
    },
    {
      id: 'h-lag',
      type: 'heading',
      data: { text: 'Phase 1: Lag Phase', level: 2 },
      terms: []
    },
    {
      id: 'p-lag-1',
      type: 'paragraph',
      data: {
        text: 'The lag phase (adjustment phase) occurs when bacteria are first inoculated into fresh growth medium. During this phase, bacterial cells do not increase in number; cell division is minimal or absent. Instead, cells synthesise new enzymes needed to metabolise the nutrients available in the culture medium.'
      },
      terms: []
    },
    {
      id: 'p-lag-2',
      type: 'paragraph',
      data: {
        text: 'Cells adapt to their new environment by increasing in size, producing transport proteins, and repairing any damage from the transfer. The lag phase duration varies (hours to days) depending on the difference between the original and new growth conditions, and the physiological state of the inoculum.'
      },
      terms: []
    },
    {
      id: 'callout-lag',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Lag Phase Characteristics',
        text: 'No increase in cell number; enzyme and protein synthesis; cell adaptation to environment; preparation for rapid growth; duration depends on nutrient availability and temperature.'
      },
      terms: []
    },
    {
      id: 'h-log',
      type: 'heading',
      data: { text: 'Phase 2: Log (Exponential) Phase', level: 2 },
      terms: []
    },
    {
      id: 'p-log-1',
      type: 'paragraph',
      data: {
        text: 'The log phase (exponential phase) is when bacteria undergo rapid, unrestricted growth by binary fission. Cells divide at a constant rate determined by the doubling time (generation time). During this phase, nutrient availability is adequate, waste products have not accumulated to inhibitory levels, and environmental conditions (temperature, pH, O₂) remain optimal.'
      },
      terms: []
    },
    {
      id: 'p-log-2',
      type: 'paragraph',
      data: {
        text: 'In log phase, the population doubles at regular intervals. This exponential growth follows the equation: N = N₀ × 2ⁿ, where N₀ is the initial population, n is the number of generations (doublings), and N is the final population. The population increases dramatically during this phase.'
      },
      terms: []
    },
    {
      id: 'eq-log',
      type: 'equation',
      data: {
        html: 'N = N<sub>0</sub> × 2<sup>n</sup><br>where n = time elapsed ÷ doubling time'
      },
      terms: []
    },
    {
      id: 'ex-log',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Population Growth Calculation',
        text: 'A culture starts with N₀ = 1000 bacterial cells. The doubling time is 20 minutes.\n\nAfter 3 hours (180 minutes):\nn = 180 ÷ 20 = 9 generations\nN = 1000 × 2⁹ = 1000 × 512 = 512,000 cells\n\nThe population increases from 1,000 to 512,000 cells in 3 hours!'
      },
      terms: []
    },
    {
      id: 'callout-log',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Log Phase Characteristics',
        text: 'Rapid exponential growth by binary fission; constant doubling time; highest metabolic activity; cells most sensitive to antibiotics; essential for industrial fermentation and vaccine production.'
      },
      terms: []
    },
    {
      id: 'h-stat',
      type: 'heading',
      data: { text: 'Phase 3: Stationary Phase', level: 2 },
      terms: []
    },
    {
      id: 'p-stat-1',
      type: 'paragraph',
      data: {
        text: 'The stationary phase begins when the rate of cell division equals the rate of cell death (birth rate = death rate). There is no net change in population size, though cells continue to divide and die. This phase occurs because essential nutrients become depleted (nitrogen, phosphorus, carbon source) and/or waste products accumulate to inhibitory levels.'
      },
      terms: []
    },
    {
      id: 'p-stat-2',
      type: 'paragraph',
      data: {
        text: 'During stationary phase, cells undergo physiological changes: they become smaller, produce protective compounds (endospores in some bacteria), and reduce metabolic activity. This is a survival strategy when resources are limited.'
      },
      terms: []
    },
    {
      id: 'callout-stat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Stationary Phase Characteristics',
        text: 'Birth rate = death rate; no net population increase; nutrient limitation; accumulation of toxic waste; cells become smaller and more stress-resistant; production of secondary metabolites (useful in antibiotic production).'
      },
      terms: []
    },
    {
      id: 'h-death',
      type: 'heading',
      data: { text: 'Phase 4: Death (Decline) Phase', level: 2 },
      terms: []
    },
    {
      id: 'p-death-1',
      type: 'paragraph',
      data: {
        text: 'The death phase (decline phase) occurs when the death rate exceeds the birth rate, causing a decrease in viable cell numbers. Essential nutrients are exhausted, toxic metabolic waste accumulates (lactic acid, ammonia, hydrogen peroxide), and environmental conditions deteriorate. Cells may lyse or enter stationary survival mode.'
      },
      terms: []
    },
    {
      id: 'callout-death',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Death Phase Characteristics',
        text: 'Death rate > birth rate; population declines; complete depletion of nutrients; accumulation of toxic products; cells become stressed and may lyse; duration depends on cell robustness and environmental preservation (e.g. desiccation).'
      },
      terms: []
    },
    {
      id: 'h-doubling',
      type: 'heading',
      data: { text: 'Doubling Time (Generation Time)', level: 2 },
      terms: []
    },
    {
      id: 'p-doubling',
      type: 'paragraph',
      data: {
        text: 'Doubling time (also called generation time) is the time required for a bacterial population to double in size during the log phase. It varies between species and depends on temperature, nutrient availability, and growth conditions. Typical doubling times: E. coli ~20 min at 37degreesC, Mycobacterium tuberculosis ~15–20 hours at 37degreesC. It is calculated from the slope of a semi-log graph (log of cell number vs. time).'
      },
      terms: []
    },
    {
      id: 'svg-curve',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #333; } .label { font-size: 12px; } .curve { stroke: #6366f1; stroke-width: 2; fill: none; } .phase { font-size: 11px; font-weight: bold; }</style></defs><g class="axis"><line x1="40" y1="250" x2="380" y2="250" stroke-width="2"/><line x1="40" y1="30" x2="40" y2="250" stroke-width="2"/></g><text x="200" y="280" text-anchor="middle" class="label">Time</text><text x="15" y="150" text-anchor="middle" class="label">Log(cell number)</text><path class="curve" d="M 50 240 L 80 235 L 110 230 L 140 150 L 170 90 L 200 30 L 230 30 L 260 30 L 290 45 L 320 80 L 350 120"/><text x="65" y="265" class="phase">Lag</text><text x="155" y="265" class="phase">Log</text><text x="245" y="265" class="phase">Stationary</text><text x="330" y="265" class="phase">Death</text></svg>',
        caption: 'Bacterial growth curve: log(cell number) vs. time showing four phases'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The four phases reflect changing balance between cell division and death rates in response to nutrient availability and waste accumulation. In lag phase, cells prepare enzymes for growth. In log phase, abundant nutrients allow exponential doubling. In stationary phase, growth slows because nutrients are depleted and waste builds up. In death phase, cells cannot sustain themselves and begin dying.',
        apply: 'A bacterial culture has doubling time of 30 minutes. Starting with 500 cells, how many cells after 2 hours? (n = 120 ÷ 30 = 4; N = 500 × 2⁴ = 8000). If bacteria divide every 15 min instead, calculate the same.',
        analyze: 'Why do bacteria in stationary phase produce secondary metabolites (like antibiotics) more readily than in log phase? What advantage does this provide?',
        evaluate: 'In antibiotic production, why is it important to harvest cells at the end of log phase or early stationary phase rather than in death phase? Consider both the antibiotic yield and cell viability.'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe what happens to bacterial cells during lag phase', checked: false },
          { text: 'I can explain why lag phase has no cell division', checked: false },
          { text: 'I understand binary fission and exponential growth in log phase', checked: false },
          { text: 'I can use the formula N = N₀ × 2ⁿ to calculate population size', checked: false },
          { text: 'I can calculate doubling time and number of generations from time elapsed', checked: false },
          { text: 'I understand why stationary phase occurs and what causes it', checked: false },
          { text: 'I can explain the difference between stationary and death phases', checked: false },
          { text: 'I know why cells become stress-resistant in stationary phase', checked: false },
          { text: 'I can interpret a bacterial growth curve graph', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Bacterial growth follows four phases. Lag phase: cells adapt, no division. Log phase: exponential growth by binary fission, population N = N₀ × 2ⁿ, doubling time constant. Stationary phase: birth rate = death rate, nutrients limiting. Death phase: death rate > birth rate, population declines. Doubling time varies by species and conditions (E. coli ~20 min, M. tuberculosis ~15–20 hours). Growth curves are essential for culturing and infection management.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-lag', prompt: 'What biochemical processes occur during lag phase and why do cell numbers not increase?' },
      { id: 'cue-2', blockId: 'eq-log', prompt: 'Write the formula for exponential growth and define each variable.' },
      { id: 'cue-3', blockId: 'ex-log', prompt: 'If doubling time is 20 minutes and you start with 1000 cells, how many cells after 100 minutes?' },
      { id: 'cue-4', blockId: 'h-stat', prompt: 'Why does the stationary phase occur and what is the relationship between birth and death rates?' },
      { id: 'cue-5', blockId: 'h-doubling', prompt: 'Define doubling time and give two examples of bacterial doubling times.' }
    ],
    summaryText: 'Lag phase: enzyme synthesis, adaptation, no division. Log phase: exponential growth, N = N₀ × 2ⁿ, constant doubling time. Stationary phase: birth rate = death rate, nutrients depleted, waste accumulates. Death phase: death > birth, population declines. Doubling time ~20 min for E. coli, ~15–20 hours for M. tuberculosis.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Bacterial Growth Kinetics', detail: 'Campbell & Reece: Biology textbook sections on microbial growth kinetics and fermentation', year: '2020', source: 'Campbell Biology 12th ed.', tags: ['growth phases', 'exponential growth', 'bacterial kinetics'] }
  ]
};
