export const note_chemistry_5_16_0 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-1',
      data: {
        text: 'Understand electrode potentials, the standard hydrogen electrode (SHE) as a reference, standard conditions, and how to measure E° by connecting half-cells.',
      },
    },
    {
      type: 'heading',
      id: 'h-intro',
      data: {
        text: 'Electrode Potentials and the Electrochemical Series',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-intro-1',
      data: {
        text: 'Electrode potential (E) is a measure of the tendency of a half-reaction to occur. It is defined as the voltage generated when a half-cell is connected to a reference half-cell. Each half-cell consists of an electrode in contact with a solution containing ions of that element. When two half-cells are connected, electrons flow from the more negative electrode (anode, where oxidation occurs) to the more positive electrode (cathode, where reduction occurs), creating a potential difference that can be measured in volts.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-1',
      data: {
        style: 'key',
        title: 'Definition: Electrode Potential',
        text: 'Electrode potential (E) is the voltage (in volts) of a half-cell measured relative to a standard reference half-cell. A positive E value indicates a strong tendency to be reduced (reduction potential). A negative E value indicates a weak tendency to be reduced (or a strong tendency to be oxidised).',
      },
    },
    {
      type: 'heading',
      id: 'h-she',
      data: {
        text: 'The Standard Hydrogen Electrode (SHE)',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-she-1',
      data: {
        text: 'The standard hydrogen electrode (SHE) is the universal reference electrode against which all other standard electrode potentials are measured. It is assigned a standard electrode potential of E° = 0.00 V by international convention. The SHE consists of a platinum electrode immersed in a solution containing H⁺ ions at a concentration of 1 mol dm⁻³, with hydrogen gas at a pressure of 1 bar (100 kPa) being bubbled through the solution at a temperature of 298 K (25 °C). The half-reaction is:',
      },
    },
    {
      type: 'equation',
      id: 'eq-she',
      data: {
        html: '2H<sup>+</sup> + 2e<sup>−</sup> ⇌ H<sub>2</sub>, E° = 0.00 V',
        caption: 'Standard hydrogen electrode half-reaction',
      },
    },
    {
      type: 'paragraph',
      id: 'p-she-2',
      data: {
        text: 'The choice of hydrogen as the reference is arbitrary but has been accepted globally. The potential of any other half-cell can be determined by connecting it to the SHE and measuring the voltage with a high-resistance voltmeter. If the half-cell is more easily reduced than H⁺, it will have a positive E° value; if it is less easily reduced, it will have a negative E° value.',
      },
    },
    {
      type: 'heading',
      id: 'h-standard-conditions',
      data: {
        text: 'Standard Conditions for Measuring E°',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-std-1',
      data: {
        text: 'Standard electrode potential (E°) is defined under specific standard conditions to ensure measurements are reproducible and comparable:',
      },
    },
    {
      type: 'list',
      id: 'list-std-conditions',
      data: {
        style: 'bullet',
        items: [
          'Temperature: 298 K (25 °C)',
          'Concentration of all ions in solution: 1 mol dm⁻³',
          'Partial pressure of any gases: 1 bar (100 kPa)',
          'Concentration of pure solids and liquids: taken as unity (standard state)',
        ],
      },
    },
    {
      type: 'paragraph',
      id: 'p-std-2',
      data: {
        text: 'These conditions ensure that E° values published in data tables can be used to predict the feasibility of reactions and compare the relative strengths of oxidising and reducing agents. Non-standard conditions (different temperature, concentration, or pressure) will result in different electrode potentials, which can be calculated using the Nernst equation.',
      },
    },
    {
      type: 'heading',
      id: 'h-convention',
      data: {
        text: 'Convention: Writing Half-Equations with Electrons on the Left',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-conv-1',
      data: {
        text: 'A consistent convention is used throughout electrochemistry: all half-equations are written with electrons on the left-hand side as reactants (reduction form). This emphasises that the electrode potential E° is defined for the reduction of the species, not its oxidation. For example:',
      },
    },
    {
      type: 'list',
      id: 'list-convention',
      data: {
        style: 'bullet',
        items: [
          'Cu²⁺ + 2e⁻ ⇌ Cu (E° = +0.34 V)',
          'Zn²⁺ + 2e⁻ ⇌ Zn (E° = −0.76 V)',
          'Ag⁺ + e⁻ ⇌ Ag (E° = +0.80 V)',
        ],
      },
    },
    {
      type: 'paragraph',
      id: 'p-conv-2',
      data: {
        text: 'If you need to reverse a half-equation (to show oxidation instead of reduction), you must reverse the sign of E°. For example, if Zn → Zn²⁺ + 2e⁻ (oxidation), then E° = +0.76 V for this reversed process.',
      },
    },
    {
      type: 'heading',
      id: 'h-measuring',
      data: {
        text: 'Measuring E° by Connecting Half-Cells',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-meas-1',
      data: {
        text: 'To measure the standard electrode potential of a half-cell, it is connected to the standard hydrogen electrode via a salt bridge, which allows ions to flow and complete the circuit. A high-resistance voltmeter (digital multimeter) is connected to measure the potential difference. The voltmeter must have very high resistance (≥ 10 MΩ) to prevent significant current flow, which would alter the potentials measured. The half-cell with the higher (more positive) potential becomes the cathode (positive terminal of the voltmeter), and the SHE becomes the anode (negative terminal).',
      },
    },
    {
      type: 'callout',
      id: 'callout-worked-1',
      data: {
        style: 'worked',
        title: 'Worked Example: Measuring E° of a Copper Half-Cell',
        text: 'A copper electrode in 1 mol dm⁻³ CuSO₄ solution at 298 K is connected to a standard hydrogen electrode via a salt bridge. A voltmeter reads +0.34 V, with the copper electrode as the positive terminal. This means Cu²⁺ + 2e⁻ ⇌ Cu has E° = +0.34 V. Because this is positive, copper is more easily reduced than hydrogen ions, so Cu²⁺ acts as a stronger oxidising agent than H⁺.',
      },
    },
    {
      type: 'heading',
      id: 'h-series',
      data: {
        text: 'The Electrochemical Series',
        level: 3,
      },
    },
    {
      type: 'paragraph',
      id: 'p-series-1',
      data: {
        text: 'The electrochemical series is a table of half-reactions arranged in order of their standard electrode potentials (E°), from most negative (strongest reducing agents at the top) to most positive (strongest oxidising agents at the bottom). It is used to predict which species will be oxidised and which will be reduced in a reaction, and whether a reaction is feasible under standard conditions.',
      },
    },
    {
      type: 'comparisonTable',
      id: 'table-series',
      data: {
        headers: ['Half-Reaction', 'E° / V'],
        rows: [
          ['Li⁺ + e⁻ ⇌ Li', '−3.04'],
          ['Zn²⁺ + 2e⁻ ⇌ Zn', '−0.76'],
          ['Fe²⁺ + 2e⁻ ⇌ Fe', '−0.44'],
          ['2H⁺ + 2e⁻ ⇌ H₂', '0.00'],
          ['Cu²⁺ + 2e⁻ ⇌ Cu', '+0.34'],
          ['Ag⁺ + e⁻ ⇌ Ag', '+0.80'],
          ['MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O', '+1.51'],
        ],
        caption: 'Selected half-reactions and their standard electrode potentials at 298 K',
      },
    },
    {
      type: 'paragraph',
      id: 'p-series-2',
      data: {
        text: 'Half-reactions at the bottom of the series (high positive E° values, like MnO₄⁻) are strong oxidising agents and are easily reduced. Half-reactions at the top (negative E° values, like Li⁺) represent weak oxidising agents (or equivalently, strong reducing agents when written in reverse). The species being oxidised in any spontaneous reaction must come from a half-reaction lower in the series than the species being reduced.',
      },
    },
    {
      type: 'checklist',
      id: 'checklist-1',
      data: {
        items: [
          { text: 'I understand that E° measures a half-reaction\'s tendency to be reduced', checked: false },
          { text: 'I know the SHE has E° = 0.00 V by definition', checked: false },
          { text: 'I can identify the three standard conditions: 298 K, 1 mol dm⁻³, 1 bar', checked: false },
          { text: 'I always write half-equations with electrons on the left side', checked: false },
          { text: 'I can look up E° values and use them to predict reaction feasibility', checked: false },
        ],
      },
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Electrode potentials measure the tendency of a half-cell to gain electrons. More positive E° means stronger oxidising agent; more negative means stronger reducing agent.\n\nApply: Using E° values, predict whether Cu²⁺ can oxidise Zn. Write the overall equation.\n\nAnalyze: Why is the standard hydrogen electrode (SHE) chosen as the reference? What are its limitations?\n\nEvaluate: E° values are measured under standard conditions. Assess how non-standard conditions affect predictions.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-1',
      data: {
        text: 'Electrode potential (E) is a measure of a half-reaction\'s tendency to occur (be reduced). Standard electrode potential (E°) is measured under fixed conditions (298 K, 1 mol dm⁻³, 1 bar) relative to the standard hydrogen electrode (SHE), which has E° = 0.00 V. By measuring the voltage when a half-cell is connected to the SHE via a salt bridge, we can determine its E° value and place it in the electrochemical series. Half-equations are always written with reduction (electrons on the left) so that the sign of E° indicates the ease of reduction.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key-1',
        prompt: 'What is electrode potential, and what does a positive E value indicate?',
      },
      {
        id: 'cue-2',
        blockId: 'eq-she',
        prompt: 'Why is the standard hydrogen electrode assigned E° = 0.00 V?',
      },
      {
        id: 'cue-3',
        blockId: 'list-std-conditions',
        prompt: 'List the three standard conditions for measuring E°.',
      },
      {
        id: 'cue-4',
        blockId: 'p-conv-1',
        prompt: 'Why are half-equations always written with electrons on the left side?',
      },
      {
        id: 'cue-5',
        blockId: 'p-series-2',
        prompt: 'In the electrochemical series, which half-reactions are strong oxidising agents?',
      },
    ],
    summaryText:
      'Electrode potential (E) measures a half-reaction\'s tendency to occur (be reduced). The standard hydrogen electrode (SHE: 2H⁺ + 2e⁻ ⇌ H₂) has E° = 0.00 V by definition and is the reference for all other E° values. Standard conditions are 298 K, 1 mol dm⁻³, and 1 bar. Half-equations are written with reduction (electrons on left); reversing a half-equation reverses the sign of E°. The electrochemical series lists half-reactions by E° (most negative/reducing agents at top, most positive/oxidising agents at bottom).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Electrode potentials and electrochemical series',
      detail:
        'Definition of electrode potential relative to SHE, standard conditions (298 K, 1 mol dm⁻³, 1 bar), and ordering of half-reactions by E° value.',
      year: '2024',
      source: 'chemguide.co.uk',
      tags: ['electrode potential', 'SHE', 'electrochemical series'],
    },
  ],
};
