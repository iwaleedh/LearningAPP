/**
 * WBI15 — Topic 7.16: Core Practical 16 - Thermoregulation
 * Metabolic rate measurement, spirometer, O₂ sensor, ambient temperature
 */

export const note_biology_5_7_16 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand how to measure metabolic rate using spirometry or O₂ sensors, compare metabolic rates at different ambient temperatures, and interpret data on thermoregulatory energy expenditure.',
      },
    },
    {
      id: 'h-practical',
      type: 'heading',
      data: { text: 'Core Practical 16: Measuring Thermoregulation & Metabolic Rate', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'This practical measures metabolic rate (rate of energy expenditure) in a living organism (e.g., small mammal, insect) at different ambient temperatures. Metabolic rate increases at low temperatures (thermogenesis to maintain body temperature). By plotting metabolic rate vs temperature, the thermoneutral zone (where metabolic rate is minimal) and the temperature coefficients (Q10) can be determined.',
      },
    },
    {
      id: 'h-apparatus',
      type: 'heading',
      data: { text: 'Apparatus: Spirometer or O₂ Sensor', level: 3 },
    },
    {
      id: 'p-spirometer',
      type: 'paragraph',
      data: {
        text: 'A spirometer measures volume of gas exchanged. The traditional water-displacement spirometer consists of: (1) a sealed chamber; (2) a floating drum (bell) that moves as air volume changes; (3) a recording pen that marks volume change on a rotating drum (kymograph). Modern spirometers use electronic O₂ sensors (oxygen electrodes, Clark cells) that measure O₂ partial pressure directly.',
      },
    },
    {
      id: 'p-measurement',
      type: 'paragraph',
      data: {
        text: 'The organism is placed in a sealed chamber with CO₂ absorbent (KOH). As the organism respires, O₂ is consumed, reducing gas volume (or O₂ partial pressure). The spirometer detects this change. O₂ consumption rate is calculated from: V̇O₂ = (volume change or ΔO₂ partial pressure) / time. Units: mL O₂/min or μmol O₂/h.',
      },
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Experimental Method', level: 3 },
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Set up spirometer or O₂ sensor system with organism, CO₂ absorbent, and thermometer.',
          'Place the entire system in a temperature-controlled water bath or chamber (e.g., 10°C, 15°C, 20°C, 25°C, 30°C).',
          'Allow organism to acclimatise for 10–15 minutes at each temperature.',
          'Record baseline (zero) O₂ level or gas volume.',
          'Record O₂ consumption over a fixed time (e.g., 30 minutes).',
          'Calculate O₂ consumption rate (mL O₂/min).',
          'Convert to metabolic rate using: 1 mL O₂ ≈ 20 J energy (at RQ = 1.0); or use Q₁₀ equations.',
          'Repeat at each temperature.',
          'Plot metabolic rate vs ambient temperature.',
        ],
      },
    },
    {
      id: 'h-interpretation',
      type: 'heading',
      data: { text: 'Interpreting the Graph', level: 3 },
    },
    {
      id: 'p-interpretation',
      type: 'paragraph',
      data: {
        text: 'In endothermic organisms (mammals, birds), the graph typically shows a V-shaped curve: at very low temperatures, metabolic rate is high (thermogenesis, shivering, BAT activation); at thermoneutral zone (~20–25°C for mice), metabolic rate is minimal (basal metabolic rate, BMR); at high temperatures, metabolic rate increases again (cooling, sweating, heat loss costs).',
      },
    },
    {
      id: 'p-ectothermic',
      type: 'paragraph',
      data: {
        text: 'In ectothermic organisms (reptiles), metabolic rate increases monotonically with temperature (Q10 effect: metabolic rate ≈ doubles for every 10°C increase). The curve is exponential, not V-shaped.',
      },
    },
    {
      id: 'h-q10',
      type: 'heading',
      data: { text: 'Q10: Temperature Coefficient', level: 3 },
    },
    {
      id: 'p-q10',
      type: 'paragraph',
      data: {
        text: 'The temperature coefficient Q10 is the factor by which metabolic rate changes for every 10°C temperature increase. Q10 = (metabolic rate at T+10) / (metabolic rate at T). For ectotherms, Q10 ≈ 2–3 (metabolic rate roughly doubles). For endotherms in the thermoneutral zone, Q10 ≈ 1 (metabolic rate stable). Outside thermoneutral zone, Q10 varies as the organism increases thermogenesis or heat dissipation.',
      },
    },
    {
      id: 'h-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Q10 Calculation',
        text: 'A reptile at 20°C consumes O₂ at 1.0 mL/min. At 30°C, it consumes 2.2 mL/min. Q10 = (2.2 / 1.0)^(10/30−20) = 2.2^1 = 2.2. This Q10 ≈ 2 is typical for ectotherms.',
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
            'Metabolic rate varies; inconsistent data',
            'Use thermostat-controlled water bath; insulate chamber',
          ],
          [
            'Inadequate acclimatisation',
            'Organism not stabilised; peak not reached',
            'Wait 15–20 min before measuring at each temperature',
          ],
          [
            'Organism stress/movement',
            'Increased metabolic rate (stress response)',
            'Minimise handling; keep organism still; use quiet environment',
          ],
          [
            'CO₂ accumulation (if not absorbed)',
            'Respiratory drive increases; false high O₂ consumption',
            'Ensure fresh KOH; check absorbent is effective',
          ],
          [
            'System leaks',
            'Air enters, falsely low O₂ consumption',
            'Test seals; check for leaks with soapy water',
          ],
          [
            'Non-linear measurement period',
            'Organism settles during measurement; inconsistent data',
            'Use middle section of trace (linear portion) for calculation',
          ],
        ],
        caption: 'Sources of error in metabolic rate measurement and improvements',
      },
    },
    {
      id: 'h-basal',
      type: 'heading',
      data: { text: 'Basal Metabolic Rate (BMR)', level: 3 },
    },
    {
      id: 'p-basal',
      type: 'paragraph',
      data: {
        text: 'Basal metabolic rate (BMR) is the minimum metabolic rate measured under standardised conditions: resting, fasting, awake, at thermoneutral temperature (~20–25°C for humans). BMR reflects the energy cost of maintaining body functions (heart, respiration, protein synthesis, ion pumps). BMR scales with body mass (M) via Kleiber\'s law: BMR ∝ M^0.75.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Metabolic rate measured via O₂ consumption using spirometer or O₂ sensor. Endotherms show V-shaped curve: high at low T (thermogenesis), low at thermoneutral zone (BMR), high at high T (cooling). Ectotherms show exponential increase with Q10 ≈ 2–3. Q10 quantifies temperature sensitivity.',
        apply: 'A mouse at 5°C consumes O₂ at 3.5 mL/min. At 25°C (thermoneutral), it consumes 0.8 mL/min. Calculate the energy difference per hour (1 mL O₂ = 20 J). Why does this matter for survival in cold climates?',
        analyze: 'Why does metabolic rate increase at both very low and very high ambient temperatures? Which physiological processes drive these increases?',
        evaluate: 'Discuss the evolutionary implications of high BMR in endotherms vs ectotherms. What are the advantages and disadvantages?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe spirometer and O₂ sensor apparatus', checked: false },
          { text: 'Explain how O₂ consumption is measured and calculated', checked: false },
          { text: 'Describe the typical curve for endothermic vs ectothermic organisms', checked: false },
          { text: 'Define Q10 and calculate it from experimental data', checked: false },
          { text: 'List three major sources of error and describe improvements', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Core Practical 16: Metabolic rate measured via spirometer (volume change) or O₂ sensor (partial pressure). O₂ consumption rate = volume/time or ΔO₂/time. Endotherms: V-shaped curve (high at low T/high T, low at thermoneutral). Ectotherms: exponential curve (Q10 ≈ 2–3). Q10 = metabolic rate increase per 10°C. Errors: temperature fluctuation, inadequate acclimatisation, stress, CO₂ accumulation.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-spirometer',
        prompt: 'Describe a spirometer and how it measures O₂ consumption.',
      },
      {
        id: 'cue-2',
        blockId: 'list-method',
        prompt: 'Outline the experimental method for measuring metabolic rate at different temperatures.',
      },
      {
        id: 'cue-3',
        blockId: 'p-interpretation',
        prompt: 'Describe the typical curve for an endothermic organism. What does the V-shape represent?',
      },
      {
        id: 'cue-4',
        blockId: 'p-q10',
        prompt: 'Define Q10 and explain its significance for ectothermic vs endothermic organisms.',
      },
      {
        id: 'cue-5',
        blockId: 'table-errors',
        prompt: 'Name three sources of error and describe how to minimise each.',
      },
    ],
    summaryText:
      'Spirometer/O₂ sensor measures O₂ consumption (mL/min). O₂ rate → metabolic rate (1 mL O₂ ≈ 20 J). Plot vs temperature: endotherms show V-shape (high at low/high T, low at thermoneutral ~20–25°C, BMR); ectotherms show exponential (Q10 ≈ 2–3). Q10 = (rate at T+10) / (rate at T). Errors: temperature drift, inadequate acclimatisation, stress, CO₂ accumulation.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Kleiber\'s law',
      detail: 'BMR ∝ M^0.75; fundamental scaling law in biology',
      year: '1932',
      source: 'Comparative physiology',
      tags: ['scaling'],
    },
  ],
};
