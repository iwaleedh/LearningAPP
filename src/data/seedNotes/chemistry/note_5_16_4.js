export const note_chemistry_5_16_4 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Calculate E°cell from electrode potentials, identify anode and cathode, and work through multiple examples with different metal pairs.' } },
    { type: 'heading', id: 'h-formula', data: { text: 'Cell EMF Formula', level: 2 } },
    { type: 'equation', id: 'eq-emf', data: { html: 'E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>', caption: 'Standard cell emf' } },
    { type: 'paragraph', id: 'p-intro', data: { text: 'E°cathode is the standard potential of reduction (more positive electrode). E°anode is the standard potential of oxidation (more negative electrode). Always subtract more negative from more positive, giving positive E°cell for spontaneous reactions.' } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Key Rule: More Positive Minus More Negative', text: 'The electrode with higher (more positive) E° value is cathode (reduction). The electrode with lower (more negative) E° value is anode (oxidation). E°cell = E°(more positive) − E°(more negative) = always positive for spontaneous reaction.' } },
    { type: 'heading', id: 'h-examples', data: { text: 'Worked Examples', level: 2 } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'Zn/Cu Cell (E°Zn = −0.76 V, E°Cu = +0.34 V)', text: 'Cu is cathode (more positive). Zn is anode (more negative). E°cell = (+0.34) − (−0.76) = +1.10 V. Reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s).' } },
    { type: 'callout', id: 'callout-worked-2', data: { style: 'worked', title: 'Fe/Ag Cell (E°Fe = −0.44 V, E°Ag = +0.80 V)', text: 'Ag is cathode. Fe is anode. E°cell = (+0.80) − (−0.44) = +1.24 V. Reaction: Fe(s) + 2Ag⁺(aq) → Fe²⁺(aq) + 2Ag(s).' } },
    { type: 'callout', id: 'callout-worked-3', data: { style: 'worked', title: 'Zn/Ag Cell (E°Zn = −0.76 V, E°Ag = +0.80 V)', text: 'Ag is cathode. Zn is anode. E°cell = (+0.80) − (−0.76) = +1.56 V. Most positive of the three examples, most spontaneous.' } },
    { type: 'comparisonTable', id: 'table-potentials', data: { headers: ['Half-Reaction', 'E° / V'], rows: [ ['Li⁺ + e⁻ ⇌ Li', '−3.04'], ['Zn²⁺ + 2e⁻ ⇌ Zn', '−0.76'], ['Fe²⁺ + 2e⁻ ⇌ Fe', '−0.44'], ['2H⁺ + 2e⁻ ⇌ H₂', '0.00'], ['Cu²⁺ + 2e⁻ ⇌ Cu', '+0.34'], ['Ag⁺ + e⁻ ⇌ Ag', '+0.80'], ['MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O', '+1.51'] ], caption: 'Standard electrode potentials' } },
    { type: 'heading', id: 'h-signs', data: { text: 'Handling Negative Values', level: 2 } },
    { type: 'list', id: 'list-signs', data: { style: 'bullet', items: [ 'If both E° are positive: larger − smaller = positive result', 'If both E° are negative: less negative − more negative = positive (e.g. −0.44 − (−0.76) = +0.32 V)', 'If one positive, one negative: positive − negative = large positive result' ] } },
    { type: 'callout', id: 'callout-tip-1', data: { style: 'tip', title: 'Exam Tip: Watch Negative Signs', text: 'Remember − (−) = +. Write (+0.34) − (−0.76) clearly as (+0.34) + (+0.76) = +1.10 to avoid errors. Always verify E°cell is positive for the reaction you are considering.' } },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I can apply E°cell = E°cathode − E°anode', checked: false }, { text: 'I know more positive E° is cathode', checked: false }, { text: 'I know more negative E° is anode', checked: false }, { text: 'I handle negative values correctly', checked: false }, { text: 'I understand E°cell > 0 means spontaneous', checked: false } ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: E°cell = E°(cathode) − E°(anode). The species with the more positive E° is reduced (cathode); the more negative is oxidised (anode).\n\nApply: Given E°(Ag⁺/Ag) = +0.80 V and E°(Ni²⁺/Ni) = −0.25 V, calculate E°cell and write the overall equation.\n\nAnalyze: If E°cell is very small (e.g. 0.01 V), is the reaction practically useful? Discuss the relationship between E°cell and ΔG.\n\nEvaluate: Can you have a cell with E°cell = 0? What does this represent?'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: 'E°cell = E°cathode − E°anode. Cathode has higher (more positive) E°; anode has lower (more negative) E°. Examples: Zn/Cu +1.10 V, Fe/Ag +1.24 V, Zn/Ag +1.56 V. Always subtract more negative from more positive to get positive E°cell for spontaneous reactions. Positive E°cell indicates spontaneous galvanic cell.' } },
  ],
  recall: { enabled: true, cues: [ { id: 'cue-1', blockId: 'eq-emf', prompt: 'Write the formula for E°cell.' }, { id: 'cue-2', blockId: 'callout-key-1', prompt: 'Which electrode has the higher E° value?' }, { id: 'cue-3', blockId: 'callout-worked-1', prompt: 'Calculate E°cell for Zn/Cu.' }, { id: 'cue-4', blockId: 'list-signs', prompt: 'If both E° are negative, how do you handle the subtraction?' }, { id: 'cue-5', blockId: 'callout-tip-1', prompt: 'What does a positive E°cell tell you?' } ], summaryText: 'E°cell = E°cathode − E°anode. Cathode = more positive E°; anode = more negative E°. Examples: Zn/Cu +1.10 V, Fe/Ag +1.24 V, Zn/Ag +1.56 V. Positive E°cell = spontaneous galvanic cell.', ready: false },
  evidence: [ { id: 'ev-1', title: 'E°cell calculations and electrode identification', detail: 'Formula, anode/cathode identification, worked examples, sign handling.', year: '2024', source: 'chemguide.co.uk', tags: ['E°cell', 'cell emf', 'anode', 'cathode'] } ],
};
