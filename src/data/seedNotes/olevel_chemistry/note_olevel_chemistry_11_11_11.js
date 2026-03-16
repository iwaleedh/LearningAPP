export const note_olevel_chemistry_11_11_11 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-3-1-polymers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define monomers, polymers, and polymerisation. Distinguish between addition and condensation polymerisation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Polymers', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Monomer:</strong> A small, simple molecule that can join to form a polymer. Must have a functional group that allows bonding.<br/><br/><strong>Polymer:</strong> A very large molecule made of many repeating units (monomers) joined together by covalent bonds.<br/><br/><strong>Polymerisation:</strong> The reaction in which many monomer molecules join together to form a polymer.<br/><br/>n(monomer) → [-monomer-]ₙ (polymer)<br/><br/><strong>Two types:</strong><br/>1. <strong>Addition polymerisation</strong> — monomers with C=C double bonds; only one product formed.<br/>2. <strong>Condensation polymerisation</strong> — monomers with two functional groups; small molecule (H₂O or HCl) released each time bonds form.'
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Addition vs condensation polymerisation',
        headers: ['Feature', 'Addition', 'Condensation'],
        rows: [
          ['Monomer type', 'Alkenes (contain C=C)', 'Two functional groups (OH+COOH, or diamine+diacid etc.)'],
          ['Small molecule produced?', 'No — only the polymer', 'Yes — water (H₂O) or HCl released each bond formed'],
          ['Chain growth mechanism', 'Double bond opens; atoms add', 'Functional groups react, releasing small molecule'],
          ['Examples', 'poly(ethene), poly(propene), PVC, PTFE', 'Nylon, polyester, protein, DNA'],
          ['Repeat unit formula', 'Same as monomer (minus double bond)', 'Two monomers minus the small molecule']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: identify the type of polymerisation',
        text: 'If the monomer contains a C=C double bond → addition polymerisation.<br/>If the monomer has two different functional groups (like –OH and –COOH) → condensation polymerisation.<br/>If H₂O or HCl is released → condensation polymerisation.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Monomer = small molecule; polymer = many monomers joined. Addition polymerisation: alkene monomers (C=C); no small molecule released. Condensation: bifunctional monomers; H₂O or HCl released. Addition → poly(alkenes); condensation → nylon, polyester, proteins.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Polymer = many monomers joined. Addition (C=C monomers, no small molecule). Condensation (two functional groups, releases H₂O or HCl).',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define monomer and polymer.', answer: 'A monomer is a small molecule that can join to others to form a polymer. A polymer is a large molecule made of many repeating monomer units joined by covalent bonds.' },
      { id: 'cue-2', blockId: 'tbl-compare', prompt: 'What distinguishes addition from condensation polymerisation?', answer: 'Addition: monomers contain C=C double bonds; no other molecule is released; only polymer forms. Condensation: monomers have two functional groups; a small molecule (H₂O or HCl) is released each time bonds form.' },
      { id: 'cue-3', blockId: 'call-tip', prompt: 'How can you identify whether a polymer is made by addition or condensation polymerisation?', answer: 'If the monomer contains a C=C double bond → addition. If the monomer has two functional groups and a small molecule (H₂O or HCl) is produced → condensation.' }
    ]
  },
  evidence: [],
  mentions: []
};
