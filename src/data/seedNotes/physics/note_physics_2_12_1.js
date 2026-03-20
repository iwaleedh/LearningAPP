export const note_physics_2_12_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Phase & <strong>Path Difference</strong>" }, terms: [] },
    { id: 'head-1', type: 'heading', data: { text: "Phase & <strong>Path Difference</strong>", level: 2 }, terms: [] },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Waves are said to be <strong>coherent</strong> if they have the same <strong>frequency</strong> and a <strong>constant <strong>phase difference</strong>. <strong>Coherence</strong> is the fundamental requirement for producing a stable, observable <strong>interference</strong> pattern. Without <strong>coherence</strong>, the <strong>interference</strong> pattern shifts randomly and no steady bright or dark fringes are seen." }] } },
    { id: 'callout-1', type: 'callout', data: { style: 'key', title: '<strong>Coherence</strong> — Two Requirements', text: '1. Same <strong>frequency</strong> (and therefore same <strong>wavelength</strong> in the same medium).<br/>2. A constant <strong>phase difference</strong> (not necessarily zero — it just must not change over time).<br/>Laser light is coherent. Light from a filament lamp is incoherent.' }, terms: [] },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Phase difference</strong> describes how far one wave is ahead of or behind another in its cycle. Two points on a wave, or on different waves, are <strong>in phase</strong> when they are at the same point in their wave cycle — for example, both at a crest, or both at a trough. The <strong>angle between their wave cycles</strong> is the <strong>phase difference</strong>, measured in degrees or radians." }] } },
    { id: 'callout-2', type: 'callout', data: { style: 'key', title: '<strong>Phase Difference</strong> and <strong>Path Difference</strong> Link', text: 'A <strong>path difference</strong> of one full <strong>wavelength</strong> (λ) corresponds to a <strong>phase difference</strong> of 360° (2π rad) — the waves are back in phase.<br/>A <strong>path difference</strong> of λ/2 corresponds to a <strong>phase difference</strong> of 180° (π rad) — the waves are in antiphase.<br/>General: <strong>phase difference</strong> = (<strong>path difference</strong> / λ) × 360°.' }, terms: [] },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "The type of <strong>interference</strong> occurring at a given point depends on the <strong>path difference</strong> of the overlapping waves. <strong>Path difference</strong> is defined as the difference in distance travelled by two waves from their sources to the point where they meet. <strong>Path difference</strong> is generally expressed in <strong>multiples of <strong>wavelength</strong>." }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "At a point P where the waves have a <strong>path difference</strong> of a whole number of wavelengths</strong> (0, λ, 2λ, …), the waves arrive in phase and <strong>constructive <strong>interference</strong> results. At a point where the <strong>path difference</strong> is an <strong>odd number of half-wavelengths</strong> (λ/2, 3λ/2, …), the waves arrive in antiphase and <strong>destructive <strong>interference</strong> results." }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "Consider two sources S₁ and S₂ and a point P. If S₁ to P = 6λ and S₂ to P = 6.5λ, the <strong>path difference</strong> is 6.5λ − 6λ = <strong>λ/2</strong>, so destructive <strong>interference</strong> occurs at P. If S₁ to P = 6λ and S₂ to P = 7λ, the <strong>path difference</strong> is 7λ − 6λ = <strong>λ</strong>, so constructive <strong>interference</strong> occurs at P." }] } },
    { id: 'callout-3', type: 'callout', data: { style: 'worked', title: 'Worked Example: Identifying <strong>Interference</strong> Type', text: 'Two coherent sources emit waves of <strong>wavelength</strong> 4.0 cm. Source S₁ is 24.0 cm from point P; source S₂ is 26.0 cm from P.<br/><strong>Path difference</strong> = 26.0 − 24.0 = 2.0 cm = 2.0/4.0 λ = 0.5λ.<br/>Since <strong>path difference</strong> = 0.5λ = (0 + ½)λ → destructive <strong>interference</strong> at P.' }, terms: [] },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "In general: The condition for <strong>constructive <strong>interference</strong> is a <strong>path difference</strong> of nλ (where n = 0, 1, 2, 3…). The condition for <strong>destructive <strong>interference</strong> is a <strong>path difference</strong> of (n + ½)λ (where n = 0, 1, 2, 3…). These conditions apply to all types of waves — light, sound, microwaves, and water waves." }] } },
    { id: 'callout-4', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Expressing <strong>Path Difference</strong>', text: 'Always express <strong>path difference</strong> in terms of <strong>wavelength</strong> (e.g. "1.5λ") rather than a distance in metres, unless asked for the actual distance. This makes it immediately clear whether the <strong>interference</strong> is constructive or destructive.' }, terms: [] },
    { id: 'callout-5', type: 'callout', data: { style: 'key', title: 'Real-World Example: Noise-Cancelling Headphones', text: 'Noise-cancelling headphones use a microphone to detect incoming sound waves. Electronics generate an equal-<strong>amplitude</strong> wave with a <strong>path difference</strong> of λ/2 (180° phase shift) relative to the noise. The two waves superpose destructively at your ear — the noise is cancelled. This is a direct application of destructive <strong>interference</strong>.' }, terms: [] },
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;"><line x1="50" y1="160" x2="350" y2="160" stroke="#94a3b8" stroke-width="2"/><line x1="50" y1="40" x2="50" y2="160" stroke="#94a3b8" stroke-width="2"/><path d="M50 160 L200 60 Q 250 50 350 100" fill="none" stroke="#a78bfa" stroke-width="4"/><text x="200" y="40" fill="#0f172a" font-size="18" text-anchor="middle" font-weight="bold">Force-Extension Graph</text><circle cx="200" cy="60" r="5" fill="#532407"/><text x="200" y="80" fill="#532407" font-size="12" text-anchor="middle">Limit of Proportionality</text></svg>',
        caption: "Physics Diagram"
      },
      terms: []
    },
    {
      id: 'enr-svg-pathdiff',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;"><circle cx="60" cy="80" r="10" fill="#6366f1"/><text x="60" y="108" fill="#2d2d72" font-size="13" text-anchor="middle">S1</text><circle cx="60" cy="160" r="10" fill="#6366f1"/><text x="60" y="178" fill="#2d2d72" font-size="13" text-anchor="middle">S2</text><circle cx="340" cy="120" r="8" fill="#532407"/><text x="340" y="108" fill="#532407" font-size="13" text-anchor="middle">P</text><line x1="70" y1="80" x2="332" y2="120" stroke="#34d399" stroke-width="2" stroke-dasharray="6,3"/><text x="200" y="88" fill="#34d399" font-size="12" text-anchor="middle">r1</text><line x1="70" y1="160" x2="332" y2="122" stroke="#f87171" stroke-width="2" stroke-dasharray="6,3"/><text x="200" y="156" fill="#f87171" font-size="12" text-anchor="middle">r2</text><text x="370" y="124" fill="#44370a" font-size="12">|r2−r1|</text><rect x="0" y="195" width="480" height="44" fill="#0f172a" rx="4"/><text x="12" y="211" fill="#0a2e1a" font-size="11">path diff = 0 → in phase → constructive</text><text x="12" y="226" fill="#7f1d1d" font-size="11">path diff = λ/2 → antiphase → destructive    path diff = λ → in phase → constructive</text></svg>',
        caption: 'Path difference determines constructive or destructive interference'
      },
      terms: []
    },
    {
      id: 'enr-worked-micro',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Microwave Antennas',
        text: 'Two microwave antennas are placed 12 cm apart and emit coherent waves of <strong>wavelength</strong> λ = 4 cm. A student walks along a line parallel to the line joining the antennas.<br/><br/><strong>Maxima (constructive, path diff = nλ):</strong><br/>— Centre line: path diff = 0 (n = 0) → maximum<br/>— 1st maximum either side: path diff = 4 cm = λ (n = 1)<br/>— 2nd maximum: path diff = 8 cm = 2λ (n = 2)<br/><br/><strong>Minima (destructive, path diff = (n + ½)λ):</strong><br/>— path diff = 2 cm = λ/2 → 1st minimum<br/>— path diff = 6 cm = 3λ/2 → 2nd minimum<br/>— path diff = 10 cm = 5λ/2 → 3rd minimum<br/><br/><strong>Real-world link:</strong> RADAR systems use phased array antennas — electronic steering of microwave beams is achieved by controlling the phase differences between individual antenna elements, shifting the <strong>interference</strong> pattern without physically moving the array.'
      },
      terms: []
    },
    {
      id: 'enr-tip-pathdiff',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: <strong>Path Difference</strong> Rules',
        text: '<strong>Constructive <strong>interference</strong>:</strong> <strong>path difference</strong> = nλ (n = 0, 1, 2, …) → bright fringe / loud sound.<br/><strong>Destructive <strong>interference</strong>:</strong> <strong>path difference</strong> = (n + ½)λ → dark fringe / silence.<br/><br/><strong>Converting to <strong>phase difference</strong>:</strong> <strong>phase difference</strong> = (<strong>path difference</strong> / λ) × 360°.<br/>e.g. path diff = λ/2 → phase diff = 180° (antiphase).<br/><br/><strong>Watch out:</strong> the rules above assume sources emit <em>in phase</em>. If the two sources emit <em>in antiphase</em> (<strong>phase difference</strong> = 180° between them), reverse the rules — a <strong>path difference</strong> of nλ gives destructive <strong>interference</strong> and (n + ½)λ gives constructive <strong>interference</strong>.'
      },
      terms: []
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-2', prompt: 'State the two requirements for two wave sources to be coherent.' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Define <strong>path difference</strong>. What <strong>path difference</strong> gives constructive <strong>interference</strong>? What gives destructive <strong>interference</strong>?' },
    { id: 'cue-3', blockId: 'callout-2', prompt: 'A <strong>path difference</strong> of λ/2 corresponds to what <strong>phase difference</strong> in degrees and radians?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
