export const note_olevel_chemistry_6_6_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-6-interpreting-data.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Interpret rate of reaction graphs: calculate rates from gradients and compare the effect of different conditions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Interpreting Rate Graphs', level: 2 }
    },
    {
      id: 'call-shape',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shape of a Rate Graph (Volume or Mass vs Time)',
        text: 'A typical reaction gives an <strong>S-shaped / curve</strong> that flattens out:<br/><br/>• <strong>Steep gradient at start</strong> → highest rate (maximum concentration of reactants)<br/>• <strong>Decreasing gradient</strong> → rate slows as reactants are used up<br/>• <strong>Flat/horizontal plateau</strong> → reaction is complete (one reactant exhausted)<br/><br/>The <strong>gradient at any point = the rate at that moment</strong>.<br/>To find gradient: draw a tangent to the curve at that point, then calculate rise/run.'
      }
    },
    {
      id: 'call-comparing',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Comparing Curves for Different Conditions',
        text: 'When comparing two experiments that differ in one factor:<br/><br/>• <strong>Higher rate</strong> = steeper initial gradient<br/>• <strong>Same amount of product</strong> (same limiting reactant) = same plateau height<br/>• Different concentration or catalyst → steeper curve but same final volume<br/><br/>Common trap: <strong>If the same mass of reactant is used</strong>, the total amount of product is the same regardless of conditions — so all curves must reach the <strong>same final value</strong>.<br/><br/>If more reactant is used → higher plateau.'
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Sketching Curves',
        text: 'Experiment A: 2 g CaCO₃ lumps + 50 cm³ of 1 mol/dm³ HCl<br/>Experiment B: 2 g CaCO₃ powder + 50 cm³ of 1 mol/dm³ HCl<br/><br/>Sketch prediction:<br/>• Both curves reach the <strong>same plateau</strong> (same mass of CaCO₃ → same moles of CO₂)<br/>• Curve B is <strong>steeper at the start</strong> (powder = greater SA → faster rate)<br/>• Curve B levels off <strong>sooner</strong> than Curve A<br/><br/>If instead Experiment C uses 4 g CaCO₃ powder (double mass):<br/>• Curve C is steeper AND reaches a <strong>higher plateau</strong> (more CO₂ produced overall)'
      }
    },
    {
      id: 'call-rate-calc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Calculating Rate from a Graph',
        text: '<strong>For a straight-line section</strong>: rate = Δy ÷ Δx (change in volume ÷ change in time)<br/><br/><strong>For a curve</strong>: draw a tangent at the required point, then rate = gradient of the tangent.<br/><br/>Units of rate of reaction:<br/>• Volume/time → cm³/s or cm³/min<br/>• Mass/time → g/s or g/min<br/><br/>Rate ∝ 1/time for the cross (turbidity) method: rate = 1/t'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rate graphs show steep start → decreasing gradient → plateau. Steeper gradient = faster rate. Same mass of limiting reactant = same plateau height. Rate = gradient at any point (tangent for curves). Rate ∝ 1/t for precipitation reactions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Steep start → decreasing gradient → plateau. Same mass = same plateau. Gradient = rate. Powder gives same plateau as lumps but steeper curve.',
    cues: [
      { id: 'cue-1', blockId: 'call-shape', prompt: 'Explain why the gradient of a rate graph decreases over time.', answer: 'As the reaction proceeds, reactants are used up so their concentration decreases, leading to fewer collisions per unit time and therefore a slower rate.' },
      { id: 'cue-2', blockId: 'call-comparing', prompt: 'Two experiments use 2 g CaCO₃: one as lumps, one as powder, with the same HCl. How do their rate curves differ?', answer: 'The powder experiment has a steeper initial gradient (faster rate due to greater surface area) but reaches the same plateau height (same mass of CaCO₃ → same moles of CO₂ produced). The powder curve flattens sooner.' },
      { id: 'cue-3', blockId: 'call-rate-calc', prompt: 'How do you find the rate of reaction at a specific time from a curved graph?', answer: 'Draw a tangent to the curve at that specific time, then calculate the gradient of the tangent as rise ÷ run.' }
    ]
  },
  evidence: [],
  mentions: []
};
