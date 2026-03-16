export const note_physics_4_21_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Faraday's Law</strong>" }, terms: [] },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Faraday's Law</strong>", level: 2 }, terms: [] },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Faraday's Law</strong> connects the rate of change of flux linkage with induced e.m.f. It is the central quantitative law of electromagnetic induction, published by Michael Faraday in 1831 after his experiments with coils and magnets." }] } },
    { id: 'callout-1', type: 'callout', data: { style: 'key', title: "<strong>Faraday's Law</strong>: Statement and Equation", text: 'The magnitude of the induced e.m.f is directly proportional to the rate of change of <strong>magnetic flux</strong> linkage.<br/><strong>ε = −N(ΔΦ/Δt)</strong><br/>Where: ε = induced e.m.f (V), N = number of turns, ΔΦ = change in flux (Wb), Δt = time interval (s).<br/>The negative sign represents Lenz\'s Law (the induced e.m.f opposes the change causing it).' }, terms: [] },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Faraday's Law</strong> as an equation is: ε = Δ(NΦ)/Δt. Where ε = induced e.m.f (V), Δ(NΦ) = change in <strong>flux linkage</strong> (Wb turns), and Δt = time interval (s)." }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "Where ε = induced e.m.f (V), Δ(NΦ) = change in <strong>flux linkage</strong> (Wb turns), Δt = time interval (s). If the interval of time becomes very small (in the limit of Δt → 0), the equation for <strong>Faraday's Law</strong> can be written using calculus notation as: ε = d(NΦ)/dt." }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "If the interval of time becomes very small (i.e., in the limit of Δt → 0) the equation for <strong>Faraday's Law</strong> can be written as: ε = d(NΦ)/dt." },
      { text: "This calculus form is used when flux varies continuously with time, such as in a rotating coil." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "Combining <strong>Lenz's Law</strong> and <strong>Faraday's Law</strong> gives the complete expression: ε = −d(NΦ)/dt. The negative sign represents <strong>Lenz's Law</strong> — the induced e.m.f ε is set up in an 'opposite direction' to oppose the changing flux linkage." }] } },
    { id: 'callout-2', type: 'callout', data: { style: 'tip', title: 'Graph Interpretation', text: 'The gradient of a graph of <strong>magnetic flux</strong> linkage (NΦ) against time gives the magnitude of the induced e.m.f. If the gradient is steep (flux changes rapidly), the induced e.m.f is large. If the gradient is zero (flux constant), e.m.f = 0. Note: if the gradient is positive, the induced e.m.f is negative (Lenz\'s Law).' }, terms: [] },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>negative sign</strong> means if the gradient of flux linkage vs time is positive, the induced e.m.f is negative. This is again due to <strong>Lenz's Law</strong>, which states the e.m.f is set up to oppose the effects." }] } },
    { id: 'callout-3', type: 'callout', data: { style: 'info', title: 'Real-World Application: ABS Sensors in Cars', text: 'Anti-lock Braking System (ABS) sensors in car wheels use electromagnetic induction directly. A toothed ring rotates past a magnetic sensor coil; as each tooth passes, the changing flux induces a pulse of e.m.f. The frequency of these pulses tells the car\'s computer the wheel speed. If a wheel locks up, the pulses stop and the ABS system releases the brake — all based on Faraday\'s Law.' }, terms: [] },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Worked Example:</strong> A small rectangular coil contains 350 turns of wire. The longer sides are 3.5 cm and the shorter sides are 1.4 cm. The coil is held between the poles of a large magnet so that it can rotate about an axis through its centre." }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "The coil is positioned horizontally and then turned through an angle of 90° in a time of 0.18 s. The magnet produces a <strong>uniform <strong>magnetic field</strong> of flux density 80 mT between its poles. Find the magnitude of the average induced e.m.f." }] } },
    { id: 'callout-4', type: 'callout', data: { style: 'worked', title: 'Worked Example Solution', text: 'Step 1: Find the area A = 0.035 × 0.014 = 4.9 × 10⁻⁴ m².<br/>Step 2: Initial flux Φ₁ = BA = 0.080 × 4.9 × 10⁻⁴ = 3.92 × 10⁻⁵ Wb (coil horizontal = perpendicular to field).<br/>Step 3: Final flux Φ₂ = 0 Wb (coil vertical = parallel to field, no flux passes through).<br/>Step 4: ΔΦ = 0 − 3.92 × 10⁻⁵ = −3.92 × 10⁻⁵ Wb.<br/>Step 5: |ε| = N|ΔΦ/Δt| = 350 × 3.92 × 10⁻⁵ / 0.18 ≈ 76 mV.' }, terms: [] },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "The magnet produces a <strong>uniform <strong>magnetic field</strong> of flux density 80 mT between its poles. The coil is positioned horizontally and then turned through an angle of 90° in a time of 0.18 s." }] } },
    {
      id: 'svg-ac-generator',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="60" height="100" fill="#EF4444"/><text x="60" y="105" font-family="Arial" font-size="20" fill="#FFF" text-anchor="middle">N</text><rect x="260" y="50" width="60" height="100" fill="#3B82F6"/><text x="290" y="105" font-family="Arial" font-size="20" fill="#FFF" text-anchor="middle">S</text><path d="M 90 70 L 260 70" stroke="#9CA3AF" stroke-dasharray="4"/><path d="M 90 100 L 260 100" stroke="#9CA3AF" stroke-dasharray="4"/><path d="M 90 130 L 260 130" stroke="#9CA3AF" stroke-dasharray="4"/><rect x="130" y="60" width="90" height="80" fill="none" stroke="#D97706" stroke-width="4" transform="rotate(30 175 100)"/><path d="M 150 145 C 130 180, 110 180, 110 200" fill="none" stroke="#D97706" stroke-width="3"/><path d="M 195 155 C 220 180, 240 180, 240 200" fill="none" stroke="#D97706" stroke-width="3"/></svg>',
        caption: 'Simple A.C. Generator'
      },
      terms: []
    },
    {
      id: 'svg-ac-graph',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><polyline points="20,120 20,20 20,70 280,70" fill="none" stroke="#000" stroke-width="2"/><path d="M 20 70 Q 50 -10 85 70 T 150 70 T 215 70 T 280 70" fill="none" stroke="#3B82F6" stroke-width="3"/><text x="15" y="30" font-family="Arial" font-size="12" text-anchor="end">V&#8320;</text><text x="15" y="120" font-family="Arial" font-size="12" text-anchor="end">-V&#8320;</text><text x="15" y="65" font-family="Arial" font-size="14" transform="rotate(-90 15,65)">Voltage</text><text x="250" y="90" font-family="Arial" font-size="14">Time (t)</text></svg>',
        caption: 'Alternating Current Output'
      },
      terms: []
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="#f9fafb" rx="6"/><line x1="70" y1="20" x2="70" y2="200" stroke="#374151" stroke-width="2"/><line x1="70" y1="130" x2="470" y2="130" stroke="#374151" stroke-width="2"/><line x1="70" y1="80" x2="470" y2="80" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="5"/><line x1="70" y1="180" x2="470" y2="180" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="5"/><polyline points="70,170 160,55 260,55 380,160" fill="none" stroke="#6366f1" stroke-width="3" stroke-linejoin="round"/><text x="63" y="134" font-family="Arial" font-size="12" fill="#374151" text-anchor="end">0</text><text x="63" y="62" font-family="Arial" font-size="12" fill="#374151" text-anchor="end">+NΦ</text><text x="63" y="184" font-family="Arial" font-size="12" fill="#374151" text-anchor="end">−NΦ</text><text x="474" y="134" font-family="Arial" font-size="12" fill="#374151">t</text><text x="72" y="17" font-family="Arial" font-size="12" fill="#374151">NΦ / Wb turns</text><rect x="76" y="148" width="76" height="35" fill="#fee2e2" rx="3"/><text x="114" y="162" font-family="Arial" font-size="10" fill="#dc2626" text-anchor="middle">steep +ve</text><text x="114" y="175" font-family="Arial" font-size="10" fill="#dc2626" text-anchor="middle">gradient → large |ε|</text><rect x="168" y="35" width="80" height="30" fill="#dcfce7" rx="3"/><text x="208" y="49" font-family="Arial" font-size="10" fill="#15803d" text-anchor="middle">zero gradient</text><text x="208" y="62" font-family="Arial" font-size="10" fill="#15803d" text-anchor="middle">→ ε = 0</text><rect x="295" y="88" width="78" height="30" fill="#fef3c7" rx="3"/><text x="334" y="102" font-family="Arial" font-size="10" fill="#b45309" text-anchor="middle">−ve gradient</text><text x="334" y="115" font-family="Arial" font-size="10" fill="#b45309" text-anchor="middle">→ +ve ε (Lenz)</text><text x="250" y="228" font-family="Arial" font-size="11" fill="#6b7280" text-anchor="middle">Flux linkage–time graph: gradient = −induced e.m.f.</text></svg>',
        caption: 'Flux Linkage vs Time — the gradient at any point equals the magnitude of the induced e.m.f. (Faraday\'s Law). Zero gradient ⇒ ε = 0; steep gradient ⇒ large ε.'
      },
      terms: []
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Search Coil',
        text: 'A search coil has 80 turns and a cross-sectional area of 1.5 × 10⁻⁴ m². It is placed perpendicular to a uniform <strong>magnetic field</strong> of flux density 0.12 T. The field is switched off uniformly in 25 ms. Calculate the magnitude of the average induced e.m.f.<br/><br/><strong>Step 1:</strong> Initial flux through one turn: Φ₁ = B₁A = 0.12 × 1.5 × 10⁻⁴ = 1.8 × 10⁻⁵ Wb.<br/><strong>Step 2:</strong> Final flux: Φ₂ = 0 Wb (field is zero).<br/><strong>Step 3:</strong> Change in flux: ΔΦ = Φ₂ − Φ₁ = 0 − 1.8 × 10⁻⁵ = −1.8 × 10⁻⁵ Wb.<br/><strong>Step 4:</strong> Apply Faraday\'s Law: |ε| = N|ΔΦ/Δt| = 80 × (1.8 × 10⁻⁵) / (25 × 10⁻³).<br/><strong>Step 5:</strong> |ε| = 80 × 7.2 × 10⁻⁴ = <strong>57.6 mV</strong>.<br/><em>Note: the coil is perpendicular to the field so the full flux threads through it (cos 0° = 1). If the coil were at an angle, use Φ = BA cos θ first.</em>'
      },
      terms: []
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips: Faraday\'s Law Common Mistakes',
        text: '<strong>1. Flux Φ vs Flux Linkage NΦ:</strong> Exams often give data you must multiply by N before dividing by Δt. "Change in flux linkage" = N × ΔΦ, not just ΔΦ.<br/><strong>2. The negative sign:</strong> You will rarely be penalised for omitting the minus sign if you state it opposes the change (Lenz\'s Law). But always mention Lenz\'s Law explicitly to gain the mark.<br/><strong>3. Graph questions:</strong> If given a NΦ–t graph: induced e.m.f. = −gradient of the tangent. Steepest part of curve → greatest |ε|; flat sections → ε = 0. A sinusoidal NΦ graph produces a cosine ε graph (90° phase shift).<br/><strong>4. Units check:</strong> Wb turns / s = V. If flux is in mWb, convert to Wb before substituting.'
      },
      terms: []
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Faraday\'s Law' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
