/**
 * WBI15 — Topic 7.17: Core Practical 17 - Kidney Tubule Osmolarity
 * Dialysis tubing, selective permeability, osmosis, Biuret test, glucose test strips
 */

export const note_biology_5_7_17 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand how to model kidney tubule function using dialysis tubing (Visking tubing), investigate osmosis and selective permeability, and measure changes in mass/osmolarity.',
      },
    },
    {
      id: 'h-practical',
      type: 'heading',
      data: { text: 'Core Practical 17: Kidney Tubule Osmolarity & Selective Permeability', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'This practical uses dialysis tubing (Visking tubing) to model kidney tubule filtrate reabsorption. Dialysis tubing is a semi-permeable membrane that allows water and small molecules to pass but excludes large molecules (proteins) and cells. By comparing initial and final mass/osmolarity inside and outside the tubing, osmosis and selective reabsorption can be demonstrated.',
      },
    },
    {
      id: 'h-visking',
      type: 'heading',
      data: { text: 'Dialysis Tubing: A Model for Kidney Membranes', level: 3 },
    },
    {
      id: 'p-visking-overview',
      type: 'paragraph',
      data: {
        text: 'Visking tubing (dialysis tubing, cellophane membrane) has pores of ~1 nm, allowing molecules <5 kDa to pass (water, glucose, ions, urea) but retaining larger molecules (proteins, dextran, starch). This mimics the basement membrane and epithelial cells of the kidney filtration barrier and reabsorption processes.',
      },
    },
    {
      id: 'h-experiment1',
      type: 'heading',
      data: { text: 'Experiment 1: Osmosis Across Dialysis Tubing', level: 3 },
    },
    {
      id: 'list-exp1-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Fill dialysis tubing with: (a) distilled water (control); (b) 0.3 M sucrose (hypertonic); (c) 0.9% NaCl (isotonic)',
          'Tie ends with thread.',
          'Blot exterior with tissue.',
          'Weigh initial mass and record osmolarity (osmometer reading or calculated).',
          'Immerse entire tube in distilled water bath.',
          'At intervals (30 min, 60 min, 120 min), remove, blot, reweigh, and remeasure osmolarity.',
          'Record mass change (Δm) and osmolarity change.',
          'Plot mass vs time for each treatment.',
        ],
      },
    },
    {
      id: 'p-exp1-results',
      type: 'paragraph',
      data: {
        text: 'Expected results: (a) Distilled water inside: mass increases slightly (net water in); osmolarity decreases slightly (dilution). (b) Hypertonic sucrose inside: large mass increase (water enters by osmosis); osmolarity decreases (dilution). (c) Isotonic NaCl inside: little mass change (no net osmosis). The degree of mass change correlates with osmotic gradient (Δosm).',
      },
    },
    {
      id: 'h-experiment2',
      type: 'heading',
      data: { text: 'Experiment 2: Selective Permeability with Biuret & Glucose Tests', level: 3 },
    },
    {
      id: 'p-exp2-overview',
      type: 'paragraph',
      data: {
        text: 'Fill dialysis tubing with a solution containing: glucose (5 mmol/L), protein (2% bovine serum albumin, BSA), and salt. Immerse in distilled water. At intervals, test filtrate (external solution) for presence of glucose and protein.',
      },
    },
    {
      id: 'list-exp2-tests',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Glucose test: use glucose test strips (e.g., Diastix) or Benedict\'s reagent. Positive = reducing sugar present (glucose diffused out)',
          'Protein test: use Biuret reagent. Mix sample + Biuret solution; purple colour indicates protein. Negative = proteins retained (did not diffuse)',
        ],
      },
    },
    {
      id: 'p-exp2-results',
      type: 'paragraph',
      data: {
        text: 'Expected results: External solution (filtrate) tests positive for glucose (small molecule, <5 kDa, passes membrane) but negative for protein (large molecule, >50 kDa, excluded by membrane). This mimics glomerular filtration: glucose and ions are filtered but proteins are retained in blood.',
      },
    },
    {
      id: 'h-experiment3',
      type: 'heading',
      data: { text: 'Experiment 3: Osmosis in Potato Cylinders', level: 3 },
    },
    {
      id: 'p-exp3-overview',
      type: 'paragraph',
      data: {
        text: 'An alternative experiment: place potato cylinders in NaCl solutions of different concentrations (0%, 2%, 5%, 10%) for 30 minutes, then measure mass and cell turgor visually.',
      },
    },
    {
      id: 'p-exp3-method',
      type: 'paragraph',
      data: {
        text: 'Cut potato cylinders of equal size. Blot and weigh initial mass. Immerse in beakers of different NaCl concentrations. After 30 minutes, remove, blot, and reweigh. Calculate % mass change. Plot % mass change vs external solution osmolarity. Also visually observe: hypertonic (plasmolysis), isotonic (turgid), hypotonic (over-turgid/burst).',
      },
    },
    {
      id: 'p-exp3-results',
      type: 'paragraph',
      data: {
        text: 'Expected results: Hypotonic (0% NaCl) → mass increases (water in) → cells turgid. Hypertonic (5–10% NaCl) → mass decreases (water out) → cells plasmolysed. Isotonic → mass unchanged → cells turgid but not over-turgid. Plotting % mass change vs osmolarity gives a curve; intersection with 0% change indicates isotonic point.',
      },
    },
    {
      id: 'h-water-potential',
      type: 'heading',
      data: { text: 'Calculating Water Potential from Osmosis Data', level: 3 },
    },
    {
      id: 'p-water-potential',
      type: 'paragraph',
      data: {
        text: 'Water potential (Ψ) of a solution = solute potential (Ψs) + pressure potential (Ψp). Ψs = −iCRT, where i is van \'t Hoff factor, C is molar concentration, R is gas constant (0.083 L·bar·mol⁻¹·K⁻¹), T is absolute temperature. At isotonic point (no net osmosis), internal and external Ψ are equal.',
      },
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Sources of Error & Improvements', level: 3 },
    },
    {
      id: 'table-errors',
      type: 'comparisonTable',
      data: {
        headers: ['Error', 'Effect', 'Improvement'],
        rows: [
          [
            'Incomplete blotting',
            'External solution adheres to tubing; mass change exaggerated',
            'Blot thoroughly with tissue; standardise blotting time',
          ],
          [
            'Tubing ruptures',
            'Internal solution leaks; invalid data',
            'Handle gently; check tubing before use',
          ],
          [
            'Temperature changes',
            'Osmolarity changes; unpredictable osmosis',
            'Use temperature-controlled water bath; keep constant',
          ],
          [
            'Time intervals inconsistent',
            'Difficult to compare treatments',
            'Use precise timer; measure at standard intervals (e.g., 30, 60, 120 min)',
          ],
          [
            'Test reagents expired or incorrect concentration',
            'Biuret/glucose tests give false results',
            'Check expiry dates; prepare fresh reagents; include positive/negative controls',
          ],
        ],
        caption: 'Sources of error in kidney tubule osmolarity practicals',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Dialysis tubing models kidney filtration: semi-permeable membrane allows water and small molecules (glucose, ions) to pass but excludes proteins and large molecules. Osmosis occurs across membrane when solute concentration differs internally vs externally. Mass change indicates water movement; chemical tests reveal selective permeability.',
        apply: 'Dialysis tubing filled with 1.0 M glucose (300 mOsm/L) is immersed in 0.3 M NaCl (600 mOsm/L). Predict: (a) direction of water movement; (b) osmolarity change inside tubing; (c) mass change direction and magnitude.',
        analyze: 'Why do kidney tubules need to be semi-permeable (like dialysis tubing)? How does selective permeability allow filtration of useful substances whilst retaining proteins?',
        evaluate: 'Compare dialysis tubing model to actual kidney epithelium. What simplifications does the model make? What does it not capture (e.g., active transport)?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe dialysis tubing and its pore size relative to filtration molecules', checked: false },
          { text: 'Explain how osmosis is demonstrated using dialysis tubing', checked: false },
          { text: 'Describe Biuret test and glucose test strip usage', checked: false },
          { text: 'Predict mass and osmolarity changes in hypertonic/isotonic/hypotonic conditions', checked: false },
          { text: 'List three sources of error and describe improvements', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Core Practical 17: Dialysis tubing (semi-permeable, <5 kDa) models kidney filtration. Osmosis: water moves from hypotonic (lower osmolarity) to hypertonic (higher osmolarity); mass increases/decreases accordingly. Selective permeability: glucose diffuses out (small); proteins retained (large). Biuret test (proteins, purple) and glucose test strips detect selective diffusion. Potato cylinder osmosis shows plasmolysis/turgidity.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-visking-overview',
        prompt: 'What is dialysis tubing and how does its pore size relate to filtration molecules?',
      },
      {
        id: 'cue-2',
        blockId: 'p-exp1-results',
        prompt: 'Predict the mass change when dialysis tubing filled with 0.3 M sucrose is immersed in distilled water.',
      },
      {
        id: 'cue-3',
        blockId: 'p-exp2-results',
        prompt: 'Why does glucose diffuse out of dialysis tubing but proteins do not?',
      },
      {
        id: 'cue-4',
        blockId: 'list-exp2-tests',
        prompt: 'Describe the Biuret test and glucose test strip. What do positive results indicate?',
      },
      {
        id: 'cue-5',
        blockId: 'p-exp3-results',
        prompt: 'Describe what happens to potato cells in hypertonic, isotonic, and hypotonic solutions.',
      },
    ],
    summaryText:
      'Dialysis tubing: semi-permeable membrane, pores <5 kDa (passes water, glucose, ions; excludes proteins). Osmosis: hypotonic → water in, mass increases; hypertonic → water out, mass decreases; isotonic → no change. Biuret test (purple = protein, retained); glucose test (positive = glucose, diffused). Potato cylinders: hypertonic (plasmolysed), isotonic (turgid), hypotonic (over-turgid).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Visking tubing development',
      detail: 'Cellophane dialysis membrane widely used for teaching and clinical dialysis',
      year: '1930s onwards',
      source: 'History of biotechnology',
      tags: ['practical'],
    },
  ],
};
