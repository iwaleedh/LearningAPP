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
      id: 'svg-cp1-apparatus',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 285" font-family="Arial,sans-serif"><text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Core Practical 1 &#8212; Gas Syringe Apparatus</text><rect x="98" y="78" width="8" height="185" fill="#888"/><rect x="72" y="258" width="62" height="9" rx="2" fill="#888"/><rect x="106" y="108" width="83" height="8" fill="#888"/><rect x="182" y="105" width="13" height="15" rx="2" fill="#666"/><rect x="192" y="87" width="28" height="64" rx="2" fill="#1c3a64" stroke="#2a6db5" stroke-width="2"/><polygon points="192,147 152,255 260,255 220,147" fill="#1c3a64" stroke="#2a6db5" stroke-width="2"/><line x1="149" y1="257" x2="263" y2="257" stroke="#2a6db5" stroke-width="2"/><polygon points="163,218 192,150 220,150 249,218" fill="#1c3a64"/><polygon points="189,83 223,83 220,97 192,97" fill="#8B4513" stroke="#5a2d0c" stroke-width="1.5"/><path d="M220,89 L272,89 L272,126" stroke="#2a6db5" stroke-width="3" fill="none"/><rect x="272" y="118" width="178" height="34" rx="5" fill="#1c3a64" stroke="#2a6db5" stroke-width="2"/><rect x="388" y="120" width="10" height="30" fill="#1e3a8a" stroke="#2a6db5" stroke-width="1.5"/><rect x="396" y="108" width="14" height="54" rx="3" fill="#87a9c8" stroke="#2a6db5" stroke-width="1.5"/><line x1="296" y1="118" x2="296" y2="124" stroke="#2a6db5" stroke-width="1"/><line x1="313" y1="118" x2="313" y2="124" stroke="#2a6db5" stroke-width="1"/><line x1="330" y1="118" x2="330" y2="124" stroke="#2a6db5" stroke-width="1"/><line x1="347" y1="118" x2="347" y2="124" stroke="#2a6db5" stroke-width="1"/><line x1="364" y1="118" x2="364" y2="124" stroke="#2a6db5" stroke-width="1"/><line x1="381" y1="118" x2="381" y2="124" stroke="#2a6db5" stroke-width="1"/><line x1="205" y1="215" x2="135" y2="268" stroke="#555" stroke-width="1" stroke-dasharray="4,2"/><text x="12" y="270" font-size="11" fill="#333">Mg ribbon</text><text x="12" y="282" font-size="11" fill="#333">+ excess HCl(aq)</text><line x1="205" y1="88" x2="178" y2="63" stroke="#555" stroke-width="1" stroke-dasharray="4,2"/><text x="80" y="60" font-size="11" fill="#333">rubber bung</text><text x="252" y="83" font-size="11" fill="#c0392b" font-weight="bold">H&#x2082;(g)</text><text x="355" y="112" text-anchor="middle" font-size="11" fill="#333">gas syringe</text><text x="335" y="162" text-anchor="middle" font-size="10" fill="#555">graduated scale (cm&#xB3;)</text><line x1="410" y1="135" x2="452" y2="135" stroke="#555" stroke-width="1" stroke-dasharray="4,2"/><text x="454" y="139" font-size="11" fill="#333">plunger</text><text x="91" y="202" text-anchor="middle" font-size="9" fill="#888">retort</text><text x="91" y="213" text-anchor="middle" font-size="9" fill="#888">stand</text></svg>',
        caption: 'Gas syringe apparatus for Core Practical 1. The plunger is pushed out by the H₂ produced. Read the volume from the graduated scale at eye level once the reaction is complete and the syringe has cooled to room temperature.'
      }
    },
    {
      id: 'h-safety',
      type: 'heading',
      data: { text: 'Safety Precautions', level: 2 }
    },
    {
      id: 'list-safety',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Goggles and a lab coat</strong> must be worn throughout — HCl(aq) is corrosive and can cause burns.',
          '<strong>Dilute HCl</strong> (typically 2 mol dm⁻³) is used rather than concentrated HCl to reduce hazard.',
          'Mg ribbon is <strong>flammable</strong> — keep away from flames; store in a sealed container.',
          'Work in a <strong>well-ventilated area</strong> — H₂ gas is flammable and builds up in poorly ventilated spaces.',
          'Handle glass apparatus carefully; ensure all joints and the bung are secure before starting the reaction.'
        ]
      }
    },
    {
      id: 'h-variables',
      type: 'heading',
      data: { text: 'Variables', level: 2 }
    },
    {
      id: 'list-variables',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Independent variable:</strong> Mass of Mg ribbon used.',
          '<strong>Dependent variable:</strong> Volume of H₂ gas produced (cm³), read from gas syringe.',
          '<strong>Control variables:</strong> Concentration and volume of HCl kept constant (always in large excess); room temperature recorded and kept constant; same gas syringe used throughout.',
          'HCl is always in <strong>excess</strong> to ensure all the Mg reacts — so that moles of Mg = moles of H₂ produced (1:1 mole ratio from equation).'
        ]
      }
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
        style: 'numbered',
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
        title: 'Calculation — Worked Example',
        text: '<strong>A student uses 0.0486 g of Mg and collects 47.5 cm³ of H₂ at r.t.p. Calculate the molar volume of H₂.</strong><br/><br/>Equation: Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)<br/><br/><strong>Step 1 — Find n(Mg):</strong><br/>n(Mg) = mass / Aᵣ = 0.0486 / 24.3 = 2.00 × 10⁻³ mol<br/><br/><strong>Step 2 — Find n(H₂):</strong><br/>Mole ratio Mg : H₂ = 1 : 1, so n(H₂) = 2.00 × 10⁻³ mol<br/><br/><strong>Step 3 — Calculate molar volume:</strong><br/>Molar volume = V / n = 47.5 / (2.00 × 10⁻³) = <strong>23 750 cm³ mol⁻¹ ≈ 24 000 cm³ mol⁻¹</strong><br/><br/><em>Expected value at r.t.p.: 24 000 cm³ mol⁻¹ (24 dm³ mol⁻¹).<br/>A result slightly below 24 000 indicates some gas was lost before the flask was sealed.</em>'
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
          ['HCl not in excess', 'Not all Mg reacts → volume too low', 'Use a large excess of HCl (ensure all Mg dissolves)'],
          ['Parallax error when reading syringe', 'Volume reading inaccurate (too high or too low)', 'Read the gas syringe at eye level, keeping the line of sight perpendicular to the scale'],
          ['Volume recorded before gas cools to room temperature', 'Hot gas occupies a greater volume → molar volume calculated is too high', 'Wait until the syringe/flask has cooled to room temperature before recording the volume']
        ]
      },
      terms: []
    },
    {
      id: 'checklist-cp1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can state the equation for Core Practical 1: Mg + 2HCl → MgCl₂ + H₂', checked: false },
          { text: 'I can describe the apparatus: conical flask, rubber bung, delivery tube, gas syringe', checked: false },
          { text: 'I know why Mg ribbon must be polished with sandpaper (to remove the MgO oxide layer)', checked: false },
          { text: 'I can calculate n(Mg) from mass and Aᵣ, then apply 1:1 ratio to find n(H₂)', checked: false },
          { text: 'I can calculate the molar volume from V(H₂) / n(H₂)', checked: false },
          { text: 'I can state and explain at least 4 sources of error and their improvements', checked: false },
          { text: 'I can explain why HCl must be in excess', checked: false },
          { text: 'I understand the alternative method: CaCO₃ + ethanoic acid with the thread suspension technique', checked: false }
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-aim', prompt: 'Write the balanced equation for Core Practical 1 and state the aim.' },
      { id: 'c2', blockId: 'list-method', prompt: 'Why must the Mg ribbon be polished with sandpaper before use?' },
      { id: 'c-safety', blockId: 'list-safety', prompt: 'State two safety precautions needed for Core Practical 1 and give a reason for each.' },
      { id: 'c-vars', blockId: 'list-variables', prompt: 'State the independent, dependent, and one control variable in Core Practical 1.' },
      { id: 'c3', blockId: 'table-errors', prompt: 'State two sources of error in CP1 that cause the measured volume to be too low, and one that causes it to be too high.' },
      { id: 'c4', blockId: 'callout-calc', prompt: '0.0486 g of Mg is used and 47.5 cm³ of H₂ is collected at r.t.p. Calculate the molar volume of H₂. Show all steps.' },
      { id: 'c5', blockId: 'callout-alt-method', prompt: 'In the alternative CP1 method using CaCO₃, why is a weak acid preferred and how does the thread technique work?' },
      { id: 'c6', blockId: 'table-errors', prompt: 'Explain how reading the gas syringe before the gas has cooled affects the calculated molar volume and why.' }
    ],
    summaryText: 'CP1: Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g). Weigh Mg, seal flask, collect H₂ in gas syringe. n(Mg) = mass ÷ 24.3; mole ratio 1:1; molar volume = V ÷ n ≈ 24 000 cm³ mol⁻¹. Safety: goggles, dilute HCl, ventilation. Independent variable: mass Mg; dependent: volume H₂; control: HCl always in excess. Errors causing V too low: gas escape before sealing, oxide layer on Mg, HCl not in excess. Errors causing V too high: gas still warm when volume recorded. Parallax error: read syringe at eye level. Alternative: CaCO₃ + ethanoic acid (slow reaction = easier to seal); suspend solid on thread to prevent gas loss.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_1_8;