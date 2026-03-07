/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 8
 * "Electronic configurations of ions"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.3–2A.4
 */
export const note_chemistry_1_2_8 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Write electronic configurations for ions of the first 36 elements. Understand how electrons are added (anions) or removed (cations), paying particular attention to transition metal ions.' },
      terms: []
    },
    {
      id: 'h-cations',
      type: 'heading',
      data: { text: 'Forming Cations (Positive Ions)', level: 2 },
      terms: []
    },
    {
      id: 'p-cations',
      type: 'paragraph',
      data: { text: 'Cations are formed by <strong>removing electrons</strong>. Electrons are always removed from the <strong>highest energy subshell first</strong>. For main group elements, this is straightforward — remove from the outer shell.' },
      terms: []
    },
    {
      id: 'table-cations-main',
      type: 'comparisonTable',
      data: {
        caption: 'Cations of main group elements',
        headers: ['Ion', 'Atom Config.', 'Ion Config.', 'Note'],
        rows: [
          ['Na⁺', '1s² 2s² 2p⁶ 3s¹', '1s² 2s² 2p⁶', 'Loses 1 electron from 3s'],
          ['Mg²⁺', '1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁶', 'Loses 2 electrons from 3s'],
          ['Al³⁺', '1s² 2s² 2p⁶ 3s² 3p¹', '1s² 2s² 2p⁶', 'Loses 1×3p, then 2×3s']
        ]
      },
      terms: ['Cation']
    },
    {
      id: 'callout-transition',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠ Transition Metal Ions: Lose 4s electrons FIRST!',
        text: 'Although 4s fills <em>before</em> 3d, when forming cations, 4s electrons are lost <em>before</em> 3d electrons. This is because once the 3d subshell begins to fill, the 4s becomes higher in energy than 3d.<br/><br/><strong>Fe (Z=26):</strong> [Ar] 3d⁶ 4s²<br/><strong>Fe²⁺:</strong> [Ar] 3d⁶ (lost both 4s electrons)<br/><strong>Fe³⁺:</strong> [Ar] 3d⁵ (lost both 4s and one 3d electron)<br/><br/><strong>Cu (Z=29):</strong> [Ar] 3d¹⁰ 4s¹<br/><strong>Cu⁺:</strong> [Ar] 3d¹⁰<br/><strong>Cu²⁺:</strong> [Ar] 3d⁹'
      },
      terms: []
    },
    {
      id: 'h-anions',
      type: 'heading',
      data: { text: 'Forming Anions (Negative Ions)', level: 2 },
      terms: []
    },
    {
      id: 'p-anions',
      type: 'paragraph',
      data: { text: 'Anions are formed by <strong>adding electrons</strong> to the outermost shell. The electrons are added to the next available orbital in the outer subshell.' },
      terms: ['Anion']
    },
    {
      id: 'table-anions',
      type: 'comparisonTable',
      data: {
        caption: 'Anions of main group elements',
        headers: ['Ion', 'Atom Config.', 'Ion Config.'],
        rows: [
          ['Cl⁻', '1s² 2s² 2p⁶ 3s² 3p⁵', '1s² 2s² 2p⁶ 3s² 3p⁶'],
          ['O²⁻', '1s² 2s² 2p⁴', '1s² 2s² 2p⁶'],
          ['N³⁻', '1s² 2s² 2p³', '1s² 2s² 2p⁶']
        ]
      },
      terms: []
    },
    {
      id: 'callout-isoelectronic',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Isoelectronic species',
        text: 'Ions can be <strong>isoelectronic</strong> — having the same number of electrons (and therefore the same electron configuration) despite being from different elements.<br/><br/>Examples: Na⁺, Mg²⁺, Al³⁺, O²⁻, N³⁻, F⁻ are all isoelectronic with Ne:<br/>All have the configuration <strong>1s² 2s² 2p⁶</strong> (10 electrons).'
      },
      terms: ['Isoelectronic']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-transition', prompt: 'From which subshell are electrons removed first when transition metals form cations? Explain why this is surprising given the filling order.' },
      { id: 'c2', blockId: 'callout-transition', prompt: 'Write the electronic configurations of Fe, Fe²⁺ and Fe³⁺.' },
      { id: 'c3', blockId: 'table-anions', prompt: 'Write the electronic configuration of Cl⁻.' },
      { id: 'c4', blockId: 'callout-isoelectronic', prompt: 'Which ions are isoelectronic with neon? State their shared electron configuration.' }
    ],
    summaryText: 'Cations: remove electrons from the highest energy subshell. For transition metals, remove 4s before 3d when forming ions (even though 4s fills first). Anions: add electrons to the next available orbital. Isoelectronic species share the same electron configuration (e.g. Na⁺, F⁻, O²⁻ all have Ne\'s configuration).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_8;