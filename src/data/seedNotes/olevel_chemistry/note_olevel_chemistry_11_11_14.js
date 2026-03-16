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
      id: 'svg-amino-acid',
      type: 'svg',
      data: {
        caption: 'General structure of An amino acid showing the amino group and carboxylic acid group attached to the central alpha carbon.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; stroke-linecap: round; }
            .double-bond { stroke: var(--color-text); stroke-width: 2; stroke-linecap: round; }
            .atom-c { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .atom-n { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: #3498db; text-anchor: end; dominant-baseline: middle; }
            .atom-o { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: #e74c3c; text-anchor: start; dominant-baseline: middle; }
            .atom-h { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: var(--color-text-secondary); text-anchor: middle; dominant-baseline: middle; }
            .atom-r { font-family: var(--font-sans); font-size: 24px; font-weight: bold; fill: #2ecc71; text-anchor: middle; dominant-baseline: middle; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text-secondary); text-anchor: middle; }
            .group-box { fill: none; stroke-dasharray: 4,4; stroke-width: 2; rx: 10; ry: 10; }
        </style>
    </defs>

    <g transform="translate(250, 100)">
        <!-- Central Carbon -->
        <text x="0" y="0" class="atom-c">C</text>
        
        <!-- Hydrogen (top) -->
        <line x1="0" y1="-20" x2="0" y2="-40" class="bond"/>
        <text x="0" y="-55" class="atom-h">H</text>

        <!-- R group (bottom) -->
        <line x1="0" y1="20" x2="0" y2="40" class="bond"/>
        <text x="0" y="55" class="atom-r">R</text>

        <!-- Amino Group (left) -->
        <line x1="-20" y1="0" x2="-40" y2="0" class="bond"/>
        <text x="-50" y="0" class="atom-n">H₂N</text>

        <!-- Carboxylic Acid Group (right) -->
        <line x1="20" y1="0" x2="40" y2="0" class="bond"/>
        <text x="50" y="0" class="atom-c">C</text>
        
        <line x1="70" y1="0" x2="90" y2="0" class="bond"/>
        <text x="100" y="0" class="atom-o">OH</text>
        
        <line x1="55" y1="-20" x2="55" y2="-40" class="double-bond"/>
        <line x1="65" y1="-20" x2="65" y2="-40" class="double-bond"/>
        <text x="60" y="-55" class="atom-o">O</text>

        <!-- Highlight Boxes & Labels -->
        <rect x="-105" y="-20" width="60" height="40" class="group-box" stroke="#3498db" fill="rgba(52, 152, 219, 0.1)"/>
        <text x="-75" y="40" class="label" fill="#3498db" font-weight="bold">Amino group</text>
        
        <rect x="35" y="-70" width="105" height="90" class="group-box" stroke="#e74c3c" fill="rgba(231, 76, 60, 0.1)"/>
        <text x="87" y="40" class="label" fill="#e74c3c" font-weight="bold">Carboxylic acid group</text>

        <rect x="-15" y="40" width="30" height="30" class="group-box" stroke="#2ecc71" fill="rgba(46, 204, 113, 0.1)"/>
        <text x="0" y="90" class="label" fill="#2ecc71" font-weight="bold">Variable side chain</text>
    </g>
</svg>`
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
      id: 'svg-peptide-bond',
      type: 'svg',
      data: {
        caption: 'Formation of a peptide bond between two amino acids via condensation reaction, releasing a water molecule.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; stroke-linecap: round; }
            .double-bond { stroke: var(--color-text); stroke-width: 2; stroke-linecap: round; }
            .box { fill: rgba(149, 165, 166, 0.2); stroke: var(--color-text); stroke-width: 2; }
            .atom-text { font-family: var(--font-sans); font-size: 20px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .water-group { fill: #e74c3c; font-weight: bold; }
            .highlight { fill: none; stroke: rgba(52, 152, 219, 0.3); stroke-width: 30; stroke-linecap: round; stroke-linejoin: round; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); text-anchor: middle; }
        </style>
    </defs>

    <!-- Amino acid 1 -->
    <g transform="translate(150, 70)">
        <text x="-40" y="0" class="atom-text">H₂N</text>
        <line x1="-15" y1="0" x2="0" y2="0" class="bond"/>
        
        <rect x="0" y="-15" width="30" height="30" class="box"/>
        
        <line x1="30" y1="0" x2="50" y2="0" class="bond"/>
        <text x="60" y="0" class="atom-text">C</text>
        <line x1="55" y1="-15" x2="55" y2="-25" class="double-bond"/>
        <line x1="65" y1="-15" x2="65" y2="-25" class="double-bond"/>
        <text x="60" y="-35" class="atom-text" fill="#e74c3c">O</text>
        
        <line x1="70" y1="0" x2="80" y2="0" class="bond" stroke="#e74c3c"/>
        <text x="95" y="0" class="atom-text water-group">OH</text>
        
        <!-- Dashed circle for water -->
        <ellipse cx="120" cy="0" rx="35" ry="20" fill="none" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4,4"/>
    </g>

    <text x="280" y="70" class="atom-text">+</text>

    <!-- Amino acid 2 -->
    <g transform="translate(320, 70)">
        <text x="-15" y="0" class="atom-text">N</text>
        <text x="-15" y="25" class="atom-text">H</text>
        <line x1="-15" y1="10" x2="-15" y2="15" class="bond"/>
        
        <line x1="-30" y1="0" x2="-25" y2="0" class="bond" stroke="#e74c3c"/>
        <text x="-45" y="0" class="atom-text water-group">H</text>
        
        <line x1="-5" y1="0" x2="10" y2="0" class="bond"/>
        <rect x="10" y="-15" width="30" height="30" class="box"/>
        
        <line x1="40" y1="0" x2="60" y2="0" class="bond"/>
        <text x="70" y="0" class="atom-text">C</text>
        <line x1="65" y1="-15" x2="65" y2="-25" class="double-bond"/>
        <line x1="75" y1="-15" x2="75" y2="-25" class="double-bond"/>
        <text x="70" y="-35" class="atom-text" fill="#e74c3c">O</text>
        
        <line x1="80" y1="0" x2="95" y2="0" class="bond"/>
        <text x="110" y="0" class="atom-text">OH</text>
    </g>
    
    <text x="270" y="100" class="label" fill="#e74c3c">H₂O removed</text>
    
    <!-- Arrow -->
    <path d="M 280 120 L 280 150" stroke="#e67e22" stroke-width="3" marker-end="url(#arrow-heat)"/>

    <!-- Dipeptide -->
    <g transform="translate(180, 200)">
        <text x="-40" y="0" class="atom-text">H₂N</text>
        <line x1="-15" y1="0" x2="0" y2="0" class="bond"/>
        
        <rect x="0" y="-15" width="30" height="30" class="box"/>
        
        <line x1="30" y1="0" x2="50" y2="0" class="bond"/>
        <text x="60" y="0" class="atom-text">C</text>
        <line x1="55" y1="-15" x2="55" y2="-25" class="double-bond"/>
        <line x1="65" y1="-15" x2="65" y2="-25" class="double-bond"/>
        <text x="60" y="-35" class="atom-text">O</text>
        
        <!-- Highlight -->
        <line x1="40" y1="0" x2="110" y2="0" class="highlight"/>
        <text x="75" y="-55" class="label" fill="#3498db" font-weight="bold">Peptide bond (–CONH–)</text>
        <line x1="75" y1="-45" x2="75" y2="-15" stroke="#3498db" stroke-width="1.5" marker-end="url(#arrow)"/>
        
        <line x1="70" y1="0" x2="80" y2="0" class="bond"/>
        
        <text x="90" y="0" class="atom-text">N</text>
        <text x="90" y="25" class="atom-text">H</text>
        <line x1="90" y1="10" x2="90" y2="15" class="bond"/>
        
        <line x1="100" y1="0" x2="120" y2="0" class="bond"/>
        <rect x="120" y="-15" width="30" height="30" class="box"/>
        
        <line x1="150" y1="0" x2="170" y2="0" class="bond"/>
        <text x="180" y="0" class="atom-text">C</text>
        <line x1="175" y1="-15" x2="175" y2="-25" class="double-bond"/>
        <line x1="185" y1="-15" x2="185" y2="-25" class="double-bond"/>
        <text x="180" y="-35" class="atom-text" fill="#e74c3c">O</text>
        
        <line x1="190" y1="0" x2="205" y2="0" class="bond"/>
        <text x="220" y="0" class="atom-text">OH</text>
    </g>

    <text x="450" y="200" class="atom-text">+  H₂O</text>
</svg>`
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
