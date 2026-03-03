export const note_chemistry_1_5_6 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe addition polymerisation of alkenes; draw repeat units from monomers and deduce monomers from repeat units.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Addition Polymerisation',
      level: 2
    }
  }, {
    id: 'callout-key-poly',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Addition Polymerisation — Definition',
      text: 'Addition polymerisation is a reaction in which many small unsaturated monomer molecules (alkenes) join together repeatedly to form a very long chain polymer. No other product is formed — all atoms in the monomers end up in the polymer. The C=C double bond in each monomer opens to allow bonding.'
    }
  }, {
    id: 'eq-general',
    type: 'equation',
    data: {
      html: 'n(CH₂=CH₂) → (–CH₂–CH₂–)ₙ',
      caption: 'General equation: n monomer units → polymer with n repeat units. The C=C opens and becomes C–C in the chain.'
    }
  }, {
    id: 'h-notation',
    type: 'heading',
    data: {
      text: 'Notation and Repeat Units',
      level: 2
    }
  }, {
    id: 'p-notation',
    type: "list",
    data: {
      style: "unordered",
      items: ["The repeat unit is the smallest section of the polymer that, when repeated n times, gives the full polymer chain.", "It is drawn in square brackets with bonds extending from each end, and n written as a subscript outside the bracket."]
    }
  }, {
    id: 'list-rules',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['The repeat unit always has the same atoms as the monomer.', 'The C=C in the monomer becomes a C–C in the repeat unit.', 'Two bonds extend from the repeat unit (one from each end) — these represent continuation of the chain.', 'n represents the degree of polymerisation (number of repeat units).']
    }
  }, {
    id: 'h-examples',
    type: 'heading',
    data: {
      text: 'Common Addition Polymers',
      level: 2
    }
  }, {
    id: 'table-polymers',
    type: 'comparisonTable',
    data: {
      caption: 'Common addition polymers, their monomers and uses',
      headers: ['Polymer', 'Monomer', 'Monomer formula', 'Repeat unit', 'Common uses'],
      rows: [['Poly(ethene) / polyethylene (PE)', 'Ethene', 'CH₂=CH₂', '(–CH₂–CH₂–)ₙ', 'Plastic bags, bottles, pipes'], ['Poly(propene) / polypropylene (PP)', 'Propene', 'CH₂=CHCH₃', '(–CH₂–CH(CH₃)–)ₙ', 'Ropes, carpets, food containers'], ['Poly(chloroethene) / PVC', 'Chloroethene (vinyl chloride)', 'CH₂=CHCl', '(–CH₂–CHCl–)ₙ', 'Pipes, window frames, flooring'], ['Poly(tetrafluoroethene) / PTFE', 'Tetrafluoroethene', 'CF₂=CF₂', '(–CF₂–CF₂–)ₙ', 'Non-stick coatings (Teflon), PTFE tape'], ['Poly(phenylethene) / polystyrene (PS)', 'Phenylethene (styrene)', 'CH₂=CHC₆H₅', '(–CH₂–CH(C₆H₅)–)ₙ', 'Packaging foam, disposable cups'], ['Poly(propenenitrile) / PAN', 'Propenenitrile (acrylonitrile)', 'CH₂=CHCN', '(–CH₂–CH(CN)–)ₙ', 'Acrylic fibres (clothing)'], ['Poly(methyl methacrylate) / PMMA', 'Methyl 2-methylpropenoate', 'CH₂=C(CH₃)COOCH₃', '(–CH₂–C(CH₃)(COOCH₃)–)ₙ', 'Perspex / acrylic glass']]
    }
  }, {
    id: 'h-monomer-to-repeat',
    type: 'heading',
    data: {
      text: 'Monomer → Repeat Unit (and Reverse)',
      level: 2
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 1 — Monomer to Repeat Unit',
      text: 'Monomer: CH₂=CHCl (chloroethene)\n\nStep 1: Open the C=C → C–C single bond\nStep 2: Each C now has one spare bond (extending into the chain)\nRepeat unit: (–CH₂–CHCl–)ₙ\n\nDraw: square bracket, –CH₂–CHCl–, closing bracket with subscript n, bonds extending from each end.'
    }
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 2 — Repeat Unit to Monomer',
      text: 'Repeat unit: (–CH₂–C(CH₃)₂–)ₙ\n\nStep 1: Remove the two chain-extension bonds\nStep 2: Replace the C–C in the backbone with C=C\nMonomer: CH₂=C(CH₃)₂ (2-methylpropene / isobutylene)'
    }
  }, {
    id: 'h-ldpe-hdpe',
    type: 'heading',
    data: {
      text: 'Low-Density vs High-Density Poly(ethene)',
      level: 2
    }
  }, {
    id: 'table-pe',
    type: 'comparisonTable',
    data: {
      caption: 'LDPE vs HDPE — structure and properties',
      headers: ['Property', 'LDPE (low-density)', 'HDPE (high-density)'],
      rows: [['Conditions of manufacture', 'High pressure (~2000 atm), ~200 °C, radical initiator', 'Low pressure (~10 atm), ~60 °C, Ziegler-Natta catalyst'], ['Chain structure', 'Highly branched chains', 'Mostly unbranched (linear) chains'], ['Chain packing', 'Loosely packed (branches prevent close packing)', 'Tightly packed (linear chains pack well)'], ['Density', 'Lower (~0.92 g cm⁻³)', 'Higher (~0.96 g cm⁻³)'], ['Melting point', 'Lower (~110 °C)', 'Higher (~135 °C)'], ['Strength', 'Flexible, soft', 'Rigid, hard'], ['Uses', 'Plastic bags, film, squeeze bottles', 'Pipes, crates, hard bottles, fuel tanks']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• When drawing a repeat unit, always include the bonds extending from each end of the bracket — these show the chain continues.\n• To find the monomer from a repeat unit: locate the C–C backbone bond inside the bracket and convert it to C=C; remove any substituents that were added during polymerisation (none in addition polymerisation).\n• "No other product" is key to addition polymerisation — distinguishes it from condensation polymerisation (which releases H₂O or HCl).'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Drawing the repeat unit without the extension bonds — it must show that the chain continues.\n• Confusing addition polymerisation (no small molecule released) with condensation polymerisation (H₂O or HCl released).\n• Writing the polymer formula without the n subscript — n is essential to indicate it is a polymer.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define addition polymerisation and write a general equation.',
        checked: false
      }, {
        text: 'I can draw the repeat unit of poly(ethene), poly(propene) and PVC from their monomers.',
        checked: false
      }, {
        text: 'I can deduce the monomer from a given repeat unit by inserting a C=C.',
        checked: false
      }, {
        text: 'I can name and give uses for at least five common addition polymers.',
        checked: false
      }, {
        text: 'I can compare LDPE and HDPE in terms of structure, properties and uses.',
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
      text: 'Understand: Addition polymerisation: many alkene monomers join via C=C bonds. No by-products, 100% atom economy.\n\nApply: Draw 3 repeat units of poly(chloroethene). Name the polymer.\n\nAnalyze: How does monomer structure affect polymer properties? Compare PE with PVC.\n\nEvaluate: Addition polymers are non-biodegradable. Is recyclability a sufficient solution?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Addition polymerisation: n alkene monomers → polymer; C=C opens → C–C backbone; no other product. Repeat unit drawn in brackets with extension bonds and subscript n. Common polymers: poly(ethene), poly(propene), PVC, PTFE, polystyrene. LDPE (branched, flexible, lower density) vs HDPE (linear, rigid, higher density, higher m.p.).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-poly',
      prompt: 'Define addition polymerisation. What happens to the C=C bond?'
    }, {
      id: 'cue-2',
      blockId: 'table-polymers',
      prompt: 'Name the monomer of PVC and PTFE, and give one use for each polymer.'
    }, {
      id: 'cue-3',
      blockId: 'callout-we2',
      prompt: 'How do you deduce the monomer from a given repeat unit?'
    }, {
      id: 'cue-4',
      blockId: 'table-pe',
      prompt: 'Compare LDPE and HDPE: structure, density and uses.'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'How does addition polymerisation differ from condensation polymerisation?'
    }],
    summaryText: 'Addition polymerisation: n(alkene) → polymer; C=C → C–C; no other product. Repeat unit in brackets with n. Monomer from repeat unit: insert C=C. LDPE branched/flexible; HDPE linear/rigid.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Addition polymerisation is required for Topic 5 Alkenes.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['polymerisation', 'polymers', 'alkenes']
  }]
};