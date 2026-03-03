/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 9
 * "Equations from test-tube observations"
 * Source: wch11-1.pdf — Spec refs: 1.10, 1.12(i)(ii)(iii)
 */

export const note_chemistry_1_1_9 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Relate ionic and full equations (with state symbols) to observations from simple test-tube experiments: displacement reactions, typical reactions of acids, and precipitation reactions.'
    },
    terms: []
  },
  // ── READING OBSERVATIONS ──────────────────────────────────────────────
  {
    id: 'h-obs',
    type: 'heading',
    data: {
      text: 'Reading Observations to Write Equations',
      level: 2
    },
    terms: []
  }, {
    id: 'p-obs',
    type: "list",
    data: {
      style: "unordered",
      items: ["When given observations from a test-tube reaction, the task is to identify: (1) the reaction type, (2) the products formed, then write balanced full and ionic equations with correct state symbols.", "Visual clues such as gas bubbles, colour changes and precipitate formation are the key indicators."]
    },
    terms: []
  }, {
    id: 'keybox-clues',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Observation Clues',
      text: 'Effervescence (bubbles) → gas produced\nSolution warms up → exothermic reaction\nColour fades / change → ions reacting (redox or displacement)\nCloudy / solid forms → precipitate\nGas turns limewater milky → CO₂\nSqueaky pop with burning splint → H₂\nBleaches damp litmus → Cl₂\nPungent smell, turns red litmus blue → NH₃'
    },
    terms: []
  },
  // ── GAS TESTS TABLE ───────────────────────────────────────────────────
  {
    id: 'h-gas-tests',
    type: 'heading',
    data: {
      text: 'Gas Tests',
      level: 2
    },
    terms: []
  }, {
    id: 'table-gas-tests',
    type: 'comparisonTable',
    data: {
      caption: 'Tests for common gases produced in reactions',
      headers: ['Gas', 'Formula', 'Test', 'Positive result'],
      rows: [['Carbon dioxide', 'CO₂', 'Bubble through limewater Ca(OH)₂', 'Limewater turns milky white'], ['Hydrogen', 'H₂', 'Hold burning splint to mouth of tube', 'Squeaky pop sound'], ['Chlorine', 'Cl₂', 'Damp litmus paper near the gas', 'Bleaches litmus to white'], ['Oxygen', 'O₂', 'Glowing splint into gas jar', 'Splint relights'], ['Ammonia', 'NH₃', 'Damp red litmus near gas', 'Litmus turns blue; pungent smell']]
    },
    terms: []
  },
  // ── TYPICAL REACTIONS OF ACIDS ────────────────────────────────────────
  {
    id: 'h-acid-rxns',
    type: 'heading',
    data: {
      text: 'Typical Reactions of Acids (Objective 1.12ii)',
      level: 2
    },
    terms: []
  }, {
    id: 'table-acid-rxns',
    type: 'comparisonTable',
    data: {
      caption: 'General patterns for acid reactions',
      headers: ['Reaction type', 'General equation', 'Observations'],
      rows: [['Acid + Metal', 'Acid + Metal → Salt + H₂(g)', 'Effervescence (squeaky pop); metal dissolves; solution warms'], ['Acid + Metal oxide', 'Acid + Metal oxide → Salt + H₂O', 'Solid dissolves; no gas; solution may warm'], ['Acid + Metal hydroxide', 'Acid + Hydroxide → Salt + H₂O', 'No visible change (if both aq); solution warms'], ['Acid + Carbonate', 'Acid + Carbonate → Salt + H₂O + CO₂(g)', 'Effervescence; solid dissolves; limewater turns milky']]
    },
    terms: []
  },
  // ── DISPLACEMENT REACTIONS ────────────────────────────────────────────
  {
    id: 'h-displacement',
    type: 'heading',
    data: {
      text: 'Displacement Reactions (Objective 1.12i)',
      level: 2
    },
    terms: []
  }, {
    id: 'p-displacement',
    type: "list",
    data: {
      style: "unordered",
      items: ["A displacement reaction occurs when a more reactive element displaces a less reactive element from its compound.", "In solution, this is visible as a colour change (as ionic species change) and a solid metal depositing.", "The reactivity series determines which metal displaces which."]
    },
    terms: ['Displacement reaction']
  }, {
    id: 'callout-disp1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 1 — Fe displaces Cu from CuSO₄',
      text: 'Observation: Iron powder is added to blue CuSO₄ solution. The blue colour fades and a brown solid forms.\n\nFull equation:\nFe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)\n\nIonic equation:\nFe(s) + Cu²⁺(aq) + SO₄²⁻(aq) → Fe²⁺(aq) + SO₄²⁻(aq) + Cu(s)\n\nNet ionic equation (SO₄²⁻ is spectator):\nFe(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu(s)\n\nExplanation: Fe is more reactive than Cu → oxidised (loses 2e⁻). Cu²⁺ is reduced (gains 2e⁻) → deposits as copper metal.'
    },
    terms: ['Displacement reaction']
  }, {
    id: 'callout-disp2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 2 — Mg displaces Cu from CuSO₄ (from PDF p.8)',
      text: 'Mg(s) + CuSO₄(aq) → Cu(s) + MgSO₄(aq)\n\nNet ionic equation:\nMg(s) + Cu²⁺(aq) → Cu(s) + Mg²⁺(aq)\n\nAlso from PDF:\n2Al(s) + Fe₂O₃(s) → 2Fe(s) + Al₂O₃(s)\n(Thermite reaction — solid state displacement, no aqueous ions)'
    },
    terms: ['Displacement reaction']
  },
  // ── PRECIPITATION REACTIONS ───────────────────────────────────────────
  {
    id: 'h-precip',
    type: 'heading',
    data: {
      text: 'Precipitation Reactions (Objective 1.12iii)',
      level: 2
    },
    terms: []
  }, {
    id: 'p-precip',
    type: "list",
    data: {
      style: "unordered",
      items: ["A precipitation reaction forms an insoluble solid (precipitate) when two aqueous solutions containing soluble salts are mixed.", "The insoluble product falls out of solution as a solid.", "Use solubility rules to predict which combinations form precipitates."]
    },
    terms: ['Precipitate']
  }, {
    id: 'table-precipitates',
    type: 'comparisonTable',
    data: {
      caption: 'Common precipitates and their colours',
      headers: ['Precipitate', 'Formula', 'Colour', 'Net ionic equation'],
      rows: [['Silver chloride', 'AgCl', 'White', 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)'], ['Barium sulfate', 'BaSO₄', 'White', 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)'], ['Iron(II) hydroxide', 'Fe(OH)₂', 'Green', 'Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s)'], ['Iron(III) hydroxide', 'Fe(OH)₃', 'Brown/rust', 'Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)'], ['Copper(II) hydroxide', 'Cu(OH)₂', 'Blue', 'Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s)'], ['Lead(II) chloride', 'PbCl₂', 'White', 'Pb²⁺(aq) + 2Cl⁻(aq) → PbCl₂(s)'], ['Calcium carbonate', 'CaCO₃', 'White', 'Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s)']]
    },
    terms: ['Precipitate']
  }, {
    id: 'callout-precip1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 3 — AgNO₃ + NaCl',
      text: 'Observation: White precipitate forms immediately when AgNO₃(aq) is added to NaCl(aq).\n\nFull equation:\nAgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)\n\nIonic equation:\nAg⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + Na⁺(aq) + NO₃⁻(aq)\n\nSpectator ions: Na⁺ and NO₃⁻\n\nNet ionic equation:\nAg⁺(aq) + Cl⁻(aq) → AgCl(s)'
    },
    terms: ['Precipitate']
  }, {
    id: 'callout-precip2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 4 — Sodium thiosulfate + HCl (from PDF p.7)',
      text: 'Observation: Sulfur precipitate forms (cloudy yellow/white) when Na₂S₂O₃(aq) reacts with HCl(aq). SO₂ gas is also produced.\n\nFull equation:\nNa₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + S(s) + SO₂(g) + H₂O(l)'
    },
    terms: ['Precipitate']
  },
  // ── STEP-BY-STEP ANIMATION: writing ionic equations ───────────────────
  {
    id: 'h-method',
    type: 'heading',
    data: {
      text: 'Step-by-Step: Writing Net Ionic Equations from Observations',
      level: 2
    },
    terms: []
  }, {
    id: 'svg-ionic-steps',
    type: 'svg',
    data: {
      caption: 'Method for writing net ionic equations from test-tube observations',
      svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five step method for writing net ionic equations from observations">
  <style>.s{font-size:11px;fill:#111;font-family:sans-serif} .h{font-weight:bold;font-size:11px} .sub{font-size:9px;fill:#6b7280}</style>
  <defs>
    <marker id="arrI" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#6366f1"/>
    </marker>
  </defs>

  <rect x="10" y="8"   width="660" height="46" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="20" y="26"  class="s h" fill="#92400e">Step 1 — Read observation &amp; identify reaction type</text>
  <text x="20" y="44"  class="s">e.g. "white precipitate forms when AgNO₃(aq) + NaCl(aq) are mixed"  →  Precipitation</text>

  <line x1="330" y1="54" x2="330" y2="66" stroke="#6366f1" stroke-width="2" marker-end="url(#arrI)"/>

  <rect x="10" y="66"  width="660" height="46" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="20" y="84"  class="s h" fill="#5b21b6">Step 2 — Identify reactants and products; write full balanced equation</text>
  <text x="20" y="102" class="s">AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)</text>

  <line x1="330" y1="112" x2="330" y2="124" stroke="#6366f1" stroke-width="2" marker-end="url(#arrI)"/>

  <rect x="10" y="124" width="660" height="56" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="20" y="142" class="s h" fill="#0c4a6e">Step 3 — Split aqueous ionic compounds into ions (solids, gases, liquids stay molecular)</text>
  <text x="20" y="158" class="s">Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + Na⁺(aq) + NO₃⁻(aq)</text>
  <text x="20" y="174" class="sub">AgCl stays as molecular — it is INSOLUBLE (solid)</text>

  <line x1="330" y1="180" x2="330" y2="192" stroke="#6366f1" stroke-width="2" marker-end="url(#arrI)"/>

  <rect x="10" y="192" width="660" height="46" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="20" y="210" class="s h" fill="#9a3412">Step 4 — Identify and cancel spectator ions (appear unchanged on both sides)</text>
  <text x="20" y="228" class="s">Na⁺ and NO₃⁻ are spectators → cross them out from both sides</text>

  <line x1="330" y1="238" x2="330" y2="250" stroke="#6366f1" stroke-width="2" marker-end="url(#arrI)"/>

  <rect x="10" y="250" width="660" height="58" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
  <text x="20" y="268" class="s h" fill="#14532d">Step 5 — Write net ionic equation ✓</text>
  <text x="20" y="288" class="s" font-size="13" font-weight="bold">Ag⁺(aq) + Cl⁻(aq) → AgCl(s)</text>
  <text x="20" y="302" class="sub">Check: atoms balance ✓  |  charges balance: (+1) + (−1) = 0 → 0 ✓</text>
</svg>`
    },
    terms: ['Precipitate', 'Spectator ion']
  },
  // ── PREDICTING PRODUCTS ───────────────────────────────────────────────
  {
    id: 'h-predict',
    type: 'heading',
    data: {
      text: 'Predicting Products from Reactants',
      level: 2
    },
    terms: []
  }, {
    id: 'table-predict',
    type: 'comparisonTable',
    data: {
      caption: 'Reaction patterns — predicting products',
      headers: ['Reactants', 'Products', 'Key observation'],
      rows: [['Acid + reactive metal', 'Salt + H₂(g)', 'Effervescence; squeaky pop'], ['Acid + carbonate', 'Salt + H₂O + CO₂(g)', 'Effervescence; limewater turns milky'], ['Acid + base (neutralisation)', 'Salt + H₂O', 'Solution warms; no gas'], ['Acid + metal oxide', 'Salt + H₂O', 'Solid dissolves; no gas'], ['More reactive metal + salt soln', 'New salt + displaced metal', 'Colour change; solid deposits'], ['Two solutions (incompatible ions)', 'Precipitate + solution', 'Immediate cloudiness/solid']]
    },
    terms: []
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-tips',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist-tips',
    type: 'checklist',
    data: {
      items: [{
        text: 'Always include state symbols: (s), (l), (g), (aq)',
        checked: false
      }, {
        text: 'Identify reaction type from observation before writing equation',
        checked: false
      }, {
        text: 'Only split aqueous ionic compounds (strong electrolytes) into ions',
        checked: false
      }, {
        text: 'Insoluble precipitates (e.g. AgCl, BaSO₄) stay as molecular formula',
        checked: false
      }, {
        text: 'Identify spectator ions — they appear unchanged on both sides',
        checked: false
      }, {
        text: 'Check charge balance in net ionic equation',
        checked: false
      }, {
        text: 'Know the colours of common precipitates: AgCl white, Fe(OH)₂ green, Fe(OH)₃ brown, Cu(OH)₂ blue',
        checked: false
      }, {
        text: 'Acid + metal → salt + H₂; acid + carbonate → salt + H₂O + CO₂',
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
      text: 'Understand: Observations are the bridge between laboratory experience and chemical theory. Each observation (colour change, effervescence, precipitate, temperature change) maps to a specific type of chemical process. Linking observations to equations develops the skill of translating real-world phenomena into symbolic chemistry.\n\nApply: A student adds a few drops of silver nitrate solution to a solution containing chloride ions. Describe the observation and write the full equation, ionic equation, and net ionic equation.\n\nAnalyze: When zinc is added to blue copper sulfate solution, the solution turns colourless and a brown deposit appears. Identify the type of reaction, write the net ionic equation, and explain which species is oxidised and which is reduced.\n\nEvaluate: A student observes effervescence when adding acid to an unknown white powder. They conclude it must be a carbonate. Is this conclusion valid? What other tests could confirm or refute it?'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'Observations from test-tube reactions allow you to identify reaction type and write balanced full and ionic equations. Effervescence indicates H₂ (squeaky pop) or CO₂ (limewater milky). Colour changes indicate displacement or redox. Cloudiness indicates precipitation. Write full equation, split aqueous ionic species, cancel spectator ions to give net ionic equation. Always include state symbols and check charge balance.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-gas-tests',
      prompt: 'State the test for CO₂ and H₂ and give the positive result for each.'
    }, {
      id: 'cue-2',
      blockId: 'callout-disp1',
      prompt: 'Write the net ionic equation for Fe reacting with CuSO₄(aq).'
    }, {
      id: 'cue-3',
      blockId: 'callout-precip1',
      prompt: 'Write the net ionic equation for AgNO₃(aq) + NaCl(aq).'
    }, {
      id: 'cue-4',
      blockId: 'table-precipitates',
      prompt: 'State the colour of: AgCl, Fe(OH)₂, Fe(OH)₃, Cu(OH)₂ precipitates.'
    }, {
      id: 'cue-5',
      blockId: 'table-acid-rxns',
      prompt: 'State the general equation for: acid + carbonate. What observations would you see?'
    }],
    summaryText: 'Observations identify reaction type: effervescence (H₂ or CO₂), colour change (displacement), precipitate (ionic combination). Write full equation → split aqueous ionic compounds → cancel spectator ions → net ionic equation. Always include state symbols and check charge balance.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Section 1B: Displacement reactions; typical acid reactions; precipitation. Worked examples from pages 7–9. Checkpoints 2–3.',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['displacement', 'precipitation', 'ionic equations', 'acid reactions']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objectives 1.10, 1.12(i)(ii)(iii)',
    detail: 'Relate ionic/full equations to test-tube observations; displacement, acid reactions, precipitation.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification']
  }]
};