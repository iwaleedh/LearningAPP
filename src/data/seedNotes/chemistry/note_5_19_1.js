export const note_chemistry_5_19_1 = {
  blocks: [
    {
      id: 'obj-amine-basicity',
      type: 'objective',
      data: {
        text: 'Explain the basic nature of amines using pKb values; describe the pKb trend across alkylamines; explain why phenylamine is a weaker base than ammonia; describe reactions of amines with water (alkaline solutions), haloalkanes (secondary/tertiary amines, quaternary salts), acyl chlorides (amides), and copper(II) transition metal complexes'
      }
    },
    {
      id: 'h-amine-as-base',
      type: 'heading',
      data: { text: 'Amines as Bases: Lone Pair Acceptance', level: 2 }
    },
    {
      id: 'p-base-1',
      type: 'paragraph',
      data: {
        text: 'Amines are bases because the nitrogen atom has a lone pair of electrons. This lone pair can accept a proton (H⁺) from an acid, forming a positively charged ammonium ion (RNH₃⁺ or similar). The basicity of an amine depends on how readily this lone pair accepts a proton, which is quantified by the base dissociation constant Kb.'
      }
    },
    {
      id: 'eq-amine-protonation',
      type: 'equation',
      data: {
        html: 'RNH₂ + H⁺ ⇌ RNH₃⁺ (primary amine + acid → ammonium salt)<br />R₂NH + H⁺ ⇌ R₂NH₂⁺ (secondary amine + acid)<br />R₃N + H⁺ ⇌ R₃NH⁺ (tertiary amine + acid)'
      }
    },
    {
      id: 'p-base-2',
      type: 'paragraph',
      data: {
        text: 'All amines, whether primary, secondary, or tertiary, can form salts by protonation with acids. The resulting ammonium salts are ionic compounds that are typically soluble in water. For example, methylamine (CH₃NH₂) reacts with hydrochloric acid to form methylammonium chloride (CH₃NH₃⁺Cl⁻), a white crystalline solid.'
      }
    },
    {
      id: 'h-kb-and-strength',
      type: 'heading',
      data: { text: 'Base Strength and Kb Values', level: 2 }
    },
    {
      id: 'p-kb-1',
      type: 'paragraph',
      data: {
        text: 'Base strength is quantified by the base dissociation constant Kb, which measures how readily a base accepts a proton. The equilibrium is: RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻. A larger Kb indicates a stronger base (more H⁺ acceptance). For alkylamines, Kb values are typically in the range 10⁻³ to 10⁻⁴ M. For arylamines, Kb is much smaller, around 10⁻⁹ to 10⁻¹⁰ M.'
      }
    },
    {
      id: 'eq-kb-expression',
      type: 'equation',
      data: {
        html: 'Kb = [RNH₃⁺][OH⁻] / [RNH₂]<br />Larger Kb → stronger base (more readily accepts H⁺)<br />Smaller Kb → weaker base'
      }
    },
    {
      id: 'p-kb-2',
      type: 'paragraph',
      data: {
        text: 'Typical Kb values: methylamine ~4.4 × 10⁻⁴ M; ammonia (NH₃) ~1.8 × 10⁻⁵ M; phenylamine (aniline) ~4.3 × 10⁻¹⁰ M. This shows that methylamine is much stronger base than ammonia, which is much stronger than phenylamine.'
      }
    },
    {
      id: 'h-alkylamine-strength',
      type: 'heading',
      data: { text: 'Alkylamines: Stronger Bases Than Ammonia', level: 2 }
    },
    {
      id: 'p-alkyl-1',
      type: 'paragraph',
      data: {
        text: 'Alkylamines are stronger bases than ammonia. The alkyl groups are electron-donating through an inductive effect (pushing electron density through σ bonds). This increases the electron density on the nitrogen lone pair, making it more readily available to accept a proton. The larger the alkyl group and the more alkyl groups present, the stronger the base effect is, up to a point.'
      }
    },
    {
      id: 'p-alkyl-2',
      type: 'paragraph',
      data: {
        text: 'The basicity order for alkylamines is: primary > secondary > tertiary at one point, but then solvation effects (how the ammonium ion is stabilised in solution) become important. The actual experimental order is: secondary > primary ≈ tertiary. Secondary amines like dimethylamine are the strongest bases among alkylamines.'
      }
    },
    {
      id: 'callout-alkyl-donation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Electron-Donating Alkyl Groups',
        text: 'Alkyl groups push electron density towards N via inductive effect. This increases lone pair electron density. More electron density on N → easier protonation → stronger base. Alkylamine Kb > Ammonia Kb > Arylamine Kb.'
      }
    },
    {
      id: 'h-arylamine-weakness',
      type: 'heading',
      data: { text: 'Arylamines: Weaker Bases Than Ammonia', level: 2 }
    },
    {
      id: 'p-aryl-1',
      type: 'paragraph',
      data: {
        text: 'Arylamines like phenylamine are much weaker bases than ammonia or alkylamines. The reason is resonance: the lone pair on the nitrogen atom of phenylamine is delocalised into the aromatic ring. This means the electrons are spread out over the π system and are less available to accept a proton.'
      }
    },
    {
      id: 'p-aryl-2',
      type: 'paragraph',
      data: {
        text: 'The nitrogen lone pair can participate in resonance structures where the negative charge (if the N were lone pair electrons) would be distributed over the ring. This delocalisation stabilises the neutral phenylamine but destabilises the phenylamine cation (where the lone pair is gone). As a result, protonation is unfavourable, and phenylamine is a weak base.'
      }
    },
    {
      id: 'callout-aryl-delocalisation',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Phenylamine Is a Weak Base',
        text: 'In phenylamine, ONE of the lone pairs on nitrogen overlaps with the benzene ring π system — incorporating it into the delocalised electron cloud (similar to how phenol\'s −OH lone pair delocalises). This extends the delocalisation ABOVE and BELOW the nitrogen atom. The lone pair is no longer fully available on N → less able to form a dative bond with H⁺ → much weaker base. pKb = 9.3 (above 7 → less basic than water).'
      }
    },
    {
      id: 'svg-phenylamine-deloc',
      type: 'svg',
      data: {
        caption: 'Phenylamine: lone pair delocalized into benzene ring π system',
        svg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Benzene ring -->
  <polygon points="120,100 140,65 180,65 200,100 180,135 140,135" fill="#e8f4ff" stroke="#4a6da7" stroke-width="2"/>
  <!-- Alternating bond indicators -->
  <polygon points="123,100 143,70 177,70 197,100 177,130 143,130" fill="none" stroke="#4a6da7" stroke-width="1" stroke-dasharray="4 4"/>
  <!-- N atom -->
  <circle cx="230" cy="100" r="14" fill="#d4f1d4" stroke="#2e7d32" stroke-width="2"/>
  <text x="230" y="104" text-anchor="middle" font-weight="bold" fill="#2e7d32">N</text>
  <!-- N-H bonds -->
  <line x1="244" y1="92" x2="265" y2="78" stroke="#2e7d32" stroke-width="2"/>
  <text x="272" y="76" fill="#555">H</text>
  <line x1="244" y1="108" x2="265" y2="122" stroke="#2e7d32" stroke-width="2"/>
  <text x="272" y="126" fill="#555">H</text>
  <!-- Bond from ring to N -->
  <line x1="200" y1="100" x2="216" y2="100" stroke="#4a6da7" stroke-width="2"/>
  <!-- Lone pair arrow into ring -->
  <path d="M 222 88 Q 190 75 170 80" stroke="#e53935" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#e53935"/>
    </marker>
  </defs>
  <!-- π cloud above/below labels -->
  <ellipse cx="160" cy="52" rx="40" ry="10" fill="rgba(74,109,167,0.15)" stroke="#4a6da7" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="160" y="39" text-anchor="middle" fill="#4a6da7" font-size="10">π cloud</text>
  <ellipse cx="160" cy="148" rx="40" ry="10" fill="rgba(74,109,167,0.15)" stroke="#4a6da7" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="160" y="166" text-anchor="middle" fill="#4a6da7" font-size="10">π cloud</text>
  <!-- Label -->
  <text x="170" y="190" text-anchor="middle" fill="#c62828" font-size="11">Lone pair pulled into ring → N is less electron-rich</text>
</svg>`
      }
    },
    {
      id: 'h-pkb-values',
      type: 'heading',
      data: { text: 'pKb Values and Basicity Trend', level: 2 }
    },
    {
      id: 'list-pkb-concept',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'pKb is the negative log of the base dissociation constant: pKb = −log(Kb)' },
          { text: 'pKb of water at 298 K = 7 (reference point — same as pKa of water)' },
          { text: 'pKb < 7 → the amine is MORE basic than water (stronger base)' },
          { text: 'pKb > 7 → the amine is LESS basic than water (e.g., phenylamine = 9.3)' },
          { text: 'Lower pKb = higher Kb = stronger base (note: pKb and base strength are inversely related)' }
        ]
      }
    },
    {
      id: 'table-pkb-values',
      type: 'comparisonTable',
      data: {
        caption: 'pKb values for ammonia and selected amines at 298 K',
        headers: ['Compound', 'Formula', 'pKb', 'Relative to water (pKb = 7)'],
        rows: [
          ['Ammonia', 'NH₃', '4.74', 'More basic than water'],
          ['Methylamine', 'CH₃NH₂', '3.36', 'More basic than water'],
          ['Ethylamine', 'CH₃CH₂NH₂', '3.25', 'More basic than water'],
          ['Propylamine', 'CH₃CH₂CH₂NH₂', '3.27', 'More basic than water'],
          ['Dimethylamine', '(CH₃)₂NH', '3.27', 'More basic than water (secondary)'],
          ['Phenylamine', 'C₆H₅NH₂', '9.30', 'LESS basic than water']
        ]
      }
    },
    {
      id: 'callout-pkb-trend',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The pKb Trend Explained',
        text: 'Alkyl groups are electron-donating (inductive effect): they push electron density TOWARDS the nitrogen atom. The more/longer the alkyl groups → greater push → higher electron density on N → lone pair more available → stronger base → lower pKb.\n\nPhenylamine breaks the trend: pKb = 9.3 (LESS basic than water!) because the lone pair is delocalised into the benzene ring — the ring pulls electrons AWAY from N instead of pushing electrons towards it.\n\nDimethylamine is more basic than methylamine (two methyl groups donate more).'
      }
    },
    {
      id: 'h-salt-formation',
      type: 'heading',
      data: { text: 'Amine Salt Formation with Strong Acids', level: 2 }
    },
    {
      id: 'p-salt-intro',
      type: 'paragraph',
      data: {
        text: 'Despite the varying basicity of amines (some much more basic than others), ALL amines react with strong acids (HCl, H₂SO₄, HNO₃) to form ionic ammonium salts. The nitrogen lone pair forms a dative bond with H⁺, producing a positive charge on nitrogen.'
      }
    },
    {
      id: 'eq-salt-formation',
      type: 'equation',
      data: {
        html: 'CH₃NH₂ + HCl → CH₃NH₃⁺Cl⁻ (methylammonium chloride)<br />C₆H₅NH₂ + HCl → C₆H₅NH₃⁺Cl⁻ (phenylammonium chloride)<br />(CH₃)₂NH + HCl → (CH₃)₂NH₂⁺Cl⁻ (dimethylammonium chloride)<br /><br />All amines form ammonium-type salts with strong acids — regardless of relative basicity.'
      }
    },
    {
      id: 'h-reaction-water',
      type: 'heading',
      data: { text: 'Reaction of Amines with Water → Alkaline Solutions', level: 2 }
    },
    {
      id: 'list-water-reaction',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Amines dissolve in water and act as bases — exactly like ammonia does' },
          { text: 'The N lone pair accepts a proton (H⁺) from water — the amine acts as a Brønsted–Lowry base' },
          { text: 'Products: alkylammonium ion (RNH₃⁺) + hydroxide ion (OH⁻)' },
          { text: 'The solution is alkaline because OH⁻ ions are produced' },
          { text: 'The reaction is a reversible equilibrium (⇌) — amines are weak bases, so not fully ionised' },
          { text: 'RNH₃⁺ is called the alkylammonium ion — analogous to NH₄⁺ from ammonia' }
        ]
      }
    },
    {
      id: 'eq-water-reaction',
      type: 'equation',
      data: {
        html: 'CH₃NH₂ + H₂O ⇌ CH₃NH₃⁺ + OH⁻<br />(methylamine + water ⇌ methylammonium ion + hydroxide)<br /><br />More generally: RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻<br />The OH⁻ produced makes the solution alkaline.'
      }
    },
    {
      id: 'h-solubility-water',
      type: 'heading',
      data: { text: 'Solubility of Amines in Water', level: 2 }
    },
    {
      id: 'list-solubility',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'SHORT-CHAIN primary aliphatic amines (methyl, ethyl, propyl, butyl) are VERY SOLUBLE in water' },
          { text: 'Reason: they form hydrogen bonds with water molecules (N has a lone pair → H-bond acceptor; N−H acts as H-bond donor)' },
          { text: 'As hydrocarbon chain gets LONGER: London (dispersion) forces become the dominant intermolecular force' },
          { text: 'The energy required to break these London forces is too large — so solubility DECREASES as chain length increases' },
          { text: 'Phenylamine: slightly soluble in water — London forces from the benzene ring are significant but not huge, so it sits right on the border of water solubility' },
          { text: 'If phenylamine\'s benzene ring were any larger (more electrons), it would no longer be water-soluble' }
        ]
      }
    },
    {
      id: 'callout-solubility-explanation',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Short-Chain Amines Are Water-Soluble',
        text: 'H-bonding between amine and water molecules provides enough energy to overcome the London forces holding the amine molecules together. As chain length increases: more electrons → stronger London forces → more energy needed to separate molecules → less soluble in water. Phenylamine is borderline: H-bonds just barely balance the London forces from the ring.'
      }
    },
    {
      id: 'h-reaction-haloalkanes',
      type: 'heading',
      data: { text: 'Reactions of Amines with Haloalkanes', level: 2 }
    },
    {
      id: 'list-haloalkane-reactions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'A primary amine (RNH₂) can react with a haloalkane because: the haloalkane has an electron-deficient (δ+) carbon; the amine has an electron-rich lone pair on N' },
          { text: 'The N lone pair attacks the δ+ carbon → displaces halide → forms a SECONDARY amine (R₂NH) + hydrogen halide' },
          { text: 'The secondary amine still has a lone pair on N → can react again with more haloalkane → TERTIARY amine (R₃N)' },
          { text: 'The tertiary amine also has a lone pair → reacts again with haloalkane, BUT this time there is no H to lose → forms a QUATERNARY AMMONIUM SALT (R₄N⁺ X⁻)' },
          { text: 'Quaternary ammonium salts: all four positions on N are filled by alkyl groups; nitrogen bears a permanent positive charge; Cl⁻ balances the charge' }
        ]
      }
    },
    {
      id: 'eq-haloalkane-steps',
      type: 'equation',
      data: {
        html: 'Step 1 — Primary amine + haloalkane:<br />C₂H₅NH₂ + C₂H₅Cl → (C₂H₅)₂NH + HCl (secondary amine)<br /><br />Step 2 — Secondary amine + haloalkane:<br />(C₂H₅)₂NH + C₂H₅Cl → (C₂H₅)₃N + HCl (tertiary amine)<br /><br />Step 3 — Tertiary amine + haloalkane:<br />(C₂H₅)₃N + C₂H₅Cl → (C₂H₅)₄N⁺Cl⁻ (quaternary ammonium salt)<br />(no H to lose → positive charge on N + Cl⁻ counterion)'
      }
    },
    {
      id: 'callout-quaternary-salt',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Quaternary Ammonium Salts',
        text: 'Structure: R₄N⁺X⁻ — four alkyl groups on N, permanent positive charge, with a halide counterion (analogous to NH₄Cl but all H replaced by alkyl groups). They are ionic compounds, soluble in water. Used in: antiseptics, fabric softeners (cationic surfactants), phase-transfer catalysts.'
      }
    },
    {
      id: 'h-reaction-acyl-chloride',
      type: 'heading',
      data: { text: 'Reactions with Acyl Chlorides → Amide Formation', level: 2 }
    },
    {
      id: 'list-acyl-reaction',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Amines react with acyl chlorides (R−COCl) in an addition-elimination reaction to form AMIDES' },
          { text: 'The N lone pair attacks the carbonyl carbon (electron-deficient due to C=O and C−Cl bonds); Cl leaves; amide (−CO−NH−) forms' },
          { text: 'This replaces one of the H atoms on −NH₂ with the acyl group (−CO−R)' },
          { text: 'Example: paracetamol is an amide — the −NHCOCH₃ group (ethanamide) is attached to a para-hydroxybenzene ring' },
          { text: '"para" = two substituents on opposite sides of the benzene ring; ethanamide = previous name for this amide group' },
          { text: 'Full detail on amide formation mechanisms is covered in subtopic 19.4' }
        ]
      }
    },
    {
      id: 'callout-paracetamol',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Example: Paracetamol Synthesis',
        text: 'Paracetamol (acetaminophen) = para-acetamidophenol:\n• "para": −OH and −NHCOCH₃ groups on opposite ends of benzene ring\n• Synthesised by reacting 4-aminophenol with ethanoyl chloride (CH₃COCl)\n• The N lone pair on the −NH₂ attacks the acyl chloride → amide bond forms → HCl released\n• The −NHCOCH₃ group formed IS the amide (ethanamide-type linkage)\n• This is an addition-elimination reaction: two molecules join, then a small molecule (HCl) is eliminated'
      }
    },
    {
      id: 'h-reaction-copper',
      type: 'heading',
      data: { text: 'Reactions with Copper(II) — Transition Metal Complexes', level: 2 }
    },
    {
      id: 'list-copper-reactions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Amines react with copper(II) solutions in exactly the same way as ammonia — through the lone pair on nitrogen' },
          { text: 'Step 1 — Add amine (e.g., butylamine) to Cu²⁺(aq): pale blue precipitate of Cu(OH)₂ forms initially' },
          { text: 'Step 2 — Add EXCESS amine: the precipitate dissolves → deep blue solution forms' },
          { text: 'Deep blue solution = copper(II) amine complex, analogous to the tetraamminecopper(II) complex formed with ammonia' },
          { text: 'The amine acts as a LIGAND — its N lone pair donates into empty d-orbitals of Cu²⁺, forming a dative bond' },
          { text: 'Alkylamines replace NH₃ ligands in the copper complex: [Cu(NH₃)₄]²⁺ uses NH₃; with butylamine = [Cu(RNH₂)₄]²⁺ type structure' }
        ]
      }
    },
    {
      id: 'callout-copper-summary',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Amine + Cu²⁺: Same as Ammonia',
        text: 'Cu²⁺ + amine (small amount) → pale blue Cu(OH)₂ precipitate. Cu²⁺ + amine (excess) → deep blue copper-amine complex (amine as ligand). Same chemistry as ammonia because the lone pair on N is the key feature in both cases. If unclear: revise how ammonia reacts with copper (Topic 17).'
      }
    },
    {
      id: 'h-ppq-jan2015',
      type: 'heading',
      data: { text: 'Exam Practice — Methylamine vs Ammonia (Jan 2015)', level: 2 }
    },
    {
      id: 'callout-ppq-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Q: Why does methylamine have a higher boiling point than ammonia?',
        text: 'Both molecules have hydrogen bonds (N−H donors + lone pair acceptors) — so H-bonding alone does not explain the difference.\n\nAnswer (2 marks):\n• Methylamine has STRONGER London (dispersion) forces than ammonia\n• Because methylamine has MORE electrons (larger molecule with CH₃ group)\n• More electrons → greater probability of instantaneous dipoles → stronger induced-dipole interactions\n• More energy is required to overcome these stronger London forces → higher boiling point'
      }
    },
    {
      id: 'callout-ppq-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Q: Why are primary amines soluble in water, but solubility decreases with molar mass?',
        text: '(3 marks)\n1. Primary amines form HYDROGEN BONDS with water molecules (lone pair on N + N−H acting as H-bond donor/acceptor) → water-soluble\n2. As molar mass increases, the size of the hydrocarbon chain increases → more electrons → STRONGER London forces between amine molecules\n3. The energy of hydration (from forming H-bonds with water) is no longer sufficient to break the stronger London forces between larger amine molecules → solubility decreases'
      }
    },
    {
      id: 'callout-ppq-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Q: Why is dimethylamine more basic than methylamine, and both more basic than phenylamine?',
        text: '(3 marks — 3 separate points)\n\nDimethylamine vs methylamine:\n• Basicity depends on the availability of the lone pair on N for proton donation\n• Methyl groups are ELECTRON DONATING (inductive effect)\n• Dimethylamine has TWO methyl groups → greater electron donation → higher electron density on N → lone pair more available → stronger base\n\nBoth vs phenylamine:\n• In phenylamine, the lone pair on N is DELOCALISED into the benzene ring\n• This reduces electron density on N\n• The lone pair is less available to form a dative bond with H⁺ → weak base (pKb = 9.3, less basic than water)'
      }
    },
    {
      id: 'h-bromine-reaction',
      type: 'heading',
      data: { text: 'Reaction of Phenylamine with Bromine Water', level: 2 }
    },
    {
      id: 'p-bromine-activation',
      type: 'paragraph',
      data: {
        text: 'The −NH₂ group in phenylamine strongly activates the benzene ring, making it much more reactive towards electrophilic substitution. The nitrogen lone pair delocalises into the ring, increasing electron density and making the ring attractive to electrophiles (like Br₂).'
      }
    },
    {
      id: 'svg-phenylamine-deloc-bromine',
      type: 'svg',
      data: {
        svg: '<svg width="220" height="80" viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="220" height="80" fill="#f9f9f9"/><text x="10" y="20" font-size="14" fill="#333">Phenylamine: N lone pair delocalises</text><text x="10" y="40" font-size="14" fill="#333">→ Ring activation for Br₂</text></svg>',
        caption: 'Delocalisation of N lone pair into benzene ring activates ring for bromine substitution.'
      }
    },
    {
      id: 'callout-bromine-directing',
      type: 'callout',
      data: {
        style: 'key',
        title: '2,4,6-Directing Effect of −NH₂',
        text: 'The −NH₂ group directs incoming substituents to the 2-, 4-, and 6-positions. This results in multiple substitution when bromine water is added.'
      }
    },
    {
      id: 'list-bromine-reaction',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Add bromine water (Br₂(aq)) to phenylamine in the cold, no catalyst needed.',
          'Bromine water is decolourised and a white precipitate forms.',
          'Product: 2,4,6-tribromophenylamine (white solid).',
          'Multiple substitution occurs at all activated positions.'
        ]
      }
    },
    {
      id: 'eq-bromine-reaction',
      type: 'equation',
      data: {
        html: 'C₆H₅NH₂ + 3Br₂(aq) → C₆H₂Br₃NH₂ + 3HBr<br />Product: 2,4,6-tribromophenylamine (white precipitate)'
      }
    },
    {
      id: 'checklist-basicity',
      type: 'checklist',
      data: {
        items: [
          { text: 'Amines are bases: N lone pair accepts H⁺; pKb < 7 = more basic than water', checked: false },
          { text: 'pKb trend: methylamine (3.36) → ethylamine (3.25) → pKb decreases = more basic as chain lengthens', checked: false },
          { text: 'Phenylamine pKb = 9.3 → LESS basic than water (lone pair delocalised into ring)', checked: false },
          { text: 'Amines + water ⇌ alkylammonium ion + OH⁻ (alkaline solution)', checked: false },
          { text: 'Solubility: short chains = very soluble (H-bonding); longer chains = less soluble (London forces dominant)', checked: false },
          { text: 'Amines + HCl → ammonium salts (all amines do this regardless of basicity)', checked: false },
          { text: 'Amines + haloalkane → secondary amine → tertiary amine → quaternary ammonium salt (R₄N⁺Cl⁻)', checked: false },
          { text: 'Amines + Cu²⁺ (small amount) → Cu(OH)₂ pale blue precipitate; excess → deep blue complex', checked: false }
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
        text: 'Understand: The lone pair on N accepts protons, making amines basic. Electron-donating alkyl groups increase base strength; electron-withdrawing aryl groups decrease it.\n\nApply: Arrange in order of increasing base strength: NH₃, CH₃NH₂, (CH₃)₂NH, C₆H₅NH₂. Explain.\n\nAnalyze: Why is phenylamine a much weaker base than cyclohexylamine? Use the delocalisation of the lone pair into the ring.\n\nEvaluate: In water, (CH₃)₃N is a weaker base than (CH₃)₂NH. In the gas phase, it is stronger. Explain this solvent effect.'
      },
      terms: []
    },
    {
      id: 'summary-basicity',
      type: 'summary',
      data: {
        text: 'Amines are bases: the N lone pair accepts protons. pKb < 7 = more basic than water. Alkylamines are stronger bases than NH₃ (pKb 4.74) because alkyl groups donate electrons inductively, increasing lone pair density on N. Trend: methylamine (3.36) < ethylamine (3.25) — longer chain = lower pKb = stronger base. Phenylamine pKb = 9.3 — LESS basic than water because the lone pair is delocalised into the benzene ring, reducing electron density on N. Primary amines dissolve in water forming alkaline solutions (RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻). Short-chain amines are very soluble (H-bonding); solubility decreases as chain length increases (London forces dominant). Amines react with haloalkanes: sequential alkylation gives secondary amine → tertiary amine → quaternary ammonium salt (R₄N⁺X⁻, no H on N). Amines react with Cu²⁺: pale blue Cu(OH)₂ precipitate with small amounts; deep blue copper-amine complex with excess.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-pkb-values', prompt: 'What are the pKb values for ammonia, methylamine, and phenylamine? What does pKb = 9.3 for phenylamine tell you?' },
      { id: 'cue-2', blockId: 'callout-pkb-trend', prompt: 'Explain the pKb trend across alkylamines. Why does chain length increase base strength?' },
      { id: 'cue-3', blockId: 'svg-phenylamine-deloc', prompt: 'Why is phenylamine a weaker base than ammonia? What happens to its lone pair?' },
      { id: 'cue-4', blockId: 'eq-water-reaction', prompt: 'Write the equilibrium equation for methylamine dissolving in water. Why is the solution alkaline?' },
      { id: 'cue-5', blockId: 'eq-haloalkane-steps', prompt: 'Show the stepwise reaction of ethylamine with chloroethane to form a quaternary ammonium salt.' }
    ],
    summaryText: 'Amines basic: N lone pair accepts H⁺. pKb < 7 = more basic than water. pKb: methylamine 3.36, NH₃ 4.74, phenylamine 9.3 (less basic than water). Alkyl groups donate inductively → ↑ electron density on N → ↓ pKb. Phenylamine: lone pair delocalised into ring → ↑ pKb. Dissolved in water: RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻ (alkaline). Short chains: H-bond with water → soluble. Long chains: London forces > H-bonding → less soluble. Haloalkane reactions: RNH₂ → R₂NH → R₃N → R₄N⁺X⁻. Cu²⁺ + amine (excess) → deep blue complex.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Amine basicity and Kb values',
      detail: 'Base dissociation constants for alkylamines, ammonia, and arylamines; resonance effects in phenylamine; protonation reactions and salt formation',
      year: '2023',
      source: 'chemguide.co.uk — amine basicity and reactions with acids',
      tags: ['basicity', 'Kb', 'alkylamine', 'arylamine', 'salt', 'protonation']
    }
  ]
};
