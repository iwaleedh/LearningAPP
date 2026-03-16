export const note_olevel_chemistry_11_11_14 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-3-4-proteins.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe amino acids as monomers and explain how condensation polymerisation forms proteins with peptide bonds; describe protein hydrolysis and roles of proteins.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Amino Acids — the Monomers of Proteins', level: 2 }
    },
    {
      id: 'call-amino',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Amino Acid Structure',
        text: 'Amino acids contain <strong>two functional groups</strong>:<br/>• <strong>Amino group (–NH₂)</strong> — basic<br/>• <strong>Carboxylic acid group (–COOH)</strong> — acidic<br/><br/>Both groups are attached to the same carbon atom (the α-carbon), which also carries a hydrogen atom and a variable <strong>R group</strong> (side chain) that differs between amino acids.<br/><br/>General structure: H₂N–CHR–COOH'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Condensation Polymerisation — Forming Peptide Bonds', level: 2 }
    },
    {
      id: 'call-pep',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Peptide Bond Formation',
        text: 'Proteins are formed by <strong>condensation polymerisation</strong> of amino acids.<br/><br/>Each time two amino acids join:<br/>• The –NH₂ of one reacts with the –COOH of another<br/>• A <strong>peptide bond (–CO–NH–)</strong> forms<br/>• One molecule of <strong>water (H₂O)</strong> is released per bond<br/><br/>A long chain of amino acids joined by peptide bonds = <strong>polypeptide / protein</strong>.<br/>There are 20 different amino acids; their sequence determines the protein\'s properties.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Hydrolysis of Proteins', level: 2 }
    },
    {
      id: 'call-hydro',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Breaking Down Proteins',
        text: '<strong>Hydrolysis</strong> is the reverse of condensation — water breaks the peptide bonds to release amino acids.<br/><br/>Conditions for hydrolysis:<br/>• <strong>Acid hydrolysis:</strong> heat with concentrated HCl (typically 6 mol/dm³, 110 °C)<br/>• <strong>Enzyme hydrolysis:</strong> proteases (e.g. pepsin, trypsin) under mild conditions in the body<br/><br/>Product: mixture of amino acids</td>'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Roles of Proteins', level: 2 }
    },
    {
      id: 'list-roles',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Enzymes</strong> — biological catalysts that speed up metabolic reactions (specific to one reaction; active site shape-specific)' },
          { text: '<strong>Structural proteins</strong> — keratin (hair, nails), collagen (tendons, skin), actin/myosin (muscle fibres)' },
          { text: '<strong>Transport proteins</strong> — haemoglobin carries O₂ in blood; membrane channel proteins' },
          { text: '<strong>Antibodies</strong> — immune system proteins that recognise and neutralise pathogens' },
          { text: '<strong>Hormones</strong> — insulin (regulates blood glucose) is a protein hormone' }
        ]
      }
    },
    {
      id: 'call-compare',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Proteins vs Addition Polymers vs Polyesters',
        text: '<strong>Proteins:</strong> condensation; monomers = amino acids; bond = peptide (–CO–NH–); releases H₂O<br/><strong>Polyesters:</strong> condensation; monomers = diol + dicarboxylic acid (or hydroxy-acid); bond = ester (–COO–); releases H₂O<br/><strong>Addition polymers:</strong> addition; monomers = alkenes; no small molecule released; unsaturated → saturated'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Amino acids (–NH₂ and –COOH groups) → condensation polymerisation → protein (polypeptide) + water. Bond formed = peptide bond (–CO–NH–). Hydrolysis (acid or enzyme) reverses this → amino acids. Proteins function as enzymes, structural materials, transport molecules, antibodies, and hormones.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Amino acids join by condensation (–H₂O) forming peptide bonds → polypeptides/proteins. Hydrolysis (acid or enzyme) reverses this. Proteins: enzymes, structural, transport.',
    cues: [
      { id: 'cue-1', blockId: 'call-amino', prompt: 'What two functional groups are present in every amino acid?', answer: 'An amino group (–NH₂) and a carboxylic acid group (–COOH), both attached to the same α-carbon.' },
      { id: 'cue-2', blockId: 'call-pep', prompt: 'Name the type of bond that links amino acids in a protein and state what small molecule is released during its formation.', answer: 'A peptide bond (–CO–NH–) is formed; one molecule of water (H₂O) is released for each bond (condensation polymerisation).' },
      { id: 'cue-3', blockId: 'call-hydro', prompt: 'How can proteins be hydrolysed in a laboratory?', answer: 'By heating with concentrated hydrochloric acid (acid hydrolysis), or by treating with proteolytic enzymes (enzyme hydrolysis). Both break the peptide bonds to release amino acids.' },
      { id: 'cue-4', blockId: 'list-roles', prompt: 'Give three different roles of proteins in a living organism.', answer: 'Any three: enzymes (catalyse reactions), structural (hair/muscle), transport (haemoglobin), antibodies (immune defence), hormones (e.g. insulin).' }
    ]
  },
  evidence: [],
  mentions: []
};
