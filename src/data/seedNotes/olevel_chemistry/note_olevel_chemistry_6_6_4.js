export const note_olevel_chemistry_6_6_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-5-investigating-the-rate-of-a-reaction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe experimental methods for investigating and measuring the rate of a chemical reaction.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Measuring Rate of Reaction: Experimental Methods', level: 2 }
    },
    {
      id: 'tbl-methods',
      type: 'comparisonTable',
      data: {
        caption: 'Methods for measuring reaction rate',
        headers: ['Method', 'What is measured', 'Example reaction', 'Equipment'],
        rows: [
          ['Gas syringe / inverted measuring cylinder over water', 'Volume of gas produced vs time', 'Mg + HCl → MgCl₂ + H₂; CaCO₃ + HCl → CaCl₂ + H₂O + CO₂', 'Gas syringe or trough + measuring cylinder, stopwatch'],
          ['Loss of mass', 'Decrease in mass as gas escapes vs time', 'CaCO₃ + HCl → ... + CO₂ (gas escapes)', 'Balance, cotton wool plug, stopwatch'],
          ['Colour change / colorimetry', 'Colour intensity vs time', 'Iodine being used up in thiosulfate reactions', 'Colorimeter or visual observation'],
          ['Colour cross / turbidity', 'Time for precipitate to obscure a cross', 'Na₂S₂O₃ + HCl → S precipitate', 'Conical flask over cross, stopwatch; rate ∝ 1/t']
        ]
      }
    },
    {
      id: 'call-gas',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Gas Volume Method (Marble Chips + HCl)',
        text: 'CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)<br/><br/>Setup: Conical flask on balance, cotton wool to allow gas out but catch acid spray; gas syringe attached.<br/><br/>Procedure:<br/>1. Add known mass of marble chips to conical flask.<br/>2. Add excess HCl at a known concentration.<br/>3. Record volume of CO₂ collected every 30 s.<br/><br/>Graph: Volume of CO₂ (y) vs time (x).<br/>• Steep gradient at start (fast rate).<br/>• Gradient decreases as reactants are used up (rate slows).<br/>• Flat line at end = reaction complete (one reactant exhausted).<br/>• Total CO₂ collected = same for same mass of limiting reactant, regardless of rate.'
      }
    },
    {
      id: 'call-fairtest',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Fair Test Principles',
        text: 'When investigating <strong>one</strong> factor, keep all others constant:<br/>• Change concentration → keep T, SA, no catalyst<br/>• Change temperature → keep concentration, SA the same<br/>• Change surface area → use same mass of CaCO₃ each time<br/><br/><strong>Controlled variables</strong>: temperature, concentration of acid, mass of solid, volume of solution, type of reactant.<br/><br/>Repeat experiments are needed to calculate a mean and identify anomalous results.'
      }
    },
    {
      id: 'call-lossofmass',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Loss of Mass Method',
        text: 'Measures how mass decreases as gas escapes.<br/><br/>Advantages: simple to set up; continuous readings.<br/>Disadvantage: for light gases (H₂), mass change is very small and hard to measure accurately; CO₂ is denser so works well.<br/><br/>Rate at any point = gradient of the mass–time curve (take tangent to curve).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rate can be measured by gas volume (gas syringe), loss of mass, colorimetry, or cross/turbidity method. All generate curves where gradient = rate. Gradient is steepest at the start and decreases as reactants are consumed.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Gas syringe, loss of mass, cross method, colorimetry. Steep gradient at start; flattens as reactants are used up.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-methods', prompt: 'Give two methods for measuring the rate of CaCO₃ + HCl, stating what is measured in each.', answer: '(1) Volume of CO₂ collected over time using a gas syringe. (2) Loss of mass of the flask and contents over time as CO₂ escapes.' },
      { id: 'cue-2', blockId: 'call-gas', prompt: 'Describe the shape of a volume-time graph for a rate experiment, explaining each feature.', answer: 'Steep gradient at the start (reactants at maximum concentration → fast rate); gradient decreases over time (reactants used up → fewer collisions → slower rate); finally a flat/horizontal section (reaction complete — one reactant exhausted).' },
      { id: 'cue-3', blockId: 'call-fairtest', prompt: 'State two variables that must be controlled when investigating the effect of concentration on rate of reaction.', answer: 'Any two of: temperature, surface area of solid, mass of solid, volume of solution, type of reactant.' }
    ]
  },
  evidence: [],
  mentions: []
};
