/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 2
 * "Structural isomerism"
 * Source: Pearson Edexcel IAL Chemistry — Section 4A.5
 */
export const note_chemistry_1_4_2 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand structural isomerism. Draw and name structural isomers. Distinguish between chain isomers, positional isomers, and functional group isomers.' },
      terms: []
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is Structural Isomerism?', level: 2 },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Structural Isomers',
        text: '<strong>Structural isomers</strong> are compounds with the same <strong>molecular formula</strong> but different <strong>structural formulae</strong> — i.e., the atoms are connected in a different order or arrangement.<br/><br/>They have different names, different physical properties (boiling point, melting point etc.), and may have different chemical properties.'
      },
      terms: ['Structural isomers', 'Isomerism']
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Structural Isomerism', level: 2 },
      terms: []
    },
    {
      id: 'table-types',
      type: 'comparisonTable',
      data: {
        caption: 'Types of structural isomerism',
        headers: ['Type', 'Definition', 'Example (C₄H₁₀)'],
        rows: [
          ['<strong>Chain isomers</strong>', 'Same molecular formula, different carbon chain arrangement (branching changes).', 'butane and 2-methylpropane'],
          ['<strong>Positional isomers</strong>', 'Same carbon chain, same functional group — but the functional group or double bond is in a different position.', 'butan-1-ol and butan-2-ol,<br/>or but-1-ene and but-2-ene'],
          ['<strong>Functional group isomers</strong>', 'Same molecular formula but different functional groups entirely.', 'butanal (aldehyde) and cyclobutanol (alcohol) — C₄H₈O']
        ]
      },
      terms: ['Chain isomers', 'Positional isomers', 'Functional group isomers']
    },
    {
      id: 'callout-example-c5h12',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: All structural isomers of C₅H₁₂ (pentane)',
        text: 'For C₅H₁₂ there are <strong>3 chain isomers</strong>:<br/><br/>1. <strong>Pentane:</strong> CH₃CH₂CH₂CH₂CH₃ (straight chain)<br/>2. <strong>2-Methylbutane:</strong> CH₃CH(CH₃)CH₂CH₃<br/>3. <strong>2,2-Dimethylpropane:</strong> C(CH₃)₄<br/><br/>Boiling points decrease as branching increases (less contact area → weaker London forces): pentane (36°C) > 2-methylbutane (28°C) > 2,2-dimethylpropane (10°C)'
      },
      terms: []
    },
    {
      id: 'callout-drawing-tips',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Tips for Drawing Isomers in Exams',
        text: '• <strong>Avoid duplicates:</strong> Be careful not to draw twisted or flipped versions of the same molecule. A bent chain is still the same continuous main chain! Always check the IUPAC name — if it is the same, it is the same molecule.<br/>• <strong>Combine isomer types:</strong> You aren\'t restricted to finding just chain <em>or</em> position isomers. You will often need a mixture of both. For example, breaking up a 4-carbon chain into a 3-carbon branched chain AND moving the position of a functional group.<br/>• <strong>Consider rings and unusual groups:</strong> When drawing functional group isomers, remember that rings (e.g., cycloalkanes vs alkenes) are possible, or combinations like a C=C double bond plus an -OH group (an enol) instead of a simple aldehyde or ketone.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define structural isomers.' },
      { id: 'c2', blockId: 'table-types', prompt: 'State and define the three types of structural isomerism, giving one example of each.' },
      { id: 'c3', blockId: 'callout-example-c5h12', prompt: 'Draw and name all three structural isomers of C₅H₁₂. Explain why their boiling points differ.' },
      { id: 'c4', blockId: 'callout-drawing-tips', prompt: 'What are three key tips to remember when drawing structural isomers in an exam?' }
    ],
    summaryText: 'Structural isomers = same molecular formula, different structural arrangement. Three types: chain (different branching), positional (different position of functional group), functional group (different functional group entirely). Increased branching → lower bp due to weaker London forces. When drawing isomers, avoid twisted duplicates, combine chain and positional changes, and remember cyclic/unusual group options.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_4_2;