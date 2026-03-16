export const note_olevel_chemistry_3_3_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-5-titration-calculations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use titration results and mole ratios to calculate the concentration or volume of a reactant or product.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Acid-Base Titration', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is a Titration?',
        text: 'A <strong>titration</strong> is a method to find the exact volume of one solution that reacts with a known volume of another solution.<br/><br/>The <strong>equivalence point (end point)</strong> is when moles of acid exactly react with moles of base — shown by a colour change of an indicator.<br/><br/><strong>Mean titre</strong> = average of concordant (close) titre results.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Calculation Method', level: 2 }
    },
    {
      id: 'call-steps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Titration Calculation Steps',
        text: '1. Calculate moles of one substance: n = c × V (V in dm³)<br/>2. Use the mole ratio from the balanced equation<br/>3. Calculate moles of the other substance<br/>4. Calculate concentration: c = n ÷ V<br/>   (or mass: m = n × M)'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Find concentration of NaOH',
        text: '25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.1 mol/dm³ HCl.<br/>Equation: HCl + NaOH → NaCl + H₂O<br/>Mole ratio HCl : NaOH = 1 : 1<br/><br/>n(HCl) = 0.1 × (20.0/1000) = 0.002 mol<br/>n(NaOH) = 0.002 mol (1:1 ratio)<br/>c(NaOH) = 0.002 ÷ (25.0/1000) = 0.002 ÷ 0.025<br/><strong>c(NaOH) = 0.08 mol/dm³</strong>'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Sulfuric acid + NaOH (2:1 ratio)',
        text: '25.0 cm³ of 0.2 mol/dm³ NaOH is neutralised by H₂SO₄ 0.1 mol/dm³.<br/>Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O<br/>Ratio H₂SO₄ : NaOH = 1 : 2<br/><br/>n(NaOH) = 0.2 × 0.025 = 0.005 mol<br/>n(H₂SO₄) = 0.005 ÷ 2 = 0.0025 mol<br/>V(H₂SO₄) = n ÷ c = 0.0025 ÷ 0.1 = 0.025 dm³<br/><strong>= 25.0 cm³</strong>'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The most common mistakes in titration calculations:<br/>1. Forgetting to convert cm³ to dm³ (÷1000)<br/>2. Using the wrong mole ratio — always check H₂SO₄ + 2NaOH (1:2 ratio)<br/>3. Using the titre instead of the mean titre<br/><br/>Show each step clearly for full marks.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Titration: use n = c × V, then mole ratio, then c = n/V for the unknown. Always convert cm³ to dm³. Check the mole ratio from the balanced equation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Titration steps: n = c×V; mole ratio; c = n/V. Convert cm³ to dm³. Check mole ratio from balanced equation.',
    cues: [
      { id: 'cue-1', blockId: 'call-steps', prompt: 'State the steps for a titration calculation.', answer: '1. n = c×V for known substance. 2. Use mole ratio from balanced equation. 3. Find moles of unknown. 4. c = n/V or m = n×M.' },
      { id: 'cue-2', blockId: 'call-worked1', prompt: '25 cm³ of KOH neutralises 12.5 cm³ of 0.2 mol/dm³ H₂SO₄. Find [KOH]. (H₂SO₄+2KOH→K₂SO₄+2H₂O)', answer: 'n(H₂SO₄) = 0.2×0.0125 = 0.0025 mol; n(KOH) = 2×0.0025 = 0.005 mol; c(KOH) = 0.005/0.025 = 0.2 mol/dm³.' },
      { id: 'cue-3', blockId: 'call-def', prompt: 'What is meant by the end point of a titration?', answer: 'The point at which the acid and alkali have completely reacted (equivalence point). Shown by a permanent colour change of the indicator.' }
    ]
  },
  evidence: [],
  mentions: []
};
