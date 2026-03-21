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
        text: 'Alkylamines can be prepared by heating a haloalkane with a concentrated solution of ammonia in ethanol. The reaction must be carried out in a sealed tube. Heating under reflux is not possible because the ammonia gas would escape up the condenser. The ammonia acts as a nucleophile, replacing the halogen via nucleophilic substitution.'
      }
    },
    {
      id: 'p-haloalkane-salt',
      type: 'paragraph',
      data: {
        text: 'The reaction happens in stages. First, an alkylammonium salt is formed. Then, a reversible reaction occurs between this salt and the excess ammonia in the mixture, where ammonia removes a hydrogen ion to leave the primary amine.'
      }
    },
    {
      id: 'eq-haloalkane-ammonia',
      type: 'equation',
      data: {
        html: 'Step 1: CH₃CH₂Br + NH₃ → CH₃CH₂NH₃⁺Br⁻ (ethylammonium bromide)<br />Step 2: CH₃CH₂NH₃⁺Br⁻ + NH₃ ⇌ CH₃CH₂NH₂ + NH₄⁺Br⁻'
      }
    },
    {
      id: 'p-haloalkane-2',
      type: 'paragraph',
      data: {
        text: 'A critical problem with this method is that the primary amine product (R−NH₂) also contains an active lone pair of electrons on the very electronegative nitrogen atom, meaning it is still a nucleophile. It can react further with unreacted haloalkane to form a secondary amine (R₂NH) and its salt. The secondary amine can then react again to form a tertiary amine (R₃N) and its salt. Finally, excess haloalkane can quaternise the tertiary amine to give a quaternary ammonium salt (R₄N⁺X⁻).'
      }
    },
    {
      id: 'eq-multiple-substitution',
      type: 'equation',
      data: {
        html: 'Step 1 (Salt): CH₃CH₂NH₂ + CH₃CH₂Br → (CH₃CH₂)₂NH₂⁺Br⁻<br />Step 2 (Free amine): (CH₃CH₂)₂NH₂⁺Br⁻ + NH₃ ⇌ (CH₃CH₂)₂NH + NH₄⁺Br⁻<br /><br />This repeats to form a tertiary amine, and then eventually tetraethylammonium bromide (a 4° ammonium salt).'
      }
    },
    {
      id: 'callout-excess-ammonia',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Controlling the Product Mixture',
        text: '• To favour the PRIMARY amine: use a very large excess of ammonia. This ensures the haloalkane is more likely to collide with ammonia than with a formed amine.<br />• To favour the QUATERNARY ammonium salt: use a large excess of the haloalkane, allowing the substitution to run to completion.'
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
        html: 'R−C≡N + 2H₂ → R−CH₂−NH₂ (reduction of nitrile to primary amine)<br />Example: CH₃C≡N + 2H₂ → CH₃CH₂NH₂ (ethanamine from acetonitrile)<br /><b>Note: the product has ONE MORE carbon than the haloalkane starting material</b><br />(haloalkane → RCN adds 1 C → RCH₂NH₂ has 1 extra C compared to R−X)'
      }
    },
    {
      id: 'p-nitrile-2',
      type: 'paragraph',
      data: {
        text: 'The reduction can be carried out with hydrogen gas and a metal catalyst (commonly palladium, platinum, or nickel) at a raised temperature and pressure. Alternatively, a strong reducing agent like lithium aluminium hydride (LiAlH₄) dissolved in ethoxyethane (dry ether) can be used, followed by treatment with a dilute acid to liberate the amine. Note: NaBH₄ is not a strong enough reducing agent to reduce nitriles.'
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
        id: 'summary-preparation-phenylamine',
        type: 'summary',
        data: {
          text: 'Phenylamine is prepared by nitrating benzene to form nitrobenzene, then reducing nitrobenzene with tin and hydrochloric acid under reflux. The product is phenylammonium chloride, which is deprotonated by sodium hydroxide to liberate phenylamine. Extraction and purification are complex and hazardous.'
        }
      },
    {
      id: 'h-diazonium-prep',
      type: 'heading',
      data: { text: 'Preparation of Diazonium Salts from Phenylamine', level: 2 }
    },
    {
      id: 'p-diazonium-overview',
      type: 'paragraph',
      data: {
        text: 'Diazonium salts are formed by reacting phenylamine (aniline) with nitrous acid (HNO₂) at temperatures below 5°C. Nitrous acid is unstable and must be generated in situ by mixing sodium nitrite (NaNO₂) with hydrochloric acid. The reaction is highly temperature-sensitive: below 5°C, diazonium salts form; above 5°C, phenol and nitrogen gas are produced instead.'
      }
    },
    {
      id: 'list-diazonium-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Dissolve phenylamine in excess hydrochloric acid (forms phenylammonium chloride).',
          'Cool both phenylammonium chloride solution and sodium nitrite solution in ice (≤5°C).',
          'Add sodium nitrite solution slowly to phenylammonium chloride, keeping temperature below 5°C.',
          'Nitrous acid forms in situ and reacts with phenylamine to produce benzenediazonium chloride (C₆H₅N₂⁺Cl⁻).',
          'Diazonium salts are unstable and must be used immediately; they decompose or explode if isolated as solids.'
        ]
      }
    },
    {
      id: 'eq-diazonium-prep',
      type: 'equation',
      data: {
        html: 'C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O<br />'
          + 'Ionic: C₆H₅NH₂ + HNO₂ + HCl → C₆H₅N₂⁺Cl⁻ + 2H₂O'
      }
    },
    {
      id: 'callout-diazonium-temp',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Temperature Control is Critical',
        text: '• If temperature rises above 5°C, diazonium salt decomposes to phenol and nitrogen gas.\n• Always use an ice bath and add reagents slowly.\n• Diazonium salts are explosive as solids; never isolate them.'
      }
    },
    {
      id: 'svg-diazonium-mechanism',
      type: 'svg',
      data: {
        svg: '<svg width="220" height="80" viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="220" height="80" fill="#0f172a"/><text x="10" y="20" font-size="14" fill="#333">Phenylamine + HNO₂ (in situ) + HCl</text><text x="10" y="40" font-size="14" fill="#333">↓ ≤5°C</text><text x="10" y="60" font-size="14" fill="#333">→ Benzenediazonium chloride (C₆H₅N₂⁺Cl⁻)</text></svg>',
        caption: 'Stepwise mechanism: phenylamine reacts with nitrous acid (generated in situ from NaNO₂ + HCl) at low temperature to form benzenediazonium chloride.'
      }
    },
    {
      id: 'callout-diazonium-vs-alkylamine',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Comparison: Phenylamine vs Alkylamines',
        text: '• Both react with nitrous acid, but alkylamines (aliphatic) are converted to alcohols and nitrogen gas at room temperature.\n• Aromatic amines (phenylamine) form stable diazonium salts only at low temperature.\n• Exam tip: Always specify temperature and in situ generation of HNO₂.'
      }
    },
    {
      id: 'summary-diazonium-prep',
      type: 'summary',
      data: {
        text: 'Diazonium salts are prepared by reacting phenylamine with nitrous acid (generated in situ from sodium nitrite and hydrochloric acid) at temperatures below 5°C. The product, benzenediazonium chloride, is highly unstable and must be used immediately. Temperature control and safety precautions are essential.'
      }
    },
    // ...existing code...
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Amines can be prepared by nucleophilic substitution (haloalkane + NH₃), but this gives mixtures. Nitrile reduction (LiAlH₄ in DRY ETHER, or H₂/Ni) gives pure primary amines with ONE MORE carbon than the nitrile.\n\nApply: Write equations for (a) CH₃Br + NH₃ → products (b) CH₃CN + 4[H] → product.\n\nAnalyze: Why does the reaction of excess ammonia with a haloalkane give a mixture of primary, secondary, and tertiary amines?\n\nEvaluate: Compare nitrile reduction vs the haloalkane/ammonia route for preparing primary amines. Which is cleaner and why?'
      },
      terms: []
    },
    {
      id: 'summary-prep',
      type: 'summary',
      data: {
        text: 'Alkylamines can be prepared by heating a haloalkane with excess ammonia in a sealed tube, but this gives a mixture of primary, secondary, tertiary amines, and quaternary salts requiring separation. Pure primary amines are better made by nitrile reduction (H₂/Ni catalyst or LiAlH₄) from R−C≡N → R−CH₂−NH₂. Phenylamine is synthesised by reducing nitrobenzene (C₆H₅NO₂) with tin and concentrated HCl, then adding NaOH to liberate the free base. Iron can substitute for tin as the reductant.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Controlling Amine Products via Excess Reagent",
        text: "Haloalkane + ammonia gives mixture (primary, secondary, tertiary, quaternary). Control by stoichiometry: EXCESS ammonia favours 1\u00b0 amine (ammonia collides more often than formed amine); EXCESS haloalkane favours quaternary salt (exhausts ammonia, formed amine quaternizes). Nitrile route avoids this \u2014 gives only 1\u00b0."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-haloalkane-1', prompt: 'Describe the preparation of alkylamines from haloalkanes and ammonia.' },
      { id: 'cue-2', blockId: 'callout-excess-ammonia', prompt: 'How can you favour the formation of a primary amine vs a quaternary ammonium salt when reacting a haloalkane with ammonia?' },
      { id: 'cue-3', blockId: 'p-nitrile-2', prompt: 'How are primary amines prepared from nitriles? Can NaBH₄ be used?' },
      { id: 'cue-4', blockId: 'eq-nitrobenzene-reduction', prompt: 'Describe the two-step process for reducing nitrobenzene to phenylamine.' }
    ],
    summaryText: 'Haloalkane + excess NH₃ in ethanol (sealed tube, heat) → mixes (excess NH₃ favors 1°, excess R−X favors 4° salt). Steps form alkylammonium salt then free amine. Nitrile + H₂ (Pd/Pt/Ni) or LiAlH₄ in dry ether + dilute acid → 1° amine (NaBH₄ too weak). Nitrobenzene + Sn/conc HCl → phenylammonium salt, then NaOH → free phenylamine.',
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
