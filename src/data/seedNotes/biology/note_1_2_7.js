export const note_biology_1_2_7 = {
  blocks: [
    {
      id: 'obj-aa-primary',
      type: 'objective',
      data: {
        text: 'Understand the general structure of amino acids, how peptide bonds form by condensation reactions, the nature of polypeptides, and what the primary structure of a protein means.',
      },
    },

    // ── Proteins intro ──────────────────────────────────────────────────────────
    {
      id: 'h-proteins-intro',
      type: 'heading',
      data: { text: 'Proteins and Their Diversity', level: 2 },
    },
    {
      id: 'list-proteins-intro',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The basic building blocks of proteins are amino acids',
          'There are 20 different amino acids found in almost all living organisms — indirect evidence for evolution from a common ancestor',
          'Amino acids can be joined in a vast range of different orders, producing many different proteins with many different functions',
          'Examples: haemoglobin (O₂ transport), fibrin (blood clotting mesh), enzymes (catalysts), antibodies (immune defence)',
        ],
      },
    },

    // ── Biuret test ─────────────────────────────────────────────────────────────
    {
      id: 'h-biuret',
      type: 'heading',
      data: { text: 'Biuret Test for Proteins', level: 2 },
    },
    {
      id: 'list-biuret',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Add sodium hydroxide (NaOH) solution to the test sample',
          'Add a few drops of dilute copper sulfate (CuSO₄) solution',
          'Positive result → solution turns mauve / purple (protein present)',
          'Negative result → solution remains blue (no protein)',
        ],
      },
    },
    {
      id: 'callout-biuret-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Biuret Exam Tip',
        text: 'The biuret test detects peptide bonds, not a specific protein. Cu²⁺ coordinates with nitrogen atoms in the peptide bond chain, producing the mauve colour. A single free amino acid will not give a positive result — you need at least a dipeptide.',
      },
    },

    // ── Amino acid structure ─────────────────────────────────────────────────────
    {
      id: 'h-aa-structure',
      type: 'heading',
      data: { text: 'Amino Acid Structure', level: 2 },
    },
    {
      id: 'p-aa-structure',
      type: 'paragraph',
      data: {
        text: 'All 20 amino acids share the same general structure. A central carbon atom — the α-carbon — is bonded to four groups: an amine group (−NH₂), a carboxyl (acid) group (−COOH), a hydrogen atom (−H), and an R-group (side chain). The first three groups are identical in every amino acid. Only the R-group differs, giving each amino acid its unique chemical properties — size, polarity, charge, and ability to form bonds.',
      },
    },
    {
      id: 'svg-aa-structure',
      type: 'svg',
      data: {
        caption: 'General structure of an amino acid. The R-group is the only part that differs between all 20 amino acids.',
        svg: `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .bond{stroke:#1f2937;stroke-width:2;fill:none}
      .grp{fill:#1e40af;font-weight:600}
      .rgrp{fill:#7c3aed;font-weight:600}
      .dim{fill:#6b7280;font-size:11px}
    </style>
  </defs>
  <circle cx="240" cy="108" r="24" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
  <text x="240" y="113" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="bold" fill="#166534">α-C</text>
  <line x1="240" y1="84" x2="240" y2="42" class="bond"/>
  <text x="240" y="33" text-anchor="middle" class="grp">−H</text>
  <line x1="216" y1="108" x2="132" y2="108" class="bond"/>
  <rect x="52" y="90" width="75" height="34" rx="7" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="89" y="112" text-anchor="middle" class="grp">−NH₂</text>
  <text x="89" y="132" text-anchor="middle" class="dim">amine group</text>
  <line x1="264" y1="108" x2="342" y2="108" class="bond"/>
  <rect x="342" y="90" width="95" height="34" rx="7" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="389" y="112" text-anchor="middle" class="grp">−COOH</text>
  <text x="389" y="132" text-anchor="middle" class="dim">carboxyl group</text>
  <line x1="240" y1="132" x2="240" y2="165" class="bond"/>
  <rect x="187" y="165" width="106" height="36" rx="7" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="240" y="188" text-anchor="middle" class="rgrp">R-group</text>
  <text x="240" y="210" text-anchor="middle" class="dim">differs in each amino acid</text>
</svg>`,
      },
    },
    {
      id: 'table-aa-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Three amino acids showing how only the R-group differs (from AQA Biology textbook, Figure 1.13)',
        headers: ['Amino acid', 'R-group', 'Key property'],
        rows: [
          ['Alanine', '−CH₃ (methyl)', 'Small, non-polar, hydrophobic'],
          ['Valine', '−CH(CH₃)₂ (isopropyl)', 'Branched, non-polar, hydrophobic'],
          ['Cysteine', '−CH₂−SH (thiol)', 'Contains sulfur — can form disulfide bridges'],
        ],
      },
    },

    // ── Peptide bond ─────────────────────────────────────────────────────────────
    {
      id: 'h-peptide-bond',
      type: 'heading',
      data: { text: 'Peptide Bond Formation — Condensation', level: 2 },
    },
    {
      id: 'p-peptide-bond',
      type: 'paragraph',
      data: {
        text: 'Amino acids join together by condensation reactions. A hydrogen atom is removed from the amine group (−NH₂) of one amino acid; the −OH group is removed from the carboxyl group (−COOH) of the other. These two atoms combine to release one molecule of water. The remaining atoms form a covalent C−N bond — the peptide bond. Joining two amino acids produces a dipeptide. Joining many in sequence produces an unbranched chain called a polypeptide. Polypeptides can be broken back to individual amino acids by hydrolysis.',
      },
    },
    {
      id: 'eq-peptide',
      type: 'equation',
      data: {
        html: 'Amino acid<sub>1</sub> + Amino acid<sub>2</sub> → Dipeptide + H₂O',
        caption: 'Condensation reaction forming a peptide bond',
      },
    },
    {
      id: 'svg-peptide-condensation',
      type: 'svg',
      data: {
        caption: 'Two amino acids join by condensation to form a dipeptide. The C−N bond formed is the peptide bond (shown in red). H₂O is released.',
        svg: `<svg viewBox="0 0 580 270" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>
      .bond{stroke:#1f2937;stroke-width:1.5;fill:none}
      .lbl{fill:#1f2937}
      .dim{fill:#6b7280}
      .pep{fill:#dc2626;font-weight:700;font-size:11px}
      .rgrp{fill:#7c3aed;font-weight:600}
    </style>
    <marker id="arr-cond" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#6b7280"/>
    </marker>
  </defs>

  <!-- Amino acid 1 -->
  <text x="90" y="18" text-anchor="middle" class="dim">Amino acid 1</text>
  <text x="18" y="56" class="lbl">H₂N</text>
  <line x1="36" y1="53" x2="55" y2="53" class="bond"/>
  <circle cx="63" cy="53" r="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="63" y="57" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="bold" fill="#166534">C</text>
  <line x1="63" y1="41" x2="63" y2="30" class="bond"/>
  <text x="63" y="25" text-anchor="middle" class="dim">H</text>
  <line x1="63" y1="65" x2="63" y2="76" class="bond"/>
  <text x="63" y="88" text-anchor="middle" class="rgrp">R₁</text>
  <line x1="75" y1="53" x2="98" y2="53" class="bond"/>
  <text x="107" y="57" text-anchor="middle" class="lbl">C</text>
  <line x1="103" y1="46" x2="100" y2="37" class="bond"/>
  <text x="99" y="32" text-anchor="middle" class="lbl">O</text>
  <line x1="117" y1="53" x2="133" y2="53" class="bond"/>
  <text x="142" y="57" fill="#dc2626" font-weight="bold" class="lbl">OH</text>

  <!-- + -->
  <text x="178" y="57" class="lbl" font-size="18" font-weight="bold">+</text>

  <!-- Amino acid 2 -->
  <text x="340" y="18" text-anchor="middle" class="dim">Amino acid 2</text>
  <text x="196" y="57" fill="#dc2626" font-weight="bold" class="lbl">H</text>
  <line x1="206" y1="53" x2="220" y2="53" class="bond"/>
  <text x="229" y="57" fill="#dc2626" font-weight="bold" class="lbl">N</text>
  <line x1="240" y1="53" x2="254" y2="53" class="bond"/>
  <text x="240" y="43" class="dim">H</text>
  <circle cx="265" cy="53" r="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="265" y="57" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="bold" fill="#166534">C</text>
  <line x1="265" y1="41" x2="265" y2="30" class="bond"/>
  <text x="265" y="25" text-anchor="middle" class="dim">H</text>
  <line x1="265" y1="65" x2="265" y2="76" class="bond"/>
  <text x="265" y="88" text-anchor="middle" class="rgrp">R₂</text>
  <line x1="277" y1="53" x2="298" y2="53" class="bond"/>
  <text x="307" y="57" text-anchor="middle" class="lbl">C</text>
  <line x1="303" y1="46" x2="300" y2="37" class="bond"/>
  <text x="299" y="32" text-anchor="middle" class="lbl">O</text>
  <line x1="317" y1="53" x2="334" y2="53" class="bond"/>
  <text x="342" y="57" class="lbl">OH</text>

  <!-- Arrow down -->
  <path d="M 290 103 L 290 148" stroke="#6b7280" stroke-width="2" marker-end="url(#arr-cond)"/>
  <text x="325" y="123" class="dim">condensation</text>
  <text x="325" y="138" class="dim">−H₂O</text>

  <!-- Dipeptide -->
  <text x="270" y="168" text-anchor="middle" class="dim">Dipeptide</text>
  <text x="12" y="206" class="lbl">H₂N</text>
  <line x1="32" y1="203" x2="50" y2="203" class="bond"/>
  <circle cx="58" cy="203" r="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="58" y="207" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="bold" fill="#166534">C</text>
  <line x1="58" y1="191" x2="58" y2="180" class="bond"/>
  <text x="58" y="175" text-anchor="middle" class="dim">H</text>
  <line x1="58" y1="215" x2="58" y2="226" class="bond"/>
  <text x="58" y="238" text-anchor="middle" class="rgrp">R₁</text>
  <line x1="70" y1="203" x2="92" y2="203" class="bond"/>
  <text x="101" y="207" text-anchor="middle" class="lbl">C</text>
  <line x1="97" y1="196" x2="94" y2="186" class="bond"/>
  <text x="93" y="181" text-anchor="middle" class="lbl">O</text>
  <!-- Peptide bond (red) -->
  <line x1="111" y1="203" x2="136" y2="203" stroke="#dc2626" stroke-width="2.5"/>
  <text x="123" y="222" text-anchor="middle" class="pep">peptide bond</text>
  <line x1="136" y1="203" x2="152" y2="203" class="bond"/>
  <text x="160" y="207" text-anchor="middle" class="lbl">N</text>
  <line x1="152" y1="195" x2="149" y2="185" class="bond"/>
  <text x="147" y="180" text-anchor="middle" class="dim">H</text>
  <line x1="170" y1="203" x2="188" y2="203" class="bond"/>
  <circle cx="198" cy="203" r="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="198" y="207" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="bold" fill="#166534">C</text>
  <line x1="198" y1="191" x2="198" y2="180" class="bond"/>
  <text x="198" y="175" text-anchor="middle" class="dim">H</text>
  <line x1="198" y1="215" x2="198" y2="226" class="bond"/>
  <text x="198" y="238" text-anchor="middle" class="rgrp">R₂</text>
  <line x1="210" y1="203" x2="232" y2="203" class="bond"/>
  <text x="241" y="207" text-anchor="middle" class="lbl">C</text>
  <line x1="237" y1="196" x2="234" y2="186" class="bond"/>
  <text x="233" y="181" text-anchor="middle" class="lbl">O</text>
  <line x1="251" y1="203" x2="268" y2="203" class="bond"/>
  <text x="276" y="207" text-anchor="middle" class="lbl">OH</text>

  <!-- + H₂O product -->
  <text x="380" y="206" class="lbl" font-size="18" font-weight="bold">+</text>
  <rect x="398" y="188" width="64" height="30" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="430" y="208" text-anchor="middle" fill="#92400e" font-weight="bold">H₂O</text>
  <text x="430" y="230" text-anchor="middle" font-size="10" class="dim">released</text>
</svg>`,
      },
    },
    {
      id: 'callout-peptide-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Peptide Bond — Key Facts',
        text: 'A peptide bond is a covalent C−N bond formed by condensation (−COOH + −NH₂ → C−N + H₂O). It is broken by hydrolysis (adding H₂O, e.g. during digestion by proteases). Dipeptide = 2 amino acids; polypeptide = many amino acids in an unbranched chain.',
      },
    },

    // ── Primary structure ────────────────────────────────────────────────────────
    {
      id: 'h-primary',
      type: 'heading',
      data: { text: 'Primary Structure of a Protein', level: 2 },
    },
    {
      id: 'p-primary',
      type: 'paragraph',
      data: {
        text: "The sequence of amino acids in a polypeptide chain is the protein's primary structure. This sequence is encoded in the gene for that polypeptide and is the same in all molecules of a particular protein. Changing even a single amino acid can alter the protein's three-dimensional shape and prevent it from carrying out its normal function.",
      },
    },
    {
      id: 'callout-primary-example',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Why Primary Structure Matters — Sickle Cell Anaemia',
        text: 'Normal haemoglobin and sickle haemoglobin differ by a single amino acid at position 6 of the β-chain: glutamic acid (charged R-group, hydrophilic) is replaced by valine (non-polar R-group, hydrophobic). This tiny change causes deoxygenated haemoglobin molecules to stick together, distorting red blood cells into sickle shapes that block capillaries and cannot carry oxygen effectively. One amino acid out of 146 causes the entire disease — demonstrating how critical primary structure is.',
      },
    },

    // ── Checklist + Summary ──────────────────────────────────────────────────────
    {
      id: 'checklist-aa',
      type: 'checklist',
      data: {
        items: [
          { text: 'Name the four groups on the α-carbon: −NH₂, −COOH, −H, and R-group', checked: false },
          { text: 'Explain that the R-group is the only structural difference between the 20 amino acids', checked: false },
          { text: 'Describe peptide bond formation: condensation, −COOH + −NH₂ → C−N bond + H₂O', checked: false },
          { text: 'Distinguish dipeptide (2 AA), polypeptide (many AA), protein (1+ polypeptide chains)', checked: false },
          { text: 'Define primary structure as the specific sequence of amino acids in the polypeptide chain', checked: false },
          { text: 'Describe the biuret test: NaOH then dilute CuSO₄ → mauve if protein present', checked: false },
          { text: 'State that all organisms use the same 20 amino acids — indirect evidence for evolution', checked: false },
        ],
      },
    },
    {
      id: 'summary-aa',
      type: 'summary',
      data: {
        text: "All 20 amino acids share a common backbone (α-carbon bonded to −NH₂, −COOH, H, and a unique R-group). They join by condensation reactions, releasing H₂O and forming C−N peptide bonds. Two amino acids → dipeptide; many → polypeptide. The biuret test (NaOH + CuSO₄ → mauve) detects peptide bonds. Primary structure is the amino acid sequence, determined by the gene, and directly determines the protein's shape and function.",
      },
    },
  ],

  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-aa-1',
        blockId: 'p-aa-structure',
        prompt: 'What four groups are attached to the α-carbon of every amino acid?',
      },
      {
        id: 'cue-aa-2',
        blockId: 'h-peptide-bond',
        prompt: 'Describe how a peptide bond forms. What type of reaction is this and what small molecule is released?',
      },
      {
        id: 'cue-aa-3',
        blockId: 'h-biuret',
        prompt: 'Describe the biuret test for proteins: reagents, procedure, and positive result.',
      },
      {
        id: 'cue-aa-4',
        blockId: 'h-primary',
        prompt: 'Define primary structure and explain why changing a single amino acid can destroy a protein\'s function.',
      },
      {
        id: 'cue-aa-5',
        blockId: 'list-proteins-intro',
        prompt: 'Why is the fact that all organisms use the same 20 amino acids considered indirect evidence for evolution?',
      },
    ],
    summaryText:
      'Amino acids: α-carbon + −NH₂ + −COOH + H + R-group (R differs in each of 20). Peptide bond = condensation (−COOH + −NH₂ → C−N + H₂O). Primary structure = amino acid sequence. Biuret test: NaOH + CuSO₄ → mauve = protein.',
    ready: false,
  },

  evidence: [
    {
      id: 'ev-1',
      title: 'AQA A Level Biology Student Book 1',
      detail: 'Pages 19–20: amino acid structure, peptide bond formation, primary structure of proteins',
      year: '2016',
      source: 'AQA Biology Student Book 1, Chapter 1 — Biological Molecules',
      tags: ['amino acids', 'primary structure', 'peptide bond', 'proteins', 'biuret'],
    },
  ],
};
