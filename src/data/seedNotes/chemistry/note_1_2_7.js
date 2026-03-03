export const note_chemistry_1_2_7 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Write full and abbreviated electronic configurations for elements and their ions; relate electronic configuration to position in the periodic table.'
    }
  }, {
    id: 'h-config',
    type: 'heading',
    data: {
      text: 'Writing Electronic Configurations',
      level: 2
    }
  }, {
    id: 'p-config',
    type: "list",
    data: {
      style: "unordered",
      items: ["The electronic configuration of an atom describes how its electrons are arranged in sub-shells.", "Electrons fill sub-shells in order of increasing energy (Aufbau principle), with Hund's rule applied to degenerate orbitals.", "The configuration is written as a series of sub-shell labels with superscript electron counts."]
    }
  }, {
    id: 'table-configs',
    type: 'comparisonTable',
    data: {
      caption: 'Electronic configurations of selected elements',
      headers: ['Element', 'Z', 'Full configuration', 'Abbreviated'],
      rows: [['Hydrogen', '1', '1s¹', '1s¹'], ['Helium', '2', '1s²', '1s²'], ['Carbon', '6', '1s² 2s² 2p²', '[He] 2s² 2p²'], ['Neon', '10', '1s² 2s² 2p⁶', '[He] 2s² 2p⁶'], ['Sodium', '11', '1s² 2s² 2p⁶ 3s¹', '[Ne] 3s¹'], ['Chlorine', '17', '1s² 2s² 2p⁶ 3s² 3p⁵', '[Ne] 3s² 3p⁵'], ['Calcium', '20', '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²', '[Ar] 4s²'], ['Iron', '26', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²', '[Ar] 3d⁶ 4s²']]
    }
  }, {
    id: 'h-ions',
    type: 'heading',
    data: {
      text: 'Electronic Configurations of Ions',
      level: 2
    }
  }, {
    id: 'p-ions',
    type: "list",
    data: {
      style: "unordered",
      items: ["When atoms form ions, electrons are removed from or added to the outermost sub-shell.", "For transition metal cations, the 4s electrons are lost first (even though 4s fills before 3d, the 4s electrons are at higher energy in the ion and are removed first)."]
    }
  }, {
    id: 'list-ion-configs',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Na⁺ (loses 1e⁻): 1s² 2s² 2p⁶ — same as neon', 'Cl⁻ (gains 1e⁻): 1s² 2s² 2p⁶ 3s² 3p⁶ — same as argon', 'Ca²⁺ (loses 2e⁻ from 4s): 1s² 2s² 2p⁶ 3s² 3p⁶ — same as argon', 'Fe²⁺ (loses 2e⁻ from 4s): [Ar] 3d⁶', 'Fe³⁺ (loses 3e⁻: 2 from 4s, 1 from 3d): [Ar] 3d⁵']
    }
  }, {
    id: 'callout-warning-4s3d',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — 4s and 3d in transition metal ions',
      text: 'Although 4s fills before 3d, the 4s electrons are ALWAYS removed first when transition metals form ions. This is because in the cation, 3d is lower in energy than 4s.\n\nFe: [Ar] 3d⁶ 4s²\nFe²⁺: [Ar] 3d⁶   ← 4s electrons removed first\nFe³⁺: [Ar] 3d⁵   ← one more electron removed from 3d'
    }
  }, {
    id: 'h-periodicity',
    type: 'heading',
    data: {
      text: 'Electronic Configuration and the Periodic Table',
      level: 2
    }
  }, {
    id: 'p-periodicity',
    type: "list",
    data: {
      style: "unordered",
      items: ["The periodic table is arranged so that elements in the same group have the same outer shell (valence) electron configuration.", "The period number tells you the highest principal quantum number (shell) in use.", "The block of the periodic table corresponds to the sub-shell being filled."]
    }
  }, {
    id: 'table-blocks',
    type: 'comparisonTable',
    data: {
      caption: 'Periodic table blocks and the sub-shell being filled',
      headers: ['Block', 'Sub-shell filling', 'Elements', 'Example'],
      rows: [['s-block', 's sub-shell', 'Groups 1 & 2', 'Na: [Ne] 3s¹'], ['p-block', 'p sub-shell', 'Groups 3–8 (13–18)', 'Cl: [Ne] 3s² 3p⁵'], ['d-block', 'd sub-shell', 'Transition metals', 'Fe: [Ar] 3d⁶ 4s²'], ['f-block', 'f sub-shell', 'Lanthanides/actinides', 'Ce: [Xe] 4f¹ 5d¹ 6s²']]
    }
  }, {
    id: 'callout-key-valence',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Valence electrons and group number',
      text: 'The number of outer shell (valence) electrons equals the group number (for s- and p-block elements):\n• Group 1: 1 valence electron (ns¹)\n• Group 2: 2 valence electrons (ns²)\n• Group 6 (16): 6 valence electrons (ns² np⁴)\n• Group 7 (17): 7 valence electrons (ns² np⁵)'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — using the periodic table as a guide',
      text: 'To write the configuration of any element up to Z=36, count across the periods:\n1st period: fills 1s (2 elements)\n2nd period: fills 2s then 2p (8 elements)\n3rd period: fills 3s then 3p (8 elements)\n4th period: fills 4s, then 3d, then 4p (18 elements)'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Write full electronic configurations for elements Z = 1–36',
        checked: false
      }, {
        text: 'Write abbreviated configurations using noble gas cores',
        checked: false
      }, {
        text: 'Write electronic configurations of common ions (e.g. Na⁺, Ca²⁺, Fe²⁺, Fe³⁺, Cl⁻)',
        checked: false
      }, {
        text: 'Explain why 4s electrons are lost before 3d in transition metal ions',
        checked: false
      }, {
        text: 'Link group number to number of valence electrons',
        checked: false
      }, {
        text: 'Identify the s, p, d, f blocks on the periodic table',
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
      text: 'Understand: Electronic configurations follow Aufbau, Pauli, and Hund\'s rules. These explain the periodic table structure.\n\nApply: Write configurations for Fe (Z=26) and Fe²⁺. Which electrons are removed first?\n\nAnalyze: Cr has [Ar] 3d⁵4s¹ not [Ar] 3d⁴4s². Explain the extra stability of half-filled d subshells.\n\nEvaluate: Could the periodic table be arranged by electron configuration rather than atomic number? Would it be more useful?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Electronic configurations use Aufbau (lowest energy first) and Hund\'s rule. Abbreviated form uses noble gas core: e.g. Na = [Ne] 3s¹. For ions: remove/add electrons from/to outermost sub-shell; transition metal ions lose 4s before 3d. Periodic table blocks: s (Groups 1–2), p (Groups 13–18), d (transition metals), f (lanthanides/actinides).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-configs',
      prompt: 'Write the full electronic configuration of chlorine (Z=17).'
    }, {
      id: 'cue-2',
      blockId: 'list-ion-configs',
      prompt: 'Write the electronic configuration of Fe²⁺ and Fe³⁺ (Fe is Z=26).'
    }, {
      id: 'cue-3',
      blockId: 'callout-warning-4s3d',
      prompt: 'Why are 4s electrons removed before 3d when transition metals form ions?'
    }, {
      id: 'cue-4',
      blockId: 'table-blocks',
      prompt: 'What sub-shell is being filled in the s-block, p-block and d-block of the periodic table?'
    }, {
      id: 'cue-5',
      blockId: 'callout-key-valence',
      prompt: 'How does the group number relate to the number of valence electrons for s- and p-block elements?'
    }],
    summaryText: 'Aufbau + Hund\'s rule fills orbitals. Abbreviated form uses [noble gas] core. Ions: lose/gain from outermost; transition metals lose 4s first. s-block = Groups 1–2; p-block = Groups 13–18; d-block = transition metals.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 'Electronic configuration, periodicity, blocks',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['electron configuration', 'periodicity']
  }]
};