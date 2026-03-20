export const note_chemistry_4_15_4 = {
  blocks: [
    {
      id: 'obj-carbonyl-rxn',
      type: 'objective',
      data: {
        text: 'Understand the preparation of carbonyls, nucleophilic addition reactions of aldehydes and ketones; reduction, cyanide addition, and tests to distinguish them.'
      }
    },
    {
      id: 'h-prep-carbonyls',
      type: 'heading',
      data: { text: 'Preparation of Aldehydes and Ketones', level: 2 }
    },
    {
      id: 'list-prep-carbonyls',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Aldehydes** are prepared by the partial oxidation of primary alcohols using acidified potassium dichromate(VI) (K₂Cr₂O₇ / H₂SO₄). The reaction mixture must be heated and the product distilled off immediately as it forms to prevent further oxidation into a carboxylic acid.',
          '**Ketones** are prepared by the oxidation of secondary alcohols using the same acidified dichromate(VI) reagent. The mixture is heated under reflux. Because ketones cannot be easily oxidised further, prolonged heating is safe.',
          'During the oxidation, the orange dichromate(VI) drop turns into a green solution containing Cr³⁺ ions as they are reduced.'
        ]
      }
    },
    {
      id: 'h-nucleophilic-addition',
      type: 'heading',
      data: { text: 'Nucleophilic Addition to Carbonyls', level: 2 }
    },
    {
      id: 'p-addition-mechanism',
      type: 'paragraph',
      data: {
        text: 'The carbonyl carbon is electrophilic (Cδ⁺) due to the polar C=O bond. Nucleophiles are attracted to this positive centre. A nucleophile attacks the carbon from above or below the C=O plane, forming a new C–Nu bond. Simultaneously, the π electrons of the C=O bond move onto the oxygen, creating a carbocation intermediate. This intermediate is then protonated at the oxygen (or initially protonated in some reactions), forming a C–OH group and completing the addition. The general mechanism is: (1) nucleophile attacks C, (2) carbocation forms, (3) protonation at O → product.'
      }
    },
    {
      id: 'p-addition-stereo',
      type: 'paragraph',
      data: {
        text: 'Nucleophilic addition to a carbonyl produces a new chiral centre if the carbonyl carbon is not already chiral and a new sp³ carbon is created. However, because the attack occurs from either face of the planar C=O (above or below), nucleophilic addition typically produces a racemic mixture (if no asymmetric catalyst is used). This is an important difference from SN2 backside attack, which gives inversion of a pre-existing chiral centre.'
      }
    },
    {
      id: 'h-reduction-nabh4',
      type: 'heading',
      data: { text: 'Reduction of Carbonyls', level: 2 }
    },
    {
      id: 'p-nabh4-reaction',
      type: 'paragraph',
      data: {
        text: 'Aldehydes are reduced to primary alcohols, and ketones are reduced to secondary alcohols. The most common reducing agent used in the laboratory for this is sodium borohydride / sodium tetrahydridoborate(III) (NaBH₄). NaBH₄ provides the hydride ion (H⁻) which acts as a strong nucleophile, attacking the electrophilic carbonyl carbon. The reaction is rapid and typically performed by adding solid NaBH₄ to the carbonyl compound dissolved in an alcohol (such as methanol or ethanol) at room temperature or heated under reflux.'
      }
    },
    {
      id: 'equation-nabh4',
      type: 'equation',
      data: {
        html: 'R–CHO + 2[H] → R–CH<sub>2</sub>OH  (aldehyde → primary alcohol)<br/>R–CO–R′ + 2[H] → R–CH(OH)–R′  (ketone → secondary alcohol)',
        caption: 'Reduction equations using [H] to represent the hydrogen entering from the reducing agent.'
      }
    },
    {
      id: 'callout-reduction-complex',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Stage 2: Releasing the alcohol',
        text: 'The initial reaction of the carbonyl compound with NaBH₄ forms a complex intermediate species. In order to release the free alcohol product from this complex, a second stage is required where water (or occasionally dilute acid/alkali depending on experimental variation) is added and the mixture is boiled.'
      }
    },
    {
      id: 'p-nabh4-advantage',
      type: 'paragraph',
      data: {
        text: 'An alternative reducing agent is lithium aluminium hydride (LiAlH₄). However, LiAlH₄ is far more reactive and reacts violently with both water and alcohols. Thus, reduction with LiAlH₄ must take place in carefully dried ether (e.g. ethoxyethane). After the complex forms, cautious addition of water/acid is required to decompose any excess LiAlH₄ safely before isolating the product. Generally, NaBH₄ is preferred for aldehydes and ketones because it is much safer and easier to handle, whereas LiAlH₄ is reserved for harder-to-reduce groups like carboxylic acids or esters.'
      }
    },
    {
      id: 'svg-nabh4-mechanism',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 650 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="14">
  <defs>
    <marker id="ah-bh4" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker>
    <marker id="sa-bh4" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#1e40af"/></marker>
  </defs>
  <text x="325" y="17" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="14">Reduction of Ethanal by NaBH&#8324; &#8212; Simplified 2-Step Mechanism (A-level)</text>
  <rect x="8" y="26" width="634" height="130" rx="5" fill="#1c3a64" stroke="#bfdbfe" stroke-width="1.2"/>
  <text x="18" y="43" text-anchor="start" fill="#1e40af" font-weight="bold" font-size="12">Step 1: H&#8315; (hydride ion, from BH&#8324;&#8315;) attacks the &#948;&#8314; carbon of the C=O bond</text>
  <circle cx="25" cy="91" r="2.5" fill="#111827"/>
  <circle cx="25" cy="98" r="2.5" fill="#111827"/>
  <text x="54" y="97" text-anchor="middle" fill="#111827" font-size="16">:H&#8315;</text>
  <text x="54" y="113" text-anchor="middle" fill="#6b7280" font-size="11">nucleophile</text>
  <text x="94" y="97" text-anchor="middle" fill="#374151" font-size="18">+</text>
  <text x="145" y="97" text-anchor="start" fill="#111827" font-size="16">CH&#8323;</text>
  <text x="173" y="97" text-anchor="start" fill="#111827" font-size="16">&#8211;CH</text>
  <text x="180" y="80" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold">&#948;&#8314;</text>
  <text x="204" y="97" text-anchor="start" fill="#111827" font-size="16">=O</text>
  <text x="218" y="80" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold">&#948;&#8315;</text>
  <text x="190" y="114" text-anchor="middle" fill="#6b7280" font-size="11">ethanal</text>
  <path d="M 38 91 Q 98 68 152 90" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-bh4)"/>
  <text x="258" y="80" text-anchor="middle" fill="#6b7280" font-size="11">Step 1</text>
  <path d="M 244 93 L 290 93" fill="none" stroke="#1e40af" stroke-width="2" marker-end="url(#sa-bh4)"/>
  <text x="396" y="92" text-anchor="middle" fill="#111827" font-size="15">CH&#8323;&#8211;CH(H)&#8211;O&#8315;</text>
  <rect x="306" y="72" width="176" height="36" rx="4" fill="none" stroke="#ef4444" stroke-dasharray="4,3" stroke-width="1.2"/>
  <text x="484" y="71" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="12">[&#8722;]</text>
  <text x="394" y="122" text-anchor="middle" fill="#6b7280" font-size="11">negatively charged tetrahedral intermediate</text>
  <rect x="8" y="165" width="634" height="148" rx="5" fill="#0a2e1a" stroke="#bbf7d0" stroke-width="1.2"/>
  <text x="18" y="182" text-anchor="start" fill="#1e40af" font-weight="bold" font-size="12">Step 2a (add acid): O&#8315; picks up H&#8314; from H&#8314;(aq) &#8212; OR &#8212; Step 2b (add water): O&#8315; takes H&#8314; from H&#8322;O</text>
  <rect x="14" y="192" width="300" height="112" rx="4" fill="#1e293b" stroke="#bbf7d0" stroke-width="1"/>
  <text x="164" y="209" text-anchor="middle" fill="#065f46" font-weight="600" font-size="12">Step 2a &#8212; acid workup</text>
  <text x="100" y="244" text-anchor="middle" fill="#111827" font-size="14">CH&#8323;&#8211;CH(H)&#8211;O&#8315;</text>
  <text x="190" y="244" text-anchor="middle" fill="#374151" font-size="16">+</text>
  <text x="232" y="244" text-anchor="middle" fill="#111827" font-size="14">H&#8314;(aq)</text>
  <path d="M 246 240 L 286 260" fill="none" stroke="#1e40af" stroke-width="2" marker-end="url(#sa-bh4)"/>
  <text x="164" y="273" text-anchor="middle" fill="#111827" font-size="14">CH&#8323;CH&#8322;OH</text>
  <text x="164" y="291" text-anchor="middle" fill="#6b7280" font-size="11">ethanol (primary alcohol)</text>
  <rect x="330" y="192" width="306" height="112" rx="4" fill="#1e293b" stroke="#bbf7d0" stroke-width="1"/>
  <text x="483" y="209" text-anchor="middle" fill="#065f46" font-weight="600" font-size="12">Step 2b &#8212; water workup</text>
  <text x="405" y="244" text-anchor="middle" fill="#111827" font-size="14">CH&#8323;&#8211;CH(H)&#8211;O&#8315;</text>
  <text x="497" y="244" text-anchor="middle" fill="#374151" font-size="16">+</text>
  <text x="540" y="244" text-anchor="middle" fill="#111827" font-size="14">H&#8322;O</text>
  <path d="M 551 240 L 591 260" fill="none" stroke="#1e40af" stroke-width="2" marker-end="url(#sa-bh4)"/>
  <text x="483" y="273" text-anchor="middle" fill="#111827" font-size="14">CH&#8323;CH&#8322;OH + OH&#8315;</text>
  <text x="483" y="291" text-anchor="middle" fill="#6b7280" font-size="11">ethanol + hydroxide ion</text>
</svg>`,
        caption: 'Simplified A-level mechanism (H⁻ represents BH4⁻). Step 1: hydride ion lone pair attacks δ⁺ carbon → π electrons shift to O → negatively charged tetrahedral intermediate. Step 2: O⁻ picks up H⁺ from the acidic workup solution (H⁺(aq)) or from water. Both routes give the same primary alcohol product. The same mechanism applies to ketones (→ secondary alcohol).'
      },
      terms: ['Nucleophilic addition', 'Hydride ion', 'H⁻', 'NaBH4', 'BH4⁻', 'Intermediate', 'Aldehyde', 'Ketone', 'Primary alcohol', 'Secondary alcohol']
    },
    {
      id: 'callout-nabh4-simplification',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'A-Level Simplification: H⁻ is NOT the Real Nucleophile',
        text: 'The mechanism shown above uses <strong>H⁻ (hydride ion)</strong> as the nucleophile. This is a deliberate A-level simplification agreed by UK exam boards (notably AQA).<br/><br/><strong>The real situation:</strong> The actual nucleophile is the <strong>BH4⁻ ion</strong>. The full mechanism involves a hydride transfer from boron to carbonyl carbon, forming a series of boron-containing intermediates. These involve relatively complicated boron chemistry that is beyond A-level syllabus scope.<br/><br/><strong>Exam rule:</strong> Write H⁻ (not BH4⁻) in the simplified mechanism; draw the lone pair on H⁻ above the symbol. This is the expected, mark-scoring version. Never write H⁻ without its lone pair — the lone pair is essential to show nucleophilic attack.<br/><br/><em>Chemguide: "The BH4⁻ ion is essentially a source of hydride ions, H⁻. The simplification used is to write H⁻ instead of BH4⁻."</em>'
      },
      terms: ['H⁻', 'BH4⁻', 'NaBH4', 'A-level simplification', 'Nucleophile', 'Lone pair']
    },
    {
      id: 'h-hcn-addition',
      type: 'heading',
      data: { text: 'Addition of Hydrogen Cyanide (HCN)', level: 2 }
    },
    {
      id: 'p-hcn-intro',
      type: 'paragraph',
      data: {
        text: 'Hydrogen cyanide (HCN) adds across the carbon-oxygen double bond in aldehydes and ketones to produce hydroxynitriles. Note that counting the carbon chain for nomenclature must include the carbon belonging to the -CN group (which is always carbon-1). For example, ethanal yields 2-hydroxypropanenitrile.'
      }
    },
    {
      id: 'equation-hcn',
      type: 'equation',
      data: {
        html: 'R–CHO + HCN → R–CH(OH)CN  (aldehyde → hydroxynitrile)<br/>R–CO–R′ + HCN → R–C(OH)(CN)–R′  (ketone → hydroxynitrile)',
        caption: 'HCN addition to carbonyls produces hydroxynitriles. CN⁻ is the initial nucleophile.'
      }
    },
    {
      id: 'p-hcn-stereo',
      type: 'paragraph',
      data: {
        text: 'HCN addition creates a chiral centre at the original carbonyl carbon (if not already symmetrically substituted). Since the nucleophile can attack from either face of the planar C=O, the product is an optically inactive racemic mixture. This is industrially important for synthesising alpha-hydroxy acids.'
      }
    },
    {
      id: 'callout-hcn-conditions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Safety and Reaction Conditions',
        text: 'HCN is an extremely poisonous gas. Instead of using raw HCN, the reaction is performed by mixing the carbonyl compound with an aqueous solution of sodium or potassium cyanide (KCN/NaCN), and adding dilute sulphuric acid to generate HCN in situ. The pH is carefully adjusted to about 4–5 to give the fastest reaction; this ensures enough free CN⁻ ions remain act as the nucleophile while still generating sufficient HCN to protonate the intermediate.'
      }
    },
    {
      id: 'svg-hcn-mechanism',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 650 312" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="14">
  <defs>
    <marker id="ah-hcn" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#ef4444"/></marker>
    <marker id="sa-hcn" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#1e40af"/></marker>
  </defs>
  <text x="325" y="17" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="14">Nucleophilic Addition of HCN to Propanone &#8212; 2-Step Mechanism</text>
  <rect x="8" y="25" width="634" height="130" rx="5" fill="#1c3a64" stroke="#bfdbfe" stroke-width="1.2"/>
  <text x="18" y="42" text-anchor="start" fill="#1e40af" font-weight="bold" font-size="12">Step 1: CN&#8315; (nucleophile) attacks the &#948;&#8314; carbon of the C=O bond</text>
  <circle cx="24" cy="87" r="2.5" fill="#111827"/>
  <circle cx="24" cy="94" r="2.5" fill="#111827"/>
  <text x="64" y="96" text-anchor="middle" fill="#111827" font-size="16">:CN&#8315;</text>
  <text x="64" y="112" text-anchor="middle" fill="#6b7280" font-size="11">nucleophile</text>
  <text x="108" y="96" text-anchor="middle" fill="#374151" font-size="18">+</text>
  <text x="150" y="96" text-anchor="start" fill="#111827" font-size="16">(CH&#8323;)&#8322;C</text>
  <text x="196" y="79" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold">&#948;&#8314;</text>
  <text x="210" y="96" text-anchor="start" fill="#111827" font-size="16">=O</text>
  <text x="224" y="79" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold">&#948;&#8315;</text>
  <text x="190" y="113" text-anchor="middle" fill="#6b7280" font-size="11">propanone</text>
  <path d="M 38 87 Q 108 64 145 88" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-hcn)"/>
  <text x="258" y="79" text-anchor="middle" fill="#6b7280" font-size="11">Step 1</text>
  <path d="M 244 92 L 290 92" fill="none" stroke="#1e40af" stroke-width="2" marker-end="url(#sa-hcn)"/>
  <text x="396" y="91" text-anchor="middle" fill="#111827" font-size="15">(CH&#8323;)&#8322;C(CN)&#8211;O&#8315;</text>
  <rect x="304" y="71" width="174" height="36" rx="4" fill="none" stroke="#ef4444" stroke-dasharray="4,3" stroke-width="1.2"/>
  <text x="480" y="70" text-anchor="start" fill="#ef4444" font-weight="bold" font-size="12">[&#8722;]</text>
  <text x="390" y="121" text-anchor="middle" fill="#6b7280" font-size="11">negatively charged tetrahedral intermediate</text>
  <rect x="8" y="165" width="634" height="140" rx="5" fill="#0a2e1a" stroke="#bbf7d0" stroke-width="1.2"/>
  <text x="18" y="182" text-anchor="start" fill="#1e40af" font-weight="bold" font-size="12">Step 2: O&#8315; picks up H&#8314; from HCN (H&#8322;O or H&#8323;O&#8314; also work &#8212; one equation is enough)</text>
  <text x="100" y="228" text-anchor="middle" fill="#111827" font-size="15">(CH&#8323;)&#8322;C(CN)&#8211;O&#8315;</text>
  <text x="196" y="228" text-anchor="middle" fill="#374151" font-size="18">+</text>
  <text x="242" y="228" text-anchor="middle" fill="#111827" font-size="15">H&#8211;CN</text>
  <text x="100" y="245" text-anchor="middle" fill="#6b7280" font-size="11">intermediate</text>
  <text x="242" y="245" text-anchor="middle" fill="#6b7280" font-size="11">proton donor</text>
  <path d="M 174 225 Q 202 209 222 225" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ah-hcn)"/>
  <text x="278" y="217" text-anchor="middle" fill="#6b7280" font-size="11">Step 2</text>
  <path d="M 264 228 L 308 228" fill="none" stroke="#1e40af" stroke-width="2" marker-end="url(#sa-hcn)"/>
  <text x="432" y="216" text-anchor="middle" fill="#111827" font-size="15">(CH&#8323;)&#8322;C(CN)&#8211;OH</text>
  <text x="432" y="232" text-anchor="middle" fill="#6b7280" font-size="11">2-hydroxy-2-methylpropanenitrile</text>
  <text x="432" y="252" text-anchor="middle" fill="#374151" font-size="18">+</text>
  <text x="432" y="272" text-anchor="middle" fill="#111827" font-size="15">CN&#8315;</text>
  <text x="432" y="288" text-anchor="middle" fill="#6b7280" font-size="11">CN&#8315; regenerated &#8212; acts as catalyst</text>
  <text x="432" y="303" text-anchor="middle" fill="#6b7280" font-size="11">(cycles back to Step 1)</text>
</svg>`,
        caption: 'Step 1: CN⁻ lone pair attacks the δ⁺ carbon of the C=O bond — π electrons shift onto O, giving a negatively charged tetrahedral intermediate. Step 2: O⁻ picks up H⁺ from HCN (or water/H₃O⁺), releasing CN⁻ which is regenerated and cycles back as catalyst. The nucleophile is CN⁻, not HCN itself.'
      },
      terms: ['Nucleophilic addition', 'CN⁻', 'Intermediate anion', 'HCN', 'Hydroxynitrile', 'Catalyst', 'Lone pair']
    },
    {
      id: 'callout-hcn-racemic-rule',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'When Does HCN Addition Give a Racemic Mixture?',
        text: 'HCN addition creates a <strong>new chiral centre</strong> at the original C=O carbon when four <em>different</em> groups become attached. Since C=O is <strong>planar</strong>, CN⁻ attacks from either face with equal probability → equal amounts of both enantiomers → <strong>racemic mixture</strong>.<br/><br/><strong>Rule: only a racemic mixture when all 4 groups on the central carbon are different.</strong><br/><br/>✓ <strong>All aldehydes → racemic</strong> — product always has H, OH, CN, and R (all four different groups)<br/>&nbsp;&nbsp;e.g. ethanal → 2-hydroxypropanenitrile: central C has CH₃, H, OH, CN<br/>✓ <strong>Unsymmetrical ketones → racemic</strong> — different R groups each side + OH + CN = 4 different groups<br/>✗ <strong>Symmetrical ketones → NOT chiral</strong> — e.g. propanone: both groups are –CH₃; central C has CH₃, CH₃, OH, CN — two groups identical → no chiral centre → single (optically inactive) product<br/><br/><em>Chemguide: "What matters is that the product molecule must have four different groups attached to the carbon which was originally part of the carbon-oxygen double bond."</em>'
      },
      terms: ['Racemic mixture', 'Chiral centre', 'Optical isomerism', 'Enantiomers', 'Planar C=O', 'Face attack']
    },
    {
      id: 'h-nahso3-addition',
      type: 'heading',
      data: { text: 'Addition of Sodium Hydrogensulphite (NaHSO₃)', level: 2 }
    },
    {
      id: 'p-nahso3-reaction',
      type: 'paragraph',
      data: {
        text: 'Aldehydes (and methyl ketones without bulky groups) react with a saturated aqueous solution of sodium hydrogensulphite (NaHSO₃) to form a crystalline white precipitate known as a "bisulphite addition compound".'
      }
    },
    {
      id: 'callout-nahso3-purification',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Purification Application',
        text: 'Since this addition product is a solid crystal, it can be filtered off and washed to remove impurities. The original carbonyl compound can then be easily regenerated by treating the crystals with dilute acid or dilute alkali. This makes the reaction highly useful for purifying aldehydes.'
      }
    },
    {
      id: 'h-tests-distinguish',
      type: 'heading',
      data: { text: 'Tests to Distinguish Aldehydes from Ketones', level: 2 }
    },
    {
      id: 'p-tollens-intro',
      type: 'paragraph',
      data: {
        text: 'Tollens reagent (ammoniacal silver nitrate solution) is used to distinguish aldehydes from ketones. Aldehydes are oxidised by Tollens reagent to carboxylic acids (or their anions), while ketones are not oxidised under these mild conditions. The silver ions are reduced to metallic silver, which deposits on the glass wall as a mirror or grey precipitate — the positive result. Ketones give no colour change.'
      }
    },
    {
      id: 'table-tests',
      type: 'comparisonTable',
      data: {
        headers: ['Reagent', 'Reaction Type', 'Product (Aldehyde)', 'Observation (Aldehyde)', 'Observation (Ketone)'],
        rows: [
          ['Tollens\' (ammoniacal AgNO₃)', 'Oxidation', 'RCOO⁻ + Ag metal', 'Silver mirror or grey ppt', 'No change (colourless)'],
          ['Fehling\'s (Cu²⁺ complex)', 'Oxidation', 'RCOO⁻ + Cu⁺ oxide', 'Brick-red ppt (Cu₂O)', 'No change (blue)'],
          ['NaBH₄', 'Reduction', 'RCH₂OH', 'Hydrogen gas (bubble) + alcohol', 'Hydrogen gas (bubble) + alcohol'],
          ['Iodine (I₂ + NaOH)', 'Oxidation', 'Carboxylate + CHI₃', 'Yellow ppt (CHI₃) if methyl ketone', 'Yellow ppt if CH₃–CO– group present'],
          ['2,4-DNP', 'Condensation', 'Hydrazone', 'Yellow/orange ppt', 'Yellow/orange ppt']
        ],
        caption: 'Chemical tests for carbonyl compounds. Tollens\' and Fehling\'s distinguish aldehydes from ketones. 2,4-DNP detects any carbonyl (aldehyde or ketone).'
      }
    },
    {
      id: 'p-tollens-mechanism',
      type: 'paragraph',
      data: {
        text: 'Tollens mechanism: The aldehyde is oxidised: R–CHO + [Ag(NH₃)₂]⁺ → R–COO⁻ + Ag↓ + other products. The silver ion (Ag⁺) is reduced to metallic silver (Ag), which appears as a shiny deposit (the "silver mirror"). This reaction is thermodynamically very favourable, making it rapid and reliable. Fehling reagent operates similarly but uses Cu²⁺ ions instead of Ag⁺; the copper(I) oxide (Cu₂O) product is a brick-red precipitate.'
      }
    },
    {
      id: 'p-fehling-procedure',
      type: 'paragraph',
      data: {
        text: 'Fehling\'s test: Mix Fehling\'s A (CuSO₄ solution) with Fehling\'s B (sodium potassium tartrate in NaOH). Heat with the aldehyde. The Cu²⁺ ions are reduced to Cu⁺, forming Cu₂O (brick-red precipitate). Ketones do not react under these conditions; the solution remains blue. The tartrate acts as a complexing agent to keep Cu²⁺ in solution initially, and the heating provides energy. This test is slightly more sensitive than Tollens\' in some contexts.'
      }
    },
    {
      id: 'callout-test-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Choosing Tests',
        text: 'If asked to distinguish an aldehyde from a ketone, use Tollens\' or Fehling\'s — aldehydes give a positive result (silver mirror or red ppt), ketones do not. If you need to detect any carbonyl (aldehyde or ketone), use 2,4-DNP (yellow/orange precipitate with both). NaBH₄ reduces both aldehydes and ketones, so it is not a distinguishing test. HCN adds to both, also not distinguishing.'
      }
    },
    {
      id: 'checklist-carbonyl-rxn',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand nucleophilic addition to carbonyls (mechanism and stereochemistry).', checked: false },
          { text: 'I can write equations for NaBH₄ reduction of aldehydes and ketones.', checked: false },
          { text: 'I can write equations for HCN addition (hydroxynitrile formation).', checked: false },
          { text: 'I know Tollens\' and Fehling\'s tests distinguish aldehydes from ketones.', checked: false }
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
        text: 'Understand: Nucleophilic addition involves attack of a nucleophile (e.g. CN⁻, H⁻) on the δ+ carbon of C=O, followed by protonation. This converts C=O to C−OH.\n\nApply: Draw the mechanism for the reaction of propanal with NaCN/HCl. Name the product.\n\nAnalyze: Why does HCN addition to an unsymmetrical ketone create a new chiral centre? What is the stereochemical outcome?\n\nEvaluate: Compare Tollens\' reagent and Fehling\'s solution as tests for aldehydes. Which is more reliable and why?'
      },
      terms: []
    },
    {
      id: 'summary-carbonyl-rxn',
      type: 'summary',
      data: {
        text: 'Aldehydes and ketones undergo nucleophilic addition at the electrophilic C=O carbon. NaBH₄ reduces aldehydes → primary alcohols, ketones → secondary alcohols (mild conditions, aqueous solvent OK). HCN adds to form hydroxynitriles (both aldehydes and ketones; creates new chiral centres, racemic product); HCN is generated in situ from KCN and dilute acid at pH 4-5. NaHSO₃ forms crystalline addition compounds useful for purification. Tollens\' and Fehling\'s tests oxidise and detect aldehydes only (not ketones), giving characteristic colour changes: silver mirror (Tollens\') or brick-red ppt (Fehling\'s). These tests exploit the greater reactivity of aldehydes due to lower steric hindrance.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-prep',
        blockId: 'list-prep-carbonyls',
        prompt: 'Outline the reagents and conditions required to prepare aldehydes and ketones from alcohols.'
      },
      {
        id: 'cue-1',
        blockId: 'p-addition-mechanism',
        prompt: 'Describe the mechanism of nucleophilic addition to a carbonyl group.'
      },
      {
        id: 'cue-2',
        blockId: 'p-nabh4-reaction',
        prompt: 'Compare the reaction conditions of reducing a carbonyl with NaBH₄ versus LiAlH₄.'
      },
      {
        id: 'cue-nabh4-mechanism',
        blockId: 'svg-nabh4-mechanism',
        prompt: 'Explain the 2-step simplified mechanism for NaBH4 reduction of ethanal. Why is H⁻ used in the A-level mechanism instead of BH4⁻? What must you always show on H⁻? What are the two ways to complete the reaction in Step 2? What do aldehyde and ketone give as products?'
      },
      {
        id: 'cue-24dnph-test',
        blockId: 'list-identifying-carbonyls',
        prompt: 'Describe how 2,4-DNPH is used not just to test for carbonyls, but to identify the specific aldehyde or ketone present.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-hcn-conditions',
        prompt: 'How is HCN generation controlled in the laboratory for aldehyde/ketone addition, and why is the pH maintained at 4-5?'
      },
      {
        id: 'cue-hcn-mechanism',
        blockId: 'svg-hcn-mechanism',
        prompt: 'Explain the 2-step nucleophilic addition mechanism for HCN adding to propanone. What species is the actual nucleophile (CN⁻ or HCN)? Describe each step with electron flow. Why is CN⁻ considered a catalyst? Which compounds give a racemic mixture and which do not — and why?'
      },
      {
        id: 'cue-nahso3',
        blockId: 'callout-nahso3-purification',
        prompt: 'Describe how sodium hydrogensulphite (NaHSO₃) is used to purify aldehydes.'
      },
      {
        id: 'cue-oxidation-eqs',
        blockId: 'h-oxidation-equations',
        prompt: 'Write equations for the oxidation of an aldehyde using Tollens\' reagent, Fehling\'s solution, and acidified dichromate(VI).'
      },
      {
        id: 'cue-4',
        blockId: 'p-tollens-mechanism',
        prompt: 'Explain how Tollens\' test works and why it distinguishes aldehydes from ketones.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-test-tip',
        prompt: 'Which chemical test would you use to distinguish an aldehyde from a ketone, and what colour change indicates the aldehyde?'
      }
    ],
    summaryText: 'Preparation: primary alcohols distilled with acidified K₂Cr₂O₇ to form aldehydes; secondary alcohols refluxed to form ketones. Nucleophilic addition: nucleophile attacks Cδ⁺ of C=O, π electrons → O⁻, then protonation → C–OH product. NaBH₄ reduction (2-step, A-level simplified): Step 1 — H⁻ (lone pair must be shown; represents BH4⁻, the real nucleophile) attacks δ⁺ C of C=O → negatively charged tetrahedral intermediate (O⁻); Step 2 — O⁻ picks up H⁺ from H⁺(aq) [acid workup] or H₂O [water workup] → alcohol. Aldehyde → primary alcohol (e.g. ethanal → ethanol); ketone → secondary alcohol (e.g. propanone → propan-2-ol). H⁻ simplification is accepted at A-level (real nucleophile is BH4⁻). HCN (both aldehydes + ketones → hydroxynitriles): Step 1 — CN⁻ lone pair attacks δ⁺ C of C=O → negatively charged tetrahedral intermediate (O⁻); Step 2 — O⁻ picks up H⁺ from HCN → hydroxynitrile + CN⁻ (catalyst regenerated). In practice: KCN/NaCN + dilute H₂SO₄, pH 4-5 (raw HCN too dangerous). Naming: CN carbon = C-1 (ethanal → 2-hydroxypropanenitrile). RACEMIC MIXTURE: all aldehydes → racemic; unsymmetrical ketones → racemic; SYMMETRICAL ketones (e.g. propanone — both groups CH₃) → NOT chiral → single product. Tollens\' test: aldehydes oxidised → silver mirror (Ag⁺ → Ag metal); ketones no change. Fehling\'s test: aldehydes → brick-red Cu₂O ppt; ketones no change. Aldehydes more reactive due to steric accessibility.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Silver mirror reaction in art restoration',
      detail: 'The Tollens\' test (silver mirror reaction) is not only a laboratory test but also used in mirror manufacturing and art restoration. The same chemistry produces a reflective silver coating on glass. This application demonstrates how fundamental organic chemistry principles are employed in practical technology, from analytical detection to industrial processes.',
      year: '2023',
      source: 'Applied Organic Chemistry',
      tags: ['carbonyl reactions', 'oxidation', 'tests', 'applications']
    },
    {
      id: 'ev-2',
      title: 'Nucleophilic addition of HCN — mechanism, conditions, racemic mixture, naming rule',
      detail: 'HCN adds across C=O of aldehydes and ketones → hydroxynitriles. 2-step mechanism: Step 1 — CN⁻ (nucleophile; lone pair on C) attacks δ⁺ C of C=O → π electrons shift to O → negatively charged tetrahedral intermediate (O carries −ve charge). Step 2 — O⁻ picks up H⁺ from HCN (or H₂O/H₃O⁺) → hydroxynitrile + CN⁻ regenerated (catalyst). NOT done with raw HCN (extremely toxic gas) — use KCN or NaCN + dilute H₂SO₄; pH 4-5 for fastest reaction. Naming: CN carbon is C-1 of chain (ethanal→2-hydroxypropanenitrile; propanone→2-hydroxy-2-methylpropanenitrile). Racemic mixture: C=O is planar → CN⁻ attacks from above or below equally → equal enantiomers → racemic. Condition: 4 different groups on central C. All aldehydes → racemic. Unsymmetrical ketones → racemic. Symmetrical ketones (e.g. propanone, both groups CH₃) → NOT chiral → single product.',
      year: '2024',
      source: 'chemguide.co.uk/mechanisms/nucadd/hcn.html',
      tags: ['nucleophilic addition', 'HCN', 'hydroxynitrile', 'CN⁻', 'mechanism', 'racemic mixture', 'optical isomerism', 'chiral centre', 'KCN', 'pH 4-5', '2-hydroxypropanenitrile', 'propanone', 'ethanal', 'catalyst']
    },
    {
      id: 'ev-3',
      title: 'Reduction of aldehydes/ketones by NaBH4 — simplified 2-step mechanism, H⁻ simplification, conditions',
      detail: 'NaBH4 (sodium tetrahydridoborate, formula NaBH4) reduces aldehydes → primary alcohols; ketones → secondary alcohols. BH4⁻ ion is the reducing agent. A-level simplified mechanism: treat BH4⁻ as source of H⁻ (hydride ion) to avoid complex boron intermediates. Step 1: H⁻ lone pair attacks δ⁺ C of C=O → π electrons shift to O → negatively charged tetrahedral intermediate (O⁻). Step 2a (acid workup): O⁻ picks up H⁺ from H⁺(aq) → product alcohol. Step 2b (water workup): O⁻ takes H⁺ from H2O → product alcohol + OH⁻. Reaction conditions: (i) alkaline aqueous solution (NaOH added) → add dilute acid (e.g. H2SO4) as workup; or (ii) alcohol solvent (methanol/ethanol/propan-2-ol) → add water and boil as workup. Must show lone pair on H⁻ in mechanism. H⁻ is the simplified A-level nucleophile (real nucleophile is BH4⁻). Equations use [H] shorthand for 2[H] added to C=O. Aldehyde example: ethanal + 2[H] → ethanol. Ketone example: propanone + 2[H] → propan-2-ol.',
      year: '2024',
      source: 'chemguide.co.uk/mechanisms/nucadd/reduce.html',
      tags: ['NaBH4', 'reduction', 'hydride', 'H⁻', 'BH4⁻', 'nucleophilic addition', 'mechanism', 'ethanal', 'ethanol', 'propanone', 'propan-2-ol', 'primary alcohol', 'secondary alcohol', 'A-level simplification', 'acid workup', 'water workup', 'lone pair']
    }
  ]
};
