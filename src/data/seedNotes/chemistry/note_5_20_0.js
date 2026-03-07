export const note_chemistry_5_20_0 = {
  blocks: [
    {
      id: 'obj-formula-deduction',
      type: 'objective',
      data: {
        text: 'Deduce empirical and molecular formulas from combustion analysis and mass spectrometry data; calculate degree of unsaturation to determine structural features; identify functional groups using systematic chemical test-tube tests'
      }
    },
    {
      id: 'h-combustion-overview',
      type: 'heading',
      data: { text: 'Combustion Analysis Overview', level: 2 }
    },
    {
      id: 'p-combustion-intro',
      type: 'paragraph',
      data: {
        text: 'Combustion analysis is a classical method for determining the empirical formula of an organic compound. The sample is burned in excess oxygen, and the products (CO₂, H₂O, and sometimes N₂ or SO₂) are absorbed and weighed. By measuring the mass of each product, we can determine the mass of each element present and calculate the empirical formula.'
      }
    },
    {
      id: 'h-combustion-method',
      type: 'heading',
      data: { text: 'Combustion Analysis Method', level: 3 }
    },
    {
      id: 'p-combustion-steps',
      type: 'paragraph',
      data: {
        text: 'The experimental procedure involves heating the organic compound in a tube filled with oxygen. All carbon is converted to CO₂ (absorbed by soda lime or KOH), all hydrogen to H₂O (absorbed by anhydrous CaCl₂ or P₂O₅), and all nitrogen to N₂ (collected or measured). The mass of each product is determined by the increase in mass of the absorbent.'
      }
    },
    {
      id: 'list-combustion-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Weigh the organic sample (typically 0.1–1.0 g)',
          'Burn in excess oxygen at high temperature (850–900°C)',
          'Collect CO₂ in pre-weighed absorbent (NaOH/soda lime)',
          'Collect H₂O in pre-weighed desiccant (CaCl₂ or P₂O₅)',
          'Measure increase in mass of each absorbent',
          'Collect N₂ gas (if nitrogen present) over water',
          'Calculate moles of C, H, N from products',
          'If oxygen not directly measured, calculate by difference'
        ]
      }
    },
    {
      id: 'callout-combustion-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Combustion Analysis Worked Example',
        text: 'A 0.620 g sample of an organic compound containing C, H and O was burned. It produced 1.232 g CO₂ and 0.504 g H₂O. Find the empirical formula.\n\nMoles of C (from CO₂): 1.232 ÷ 44 = 0.0280 mol → mass C = 0.0280 × 12 = 0.336 g\n\nMoles of H (from H₂O): 0.504 ÷ 18 = 0.0280 mol → but H₂O has 2H, so moles H = 0.0280 × 2 = 0.0560 mol → mass H = 0.0560 g\n\nMass of O by difference: 0.620 − 0.336 − 0.0560 = 0.228 g → moles O = 0.228 ÷ 16 = 0.01425 mol\n\nMole ratio C : H : O = 0.0280 : 0.0560 : 0.01425 = 2 : 4 : 1\n\nEmpirical formula: C₂H₄O'
      }
    },
    {
      id: 'h-degree-unsaturation',
      type: 'heading',
      data: { text: 'Degree of Unsaturation', level: 2 }
    },
    {
      id: 'p-degree-intro',
      type: 'paragraph',
      data: {
        text: 'The degree of unsaturation (DoU), also called degree of hydrogen deficiency, is the number of rings and/or double bonds in a molecule. It is calculated from the molecular formula using a simple formula, which helps identify the structural features present (e.g. whether a double bond, triple bond, or benzene ring is present).'
      }
    },
    {
      id: 'eq-dou-formula',
      type: 'equation',
      data: {
        html: 'DoU = <span class="nb-frac"><span class="nb-num">2C + 2 + N − H − X</span><span class="nb-den">2</span></span>',
        caption: 'Degree of unsaturation formula (C = carbon atoms, N = nitrogen atoms, H = hydrogen atoms, X = halogens)'
      }
    },
    {
      id: 'list-dou-interpretation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'DoU = 0: saturated compound (alkane)',
          'DoU = 1: one C=C double bond OR one ring',
          'DoU = 2: two C=C, one C≡C, one benzene ring, or combinations',
          'DoU = 4: benzene ring (counts as 4 DoU)',
          'Add 1 for each ring, 1 for each double bond, 2 for each triple bond'
        ]
      }
    },
    {
      id: 'callout-dou-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Degree of Unsaturation Example',
        text: 'Calculate DoU for acetone (C₃H₆O) and pentyne (C₅H₈).\n\nAcetone: DoU = (2 × 3 + 2 − 6) ÷ 2 = (6 + 2 − 6) ÷ 2 = 2 ÷ 2 = 1 → one C=O double bond ✓\n\nPentyne: DoU = (2 × 5 + 2 − 8) ÷ 2 = (10 + 2 − 8) ÷ 2 = 4 ÷ 2 = 2 → could be triple bond (≡) or two double bonds'
      }
    },
    {
      id: 'h-molar-mass',
      type: 'heading',
      data: { text: 'Molecular Formula from Molar Mass', level: 2 }
    },
    {
      id: 'p-molar-mass-intro',
      type: 'paragraph',
      data: {
        text: 'Once the empirical formula is determined by combustion analysis, the molecular formula can be found if the molar mass (M) is known. Mass spectrometry provides the molar mass from the molecular ion peak (M⁺). The molecular formula is a whole-number multiple of the empirical formula.'
      }
    },
    {
      id: 'eq-molecular-formula',
      type: 'equation',
      data: {
        html: 'n = <span class="nb-frac"><span class="nb-num">M (molar mass)</span><span class="nb-den">M<sub>r</sub> (empirical formula mass)</span></span>',
        caption: 'Calculate the multiplying factor to get molecular formula'
      }
    },
    {
      id: 'callout-molecular-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Molecular Formula Example',
        text: 'A compound has empirical formula CH₂O (Mr = 30) and molar mass M = 60 (from mass spec). Find the molecular formula.\n\nn = 60 ÷ 30 = 2\n\nMolecular formula = (CH₂O) × 2 = C₂H₄O₂ (acetic acid or methyl formate) ✓\n\nCalculate DoU: (2 × 2 + 2 − 4) ÷ 2 = 2 ÷ 2 = 1 → one C=O (or one ring)'
      }
    },
    {
      id: 'callout-complete-example',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Complete Formula Deduction Workflow',
        text: '1. Combustion analysis → mass of products → moles of C, H, O\n2. Find mole ratios and divide by smallest → empirical formula\n3. Calculate Mr of empirical formula\n4. Mass spectrometry → molar mass (M⁺ peak)\n5. n = M ÷ Mr → whole-number multiplier\n6. Molecular formula = empirical formula × n\n7. Calculate DoU from molecular formula\n8. Structure suggestion: DoU indicates unsaturation type'
      }
    },
    {
      id: 'h-functional-group-tests',
      type: 'heading',
      data: { text: 'Identifying Functional Groups by Chemical Tests', level: 2 }
    },
    {
      id: 'p-fg-tests-intro',
      type: 'paragraph',
      data: {
        text: 'Before applying spectroscopy, small-scale test-tube reactions can identify functional groups present in an unknown compound. These tests are used alongside formula deduction to piece together the full structural formula. Each test has a specific positive observation (reagent, result).'
      }
    },
    {
      id: 'table-functional-group-tests',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of functional group test-tube tests (Topics 4–5, 10, 15, 18–19)',
        headers: ['Functional group', 'Reagent(s)', 'Positive observation'],
        rows: [
          ['Alkene (C=C)', 'Bromine water (Br₂ aq)', 'Rapid decolourisation of orange/brown bromine water'],
          ['Haloalkane (C−X)', 'AgNO₃ (aq), warm; after adding ethanol', 'White ppt (Cl), cream ppt (Br), pale yellow ppt (I)'],
          ['Alcohol (−OH)', 'PCl₅ (solid, dry)', 'Steamy white fumes of HCl produced'],
          ['Primary/secondary alcohol', 'Acidified K₂Cr₂O₇ (warm)', 'Orange solution turns GREEN (Cr³⁺ forms)'],
          ['Tertiary alcohol (control)', 'Acidified K₂Cr₂O₇ (warm)', 'No colour change (orange remains — no oxidation)'],
          ['Carbonyl (C=O) — aldehyde or ketone', '2,4-DNPH (Brady\'s reagent)', 'Orange/yellow precipitate forms'],
          ['Aldehyde (R−CHO)', 'Tollens\' reagent (ammoniacal AgNO₃, warm)', 'Silver mirror forms on inner glass surface'],
          ['Aldehyde (R−CHO)', 'Fehling\'s / Benedict\'s solution (warm)', 'Blue→brick red precipitate (Cu₂O)'],
          ['Carboxylic acid (−COOH)', 'Na₂CO₃ (aq) or NaHCO₃', 'Effervescence (CO₂ gas produced)'],
          ['Phenol (−OH on aromatic ring)', 'Bromine water (Br₂ aq)', 'Decolourisation AND white precipitate (tribromophenol)'],
          ['Amide (−CONH−)', 'Warm with NaOH; test gas with damp litmus', 'NH₃ gas produced → blue litmus turns red']
        ]
      }
    },
    {
      id: 'callout-fg-test-strategy',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Systematic Strategy for Functional Group Testing',
        text: '1. Test with Br₂(aq): decolourises → C=C (alkene) or phenol; white ppt → phenol (not just alkene)\n2. Test with 2,4-DNPH: orange ppt → carbonyl (aldehyde or ketone)\n3. If carbonyl present, test with Tollens\' reagent: silver mirror → ALDEHYDE; no mirror → KETONE\n4. Test with Na₂CO₃: effervescence → COOH present\n5. Test with K₂Cr₂O₇/H₂SO₄: orange→green → primary or secondary alcohol (not tertiary)\n6. Test with AgNO₃ (after ethanol): coloured ppt → haloalkane\n\nCombine all test results to build up the structural picture alongside the molecular formula.'
      }
    },
    {
      id: 'checklist-formula-deduction',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can convert mass of combustion products to moles of elements', checked: false },
          { text: 'I can find empirical formula from mole ratios', checked: false },
          { text: 'I know how to use mass spectrometry M⁺ peak', checked: false },
          { text: 'I can apply the molecular formula calculation: n = M ÷ Mr', checked: false },
          { text: 'I can calculate degree of unsaturation correctly', checked: false },
          { text: 'I can interpret DoU to suggest structural features', checked: false }
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
        text: 'Understand: Combustion analysis gives empirical formula; mass spectrometry gives molecular mass (M⁺ peak). Degree of unsaturation (IHD) = (2C + 2 − H + N − halogens)/2.\n\nApply: A compound with molecular formula C₃H₆O has IHD = 1. What structural features could this indicate?\n\nAnalyze: How does the M⁺ pattern distinguish molecules containing Br (isotope pattern) from those without?\n\nEvaluate: Why is high-resolution mass spectrometry more useful than low-resolution for determining molecular formula?'
      },
      terms: []
    },
    {
      id: 'summary-formula',
      type: 'summary',
      data: {
        text: 'Combustion analysis + molar mass → molecular formula. Calculate degree of unsaturation (DoU) to count the number of C=C/C≡C/rings present. DoU = (2C + 2 + N − H − X) / 2. Empirical formula × multiplier (n) = molecular formula.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-combustion-intro',
        prompt: 'What are the three main products of combustion analysis and how are they absorbed?'
      },
      {
        id: 'cue-2',
        blockId: 'eq-dou-formula',
        prompt: 'Write the degree of unsaturation formula and explain what each variable represents.'
      },
      {
        id: 'cue-3',
        blockId: 'eq-molecular-formula',
        prompt: 'How do you calculate the multiplier n to convert empirical formula to molecular formula?'
      },
      {
        id: 'cue-4',
        blockId: 'callout-molecular-worked',
        prompt: 'If empirical formula is CH₂O (Mr=30) and molar mass is 60, what is the molecular formula and its DoU?'
      },
      {
        id: 'cue-5',
        blockId: 'list-dou-interpretation',
        prompt: 'What does DoU = 1 mean, and what does DoU = 4 usually indicate?'
      }
    ],
    summaryText: 'Combustion analysis gives empirical formula from elemental composition. Mass spectrometry provides molar mass (M⁺). Molecular formula = empirical formula × n, where n = M / Mr. Degree of unsaturation = (2C + 2 + N − H − X) / 2.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Combustion Analysis in Organic Chemistry',
      detail: 'Classical method for determining empirical formula; still used for verification before other spectroscopic methods.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH15)',
      tags: ['combustion', 'empirical', 'analysis']
    }
  ]
};
