export const note_olevel_physics_3_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-1-2-transverse-and-longitudinal-waves.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between transverse and longitudinal waves. Describe compressions and rarefactions. Identify examples of each wave type.' },
    },
    {
      id: 'h-transverse',
      type: 'heading',
      data: { text: 'Transverse Waves', level: 2 },
    },
    {
      id: 'para-transverse',
      type: 'paragraph',
      data: { text: 'In a <strong>transverse wave</strong>, particles of the medium oscillate <strong>perpendicular</strong> (at right angles) to the direction of energy transfer (wave travel). The wave profile appears as a familiar sine/cosine shape with crests and troughs.' },
    },
    {
      id: 'list-transverse-ex',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>All electromagnetic waves</strong> — light, radio, microwave, X-rays, etc.' },
          { text: 'Waves on the surface of water' },
          { text: 'Seismic S-waves (secondary waves)' },
          { text: 'Waves on a vibrating rope or string' },
        ],
      },
    },
    {
      id: 'h-longitudinal',
      type: 'heading',
      data: { text: 'Longitudinal Waves', level: 2 },
    },
    {
      id: 'para-longitudinal',
      type: 'paragraph',
      data: { text: 'In a <strong>longitudinal wave</strong>, particles oscillate <strong>parallel</strong> to the direction of energy transfer. The wave produces alternating regions of <strong>compression</strong> (particles pushed closer together — high pressure) and <strong>rarefaction</strong> (particles spread further apart — low pressure).' },
    },
    {
      id: 'list-longitudinal-ex',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Sound waves</strong> — in air, water, and solids' },
          { text: 'Seismic P-waves (primary/pressure waves)' },
          { text: 'Compression waves along a Slinky spring' },
        ],
      },
    },
    {
      id: 'svg-both',
      type: 'svg',
      data: {
        caption: 'Transverse wave (top) and longitudinal wave (bottom) — comparing oscillation direction with wave travel direction',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="500" height="280">
  <defs>
    <marker id="ahT" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#6366f1"/></marker>
    <marker id="ahL" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#f59e0b"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <text x="10" y="20" font-weight="bold" font-size="13" fill="#6366f1">Transverse Wave</text>
  <text x="10" y="35" fill="#64748b">oscillation ↕  energy →</text>
  <line x1="40" y1="80" x2="455" y2="80" stroke="#6366f1" stroke-width="1.5" marker-end="url(#ahT)"/>
  <text x="460" y="83" fill="#6366f1" font-size="10">Energy</text>
  <path d="M40,80 C60,80 70,45 100,45 C130,45 140,80 160,80 C180,80 190,115 220,115 C250,115 260,80 280,80 C300,80 310,45 340,45 C370,45 380,80 400,80 C420,80 430,115 455,115" stroke="#6366f1" stroke-width="2.5" fill="none"/>
  <text x="100" y="39" text-anchor="middle" fill="#6366f1" font-size="10">crest</text>
  <text x="220" y="130" text-anchor="middle" fill="#6366f1" font-size="10">trough</text>
  <line x1="38" y1="132" x2="38" y2="55" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="5" y="95" fill="#94a3b8" font-size="9">↕ oscillation</text>
  <text x="10" y="160" font-weight="bold" font-size="13" fill="#f59e0b">Longitudinal Wave</text>
  <text x="10" y="175" fill="#64748b">oscillation ↔  energy →</text>
  <line x1="40" y1="220" x2="455" y2="220" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#ahL)"/>
  <text x="460" y="223" fill="#f59e0b" font-size="10">Energy</text>
  <rect x="50" y="200" width="22" height="35" rx="3" fill="#78350f" opacity="0.7"/>
  <rect x="78" y="200" width="40" height="35" rx="3" fill="#44370a" opacity="0.6"/>
  <rect x="124" y="200" width="22" height="35" rx="3" fill="#78350f" opacity="0.7"/>
  <rect x="152" y="200" width="50" height="35" rx="3" fill="#44370a" opacity="0.6"/>
  <rect x="208" y="200" width="22" height="35" rx="3" fill="#78350f" opacity="0.7"/>
  <rect x="236" y="200" width="45" height="35" rx="3" fill="#44370a" opacity="0.6"/>
  <rect x="287" y="200" width="22" height="35" rx="3" fill="#78350f" opacity="0.7"/>
  <rect x="315" y="200" width="45" height="35" rx="3" fill="#44370a" opacity="0.6"/>
  <rect x="366" y="200" width="22" height="35" rx="3" fill="#78350f" opacity="0.7"/>
  <rect x="394" y="200" width="40" height="35" rx="3" fill="#44370a" opacity="0.6"/>
  <text x="61" y="248" text-anchor="middle" fill="#b45309" font-size="9">C</text>
  <text x="98" y="248" text-anchor="middle" fill="#92400e" font-size="9">R</text>
  <text x="135" y="248" text-anchor="middle" fill="#b45309" font-size="9">C</text>
  <text x="177" y="248" text-anchor="middle" fill="#92400e" font-size="9">R</text>
  <text x="219" y="248" text-anchor="middle" fill="#b45309" font-size="9">C</text>
  <text x="259" y="248" text-anchor="middle" fill="#92400e" font-size="9">R</text>
  <text x="298" y="248" text-anchor="middle" fill="#b45309" font-size="9">C</text>
  <text x="338" y="248" text-anchor="middle" fill="#92400e" font-size="9">R</text>
  <text x="377" y="248" text-anchor="middle" fill="#b45309" font-size="9">C</text>
  <text x="280" y="268" fill="#b45309" font-size="10">C = Compression   R = Rarefaction</text>
</svg>`,
      },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of transverse and longitudinal waves',
        headers: ['Feature', 'Transverse', 'Longitudinal'],
        rows: [
          ['Oscillation vs. travel', 'Perpendicular (90°)', 'Parallel (same direction)'],
          ['Wave features', 'Crests and troughs', 'Compressions and rarefactions'],
          ['Can travel in vacuum?', 'Yes (EM waves)', 'No — requires a medium'],
          ['Examples', 'Light, water waves, S-waves', 'Sound, P-waves, Slinky'],
        ],
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Sound is ALWAYS longitudinal. Light (and all EM waves) are ALWAYS transverse. When asked to justify, state: "oscillations are perpendicular/parallel to the direction of energy transfer."',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Longitudinal waves still have wavelength, frequency and amplitude — do not say they "do not have wavelength". The wavelength of a longitudinal wave is the distance from one compression to the next.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Transverse waves: oscillations perpendicular to energy transfer (examples: all EM waves, water waves). Longitudinal waves: oscillations parallel to energy transfer, with compressions and rarefactions (examples: sound, seismic P-waves). Longitudinal waves cannot travel in a vacuum; transverse EM waves can.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Transverse = perpendicular oscillations (EM, water). Longitudinal = parallel oscillations with compressions/rarefactions (sound, P-waves).',
    cues: [
      { id: 'cue-1', blockId: 'para-transverse', prompt: 'Define a transverse wave and give two examples.', answer: 'A transverse wave has particle oscillations perpendicular to the direction of energy transfer. Examples: light, water surface waves.' },
      { id: 'cue-2', blockId: 'para-longitudinal', prompt: 'What are compressions and rarefactions in a longitudinal wave?', answer: 'Compressions are regions where particles are pushed closer together (high pressure). Rarefactions are regions where particles are spread further apart (low pressure).' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'Can longitudinal waves travel through a vacuum? Explain.', answer: 'No. Longitudinal waves need particles to compress and expand. A vacuum has no particles, so no medium for the wave to travel through.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'What is the wavelength of a longitudinal wave?', answer: 'The distance from one compression to the next (or one rarefaction to the next) — the distance between two consecutive points in phase.' },
    ],
  },
  evidence: [],
  mentions: [],
};
