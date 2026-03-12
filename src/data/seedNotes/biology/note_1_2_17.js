export const note_biology_1_2_17 = {
  blocks: [
    {
      id: 'obj-cp3',
      type: 'objective',
      data: {
        text: 'Describe Core Practical 3: using beetroot to investigate the effect of a named variable on membrane permeability. Explain the method, controls, and how to measure permeability. Analyse results using a colorimeter.',
      },
    },
    {
      id: 'h-principle',
      type: 'heading',
      data: { text: 'Principle — Beetroot and Membrane Permeability', level: 2 },
    },
    {
      id: 'p-principle',
      type: 'paragraph',
      data: {
        text: 'Beetroot cells contain a red/purple pigment called betalain (betacyanin) stored in the vacuole, surrounded by the tonoplast (vacuolar membrane) and the plasma membrane. In healthy intact membranes, betalain cannot escape the cell. When membranes are damaged (by heat, organic solvents, or detergents), the phospholipid bilayer breaks down → membranes become more permeable → betalain leaks into the surrounding solution → the solution turns red/pink. The darker the colour, the more permeable the membrane has become.',
      },
    },
    {
      id: 'callout-key-membranes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Does Temperature Affect Membrane Permeability?',
        text: '• Low temp (<0°C): ice crystals form, puncturing membranes → leakage\n• 0–40°C: phospholipid molecules have increasing kinetic energy → bilayer more fluid. Intrinsic proteins begin to denature above ~40°C\n• Above ~45°C: proteins (carriers, channels) rapidly denature → membrane structure disrupted → large-scale leakage\n• Very high temps (>60°C): complete membrane disruption\nIncrease in temperature → increased permeability → more betalain released → deeper red colour → higher colorimeter absorbance',
      },
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method', level: 2 },
    },
    {
      id: 'table-cp3-method',
      type: 'comparisonTable',
      data: {
        caption: 'Core Practical 3 method (temperature investigation)',
        headers: ['Step', 'Action', 'Why'],
        rows: [
          ['1', 'Cut several 1 cm × 1 cm × 1 cm cubes of beetroot from the same beetroot (standardise size)', 'Same SA:V ratio ensures diffusion distance is constant across all cubes'],
          ['2', 'Rinse beetroot cubes in distilled water for 10 min; replace water until it runs clear', 'Removes betalain from cut surfaces (damaged cells during cutting) which would contaminate results'],
          ['3', 'Set up water baths at a range of temperatures (e.g. 10, 20, 30, 40, 50, 60, 70°C). Wait for temperature to stabilise', 'Controls temperature precisely'],
          ['4', 'Place one beetroot cube in a test tube containing 5 cm³ distilled water. Immerse tube in water bath', 'Distilled water used (not buffer) to allow betalain to diffuse freely'],
          ['5', 'Leave for 30 min at each temperature, then remove beetroot cube', 'Allows time for betalain to diffuse into solution'],
          ['6', 'Transfer solution to cuvette; measure absorbance at 530 nm (green filter) using colorimeter', '530 nm absorbed by red/pink solutions; higher absorbance = more betalain leaked = more permeable'],
          ['7', 'Repeat each temperature 3 times; calculate mean absorbance', 'Repeat for reliability; calculate mean to reduce effect of anomalies'],
        ],
      },
    },
    {
      id: 'h-variables',
      type: 'heading',
      data: { text: 'Variables', level: 2 },
    },
    {
      id: 'table-variables',
      type: 'comparisonTable',
      data: {
        caption: 'Variables in Core Practical 3',
        headers: ['Variable type', 'Variable', 'How controlled'],
        rows: [
          ['Independent (IV)', 'Temperature (°C)', 'Use calibrated water baths at different set temperatures'],
          ['Dependent (DV)', 'Absorbance of solution at 530 nm', 'Measured with colorimeter; use same green filter each time'],
          ['Control: cube size', 'Length × width × height of beetroot', 'Cut all cubes to the same dimensions (1 cm × 1 cm × 1 cm) using a ruler'],
          ['Control: beetroot source', 'Same beetroot for all cubes', 'All cubes from same beetroot to minimise variation in betalain concentration'],
          ['Control: volume of water', '5 cm³ distilled water per cube', 'Measured with a pipette or syringe for each test tube'],
          ['Control: time in water bath', '30 min for each cube', 'Use timer; start timing when tube reaches target temperature'],
          ['Control: wavelength of light', '530 nm (green filter)', 'Set colorimeter to same wavelength each time'],
        ],
      },
    },
    {
      id: 'h-expected-results',
      type: 'heading',
      data: { text: 'Expected Results and Analysis', level: 2 },
    },
    {
      id: 'p-expected-results',
      type: 'paragraph',
      data: {
        text: 'Expected pattern: as temperature increases from ~10°C to 40°C, absorbance increases slowly (greater membrane fluidity). A sharp increase in absorbance occurs above ~40°C as membrane proteins begin to denature. Above 60°C, maximum leakage — membranes are fully disrupted and absorbance is high and relatively constant. A graph of temperature vs. absorbance shows a sigmoidal/exponential increase with a steep region around 40–60°C.',
      },
    },
    {
      id: 'h-risk',
      type: 'heading',
      data: { text: 'Risk Assessment', level: 2 },
    },
    {
      id: 'table-cp3-risk',
      type: 'comparisonTable',
      data: {
        caption: 'Hazards in Core Practical 3',
        headers: ['Hazard', 'Risk', 'Control measure'],
        rows: [
          ['Hot water baths (50–80°C)', 'Scalds', 'Use tongs; warn before reaching into water bath; maintain awareness of temperature'],
          ['Scalpel/cutting tools', 'Cut injuries', 'Cut away from body; use cutting board; store scalpels safely'],
          ['Beetroot dye', 'Stains clothing and surfaces', 'Wear lab coat and gloves; wipe spills immediately'],
        ],
      },
    },
    {
      id: 'callout-tip-cp3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips — CP3',
        text: '• "Explain why the cubes must be washed before the experiment" — Answer: to remove betalain from cells cut on the surface during preparation; if not washed, the initial solution would already be red, making it impossible to detect changes due to temperature.\n• "Why use a colorimeter rather than comparing colours by eye?" — Answer: colorimeter gives objective numerical data; human eye cannot reliably distinguish similar shades of red; allows quantitative comparison.\n• "Why must all cubes be the same size?" — Answer: same surface area to volume ratio → same diffusion pathway length → same rate of diffusion under standard conditions.',
      },
    },
    {
      id: 'checklist-cp3',
      type: 'checklist',
      data: {
        items: [
          { text: 'Explain why betalain leaks out when membranes are damaged', checked: false },
          { text: 'Describe the full method for the beetroot temperature investigation', checked: false },
          { text: 'Explain why the beetroot cubes must be rinsed before the experiment', checked: false },
          { text: 'State the independent, dependent, and three controlled variables', checked: false },
          { text: 'Explain how a colorimeter is used at 530 nm to measure membrane permeability', checked: false },
          { text: 'Sketch the expected graph of temperature vs. absorbance and explain its shape', checked: false },
        ],
      },
    },
    {
      id: 'summary-cp3',
      type: 'summary',
      data: {
        text: 'CP3: beetroot contains betalain in vacuole. Intact membranes → pigment stays in cell. Damage (heat, solvents) → membranes become more permeable → betalain leaks → solution turns red. Method: same-size cubes, rinse first, incubate in distilled water at different temps for 30 min, measure absorbance at 530 nm (green filter, colorimeter). Expected: absorbance increases sharply above 40°C as proteins denature. Controls: cube size, volume of water, time, wavelength. Must rinse to remove betalain from cut surfaces. Colorimeter gives objective numerical data vs. eye.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-principle', prompt: 'Explain why betalain stays inside healthy beetroot cells but leaks out when heated. Name the TWO membranes it must cross.' },
      { id: 'cue-2', blockId: 'table-cp3-method', prompt: 'Describe steps 2–3 of the beetroot experiment. Why is rinsing the cubes essential before starting the experiment?' },
      { id: 'cue-3', blockId: 'table-variables', prompt: 'State the independent and dependent variables in this experiment. Name two controlled variables and explain how each is controlled.' },
      { id: 'cue-4', blockId: 'p-expected-results', prompt: 'Sketch (or describe) the expected graph of temperature vs. absorbance. Explain the shape above 40°C.' },
    ],
    summaryText: 'Beetroot CP: betalain in vacuole — crosses tonoplast + plasma membrane when damaged. Rinse first (remove surface betalain). 10–70°C range; 5 cm³ water; 30 min; colorimeter 530 nm. Absorbance rises sharply above 40°C (protein denaturation). Control: cube size, time, volume, wavelength. Colorimeter = objective data; eye is subjective.',
    ready: false,
  },
  evidence: [],
};
