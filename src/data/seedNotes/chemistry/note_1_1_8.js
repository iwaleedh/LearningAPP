/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 8
 * "Core Practical 1: gas molar volume"
 * Source: wch11-1.pdf — Spec refs: 1.8(ii), CP1
 */

export const note_chemistry_1_1_8 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Determine the molar volume of hydrogen gas at r.t.p. by reacting a known mass of magnesium with excess hydrochloric acid and measuring the volume of gas produced.'
    },
    terms: []
  },
  // ── AIM ───────────────────────────────────────────────────────────────
  {
    id: 'h-aim',
    type: 'heading',
    data: {
      text: 'Aim',
      level: 2
    },
    terms: []
  }, {
    id: 'p-aim',
    type: "list",
    data: {
      style: "unordered",
      items: [": 25 \xB0C, 100 kPa) by reacting a known mass of magnesium with excess hydrochloric acid and collecting the hydrogen produced in a gas syringe."]
    },
    terms: ['Molar volume']
  },
  // ── EQUATION ──────────────────────────────────────────────────────────
  {
    id: 'h-eq',
    type: 'heading',
    data: {
      text: 'Chemical Equation',
      level: 2
    },
    terms: []
  }, {
    id: 'eq-reaction',
    type: 'equation',
    data: {
      html: 'Mg<sub>(s)</sub> + 2HCl<sub>(aq)</sub> → MgCl<sub>2(aq)</sub> + H<sub>2(g)</sub>',
      caption: 'Magnesium reacts with excess hydrochloric acid — 1:1 mole ratio of Mg to H₂'
    },
    terms: []
  }, {
    id: 'keybox-eq',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — Mole Ratio',
      text: '1 mol Mg produces 1 mol H₂\n\nSo: moles of H₂ = moles of Mg = mass of Mg ÷ 24 (Aᵣ of Mg)'
    },
    terms: []
  },
  // ── APPARATUS DIAGRAM ─────────────────────────────────────────────────
  {
    id: 'h-apparatus',
    type: 'heading',
    data: {
      text: 'Apparatus',
      level: 2
    },
    terms: []
  }, {
    id: 'svg-apparatus',
    type: 'svg',
    data: {
      caption: 'Apparatus for Core Practical 1 — gas syringe method',
      svg: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of apparatus: conical flask with magnesium and HCl connected via delivery tube to gas syringe">
  <!-- Conical flask body -->
  <polygon points="80,50 40,160 160,160 120,50" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <!-- Flask neck -->
  <rect x="83" y="30" width="34" height="22" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <!-- Bung/stopper -->
  <rect x="80" y="24" width="40" height="10" rx="3" fill="#9ca3af" stroke="#6b7280" stroke-width="1.5"/>
  <!-- Liquid in flask -->
  <polygon points="50,140 150,140 160,160 40,160" fill="#bfdbfe" opacity="0.7"/>
  <!-- Mg ribbon -->
  <line x1="100" y1="100" x2="100" y2="135" stroke="#6b7280" stroke-width="3"/>
  <text x="115" y="120" font-size="9" fill="#374151">Mg ribbon</text>
  <!-- HCl label -->
  <text x="52" y="155" font-size="9" fill="#1e40af">HCl(aq)</text>
  <!-- Delivery tube -->
  <line x1="100" y1="24" x2="100" y2="12" stroke="#6b7280" stroke-width="2"/>
  <line x1="100" y1="12" x2="310" y2="12" stroke="#6b7280" stroke-width="2"/>
  <line x1="310" y1="12" x2="310" y2="65" stroke="#6b7280" stroke-width="2"/>
  <!-- Gas syringe body -->
  <rect x="290" y="65" width="180" height="40" rx="5" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <!-- Syringe plunger -->
  <rect x="370" y="60" width="12" height="50" rx="3" fill="#16a34a"/>
  <!-- H2 label -->
  <text x="315" y="90" font-size="10" fill="#14532d">H₂(g) collected</text>
  <!-- Scale marks -->
  <line x1="340" y1="65" x2="340" y2="75" stroke="#16a34a" stroke-width="1"/>
  <line x1="360" y1="65" x2="360" y2="75" stroke="#16a34a" stroke-width="1"/>
  <text x="337" y="110" font-size="8" fill="#374151">0</text>
  <text x="355" y="110" font-size="8" fill="#374151">V</text>
  <!-- Labels -->
  <text x="60"  y="180" font-size="10" font-weight="bold" fill="#1e3a8a">Conical flask</text>
  <text x="310" y="125" font-size="10" font-weight="bold" fill="#14532d">Gas syringe</text>
  <text x="130" y="14"  font-size="9"  fill="#374151">Delivery tube</text>
  <!-- Thermometer -->
  <rect x="170" y="60" width="8" height="70" rx="4" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <circle cx="174" cy="135" r="6" fill="#db2777"/>
  <text x="182" y="90" font-size="8" fill="#9d174d">thermometer</text>
</svg>`
    },
    terms: []
  },
  // ── METHOD ────────────────────────────────────────────────────────────
  {
    id: 'h-method',
    type: 'heading',
    data: {
      text: 'Method',
      level: 2
    },
    terms: []
  }, {
    id: 'list-method',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Set up apparatus: conical flask connected to gas syringe via a delivery tube. Check all joints are airtight.', 'Measure mass of dry magnesium ribbon using an electronic balance (±0.01 g).', 'Record the initial reading on the gas syringe (should be 0 cm³).', 'Add the magnesium to excess dilute hydrochloric acid in the conical flask and quickly seal with a bung.', 'The vigorous reaction produces H₂ which is pushed into the gas syringe.', 'Wait until the reaction is complete (no more gas produced).', 'Record the final gas syringe reading (±0.5 cm³).', 'Measure and record the temperature of the gas (thermometer) and atmospheric pressure (barometer).']
    },
    terms: []
  },
  // ── KEY MEASUREMENTS ──────────────────────────────────────────────────
  {
    id: 'h-measurements',
    type: 'heading',
    data: {
      text: 'Key Measurements',
      level: 2
    },
    terms: []
  }, {
    id: 'table-measurements',
    type: 'comparisonTable',
    data: {
      caption: 'Measurements and their uncertainties',
      headers: ['Measurement', 'Instrument', 'Uncertainty'],
      rows: [['Mass of Mg / g', 'Electronic balance', '±0.01 g'], ['Initial syringe reading / cm³', 'Gas syringe', '±0.5 cm³'], ['Final syringe reading / cm³', 'Gas syringe', '±0.5 cm³'], ['Volume of H₂ / cm³', 'Calculated (diff)', '±1.0 cm³'], ['Temperature / °C', 'Thermometer', '±0.5 °C'], ['Pressure / kPa', 'Barometer', '±0.1 kPa']]
    },
    terms: []
  },
  // ── SAMPLE RESULTS AND CALCULATION ───────────────────────────────────
  {
    id: 'h-calc',
    type: 'heading',
    data: {
      text: 'Processing Results',
      level: 2
    },
    terms: []
  }, {
    id: 'table-results',
    type: 'comparisonTable',
    data: {
      caption: 'Sample results',
      headers: ['Measurement', 'Value'],
      rows: [['Mass of Mg', '0.24 g'], ['Volume of H₂ collected', '240 cm³'], ['Temperature', '22 °C'], ['Pressure', '100 kPa']]
    },
    terms: []
  }, {
    id: 'callout-calc',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Sample Calculation',
      text: 'Step 1: n(Mg) = mass ÷ Aᵣ = 0.24 ÷ 24 = 0.010 mol\nStep 2: n(H₂) = n(Mg) = 0.010 mol  (1:1 ratio)\nStep 3: Convert volume: 240 cm³ ÷ 1000 = 0.240 dm³\nStep 4: Molar volume = V ÷ n = 0.240 ÷ 0.010 = 24 dm³ mol⁻¹\n\nExpected value at r.t.p. = 24 dm³ mol⁻¹  ✓'
    },
    terms: ['Molar volume']
  },
  // ── SOURCES OF ERROR ──────────────────────────────────────────────────
  {
    id: 'h-errors',
    type: 'heading',
    data: {
      text: 'Sources of Error',
      level: 2
    },
    terms: []
  }, {
    id: 'list-errors',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['H₂ dissolves slightly in the HCl solution → volume collected is less than actual → molar volume appears lower', 'Temperature changes during the reaction (exothermic) → gas expands while hot → volume appears higher', 'Leaks in apparatus joints → gas escapes → volume collected is less → molar volume appears lower', 'Magnesium not fully dissolved (oxide layer) → fewer moles reacted → molar volume appears higher', 'Water vapour from solution enters syringe → mixed with H₂ → volume is overestimated', 'Parallax error reading gas syringe graduation marks']
    },
    terms: []
  },
  // ── IMPROVEMENTS ─────────────────────────────────────────────────────
  {
    id: 'h-improve',
    type: 'heading',
    data: {
      text: 'Improvements',
      level: 2
    },
    terms: []
  }, {
    id: 'list-improve',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Cool gas back to room temperature before measuring (using water trough around flask)', 'Check all joints and connections are airtight before starting', 'Use clean magnesium ribbon (sand off oxide layer) for accurate mass', 'Allow apparatus to reach thermal equilibrium before recording', 'Repeat experiment and calculate mean molar volume', 'Use syringe with finer graduations for more precise readings', 'Record temperature immediately before and after to account for change']
    },
    terms: []
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-tips',
    type: 'heading',
    data: {
      text: 'Exam Tips for Practical Questions',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist-tips',
    type: 'checklist',
    data: {
      items: [{
        text: 'Aᵣ(Mg) = 24 — so n(Mg) = mass ÷ 24',
        checked: false
      }, {
        text: 'Mole ratio Mg:H₂ = 1:1 (from balanced equation)',
        checked: false
      }, {
        text: 'Convert cm³ → dm³ by ÷ 1000 before calculating molar volume',
        checked: false
      }, {
        text: 'Molar volume = Volume (dm³) ÷ Moles — expected result: 24 dm³ mol⁻¹',
        checked: false
      }, {
        text: 'State why HCl is in excess — ensures all Mg reacts (Mg is limiting reagent)',
        checked: false
      }, {
        text: 'Suggest sources of error with direction of effect (too high/too low)',
        checked: false
      }, {
        text: 'Link improvements to physics principles (e.g. cooling → Charles\'s Law)',
        checked: false
      }]
    },
    terms: []
  },
  // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  // ── SUMMARY ───────────────────────────────────────────────────────────
  // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: This practical works because 1 mol of any ideal gas occupies the same volume at the same T and P (Avogadro\'s Law). By measuring the exact volume of H₂ produced from a known mass of Mg, we experimentally verify this principle. Deviations from 24 dm³ reveal the limitations of ideal gas assumptions.\n\nApply: If a student obtains 115 cm³ of H₂ from 0.12 g of Mg at r.t.p., calculate the experimental molar volume. Is it higher or lower than expected? Suggest one reason for the discrepancy.\n\nAnalyze: Compare the sources of random error (reading gas syringe) vs systematic error (H₂ dissolving in HCl) in this experiment. Which type of error can be reduced by repeating the experiment, and which cannot?\n\nEvaluate: A student proposes replacing the gas syringe with water displacement collection (inverted measuring cylinder). Evaluate this alternative — would it improve accuracy? Consider the solubility of H₂ in water vs HCl.'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'Core Practical 1 determines molar volume by reacting a known mass of Mg with excess HCl, collecting H₂ in a gas syringe. Calculate n(Mg) = mass ÷ 24; n(H₂) = n(Mg) (1:1 ratio); molar volume = V(dm³) ÷ n. Expected result: 24 dm³ mol⁻¹ at r.t.p. Main sources of error: H₂ dissolving, temperature changes, apparatus leaks. Improvements: cool gas, check seals, repeat measurements.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'eq-reaction',
      prompt: 'Write the balanced equation for Mg + HCl. What is the mole ratio of Mg to H₂?'
    }, {
      id: 'cue-2',
      blockId: 'callout-calc',
      prompt: 'Given 0.24 g of Mg produces 240 cm³ H₂, calculate the molar volume.'
    }, {
      id: 'cue-3',
      blockId: 'list-errors',
      prompt: 'Give three sources of error in this practical and state their effect on the result.'
    }, {
      id: 'cue-4',
      blockId: 'list-improve',
      prompt: 'Suggest two improvements to reduce error in this practical.'
    }, {
      id: 'cue-5',
      blockId: 'table-measurements',
      prompt: 'What is the uncertainty in the gas syringe reading? How does this affect the final volume uncertainty?'
    }],
    summaryText: 'Core Practical 1 determines molar volume by reacting Mg with excess HCl, collecting H₂. n(Mg) = mass ÷ 24; n(H₂) = n(Mg); molar volume = V(dm³) ÷ n = 24 dm³ mol⁻¹ at r.t.p. Main errors: H₂ dissolving, temperature changes, leaks.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Core Practical 1 method and context referenced throughout Section 1C and 1E.',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['core practical', 'molar volume', 'gas syringe']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objectives 1.8(ii), CP1',
    detail: 'Use molar volume of gases; Core Practical 1 procedure.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification', 'core practical']
  }]
};