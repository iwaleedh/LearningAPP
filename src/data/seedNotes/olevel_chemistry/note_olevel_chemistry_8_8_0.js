export const note_olevel_chemistry_8_8_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-1-1-the-periodic-table.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure of the periodic table and explain how elements are arranged by atomic number and electron configuration.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Structure of the Periodic Table', level: 2 }
    },
    {
      id: 'call-layout',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Layout',
        text: 'Elements are arranged in order of <strong>increasing atomic number (proton number)</strong>.<br/><br/>• <strong>Periods</strong> (rows): 7 periods; elements in the same period have the same number of electron shells.<br/>• <strong>Groups</strong> (columns, numbered 1–0 or I–VII/VIII): elements in the same group have the same number of electrons in their outer shell → similar chemical properties.<br/><br/><strong>Group 0</strong> (or 18): Noble gases — full outer shell, very unreactive.<br/><strong>Groups 1–7</strong>: s- and p-block elements.<br/>Transition metals: large block between Groups 2 and 3.'
      }
    },
    {
      id: 'tbl-groups',
      type: 'comparisonTable',
      data: {
        caption: 'Key groups and their properties',
        headers: ['Group', 'Name', 'Outer electrons', 'Examples'],
        rows: [
          ['1 (I)', 'Alkali metals', '1', 'Li, Na, K, Rb, Cs'],
          ['2 (II)', 'Alkaline earth metals', '2', 'Mg, Ca, Ba'],
          ['7 (VII)', 'Halogens', '7', 'F, Cl, Br, I'],
          ['0 (VIII/18)', 'Noble gases', '8 (He: 2)', 'He, Ne, Ar, Kr']
        ]
      }
    },
    {
      id: 'call-predict',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Predicting Properties from Position',
        text: 'Knowing an element\'s group tells you:<br/>• Number of outer electrons → valency, bond type<br/>• Type of ion formed (metals lose e⁻; non-metals gain e⁻)<br/>• Reactivity trends<br/><br/>Knowing its period tells you:<br/>• Number of electron shells<br/>• Whether it is a metal or non-metal (metals are on the left; non-metals on the right; metalloids along the diagonal)'
      }
    },
    {
      id: 'call-metals-nonmetals',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Metals vs Non-Metals',
        text: '<strong>Metals</strong> (left and centre of periodic table):<br/>• Good conductors of heat and electricity<br/>• Malleable and ductile<br/>• High melting points (most)<br/>• Form positive ions<br/><br/><strong>Non-metals</strong> (right of periodic table):<br/>• Poor conductors (except graphite)<br/>• Brittle when solid<br/>• Form negative ions or covalent compounds<br/>• Lower melting/boiling points (mostly)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Periodic table: elements ordered by atomic number. Same group = same outer electrons = similar properties. Same period = same number of shells. Metals on left; non-metals on right. Group 0: full outer shell, noble gases. Group 1: 1 outer e⁻ (alkali metals). Group 7: 7 outer e⁻ (halogens).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Periodic table: ordered by atomic number. Groups = same outer electrons. Periods = same shells. Left = metals; right = non-metals.',
    cues: [
      { id: 'cue-1', blockId: 'call-layout', prompt: 'What determines the order of elements in the periodic table?', answer: 'Increasing atomic number (proton number).' },
      { id: 'cue-2', blockId: 'call-layout', prompt: 'Why do elements in the same group have similar chemical properties?', answer: 'They have the same number of electrons in their outer shell, which determines how they react with other substances.' },
      { id: 'cue-3', blockId: 'tbl-groups', prompt: 'How many outer electrons do halogens (Group 7) have, and name two examples.', answer: '7 outer electrons. Examples: chlorine (Cl) and bromine (Br).' }
    ]
  },
  evidence: [],
  mentions: []
};
