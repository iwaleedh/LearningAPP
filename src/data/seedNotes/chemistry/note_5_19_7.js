export const note_chemistry_5_19_7 = {
  blocks: [
    {
      id: 'obj-unknown-analysis',
      type: 'objective',
      data: {
        text: 'Describe Core Practical 15: identification of unknown organic compounds using functional group tests; recognise amines, amides, amino acids, and carboxylic acids; perform and interpret litmus, HCl, ninhydrin, and Na₂CO₃ tests; write ionic equations'
      }
    },
    {
      id: 'h-practical-overview',
      type: 'heading',
      data: { text: 'Core Practical 15: Unknown Organic Analysis', level: 2 }
    },
    {
      id: 'p-overview-1',
      type: 'paragraph',
      data: {
        text: 'This practical involves identifying unknown organic compounds by performing specific functional group tests. You will be given an unknown solid or liquid and must determine which functional groups are present (amine, amide, amino acid, carboxylic acid, etc.). Each test produces a characteristic result (colour change, gas evolution, precipitate formation) that indicates the presence of a functional group.'
      }
    },
    {
      id: 'p-overview-2',
      type: 'paragraph',
      data: {
        text: 'The four main tests are: (1) Litmus test to detect basic character (amines). (2) HCl test to form salt and observe solubility changes. (3) Ninhydrin test to detect amino acids (and amines). (4) Na₂CO₃ test to detect carboxylic acids (CO₂ evolution). By combining the results of these tests, you can identify the unknown compound.'
      }
    },
    {
      id: 'h-test-1-litmus',
      type: 'heading',
      data: { text: 'Test 1: Litmus Test (Detection of Amines)', level: 2 }
    },
    {
      id: 'p-litmus-1',
      type: 'paragraph',
      data: {
        text: 'Amines are basic due to the lone pair on nitrogen. A litmus test detects this basicity. Add a few drops of the unknown solution to moist red litmus paper. If the unknown is an amine, the litmus will turn blue, indicating basic pH.'
      }
    },
    {
      id: 'eq-litmus-reaction',
      type: 'equation',
      data: {
        html: 'Unknown amine + moist red litmus → blue litmus<br />Indicates: −NH₂ present (amine group); basic due to lone pair on N'
      }
    },
    {
      id: 'p-litmus-2',
      type: 'paragraph',
      data: {
        text: 'This test is quick and simple but not definitive on its own. Amides do not test basic on litmus because the lone pair on nitrogen is involved in the C=O bond and is not available to accept protons. Amino acids form zwitterions and may test weakly basic depending on the side chain. A positive litmus test suggests an amine, but confirm with other tests.'
      }
    },
    {
      id: 'callout-litmus-caution',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Litmus Test Interpretation',
        text: 'Red litmus → blue: amine (RNH₂ or R₂NH). Neutral or no colour change: not a simple amine (could be amide, amino acid, carboxylic acid). Amides and amino acids do not turn litmus blue.'
      }
    },
    {
      id: 'h-test-2-hcl',
      type: 'heading',
      data: { text: 'Test 2: HCl Test (Salt Formation)', level: 2 }
    },
    {
      id: 'p-hcl-1',
      type: 'paragraph',
      data: {
        text: 'Add dilute hydrochloric acid (HCl) to the unknown solid or liquid. Amines will dissolve or form a salt, showing a change in solubility or appearance. If the unknown is a water-insoluble oil or liquid, adding HCl may cause it to dissolve (forming a salt). If the unknown is already soluble in water, adding HCl may cause a precipitate (if the salt is less soluble than the free base).'
      }
    },
    {
      id: 'eq-hcl-amine',
      type: 'equation',
      data: {
        html: 'RNH₂ (oily liquid) + HCl (dilute) → RNH₃⁺Cl⁻ (soluble salt)<br />Observable change: oily layer disappears or dissolves into aqueous layer'
      }
    },
    {
      id: 'p-hcl-2',
      type: 'paragraph',
      data: {
        text: 'For amides, adding HCl does not typically cause dissolution (amides are not basic at the N due to C=O delocalisation). For carboxylic acids, adding HCl does not cause a dramatic change (the acid is already protonated). For amino acids, the zwitterion may show pH-dependent solubility changes.'
      }
    },
    {
      id: 'h-test-3-ninhydrin',
      type: 'heading',
      data: { text: 'Test 3: Ninhydrin Test (Detection of Amino Acids and Amines)', level: 2 }
    },
    {
      id: 'p-ninhydrin-1',
      type: 'paragraph',
      data: {
        text: 'Ninhydrin (triketohydrindene hydrate) is a specific reagent that reacts with amino acids to produce a blue-purple colour (called Ruhemann\'s purple). This is a classic test for amino acids. The reaction involves the amino group (−NH₂) of the amino acid and the carbonyl groups of ninhydrin.'
      }
    },
    {
      id: 'eq-ninhydrin',
      type: 'equation',
      data: {
        latex: 'Amino acid + ninhydrin (heat) → Ruhemann\'s purple (blue-purple colour)<br />The aldehyde/ketone groups in ninhydrin oxidise the amino acid, producing coloured product'
      }
    },
    {
      id: 'p-ninhydrin-2',
      type: 'paragraph',
      data: {
        text: 'Procedure: Add a solution of ninhydrin in ethanol or acetone to the unknown. Heat gently (on a hot water bath, 50−100°C) for 1−2 minutes. If the unknown is an amino acid, a blue or purple colour appears. The intensity of the colour depends on the concentration and the specific amino acid.'
      }
    },
    {
      id: 'p-ninhydrin-3',
      type: 'paragraph',
      data: {
        text: 'Note: Some primary amines also give a colour with ninhydrin, but typically a yellow colour rather than blue. Amino acids are more reliable and produce the characteristic Ruhemann\'s purple. Amides do not react with ninhydrin (the N is not available). Secondary amines may also give weak colouration.'
      }
    },
    {
      id: 'callout-ninhydrin-use',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ninhydrin Test Interpretation',
        text: 'Blue/purple colour: amino acid (H₂N−CHR−COOH). Yellow colour: may indicate primary amine. No colour: not an amino acid or amine with ninhydrin-reactive −NH₂. Use heating to enhance colour development.'
      }
    },
    {
      id: 'h-test-4-sodium-carbonate',
      type: 'heading',
      data: { text: 'Test 4: Sodium Carbonate Test (Detection of Carboxylic Acids)', level: 2 }
    },
    {
      id: 'p-sodium-carb-1',
      type: 'paragraph',
      data: {
        text: 'Carboxylic acids react with sodium carbonate (Na₂CO₃) to produce carbon dioxide gas (CO₂) and a carboxylate salt. CO₂ gas evolves as vigorous effervescence (bubbling) and can be detected by the "pop" sound when a burning splint is held above the reaction mixture.'
      }
    },
    {
      id: 'eq-sodium-carb',
      type: 'equation',
      data: {
        html: '2 RCOOH + Na₂CO₃ → 2 RCOONa + H₂O + CO₂↑<br />(Effervescence, CO₂ gas evolution)'
      }
    },
    {
      id: 'p-sodium-carb-2',
      type: 'paragraph',
      data: {
        text: 'Procedure: Add solid sodium carbonate to the unknown (or add the unknown to a Na₂CO₃ solution). If a carboxylic acid is present, vigorous bubbling occurs immediately. Collect the gas above the solution and test with a burning splint. CO₂ extinguishes the flame with a "pop" sound, confirming carboxylic acid.'
      }
    },
    {
      id: 'p-sodium-carb-3',
      type: 'paragraph',
      data: {
        text: 'Amines, amides, and amino acids do not react with Na₂CO₃ under these conditions. Amines are bases and do not have an acidic −COOH group. Amides lack a −COOH. Amino acids have a −COO⁻ in their zwitterion form at neutral pH, but the acid is not strong enough to react vigorously with Na₂CO₃.'
      }
    },
    {      id: 'h-test-5-naoh',
      type: 'heading',
      data: { text: 'Test 5: NaOH and Heat (Detection of Amides)', level: 2 }
    },
    {
      id: 'p-test-5-desc',
      type: 'paragraph',
      data: {
        text: 'Boil a small amount of the sample with sodium hydroxide (NaOH) solution. Hold a piece of damp red litmus paper near the mouth of the boiling tube. If simple amides are present, alkaline hydrolysis will occur, releasing ammonia gas (NH₃). The pungent gas turns the red litmus paper blue. Note: Ammonium salts naturally give off NH₃ when mixed with NaOH in the cold, whereas amides require heating.'
      }
    },
    {
      id: 'eq-amide-hydrolysis-test',
      type: 'equation',
      data: {
        html: 'RCONH₂ + NaOH &rarr; RCOONa + NH₃(g) <br />(Requires heat)'
      }
    },
    {      id: 'h-interpretation-table',
      type: 'heading',
      data: { text: 'Summary: Test Interpretation and Identification', level: 2 }
    },
    {
      id: 'table-tests',
      type: 'comparisonTable',
      data: {
        headers: ['Functional Group', 'Litmus', 'HCl (solubility)', 'Ninhydrin', 'Na₂CO₃', 'NaOH (heat)'],
        rows: [
          ['Amine (RNH₂)', 'Blue (basic)', 'Dissolves if oily', 'Yellow/weak colour', 'No reaction', '—'],
          ['Amide (RCONH₂)', 'No change', 'No change', 'No colour', 'No reaction', 'NH₃ gas released (turns damp red litmus blue)'],
          ['Amino acid (H₂N−CHR−COOH)', 'Weakly blue', 'pH-dependent', 'Blue/purple (Ruhemann\'s)', 'No vigorous reaction', '—'],
          ['Carboxylic acid (RCOOH)', 'No change', 'No change', 'No colour', 'Effervescence, CO₂ gas', '—']
        ],
        caption: 'Functional Group Test Results'
      }
    },
    {
      id: 'h-working-notes',
      type: 'heading',
      data: { text: 'Practical Notes and Safety', level: 2 }
    },
    {
      id: 'p-practical-notes',
      type: 'paragraph',
      data: {
        text: 'Always record observations carefully: colour changes, smells, gas evolution, heat generation, and any precipitate formation. Work in a fume hood if heating organic compounds or using ninhydrin (which is toxic). Wear gloves and safety glasses. Use a small amount of unknown (a few mg to a few mL) to avoid waste and hazard. If unsure about a test result, repeat it or combine tests for confirmation. A positive identification requires consistency across multiple tests.'
      }
    },
    {
      id: 'checklist-practical',
      type: 'checklist',
      data: {
        items: [
          { text: 'Litmus test: red → blue indicates amine (basic)', checked: false },
          { text: 'HCl test: oily liquid dissolves indicates amine forming salt', checked: false },
          { text: 'Ninhydrin test: blue/purple colour indicates amino acid', checked: false },
          { text: 'Na₂CO₃ test: effervescence and CO₂ indicates carboxylic acid', checked: false },
          { text: 'Write ionic equations for each positive test', checked: false }
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
        text: 'Understand: Core Practical 15 uses functional group tests to identify unknowns. Key tests: Brady\'s reagent (C=O), Tollens\' (aldehyde), FeCl₃ (phenol), ninhydrin (amino acid).\n\nApply: An unknown gives an orange precipitate with Brady\'s but no silver mirror with Tollens\'. Identify the functional group.\n\nAnalyze: Why must you test for multiple functional groups before identifying an unknown compound?\n\nEvaluate: Chemical tests give qualitative information. Compare with spectroscopic methods (IR, NMR, MS) for reliability and speed.'
      },
      terms: []
    },
    {
      id: 'summary-practical',
      type: 'summary',
      data: {
        text: 'Core Practical 15 identifies unknown organic compounds by functional group tests. Litmus test (red → blue) detects amines. HCl test shows amine salts dissolving. Ninhydrin test (blue/purple colour, especially with heating) is specific for amino acids. Na₂CO₃ test (vigorous effervescence, CO₂ gas with "pop") detects carboxylic acids. Amides do not test positive in any of these tests (nitrogen is not basic due to C=O). By combining test results, you identify the functional groups and hence the compound class. Always write ionic equations for chemical reactions observed.'
      }
    },
    {
      id: 'svg-functional-group-tests',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 430" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">ORGANIC FUNCTIONAL GROUP IDENTIFICATION TESTS</text><!-- Table header --><rect x="10" y="32" width="680" height="28" rx="6" fill="rgba(99,102,241,0.3)" stroke="#818cf8" stroke-width="1.5"/><text x="90" y="49" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">Compound Class</text><text x="250" y="49" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">Test / Reagent</text><text x="440" y="49" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">Observation (positive)</text><text x="625" y="49" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">Equation / Note</text><!-- Amine row --><rect x="10" y="60" width="680" height="52" rx="0" fill="rgba(52,211,153,0.12)"/><text x="90" y="80" text-anchor="middle" font-size="10" fill="#34d399" font-weight="700">AMINE (RNH₂)</text><text x="90" y="96" text-anchor="middle" font-size="8.5" fill="#065f46">primary amine</text><text x="250" y="78" text-anchor="middle" font-size="9" fill="#1e293b">Damp red litmus paper</text><text x="440" y="78" text-anchor="middle" font-size="9" fill="#34d399" font-weight="800">Litmus turns BLUE</text><text x="440" y="93" text-anchor="middle" font-size="8.5" fill="#065f46">Fishy smell of NH₂ groups</text><text x="625" y="78" text-anchor="middle" font-size="8.5" fill="#065f46">RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻</text><text x="625" y="93" text-anchor="middle" font-size="8.5" fill="#065f46">Basic: lone pair on N donates</text><!-- Amine + HCl --><rect x="10" y="112" width="680" height="52" rx="0" fill="rgba(52,211,153,0.06)"/><text x="90" y="132" text-anchor="middle" font-size="10" fill="#34d399" font-weight="700">AMINE (RNH₂)</text><text x="90" y="148" text-anchor="middle" font-size="8.5" fill="#065f46">vs amide (RCONH₂)</text><text x="250" y="138" text-anchor="middle" font-size="9" fill="#1e293b">Conc. HCl fumes / gas</text><text x="440" y="132" text-anchor="middle" font-size="9" fill="#34d399" font-weight="800">WHITE SMOKE / misty fumes</text><text x="440" y="148" text-anchor="middle" font-size="8.5" fill="#065f46">Ammonium salt forms immediately</text><text x="625" y="132" text-anchor="middle" font-size="8.5" fill="#065f46">RNH₂ + HCl → RNH₃⁺Cl⁻</text><text x="625" y="148" text-anchor="middle" font-size="8.5" fill="#78350f">Amides: NO smoke (N not basic)</text><!-- Amino acid row --><rect x="10" y="164" width="680" height="52" rx="0" fill="rgba(96,165,250,0.12)"/><text x="90" y="184" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="700">AMINO ACID</text><text x="90" y="200" text-anchor="middle" font-size="8.5" fill="#1e3a8a">e.g. glycine, alanine</text><text x="250" y="184" text-anchor="middle" font-size="9" fill="#1e293b">Ninhydrin solution + heat</text><text x="440" y="184" text-anchor="middle" font-size="9" fill="#60a5fa" font-weight="800">BLUE / PURPLE colour</text><text x="440" y="200" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Proline gives yellow/orange</text><text x="625" y="184" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Forms Ruhemann purple complex</text><text x="625" y="200" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Used in chromatography ID</text><!-- Carboxylic acid --><rect x="10" y="216" width="680" height="52" rx="0" fill="rgba(239,68,68,0.1)"/><text x="90" y="236" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="700">CARBOXYLIC ACID</text><text x="90" y="252" text-anchor="middle" font-size="8.5" fill="#7f1d1d">RCOOH</text><text x="250" y="236" text-anchor="middle" font-size="9" fill="#1e293b">Na₂CO₃ solution</text><text x="440" y="236" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="800">BUBBLES / effervescence</text><text x="440" y="252" text-anchor="middle" font-size="8.5" fill="#7f1d1d">CO₂ gas (limewater test)</text><text x="625" y="236" text-anchor="middle" font-size="8.5" fill="#7f1d1d">2RCOOH + Na₂CO₃ → 2RCOONa + H₂O + CO₂</text><!-- Aldehyde --><rect x="10" y="268" width="680" height="52" rx="0" fill="rgba(251,146,60,0.1)"/><text x="90" y="288" text-anchor="middle" font-size="10" fill="#fb923c" font-weight="700">ALDEHYDE</text><text x="90" y="304" text-anchor="middle" font-size="8.5" fill="#532407">but NOT ketone</text><text x="250" y="288" text-anchor="middle" font-size="9" fill="#1e293b">Tollens reagent (warm), or</text><text x="250" y="304" text-anchor="middle" font-size="9" fill="#1e293b">Fehling solution (heat)</text><text x="440" y="288" text-anchor="middle" font-size="9" fill="#fb923c" font-weight="800">Silver mirror (Tollens)</text><text x="440" y="304" text-anchor="middle" font-size="8.5" fill="#532407">OR brick-red ppt (Fehling)</text><text x="625" y="288" text-anchor="middle" font-size="8.5" fill="#532407">RCHO + 2[Ag(NH₃)₂]⁺ + 2OH⁻ →</text><text x="625" y="304" text-anchor="middle" font-size="8.5" fill="#532407">RCOO⁻ + 2Ag + 4NH₃ + H₂O</text><!-- Amino acid zwitterion --><rect x="10" y="330" width="680" height="90" rx="10" fill="rgba(99,102,241,0.12)" stroke="#818cf8" stroke-width="1.5"/><text x="350" y="350" text-anchor="middle" font-size="10" fill="#2d2d72" font-weight="700">AMINO ACID — ZWITTERION CONCEPT</text><text x="30" y="368" font-size="9" fill="#2d2d72">At isoelectric point (pI): amino acid exists as +H₃N−CHR−COO⁻ (no net charge — zwitterion)</text><text x="30" y="383" font-size="9" fill="#2d2d72">In acid (low pH): +H₃N−CHR−COOH (NH₂ protonated, overall positive — migrates to cathode)</text><text x="30" y="398" font-size="9" fill="#2d2d72">In base (high pH): H₂N−CHR−COO⁻ (COOH deprotonated, overall negative — migrates to anode)</text><text x="30" y="413" font-size="9" fill="#2d2d72">Electrophoresis separates amino acids by pI. Chromatography: Rf value + ninhydrin used for identification</text></svg>',
        caption: 'Functional Group Identification Tests — amine vs amide (litmus and HCl smoke), amino acids (ninhydrin → purple), carboxylic acid (Na₂CO₃ → CO₂ bubbles), aldehyde (Tollens → silver mirror). Cross-reference tests to determine compound class with certainty.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Ninhydrin Test: Blue/Purple = Amino Acid",
        text: "Ninhydrin test specifically detects amino acids (free \u2212NH\u2082 and \u2212COOH groups intact). Gives blue/purple (Ruhemann's purple). Litmus test distinguishes: amines turn blue litmus red; amides/amino acids do NOT. Combination: blue litmus AND ninhydrin purple \u2192 definitely amino acid; blue litmus only \u2192 amine."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-litmus-reaction', prompt: 'Describe the litmus test for amines and explain why it works.' },
      { id: 'cue-2', blockId: 'eq-hcl-amine', prompt: 'Write the equation for an amine reacting with HCl and explain the observable change.' },
      { id: 'cue-3', blockId: 'eq-ninhydrin', prompt: 'Describe the ninhydrin test and what colour indicates an amino acid.' },
      { id: 'cue-4', blockId: 'eq-sodium-carb', prompt: 'Write the equation for carboxylic acid reacting with Na₂CO₃ and describe the observation.' }
    ],
    summaryText: 'Litmus: amine turns red litmus blue (basic). HCl: amine (oil) dissolves forming salt. Ninhydrin: amino acid gives blue/purple colour (Ruhemann\'s purple). Na₂CO₃: carboxylic acid gives effervescence, CO₂ gas (pop test). Amides do not test positive (N not basic). Use combination of tests to identify unknowns.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 15: Unknown organic compound analysis',
      detail: 'Functional group test procedures, observations and interpretations, ionic equations, safety precautions, identification of amines, amides, amino acids, and carboxylic acids',
      year: '2023',
      source: 'chemguide.co.uk — Core Practical 15 unknown organic analysis',
      tags: ['practical', 'functional group', 'test', 'amine', 'amino acid', 'carboxylic acid', 'identification']
    }
  ]
};
