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
      type: 'callout',
      id: 'callout-oilrig',
      data: {
        style: 'key',
        title: 'Reminder: OIL RIG',
        text: '• Oxidation Is Loss of electrons — oxidation number increases\n• Reduction Is Gain of electrons — oxidation number decreases\n• A species that is oxidised always has a paired reduction (redox reactions)\n• Anything that is oxidised must cause a reduction reaction alongside it',
      },
    },
    {
      type: 'heading',
      id: 'h-metal-equil',
      data: {
        text: 'Metal–Solution Equilibrium',
        level: 2,
      },
    },
    {
      type: 'list',
      id: 'list-metal-equil',
      data: {
        style: 'bullet',
        items: [
          'When a metal is placed in water or in a solution of its own ions, some atoms lose electrons and enter solution as positive ions (oxidation)',
          'The electrons lost cannot enter solution — they accumulate on the metal surface, making it negatively charged',
          'The build-up of negative charge attracts positive ions back from solution',
          'Some positive ions regain electrons and return to the metal surface (reduction)',
          'Forward and reverse reactions continue until dynamic equilibrium is reached (rate forward = rate reverse)',
          'The equilibrium is always written as the reduction half-reaction (ions gaining electrons) — this is the convention throughout electrochemistry',
        ],
      },
    },
    {
      type: 'equation',
      id: 'eq-metal-equil',
      data: {
        html: 'M<sup>n+</sup>(aq) + ne<sup>−</sup> ⇌ M(s)',
        caption: 'General metal–solution equilibrium written as the reduction half-reaction',
      },
    },
    {
      type: 'svg',
      id: 'svg-metal-equil',
      data: {
        svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <rect width="420" height="200" fill="#f8fafc" rx="10" stroke="#e2e8f0" stroke-width="1"/>
  <text x="210" y="20" text-anchor="middle" font-weight="bold" font-size="13" fill="#0f172a">Metal–Solution Equilibrium</text>
  <rect x="20" y="35" width="90" height="130" rx="6" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
  <text x="65" y="97" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="13">Metal</text>
  <text x="65" y="113" text-anchor="middle" fill="#e2e8f0" font-size="11">M(s)</text>
  <text x="118" y="58" fill="#6366f1" font-size="15" font-weight="bold">e⁻</text>
  <text x="118" y="76" fill="#6366f1" font-size="15" font-weight="bold">e⁻</text>
  <text x="118" y="94" fill="#6366f1" font-size="15" font-weight="bold">e⁻</text>
  <text x="118" y="112" fill="#6366f1" font-size="15" font-weight="bold">e⁻</text>
  <text x="112" y="148" fill="#4f46e5" font-size="9">build-up</text>
  <rect x="160" y="35" width="240" height="130" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="280" y="58" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Solution</text>
  <circle cx="230" cy="95" r="14" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
  <text x="230" y="100" text-anchor="middle" fill="#92400e" font-size="12">M⁺</text>
  <circle cx="285" cy="120" r="14" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
  <text x="285" y="125" text-anchor="middle" fill="#92400e" font-size="12">M⁺</text>
  <circle cx="345" cy="90" r="14" fill="#fef9c3" stroke="#d97706" stroke-width="1.5"/>
  <text x="345" y="95" text-anchor="middle" fill="#92400e" font-size="12">M⁺</text>
  <path d="M155,75 Q143,55 132,62" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#ra)"/>
  <text x="94" y="50" fill="#ef4444" font-weight="bold" font-size="10">oxidation</text>
  <text x="90" y="62" fill="#ef4444" font-size="10">M → M⁺ + e⁻</text>
  <path d="M155,125 Q143,140 132,133" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#ga)"/>
  <text x="88" y="155" fill="#16a34a" font-weight="bold" font-size="10">reduction</text>
  <text x="88" y="167" fill="#16a34a" font-size="10">M⁺ + e⁻ → M</text>
  <text x="280" y="155" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="10">Dynamic equilibrium</text>
  <text x="280" y="168" text-anchor="middle" fill="#3b82f6" font-size="9">rate(fwd) = rate(rev)</text>
  <defs>
    <marker id="ra" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
    <marker id="ga" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/></marker>
  </defs>
</svg>`,
        caption: 'Electrons cannot enter solution — they build up on the metal surface, attracting ions back to establish equilibrium',
      },
    },
    {
      type: 'callout',
      id: 'callout-abs-potential',
      data: {
        style: 'warning',
        title: 'Why Absolute Potential Difference Cannot Be Measured',
        text: '• The absolute potential difference is the voltage between the negatively charged metal (excess electrons) and the positive ions in solution — this cannot be measured directly\n• To complete a circuit, a second electrode must touch the solution — but any second metal creates its own potential difference, interfering with the measurement\n• Using the same metal twice only measures the difference between identical electrodes (= 0)\n• Therefore, it is physically impossible to measure the absolute potential difference of a single metal–solution system',
      },
    },
    {
      type: 'callout',
      id: 'callout-reference',
      data: {
        style: 'tip',
        title: 'Solution: Measure Everything Relative to a Reference Electrode',
        text: '• Instead of absolute values, measure all electrode potentials relative to a chosen standard reference\n• Analogy: Relative atomic mass — we set carbon-12 as exactly 12 and measure all atomic masses relative to C-12\n• In electrochemistry: the Standard Hydrogen Electrode (SHE) is our reference, assigned E° = 0.00 V by convention\n• All standard electrode potentials (E°) are measured relative to the SHE — this allows them to be directly compared',
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
        text: 'The standard electrode potential (E°) provides a numerical measure of where the position of equilibrium lies in a metal–solution half-cell. Each half-cell is connected to the SHE and measured with a high-resistance voltmeter. The key points:',
      },
    },
    {
      type: 'list',
      id: 'list-eo-meaning',
      data: {
        style: 'bullet',
        items: [
          'More negative E° → equilibrium lies further to the LEFT → metal more readily loses electrons to form ions → stronger reducing agent',
          'More positive E° → equilibrium lies further to the RIGHT → metal less readily loses electrons → weaker reducing agent (stronger oxidising agent)',
          'E° is measured in volts (V) and can be positive or negative, depending on position relative to the SHE (E° = 0.00 V)',
          'Example: Mg E° = −2.37 V → equilibrium lies far left, Mg readily forms Mg²⁺',
          'Example: Cu E° = +0.34 V → equilibrium lies right, Cu prefers to remain as Cu metal',
        ],
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
          ['Mg²⁺ + 2e⁻ ⇌ Mg', '−2.37'],
          ['Zn²⁺ + 2e⁻ ⇌ Zn', '−0.76'],
          ['Fe²⁺ + 2e⁻ ⇌ Fe', '−0.44'],
          ['2H⁺ + 2e⁻ ⇌ H₂', '0.00'],
          ['Cu²⁺ + 2e⁻ ⇌ Cu', '+0.34'],
          ['Ag⁺ + e⁻ ⇌ Ag', '+0.80'],
          ['MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O', '+1.51'],
        ],
        caption: 'Electrochemical series (most negative/strongest reducing agents at top; most positive/strongest oxidising agents at bottom). Values from data book — not memorised.',
      },
    },
    {
      type: 'callout',
      id: 'callout-topright-bottomleft',
      data: {
        style: 'tip',
        title: 'Mnemonic: Top-Right / Bottom-Left',
        text: '• Every half-equation is written: [Left side ⇌ Right side] where LEFT = oxidised form, RIGHT = reduced form\n• TOP-RIGHT species are the most powerful REDUCING AGENTS (most negative E° → equilibrium far left → readily lose electrons)\n• BOTTOM-LEFT species are the most powerful OXIDISING AGENTS (most positive E° → equilibrium far right → readily gain electrons)\n• Example: Li (top right) is the strongest reducing agent; F₂ (bottom left) is the strongest oxidising agent\n• You already know this from Groups 1 & 7: fluorine is the strongest oxidising halogen — confirmed by its position at the bottom of the electrochemical series',
      },
    },
    {
      type: 'svg',
      id: 'svg-series-diagram',
      data: {
        svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <rect width="400" height="220" fill="#f8fafc" rx="10" stroke="#e2e8f0" stroke-width="1"/>
  <text x="200" y="22" text-anchor="middle" font-weight="bold" font-size="13" fill="#0f172a">Electrochemical Series — Key Rules</text>
  <rect x="20" y="35" width="360" height="145" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="40" y="56" fill="#dc2626" font-size="11" font-weight="bold">Most negative E° (top)</text>
  <text x="40" y="72" fill="#374151" font-size="10">Li⁺ + e⁻ ⇌  Li          E° = −3.04 V</text>
  <text x="40" y="87" fill="#374151" font-size="10">Mg²⁺ + 2e⁻ ⇌ Mg        E° = −2.37 V</text>
  <text x="40" y="102" fill="#374151" font-size="10">Zn²⁺ + 2e⁻ ⇌ Zn        E° = −0.76 V</text>
  <text x="40" y="117" fill="#6b7280" font-size="10">2H⁺ + 2e⁻ ⇌ H₂         E° =  0.00 V  ← SHE reference</text>
  <text x="40" y="132" fill="#374151" font-size="10">Cu²⁺ + 2e⁻ ⇌ Cu        E° = +0.34 V</text>
  <text x="40" y="147" fill="#374151" font-size="10">Ag⁺ + e⁻ ⇌ Ag           E° = +0.80 V</text>
  <text x="40" y="162" fill="#0369a1" font-size="11" font-weight="bold">Most positive E° (bottom)</text>
  <path d="M360,40 L360,175" stroke="#e2e8f0" stroke-width="1"/>
  <text x="378" y="56" fill="#dc2626" font-size="10" text-anchor="middle" transform="rotate(-90,378,100)">Strongest reducing agents →</text>
  <line x1="375" y1="45" x2="375" y2="100" stroke="#dc2626" stroke-width="2" marker-end="url(#da)"/>
  <line x1="375" y1="175" x2="375" y2="120" stroke="#2563eb" stroke-width="2" marker-end="url(#db)"/>
  <text x="315" y="40" fill="#dc2626" font-size="9">TOP-RIGHT</text>
  <text x="310" y="50" fill="#dc2626" font-size="9">= best reducer</text>
  <text x="310" y="178" fill="#2563eb" font-size="9">BOTTOM-LEFT</text>
  <text x="310" y="188" fill="#2563eb" font-size="9">= best oxidiser</text>
  <defs>
    <marker id="da" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
    <marker id="db" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,6 L6,3 L0,0 Z" fill="#2563eb"/></marker>
  </defs>
  <text x="200" y="210" text-anchor="middle" fill="#6b7280" font-size="9">All half-equations written as reduction (electrons on left) — same as data book</text>
</svg>`,
        caption: 'Top-right species are strongest reducing agents; bottom-left are strongest oxidising agents',
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
      { id: 'cue-1', blockId: 'list-metal-equil', prompt: 'Describe the metal–solution equilibrium: why do electrons build up on the metal, and when is equilibrium reached?' },
      { id: 'cue-2', blockId: 'callout-abs-potential', prompt: 'Why can\'t we directly measure the absolute potential difference of a metal–solution system?' },
      { id: 'cue-3', blockId: 'callout-reference', prompt: 'What analogy helps explain why we use the SHE as a reference, and what is its assigned E° value?' },
      { id: 'cue-4', blockId: 'list-eo-meaning', prompt: 'What does a very negative E° tell you about the equilibrium position and the species\' ability to lose electrons?' },
      { id: 'cue-5', blockId: 'callout-topright-bottomleft', prompt: 'In the electrochemical series, where do you find the strongest reducing agents and the strongest oxidising agents?' },
      { id: 'cue-6', blockId: 'list-std-conditions', prompt: 'List the three standard conditions required to measure E° values.' },
    ],
    summaryText:
      'When a metal is placed in solution, a dynamic equilibrium forms between M(s) and Mⁿ⁺(aq) — electrons accumulate on the metal surface. We cannot measure this absolute potential difference directly, so all E° values are measured relative to the SHE (E° = 0.00 V), just as atomic masses are measured relative to carbon-12. Standard conditions: 298 K, 1 mol dm⁻³, 100 kPa. More negative E° → equilibrium lies left → stronger reducing agent (top-right of series). More positive E° → equilibrium lies right → stronger oxidising agent (bottom-left of series). Half-equations always written as reduction (electrons on left).',
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
