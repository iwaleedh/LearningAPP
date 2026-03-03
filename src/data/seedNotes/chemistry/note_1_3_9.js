export const note_chemistry_1_3_9 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Use VSEPR theory to predict and explain the shapes of molecules and ions with up to 6 electron pairs around the central atom; state bond angles and explain the effect of lone pairs.'
    }
  }, {
    id: 'h-vsepr',
    type: 'heading',
    data: {
      text: 'VSEPR Theory',
      level: 2
    }
  }, {
    id: 'p-vsepr',
    type: "list",
    data: {
      style: "unordered",
      items: ["Valence Shell Electron Pair Repulsion (VSEPR) theory states that electron pairs in the valence shell of an atom repel each other and arrange themselves to minimise repulsion.", "The shape of the molecule is determined by the positions of the bonding pairs (the lone pairs are not \"visible\" in the shape but affect it)."]
    }
  }, {
    id: 'callout-key-rules',
    type: 'callout',
    data: {
      style: 'key',
      title: 'VSEPR repulsion order',
      text: 'Lone pair–lone pair (lp–lp) repulsion > lone pair–bonding pair (lp–bp) repulsion > bonding pair–bonding pair (bp–bp) repulsion.\n\nEach lone pair compresses the bond angles by approximately 2° compared to the ideal geometry.'
    }
  }, {
    id: 'h-shapes',
    type: 'heading',
    data: {
      text: 'Common Molecular Shapes',
      level: 2
    }
  }, {
    id: 'table-shapes',
    type: 'comparisonTable',
    data: {
      caption: 'Molecular shapes predicted by VSEPR',
      headers: ['Bonding pairs', 'Lone pairs', 'Shape', 'Bond angle', 'Example'],
      rows: [['2', '0', 'Linear', '180°', 'CO₂, BeCl₂'], ['3', '0', 'Trigonal planar', '120°', 'BF₃, SO₃, AlCl₃'], ['2', '1', 'Bent/V-shaped', '<120° (~117°)', 'SO₂, SnCl₂'], ['4', '0', 'Tetrahedral', '109.5°', 'CH₄, CCl₄, NH₄⁺'], ['3', '1', 'Trigonal pyramidal', '<109.5° (~107°)', 'NH₃, PCl₃'], ['2', '2', 'Bent/V-shaped', '<107° (~104.5°)', 'H₂O, H₂S'], ['5', '0', 'Trigonal bipyramidal', '90°/120°', 'PCl₅'], ['6', '0', 'Octahedral', '90°', 'SF₆'], ['4', '2', 'Square planar', '90°', 'XeF₄']]
    }
  }, {
    id: 'svg-shapes',
    type: 'svg',
    data: {
      caption: 'Shapes of CH₄ (tetrahedral), NH₃ (trigonal pyramidal) and H₂O (bent)',
      svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- CH4 tetrahedral -->
  <text x="60" y="18" text-anchor="middle" font-weight="bold" fill="#374151">CH₄ — Tetrahedral</text>
  <circle cx="60" cy="80" r="14" fill="#d1d5db" stroke="#374151" stroke-width="1.5"/>
  <text x="60" y="84" text-anchor="middle" fill="#111827" font-size="10">C</text>
  <line x1="60" y1="66" x2="60" y2="40" stroke="#374151" stroke-width="1.5"/>
  <circle cx="60" cy="34" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="60" y="38" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <line x1="48" y1="88" x2="22" y2="108" stroke="#374151" stroke-width="1.5"/>
  <circle cx="16" cy="114" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="16" y="118" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <line x1="72" y1="88" x2="98" y2="108" stroke="#374151" stroke-width="1.5"/>
  <circle cx="104" cy="114" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="104" y="118" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <line x1="60" y1="94" x2="60" y2="140" stroke="#374151" stroke-width="2" stroke-dasharray="5,3"/>
  <circle cx="60" cy="146" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="60" y="150" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <text x="60" y="175" text-anchor="middle" fill="#4f46e5" font-size="10">109.5°  4bp 0lp</text>

  <!-- NH3 trigonal pyramidal -->
  <text x="210" y="18" text-anchor="middle" font-weight="bold" fill="#374151">NH₃ — Trigonal pyramidal</text>
  <circle cx="210" cy="80" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="210" y="84" text-anchor="middle" fill="#1e3a8a" font-size="10">N</text>
  <ellipse cx="210" cy="58" rx="12" ry="7" fill="#fde68a" stroke="#d97706" stroke-width="1" opacity="0.8"/>
  <text x="210" y="53" text-anchor="middle" fill="#92400e" font-size="9">lp</text>
  <line x1="198" y1="88" x2="172" y2="114" stroke="#374151" stroke-width="1.5"/>
  <circle cx="166" cy="120" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="166" y="124" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <line x1="222" y1="88" x2="248" y2="114" stroke="#374151" stroke-width="1.5"/>
  <circle cx="254" cy="120" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="254" y="124" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <line x1="210" y1="94" x2="210" y2="140" stroke="#374151" stroke-width="2" stroke-dasharray="5,3"/>
  <circle cx="210" cy="146" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="210" y="150" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <text x="210" y="175" text-anchor="middle" fill="#4f46e5" font-size="10">107°  3bp 1lp</text>

  <!-- H2O bent -->
  <text x="360" y="18" text-anchor="middle" font-weight="bold" fill="#374151">H₂O — Bent</text>
  <circle cx="360" cy="90" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="360" y="94" text-anchor="middle" fill="#1e3a8a" font-size="10">O</text>
  <ellipse cx="348" cy="68" rx="10" ry="6" fill="#fde68a" stroke="#d97706" stroke-width="1" opacity="0.8"/>
  <text x="348" y="64" text-anchor="middle" fill="#92400e" font-size="9">lp</text>
  <ellipse cx="372" cy="68" rx="10" ry="6" fill="#fde68a" stroke="#d97706" stroke-width="1" opacity="0.8"/>
  <text x="372" y="64" text-anchor="middle" fill="#92400e" font-size="9">lp</text>
  <line x1="348" y1="98" x2="322" y2="128" stroke="#374151" stroke-width="1.5"/>
  <circle cx="316" cy="134" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="316" y="138" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <line x1="372" y1="98" x2="398" y2="128" stroke="#374151" stroke-width="1.5"/>
  <circle cx="404" cy="134" r="10" fill="#fef9c3" stroke="#d97706" stroke-width="1.2"/>
  <text x="404" y="138" text-anchor="middle" fill="#92400e" font-size="9">H</text>
  <text x="360" y="175" text-anchor="middle" fill="#4f46e5" font-size="10">104.5°  2bp 2lp</text>
</svg>`
    }
  }, {
    id: 'h-lp-effect',
    type: 'heading',
    data: {
      text: 'Effect of Lone Pairs on Bond Angles',
      level: 2
    }
  }, {
    id: 'p-lp-effect',
    type: "list",
    data: {
      style: "unordered",
      items: ["Lone pairs occupy more space than bonding pairs because they are closer to the central nucleus and not constrained by a second atom.", "Each lone pair compresses the surrounding bond angles by approximately 2\xB0."]
    }
  }, {
    id: 'list-lp',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['CH₄: 4 bp, 0 lp → tetrahedral, 109.5°', 'NH₃: 3 bp, 1 lp → trigonal pyramidal, ~107° (reduced by 1 lone pair)', 'H₂O: 2 bp, 2 lp → bent, ~104.5° (reduced by 2 lone pairs)', 'Each lone pair reduces bond angle by ~2° from ideal tetrahedral']
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — always state the number of bond pairs and lone pairs',
      text: 'In exam answers:\n1. State the number of bonding pairs and lone pairs around the central atom\n2. Name the shape (not just the angle)\n3. State the bond angle\n4. Explain any deviation from ideal: "The lone pair repels the bonding pairs more strongly, reducing the H–O–H angle to 104.5°."'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — shape vs electron geometry',
      text: 'The shape (name) of a molecule describes only the positions of the ATOMS, not the lone pairs. NH₃ has a tetrahedral electron geometry (4 pairs) but a trigonal pyramidal SHAPE (only 3 atoms around N). Do not call NH₃ "tetrahedral".'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'State the VSEPR repulsion order (lp–lp > lp–bp > bp–bp)',
        checked: false
      }, {
        text: 'Predict the shape and bond angle of CH₄, NH₃, H₂O, BF₃, CO₂',
        checked: false
      }, {
        text: 'Explain why the bond angle in NH₃ is less than in CH₄',
        checked: false
      }, {
        text: 'Predict shapes of ions such as NH₄⁺, H₃O⁺',
        checked: false
      }, {
        text: 'Draw 3D representations using wedge-and-dash notation',
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
      text: 'Understand: VSEPR theory predicts shapes by minimising electron pair repulsion. Lone pairs repel more than bonding pairs.\n\nApply: Predict shapes and bond angles of BF₃, CH₄, NH₃, H₂O. Explain the angle decrease.\n\nAnalyze: SF₆ is octahedral but XeF₄ is square planar despite 6 electron pairs. Explain lone pair positioning.\n\nEvaluate: VSEPR fails for some transition metal complexes. Discuss its limitations and when more advanced models are needed.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'VSEPR: electron pairs repel → arrange to minimise repulsion. lp–lp > lp–bp > bp–bp. Each lp reduces bond angle by ~2°. Shapes: 2bp=linear (180°), 3bp=trigonal planar (120°), 4bp=tetrahedral (109.5°), 3bp+1lp=trigonal pyramidal (107°), 2bp+2lp=bent (104.5°). Shape = atom positions only (not lone pairs).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-rules',
      prompt: 'State the order of electron pair repulsions in VSEPR theory.'
    }, {
      id: 'cue-2',
      blockId: 'table-shapes',
      prompt: 'State the shape and bond angle of a molecule with 4 bonding pairs and 0 lone pairs.'
    }, {
      id: 'cue-3',
      blockId: 'list-lp',
      prompt: 'Explain why the bond angle in H₂O (104.5°) is less than in CH₄ (109.5°).'
    }, {
      id: 'cue-4',
      blockId: 'table-shapes',
      prompt: 'What is the shape and bond angle of NH₃? How many lone pairs does N have?'
    }, {
      id: 'cue-5',
      blockId: 'callout-warning',
      prompt: 'What is the difference between the shape and the electron geometry of NH₃?'
    }],
    summaryText: 'VSEPR: pairs repel, minimise repulsion. lp > bp in repulsion. Each lp reduces angle ~2°. 4bp=tetrahedral 109.5°; 3bp+1lp=pyramidal 107°; 2bp+2lp=bent 104.5°. Shape = atom positions only.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'VSEPR theory, molecular shapes, bond angles',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['VSEPR', 'molecular shape', 'bond angles']
  }]
};