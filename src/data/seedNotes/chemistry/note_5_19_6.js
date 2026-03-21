export const note_chemistry_5_19_6 = {
  blocks: [
    {
      id: 'obj-peptides',
      type: 'objective',
      data: {
        text: 'Explain peptide bond formation between amino acids; describe primary, secondary, tertiary, and quaternary structure of proteins; understand hydrogen bonding, disulfide bonds, and ionic interactions that stabilise proteins'
      }
    },
    {
      id: 'h-peptide-bond',
      type: 'heading',
      data: { text: 'Peptide Bond Formation', level: 2 }
    },
    {
      id: 'p-peptide-1',
      type: 'paragraph',
      data: {
        text: 'A peptide bond is a covalent C−N bond formed between the carboxyl group of one amino acid and the amino group of another. When two amino acids condense (join with loss of water), a peptide bond forms. The carboxyl carbon (C=O) of one amino acid reacts with the amino group (−NH₂) of the next amino acid, forming the −CO−NH− linkage and releasing H₂O.'
      }
    },
    {
      id: 'eq-peptide-formation',
      type: 'equation',
      data: {
        html: 'H₂N−CHR₁−COOH + H₂N−CHR₂−COOH →<br />H₂N−CHR₁−CO−NH−CHR₂−COOH + H₂O<br />(dipeptide: two amino acids linked by peptide bond)<br /><br />The −CO−NH− is the peptide bond. The molecule is now a dipeptide.'
      }
    },
    { type: 'svg', id: 'svg-peptide-bond', data: { caption: 'Peptide Bond Formation (Condensation reaction)', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 160" width="100%" height="auto"><defs><marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;fill:#1e293b;font-size:14px;text-anchor:middle;} .bond{stroke:#1e293b;stroke-width:2;} .hl1{fill:#ef4444;font-weight:bold;} .hl2{fill:#3b82f6;font-weight:bold;} .box{fill:none;stroke:#cbd5e1;stroke-width:2;stroke-dasharray:4;} .peptide{stroke:#10b981;stroke-width:3;} .lbl{font-size:12px;fill:#64748b;} </style><g transform="translate(100, 60)"><text x="-35" y="0">H₂N</text><path class="bond" d="M -15 -5 L -5 -5" /><text x="0" y="0">CH</text><path class="bond" d="M 12 -5 L 22 -5" /><text x="35" y="0">C</text><text x="60" y="0" class="hl1">OH</text><path class="bond" d="M 45 -5 L 52 -5" /><path class="bond" d="M 32 5 L 32 15 M 38 5 L 38 15" /><text x="35" y="32">O</text><text x="0" y="-35" fill="#ca8a04">R₁</text><path class="bond" d="M 0 -22 L 0 -15" /><text x="0" y="70" class="lbl">Amino Acid 1</text></g><text x="210" y="55" font-weight="bold" font-size="18px">+</text><g transform="translate(300, 60)"><text x="-40" y="0" class="hl2">H</text><path class="bond" d="M -30 -5 L -23 -5" /><text x="-15" y="0">NH</text><path class="bond" d="M -2 -5 L 5 -5" /><text x="15" y="0">CH</text><path class="bond" d="M 30 -5 L 38 -5" /><text x="60" y="0">COOH</text><text x="15" y="-35" fill="#9333ea">R₂</text><path class="bond" d="M 15 -22 L 15 -15" /><text x="15" y="70" class="lbl">Amino Acid 2</text></g><rect x="150" y="42" width="30" height="25" class="box" /><path class="bond" d="M 165 42 L 165 20 L 260 20 L 260 42" stroke-dasharray="4" /><text x="210" y="10" font-size="12px" fill="#ef4444">- H₂O</text><path d="M 390 55 L 430 55" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)" /><g transform="translate(510, 60)"><text x="-40" y="0">H₂N — CH — </text><text x="15" y="-35" fill="#ca8a04">R₁</text><path class="bond" d="M 15 -22 L 15 -15" /><text x="40" y="0">C</text><path class="bond" d="M 37 5 L 37 15 M 43 5 L 43 15" /><text x="40" y="32">O</text><path class="peptide" d="M 50 -5 L 60 -5" /><text x="75" y="0" fill="#10b981" font-weight="bold">NH</text><path class="bond" d="M 90 -5 L 98 -5" /><text x="120" y="0">— CH — COOH</text><text x="115" y="-35" fill="#9333ea">R₂</text><path class="bond" d="M 115 -22 L 115 -15" /><text x="40" y="70" class="lbl">Dipeptide</text><text x="55" y="90" font-size="10px" fill="#10b981">Peptide Bond (-CONH-)</text></g></svg>' } },
    {
      id: 'p-peptide-2',
      type: 'paragraph',
      data: {
        text: 'In cells, peptide bonds form via a condensation reaction catalysed by ribosomes during protein synthesis. The process requires energy (ATP) and involves nucleophilic attack of the amino group on the carboxyl carbon of an activated acyl intermediate.'
      }
    },
    {
      id: 'callout-peptide-definition',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Peptides vs Proteins',
        text: 'Dipeptide: 2 amino acids linked by 1 peptide bond. Tripeptide: 3 amino acids, 2 peptide bonds. Polypeptide: many amino acids (typically > 10), many peptide bonds. Protein: a large polypeptide (usually > 50 amino acids) with a specific 3D structure. Small peptides and large polypeptides are collectively called peptides until they fold into a functional protein.'
      }
    },
    {
      id: 'h-dipeptide-order',
      type: 'heading',
      data: { text: 'Dipeptides: Order Matters', level: 2 }
    },
    {
      id: 'list-dipeptide-order',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'When two DIFFERENT amino acids (e.g., alanine and glycine) combine, TWO different dipeptides can form' },
          { text: 'Alanine–Glycine (Ala-Gly): the carboxyl end of alanine bonds to the amino end of glycine' },
          { text: 'Glycine–Alanine (Gly-Ala): the carboxyl end of glycine bonds to the amino end of alanine' },
          { text: 'These two products are DIFFERENT molecules — sequences are read from N-terminal (free −NH₂) to C-terminal (free −COOH)' },
          { text: 'Both are formed by a condensation reaction with loss of water (H₂O)' }
        ]
      }
    },
    {
      id: 'eq-dipeptide-both',
      type: 'equation',
      data: {
        html: 'Possible dipeptides from Ala + Gly:<br />Ala−Gly: H₂N−CH(CH₃)−CO−NH−CH₂−COOH + H₂O<br />Gly−Ala: H₂N−CH₂−CO−NH−CH(CH₃)−COOH + H₂O<br /><br />Both are formed by condensation (−CO−NH− linkage with loss of H₂O).'
      }
    },
    {
      id: 'h-tripeptides',
      type: 'heading',
      data: { text: 'Tripeptides: 6 Possible Combinations', level: 2 }
    },
    {
      id: 'list-tripeptides',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '3 different amino acids (e.g., Ala, Gly, Glu) can be arranged in 3! = 6 different sequences' },
          { text: 'Three-letter codes are used to summarise (e.g., Ala, Gly, Glu are their codes)' },
          { text: 'You are NOT expected to memorise three-letter codes — they would be provided in the exam' },
          { text: 'The 6 tripeptide sequences: Ala-Gly-Glu / Ala-Glu-Gly / Gly-Ala-Glu / Gly-Glu-Ala / Glu-Ala-Gly / Glu-Gly-Ala' },
          { text: 'Each arrangement gives a different molecule with different properties' }
        ]
      }
    },
    {
      id: 'h-polypeptide-molar-mass',
      type: 'heading',
      data: { text: 'Polypeptides and Molar Masses', level: 2 }
    },
    {
      id: 'p-polypeptide-1',
      type: 'paragraph',
      data: {
        text: 'Polypeptides are long-chain condensation polymers of many amino acids. Long chain polypeptides that have adopted specific 3D shapes and functions are classified as proteins. Proteins have extremely large molar masses due to the large number of amino acids they contain.'
      }
    },
    {
      id: 'p-polypeptide-2',
      type: 'paragraph',
      data: {
        text: 'It is important to know both which amino acids are present AND the order (sequence) in which they appear — even a single amino acid substitution can dramatically alter protein function (e.g., sickle cell disease results from one amino acid change in haemoglobin).'
      }
    },
    {
      id: 'table-molar-masses',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of protein molar masses',
        headers: ['Protein', 'Approx. amino acids', 'Approx. Mᵣ (g mol⁻¹)'],
        rows: [
          ['Insulin', '51', '5,700'],
          ['Haemoglobin', '574', '66,000'],
          ['Ferritin', '~4,500', '480,000']
        ]
      }
    },
    {
      id: 'h-protein-structure-primary',
      type: 'heading',
      data: { text: 'Protein Structure: Primary, Secondary, Tertiary', level: 2 }
    },
    {
      id: 'p-structure-primary',
      type: 'paragraph',
      data: {
        text: 'Primary structure is the exact sequence of amino acid residues joined by peptide (covalent) bonds. By convention, it is written from the N-terminal (left, free −NH₂ group) to the C-terminal (right, free −COOH group). Some examiners also include disulfide (sulphur) bridges in the primary structure, as they are covalent bonds between cysteine residues.'
      }
    },
    {
      id: 'p-structure-secondary',
      type: 'paragraph',
      data: {
        text: 'Secondary structure refers to regions where the protein chain is organised into regular, folded patterns stabilised by hydrogen bonding. Crucially, these hydrogen bonds act between the >C=O and >N−H groups of the peptide links in the backbone (not the side chains).'
      }
    },
    {
      id: 'list-secondary-forms',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'α-helix: The chain coils into a spiral (spring shape) with all R groups pointing outwards. Held by regular hydrogen bonds between N-H pointing up and C=O pointing down.' },
          { text: 'β-pleated sheet: Chains lie alongside each other (often folded back in an anti-parallel fashion) in a sheet-like structure, linked by hydrogen bonds across the strands.' }
        ]
      }
    },
    {
      id: 'p-structure-tertiary',
      type: 'paragraph',
      data: {
        text: 'Tertiary structure describes how the entire polypeptide chain (including α-helices and β-sheets) folds into a final 3D shape. This folding is dictated by interactions between the side chains (the R groups), pulling the protein into a functional conformation.'
      }
    },
    {
      id: 'list-tertiary-forces',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Ionic interactions: Between side chains with extra acidic/basic groups (e.g., −COO⁻ from aspartic acid and −NH₃⁺ from lysine).' },
          { text: 'Hydrogen bonds: Between polar side chains (e.g., −OH groups from serine, or −COOH/−NH₂ groups not forming zwitterions).' },
          { text: 'Van der Waals (London) dispersion forces: Between large, non-polar hydrocarbon side chains that induce temporary dipoles.' },
          { text: 'Disulfide bridges (sulphur bridges): Strong covalent bonds (−S−S−) forming between two cysteine residues. (Note: sometimes classified under primary structure).' }
        ]
      }
    },
    {
      id: 'eq-disulfide-bond',
      type: 'equation',
      data: {
        html: 'Disulfide bond formation:<br />−CH₂−SH + HS−CH₂− → −CH₂−S−S−CH₂− + 2H⁺ + 2e⁻<br />(between two cysteine residues, covalent S−S bond)'
      }
    },
    {
      id: 'callout-tertiary-forces',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Tertiary Structure Stabilisation',
        text: 'Hydrophobic effect: nonpolar residues cluster inside protein (away from water). Disulfide bonds: strong covalent bridges (S−S), especially important in extracellular proteins. Ionic interactions: quick-forming but weaker than disulfide bonds. Hydrogen bonds: numerous, weak individually, strong collectively. The 3D shape is essential for function; misfolding causes disease (e.g., prion diseases, Alzheimer\'s).'
      }
    },
    {
      id: 'p-structure-quaternary',
      type: 'paragraph',
      data: {
        text: 'Quaternary structure is the arrangement of multiple polypeptide chains (subunits) in a multi-subunit protein. Not all proteins have quaternary structure; single-chain proteins lack it. Multi-chain proteins like haemoglobin (4 subunits) have quaternary structure. The subunits are held together by the same non-covalent interactions as in tertiary structure: hydrogen bonds, ionic interactions, hydrophobic effects. Disulfide bonds between chains are rare.'
      }
    },
    {
      id: 'h-protein-hydrolysis',
      type: 'heading',
      data: { text: 'Protein Hydrolysis', level: 2 }
    },
    {
      id: 'p-hydrolysis-1',
      type: 'paragraph',
      data: {
        text: 'Proteins can be hydrolysed (broken down) into their constituent amino acids. The chemistry is exactly the same as the acidic hydrolysis of amides: the carbon-nitrogen bond in the peptide (amide) link is broken by water. Because the entire reaction happens under acidic conditions, the resulting amino acids all form as positive ions (the −NH₂ groups are protonated to −NH₃⁺).'
      }
    },
    {
      id: 'list-hydrolysis-methods',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>The old, slow method:</b> The protein is heated under reflux with 6 mol dm⁻³ hydrochloric acid (HCl) for about 24 hours at 110°C. This slowly hydrolyses all the peptide bonds.' },
          { text: '<b>The new, fast method:</b> Small protein samples are placed in sealed tubes containing 6 mol dm⁻³ HCl under a nitrogen atmosphere. They are then placed in a microwave oven for 5–30 minutes at temperatures up to 200°C. Vaporised HCl rapidly hydrolyses the sample for analysis.' }
        ]
      }
    },
    {
      id: 'p-hydrolysis-enzymes',
      type: 'paragraph',
      data: {
        text: 'Enzymes (proteases like pepsin or trypsin) can also catalyse selective protein hydrolysis. These enzymes cleave peptide bonds at specific amino acid sequences under much milder conditions, producing defined peptide fragments which is useful for modern structural analysis.'
      }
    },
    {
      id: 'h-enzymes',
      type: 'heading',
      data: { text: 'Proteins as Enzymes', level: 2 }
    },
    {
      id: 'p-enzymes-intro',
      type: 'paragraph',
      data: {
        text: 'Enzymes are predominantly globular proteins (with a rounded, 3D tertiary structure) that act as highly active and specific biological catalysts. They work by providing a reaction pathway with a lower activation energy.'
      }
    },
    {
      id: 'list-active-sites',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Active sites:</b> The tertiary folding of the protein creates highly specific cracks or hollows called active sites. These are lined with the "R" groups (side chains) of specific amino acids (which contain groups like −OH, −NH₃⁺, −COO⁻).' },
          { text: '<b>Substrate attachment:</b> A reacting molecule (the substrate) must have the exact shape and correct complementary functional groups to attach to the active site via hydrogen bonding, ionic interactions, or van der Waals forces.' },
          { text: '<b>Stereospecificity:</b> Because the active site is chiral, it typically only fits and catalyses the reaction of one specific enantiomer.' }
        ]
      }
    },
    {
      id: 'callout-cofactors',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cofactors and Coenzymes',
        text: 'Many enzymes require non-protein components to function, called <b>cofactors</b>. If tightly bound to the protein, they are called <b>prosthetic groups</b> (e.g., the transition-metal Haem iron(III) group in catalase or the Zinc ion in carbonic anhydrase). If they attach temporarily to the active site alongside the substrate, they are called <b>coenzymes</b> (e.g., NAD⁺).'
      }
    },
    {
      id: 'h-enzyme-factors',
      type: 'heading',
      data: { text: 'Factors Affecting Enzyme Activity', level: 3 }
    },
    {
      id: 'list-enzyme-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Substrate concentration:</b> Rate increases with concentration until all active sites are saturated. At this point, the rate plateaus at a maximum velocity ($V_{max}$).' },
          { text: '<b>Temperature:</b> Rate increases with temperature (more successful collisions) up to an optimum (typically ~40°C). Above the optimum temperature, weaker bonds (like van der Waals forces and hydrogen bonds) holding the tertiary structure break. The active site loses its specific shape, so the enzyme becomes <b>denatured</b> and rate plunges.' },
          { text: '<b>pH:</b> Each enzyme has an optimum pH. Changing the pH alters the protonation state of amino acid side chains (e.g., protonating a carboxylate group −COO⁻ to −COOH, or deprotonating an amine −NH₃⁺ to −NH₂). This not only breaks the crucial ionic bonds stabilising the 3D tertiary structure (denaturation), but also destroys the specific ionic interactions required to bind the substrate in the active site.' }
        ]
      }
    },
    {
      id: 'h-enzyme-inhibitors',
      type: 'heading',
      data: { text: 'Enzyme Inhibitors', level: 3 }
    },
    {
      id: 'p-enzyme-inhibitors',
      type: 'paragraph',
      data: {
        text: 'Inhibitors are substances that slow down or stop enzyme-catalysed reactions. They can be broadly classified into competitive and non-competitive inhibitors.'
      }
    },
    {
      id: 'list-enzyme-inhibitors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Competitive inhibitors:</b> These have a similar shape to the normal substrate and bind directly to the active site. They temporarily block the site but do not react further. Increasing the concentration of the substrate will out-compete the inhibitor and restore the reaction rate.' },
          { text: '<b>Non-competitive inhibitors:</b> These bind to the enzyme somewhere other than the active site (often permanently, e.g., heavy metal ions like Ag⁺ or Pb²⁺ reacting with the −SH groups of cysteine residues). Their binding alters the overall tertiary folding of the enzyme, which in turn permanently changes the shape of the active site so the true substrate can no longer fit. Increasing substrate concentration has no effect.' }
        ]
      }
    },
    {
      id: 'h-chromatography',
      type: 'heading',
      data: { text: 'Identifying Amino Acids by Paper Chromatography', level: 2 }
    },
    {
      id: 'list-chromatography-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Hydrolyse the protein (concentrated HCl, prolonged heating) → gives a mixture of individual amino acids' },
          { text: 'Spot the hydrolysate onto chromatography paper at the baseline' },
          { text: 'Run the chromatogram: allow the solvent front to move up the paper' },
          { text: 'Dry the paper — amino acids are COLOURLESS and cannot be seen at this stage' },
          { text: 'Spray with ninhydrin solution — a developing agent that reacts with amino acids to produce a purple/lilac colour' },
          { text: 'Identify each spot by calculating its RF value' },
          { text: 'Compare RF values to known control samples run on the same chromatogram to identify each amino acid' }
        ]
      }
    },
    {
      id: 'eq-rf-value',
      type: 'equation',
      data: {
        html: 'R<sub>F</sub> = <span class="nb-frac"><span class="nb-num">distance moved by spot</span><span class="nb-den">distance moved by solvent front</span></span><br /><br />Important: R<sub>F</sub> value must ALWAYS be less than 1 (spot cannot travel further than solvent front). If R<sub>F</sub> > 1, a calculation error has been made.'
      }
    },
    {
      id: 'callout-ninhydrin',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Ninhydrin: Why It\'s Needed',
        text: 'Amino acids are colourless compounds — they cannot be seen on chromatography paper under normal light. Ninhydrin is sprayed as a developing agent; it reacts with amino acids to produce a distinctive purple/lilac colour. Each spot can then be measured for its RF value and compared against control samples to identify which amino acid is present.'
      }
    },
    {
      id: 'callout-chrom-note',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Scope for Chromatography',
        text: 'At A2 level you need to know: the overall method (hydrolyse → spot → run → ninhydrin → RF calculation), and be able to identify amino acids using RF values and control samples. You do NOT need to know the detailed chemistry of how ninhydrin works, or specific two-dimensional chromatography techniques — these are more advanced techniques.'
      }
    },
    {
      id: 'checklist-protein-structure',
      type: 'checklist',
      data: {
        items: [
          { text: 'Peptide bond: −CO−NH− formed by condensation of amino acids (loss of H₂O)', checked: false },
          { text: '2 different amino acids → 2 possible dipeptides (sequence order matters)', checked: false },
          { text: '3 different amino acids → 6 possible tripeptides (3! = 6 arrangements)', checked: false },
          { text: 'Primary: sequence (N→C-terminal); Secondary: α-helix/β-sheet via backbone H-bonds', checked: false },
          { text: 'Tertiary: 3D shape from H-bonds, disulfide bonds (cysteine S−S), ionic interactions', checked: false },
          { text: 'Quaternary: multiple polypeptide subunits (e.g., haemoglobin = 4 subunits)', checked: false },
          { text: 'Enzymes: globular proteins with active sites; stereospecific catalysts lowering activation energy', checked: false },
          { text: 'Hydrolysis: 6M HCl under reflux (110°C, 24h) OR microwave (sealed tube, 200°C) → breaks peptide bonds into amino acid positive ions', checked: false },
          { text: 'Chromatography: ninhydrin → purple spots → RF = spot dist/solvent dist (< 1) → compare to controls', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Peptide bonds link α-amino acids via condensation. Protein structure: primary (sequence), secondary (α-helix, β-sheet), tertiary (3D fold), quaternary (multi-subunit).\n\nApply: Draw the dipeptide formed from glycine and alanine. How many different dipeptides can form?\n\nAnalyze: Why is the tertiary structure essential for enzyme function? What happens during denaturation?\n\nEvaluate: Sickle cell disease results from a single amino acid change. Discuss how primary structure determines all higher levels.'
      },
      terms: []
    },
    {
      id: 'summary-proteins',
      type: 'summary',
      data: {
        text: 'Peptide bonds form by condensation of amino acids (−CO−NH− + H₂O). Two different amino acids give 2 possible dipeptides; three different amino acids give 6 possible tripeptides. Polypeptides are condensation polymers; proteins have large Mᵣ values (insulin: 5700, haemoglobin: 66000, ferritin: 480000). Protein structure: Primary (amino acid sequence), Secondary (α-helix/β-sheet via H-bonds), Tertiary (3D fold: H-bonds, disulfide bonds S−S, ionic interactions, hydrophobic), Quaternary (multi-subunit). Enzymes are globular proteins acting as specific catalysts; their active sites bind substrates via tertiary bonds. High temperatures or extreme pH denature enzymes by breaking these tertiary bonds. Proteins are hydrolysed by prolonged heating with concentrated HCl, breaking all peptide bonds to yield individual amino acids. Amino acids identified by paper chromatography: spots developed with ninhydrin (purple colour); RF = distance by spot ÷ distance by solvent front (always < 1); compare to known control samples.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Tertiary Structure: Multiple Stabilization Forces",
        text: "Four types of interactions stabilize 3D protein shape: (1) hydrophobic effect (nonpolar residues cluster inside, away from water); (2) disulfide bonds (\u2212S\u2212S\u2212 covalent, very strong, between cysteines); (3) ionic interactions (\u2212COO\u207b to \u2212NH\u2083\u207a); (4) hydrogen bonds (polar side-chains). Breakdown causes misfolding diseases."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-dipeptide-both', prompt: 'How many dipeptides can form from two different amino acids? Why?' },
      { id: 'cue-2', blockId: 'list-tripeptides', prompt: 'How many tripeptides can form from 3 different amino acids? What codes are used to summarise them?' },
      { id: 'cue-3', blockId: 'p-structure-tertiary', prompt: 'List the four types of interactions that stabilise tertiary structure of a protein.' },
      { id: 'cue-4', blockId: 'list-hydrolysis-methods', prompt: 'Describe the two different laboratory methods (slow vs fast) for hydrolysing a protein.' },
      { id: 'cue-5', blockId: 'list-active-sites', prompt: 'Explain how the tertiary structure of an enzyme allows it to act as a highly specific catalyst.' },
      { id: 'cue-6', blockId: 'list-enzyme-factors', prompt: 'Explain how extreme pH changes affect the rate of an enzyme-catalysed reaction.' },
      { id: 'cue-7', blockId: 'eq-rf-value', prompt: 'How do you calculate RF value in chromatography? What must it always be less than?' }
    ],
    summaryText: 'Peptide bond: −CO−NH− (condensation, loss H₂O). 2 amino acids → 2 dipeptides; 3 amino acids → 6 tripeptides. Primary: sequence. Secondary: α-helix/β-sheet. Tertiary: H-bonds, S−S bonds, ionic, hydrophobic. Quaternary: multi-subunit. Enzymes: globular proteins, active sites match specific substrates. Temperature > optimum or extreme pH denatures enzymes by breaking H-bonds/ionic bonds. Hydrolysis: 6M HCl, 110°C, 24h OR sealed microwave → amino acid positive ions. Chromatography: spot + ninhydrin → purple; RF = spot/solvent front (< 1).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Peptide bonds and protein structure',
      detail: 'Peptide bond formation, condensation reactions, secondary structure (α-helix, β-sheet), tertiary structure stabilisation (H-bonds, disulfide bonds, ionic interactions), quaternary structure, protein folding and misfolding',
      year: '2023',
      source: 'chemguide.co.uk — peptide bonds and protein structure',
      tags: ['peptide', 'protein', 'structure', 'primary', 'secondary', 'tertiary', 'quaternary']
    }
  ]
};
