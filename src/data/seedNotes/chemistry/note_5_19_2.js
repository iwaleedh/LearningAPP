export const note_chemistry_5_19_2 = {
  blocks: [
    {
      id: 'obj-amine-prep',
      type: 'objective',
      data: {
        text: 'Describe practical methods for preparing amines: haloalkane + ammonia (primary/secondary/tertiary mixture), nitrile reduction (to primary amines), and nitrobenzene reduction (to phenylamine); discuss conditions and products'
      }
    },
    {
      id: 'h-haloalkane-ammonia',
      type: 'heading',
      data: { text: 'Preparation from Haloalkanes and Ammonia', level: 2 }
    },
    {
      id: 'p-haloalkane-1',
      type: 'paragraph',
      data: {
        text: 'Alkylamines can be prepared by heating a haloalkane (R−X) with a large excess of ammonia in a sealed tube under pressure. The ammonia acts as both a nucleophile and a base. The reaction involves SN2 nucleophilic substitution: the lone pair on ammonia attacks the carbon bonded to the halogen, displacing the halide as a leaving group and forming a C−N bond.'
      }
    },
    {
      id: 'eq-haloalkane-ammonia',
      type: 'equation',
      data: {
        html: 'R−X + NH₃ → R−NH₂ + HX (in sealed tube, heat, excess NH₃)<br />Example: CH₃Cl + NH₃ → CH₃NH₂ + HCl'
      }
    },
    {
      id: 'p-haloalkane-2',
      type: 'paragraph',
      data: {
        text: 'A critical problem with this method is that the primary amine product (R−NH₂) is also a nucleophile and a base. It can react further with unreacted haloalkane to form a secondary amine (R₂NH). The secondary amine can then react again to form a tertiary amine (R₃N). Finally, excess haloalkane can quaternise the tertiary amine to give a quaternary ammonium salt (R₄N⁺X⁻).'
      }
    },
    {
      id: 'eq-multiple-substitution',
      type: 'equation',
      data: {
        html: 'R−NH₂ + R−X → R₂NH + HX (secondary amine forms)<br />R₂NH + R−X → R₃N + HX (tertiary amine forms)<br />R₃N + R−X → [R₄N]⁺X⁻ (quaternary ammonium salt)'
      }
    },
    {
      id: 'callout-excess-ammonia',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Excess Ammonia Solution',
        text: 'To favour primary amine formation, use a LARGE EXCESS of ammonia. This ensures most R−X collides with NH₃ rather than with the primary amine product, shifting the distribution towards RNH₂. Even so, some secondary and tertiary amines form, making separation necessary.'
      }
    },
    {
      id: 'p-haloalkane-3',
      type: 'paragraph',
      data: {
        text: 'The practical result is a mixture of primary, secondary, tertiary amines, and quaternary ammonium salts. To obtain a pure primary amine, the products must be separated by distillation or other methods. The method is therefore not ideal for synthesising a single amine product but works in industrial settings where separation is feasible.'
      }
    },
    {
      id: 'h-nitrile-reduction',
      type: 'heading',
      data: { text: 'Reduction of Nitriles to Primary Amines', level: 2 }
    },
    {
      id: 'p-nitrile-1',
      type: 'paragraph',
      data: {
        text: 'A cleaner method to prepare primary alkylamines is to reduce a nitrile (R−C≡N). A nitrile has a triple bond between C and N. Reduction breaks this bond and converts the nitrile into a primary amine with an extra carbon: R−C≡N + 2H₂ → R−CH₂−NH₂.'
      }
    },
    {
      id: 'eq-nitrile-reduction',
      type: 'equation',
      data: {
        html: 'R−C≡N + 2H₂ → R−CH₂−NH₂ (reduction of nitrile to primary amine)<br />Example: CH₃C≡N + 2H₂ → CH₃CH₂NH₂ (ethanamine from acetonitrile)'
      }
    },
    {
      id: 'p-nitrile-2',
      type: 'paragraph',
      data: {
        text: 'The reduction can be carried out with hydrogen gas and a nickel or platinum catalyst at moderate pressure and temperature. Alternatively, a strong reducing agent like lithium aluminium hydride (LiAlH₄) can be used in organic solvent. The LiAlH₄ method is faster but requires careful handling (LiAlH₄ reacts violently with water).'
      }
    },
    {
      id: 'callout-nitrile-advantage',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Nitrile Reduction Advantage',
        text: 'Nitrile reduction gives only primary amines (no mixture). The product is pure if the nitrile starting material is pure. This is much cleaner than the haloalkane + ammonia route. However, the starting nitrile must first be synthesised from a haloalkane + CN⁻ (KCN/DMSO), so it is still a multi-step route.'
      }
    },
    {
      id: 'h-nitrobenzene-reduction',
      type: 'heading',
      data: { text: 'Reduction of Nitrobenzene to Phenylamine', level: 2 }
    },
    {
      id: 'p-nitrobenzene-1',
      type: 'paragraph',
      data: {
        text: 'Phenylamine (aniline) is synthesised by reducing nitrobenzene (C₆H₅−NO₂) with tin metal and concentrated hydrochloric acid, followed by addition of sodium hydroxide solution. The reduction converts the −NO₂ group to −NH₂.'
      }
    },
    {
      id: 'eq-nitrobenzene-reduction',
      type: 'equation',
      data: {
        html: 'C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O (reduction, not balanced for specifics)<br />Overall: C₆H₅NO₂ + Sn + conc HCl → C₆H₅NH₃⁺Cl⁻ + SnCl₂ (in acidic conditions)<br />C₆H₅NH₃⁺Cl⁻ + NaOH → C₆H₅NH₂ + NaCl + H₂O (liberation in basic conditions)'
      }
    },
    {
      id: 'p-nitrobenzene-2',
      type: 'paragraph',
      data: {
        text: 'The mechanism involves tin as a reducing agent. The −NO₂ group is progressively reduced through intermediate oxidation states (−N=O, −NHOH, etc.) until it becomes −NH₂. In the acidic HCl environment, the phenylamine is immediately protonated to form the phenylammonium chloride salt (C₆H₅NH₃⁺Cl⁻). Addition of NaOH neutralises the acid, releases the free phenylamine base, which separates as an oily layer.'
      }
    },
    {
      id: 'p-nitrobenzene-3',
      type: 'paragraph',
      data: {
        text: 'An alternative reducing agent is iron powder with dilute hydrochloric acid, followed by NaOH. Iron(II) ions (Fe²⁺) provide the reducing electrons. This method is equally effective and sometimes preferred because iron is cheaper and safer than tin.'
      }
    },
    {
      id: 'callout-two-step-liberation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Two-Step Liberation of Phenylamine',
        text: 'Reduction in acidic HCl forms phenylammonium salt (white solid, ionic). Add NaOH to deprotonate and liberate free phenylamine base (oily liquid, less dense, floats on water). Extract with organic solvent (ether or hexane) to isolate pure phenylamine.'
      }
    },
    {
      id: 'h-comparison-methods',
      type: 'heading',
      data: { text: 'Comparison of Amine Synthesis Routes', level: 2 }
    },
    {
      id: 'p-comparison',
      type: 'paragraph',
      data: {
        text: 'Route 1 (haloalkane + NH₃): Gives mixture of 1°/2°/3° amines; requires separation; suitable for industrial large-scale synthesis. Route 2 (nitrile reduction): Gives pure primary amine; cleaner method; requires prior nitrile synthesis. Route 3 (nitrobenzene reduction): Gives phenylamine; suited for aromatic amines; simple two-reagent process. Each method has advantages and is chosen based on the desired product and scale.'
      }
    },
    {
      id: 'checklist-prep-routes',
      type: 'checklist',
      data: {
        items: [
          { text: 'Haloalkane + excess NH₃ (sealed tube, heat) → mixture of amines', checked: false },
          { text: 'Nitrile + H₂ (Ni catalyst) or LiAlH₄ → pure primary amine', checked: false },
          { text: 'Nitrobenzene + Sn + conc HCl, then NaOH → phenylamine', checked: false },
          { text: 'Iron + dil HCl alternative to tin for nitrobenzene reduction', checked: false },
          { text: 'Nitrile reduction gives cleanest product (single amine, no mixture)', checked: false }
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
        text: 'Understand: Amines can be prepared by nucleophilic substitution (haloalkane + NH₃), but this gives mixtures. Nitrile reduction (LiAlH₄ or H₂/Pd) gives pure primary amines.\n\nApply: Write equations for (a) CH₃Br + NH₃ → products (b) CH₃CN + 4[H] → product.\n\nAnalyze: Why does the reaction of excess ammonia with a haloalkane give a mixture of primary, secondary, and tertiary amines?\n\nEvaluate: Compare nitrile reduction vs Gabriel synthesis for preparing primary amines. Which avoids over-alkylation?'
      },
      terms: []
    },
    {
      id: 'summary-prep',
      type: 'summary',
      data: {
        text: 'Alkylamines can be prepared by heating a haloalkane with excess ammonia in a sealed tube, but this gives a mixture of primary, secondary, tertiary amines, and quaternary salts requiring separation. Pure primary amines are better made by nitrile reduction (H₂/Ni catalyst or LiAlH₄) from R−C≡N → R−CH₂−NH₂. Phenylamine is synthesised by reducing nitrobenzene (C₆H₅NO₂) with tin and concentrated HCl, then adding NaOH to liberate the free base. Iron can substitute for tin as the reductant.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-haloalkane-1', prompt: 'Describe the preparation of alkylamines from haloalkanes and ammonia.' },
      { id: 'cue-2', blockId: 'p-haloalkane-2', prompt: 'Why does haloalkane + ammonia give a mixture of products, and how can this be minimised?' },
      { id: 'cue-3', blockId: 'eq-nitrile-reduction', prompt: 'How are primary amines prepared from nitriles? What are the reducing agents?' },
      { id: 'cue-4', blockId: 'eq-nitrobenzene-reduction', prompt: 'Describe the two-step process for reducing nitrobenzene to phenylamine.' }
    ],
    summaryText: 'Haloalkane + excess NH₃ (sealed tube, heat) → mixture of 1°/2°/3°/quaternary amines. Nitrile + H₂ (Ni) or LiAlH₄ → pure primary amine. Nitrobenzene + Sn + conc HCl → phenylammonium salt, then NaOH → free phenylamine (oil). Iron alternative to tin. Nitrile reduction cleanest for primary amines.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Amine synthesis routes and preparations',
      detail: 'SN2 nucleophilic substitution with haloalkanes and ammonia; nitrile reduction mechanisms; reduction of nitro compounds using Sn/HCl or Fe/HCl; liberation of free base with NaOH',
      year: '2023',
      source: 'chemguide.co.uk — amine preparation methods',
      tags: ['synthesis', 'haloalkane', 'nitrile', 'nitrobenzene', 'reduction', 'nucleophilic']
    }
  ]
};
