export const note_olevel_physics_3_1_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-1-5-refraction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain refraction as a change in wave speed at a boundary causing a change in direction. State and apply n = sin(i)/sin(r). Describe what happens to wavelength and frequency during refraction.' },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is Refraction?', level: 2 },
    },
    {
      id: 'para-what',
      type: 'paragraph',
      data: { text: '<strong>Refraction</strong> is the change in direction of a wave as it crosses from one medium into another due to a change in its <strong>speed</strong>. The wave changes direction <em>at the boundary</em>, and then continues in a straight line in the new medium. If the wave hits the boundary along the normal (at 0°), there is no change in direction — only a change in speed and wavelength.' },
    },
    {
      id: 'h-rules',
      type: 'heading',
      data: { text: 'Rules for Refraction', level: 2 },
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Less dense → denser medium (e.g. air → glass): wave <strong>slows down</strong> → bends <strong>toward</strong> the normal' },
          { text: 'Denser → less dense medium (e.g. glass → air): wave <strong>speeds up</strong> → bends <strong>away from</strong> the normal' },
          { text: '<strong>Frequency</strong> remains <em>unchanged</em> on crossing the boundary' },
          { text: '<strong>Wavelength</strong> changes (λ = v/f; since f is constant, λ ∝ v)' },
          { text: 'At 0° (normal incidence): no bending, only speed and wavelength change' },
        ],
      },
    },
    {
      id: 'svg-refraction',
      type: 'svg',
      data: {
        caption: 'Light ray refracting at an air–glass boundary (bends toward normal on entering denser medium)',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 320" width="420" height="320">
  <defs>
    <marker id="ah14" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#3b82f6"/></marker>
    <marker id="ag14" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10b981"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <rect x="0" y="0" width="420" height="160" fill="#1e3a8a" opacity="0.45"/>
  <rect x="0" y="160" width="420" height="160" fill="#0e4a56" opacity="0.55"/>
  <text x="10" y="22" font-weight="bold" fill="#1d4ed8">Air  (less dense — faster)</text>
  <text x="10" y="185" font-weight="bold" fill="#0e7490">Glass  (more dense — slower)</text>
  <line x1="0" y1="160" x2="420" y2="160" stroke="#0e7490" stroke-width="2"/>
  <text x="295" y="155" fill="#0e7490" font-size="10">air–glass boundary</text>
  <line x1="210" y1="20" x2="210" y2="305" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 3"/>
  <text x="215" y="18" fill="#64748b">Normal</text>
  <line x1="100" y1="45" x2="210" y2="160" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#ah14)"/>
  <text x="76" y="42" fill="#3b82f6">Incident ray</text>
  <line x1="210" y1="160" x2="295" y2="300" stroke="#10b981" stroke-width="2.5" marker-end="url(#ag14)"/>
  <text x="288" y="300" fill="#10b981">Refracted ray</text>
  <path d="M193,160 A28,28 0 0,1 197,135" stroke="#3b82f6" stroke-width="1.5" fill="none"/>
  <text x="155" y="148" fill="#3b82f6" font-weight="bold" font-size="14">i</text>
  <path d="M218,184 A28,28 0 0,1 222,161" stroke="#10b981" stroke-width="1.5" fill="none"/>
  <text x="228" y="183" fill="#10b981" font-weight="bold" font-size="14">r</text>
  <text x="30" y="300" fill="#374151" font-size="11">Speed decreases → bends toward normal → r &lt; i</text>
</svg>`,
      },
    },
    {
      id: 'h-ri',
      type: 'heading',
      data: { text: 'Refractive Index', level: 2 },
    },
    {
      id: 'para-ri',
      type: 'paragraph',
      data: { text: 'The <strong>refractive index</strong> (n) of a medium quantifies how much it slows down light compared to a vacuum. It is dimensionless (no unit). A higher n means the medium is optically denser — light slows down more.' },
    },
    {
      id: 'eq-snell',
      type: 'equation',
      data: {
        html: 'n = <span class="nb-frac"><span class="nb-num">sin i</span><span class="nb-den">sin r</span></span>',
        caption: 'Snell\'s Law: refractive index = sin(angle of incidence in air) ÷ sin(angle of refraction in medium)',
      },
    },
    {
      id: 'callout-ri-values',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Refractive Index Values',
        text: 'Air / vacuum: n = 1.0\nWater: n ≈ 1.33\nCrown glass: n ≈ 1.5\nDense glass: n ≈ 1.7\nDiamond: n ≈ 2.4 (very optically dense)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A ray of light passes from air into glass (n = 1.5). Angle of incidence = 40°.\nFind the angle of refraction.\n\nn = sin i / sin r\n1.5 = sin 40° / sin r\nsin r = sin 40° / 1.5 = 0.643 / 1.5 = 0.429\nr = sin⁻¹(0.429) ≈ 25°\n\nNote: r < i — ray bends toward normal (as expected entering a denser medium).',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When drawing refracted rays, always draw the normal first. If going from less dense to denser medium, the ray bends toward the normal (angle gets smaller). If going from denser to less dense, angle gets larger.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Refraction: wave changes speed at a boundary → changes direction (except at 0°). Into denser medium: slows, bends toward normal. Into less dense medium: speeds up, bends away from normal. Refractive index n = sin(i)/sin(r). Frequency is unchanged; wavelength changes proportionally to speed.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Refraction = change of speed at boundary causing change in direction. Denser → slows → toward normal. n = sin(i)/sin(r).',
    cues: [
      { id: 'cue-1', blockId: 'para-what', prompt: 'What causes refraction and when does a wave NOT change direction during refraction?', answer: 'Refraction is caused by a change in wave speed at a boundary. If the wave hits the boundary at 0° (along the normal), there is no change in direction — only a change in speed and wavelength.' },
      { id: 'cue-2', blockId: 'list-rules', prompt: 'A light ray travels from glass (denser) into air (less dense). Which way does it bend?', answer: 'It speeds up, so it bends away from the normal. The angle of refraction is greater than the angle of incidence.' },
      { id: 'cue-3', blockId: 'eq-snell', prompt: 'State the formula for refractive index in terms of angles.', answer: 'n = sin(i) / sin(r), where i is the angle of incidence (in the less dense medium) and r is the angle of refraction (in the denser medium).' },
      { id: 'cue-4', blockId: 'callout-we1', prompt: 'What happens to the frequency and wavelength of light when it enters glass from air?', answer: 'Frequency stays the same (it is set by the source). Wavelength decreases because the wave slows down (λ = v/f; v decreases, f constant → λ decreases).' },
    ],
  },
  evidence: [],
  mentions: [],
};
