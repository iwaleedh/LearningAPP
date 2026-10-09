import { chemistryFoundations } from '../../guidedLessons/chemistryFoundations.js';

/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 0
 * "Atomic and formula terms"
 * Source: Pearson Edexcel IAL Chemistry Student Book — Section 1A
 */
export const note_chemistry_1_1_0 = {
  guidedLesson: chemistryFoundations['chemistry:1:1:0'],
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the terms atom, element, ion, molecule and compound. Classify substances as monatomic, diatomic or polyatomic.' },
      terms: []
    },
    {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "From particles to chemical formulae",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "An <strong>element</strong> contains atoms with the same proton number; its atoms may be different isotopes. An atom is electrically neutral because it contains equal numbers of protons and electrons. A <strong>molecule</strong> is a discrete group of atoms held together by covalent bonds: O₂ is a molecule of an element, while H₂O is a molecule of a compound. A <strong>compound</strong> contains two or more elements chemically combined in fixed proportions. An ionic compound such as NaCl consists of a giant lattice of ions, so its formula gives the simplest ion ratio rather than describing a NaCl molecule.<br/><br/>An ion is a charged atom or group of atoms. Losing electrons forms a positive ion; gaining electrons forms a negative ion. Na⁺ and Cl⁻ are monatomic ions. OH⁻ is a polyatomic ion because it contains more than one atom, even though it contains only two atoms. A diatomic molecule contains exactly two atoms; a polyatomic molecule contains three or more. These two uses of “polyatomic” must be read in context."
  }
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
          ['<strong>Molecule</strong>', 'A discrete, electrically neutral group of atoms held together by covalent bonds.', 'H₂ (molecule of element); HBr (molecule of compound)'],
          ['<strong>Compound</strong>', 'A substance containing two or more elements chemically combined in fixed proportions.', 'Water (H₂O) — contains hydrogen and oxygen'],
          ['<strong>Ion</strong>', 'A species consisting of one or more atoms that has a positive or negative charge.', 'Na⁺ (cation); Cl⁻ (anion); CO₃²⁻ (polyatomic anion)']
        ]
      },
      terms: ['Atom', 'Element', 'Molecule', 'Compound', 'Ion', 'Cation', 'Anion']
    },
    {
  "id": "svg-particle-models",
  "type": "svg",
  "data": {
    "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 205\" font-family=\"Arial, sans-serif\"><rect width=\"760\" height=\"205\" rx=\"12\" fill=\"#f8fafc\"/><g fill=\"#172554\" text-anchor=\"middle\" font-size=\"15\"><text x=\"90\" y=\"30\">Monatomic element</text><text x=\"275\" y=\"30\">Molecular element</text><text x=\"475\" y=\"30\">Molecular compound</text><text x=\"660\" y=\"30\">Ionic compound</text></g><g stroke=\"#334155\" stroke-width=\"2\"><circle cx=\"90\" cy=\"93\" r=\"25\" fill=\"#dbeafe\"/><line x1=\"250\" y1=\"93\" x2=\"300\" y2=\"93\"/><circle cx=\"245\" cy=\"93\" r=\"22\" fill=\"#dbeafe\"/><circle cx=\"305\" cy=\"93\" r=\"22\" fill=\"#dbeafe\"/><line x1=\"475\" y1=\"77\" x2=\"438\" y2=\"115\"/><line x1=\"475\" y1=\"77\" x2=\"512\" y2=\"115\"/><circle cx=\"475\" cy=\"77\" r=\"23\" fill=\"#fee2e2\"/><circle cx=\"434\" cy=\"119\" r=\"18\" fill=\"#dbeafe\"/><circle cx=\"516\" cy=\"119\" r=\"18\" fill=\"#dbeafe\"/><rect x=\"615\" y=\"65\" width=\"90\" height=\"74\" rx=\"6\" fill=\"#e0e7ff\"/></g><g fill=\"#0f172a\" font-size=\"17\" text-anchor=\"middle\"><text x=\"90\" y=\"99\">Ne</text><text x=\"245\" y=\"99\">O</text><text x=\"305\" y=\"99\">O</text><text x=\"475\" y=\"83\">O</text><text x=\"434\" y=\"125\">H</text><text x=\"516\" y=\"125\">H</text><text x=\"660\" y=\"95\">Na⁺  Cl⁻</text><text x=\"660\" y=\"119\">Cl⁻  Na⁺</text></g><g fill=\"#334155\" font-size=\"13\" text-anchor=\"middle\"><text x=\"90\" y=\"172\">Separate atoms</text><text x=\"275\" y=\"172\">O₂: one element</text><text x=\"475\" y=\"172\">H₂O: two elements</text><text x=\"660\" y=\"172\">NaCl: repeating ion lattice</text><text x=\"660\" y=\"191\">Small lattice fragment</text></g></svg>",
    "caption": "Ne atoms, O₂ molecules, H₂O molecules and a schematic fragment of a sodium chloride ion lattice. Water contains two hydrogens per oxygen; ionic NaCl is not a molecule."
  }
},
    {
      id: 'svg-mono-di-poly',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" width="800" height="220"><defs><style>.txt { fill: #1f2937; font-size: 12px; } .atom-circle { fill: #f3f4f6; stroke: #6b7280; stroke-width: 1.5; } .atom-text { fill: #111827; font-family: monospace; font-size: 14px; font-weight: bold; } .bond { stroke: #111827; stroke-width: 2; } .label { fill: #1e40af; font-weight: bold; font-size: 13px; }</style></defs><!-- Monatomic --><g transform="translate(150, 80)"><circle cx="0" cy="0" r="32" class="atom-circle"/><text x="0" y="4" text-anchor="middle" class="atom-text">He</text></g><text x="150" y="135" text-anchor="middle" class="label">Monatomic</text><text x="150" y="153" text-anchor="middle" class="txt">Single atom</text><text x="150" y="168" text-anchor="middle" class="txt">(He, Ne, Ar)</text><!-- Diatomic --><g transform="translate(400, 80)"><circle cx="-35" cy="0" r="28" class="atom-circle"/><circle cx="35" cy="0" r="28" class="atom-circle"/><text x="-35" y="4" text-anchor="middle" class="atom-text">Cl</text><text x="35" y="4" text-anchor="middle" class="atom-text">Cl</text><line x1="-7" y1="0" x2="7" y2="0" class="bond"/></g><text x="400" y="135" text-anchor="middle" class="label">Diatomic</text><text x="400" y="153" text-anchor="middle" class="txt">Two atoms bonded</text><text x="400" y="168" text-anchor="middle" class="txt">(Cl₂, O₂, N₂)</text><!-- Polyatomic --><g transform="translate(650, 80)"><circle cx="0" cy="0" r="28" class="atom-circle"/><circle cx="0" cy="-45" r="22" class="atom-circle"/><circle cx="0" cy="45" r="22" class="atom-circle"/><circle cx="-40" cy="0" r="22" class="atom-circle"/><circle cx="40" cy="0" r="22" class="atom-circle"/><text x="0" y="4" text-anchor="middle" class="atom-text">C</text><text x="0" y="-41" text-anchor="middle" class="atom-text">H</text><text x="0" y="49" text-anchor="middle" class="atom-text">H</text><text x="-40" y="4" text-anchor="middle" class="atom-text">H</text><text x="40" y="4" text-anchor="middle" class="atom-text">H</text><line x1="0" y1="-17" x2="0" y2="-23" class="bond"/><line x1="0" y1="17" x2="0" y2="23" class="bond"/><line x1="-12" y1="0" x2="-18" y2="0" class="bond"/><line x1="12" y1="0" x2="18" y2="0" class="bond"/></g><text x="650" y="165" text-anchor="middle" class="label">Polyatomic</text><text x="650" y="183" text-anchor="middle" class="txt">3+ atoms bonded</text><text x="650" y="198" text-anchor="middle" class="txt">(CH₄, P₄, S₈)</text></svg>`,
        caption: 'Examples of monatomic, diatomic, and polyatomic substances'
      }
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
          ['<strong>Polyatomic</strong>', 'Three or more atoms in a molecule; more than one atom in a polyatomic ion', 'P₄, S₈, CH₄; SO₄²⁻, OH⁻ (polyatomic ions)']
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
        text: 'An ion forms when an atom (or group of atoms) <strong>loses or gains one or more electrons</strong>.<br/>• <strong>Cation</strong> = positive ion, formed when electrons are <em>lost</em> (e.g. Na⁺, Ca²⁺).<br/>• <strong>Anion</strong> = negative ion, formed when electrons are <em>gained</em> (e.g. Cl⁻, O²⁻).'
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
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "Write the formula of aluminium sulfate. Al³⁺ and SO₄²⁻ must combine to give zero overall charge. Two Al³⁺ ions contribute +6 and three SO₄²⁻ ions contribute −6, giving <strong>Al₂(SO₄)₃</strong>. The brackets multiply the whole sulfate ion: the formula contains 2 Al, 3 S and 12 O atoms. For glucose, C₆H₁₂O₆ is the molecular formula and CH₂O is the empirical formula; divide all subscripts by their highest common factor, 6."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not call every compound a molecule. Ionic and giant covalent substances do not contain discrete molecules. A coefficient multiplies an entire formula: 2H₂O means two water molecules, whereas H₂O₂ is a different substance."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "How can O₂ be both an element and a molecule?",
        "checked": false
      },
      {
        "text": "Why is the formula of aluminium sulfate Al₂(SO₄)₃?",
        "checked": false
      },
      {
        "text": "Distinguish empirical and molecular formulae using glucose.",
        "checked": false
      },
      {
        "text": "Is OH⁻ a molecule, a monatomic ion or a polyatomic ion?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "An element contains atoms with the same proton number; its atoms may be different isotopes. An atom is electrically neutral because it contains equal numbers of protons and electrons. A molecule is a discrete group of atoms held together by covalent bonds: O₂ is a molecule of an element, while H₂O is a molecule of a compound. A compound contains two or more elements chemically combined in fixed proportions. An ionic compound such as NaCl consists of a giant lattice of ions, so its formula gives the simplest ion ratio rather than describing a NaCl molecule."
  }
}
  ],

  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "How can O₂ be both an element and a molecule?",
      "answer": "It contains only oxygen atoms, so it is an element; each discrete particle consists of two covalently bonded atoms, so it is a molecule."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Why is the formula of aluminium sulfate Al₂(SO₄)₃?",
      "answer": "Two Al³⁺ ions give +6 and three SO₄²⁻ ions give −6. Overall charge is zero. Brackets show that three whole sulfate ions are present."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Distinguish empirical and molecular formulae using glucose.",
      "answer": "The molecular formula C₆H₁₂O₆ gives the actual atom numbers in one molecule. The empirical formula CH₂O gives their simplest whole-number ratio."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Is OH⁻ a molecule, a monatomic ion or a polyatomic ion?",
      "answer": "It is a polyatomic ion: a charged group containing more than one atom. It is not an electrically neutral molecule."
    }
  ],
  "summaryText": "An element contains atoms with the same proton number; its atoms may be different isotopes. An atom is electrically neutral because it contains equal numbers of protons and electrons. A molecule is a discrete group of atoms held together by covalent bonds: O₂ is a molecule of an element, while H₂O is a molecule of a compound. A compound contains two or more elements chemically combined in fixed proportions. An ionic compound such as NaCl consists of a giant lattice of ions, so its formula gives the simplest ion ratio rather than describing a NaCl molecule.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_1_1_0;
