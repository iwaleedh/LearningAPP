export const note_chemistry_1_5_2 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Apply the E/Z nomenclature system using Cahn-Ingold-Prelog (CIP) priority rules to name geometric isomers of alkenes.'
    }
  }, {
    id: 'h-why',
    type: 'heading',
    data: {
      text: 'Why E/Z Instead of cis/trans?',
      level: 2
    }
  }, {
    id: 'p-why',
    type: "list",
    data: {
      style: "unordered",
      items: ["g.", "both CH\u2083 groups in but-2-ene).", "When all four substituents on the C=C are different (as in many real molecules), cis/trans cannot be applied unambiguously.", "The <strong>E/Z system</strong> uses priority rules to handle any case."]
    }
  }, {
    id: 'h-cip',
    type: 'heading',
    data: {
      text: 'Cahn-Ingold-Prelog (CIP) Priority Rules',
      level: 2
    }
  }, {
    id: 'callout-key-cip',
    type: 'callout',
    data: {
      style: 'key',
      title: 'CIP Priority Rules — Summary',
      text: '1. Assign priorities to the two groups on each carbon of the C=C based on the atomic number of the atom directly attached to the C=C carbon.\n2. Higher atomic number = higher priority.\n3. If the atoms directly attached are the same, move outward to the next atoms and compare again.\n4. If Z (zusammen, German for "together"): higher-priority groups are on the SAME side of the C=C.\n5. If E (entgegen, German for "opposite"): higher-priority groups are on OPPOSITE sides of the C=C.'
    }
  }, {
    id: 'table-atomic',
    type: 'comparisonTable',
    data: {
      caption: 'Atomic numbers of common elements (for CIP priority)',
      headers: ['Element', 'Symbol', 'Atomic number', 'Priority relative to H'],
      rows: [['Hydrogen', 'H', '1', 'Lowest of common atoms'], ['Carbon', 'C', '6', 'Higher than H'], ['Nitrogen', 'N', '7', 'Higher than C'], ['Oxygen', 'O', '8', 'Higher than N'], ['Fluorine', 'F', '9', 'Higher than O'], ['Chlorine', 'Cl', '17', 'Higher than F'], ['Bromine', 'Br', '35', 'Higher than Cl'], ['Iodine', 'I', '53', 'Highest of common halogens']]
    }
  }, {
    id: 'h-steps',
    type: 'heading',
    data: {
      text: 'Step-by-Step Method',
      level: 2
    }
  }, {
    id: 'list-steps',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Identify the two carbons of the C=C double bond.', 'For each carbon, identify the two substituent groups attached to it.', 'Assign priority 1 (higher) and priority 2 (lower) to each pair using atomic number of the first atom in each group.', 'If first atoms are the same element, move to the second atom and compare atomic numbers.', 'Determine whether the two higher-priority groups (one from each C) are on the same side (Z) or opposite sides (E) of the C=C.']
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 1 — But-2-ene',
      text: 'Molecule: CH₃CH=CHCH₃\n\nLeft C of C=C: groups are CH₃ and H\n  → C (atomic number 6) > H (atomic number 1)\n  → CH₃ = priority 1; H = priority 2\n\nRight C of C=C: groups are CH₃ and H\n  → CH₃ = priority 1; H = priority 2\n\ncis isomer (CH₃ groups same side):\n  Higher-priority groups (CH₃) are on the SAME side → Z\n  Name: (Z)-but-2-ene\n\ntrans isomer (CH₃ groups opposite sides):\n  Higher-priority groups (CH₃) are on OPPOSITE sides → E\n  Name: (E)-but-2-ene'
    }
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 2 — 1-bromo-1-chloroethene (all different groups)',
      text: 'Molecule: BrCl C=CH₂ (i.e. CHBr=CHCl — with different groups each side)\n\nLeft C: Br and H attached\n  → Br (Z=35) > H (Z=1) → Br = priority 1\n\nRight C: Cl and H attached\n  → Cl (Z=17) > H (Z=1) → Cl = priority 1\n\nIf Br and Cl are on the SAME side → higher-priority groups same side → Z\nIf Br and Cl are on OPPOSITE sides → E\n\nNote: cis/trans cannot be used here (no identical groups) — E/Z is essential.'
    }
  }, {
    id: 'callout-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 3 — Tie-breaking (same first atom)',
      text: 'Consider: CH₃CH=C(CH₃)CH₂CH₃\n\nRight C of C=C has: CH₃ and CH₂CH₃\nFirst atoms are both C — same! → look at next atoms:\n  CH₃: the C is attached to (H, H, H)\n  CH₂CH₃: the C is attached to (C, H, H)\nC > H → CH₂CH₃ has higher priority (its C is attached to another C)\n\nSo: CH₂CH₃ = priority 1; CH₃ = priority 2 on that carbon.'
    }
  }, {
    id: 'h-ez-vs-cistrans',
    type: 'heading',
    data: {
      text: 'E/Z vs cis/trans — Relationship',
      level: 2
    }
  }, {
    id: 'table-relation',
    type: 'comparisonTable',
    data: {
      caption: 'Relationship between E/Z and cis/trans for simple alkenes',
      headers: ['Compound', 'cis/trans name', 'E/Z name', 'Note'],
      rows: [['But-2-ene (CH₃ same side)', 'cis-but-2-ene', '(Z)-but-2-ene', 'Z = cis when two groups are the same'], ['But-2-ene (CH₃ opposite)', 'trans-but-2-ene', '(E)-but-2-ene', 'E = trans when two groups are the same'], ['1-bromo-2-chloroethene', 'Cannot use cis/trans', '(E) or (Z)', 'Must use E/Z — all four groups different'], ['2-methylbut-2-ene', 'No isomerism', 'No isomerism', 'One C of C=C has two CH₃ — identical']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Memory Aid — E and Z',
      text: '• Z = Zusammen (German: "together") → higher-priority groups on the SAME side.\n• E = Entgegen (German: "opposite") → higher-priority groups on OPPOSITE sides.\n• Z ≈ cis (same side) and E ≈ trans (opposite) for simple symmetrical alkenes — but not always!\n• When in doubt: identify priority 1 group on each C first, THEN determine relative positions.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Assuming Z always = cis and E always = trans — this is only true when the two groups on each C are the same. With different groups, E can correspond to a "cis-like" arrangement.\n• Forgetting to compare the first atoms attached to the C=C carbon — do NOT compare the groups by size or number of carbons; use atomic number.\n• Using cis/trans when all four substituents are different — must use E/Z.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can state the CIP priority rules and apply them to assign priorities.',
        checked: false
      }, {
        text: 'I can determine whether an alkene is E or Z from its displayed formula.',
        checked: false
      }, {
        text: 'I can explain why E/Z nomenclature is needed when all four substituents differ.',
        checked: false
      }, {
        text: 'I know that Z = higher-priority groups same side; E = opposite sides.',
        checked: false
      }, {
        text: 'I can apply the tie-breaking rule when two groups have the same first atom.',
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
      text: 'Understand: E/Z uses CIP priority rules (atomic number) for unambiguous configuration assignment, unlike cis/trans.\n\nApply: Assign E or Z to CHCl=CHBr using priority rules.\n\nAnalyze: Why was E/Z needed when cis/trans existed? Give an ambiguous cis/trans example.\n\nEvaluate: Priority rules use atomic number, not mass. Is this scientifically justified or arbitrary?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'E/Z nomenclature uses CIP priority rules: higher atomic number = higher priority. Z (zusammen) = higher-priority groups on same side of C=C; E (entgegen) = opposite sides. E/Z must be used when all four substituents are different; cis/trans only works when identical groups are present. For tie-breaking, move to the next atom in the chain and compare atomic numbers.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-cip',
      prompt: 'What does CIP stand for, and what is the key rule for assigning priority?'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-cip',
      prompt: 'What does Z mean in E/Z nomenclature? What does E mean?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'Name the cis and trans isomers of but-2-ene using E/Z nomenclature.'
    }, {
      id: 'cue-4',
      blockId: 'callout-we2',
      prompt: 'Why must E/Z nomenclature be used for BrCH=CHCl rather than cis/trans?'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'What do the German words Zusammen and Entgegen mean, and how do they relate to E/Z?'
    }],
    summaryText: 'CIP: higher atomic number = higher priority. Z = same side (zusammen); E = opposite (entgegen). Use E/Z when all 4 substituents differ. Tie-break by moving to next atom in chain.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'IUPAC 2013 Recommendations',
    detail: 'E/Z nomenclature based on CIP rules is the current IUPAC standard for naming geometric isomers.',
    year: '2013',
    source: 'IUPAC',
    tags: ['E/Z', 'CIP', 'geometric isomerism']
  }]
};