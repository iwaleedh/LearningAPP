export const note_chemistry_1_5_5 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Draw the full curly-arrow mechanism for electrophilic addition of HBr and Br₂ to alkenes; explain carbocation stability and Markovnikov regioselectivity.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Electrophilic Addition — Overview',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Electrophilic addition is the characteristic reaction of alkenes.", "The electron-rich \u03C0 bond acts as a nucleophile and attacks an incoming electrophile.", "The mechanism proceeds via a <strong>carbocation intermediate</strong> and involves <strong>heterolytic bond fission</strong> \u2014 full curly arrows are used throughout."]
    }
  }, {
    id: 'h-hbr-mech',
    type: 'heading',
    data: {
      text: 'Mechanism 1: Addition of HBr to Ethene',
      level: 2
    }
  }, {
    id: 'svg-hbr-ethene',
    type: 'svg',
    data: {
      svg: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <text x="250" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#374151">Electrophilic Addition of HBr to Ethene</text>

  <!-- STEP 1 -->
  <text x="10" y="45" font-size="11" font-weight="bold" fill="#4f46e5">Step 1: π bond attacks Hδ⁺ (electrophile)</text>
  <!-- Ethene -->
  <text x="30" y="85" font-size="13" fill="#374151">H₂C</text>
  <line x1="58" y1="79" x2="95" y2="79" stroke="#374151" stroke-width="2.5"/>
  <line x1="58" y1="87" x2="95" y2="87" stroke="#374151" stroke-width="2.5"/>
  <text x="96" y="85" font-size="13" fill="#374151">CH₂</text>
  <!-- HBr -->
  <text x="145" y="85" font-size="13" fill="#374151">+</text>
  <text x="160" y="85" font-size="13" fill="#374151">H</text>
  <text x="167" y="78" font-size="9" fill="#dc2626">δ+</text>
  <text x="178" y="85" font-size="13" fill="#374151">—Br</text>
  <text x="199" y="78" font-size="9" fill="#2563eb">δ−</text>
  <!-- curly arrow from pi to H -->
  <path d="M 76 72 Q 76 55 165 68" fill="none" stroke="#16a34a" stroke-width="1.8" marker-end="url(#arrowG)"/>
  <defs>
    <marker id="arrowG" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#16a34a"/>
    </marker>
    <marker id="arrowR" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#dc2626"/>
    </marker>
  </defs>
  <!-- curly arrow from H-Br to Br -->
  <path d="M 176 78 Q 205 60 215 75" fill="none" stroke="#dc2626" stroke-width="1.8" marker-end="url(#arrowR)"/>

  <!-- Arrow between steps -->
  <line x1="230" y1="83" x2="250" y2="83" stroke="#374151" stroke-width="1.5" marker-end="url(#arrowG)"/>

  <!-- Carbocation intermediate -->
  <text x="255" y="85" font-size="13" fill="#374151">H₃C—</text>
  <text x="290" y="85" font-size="13" fill="#dc2626" font-weight="bold">CH₂⁺</text>
  <text x="318" y="85" font-size="13" fill="#374151">  +  Br⁻</text>
  <text x="255" y="100" font-size="10" fill="#6b7280">(carbocation)</text>

  <!-- STEP 2 -->
  <text x="10" y="130" font-size="11" font-weight="bold" fill="#4f46e5">Step 2: Br⁻ (nucleophile) attacks carbocation</text>
  <text x="30" y="165" font-size="13" fill="#374151">H₃C—</text>
  <text x="67" y="165" font-size="13" fill="#dc2626" font-weight="bold">CH₂⁺</text>
  <text x="100" y="165" font-size="13" fill="#374151">  +  Br⁻</text>
  <!-- curly arrow from Br lone pair to C+ -->
  <path d="M 128 160 Q 110 148 100 158" fill="none" stroke="#16a34a" stroke-width="1.8" marker-end="url(#arrowG)"/>

  <!-- Arrow -->
  <line x1="155" y1="163" x2="175" y2="163" stroke="#374151" stroke-width="1.5" marker-end="url(#arrowG)"/>

  <!-- Product -->
  <text x="180" y="165" font-size="13" fill="#374151">H₃C—CH₂—Br</text>
  <text x="180" y="180" font-size="11" fill="#16a34a">bromoethane (product)</text>

  <text x="210" y="210" text-anchor="middle" font-size="10" fill="#6b7280">Full curly arrows: from electron source → electron sink. Heterolytic fission throughout.</text>
</svg>`,
      caption: 'Electrophilic addition of HBr to ethene: Step 1 — π electrons attack Hδ⁺ → carbocation + Br⁻. Step 2 — Br⁻ attacks carbocation → bromoethane.'
    }
  }, {
    id: 'h-steps-hbr',
    type: 'heading',
    data: {
      text: 'Step-by-Step: HBr Addition to Ethene',
      level: 2
    }
  }, {
    id: 'list-steps-hbr',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['<strong>Step 1 — Electrophilic attack:</strong> The π electrons of C=C attack the Hδ⁺ of HBr (the electrophile). One curly arrow from the π bond to H; one from the H–Br bond to Br. This is heterolytic fission of H–Br → produces H–C bond and Br⁻ anion, leaving a carbocation on the other C.', '<strong>Step 2 — Nucleophilic attack:</strong> Br⁻ (now a nucleophile with lone pairs) attacks the carbocation. One curly arrow from Br⁻ lone pair to the C⁺. This forms the C–Br bond and gives the final product (bromoalkane).']
    }
  }, {
    id: 'h-propene-mech',
    type: 'heading',
    data: {
      text: 'Mechanism: HBr Addition to Propene (Markovnikov)',
      level: 2
    }
  }, {
    id: 'p-propene',
    type: "list",
    data: {
      style: "unordered",
      items: ["When HBr adds to propene (CH\u2083CH=CH\u2082), two carbocation intermediates are possible depending on which carbon H attaches to:"]
    }
  }, {
    id: 'table-carbocations',
    type: 'comparisonTable',
    data: {
      caption: 'Carbocation intermediates from HBr addition to propene',
      headers: ['H adds to...', 'Carbocation formed', 'Type', 'Stability', 'Major/minor?'],
      rows: [['C1 (=CH₂)', 'CH₃–CH⁺–CH₃ (on C2)', 'Secondary (2°)', 'More stable (2 alkyl groups donate e⁻ by induction)', 'Major product: 2-bromopropane'], ['C2 (=CH–)', 'CH₃–CH₂–CH₂⁺ (on C1)', 'Primary (1°)', 'Less stable (1 alkyl group)', 'Minor product: 1-bromopropane']]
    }
  }, {
    id: 'h-carbocation-stability',
    type: 'heading',
    data: {
      text: 'Carbocation Stability',
      level: 2
    }
  }, {
    id: 'callout-key-carbocation',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Carbocation Stability Order',
      text: 'Tertiary (3°) > Secondary (2°) > Primary (1°) > Methyl\n\nMore alkyl groups attached to C⁺ → greater electron donation by induction (hyperconjugation) → greater stabilisation of the positive charge → lower activation energy → faster rate → major product.'
    }
  }, {
    id: 'h-br2-mech',
    type: 'heading',
    data: {
      text: 'Mechanism 2: Addition of Br₂ to Ethene',
      level: 2
    }
  }, {
    id: 'p-br2-mech',
    type: "list",
    data: {
      style: "unordered",
      items: ["When Br\u2082 approaches the electron-rich \u03C0 bond, the \u03C0 electrons repel the electrons in Br\u2082, inducing a dipole: Br\u03B4\u207A\u2013Br\u03B4\u207B.", "The \u03B4\u207A Br acts as the electrophile."]
    }
  }, {
    id: 'list-br2-steps',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['<strong>Step 1:</strong> π electrons attack Brδ⁺. Arrow from C=C to Brδ⁺; arrow from Br–Br bond to Brδ⁻. Forms a cyclic <strong>bromonium ion</strong> (three-membered ring with Br⁺) + Br⁻.', '<strong>Step 2:</strong> Br⁻ attacks one of the C atoms of the bromonium ion from the back face (anti addition) → 1,2-dibromoalkane.']
    }
  }, {
    id: 'callout-key-bromonium',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Bromonium Ion Intermediate',
      text: 'The cyclic bromonium ion (a three-membered ring: C–Br⁺–C) is the intermediate in Br₂ addition. It forms because both C atoms of the C=C share the positive Br. Br⁻ then attacks from the opposite face → anti addition product (trans-diaxial addition).'
    }
  }, {
    id: 'h-summary',
    type: 'heading',
    data: {
      text: 'Mechanism Summary Table',
      level: 2
    }
  }, {
    id: 'table-mechanisms',
    type: 'comparisonTable',
    data: {
      caption: 'Electrophilic addition mechanisms',
      headers: ['Reagent', 'Electrophile', 'Intermediate', 'Arrow type', 'Product'],
      rows: [['HBr', 'Hδ⁺ (from H–Br polarisation)', 'Carbocation (R⁺)', 'Full curly arrows', 'Bromoalkane'], ['HCl', 'Hδ⁺ (from H–Cl polarisation)', 'Carbocation (R⁺)', 'Full curly arrows', 'Chloroalkane'], ['Br₂', 'Brδ⁺ (induced by π cloud)', 'Bromonium ion (cyclic)', 'Full curly arrows', 'Dibromoalkane (anti addition)'], ['H₂O/H⁺', 'H⁺ (proton)', 'Carbocation (R⁺)', 'Full curly arrows', 'Alcohol']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips — Drawing Mechanisms',
      text: '• Every curly arrow must start FROM a bond or lone pair and point TO where the electrons go.\n• Step 1: two arrows — one from π bond to electrophile, one from the electrophile\'s bond to its leaving group.\n• Step 2: one arrow — from nucleophile\'s lone pair/negative charge to the carbocation.\n• Always show the carbocation with a ⁺ sign and no extra bonds on that carbon.\n• For Markovnikov — draw BOTH possible carbocations, identify which is more stable, and state it gives the major product.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Drawing arrows backwards (pointing from electrophile to the π bond) — arrows always go FROM electron source.\n• Forgetting to show Br⁻ as the nucleophile in Step 2.\n• Not labelling the carbocation intermediate with ⁺.\n• Using fish-hook (single-headed) arrows — electrophilic addition is ionic (heterolytic) → use full double-headed curly arrows.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can draw the full curly arrow mechanism for HBr addition to ethene (2 steps).',
        checked: false
      }, {
        text: 'I can draw the mechanism for HBr addition to propene and identify the major product using Markovnikov\'s rule.',
        checked: false
      }, {
        text: 'I can explain carbocation stability (3° > 2° > 1°) and link it to product distribution.',
        checked: false
      }, {
        text: 'I can describe the bromonium ion intermediate in Br₂ addition.',
        checked: false
      }, {
        text: 'I can use correct curly arrow notation (full arrows, correct direction) throughout.',
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
      text: 'Understand: Electrophilic addition: π electrons attack electrophile → carbocation intermediate → nucleophile attacks. Explains product and regioselectivity.\n\nApply: Draw the full curly arrow mechanism for HBr + ethene. Label electrophile, carbocation, nucleophile.\n\nAnalyze: Why is a secondary carbocation more stable than primary? Explain using inductive effects.\n\nEvaluate: What evidence supports the carbocation intermediate in electrophilic addition?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Electrophilic addition mechanism: Step 1 — π electrons attack electrophile (Hδ⁺ or Brδ⁺) → carbocation (or bromonium ion) intermediate + anion. Step 2 — anion attacks carbocation → product. Full curly arrows throughout (heterolytic). Markovnikov: H adds to give the more stable (more substituted) carbocation → major product. Stability: 3° > 2° > 1° carbocations.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'list-steps-hbr',
      prompt: 'Describe the two steps in the electrophilic addition of HBr to ethene.'
    }, {
      id: 'cue-2',
      blockId: 'table-carbocations',
      prompt: 'Why is 2-bromopropane the major product when HBr adds to propene?'
    }, {
      id: 'cue-3',
      blockId: 'callout-key-carbocation',
      prompt: 'State the stability order of carbocations and explain why tertiary is most stable.'
    }, {
      id: 'cue-4',
      blockId: 'callout-key-bromonium',
      prompt: 'What intermediate forms when Br₂ adds to an alkene? How is it different from a carbocation?'
    }, {
      id: 'cue-5',
      blockId: 'callout-warning',
      prompt: 'What are two common errors students make when drawing electrophilic addition mechanisms?'
    }],
    summaryText: 'EA mechanism: π electrons → electrophile (Step 1) → carbocation intermediate → nucleophile attacks (Step 2). Full curly arrows. Markovnikov: most stable carbocation gives major product (3°>2°>1°). Br₂: bromonium ion intermediate → anti addition.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Electrophilic addition mechanism with curly arrows is required for Topic 5.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['electrophilic addition', 'mechanism', 'carbocation']
  }]
};