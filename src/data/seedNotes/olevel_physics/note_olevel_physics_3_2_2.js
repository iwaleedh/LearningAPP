export const note_olevel_physics_3_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-2-3-total-internal-reflection.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain total internal reflection (TIR) and the critical angle. Apply sin(C) = 1/n. Describe applications of TIR including optical fibres and prisms.' },
    },
    {
      id: 'h-tir',
      type: 'heading',
      data: { text: 'Total Internal Reflection', level: 2 },
    },
    {
      id: 'para-tir',
      type: 'paragraph',
      data: { text: 'When light travels from a <strong>denser</strong> medium (e.g. glass) toward a <strong>less dense</strong> medium (e.g. air), refraction occurs at the boundary. As the angle of incidence increases, the refracted ray bends further from the normal. At a specific angle — the <strong>critical angle (C)</strong> — the refracted ray travels along the boundary (r = 90°). For any angle of incidence above the critical angle, <strong>total internal reflection</strong> occurs: <em>all</em> light is reflected back inside the denser medium.' },
    },
    {
      id: 'svg-tir',
      type: 'svg',
      data: {
        caption: 'Three cases at a glass–air boundary: (a) below critical angle — partial refraction; (b) at critical angle; (c) above critical angle — total internal reflection',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="480" height="300">
  <defs>
    <marker id="ah22" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#3b82f6"/></marker>
    <marker id="ag22" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10b981"/></marker>
    <marker id="ar22" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#ef4444"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:10px;fill:#1e293b;}</style>
  <rect x="0" y="150" width="480" height="150" fill="#0e4a56" opacity="0.4"/>
  <line x1="0" y1="150" x2="480" y2="150" stroke="#0e7490" stroke-width="2"/>
  <text x="2" y="148" fill="#0e7490" font-size="9">glass–air boundary</text>
  <text x="5" y="175" fill="#0e7490" font-weight="bold" font-size="10">Glass (denser)</text>
  <text x="5" y="40" fill="#1d4ed8" font-weight="bold" font-size="10">Air (less dense)</text>

  <!-- CASE A: i < C -->
  <text x="48" y="298" text-anchor="middle" fill="#374151" font-weight="bold">(a) i &lt; C</text>
  <line x1="50" y1="20" x2="50" y2="280" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 3"/>
  <line x1="20" y1="260" x2="50" y2="150" stroke="#3b82f6" stroke-width="2" marker-end="url(#ah22)"/>
  <line x1="50" y1="150" x2="35" y2="30" stroke="#ef4444" stroke-width="2" marker-end="url(#ar22)"/>
  <line x1="50" y1="150" x2="90" y2="50" stroke="#10b981" stroke-width="1.5" marker-end="url(#ag22)"/>
  <text x="58" y="48" fill="#10b981" font-size="9">refracted</text>
  <text x="15" y="28" fill="#ef4444" font-size="9">reflected</text>
  <text x="8" y="250" fill="#3b82f6" font-size="9">incident</text>

  <!-- CASE B: i = C -->
  <text x="238" y="298" text-anchor="middle" fill="#374151" font-weight="bold">(b) i = C</text>
  <line x1="240" y1="20" x2="240" y2="280" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 3"/>
  <line x1="195" y1="260" x2="240" y2="150" stroke="#3b82f6" stroke-width="2" marker-end="url(#ah22)"/>
  <line x1="240" y1="150" x2="215" y2="40" stroke="#ef4444" stroke-width="2" marker-end="url(#ar22)"/>
  <line x1="240" y1="150" x2="480" y2="150" stroke="#10b981" stroke-width="1.5" marker-end="url(#ag22)"/>
  <text x="370" y="145" fill="#10b981" font-size="9">r = 90° (along boundary)</text>
  <text x="243" y="142" fill="#1e293b" font-size="9">C</text>

  <!-- CASE C: i > C (TIR) -->
  <text x="418" y="298" text-anchor="middle" fill="#374151" font-weight="bold">(c) i &gt; C — TIR</text>
  <line x1="420" y1="20" x2="420" y2="280" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 3"/>
  <line x1="370" y1="270" x2="420" y2="150" stroke="#3b82f6" stroke-width="2" marker-end="url(#ah22)"/>
  <line x1="420" y1="150" x2="470" y2="270" stroke="#ef4444" stroke-width="2.5" marker-end="url(#ar22)"/>
  <text x="450" y="245" fill="#ef4444" font-size="9">100%</text>
  <text x="448" y="258" fill="#ef4444" font-size="9">reflected</text>
  <text x="356" y="250" fill="#3b82f6" font-size="9">incident</text>
</svg>`,
      },
    },
    {
      id: 'h-critical',
      type: 'heading',
      data: { text: 'Critical Angle Formula', level: 2 },
    },
    {
      id: 'para-critical',
      type: 'paragraph',
      data: { text: 'At the critical angle, the refracted ray travels along the boundary (r = 90°, sin 90° = 1). Substituting into Snell\'s Law (n = sin i / sin r) gives the critical angle formula:' },
    },
    {
      id: 'eq-critical',
      type: 'equation',
      data: {
        html: 'sin C = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">n</span></span>',
        caption: 'C = critical angle; n = refractive index of the denser medium (relative to air)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example — Critical Angle of Glass',
        text: 'Glass has n = 1.5. Find its critical angle.\n\nsin C = 1/n = 1/1.5 = 0.667\nC = sin⁻¹(0.667) ≈ 42°\n\nFor incidence angles above 42°, light undergoes total internal reflection inside the glass.',
      },
    },
    {
      id: 'h-conditions',
      type: 'heading',
      data: { text: 'Conditions for TIR', level: 2 },
    },
    {
      id: 'list-conditions',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Light must be travelling in the <strong>denser</strong> medium (high n) toward the <strong>less dense</strong> medium (low n)' },
          { text: 'The angle of incidence must be <strong>greater than</strong> the critical angle (i > C)' },
        ],
      },
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Applications of TIR', level: 2 },
    },
    {
      id: 'para-fibres',
      type: 'paragraph',
      data: { text: '<strong>Optical fibres:</strong> Long, thin glass/plastic fibres with a high-n core surrounded by a low-n cladding. Light entering at the correct angle hits the core–cladding boundary at an angle greater than C and undergoes TIR repeatedly, travelling along the fibre with almost no loss. Used in telecommunications and medical endoscopes.' },
    },
    {
      id: 'para-prisms',
      type: 'paragraph',
      data: { text: '<strong>Prisms in binoculars and periscopes:</strong> A right-angled prism (45°–45°–90°) can deflect light through 90° or 180° by TIR. Because glass has n ≈ 1.5 and critical angle ≈ 42°, light hitting the 45° face at normal incidence strikes the diagonal at 45° > 42° → TIR. Prisms reflect more efficiently than mirrors (no silvering needed).' },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Do not say "light cannot escape at TIR". The correct statement is: "all the light is reflected back into the denser medium; none is transmitted." Always state BOTH conditions for TIR in your answer.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'TIR occurs when light in a denser medium hits a less dense boundary at an angle > critical angle C. sin(C) = 1/n. For glass (n = 1.5), C ≈ 42°. Applications: optical fibres (communications, endoscopes), prisms (binoculars, periscopes).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'TIR: light in denser medium, i > critical angle. sin C = 1/n. Glass n = 1.5 → C ≈ 42°. Used in optical fibres and prisms.',
    cues: [
      { id: 'cue-1', blockId: 'para-tir', prompt: 'State the two conditions required for total internal reflection.', answer: '(1) Light must be travelling in the denser medium toward a less dense medium. (2) The angle of incidence must be greater than the critical angle.' },
      { id: 'cue-2', blockId: 'eq-critical', prompt: 'Diamond has refractive index 2.4. Calculate its critical angle.', answer: 'sin C = 1/n = 1/2.4 = 0.417. C = sin⁻¹(0.417) ≈ 24.6°. Diamond\'s very small critical angle causes most light to undergo TIR, giving it brilliance.' },
      { id: 'cue-3', blockId: 'para-fibres', prompt: 'Explain how an optical fibre uses TIR to transmit light signals.', answer: 'Light enters one end of the high-n glass core at an angle > critical angle relative to the core–cladding boundary. TIR occurs repeatedly at the boundary, keeping light within the fibre with negligible loss over long distances.' },
      { id: 'cue-4', blockId: 'svg-tir', prompt: 'What happens to the refracted ray as the angle of incidence gradually increases toward the critical angle?', answer: 'The refracted ray bends further away from the normal (angle of refraction increases). At i = C, the refracted ray travels along the boundary (r = 90°). Above C, no refraction occurs — TIR.' },
    ],
  },
  evidence: [],
  mentions: [],
};
