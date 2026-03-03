export const note_chemistry_5_17_2 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-oxidation-states',
      data: {
        text: 'Explain why transition metals exhibit variable oxidation states; understand the colour changes associated with different oxidation states, particularly for vanadium; apply redox reduction sequences.'
      }
    },
    {
      type: 'heading',
      id: 'h-variable-oxidation',
      data: { text: 'Variable Oxidation States in Transition Metals', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-why-variable',
      data: {
        text: 'Transition metals characteristically exhibit variable oxidation states (more than one stable oxidation state). This occurs because the 3d and 4s orbitals have similar energies, allowing electrons from both shells to participate in bonding. Unlike main-group elements, which typically show one or two oxidation states determined by group number, transition metals can lose varying numbers of d-electrons in addition to s-electrons, creating a range of possible oxidation states.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-stability-range',
      data: {
        text: 'The range of oxidation states for a given transition metal is not random. The lowest oxidation state is typically +2 (loss of both 4s electrons), while higher oxidation states involve progressive loss of 3d electrons. The highest oxidation state usually corresponds to removal of all valence electrons (both 4s and all 3d), such as Mn at +7 in MnO₄⁻, or Cr at +6 in CrO₄²⁻. Intermediate states such as Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺, and Cr³⁺ are often particularly stable.'
      }
    },
    {
      type: 'callout',
      id: 'callout-multiple-states',
      data: {
        style: 'key',
        title: 'Why Transition Metals?',
        text: 'Transition metals show variable oxidation states because 3d and 4s electrons have similar ionisation energies. Both can be removed in succession, creating multiple stable ions. This is impossible for main-group elements where ionisation energy differences are much larger.'
      }
    },
    {
      type: 'heading',
      id: 'h-iron-states',
      data: { text: 'Iron: +2 and +3 Oxidation States', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-iron-example',
      data: {
        text: 'Iron (Fe) commonly exhibits +2 and +3 oxidation states:<br/>' +
        '• <strong>Fe²⁺</strong> ([Ar] 3d⁶): Most stable in neutral or slightly acidic solutions. Forms many common compounds such as FeSO₄ (iron(II) sulfate), FeCl₂, and Fe(OH)₂.<br/>' +
        '• <strong>Fe³⁺</strong> ([Ar] 3d⁵): Stable, particularly in acidic solutions and when complexed. Forms compounds such as FeCl₃, Fe₂(SO₄)₃, and Fe(OH)₃. The half-filled 3d⁵ configuration provides extra stability.' +
        '<br/>Fe²⁺ and Fe³⁺ undergo redox interconversion: Fe²⁺ ⇌ Fe³⁺ + e⁻'
      }
    },
    {
      type: 'heading',
      id: 'h-manganese-states',
      data: { text: 'Manganese: Multiple Oxidation States (+2, +4, +7)', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-manganese-example',
      data: {
        text: 'Manganese (Mn) exhibits a remarkable range of oxidation states due to its d⁵ valence configuration:<br/>' +
        '• <strong>Mn²⁺</strong> ([Ar] 3d⁵): Pale pink, stable in neutral or slightly basic solution.<br/>' +
        '• <strong>Mn⁴⁺</strong>: Found in MnO₂ (manganese dioxide), black solid, acts as an oxidising agent.<br/>' +
        '• <strong>Mn⁷⁺</strong>: In the permanganate ion MnO₄⁻, deep purple, a powerful oxidising agent.' +
        '<br/>The wide range reflects manganese\'s ability to lose all valence electrons (both 4s and all 3d) or just some of them.'
      }
    },
    {
      type: 'heading',
      id: 'h-vanadium-oxidation',
      data: { text: 'Vanadium Oxidation States and Colours', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-vanadium-intro',
      data: {
        text: 'Vanadium (V, Z = 23) demonstrates the relationship between oxidation state and colour exceptionally well. It exhibits four distinct oxidation states in aqueous solution (+2, +3, +4, +5), each with its own characteristic colour. This makes vanadium an excellent example for studying how oxidation state affects the electronic structure and colour of transition metal complexes.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-vanadium',
      data: {
        headers: ['Oxidation State', 'Species', 'Colour', 'Reducing Agent Used'],
        rows: [
          ['+5', 'VO₂⁺ (vanadium(V) oxide cation)', 'Yellow', '—'],
          ['+4', 'VO²⁺ (vanadium(IV) oxide cation)', 'Blue', 'SO₂ / Zn / Fe²⁺'],
          ['+3', 'V³⁺ (vanadium(III) ion)', 'Green', 'Zn / Fe²⁺'],
          ['+2', 'V²⁺ (vanadium(II) ion)', 'Violet', 'Zn (excess)']
        ],
        caption: 'Vanadium oxidation states: Each oxidation state has a characteristic colour in aqueous solution. Reduction is achieved by adding the listed reducing agents.'
      }
    },
    {
      type: 'callout',
      id: 'callout-vanadium-reduction',
      data: {
        style: 'worked',
        title: 'Vanadium Reduction Sequence',
        text: 'Starting with yellow VO₂⁺ solution and adding zinc:<br/>' +
        'VO₂⁺ (yellow) → VO²⁺ (blue) → V³⁺ (green) → V²⁺ (violet)<br/>' +
        'This colour sequence is memorable: Yellow → Blue → Green → Violet (from +5 to +2).'
      }
    },
    {
      type: 'heading',
      id: 'h-vanadium-mechanism',
      data: { text: 'Mechanism of Vanadium Reduction', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-vanadate-reduction',
      data: {
        text: 'When a vanadium(V) salt (containing VO₂⁺) is reduced by zinc:<br/>' +
        '1. <strong>First step:</strong> VO₂⁺ + 2H⁺ + e⁻ → VO²⁺ + H₂O (yellow → blue)<br/>' +
        '2. <strong>Second step:</strong> VO²⁺ + 2H⁺ + e⁻ → V³⁺ + H₂O (blue → green)<br/>' +
        '3. <strong>Third step:</strong> V³⁺ + e⁻ → V²⁺ (green → violet)<br/>' +
        '<br/>Each reduction is stepwise, with intermediate oxidation states appearing sequentially as colour changes. Zinc acts as the reducing agent, being oxidised from Zn(0) to Zn²⁺.'
      }
    },
    {
      type: 'heading',
      id: 'h-copper-oxidation',
      data: { text: 'Copper: +1 and +2 Oxidation States', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-copper-states',
      data: {
        text: 'Copper exhibits two oxidation states:<br/>' +
        '• <strong>Cu⁺</strong> ([Ar] 3d¹⁰): Colourless in solution (due to the stable d¹⁰ configuration with no unpaired d-electrons). Cu₂O (red) is a common example. Cu⁺ is actually more thermodynamically stable than Cu²⁺, but undergoes disproportionation in aqueous solution.' +
        '<br/>• <strong>Cu²⁺</strong> ([Ar] 3d⁹): Blue in aqueous solution (due to d-orbital splitting and absorption in the visible region). Forms compounds such as CuSO₄·5H₂O (blue crystals) and CuCl₂.<br/>' +
        'In solution, Cu⁺ → Cu + Cu²⁺ (disproportionation) due to hydration enthalpy favouring Cu²⁺.'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-oxidation-states',
      data: {
        items: [
          { text: 'Variable oxidation states arise because 3d and 4s energies are similar', checked: false },
          { text: 'Fe shows +2 (3d⁶) and +3 (3d⁵) oxidation states', checked: false },
          { text: 'Mn can reach +7 in MnO₄⁻ (permanganate)', checked: false },
          { text: 'Vanadium colour sequence: Yellow (+5) → Blue (+4) → Green (+3) → Violet (+2)', checked: false },
          { text: 'Cu⁺ is colourless; Cu²⁺ is blue', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Variable oxidation states arise because 3d and 4s electrons have similar energies, allowing different numbers to be lost. Each oxidation state often has a characteristic colour.\n\nApply: List the oxidation states and colours of vanadium species from V²⁺ to VO₂⁺. How is Zn used to reduce V⁵⁺ stepwise?\n\nAnalyze: Why do s-block metals rarely show variable oxidation states while d-block metals commonly do?\n\nEvaluate: Fe²⁺ is easily oxidised to Fe³⁺ in air. Assess the implications for storing Fe²⁺ solutions in the lab.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-oxidation',
      data: {
        text: 'Transition metals show variable oxidation states because both 3d and 4s electrons can be removed. Iron exhibits +2/+3; manganese spans +2 to +7; vanadium shows four distinct oxidation states with characteristic colours (yellow VO₂⁺, blue VO²⁺, green V³⁺, violet V²⁺). Copper has +1 (colourless, d¹⁰) and +2 (blue, d⁹) states. The range of oxidation states is a defining feature of transition metal chemistry, enabling diverse redox chemistry and colour phenomena.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-variable-oxidation',
        prompt: 'Why do transition metals exhibit variable oxidation states?'
      },
      {
        id: 'cue-2',
        blockId: 'p-iron-example',
        prompt: 'What are the electron configurations of Fe²⁺ and Fe³⁺?'
      },
      {
        id: 'cue-3',
        blockId: 'h-manganese-states',
        prompt: 'List three oxidation states of manganese and describe them.'
      },
      {
        id: 'cue-4',
        blockId: 'table-vanadium',
        prompt: 'Recall the vanadium oxidation state colour sequence from +5 to +2.'
      },
      {
        id: 'cue-5',
        blockId: 'p-copper-states',
        prompt: 'Explain why Cu⁺ is colourless and Cu²⁺ is blue.'
      }
    ],
    summaryText: 'Variable oxidation states in transition metals arise from 3d/4s orbital energy similarity. Fe: +2/+3; Mn: +2/+4/+7; V: +2/+3/+4/+5 (violet/green/blue/yellow). Vanadium colour sequence is memorable: Yellow VO₂⁺ (+5) → Blue VO²⁺ (+4) → Green V³⁺ (+3) → Violet V²⁺ (+2).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Vanadium Redox Chemistry',
      detail: 'Vanadium is classically used in A-level practicals to demonstrate the relationship between oxidation state and colour, with four distinct colours easily visible in aqueous solution.',
      year: '2023',
      source: 'A-Level Practical Chemistry',
      tags: ['redox', 'colour', 'vanadium', 'oxidation-states']
    }
  ]
};
