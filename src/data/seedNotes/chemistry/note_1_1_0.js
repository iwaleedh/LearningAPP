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
      id: 'callout-element-isotopes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Elements and Isotopes',
        text: 'Every atom in an element has the <strong>same atomic number</strong> (same number of protons). However, not every atom is identical — atoms of the same element may have different numbers of neutrons; these are called <strong>isotopes</strong>. Atomic structure and isotopes are covered in more detail in Topic 2.'
      },
      terms: ['Isotope']
    },
    {
      id: 'h-alevel-skills',
      type: 'heading',
      data: { text: 'A-Level Equation-Writing Expectations', level: 2 },
      terms: []
    },
    {
      id: 'list-alevel-skills',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Write and interpret <strong>chemical formulae</strong> correctly (e.g. H₂O, CaCO₃).',
          'Write <strong>balanced chemical equations</strong> with correct coefficients.',
          'Use correct <strong>state symbols</strong>: (s), (l), (g), (aq).',
          'Use the correct <strong>arrow</strong>: → for irreversible reactions; ⇌ for reversible/equilibrium reactions.',
          'Write <strong>half equations</strong> (showing electron transfer in redox reactions).',
          'Write <strong>full ionic equations</strong> showing all ions.',
          'Write <strong>simplest ionic equations</strong> by cancelling spectator ions.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-arrows',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Arrow Types in Equations',
        text: '<strong>→</strong> (single-headed arrow) — used for <em>irreversible</em> reactions that go to completion.<br/><strong>⇌</strong> (double-headed arrow) — used for <em>reversible/equilibrium</em> reactions, where products can reform reactants.'
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
      { id: 'c3', blockId: 'callout-ion', prompt: 'Define the terms cation and anion, giving one example of each.' },
      { id: 'c4', blockId: 'callout-element-isotopes', prompt: 'All atoms in an element are the same — True or False? Explain your answer.' },
      { id: 'c5', blockId: 'callout-arrows', prompt: 'When should you use → versus ⇌ in a chemical equation?' }
    ],
    summaryText: 'Atom = smallest part of element. Element = one type of atom (same atomic number, may be isotopes). Molecule = 2+ atoms bonded. Compound = different elements combined. Ion = charged species. Cation (+), Anion (−). Diatomic elements: H₂ N₂ O₂ F₂ Cl₂ Br₂ I₂. A-Level skills: balance equations, use state symbols, correct arrow (→ irreversible, ⇌ reversible), write ionic and half equations.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_1_0;