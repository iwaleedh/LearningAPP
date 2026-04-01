export const note_chemistry_5_16_2 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand the construction of the standard hydrogen electrode (SHE), explain why platinum is used, and describe how E° values are measured against the SHE.' } },
    { type: 'heading', id: 'h-construction', data: { text: 'Construction of the Standard Hydrogen Electrode', level: 2 } },
    {
      type: 'svg',
      id: 'svg-she-diagram',
      data: {
        svg: `<svg viewBox="0 0 400 330" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <rect width="400" height="330" fill="#0f172a" rx="10" stroke="#e2e8f0" stroke-width="1"/>
  <text x="200" y="22" text-anchor="middle" font-weight="bold" font-size="14" fill="#0f172a">Standard Hydrogen Electrode (SHE)</text>
  <rect x="130" y="35" width="60" height="38" fill="#44370a" stroke="#ca8a04" stroke-width="2" rx="5"/>
  <text x="160" y="51" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">H₂ gas</text>
  <text x="160" y="65" text-anchor="middle" fill="#92400e" font-size="10">100 kPa</text>
  <line x1="160" y1="73" x2="160" y2="108" stroke="#ca8a04" stroke-width="2.5" stroke-dasharray="4,2"/>
  <path d="M75,110 L75,275 L325,275 L325,110" fill="none" stroke="#64748b" stroke-width="2.5" rx="4"/>
  <rect x="76" y="165" width="248" height="109" fill="#1e3a8a" opacity="0.75"/>
  <text x="200" y="215" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="12">H⁺(aq) — 1 mol dm⁻³</text>
  <text x="200" y="245" text-anchor="middle" fill="#2563eb" font-size="11">Temperature: 298 K</text>
  <rect x="148" y="108" width="24" height="115" fill="#9ca3af" stroke="#374151" stroke-width="1.5" rx="3"/>
  <text x="185" y="135" fill="#374151" font-size="10">Pt wire electrode</text>
  <line x1="182" y1="132" x2="174" y2="140" stroke="#374151" stroke-width="1"/>
  <rect x="136" y="218" width="48" height="14" fill="#111827" rx="3" stroke="#000" stroke-width="1"/>
  <text x="196" y="229" fill="#111827" font-size="10">Pt black (platinum black)</text>
  <text x="196" y="241" fill="#6b7280" font-size="9">→ porous, large surface area</text>
  <line x1="194" y1="226" x2="186" y2="226" stroke="#111827" stroke-width="1"/>
  <circle cx="148" cy="253" r="5" fill="none" stroke="#93c5fd" stroke-width="1.5"/>
  <circle cx="165" cy="262" r="4" fill="none" stroke="#93c5fd" stroke-width="1.5"/>
  <circle cx="180" cy="250" r="6" fill="none" stroke="#93c5fd" stroke-width="1.5"/>
  <circle cx="145" cy="268" r="4" fill="none" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="270" y="255" fill="#0369a1" font-size="10" font-style="italic">H₂ bubbles ⇑</text>
  <rect x="20" y="155" width="50" height="80" rx="5" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="45" y="170" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="9">Standard</text>
  <text x="45" y="182" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="9">Conditions</text>
  <text x="45" y="196" text-anchor="middle" fill="#166534" font-size="9">T = 298 K</text>
  <text x="45" y="208" text-anchor="middle" fill="#166534" font-size="9">P = 100 kPa</text>
  <text x="45" y="220" text-anchor="middle" fill="#166534" font-size="9">[H⁺]=1 M</text>
  <text x="45" y="232" text-anchor="middle" fill="#059669" font-size="9">E° = 0.00 V</text>
  <line x1="70" y1="200" x2="75" y2="200" stroke="#16a34a" stroke-width="1"/>
  <line x1="160" y1="108" x2="160" y2="100" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="255" y="100" fill="#1d4ed8" font-size="10">→ To voltmeter / external circuit</text>
  <line x1="253" y1="98" x2="195" y2="105" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="200" y="298" text-anchor="middle" fill="#0f172a" font-size="11">2H⁺(aq) + 2e⁻ ⇌ H₂(g) &nbsp; E° = 0.00 V</text>
  <text x="200" y="315" text-anchor="middle" fill="#6b7280" font-size="9">Equilibrium rapidly established on platinum black surface</text>
</svg>`,
        caption: 'Standard Hydrogen Electrode: labelled diagram showing all key components and standard conditions',
      },
    },
    {
      type: 'list',
      id: 'list-she-components',
      data: {
        style: 'bullet',
        items: [
          'Platinum wire electrode — inert, does not react; acts as the electron conductor',
          'Platinum black (porous platinum foil) at the base — greatly increases surface area for the equilibrium to be established rapidly',
          'H₂ gas bubbled in at 100 kPa — sets up the H⁺/H₂ equilibrium on the Pt surface',
          'H⁺(aq) at exactly 1 mol dm⁻³ — provided by HCl or H₂SO₄; this is the ionic species in the equilibrium',
          'Temperature maintained at 298 K (25°C)',
          'Half-reaction: 2H⁺(aq) + 2e⁻ ⇌ H₂(g); assigned E° = 0.00 V by international convention',
        ],
      },
    },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Why Platinum is Used', text: '• Platinum is chemically inert — it does not react with H⁺ or H₂, so it does not introduce its own electrode potential\n• Platinum is catalytic — it promotes the H⁺(aq)/H₂(g) equilibrium, allowing it to be established quickly (acts as a catalyst)\n• Platinum black (finely divided Pt) provides a very large surface area → more active sites → equilibrium established faster and more completely\n• If any other metal were used, it would react with the acid or H₂, creating a different and unwanted potential' } },
    { type: 'heading', id: 'h-measuring-e', data: { text: 'Measuring E° Against the SHE', level: 2 } },
    {
      type: 'list',
      id: 'list-measuring-setup',
      data: {
        style: 'bullet',
        items: [
          'Connect the test half-cell to the SHE via a salt bridge to complete the circuit',
          'Connect a high-resistance voltmeter externally between the two electrodes',
          'All standard conditions must apply: 298 K, 1 mol dm⁻³ ion concentration, 100 kPa for any gases',
          'The voltmeter reading (in volts) with correct sign is the E° of the test half-cell',
          'If the test electrode is the positive terminal of the voltmeter → E° is positive (more easily reduced than H⁺)',
          'If the test electrode is the negative terminal → E° is negative (less easily reduced than H⁺)',
        ],
      },
    },
    {
      type: 'callout',
      id: 'callout-voltmeter',
      data: {
        style: 'warning',
        title: 'Why a High-Resistance Voltmeter is Essential',
        text: '• What we want to measure is the difference in charge build-up between the two electrodes — caused by the different equilibrium positions\n• If current flows, electrons move from one half-cell to the other → this disrupts the equilibrium and changes the electrode charges being measured\n• A high-resistance voltmeter (typically ≥10 MΩ) prevents significant current flow → the equilibria are not disturbed\n• The voltage measured with no current flowing is called the electromotive force (EMF) of the cell\n• In physics, EMF has a slightly different context — in chemistry, EMF specifically means the voltage measured with no current flowing',
      },
    },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'Measuring E° of Cu²⁺/Cu', text: 'Connect a copper electrode in 1 mol dm⁻³ CuSO₄ to the SHE via a salt bridge. Voltmeter reads +0.34 V with copper positive, establishing E° = +0.34 V for Cu²⁺ + 2e⁻ ⇌ Cu. Positive E° indicates copper is more easily reduced than H⁺. The equilibrium position for Cu lies further to the right than for H⁺ — copper prefers to remain as metal.' } },
    { type: 'heading', id: 'h-salt-bridge', data: { text: 'The Salt Bridge: Function and Design', level: 3 } },
    {
      type: 'list',
      id: 'list-salt-bridge',
      data: {
        style: 'bullet',
        items: [
          'The salt bridge connects the two half-cells, completing the electrical circuit by allowing ions to flow between them',
          'As electrons flow through the external circuit, charge builds up in both solutions — the salt bridge allows ions to migrate and neutralise this charge imbalance',
          'KNO₃ (potassium nitrate) is used because all potassium salts AND all nitrate salts are completely soluble → no precipitate forms if K⁺ or NO₃⁻ ions contact either solution',
          'Can be a simple piece of filter paper soaked in KNO₃ solution, or a glass tube stoppered with cotton wool containing the electrolyte',
          'The salt bridge does NOT allow bulk mixing of the two solutions — only ion migration through the electrolyte gel/solution',
        ],
      },
    },
    {
      type: 'callout',
      id: 'callout-salt-bridge-trap',
      data: {
        style: 'warning',
        title: 'High-Value Exam Tip: The "KCl Salt Bridge" Trap',
        text: 'Exam questions often ask why a potassium chloride (KCl) salt bridge cannot be used in a cell containing Ag⁺ or Pb²⁺ ions. The Cl⁻ ions from the bridge would react to form an insoluble precipitate of AgCl or PbCl₂. This blocks the pores of the salt bridge, stopping the flow of ions and dropping the cell voltage to zero. Always stick to KNO₃ unless otherwise specified!',
      },
    },
    {
      type: 'heading',
      id: 'h-complex-systems',
      data: {
        text: 'More Complex Half-Cell Systems',
        level: 2,
      },
    },
    {
      type: 'paragraph',
      id: 'p-complex-intro',
      data: {
        text: 'Not all half-cells involve a solid metal and its ions. There are two other common types encountered at A-level:',
      },
    },
    {
      type: 'comparisonTable',
      id: 'table-complex-systems',
      data: {
        headers: ['System Type', 'Example', 'Setup', 'E° / V'],
        rows: [
          ['Metal/metal ion (standard)', 'Cu²⁺/Cu', 'Metal electrode in ion solution', '+0.34'],
          ['Gas/ion (non-metal gas)', 'Cl₂(g)/Cl⁻(aq)', 'Pt electrode; Cl₂ gas at 100 kPa; Cl⁻ at 1 mol dm⁻³ (e.g. NaCl)', '+1.36'],
          ['Two ions in solution (same element)', 'Fe³⁺(aq)/Fe²⁺(aq)', 'Pt electrode in solution containing BOTH ions at 1 mol dm⁻³ each', '+0.77'],
          ['Two ions in solution (same element)', 'Br₂(l)/Br⁻(aq)', 'Pt electrode; both species in solution at 1 mol dm⁻³', '+1.07'],
        ],
        caption: 'Different types of half-cell: Pt electrode used whenever no reactive metal electrode is available',
      },
    },
    {
      type: 'list',
      id: 'list-complex-rules',
      data: {
        style: 'bullet',
        items: [
          'When the half-cell involves a gas (e.g. Cl₂): use Pt electrode; bubble the gas at 100 kPa into the solution of its ion (e.g. Cl⁻ at 1 mol dm⁻³) — very similar setup to the SHE',
          'When both species are in solution (e.g. Fe³⁺/Fe²⁺, Br₂/Br⁻): use a Pt electrode dipped into the mixed solution containing both species at 1 mol dm⁻³ each; no gas needed',
          'Platinum is used in all these cases because it is inert and conducts electricity without interfering with the equilibrium',
          'These are connected to the SHE in exactly the same way — salt bridge + high-resistance voltmeter — to obtain E° values',
        ],
      },
    },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I can describe SHE construction: Pt electrode, H₂ gas, 1 mol dm⁻³ H⁺, 298 K, 1 bar', checked: false }, { text: 'I understand why platinum is used (inert and catalytic)', checked: false }, { text: 'I know the SHE has E° = 0.00 V by definition', checked: false }, { text: 'I can explain the purpose of the salt bridge', checked: false }, { text: 'I can interpret positive and negative E° values', checked: false } ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Electrochemical cells convert chemical energy to electrical energy. The cell EMF depends on the difference in electrode potentials of the two half-cells.\n\nApply: Set up a Daniel cell (Zn|Zn²⁺||Cu²⁺|Cu). Calculate the EMF and identify electron flow direction.\n\nAnalyze: Why must a salt bridge be present for the cell to function? What happens if it is removed?\n\nEvaluate: Compare primary cells, secondary cells, and fuel cells. Which is most sustainable and why?'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: 'The SHE has a Pt electrode, 1 mol dm⁻³ H⁺, H₂ gas at 1 bar, 298 K; E° = 0.00 V by definition. Platinum is inert (no side reactions) and catalytic (promotes H⁺/H₂ equilibrium). Measure E° by connecting test half-cell to SHE via salt bridge; use high-resistance voltmeter to prevent current drain. Salt bridge allows ion flow without mixing solutions. Positive E° = easily reduced; negative E° = difficult to reduce.' } },
  ],
  recall: { enabled: true, cues: [ { id: 'cue-1', blockId: 'list-she-components', prompt: 'List the five key components of the SHE and state all standard conditions.' }, { id: 'cue-2', blockId: 'callout-key-1', prompt: 'Why is platinum used, and what extra role does platinum BLACK play?' }, { id: 'cue-3', blockId: 'callout-voltmeter', prompt: 'Why must the voltmeter have high resistance, and what name is given to the voltage measured with no current flowing?' }, { id: 'cue-4', blockId: 'list-salt-bridge', prompt: 'Why is KNO₃ chosen for the salt bridge? What two forms can a salt bridge take?' }, { id: 'cue-5', blockId: 'table-complex-systems', prompt: 'How is an E° measurement set up when both species in the half-cell are in solution (e.g. Fe³⁺/Fe²⁺)?' } ], summaryText: 'SHE: Pt wire + Pt black, H₂ at 100 kPa, H⁺ at 1 mol dm⁻γ, 298 K; E° = 0.00 V. Pt is inert (no side reactions) and catalytic; Pt black maximises surface area. High-resistance voltmeter prevents current flow — EMF = voltage with no current. KNO₃ salt bridge used because all K⁺ and NO₃⁻ salts are soluble, preventing precipitates. For gas or solution-phase redox systems, use a Pt electrode with appropriate species at 1 mol dm⁻³ and 100 kPa.', ready: false },
  evidence: [ { id: 'ev-1', title: 'Standard hydrogen electrode and E° measurement', detail: 'SHE construction, platinum properties, measuring E° with salt bridge and voltmeter.', year: '2024', source: 'chemguide.co.uk', tags: ['SHE', 'platinum', 'measuring E°', 'salt bridge'] } ],
};
