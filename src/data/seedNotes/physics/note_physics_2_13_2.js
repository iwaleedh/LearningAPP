export const note_physics_2_13_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Critical Angle" } },
    { id: 'head-1', type: 'heading', data: { text: "Critical Angle", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Critical Angle Critical Angle As the angle of incidence at the boundary between a more dense and a less dense medium is increased, the angle of <strong>refraction</strong> also increases until it gets to 90°" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "When the angle of <strong>refraction</strong> is exactly 90° the light is refracted along the boundary (if the boundary is straight) At this point, the angle of incidence is known as the critical angle C This can only occur when light passes from a more dense to a less dense material" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "This angle can be found using the formula: This can easily be derived from Snell's law: n sin θ = n sin θ Where:" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "θ = C θ = 90° n = n n = 1 (air)" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "1 1 2 2 1 2 1" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "2 Worked Example A glass cube is held in contact with a liquid and a light ray is directed at the vertical face of the cube." },
      { text: "The angle of incidence at the vertical face is 39° and the angle of." }
    ] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>refraction</strong> is 25° as shown in the diagram." },
      { text: "The light ray is totally internally reflected at X." },
      { text: "The refractive index of the glass cube is 1.45 and the refractive index of the liquid is a) Complete the diagram to show the path of the ray beyond X b) Calculate the critical angle for the ray at the glass-liquid boundary." }
    ] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "Answer: a) Complete the diagram to show the path of the ray beyond X Step 1: Draw the reflected angle at the glass-liquid boundary When a light ray is reflected, the angle of incidence = angle of <strong>reflection</strong>" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "Therefore, the angle of incidence (and <strong>reflection</strong>) is 90° – 25° = 65° Step 2: Draw the refracted angle at the glass-air boundary At the glass-air boundary, the light ray refracts away from the normal Due to the <strong>reflection</strong>, the light rays are symmetrical to the other side" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "b) Calculate the critical angle for the ray at the glass-liquid boundary: Step 1: Recall Snell's Law and rearrange to make critical angle the subject n sin θ = n sin θ sin ( )C =n2" }] } },

  
    {
      id: "svg-101",
      type: "svg",
      data: {
        caption: "Critical angle: as angle of incidence increases from partial refraction to total internal reflection (TIR)",
        svg: "<svg viewBox='0 0 400 170' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='170' fill='#0f172a' rx='8'/><text x='200' y='14' font-family='sans-serif' font-size='11' font-weight='bold' fill='#1e293b' text-anchor='middle'>Critical Angle and Total Internal Reflection</text><!-- Three panels --><rect x='4' y='20' width='120' height='145' fill='#1c3a64' rx='5' stroke='#93c5fd' stroke-width='1'/><rect x='140' y='20' width='120' height='145' fill='#78350f' rx='5' stroke='#fbbf24' stroke-width='1'/><rect x='276' y='20' width='120' height='145' fill='#4a1040' rx='5' stroke='#f472b6' stroke-width='1'/><!-- Panel labels --><text x='64' y='33' font-family='sans-serif' font-size='9' fill='#1d4ed8' text-anchor='middle'>&#952; &lt; &#952;c</text><text x='200' y='33' font-family='sans-serif' font-size='9' fill='#92400e' text-anchor='middle'>&#952; = &#952;c (critical)</text><text x='336' y='33' font-family='sans-serif' font-size='9' fill='#be185d' text-anchor='middle'>&#952; &gt; &#952;c (TIR)</text><!-- PANEL 1 glass boundary --><rect x='4' y='95' width='120' height='70' fill='#1e3a8a' opacity='0.5'/><line x1='4' y1='95' x2='124' y2='95' stroke='#475569' stroke-width='1.5'/><!-- normal --><line x1='64' y1='38' x2='64' y2='155' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4,2'/><!-- incident ray --><line x1='30' y1='135' x2='64' y2='95' stroke='#3b82f6' stroke-width='2' marker-end='url(#ca1)'/><!-- refracted ray exits --><line x1='64' y1='95' x2='98' y2='45' stroke='#22c55e' stroke-width='2' marker-end='url(#ca2)'/><!-- partial reflection --><line x1='64' y1='95' x2='98' y2='135' stroke='#3b82f6' stroke-width='1' stroke-dasharray='3' opacity='0.5' marker-end='url(#ca3)'/><!-- PANEL 2 --><rect x='140' y='95' width='120' height='70' fill='#1e3a8a' opacity='0.5'/><line x1='140' y1='95' x2='260' y2='95' stroke='#475569' stroke-width='1.5'/><line x1='200' y1='38' x2='200' y2='155' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4,2'/><!-- incident --><line x1='164' y1='135' x2='200' y2='95' stroke='#f59e0b' stroke-width='2' marker-end='url(#ca4)'/><!-- grazes boundary --><line x1='200' y1='95' x2='260' y2='95' stroke='#f59e0b' stroke-width='2' marker-end='url(#ca5)'/><!-- reflection --><line x1='200' y1='95' x2='236' y2='135' stroke='#f59e0b' stroke-width='1' stroke-dasharray='3' opacity='0.5' marker-end='url(#ca6)'/><!-- PANEL 3 --><rect x='276' y='95' width='120' height='70' fill='#1e3a8a' opacity='0.5'/><line x1='276' y1='95' x2='396' y2='95' stroke='#475569' stroke-width='1.5'/><line x1='336' y1='38' x2='336' y2='155' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4,2'/><!-- incident --><line x1='300' y1='145' x2='336' y2='95' stroke='#f472b6' stroke-width='2' marker-end='url(#ca7)'/><!-- reflected (TIR) --><line x1='336' y1='95' x2='372' y2='145' stroke='#f472b6' stroke-width='2.5' marker-end='url(#ca8)'/><!-- no transmitted ray crosses boundary --><text x='336' y='78' font-family='sans-serif' font-size='8' fill='#be185d' text-anchor='middle'>TIR!</text><!-- formula at bottom --><text x='200' y='160' font-family='sans-serif' font-size='10' fill='#334155' text-anchor='middle'>sin&#952;c = n&#8322;/n&#8321; = 1/n (glass-air)</text><defs><marker id='ca1' markerWidth='5' markerHeight='5' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' fill='#3b82f6'/></marker><marker id='ca2' markerWidth='5' markerHeight='5' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' fill='#22c55e'/></marker><marker id='ca3' markerWidth='5' markerHeight='5' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' fill='#3b82f6'/></marker><marker id='ca4' markerWidth='5' markerHeight='5' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' fill='#f59e0b'/></marker><marker id='ca5' markerWidth='5' markerHeight='5' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' fill='#f59e0b'/></marker><marker id='ca6' markerWidth='5' markerHeight='5' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' fill='#f59e0b'/></marker><marker id='ca7' markerWidth='5' markerHeight='5' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' fill='#f472b6'/></marker><marker id='ca8' markerWidth='5' markerHeight='5' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' fill='#f472b6'/></marker></defs></svg>"
      },
      terms: []
    },
    {
      id: "enr-svg-tir",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:8px;font-family:sans-serif;">
  <defs>
    <marker id="tir-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0 0 L0 6 L6 3 z" fill="#1e293b"/>
    </marker>
  </defs>
  <rect x="0" y="140" width="480" height="140" fill="#1e3a5f"/>
  <line x1="0" y1="140" x2="480" y2="140" stroke="#64748b" stroke-width="2"/>
  <line x1="160" y1="0" x2="160" y2="280" stroke="#475569" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="320" y1="0" x2="320" y2="280" stroke="#475569" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="80" y="18" fill="#94a3b8" font-size="10" text-anchor="middle">θ &lt; θc (partial)</text>
  <line x1="80" y1="55" x2="80" y2="210" stroke="#475569" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="32" y1="198" x2="78" y2="143" stroke="#38bdf8" stroke-width="2" marker-end="url(#tir-arr)"/>
  <line x1="80" y1="140" x2="118" y2="82" stroke="#facc15" stroke-width="2" marker-end="url(#tir-arr)"/>
  <line x1="80" y1="140" x2="128" y2="198" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.55"/>
  <text x="240" y="18" fill="#94a3b8" font-size="10" text-anchor="middle">θ = θc (grazes)</text>
  <line x1="240" y1="55" x2="240" y2="210" stroke="#475569" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="192" y1="198" x2="238" y2="143" stroke="#38bdf8" stroke-width="2" marker-end="url(#tir-arr)"/>
  <line x1="240" y1="140" x2="308" y2="140" stroke="#facc15" stroke-width="2" marker-end="url(#tir-arr)"/>
  <line x1="240" y1="140" x2="288" y2="198" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.55"/>
  <text x="400" y="18" fill="#f472b6" font-size="10" text-anchor="middle">θ &gt; θc (TIR)</text>
  <line x1="400" y1="55" x2="400" y2="210" stroke="#475569" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="352" y1="198" x2="398" y2="143" stroke="#38bdf8" stroke-width="2" marker-end="url(#tir-arr)"/>
  <line x1="400" y1="140" x2="448" y2="198" stroke="#f472b6" stroke-width="2.5" marker-end="url(#tir-arr)"/>
  <text x="400" y="256" fill="#f472b6" font-size="9" text-anchor="middle">Total Internal Reflection</text>
  <text x="240" y="162" fill="#1250a0" font-size="9" text-anchor="middle">sinθc = 1/n</text>
  <text x="12" y="133" fill="#64748b" font-size="9">Air</text>
  <text x="12" y="157" fill="#1250a0" font-size="9">Glass</text>
</svg>`,
        caption: "Total Internal Reflection: three scenarios (θ < θc, θ = θc, θ > θc)"
      }
    },
    {
      id: "enr-worked-fiber",
      type: "callout",
      data: {
        style: "worked",
        title: "Worked Example: Optical Fibre Critical Angle",
        text: "Optical fibre: glass n=1.5, air n=1.0. Critical angle sinθc=1/1.5=0.667 → θc=41.8°. Any ray hitting the glass–air boundary at angle &gt; 41.8° is totally internally reflected. Data travels at v=c/n=2×10⁸ m/s through the glass. One fibre carries 10+ terabits/second. Underwater fibre cables carry ~99% of international internet traffic."
      }
    },
    {
      id: "enr-tip-tir",
      type: "callout",
      data: {
        style: "tip",
        title: "Exam Tip: Total Internal <strong>Reflection</strong>",
        text: "TIR occurs ONLY when: (1) light travels from DENSE to LESS DENSE medium, AND (2) angle of incidence &gt; critical angle θc. sinθc = n₂/n₁ = 1/n for glass–air boundary. Applications: fibre optic cables, periscope prisms, endoscopes, diamond sparkle."
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Critical Angle Only at Denser\u2192Less Dense Boundary",
        text: "Critical angle ONLY exists when light travels from a denser to a less dense medium (higher n to lower n). If light enters a denser medium, total internal reflection is impossible \u2014 refraction always occurs. Watch for exam tricks using this."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Define Critical Angle Correctly",
        text: "The critical angle \u03b8c is the angle of incidence at which the angle of refraction equals 90\u00b0. When \u03b8\u1d62 > \u03b8c, total internal reflection occurs. Use sin \u03b8c = n\u2082/n\u2081 (less dense/more dense)."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Critical Angle' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
