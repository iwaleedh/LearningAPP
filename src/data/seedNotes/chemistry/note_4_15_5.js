export const note_chemistry_4_15_5 = {
  blocks: [

    // ── Objective ───────────────────────────────────────────────────────────
    {
      id: 'obj-carboxylic',
      type: 'objective',
      data: {
        text: 'Know the nomenclature, displayed/skeletal formulae, and physical properties of carboxylic acids. Understand preparation methods and master the key reactions: reduction, neutralisation, halogenation, esterification, and decarboxylation (IAL Unit 4, Topic 15c).'
      }
    },

    // ── Nomenclature & Functional Group ─────────────────────────────────────
    {
      id: 'h-nomenclature',
      type: 'heading',
      data: { text: 'Nomenclature & Functional Group', level: 2 }
    },
    {
      id: 'list-naming',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Functional group: carboxyl group = carbonyl (C=O) + hydroxyl (–OH) attached to the same carbon',
          'General formula: R–COOH (R = hydrogen or alkyl group)',
          'Suffix: –anoic acid (e.g. methanoic, ethanoic, propanoic, butanoic acid)',
          'Common names exist but always use IUPAC names: formic (methanoic), acetic (ethanoic)',
          'Must draw displayed, structural, and skeletal formulae for first four + branched examples (e.g. 2-methylpropanoic acid)',
          'The –COOH carbon is always carbon 1 when numbering the chain'
        ]
      }
    },
    {
      id: 'table-first4',
      type: 'comparisonTable',
      data: {
        headers: ['Name', 'Molecular formula', 'Shortened structural formula'],
        rows: [
          ['Methanoic acid', 'HCOOH', 'H–COOH'],
          ['Ethanoic acid', 'CH₃COOH', 'CH₃–COOH'],
          ['Propanoic acid', 'C₂H₅COOH', 'CH₃CH₂–COOH'],
          ['Butanoic acid', 'C₃H₇COOH', 'CH₃CH₂CH₂–COOH']
        ],
        caption: 'First four carboxylic acids — names and formulae. All are liquids at room temperature.'
      }
    },

    // ── Bonding & Carboxylate Ion ────────────────────────────────────────────
    {
      id: 'h-bonding',
      type: 'heading',
      data: { text: 'Bonding & The Carboxylate Ion', level: 2 }
    },
    {
      id: 'list-bonding',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The carboxyl group contains THREE polar bonds: C=O (carbonyl), C–O (single bond), and O–H',
          'All three have δ⁻ on oxygen and δ⁺ on carbon/hydrogen — oxygen is most electronegative',
          'Most reactions involve loss of the O–H proton (H⁺) → forms the carboxylate ion (RCOO⁻)',
          'In the carboxylate ion, the negative charge is delocalised equally over BOTH C–O bonds',
          'Shown with a dotted bond between C and both O atoms (neither a full single nor double bond)',
          'This resonance stabilisation makes carboxylic acids stronger acids than alcohols (pKₐ ~3–5 vs ~15 for alcohols)'
        ]
      }
    },
    {
      id: 'svg-carboxylate',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 210" font-family="Arial,sans-serif" font-size="13">
  <text x="290" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Carboxylate Ion — Resonance Delocalisation</text>

  <!-- LEFT: Carboxylic acid -->
  <text x="28" y="58" font-size="11" fill="#6b7280">Carboxylic acid</text>
  <text x="28" y="108" font-size="15" fill="#374151">R</text>
  <line x1="44" y1="103" x2="72" y2="103" stroke="#374151" stroke-width="2"/>
  <text x="74" y="108" font-size="15" fill="#374151">C</text>
  <line x1="84" y1="95" x2="108" y2="76" stroke="#374151" stroke-width="2.5"/>
  <line x1="87" y1="99" x2="111" y2="80" stroke="#374151" stroke-width="2.5"/>
  <text x="112" y="74" font-size="15" fill="#dc2626">O</text>
  <text x="126" y="68" font-size="11" fill="#dc2626">δ−</text>
  <line x1="84" y1="108" x2="108" y2="127" stroke="#374151" stroke-width="2.5"/>
  <text x="110" y="135" font-size="15" fill="#dc2626">O</text>
  <text x="124" y="130" font-size="11" fill="#dc2626">δ−</text>
  <line x1="124" y1="130" x2="142" y2="120" stroke="#374151" stroke-width="2.5"/>
  <text x="144" y="118" font-size="15" fill="#2563eb">H</text>
  <text x="156" y="112" font-size="11" fill="#2563eb">δ+</text>

  <!-- Arrow: loses H+ -->
  <text x="175" y="95" font-size="13" fill="#374151">−H⁺</text>
  <line x1="170" y1="103" x2="202" y2="103" stroke="#374151" stroke-width="2"/>
  <polygon points="202,98 212,103 202,108" fill="#374151"/>

  <!-- RIGHT: Carboxylate ion -->
  <text x="222" y="58" font-size="11" fill="#6b7280">Carboxylate ion (RCOO⁻)</text>
  <text x="222" y="108" font-size="15" fill="#374151">R</text>
  <line x1="238" y1="103" x2="264" y2="103" stroke="#374151" stroke-width="2"/>
  <text x="266" y="108" font-size="15" fill="#374151">C</text>
  <!-- Dashed (delocalised) bond to upper O -->
  <line x1="276" y1="95" x2="300" y2="76" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="303" y="74" font-size="15" fill="#dc2626">O</text>
  <text x="316" y="68" font-size="12" fill="#dc2626">½⁻</text>
  <!-- Dashed (delocalised) bond to lower O -->
  <line x1="276" y1="108" x2="300" y2="127" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="303" y="135" font-size="15" fill="#dc2626">O</text>
  <text x="316" y="135" font-size="12" fill="#dc2626">½⁻</text>

  <!-- Annotation box -->
  <rect x="222" y="152" width="230" height="44" rx="6" fill="#2d1b69" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="232" y="170" font-size="11" fill="#5b21b6">Charge is spread equally over both</text>
  <text x="232" y="186" font-size="11" fill="#5b21b6">C–O bonds → resonance stabilised</text>

  <!-- Legend -->
  <line x1="466" y1="100" x2="490" y2="100" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="494" y="104" font-size="11" fill="#1d4ed8">delocalised bond</text>
</svg>`,
        caption: 'Loss of H⁺ from RCOOH gives the carboxylate ion (RCOO⁻). The negative charge delocalises equally over both C–O bonds (dashed lines), making the anion far more stable than an alkoxide (RO⁻) — this is why carboxylic acids are stronger acids than alcohols.'
      }
    },

    // ── Relative Acidity & Inductive Effects ─────────────────────────────────
    {
      id: 'h-relative-acidity',
      type: 'heading',
      data: { text: 'Relative Acidity & Inductive Effects', level: 2 }
    },
    {
      id: 'list-acidity-comparison',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Carboxylic Acids vs Phenols vs Alcohols:</strong> Acid strength depends on the stability of the anion formed after losing H⁺.',
          '<strong>Alcohols</strong> (e.g. ethanol) are very weak acids (pKₐ ~16). The ethoxide ion (CH₃CH₂O⁻) has the negative charge localised entirely on one oxygen atom, attracting H⁺ back immediately.',
          '<strong>Phenols</strong> are stronger acids than alcohols (pKₐ ~10). In the phenoxide ion, the oxygen lone pair partially delocalises into the benzene ring, spreading out the negative charge over the ring, making the ion slightly more stable.',
          '<strong>Carboxylic acids</strong> are stronger still (pKₐ ~4–5). The negative charge in the carboxylate ion is perfectly delocalised evenly across two highly electronegative oxygen atoms, making the ion very stable.'
        ]
      }
    },
    {
      id: 'h-inductive',
      type: 'heading',
      data: { text: 'Inductive Effects in Carboxylic Acids', level: 3 }
    },
    {
      id: 'list-inductive-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Alkyl groups (+I effect):</strong> Alkyl groups are electron-donating (pushing electrons away). They increase the negative charge density on the carboxylate ion, making it less stable.',
          'Therefore, ethanoic acid is a weaker acid than methanoic acid.',
          '<strong>Electronegative atoms (–I effect):</strong> Atoms like halogens (e.g. chlorine) withdraw electrons from the carboxylate group.',
          'This pulls negative charge away from the –COO⁻ group, spreading it out further and stabilising the ion. This makes the acid significantly stronger.'
        ]
      }
    },
    {
      id: 'table-inductive-pka',
      type: 'comparisonTable',
      data: {
        headers: ['Acid', 'Formula', 'pKₐ'],
        rows: [
          ['Methanoic acid', 'HCOOH', '3.75'],
          ['Ethanoic acid', 'CH₃COOH', '4.76'],
          ['Chloroethanoic acid', 'CH₂ClCOOH', '2.86'],
          ['Dichloroethanoic acid', 'CHCl₂COOH', '1.29'],
          ['Trichloroethanoic acid', 'CCl₃COOH', '0.65']
        ],
        caption: 'Smaller pKₐ means stronger acid. Adding electron-withdrawing chlorine atoms significantly increases acid strength.'
      }
    },

    // ── Physical Properties ──────────────────────────────────────────────────
    {
      id: 'h-physical',
      type: 'heading',
      data: { text: 'Physical Properties', level: 2 }
    },
    {
      id: 'h-bp',
      type: 'heading',
      data: { text: 'Boiling Points', level: 3 }
    },
    {
      id: 'list-bp',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Carboxylic acids have ALL THREE types of intermolecular force: hydrogen bonds, permanent dipole–permanent dipole (PDPD), and London dispersion forces',
          'This gives them the highest boiling points of all organic homologous series at the same molar mass',
          'Order of increasing boiling point (same molar mass): alkanes < alkenes < aldehydes/ketones (PDPD only) < alcohols (H-bonding) < carboxylic acids (even stronger H-bonding)',
          'As chain length increases → BP increases due to stronger London dispersion forces (more electrons)',
          'Carboxylic acids can also form hydrogen-bonded dimers (two molecules held together by two H-bonds) — further elevating effective BP'
        ]
      }
    },
    {
      id: 'table-bp-series',
      type: 'comparisonTable',
      data: {
        headers: ['Homologous series', 'IMFs present', 'Relative boiling point'],
        rows: [
          ['Alkanes / alkenes', 'London forces only', 'Lowest'],
          ['Aldehydes / ketones', 'PDPD + London forces', 'Medium-low'],
          ['Alcohols', 'H-bonding + PDPD + London forces', 'Medium-high'],
          ['Carboxylic acids', 'H-bonding + PDPD + London forces (strongest H-bonds)', 'Highest']
        ],
        caption: 'Carboxylic acids rank at the top for boiling points because their H-bonds are stronger — both the C=O and O–H are available for H-bonding.'
      }
    },
    {
      id: 'h-solubility',
      type: 'heading',
      data: { text: 'Solubility in Water', level: 3 }
    },
    {
      id: 'list-solubility',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Short-chain carboxylic acids (C1–C4) are very soluble in water',
          'They form TWO types of hydrogen bond with water:',
          '   ① The δ⁻ oxygen (C=O) attracts a δ⁺ hydrogen of a water molecule',
          '   ② The δ⁺ hydrogen (–OH of carboxyl) donates to the lone pair on oxygen of a water molecule',
          'As chain length increases → solubility decreases because the non-polar hydrocarbon chain becomes dominant and disrupts H-bonding with water',
          'Must be able to draw a labelled diagram of these two H-bonds — likely examined in Unit 4'
        ]
      }
    },
    {
      id: 'svg-hbonds',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" font-family="Arial,sans-serif" font-size="13">
  <text x="260" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#1e293b">Hydrogen Bonding: Ethanoic Acid with Water</text>

  <!-- Ethanoic acid (centre) -->
  <text x="168" y="125" font-size="14" fill="#374151">CH₃</text>
  <line x1="200" y1="120" x2="228" y2="120" stroke="#374151" stroke-width="2"/>
  <text x="230" y="125" font-size="14" fill="#374151">C</text>
  <!-- C=O double bond (upper) -->
  <line x1="241" y1="112" x2="264" y2="93" stroke="#374151" stroke-width="2.5"/>
  <line x1="244" y1="116" x2="267" y2="97" stroke="#374151" stroke-width="2.5"/>
  <text x="267" y="91" font-size="14" fill="#dc2626">O</text>
  <text x="281" y="85" font-size="11" fill="#dc2626">δ−</text>
  <!-- C-O single bond (lower) -->
  <line x1="241" y1="125" x2="264" y2="144" stroke="#374151" stroke-width="2.5"/>
  <text x="266" y="152" font-size="14" fill="#dc2626">O</text>
  <text x="280" y="150" font-size="11" fill="#dc2626">δ−</text>
  <line x1="278" y1="148" x2="298" y2="137" stroke="#374151" stroke-width="2.5"/>
  <text x="300" y="135" font-size="14" fill="#2563eb">H</text>
  <text x="313" y="129" font-size="11" fill="#2563eb">δ+</text>

  <!-- Water molecule ABOVE (H-bond via C=O oxygen) -->
  <text x="285" y="52" font-size="13" fill="#374151">H</text>
  <text x="297" y="46" font-size="11" fill="#2563eb">δ+</text>
  <text x="310" y="52" font-size="13" fill="#dc2626">O</text>
  <text x="324" y="46" font-size="11" fill="#dc2626">δ−</text>
  <text x="300" y="68" font-size="13" fill="#374151">H</text>
  <!-- H-bond ①: from water H to C=O oxygen -->
  <line x1="291" y1="54" x2="276" y2="80" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="253" y="68" font-size="11" fill="#0284c7" font-weight="bold">H-bond ①</text>

  <!-- Water molecule RIGHT (H-bond via O-H of acid) -->
  <text x="390" y="128" font-size="13" fill="#dc2626">O</text>
  <text x="404" y="122" font-size="11" fill="#dc2626">δ−</text>
  <text x="383" y="145" font-size="13" fill="#374151">H</text>
  <text x="406" y="145" font-size="13" fill="#374151">H</text>
  <!-- H-bond ②: from acid H to water O lone pair -->
  <line x1="318" y1="132" x2="388" y2="128" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="335" y="118" font-size="11" fill="#0284c7" font-weight="bold">H-bond ②</text>

  <!-- Key box -->
  <rect x="14" y="170" width="240" height="65" rx="6" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="24" y="188" font-size="12" font-weight="bold" fill="#1d4ed8">Two H-bonds with water:</text>
  <text x="24" y="206" font-size="11" fill="#374151">① δ⁻ O (C=O) ··· δ⁺ H–O (water)</text>
  <text x="24" y="222" font-size="11" fill="#374151">② δ⁺ H (–OH) ··· lone pair on O (water)</text>
</svg>`,
        caption: 'Ethanoic acid forms two distinct hydrogen bonds with water — one via the carbonyl oxygen and one via the carboxyl hydrogen. This explains the high solubility of short-chain carboxylic acids.'
      }
    },
    {
      id: 'callout-smells',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Smells & Tastes (for context)',
        text: '• Carboxylic acids have sour smells and tastes\n• Ethanoic acid → vinegar (sharp sour taste)\n• Citric acid → lemons (sour taste)\n• Butanoic acid → rancid butter (unpleasant smell)\n• Esters made FROM carboxylic acids have pleasant fruity/floral odours\n\nNote: You are NOT required to memorise all smells for the exam. Ethanoic acid/vinegar is the most important to know.'
      }
    },

    // ── Preparation of Carboxylic Acids ─────────────────────────────────────
    {
      id: 'h-preparation',
      type: 'heading',
      data: { text: 'Preparation of Carboxylic Acids', level: 2 }
    },
    {
      id: 'h-oxidation',
      type: 'heading',
      data: { text: 'Method 1 — Oxidation of a Primary Alcohol or Aldehyde', level: 3 }
    },
    {
      id: 'list-oxidation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Oxidising agent: acidified potassium dichromate(VI) = K₂Cr₂O₇ + dilute H₂SO₄ (abbreviated as [O] in equations)',
          'Conditions: HEAT UNDER REFLUX with an excess of oxidising agent to ensure oxidation goes completely to the carboxylic acid',
          'Safety Warning: The early stages of reacting a primary alcohol can be highly vigorous. Reagents must be thoroughly mixed before heating to prevent the mixture from suddenly boiling and spurting out of the condenser',
          'Key distinction: distillation = stop at aldehyde; reflux = go all the way to carboxylic acid',
          'Primary alcohol → carboxylic acid requires 2 mol [O] (two-step: alcohol → aldehyde → acid)',
          'Aldehyde → carboxylic acid requires 1 mol [O] (one-step)',
          'Fractional distillation after reaction isolates the pure carboxylic acid product',
          'Example: propan-1-ol + 2[O] → propanoic acid (under reflux)',
          'Example: propanal + [O] → propanoic acid (under reflux)'
        ]
      }
    },
    {
      id: 'h-nitrile',
      type: 'heading',
      data: { text: 'Method 2 — Hydrolysis of a Nitrile (–C≡N)', level: 3 }
    },
    {
      id: 'p-nitrile-intro',
      type: 'paragraph',
      data: {
        text: 'A nitrile contains the –C≡N group. The carbon in –CN counts as part of the carbon chain (e.g. propanenitrile CH₃CH₂C≡N has 3 carbons).\n\n**Synthesis Role**: Nitriles are vital in organic synthesis because they increase the carbon chain length by one. They are formed by reacting halogenoalkanes with cyanide ions, or aldehydes/ketones with hydrogen cyanide. Nitriles are hydrolysed under reflux with dilute acid or aqueous alkali to form carboxylic acids.'
      }
    },
    {
      id: 'table-nitrile',
      type: 'comparisonTable',
      data: {
        headers: ['Type', 'Reagent & Conditions', 'No. of steps', 'Products'],
        rows: [
          ['Acidic hydrolysis', 'Dilute HCl (or H₂SO₄) + H₂O, under reflux', '1 step', 'Carboxylic acid + NH₄⁺ (ammonium salt)'],
          ['Alkaline hydrolysis', 'NaOH(aq) + H₂O under reflux, THEN add dilute acid', '2 steps', 'Step 1: carboxylate ion (RCOO⁻) + NH₃; Step 2: + HCl → carboxylic acid']
        ],
        caption: 'Acidic hydrolysis = 1 step (direct to carboxylic acid). Alkaline hydrolysis = 2 steps (carboxylate ion first, then protonate). This distinction is a very common MCQ topic in IAL Unit 4.'
      }
    },
    {
      id: 'callout-nitrile-exam',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Common MCQ Trap — Single-Step to Carboxylic Acid',
        text: 'Q: "Which reaction produces a carboxylic acid in a single step?"\n\n✓ Acidic hydrolysis of a nitrile (dilute acid + water, reflux) — 1 step\n✗ Alkaline hydrolysis of a nitrile — 2 steps (carboxylate first, then add acid)\n✓ Hydrolysis of an ester with HCl — also 1 step\n\nAlkaline hydrolysis always requires a second step to protonate the carboxylate ion.'
      }
    },

    // ── Four Key Reactions ───────────────────────────────────────────────────
    {
      id: 'h-reactions',
      type: 'heading',
      data: { text: 'Key Reactions of Carboxylic Acids', level: 2 }
    },
    {
      id: 'callout-no-mechanism',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'IAL Exam Note — No Mechanisms Required',
        text: 'For all the key reactions below, you only need to know:\n• Reagents\n• Conditions\n• Products\n\nMechanisms are NOT required for any of these reactions in the IAL Unit 4 exam.'
      }
    },

    // Reaction 1: Reduction
    {
      id: 'h-reduction',
      type: 'heading',
      data: { text: 'Reaction 1 — Reduction to Primary Alcohol', level: 3 }
    },
    {
      id: 'list-reduction',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Reagent:** Lithium tetrahydridoaluminate(III) ($LiAlH_4$).',
          '**Conditions:** Room temperature in dry ethoxyethane (dry ether). $LiAlH_4$ reacts violently with water, so moisture must be excluded.',
          '**Product:** Primary alcohol (R–CH₂OH).',
          'The reaction happens in two stages (intermediate aldehyde), but because $LiAlH_4$ reacts very rapidly with aldehydes, it is impossible to stop at the halfway stage.',
          'At the end of the reaction, the product is an aluminium complex. Dilute sulphuric acid is added to release the primary alcohol from the complex.',
          '**Crucial Exam Note:** Sodium tetrahydridoborate ($NaBH_4$) CANNOT be used. It is safer than $LiAlH_4$, but not reactive enough to reduce carboxylic acids.'
        ]
      }
    },
    {
      id: 'equation-reduction',
      type: 'equation',
      data: {
        html: 'CH₃CH₂CH₂COOH + 4[H] → CH₃CH₂CH₂CH₂OH + H₂O',
        caption: 'Reduction of butanoic acid → butan-1-ol using LiAlH₄ in dry ether. [H] represents hydride from LiAlH₄.'
      }
    },
    {
      id: 'callout-reduction-warn',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why Can\'t You Stop at the Aldehyde?',
        text: 'The aldehyde intermediate is MORE easily reduced than the carboxylic acid → it converts to the primary alcohol immediately.\n\nTo make an aldehyde FROM a carboxylic acid requires TWO steps:\n① LiAlH₄ / dry ether → primary alcohol (R–CH₂OH)\n② Acidified K₂Cr₂O₇, heat, distil immediately → aldehyde (R–CHO)'
      }
    },

    // Reaction 2: Neutralisation / Acid Reactions
    {
      id: 'h-neutralisation',
      type: 'heading',
      data: { text: 'Reaction 2 — Reactions as Weak Acids (Neutralisation & Salts)', level: 3 }
    },
    {
      id: 'p-acid-behaviour',
      type: 'paragraph',
      data: {
        text: 'Carboxylic acids act as typical weak acids (typical pH ~2–3). They donate a proton to form a carboxylate ion (RCOO⁻). They undergo standard acid reactions but generally slower than strong acids like HCl.'
      }
    },
    {
      id: 'list-neutralisation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**With Metal Hydroxides:** Neutralised by aqueous alkali (e.g. NaOH) to form a carboxylate salt and water.',
          '**With Reactive Metals:** Reacts with metals like magnesium to form a salt and hydrogen gas (e.g. Mg + 2CH₃COOH → (CH₃COO)₂Mg + H₂).',
          '**With Carbonates / Hydrogencarbonates:** Forms salt, carbon dioxide gas, and water. Adding solid Na₂CO₃ produces immediate diagnostic fizzing (effervescence) of CO₂.',
          '**With Ammonia / Amines:** Donates a proton to the nitrogen lone pair, forming an ammonium salt (e.g. ammonium ethanoate) or alkylammonium salt (e.g. methylammonium ethanoate).',
          'Carboxylate salt formula convention: the metal/cation is written SECOND — e.g. sodium ethanoate = CH₃COONa (not NaCH₃COO).',
          'General formula of sodium carboxylate salts: RCOONa. These salts are ionic, water-soluble, and form the basis of buffer solutions (Topic 14).'
        ]
      }
    },
    {
      id: 'callout-carbonate-test',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Diagnostic Test for Carboxylic Acids',
        text: 'The reaction with sodium carbonate (Na₂CO₃) or sodium hydrogencarbonate (NaHCO₃) is the standard test for a carboxylic acid. It causes **effervescence (fizzing) of CO₂ gas**. Phenols are also acidic but are too weak to react with carbonates.'
      }
    },
    {
      id: 'equation-neutralisation',
      type: 'equation',
      data: {
        html: 'CH₃COOH + NaOH → CH₃COO<sup>−</sup>Na<sup>+</sup> + H₂O',
        caption: 'Ethanoic acid + sodium hydroxide → sodium ethanoate (carboxylate salt) + water.'
      }
    },

    // Reaction 3: Halogenation
    {
      id: 'h-halogenation',
      type: 'heading',
      data: { text: 'Reaction 3 — Halogenation to Acyl Chloride', level: 3 }
    },
    {
      id: 'list-halogenation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The –OH of the carboxyl group is replaced by –Cl to form an **acyl chloride** (R–COCl).',
          '**Reagent 1 (PCl₅):** Solid phosphorus(V) chloride reacts in the cold. Produces liquid $POCl_3$ and steamy acidic fumes of $HCl$ gas.',
          'The acyl chloride can be separated from $POCl_3$ by fractional distillation.',
          '**Reagent 2 (PCl₃):** Liquid phosphorus(III) chloride requires heat. Less dramatic than $PCl_5$ because no $HCl$ is produced. Produces $H_3PO_3$ (phosphoric(III) acid) as by-product.',
          '**Reagent 3 (SOCl₂):** Liquid sulphur dichloride oxide (thionyl chloride). Produces $SO_2$ and $HCl$ gases. Separation is simplified since by-products are gases, but fractional distillation is still needed to separate the acyl chloride from excess reagents.',
          'All reactions must be kept anhydrous because acyl chlorides vigorously react with water.',
          'Acyl chloride functional group: –COCl (carbonyl + Cl on same carbon).',
          'Acyl chloride naming: suffix –oyl chloride (e.g. propanoyl chloride, ethanoyl chloride).'
        ]
      }
    },
    {
      id: 'equation-halogenation',
      type: 'equation',
      data: {
        html: 'CH₃CH₂COOH + PCl₅ → CH₃CH₂COCl + POCl₃ + HCl↑',
        caption: 'Propanoic acid + PCl₅ (anhydrous) → propanoyl chloride + POCl₃ + HCl (misty fumes). Only the carboxylic acid and acyl chloride change between examples — POCl₃ and HCl are always formed.'
      }
    },
    {
      id: 'equation-halogenation-socl2',
      type: 'equation',
      data: {
        html: 'CH₃COOH + SOCl₂ → CH₃COCl + SO₂ + HCl',
        caption: 'Ethanoic acid + thionyl chloride → ethanoyl chloride + sulphur dioxide + hydrogen chloride. Easier to separate because the by-products are gases.'
      }
    },
    {
      id: 'callout-halogenation-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Acyl Chlorides — Key Points',
        text: '• Always use PCl₅ under anhydrous conditions\n• Always produce POCl₃ and HCl as co-products\n• Misty white fumes = HCl gas (chemical test confirmation)\n• Acyl chlorides are very reactive carboxylic acid derivatives — explored further in Topic 15d\n• The functional group –COCl has a C=O adjacent to a C–Cl bond'
      }
    },

    // Reaction 4: Esterification
    {
      id: 'h-esterification',
      type: 'heading',
      data: { text: 'Reaction 4 — Esterification', level: 3 }
    },
    {
      id: 'list-esterification',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Reagents: carboxylic acid + alcohol',
          'Catalyst: concentrated sulfuric acid (conc. H₂SO₄)',
          'Conditions: heat (reaction is slow and reversible — also called condensation as water is lost)',
          'Products: ester + water',
          'Mechanism feature: The –OH is lost from the carboxylic acid and the –H is lost from the alcohol oxygen. They join to form H₂O.',
          'Small Scale/Testing: Add everything to a test tube, warm in a water bath, and pour into a small beaker of water. The insoluble ester forms a thin layer on the surface while unreacted acid and alcohol dissolve below. The ester emits a sweet "artificial fruit" or "pear drops" smell.',
          'Large Scale (Small Esters): Gently heat and **distil off the ester** as soon as it forms. Since the ester cannot form H-bonds with itself, it has the lowest boiling point in the mixture. Removing it prevents the reverse reaction.',
          'Large Scale (Large Esters): For slowly-forming large esters, heat under reflux to establish equilibrium, then isolate via fractional distillation.',
          'Esters are used as solvents, flavourings, perfumes, and to make polyesters (plastics).'
        ]
      }
    },
    {
      id: 'equation-esterification',
      type: 'equation',
      data: {
        html: 'HCOOH + CH₃CH₂OH ⇌ HCOOCH₂CH₃ + H₂O',
        caption: 'Methanoic acid + ethanol → ethyl methanoate + water (reversible, conc. H₂SO₄ catalyst, heat). The bond broken in the acid releases –OH; the –H comes from the alcohol –OH group. Together they form water.'
      }
    },
    {
      id: 'callout-ester-naming',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ How to Name and Draw Esters',
        text: 'Ester name = [alcohol part] + [acid part]\n\n• Alcohol → drop "-ol", add "-yl" prefix → ethanol = ethyl–\n• Acid → drop "-ic acid", add "-ate" suffix → ethanoic acid = –ethanoate\n\n**Warning**: Esters are named the *opposite* way around from how their formula is written!\n\n**Formula:** In R–COO–R′, the left side (R–COO–) comes from the acid. The right side (–R′) comes from the alcohol.\n• Ethanol + ethanoic acid → ethyl ethanoate (CH₃COOCH₂CH₃)\n• Methanol + propanoic acid → methyl propanoate (CH₃CH₂COOCH₃)\n• Ethanol + methanoic acid → ethyl methanoate (HCOOCH₂CH₃)'
      }
    },

    // Reaction 5: Decarboxylation
    {
      id: 'h-decarboxylation',
      type: 'heading',
      data: { text: 'Reaction 5 — Decarboxylation (using Soda Lime)', level: 3 }
    },
    {
      id: 'list-decarboxylation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**What is decarboxylation?** The –COOH or –COONa group is removed and replaced with a hydrogen atom, effectively shortening the carbon chain by losing CO₂.',
          '**Reagent:** Solid soda lime. (Soda lime is a mixture of sodium hydroxide and calcium oxide; it comes as white granules and is easier/safer to handle than solid NaOH).',
          'In equations, soda lime is almost always written simply as sodium hydroxide (NaOH).',
          '**Conditions:** The solid sodium salt of the carboxylic acid is mixed with solid soda lime and **heated** strongly.',
          '**Product:** An alkane (or a benzene ring if using benzoic acid) + sodium carbonate (Na₂CO₃).'
        ]
      }
    },
    {
      id: 'equation-decarbox',
      type: 'equation',
      data: {
        html: 'CH<sub>3</sub>COONa(s) + NaOH(s) → CH<sub>4</sub>(g) + Na<sub>2</sub>CO<sub>3</sub>(s)',
        caption: 'Sodium ethanoate + soda lime (treated as NaOH) → methane + sodium carbonate. This is a step-down reaction.'
      }
    },
    {
      id: 'callout-benzoic-decarbox',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Decarboxylating Acids directly',
        text: 'This reaction can also be done directly with certain solid carboxylic acids instead of their salts. For example, solid benzoic acid (C₆H₅COOH) heated with soda lime will produce benzene (C₆H₆).'
      }
    },

    // Summary table of all reactions
    {
      id: 'h-summary-reactions',
      type: 'heading',
      data: { text: 'Summary: Key Reactions', level: 2 }
    },
    {
      id: 'table-four-reactions',
      type: 'comparisonTable',
      data: {
        headers: ['Reaction', 'Reagent', 'Conditions', 'Products'],
        rows: [
          ['① Reduction', 'LiAlH₄', 'Dry ether, anhydrous', 'Primary alcohol (R–CH₂OH) + H₂O'],
          ['② Neutralisation', 'NaOH(aq)', 'Aqueous, room temperature', 'Carboxylate salt (RCOONa) + H₂O'],
          ['③ Halogenation', 'PCl₅', 'Anhydrous', 'Acyl chloride (RCOCl) + POCl₃ + HCl↑ (misty fumes)'],
          ['④ Esterification', 'Alcohol + conc. H₂SO₄ (cat.)', 'Heat, equilibrium (⇌)', 'Ester (RCOOR′) + H₂O'],
          ['⑤ Decarboxylation', 'Soda lime (NaOH/CaO)', 'Heat with solid sodium salt', 'Alkane (R–H) + Na₂CO₃']
        ],
        caption: 'Key reactions of carboxylic acids — IAL Unit 4. No mechanisms required; know reagents, conditions, and products only.'
      }
    },

    // Checklist
    {
      id: 'checklist-carboxylic',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can name and draw displayed/skeletal formulae for the first four carboxylic acids and branched examples.', checked: false },
          { text: 'I can explain carboxylate ion resonance stabilisation and why carboxylic acids are stronger acids than alcohols.', checked: false },
          { text: 'I can name all three IMFs in carboxylic acids and rank homologous series by boiling point.', checked: false },
          { text: 'I can draw and label the two types of hydrogen bond between ethanoic acid and water.', checked: false },
          { text: 'I can describe preparation of carboxylic acids by oxidation (reflux, K₂Cr₂O₇/H₂SO₄) and nitrile hydrolysis (acidic = 1 step; alkaline = 2 steps).', checked: false },
          { text: 'I know reagents and conditions for all four key reactions: reduction, neutralisation, halogenation, esterification.', checked: false },
          { text: 'I know LiAlH₄ in dry ether reduces RCOOH → primary alcohol, and why you cannot stop at the aldehyde.', checked: false },
          { text: 'I know PCl₅ (anhydrous) gives acyl chloride + POCl₃ + HCl (misty fumes).', checked: false },
          { text: 'I can name esters using the alcohol-first, acid-second convention.', checked: false }
        ]
      }
    },

    // Summary
    {
      id: 'summary-carboxylic',
      type: 'summary',
      data: {
        text: 'Carboxylic acids (R–COOH) contain the carboxyl group (C=O + OH on same C). Weak acids (pKₐ ~3–5) — the carboxylate ion (RCOO⁻) is stabilised by charge delocalisation over both C–O bonds. Physical properties: highest BP of all series (H-bonding + PDPD + London forces); short-chain acids very soluble (form 2 H-bonds with water). Preparations: oxidation of 1° alcohol/aldehyde with K₂Cr₂O₇/H₂SO₄ under reflux; acidic nitrile hydrolysis (1 step) or alkaline (2 steps — carboxylate first, then add acid). Four key reactions: ① Reduction (LiAlH₄/dry ether → primary alcohol — cannot stop at aldehyde); ② Neutralisation (NaOH → RCOONa + H₂O); ③ Halogenation (PCl₅/anhydrous → acyl chloride + POCl₃ + HCl misty fumes); ④ Esterification (alcohol/conc. H₂SO₄/heat → ester + H₂O, reversible).'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Carboxylate Ion: Charge Delocalised Over Two C\u2013O Bonds",
        text: "RCOOH loses H\u207a \u2192 RCOO\u207b. The negative charge is NOT localised on one oxygen. It spreads equally (resonance) over both C\u2013O bonds (shown as dashed lines). This stabilisation makes carboxylic acids much stronger acids than alcohols (pKa ~4 vs ~16). Resonance delocalisation is the KEY."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "COOH Carbon ALWAYS C1 in Numbering",
        text: "In nomenclature, the carboxylic acid carbon is always position 1, even if there are double bonds or other functional groups. Students often miscount \u2014 this costs marks. 3-methylbutanoic acid has COOH at C1, methyl at C3 of the chain."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'svg-carboxylate',
        prompt: 'How does resonance stabilisation in the carboxylate ion make carboxylic acids stronger acids than alcohols?'
      },
      {
        id: 'cue-2',
        blockId: 'list-bp',
        prompt: 'State the three types of IMF present in carboxylic acids and explain why they have higher boiling points than alcohols of the same molar mass.'
      },
      {
        id: 'cue-3',
        blockId: 'table-nitrile',
        prompt: 'Compare acidic and alkaline hydrolysis of a nitrile: how many steps each, and what are the products at each step?'
      },
      {
        id: 'cue-4',
        blockId: 'callout-reduction-warn',
        prompt: 'What reagent and conditions reduce a carboxylic acid? Why can you not stop the reaction at the aldehyde stage?'
      },
      {
        id: 'cue-5',
        blockId: 'list-halogenation',
        prompt: 'Give the reagent, conditions, and ALL products when a carboxylic acid reacts with PCl₅. What observation confirms HCl is made?'
      },
      {
        id: 'cue-6',
        blockId: 'table-four-reactions',
        prompt: 'From memory, state the reagents and conditions for all four key reactions of carboxylic acids.'
      },
      {
        id: 'cue-7',
        blockId: 'list-acidity-comparison',
        prompt: 'Compare and explain the relative acidities of ethanol, phenol, and ethanoic acid in terms of anion stability.'
      },
      {
        id: 'cue-8',
        blockId: 'list-inductive-effects',
        prompt: 'Explain how alkyl groups and halogen atoms affect the acidity of a carboxylic acid.'
      }
    ],
    summaryText: 'Carboxylic acids (R–COOH) are weak acids — carboxylate ion (RCOO⁻) is resonance-stabilised (charge over both C–O bonds). Acidity order: Carboxylic Acids > Phenols > Alcohols. Electron-withdrawing halogens increase acid strength, alkyl groups decrease it. Highest BP of all series (3 IMFs); short-chain acids very soluble (2 H-bonds with water). Preparations: K₂Cr₂O₇/H₂SO₄ reflux from 1° alcohol/aldehyde; acidic nitrile hydrolysis (1 step) or alkaline (2 steps). Four reactions: ① LiAlH₄/dry ether → primary alcohol (cannot stop at aldehyde); ② NaOH → carboxylate salt + H₂O; ③ PCl₅/anhydrous → acyl chloride + POCl₃ + HCl (misty fumes); ④ alcohol/conc. H₂SO₄/heat → ester + H₂O (reversible).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Esterification in industry — polyesters and flavourings',
      detail: 'Esterification is used industrially to make polyesters (e.g. PET, used in plastic bottles and polyester clothing) and fruit/floral flavourings. Esters have pleasant odours (e.g. pentyl pentanoate gives a banana-like smell). The reversible nature of esterification is critical — industrial processes use excess alcohol or remove water to maximise yield.',
      year: '2023',
      source: 'Edexcel IAL Chemistry Unit 4 — Organic Chemistry',
      tags: ['esterification', 'carboxylic acids', 'industrial chemistry', 'polyesters']
    },
    {
      id: 'ev-2',
      title: 'Nitrile hydrolysis in carbon chain extension',
      detail: 'Hydrolysis of nitriles is a key method for increasing carbon chain length: treating a haloalkane with KCN (nucleophilic substitution adds 1 C as –CN), then hydrolyzing the nitrile gives a carboxylic acid with one more carbon than the original haloalkane. Used in pharmaceutical and agrochemical synthesis to build complex carbon frameworks.',
      year: '2023',
      source: 'Edexcel IAL Chemistry Unit 4 — Organic Synthesis',
      tags: ['nitrile hydrolysis', 'carbon chain elongation', 'synthesis', 'pharmaceutical']
    }
  ]
};
