/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 8
 * "Core Practicals 9a, 9b and 10"
 */

export const note_chemistry_4_11_8 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Detail the methods for Core Practicals 9a (Iodine-Propanone titration), 9b (Iodine Clock), and 10 (Finding Activation Energy).'
      },
      terms: []
    },
    // ── CORE PRACTICAL 9A: CONTINUOUS MONITORING ───────────────────────────
    {
      id: 'h-cp9a',
      type: 'heading',
      data: { text: 'Core Practical 9a: Iodine-Propanone Reaction', level: 2 },
      terms: []
    },
    {
      id: 'p-cp9a',
      type: 'paragraph',
      data: {
        text: '<strong>Reaction:</strong> CH₃COCH₃(aq) + I₂(aq) → CH₃COCH₂I(aq) + H⁺(aq) + I⁻(aq)<br/><br/>This is a classic example of <strong>continuous monitoring by titration (sampling and quenching)</strong>. A large batch of the reaction mixture is created. Because iodine is coloured (brown/yellow) and all other reactants are colourless, we monitor the falling concentration of I₂ over time.'
      },
      terms: []
    },
    {
      id: 'list-cp9a',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Mix propanone, iodine, and an acid catalyst (e.g. sulfuric acid) in a large beaker. Start a stopwatch.',
          'Every 5 minutes, use a pipette to extract a 10.0 cm³ sample (aliquot) of the reacting mixture.',
          'Immediately empty the pipetted sample into a flask containing a large excess of <strong>sodium hydrogencarbonate (NaHCO₃)</strong>. This instantly neutralises the acid catalyst, "quenching" (stopping) the reaction.',
          'Titrate the quenched sample against standard sodium thiosulfate (Na₂S₂O₃) solution to find the exact concentration of unreacted I₂ remaining at that specific 5-minute mark.',
          'Add starch indicator near the end-point. The end-point is a sharp colour change from blue-black to colourless.',
          'Plot a graph of [I₂] against time. The straight descending line proves the reaction is <strong>zero order</strong> with respect to iodine!'
        ]
      },
      terms: ['Quenching', 'Sodium hydrogencarbonate']
    },
    // ── CORE PRACTICAL 9B: IODINE CLOCK ────────────────────────────────────
    {
      id: 'h-cp9b',
      type: 'heading',
      data: { text: 'Core Practical 9b: The Iodine Clock', level: 2 },
      terms: []
    },
    {
      id: 'p-cp9b',
      type: 'paragraph',
      data: {
        text: '<strong>Main Reaction:</strong> H₂O₂(aq) + 2I⁻(aq) + 2H⁺(aq) → I₂(aq) + 2H₂O(l)<br/><br/>This is an <strong>initial rates</strong> experiment. We want to find the order of reaction with respect to iodide ions [I⁻]. We do this performing the experiment several times, changing the starting concentration of I⁻ each time.'
      },
      terms: []
    },
    {
      id: 'list-cp9b',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'In five separate beakers, prepare mixtures containing different, known volumes of KI(aq). Make up the total volumes with distilled water so the total volume is always constant.',
          'Add a small, strictly constant amount of sodium thiosulfate (Na₂S₂O₃) and starch indicator to each beaker.',
          'Add the H₂O₂ to start the reaction and hit the stopwatch.',
          'The main reaction slowly produces I₂. However, the thiosulfate instantly destroys the I₂ as soon as it forms.',
          'Once the limited thiosulfate runs out, the I₂ survives. It reacts with the starch, turning the solution <strong>black-blue instantly</strong>.',
          'Record the time (t) taken for the colour change. Assume Initial Rate = 1/t. Plot (1/t) against the concentration of [I⁻] to find the order.'
        ]
      },
      terms: []
    },
    // ── CORE PRACTICAL 10: ACTIVATION ENERGY ───────────────────────────────
    {
      id: 'h-cp10',
      type: 'heading',
      data: { text: 'Core Practical 10: Finding Eₐ', level: 2 },
      terms: []
    },
    {
      id: 'p-cp10',
      type: 'paragraph',
      data: {
        text: '<strong>Reaction:</strong> Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + SO₂(g) + <strong>S(s)</strong><br/><br/>This is the famous "disappearing cross" experiment. We react sodium thiosulfate with hydrochloric acid. A precipitate of solid yellow sulfur, <strong>S(s)</strong>, is formed. This slowly turns the solution cloudy.'
      },
      terms: []
    },
    {
      id: 'list-cp10',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Place a flask on a piece of paper with a black cross drawn on it.',
          'Perform the experiment at 5 different temperatures using a water bath (e.g., 20°C, 30°C, 40°C, 50°C, 60°C). Keep all concentrations identical.',
          'Time how long it takes for the sulfur precipitate to completely obscure the cross from view when looking down through the flask.',
          'Calculate the initial rate for each temperature (Rate = 1/t).',
          'Convert the temperatures to Kelvin (T). Calculate 1/T.',
          'Calculate the natural log of the rate: ln(1/t) or ln(k).',
          'Plot an Arrhenius graph: ln(1/t) on the y-axis against 1/T on the x-axis.',
          'Calculate the Activation Energy (Eₐ) from the negative gradient using the equation: <strong>Gradient = -Eₐ / R</strong>.'
        ]
      },
      terms: ['Arrhenius graph']
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-cp9a',
        prompt: 'In Core Practical 9a (Iodine-propanone), what specific chemical is added to the extracted samples to "quench" the reaction, and how does it work?'
      },
      {
        id: 'cue-2',
        blockId: 'list-cp9a',
        prompt: 'In Core Practical 9a, what is the colour change at the end-point when titrating the surviving Iodine against Sodium Thiosulfate with a starch indicator?'
      },
      {
        id: 'cue-3',
        blockId: 'list-cp9b',
        prompt: 'In Core Practical 9b (Iodine clock), why is distilled water added to the beakers when changing the concentration of the KI(aq) reactant?'
      },
      {
        id: 'cue-4',
        blockId: 'list-cp10',
        prompt: 'In Core Practical 10 (Activation Energy / Disappearing cross), what specific chemical product causes the solution to turn cloudy?'
      },
      {
        id: 'cue-5',
        blockId: 'list-cp10',
        prompt: 'In Core Practical 10, what exactly is plotted on the x and y axes of the final graph to determine the Activation Energy?'
      }
    ],
    summaryText: 'CP9a (continuous): Sample iodine over time, quench with NaHCO₃ (neutralises acid cat.), titrate with thiosulfate. CP9b (initial): Iodine clock, use small amount of thiosulfate to trigger black/blue starch colour change after a set amount of I₂ is made. CP10 (Eₐ): "Disappearing cross" (solid sulfur precipitate). Plot ln(1/t) vs 1/T to find Eₐ from gradient.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_8;
