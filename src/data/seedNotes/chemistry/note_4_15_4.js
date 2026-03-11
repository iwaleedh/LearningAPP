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
    summaryText: 'Preparation: primary alcohols distilled with acidified K₂Cr₂O₇ to form aldehydes; secondary alcohols refluxed to form ketones. Nucleophilic addition: nucleophile attacks Cδ⁺ of C=O, π electrons → O⁻, then protonation → C–OH product. NaBH₄: aldehyde → primary alcohol, ketone → secondary alcohol (nucleophile = H⁻). HCN: both aldehydes and ketones → hydroxynitriles (racemic, creates chiral centre). Tollens\' test: aldehydes oxidised → silver mirror (Ag⁺ → Ag metal); ketones no change. Fehling\'s test: aldehydes → brick-red Cu₂O ppt; ketones no change. Aldehydes more reactive due to steric accessibility.',
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
