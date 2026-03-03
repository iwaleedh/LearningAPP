/**
 * WBI15 — Topic 7.7: Core Practical 15 - Respiration Rate Measurement
 * Respirometer, KOH, manometer, O₂ consumption rate, sources of error
 */

export const note_biology_5_7_7 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the design and principles of a respirometer, how to measure O₂ consumption rate using manometry or redox dyes, sources of error, and how to interpret results.',
      },
    },
    {
      id: 'h-practical',
      type: 'heading',
      data: { text: 'Core Practical 15: Measuring Respiration Rate', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'This practical measures the rate of O₂ consumption (or CO₂ production) in a living organism (e.g., germinating seeds, insect larvae). The respiration rate is an indicator of metabolic activity and can be used to compare the effects of temperature, substrate type, or other variables.',
      },
    },
    {
      id: 'h-respirometer',
      type: 'heading',
      data: { text: 'The Respirometer Apparatus', level: 3 },
    },
    {
      id: 'p-apparatus',
      type: 'paragraph',
      data: {
        text: 'A respirometer consists of a sealed container (flask or tube) containing: (1) the organism (seeds, small invertebrates); (2) an absorbent (KOH solution or NaHCO₃ buffer); (3) a manometer (pressure-measuring device) with coloured fluid. The KOH or NaOH absorbs CO₂ released by respiration: 2 KOH + CO₂ → K₂CO₃ + H₂O. Without CO₂ absorption, gas volume would remain constant (PV=nRT), so measuring O₂ consumption requires CO₂ removal.',
      },
    },
    {
      id: 'callout-why-koh',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Absorb CO₂?',
        text: 'Respiration: glucose → CO₂ + H₂O. Both gases are produced. If both remained in the flask, PV=nRT would keep pressure constant (n gas molecules unchanged). By removing CO₂, we reduce n, causing pressure to drop. The manometer detects this pressure drop, indicating O₂ consumption.',
      },
    },
    {
      id: 'h-manometer',
      type: 'heading',
      data: { text: 'The Manometer and Measurement', level: 3 },
    },
    {
      id: 'p-manometer',
      type: 'paragraph',
      data: {
        text: 'A manometer is a U-shaped tube filled with coloured fluid (oil or water). One end is connected to the respiration chamber; the other is open to atmosphere or closed. As O₂ is consumed in the sealed chamber, pressure drops, and the coloured fluid in the open arm rises, whilst the closed arm falls. The vertical distance between the two arms represents the pressure change (Δ in kPa or mmHg). By measuring this at time intervals (e.g., every 5 min), O₂ consumption rate can be calculated.',
      },
    },
    {
      id: 'p-calculation',
      type: 'paragraph',
      data: {
        text: 'O₂ consumption rate = (change in fluid level) / (time interval) × (flask volume / manometer tube area). Units: cm³ O₂/min or mL O₂/h. A thermobarometer (identical apparatus without organism) serves as a control, accounting for atmospheric pressure changes.',
      },
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Practical Method', level: 3 },
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Set up respirometer with organism, KOH, and manometer.',
          'Place in water bath at constant temperature (e.g., 20°C).',
          'Allow 2–5 minutes for equilibration.',
          'Record initial manometer reading (zero point).',
          'Record manometer reading at intervals (e.g., 5, 10, 15, 20 min).',
          'Calculate O₂ consumption rate from the linear portion of the curve.',
          'Run a thermobarometer control in parallel.',
          'Correct experimental readings by subtracting control values.',
        ],
      },
    },
    {
      id: 'h-redox',
      type: 'heading',
      data: { text: 'Alternative: Redox Dye Method', level: 3 },
    },
    {
      id: 'p-redox',
      type: 'paragraph',
      data: {
        text: 'An alternative method uses redox dyes (e.g., methylene blue, DCPIP, resazurin) that change colour when oxidised or reduced. As cells respire, NADH accumulates (from glycolysis and the Krebs cycle). NADH reduces the dye to its colourless form. The rate of dye decolourisation indicates respiration rate. Advantage: simpler apparatus, no manometer needed. Disadvantage: less quantitative (measures colour change rather than absolute O₂ consumption).',
      },
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Sources of Error & Improvements', level: 3 },
    },
    {
      id: 'table-errors',
      type: 'comparisonTable',
      data: {
        headers: ['Error Source', 'Effect', 'Improvement'],
        rows: [
          [
            'Temperature fluctuation',
            'PV=nRT: changes affect pressure',
            'Use thermobarometer control; water bath',
          ],
          [
            'Atmospheric pressure changes',
            'Changes manometer reading',
            'Thermobarometer control',
          ],
          [
            'Organism movement',
            'Mechanical stirring; gas mixing',
            'Minimize handling; allow equilibration',
          ],
          [
            'KOH spillage/crystallisation',
            'CO₂ not fully absorbed',
            'Use NaHCO₃ buffer instead; check seals',
          ],
          [
            'Leaks in apparatus',
            'Air enters/escapes; false readings',
            'Check seals; use soapy water to detect',
          ],
          [
            'Non-linear measurements',
            'Organism dies/metabolism changes',
            'Use early linear portion only',
          ],
        ],
        caption: 'Sources of error in respirometry and improvements',
      },
    },
    {
      id: 'callout-thermobarometer',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'The Thermobarometer Control',
        text: 'A thermobarometer is an identical apparatus (same size, KOH, manometer) placed in the same water bath, but WITHOUT an organism. Any manometer change in the thermobarometer is due to temperature/pressure changes only. Subtracting thermobarometer readings from experimental readings gives the true O₂ consumption rate.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'A respirometer measures O₂ consumption by detecting pressure drops caused by O₂ depletion (CO₂ is absorbed). The manometer (U-tube with coloured fluid) shows the pressure drop, which is converted to O₂ consumption rate. A thermobarometer control accounts for temperature/pressure drift.',
        apply: 'Seeds in a respirometer show a manometer reading of 2.5 mm fluid displacement per minute. If the flask volume is 100 mL and manometer tube diameter is 5 mm, calculate O₂ consumption rate in mL/h.',
        analyze: 'Why is a thermobarometer control essential? What would happen to results if atmospheric pressure rose significantly during the experiment?',
        evaluate: 'Compare manometric respirometry (manual) with automated O₂ sensors (electronic). What are the advantages and disadvantages of each method?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the apparatus and principle of a respirometer', checked: false },
          { text: 'Explain the role of KOH in CO₂ absorption', checked: false },
          { text: 'Describe how manometer readings are converted to O₂ consumption rate', checked: false },
          { text: 'Explain the purpose of a thermobarometer control', checked: false },
          { text: 'List major sources of error and methods to reduce them', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Core Practical 15: Respirometer measures O₂ consumption using sealed container with organism, KOH (absorbs CO₂), and manometer (detects pressure drop). O₂ consumption rate = fluid displacement / time (corrected for flask volume). Thermobarometer control accounts for temperature/pressure drift. Common errors: temperature fluctuation, KOH crystallisation, leaks. Redox dye method is a qualitative alternative.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-apparatus',
        prompt: 'Describe the components of a respirometer and explain why KOH is used.',
      },
      {
        id: 'cue-2',
        blockId: 'p-manometer',
        prompt: 'How does a manometer detect O₂ consumption? Explain the principle.',
      },
      {
        id: 'cue-3',
        blockId: 'p-calculation',
        prompt: 'Write the formula for calculating O₂ consumption rate from manometer data.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-thermobarometer',
        prompt: 'What is a thermobarometer and why is it essential as a control?',
      },
      {
        id: 'cue-5',
        blockId: 'table-errors',
        prompt: 'Name three sources of error in respirometry and describe how to minimize each.',
      },
    ],
    summaryText:
      'Respirometer: sealed flask with organism, KOH, manometer. O₂ consumption → pressure drop → manometer displacement. O₂ rate = (displacement / time) × (flask volume / tube area). Thermobarometer control (no organism) accounts for temperature/pressure. Errors: temperature fluctuation, KOH crystallisation, leaks, atmospheric pressure changes. Alternative: redox dye decolourisation method.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Historical respirometry',
      detail: 'Warburg respirometer (1920s) was first precise instrument for measuring cell respiration',
      year: '1920s',
      source: 'History of biochemistry',
      tags: ['history'],
    },
  ],
};
