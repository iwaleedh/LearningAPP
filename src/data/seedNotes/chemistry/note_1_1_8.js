/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 8
 * "Core Practical 1: gas molar volume"
 * Source: Pearson Edexcel IAL Chemistry — Core Practical 1 reference in Section 1C
 */
export const note_chemistry_1_1_8 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe the method for Core Practical 1: measuring the molar volume of a gas from the reaction of magnesium with excess hydrochloric acid. Identify sources of error and improvements.' },
      terms: []
    },
    {
      id: 'h-aim',
      type: 'heading',
      data: { text: 'Core Practical 1: Aim', level: 2 },
      terms: []
    },
    {
      id: 'callout-aim',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Aim',
        text: 'To measure the volume of hydrogen gas produced when a known mass of magnesium reacts with excess hydrochloric acid, and to calculate the molar volume of H₂ at room temperature and pressure (r.t.p.).<br/><br/><strong>Equation:</strong> Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)'
      },
      terms: []
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method', level: 2 },
      terms: []
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Weigh a strip of magnesium ribbon accurately (to ±0.001 g). Remove any oxide layer by polishing with sandpaper.',
          'Set up a conical flask fitted with a bung and a delivery tube connected to a gas syringe (or inverted measuring cylinder over water).',
          'Add a measured excess volume of dilute HCl to the flask.',
          'Insert the magnesium and quickly seal the flask with the bung to prevent gas escaping.',
          'Record the volume of gas collected once the reaction is complete and the gas has cooled to room temperature.',
          'Record the room temperature and atmospheric pressure (for corrections if needed).'
        ]
      },
      terms: []
    },
    {
      id: 'callout-calc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculation',
        text: 'n(Mg) = mass / 24.3 (Aᵣ of Mg)<br/>n(H₂) = n(Mg) [1:1 ratio from equation]<br/>Molar volume = volume of H₂ / n(H₂)<br/><br/>Expected value at r.t.p.: <strong>≈ 24,000 cm³ mol⁻¹</strong> (24 dm³ mol⁻¹)'
      },
      terms: []
    },
    {
      id: 'callout-alt-method',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Alternative Method: CaCO₃ + Ethanoic Acid',
        text: 'Core Practical 1 can also be performed using marble chips (CaCO₃) and a weak acid like ethanoic acid (CH₃COOH).<br/>• A <strong>weak acid</strong> is used because the reaction is slower, making it easier to insert the bung before too much gas escapes.<br/>• <strong>Suspension method:</strong> To completely prevent gas loss, the marble chips can be suspended in a small tube on a thread inside the flask. The bung is inserted, and then the thread is released to mix the reactants.'
      },
      terms: []
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Sources of Error and Improvements', level: 2 },
      terms: []
    },
    {
      id: 'table-errors',
      type: 'comparisonTable',
      data: {
        caption: 'Sources of error in Core Practical 1',
        headers: ['Source of Error', 'Effect on Result', 'Improvement'],
        rows: [
          ['Gas escapes before the flask is sealed', 'Volume of H₂ measured is too low → molar volume too low', 'Pre-weigh Mg; seal flask immediately on adding it'],
          ['Oxide layer on Mg ribbon (MgO)', 'Less Mg reacts → volume too low', 'Polish ribbon with sandpaper immediately before weighing'],
          ['Gas syringe sticks (friction)', 'Volume reading inaccurate', 'Check syringe moves freely; lubricate if needed'],
          ['Room temperature differs from r.t.p.', 'Volume differs from expected 24 dm³ mol⁻¹', 'Record T and P; use ideal gas law PV = nRT to correct'],
          ['HCl not in excess', 'Not all Mg reacts → volume too low', 'Use a large excess of HCl (ensure all Mg dissolves)']
        ]
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-aim', prompt: 'Write the equation for Core Practical 1 and state what the aim of the experiment is.' },
      { id: 'c2', blockId: 'list-method', prompt: 'Why must the Mg ribbon be polished with sandpaper before use?' },
      { id: 'c3', blockId: 'table-errors', prompt: 'State two sources of error in CP1 that would cause the measured volume to be too low, and how to minimise each.' },
      { id: 'c4', blockId: 'callout-calc', prompt: 'What is the expected molar volume of H₂ at r.t.p.?' },
      { id: 'c5', blockId: 'callout-alt-method', prompt: 'In the alternative CP1 method using CaCO₃, why is a weak acid (like ethanoic acid) preferred over a strong acid?' },
      { id: 'c6', blockId: 'callout-alt-method', prompt: 'How can you completely eliminate the "gas escape before sealing" error using a thread?' }
    ],
    summaryText: 'CP1: Mg + 2HCl → MgCl₂ + H₂. Weigh Mg, collect H₂ in gas syringe. Molar volume = V(H₂)/n(Mg) ≈ 24,000 cm³ mol⁻¹. Alternative: CaCO₃ + ethanoic acid (weak acid = slower reaction). Suspend solid on thread to prevent gas loss. Key errors: gas escape before sealing, oxide layer on Mg, gas syringe friction, HCl not in excess.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_8;