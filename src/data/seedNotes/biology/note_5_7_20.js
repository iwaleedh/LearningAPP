export const note_biology_5_7_20 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Core Practical 16: Investigate the rate of oxygen consumption using a respirometer, and calculate Respiratory Quotients (RQ).' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'How a Respirometer Works', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A respirometer is an enclosed apparatus used to measure an organism\'s rate of oxygen consumption. It typically houses respiring biological material (like woodlice, blow fly larvae, or germinating seeds) connected to a capillary U-tube containing a drop of coloured manometer fluid.' }
    },
    {
      id: 'list-components',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Living organisms:** Actively respire, simultaneously taking up O₂ and releasing CO₂.',
          '**Soda-lime (or KOH):** Placed at the bottom of the test tube specifically to absorb all the CO₂ produced by the organisms.',
          '**Capillary tube/Manometer:** Because the CO₂ is absorbed by the soda-lime, the total volume and pressure of gas inside the sealed test tube decrease strictly due to oxygen consumption. This pressure drop physically pulls the manometer fluid towards the biological specimen.'
        ]
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method for Calculating RQ', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '**Measuring O₂ consumption (*x*):** Set up the respirometer with soda lime present. Run it for 30 minutes. Measure the distance the fluid travels towards the tube. Calculate the volume of oxygen consumed (*x*) using the formula π*r*²*h*.',
          '**Reset the fluid:** Open the screw clip to allow air back in, and use the attached syringe to reset the manometer fluid back to zero.',
          '**Measuring difference (*y*):** Remove all the soda-lime pellets from the apparatus. Run the experiment again for exactly the same timeframe. Any movement now is the net difference between O₂ consumed and CO₂ produced (*y*). Make sure to assign upward/downward movement positive/negative signs correctly.',
          '**Compute RQ:** By substituting these two empirical values into a standard equation.'
        ]
      }
    },
    {
      id: 'eq-rq',
      type: 'equation',
      data: {
        html: 'RQ = <span class="nb-frac"><span class="nb-num">x + y</span><span class="nb-den">x</span></span>',
        caption: 'Where x is volume with soda lime, and y is volume without soda lime.'
      }
    },
    {
      id: 'callout-safety',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Safety & Ethics',
        text: 'Soda-lime and potassium hydroxide are powerfully corrosive. The organisms must be shielded from direct contact using an inert barrier (like a mesh grid or glass beads). If live animals are used, they must be returned to their natural habitat safely.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What is the specific function of the soda lime securely placed in a respirometer?' },
      { id: 'cue-2', prompt: 'Why does the manometer fluid systematically move towards the test tube containing the organism when soda lime is present?' },
      { id: 'cue-3', prompt: 'State the geometric formula used to deduce the volume of gas consumed from the manometer capillary tube.' }
    ],
    summaryText: 'Soda lime absorbs all the carbon dioxide gas produced during the organism\'s respiration. This means that any gross change in gas volume within the system is due entirely to the amount of oxygen the organisms consume. This consumption decreases internal air pressure below atmospheric pressure, causing the manometer fluid to be pushed toward the test tube. Gas volume corresponds to the internal volume of a cylinder, calculated via πr²h.'
  }
};
