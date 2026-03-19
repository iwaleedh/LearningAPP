/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 3
 * "Initial-rate and continuous monitoring"
 */

export const note_chemistry_4_11_3 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Understand the initial rates method (including clock reactions) and how to deduce the order of reaction using log-log graphs.'
      },
      terms: []
    },
    {
      id: 'h-initial',
      type: 'heading',
      data: { text: 'The "Initial Rates" Method', level: 2 },
      terms: []
    },
    {
      id: 'p-why-initial',
      type: 'paragraph',
      data: {
        text: 'As a reaction progresses, the concentration of the reactants constantly drops, which means the rate of reaction constantly slows down. To determine how the concentration of a specific reactant affects the rate, it is easiest to measure the rate at the <em>exact moment the reaction begins</em> (at t=0, when concentrations are exactly known). This is the <strong>Initial Rate</strong>.'
      },
      terms: ['Initial rate']
    },
    {
      id: 'list-initial-process',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Choose one reactant to investigate and keep the concentrations of all other reactants (and total volume) constant.',
          'Start the reaction and time how long it takes to produce a <strong>small, fixed, easily measurable amount of product</strong>.',
          'Calculate the initial rate using the assumption that Rate is inversely proportional to time (Rate ∝ 1/t).',
          'Repeat the experiment several times, changing only the concentration of the reactant you are investigating.',
          'Plot a graph of Rate (or 1/t) against Concentration.'
        ]
      },
      terms: []
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Classic Initial Rate Experiments', level: 2 },
      terms: []
    },
    {
      id: 'table-experiments',
      type: 'comparisonTable',
      data: {
        caption: 'Common Initial Rate Experiments in the Lab',
        headers: ['Experiment', 'Method', 'What you measure'],
        rows: [
          ['<strong>Thiosulfate-Acid Reaction</strong> (S₂O₃²⁻ + 2H⁺)', 'Produces a pale yellow precipitate of solid sulfur.', 'Place a flask over a piece of paper with a cross. Time how long it takes for the precipitate to completely hide the cross.'],
          ['<strong>Iodine Clock Reaction</strong>', 'Produces I₂. A tiny amount of sodium thiosulfate and starch indicator are added.', 'The thiosulfate destroys any I₂ initially. When the thiosulfate runs out, the starch instantly turns <strong>blue-black</strong>. You time how long this takes.'],
          ['<strong>Catalytic decomp. of H₂O₂</strong>', 'Produces O₂ gas. A weighing bottle containing the catalyst is placed upright inside the flask.', 'Shake the flask to knock over the bottle (avoids losing gas while pushing the bung in). Time how long it takes to collect exactly 5 cm³ of O₂ gas.']
        ]
      },
      terms: ['Clock reaction']
    },
    {
      id: 'h-log-graphs',
      type: 'heading',
      data: { text: 'Finding Order using Log Graphs', level: 2 },
      terms: []
    },
    {
      id: 'p-log-intro',
      type: 'paragraph',
      data: {
        text: 'Plotting a Rate vs Concentration graph works well if the reaction is Order 0 (horizontal line) or Order 1 (straight diagonal line). However, if the graph is a curve, it could be Order 2, or some fractional order. To find the exact mathematical order reliably, we plot a <strong>Log-Log Graph</strong>.'
      },
      terms: []
    },
    {
      id: 'callout-log-math',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Deriving the Log Equation',
        text: 'Starting with the specific rate equation for reactant A:<br><br><strong>Rate = k[A]ⁿ</strong><br><br>Taking the logarithm of both sides gives a linear equation (y = mx + c):<br><br><strong>log(Rate) = log(k) + n × log[A]</strong><br><br>If you plot <strong>log(Rate)</strong> on the y-axis against <strong>log[A]</strong> on the x-axis, you will get a straight line. The <strong>gradient (slope)</strong> of this line is exactly equal to the order of reaction, <strong>n</strong>.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-why-initial', prompt: 'Why is it advantageous to measure the "initial rate" of a reaction rather than an average rate?' },
      { id: 'c2', blockId: 'list-initial-process', prompt: 'When conducting an initial rates experiment by timing a fixed event, what simple mathematical formula is used as a substitute for initial rate?' },
      { id: 'c3', blockId: 'table-experiments', prompt: 'In the thiosulfate-acid reaction, how is the specific endpoint of the initial rate visually determined?' },
      { id: 'c4', blockId: 'table-experiments', prompt: 'Why is a small weighing bottle used to introduce the catalyst in the initial rate experiment for the decomposition of H₂O₂?' },
      { id: 'c5', blockId: 'callout-log-math', prompt: 'Write the logarithmic form of the rate equation. If you plot log(Rate) against log[Concentration], what does the gradient of the graph represent?' }
    ],
    summaryText: 'The Initial Rates method involves measuring the time (t) taken for a small fixed amount of product to form (Rate ∝ 1/t) at the very start of a reaction. Examples include the Thiosulfate cross-disappearing reaction, the Iodine clock, and H₂O₂ decomposition using a weighing bottle. To reliably determine the exact order without guessing curve shapes, we use log graphs: plotting log(Rate) against log[Concentration] yields a straight line where the gradient equals the order of reaction (n).',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_3;
