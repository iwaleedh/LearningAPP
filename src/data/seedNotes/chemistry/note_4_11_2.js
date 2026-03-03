export const note_chemistry_4_11_2 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Learn experimental methods for measuring reaction rates: clock reactions, colorimetry, gas syringe, conductivity, and quenching.' },
      terms: ['rate measurement', 'clock reaction', 'colorimetry', 'quenching'],
    },
    {
      id: 'h-methods-intro',
      type: 'heading',
      data: { text: 'Experimental Methods for Rate Determination', level: 2 },
      terms: [],
    },
    {
      id: 'p-methods-intro',
      type: 'paragraph',
      data: { text: 'Reaction rates are determined experimentally by monitoring how a physical or chemical property changes over time. Different methods are suited to different reactions. This subtopic covers five main techniques: clock reactions, colorimetry, gas syringe, conductivity, and quenching. Each has advantages and limitations depending on the reaction type.' },
      terms: ['rate measurement'],
    },
    {
      id: 'h-clock',
      type: 'heading',
      data: { text: 'Clock Reactions (Iodine Clock)', level: 2 },
      terms: [],
    },
    {
      id: 'p-clock',
      type: 'paragraph',
      data: { text: 'A clock reaction reaches a sudden, visible endpoint after a measurable time. The most common is the iodine clock, where iodine is produced and then immediately reduced by a reducing agent (e.g., thiosulfate S₂O₃²⁻). When all the reducing agent is consumed, iodine turns a blue-black colour with starch (added as an indicator). The time from start to colour change is measured.' },
      terms: ['clock reaction', 'iodine clock'],
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Iodine Clock Example',
        text: 'Reaction: S₂O₃²⁻ + 2H⁺ + I₂ → S₄O₆²⁻ + 2I⁻ (reducing I₂). A known amount of S₂O₃²⁻ is added. When it is consumed, the next I₂ produced reacts with starch to give blue-black colour. Time measured = time to produce a fixed amount of I₂, proportional to how fast I₂ is generated in the main reaction.',
      },
      terms: [],
    },
    {
      id: 'h-colorimetry',
      type: 'heading',
      data: { text: 'Colorimetry', level: 2 },
      terms: [],
    },
    {
      id: 'p-colorimetry',
      type: 'paragraph',
      data: { text: 'Colorimetry measures the absorbance (or intensity) of light passing through a coloured solution. Using Beer–Lambert law, absorbance is proportional to concentration of the coloured species. A colorimeter continuously records absorbance vs time, giving a concentration vs time graph. Advantages: precise, continuous data; disadvantages: only for reactions involving coloured species (e.g., KMnO₄, Br₂, dyes).' },
      terms: ['colorimetry'],
    },
    {
      id: 'callout-key-colorimetry',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Beer–Lambert Law',
        text: 'A = εlc, where A = absorbance, ε = molar absorptivity, l = path length (constant), c = concentration. Since A ∝ c, measuring absorbance directly gives concentration changes.',
      },
      terms: [],
    },
    {
      id: 'h-gas-syringe',
      type: 'heading',
      data: { text: 'Gas Syringe Method', level: 2 },
      terms: [],
    },
    {
      id: 'p-gas-syringe',
      type: 'paragraph',
      data: { text: 'For reactions producing a gas, a gas syringe directly measures the volume of gas produced against time. The reaction mixture is in a flask, gas is collected in the syringe. As reaction proceeds, gas volume increases. Plotting volume vs time gives a curve from which the rate can be calculated (rate ∝ Δvolume/Δtime). Advantages: simple, direct; disadvantages: inaccurate at high pressures, difficult to maintain constant temperature.' },
      terms: ['gas syringe'],
    },
    {
      id: 'h-conductivity',
      type: 'heading',
      data: { text: 'Conductivity Method', level: 2 },
      terms: [],
    },
    {
      id: 'p-conductivity',
      type: 'paragraph',
      data: { text: 'Conductivity measures the ability of a solution to conduct electricity, which depends on the concentration and types of ions present. If a reaction changes ion concentrations (e.g., acid-base reactions, precipitation), conductivity changes. A conductivity probe continuously records conductivity vs time. Since conductivity is proportional to ion concentration, this gives reaction progress data. Advantages: works for reactions without colour; disadvantages: temperature sensitive.' },
      terms: ['conductivity'],
    },
    {
      id: 'h-quenching',
      type: 'heading',
      data: { text: 'Quenching Method', level: 2 },
      terms: [],
    },
    {
      id: 'p-quenching',
      type: 'paragraph',
      data: { text: 'In quenching, the reaction is rapidly stopped (quenched) at specific time intervals by removing heat, adding a reagent that consumes reactants, or diluting drastically. At each time point, the reaction mixture is analysed (e.g., titrated, weighed, or chromatographed) to determine concentrations. Multiple identical reaction vessels are quenched at different times, and a concentration vs time graph is constructed. Advantages: works for any reaction; disadvantages: labour-intensive, requires care to truly stop the reaction.' },
      terms: ['quenching'],
    },
    {
      id: 'table-methods',
      type: 'comparisonTable',
      data: {
        headers: ['Method', 'Suitable for...', 'Measured property', 'Advantages', 'Limitations'],
        rows: [
          ['Clock', 'Reactions producing a timed colour change', 'Time to endpoint', 'Simple, visual, fast', 'Only one data point per run; less precise'],
          ['Colorimetry', 'Reactions involving coloured species', 'Absorbance (∝ [A])', 'Continuous data, precise, digital', 'Need coloured reactant/product'],
          ['Gas syringe', 'Reactions producing gas', 'Gas volume', 'Direct, simple apparatus', 'Pressure effects, temperature control difficult'],
          ['Conductivity', 'Reactions changing ion concentration', 'Conductivity (∝ [A])', 'Non-invasive, continuous', 'Temperature sensitive, requires calibration'],
          ['Quenching', 'Any reaction', 'Concentration (via titration, etc.)', 'Universal, accurate analysis', 'Time-consuming, multiple vessels needed'],
        ],
        caption: 'Comparison of rate measurement methods',
      },
      terms: [],
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Choosing a Method',
        text: 'Clock reactions are fastest for quick estimates. Colorimetry gives continuous, precise data. Gas syringe is simple but less accurate. Conductivity avoids colour requirement. Quenching is versatile but labour-intensive. Choose based on reaction type and required precision.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe how clock reactions work and give an example', checked: false },
          { text: 'I can explain colorimetry and Beer–Lambert law', checked: false },
          { text: 'I can describe gas syringe and conductivity methods', checked: false },
          { text: 'I can explain quenching and why multiple vessels are needed', checked: false },
          { text: 'I can choose an appropriate method for different reaction types', checked: false },
        ],
      },
      terms: [],
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Different methods suit different reactions — colorimetry for colour changes, gas syringe for gas production, conductivity for ionic concentration changes.\n\nApply: Design an experiment to measure the rate of Mg + HCl using gas collection. State the measurements needed.\n\nAnalyze: Compare continuous monitoring vs clock reactions. Which gives more data points and why?\n\nEvaluate: A clock reaction measures the time for a fixed amount of product. Does this give a true initial rate? Justify.'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Five main rate measurement methods: clock reactions (iodine clock — visible endpoint), colorimetry (absorbance ∝ [A]), gas syringe (volume of gas produced), conductivity (ion concentration changes), quenching (stop reaction, analyse later). Each suited to different reaction types.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-clock', prompt: 'Explain how an iodine clock reaction works and what colour change signals the endpoint.' },
      { id: 'cue-2', blockId: 'callout-key-colorimetry', prompt: 'State Beer–Lambert law and explain why colorimetry gives concentration data.' },
      { id: 'cue-3', blockId: 'p-gas-syringe', prompt: 'Describe the gas syringe method and name one advantage and one limitation.' },
      { id: 'cue-4', blockId: 'p-conductivity', prompt: 'Why does conductivity change in a reaction, and when is this method most useful?' },
      { id: 'cue-5', blockId: 'p-quenching', prompt: 'Explain the quenching method and why multiple identical vessels are needed.' },
    ],
    summaryText: 'Clock reactions: timed colour change (iodine clock). Colorimetry: A = εlc, absorbance ∝ [A]. Gas syringe: measures gas volume. Conductivity: measures ion concentration changes. Quenching: stop reaction at intervals, analyse concentration.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Experimental Methods in Kinetics — Royal Society of Chemistry', detail: 'Overview of practical techniques for measuring reaction rates in A-level chemistry.', year: '2020', source: 'rsc.org/learn-chemistry/resources/rates-of-reaction', tags: ['kinetics', 'experimental methods', 'rate measurement'] },
  ],
};
