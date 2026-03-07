/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 2
 * "Rate-data experimental methods"
 */

export const note_chemistry_4_11_2 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Understand the different practical methods used to monitor the rate of a chemical reaction, including continuous monitoring and sampling.'
      },
      terms: []
    },
    // ── MONITORING RATE ────────────────────────────────────────────────────
    {
      id: 'h-monitoring',
      type: 'heading',
      data: { text: 'How do we measure the rate of a reaction?', level: 2 },
      terms: []
    },
    {
      id: 'p-intro-rates',
      type: 'paragraph',
      data: {
        text: 'To calculate the rate, we must measure how the concentration of a reactant or product changes over time. We cannot "see" individual molecules reacting, so we must monitor a <strong>measurable physical or chemical property</strong> that changes as the reaction progresses.'
      },
      terms: []
    },
    // ── CONTINUOUS PHYSICAL METHODS ────────────────────────────────────────
    {
      id: 'h-continuous',
      type: 'heading',
      data: { text: 'Continuous Monitoring (Physical Methods)', level: 2 },
      terms: []
    },
    {
      id: 'p-continuous',
      type: 'paragraph',
      data: {
        text: 'Physical methods are usually the best choice because they are "continuous." You can set up a sensor (like a gas syringe or a colorimeter) to take readings automatically without interfering with the reaction mixture.'
      },
      terms: []
    },
    {
      id: 'table-methods',
      type: 'comparisonTable',
      data: {
        caption: 'Common Continuous Monitoring Methods',
        headers: ['Method', 'When to use it', 'Example Reaction'],
        rows: [
          ['<strong>Gas Volume</strong> (Gas Syringe)', 'When one of the products is a gas.', 'CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + <strong>CO₂(g)</strong>'],
          ['<strong>Mass Loss</strong> (Top-pan balance)', 'When a heavy gas (like CO₂) is produced and escapes the open flask.', 'Measuring the decreasing mass of the CaCO₃ + HCl reaction flask over time.'],
          ['<strong>Colorimetry</strong>', 'When one of the reactants or products is coloured. A colorimeter measures absorbance of light.', 'Reactions involving Iodine (<strong>I₂</strong> - brown) or Transition Metals (e.g., Manganate(VII) <strong>MnO₄⁻</strong> - deep purple).'],
          ['<strong>pH tracking</strong> (pH meter)', 'When H⁺ or OH⁻ ions are reacting or being produced, causing a massive change in pH.', 'Iodination of propanone produces H⁺ ions, making the solution increasingly acidic.']
        ]
      },
      terms: ['Colorimetry']
    },
    // ── CHEMICAL SAMPLING (TITRATION) ──────────────────────────────────────
    {
      id: 'h-sampling',
      type: 'heading',
      data: { text: 'Sampling and Quenching (Chemical Method)', level: 2 },
      terms: []
    },
    {
      id: 'p-sampling',
      type: 'paragraph',
      data: {
        text: 'If there is no physical property that changes cleanly, we must use a chemical method (usually a titration). Because titrations take several minutes to perform, we cannot titrate the mixture while it is still reacting! We must use the <strong>Quenching method</strong>.'
      },
      terms: ['Quenching']
    },
    {
      id: 'list-quenching',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'At regular intervals (e.g. every 5 minutes), extract a small, known volume (aliquot) of the reaction mixture using a pipette.',
          'Immediately <strong>QUENCH</strong> the sample to completely stop the reaction.',
          'Once quenched, the concentration of the sample is "frozen in time." You can now perform a titration at your own pace to determine the concentration of the reactant/product at that exact 5-minute mark.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-how-to-quench',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How do you "Quench" a reaction?',
        text: 'Quenching means stopping the reaction instantly. This is usually done by:<br/>1. Plunging the sample into a huge volume of <strong>ice-cold water</strong> (rapid cooling and dilution).<br/>2. Adding a chemical that rapidly reacts with one of the reactants, destroying it (e.g., adding sodium hydrogencarbonate to neutralise an acid catalyst).'
      },
      terms: []
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-methods',
        prompt: 'Name three physical methods for continuously monitoring the rate of a reaction.'
      },
      {
        id: 'cue-2',
        blockId: 'table-methods',
        prompt: 'What piece of equipment would you use to monitor the concentration of Iodine (I₂) in a reaction mixture over time without extracting samples?'
      },
      {
        id: 'cue-3',
        blockId: 'p-sampling',
        prompt: 'Define the term "Quenching" in the context of rate experiments.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-how-to-quench',
        prompt: 'Describe two methods by which a reaction sample can be quenched.'
      }
    ],
    summaryText: 'Continuous physical methods (gas volume, mass loss, colorimetry) are preferred as they don\'t disturb the reaction. If chemical titration is required, samples must be immediately "quenched" (by ice or neutralizing a catalyst) to instantly stop the reaction before titrating.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_2;
