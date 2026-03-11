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
