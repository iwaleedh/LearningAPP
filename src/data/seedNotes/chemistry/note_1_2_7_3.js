/**
 * WCH12 | Topic 7: Intermolecular Forces | Subtopic 3
 * Water anomalies from hydrogen bonding
 */

export const note_chemistry_1_2_7_3 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Explain the anomalous properties of water using hydrogen bonding: high boiling point, high surface tension, ice being less dense than liquid water, and water as a solvent.'
    }
  }, {
    id: 'h-anomalies',
    type: 'heading',
    data: {
      text: 'Anomalous Properties of Water',
      level: 2
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'p-anomalies',
    type: "list",
    data: {
      style: "unordered",
      items: ["Water has several unusual properties that cannot be explained by its small molecular mass (Mr = 18) alone.", "These anomalies arise from the extensive network of hydrogen bonds between water molecules.", "Each water molecule can form up to 4 hydrogen bonds \u2014 2 as a donor (via its O\u2013H bonds) and 2 as an acceptor (via its lone pairs)."]
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'callout-bp-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Anomaly 1 — Unexpectedly High Boiling Point',
      text: 'H₂O boiling point = 100°C. Based on the trend in Group 16 hydrides (H₂S bp −60°C, H₂Se bp −41°C, H₂Te bp −2°C), water should boil at approximately −80°C.\n\nActual bp = 100°C — far higher than expected.\n\nReason: extensive hydrogen bonding network requires much more energy to break than London forces alone. Many H-bonds must be broken to vaporise water.'
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'callout-ice-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Anomaly 2 — Ice is Less Dense than Liquid Water',
      text: 'Most substances are denser as solids than as liquids. Ice floats on water — highly unusual.\n\nReason: In ice, water molecules form a rigid, open lattice structure where each molecule is H-bonded to exactly 4 neighbours in a tetrahedral arrangement. This structure has larger spaces between molecules than liquid water.\n\nWhen ice melts, some H-bonds break → molecules can pack more closely → liquid water is DENSER than ice.\n\nEcological importance: ice floating insulates water below, allowing aquatic life to survive in winter.'
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'svg-ice',
    type: 'svg',
    data: {
      caption: 'Ice lattice — open tetrahedral H-bond network makes ice less dense than liquid water',
      svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ice hydrogen bond lattice">
  <!-- Ice lattice hexagonal arrangement -->
  <!-- Central O -->
  <circle cx="180" cy="100" r="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="104" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">O</text>
  <!-- Top O -->
  <circle cx="180" cy="30" r="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="34" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">O</text>
  <!-- Bottom O -->
  <circle cx="180" cy="170" r="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="180" y="174" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">O</text>
  <!-- Left O -->
  <circle cx="80" cy="100" r="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="80" y="104" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">O</text>
  <!-- Right O -->
  <circle cx="280" cy="100" r="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="280" y="104" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">O</text>
  <!-- H-bond dotted lines -->
  <line x1="180" y1="86" x2="180" y2="44" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="180" y1="114" x2="180" y2="156" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="166" y1="100" x2="94" y2="100" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="194" y1="100" x2="266" y2="100" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- H atoms on bonds -->
  <circle cx="180" cy="68" r="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
  <text x="180" y="72" text-anchor="middle" font-size="9" fill="#991b1b">H</text>
  <circle cx="180" cy="134" r="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
  <text x="180" y="138" text-anchor="middle" font-size="9" fill="#991b1b">H</text>
  <circle cx="128" cy="100" r="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
  <text x="128" y="104" text-anchor="middle" font-size="9" fill="#991b1b">H</text>
  <circle cx="232" cy="100" r="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
  <text x="232" y="104" text-anchor="middle" font-size="9" fill="#991b1b">H</text>
  <!-- Labels -->
  <text x="180" y="195" text-anchor="middle" font-size="9" fill="#6b7280">Open lattice — large spaces between molecules</text>
  <text x="20" y="20" font-size="9" fill="#6366f1">· · · = H-bond</text>
</svg>`
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'callout-solvent-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Anomaly 3 — Water as a Solvent',
      text: 'Water dissolves many ionic and polar substances:\n  • Ionic compounds: water molecules surround and separate ions (hydration). The δ− O attracts cations; the δ+ H attracts anions.\n  • Polar molecules: water forms H-bonds or dipole interactions with polar solutes\n  • Non-polar substances: do NOT dissolve well — cannot form H-bonds or dipole interactions with water\n\n"Like dissolves like" — polar solvents dissolve polar/ionic solutes; non-polar solvents dissolve non-polar solutes.'
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'callout-surface-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Anomaly 4 — High Surface Tension',
      text: 'Water has a much higher surface tension than most liquids.\n\nReason: molecules at the surface form H-bonds with neighbours below and to the sides, but not above → net inward force → surface contracts to minimum area.\n\nThe extensive H-bond network at the surface creates a strong "skin" — enough to support small insects (e.g. pond skaters).'
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'table-anomalies',
    type: 'comparisonTable',
    data: {
      caption: 'Summary of water anomalies and their explanations',
      headers: ['Anomaly', 'Expected behaviour', 'Actual behaviour', 'Explanation'],
      rows: [['Boiling point', '≈ −80°C (from Group 16 trend)', '100°C', 'Extensive H-bond network requires large energy to break'], ['Solid density', 'Denser than liquid', 'Ice less dense than water (floats)', 'Open tetrahedral lattice in ice has larger spaces'], ['Heat capacity', 'Low (small Mr)', 'Very high (4.18 J g⁻¹ K⁻¹)', 'Energy needed to partially break H-bonds before T rises'], ['Surface tension', 'Low (small molecule)', 'Highest of common liquids', 'Strong H-bond network at surface']]
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'h-checklist',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Water bp = 100°C; expected ≈ −80°C from Group 16 trend — H-bonds explain the difference',
        checked: false
      }, {
        text: 'Ice floats on water — open tetrahedral H-bond lattice in ice is less dense',
        checked: false
      }, {
        text: 'When ice melts, H-bonds partially break → molecules pack more closely → liquid denser',
        checked: false
      }, {
        text: 'Water dissolves ionic/polar substances by hydration (H-bonds/dipole interactions)',
        checked: false
      }, {
        text: 'High surface tension — H-bond network at surface creates inward force',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Water\'s hydrogen bond network explains its anomalous high boiling point (100°C vs expected −80°C), the fact that ice is less dense than liquid water (open tetrahedral lattice), its exceptional ability as a solvent, and its high surface tension. All these properties arise from the 4 H-bonds each water molecule can form.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-bp-key',
      prompt: 'What boiling point would be expected for water based on Group 16 trends? What is the actual value and why?'
    }, {
      id: 'cue-2',
      blockId: 'callout-ice-key',
      prompt: 'Why is ice less dense than liquid water? Why is this ecologically important?'
    }, {
      id: 'cue-3',
      blockId: 'callout-solvent-key',
      prompt: 'Explain how water dissolves ionic compounds. Why does water not dissolve non-polar substances?'
    }],
    summaryText: 'Water anomalies: high bp, ice less dense, excellent solvent, high surface tension — all due to H-bonding.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 7: Intermolecular Forces',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Hydrogen bonding', 'Water']
  }]
};