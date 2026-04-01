export const note_olevel_physics_1_5_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-5-3-centre-of-gravity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define centre of gravity; explain how the position of the centre of gravity affects stability; distinguish between stable, unstable, and neutral equilibrium.' },
    },
    {
      id: 'h-cog',
      type: 'heading',
      data: { text: 'Centre of Gravity', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Centre of Gravity (CoG)',
        text: 'The <strong>centre of gravity</strong> (or centre of mass) is the single point through which the entire weight of an object appears to act, regardless of the object\'s orientation.<br><br>For uniform, regular objects, the CoG is at the geometric centre.',
      },
    },
    {
      id: 'para-cog',
      type: 'paragraph',
      data: { text: 'The CoG determines whether an object will topple. An object will topple if the vertical line through its CoG falls outside its base area. A lower CoG and wider base both increase stability.' },
    },
    {
      id: 'svg-stability',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="210" fill="#2d1b69" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Stability and Centre of Gravity</text>
  <!-- Stable: low CoG, wide base -->
  <rect x="30" y="160" width="110" height="5" fill="#374151"/>
  <rect x="55" y="120" width="60" height="40" fill="#3b82f6" rx="3"/>
  <circle cx="85" cy="140" r="6" fill="#ef4444"/>
  <!-- Weight arrow -->
  <line x1="85" y1="146" x2="85" y2="163" stroke="#ef4444" stroke-width="2"/>
  <polygon points="85,163 81,154 89,154" fill="#ef4444"/>
  <text x="85" y="185" text-anchor="middle" font-size="11" fill="#16a34a" font-weight="bold">STABLE</text>
  <text x="85" y="198" text-anchor="middle" font-size="10" fill="#374151">Low CoG, wide base</text>
  <!-- Vertical line through CoG (within base) -->
  <line x1="85" y1="120" x2="85" y2="165" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Unstable: high CoG, narrow base -->
  <rect x="170" y="160" width="100" height="5" fill="#374151"/>
  <rect x="205" y="100" width="30" height="60" fill="#3b82f6" rx="3"/>
  <circle cx="220" cy="130" r="6" fill="#ef4444"/>
  <line x1="220" y1="136" x2="220" y2="163" stroke="#ef4444" stroke-width="2"/>
  <polygon points="220,163 216,154 224,154" fill="#ef4444"/>
  <text x="220" y="185" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="bold">UNSTABLE</text>
  <text x="220" y="198" text-anchor="middle" font-size="10" fill="#374151">High CoG, narrow base</text>
  <line x1="220" y1="100" x2="220" y2="165" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Tilted box - toppling -->
  <rect x="310" y="160" width="100" height="5" fill="#374151"/>
  <g transform="rotate(-20, 360, 160)">
    <rect x="335" y="110" width="50" height="50" fill="#3b82f6" rx="3" opacity="0.8"/>
    <circle cx="360" cy="135" r="6" fill="#ef4444"/>
  </g>
  <line x1="360" y1="108" x2="360" y2="165" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="360" y="185" text-anchor="middle" font-size="11" fill="#f59e0b" font-weight="bold">TOPPLING</text>
  <text x="360" y="198" text-anchor="middle" font-size="10" fill="#374151">CoG line outside base</text>
</svg>`,
        caption: 'Stable: CoG low, base wide. Unstable: CoG high, narrow base. Toppling: CoG line outside base.',
      },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Equilibrium', level: 2 },
    },
    {
      id: 'comparisonTable-equil',
      type: 'comparisonTable',
      data: {
        caption: 'Three types of equilibrium',
        headers: ['Type', 'What happens when displaced', 'Example'],
        rows: [
          ['Stable', 'Returns to original position', 'Ball in a bowl, car on flat road'],
          ['Unstable', 'Moves further away', 'Ball balanced on top of hill, tall thin object on edge'],
          ['Neutral', 'Stays in new position', 'Ball on a flat surface, rolling cylinder'],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Improving Stability',
        text: 'To improve stability: (1) <strong>lower the centre of gravity</strong> (heavy base, low load), (2) <strong>widen the base</strong>. Racing cars have wide wheelbase and low engines; cranes have heavy counterweights; buses carry passengers low in the vehicle.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'CoG is the point through which weight acts. Low CoG and wide base → more stable. Object topples when vertical line through CoG falls outside the base. Three equilibrium types: stable (returns), unstable (falls further), neutral (stays put).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'CoG: point where weight acts. Stability improved by lowering CoG and widening base. Topples when CoG line outside base.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Define the centre of gravity of an object.', answer: 'The single point through which the entire weight of the object appears to act, regardless of the object\'s orientation.' },
      { id: 'cue-2', blockId: 'para-cog', prompt: 'Under what condition will an object topple?', answer: 'When the vertical line through the object\'s centre of gravity falls outside its base area.' },
      { id: 'cue-3', blockId: 'comparisonTable-equil', prompt: 'Distinguish between stable and unstable equilibrium.', answer: 'Stable: when displaced, object returns to original position (CoG rises then falls back). Unstable: when displaced, object moves further away (CoG continues to fall).' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Give two changes an engineer could make to a vehicle to improve its stability.', answer: '(1) Lower the centre of gravity (heavier components lower, e.g. engine nearer floor). (2) Increase the width of the wheelbase (wider base area).' },
    ],
  },
  evidence: [],
  mentions: [],
};
