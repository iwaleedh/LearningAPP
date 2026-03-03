export const note_chemistry_4_15_4 = {
  blocks: [
    {
      id: 'obj-carbonyl-rxn',
      type: 'objective',
      data: {
        text: 'Understand nucleophilic addition reactions of aldehydes and ketones; reduction, cyanide addition, and tests to distinguish aldehydes from ketones.'
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
      data: { text: 'Reduction with NaBH₄', level: 2 }
    },
    {
      id: 'p-nabh4-reaction',
      type: 'paragraph',
      data: {
        text: 'Sodium borohydride (NaBH₄) is a powerful reducing agent. It reduces aldehydes to primary alcohols and ketones to secondary alcohols. The hydride ion (H⁻) acts as a strong nucleophile, attacking the electrophilic carbonyl carbon. The reaction is rapid and occurs at room temperature, typically in aqueous or alcoholic solvents. The mechanism is nucleophilic addition: the hydride adds to the C=O, forming C–H and O⁻ (from the π electrons). Protonation then gives C–OH.'
      }
    },
    {
      id: 'equation-nabh4',
      type: 'equation',
      data: {
        html: 'R–CHO + NaBH<sub>4</sub> → R–CH<sub>2</sub>OH  (aldehyde → primary alcohol)<br/>R–CO–R′ + NaBH<sub>4</sub> → R–CHOH–R′  (ketone → secondary alcohol)',
        caption: 'NaBH₄ reduction of carbonyl compounds. The hydride (H⁻) is the nucleophile; the carbonyl carbon is the electrophile.'
      }
    },
    {
      id: 'p-nabh4-advantage',
      type: 'paragraph',
      data: {
        text: 'NaBH₄ is milder than LiAlH₄ (lithium aluminium hydride), which is extremely reactive and requires anhydrous conditions. NaBH₄ can be used in water or protic solvents without violent reaction (though excess water slows the reduction). The choice between NaBH₄ and LiAlH₄ depends on the substrate: NaBH₄ reduces aldehydes and ketones but not carboxylic acids or esters; LiAlH₄ reduces all of these (see Carboxylic Acids note).'
      }
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
        text: 'Hydrogen cyanide (HCN) adds to aldehydes and ketones to form hydroxynitriles (also called cyanohydrins). The mechanism involves the cyanide ion (CN⁻) acting as a nucleophile — it attacks the electrophilic carbonyl carbon, forming a C–CN bond. The C=O is broken, and the π electrons form a carbocation intermediate. Protonation then gives a C–OH group. The product is R–CHOH–CN (from aldehyde) or R–COH(CN)–R′ (from ketone).'
      }
    },
    {
      id: 'equation-hcn',
      type: 'equation',
      data: {
        html: 'R–CHO + HCN → R–CHOH–CN  (aldehyde → hydroxynitrile)<br/>R–CO–R′ + HCN → R–COH(CN)–R′  (ketone → hydroxynitrile)',
        caption: 'HCN addition to carbonyls produces hydroxynitriles (cyanohydrins). CN⁻ is the nucleophile.'
      }
    },
    {
      id: 'p-hcn-stereo',
      type: 'paragraph',
      data: {
        text: 'HCN addition creates a chiral centre at the original carbonyl carbon (which becomes C–OH–CN). Since the nucleophile can attack from either face of the planar C=O, the product is a racemic mixture (unless asymmetric conditions are used). This is industrially important: for example, the synthesis of mandelic acid derivatives involves HCN addition to benzaldehyde.'
      }
    },
    {
      id: 'callout-hcn-caution',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'HCN Safety Hazard',
        text: 'Hydrogen cyanide (HCN) is extremely toxic and volatile. Laboratory syntheses often use potassium cyanide (KCN) + dilute acid to generate HCN in situ, reducing exposure. The CN⁻ ion itself is less toxic than HCN gas. In all cases, HCN reactions must be carried out in a fume hood with proper ventilation and safety precautions. Exposure to HCN can be fatal in small amounts.'
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
        text: 'Aldehydes and ketones undergo nucleophilic addition at the electrophilic C=O carbon. NaBH₄ reduces aldehydes → primary alcohols, ketones → secondary alcohols (mild conditions, aqueous solvent OK). HCN adds to form hydroxynitriles (both aldehydes and ketones; creates new chiral centres, racemic product). Tollens\' and Fehling\'s tests oxidise and detect aldehydes only (not ketones), giving characteristic colour changes: silver mirror (Tollens\') or brick-red ppt (Fehling\'s). These tests exploit the greater reactivity of aldehydes due to lower steric hindrance.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-addition-mechanism',
        prompt: 'Describe the mechanism of nucleophilic addition to a carbonyl group.'
      },
      {
        id: 'cue-2',
        blockId: 'equation-nabh4',
        prompt: 'Write equations showing NaBH₄ reduction of an aldehyde and a ketone.'
      },
      {
        id: 'cue-3',
        blockId: 'equation-hcn',
        prompt: 'Write equations for HCN addition to an aldehyde and a ketone.'
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
    summaryText: 'Nucleophilic addition: nucleophile attacks Cδ⁺ of C=O, π electrons → O⁻, then protonation → C–OH product. NaBH₄: aldehyde → primary alcohol, ketone → secondary alcohol (nucleophile = H⁻). HCN: both aldehydes and ketones → hydroxynitriles (racemic, creates chiral centre). Tollens\' test: aldehydes oxidised → silver mirror (Ag⁺ → Ag metal); ketones no change. Fehling\'s test: aldehydes → brick-red Cu₂O ppt; ketones no change. Aldehydes more reactive due to steric accessibility.',
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
    }
  ]
};
