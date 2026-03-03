export const note_chemistry_1_2_8 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Explain periodic trends in atomic radius, ionisation energy, electronegativity and melting point across Period 3 and down Group 2; relate these trends to electronic configuration and nuclear charge.'
    }
  }, {
    id: 'h-atomic-radius',
    type: 'heading',
    data: {
      text: 'Atomic Radius',
      level: 2
    }
  }, {
    id: 'p-atomic-radius',
    type: "list",
    data: {
      style: "unordered",
      items: ["Atomic radius is defined as half the distance between the nuclei of two adjacent identical atoms in a covalent bond (covalent radius) or metallic lattice (metallic radius)."]
    }
  }, {
    id: 'list-radius-trends',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Across Period 3 (Na → Cl): atomic radius decreases. Each element has one more proton, increasing nuclear charge and pulling electrons closer. Electrons are added to the same shell, so shielding increases only slightly → increasing Zeff compresses the electron cloud.', 'Down Group 2 (Be → Ba): atomic radius increases. Each element has an additional electron shell, so outer electrons are further from the nucleus and more shielded → the atom is larger despite the greater nuclear charge.']
    }
  }, {
    id: 'h-ie',
    type: 'heading',
    data: {
      text: 'First Ionisation Energy (IE₁)',
      level: 2
    }
  }, {
    id: 'p-ie',
    type: "list",
    data: {
      style: "unordered",
      items: ["IE\u2081 is the energy needed to remove one mole of electrons from one mole of gaseous atoms.", "It is directly linked to how strongly the nucleus attracts the outermost electron."]
    }
  }, {
    id: 'list-ie-trends',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Across Period 3: generally increases (greater Zeff, smaller radius → stronger attraction on outer electron). Two dips: Mg→Al (Al has a 3p electron, higher energy than 3s) and P→S (S has a paired 3p electron — repulsion makes it easier to remove).', 'Down Group 2: decreases (increasing atomic radius and shielding outweigh the greater nuclear charge → outer electron less tightly held).']
    }
  }, {
    id: 'h-electronegativity',
    type: 'heading',
    data: {
      text: 'Electronegativity',
      level: 2
    }
  }, {
    id: 'p-electronegativity',
    type: "list",
    data: {
      style: "unordered",
      items: ["Electronegativity is the tendency of an atom to attract a bonding pair of electrons towards itself in a covalent bond.", "0, highest of all elements)."]
    }
  }, {
    id: 'list-en-trends',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Across a period: increases. Greater nuclear charge, smaller radius → bonding pair attracted more strongly.', 'Down a group: decreases. Larger atomic radius and greater shielding → bonding pair less attracted to the nucleus.', 'Noble gases are excluded (they form very few bonds and are not assigned Pauling electronegativities).']
    }
  }, {
    id: 'h-melting',
    type: 'heading',
    data: {
      text: 'Melting Point Across Period 3',
      level: 2
    }
  }, {
    id: 'p-melting',
    type: "list",
    data: {
      style: "unordered",
      items: ["Melting point depends on the type of structure and bonding, not just position in the period.", "The trend across Period 3 is not a simple increase or decrease."]
    }
  }, {
    id: 'table-melting',
    type: 'comparisonTable',
    data: {
      caption: 'Melting points and structures across Period 3',
      headers: ['Element', 'Structure', 'Bonding', 'Melting point', 'Explanation'],
      rows: [['Na', 'Giant metallic', 'Metallic', '371 K', 'Weak metallic bonding (1 delocalised e⁻)'], ['Mg', 'Giant metallic', 'Metallic', '923 K', 'Stronger metallic bonding (2 delocalised e⁻, smaller ion)'], ['Al', 'Giant metallic', 'Metallic', '933 K', 'Strongest metallic bonding (3 delocalised e⁻, smaller ion)'], ['Si', 'Giant covalent', 'Covalent', '1687 K', 'Many strong covalent bonds — very high mp'], ['P', 'Simple molecular', 'van der Waals', '317 K', 'P₄ molecules; weak London forces between molecules'], ['S', 'Simple molecular', 'van der Waals', '388 K', 'S₈ molecules; slightly stronger London forces (larger molecule)'], ['Cl', 'Simple molecular', 'van der Waals', '172 K', 'Cl₂ molecules; very weak London forces'], ['Ar', 'Simple atomic', 'van der Waals', '84 K', 'Single atoms; weakest London forces']]
    }
  }, {
    id: 'callout-key-melting',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key pattern — melting point and structure',
      text: 'Giant structures (metallic or covalent) have high melting points because many strong bonds must be broken.\nSimple molecular/atomic structures have low melting points because only weak van der Waals forces act between molecules.\nSilicon (giant covalent) has the highest melting point in Period 3.'
    }
  }, {
    id: 'table-summary-trends',
    type: 'comparisonTable',
    data: {
      caption: 'Summary of periodic trends',
      headers: ['Property', 'Across a period (→)', 'Down a group (↓)', 'Main reason'],
      rows: [['Atomic radius', 'Decreases', 'Increases', 'Zeff / extra shell'], ['IE₁', 'Increases (with dips)', 'Decreases', 'Zeff / radius / shielding'], ['Electronegativity', 'Increases', 'Decreases', 'Zeff / radius / shielding'], ['Melting point', 'Complex (depends on structure)', 'Varies', 'Type of bonding']]
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — melting point across a period',
      text: 'Do NOT say melting point simply increases across Period 3. It rises from Na to Al (metallic), peaks at Si (giant covalent), then drops sharply at P (simple molecular). Always refer to the type of bonding and structure.'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — linking trends to Zeff',
      text: 'Effective nuclear charge (Zeff = Z − shielding) is the key concept linking atomic radius, IE and electronegativity.\n• Across a period: Zeff increases → smaller radius, higher IE, higher EN.\n• Down a group: Zeff roughly constant, but radius increases → lower IE, lower EN.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Explain the trend in atomic radius across Period 3 and down Group 2',
        checked: false
      }, {
        text: 'Explain the trend in IE₁ across Period 3, including the two dips',
        checked: false
      }, {
        text: 'Explain the trend in electronegativity across a period and down a group',
        checked: false
      }, {
        text: 'Describe and explain the melting point trend across Period 3 in terms of structure and bonding',
        checked: false
      }, {
        text: 'Use Zeff to explain multiple periodic trends',
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
      text: 'Understand: Periodic trends arise from the interplay of nuclear charge, shielding, and electron distance from the nucleus.\n\nApply: Arrange Na, Mg, Al, Si in order of increasing first IE. Explain any anomalies.\n\nAnalyze: Why does atomic radius decrease across a period but increase down a group?\n\nEvaluate: A student predicts K has higher IE than Na because K has more protons. Identify the flaw and explain the correct trend.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Across Period 3: atomic radius decreases, IE₁ increases (dips at Al and S), electronegativity increases. Down Group 2: atomic radius increases, IE₁ decreases, electronegativity decreases — all due to shielding and radius outweighing nuclear charge. Melting point across Period 3: Na→Al (metallic, rises), Si (giant covalent, highest), P→Ar (simple molecular/atomic, low).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'list-radius-trends',
      prompt: 'Explain why atomic radius decreases across Period 3 but increases down Group 2.'
    }, {
      id: 'cue-2',
      blockId: 'list-ie-trends',
      prompt: 'Explain the two dips in IE₁ across Period 3 (at Al and S).'
    }, {
      id: 'cue-3',
      blockId: 'list-en-trends',
      prompt: 'State the trend in electronegativity across a period and down a group, giving reasons.'
    }, {
      id: 'cue-4',
      blockId: 'table-melting',
      prompt: 'Why does silicon have a much higher melting point than phosphorus despite being adjacent in Period 3?'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'How does effective nuclear charge (Zeff) link the trends in atomic radius, IE₁ and electronegativity?'
    }],
    summaryText: 'Period 3 (→): radius↓, IE↑ (dips at Al,S), EN↑. Group 2 (↓): radius↑, IE↓, EN↓. Reason: Zeff / shielding / radius. Melting point: metallic (Na–Al) rises; Si highest (giant covalent); P–Ar low (simple molecular).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 'Periodic trends: atomic radius, IE, electronegativity, melting point',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['periodic trends', 'atomic structure']
  }]
};