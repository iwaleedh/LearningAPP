/**
 * WCH12 | Topic 6: Energetics | Subtopic 6
 * Bond enthalpies
 */

export const note_chemistry_1_2_6_6 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define mean bond enthalpy and use bond enthalpy data to calculate enthalpy changes of reactions. Understand why calculations using bond enthalpies give approximate values. Distinguish between average and exact bond enthalpies.'
    }
  },
  // ── BOND ENTHALPY DEFINITION ──────────────────────────────────────────
  {
    id: 'h-def',
    type: 'heading',
    data: {
      text: 'Bond Enthalpy (Bond Dissociation Enthalpy)',
      level: 2
    },
    terms: ['Bond enthalpy', 'Mean bond enthalpy']
  }, {
    id: 'p-def',
    type: "list",
    data: {
      style: "unordered",
      items: ["Bond enthalpy (also called bond dissociation enthalpy) is the energy required to break one mole of a specified covalent bond in gaseous molecules, with all species in the gaseous state.", "Breaking bonds always requires energy \u2014 it is always endothermic.", "Forming bonds always releases energy \u2014 it is always exothermic."]
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'callout-def-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Mean Bond Enthalpy',
      text: 'The mean (average) bond enthalpy is the average energy required to break one mole of a given type of bond across a range of different molecules.\n\nExample: The C–H bond enthalpy in CH₄, C₂H₆, C₂H₄ etc. all differ slightly. The mean C–H bond enthalpy (≈ +413 kJ mol⁻¹) is the average across many molecules.\n\nMean bond enthalpies are always POSITIVE (endothermic — energy in to break bonds).'
    },
    terms: ['Mean bond enthalpy']
  }, {
    id: 'callout-gaseous-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ All Species Must Be Gaseous',
      text: 'Bond enthalpy calculations only apply to GASEOUS species.\nIf reactants or products are liquids or solids, you must account for the enthalpy of vaporisation/sublimation first.\n\nThis is why bond enthalpy calculations give APPROXIMATE values for reactions involving liquids (e.g. when H₂O(l) is a product, not H₂O(g)).'
    },
    terms: ['Bond enthalpy']
  },
  // ── BOND BREAKING vs BOND FORMING ─────────────────────────────────────
  {
    id: 'h-breaking-forming',
    type: 'heading',
    data: {
      text: 'Bond Breaking and Bond Forming',
      level: 2
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'callout-bf-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 The Golden Rule',
      text: 'Breaking bonds:  ENDOTHERMIC  →  energy IN  →  positive contribution to ΔH\nForming bonds:   EXOTHERMIC   →  energy OUT →  negative contribution to ΔH\n\nΔH = Σ (bond enthalpies broken) − Σ (bond enthalpies formed)\n   = Energy IN − Energy OUT\n\nIf energy released forming bonds > energy absorbed breaking bonds → exothermic (ΔH < 0)\nIf energy absorbed breaking bonds > energy released forming bonds → endothermic (ΔH > 0)'
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'eq-bond',
    type: 'equation',
    data: {
      html: 'ΔH = Σ E(bonds broken) − Σ E(bonds formed)',
      caption: 'Bond enthalpy equation — sum of all bond enthalpies broken minus sum of all bond enthalpies formed (all in kJ mol⁻¹)'
    }
  },
  // ── COMMON BOND ENTHALPIES TABLE ──────────────────────────────────────
  {
    id: 'h-data',
    type: 'heading',
    data: {
      text: 'Mean Bond Enthalpy Data',
      level: 2
    },
    terms: ['Mean bond enthalpy']
  }, {
    id: 'table-bonds',
    type: 'comparisonTable',
    data: {
      caption: 'Mean bond enthalpies (kJ mol⁻¹) — these values are given in the Edexcel data booklet',
      headers: ['Bond', 'Mean bond enthalpy (kJ mol⁻¹)', 'Bond', 'Mean bond enthalpy (kJ mol⁻¹)'],
      rows: [['H–H', '+436', 'C–C', '+347'], ['C–H', '+413', 'C=C', '+612'], ['O–H', '+464', 'C≡C', '+838'], ['O=O', '+498', 'C–O', '+360'], ['N≡N', '+945', 'C=O', '+743'], ['H–Cl', '+432', 'C–Cl', '+346'], ['H–Br', '+366', 'C–N', '+305'], ['Cl–Cl', '+243', 'N–H', '+391'], ['Br–Br', '+193', 'O–O', '+146']]
    },
    terms: ['Mean bond enthalpy']
  },
  // ── WORKED EXAMPLES ───────────────────────────────────────────────────
  {
    id: 'h-we',
    type: 'heading',
    data: {
      text: 'Worked Examples',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 1 — Combustion of Methane',
      text: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)\n\nStep 1 — Identify bonds broken (reactants):\n  CH₄:  4 × C–H  =  4 × 413  = 1652 kJ\n  2O₂:  2 × O=O  =  2 × 498  =  996 kJ\n  Total bonds broken = 1652 + 996 = 2648 kJ\n\nStep 2 — Identify bonds formed (products):\n  CO₂:  2 × C=O  =  2 × 743  = 1486 kJ\n  2H₂O: 4 × O–H  =  4 × 464  = 1856 kJ\n  Total bonds formed = 1486 + 1856 = 3342 kJ\n\nStep 3 — Calculate ΔH:\n  ΔH = 2648 − 3342 = −694 kJ mol⁻¹\n\n∴ ΔH = −694 kJ mol⁻¹  (exothermic)\n\nNote: Literature value is −890 kJ mol⁻¹ — difference because H₂O is liquid in reality,\nnot gaseous, and these are mean (not exact) bond enthalpies.'
    },
    terms: ['Bond enthalpy', 'Mean bond enthalpy']
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 2 — Formation of HCl',
      text: 'H₂(g) + Cl₂(g) → 2HCl(g)\n\nBonds broken:\n  1 × H–H  =  436 kJ\n  1 × Cl–Cl = 243 kJ\n  Total broken = 679 kJ\n\nBonds formed:\n  2 × H–Cl = 2 × 432 = 864 kJ\n  Total formed = 864 kJ\n\nΔH = 679 − 864 = −185 kJ mol⁻¹\n\n∴ ΔH = −185 kJ mol⁻¹  (exothermic)'
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'callout-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 3 — Hydrogenation of Ethene',
      text: 'CH₂=CH₂(g) + H₂(g) → CH₃CH₃(g)\n\nBonds broken:\n  1 × C=C  = 612 kJ\n  4 × C–H  = 4 × 413 = 1652 kJ\n  1 × H–H  = 436 kJ\n  Total broken = 612 + 1652 + 436 = 2700 kJ\n\nBonds formed:\n  1 × C–C  = 347 kJ\n  6 × C–H  = 6 × 413 = 2478 kJ\n  Total formed = 347 + 2478 = 2825 kJ\n\nΔH = 2700 − 2825 = −125 kJ mol⁻¹\n\n∴ ΔH = −125 kJ mol⁻¹  (exothermic)'
    },
    terms: ['Bond enthalpy']
  },
  // ── WHY VALUES ARE APPROXIMATE ────────────────────────────────────────
  {
    id: 'h-approximate',
    type: 'heading',
    data: {
      text: 'Why Bond Enthalpy Calculations Give Approximate Values',
      level: 2
    },
    terms: ['Mean bond enthalpy']
  }, {
    id: 'list-approximate',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Mean bond enthalpies are AVERAGES across many different molecules — the actual bond enthalpy in a specific molecule may differ slightly.', 'Bond enthalpy data assumes all species are GASEOUS — if reactants or products are liquids or solids in reality, there are additional enthalpy changes (vaporisation, condensation) not accounted for.', 'The bond environment affects bond strength — e.g. the C–H bond in CH₄ is slightly different to the C–H bond in CH₃Cl.']
    },
    terms: ['Mean bond enthalpy']
  }, {
    id: 'callout-approx-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Explaining "Approximate Values"',
      text: 'When asked why bond enthalpy calculations give approximate/less accurate values than Hess\'s Law calculations using standard enthalpies:\n\n"Bond enthalpies are mean (average) values taken from a range of compounds, not the exact value for that specific bond in that specific molecule. Also, the calculation assumes all species are in the gaseous state, but in practice some reactants/products may be liquids."\n\nHess\'s Law using ΔH°f or ΔH°꜀ gives more accurate values because it uses experimentally determined data for the actual compounds involved.'
    },
    terms: ['Mean bond enthalpy']
  },
  // ── SVG: BOND BREAKING/FORMING ENERGY DIAGRAM ────────────────────────
  {
    id: 'svg-bond',
    type: 'svg',
    data: {
      caption: 'Energy diagram showing bond breaking (energy in) and bond forming (energy out) for an exothermic reaction',
      svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bond breaking and forming energy diagram">
  <defs>
    <marker id="ab1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#f97316"/>
    </marker>
    <marker id="ab2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a"/>
    </marker>
    <marker id="ab3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1"/>
    </marker>
  </defs>

  <!-- Reactants level -->
  <line x1="30" y1="120" x2="130" y2="120" stroke="#374151" stroke-width="2"/>
  <text x="80" y="113" text-anchor="middle" font-size="10" fill="#374151">Reactants</text>

  <!-- Broken bonds level (top — gaseous atoms) -->
  <line x1="170" y1="40" x2="290" y2="40" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="230" y="30" text-anchor="middle" font-size="10" fill="#6b7280">Gaseous atoms</text>
  <text x="230" y="18" text-anchor="middle" font-size="9" fill="#6b7280">(all bonds broken)</text>

  <!-- Products level (lower than reactants for exothermic) -->
  <line x1="330" y1="155" x2="440" y2="155" stroke="#374151" stroke-width="2"/>
  <text x="385" y="170" text-anchor="middle" font-size="10" fill="#374151">Products</text>

  <!-- Arrow: bond breaking (reactants → atoms) — orange, upward -->
  <line x1="80" y1="118" x2="200" y2="44" stroke="#f97316" stroke-width="2" marker-end="url(#ab1)"/>
  <text x="110" y="72" font-size="9" font-weight="bold" fill="#f97316" text-anchor="middle">ΣE(bonds</text>
  <text x="110" y="83" font-size="9" font-weight="bold" fill="#f97316" text-anchor="middle">broken)</text>
  <text x="110" y="94" font-size="9" fill="#f97316" text-anchor="middle">energy IN ↑</text>

  <!-- Arrow: bond forming (atoms → products) — green, downward -->
  <line x1="260" y1="44" x2="370" y2="151" stroke="#16a34a" stroke-width="2" marker-end="url(#ab2)"/>
  <text x="335" y="85" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">ΣE(bonds</text>
  <text x="335" y="96" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">formed)</text>
  <text x="335" y="107" font-size="9" fill="#16a34a" text-anchor="middle">energy OUT ↓</text>

  <!-- ΔH arrow: reactants → products (downward for exothermic) -->
  <line x1="440" y1="120" x2="440" y2="157" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#ab3)"/>
  <line x1="130" y1="120" x2="440" y2="120" stroke="#6366f1" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="448" y="140" font-size="10" font-weight="bold" fill="#6366f1">ΔH</text>
  <text x="448" y="152" font-size="9" fill="#6366f1">(−ve)</text>
</svg>`
    },
    terms: ['Bond enthalpy']
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-checklist',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Bond breaking: always endothermic (energy IN, + contribution)',
        checked: false
      }, {
        text: 'Bond forming: always exothermic (energy OUT, − contribution)',
        checked: false
      }, {
        text: 'ΔH = Σ E(bonds broken) − Σ E(bonds formed)',
        checked: false
      }, {
        text: 'Multiply each bond enthalpy by the number of that bond type broken/formed',
        checked: false
      }, {
        text: 'Mean bond enthalpies give APPROXIMATE results — state two reasons why',
        checked: false
      }, {
        text: 'All species must be gaseous for bond enthalpy calculations to apply',
        checked: false
      }, {
        text: 'Bond enthalpies are always positive — never negative',
        checked: false
      }]
    }
  },
  // ── SUMMARY ───────────────────────────────────────────────────────────
  {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Bond enthalpy is the energy to break 1 mol of a covalent bond in gaseous molecules (always endothermic, always positive). Mean bond enthalpies are averages across many molecules. ΔH = Σ E(bonds broken) − Σ E(bonds formed). Calculations give approximate values because mean enthalpies are averages and assume all species are gaseous. Bond forming is exothermic; bond breaking is endothermic.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-def-key',
      prompt: 'Define mean bond enthalpy. Why is it described as "mean"? What are the units?'
    }, {
      id: 'cue-2',
      blockId: 'callout-bf-key',
      prompt: 'State the bond enthalpy equation. Which is endothermic — bond breaking or forming?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). Use bond enthalpies to calculate ΔH. (C–H=413, O=O=498, C=O=743, O–H=464 kJ mol⁻¹)'
    }, {
      id: 'cue-4',
      blockId: 'callout-we2',
      prompt: 'H₂(g) + Cl₂(g) → 2HCl(g). Calculate ΔH using bond enthalpies. (H–H=436, Cl–Cl=243, H–Cl=432 kJ mol⁻¹)'
    }, {
      id: 'cue-5',
      blockId: 'h-approximate',
      prompt: 'Give TWO reasons why bond enthalpy calculations give approximate rather than exact values.'
    }],
    summaryText: 'Bond enthalpy definition, ΔH = Σ broken − Σ formed, worked examples, why values are approximate.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry WCH12 Specification',
    detail: 'Topic 6: Energetics — mean bond enthalpies, bond breaking/forming, ΔH calculations',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['Energetics', 'Bond enthalpy', 'WCH12']
  }]
};