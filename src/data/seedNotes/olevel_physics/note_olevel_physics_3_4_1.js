export const note_olevel_physics_3_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-4-2-wave-paths.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain why seismic wave paths through Earth are curved. Describe and explain the P-wave and S-wave shadow zones. Use shadow zones as evidence for Earth\'s internal structure.' },
    },
    {
      id: 'h-curved',
      type: 'heading',
      data: { text: 'Why Wave Paths Through Earth are Curved', level: 2 },
    },
    {
      id: 'para-curved',
      type: 'paragraph',
      data: { text: 'The Earth\'s interior has layers of different density and composition. As seismic waves travel deeper, they enter layers where the speed continuously increases (the mantle becomes stiffer and denser at greater depths). This <strong>continuous change in speed</strong> causes the waves to be continuously refracted, producing <strong>curved paths</strong> rather than straight lines (by Snell\'s law applied continuously).' },
    },
    {
      id: 'para-curved2',
      type: 'paragraph',
      data: { text: 'In general, the waves curve <strong>away from the vertical</strong> (away from Earth\'s centre) as they travel deeper, then curve back upward — because as speed increases, refraction bends the ray away from the normal (away from the direction of increasing speed).' },
    },
    {
      id: 'h-shadow',
      type: 'heading',
      data: { text: 'Shadow Zones', level: 2 },
    },
    {
      id: 'para-shadow',
      type: 'paragraph',
      data: { text: 'Due to the refraction and the presence of a liquid outer core, there are regions on Earth\'s surface that receive <strong>no direct P-waves or S-waves</strong> from a given earthquake. These are called <strong>shadow zones</strong>.' },
    },
    {
      id: 'svg-earth',
      type: 'svg',
      data: {
        caption: 'Cross-section of Earth showing curved P-wave and S-wave paths and their shadow zones',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="480" height="480">
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <!-- Outer mantle/crust -->
  <circle cx="240" cy="240" r="200" fill="#d4ac6d" stroke="#a0845c" stroke-width="1.5"/>
  <!-- Outer core (liquid) -->
  <circle cx="240" cy="240" r="120" fill="#60a5fa" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- Inner core (solid) -->
  <circle cx="240" cy="240" r="55" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
  <!-- Layer labels -->
  <text x="240" y="244" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="10">Inner core</text>
  <text x="240" y="256" text-anchor="middle" fill="#92400e" font-size="10">(solid)</text>
  <text x="240" y="185" text-anchor="middle" fill="#1d4ed8" font-size="10">Outer core</text>
  <text x="240" y="197" text-anchor="middle" fill="#1d4ed8" font-size="10">(liquid)</text>
  <text x="240" y="132" text-anchor="middle" fill="#78350f" font-size="10">Mantle</text>
  <!-- Earthquake epicentre (top of Earth) -->
  <circle cx="240" cy="40" r="6" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="248" y="38" fill="#ef4444" font-size="11">Earthquake</text>
  <!-- P-wave curved paths (go through liquid outer core, refracted) -->
  <!-- Path going left through core — arrives at ~105° from epicentre on left side -->
  <path d="M240,40 Q180,130 155,200 Q130,260 160,300 Q185,330 220,440" stroke="#6366f1" stroke-width="1.8" fill="none" stroke-dasharray="none"/>
  <!-- Path going deeper through core left side -->
  <path d="M240,40 Q210,160 200,240 Q200,320 220,440" stroke="#6366f1" stroke-width="1.8" fill="none"/>
  <!-- Path going right through core -->
  <path d="M240,40 Q300,130 325,200 Q350,260 320,300 Q295,330 260,440" stroke="#6366f1" stroke-width="1.8" fill="none"/>
  <!-- Path going directly down (radius path) -->
  <path d="M240,40 Q240,160 240,320 Q240,380 240,440" stroke="#6366f1" stroke-width="1.5" fill="none" opacity="0.5"/>
  <!-- S-wave paths (only through mantle — do not enter outer core) -->
  <path d="M240,40 Q155,130 120,205 Q100,255 105,309" stroke="#10b981" stroke-width="2" fill="none"/>
  <path d="M240,40 Q325,130 360,205 Q380,255 375,309" stroke="#10b981" stroke-width="2" fill="none"/>
  <path d="M240,40 Q168,145 145,240" stroke="#10b981" stroke-width="1.8" fill="none" opacity="0.7"/>
  <path d="M240,40 Q312,145 335,240" stroke="#10b981" stroke-width="1.8" fill="none" opacity="0.7"/>
  <!-- P-wave shadow zone arcs -->
  <path d="M105,309 A200,200 0 0,0 106,171" stroke="#9333ea" stroke-width="3" fill="none"/>
  <path d="M375,309 A200,200 0 0,1 374,171" stroke="#9333ea" stroke-width="3" fill="none"/>
  <text x="55" y="240" fill="#9333ea" font-size="10" text-anchor="middle">P-wave</text>
  <text x="55" y="252" fill="#9333ea" font-size="10" text-anchor="middle">shadow</text>
  <text x="55" y="264" fill="#9333ea" font-size="10" text-anchor="middle">zone</text>
  <text x="425" y="240" fill="#9333ea" font-size="10" text-anchor="middle">P-wave</text>
  <text x="425" y="252" fill="#9333ea" font-size="10" text-anchor="middle">shadow</text>
  <text x="425" y="264" fill="#9333ea" font-size="10" text-anchor="middle">zone</text>
  <!-- S-wave shadow zone (180° - 2×105° no-S zone) -->
  <!-- S waves don't enter outer core, so the shadow covers a larger angle -->
  <!-- Legend -->
  <line x1="15" y1="420" x2="50" y2="420" stroke="#6366f1" stroke-width="2"/>
  <text x="55" y="424" fill="#6366f1">P-waves (through core)</text>
  <line x1="15" y1="440" x2="50" y2="440" stroke="#10b981" stroke-width="2"/>
  <text x="55" y="444" fill="#10b981">S-waves (mantle only)</text>
  <line x1="15" y1="460" x2="50" y2="460" stroke="#9333ea" stroke-width="3"/>
  <text x="55" y="464" fill="#9333ea">Shadow zone boundary</text>
</svg>`,
      },
    },
    {
      id: 'h-p-shadow',
      type: 'heading',
      data: { text: 'P-wave Shadow Zone', level: 2 },
    },
    {
      id: 'para-p-shadow',
      type: 'paragraph',
      data: { text: 'P-waves enter the liquid outer core but are strongly <strong>refracted</strong> (bent) when they pass from the slower mantle into the denser core, and again when they exit. This refraction means P-waves are deflected away from a band 105°–140° from the epicentre on all sides — the <strong>P-wave shadow zone</strong>. Some P-waves are refracted through the inner core and arrive in the shadow zone at angles > 140°, weakened.' },
    },
    {
      id: 'h-s-shadow',
      type: 'heading',
      data: { text: 'S-wave Shadow Zone', level: 2 },
    },
    {
      id: 'para-s-shadow',
      type: 'paragraph',
      data: { text: 'S-waves <strong>cannot travel through the liquid outer core</strong> (shear waves need a solid medium). Any S-wave that would travel through the outer core is <strong>absorbed or blocked</strong>. This creates a much larger S-wave shadow zone covering the region from ~105° right around to 105° on the other side. The entire hemisphere opposite the earthquake receives no S-waves.' },
    },
    {
      id: 'tbl-shadow',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of P-wave and S-wave shadow zones',
        headers: ['', 'P-wave shadow zone', 'S-wave shadow zone'],
        rows: [
          ['Angle from epicentre', '105°–140°', '> 105° (entire far hemisphere)'],
          ['Reason', 'Refraction at core boundaries bends P-waves away from this zone', 'Liquid outer core absorbs/blocks S-waves (they cannot travel through liquid)'],
          ['Width', 'Narrower band', 'Larger zone'],
          ['Evidence for', 'Existence of a core with different density', 'Outer core is LIQUID'],
        ],
      },
    },
    {
      id: 'callout-key-evidence',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Shadow Zones as Evidence for Earth\'s Structure',
        text: '• P-wave shadow zone (105°–140°) → there is a core with very different properties from the mantle (causes strong refraction)\n• S-wave shadow zone (> 105°) → the outer core is LIQUID (S-waves cannot travel through liquids)\n• P-waves still detected beyond 140° → a denser inner solid core focuses some P-waves into the far shadow',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Seismic wave paths are curved because wave speed increases with depth, causing continuous refraction. The P-wave shadow zone (105°–140° from epicentre) is caused by refraction at the core boundaries. The larger S-wave shadow zone (>105°) exists because S-waves cannot travel through the liquid outer core. These shadow zones provide key evidence for Earth\'s layered structure.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Curved paths = speed increases with depth → refraction. S-wave shadow zone proves outer core is liquid. P-wave shadow 105–140°.',
    cues: [
      { id: 'cue-1', blockId: 'para-curved', prompt: 'Why do seismic waves travel in curved paths through the Earth?', answer: 'The speed of seismic waves increases with depth (as material becomes denser and stiffer). This continuous change in speed causes continuous refraction, bending the wave paths into curves.' },
      { id: 'cue-2', blockId: 'para-s-shadow', prompt: 'Explain why an S-wave shadow zone exists.', answer: 'S-waves cannot travel through liquids. The outer core is liquid, so any S-waves directed at the outer core are absorbed. The region beyond ~105° from the epicentre receives no S-waves because they are all blocked by the liquid outer core.' },
      { id: 'cue-3', blockId: 'para-p-shadow', prompt: 'Why is there also a P-wave shadow zone, even though P-waves CAN travel through liquid?', answer: 'P-waves enter the liquid outer core but are strongly refracted (bent) at the mantle-core boundary due to the large change in speed. This refraction deflects P-waves away from the 105°–140° zone. Some P-waves travel through the inner core and emerge beyond 140°.' },
      { id: 'cue-4', blockId: 'callout-key-evidence', prompt: 'What two pieces of evidence about Earth\'s core are provided by seismic wave shadow zones?', answer: '(1) The P-wave shadow zone shows there is a core with very different density/speed from the mantle (causes strong refraction). (2) The S-wave shadow zone proves the outer core is liquid (S-waves can only travel through solids).' },
    ],
  },
  evidence: [],
  mentions: [],
};
