/**
 * WCH12 | Topic 7: Intermolecular Forces | Subtopic 2
 * Hydrogen bonding
 */

export const note_chemistry_1_2_7_2 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define hydrogen bonding and state the conditions required for it to form. Explain why hydrogen bonds are stronger than other intermolecular forces. Describe hydrogen bonding in water, ammonia and HF.'
    }
  }, {
    id: 'h-hbond',
    type: 'heading',
    data: {
      text: 'Hydrogen Bonding',
      level: 2
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'callout-hbond-def',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Definition — Hydrogen Bond',
      text: 'A hydrogen bond is a strong intermolecular attraction between:\n  • A hydrogen atom covalently bonded to a highly electronegative atom (N, O or F)\n  • A lone pair on a neighbouring N, O or F atom\n\nConditions required:\n  1. H bonded directly to N, O or F (the δ+ H)\n  2. A lone pair on N, O or F in the neighbouring molecule (the δ− acceptor)\n\nHydrogen bonds are the STRONGEST type of intermolecular force (but weaker than covalent bonds).'
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'p-hbond',
    type: "list",
    data: {
      style: "unordered",
      items: ["Hydrogen bonds form because N, O and F are so electronegative that they pull electron density strongly away from the H atom, leaving the H with a significant \u03B4+ charge.", "This small, highly charged H+ is attracted strongly to a lone pair on a neighbouring N, O or F.", "The hydrogen bond is represented by a dotted line (\xB7 \xB7 \xB7)."]
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'svg-hbond-water',
    type: 'svg',
    data: {
      caption: 'Hydrogen bonding between water molecules — each H₂O can form up to 4 hydrogen bonds',
      svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydrogen bonding in water">
  <!-- Central water molecule -->
  <ellipse cx="200" cy="90" rx="40" ry="25" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="200" y="87" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">O</text>
  <text x="200" y="100" text-anchor="middle" font-size="9" fill="#1e40af">δ−</text>
  <!-- H atoms on central molecule -->
  <circle cx="165" cy="75" r="12" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="165" y="79" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">H</text>
  <text x="153" y="68" font-size="8" fill="#991b1b">δ+</text>
  <circle cx="235" cy="75" r="12" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="235" y="79" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">H</text>
  <text x="247" y="68" font-size="8" fill="#991b1b">δ+</text>
  <!-- Left water molecule -->
  <ellipse cx="80" cy="55" rx="30" ry="18" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="80" y="59" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">O</text>
  <circle cx="110" cy="65" r="10" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="110" y="69" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">H</text>
  <!-- H-bond dotted line left -->
  <line x1="121" y1="66" x2="153" y2="74" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="135" y="63" font-size="8" fill="#6366f1" text-anchor="middle">H-bond</text>
  <!-- Right water molecule -->
  <ellipse cx="330" cy="55" rx="30" ry="18" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="330" y="59" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">O</text>
  <circle cx="300" cy="65" r="10" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="300" y="69" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">H</text>
  <!-- H-bond dotted line right -->
  <line x1="289" y1="66" x2="247" y2="74" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="270" y="63" font-size="8" fill="#6366f1" text-anchor="middle">H-bond</text>
  <!-- Bottom water molecule -->
  <ellipse cx="200" cy="155" rx="30" ry="18" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="200" y="159" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">O</text>
  <circle cx="200" cy="128" r="10" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="200" y="132" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">H</text>
  <!-- H-bond dotted line bottom -->
  <line x1="200" y1="117" x2="200" y2="114" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`
    },
    terms: ['Hydrogen bond']
  }, {
    id: 'table-hbond',
    type: 'comparisonTable',
    data: {
      caption: 'Comparison of intermolecular forces — relative strengths',
      headers: ['Force type', 'Relative strength', 'Present in', 'Example'],
      rows: [['London forces', 'Weakest', 'All molecules', 'CH₄, noble gases'], ['Permanent dipole–dipole', 'Medium', 'Polar molecules', 'HCl, propanone'], ['Hydrogen bonds', 'Strongest IMF', 'Molecules with N–H, O–H or H–F bonds', 'H₂O, NH₃, HF, alcohols']]
    },
    terms: ['Hydrogen bond', 'London forces']
  }, {
    id: 'callout-tip-notation',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Drawing Hydrogen Bonds',
      text: 'Always show:\n  • The δ+ on H and δ− on N/O/F\n  • The dotted line (· · ·) between δ+H and the lone pair\n  • The direction: δ+H · · · :N/O/F\n  • Lone pair notation on the acceptor atom\n\nThe hydrogen bond is between H and the lone pair — NOT between two O atoms directly.'
    }
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
        text: 'H-bond conditions: H bonded to N, O or F; lone pair on N, O or F in neighbour',
        checked: false
      }, {
        text: 'Hydrogen bonds are the strongest intermolecular force (but weaker than covalent)',
        checked: false
      }, {
        text: 'Represent H-bonds with dotted lines: δ+H · · · :N/O/F',
        checked: false
      }, {
        text: 'Each H₂O can form up to 4 hydrogen bonds (2 as donor, 2 as acceptor)',
        checked: false
      }, {
        text: 'HF, H₂O, NH₃ all form hydrogen bonds',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Hydrogen bonds form between δ+H (bonded to N, O or F) and a lone pair on a neighbouring N, O or F. They are the strongest intermolecular force. Water can form up to 4 hydrogen bonds per molecule. H-bonds explain the anomalously high boiling points of H₂O, HF and NH₃ compared with their heavier hydride analogues.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-hbond-def',
      prompt: 'State the conditions required for hydrogen bond formation. Between which atoms do hydrogen bonds form?'
    }, {
      id: 'cue-2',
      blockId: 'table-hbond',
      prompt: 'Rank the three types of intermolecular force in order of increasing strength. Give an example molecule for each.'
    }, {
      id: 'cue-3',
      blockId: 'callout-tip-notation',
      prompt: 'Describe how to correctly draw a hydrogen bond between two water molecules.'
    }],
    summaryText: 'Hydrogen bond definition, conditions, strength comparison, drawing notation.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 7: Intermolecular Forces',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Hydrogen bonding']
  }]
};