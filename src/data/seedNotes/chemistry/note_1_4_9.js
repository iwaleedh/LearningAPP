export const note_chemistry_1_4_9 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe fractional distillation of crude oil; explain how fractions are used as fuels and relate the process to intermolecular forces.'
    }
  }, {
    id: 'h-crude',
    type: 'heading',
    data: {
      text: 'Crude Oil — Composition',
      level: 2
    }
  }, {
    id: 'p-crude',
    type: "list",
    data: {
      style: "unordered",
      items: ["Crude oil is a complex mixture of hydrocarbons (mainly alkanes) formed from the remains of marine organisms over millions of years under heat and pressure.", "It is the primary raw material for the petrochemical industry.", "The mixture must be separated into useful <strong>fractions</strong> before it can be used."]
    }
  }, {
    id: 'h-fractional',
    type: 'heading',
    data: {
      text: 'Fractional Distillation',
      level: 2
    }
  }, {
    id: 'callout-key-fd',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Fractional Distillation — Principle',
      text: 'Crude oil is separated by fractional distillation in a fractionating column. The mixture is heated to vaporise it, then vapours rise up the column and condense at different heights according to their boiling points. Shorter-chain alkanes have lower boiling points (weaker London forces) and condense near the top; longer-chain alkanes condense near the bottom.'
    }
  }, {
    id: 'svg-column',
    type: 'svg',
    data: {
      svg: `<svg viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <text x="230" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#374151">Fractionating Column</text>
  <!-- Column body -->
  <rect x="120" y="30" width="80" height="320" rx="6" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
  <!-- Temperature gradient arrow -->
  <line x1="100" y1="50" x2="100" y2="340" stroke="#ef4444" stroke-width="2"/>
  <polygon points="100,40 96,55 104,55" fill="#ef4444"/>
  <text x="95" y="200" text-anchor="middle" font-size="11" fill="#ef4444" transform="rotate(-90,95,200)">Temperature increases ↓</text>
  <!-- Fractions -->
  <!-- Refinery gas -->
  <rect x="210" y="32" width="10" height="30" fill="#93c5fd" rx="2"/>
  <text x="225" y="42" font-size="11" fill="#1e40af">Refinery gas (C₁–C₄)</text>
  <text x="225" y="54" font-size="10" fill="#6b7280">b.p. below 25 °C — bottled gas, heating</text>
  <!-- Gasoline/petrol -->
  <rect x="210" y="82" width="10" height="35" fill="#fbbf24" rx="2"/>
  <text x="225" y="94" font-size="11" fill="#92400e">Petrol/gasoline (C₅–C₁₀)</text>
  <text x="225" y="106" font-size="10" fill="#6b7280">25–75 °C — motor fuel</text>
  <!-- Naphtha -->
  <rect x="210" y="132" width="10" height="30" fill="#a78bfa" rx="2"/>
  <text x="225" y="144" font-size="11" fill="#5b21b6">Naphtha (C₆–C₁₀)</text>
  <text x="225" y="156" font-size="10" fill="#6b7280">75–190 °C — chemical feedstock</text>
  <!-- Kerosene -->
  <rect x="210" y="177" width="10" height="35" fill="#34d399" rx="2"/>
  <text x="225" y="189" font-size="11" fill="#065f46">Kerosene (C₁₀–C₁₆)</text>
  <text x="225" y="201" font-size="10" fill="#6b7280">150–250 °C — jet fuel</text>
  <!-- Diesel -->
  <rect x="210" y="227" width="10" height="35" fill="#f97316" rx="2"/>
  <text x="225" y="239" font-size="11" fill="#7c2d12">Diesel (C₁₄–C₂₀)</text>
  <text x="225" y="251" font-size="10" fill="#6b7280">220–350 °C — road diesel</text>
  <!-- Fuel oil -->
  <rect x="210" y="277" width="10" height="30" fill="#64748b" rx="2"/>
  <text x="225" y="289" font-size="11" fill="#1e293b">Fuel oil (C₂₀–C₅₀)</text>
  <text x="225" y="301" font-size="10" fill="#6b7280">300–370 °C — ships, power stations</text>
  <!-- Bitumen residue -->
  <rect x="120" y="350" width="80" height="15" fill="#1f2937" rx="3"/>
  <text x="160" y="377" text-anchor="middle" font-size="11" fill="#374151">Bitumen residue (C₅₀+) — road surfacing</text>
  <!-- Furnace -->
  <rect x="110" y="380" width="100" height="28" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="160" y="399" text-anchor="middle" font-size="11" fill="#991b1b">Furnace — heat crude oil</text>
</svg>`,
      caption: 'Fractionating column: crude oil heated at bottom, fractions condense at different heights based on boiling point.'
    }
  }, {
    id: 'h-fractions',
    type: 'heading',
    data: {
      text: 'Main Fractions and Their Uses',
      level: 2
    }
  }, {
    id: 'table-fractions',
    type: 'comparisonTable',
    data: {
      caption: 'Major fractions from crude oil distillation',
      headers: ['Fraction', 'Carbon range', 'Boiling point range / °C', 'State at r.t.p.', 'Main use'],
      rows: [['Refinery gas', 'C₁–C₄', 'Below 25', 'Gas', 'Calor gas, bottled fuel, chemical feedstock'], ['Petrol (gasoline)', 'C₅–C₁₀', '25–75', 'Liquid', 'Motor vehicle fuel'], ['Naphtha', 'C₆–C₁₀', '75–190', 'Liquid', 'Chemical feedstock (plastics, solvents)'], ['Kerosene (paraffin)', 'C₁₀–C₁₆', '150–250', 'Liquid', 'Jet fuel, domestic heating'], ['Diesel (gas oil)', 'C₁₄–C₂₀', '220–350', 'Liquid', 'Diesel engines, central heating'], ['Fuel oil', 'C₂₀–C₅₀', '300–370', 'Viscous liquid', 'Ships, power stations'], ['Bitumen (residue)', 'C₅₀+', '>370 (does not distil)', 'Solid/semi-solid', 'Road surfaces, roofing']]
    }
  }, {
    id: 'h-why',
    type: 'heading',
    data: {
      text: 'Why Different Boiling Points?',
      level: 2
    }
  }, {
    id: 'p-why',
    type: "list",
    data: {
      style: "unordered",
      items: ["The boiling point of each fraction depends on the strength of its <strong>London dispersion forces</strong>.", "Longer-chain alkanes have more electrons and a greater surface area \u2192 stronger London forces \u2192 higher boiling point \u2192 condense lower in the column."]
    }
  }, {
    id: 'list-why',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Short chains (C₁–C₄): very weak London forces → low b.p. → gas at room temperature → exit at top of column.', 'Long chains (C₂₀+): very strong London forces → very high b.p. → liquid/solid at room temperature → collected at bottom.', 'This is a <strong>physical separation</strong> — no chemical bonds are broken during distillation.']
    }
  }, {
    id: 'h-cracking',
    type: 'heading',
    data: {
      text: 'Cracking — Converting Unwanted Fractions',
      level: 2
    }
  }, {
    id: 'p-cracking',
    type: "list",
    data: {
      style: "unordered",
      items: ["Demand for petrol and short-chain fractions is much greater than supply.", "Long-chain alkanes from heavy fractions are <strong>cracked</strong> (broken down) into shorter, more useful molecules."]
    }
  }, {
    id: 'table-cracking',
    type: 'comparisonTable',
    data: {
      caption: 'Thermal vs catalytic cracking',
      headers: ['Method', 'Conditions', 'Products', 'Use'],
      rows: [['Thermal cracking', 'High temperature (400–900 °C), high pressure', 'Mainly alkenes + some alkanes', 'Producing ethene and propene for polymer industry'], ['Catalytic cracking', 'Lower temperature (~500 °C), zeolite catalyst, lower pressure', 'More branched alkanes + aromatic hydrocarbons', 'Producing high-octane petrol components']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tip',
      text: '• Fractional distillation is a PHYSICAL process — no new substances are made, only separated.\n• Cracking is a CHEMICAL process — covalent bonds are broken; new substances are formed.\n• Always link boiling point differences to London dispersion forces (longer chain → more electrons → stronger London forces → higher b.p.).'
    }
  }, {
    id: 'h-isomerisation',
    type: 'heading',
    data: {
      text: 'Improving Octane Rating: Isomerisation',
      level: 2
    }
  }, {
    id: 'p-octane-rating',
    type: 'list',
    data: {
      style: 'unordered',
      items: [
        'Straight-chain alkanes auto-ignite too easily (engine knocking), giving them a low octane rating.',
        'Branched alkanes and cyclic hydrocarbons have higher octane ratings and burn more smoothly.',
        '<strong>Isomerisation</strong> converts straight-chain alkanes into branched isomers.',
        '<strong>Conditions:</strong> Heated with a Platinum (Pt) catalyst on a zeolite base at ~250 °C.'
      ]
    }
  }, {
    id: 'equation-isomerisation',
    type: 'comparisonTable',
    data: {
      caption: 'Example of Isomerisation',
      headers: ['Reactant', 'Product'],
      rows: [
        ['Pentane ($C_5H_{12}$)', '2-methylbutane or 2,2-dimethylpropane']
      ]
    }
  }, {
    id: 'h-reforming',
    type: 'heading',
    data: {
      text: 'Improving Octane Rating: Reforming',
      level: 2
    }
  }, {
    id: 'p-reforming',
    type: 'list',
    data: {
      style: 'unordered',
      items: [
        '<strong>Reforming</strong> converts straight-chain alkanes into cycloalkanes or aromatic hydrocarbons (like benzene) with the release of hydrogen gas.',
        'This significantly increases the octane rating of the fuel.',
        '<strong>Conditions:</strong> Heated with a Platinum (Pt) catalyst on an aluminium oxide ($Al_2O_3$) base at ~500 °C.'
      ]
    }
  }, {
    id: 'table-reforming-examples',
    type: 'comparisonTable',
    data: {
      caption: 'Examples of Reforming',
      headers: ['Reactant', 'Products'],
      rows: [
        ['Hexane ($C_6H_{14}$)', 'Cyclohexane ($C_6H_{12}$) + $H_2$'],
        ['Cyclohexane ($C_6H_{12}$)', 'Benzene ($C_6H_6$) + $3H_2$'],
        ['Hexane ($C_6H_{14}$)', 'Benzene ($C_6H_6$) + $4H_2$']
      ]
    }
  }, {
    id: 'callout-fluid-catalytic',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Fluid Catalytic Cracking vs Reforming / Isomerisation Catalysts',
      text: 'Note the use of Platinum (Pt). Isomerisation uses Pt on zeolite at 250 °C, while reforming uses Pt on aluminium oxide at 500 °C. These are vital for upgrading naphtha into high-octane petrol components.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can describe the principle of fractional distillation of crude oil.',
        checked: false
      }, {
        text: 'I can name at least 5 fractions and state their carbon range and main use.',
        checked: false
      }, {
        text: 'I can explain why different fractions condense at different heights using London forces.',
        checked: false
      }, {
        text: 'I can distinguish thermal and catalytic cracking by conditions and products.',
        checked: false
      }, {
        text: 'I understand why cracking is economically important (excess long-chain → useful short-chain).',
        checked: false
      }, {
        text: 'I can explain isomerisation and reforming, including their conditions and purpose (improving octane rating).',
        checked: false
      }]
    }
  },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: Fractional distillation separates crude oil by boiling point. Shorter chains = lower b.p. = collected higher in column.\n\nApply: Why does kerosene have higher b.p. than petrol? Relate to molecular size and IMF.\n\nAnalyze: Why is cracking economically important? Analyze supply vs demand for different fractions.\n\nEvaluate: Compare thermal vs catalytic cracking for sustainability.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Crude oil (mainly alkanes) is separated by fractional distillation — vapours condense at different heights based on boiling point (London force strength). Short-chain fractions (refinery gas, petrol) at top; long-chain (fuel oil, bitumen) at bottom. Cracking converts unwanted long-chain alkanes into shorter, more useful alkenes and branched alkanes.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-fd',
      prompt: 'Explain the principle of fractional distillation of crude oil.'
    }, {
      id: 'cue-2',
      blockId: 'table-fractions',
      prompt: 'Name the fraction used as jet fuel and the fraction used for road surfacing.'
    }, {
      id: 'cue-3',
      blockId: 'p-why',
      prompt: 'Why do shorter-chain alkanes condense at the top of the fractionating column?'
    }, {
      id: 'cue-4',
      blockId: 'table-cracking',
      prompt: 'Compare thermal and catalytic cracking: conditions and products.'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'Is fractional distillation a physical or chemical process? How does it differ from cracking?'
    }, {
      id: 'cue-isomerisation',
      blockId: 'p-octane-rating',
      prompt: 'What are the conditions and purpose of Isomerisation in the petrochemical industry?'
    }, {
      id: 'cue-reforming',
      blockId: 'p-reforming',
      prompt: 'What are the conditions and purpose of Reforming? Give an example of a product formed from hexane.'
    }],
    summaryText: 'Crude oil separated by fractional distillation (physical). Short chains: low b.p., top of column. Long chains: high b.p., bottom. Cracking (chemical) converts long chains → short alkenes + branched alkanes. London forces explain b.p. differences.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Fractional distillation and cracking of crude oil is required for Topic 4.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['fractional distillation', 'crude oil', 'cracking', 'isomerisation', 'reforming', 'octane rating']
  }]
};