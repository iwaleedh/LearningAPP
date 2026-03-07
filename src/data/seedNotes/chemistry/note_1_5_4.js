/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 4
 * "Markovnikov's rule and carbocation stability"
 * Source: Pearson Edexcel IAL Chemistry — Section 5B.2
 */
export const note_chemistry_1_5_4 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Apply Markovnikov\'s rule to predict the major product of addition reactions to asymmetric alkenes. Explain the rule in terms of carbocation stability.' },
      terms: []
    },
    {
      id: 'h-markov',
      type: 'heading',
      data: { text: 'Markovnikov\'s Rule', level: 2 },
      terms: []
    },
    {
      id: 'callout-markov',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Markovnikov\'s Rule',
        text: 'When an asymmetric alkene reacts with a hydrogen halide HX (e.g. HBr), the hydrogen atom attaches to the <strong>less substituted</strong> carbon (the one with more hydrogens), and the halogen attaches to the <strong>more substituted</strong> carbon (the one with fewer hydrogens).<br/><br/>In other words: "hydrogen goes to the carbon with more hydrogens."<br/><br/><strong>Example:</strong><br/>Propene (CH₂=CHCH₃) + HBr:<br/>Major product: <strong>2-bromopropane</strong> (Br on C-2) — NOT 1-bromopropane'
      },
      terms: ['Markovnikov\'s rule', 'Major product', 'Minor product']
    },
    {
      id: 'h-stab',
      type: 'heading',
      data: { text: 'Explaining Markovnikov via Carbocation Stability', level: 2 },
      terms: []
    },
    {
      id: 'p-stab',
      type: 'paragraph',
      data: { text: 'The major product is formed via the more stable carbocation intermediate. Carbocations are stabilised by <strong>alkyl groups</strong> (positive inductive effect — they donate electron density towards the positive charge).' },
      terms: ['Carbocation stability']
    },
    {
      id: 'table-stab',
      type: 'comparisonTable',
      data: {
        caption: 'Order of carbocation stability',
        headers: ['Carbocation type', 'Structure', 'Stability', 'Example'],
        rows: [
          ['Tertiary (3°)', 'C⁺ bonded to 3 alkyl groups', 'Most stable', 'C(CH₃)₃⁺'],
          ['Secondary (2°)', 'C⁺ bonded to 2 alkyl groups', 'Intermediate', 'CH₃CH⁺CH₃'],
          ['Primary (1°)', 'C⁺ bonded to 1 alkyl group', 'Least stable', 'CH₃CH₂⁺'],
          ['Methyl', 'CH₃⁺ (no alkyl groups)', 'Very unstable', '—']
        ]
      },
      terms: ['Tertiary carbocation', 'Secondary carbocation', 'Primary carbocation']
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Propene + HBr — which product and why?',
        text: 'CH₂=CH–CH₃: The C=C carbons are C1 (CH₂=) and C2 (=CHCH₃).<br/><br/>Path A: H⁺ adds to C2 → carbocation on C1 (primary: CH₂⁺CH₂CH₃) → 1-bromopropane (minor)<br/>Path B: H⁺ adds to C1 → carbocation on C2 (secondary: CH₃CH⁺CH₃) → 2-bromopropane (major)<br/><br/>Secondary carbocation (Path B) is more stable → lower activation energy → <strong>major product is 2-bromopropane</strong>.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-markov', prompt: 'State Markovnikov\'s rule in your own words. Use propene + HBr as an example.' },
      { id: 'c2', blockId: 'table-stab', prompt: 'State the order of stability of carbocations from most to least stable.' },
      { id: 'c3', blockId: 'callout-worked', prompt: 'Explain why 2-bromopropane is the major product when propene reacts with HBr, using carbocation stability.' }
    ],
    summaryText: 'Markovnikov\'s rule: H adds to the carbon with more H attached (so X adds to the more substituted C). This forms the more stable (more substituted) carbocation intermediate. Stability order: tertiary > secondary > primary > methyl. Major product forms via the more stable carbocation.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_5_4;