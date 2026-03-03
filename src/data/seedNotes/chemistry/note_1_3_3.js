export const note_chemistry_1_3_3 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the giant ionic lattice structure; explain how the structure accounts for the physical properties of ionic compounds including melting point, electrical conductivity, solubility and brittleness.'
    }
  }, {
    id: 'h-lattice',
    type: 'heading',
    data: {
      text: 'The Giant Ionic Lattice',
      level: 2
    }
  }, {
    id: 'p-lattice',
    type: "list",
    data: {
      style: "unordered",
      items: ["Ionic compounds exist as giant ionic lattices \u2014 regular, three-dimensional arrangements of oppositely charged ions held together by strong electrostatic forces of attraction.", "There are no discrete molecules; the lattice extends in all directions.", "Each ion is surrounded by a fixed number of oppositely charged ions (its coordination number)."]
    }
  }, {
    id: 'svg-lattice',
    type: 'svg',
    data: {
      caption: 'The NaCl giant ionic lattice — each Na⁺ is surrounded by 6 Cl⁻ and each Cl⁻ by 6 Na⁺ (coordination number 6)',
      svg: `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <defs>
    <marker id="a3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#9ca3af"/></marker>
  </defs>
  <!-- 3D-ish NaCl lattice — 3×3×2 representation -->
  <!-- Layer 1 (back) -->
  <circle cx="80" cy="140" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="150" cy="110" r="14" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <circle cx="220" cy="140" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="150" cy="170" r="14" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <!-- Layer 2 (front) -->
  <circle cx="150" cy="50" r="14" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <circle cx="220" cy="80" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="290" cy="110" r="14" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <circle cx="290" cy="50" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="220" cy="20" r="14" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <!-- Bonds -->
  <line x1="80" y1="140" x2="150" y2="110" stroke="#9ca3af" stroke-width="1"/>
  <line x1="150" y1="110" x2="220" y2="140" stroke="#9ca3af" stroke-width="1"/>
  <line x1="80" y1="140" x2="150" y2="170" stroke="#9ca3af" stroke-width="1"/>
  <line x1="150" y1="170" x2="220" y2="140" stroke="#9ca3af" stroke-width="1"/>
  <line x1="150" y1="110" x2="150" y2="170" stroke="#9ca3af" stroke-width="1"/>
  <line x1="150" y1="50" x2="220" y2="80" stroke="#9ca3af" stroke-width="1"/>
  <line x1="220" y1="80" x2="290" y2="110" stroke="#9ca3af" stroke-width="1"/>
  <line x1="290" y1="50" x2="220" y2="20" stroke="#9ca3af" stroke-width="1"/>
  <line x1="150" y1="50" x2="220" y2="20" stroke="#9ca3af" stroke-width="1"/>
  <line x1="220" y1="80" x2="220" y2="140" stroke="#9ca3af" stroke-width="1"/>
  <line x1="150" y1="110" x2="150" y2="50" stroke="#9ca3af" stroke-width="1"/>
  <line x1="290" y1="50" x2="290" y2="110" stroke="#9ca3af" stroke-width="1"/>
  <!-- Labels -->
  <circle cx="30" cy="190" r="10" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="45" y="195" fill="#1e40af" font-size="11">Na⁺</text>
  <circle cx="30" cy="215" r="7" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <text x="45" y="220" fill="#991b1b" font-size="11">Cl⁻</text>
  <text x="190" y="235" text-anchor="middle" fill="#6b7280" font-size="10">Coordination number = 6 for both ions</text>
</svg>`
    }
  }, {
    id: 'h-properties',
    type: 'heading',
    data: {
      text: 'Physical Properties Explained by Structure',
      level: 2
    }
  }, {
    id: 'h-mp',
    type: 'heading',
    data: {
      text: 'High Melting and Boiling Points',
      level: 3
    }
  }, {
    id: 'p-mp',
    type: "list",
    data: {
      style: "unordered",
      items: ["Ionic compounds have high melting and boiling points because the giant lattice is held together by many strong electrostatic forces of attraction between oppositely charged ions.", "A large amount of energy is required to overcome these forces and separate the ions."]
    }
  }, {
    id: 'h-conduct',
    type: 'heading',
    data: {
      text: 'Electrical Conductivity',
      level: 3
    }
  }, {
    id: 'list-conduct',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Solid state: does NOT conduct — ions are fixed in lattice positions, cannot move to carry charge', 'Molten state: CONDUCTS — ions are free to move and migrate to electrodes', 'Aqueous solution: CONDUCTS — ions dissociate and are free to move through the solution']
    }
  }, {
    id: 'h-brittle',
    type: 'heading',
    data: {
      text: 'Brittleness',
      level: 3
    }
  }, {
    id: 'p-brittle',
    type: "list",
    data: {
      style: "unordered",
      items: ["Ionic compounds are brittle.", "When a force is applied, layers of ions shift slightly.", "This brings ions of the same charge alongside each other, causing strong electrostatic repulsion that shatters the lattice.", "Metals, by contrast, can deform because layers of metal ions can slide over each other through the delocalised electron sea."]
    }
  }, {
    id: 'h-solubility',
    type: 'heading',
    data: {
      text: 'Solubility in Water',
      level: 3
    }
  }, {
    id: 'p-solubility',
    type: "list",
    data: {
      style: "unordered",
      items: ["Many ionic compounds dissolve in water.", "Polar water molecules surround and stabilise individual ions (hydration) \u2014 the oxygen end of water (\u03B4\u2212) attracts cations, and the hydrogen end (\u03B4+) attracts anions.", "The energy released by hydration compensates for the energy needed to break the lattice.", "Non-polar solvents cannot stabilise the ions, so ionic compounds are generally insoluble in them."]
    }
  }, {
    id: 'table-properties',
    type: 'comparisonTable',
    data: {
      caption: 'Summary of ionic compound properties and explanations',
      headers: ['Property', 'Observation', 'Explanation'],
      rows: [['Melting point', 'High (e.g. NaCl 801°C)', 'Many strong electrostatic forces in lattice'], ['Electrical conductivity', 'Only when molten or dissolved', 'Ions fixed in solid; free to move when molten/dissolved'], ['Brittleness', 'Shatters on impact', 'Layer shift → like charges repel → lattice breaks'], ['Solubility', 'Dissolves in polar solvents', 'Water molecules hydrate and stabilise ions'], ['Hardness', 'Hard but brittle', 'Strong forces resist deformation but fracture sharply']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — use specific language',
      text: 'Always say "electrostatic forces of attraction between oppositely charged ions" rather than just "ionic bonds". Examiners reward specific language. Also state that the lattice is "giant" (extends throughout the whole crystal) rather than just "a structure".'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Describe the giant ionic lattice structure of NaCl',
        checked: false
      }, {
        text: 'Explain why ionic compounds have high melting points',
        checked: false
      }, {
        text: 'Explain why ionic compounds conduct electricity when molten but not solid',
        checked: false
      }, {
        text: 'Explain why ionic compounds are brittle',
        checked: false
      }, {
        text: 'Explain why many ionic compounds dissolve in water',
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
      text: 'Understand: In giant ionic lattices, strong electrostatic attractions in all directions explain high m.p. and hardness.\n\nApply: Explain why NaCl dissolves in water but not hexane using ion-dipole interactions.\n\nAnalyze: NaCl has 6:6 coordination; CsCl has 8:8. How does ionic radius ratio determine crystal structure?\n\nEvaluate: Explain the molecular-level reason for brittleness when stress is applied to an ionic crystal.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Giant ionic lattice: regular 3D array of oppositely charged ions, held by strong electrostatic forces, no discrete molecules. Properties: high mp (many strong forces), conducts only when molten/dissolved (ions then free), brittle (layer shift → like-charge repulsion), soluble in polar solvents (hydration by water). NaCl has coordination number 6.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'p-lattice',
      prompt: 'Describe the structure of a giant ionic lattice.'
    }, {
      id: 'cue-2',
      blockId: 'p-mp',
      prompt: 'Why do ionic compounds have high melting points?'
    }, {
      id: 'cue-3',
      blockId: 'list-conduct',
      prompt: 'Why does solid NaCl not conduct electricity, but molten NaCl does?'
    }, {
      id: 'cue-4',
      blockId: 'p-brittle',
      prompt: 'Explain at the particle level why ionic compounds are brittle.'
    }, {
      id: 'cue-5',
      blockId: 'p-solubility',
      prompt: 'Explain why ionic compounds dissolve in water but not in non-polar solvents.'
    }],
    summaryText: 'Giant ionic lattice: 3D regular array, strong electrostatic forces. High mp (many strong forces). Conducts when molten/dissolved (free ions). Brittle (layer shift → repulsion). Soluble in water (hydration).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Giant ionic lattice, properties of ionic compounds',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['ionic bonding', 'lattice structure']
  }]
};