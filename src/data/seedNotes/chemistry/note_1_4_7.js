export const note_chemistry_1_4_7 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'State the general formulae of alkanes and cycloalkanes; describe their structures, bonding and physical properties.'
    }
  }, {
    id: 'h-alkanes',
    type: 'heading',
    data: {
      text: 'Alkanes — Structure and Formula',
      level: 2
    }
  }, {
    id: 'callout-key-alkane',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Alkane Definition',
      text: 'Alkanes are saturated hydrocarbons containing only carbon–carbon single bonds (C–C) and carbon–hydrogen bonds (C–H). They have the general formula CₙH₂ₙ₊₂ where n is the number of carbon atoms.'
    }
  }, {
    id: 'table-alkanes',
    type: 'comparisonTable',
    data: {
      caption: 'First ten straight-chain alkanes',
      headers: ['n', 'Name', 'Molecular formula', 'Structural formula', 'Boiling point / °C'],
      rows: [['1', 'Methane', 'CH₄', 'CH₄', '−162'], ['2', 'Ethane', 'C₂H₆', 'CH₃CH₃', '−89'], ['3', 'Propane', 'C₃H₈', 'CH₃CH₂CH₃', '−42'], ['4', 'Butane', 'C₄H₁₀', 'CH₃(CH₂)₂CH₃', '−1'], ['5', 'Pentane', 'C₅H₁₂', 'CH₃(CH₂)₃CH₃', '+36'], ['6', 'Hexane', 'C₆H₁₄', 'CH₃(CH₂)₄CH₃', '+69'], ['7', 'Heptane', 'C₇H₁₆', 'CH₃(CH₂)₅CH₃', '+98'], ['8', 'Octane', 'C₈H₁₈', 'CH₃(CH₂)₆CH₃', '+126'], ['9', 'Nonane', 'C₉H₂₀', 'CH₃(CH₂)₇CH₃', '+151'], ['10', 'Decane', 'C₁₀H₂₂', 'CH₃(CH₂)₈CH₃', '+174']]
    }
  }, {
    id: 'h-bonding',
    type: 'heading',
    data: {
      text: 'Bonding in Alkanes',
      level: 2
    }
  }, {
    id: 'list-bonding',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['All bonds in alkanes are <strong>sigma (σ) bonds</strong> — formed by direct overlap of orbitals along the bond axis.', 'C–C bond angle: approximately <strong>109.5°</strong> (tetrahedral geometry around each carbon).', 'C–H bond angle: approximately <strong>109.5°</strong> (sp³ hybridisation).', 'All bonds are <strong>single bonds</strong> — no π bonds, no ring strain in straight chains.', 'Rotation is possible around C–C single bonds → conformational flexibility.']
    }
  }, {
    id: 'h-cycloalkanes',
    type: 'heading',
    data: {
      text: 'Cycloalkanes — Structure and Formula',
      level: 2
    }
  }, {
    id: 'callout-key-cyclo',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Cycloalkane Definition',
      text: 'Cycloalkanes are saturated hydrocarbons in which the carbon atoms form a ring. They have the general formula CₙH₂ₙ — the same as alkenes, because one CH₂ unit "uses up" two H atoms to form the ring.'
    }
  }, {
    id: 'table-cyclo',
    type: 'comparisonTable',
    data: {
      caption: 'Common cycloalkanes',
      headers: ['Name', 'Molecular formula', 'Ring size', 'Boiling point / °C', 'Notes'],
      rows: [['Cyclopropane', 'C₃H₆', '3', '+33', 'High ring strain (60° bond angles vs 109.5°); reactive'], ['Cyclobutane', 'C₄H₈', '4', '+12', 'Significant ring strain'], ['Cyclopentane', 'C₅H₁₀', '5', '+49', 'Moderate ring strain; relatively stable'], ['Cyclohexane', 'C₆H₁₂', '6', '+81', 'Very stable; chair conformation avoids ring strain'], ['Cycloheptane', 'C₇H₁₄', '7', '+119', 'Stable']]
    }
  }, {
    id: 'h-svgcyclohexane',
    type: 'svg',
    data: {
      svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <text x="160" y="20" text-anchor="middle" font-size="13" fill="#374151" font-weight="bold">Cyclohexane — chair conformation</text>
  <!-- Chair conformation of cyclohexane -->
  <!-- Approximate chair shape -->
  <polyline points="80,120 120,90 180,90 220,120 180,150 120,150 80,120" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="120" y1="90" x2="80" y2="120" stroke="#4f46e5" stroke-width="2.5"/>
  <line x1="180" y1="90" x2="220" y2="120" stroke="#4f46e5" stroke-width="2.5"/>
  <line x1="80" y1="120" x2="120" y2="150" stroke="#4f46e5" stroke-width="2.5"/>
  <line x1="220" y1="120" x2="180" y2="150" stroke="#4f46e5" stroke-width="2.5"/>
  <line x1="120" y1="150" x2="180" y2="150" stroke="#4f46e5" stroke-width="2.5"/>
  <!-- Bond angle labels -->
  <text x="160" y="175" text-anchor="middle" font-size="11" fill="#6b7280">Bond angles ~109.5° — no ring strain</text>
  <text x="160" y="190" text-anchor="middle" font-size="11" fill="#6b7280">C₆H₁₂ — most stable cycloalkane</text>
</svg>`,
      caption: 'Cyclohexane chair conformation — bond angles ≈109.5°, minimal ring strain.'
    }
  }, {
    id: 'h-physical',
    type: 'heading',
    data: {
      text: 'Physical Properties of Alkanes',
      level: 2
    }
  }, {
    id: 'p-physical',
    type: "list",
    data: {
      style: "unordered",
      items: ["Alkanes are non-polar molecules.", "Their only intermolecular forces are <strong>London dispersion forces</strong> (induced dipole\u2013induced dipole).", "These increase with molecular size (more electrons \u2192 stronger London forces)."]
    }
  }, {
    id: 'table-physical',
    type: 'comparisonTable',
    data: {
      caption: 'Trends in physical properties of straight-chain alkanes',
      headers: ['Property', 'Trend', 'Explanation'],
      rows: [['Boiling point', 'Increases with chain length', 'More electrons → stronger London forces → more energy needed to separate molecules'], ['Boiling point (branching)', 'Decreases with branching', 'Branched chains are more compact → smaller surface area → weaker London forces'], ['Melting point', 'Generally increases with Mr', 'More London forces; even-numbered chains pack more efficiently → higher m.p.'], ['Solubility in water', 'Insoluble', 'Non-polar — cannot form hydrogen bonds with water; "like dissolves like"'], ['Solubility in organic solvents', 'Soluble', 'Non-polar alkanes dissolve in non-polar solvents (London forces similar)'], ['Density', 'Low; less than water', 'Weak intermolecular forces; molecules not tightly packed'], ['Viscosity', 'Increases with chain length', 'Longer chains entangle more; greater friction between molecules']]
    }
  }, {
    id: 'h-saturated',
    type: 'heading',
    data: {
      text: 'Why "Saturated"?',
      level: 2
    }
  }, {
    id: 'p-saturated',
    type: "list",
    data: {
      style: "unordered",
      items: ["Alkanes are described as <strong>saturated</strong> because each carbon atom is bonded to the maximum possible number of hydrogen atoms \u2014 the molecule is \"full\" of hydrogen.", "There are no C=C or C\u2261C multiple bonds.", "This makes alkanes relatively unreactive compared to unsaturated compounds, as there is no \u03C0 bond for electrophiles to attack."]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tip',
      text: '• Alkanes: CₙH₂ₙ₊₂ (saturated, open chain)\n• Cycloalkanes: CₙH₂ₙ (saturated ring) — same formula as alkenes!\n• Both cycloalkanes and alkenes are isomers of each other for the same n.\n• Cyclohexane is the most stable cycloalkane due to its chair conformation (bond angles ≈109.5°).'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Confusing CₙH₂ₙ₊₂ (alkane) with CₙH₂ₙ (alkene/cycloalkane).\n• Saying alkanes are "completely unreactive" — they undergo combustion and free-radical substitution.\n• Forgetting that cycloalkane general formula is the same as alkene — both CₙH₂ₙ.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I know the general formula for alkanes (CₙH₂ₙ₊₂) and cycloalkanes (CₙH₂ₙ).',
        checked: false
      }, {
        text: 'I can name and write formulae for methane through decane.',
        checked: false
      }, {
        text: 'I can describe the bonding in alkanes (σ bonds, 109.5°, sp³).',
        checked: false
      }, {
        text: 'I can explain the trend in boiling points with chain length and branching.',
        checked: false
      }, {
        text: 'I can explain why alkanes are insoluble in water.',
        checked: false
      }, {
        text: 'I know why cyclohexane is more stable than cyclopropane.',
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
      text: 'Understand: Alkanes and cycloalkanes are saturated — only C–C and C–H σ bonds. General formulae reflect hydrogen saturation.\n\nApply: Draw cyclohexane and methylcyclopentane. Are they isomers? Explain.\n\nAnalyze: Why do cycloalkanes have formula CₙH₂ₙ (same as alkenes) despite being saturated?\n\nEvaluate: Cyclopropane is more reactive than cyclohexane. Explain using ring strain and bond angles.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Alkanes (CₙH₂ₙ₊₂) are saturated hydrocarbons with only C–C and C–H σ bonds at 109.5°. Cycloalkanes (CₙH₂ₙ) form rings — cyclohexane is most stable (chair conformation). Alkane boiling points increase with chain length (stronger London forces) and decrease with branching (less surface area). Alkanes are non-polar, insoluble in water.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-alkane',
      prompt: 'What is the general formula of alkanes and what does "saturated" mean?'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-cyclo',
      prompt: 'What is the general formula of cycloalkanes and why is it the same as alkenes?'
    }, {
      id: 'cue-3',
      blockId: 'table-physical',
      prompt: 'Why do boiling points increase with chain length in alkanes? Why does branching lower boiling point?'
    }, {
      id: 'cue-4',
      blockId: 'table-cyclo',
      prompt: 'Why is cyclopropane more reactive than cyclohexane?'
    }, {
      id: 'cue-5',
      blockId: 'list-bonding',
      prompt: 'What bond angles are found in alkanes and what type of hybridisation does this correspond to?'
    }],
    summaryText: 'Alkanes CₙH₂ₙ₊₂: saturated, only σ bonds, 109.5° bond angles. Cycloalkanes CₙH₂ₙ: same formula as alkenes. Boiling point ↑ with chain length (London forces), ↓ with branching. Non-polar, insoluble in water.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Alkane and cycloalkane formulae, bonding and properties are core content for Topic 4.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['alkanes', 'cycloalkanes']
  }]
};