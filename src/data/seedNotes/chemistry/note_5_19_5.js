export const note_chemistry_5_19_5 = {
  blocks: [
    {
      id: 'obj-amino-acids',
      type: 'objective',
      data: {
        text: 'Explain amino acid structure and zwitterion formation; understand isoelectric points and charge variation with pH; describe amino acid movement in electrophoresis at different pH values; explain the role of side chains'
      }
    },
    {
      id: 'h-amino-acid-structure',
      type: 'heading',
      data: { text: 'Amino Acid Structure and Zwitterion Formation', level: 2 }
    },
    {
      id: 'p-structure-1',
      type: 'paragraph',
      data: {
        text: 'All amino acids have the same basic structure: an amino group (−NH₂), a carboxyl group (−COOH), a hydrogen atom, and a side chain (R group) bonded to the same central carbon atom (the α-carbon). The general formula is H₂N−CHR−COOH. The side chain R varies among the 20 standard amino acids and determines the chemical properties of each amino acid.'
      }
    },
    {
      id: 'eq-amino-acid-structure',
      type: 'equation',
      data: {
        html: 'General structure: H₂N−CHR−COOH<br />R = side chain (varies)<br />Examples:<br />Glycine: R = H<br />Alanine: R = CH₃<br />Valine: R = CH(CH₃)₂<br />Leucine: R = CH₂CH(CH₃)₂'
      }
    },
    {
      id: 'p-structure-2',
      type: 'paragraph',
      data: {
        text: 'In solution, amino acids do not exist as H₂N−CHR−COOH. Instead, an internal proton transfer occurs: the carboxyl group donates a proton to the amino group, forming a zwitterion (or dipolar ion). The zwitterion has both a positively charged amino group (−NH₃⁺) and a negatively charged carboxyl group (−COO⁻) on the same molecule: ⁺H₃N−CHR−COO⁻.'
      }
    },
    {
      id: 'eq-zwitterion-formation',
      type: 'equation',
      data: {
        html: 'H₂N−CHR−COOH ⇌ ⁺H₃N−CHR−COO⁻<br />(Molecular form) ⇌ (Zwitterion form)<br />The zwitterion is the predominant form in neutral solution (pH ≈ 7).'
      }
    },
    {
      id: 'callout-zwitterion-why',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Zwitterions Form',
        text: 'The −COOH group is more acidic (pKa ≈ 2) than −NH₃⁺ is basic (pKa ≈ 9). In any neutral/physiological pH, the COOH donates its proton to the NH₂. The zwitterion form is more stable and hydrated in aqueous solution. Amino acids are amphoteric: they can act as acids or bases depending on pH.'
      }
    },
    {
      id: 'h-physical-properties',
      type: 'heading',
      data: { text: 'Physical Properties of Amino Acids', level: 2 }
    },
    {
      id: 'list-physical-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Melting points: Surprisingly high for their size (typically 200–300 °C, often decomposing before melting).' },
          { text: 'Reason: They exist as zwitterions in the solid lattice. Strong ionic attractions between the zwitterions take far more energy to break than the expected weaker hydrogen bonds.' },
          { text: 'Solubility in water: Generally soluble. Strong attractions between polar water molecules and zwitterions provide enough energy to pull the ionic lattice apart.' },
          { text: 'Solubility in organic solvents: Insoluble in non-polar solvents (e.g., hydrocarbons) because there is no strong attraction to pull the ionic lattice apart.' }
        ]
      }
    },
    {
      id: 'h-ph-effects',
      type: 'heading',
      data: { text: 'Amino Acid Charge Variation with pH', level: 2 }
    },
    {
      id: 'p-ph-1',
      type: 'paragraph',
      data: {
        text: 'The ionisation state of an amino acid depends on the pH of the solution. At different pH values, the −NH₃⁺ and −COO⁻ groups can accept or donate protons, changing the overall charge.'
      }
    },
    {
      id: 'p-ph-2',
      type: 'paragraph',
      data: {
        text: 'At very low pH (< 2, strongly acidic): The carboxyl group is protonated (−COOH), and the amino group is protonated (−NH₃⁺). The zwitterion becomes positively charged: ⁺H₃N−CHR−COOH (net charge +1). The amino acid has an overall positive charge.'
      }
    },
    {
      id: 'p-ph-3',
      type: 'paragraph',
      data: {
        text: 'At neutral pH (≈ 7): The amino acid exists predominantly as the zwitterion: ⁺H₃N−CHR−COO⁻ (net charge 0). The amino acid has no net charge overall. This form is most stable in cells and body fluids.'
      }
    },
    {
      id: 'p-ph-4',
      type: 'paragraph',
      data: {
        text: 'At very high pH (> 10, strongly basic): The amino group is deprotonated (−NH₂), and the carboxyl group remains deprotonated (−COO⁻). The amino acid becomes negatively charged: H₂N−CHR−COO⁻ (net charge −1). The amino acid has an overall negative charge.'
      }
    },
    {
      id: 'eq-ph-states',
      type: 'equation',
      data: {
        html: 'Low pH (< 2): ⁺H₃N−CHR−COOH (charge = +1)<br />Neutral pH (≈ 7): ⁺H₃N−CHR−COO⁻ (charge = 0, zwitterion)<br />High pH (> 10): H₂N−CHR−COO⁻ (charge = −1)'
      }
    },
    { type: 'svg', id: 'svg-amino-acid-ph', data: { caption: 'Amino Acid Zwitterion Equilibrium & pH dependency', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 180" width="100%" height="auto"><defs><marker id="arr-eqL" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 10 0 L 0 5 L 10 10 z" fill="#64748b" /></marker><marker id="arr-eqR" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;fill:#1e293b;font-size:14px;text-anchor:middle;} .bond{stroke:#1e293b;stroke-width:2;} .eq{stroke:#64748b;stroke-width:2;fill:none;} .pos{fill:#ef4444;font-weight:bold;font-size:16px;} .neg{fill:#3b82f6;font-weight:bold;font-size:18px;} .lbl{font-size:12px;fill:#64748b;}</style><g transform="translate(100, 70)"><text x="-35" y="0">H₃N</text><text x="-15" y="-5" class="pos">+</text><path class="bond" d="M -15 -5 L -5 -5" /><text x="0" y="0">C</text><path class="bond" d="M 5 -5 L 15 -5" /><text x="35" y="0">COOH</text><text x="0" y="-35">R</text><path class="bond" d="M 0 -22 L 0 -10" /><text x="0" y="32">H</text><path class="bond" d="M 0 5 L 0 15" /><text x="0" y="70" font-weight="bold">Low pH (Acidic)</text><text x="0" y="85" class="lbl">Cation (Overall +1)</text><text x="0" y="100" class="lbl">Moved to Cathode (-)</text></g><path class="eq" d="M 180 55 L 240 55" marker-end="url(#arr-eqR)" /><text x="210" y="50" font-size="12px" fill="#ef4444">+ OH⁻</text><path class="eq" d="M 240 75 L 180 75" marker-end="url(#arr-eqL)" /><text x="210" y="90" font-size="12px" fill="#3b82f6">+ H⁺</text><g transform="translate(350, 70)"><text x="-35" y="0">H₃N</text><text x="-15" y="-5" class="pos">+</text><path class="bond" d="M -15 -5 L -5 -5" /><text x="0" y="0">C</text><path class="bond" d="M 5 -5 L 15 -5" /><text x="35" y="0">COO</text><text x="55" y="-5" class="neg">-</text><text x="0" y="-35">R</text><path class="bond" d="M 0 -22 L 0 -10" /><text x="0" y="32">H</text><path class="bond" d="M 0 5 L 0 15" /><text x="0" y="70" font-weight="bold" fill="#10b981">Isoelectric Point (Neutral)*</text><text x="0" y="85" class="lbl">Zwitterion (Overall 0)</text><text x="0" y="100" class="lbl">Does not move</text></g><path class="eq" d="M 460 55 L 520 55" marker-end="url(#arr-eqR)" /><text x="490" y="50" font-size="12px" fill="#ef4444">+ OH⁻</text><path class="eq" d="M 520 75 L 460 75" marker-end="url(#arr-eqL)" /><text x="490" y="90" font-size="12px" fill="#3b82f6">+ H⁺</text><g transform="translate(600, 70)"><text x="-35" y="0">H₂N</text><path class="bond" d="M -15 -5 L -5 -5" /><text x="0" y="0">C</text><path class="bond" d="M 5 -5 L 15 -5" /><text x="35" y="0">COO</text><text x="55" y="-5" class="neg">-</text><text x="0" y="-35">R</text><path class="bond" d="M 0 -22 L 0 -10" /><text x="0" y="32">H</text><path class="bond" d="M 0 5 L 0 15" /><text x="0" y="70" font-weight="bold">High pH (Alkaline)</text><text x="0" y="85" class="lbl">Anion (Overall -1)</text><text x="0" y="100" class="lbl">Moved to Anode (+)</text></g></svg>' } },
    {
      id: 'callout-deprotonation-sequence',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shifting pH from Acidic to Alkaline',
        text: 'If you start with the fully protonated form at low pH (⁺H₃N−CHR−COOH) and slowly add alkali:\n1. The −COOH group is more acidic, so it loses its proton first, forming the zwitterion (⁺H₃N−CHR−COO⁻).\n2. Upon further addition of alkali, the −NH₃⁺ group loses its proton, forming the negatively charged ion (H₂N−CHR−COO⁻).'
      }
    },
    {
      id: 'h-isoelectric-point',
      type: 'heading',
      data: { text: 'Isoelectric Point (pI)', level: 2 }
    },
    {
      id: 'p-pi-1',
      type: 'paragraph',
      data: {
        text: 'The isoelectric point (pI) is the pH at which an amino acid has no net electric charge. At this pH, the positive charges and negative charges balance exactly. For a simple amino acid (without a charged side chain), the isoelectric point is approximately pH 6−7, close to neutral pH.'
      }
    },
    {
      id: 'p-pi-2',
      type: 'paragraph',
      data: {
        text: 'At the isoelectric point, the amino acid exists as a zwitterion with equal amounts of positive and negative charge. Different amino acids have different pI values depending on their side chains. For example, lysine (with a basic side chain −(CH₂)₄NH₂) has a higher pI (≈ 10.5) because its side chain is positively charged at neutral pH. Aspartate (with an acidic side chain −CH₂COOH) has a lower pI (≈ 3) because its side chain is negatively charged.'
      }
    },
    {
      id: 'callout-pi-interpretation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interpreting Isoelectric Point Values',
        text: 'Low isoelectric point (e.g., 3.2) → more likely to act as an ACID (carboxylic acid character dominates; amino acid exists as anion at neutral pH).\n\nHigh isoelectric point (e.g., 9.7) → more likely to act as a BASE (amine character dominates; amino acid exists as cation at neutral pH).\n\nAt the isoelectric point itself → amino acid exists as a ZWITTERION (overall charge = 0; the molecule is electrically neutral even though it has both + and − ends).'
      }
    },
    {
      id: 'h-electrophoresis',
      type: 'heading',
      data: { text: 'Amino Acids in Electrophoresis', level: 2 }
    },
    {
      id: 'p-electrophoresis-1',
      type: 'paragraph',
      data: {
        text: 'Electrophoresis is a technique to separate amino acids or proteins based on their electrical charge. An electrical field is applied across a gel or solution. Charged molecules move towards the oppositely charged electrode. The direction and speed of movement depend on the net charge and the mass of the molecule.'
      }
    },
    {
      id: 'p-electrophoresis-2',
      type: 'paragraph',
      data: {
        text: 'At pH below the isoelectric point: The amino acid has a net positive charge (−NH₃⁺ dominates). It moves towards the negative electrode (cathode). At pH above the isoelectric point: The amino acid has a net negative charge (−COO⁻ dominates). It moves towards the positive electrode (anode). At pH equal to the isoelectric point: The amino acid has no net charge and does not move.'
      }
    },
    {
      id: 'callout-electrophoresis-principle',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Electrophoresis at Different pH Values',
        text: 'pH < pI: positive charge → moves to cathode (−). pH = pI: no charge → no movement. pH > pI: negative charge → moves to anode (+). This principle is used to separate amino acids and identify them by their isoelectric points.'
      }
    },
    {
      id: 'list-electrophoresis-practical',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'A simple electrophoresis setup uses moistened filter paper on a microscope slide with a crocodile clip at each end attached to a battery.' },
          { text: 'A drop of amino acid solution is placed in the centre of the paper, and the electric field is applied.' },
          { text: 'Because amino acids are colourless, their final position is revealed by spraying the paper with ninhydrin solution and heating gently to produce coloured spots.' }
        ]
      }
    },
    {
      id: 'h-side-chain-effects',
      type: 'heading',
      data: { text: 'Effect of Side Chains on Charge and pI', level: 2 }
    },
    {
      id: 'p-side-chain-1',
      type: 'paragraph',
      data: {
        text: 'Some amino acids have ionisable groups in their side chains. These affect the overall charge and pI of the amino acid. Acidic amino acids (aspartate, glutamate) have −COOH side chains that become −COO⁻ at neutral pH, adding negative charge. Basic amino acids (lysine, arginine) have −NH₂ side chains that become −NH₃⁺ at neutral pH, adding positive charge. Neutral amino acids (glycine, alanine, valine, etc.) have non-ionisable side chains and maintain the basic two-group system.'
      }
    },
    {
      id: 'h-amino-acid-salts',
      type: 'heading',
      data: { text: 'Salt Formation with Acids and Bases', level: 2 }
    },
    {
      id: 'p-salts-1',
      type: 'paragraph',
      data: {
        text: 'Because amino acids are amphoteric, they can form salts with both acids and bases. An amino acid reacts with an acid to protonate the −COO⁻ (carboxylate) group, and reacts with a base to deprotonate the −NH₃⁺ (ammonium) group. Multiple salts can form from amino acids with additional ionisable side chains.'
      }
    },
    {
      id: 'callout-msg',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'MSG — A Real-Life Amino Acid Salt',
        text: 'Glutamic acid can react with sodium hydroxide to form three possible sodium salts. The most well-known is monosodium glutamate (MSG) — a widely used flavour enhancer in food. There is ongoing debate about MSG\'s health effects, but it is chemically a simple amino acid salt.'
      }
    },
    {
      id: 'h-chirality',
      type: 'heading',
      data: { text: 'Chirality and Optical Activity of Amino Acids', level: 2 }
    },
    {
      id: 'list-chirality',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'A chiral centre is a carbon atom bonded to 4 different groups — this makes the molecule non-superimposable on its mirror image' },
          { text: 'Most α-amino acids have a chiral centre at the α-carbon (bonded to −NH₂, −COOH, −H, and R group — all different)' },
          { text: 'EXCEPTION: Glycine (R = H) — the α-carbon has TWO hydrogen atoms, so only 3 different groups → NOT chiral' },
          { text: 'Because most amino acids are chiral, they are optically active — they rotate plane-polarised light' },
          { text: 'Each amino acid has two enantiomers (non-superimposable mirror images)' },
          { text: 'Dextrorotatory (D or +): rotates polarised light clockwise' },
          { text: 'Laevorotatory (L or −): rotates polarised light anticlockwise' },
          { text: 'If equal amounts of both enantiomers are present → racemic mixture → no net rotation of polarised light' },
          { text: 'All naturally occurring amino acids exist in the L-configuration, though they can be either (+) or (-). Biological systems and enzymes usually only work with one enantiomer because only its spatial arrangement fits properly into active sites.' }
        ]
      }
    },
    {
      id: 'callout-glycine-exception',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Glycine: The Non-Chiral Amino Acid',
        text: 'Glycine (R = H) has the structure H₂N−CH₂−COOH. The central carbon has: −NH₂, −COOH, −H, −H — only 3 distinct groups (H appears twice). A chiral centre requires 4 DIFFERENT groups, so glycine has no chiral centre and is NOT optically active. All other standard amino acids are chiral.'
      }
    },
    {
      id: 'h-ppq-jan2017',
      type: 'heading',
      data: { text: 'Exam Practice — Tyrosine (Jan 2017)', level: 2 }
    },
    {
      id: 'callout-ppq-zwitterion',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked: Drawing the Zwitterion & Enantiomers of Tyrosine',
        text: 'Q: Draw the zwitterion of tyrosine and show its two optical isomers.\n\nZwitterion formation:\n• The H from −COOH transfers internally to −NH₂\n• Result: the carboxylate end becomes −COO⁻ (negative)\n• The amino end becomes −NH₃⁺ (positive)\n• Overall charge = 0 (one + and one − cancel)\n\nKey rule: The + charge is on N (shown as NH₃⁺); the − charge is on O (shown as COO⁻). The H from COOH does NOT stay on the phenol −OH at the bottom of tyrosine.\n\nOptical isomers:\n1. Identify the chiral centre → the α-carbon bonded to 4 different groups: −NH₃⁺, −COO⁻, −H, and −CH₂(4-hydroxyphenyl)\n2. Draw two structures with groups arranged as mirror images (clockwise vs anticlockwise)\n3. The two enantiomers are non-superimposable mirror images of each other'
      }
    },
    {
      id: 'checklist-zwitterions',
      type: 'checklist',
      data: {
        items: [
          { text: 'Amino acids form zwitterions in neutral solution (⁺H₃N−CHR−COO⁻)', checked: false },
          { text: 'Low pH: protonated form ⁺H₃N−CHR−COOH (charge +1)', checked: false },
          { text: 'Neutral pH: zwitterion ⁺H₃N−CHR−COO⁻ (charge 0)', checked: false },
          { text: 'High pH: deprotonated form H₂N−CHR−COO⁻ (charge −1)', checked: false },
          { text: 'Isoelectric point (pI): pH where net charge = 0; low pI → acidic; high pI → basic', checked: false },
          { text: 'Amino acids are amphoteric → form salts with acids AND bases (e.g., MSG)', checked: false },
          { text: 'Most amino acids are chiral (4 different groups on α-carbon); EXCEPT glycine (R = H)', checked: false },
          { text: 'Racemic mixture: equal amounts of enantiomers → no rotation of plane-polarised light', checked: false }
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
        text: 'Understand: Amino acids are amphoteric — they exist as zwitterions (⁺H₃N−CHR−COO⁻) at the isoelectric point (pI). Below pI they are cationic; above pI they are anionic.\n\nApply: Draw the structure of alanine at pH 1, pH 6 (pI), and pH 12.\n\nAnalyze: In electrophoresis at pH 7, amino acid X moves to the cathode. Is its pI above or below 7? Explain.\n\nEvaluate: Why is the pI important in protein purification techniques like isoelectric focusing?'
      },
      terms: []
    },
    {
      id: 'summary-zwitterions',
      type: 'summary',
      data: {
        text: 'Amino acids form zwitterions (⁺H₃N−CHR−COO⁻) in neutral solution via internal proton transfer. Charge varies with pH: low pH → +1 charge; neutral pH → zwitterion (0); high pH → −1 charge. Isoelectric point (pI) is the pH where net charge = 0. Low pI → amino acid is more acidic; high pI → more basic; at pI → zwitterion. Amino acids are amphoteric — they form salts with both acids and bases (e.g., glutamic acid + NaOH → sodium glutamate/MSG). In electrophoresis: pH < pI → move to cathode; pH > pI → move to anode; pH = pI → no movement. Most amino acids are chiral — the α-carbon bonds to 4 different groups; glycine (R = H) is the only non-chiral amino acid. Equal amounts of enantiomers give a racemic mixture with no net rotation of polarised light.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-structure-2', prompt: 'What is a zwitterion, and why do amino acids form them in solution?' },
      { id: 'cue-2', blockId: 'eq-ph-states', prompt: 'Write the ionic forms of an amino acid at low, neutral, and high pH.' },
      { id: 'cue-3', blockId: 'callout-pi-interpretation', prompt: 'What does a low isoelectric point vs a high isoelectric point tell you about an amino acid?' },
      { id: 'cue-4', blockId: 'list-chirality', prompt: 'Why are most amino acids optically active? Which amino acid is the exception and why?' },
      { id: 'cue-5', blockId: 'p-electrophoresis-2', prompt: 'Explain how amino acids move during electrophoresis at different pH values.' }
    ],
    summaryText: 'Zwitterion: ⁺H₃N−CHR−COO⁻ (charge 0 at pI). Low pH: ⁺charge (+1); high pH: −charge (−1). Low pI → acidic; high pI → basic; at pI → zwitterion. Amphoteric → forms salts with acids/bases (MSG). Most amino acids chiral (α-C has 4 different groups); glycine NOT chiral (R = H, has 2 identical H). Racemic mixture: equal enantiomers → no rotation.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Amino acids, zwitterions, and isoelectric points',
      detail: 'Zwitterion structure and formation; charge variation with pH; pI values for common amino acids; electrophoresis principles and application to amino acid separation',
      year: '2023',
      source: 'chemguide.co.uk — amino acids and zwitterions',
      tags: ['amino acid', 'zwitterion', 'isoelectric', 'pH', 'electrophoresis', 'charge']
    }
  ]
};
