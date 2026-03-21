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
        text: 'Understand the different practical methods used to monitor a chemical reaction continuously or via sampling to find the rate.'
      },
      terms: []
    },
    {
      id: 'h-following-reaction',
      type: 'heading',
      data: { text: 'Following the Course of a Single Reaction', level: 2 },
      terms: []
    },
    {
      id: 'list-two-approaches',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Rather than doing multiple initial rate experiments, you can follow a single reaction from start to finish.',
          '<strong>Method 1: Continuous Monitoring</strong> measuring a physical property that changes (e.g., gas volume, colour intensity).',
          '<strong>Method 2: Sampling and Quenching</strong> taking physical samples at regular intervals and performing titrations.'
        ]
      },
      terms: []
    },
    {
      id: 'h-sampling',
      type: 'heading',
      data: { text: 'Sampling, Quenching, and Titration (Chemical Method)', level: 2 },
      terms: []
    },
    {
      id: 'p-sampling-intro',
      type: 'paragraph',
      data: {
        text: 'For reactions like the nucleophilic substitution between bromoethane and sodium hydroxide, both reactants are used up over time. We can measure the remaining NaOH concentration using a titration with standard hydrochloric acid.'
      },
      terms: []
    },
    {
      id: 'list-sampling-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Start the reaction with known concentrations of both reactants.',
          'Use a pipette to take a small sample (aliquot) of the mixture at regular recorded time intervals.',
          '<strong>Quench the sample:</strong> Stop the reaction instantly so the concentrations do not change while you are doing the titration.',
          'Perform the titration to determine the exact concentration of the reactant at that specific time.'
        ]
      },
      terms: ['Quenching']
    },
    {
      id: 'callout-quenching',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How to Quench a Reaction',
        text: 'Reactions can be stopped (quenched) by:<br>• Plunging the sample into a large volume of <strong>ice-cold water</strong> (rapid dilution and cooling).<br>• Removing a catalyst (e.g. adding a weak alkali to neutralise an acid catalyst).<br>• <strong>Back Titration method:</strong> Adding the sample to an <em>excess</em> of standard acid to instantly use up all the NaOH, stopping the reaction. Then you titrate the remaining acid with standard NaOH to find out how much acid was used up.'
      },
      terms: []
    },

    {
      id: 'svg-quenching',
      type: 'svg',
      data: {
        caption: 'Quenching: Stopping a reaction quickly so a sample can be titrated.',
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ice" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e0f2fe"/><stop offset="100%" stop-color="#7dd3fc"/></linearGradient></defs><rect width="400" height="200" fill="transparent" rx="10"/><g transform="translate(100, 40)"><path d="M -30 0 L -30 100 C -30 130, 30 130, 30 100 L 30 0" fill="none" stroke="#64748b" stroke-width="3"/><path d="M -25 50 L -25 100 C -25 120, 25 120, 25 100 L 25 50 Z" fill="#fca5a5" opacity="0.6"/><text x="0" y="145" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle">Reaction Sample</text></g><g transform="translate(250, 40)"><path d="M -40 30 L -40 120 C -40 140, 40 140, 40 120 L 40 30 Z" fill="url(#ice)" stroke="#38bdf8" stroke-width="2"/><path d="M -25 0 L -25 100 C -25 120, 25 120, 25 100 L 25 0" fill="none" stroke="#64748b" stroke-width="3"/><path d="M -20 50 L -20 100 C -20 115, 20 115, 20 100 L 20 50 Z" fill="#fca5a5" opacity="0.6"/><path d="M-30 40 L-15 50 L-25 60 Z" fill="#fff" opacity="0.8"/><path d="M20 50 L35 45 L30 65 Z" fill="#fff" opacity="0.8"/><path d="M -10 100 L 0 110 L 10 95" fill="#fff" opacity="0.8"/><text x="0" y="155" font-family="sans-serif" font-size="14" fill="#0369a1" text-anchor="middle">Ice Bath (Quenching)</text></g><line x1="160" y1="90" x2="190" y2="90" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/><polygon points="190,85 200,90 190,95" fill="#94a3b8"/><text x="175" y="75" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Rapid cool</text></svg>'
      },
      terms: []
    },
    {
      id: 'h-continuous',
      type: 'heading',
      data: { text: 'Continuous Monitoring (Physical Methods)', level: 2 },
      terms: []
    },
    {
      id: 'p-continuous-intro',
      type: 'paragraph',
      data: {
        text: 'Physical methods are usually preferred as they do not require extracting samples and can be fully automated. However, raw physical data (like volume) must still be converted into concentrations before calculating the order.'
      },
      terms: []
    },
    {
      id: 'table-methods',
      type: 'comparisonTable',
      data: {
        caption: 'Common Continuous Monitoring Techniques',
        headers: ['Method', 'Application', 'Required Processing'],
        rows: [
          ['<strong>Gas Volume</strong> (Gas Syringe)', 'Reactions producing a gas (e.g. Catalytic decomposition of H₂O₂ to O₂).', 'Convert volume to moles of gas using the ideal gas equation (pV=nRT), then subtract from initial moles to find remaining concentration.'],
          ['<strong>Mass Loss</strong> (Top-pan balance)', 'Reactions producing a dense gas (like CO₂) that escapes.', 'Calculate mass of gas lost, convert to moles, deduce remaining concentration.'],
          ['<strong>Colorimetry</strong>', 'Reactions involving distinct colours (e.g. Iodine/Propanone fading from brown to colourless).', 'Requires a <strong>calibration curve</strong> to convert measured absorbance values directly into concentrations.']
        ]
      },
      terms: ['Colorimeter', 'Calibration curve']
    },
    {
      id: 'callout-colorimetry',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Using a Colorimeter',
        text: 'A colorimeter measures the absorbance of light. A specific coloured filter is chosen (e.g. absorbing red light for blue copper(II) sulfate). To use the readings:<br>1. Make up standard solutions of known concentration.<br>2. Measure their absorbance and plot a <strong>calibration curve</strong> (Absorbance vs Concentration).<br>3. During the rate experiment, read the absorbance at regular intervals and use the curve to convert it to concentration.'
      },
      terms: []
    },
    {
      id: 'h-processing',
      type: 'heading',
      data: { text: 'Deriving the Order from Continuous Data', level: 2 },
      terms: []
    },
    {
      id: 'list-processing',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Plot the calculated Concentration against Time on a graph.',
          'Draw tangents at several different concentration points along the curve.',
          'Calculate the slope of each tangent. The slope equals the <strong>Rate of Reaction</strong> at that specific concentration.',
          'Plot a second graph of Rate vs Concentration. If it is a straight line through the origin, it is 1st order. If it is a curve/parabola, it is 2nd order.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Quenching Timing Error",
        text: "When taking samples, record the time when HALF the aliquot (5 cm\u00b3 of 10 cm\u00b3) has been transferred into the quenching agent. Students often record the wrong time point, leading to systematic errors in calculated rates."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Purpose of Quenching",
        text: "Quenching immediately stops the reaction so the concentration does NOT change during titration. Methods: ice bath (dilute + cool), excess standard acid, or remove catalyst. This is essential for accurate rate measurement."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'list-two-approaches', prompt: 'State the difference between continuous monitoring and chemical sampling.' },
      { id: 'c2', blockId: 'list-sampling-steps', prompt: 'In a rate experiment using sampling, what is the purpose of "quenching"?' },
      { id: 'c3', blockId: 'callout-quenching', prompt: 'Describe two methods used to quench a chemical reaction during sampling.' },
      { id: 'c4', blockId: 'table-methods', prompt: 'If monitoring the fading color of iodine reacting with propanone, what equipment is used, and how are the readings converted to concentration?' },
      { id: 'c5', blockId: 'list-processing', prompt: 'Once a Concentration-Time graph is plotted from a continuous monitoring experiment, how do you find the reaction rate at a specific concentration?' }
    ],
    summaryText: 'You can follow a reaction via continuous physical monitoring (using gas syringes, balances, or colorimeters) or via chemical sampling (extracting aliquots, quenching them to stop the reaction, and titrating). Quenching is done via ice-cold water, neutralising catalysts, or adding excess reactants. For colorimeters, a calibration curve converts absorbance back to concentration. Finally, plotting Concentration vs Time and taking tangents gives the rates at different concentrations.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_2;
