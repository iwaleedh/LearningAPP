export const note_physics_2_11_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand The Wave Equation" } },
    { id: 'head-1', type: 'heading', data: { text: "The Wave Equation", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "The Wave Equation The Wave Equation This equation links wave speed, <strong>frequency</strong> and <strong>wavelength</strong> Where:" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "v = velocity of the wave (m s) f = <strong>frequency</strong> of the wave (Hz) λ = <strong>wavelength</strong> (m) The wave equation tells us that for a wave of constant speed:" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "As the <strong>wavelength</strong> increases, the <strong>frequency</strong> decreases As the <strong>wavelength</strong> decreases, the <strong>frequency</strong> increases The relationship between <strong>frequency</strong> and <strong>wavelength</strong> of a wave –1" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Worked Example A travelling wave has a period of 1.0  μ s and travels at a velocity of 100 cm s." }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Calculate the <strong>wavelength</strong> of the wave." },
      { text: "Give your answer in metres (m)." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "Answer: Step 1: Write down the known quantities Period, T = 1.0 μ s = 1.0 × 10  s Velocity, c = 100 cm s = 1.0 m s" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "Note the conversions: The period must be converted from microseconds ( μ s) into seconds (s) The velocity must be converted from cm s into m s Step 2: Write down the relationship between the <strong>frequency</strong> f and the period T" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "f = 1 T Step 3: Substitute the value of the period into the above equation to calculate the <strong>frequency</strong>" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "f = 1 1 ×10−6 f = 1.0 × 10 Hz Step 4: Write down the wave equation" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "c = f λ Step 5: Rearrange the wave equation to calculate the <strong>wavelength</strong> λ λ = c f" }] } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <path d="M50 80 Q 200 80 350 40" fill="none" stroke="#f472b6" stroke-width="3" stroke-dasharray="8,4"/>
  <path d="M50 100 Q 200 100 350 100" fill="none" stroke="#f472b6" stroke-width="4"/>
  <path d="M50 120 Q 200 120 350 160" fill="none" stroke="#f472b6" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="200" y="30" fill="#0f172a" font-size="16" text-anchor="middle">Turbulent vs Laminar Flow</text>
  <circle cx="200" cy="100" r="10" fill="#78350f"/>
</svg>`,
        caption: "Physics Diagram"
      }
    },
    {
      id: 'enr-svg-longitudinal',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <rect x="18" y="55" width="390" height="70" rx="4" fill="none" stroke="#475569" stroke-width="1.5"/>
  <circle cx="36" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="48" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="60" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="72" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="84" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="42" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="54" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="66" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="78" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="120" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="148" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="176" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="134" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="162" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="213" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="225" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="237" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="249" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="261" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="219" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="231" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="243" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="255" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="298" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="326" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="354" cy="79" r="5" fill="#60a5fa"/>
  <circle cx="312" cy="97" r="5" fill="#60a5fa"/>
  <circle cx="340" cy="97" r="5" fill="#60a5fa"/>
  <text x="60" y="48" fill="#78350f" font-size="11" text-anchor="middle">compression</text>
  <text x="148" y="48" fill="#34d399" font-size="11" text-anchor="middle">rarefaction</text>
  <text x="237" y="48" fill="#78350f" font-size="11" text-anchor="middle">compression</text>
  <text x="326" y="48" fill="#34d399" font-size="11" text-anchor="middle">rarefaction</text>
  <line x1="22" y1="145" x2="398" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="395,141 403,145 395,149" fill="#94a3b8"/>
  <text x="210" y="163" fill="#94a3b8" font-size="12" text-anchor="middle">→ direction of wave travel</text>
  <line x1="430" y1="88" x2="510" y2="88" stroke="#f472b6" stroke-width="1.5"/>
  <polygon points="430,84 422,88 430,92" fill="#f472b6"/>
  <polygon points="510,84 518,88 510,92" fill="#f472b6"/>
  <text x="466" y="108" fill="#f472b6" font-size="11" text-anchor="middle">particle</text>
  <text x="466" y="121" fill="#f472b6" font-size="11" text-anchor="middle">displacement</text>
</svg>`,
        caption: 'Longitudinal wave: displacement parallel to direction of travel. Compressions and rarefactions'
      }
    },
    {
      id: 'enr-worked-sound',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Sound in Air',
        text: 'Sound in air at 20°C: v = 340 m/s, f = 440 Hz (concert A). λ = v/f = 340/440 = 0.773 m. Ultrasound at 40 kHz: λ = 340/40000 = 8.5 mm. Higher <strong>frequency</strong> → smaller <strong>wavelength</strong> → can resolve finer detail (minimum detectable detail ≈ λ). This is why medical ultrasound uses MHz frequencies to image mm-scale structures.'
      }
    },
    {
      id: 'enr-tip-long',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Longitudinal vs Transverse',
        text: 'Longitudinal waves: compressions/rarefactions, displacement parallel to travel direction. Cannot be polarised (only transverse waves can be polarised). Sound is longitudinal — cannot travel in vacuum (needs medium to compress). EM waves are transverse — can travel in vacuum.'
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise The Wave Equation' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
