export const note_chemistry_1_3_6 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define covalent bonding; draw dot-and-cross diagrams for covalent molecules including single, double and triple bonds; describe dative (coordinate) bonds.'
    }
  }, {
    id: 'h-covalent',
    type: 'heading',
    data: {
      text: 'Covalent Bonding',
      level: 2
    }
  }, {
    id: 'p-covalent',
    type: "list",
    data: {
      style: "unordered",
      items: ["A covalent bond forms when two atoms share a pair of electrons.", "Both atoms contribute one electron each to the shared pair (in a standard covalent bond).", "The shared pair is attracted to both nuclei simultaneously, holding the atoms together.", "Covalent bonds form between non-metal atoms."]
    }
  }, {
    id: 'callout-key-def',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Definition — covalent bond',
      text: 'A covalent bond is the electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms. Each atom in a simple covalent bond contributes one electron to the shared pair.'
    }
  }, {
    id: 'h-bond-types',
    type: 'heading',
    data: {
      text: 'Single, Double and Triple Bonds',
      level: 2
    }
  }, {
    id: 'table-bonds',
    type: 'comparisonTable',
    data: {
      caption: 'Types of covalent bond',
      headers: ['Bond type', 'Shared pairs', 'Example', 'Bond length', 'Bond strength'],
      rows: [['Single (σ)', '1', 'H₂, Cl₂, H₂O', 'Longest', 'Weakest'], ['Double (σ + π)', '2', 'O₂, CO₂, C₂H₄', 'Medium', 'Medium'], ['Triple (σ + 2π)', '3', 'N₂, C₂H₂', 'Shortest', 'Strongest']]
    }
  }, {
    id: 'p-bond-trends',
    type: "list",
    data: {
      style: "unordered",
      items: ["As the number of shared pairs increases, bond length decreases and bond enthalpy (strength) increases.", "This is because more electron density is concentrated between the nuclei, increasing the attraction."]
    }
  }, {
    id: 'h-diagrams',
    type: 'heading',
    data: {
      text: 'Dot-and-Cross Diagrams',
      level: 2
    }
  }, {
    id: 'p-diagrams',
    type: "list",
    data: {
      style: "unordered",
      items: ["Dot-and-cross diagrams show the arrangement of outer shell electrons in covalent molecules.", "Bonding pairs are shown between atoms; lone pairs (non-bonding pairs) are shown on individual atoms.", "No square brackets are used for covalent molecules (unlike ions)."]
    }
  }, {
    id: 'svg-covalent',
    type: 'svg',
    data: {
      caption: 'Dot-and-cross diagrams for H₂, Cl₂, H₂O, NH₃ and CO₂',
      svg: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- H2 -->
  <text x="40" y="30" text-anchor="middle" fill="#374151" font-weight="bold" font-size="12">H₂</text>
  <circle cx="25" cy="60" r="16" fill="none" stroke="#6366f1" stroke-width="1.2"/>
  <circle cx="55" cy="60" r="16" fill="none" stroke="#6366f1" stroke-width="1.2"/>
  <text x="34" y="64" text-anchor="middle" fill="#4f46e5" font-size="13">× •</text>
  <text x="12" y="90" text-anchor="middle" fill="#6b7280" font-size="9">H</text>
  <text x="68" y="90" text-anchor="middle" fill="#6b7280" font-size="9">H</text>

  <!-- Cl2 -->
  <text x="140" y="30" text-anchor="middle" fill="#374151" font-weight="bold" font-size="12">Cl₂</text>
  <circle cx="118" cy="60" r="22" fill="none" stroke="#16a34a" stroke-width="1.2"/>
  <circle cx="162" cy="60" r="22" fill="none" stroke="#16a34a" stroke-width="1.2"/>
  <!-- lone pairs Cl left -->
  <text x="100" y="52" fill="#16a34a" font-size="11">• •</text>
  <text x="100" y="72" fill="#16a34a" font-size="11">• •</text>
  <text x="118" y="44" text-anchor="middle" fill="#16a34a" font-size="11">• •</text>
  <!-- bonding pair -->
  <text x="140" y="64" text-anchor="middle" fill="#374151" font-size="13">×•</text>
  <!-- lone pairs Cl right -->
  <text x="158" y="52" fill="#ef4444" font-size="11">× ×</text>
  <text x="158" y="72" fill="#ef4444" font-size="11">× ×</text>
  <text x="162" y="44" text-anchor="middle" fill="#ef4444" font-size="11">× ×</text>
  <text x="140" y="100" text-anchor="middle" fill="#6b7280" font-size="9">Cl — Cl (single bond, 3 lone pairs each)</text>

  <!-- H2O -->
  <text x="260" y="30" text-anchor="middle" fill="#374151" font-weight="bold" font-size="12">H₂O</text>
  <circle cx="260" cy="75" r="26" fill="none" stroke="#3b82f6" stroke-width="1.2"/>
  <circle cx="234" cy="95" r="14" fill="none" stroke="#6366f1" stroke-width="1.2"/>
  <circle cx="286" cy="95" r="14" fill="none" stroke="#6366f1" stroke-width="1.2"/>
  <text x="260" y="55" text-anchor="middle" fill="#3b82f6" font-size="11">• •  • •</text>
  <text x="245" y="82" fill="#374151" font-size="11">× •</text>
  <text x="268" y="82" fill="#374151" font-size="11">• ×</text>
  <text x="260" y="118" text-anchor="middle" fill="#6b7280" font-size="9">2 bonding pairs, 2 lone pairs on O</text>

  <!-- CO2 -->
  <text x="420" y="30" text-anchor="middle" fill="#374151" font-weight="bold" font-size="12">CO₂</text>
  <circle cx="380" cy="60" r="22" fill="none" stroke="#ef4444" stroke-width="1.2"/>
  <circle cx="420" cy="60" r="22" fill="none" stroke="#374151" stroke-width="1.2"/>
  <circle cx="460" cy="60" r="22" fill="none" stroke="#ef4444" stroke-width="1.2"/>
  <!-- double bonds shown as 2 pairs -->
  <text x="400" y="57" text-anchor="middle" fill="#374151" font-size="11">×× ••</text>
  <text x="400" y="70" text-anchor="middle" fill="#374151" font-size="11">×× ••</text>
  <text x="440" y="57" text-anchor="middle" fill="#374151" font-size="11">•• ××</text>
  <text x="440" y="70" text-anchor="middle" fill="#374151" font-size="11">•• ××</text>
  <!-- lone pairs on O -->
  <text x="362" y="57" fill="#ef4444" font-size="11">• •</text>
  <text x="362" y="70" fill="#ef4444" font-size="11">• •</text>
  <text x="475" y="57" fill="#ef4444" font-size="11">× ×</text>
  <text x="475" y="70" fill="#ef4444" font-size="11">× ×</text>
  <text x="420" y="100" text-anchor="middle" fill="#6b7280" font-size="9">O=C=O (2 double bonds, 2 lone pairs each O)</text>
</svg>`
    }
  }, {
    id: 'h-dative',
    type: 'heading',
    data: {
      text: 'Dative (Coordinate) Bonds',
      level: 2
    }
  }, {
    id: 'p-dative',
    type: "list",
    data: {
      style: "unordered",
      items: ["A dative (or coordinate) covalent bond is one in which both electrons in the shared pair come from the same atom (the donor).", "The atom donating the lone pair is the Lewis base; the atom accepting it is the Lewis acid.", "Once formed, a dative bond is identical to any other covalent bond."]
    }
  }, {
    id: 'list-dative',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['NH₄⁺ formation: NH₃ donates its lone pair to H⁺ → the N–H bond formed is a dative bond', 'H₃O⁺ formation: H₂O donates a lone pair to H⁺', 'CO acting as a ligand: C donates a lone pair to a metal ion (e.g. in carbonyls)', 'Dative bonds are shown as an arrow (→) pointing from donor to acceptor in structural diagrams']
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — dot-and-cross for covalent molecules',
      text: 'Show ALL outer shell electrons (both bonding pairs and lone pairs). Do NOT use square brackets (these are only for ions). You can show bonding pairs as lines (—) in structural formulae but use dots/crosses in dot-and-cross diagrams.\n\nCount electrons: the total outer shell electrons in your diagram must equal the sum of valence electrons of all atoms.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — forgetting lone pairs',
      text: 'In H₂O, oxygen has 2 bonding pairs AND 2 lone pairs (total 8 outer electrons). In NH₃, nitrogen has 3 bonding pairs AND 1 lone pair. Always check the octet (or duet for H) is satisfied for each atom in the diagram.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Define a covalent bond',
        checked: false
      }, {
        text: 'Draw dot-and-cross diagrams for H₂, Cl₂, HCl, H₂O, NH₃, CH₄',
        checked: false
      }, {
        text: 'Draw dot-and-cross diagrams for O₂ (double bond) and N₂ (triple bond)',
        checked: false
      }, {
        text: 'Draw dot-and-cross diagrams for CO₂ and SO₂',
        checked: false
      }, {
        text: 'Define a dative bond and give two examples',
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
      text: 'Understand: Covalent bonds form when atoms share electron pairs — shared electrons are attracted to both nuclei.\n\nApply: Draw dot-and-cross diagrams for NH₃, H₂O, CO₂ showing bonding and lone pairs.\n\nAnalyze: N₂ has bond energy 944 kJ mol⁻¹ while O₂ has 498. Why is N₂ so much less reactive?\n\nEvaluate: Dative bonds are "the same as covalent bonds once formed." Assess — are they identical or different?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Covalent bond: shared pair of electrons, electrostatic attraction to both nuclei. Single (1 pair), double (2 pairs), triple (3 pairs) — more pairs = shorter, stronger bond. Dot-and-cross: show all outer electrons, bonding pairs between atoms, lone pairs on atoms, no brackets. Dative bond: both electrons from one atom (e.g. NH₄⁺, H₃O⁺).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-def',
      prompt: 'Define a covalent bond.'
    }, {
      id: 'cue-2',
      blockId: 'table-bonds',
      prompt: 'How do bond length and bond strength change from single to double to triple bonds?'
    }, {
      id: 'cue-3',
      blockId: 'svg-covalent',
      prompt: 'How many bonding pairs and lone pairs does the oxygen atom have in H₂O?'
    }, {
      id: 'cue-4',
      blockId: 'p-dative',
      prompt: 'What is a dative bond? Give one example.'
    }, {
      id: 'cue-5',
      blockId: 'callout-warning',
      prompt: 'How many outer shell electrons does nitrogen have in NH₃? Show them as bonding pairs and lone pairs.'
    }],
    summaryText: 'Covalent bond: shared electron pair, attracted to both nuclei. Single < double < triple in length; reverse for strength. Dot-and-cross: all outer e⁻, bonding + lone pairs, no brackets. Dative: both e⁻ from one atom (NH₄⁺, H₃O⁺).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Covalent bonding, dot-and-cross diagrams, dative bonds',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['covalent bonding', 'dot-and-cross']
  }]
};