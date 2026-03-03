export const note_chemistry_5_19_4 = {
  blocks: [
    {
      id: 'obj-amide-reactions',
      type: 'objective',
      data: {
        text: 'Explain amide formation from acyl chlorides and carboxylic acids with ammonia/amines; describe amide hydrolysis in acidic and basic conditions; understand condensation polymerisation to form polyamides (nylon)'
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
        html: 'R−COCl + NH₃ → R−CO−NH₂ + HCl (primary amide)<br />R−COCl + R′NH₂ → R−CO−NHR′ + HCl (secondary amide)<br />R−COCl + R′₂NH → R−CO−NR′₂ + HCl (tertiary amide)<br />(Fast reaction, no catalyst needed)'
      }
    },
    {
      id: 'p-acyl-2',
      type: 'paragraph',
      data: {
        text: 'The mechanism involves nucleophilic acyl substitution. The lone pair on ammonia/amine attacks the carbonyl carbon, forming a tetrahedral intermediate. The C−Cl bond then breaks, expelling chloride as a leaving group (Cl⁻ is an excellent leaving group). A proton is transferred, and the amide product forms. HCl gas is released as a by-product.'
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
        text: 'Nylon-66 (or nylon 6,6) is the most common polyamide. It is synthesised from adipic acid (6 carbons) and hexane-1,6-diamine (6 carbons), hence the name. The polymer has a regular structure with repeating −CO−NH− amide linkages. These hydrogen-bonded peptide bonds give nylon excellent strength, elasticity, and durability. Nylon is used in fabrics, carpets, fishing line, and other applications.'
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
      id: 'checklist-amides',
      type: 'checklist',
      data: {
        items: [
          { text: 'Acyl chloride + NH₃/amine → amide (fast, high yield, no catalyst)', checked: false },
          { text: 'Carboxylic acid + NH₃ (heat) → amide (slower, requires heating)', checked: false },
          { text: 'Amide hydrolysis with HCl: produces RCOOH + NH₄⁺', checked: false },
          { text: 'Amide hydrolysis with NaOH: produces RCOO⁻ + NH₃', checked: false },
          { text: 'Dicarboxylic acid + diamine → polyamide (nylon) via condensation', checked: false }
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
        text: 'Amides are most efficiently formed from acyl chlorides and ammonia/amines (fast, single step). Carboxylic acids form amides with ammonia when heated, forming an ammonium salt intermediate that loses water to form the amide. Amide hydrolysis in acidic conditions (HCl, heat) produces carboxylic acid and ammonium salt. Basic hydrolysis (NaOH, heat) produces carboxylate ion and ammonia. Condensation polymerisation of dicarboxylic acids with diamines forms polyamides (nylon). Nylon-66 from adipic acid and hexane-1,6-diamine has extensive amide hydrogen bonding, giving strength and durability.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-acyl-amide', prompt: 'Write equations for amide formation from an acyl chloride with ammonia.' },
      { id: 'cue-2', blockId: 'p-carboxylic-2', prompt: 'Describe the two-step process for amide formation from a carboxylic acid and ammonia.' },
      { id: 'cue-3', blockId: 'eq-amide-hydrolysis', prompt: 'Compare acidic and basic hydrolysis of amides.' },
      { id: 'cue-4', blockId: 'p-polyamide-2', prompt: 'Explain how nylon-66 is synthesised and why it is strong.' }
    ],
    summaryText: 'Acyl chloride + NH₃ → amide + HCl (fast, no catalyst). Carboxylic acid + NH₃ → ammonium salt → amide + H₂O (heating). Acidic hydrolysis: amide + HCl + heat → RCOOH + NH₄⁺. Basic hydrolysis: amide + NaOH + heat → RCOO⁻ + NH₃. Polyamides: dicarboxylic acid + diamine → nylon + H₂O. Nylon-66 has strong H-bonded amide chains.',
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
