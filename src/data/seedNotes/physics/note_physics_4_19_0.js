export const note_physics_4_19_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Capacitance</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Capacitance</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Capacitance</strong> <strong>Capacitance</strong> Capacitors are electrical devices used to store energy in electronic circuits, commonly for a backup release of energy if the power fails" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Capacitors do this by storing electric charge, which creates a build up of electric potentialenergy They are made in the form of two conductive metalplates connected to a voltage supply (parallel plate <strong>capacitor</strong>)" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "There is commonly a dielectric in between the plates, to ensure charge does not flow across them The <strong>capacitor</strong> circuit symbol is: The <strong>capacitor</strong> circuit symbol is two parallel lines" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Capacitors are marked with a value of their <strong>capacitance</strong> <strong>Capacitance</strong> is defined as: The charge stored per unit <strong>potential difference</strong> (between the plates) The greater the <strong>capacitance</strong>, the greater the charge stored in the <strong>capacitor</strong>" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>capacitance</strong> of a <strong>capacitor</strong> is defined by the equation: Where: C = <strong>capacitance</strong> (F) Q = charge stored (C)" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "V = <strong>potential difference</strong> across the <strong>capacitor</strong> plates (V) A <strong>capacitor</strong> used in small circuits <strong>Capacitance</strong> is measured in the unit Farad (F) In practice, 1 F is a very large unit" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "Often it will be quoted in the order of micro Farads ( μ F), nanofarads (nF) or picofarads (pF) If the <strong>capacitor</strong> is made of parallel plates, Q is the charge on the plates and V is the <strong>potential difference</strong> across the <strong>capacitor</strong>" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "The charge Q is not the charge of the <strong>capacitor</strong> itself, it is the charge stored on the plates This <strong>capacitance</strong> equation shows that an object's <strong>capacitance</strong> is the ratio of the charge stored by the <strong>capacitor</strong> to the <strong>potential difference</strong> between the plates" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "Worked Example A parallel plate <strong>capacitor</strong> has a <strong>capacitance</strong> of 1 nF and is connected to a voltage supply of 0.3 kV." }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "Calculate the charge on the plates." }] } },
    {
      id: 'svg-capacitor-basic',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="40" width="20" height="120" fill="#3B82F6" stroke="#1E40AF" stroke-width="2"/><rect x="280" y="40" width="20" height="120" fill="#EF4444" stroke="#991B1B" stroke-width="2"/><text x="110" y="30" font-family="Arial" font-size="14" text-anchor="middle" fill="#1E40AF">+Q</text><text x="290" y="30" font-family="Arial" font-size="14" text-anchor="middle" fill="#991B1B">-Q</text><path d="M125 60 L275 60" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><path d="M125 100 L275 100" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><path d="M125 140 L275 140" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><text x="200" y="120" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Electric Field E</text><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#9CA3AF"/></marker></defs></svg>',
        caption: 'Parallel Plate Capacitor'
      }
    },
    {
      id: 'svg-capacitance-formula',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="150" fill="#0f172a" rx="10"/><text x="150" y="60" font-family="Verdana" font-size="28" font-weight="bold" text-anchor="middle" fill="#1E3A8A">C = Q / V</text><text x="150" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">C = Capacitance (F)</text><text x="150" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">Q = Charge (C)</text><text x="150" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">V = Potential Difference (V)</text></svg>',
        caption: 'Capacitance Relationship'
      }
    },
    {
      id: 'enr-svg-cap',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg"><defs><marker id="enr-arr" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#6B7280"/></marker></defs><rect x="42" y="45" width="14" height="130" fill="#1e3a8a" stroke="#1E40AF" stroke-width="1.5"/><rect x="174" y="45" width="14" height="130" fill="#3d1212" stroke="#991B1B" stroke-width="1.5"/><text x="35" y="78" font-family="Arial" font-size="12" fill="#1E40AF">+</text><text x="35" y="97" font-family="Arial" font-size="12" fill="#1E40AF">+</text><text x="35" y="116" font-family="Arial" font-size="12" fill="#1E40AF">+</text><text x="35" y="135" font-family="Arial" font-size="12" fill="#1E40AF">+</text><text x="35" y="154" font-family="Arial" font-size="12" fill="#1E40AF">+</text><text x="194" y="78" font-family="Arial" font-size="12" fill="#991B1B">&#8722;</text><text x="194" y="97" font-family="Arial" font-size="12" fill="#991B1B">&#8722;</text><text x="194" y="116" font-family="Arial" font-size="12" fill="#991B1B">&#8722;</text><text x="194" y="135" font-family="Arial" font-size="12" fill="#991B1B">&#8722;</text><text x="194" y="154" font-family="Arial" font-size="12" fill="#991B1B">&#8722;</text><line x1="58" y1="84" x2="172" y2="84" stroke="#6B7280" stroke-width="1.5" marker-end="url(#enr-arr)"/><line x1="58" y1="110" x2="172" y2="110" stroke="#6B7280" stroke-width="1.5" marker-end="url(#enr-arr)"/><line x1="58" y1="136" x2="172" y2="136" stroke="#6B7280" stroke-width="1.5" marker-end="url(#enr-arr)"/><text x="115" y="128" font-family="Arial" font-size="13" text-anchor="middle" fill="#374151">E</text><text x="49" y="35" font-family="Arial" font-size="12" text-anchor="middle" fill="#1E40AF">+Q</text><text x="181" y="35" font-family="Arial" font-size="12" text-anchor="middle" fill="#991B1B">&#8722;Q</text><line x1="42" y1="195" x2="188" y2="195" stroke="#7C3AED" stroke-width="1.5"/><line x1="42" y1="191" x2="42" y2="199" stroke="#7C3AED" stroke-width="1.5"/><line x1="188" y1="191" x2="188" y2="199" stroke="#7C3AED" stroke-width="1.5"/><text x="115" y="213" font-family="Arial" font-size="12" text-anchor="middle" fill="#7C3AED">V</text><text x="115" y="232" font-family="Arial" font-size="13" text-anchor="middle" fill="#1E3A8A" font-weight="bold">C = Q/V</text><text x="115" y="250" font-family="Arial" font-size="10" text-anchor="middle" fill="#374151">E = V/d = Q/(&#949;&#8320;A)</text><line x1="228" y1="15" x2="228" y2="258" stroke="#D1D5DB" stroke-width="1.5" stroke-dasharray="5,3"/><text x="354" y="18" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#1E3A8A">Q&#8211;V Graph</text><line x1="250" y1="215" x2="250" y2="38" stroke="#374151" stroke-width="1.5"/><line x1="250" y1="215" x2="460" y2="215" stroke="#374151" stroke-width="1.5"/><text x="243" y="32" font-family="Arial" font-size="12" text-anchor="end" fill="#374151">Q</text><text x="468" y="219" font-family="Arial" font-size="12" fill="#374151">V</text><line x1="250" y1="215" x2="430" y2="60" stroke="#3B82F6" stroke-width="2.5"/><polygon points="250,215 430,215 430,60" fill="#1e3a8a" fill-opacity="0.35"/><line x1="430" y1="215" x2="430" y2="219" stroke="#374151" stroke-width="1.5"/><text x="430" y="230" font-family="Arial" font-size="10" text-anchor="middle" fill="#374151">V&#8320;</text><line x1="246" y1="60" x2="250" y2="60" stroke="#374151" stroke-width="1.5"/><text x="242" y="64" font-family="Arial" font-size="10" text-anchor="end" fill="#374151">Q&#8320;</text><text x="340" y="165" font-family="Arial" font-size="11" text-anchor="middle" fill="#3B82F6">slope = C</text><text x="395" y="195" font-family="Arial" font-size="10" text-anchor="middle" fill="#1E3A8A">Area</text><text x="395" y="207" font-family="Arial" font-size="10" text-anchor="middle" fill="#1E3A8A">= &#189;Q&#8320;V&#8320;</text><text x="354" y="248" font-family="Arial" font-size="10" text-anchor="middle" fill="#10B981">= Energy stored</text></svg>',
        caption: 'Capacitor: C=Q/V. Energy stored E=½QV=½CV²=Q²/2C'
      }
    },
    {
      id: 'enr-worked-flash',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Camera Flash Capacitor',
        text: 'C = 1000 μF = 10<sup>-3</sup> F, V = 300 V.<br><br><strong>Charge stored:</strong> Q = CV = 10<sup>-3</sup> × 300 = 0.3 C<br><br><strong>Energy stored:</strong> E = ½CV<sup>2</sup> = ½ × 10<sup>-3</sup> × 300<sup>2</sup> = 45 J<br><br><strong>Flash duration:</strong> Δt = 1 ms = 10<sup>-3</sup> s<br><br><strong>Power delivered:</strong> P = E / Δt = 45 / 10<sup>-3</sup> = 45 000 W = 45 kW<br><br>A battery provides only ~3 W — the <strong>capacitor</strong> accumulates energy slowly then releases it in a short, intense burst. The same principle applies in heart defibrillators.'
      }
    },
    {
      id: 'enr-tip-cap',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Energy Formulae',
        text: 'Three equivalent energy formulae: <strong>E = ½QV = ½CV<sup>2</sup> = Q<sup>2</sup>/2C</strong> — all equivalent. Choose based on what is known: use ½CV<sup>2</sup> when V is given, Q<sup>2</sup>/2C when Q and C are given.<br><br><strong>C = Q/V</strong> defines <strong>capacitance</strong>. A larger C stores more charge at the same voltage, and more energy.<br><br><strong>Area under Q&#8211;V graph</strong> = ½QV = energy stored (triangle: base V, height Q).<br><br><strong>Unit:</strong> Farad F = C V<sup>-1</sup> = C<sup>2</sup> J<sup>-1</sup>.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Three Energy Formulae",
        text: "Three equivalent energy formulae: E = \u00bdQV = \u00bdCV\u00b2 = Q\u00b2/2C \u2014 choose based on known quantities. Use \u00bdCV\u00b2 when V given."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'key',
        title: "Capacitance Definition",
        text: "C = Q/V defines capacitance. Area under Q\u2013V graph = \u00bdQV = energy stored (triangle area formula)."
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise <strong>Capacitance</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
