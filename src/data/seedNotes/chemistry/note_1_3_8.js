export const note_chemistry_1_3_8 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define electronegativity; explain how electronegativity difference determines bond polarity; identify polar and non-polar molecules based on bond polarity and molecular symmetry.'
    }
  }, {
    id: 'h-en',
    type: 'heading',
    data: {
      text: 'Electronegativity',
      level: 2
    }
  }, {
    id: 'p-en',
    type: "list",
    data: {
      style: "unordered",
      items: ["Electronegativity is the ability of an atom to attract the bonding pair of electrons in a covalent bond towards itself.", "0)."]
    }
  }, {
    id: 'callout-key-en',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Electronegativity trends',
      text: 'Across a period (→): increases — greater nuclear charge, smaller radius → bonding pair attracted more strongly.\nDown a group (↓): decreases — greater atomic radius and shielding → bonding pair less strongly attracted.\n\nMost electronegative: F (4.0) > O (3.5) > N, Cl (3.0) > Br (2.8) > C (2.5)'
    }
  }, {
    id: 'h-polarity',
    type: 'heading',
    data: {
      text: 'Bond Polarity',
      level: 2
    }
  }, {
    id: 'p-polarity',
    type: "list",
    data: {
      style: "unordered",
      items: ["When two atoms with different electronegativities share a bonding pair, the more electronegative atom attracts the pair more strongly.", "This creates an uneven distribution of electron density \u2014 a polar covalent bond.", "The more electronegative atom carries a partial negative charge (\u03B4\u2212) and the less electronegative atom carries a partial positive charge (\u03B4+)."]
    }
  }, {
    id: 'table-bond-types',
    type: 'comparisonTable',
    data: {
      caption: 'Bond type based on electronegativity difference (ΔEN)',
      headers: ['ΔEN', 'Bond type', 'Example'],
      rows: [['0', 'Pure covalent (non-polar)', 'H–H, Cl–Cl, O=O'], ['0.1 – 1.7', 'Polar covalent', 'H–Cl (ΔEN=0.9), H–O (ΔEN=1.4), C–O'], ['> 1.7', 'Ionic', 'NaCl (ΔEN=2.1), MgO (ΔEN=2.3)']]
    }
  }, {
    id: 'h-dipole',
    type: 'heading',
    data: {
      text: 'Dipole Moments and Molecular Polarity',
      level: 2
    }
  }, {
    id: 'p-dipole',
    type: "list",
    data: {
      style: "unordered",
      items: ["A bond dipole is the vector representing the polarity of a bond \u2014 it points from \u03B4+ to \u03B4\u2212.", "A molecule is polar if its bond dipoles do not cancel out (net dipole moment \u2260 0).", "Molecular polarity depends on both bond polarity AND the shape (symmetry) of the molecule."]
    }
  }, {
    id: 'table-molecules',
    type: 'comparisonTable',
    data: {
      caption: 'Polar vs non-polar molecules',
      headers: ['Molecule', 'Bonds', 'Shape', 'Dipoles cancel?', 'Polar?'],
      rows: [['CO₂', 'C=O (polar)', 'Linear', 'Yes (opposite)', 'No (non-polar)'], ['H₂O', 'O–H (polar)', 'Bent', 'No', 'Yes (polar)'], ['CCl₄', 'C–Cl (polar)', 'Tetrahedral', 'Yes (symmetrical)', 'No (non-polar)'], ['CHCl₃', 'C–Cl, C–H (polar)', 'Tetrahedral (asymm.)', 'No', 'Yes (polar)'], ['NH₃', 'N–H (polar)', 'Trigonal pyramidal', 'No', 'Yes (polar)'], ['BF₃', 'B–F (polar)', 'Trigonal planar', 'Yes (symmetrical)', 'No (non-polar)']]
    }
  }, {
    id: 'svg-dipoles',
    type: 'svg',
    data: {
      caption: 'Bond dipoles in CO₂ (cancel → non-polar) and H₂O (do not cancel → polar)',
      svg: `<svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- CO2: linear, dipoles cancel -->
  <text x="90" y="20" text-anchor="middle" fill="#374151" font-weight="bold">CO₂ — non-polar</text>
  <circle cx="40" cy="70" r="18" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <text x="40" y="74" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <circle cx="90" cy="70" r="14" fill="#d1d5db" stroke="#374151" stroke-width="1.5"/>
  <text x="90" y="74" text-anchor="middle" fill="#111827" font-size="10">C</text>
  <circle cx="140" cy="70" r="18" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
  <text x="140" y="74" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <!-- dipole arrows for CO2 -->
  <line x1="80" y1="55" x2="50" y2="55" stroke="#6366f1" stroke-width="2" marker-end="url(#dArr)"/>
  <line x1="100" y1="55" x2="130" y2="55" stroke="#6366f1" stroke-width="2" marker-end="url(#dArr)"/>
  <text x="65" y="48" text-anchor="middle" fill="#6366f1" font-size="9">δ−  δ+</text>
  <text x="115" y="48" text-anchor="middle" fill="#6366f1" font-size="9">δ+  δ−</text>
  <text x="90" y="108" text-anchor="middle" fill="#16a34a" font-size="10">Dipoles cancel → μ = 0</text>

  <!-- H2O: bent, dipoles don't cancel -->
  <text x="290" y="20" text-anchor="middle" fill="#374151" font-weight="bold">H₂O — polar</text>
  <circle cx="290" cy="80" r="18" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="290" y="84" text-anchor="middle" fill="#1e3a8a" font-size="10">O</text>
  <circle cx="255" cy="110" r="12" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
  <text x="255" y="114" text-anchor="middle" fill="#92400e" font-size="10">H</text>
  <circle cx="325" cy="110" r="12" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
  <text x="325" y="114" text-anchor="middle" fill="#92400e" font-size="10">H</text>
  <line x1="276" y1="88" x2="262" y2="103" stroke="#6366f1" stroke-width="2" marker-end="url(#dArr)"/>
  <line x1="304" y1="88" x2="318" y2="103" stroke="#6366f1" stroke-width="2" marker-end="url(#dArr)"/>
  <!-- net dipole -->
  <line x1="290" y1="75" x2="290" y2="50" stroke="#ef4444" stroke-width="2.5" marker-end="url(#dArrR)"/>
  <text x="305" y="52" fill="#ef4444" font-size="9">net μ</text>
  <text x="290" y="145" text-anchor="middle" fill="#ef4444" font-size="10">Dipoles reinforce → μ ≠ 0</text>
  <defs>
    <marker id="dArr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#6366f1"/></marker>
    <marker id="dArrR" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#ef4444"/></marker>
  </defs>
</svg>`
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — polar bonds ≠ polar molecule',
      text: 'A molecule can have polar bonds but still be non-polar overall if the bond dipoles cancel due to symmetry.\n\nExamples:\n• CO₂: linear, two equal C=O dipoles cancel → non-polar\n• CCl₄: tetrahedral, four equal C–Cl dipoles cancel → non-polar\n• H₂O: bent, O–H dipoles do NOT cancel → polar'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — how to determine if a molecule is polar',
      text: '1. Determine if any bonds are polar (ΔEN ≠ 0)\n2. Determine the shape of the molecule (use VSEPR)\n3. Check if the bond dipoles cancel by symmetry\n4. If they cancel → non-polar; if they do not cancel → polar'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Define electronegativity and state the Pauling scale trend',
        checked: false
      }, {
        text: 'Use ΔEN to classify a bond as ionic, polar covalent or non-polar covalent',
        checked: false
      }, {
        text: 'Explain why CO₂ is non-polar despite having polar bonds',
        checked: false
      }, {
        text: 'Explain why H₂O is polar',
        checked: false
      }, {
        text: 'Determine whether a molecule is polar given its shape and bond polarities',
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
      text: 'Understand: Electronegativity difference determines bond polarity — from non-polar covalent through polar covalent to ionic.\n\nApply: Arrange C–H, C–O, C–F, C–Na bonds in order of increasing polarity. Justify.\n\nAnalyze: HF has a very large dipole. Explain how both EN difference and bond length contribute.\n\nEvaluate: The ionic/covalent boundary at ΔEN ≈ 1.7 is arbitrary. Is this classification scientifically meaningful?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Electronegativity: ability to attract bonding pair. Increases across period, decreases down group. F > O > N,Cl. ΔEN 0 = non-polar covalent; 0.1–1.7 = polar covalent; >1.7 = ionic. Molecular polarity: polar bonds + asymmetric shape → polar molecule. CO₂ (linear) non-polar; H₂O (bent) polar; CCl₄ (tetrahedral) non-polar.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-en',
      prompt: 'State the trend in electronegativity across a period and down a group.'
    }, {
      id: 'cue-2',
      blockId: 'table-bond-types',
      prompt: 'What electronegativity difference distinguishes polar covalent from ionic bonds?'
    }, {
      id: 'cue-3',
      blockId: 'svg-dipoles',
      prompt: 'Why is CO₂ non-polar even though C=O bonds are polar?'
    }, {
      id: 'cue-4',
      blockId: 'table-molecules',
      prompt: 'Why is H₂O polar but CCl₄ non-polar, even though both have polar bonds?'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'State the four steps to determine if a molecule is polar.'
    }],
    summaryText: 'EN: across period ↑, down group ↓. F>O>N,Cl. ΔEN: 0=non-polar, 0.1–1.7=polar covalent, >1.7=ionic. Polar molecule: polar bonds + asymmetric shape. CO₂ linear → non-polar; H₂O bent → polar.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Electronegativity, bond polarity, molecular polarity',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['electronegativity', 'bond polarity', 'molecular polarity']
  }]
};