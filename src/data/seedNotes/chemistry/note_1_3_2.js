export const note_chemistry_1_3_2 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Draw dot-and-cross diagrams for ionic compounds showing electron transfer; represent the electron configurations of both the resulting cation and anion correctly.'
    }
  }, {
    id: 'h-dotcross',
    type: 'heading',
    data: {
      text: 'Dot-and-Cross Diagrams for Ionic Compounds',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Dot-and-cross diagrams are a way of representing the electron configurations of ions after electron transfer has occurred.", "Each atom's electrons are shown as either dots (\u2022) or crosses (\xD7) to distinguish which atom they originated from.", "The ions are enclosed in square brackets with the charge shown outside."]
    }
  }, {
    id: 'callout-key-rules',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Rules for drawing dot-and-cross diagrams (ionic)',
      text: '1. Show only the outer shell electrons for each atom\n2. Draw the metal atom losing electrons (fewer electrons shown in cation)\n3. Draw the non-metal atom gaining electrons (more electrons shown in anion)\n4. Enclose each ion in square brackets [ ]\n5. Write the charge as a superscript outside the bracket: e.g. [  ]²⁺\n6. Use dots for one element\'s electrons and crosses for the other'
    }
  }, {
    id: 'h-nacl',
    type: 'heading',
    data: {
      text: 'Example 1: Sodium Chloride (NaCl)',
      level: 2
    }
  }, {
    id: 'svg-nacl',
    type: 'svg',
    data: {
      caption: 'Dot-and-cross diagram for the formation of Na⁺Cl⁻',
      svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Na atom -->
  <circle cx="70" cy="90" r="40" fill="none" stroke="#4f46e5" stroke-width="1.5"/>
  <circle cx="70" cy="90" r="20" fill="none" stroke="#4f46e5" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="70" y="94" text-anchor="middle" fill="#4f46e5" font-weight="bold" font-size="13">Na</text>
  <!-- Na outer electron (cross) -->
  <text x="70" y="48" text-anchor="middle" fill="#dc2626" font-size="14">×</text>
  <text x="52" y="160" text-anchor="middle" fill="#4f46e5" font-size="11">2,8,1</text>
  <!-- Arrow -->
  <line x1="116" y1="90" x2="152" y2="90" stroke="#374151" stroke-width="1.5" marker-end="url(#arrowB)"/>
  <text x="134" y="82" text-anchor="middle" fill="#374151" font-size="10">e⁻ transfer</text>
  <!-- Na+ ion -->
  <rect x="160" y="55" width="60" height="60" rx="8" fill="none" stroke="#4f46e5" stroke-width="1.5"/>
  <circle cx="190" cy="85" r="18" fill="none" stroke="#4f46e5" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="190" y="89" text-anchor="middle" fill="#4f46e5" font-weight="bold" font-size="13">Na</text>
  <text x="222" y="58" fill="#4f46e5" font-size="13" font-weight="bold">+</text>
  <text x="185" y="130" text-anchor="middle" fill="#4f46e5" font-size="11">2,8</text>
  <!-- Cl atom -->
  <circle cx="310" cy="90" r="40" fill="none" stroke="#16a34a" stroke-width="1.5"/>
  <circle cx="310" cy="90" r="22" fill="none" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="310" y="94" text-anchor="middle" fill="#16a34a" font-weight="bold" font-size="13">Cl</text>
  <!-- Cl outer electrons (7 dots around outer shell) -->
  <text x="310" y="48" text-anchor="middle" fill="#16a34a" font-size="13">•</text>
  <text x="348" y="72" text-anchor="middle" fill="#16a34a" font-size="13">•</text>
  <text x="350" y="110" text-anchor="middle" fill="#16a34a" font-size="13">•</text>
  <text x="310" y="134" text-anchor="middle" fill="#16a34a" font-size="13">•</text>
  <text x="272" y="110" text-anchor="middle" fill="#16a34a" font-size="13">• •</text>
  <text x="272" y="72" text-anchor="middle" fill="#16a34a" font-size="13">•</text>
  <text x="288" y="160" text-anchor="middle" fill="#16a34a" font-size="11">2,8,7</text>
  <!-- Note: after transfer, Cl gains the × from Na -->
  <text x="310" y="48" text-anchor="middle" fill="#dc2626" font-size="14" dx="10">×</text>
  <!-- Arrow 2 not needed — just label -->
  <text x="250" y="170" text-anchor="middle" fill="#374151" font-size="10">Cl gains e⁻ → Cl⁻ (2,8,8)</text>
  <!-- Arrow marker -->
  <defs>
    <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#374151"/>
    </marker>
  </defs>
</svg>`
    }
  }, {
    id: 'h-mgo',
    type: 'heading',
    data: {
      text: 'Example 2: Magnesium Oxide (MgO)',
      level: 2
    }
  }, {
    id: 'p-mgo',
    type: "list",
    data: {
      style: "unordered",
      items: ["Magnesium (Group 2, config 2,8,2) loses 2 electrons to form Mg\xB2\u207A (config 2,8 = [Ne]).", "Oxygen (Group 16, config 2,6) gains 2 electrons to form O\xB2\u207B (config 2,8 = [Ne]).", "Both ions achieve the neon configuration."]
    }
  }, {
    id: 'callout-we-mgo',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — MgO dot-and-cross description',
      text: 'Mg atom: outer shell shows 2 crosses (×× )\nMg²⁺ ion: outer shell empty — shows [Ne] core only, charge 2+\n\nO atom: outer shell shows 6 dots (• arranged in pairs)\nO²⁻ ion: outer shell shows 8 electrons (6 original dots + 2 crosses from Mg), charge 2−\n\nBoth ions now have 8 electrons in outer shell = noble gas (Ne) configuration.'
    }
  }, {
    id: 'h-cacl2',
    type: 'heading',
    data: {
      text: 'Example 3: Calcium Chloride (CaCl₂)',
      level: 2
    }
  }, {
    id: 'p-cacl2',
    type: "list",
    data: {
      style: "unordered",
      items: ["Calcium (Group 2) loses 2 electrons (one to each chlorine atom).", "Each chlorine gains 1 electron.", "The diagram shows: [Ca]\xB2\u207A with [Ar] configuration, and two separate [Cl]\u207B ions each with [Ar] configuration.", "Ratio: 1 Ca\xB2\u207A : 2 Cl\u207B."]
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistakes in dot-and-cross diagrams',
      text: '• Not using square brackets — brackets are essential for ions\n• Forgetting to write the charge outside the bracket\n• Showing inner shell electrons — only show the outermost shell\n• Drawing the same symbol (all dots or all crosses) — use dots for one element, crosses for the other\n• Incorrectly pairing electrons — lone pairs should be shown as pairs'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — what to show in ionic dot-and-cross',
      text: 'For ionic compounds, show ONLY the outer shell of each ion in the diagram (not all shells). The cation should have an empty (or reduced) outer shell; the anion should have a full outer shell. Always check charges balance to give a neutral compound.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Draw a dot-and-cross diagram for NaCl',
        checked: false
      }, {
        text: 'Draw a dot-and-cross diagram for MgO',
        checked: false
      }, {
        text: 'Draw a dot-and-cross diagram for CaCl₂',
        checked: false
      }, {
        text: 'Use square brackets and correct charges in all ionic diagrams',
        checked: false
      }, {
        text: 'Show only outer shell electrons in each ion',
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
      text: 'Understand: Dot-and-cross diagrams show the origin of electrons in bonds. Only outer-shell electrons need to be shown for ionic bonding.\n\nApply: Draw dot-and-cross for CaO showing electron transfer and resulting ion charges.\n\nAnalyze: NaCl and MgO are both ionic but MgO has much higher m.p. Explain using charge density and lattice energy.\n\nEvaluate: Dot-and-cross diagrams imply electrons "belong" to ions. Discuss the limitations of this model.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Dot-and-cross diagrams show electron transfer in ionic compounds. Use dots for one element, crosses for the other. Show only outer shell electrons. Enclose each ion in square brackets with the charge outside. Cation: electrons lost (reduced outer shell). Anion: electrons gained (full outer shell = noble gas config).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-rules',
      prompt: 'List the six rules for drawing a dot-and-cross diagram for an ionic compound.'
    }, {
      id: 'cue-2',
      blockId: 'svg-nacl',
      prompt: 'Describe what a dot-and-cross diagram for NaCl shows for each ion.'
    }, {
      id: 'cue-3',
      blockId: 'callout-we-mgo',
      prompt: 'How many electrons does Mg²⁺ show in its outer shell in a dot-and-cross diagram? Why?'
    }, {
      id: 'cue-4',
      blockId: 'callout-warning',
      prompt: 'State three common mistakes students make when drawing ionic dot-and-cross diagrams.'
    }, {
      id: 'cue-5',
      blockId: 'p-cacl2',
      prompt: 'Why does CaCl₂ have two Cl⁻ ions for every Ca²⁺?'
    }],
    summaryText: 'Ionic dot-and-cross: dots (one element) + crosses (other). Square brackets + charge. Outer shell only. Cation loses e⁻; anion gains e⁻ → both get noble gas config. NaCl: Na⁺ [Ne]; Cl⁻ [Ar].',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Dot-and-cross ionic diagrams',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['ionic bonding', 'dot-and-cross']
  }]
};