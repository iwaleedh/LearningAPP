export const note_olevel_physics_3_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-1-4-reflection.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State and apply the law of reflection. Distinguish between regular and diffuse reflection. Draw accurate ray diagrams for reflection at a plane surface.' },
    },
    {
      id: 'h-law',
      type: 'heading',
      data: { text: 'Law of Reflection', level: 2 },
    },
    {
      id: 'para-normal',
      type: 'paragraph',
      data: { text: 'When a ray reflects off a surface, angles are measured from the <strong>normal</strong> — an imaginary line drawn perpendicular (90°) to the surface at the point of incidence. The <strong>angle of incidence</strong> (i) is the angle between the incident ray and the normal. The <strong>angle of reflection</strong> (r) is the angle between the reflected ray and the normal.' },
    },
    {
      id: 'callout-law',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Law of Reflection',
        text: 'Angle of incidence (i) = Angle of reflection (r)\n\nBoth angles are measured from the normal to the reflecting surface, NOT from the surface itself.',
      },
    },
    {
      id: 'svg-reflection',
      type: 'svg',
      data: {
        caption: 'Ray diagram demonstrating the law of reflection at a plane mirror surface',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280">
  <defs>
    <marker id="ah13" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#3b82f6"/></marker>
    <marker id="ag13" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10b981"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:12px;fill:#1e293b;}</style>
  <line x1="50" y1="200" x2="350" y2="200" stroke="#1e293b" stroke-width="3"/>
  <line x1="60" y1="200" x2="50" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="80" y1="200" x2="70" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="100" y1="200" x2="90" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="120" y1="200" x2="110" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="140" y1="200" x2="130" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="160" y1="200" x2="150" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="180" y1="200" x2="170" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="200" y1="200" x2="190" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="220" y1="200" x2="210" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="240" y1="200" x2="230" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="260" y1="200" x2="250" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="280" y1="200" x2="270" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="300" y1="200" x2="290" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="320" y1="200" x2="310" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <line x1="340" y1="200" x2="330" y2="216" stroke="#94a3b8" stroke-width="1"/>
  <text x="160" y="240" fill="#475569" font-size="11">Plane Mirror</text>
  <line x1="200" y1="60" x2="200" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 3"/>
  <text x="205" y="58" fill="#64748b" font-size="11">Normal</text>
  <line x1="90" y1="60" x2="200" y2="200" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#ah13)"/>
  <text x="72" y="52" fill="#3b82f6" font-size="11">Incident ray</text>
  <line x1="200" y1="200" x2="310" y2="60" stroke="#10b981" stroke-width="2.5" marker-end="url(#ag13)"/>
  <text x="286" y="52" fill="#10b981" font-size="11">Reflected ray</text>
  <path d="M186,200 A22,22 0 0,1 190,178" stroke="#3b82f6" stroke-width="1.5" fill="none"/>
  <text x="152" y="184" fill="#3b82f6" font-weight="bold" font-size="15">i</text>
  <path d="M210,178 A22,22 0 0,1 214,200" stroke="#10b981" stroke-width="1.5" fill="none"/>
  <text x="218" y="184" fill="#10b981" font-weight="bold" font-size="15">r</text>
  <text x="130" y="264" fill="#1e40af" font-style="italic" font-size="14" font-weight="bold">∠i  =  ∠r</text>
</svg>`,
      },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Regular vs Diffuse Reflection', level: 2 },
    },
    {
      id: 'para-regular',
      type: 'paragraph',
      data: { text: '<strong>Regular (specular) reflection</strong> occurs at smooth, flat surfaces such as mirrors or calm water. Parallel incident rays reflect as parallel rays, forming a clear, sharp image.' },
    },
    {
      id: 'para-diffuse',
      type: 'paragraph',
      data: { text: '<strong>Diffuse (irregular) reflection</strong> occurs at rough surfaces such as paper, matte paint, or rough concrete. Parallel incident rays are scattered in many different directions because the surface normal varies from point to point. No clear image is formed, but the surface is visible from any angle.' },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Both regular and diffuse reflection obey the law of reflection at each individual point. The difference is that a rough surface has normals pointing in different directions at different points, so reflected rays scatter.',
      },
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Applications of Reflection', level: 2 },
    },
    {
      id: 'list-applications',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Periscope:</strong> two plane mirrors at 45° each deflect light through 90°, allowing viewing over obstacles' },
          { text: '<strong>Rear-view mirrors</strong> in vehicles — plain and convex' },
          { text: '<strong>Reflective road signs</strong> use diffuse reflection for visibility from any direction' },
          { text: '<strong>Astronomical telescopes</strong> use concave (curved) mirrors to focus light' },
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example — Periscope',
        text: 'A periscope has two mirrors each tilted at 45° to the horizontal. Trace the light path:\n• Light arrives vertically → hits top mirror at 45° incidence\n• Reflects 90° downward (i = r = 45°)\n• Hits bottom mirror at 45° → reflects 90° horizontally to the eye\nResult: light turns two corners of 90° to reach the observer.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Law of reflection: angle of incidence = angle of reflection, both measured from the normal. Regular reflection (smooth surface) → parallel rays remain parallel, sharp image. Diffuse reflection (rough surface) → rays scattered, no image. Both types obey the law of reflection at each point.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Angle of incidence = angle of reflection (from normal). Smooth surface → regular reflection (clear image). Rough surface → diffuse reflection (scattered).',
    cues: [
      { id: 'cue-1', blockId: 'callout-law', prompt: 'State the law of reflection precisely.', answer: 'The angle of incidence equals the angle of reflection. Both angles are measured from the normal to the surface at the point of incidence.' },
      { id: 'cue-2', blockId: 'para-normal', prompt: 'What is the normal in a reflection diagram and why is it important?', answer: 'The normal is an imaginary line perpendicular (90°) to the reflecting surface at the point of incidence. Angles of incidence and reflection are always measured from the normal, not from the surface.' },
      { id: 'cue-3', blockId: 'para-regular', prompt: 'What is the difference between regular and diffuse reflection?', answer: 'Regular: occurs at smooth surfaces; parallel rays stay parallel → clear image. Diffuse: occurs at rough surfaces; rays scattered in all directions → no image, but surface visible from any angle.' },
      { id: 'cue-4', blockId: 'callout-we1', prompt: 'Explain how a periscope uses the law of reflection.', answer: 'Each of the two mirrors is tilted at 45°. Light hits each at i = 45°, so r = 45°, deflecting the ray by 90°. Two such reflections allow light to travel around two corners to reach the observer.' },
    ],
  },
  evidence: [],
  mentions: [],
};
