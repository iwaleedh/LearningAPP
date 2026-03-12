export const note_biology_1_2_8 = {
  blocks: [
    {
      id: 'obj-protein-structure',
      type: 'objective',
      data: {
        text: 'Understand the secondary, tertiary and quaternary levels of protein structure, the bonds that maintain each level, the meaning of denaturation, and the distinction between fibrous and globular proteins.',
      },
    },

    // ── Secondary structure ──────────────────────────────────────────────────────
    {
      id: 'h-secondary',
      type: 'heading',
      data: { text: 'Secondary Structure', level: 2 },
    },
    {
      id: 'p-secondary',
      type: 'paragraph',
      data: {
        text: 'After its primary structure (amino acid sequence) is established, parts of the polypeptide chain fold into regular, repeating patterns — this is the secondary structure. Both types of secondary structure are maintained entirely by hydrogen bonds forming between backbone groups (C=O and N−H), not between R-groups.',
      },
    },
    {
      id: 'list-secondary',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'α-helix: the polypeptide backbone coils into a right-handed spiral; hydrogen bonds form between the C=O of one amino acid and the N−H group four residues along the chain — stabilising the helical shape',
          'β-pleated sheet: two or more regions of the chain run parallel (or antiparallel) to each other and are linked by hydrogen bonds between backbone groups; the sheet is slightly pleated (not flat)',
          'Some regions adopt neither structure and form random coils',
          'The amino acid sequence determines which secondary structure forms: certain sequences favour the α-helix, others favour β-sheet',
        ],
      },
    },
    {
      id: 'svg-secondary',
      type: 'svg',
      data: {
        caption: 'Secondary structure: α-helix (left) and β-pleated sheet (right). Both are maintained by hydrogen bonds (blue dashed lines).',
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>
      .lbl{fill:#1f2937}
      .dim{fill:#6b7280}
      .hbond{stroke:#3b82f6;stroke-width:1.5;stroke-dasharray:5,3;fill:none}
      .chain{stroke:#6366f1;stroke-width:3;fill:none}
      .chain2{stroke:#16a34a;stroke-width:3;fill:none}
    </style>
  </defs>
  <line x1="300" y1="20" x2="300" y2="305" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- α-HELIX -->
  <text x="150" y="22" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e40af">α-Helix</text>
  <path d="M 150 40 C 200 58, 200 78, 150 98 C 100 118, 100 138, 150 158 C 200 178, 200 198, 150 218 C 100 238, 100 258, 150 278" class="chain"/>
  <line x1="150" y1="40"  x2="150" y2="98"  class="hbond"/>
  <line x1="150" y1="98"  x2="150" y2="158" class="hbond"/>
  <line x1="150" y1="158" x2="150" y2="218" class="hbond"/>
  <line x1="150" y1="218" x2="150" y2="278" class="hbond"/>
  <text x="224" y="76"  class="dim" font-size="10">H-bonds stabilise</text>
  <text x="224" y="88"  class="dim" font-size="10">the spiral</text>
  <line x1="222" y1="80" x2="178" y2="92" stroke="#9ca3af" stroke-width="1"/>
  <text x="150" y="300" text-anchor="middle" class="lbl" font-size="11">polypeptide coils into a spiral</text>

  <!-- β-PLEATED SHEET -->
  <text x="450" y="22" text-anchor="middle" font-weight="bold" font-size="13" fill="#166534">β-Pleated Sheet</text>
  <polyline points="330,50 355,72 380,50 405,72 430,50 455,72 475,50" class="chain"/>
  <polyline points="330,132 355,154 380,132 405,154 430,132 455,154 475,132" class="chain2"/>
  <polyline points="330,214 355,236 380,214 405,236 430,214 455,236 475,214" class="chain"/>
  <line x1="355" y1="72"  x2="355" y2="132" class="hbond"/>
  <line x1="380" y1="50"  x2="380" y2="132" class="hbond"/>
  <line x1="405" y1="72"  x2="405" y2="132" class="hbond"/>
  <line x1="430" y1="50"  x2="430" y2="132" class="hbond"/>
  <line x1="355" y1="154" x2="355" y2="214" class="hbond"/>
  <line x1="380" y1="132" x2="380" y2="214" class="hbond"/>
  <line x1="405" y1="154" x2="405" y2="214" class="hbond"/>
  <text x="490" y="99"  class="dim" font-size="10">H-bonds</text>
  <text x="490" y="111" class="dim" font-size="10">between</text>
  <text x="490" y="123" class="dim" font-size="10">strands</text>
  <line x1="487" y1="106" x2="462" y2="106" stroke="#9ca3af" stroke-width="1"/>
  <text x="403" y="268" text-anchor="middle" class="lbl" font-size="11">parallel chains linked by H-bonds</text>
</svg>`,
      },
    },

    // ── Tertiary structure ───────────────────────────────────────────────────────
    {
      id: 'h-tertiary',
      type: 'heading',
      data: { text: 'Tertiary Structure', level: 2 },
    },
    {
      id: 'p-tertiary',
      type: 'paragraph',
      data: {
        text: 'The twisted and folded polypeptide chain folds further to give the whole molecule a complex three-dimensional (globular) shape — this is the tertiary structure. Tertiary structure is determined by the amino acid sequence: all molecules of a particular protein fold in the same way under the same conditions. It is directly linked to the protein\'s function (e.g. the shape of an enzyme\'s active site, the oxygen-binding pocket of haemoglobin).',
      },
    },
    {
      id: 'list-tertiary-bonds',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Hydrogen bonds — form between R-groups of various amino acids; individually weak but there are many, collectively making a significant contribution to stability',
          'Ionic bonds — form between amino acids with oppositely charged R-groups (e.g. −NH₃⁺ and −COO⁻); not strong, easily disrupted by changes in pH which alter R-group charges',
          'Disulfide bridges — covalent S−S bonds forming between the −SH groups of two cysteine residues; much stronger than H-bonds and ionic bonds, most resistant to denaturation',
          'Hydrophobic interactions — non-polar R-groups cluster in the protein interior, away from water; not true bonds but collectively stabilise the folded structure',
        ],
      },
    },
    {
      id: 'svg-tertiary-bonds',
      type: 'svg',
      data: {
        caption: 'Schematic of a folded polypeptide showing the three types of bond that maintain tertiary structure.',
        svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <defs>
    <style>
      .lbl{fill:#1f2937}
      .dim{fill:#6b7280;font-size:10px}
      .hb{stroke:#3b82f6;stroke-width:1.5;stroke-dasharray:5,3;fill:none}
      .ib{stroke:#d97706;stroke-width:2;fill:none}
      .ds{stroke:#ca8a04;stroke-width:3;fill:none}
      .chain{stroke:#6366f1;stroke-width:2.5;fill:none}
    </style>
  </defs>
  <!-- Folded chain (S-curve) -->
  <path d="M 55 80 Q 140 38, 198 88 Q 258 140, 198 198 Q 138 258, 218 268 Q 298 278, 360 238 Q 422 198, 402 138 Q 382 80, 462 58" class="chain"/>
  <!-- Hydrogen bond -->
  <circle cx="150" cy="68" r="7" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="170" cy="104" r="7" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <line x1="150" y1="68" x2="170" y2="104" class="hb"/>
  <text x="98" y="56"  text-anchor="middle" class="dim">H-bond</text>
  <text x="98" y="68"  text-anchor="middle" class="dim">(weak, many)</text>
  <line x1="118" y1="60" x2="146" y2="72" stroke="#9ca3af" stroke-width="1"/>
  <!-- Ionic bond -->
  <circle cx="260" cy="112" r="9" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="260" y="116" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#92400e">+</text>
  <circle cx="298" cy="132" r="9" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="298" y="136" text-anchor="middle" dominant-baseline="central" font-size="10" fill="#92400e">−</text>
  <line x1="269" y1="112" x2="289" y2="130" class="ib"/>
  <text x="345" y="96"  text-anchor="middle" class="dim">Ionic bond</text>
  <text x="345" y="108" text-anchor="middle" class="dim">(+/− R-groups)</text>
  <line x1="320" y1="101" x2="286" y2="118" stroke="#9ca3af" stroke-width="1"/>
  <!-- Disulfide bridge -->
  <circle cx="208" cy="196" r="9" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="208" y="200" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="bold" fill="#713f12">S</text>
  <circle cx="244" cy="220" r="9" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="244" y="224" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="bold" fill="#713f12">S</text>
  <line x1="217" y1="196" x2="235" y2="218" class="ds"/>
  <text x="128" y="218" text-anchor="middle" class="dim">Disulfide bridge</text>
  <text x="128" y="230" text-anchor="middle" class="dim">(S−S, covalent,</text>
  <text x="128" y="242" text-anchor="middle" class="dim">strongest)</text>
  <line x1="166" y1="230" x2="196" y2="210" stroke="#9ca3af" stroke-width="1"/>
  <!-- Legend -->
  <rect x="10" y="266" width="500" height="26" rx="5" fill="#f9fafb" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="22" y1="279" x2="48" y2="279" class="hb"/>
  <text x="52" y="283" class="dim">H-bond</text>
  <line x1="110" y1="279" x2="136" y2="279" class="ib"/>
  <text x="140" y="283" class="dim">Ionic bond</text>
  <line x1="206" y1="279" x2="232" y2="279" class="ds"/>
  <text x="236" y="283" class="dim">Disulfide bridge</text>
  <path d="M 330 279 Q 345 273, 360 279 Q 375 285, 390 279" class="chain"/>
  <text x="395" y="283" class="dim">Polypeptide chain</text>
</svg>`,
      },
    },
    {
      id: 'callout-denaturation',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Denaturation',
        text: 'Denaturation disrupts the bonds maintaining secondary and tertiary structure, causing the protein to unfold and lose its 3D shape. High temperature provides kinetic energy that breaks hydrogen bonds and ionic bonds. Extreme pH disrupts ionic bonds by altering R-group charges. Denaturation does NOT break peptide bonds — the primary structure (amino acid sequence) is preserved but the protein loses biological activity because its active/binding site shape is destroyed.',
      },
    },

    // ── Quaternary structure ─────────────────────────────────────────────────────
    {
      id: 'h-quaternary',
      type: 'heading',
      data: { text: 'Quaternary Structure', level: 2 },
    },
    {
      id: 'p-quaternary',
      type: 'paragraph',
      data: {
        text: 'Some proteins consist of two or more polypeptide chains held together. Such proteins are described as having a quaternary structure. The chains are held together by the same types of bond that maintain tertiary structure (hydrogen bonds, ionic bonds, disulfide bridges). Not all proteins have quaternary structure — only those with more than one polypeptide chain.',
      },
    },
    {
      id: 'callout-haemoglobin',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Haemoglobin — Example of Quaternary Structure',
        text: 'Haemoglobin is the red oxygen-carrying pigment in blood. It has a quaternary structure consisting of four polypeptide chains: two α-chains and two β-chains, each folded independently into a globular tertiary shape. Each chain contains a haem prosthetic group with an Fe²⁺ ion that binds one O₂ molecule (four O₂ per haemoglobin molecule). The four chains interact cooperatively — binding of one O₂ increases the affinity for subsequent O₂ molecules (the basis of the sigmoidal O₂ dissociation curve).',
      },
    },

    // ── Fibrous vs Globular ──────────────────────────────────────────────────────
    {
      id: 'h-fib-glob',
      type: 'heading',
      data: { text: 'Fibrous vs Globular Proteins', level: 2 },
    },
    {
      id: 'table-fib-glob',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of fibrous and globular proteins',
        headers: ['Feature', 'Fibrous proteins', 'Globular proteins'],
        rows: [
          ['Shape', 'Long, thin, rope-like fibres', 'Compact, roughly spherical'],
          ['Solubility', 'Insoluble in water', 'Soluble in water'],
          ['Tertiary structure', 'Regular, repetitive folding', 'Complex, irregular 3D folding'],
          ['Function', 'Structural support', 'Biochemical / metabolic roles'],
          ['Examples', 'Keratin (hair, nails), collagen (tendons), fibrin (blood clots)', 'Enzymes, haemoglobin, antibodies, insulin'],
        ],
      },
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Technique — Protein Structure Questions',
        text: 'When explaining denaturation: state which bonds are broken (H-bonds and ionic bonds by heat/pH; disulfide bridges only by reducing agents) and why the protein loses function (the active/binding site shape changes). When asked to compare fibrous and globular proteins, always include: shape, solubility, and a named example of each. For quaternary structure, always state that it involves two or more polypeptide chains and name haemoglobin.',
      },
    },

    // ── Checklist + Summary ──────────────────────────────────────────────────────
    {
      id: 'checklist-protein-structure',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe secondary structure: α-helix (backbone H-bonds, spiral) and β-pleated sheet (parallel chain H-bonds)', checked: false },
          { text: 'List the three bond types maintaining tertiary structure: H-bonds (weak, many), ionic bonds (pH-sensitive), disulfide bridges (covalent, strongest)', checked: false },
          { text: 'Explain denaturation: H-bonds and ionic bonds broken by heat/pH change; peptide bonds (primary structure) are intact', checked: false },
          { text: 'Define quaternary structure as two or more polypeptide chains held together', checked: false },
          { text: 'Name haemoglobin as a quaternary protein with 4 chains (2α + 2β)', checked: false },
          { text: 'Compare fibrous (structural, insoluble, e.g. collagen) with globular (soluble, biochemical roles, e.g. enzymes)', checked: false },
        ],
      },
    },
    {
      id: 'summary-protein-structure',
      type: 'summary',
      data: {
        text: "Secondary structure (α-helix and β-pleated sheet) forms from hydrogen bonds along the polypeptide backbone. Tertiary structure is the overall 3D fold, maintained by H-bonds, ionic bonds, and disulfide bridges between R-groups — its shape determines the protein's function. Quaternary structure involves two or more polypeptide chains held together (e.g. haemoglobin, 4 chains). Denaturation disrupts secondary and tertiary structure (H-bonds and ionic bonds) without breaking peptide bonds. Fibrous proteins (e.g. collagen) are structural and insoluble; globular proteins (e.g. enzymes, haemoglobin) are soluble and carry out biochemical roles.",
      },
    },
  ],

  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-ps-1',
        blockId: 'list-secondary',
        prompt: 'What are the two types of secondary structure, and what type of bond maintains each one?',
      },
      {
        id: 'cue-ps-2',
        blockId: 'list-tertiary-bonds',
        prompt: 'List the three types of bond that maintain tertiary structure, from weakest to strongest.',
      },
      {
        id: 'cue-ps-3',
        blockId: 'callout-denaturation',
        prompt: 'What happens during denaturation? Which bonds are broken and which are preserved?',
      },
      {
        id: 'cue-ps-4',
        blockId: 'h-quaternary',
        prompt: 'Define quaternary structure and give a named example of a protein that has it.',
      },
      {
        id: 'cue-ps-5',
        blockId: 'table-fib-glob',
        prompt: 'Compare fibrous and globular proteins in terms of shape, solubility, function, and a named example of each.',
      },
    ],
    summaryText:
      'Secondary = H-bonds along backbone → α-helix or β-sheet. Tertiary = 3D fold (H-bonds + ionic bonds + disulfide bridges between R-groups). Quaternary = 2+ chains (e.g. haemoglobin). Denaturation breaks H-bonds/ionic bonds, not peptide bonds.',
    ready: false,
  },

  evidence: [
    {
      id: 'ev-1',
      title: 'AQA A Level Biology Student Book 1',
      detail: 'Pages 20–21: secondary, tertiary and quaternary protein structure; fibrous vs globular',
      year: '2016',
      source: 'AQA Biology Student Book 1, Chapter 1 — Biological Molecules',
      tags: ['secondary structure', 'tertiary structure', 'quaternary structure', 'denaturation', 'haemoglobin', 'fibrous', 'globular'],
    },
  ],
};
