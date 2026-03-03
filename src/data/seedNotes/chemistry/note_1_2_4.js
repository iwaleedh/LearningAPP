export const note_chemistry_1_2_4 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define first ionisation energy; explain the factors that affect ionisation energy; describe and explain the trends in first ionisation energy across Period 3 and down Group 2.'
    }
  }, {
    id: 'h-definition',
    type: 'heading',
    data: {
      text: 'First Ionisation Energy',
      level: 2
    }
  }, {
    id: 'p-definition',
    type: "list",
    data: {
      style: "unordered",
      items: ["The first ionisation energy (IE\u2081) of an element is the energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions."]
    }
  }, {
    id: 'eq-ie1',
    type: 'equation',
    data: {
      html: 'X(g) → X<sup>+</sup>(g) + e<sup>−</sup> &nbsp;&nbsp; Δ<i>H</i> = IE₁',
      caption: 'General equation for first ionisation energy — always endothermic (energy must be supplied)'
    }
  }, {
    id: 'callout-key-factors',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Three factors affecting ionisation energy',
      text: '1. Nuclear charge — more protons → stronger attraction on electrons → higher IE\n2. Atomic radius — greater distance from nucleus → weaker attraction → lower IE\n3. Electron shielding — inner electrons repel outer electrons, reducing effective nuclear charge → lower IE\n\nEffective nuclear charge (Zeff) = nuclear charge − shielding'
    }
  }, {
    id: 'h-period3',
    type: 'heading',
    data: {
      text: 'Trend Across Period 3 (Na → Ar)',
      level: 2
    }
  }, {
    id: 'p-period3',
    type: "list",
    data: {
      style: "unordered",
      items: ["Going across Period 3, the general trend is increasing first ionisation energy.", "Each element has one more proton, but electrons are added to the same shell, so shielding increases only slightly.", "The net result is a greater effective nuclear charge and stronger attraction on the outer electron."]
    }
  }, {
    id: 'list-period3-dips',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Drop from Mg to Al: Al has its outer electron in a 3p orbital (higher energy, more shielded by 3s electrons) → easier to remove than Mg\'s 3s electron', 'Drop from P to S: S has a paired electron in a 3p orbital — electron-electron repulsion makes it easier to remove than one of P\'s unpaired 3p electrons']
    }
  }, {
    id: 'svg-period3',
    type: 'svg',
    data: {
      caption: 'First ionisation energies across Period 3 — note the two dips at Al and S',
      svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Axes -->
  <line x1="50" y1="160" x2="390" y2="160" stroke="#374151" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="160" stroke="#374151" stroke-width="1.5"/>
  <!-- Y label -->
  <text x="14" y="95" fill="#374151" font-size="10" transform="rotate(-90,14,95)">IE₁ / kJ mol⁻¹</text>
  <!-- Data points: Na=496, Mg=738, Al=578, Si=789, P=1012, S=1000, Cl=1251, Ar=1521 -->
  <!-- Scaled: min=400, max=1600, range=1200, height=140px, y = 160 - (val-400)/1200*140 -->
  <!-- Na: (496-400)/1200*140=11.2, y=148.8 -->
  <!-- Mg: (738-400)/1200*140=39.4, y=120.6 -->
  <!-- Al: (578-400)/1200*140=20.8, y=139.2 -->
  <!-- Si: (789-400)/1200*140=45.4, y=114.6 -->
  <!-- P:  (1012-400)/1200*140=71.4, y=88.6 -->
  <!-- S:  (1000-400)/1200*140=70, y=90 -->
  <!-- Cl: (1251-400)/1200*140=99.3, y=60.7 -->
  <!-- Ar: (1521-400)/1200*140=130.8, y=29.2 -->
  <!-- x positions: 7 gaps across 340px: x = 50 + i*340/7 -->
  <!-- Na=50, Mg=98.6, Al=147.1, Si=195.7, P=244.3, S=292.9, Cl=341.4, Ar=390 -->
  <polyline points="50,148.8 98.6,120.6 147.1,139.2 195.7,114.6 244.3,88.6 292.9,90 341.4,60.7 390,29.2"
    fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Dots -->
  <circle cx="50" cy="148.8" r="4" fill="#4f46e5"/>
  <circle cx="98.6" cy="120.6" r="4" fill="#4f46e5"/>
  <circle cx="147.1" cy="139.2" r="4" fill="#ef4444"/>
  <circle cx="195.7" cy="114.6" r="4" fill="#4f46e5"/>
  <circle cx="244.3" cy="88.6" r="4" fill="#4f46e5"/>
  <circle cx="292.9" cy="90" r="4" fill="#ef4444"/>
  <circle cx="341.4" cy="60.7" r="4" fill="#4f46e5"/>
  <circle cx="390" cy="29.2" r="4" fill="#4f46e5"/>
  <!-- Element labels -->
  <text x="50" y="174" text-anchor="middle" fill="#374151" font-size="10">Na</text>
  <text x="98.6" y="174" text-anchor="middle" fill="#374151" font-size="10">Mg</text>
  <text x="147.1" y="174" text-anchor="middle" fill="#ef4444" font-size="10">Al</text>
  <text x="195.7" y="174" text-anchor="middle" fill="#374151" font-size="10">Si</text>
  <text x="244.3" y="174" text-anchor="middle" fill="#374151" font-size="10">P</text>
  <text x="292.9" y="174" text-anchor="middle" fill="#ef4444" font-size="10">S</text>
  <text x="341.4" y="174" text-anchor="middle" fill="#374151" font-size="10">Cl</text>
  <text x="390" y="174" text-anchor="middle" fill="#374151" font-size="10">Ar</text>
  <!-- Dip annotations -->
  <text x="147.1" y="128" text-anchor="middle" fill="#ef4444" font-size="9">3p dip</text>
  <text x="292.9" y="78" text-anchor="middle" fill="#ef4444" font-size="9">paired 3p</text>
  <!-- Y axis ticks -->
  <text x="44" y="163" text-anchor="end" fill="#6b7280" font-size="9">400</text>
  <text x="44" y="113" text-anchor="end" fill="#6b7280" font-size="9">900</text>
  <text x="44" y="63" text-anchor="end" fill="#6b7280" font-size="9">1400</text>
  <line x1="48" y1="160" x2="52" y2="160" stroke="#374151"/>
  <line x1="48" y1="110" x2="52" y2="110" stroke="#374151"/>
  <line x1="48" y1="60" x2="52" y2="60" stroke="#374151"/>
</svg>`
    }
  }, {
    id: 'h-group2',
    type: 'heading',
    data: {
      text: 'Trend Down Group 2 (Be → Ba)',
      level: 2
    }
  }, {
    id: 'p-group2',
    type: "list",
    data: {
      style: "unordered",
      items: ["Going down Group 2, first ionisation energy decreases.", "Each successive element has an extra electron shell, increasing both atomic radius and shielding.", "Although nuclear charge also increases, the shielding effect dominates \u2014 the outer electron is further from the nucleus and more shielded, so less energy is needed to remove it."]
    }
  }, {
    id: 'table-group2',
    type: 'comparisonTable',
    data: {
      caption: 'First ionisation energies of Group 2 elements',
      headers: ['Element', 'IE₁ / kJ mol⁻¹', 'Outer shell', 'Trend'],
      rows: [['Be', '900', '2s', '↑ highest'], ['Mg', '738', '3s', '↓'], ['Ca', '590', '4s', '↓'], ['Sr', '550', '5s', '↓'], ['Ba', '503', '6s', '↓ lowest']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — successive ionisation energies',
      text: 'Successive IEs always increase (harder to remove each electron — higher nuclear charge, smaller ion). A very large jump between consecutive IEs indicates the next electron is being removed from an inner shell closer to the nucleus.\n\nExample: Na has a large jump between IE₁ and IE₂ (1st electron from 3s; 2nd from 2p shell).'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — confusing shielding with nuclear charge',
      text: 'Down a group, nuclear charge increases, but ionisation energy still decreases. This is because the increase in shielding and atomic radius outweighs the effect of greater nuclear charge. Never say "IE decreases because nuclear charge decreases down a group" — it does NOT decrease.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Define first ionisation energy with the correct equation',
        checked: false
      }, {
        text: 'State the three factors affecting ionisation energy',
        checked: false
      }, {
        text: 'Explain the general increase in IE₁ across Period 3',
        checked: false
      }, {
        text: 'Explain the dips at Al (Mg→Al) and S (P→S)',
        checked: false
      }, {
        text: 'Explain why IE₁ decreases down Group 2',
        checked: false
      }, {
        text: 'Use a large jump in successive IE data to identify the group of an element',
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
      text: 'Understand: Ionisation energy measures how tightly an atom holds its outermost electron. Trends reflect changes in nuclear charge, shielding, and atomic radius.\n\nApply: Predict which has higher first IE: Mg or Al. Explain using electron configuration.\n\nAnalyze: Successive IEs of an element: 578, 1817, 2745, 11578, 14831. Deduce the group and explain the large jump.\n\nEvaluate: Why is the first IE of oxygen lower than nitrogen, despite higher nuclear charge? Assess electron-electron repulsion in paired 2p orbitals.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'IE₁: energy to remove 1 mol e⁻ from 1 mol gaseous atoms → X⁺(g). Factors: nuclear charge (↑ IE), atomic radius (↑ radius → ↓ IE), shielding (↑ shielding → ↓ IE). Across Period 3: general increase, dips at Al (3p sub-shell) and S (paired 3p). Down Group 2: decreases — greater atomic radius and shielding outweigh nuclear charge increase.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'eq-ie1',
      prompt: 'Write the equation that defines the first ionisation energy of element X.'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-factors',
      prompt: 'What three factors affect ionisation energy and how does each affect it?'
    }, {
      id: 'cue-3',
      blockId: 'list-period3-dips',
      prompt: 'Why is the first IE of Al lower than that of Mg?'
    }, {
      id: 'cue-4',
      blockId: 'list-period3-dips',
      prompt: 'Why is the first IE of S lower than that of P?'
    }, {
      id: 'cue-5',
      blockId: 'p-group2',
      prompt: 'Explain why first ionisation energy decreases down Group 2.'
    }, {
      id: 'cue-6',
      blockId: 'callout-tip',
      prompt: 'How can successive ionisation energy data be used to identify which group an element belongs to?'
    }],
    summaryText: 'IE₁: X(g) → X⁺(g) + e⁻. Factors: nuclear charge, atomic radius, shielding. Period 3: generally increases; dips at Al (3p) and S (paired 3p). Group 2: decreases down (radius and shielding dominate).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 'Ionisation energies, Period 3 and Group 2 trends',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['ionisation energy', 'periodic trends']
  }]
};