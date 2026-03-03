export const note_chemistry_1_3_0 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the experimental evidence for the existence of ions, including electrolysis, ionic conductivity, and the properties of ionic compounds.'
    }
  }, {
    id: 'h-evidence',
    type: 'heading',
    data: {
      text: 'Evidence for Ionic Species',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Ionic compounds are made up of oppositely charged ions held together by strong electrostatic forces in a giant lattice structure.", "Several experimental observations provide direct evidence for the existence of ions in these compounds."]
    }
  }, {
    id: 'h-electrolysis',
    type: 'heading',
    data: {
      text: '1. Electrolysis',
      level: 2
    }
  }, {
    id: 'p-electrolysis',
    type: "list",
    data: {
      style: "unordered",
      items: ["When an ionic compound is melted or dissolved in water, it conducts electricity.", "During electrolysis, cations migrate to the negative electrode (cathode) and anions migrate to the positive electrode (anode), where they are discharged.", "This directed movement of charged particles is direct evidence for the presence of ions."]
    }
  }, {
    id: 'list-electrolysis',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Molten NaCl conducts electricity → Na⁺ moves to cathode (deposited as Na metal), Cl⁻ moves to anode (discharged as Cl₂ gas)', 'Solid NaCl does NOT conduct — ions are fixed in lattice positions', 'Aqueous NaCl conducts — ions are free to move in solution', 'Covalent compounds (e.g. sugar solution) do NOT conduct electricity — no ions present']
    }
  }, {
    id: 'h-conductivity',
    type: 'heading',
    data: {
      text: '2. Electrical Conductivity',
      level: 2
    }
  }, {
    id: 'table-conductivity',
    type: 'comparisonTable',
    data: {
      caption: 'Electrical conductivity of ionic and covalent compounds',
      headers: ['State', 'Ionic compound (e.g. NaCl)', 'Covalent compound (e.g. sugar)', 'Reason'],
      rows: [['Solid', 'Does NOT conduct', 'Does NOT conduct', 'No mobile charge carriers'], ['Molten', 'CONDUCTS', 'Does NOT conduct', 'Ionic: free ions; Covalent: no ions'], ['Aqueous', 'CONDUCTS', 'Does NOT conduct (usually)', 'Ionic: dissociated ions; Covalent: no ions']]
    }
  }, {
    id: 'h-properties',
    type: 'heading',
    data: {
      text: '3. Physical Properties as Evidence',
      level: 2
    }
  }, {
    id: 'list-properties',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['High melting and boiling points — strong electrostatic forces between oppositely charged ions require large amounts of energy to overcome', 'Brittleness — when struck, layers of ions shift so like charges align → strong repulsion shatters the lattice', 'Solubility in polar solvents (e.g. water) — polar water molecules can surround and separate the ions (hydration)', 'Insolubility in non-polar solvents — non-polar solvents cannot stabilise the separated ions']
    }
  }, {
    id: 'h-xray',
    type: 'heading',
    data: {
      text: '4. X-ray Crystallography',
      level: 2
    }
  }, {
    id: 'p-xray',
    type: "list",
    data: {
      style: "unordered",
      items: ["X-ray diffraction of ionic crystals reveals a regular, repeating lattice structure of alternating positive and negative ions at fixed positions.", "The inter-ionic distances and regular arrangement are consistent with strong electrostatic attraction between charged species."]
    }
  }, {
    id: 'callout-key',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key summary — four lines of evidence for ions',
      text: '1. Electrolysis: directed movement of particles to electrodes\n2. Conductivity: only when molten or dissolved (ions free to move)\n3. Physical properties: high mp, brittle, soluble in polar solvents\n4. X-ray crystallography: regular lattice of charged species confirmed'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — always explain WHY',
      text: 'In exam answers, do not just state that ionic compounds conduct when molten. Explain: "When molten, the ions are free to move and carry charge towards the electrodes." Always link the observation to the presence and movement of ions.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Describe what happens during electrolysis of molten NaCl',
        checked: false
      }, {
        text: 'Explain why solid ionic compounds do not conduct electricity',
        checked: false
      }, {
        text: 'Explain why ionic compounds have high melting points',
        checked: false
      }, {
        text: 'Explain why ionic compounds are brittle',
        checked: false
      }, {
        text: 'State how X-ray crystallography provides evidence for ionic lattices',
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
      text: 'Understand: Evidence for ionic bonding includes high melting points, conductivity when molten/dissolved, brittleness, and X-ray diffraction data.\n\nApply: NaCl conducts when molten but not solid. Explain in terms of ionic bonding and ion mobility.\n\nAnalyze: Diamond and NaCl both have high melting points but different electrical properties. Analyze how bonding types explain this.\n\nEvaluate: "All compounds with high melting points are ionic." Provide counter-examples and evaluate.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Evidence for ions: (1) Electrolysis — ions migrate to electrodes when molten/dissolved. (2) Conductivity — only when ions are free to move (molten or aqueous). (3) Physical properties — high mp (strong forces), brittle (repulsion on layer shift), soluble in polar solvents. (4) X-ray crystallography — regular lattice of ions confirmed.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'p-electrolysis',
      prompt: 'What happens to Na⁺ and Cl⁻ ions during electrolysis of molten NaCl?'
    }, {
      id: 'cue-2',
      blockId: 'table-conductivity',
      prompt: 'Why does solid NaCl not conduct electricity, but molten NaCl does?'
    }, {
      id: 'cue-3',
      blockId: 'list-properties',
      prompt: 'Why are ionic compounds brittle?'
    }, {
      id: 'cue-4',
      blockId: 'list-properties',
      prompt: 'Why do ionic compounds have high melting points?'
    }, {
      id: 'cue-5',
      blockId: 'callout-key',
      prompt: 'State four lines of experimental evidence for the existence of ions.'
    }],
    summaryText: 'Evidence for ions: electrolysis (directed migration), conductivity (free ions when molten/dissolved), high mp + brittleness (strong ionic forces), X-ray crystallography (regular lattice).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Evidence for ionic species',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['ionic bonding', 'evidence']
  }]
};