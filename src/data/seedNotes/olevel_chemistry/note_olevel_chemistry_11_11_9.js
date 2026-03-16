export const note_olevel_chemistry_11_11_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-6-carboxylic-acids.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure and reactions of carboxylic acids including reactions with metals, bases, carbonates, and alcohols to form esters.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Carboxylic Acids', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts',
        text: '<strong>Functional group:</strong> –COOH (carboxyl group)<br/><strong>General formula:</strong> CₙH₂ₙ₊₁COOH<br/><br/><strong>Common carboxylic acids:</strong><br/>• Methanoic acid (HCOOH) — in ant stings; irritant<br/>• Ethanoic acid (CH₃COOH) — vinegar; widely used industrial acid<br/>• Propanoic acid (C₂H₅COOH)<br/><br/><strong>Properties:</strong><br/>• <strong>Weak acids</strong> — partially dissociate in water (pH 3–5)<br/>• Dissolve in water to give acidic solutions<br/>• Have pungent/sour smell<br/>• React in the same ways as other acids (but more slowly)'
      }
    },
    {
      id: 'tbl-rx',
      type: 'comparisonTable',
      data: {
        caption: 'Reactions of ethanoic acid (CH₃COOH)',
        headers: ['Reaction', 'Equation', 'Observations'],
        rows: [
          ['With metal (Mg)', 'CH₃COOH + Mg → (CH₃COO)₂Mg + H₂', 'Bubbles of H₂; Mg dissolves (slow reaction — weak acid)'],
          ['With base (NaOH)', 'CH₃COOH + NaOH → CH₃COONa + H₂O', 'No visible change; neutralisation'],
          ['With carbonate (Na₂CO₃)', '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂', 'Effervescence (CO₂ gas); CO₂ turns limewater milky'],
          ['With carbonate (CaCO₃)', '2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + H₂O + CO₂', 'Marble/limestone dissolves; effervescence']
        ]
      }
    },
    {
      id: 'call-ester',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Esterification',
        text: 'Carboxylic acids react with alcohols to form esters in a reversible reaction:<br/><br/><strong>CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</strong><br/>(ethanoic acid + ethanol ⇌ ethyl ethanoate + water)<br/><br/><strong>Conditions:</strong> concentrated H₂SO₄ catalyst; heat; reflux<br/><br/><strong>Naming esters:</strong><br/>• First part: from the alcohol (ethanol → ethyl)<br/>• Second part: from the carboxylic acid (-anoic acid → -anoate)<br/>• Ethanol + ethanoic acid → ethyl ethanoate<br/>• Propanol + methanoic acid → propyl methanoate'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Carboxylic acids: –COOH group, weak acids. React with metals (→ salt + H₂), bases (→ salt + H₂O), carbonates (→ salt + H₂O + CO₂). React with alcohols + conc. H₂SO₄ catalyst → ester + water (esterification).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Carboxylic acids: –COOH, weak acids. React with carbonates → CO₂. With alcohols (H₂SO₄ catalyst) → ester + water.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What makes carboxylic acids weak acids compared to HCl?', answer: 'Carboxylic acids partially dissociate in water — only a small fraction of molecules release H⁺ ions. HCl is a strong acid that dissociates completely. Carboxylic acids therefore produce solutions with pH around 3–5 rather than 1.' },
      { id: 'cue-2', blockId: 'tbl-rx', prompt: 'Write the equation for ethanoic acid reacting with sodium carbonate.', answer: '2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂' },
      { id: 'cue-3', blockId: 'call-ester', prompt: 'Name the ester formed from propanol and ethanoic acid, and state the catalyst needed.', answer: 'Propyl ethanoate. Concentrated sulfuric acid (H₂SO₄) is used as catalyst, with heat.' }
    ]
  },
  evidence: [],
  mentions: []
};
