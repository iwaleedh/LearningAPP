export const note_physics_2_12_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Wave Speed on a Stretched String" }, terms: [] },
    { id: 'head-1', type: 'heading', data: { text: "Wave Speed on a Stretched String", level: 2 }, terms: [] },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>speed of a wave</strong> travelling along a string depends on two properties of the string: the <strong>tension T</strong> (in Newtons) and the <strong>mass per unit length μ</strong> (in kg m⁻¹). The wave speed formula is: <strong>v = √(T/μ)</strong>. A higher tension makes waves travel faster; a denser (heavier) string slows waves down." }] } },
    { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Wave Speed on a String', text: 'v = √(T / μ)<br/>where T = tension in the string (N) and μ = mass per unit length (kg m⁻¹).<br/>μ = total mass of string / total length of string.' }, terms: [] },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>mass per unit length</strong> μ can be calculated by dividing the mass of the string by the length of the string: μ = m/L. At the <strong>fundamental <strong>frequency</strong> (first harmonic), the <strong>wavelength</strong> of the <strong>stationary wave</strong> equals twice the length of the string: <strong>λ = 2L</strong>. This is because the fundamental mode has a <strong>node</strong> at each fixed end and a single <strong>antinode</strong> in the middle." }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "Using the wave equation v = fλ with λ = 2L gives: <strong>v = f × 2L</strong>. Combining with v = √(T/μ) leads to the equation for the <strong>fundamental <strong>frequency</strong> (first harmonic): <strong>f₁ = (1/2L)√(T/μ)</strong>. This shows that the fundamental <strong>frequency</strong> increases with tension and decreases with string length and linear density." }] } },
    { id: 'callout-2', type: 'callout', data: { style: 'key', title: 'Fundamental <strong>Frequency</strong> Formula', text: 'f₁ = (1/2L) × √(T/μ)<br/>where f = <strong>frequency</strong> (Hz), L = string length (m), T = tension (N), μ = mass per unit length (kg m⁻¹).<br/>Higher harmonics: fₙ = n × f₁ (n = 1, 2, 3, ...)' }, terms: [] },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Different modes of vibration (harmonics) exist at <strong>integer multiples</strong> of the fundamental <strong>frequency</strong>. The second harmonic has <strong>frequency</strong> 2f₁, the third has 3f₁, and so on. Each harmonic has an additional <strong>antinode</strong> compared to the previous one. A guitar player changes pitch by pressing frets to change the <strong>effective length L</strong> of the string, which shifts all the harmonic frequencies." }] } },
    { id: 'callout-3', type: 'callout', data: { style: 'worked', title: 'Worked Example: Guitar String', text: 'A guitar string: mass = 3.2 g = 3.2 × 10⁻³ kg, total length = 0.90 m, vibrating length L = 0.75 m, tension T = 65 N.<br/>Step 1: μ = m/L_total = 3.2 × 10⁻³ / 0.90 = 3.56 × 10⁻³ kg m⁻¹.<br/>Step 2: v = √(T/μ) = √(65 / 3.56 × 10⁻³) = √18258 = 135 m s⁻¹.<br/>Step 3: f₁ = v/(2L) = 135/(2 × 0.75) = 135/1.5 = 90 Hz.' }, terms: [] },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>mass per unit length</strong>, μ, can be calculated by dividing the mass of the string by the length of the string. A thicker string (higher μ) vibrates more slowly and produces a lower fundamental <strong>frequency</strong>. This is why the bass strings on a guitar are wound with extra wire — to increase μ without dramatically increasing L." }] } },
    { id: 'callout-4', type: 'callout', data: { style: 'key', title: 'Real-World Example: Tuning a Guitar', text: 'When a guitarist tightens a tuning peg, they increase the string tension T. Since f₁ ∝ √T, the fundamental <strong>frequency</strong> rises and the string sounds at a higher pitch. Turning the peg the other way reduces T and lowers the pitch. Different string thicknesses (different μ) produce different pitch ranges — thin strings (low μ) for high notes, thick wound strings (high μ) for low notes.' }, terms: [] },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Diagram showing the first three modes of vibration of a stretched string with corresponding frequencies: 1st harmonic (fundamental): 1 <strong>antinode</strong>, f₁ = (1/2L)√(T/μ); 2nd harmonic: 2 <strong>antinodes</strong>, f₂ = 2f₁; 3rd harmonic: 3 <strong>antinodes</strong>, f₃ = 3f₁." },
      { text: "In every case, the ends of the string are fixed — they must be <strong>nodes</strong>." }
    ] } },
    { id: 'callout-5', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Harmonic Frequencies', text: 'Remember: the nth harmonic has n <strong>antinodes</strong> and <strong>wavelength</strong> λ = 2L/n. <strong>Frequency</strong> fₙ = n × f₁. This means if you double the <strong>frequency</strong> you get the second harmonic — do NOT confuse this with "doubling the number of loops means you have twice as many waves".' }, terms: [] },
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;"><rect x="50" y="50" width="300" height="100" fill="#1e293b" rx="8" stroke="#38bdf8" stroke-width="2"/><text x="200" y="80" fill="#f8fafc" font-size="16" text-anchor="middle">v = sqrt(T / mu)</text><text x="200" y="110" fill="#f8fafc" font-size="16" text-anchor="middle">f1 = (1/2L) x sqrt(T/mu)</text><text x="200" y="140" fill="#fbbf24" font-size="14" text-anchor="middle" font-weight="bold">Wave Speed on Stretched String</text></svg>',
        caption: "Wave speed and fundamental frequency formulae for a stretched string"
      },
      terms: []
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="#0f172a" rx="10"/><text x="250" y="20" fill="#f1f5f9" font-size="13" text-anchor="middle" font-weight="bold">Harmonics of a Stretched String</text><rect x="65" y="38" width="7" height="150" fill="#64748b" rx="2"/><rect x="428" y="38" width="7" height="150" fill="#64748b" rx="2"/><text x="30" y="64" fill="#7dd3fc" font-size="11" text-anchor="middle" font-weight="bold">n=1</text><text x="30" y="116" fill="#7dd3fc" font-size="11" text-anchor="middle" font-weight="bold">n=2</text><text x="30" y="168" fill="#7dd3fc" font-size="11" text-anchor="middle" font-weight="bold">n=3</text><text x="470" y="64" fill="#94a3b8" font-size="11" text-anchor="middle">f₁</text><text x="470" y="116" fill="#94a3b8" font-size="11" text-anchor="middle">2f₁</text><text x="470" y="168" fill="#94a3b8" font-size="11" text-anchor="middle">3f₁</text><line x1="72" y1="60" x2="428" y2="60" stroke="#1e3a5f" stroke-width="1" stroke-dasharray="4,3"/><line x1="72" y1="112" x2="428" y2="112" stroke="#1e3a5f" stroke-width="1" stroke-dasharray="4,3"/><line x1="72" y1="164" x2="428" y2="164" stroke="#1e3a5f" stroke-width="1" stroke-dasharray="4,3"/><path d="M 72,60 Q 250,33 428,60" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/><circle cx="72" cy="60" r="4" fill="#f472b6"/><circle cx="428" cy="60" r="4" fill="#f472b6"/><circle cx="250" cy="33" r="4" fill="#4ade80"/><path d="M 72,112 Q 161,85 250,112 Q 339,139 428,112" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/><circle cx="72" cy="112" r="4" fill="#f472b6"/><circle cx="250" cy="112" r="4" fill="#f472b6"/><circle cx="428" cy="112" r="4" fill="#f472b6"/><circle cx="161" cy="85" r="4" fill="#4ade80"/><circle cx="339" cy="139" r="4" fill="#4ade80"/><path d="M 72,164 Q 131,137 191,164 Q 250,191 309,164 Q 369,137 428,164" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/><circle cx="72" cy="164" r="4" fill="#f472b6"/><circle cx="191" cy="164" r="4" fill="#f472b6"/><circle cx="309" cy="164" r="4" fill="#f472b6"/><circle cx="428" cy="164" r="4" fill="#f472b6"/><circle cx="131" cy="137" r="4" fill="#4ade80"/><circle cx="250" cy="191" r="4" fill="#4ade80"/><circle cx="369" cy="137" r="4" fill="#4ade80"/><circle cx="150" cy="212" r="4" fill="#f472b6"/><text x="160" y="216" fill="#f472b6" font-size="10">Node</text><circle cx="210" cy="212" r="4" fill="#4ade80"/><text x="220" y="216" fill="#4ade80" font-size="10">Antinode</text><line x1="72" y1="228" x2="428" y2="228" stroke="#475569" stroke-width="1"/><line x1="72" y1="223" x2="72" y2="233" stroke="#475569" stroke-width="1"/><line x1="428" y1="223" x2="428" y2="233" stroke="#475569" stroke-width="1"/><text x="250" y="238" fill="#94a3b8" font-size="11" text-anchor="middle">String length L</text></svg>',
        caption: 'First three harmonics of a stretched string. Pink = nodes (zero displacement, fixed points); green = antinodes (maximum displacement). The nth harmonic has n antinodes and n+1 nodes.'
      },
      terms: []
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Sonometer — Find the Fundamental <strong>Frequency</strong>',
        text: 'A steel wire of mass 4.5 g and total length 1.20 m is clamped between two fixed supports 1.20 m apart. The wire is under a tension of 72 N. Find the fundamental <strong>frequency</strong>.<br/><strong>Step 1 — Calculate μ (mass per unit length):</strong><br/>μ = m / L<sub>total</sub> = (4.5 × 10<sup>−3</sup>) / 1.20 = 3.75 × 10<sup>−3</sup> kg m<sup>−1</sup><br/><strong>Step 2 — Calculate wave speed v:</strong><br/>v = √(T / μ) = √(72 / 3.75 × 10<sup>−3</sup>) = √19 200 ≈ 138.6 m s<sup>−1</sup><br/><strong>Step 3 — Find fundamental <strong>frequency</strong> f₁:</strong><br/>f₁ = v / (2L) = 138.6 / (2 × 1.20) = 138.6 / 2.40 ≈ <strong>57.8 Hz</strong><br/><strong>Step 4 — State the second harmonic <strong>frequency</strong>:</strong><br/>f₂ = 2f₁ = 2 × 57.8 ≈ <strong>115.6 Hz</strong>'
      },
      terms: []
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Total Length vs Vibrating Length',
        text: 'Exam questions often supply <strong>two different lengths</strong>: the <strong>total string length</strong> (used to calculate μ = m / L<sub>total</sub>) and a shorter <strong>vibrating length L</strong> (the distance between the two fixed supports, used in f₁ = v / 2L). Using the wrong length in the wrong formula is the most common error. Always label which length is which before substituting. Also remember: <em>v = √(T/μ) gives the wave speed regardless of L</em> — L only enters when you calculate <strong>frequency</strong> from f = v / λ.'
      },
      terms: []
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-2', prompt: 'Write the formula for wave speed on a stretched string. What are the two variables it depends on?' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Derive the formula for the fundamental <strong>frequency</strong> of a stretched string. Why is λ = 2L at the fundamental?' },
    { id: 'cue-3', blockId: 'callout-4', prompt: 'Explain, using f₁ = (1/2L)√(T/μ), why tightening a guitar string raises its pitch.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
