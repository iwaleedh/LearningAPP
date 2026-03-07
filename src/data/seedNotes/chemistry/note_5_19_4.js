export const note_chemistry_5_19_4 = {
  blocks: [
    {
      id: 'obj-amide-reactions',
      type: 'objective',
      data: {
        text: 'Explain amide formation from acyl chlorides and carboxylic acids; describe the full mechanism (N lone pair attacks δ+ C; HCl formed + reacts with excess NH₃ → NH₄Cl); describe amide hydrolysis; understand condensation polymerisation to form polyamides (nylon 6,6 and Kevlar); distinguish addition polymers with amide groups (poly(propenamide)) and two-stage production of poly(ethenol)/PVA'
      }
    },
    {
      id: 'h-amide-formation-acyl',
      type: 'heading',
      data: { text: 'Amide Formation from Acyl Chlorides', level: 2 }
    },
    {
      id: 'p-acyl-1',
      type: 'paragraph',
      data: {
        text: 'The most direct and efficient way to form an amide is to react an acyl chloride (R−COCl) with ammonia or an amine (R′NH₂). The reaction is fast and requires no catalyst. The acyl chloride is highly electrophilic due to the polar C=O bond and the electron-withdrawing effect of the chlorine atom. Ammonia or the amine acts as a nucleophile, attacking the carbonyl carbon.'
      }
    },
    {
      id: 'eq-acyl-amide',
      type: 'equation',
      data: {
        html: 'R−COCl + 2NH₃ → R−CO−NH₂ + NH₄Cl (primary amide, with excess ammonia)<br />R−COCl + NH₃ → R−CO−NH₂ + HCl (with stoichiometric ammonia)<br />R−COCl + R′NH₂ → R−CO−NHR′ + HCl (secondary amide)<br /><br />Note: the HCl released reacts with excess NH₃ → NH₄Cl (ammonium chloride salt)'
      }
    },
    {
      id: 'p-acyl-2',
      type: 'paragraph',
      data: {
        text: 'The mechanism is nucleophilic acyl substitution. Both O and Cl are electronegative — they both pull electrons away from the carbonyl carbon, making it δ+. The lone pair on the N of ammonia attacks this δ+ carbon. The Cl then leaves and bonds to the H from NH₃, forming HCl (observed as misty white fumes). The HCl produced then reacts with any excess NH₃ to form ammonium chloride (NH₄Cl) solid.'
      }
    },
    {
      id: 'list-acyl-mechanism',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Both O (on C=O) and Cl are electronegative → both withdraw electrons from C → C is δ+' },
          { text: 'N lone pair on NH₃ attacks the electron-deficient δ+ carbon of the acyl chloride' },
          { text: 'Cl leaves the molecule and bonds to the H from NH₃ → HCl forms (misty white fumes observed)' },
          { text: 'HCl produced + excess NH₃ → NH₄Cl (ammonium chloride salt, white solid)' },
          { text: 'Overall equation: R−COCl + 2NH₃ → R−CO−NH₂ + NH₄Cl' }
        ]
      }
    },
    {
      id: 'callout-acyl-advantage',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Acyl Chlorides are Ideal for Amide Synthesis',
        text: 'Acyl chlorides are very reactive and form amides in a single step with no catalyst. The reaction is quantitative (high yield). Only one product amide forms (unlike carboxylic acid routes). Disadvantage: acyl chlorides are expensive and must be synthesised from carboxylic acids using SOCl₂ or PCl₅.'
      }
    },
    {
      id: 'h-amide-formation-carboxylic',
      type: 'heading',
      data: { text: 'Amide Formation from Carboxylic Acids', level: 2 }
    },
    {
      id: 'p-carboxylic-1',
      type: 'paragraph',
      data: {
        text: 'Amides can also be formed by heating a carboxylic acid (R−COOH) with ammonia or an amine. However, this route is slower and less efficient than the acyl chloride route. The carboxylic acid is less electrophilic than an acyl chloride, so the reaction requires heat and is slower.'
      }
    },
    {
      id: 'eq-carboxylic-amide',
      type: 'equation',
      data: {
        html: 'R−COOH + NH₃ → R−COO⁻NH₄⁺ (ammonium carboxylate salt, initial product)<br />(heat)<br />R−COO⁻NH₄⁺ → R−CO−NH₂ + H₂O (on further heating, amide forms)'
      }
    },
    {
      id: 'p-carboxylic-2',
      type: 'paragraph',
      data: {
        text: 'The process is a condensation reaction: the carboxylic acid and amine combine, releasing water. The carboxylic acid first donates a proton to ammonia, forming an ammonium carboxylate salt (R−COO⁻−NH₄⁺). On further heating (150−200°C), water is eliminated and the amide forms. Heating must be sustained to drive the equilibrium towards the amide product.'
      }
    },
    {
      id: 'h-amide-hydrolysis',
      type: 'heading',
      data: { text: 'Amide Hydrolysis', level: 2 }
    },
    {
      id: 'p-hydrolysis-1',
      type: 'paragraph',
      data: {
        text: 'Amides can be hydrolysed (broken down by water) to regenerate the carboxylic acid and amine. The hydrolysis requires either strong acid (HCl, H₂SO₄) or strong base (NaOH). The reaction is the reverse of amide formation and requires heating.'
      }
    },
    {
      id: 'eq-amide-hydrolysis',
      type: 'equation',
      data: {
        html: 'R−CO−NH₂ + H₂O + HCl (heat) → R−COOH + NH₄⁺Cl⁻ (acidic hydrolysis)<br />R−CO−NH₂ + H₂O + NaOH (heat) → R−COO⁻Na⁺ + NH₃ (basic hydrolysis)'
      }
    },
    {
      id: 'p-hydrolysis-2',
      type: 'paragraph',
      data: {
        text: 'In acidic hydrolysis, the amide is protonated on the nitrogen, making it more electrophilic. Water attacks the carbonyl carbon, forming a tetrahedral intermediate. This collapses to release ammonia (or an amine) and the carboxylic acid. The ammonia is immediately protonated to form ammonium ion (NH₄⁺) in acidic conditions.'
      }
    },
    {
      id: 'p-hydrolysis-3',
      type: 'paragraph',
      data: {
        text: 'In basic hydrolysis, the hydroxy ion (OH⁻) attacks the carbonyl carbon directly (no protonation step needed). The mechanism proceeds through a tetrahedral intermediate, with the N−C bond breaking and the C=O reforming. The ammonia released is immediately neutralised by the base to form ammonia gas, and the carboxylic acid is neutralised to form the carboxylate ion (R−COO⁻).'
      }
    },
    {
      id: 'callout-hydrolysis-mechanism',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Difference Between Acidic and Basic Hydrolysis',
        text: 'Acidic: N protonated first → water attacks C=O. Products: carboxylic acid (RCOOH) + NH₄⁺. Basic: OH⁻ attacks C=O directly → ammonia released and neutralised. Products: carboxylate ion (RCOO⁻) + NH₃ → NH₄⁺ + OH⁻ balance.'
      }
    },
    {
      id: 'h-polyamides-nylon',
      type: 'heading',
      data: { text: 'Condensation Polymerisation: Polyamides (Nylon)', level: 2 }
    },
    {
      id: 'p-polyamide-1',
      type: 'paragraph',
      data: {
        text: 'When a dicarboxylic acid (with two −COOH groups, like adipic acid: HOOC−(CH₂)₄−COOH) is reacted with a diamine (with two −NH₂ groups, like hexane-1,6-diamine: H₂N−(CH₂)₆−NH₂), a condensation polymerisation occurs. The amide linkages form repeatedly, creating a long-chain polymer called a polyamide or nylon.'
      }
    },
    {
      id: 'eq-nylon-formation',
      type: 'equation',
      data: {
        html: 'n HOOC−(CH₂)₄−COOH + n H₂N−(CH₂)₆−NH₂ →<br />[−CO−(CH₂)₄−CO−NH−(CH₂)₆−NH−]ₙ + 2n H₂O<br />(Nylon-66: 6 carbons in each segment)'
      }
    },
    {
      id: 'p-polyamide-2',
      type: 'paragraph',
      data: {
        text: 'Nylon-66 (or nylon 6,6) is the most common polyamide. The name "6,6" refers to the number of carbons in each monomer: hexanedioic acid (adipic acid) has 6 carbons, and 1,6-diaminohexane (hexane-1,6-diamine) also has 6 carbons. The polymer has a regular structure with repeating −CO−NH− amide linkages. This extensive H-bonding between parallel chains gives nylon excellent tensile strength and durability.'
      }
    },
    {
      id: 'callout-nylon-naming',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Understanding Nylon Naming',
        text: 'Nylon X,Y: X = number of carbons in the diamine; Y = number of carbons in the dicarboxylic acid.\nNylon 6,6: 1,6-diaminohexane (6C) + hexanedioic acid/adipic acid (6C)\nIf only one number given (e.g., nylon 6): made from a single monomer containing both −NH₂ and −COOH groups (caprolactam ring-opening).'
      }
    },
    {
      id: 'callout-hydrogen-bonding',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hydrogen Bonding in Polyamides',
        text: 'The amide −CO−NH− groups form hydrogen bonds (H-bonding) between polymer chains. The C=O is a hydrogen bond acceptor, and the −NH is a hydrogen bond donor. Extensive H-bonding makes polyamides strong, heat-stable, and resistant to stretching.'
      }
    },
    {
      id: 'h-kevlar',
      type: 'heading',
      data: { text: 'Kevlar: Aromatic Polyamide', level: 2 }
    },
    {
      id: 'list-kevlar',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Kevlar is an aromatic polyamide (aramid) — similar to nylon but uses benzene rings instead of alkyl chains between the amide groups' },
          { text: 'Monomers: 1,4-diaminobenzene (para-phenylenediamine) + benzene-1,4-diacyl chloride (NOT dicarboxylic acid)' },
          { text: 'Importantly: Kevlar uses DIACYL CHLORIDE (not dicarboxylic acid) — the acyl chloride reacts faster and gives better yield' },
          { text: 'Each amide linkage −CO−NH− still forms by condensation — HCl is lost (not H₂O)' },
          { text: 'The benzene rings between each amide group make the chain very rigid and strong' },
          { text: 'Kevlar is extremely tough and has very high tensile strength — stronger than steel by weight' }
        ]
      }
    },
    {
      id: 'eq-kevlar-formation',
      type: 'equation',
      data: {
        html: 'n H₂N−C₆H₄−NH₂ + n ClCO−C₆H₄−COCl →<br />[−NH−C₆H₄−NH−CO−C₆H₄−CO−]ₙ + 2n HCl<br />(1,4-diaminobenzene + benzene-1,4-diacyl chloride → Kevlar + HCl)'
      }
    },
    {
      id: 'callout-kevlar-use',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Kevlar Uses',
        text: 'Bulletproof and stab-proof vests — the rigid aromatic chains absorb and dissipate kinetic energy. Also used in helmets, aerospace components, and cut-resistant gloves. The aromatic rings align and stack via π−π interactions, giving additional rigidity beyond H-bonding alone.'
      }
    },
    {
      id: 'h-polyamide-props',
      type: 'heading',
      data: { text: 'Polyamide Properties and Uses', level: 2 }
    },
    {
      id: 'table-polyamide-props',
      type: 'comparisonTable',
      data: {
        caption: 'General properties of polyamides',
        headers: ['Property', 'Detail'],
        rows: [
          ['Physical structure', 'Semi-crystalline — polymer chains can align and pack into ordered crystalline regions'],
          ['Mechanical', 'Very tough — high tensile strength and impact resistance'],
          ['Thermal', 'Good thermal resistance — can withstand elevated temperatures without deforming'],
          ['Chemical', 'Good chemical resistance — stable to many solvents and chemicals'],
          ['Moisture', 'Can absorb moisture → increases flexibility but may reduce stiffness and strength']
        ]
      }
    },
    {
      id: 'table-polyamide-uses',
      type: 'comparisonTable',
      data: {
        caption: 'Polyamide types and applications',
        headers: ['Polyamide', 'Key Feature', 'Uses'],
        rows: [
          ['Nylon (e.g., nylon 6,6)', 'Strong fibres; H-bonded amide chains', 'Clothing fibre, fishing lines, carpets, ropes'],
          ['Kevlar (aromatic)', 'Rigid aromatic backbone; extremely high strength', 'Bulletproof/stab-proof vests, helmets, aerospace'],
          ['Polyamide film', 'Tough, thermally stable, chemically resistant', 'Food packaging — does not react with food contents']
        ]
      }
    },
    {
      id: 'h-poly-propenamide',
      type: 'heading',
      data: { text: 'Poly(propenamide): Addition Polymer from an Amide Monomer', level: 2 }
    },
    {
      id: 'list-poly-propenamide',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Poly(propenamide) is an ADDITION polymer — NOT a condensation polymer' },
          { text: 'Monomer: propenamide (prop-2-enamide / acrylamide) — formula CH₂=CH−CONH₂' },
          { text: 'The monomer has BOTH a C=C double bond AND a −CONH₂ amide group' },
          { text: 'Only the C=C double bond reacts in polymerisation — the amide group does NOT participate' },
          { text: 'When chains cross-link: forms a thick gel that can absorb large amounts of water' },
          { text: 'Think of it as: alkene polymerisation that happens to produce a polymer with pendent amide groups' }
        ]
      }
    },
    {
      id: 'callout-propenamide-uses',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Uses of Poly(propenamide)',
        text: 'Thickener and filler in facial surgery (hydrogel form). Water treatment (flocculant — helps clump particles together). Papermaking (improves paper strength and retention). Cross-linked form → contact lenses (absorbs water, remains transparent and soft). This molecule bridges alkene chemistry (addition polymerisation) and amide chemistry.'
      }
    },
    {
      id: 'h-poly-ethenol',
      type: 'heading',
      data: { text: 'Poly(ethenol) / PVA: Two-Stage Production', level: 2 }
    },
    {
      id: 'list-pva-production',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Stage 1 — Addition polymerisation of ethenyl ethanoate (vinyl acetate, CH₂=CH−OOCCH₃): the C=C double bond reacts → forms poly(ethenyl ethanoate)' },
          { text: 'Stage 2 — Ester exchange (transesterification) with methanol: replaces the −OOCCH₃ ester side groups with −OH groups' },
          { text: 'Result: poly(ethenol) (PVA) — a polymer with many −OH groups along the chain' },
          { text: 'The many −OH groups form extensive hydrogen bonds with water → highly water-soluble polymer' }
        ]
      }
    },
    {
      id: 'callout-pva-use',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Why Can\'t You Make Poly(ethenol) Directly?',
        text: 'Ethenol (CH₂=CH−OH) is unstable — it spontaneously tautomerises to ethanal (CH₃CHO). So you cannot polymerise ethenol directly.\n\nInstead: polymerise the stable ethenyl ethanoate (has C=C), then chemically convert the ester side chains (−OOCCH₃) to hydroxyl groups (−OH) using transesterification (ester exchange with methanol).\n\nThis two-step route is necessary because the direct monomer is unstable.'
      }
    },
    {
      id: 'callout-pva-hospital',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'PVA Hospital Laundry Bags',
        text: 'Used to make disposable laundry bags in hospitals for contaminated/infected linen. The sealed bag (containing sheets from infectious patients) is placed directly into the washing machine. The bag dissolves in water during the wash cycle, releasing the contents — no need for staff to handle contaminated items directly. This reduces cross-infection risk.'
      }
    },
    {
      id: 'checklist-amides',
      type: 'checklist',
      data: {
        items: [
          { text: 'Acyl chloride + 2NH₃ → amide + NH₄Cl (N lone pair attacks δ+ C; HCl fumes observed)', checked: false },
          { text: 'Carboxylic acid + NH₃ (heat) → ammonium salt → amide + H₂O', checked: false },
          { text: 'Amide hydrolysis with HCl (heat): RCOOH + NH₄⁺; with NaOH: RCOO⁻ + NH₃', checked: false },
          { text: 'Nylon 6,6: 1,6-diaminohexane + hexanedioic acid; “6,6” = 6C in each monomer', checked: false },
          { text: 'Kevlar: aromatic polyamide; 1,4-diaminobenzene + benzene-1,4-diacyl chloride → Kevlar + HCl', checked: false },
          { text: 'Polyamide uses: nylon = fibres/clothing; Kevlar = bulletproof vests; film = food packaging', checked: false },
          { text: 'Poly(propenamide): ADDITION polymer; monomer CH₂=CH−CONH₂; only C=C reacts; cross-linked = gel', checked: false },
          { text: 'Poly(ethenol)/PVA: Stage 1 = addition polymerise ethenyl ethanoate; Stage 2 = transesterify with MeOH → OH groups', checked: false }
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
        text: 'Understand: Amides form via condensation of carboxylic acids/acyl chlorides with amines. The peptide bond (−CONH−) is a special case linking amino acids.\n\nApply: Write the equation for the reaction of ethanoyl chloride with methylamine. Name the product.\n\nAnalyze: Why is the C−N bond in amides shorter than in amines? Relate to partial double bond character from delocalisation.\n\nEvaluate: Polyamides (nylon) are formed by condensation polymerisation. Compare their properties and environmental impact with addition polymers.'
      },
      terms: []
    },
    {
      id: 'summary-amides',
      type: 'summary',
      data: {
        text: 'Amides form from acyl chlorides and ammonia by nucleophilic acyl substitution: N lone pair attacks δ+ C (both O and Cl make C electron-deficient); Cl leaves with H → HCl fumes; HCl + excess NH₃ → NH₄Cl; overall: acyl chloride + 2NH₃ → amide + NH₄Cl. Carboxylic acids react with NH₃ on heating (two-step, via ammonium salt). Hydrolysis: HCl (heat) → RCOOH + NH₄⁺; NaOH (heat) → RCOO⁻ + NH₃. Nylon 6,6 = condensation of hexanedioic acid (6C) + 1,6-diaminohexane (6C) → polyamide + H₂O; extensive H-bonds give strength. Kevlar = aromatic polyamide from 1,4-diaminobenzene + benzene-1,4-diacyl chloride; uses: bulletproof/stab-proof vests. Poly(propenamide): addition polymer of CH₂=CH−CONH₂ (only C=C reacts; amide group unchanged); cross-linked → gel; uses: contact lenses, water treatment, facial surgery filler. Poly(ethenol)/PVA: Stage 1 = addition polymerisation of ethenyl ethanoate; Stage 2 = transesterification with MeOH → polymer with −OH groups; water-soluble due to H-bonding; use: hospital dissolving laundry bags.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-acyl-mechanism', prompt: 'Describe the 4-step mechanism for acyl chloride + NH₃. What is the overall equation with excess NH₃?' },
      { id: 'cue-2', blockId: 'callout-nylon-naming', prompt: 'What does the naming “nylon 6,6” tell you? What are its two monomers?' },
      { id: 'cue-3', blockId: 'list-kevlar', prompt: 'How does Kevlar differ from nylon? What is its key structural difference and what is it used for?' },
      { id: 'cue-4', blockId: 'list-poly-propenamide', prompt: 'Is poly(propenamide) addition or condensation? What part of the monomer reacts? What happens when cross-linked?' },
      { id: 'cue-5', blockId: 'list-pva-production', prompt: 'Describe the two-stage production of poly(ethenol)/PVA. Why is PVA water-soluble?' }
    ],
    summaryText: 'Acyl chloride + 2NH₃ → amide + NH₄Cl (N lone pair attacks δ+ C; Cl leaves + HCl + excess NH₃ → NH₄Cl). Nylon 6,6: hexanedioic acid (6C) + 1,6-diaminohexane (6C) → polyamide + H₂O. Kevlar: aromatic polyamide from diaminobenzene + diacyl chloride; bulletproof vests. Poly(propenamide): addition polymer of CH₂=CH−CONH₂; amide group unchanged; cross-linked = gel. PVA (2 stages): addition polymerise ethenyl ethanoate → transesterify with MeOH → polymer with −OH; water-soluble; hospital laundry bags.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Amide formation, hydrolysis, and polymerisation',
      detail: 'Nucleophilic acyl substitution mechanisms, condensation reactions, hydrolysis in acidic/basic conditions, polyamide synthesis and properties, industrial nylon production',
      year: '2023',
      source: 'chemguide.co.uk — amide reactions and polyamides',
      tags: ['amide', 'acyl', 'hydrolysis', 'polyamide', 'nylon', 'condensation']
    }
  ]
};
