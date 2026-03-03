export const note_chemistry_5_16_6 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand redox titrations using KMnO₄, K₂Cr₂O₇, and thiosulfate/iodine systems, including colour changes, half-equations, indicators, and calculations.' } },
    { type: 'heading', id: 'h-intro', data: { text: 'Redox Titrations: Purpose and Principle', level: 2 } },
    { type: 'paragraph', id: 'p-intro', data: { text: 'A redox titration determines the concentration of a reducing or oxidising agent. A solution of a redox-active substance (titrant) is added to a measured volume of analyte until the reaction is complete. The volume of titrant is recorded, and the analyte concentration is calculated from stoichiometry.' } },
    { type: 'heading', id: 'h-permanganate', data: { text: 'Permanganate Titrations (KMnO₄)', level: 2 } },
    { type: 'paragraph', id: 'p-perm', data: { text: 'Permanganate (MnO₄⁻, purple) is reduced to Mn²⁺ (colourless) in acidified solution. Half-equation: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (E° = +1.51 V). The colour change is dramatic and serves as indicator (self-indicating).' } },
    { type: 'equation', id: 'eq-permanganate', data: { html: 'MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O', caption: 'Permanganate reduction in acidic solution' } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'KMnO₄ Titration of Fe²⁺', text: '25.0 cm³ FeSO₄ titrated with 0.0200 mol dm⁻³ KMnO₄; 20.0 cm³ used. Half-equation: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O (ratio 5:1). n(MnO₄⁻) = 0.0200 × 0.0200 = 0.0004 mol. n(Fe²⁺) = 5 × 0.0004 = 0.0020 mol. c(Fe²⁺) = 0.0020 / 0.0250 = 0.080 mol dm⁻³.' } },
    { type: 'heading', id: 'h-thiosulfate', data: { text: 'Thiosulfate/Iodine Titrations', level: 2 } },
    { type: 'paragraph', id: 'p-thio', data: { text: 'Iodine reacts with thiosulfate: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ (ratio 1:2). Iodine (brown) is reduced to I⁻ (colourless). Endpoint detected using starch indicator (blue-black with I₂, colourless when I₂ reduced).' } },
    { type: 'equation', id: 'eq-iodine', data: { html: 'I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>', caption: 'Iodine-thiosulfate redox reaction' } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Starch Indicator', text: 'Starch forms deep blue-black complex with I₂. Add starch near endpoint (not at beginning). At endpoint, blue-black colour disappears sharply when all I₂ reduced.' } },
    { type: 'callout', id: 'callout-worked-2', data: { style: 'worked', title: 'Iodine Titration', text: '25.0 cm³ sample containing I₂, titrated with 0.100 mol dm⁻³ Na₂S₂O₃; 18.50 cm³ used. n(S₂O₃²⁻) = 0.100 × 0.01850 = 0.001850 mol. n(I₂) = 0.001850 / 2 = 0.000925 mol. c(I₂) = 0.000925 / 0.0250 = 0.0370 mol dm⁻³.' } },
    { type: 'comparisonTable', id: 'table-titrants', data: { headers: ['Titrant', 'Colour (Oxidised)', 'Colour (Reduced)', 'Indicator', 'E° (V)'], rows: [ ['KMnO₄', 'Purple', 'Colourless', 'Self-indicating', '+1.51'], ['K₂Cr₂O₇', 'Orange', 'Green', 'Diphenylamine', '+1.33'], ['I₂', 'Brown', 'Colourless', 'Starch', '+0.54'] ], caption: 'Common redox titrants' } },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I know the permanganate half-equation', checked: false }, { text: 'I understand permanganate is self-indicating', checked: false }, { text: 'I can write the iodine-thiosulfate equation', checked: false }, { text: 'I understand starch indicator colour change', checked: false }, { text: 'I can calculate analyte concentration from titration data', checked: false } ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Redox titrations use electron transfer instead of proton transfer. KMnO₄ is self-indicating (purple → colourless); thiosulfate/iodine titrations use starch indicator.\n\nApply: 25.0 cm³ of Fe²⁺ solution requires 23.5 cm³ of 0.02 mol dm⁻³ KMnO₄. Calculate [Fe²⁺].\n\nAnalyze: Why must KMnO₄ titrations be done in acidic conditions? What happens in alkaline?\n\nEvaluate: Compare the accuracy of permanganate vs dichromate titrations. Which is preferred and why?'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: 'KMnO₄: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (purple → colourless, self-indicating). I₂/S₂O₃²⁻: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ (brown → colourless, starch indicator). Calculate analyte concentration from stoichiometry and titrant volume.' } },
  ],
  recall: { enabled: true, cues: [ { id: 'cue-1', blockId: 'eq-permanganate', prompt: 'Write the permanganate reduction half-equation.' }, { id: 'cue-2', blockId: 'callout-key-1', prompt: 'Why is permanganate self-indicating?' }, { id: 'cue-3', blockId: 'eq-iodine', prompt: 'Write the iodine-thiosulfate equation.' }, { id: 'cue-4', blockId: 'callout-worked-1', prompt: 'If 20.0 cm³ of 0.0200 mol dm⁻³ KMnO₄ reacts with 25.0 cm³ Fe²⁺, calculate [Fe²⁺].' }, { id: 'cue-5', blockId: 'callout-worked-2', prompt: 'If 18.50 cm³ of 0.100 mol dm⁻³ S₂O₃²⁻ reacts with 25.0 cm³ I₂, calculate [I₂].' } ], summaryText: 'KMnO₄: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. I₂/S₂O₃²⁻: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻. Calculate analyte concentration from stoichiometry.', ready: false },
  evidence: [ { id: 'ev-1', title: 'Redox titrations with permanganate and thiosulfate', detail: 'Half-equations, colour changes, indicators, stoichiometry, calculations.', year: '2024', source: 'chemguide.co.uk', tags: ['redox titrations', 'KMnO₄', 'thiosulfate', 'iodine'] } ],
};
