/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 6
 * "Oxidation of alkenes"
 * Source: Pearson Edexcel IAL Chemistry — Section 5B.3
 */
export const note_chemistry_1_5_6 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the reactions of alkenes with hot concentrated KMnO₄ (acidic and alkaline) and cold dilute KMnO₄. Predict the organic products of oxidation based on the alkene structure.' },
      terms: []
    },
    {
      id: 'h-diol',
      type: 'heading',
      data: { text: 'Mild Oxidation — Diols', level: 2 },
      terms: []
    },
    {
      id: 'callout-diol',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Alkene + Cold Dilute KMnO₄ (alkaline)',
        text: 'Alkenes react with <strong>cold, dilute, acidified KMnO₄</strong> (potassium manganate(VII)) to form <strong>diols</strong> (glycols). Two –OH groups are added across the C=C.<br/><br/><strong>Observation:</strong> Purple KMnO₄ turns colourless (or pale pink, as MnO₄⁻ is reduced to Mn²⁺).<br/><br/><strong>Example:</strong><br/>CH₂=CH₂ + [O] + H₂O → HOCH₂–CH₂OH (ethane-1,2-diol)<br/>(shown simplified; the oxidant is KMnO₄)'
      },
      terms: ['Diol', 'Glycol']
    },
    {
      id: 'h-cleavage',
      type: 'heading',
      data: { text: 'Vigorous Oxidation — Cleavage', level: 2 },
      terms: []
    },
    {
      id: 'callout-cleavage',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Alkene + Hot Concentrated KMnO₄ (acidic)',
        text: 'With <strong>hot, concentrated, acidified KMnO₄</strong>, the C=C double bond is <strong>cleaved</strong>. Products depend on the substitution of the alkene carbons:<br/><br/>• If C of C=C has 2 H atoms (=CH₂): product is <strong>CO₂ + H₂O</strong><br/>• If C of C=C has 1 H atom (=CHR): product is a <strong>carboxylic acid (RCOOH)</strong><br/>• If C of C=C has 0 H atoms (=CR₂): product is a <strong>ketone (RCOR)</strong>'
      },
      terms: ['Oxidative cleavage', 'Carboxylic acid', 'Ketone']
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Predict oxidation products',
        text: '<strong>But-2-ene: CH₃–CH=CH–CH₃ + hot conc. KMnO₄ (acidic)</strong><br/>Each C=C carbon bears 1 H and 1 CH₃ → both are "CHR" type.<br/>Products: 2 × CH₃COOH (ethanoic acid)<br/><br/><strong>Methylpropene: (CH₃)₂C=CH₂ + hot conc. KMnO₄ (acidic)</strong><br/>Left C: no H (CR₂ type) → ketone: (CH₃)₂C=O (propanone)<br/>Right C (=CH₂ type) → CO₂ + H₂O<br/>Products: propanone + CO₂ + H₂O'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-diol', prompt: 'What product forms when an alkene reacts with cold dilute KMnO₄? What observation occurs?' },
      { id: 'c2', blockId: 'callout-cleavage', prompt: 'When an alkene is oxidised with hot conc. H₂SO₄/KMnO₄, what product forms if the C=C carbon has: (a) 2 H atoms, (b) 1 H atom, (c) 0 H atoms?' },
      { id: 'c3', blockId: 'callout-worked', prompt: 'Predict the products when 2-methylbut-2-ene [(CH₃)₂C=CHCH₃] is oxidised with hot conc. KMnO₄.' }
    ],
    summaryText: 'Cold dilute KMnO₄: alkene → diol (two –OH added across C=C). KMnO₄ turns purple → colourless. Hot conc. acidified KMnO₄: cleavage of C=C. =CH₂ → CO₂+H₂O; =CHR → RCOOH (carboxylic acid); =CR₂ → RCOR (ketone).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_6;