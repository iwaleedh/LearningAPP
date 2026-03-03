export const note_chemistry_5_17_9 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-practical-14',
      data: {
        text: 'Prepare a transition metal complex salt by precipitation and redissolution; measure yield and percentage yield; identify sources of error and suggest improvements; apply practical chemistry techniques.'
      }
    },
    {
      type: 'heading',
      id: 'h-practical-overview',
      data: { text: 'Core Practical 14: Metal Complex Preparation', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-practical-aim',
      data: {
        text: 'The aim of this practical is to prepare a transition metal complex salt, typically <strong>[Cu(NH₃)₄(H₂O)₂]SO₄·H₂O</strong> (copper(II) bis(ethylenediamine) or similar), by coordination of ammonia with copper(II) sulfate. The preparation involves:<br/>' +
        '1. Dissolving copper(II) sulfate (CuSO₄·5H₂O) in water<br/>' +
        '2. Adding concentrated ammonia solution<br/>' +
        '3. Filtering the copper(II) hydroxide precipitate<br/>' +
        '4. Redissolving the precipitate in excess ammonia<br/>' +
        '5. Filtering and crystallising the product<br/>' +
        '6. Weighing and calculating yield'
      }
    },
    {
      type: 'heading',
      id: 'h-theoretical-background',
      data: { text: 'Theoretical Background', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-reactions-involved',
      data: {
        text: '<strong>Step 1: Initial precipitation with ammonia</strong><br/>' +
        '[Cu(H₂O)₆]²⁺(aq) + 2NH₃(aq) → Cu(OH)₂(s) (pale blue precipitate) + 2NH₄⁺(aq)<br/>' +
        'or more simply: Cu²⁺ + 2OH⁻ → Cu(OH)₂↓<br/>' +
        'Ammonia acts as a weak base, producing OH⁻ ions which precipitate Cu²⁺ as insoluble copper(II) hydroxide.<br/>' +
        '<br/><strong>Step 2: Redissolution in excess ammonia</strong><br/>' +
        'Cu(OH)₂(s) + 4NH₃(aq) → [Cu(NH₃)₄]²⁺(aq) + 2H₂O(l)<br/>' +
        'or combined: [Cu(H₂O)₆]²⁺ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O<br/>' +
        'Excess ammonia coordinates to the Cu²⁺ ion, forming a deep blue soluble complex. This is the key step—the complex is much more soluble than the hydroxide.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-complex-colour',
      data: {
        text: '<strong>Colour observations:</strong><br/>' +
        '• [Cu(H₂O)₆]²⁺ = pale blue<br/>' +
        '• Cu(OH)₂ = pale blue precipitate<br/>' +
        '• [Cu(NH₃)₄(H₂O)₂]²⁺ = deep blue<br/>' +
        'The colour change from pale blue → precipitate → deep blue is the signature of this preparation. NH₃ is a stronger field ligand than H₂O, resulting in a deeper blue colour due to larger d-orbital splitting (Δ).'
      }
    },
    {
      type: 'heading',
      id: 'h-detailed-method',
      data: { text: 'Detailed Method', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-method-part-1',
      data: {
        text: '<strong>Part 1: Preparation of starting solution</strong><br/>' +
        '1. Weigh approximately 3 g of copper(II) sulfate pentahydrate (CuSO₄·5H₂O) on a balance to the nearest 0.01 g. Record mass M₁<br/>' +
        '2. Dissolve in approximately 30 cm³ of distilled water in a beaker<br/>' +
        '3. Stir until completely dissolved (pale blue solution)<br/>' +
        '4. If undissolved particles remain, filter through filter paper into a clean beaker<br/>' +
        '<strong>Safety note:</strong> Copper compounds are toxic. Avoid skin contact. Ammonia solution is corrosive and has strong odour. Use in well-ventilated area or fume hood.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-method-part-2',
      data: {
        text: '<strong>Part 2: Ammonia addition and precipitation</strong><br/>' +
        '5. Measure 20 cm³ of concentrated ammonia solution (approximately 15 M NH₃)<br/>' +
        '6. Add the ammonia dropwise to the copper sulfate solution, with stirring<br/>' +
        '7. A pale blue gelatinous precipitate of Cu(OH)₂ forms<br/>' +
        '8. Continue adding ammonia until the pale blue precipitate dissolves, revealing a deep blue solution beneath<br/>' +
        '9. The solution becomes deep blue, indicating formation of [Cu(NH₃)₄(H₂O)₂]²⁺ complex<br/>' +
        '<strong>Critical point:</strong> Add ammonia in excess to fully dissolve the precipitate.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-method-part-3',
      data: {
        text: '<strong>Part 3: Crystallisation and isolation</strong><br/>' +
        '10. Heat the deep blue solution gently to approximately 50°C (NOT boiling—ammonia is volatile)<br/>' +
        '11. Allow the solution to cool slowly to room temperature in a beaker covered with a watch glass<br/>' +
        '12. Once cooled to room temperature, place the beaker in an ice-water bath or refrigerator (4°C) for 10 minutes to encourage crystallisation<br/>' +
        '13. Dark blue crystals of [Cu(NH₃)₄(H₂O)₂]SO₄·H₂O should form<br/>' +
        '<strong>Note:</strong> If crystallisation is slow, it may be necessary to wait overnight at room temperature before refrigerating.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-method-part-4',
      data: {
        text: '<strong>Part 4: Filtration and drying</strong><br/>' +
        '14. Set up vacuum filtration (or gravity filtration if vacuum is unavailable) with filter paper in a Büchner funnel<br/>' +
        '15. Filter the crystalline product through the filter paper<br/>' +
        '16. Wash the crystals on the filter paper with 2 × 5 cm³ portions of cold distilled water to remove soluble impurities (e.g., ammonium sulfate)<br/>' +
        '17. Wash with 1 × 5 cm³ of ethanol to help displace water and speed drying<br/>' +
        '18. Allow the crystals to dry on the filter paper for 2-3 minutes under suction<br/>' +
        '19. Transfer the dried crystals to a pre-weighed watch glass or empty weighing boat<br/>' +
        '20. Weigh the product to the nearest 0.01 g. Record mass M₂'
      }
    },
    {
      type: 'heading',
      id: 'h-yield-calculation',
      data: { text: 'Yield and Percentage Yield Calculation', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-yield-formula',
      data: {
        text: '<strong>Molar masses:</strong><br/>' +
        'CuSO₄·5H₂O = 64 + 32 + 64 + 90 = 250 g mol⁻¹<br/>' +
        '[Cu(NH₃)₄(H₂O)₂]SO₄·H₂O = 64 + 4(17) + 2(18) + 96 + 18 = 64 + 68 + 36 + 96 + 18 = 282 g mol⁻¹<br/>' +
        '<strong>Formula:</strong><br/>' +
        'Moles of CuSO₄ = M₁ ÷ 250<br/>' +
        'Theoretical mass of product = (M₁ ÷ 250) × 282<br/>' +
        'Actual mass of product = M₂<br/>' +
        'Percentage yield = (M₂ ÷ theoretical mass) × 100%'
      }
    },
    {
      type: 'paragraph',
      id: 'p-yield-worked-example',
      data: {
        text: '<strong>Worked Example:</strong><br/>' +
        'Mass of CuSO₄·5H₂O used = 3.0 g<br/>' +
        'Mass of product obtained = 2.1 g<br/>' +
        '<br/>Moles of CuSO₄ = 3.0 ÷ 250 = 0.012 mol<br/>' +
        'Theoretical mass = 0.012 × 282 = 3.384 g<br/>' +
        'Percentage yield = (2.1 ÷ 3.384) × 100% = 62.1%<br/>' +
        '<br/><strong>Typical yield:</strong> 50–70% is reasonable for this preparation. Losses occur during filtration, washing, and crystallisation.'
      }
    },
    {
      type: 'heading',
      id: 'h-safety-hazards',
      data: { text: 'Safety Hazards and Precautions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-safety-list',
      data: {
        text: '<strong>Hazards:</strong><br/>' +
        '• <strong>Copper compounds:</strong> Toxic if ingested or absorbed. Avoid skin contact. Cu²⁺ ions are environmental pollutants<br/>' +
        '• <strong>Ammonia solution (conc.):</strong> Corrosive; causes skin burns. Strong pungent odour irritates eyes and respiratory tract<br/>' +
        '• <strong>Heat:</strong> Hot water and heated beaker can cause burns<br/>' +
        '<br/><strong>Precautions:</strong><br/>' +
        '• Wear safety glasses throughout<br/>' +
        '• Wear gloves when handling copper sulfate and ammonia<br/>' +
        '• Use in fume hood or well-ventilated area<br/>' +
        '• Do not heat ammonia solution above 50°C (ammonia evaporates)<br/>' +
        '• Dispose of waste appropriately—copper waste to designated container, not sink'
      }
    },
    {
      type: 'heading',
      id: 'h-sources-of-error',
      data: { text: 'Sources of Error and Systematic Losses', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-systematic-errors',
      data: {
        text: '<strong>Loss of product during filtering:</strong><br/>' +
        '• Some crystals remain stuck to the filter paper or Büchner funnel<br/>' +
        '• Fine crystals may pass through the filter paper<br/>' +
        '<strong>Loss during washing:</strong><br/>' +
        '• Solubility of product in cold water (though low, small amounts dissolve)<br/>' +
        '• Ethanol wash removes some product if not careful<br/>' +
        '<strong>Incomplete drying:</strong><br/>' +
        '• Residual water retained in crystals increases measured mass<br/>' +
        '• Ammonia retained (from recrystallisation solution) inflates mass<br/>' +
        '<strong>Decomposition during heating:</strong><br/>' +
        '• Overheating causes decomposition of ammonia complex or loss of water of crystallisation<br/>' +
        '• Excessively high temperature (>60°C) can decompose the complex'
      }
    },
    {
      type: 'heading',
      id: 'h-improvements',
      data: { text: 'Improvements to the Procedure', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-improvements-list',
      data: {
        text: '<strong>To increase yield and accuracy:</strong><br/>' +
        '1. <strong>Minimise losses during filtration:</strong> Use Büchner funnel and vacuum filtration (faster, less time for crystallisation to reverse)<br/>' +
        '2. <strong>Reduce solubility losses:</strong> Use cold ethanol (increases product solubility less than water) for final wash<br/>' +
        '3. <strong>Improve crystallisation:</strong> Cool solution slowly at 4°C overnight to encourage large crystal formation<br/>' +
        '4. <strong>Better drying:</strong> Use desiccator for drying instead of air-drying; reduces moisture absorption<br/>' +
        '5. <strong>Quantitative transfer:</strong> Use funnel when transferring product to avoid spillage<br/>' +
        '6. <strong>Repeat crystallisation:</strong> Redissolve in minimum hot water and recrystallise to purify product and increase yield through multiple cycles<br/>' +
        '7. <strong>Control temperature:</strong> Use thermometer to monitor heating; do not exceed 50°C'
      }
    },
    {
      type: 'heading',
      id: 'h-observations-summary',
      data: { text: 'Key Observations and Qualitative Data', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-observations',
      data: {
        text: '<strong>Throughout the practical, observe and record:</strong><br/>' +
        '• <strong>Starting solution:</strong> Pale blue [Cu(H₂O)₆]²⁺<br/>' +
        '• <strong>On ammonia addition:</strong> Pale blue gelatinous Cu(OH)₂ precipitate forms initially<br/>' +
        '• <strong>With excess ammonia:</strong> Precipitate dissolves, solution becomes deep blue [Cu(NH₃)₄(H₂O)₂]²⁺<br/>' +
        '• <strong>On cooling:</strong> Deep blue crystals form (colour indicates strong NH₃ ligand field)<br/>' +
        '• <strong>Final product:</strong> Dark blue/purple-blue crystals of [Cu(NH₃)₄(H₂O)₂]SO₄·H₂O<br/>' +
        '<strong>Why these colours?</strong> Ammonia is a stronger field ligand than water, causing larger d-orbital splitting (Δ), which absorbs photons of higher energy (shorter wavelength), resulting in deeper blue colour.'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-practical',
      data: {
        items: [
          { text: 'Weigh CuSO₄·5H₂O and record mass M₁', checked: false },
          { text: 'Dissolve in ~30 cm³ distilled water', checked: false },
          { text: 'Add concentrated ammonia (20 cm³) dropwise, observe pale blue precipitate', checked: false },
          { text: 'Continue adding until precipitate dissolves (deep blue solution)', checked: false },
          { text: 'Heat gently to ~50°C, cool to room temperature, refrigerate at 4°C', checked: false },
          { text: 'Filter crystals using Büchner funnel or gravity filtration', checked: false },
          { text: 'Wash with cold water (2×5 cm³) then ethanol (1×5 cm³)', checked: false },
          { text: 'Dry on filter paper under suction for 2-3 minutes', checked: false },
          { text: 'Transfer to watch glass, weigh product, record mass M₂', checked: false },
          { text: 'Calculate theoretical yield and percentage yield', checked: false },
          { text: 'Identify sources of error and suggest improvements', checked: false }
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
        text: 'Understand: Preparing a transition metal complex involves precipitation of the metal hydroxide, then redissolution in excess ligand. Yield is calculated from actual vs theoretical mass.\n\nApply: Describe how to prepare [Cu(NH₃)₄(H₂O)₂]SO₄ from CuSO₄ solution. Calculate theoretical yield.\n\nAnalyze: What are the main sources of yield loss in this preparation? Distinguish between unavoidable and avoidable losses.\n\nEvaluate: How would you verify the purity of the product? Suggest two analytical methods and explain what each reveals.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-practical',
      data: {
        text: 'Core Practical 14 prepares [Cu(NH₃)₄(H₂O)₂]SO₄·H₂O by dissolving CuSO₄·5H₂O, adding ammonia to form Cu(OH)₂ precipitate, redissolving in excess ammonia (deep blue), cooling to crystallise, filtering, washing with water then ethanol, and drying. Yield is typically 50–70% (theoretical = mass of CuSO₄ × 282/250). Key observations: pale blue → blue precipitate → deep blue solution → dark blue crystals. Sources of error: product loss during filtration, solubility in washing, incomplete drying, overheating. Improvements: vacuum filtration, cold ethanol wash, slow cooling, desiccator drying, quantitative transfer, recrystallisation.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-practical-overview',
        prompt: 'Outline the stages of the copper complex preparation practical.'
      },
      {
        id: 'cue-2',
        blockId: 'p-reactions-involved',
        prompt: 'Write the two key equations: (1) precipitation of Cu(OH)₂, (2) formation of [Cu(NH₃)₄]²⁺ complex.'
      },
      {
        id: 'cue-3',
        blockId: 'p-method-part-2',
        prompt: 'Describe what happens when ammonia is added to the copper sulfate solution.'
      },
      {
        id: 'cue-4',
        blockId: 'p-yield-formula',
        prompt: 'Calculate percentage yield given mass of CuSO₄·5H₂O and mass of product obtained.'
      },
      {
        id: 'cue-5',
        blockId: 'p-improvements-list',
        prompt: 'List three improvements to increase yield in this practical.'
      }
    ],
    summaryText: 'Prepare [Cu(NH₃)₄(H₂O)₂]SO₄·H₂O: dissolve CuSO₄·5H₂O, add NH₃ (forms blue Cu(OH)₂ precipitate), add excess NH₃ (deep blue solution), heat to 50°C, cool slowly, refrigerate, filter, wash with cold water + ethanol, dry. Yield = (actual mass ÷ theoretical mass) × 100%; theoretical = (mass CuSO₄ × 282) ÷ 250. Typical yield 50–70%. Sources of error: filtration/washing losses, incomplete drying, overheating. Improvements: vacuum filtration, cold ethanol wash, slow cooling, desiccator drying.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 14: Complex Ion Synthesis',
      detail: 'This practical demonstrates coordination chemistry, colour changes from ligand field effects (pale blue water → deep blue ammonia), equilibrium between soluble and insoluble forms, and quantitative techniques (yield calculation).',
      year: '2023',
      source: 'A-Level Chemistry Core Practicals',
      tags: ['practical-14', 'complex-synthesis', 'copper', 'ammonia', 'yield']
    }
  ]
};
