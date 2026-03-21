export const note_physics_2_8_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Resistance</strong> & Illumination" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Resistance</strong> & Illumination", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Electromotive Force</strong> <strong>Electromotive Force</strong> When charge passes through a power supply such as a battery, it gains electrical energy The <strong>electromotive force</strong> (e.m.f.) is defined as:" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "The amount of chemical energy converted to electrical energy per unit charge when charge passes through a power supply e.m.f. is measured in Volts (V) Definition of e.m.f. with regards to energy transfer" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "This can also be written as: E.m.f. is: represented by the symbol ε (greek letter epsilon) not actually a force, but a measure of energy transferred per coulomb of charge" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "is measured in volts (V), which is J C  in S.I. units e.m.f. is also the <strong>potential difference</strong> across the cell when no <strong>current</strong> is flowing e.m.f. can be measured by connecting a high-<strong>resistance</strong> voltmeter around the terminals of the cell in an open circuit" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "e.m.f. is measured using a voltmeter connected in parallel with the cell −1 <strong>Internal Resistance</strong> <strong>Internal Resistance</strong>" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "All power supplies have some <strong>resistance</strong> between their terminals This is called <strong>internal resistance</strong> (r) <strong>Internal resistance</strong> causes some electrical energy to be transformed to heat energy in the power supply itself" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "This is why the cell becomes warm after a period of time Therefore, the <strong>internal resistance</strong> causes energy loss in a power supply A cell can be thought of as a source of e.m.f. with an <strong>internal resistance</strong> connected in series" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "The amount of <strong>voltage</strong> lost is known as the 'lost volts' A higher <strong>internal resistance</strong> will result in a higher value for lost volts Circuit showing the e.m.f and <strong>internal resistance</strong> of a power supply Where:" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "R = <strong>resistance</strong> of the circuit (the ‘load resistor') r = <strong>internal resistance</strong> ε = e.m.f." }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "V = 'lost volts' V= <strong>voltage</strong> across the load (sometimes also called V, the terminal <strong>voltage</strong>)r R T Examiner Tips and Tricks" }] } },

      {
      "id": "svg-ldr-graph",
      "type": "svg",
      "data": {
        "caption": "Resistance against Light Intensity for an LDR",
        "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 300\"><path d=\"M50 250 L50 50 M50 250 L350 250\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"220\" y=\"280\" font-family=\"Arial\" font-size=\"18\" fill=\"#1e293b\">Light Intensity (Lux)</text><text x=\"30\" y=\"150\" font-family=\"Arial\" font-size=\"18\" fill=\"#1e293b\" transform=\"rotate(-90 30,150)\">Resistance (\u03a9)</text><path d=\"M70 60 Q 100 220 320 230\" fill=\"none\" stroke=\"#eab308\" stroke-width=\"4\"/><rect x=\"200\" y=\"50\" width=\"160\" height=\"90\" rx=\"8\" fill=\"#fdfde8\" stroke=\"#fef08a\" stroke-width=\"2\"/><text x=\"280\" y=\"75\" font-family=\"Arial\" font-size=\"14\" fill=\"#ca8a04\" text-anchor=\"middle\">LDR (Light Dependent Resistor)</text><text x=\"280\" y=\"95\" font-family=\"Arial\" font-size=\"12\" fill=\"#a16207\" text-anchor=\"middle\">Dark = High R (M\u03a9)</text><text x=\"280\" y=\"115\" font-family=\"Arial\" font-size=\"12\" fill=\"#854d0e\" text-anchor=\"middle\">Light = Low R (\u03a9)</text></svg>"
      }
    },
    {
      id: 'enr-svg-summary',
      type: 'svg',
      data: {
        caption: 'Internal resistance summary map',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280"><defs><marker id="arr-ir" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6366f1"/></marker></defs><rect width="500" height="280" fill="#0f172a" rx="8"/><rect x="175" y="100" width="150" height="42" rx="6" fill="#6366f1" stroke="#4338ca" stroke-width="2"/><text x="250" y="120" font-family="Arial" font-size="14" fill="#1e293b" text-anchor="middle" font-weight="bold">Cell: \u03b5, r</text><text x="250" y="138" font-family="Arial" font-size="10" fill="#2d2f72" text-anchor="middle">EMF and internal resistance</text><rect x="135" y="16" width="230" height="38" rx="6" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/><text x="250" y="32" font-family="Arial" font-size="12" fill="#1e40af" text-anchor="middle">Open circuit: V = \u03b5</text><text x="250" y="50" font-family="Arial" font-size="11" fill="#1d4ed8" text-anchor="middle">(no current, I = 0)</text><line x1="250" y1="100" x2="250" y2="56" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-ir)"/><rect x="358" y="52" width="138" height="38" rx="6" fill="#0a2e1a" stroke="#22c55e" stroke-width="1.5"/><text x="427" y="68" font-family="Arial" font-size="12" fill="#15803d" text-anchor="middle">Terminal PD:</text><text x="427" y="84" font-family="Arial" font-size="12" fill="#166534" text-anchor="middle">V = \u03b5 \u2212 Ir</text><line x1="325" y1="113" x2="360" y2="80" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-ir)"/><rect x="358" y="148" width="138" height="38" rx="6" fill="#44370a" stroke="#eab308" stroke-width="1.5"/><text x="427" y="164" font-family="Arial" font-size="12" fill="#854d0e" text-anchor="middle">Lost volts:</text><text x="427" y="180" font-family="Arial" font-size="12" fill="#92400e" text-anchor="middle">V_lost = Ir</text><line x1="325" y1="127" x2="360" y2="162" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-ir)"/><rect x="135" y="192" width="230" height="38" rx="6" fill="#3d1212" stroke="#ef4444" stroke-width="1.5"/><text x="250" y="208" font-family="Arial" font-size="12" fill="#991b1b" text-anchor="middle">Short circuit:</text><text x="250" y="224" font-family="Arial" font-size="12" fill="#b91c1c" text-anchor="middle">I_max = \u03b5 / r</text><line x1="250" y1="142" x2="250" y2="190" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-ir)"/><rect x="4" y="98" width="140" height="42" rx="6" fill="#3b1460" stroke="#a855f7" stroke-width="1.5"/><text x="74" y="116" font-family="Arial" font-size="12" fill="#6b21a8" text-anchor="middle">Max power:</text><text x="74" y="132" font-family="Arial" font-size="12" fill="#7e22ce" text-anchor="middle">when R = r</text><line x1="175" y1="120" x2="146" y2="119" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-ir)"/><rect x="178" y="240" width="144" height="36" rx="4" fill="#1e293b" stroke="#cbd5e1" stroke-width="1"/><line x1="190" y1="272" x2="190" y2="246" stroke="#334155" stroke-width="1.5"/><line x1="190" y1="272" x2="316" y2="272" stroke="#334155" stroke-width="1.5"/><line x1="191" y1="248" x2="314" y2="270" stroke="#ef4444" stroke-width="2"/><text x="187" y="247" font-family="Arial" font-size="9" fill="#475569" text-anchor="end">\u03b5</text><text x="318" y="274" font-family="Arial" font-size="9" fill="#475569">I</text><text x="189" y="277" font-family="Arial" font-size="9" fill="#475569">V</text><text x="252" y="262" font-family="Arial" font-size="9" fill="#ef4444" text-anchor="middle">slope = \u2212r</text></svg>',
      },
    },
    {
      id: 'enr-worked-battery-test',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Testing a battery',
        text: 'Voltmeter reads <strong>1.52 V</strong> with no load — this is the <strong>EMF</strong> (\u03b5 = 1.52 V). Connect a <strong>10 \u03a9</strong> load resistor: voltmeter drops to <strong>1.35 V</strong> (terminal PD).<br><br>Lost volts = 1.52 \u2212 1.35 = <strong>0.17 V</strong> = Ir.<br><strong>Current</strong> I = V/R = 1.35/10 = <strong>0.135 A</strong>.<br>Therefore r = 0.17/0.135 = <strong>1.26 \u03a9</strong>.<br><br>High <strong>internal resistance</strong> indicates an old or damaged battery. New AA battery: r \u2248 0.1\u20130.5 \u03a9. Car battery: r \u2248 0.01\u20130.05 \u03a9 (very low, to deliver over 100 A to the starter motor).',
      },
    },
    {
      id: 'enr-tip-summary',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: Key relationships at a glance',
        text: '\u03b5 = V + Ir, where V is the terminal PD. The V\u2013I graph has <strong>gradient = \u2212r</strong> and <strong>y-intercept = \u03b5</strong>. Low r means more energy delivered to the external circuit. High <strong>current</strong> demand causes a large terminal PD drop. Always draw r as a small resistor in series <em>inside</em> the battery symbol in circuit diagrams.',
      },
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Light-Dependent Resistor (LDR)",
        text: "Resistance decreases with light intensity (photons create charge carriers). In darkness R is very high (M\u03a9 range); in bright light R drops to ~100 \u03a9. Used in light-sensor circuits, automatic brightness control, and alarm systems."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Photosensitive Device Applications",
        text: "An LDR in a potential divider circuit produces a voltage that varies with light level. This voltage change can trigger logic circuits or be used to regulate a system automatically (e.g., street lights that activate at dusk)."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise <strong>Resistance</strong> & Illumination' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
