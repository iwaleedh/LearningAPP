/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 0
 * "Atomic and formula terms"
 * Source: Pearson Edexcel IAL Chemistry Student Book — Section 1A
 */
export const note_chemistry_1_1_0 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the terms atom, element, ion, molecule and compound. Classify substances as monatomic, diatomic or polyatomic.' },
      terms: []
    },
    {
      id: 'h-atom',
      type: 'heading',
      data: { text: 'Key Terms', level: 2 },
      terms: []
    },
    {
      id: 'table-terms',
      type: 'comparisonTable',
      data: {
        caption: 'Fundamental chemical terms (Section 1A)',
        headers: ['Term', 'Definition', 'Example'],
        rows: [
          ['<strong>Atom</strong>', 'The smallest part of an element that still has the properties of that element.', 'A single gold atom (Au)'],
          ['<strong>Element</strong>', 'A pure substance made of only one type of atom. Cannot be broken down chemically.', 'Neon (Ne) — only contains neon atoms'],
          ['<strong>Molecule</strong>', 'A particle made of two or more atoms bonded together.', 'H₂ (molecule of element); HBr (molecule of compound)'],
          ['<strong>Compound</strong>', 'A substance containing atoms of different elements combined together.', 'Water (H₂O) — contains hydrogen and oxygen'],
          ['<strong>Ion</strong>', 'A species consisting of one or more atoms that has a positive or negative charge.', 'Na⁺ (cation); Cl⁻ (anion); CO₃²⁻ (polyatomic anion)']
        ]
      },
      terms: ['Atom', 'Element', 'Molecule', 'Compound', 'Ion', 'Cation', 'Anion']
    },
    {
      id: 'h-poly',
      type: 'heading',
      data: { text: 'Monatomic, Diatomic and Polyatomic', level: 2 },
      terms: []
    },
    {
      id: 'table-poly',
      type: 'comparisonTable',
      data: {
        caption: 'Classifying by number of atoms',
        headers: ['Type', 'Meaning', 'Examples'],
        rows: [
          ['<strong>Monatomic</strong>', 'Single atom only', 'He, Ne, Ar (all noble gases); Na⁺, Cl⁻ (monatomic ions)'],
          ['<strong>Diatomic</strong>', 'Two atoms joined together', 'N₂, O₂, H₂, F₂, Cl₂, Br₂, I₂ (the seven diatomic elements); HBr, CO'],
          ['<strong>Polyatomic</strong>', 'Several atoms joined together', 'P₄, S₈, CH₄; SO₄²⁻, OH⁻ (polyatomic ions)']
        ]
      },
      terms: ['Monatomic', 'Diatomic', 'Polyatomic']
    },
    {
      id: 'callout-ion',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cations and Anions',
        text: 'An ion forms when an atom (or group of atoms) <strong>loses or gains an electron</strong>.<br/>• <strong>Cation</strong> = positive ion, formed when electrons are <em>lost</em> (e.g. Na⁺, Ca²⁺).<br/>• <strong>Anion</strong> = negative ion, formed when electrons are <em>gained</em> (e.g. Cl⁻, O²⁻).'
      },
      terms: []
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Learning Tip (from the textbook)',
        text: 'It is often helpful to refer to a substance by its symbol or formula as well as its name. For example, the word <em>hydrogen</em> could refer to a hydrogen atom (H), a hydrogen molecule (H₂) or a hydrogen ion (H⁺).'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-terms', prompt: 'State the difference between a molecule of an element and a molecule of a compound.' },
      { id: 'c2', blockId: 'table-poly', prompt: 'Name the seven diatomic elements.' },
      { id: 'c3', blockId: 'callout-ion', prompt: 'Define the terms cation and anion, giving one example of each.' }
    ],
    summaryText: 'Atom = smallest part of element. Element = one type of atom only. Molecule = 2+ atoms bonded. Compound = different elements combined. Ion = charged species. Cation (+), Anion (−). Diatomic elements: H₂ N₂ O₂ F₂ Cl₂ Br₂ I₂.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_0;