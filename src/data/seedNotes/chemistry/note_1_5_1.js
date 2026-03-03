export const note_chemistry_1_5_1 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define geometric (cis-trans) isomerism; state the conditions required for geometric isomers to exist; draw and identify cis and trans isomers.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'What is Geometric Isomerism?',
      level: 2
    }
  }, {
    id: 'callout-key-geo',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Geometric (cis-trans) Isomerism — Definition',
      text: 'Geometric isomerism is a type of stereoisomerism in which molecules have the same molecular formula and the same bonds (connectivity), but differ in the arrangement of groups in space around a restricted bond (e.g. C=C). The two isomers cannot interconvert without breaking a bond.'
    }
  }, {
    id: 'p-stereo',
    type: "list",
    data: {
      style: "unordered",
      items: ["Geometric isomers are a sub-type of <strong>stereoisomers</strong> \u2014 compounds with identical molecular formulae and structural formulae (same connectivity) but different spatial arrangements.", "They are NOT the same as structural isomers (which have different connectivity)."]
    }
  }, {
    id: 'h-conditions',
    type: 'heading',
    data: {
      text: 'Conditions Required for Geometric Isomerism',
      level: 2
    }
  }, {
    id: 'callout-key-conditions',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Two Conditions (BOTH must be met)',
      text: '1. Restricted rotation about a bond — this is provided by the C=C π bond (or a ring).\n2. Each carbon of the C=C must carry TWO DIFFERENT groups (substituents). If either carbon has two identical groups, geometric isomers do NOT exist.'
    }
  }, {
    id: 'callout-worked-conditions',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Testing for Geometric Isomers',
      text: 'Does but-2-ene (CH₃CH=CHCH₃) show geometric isomerism?\n\nC1 of C=C carries: H and CH₃ → two DIFFERENT groups ✓\nC2 of C=C carries: H and CH₃ → two DIFFERENT groups ✓\nBoth conditions met → YES, geometric isomers exist.\n\nDoes propene (CH₂=CHCH₃) show geometric isomerism?\nC1 of C=C carries: H and H → two IDENTICAL groups ✗\nCondition 2 NOT met → NO geometric isomers.'
    }
  }, {
    id: 'h-cis-trans',
    type: 'heading',
    data: {
      text: 'cis and trans Isomers',
      level: 2
    }
  }, {
    id: 'callout-key-cistrans',
    type: 'callout',
    data: {
      style: 'key',
      title: 'cis and trans Labels',
      text: 'cis isomer: the two identical (or higher-priority) groups are on the SAME side of the C=C.\ntrans isomer: the two identical (or higher-priority) groups are on OPPOSITE sides of the C=C.'
    }
  }, {
    id: 'svg-but2ene',
    type: 'svg',
    data: {
      svg: `<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <text x="190" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#374151">Geometric Isomers of But-2-ene (C₄H₈)</text>

  <!-- cis-but-2-ene -->
  <text x="95" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">cis-but-2-ene</text>
  <!-- C=C -->
  <line x1="70" y1="100" x2="120" y2="100" stroke="#374151" stroke-width="2.5"/>
  <line x1="70" y1="108" x2="120" y2="108" stroke="#374151" stroke-width="2.5"/>
  <!-- Left C -->
  <circle cx="65" cy="104" r="13" fill="#6366f1" opacity="0.85"/>
  <text x="65" y="109" text-anchor="middle" font-size="11" fill="white" font-weight="bold">C</text>
  <!-- Right C -->
  <circle cx="125" cy="104" r="13" fill="#6366f1" opacity="0.85"/>
  <text x="125" y="109" text-anchor="middle" font-size="11" fill="white" font-weight="bold">C</text>
  <!-- Left C: CH₃ above, H below -->
  <text x="40" y="72" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">CH₃</text>
  <line x1="57" y1="94" x2="45" y2="78" stroke="#374151" stroke-width="1.8"/>
  <text x="40" y="142" text-anchor="middle" font-size="12" fill="#6b7280">H</text>
  <line x1="57" y1="114" x2="45" y2="132" stroke="#374151" stroke-width="1.8"/>
  <!-- Right C: CH₃ above, H below — both CH₃ SAME side -->
  <text x="150" y="72" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">CH₃</text>
  <line x1="133" y1="94" x2="145" y2="78" stroke="#374151" stroke-width="1.8"/>
  <text x="150" y="142" text-anchor="middle" font-size="12" fill="#6b7280">H</text>
  <line x1="133" y1="114" x2="145" y2="132" stroke="#374151" stroke-width="1.8"/>
  <text x="95" y="165" text-anchor="middle" font-size="11" fill="#16a34a">CH₃ groups SAME side</text>
  <text x="95" y="178" text-anchor="middle" font-size="11" fill="#6b7280">b.p. +4 °C</text>

  <!-- Divider -->
  <line x1="190" y1="40" x2="190" y2="190" stroke="#d1d5db" stroke-width="1" stroke-dasharray="4"/>

  <!-- trans-but-2-ene -->
  <text x="285" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">trans-but-2-ene</text>
  <!-- C=C -->
  <line x1="255" y1="100" x2="305" y2="100" stroke="#374151" stroke-width="2.5"/>
  <line x1="255" y1="108" x2="305" y2="108" stroke="#374151" stroke-width="2.5"/>
  <!-- Left C -->
  <circle cx="250" cy="104" r="13" fill="#6366f1" opacity="0.85"/>
  <text x="250" y="109" text-anchor="middle" font-size="11" fill="white" font-weight="bold">C</text>
  <!-- Right C -->
  <circle cx="310" cy="104" r="13" fill="#6366f1" opacity="0.85"/>
  <text x="310" y="109" text-anchor="middle" font-size="11" fill="white" font-weight="bold">C</text>
  <!-- Left C: CH₃ above, H below -->
  <text x="225" y="72" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">CH₃</text>
  <line x1="242" y1="94" x2="230" y2="78" stroke="#374151" stroke-width="1.8"/>
  <text x="225" y="142" text-anchor="middle" font-size="12" fill="#6b7280">H</text>
  <line x1="242" y1="114" x2="230" y2="132" stroke="#374151" stroke-width="1.8"/>
  <!-- Right C: H above, CH₃ below — CH₃ OPPOSITE sides -->
  <text x="335" y="72" text-anchor="middle" font-size="12" fill="#6b7280">H</text>
  <line x1="318" y1="94" x2="330" y2="78" stroke="#374151" stroke-width="1.8"/>
  <text x="335" y="142" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">CH₃</text>
  <line x1="318" y1="114" x2="330" y2="132" stroke="#374151" stroke-width="1.8"/>
  <text x="285" y="165" text-anchor="middle" font-size="11" fill="#dc2626">CH₃ groups OPPOSITE sides</text>
  <text x="285" y="178" text-anchor="middle" font-size="11" fill="#6b7280">b.p. +1 °C</text>

  <text x="190" y="210" text-anchor="middle" font-size="11" fill="#374151">Same molecular formula C₄H₈ — same bonds — different spatial arrangement</text>
</svg>`,
      caption: 'cis-but-2-ene: CH₃ groups on same side; trans-but-2-ene: CH₃ groups on opposite sides. Both have formula C₄H₈.'
    }
  }, {
    id: 'h-properties',
    type: 'heading',
    data: {
      text: 'Physical Properties of Geometric Isomers',
      level: 2
    }
  }, {
    id: 'table-properties',
    type: 'comparisonTable',
    data: {
      caption: 'Comparing cis and trans isomers of but-2-ene',
      headers: ['Property', 'cis-but-2-ene', 'trans-but-2-ene'],
      rows: [['Molecular formula', 'C₄H₈', 'C₄H₈'], ['Boiling point / °C', '+4', '+1'], ['Dipole moment', 'Non-zero (dipoles do not cancel)', 'Zero (dipoles cancel — symmetrical)'], ['Melting point / °C', '−139', '−106'], ['Density / g cm⁻³', '0.621', '0.604']]
    }
  }, {
    id: 'p-properties',
    type: "list",
    data: {
      style: "unordered",
      items: ["The <em>cis</em> isomer has a higher boiling point than the <em>trans</em> isomer because the C\u2013Cl (or C\u2013CH\u2083) bond dipoles do not cancel \u2192 permanent dipole \u2192 stronger intermolecular forces (permanent dipole\u2013dipole + London).", "The <em>trans</em> isomer is more symmetrical \u2014 dipoles cancel \u2192 only London forces."]
    }
  }, {
    id: 'h-examples',
    type: 'heading',
    data: {
      text: 'Further Examples',
      level: 2
    }
  }, {
    id: 'table-examples',
    type: 'comparisonTable',
    data: {
      caption: 'Examples of molecules showing or not showing geometric isomerism',
      headers: ['Molecule', 'Formula', 'Geometric isomers?', 'Reason'],
      rows: [['But-2-ene', 'CH₃CH=CHCH₃', 'Yes', 'Each C of C=C has H and CH₃ — two different groups on each'], ['Propene', 'CH₂=CHCH₃', 'No', 'C1 has two H atoms — identical groups on one carbon'], ['1,2-dichloroethene', 'CHCl=CHCl', 'Yes', 'Each C has H and Cl — two different groups on each'], ['1,1-dichloroethene', 'CCl₂=CH₂', 'No', 'C1 has two Cl — identical; C2 has two H — identical'], ['2-methylbut-2-ene', 'CH₃C(CH₃)=CHCH₃', 'No', 'Left C of C=C has two CH₃ groups — identical'], ['Stilbene (PhCH=CHPh)', 'C₆H₅CH=CHC₆H₅', 'Yes', 'Each C has H and Ph — two different groups on each']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• The cis/trans naming system only works when there is a clearly identifiable "same" group on each C of the C=C. When groups are all different, use E/Z nomenclature (next topic).\n• Always draw the C=C as a flat rigid bond — show groups coming off at angles above and below.\n• To check: cover one C of the C=C and look at the two groups on the other C — are they different? Repeat for the other C. If both pass → geometric isomers exist.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Confusing geometric isomers with structural isomers — geometric isomers have the same connectivity; only the spatial arrangement differs.\n• Forgetting the second condition — both carbons of C=C must have two different groups.\n• Drawing the cis and trans isomers as if the C=C can rotate — emphasise that the π bond prevents rotation.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define geometric isomerism and state it is a type of stereoisomerism.',
        checked: false
      }, {
        text: 'I can state the two conditions required for geometric isomerism to exist.',
        checked: false
      }, {
        text: 'I can test whether a given alkene shows geometric isomerism.',
        checked: false
      }, {
        text: 'I can draw and label cis and trans isomers of but-2-ene and 1,2-dichloroethene.',
        checked: false
      }, {
        text: 'I can explain why cis isomers often have higher boiling points than trans isomers.',
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
      text: 'Understand: Geometric isomerism requires restricted rotation around C=C and two different groups on each double-bonded carbon.\n\nApply: Draw and label cis/trans isomers of but-2-ene. Why can\'t but-1-ene show geometric isomerism?\n\nAnalyze: Cis-but-2-ene boils at 3.7°C, trans at 0.9°C. How does shape affect IMF and b.p.?\n\nEvaluate: "Geometric isomers have the same chemical properties." Assess using cis vs trans fats.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Geometric (cis-trans) isomerism: same molecular formula and connectivity, different spatial arrangement around the C=C. Conditions: (1) restricted rotation (C=C π bond); (2) each C of C=C must carry two different groups. cis = same-side; trans = opposite-side. cis isomers often have higher b.p. (non-zero dipole moment) than trans (dipoles cancel).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-geo',
      prompt: 'Define geometric isomerism. Is it a type of structural or stereoisomerism?'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-conditions',
      prompt: 'State the two conditions required for geometric isomers to exist.'
    }, {
      id: 'cue-3',
      blockId: 'callout-worked-conditions',
      prompt: 'Does propene (CH₂=CHCH₃) show geometric isomerism? Explain.'
    }, {
      id: 'cue-4',
      blockId: 'callout-key-cistrans',
      prompt: 'Define cis and trans isomers.'
    }, {
      id: 'cue-5',
      blockId: 'table-properties',
      prompt: 'Why does cis-but-2-ene have a higher boiling point than trans-but-2-ene?'
    }],
    summaryText: 'Geometric isomers: same connectivity, different spatial arrangement around C=C. Conditions: restricted rotation + two different groups on each C of C=C. cis = same side; trans = opposite. cis b.p. often > trans (non-zero dipole).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Geometric isomerism is required for Topic 5 Alkenes.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['geometric isomerism', 'cis-trans', 'stereoisomerism']
  }]
};