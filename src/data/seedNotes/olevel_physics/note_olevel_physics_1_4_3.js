export const note_olevel_physics_1_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-4-4-springs-investigation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how to investigate the relationship between force and extension of a spring; plot and interpret force–extension graphs; identify the limit of proportionality.' },
    },
    {
      id: 'h-setup',
      type: 'heading',
      data: { text: 'Experimental Setup', level: 2 },
    },
    {
      id: 'para-setup',
      type: 'paragraph',
      data: { text: 'A spring is clamped vertically from a stand. Known masses (100 g = 1 N) are added one at a time. After each addition, the position of the bottom of the spring is measured with a ruler. The <strong>extension</strong> is calculated as the new length minus the original (natural) length.' },
    },
    {
      id: 'svg-spring',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="240" fill="#faf5ff" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Spring Extension Experiment</text>
  <!-- Stand/clamp -->
  <rect x="100" y="30" width="8" height="170" fill="#78350f" rx="2"/>
  <rect x="60" y="28" width="80" height="10" fill="#78350f" rx="2"/>
  <!-- Spring (left - no load) -->
  <text x="125" y="50" font-size="11" fill="#374151">Unloaded:</text>
  <line x1="140" y1="60" x2="140" y2="65" stroke="#374151" stroke-width="2"/>
  <path d="M 140 65 Q 132 70 148 75 Q 132 80 148 85 Q 132 90 148 95 Q 132 100 140 105" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <line x1="140" y1="105" x2="140" y2="115" stroke="#374151" stroke-width="2"/>
  <text x="155" y="90" font-size="10" fill="#374151">l₀</text>
  <line x1="150" y1="65" x2="150" y2="115" stroke="#374151" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Arrow natural length -->
  <line x1="153" y1="65" x2="153" y2="115" stroke="#374151" stroke-width="0"/>
  <!-- Spring (right - with mass) -->
  <text x="255" y="50" font-size="11" fill="#374151">Loaded (force F):</text>
  <line x1="300" y1="60" x2="300" y2="65" stroke="#374151" stroke-width="2"/>
  <path d="M 300 65 Q 292 72 308 79 Q 292 86 308 93 Q 292 100 308 107 Q 292 114 300 121" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <line x1="300" y1="121" x2="300" y2="140" stroke="#374151" stroke-width="2"/>
  <!-- mass -->
  <rect x="280" y="140" width="40" height="22" fill="#64748b" rx="4"/>
  <text x="300" y="155" text-anchor="middle" font-size="10" fill="white">100 g</text>
  <!-- extension arrow -->
  <line x1="320" y1="105" x2="320" y2="140" stroke="#ef4444" stroke-width="1.5"/>
  <polygon points="320,140 316,130 324,130" fill="#ef4444"/>
  <polygon points="320,105 316,115 324,115" fill="#ef4444"/>
  <text x="330" y="125" font-size="10" fill="#ef4444">e</text>
  <!-- Labels -->
  <text x="220" y="210" text-anchor="middle" font-size="11" fill="#374151">Extension e = new length − natural length l₀</text>
</svg>`,
        caption: 'Left: spring at natural length l₀. Right: spring extended by e when weight F = mg added.',
      },
    },
    {
      id: 'h-graph',
      type: 'heading',
      data: { text: 'Force–Extension Graph', level: 2 },
    },
    {
      id: 'para-graph',
      type: 'paragraph',
      data: { text: 'Plotting <strong>force (vertical axis)</strong> against <strong>extension (horizontal axis)</strong> gives a graph with two distinct regions:' },
    },
    {
      id: 'list-graph',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Linear region:</strong> straight line through the origin — force is proportional to extension. Hooke\'s Law is obeyed.' },
          { text: '<strong>Limit of proportionality (P):</strong> the point beyond which the graph curves and Hooke\'s Law no longer applies.' },
          { text: '<strong>Elastic limit:</strong> just beyond P — if force is removed, the spring still returns to natural length.' },
          { text: '<strong>Plastic region:</strong> beyond the elastic limit — permanent deformation occurs.' },
        ],
      },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definitions',
        text: '<strong>Limit of proportionality:</strong> the maximum force for which extension is proportional to force (Hooke\'s Law holds).<br><br><strong>Elastic deformation:</strong> the spring returns to its original length when force is removed.<br><br><strong>Plastic deformation:</strong> the spring does not return to original length — permanently stretched.',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Safety and Accuracy',
        text: 'Use a set-square or mirror strip behind the ruler to avoid parallax error. Stop adding masses before the spring stretches beyond the elastic limit. Record the natural length first. Always repeat readings and average.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Hang masses on a spring and measure extension. F–extension graph: straight line through origin (Hooke\'s Law) up to limit of proportionality P; then curves (non-proportional). Elastic deformation: spring recovers. Plastic: permanent stretch (beyond elastic limit).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'F–extension is linear up to limit of proportionality; Hooke\'s Law F = ke applies in this region.',
    cues: [
      { id: 'cue-1', blockId: 'para-setup', prompt: 'How is extension calculated in the spring experiment?', answer: 'Extension = new length of spring − original (natural) length.' },
      { id: 'cue-2', blockId: 'list-graph', prompt: 'What is the limit of proportionality on a force–extension graph?', answer: 'The point beyond which the graph curves — Hooke\'s Law (F ∝ e) no longer applies above this point.' },
      { id: 'cue-3', blockId: 'call-key', prompt: 'Distinguish between elastic and plastic deformation.', answer: 'Elastic: spring returns to natural length when force removed. Plastic: spring is permanently deformed and does not return to natural length.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Name one source of experimental error and how to reduce it in the spring experiment.', answer: 'Parallax error when reading the ruler — use a set-square or mirror strip to ensure eyes are level with the scale reading.' },
    ],
  },
  evidence: [],
  mentions: [],
};
