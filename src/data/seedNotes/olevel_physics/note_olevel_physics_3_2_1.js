export const note_olevel_physics_3_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-2-2-refraction-of-light.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply Snell\'s Law n = sin(i)/sin(r) to calculate refractive index and angles. Explain why light bends toward the normal when entering a denser medium. Describe ray diagrams for a glass block.' },
    },
    {
      id: 'h-snell',
      type: 'heading',
      data: { text: 'Snell\'s Law and Refractive Index', level: 2 },
    },
    {
      id: 'para-snell',
      type: 'paragraph',
      data: { text: 'When light travels from a vacuum (or air) into a transparent medium, it slows down. The ratio of the speed of light in vacuum to the speed in the medium defines the <strong>refractive index</strong> (<em>n</em>). Snell\'s Law relates the angles of incidence and refraction to this ratio.' },
    },
    {
      id: 'eq-snell',
      type: 'equation',
      data: {
        html: 'n = <span class="nb-frac"><span class="nb-num">sin i</span><span class="nb-den">sin r</span></span> = <span class="nb-frac"><span class="nb-num">speed in vacuum (c)</span><span class="nb-den">speed in medium (v)</span></span>',
        caption: 'Snell\'s Law — refractive index n (dimensionless, always ≥ 1)',
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Values to Remember',
        text: 'Air / vacuum: n = 1.0  (reference)\nWater: n ≈ 1.33\nCrown glass: n ≈ 1.5\nDiamond: n ≈ 2.4\n\nThe larger n is, the more the medium slows light, and the more it bends toward the normal.',
      },
    },
    {
      id: 'h-glass-block',
      type: 'heading',
      data: { text: 'Ray through a Rectangular Glass Block', level: 2 },
    },
    {
      id: 'para-glass-block',
      type: 'paragraph',
      data: { text: 'When light passes through a rectangular glass block, it refracts <em>twice</em>: once on entering (bends toward normal) and once on exiting (bends away from normal). The exiting ray is parallel to the entering ray but displaced sideways — this displacement is called <strong>lateral displacement</strong>.' },
    },
    {
      id: 'svg-glass-block',
      type: 'svg',
      data: {
        caption: 'Ray refracting twice through a glass block — note lateral displacement of the emergent ray',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 320" width="440" height="320">
  <defs>
    <marker id="ah21" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#6366f1"/></marker>
    <marker id="ag21" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#10b981"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <rect x="150" y="80" width="160" height="160" fill="#a5f3fc" opacity="0.55" stroke="#0e7490" stroke-width="2"/>
  <text x="195" y="165" fill="#0e7490" font-weight="bold">GLASS</text>
  <text x="185" y="180" fill="#0e7490" font-size="10">n ≈ 1.5</text>
  <line x1="150" y1="40" x2="150" y2="280" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5 3"/>
  <line x1="310" y1="40" x2="310" y2="280" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5 3"/>
  <text x="154" y="38" fill="#64748b" font-size="10">N₁</text>
  <text x="314" y="38" fill="#64748b" font-size="10">N₂</text>
  <line x1="60" y1="40" x2="150" y2="130" stroke="#6366f1" stroke-width="2.5" marker-end="url(#ah21)"/>
  <text x="40" y="36" fill="#6366f1">Incident</text>
  <line x1="150" y1="130" x2="310" y2="210" stroke="#6366f1" stroke-width="2.5" marker-end="url(#ah21)"/>
  <line x1="310" y1="210" x2="400" y2="300" stroke="#10b981" stroke-width="2.5" marker-end="url(#ag21)"/>
  <text x="368" y="314" fill="#10b981" font-size="10">Emergent</text>
  <path d="M136,130 A22,22 0 0,1 140,110" stroke="#6366f1" stroke-width="1.2" fill="none"/>
  <text x="104" y="120" fill="#6366f1" font-style="italic">i₁</text>
  <path d="M154,148 A22,22 0 0,1 158,130" stroke="#f59e0b" stroke-width="1.2" fill="none"/>
  <text x="162" y="148" fill="#f59e0b" font-style="italic">r₁</text>
  <path d="M294,210 A22,22 0 0,1 298,190" stroke="#f59e0b" stroke-width="1.2" fill="none"/>
  <text x="274" y="200" fill="#f59e0b" font-style="italic">r₂</text>
  <path d="M314,228 A22,22 0 0,1 318,210" stroke="#10b981" stroke-width="1.2" fill="none"/>
  <text x="322" y="228" fill="#10b981" font-style="italic">i₂</text>
  <line x1="60" y1="40" x2="400" y2="300" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="18" y="310" fill="#94a3b8" font-size="10">Parallel dashed line</text>
  <text x="18" y="322" fill="#94a3b8" font-size="10">shows lateral displacement</text>
</svg>`,
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Examples', level: 2 },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1 — Find angle of refraction',
        text: 'Light enters glass (n = 1.5) from air at i = 40°.\n\nn = sin i / sin r\n1.5 = sin 40° / sin r\nsin r = 0.643 / 1.5 = 0.429\nr = sin⁻¹(0.429) ≈ 25.4°\n\nThe ray bends toward the normal (r < i). ✓',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2 — Find refractive index',
        text: 'Light enters an unknown glass. Incidence angle = 50°, refraction angle = 30°.\n\nn = sin 50° / sin 30° = 0.766 / 0.500 = 1.53\n\nThe glass has refractive index ≈ 1.5 (crown glass).',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Identify "i" correctly',
        text: 'For n = sin(i)/sin(r), angle i is always the angle in AIR (or vacuum) and r is always the angle in the denser medium. If the problem gives you an angle in glass and asks you to find the angle in air, rearrange carefully: sin i = n × sin r.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Snell\'s Law: n = sin(i)/sin(r) where i is in air and r is in the medium. Refractive index ≥ 1; glass n ≈ 1.5. Light entering a denser medium slows, bends toward normal (r < i). Through a glass block, the emergent ray is parallel to the incident but laterally displaced.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'n = sin(i)/sin(r). Glass n ≈ 1.5. Entering denser medium → slows → bends toward normal.',
    cues: [
      { id: 'cue-1', blockId: 'eq-snell', prompt: 'State Snell\'s Law and the formula for refractive index.', answer: 'n = sin(i)/sin(r), where i is the angle of incidence in air and r is the angle of refraction in the medium. Also n = c/v, where c is speed in vacuum and v is speed in the medium.' },
      { id: 'cue-2', blockId: 'callout-we1', prompt: 'Light enters glass (n = 1.5) at 30° to the normal. Find the angle of refraction.', answer: 'sin r = sin 30° / 1.5 = 0.50 / 1.5 = 0.333. r = sin⁻¹(0.333) ≈ 19.5°.' },
      { id: 'cue-3', blockId: 'para-glass-block', prompt: 'What is lateral displacement when light passes through a glass block?', answer: 'The emergent ray is parallel to the incident ray but shifted sideways. This sideways shift is called lateral displacement and occurs because refraction happens twice — once into and once out of the glass.' },
      { id: 'cue-4', blockId: 'callout-key1', prompt: 'Which has the greater refractive index, water or glass, and what does this mean for the bending of light?', answer: 'Glass (n ≈ 1.5) has a greater refractive index than water (n ≈ 1.33). Light bends more toward the normal entering glass than entering water (larger change in speed).' },
    ],
  },
  evidence: [],
  mentions: [],
};
