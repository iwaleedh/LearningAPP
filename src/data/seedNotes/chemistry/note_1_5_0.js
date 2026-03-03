export const note_chemistry_1_5_0 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'State the general formula of alkenes; describe the structure and bonding of the C=C double bond; explain what unsaturation means and calculate the degree of unsaturation.'
    }
  }, {
    id: 'h-definition',
    type: 'heading',
    data: {
      text: 'Alkenes — Definition and General Formula',
      level: 2
    }
  }, {
    id: 'callout-key-alkene',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Alkene Definition',
      text: 'Alkenes are unsaturated hydrocarbons containing at least one carbon–carbon double bond (C=C). The simplest alkenes have one C=C and the general formula CₙH₂ₙ (where n ≥ 2).'
    }
  }, {
    id: 'table-alkenes',
    type: 'comparisonTable',
    data: {
      caption: 'First six alkenes (one C=C, straight chain)',
      headers: ['n', 'Name', 'Molecular formula', 'Structural formula', 'Boiling point / °C'],
      rows: [['2', 'Ethene', 'C₂H₄', 'CH₂=CH₂', '−104'], ['3', 'Propene', 'C₃H₆', 'CH₂=CHCH₃', '−47'], ['4', 'But-1-ene', 'C₄H₈', 'CH₂=CHCH₂CH₃', '−6'], ['4', 'But-2-ene', 'C₄H₈', 'CH₃CH=CHCH₃', '+4'], ['5', 'Pent-1-ene', 'C₅H₁₀', 'CH₂=CH(CH₂)₂CH₃', '+30'], ['6', 'Hex-1-ene', 'C₆H₁₂', 'CH₂=CH(CH₂)₃CH₃', '+63']]
    }
  }, {
    id: 'h-unsaturation',
    type: 'heading',
    data: {
      text: 'Unsaturation',
      level: 2
    }
  }, {
    id: 'callout-key-unsat',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Unsaturation — Definition',
      text: 'An unsaturated compound contains one or more C=C or C≡C multiple bonds (or rings). It does NOT contain the maximum possible number of hydrogen atoms for its carbon skeleton. Alkenes are unsaturated; alkanes are saturated.'
    }
  }, {
    id: 'p-unsat',
    type: "list",
    data: {
      style: "unordered",
      items: ["Compared to the equivalent alkane (C\u2099H\u2082\u2099\u208A\u2082), each alkene with one C=C has two fewer hydrogen atoms (C\u2099H\u2082\u2099).", "This \"missing\" pair of hydrogens corresponds to one <strong>degree of unsaturation</strong> (or Index of Hydrogen Deficiency, IHD = 1)."]
    }
  }, {
    id: 'eq-ihd',
    type: 'equation',
    data: {
      html: 'IHD = <span class="nb-frac"><span class="nb-num">2C + 2 − H</span><span class="nb-den">2</span></span>',
      caption: 'For a hydrocarbon CₙHₘ. Each C=C or ring = IHD of 1; each C≡C = IHD of 2.'
    }
  }, {
    id: 'callout-worked-ihd',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — IHD of C₄H₈',
      text: 'IHD = (2×4 + 2 − 8) / 2 = (10 − 8) / 2 = 1\n\nIHD = 1 → one degree of unsaturation.\nPossibilities: one C=C (alkene) OR one ring (cycloalkane).\nBoth but-1-ene and cyclobutane have the formula C₄H₈.'
    }
  }, {
    id: 'h-bonding',
    type: 'heading',
    data: {
      text: 'Bonding in Alkenes — The C=C Double Bond',
      level: 2
    }
  }, {
    id: 'p-bonding',
    type: "list",
    data: {
      style: "unordered",
      items: ["The C=C double bond consists of two components: a <strong>sigma (\u03C3) bond</strong> formed by direct (head-on) overlap of sp\xB2 hybrid orbitals, and a <strong>pi (\u03C0) bond</strong> formed by sideways overlap of unhybridised p orbitals above and below the plane of the molecule."]
    }
  }, {
    id: 'list-bonding',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Each C in C=C is <strong>sp² hybridised</strong> → three σ bonds in a plane at 120° (trigonal planar geometry).', 'The unhybridised p orbital on each C overlaps sideways → forms the π bond.', 'The π bond lies <strong>above and below</strong> the molecular plane → region of high electron density.', 'Bond angle around C=C: approximately <strong>120°</strong> (trigonal planar).', '<strong>No rotation</strong> about C=C: rotating would break the π bond (requires ~270 kJ mol⁻¹) → this is why geometric isomers exist.', 'C=C bond length: ~134 pm (shorter than C–C at ~154 pm due to double bond).', 'C=C bond enthalpy: ~612 kJ mol⁻¹ (stronger than C–C at ~347 kJ mol⁻¹, but not twice as strong — π bond weaker than σ).']
    }
  }, {
    id: 'svg-ethene',
    type: 'svg',
    data: {
      svg: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="190" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#374151">Bonding in Ethene (C₂H₄)</text>
  <!-- sigma framework -->
  <!-- C atoms -->
  <circle cx="140" cy="110" r="18" fill="#6366f1" opacity="0.85"/>
  <text x="140" y="115" text-anchor="middle" font-size="13" fill="white" font-weight="bold">C</text>
  <circle cx="240" cy="110" r="18" fill="#6366f1" opacity="0.85"/>
  <text x="240" y="115" text-anchor="middle" font-size="white" font-size="13" fill="white" font-weight="bold">C</text>
  <!-- C=C double bond -->
  <line x1="158" y1="106" x2="222" y2="106" stroke="#374151" stroke-width="2.5"/>
  <line x1="158" y1="114" x2="222" y2="114" stroke="#374151" stroke-width="2.5"/>
  <text x="190" y="100" text-anchor="middle" font-size="10" fill="#374151">σ bond</text>
  <text x="190" y="130" text-anchor="middle" font-size="10" fill="#4f46e5">π bond (p orbital overlap)</text>
  <!-- H atoms on left C -->
  <circle cx="90" cy="75" r="12" fill="#fbbf24"/>
  <text x="90" y="80" text-anchor="middle" font-size="11" fill="#1f2937">H</text>
  <line x1="102" y1="82" x2="125" y2="98" stroke="#374151" stroke-width="1.8"/>
  <circle cx="90" cy="145" r="12" fill="#fbbf24"/>
  <text x="90" y="150" text-anchor="middle" font-size="11" fill="#1f2937">H</text>
  <line x1="102" y1="138" x2="125" y2="122" stroke="#374151" stroke-width="1.8"/>
  <!-- H atoms on right C -->
  <circle cx="290" cy="75" r="12" fill="#fbbf24"/>
  <text x="290" y="80" text-anchor="middle" font-size="11" fill="#1f2937">H</text>
  <line x1="278" y1="82" x2="255" y2="98" stroke="#374151" stroke-width="1.8"/>
  <circle cx="290" cy="145" r="12" fill="#fbbf24"/>
  <text x="290" y="150" text-anchor="middle" font-size="11" fill="#1f2937">H</text>
  <line x1="278" y1="138" x2="255" y2="122" stroke="#374151" stroke-width="1.8"/>
  <!-- pi cloud indication -->
  <ellipse cx="190" cy="110" rx="55" ry="14" fill="#a5b4fc" opacity="0.35"/>
  <!-- angle label -->
  <text x="155" y="75" font-size="10" fill="#6b7280">120°</text>
  <!-- Labels -->
  <text x="190" y="185" text-anchor="middle" font-size="11" fill="#374151">Trigonal planar; bond angles 120°; sp² hybridisation</text>
  <text x="190" y="200" text-anchor="middle" font-size="11" fill="#4f46e5">π bond = sideways p-orbital overlap (above &amp; below plane)</text>
</svg>`,
      caption: 'Ethene structure: sp² hybridised carbons, 120° bond angles, σ bond + π bond in C=C.'
    }
  }, {
    id: 'h-properties',
    type: 'heading',
    data: {
      text: 'Physical Properties of Alkenes',
      level: 2
    }
  }, {
    id: 'table-properties',
    type: 'comparisonTable',
    data: {
      caption: 'Physical properties of alkenes vs alkanes',
      headers: ['Property', 'Alkenes', 'Comparison with alkanes'],
      rows: [['Boiling point', 'Increases with chain length', 'Very similar to alkanes of same Mr — both have London forces only'], ['Solubility in water', 'Insoluble', 'Same as alkanes — non-polar, cannot hydrogen bond with water'], ['Solubility in organic solvents', 'Soluble', 'Same as alkanes — "like dissolves like"'], ['State at r.t.p.', 'C₂–C₄ gas; C₅+ liquid', 'Same pattern as alkanes'], ['Reactivity', 'Much more reactive than alkanes', 'π bond is high electron density → attacked by electrophiles']]
    }
  }, {
    id: 'h-reactivity',
    type: 'heading',
    data: {
      text: 'Why Are Alkenes More Reactive Than Alkanes?',
      level: 2
    }
  }, {
    id: 'p-reactivity',
    type: "list",
    data: {
      style: "unordered",
      items: ["The \u03C0 bond in alkenes is a region of <strong>high electron density</strong> above and below the molecular plane.", "This makes it a target for <strong>electrophiles</strong> (electron-deficient species).", "The \u03C0 bond is also weaker than a \u03C3 bond (easier to break) \u2014 its electrons are further from the nuclei and more loosely held.", "This is why alkenes undergo <strong>electrophilic addition</strong> reactions, while alkanes (no \u03C0 bond) are largely unreactive."]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• Alkene general formula = CₙH₂ₙ — same as cycloalkanes. Distinguish them by the C=C in the name/structure.\n• IHD of 1 means either one C=C OR one ring — always state both possibilities.\n• Bond angles in alkenes are 120° (sp²), NOT 109.5° (sp³ as in alkanes).\n• The π bond is responsible for alkene reactivity — always mention it when explaining why alkenes react with electrophiles.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Saying C=C "has two sigma bonds" — it has ONE sigma bond and ONE pi bond.\n• Confusing alkene (CₙH₂ₙ, open chain with C=C) with cycloalkane (CₙH₂ₙ, ring, no C=C).\n• Stating bond angles in alkenes as 109.5° — the correct value around the C=C is 120°.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can state the general formula of alkenes (CₙH₂ₙ) and name/write formulae for ethene through hex-1-ene.',
        checked: false
      }, {
        text: 'I can define unsaturation and calculate IHD from a molecular formula.',
        checked: false
      }, {
        text: 'I can describe the σ and π components of the C=C double bond.',
        checked: false
      }, {
        text: 'I can state the bond angle around C=C (120°) and explain sp² hybridisation.',
        checked: false
      }, {
        text: 'I can explain why alkenes are more reactive than alkanes using the π bond.',
        checked: false
      }, {
        text: 'I can explain why there is restricted rotation about C=C.',
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
      text: 'Understand: Alkenes contain C=C (one σ + one π bond). The π bond creates electron-rich region making alkenes more reactive than alkanes.\n\nApply: Draw but-2-ene. Explain why alkenes have general formula CₙH₂ₙ.\n\nAnalyze: Why is ethene planar around C=C but ethane rotates freely? Relate to p orbital overlap.\n\nEvaluate: "Alkenes are more reactive than alkanes." Is this always true? Consider thermodynamic vs kinetic reactivity.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Alkenes (CₙH₂ₙ) are unsaturated hydrocarbons with at least one C=C double bond (σ + π). The sp² hybridised C atoms are trigonal planar with 120° bond angles. The π bond (sideways p-orbital overlap, above and below the plane) is a region of high electron density that makes alkenes reactive towards electrophiles. No rotation about C=C → geometric isomerism possible. IHD of 1 = one C=C or one ring.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-alkene',
      prompt: 'What is the general formula of alkenes and what does unsaturated mean?'
    }, {
      id: 'cue-2',
      blockId: 'list-bonding',
      prompt: 'Describe the two components of the C=C double bond and the bond angle around it.'
    }, {
      id: 'cue-3',
      blockId: 'callout-worked-ihd',
      prompt: 'Calculate the IHD of C₄H₈ and state what it tells you.'
    }, {
      id: 'cue-4',
      blockId: 'p-reactivity',
      prompt: 'Why are alkenes more reactive than alkanes?'
    }, {
      id: 'cue-5',
      blockId: 'list-bonding',
      prompt: 'Why is there no free rotation about the C=C double bond?'
    }],
    summaryText: 'Alkenes CₙH₂ₙ: one C=C (σ + π bond), sp² hybridised, 120° bond angles. π bond = high e⁻ density → electrophilic attack. No rotation about C=C → geometric isomers. IHD = (2C+2−H)/2.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Alkene structure, bonding and unsaturation are required for Topic 5.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['alkenes', 'unsaturation', 'pi bond']
  }]
};