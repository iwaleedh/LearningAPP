export const note_olevel_physics_1_3_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-3-4-floating.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain why objects float or sink using density comparison; state Archimedes\' principle; define upthrust and relate it to the weight of fluid displaced.' },
    },
    {
      id: 'h-float-sink',
      type: 'heading',
      data: { text: 'Why Objects Float or Sink', level: 2 },
    },
    {
      id: 'para-float',
      type: 'paragraph',
      data: { text: 'Whether an object floats or sinks depends on a comparison of densities: if the <strong>object\'s density is less than the fluid\'s</strong>, it floats; if it is greater, it sinks. For example, wood (ρ ≈ 600 kg/m³) floats on water (ρ = 1000 kg/m³), while iron (ρ = 7900 kg/m³) sinks.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Archimedes\' Principle',
        text: 'When an object is fully or partially submerged in a fluid, it experiences an <strong>upthrust</strong> (buoyant force) equal to the <strong>weight of fluid displaced</strong>.<br><br>Upthrust = weight of displaced fluid = ρ<sub>fluid</sub> × V<sub>submerged</sub> × g',
      },
    },
    {
      id: 'h-upthrust',
      type: 'heading',
      data: { text: 'Upthrust and Equilibrium', level: 2 },
    },
    {
      id: 'para-upthrust',
      type: 'paragraph',
      data: { text: 'An object floats when the <strong>upthrust equals its weight</strong>. At this point the forces are balanced. For a floating object, it sinks just enough so that the weight of water displaced equals the object\'s own weight.' },
    },
    {
      id: 'svg-float',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="250" fill="#f0f9ff" rx="10"/>
  <text x="220" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Floating vs Sinking: Force Comparison</text>
  <!-- Water background -->
  <rect x="30" y="110" width="180" height="110" fill="#bae6fd" rx="0"/>
  <rect x="230" y="110" width="180" height="110" fill="#bae6fd" rx="0"/>
  <!-- Container borders -->
  <rect x="30" y="50" width="180" height="170" fill="none" stroke="#374151" stroke-width="2" rx="4"/>
  <rect x="230" y="50" width="180" height="170" fill="none" stroke="#374151" stroke-width="2" rx="4"/>
  <!-- Floating object (left) - wood -->
  <rect x="75" y="85" width="90" height="40" fill="#a16207" rx="4" opacity="0.9"/>
  <text x="120" y="109" text-anchor="middle" font-size="11" fill="white">Wood block</text>
  <!-- Force arrows on wood -->
  <line x1="120" y1="85" x2="120" y2="60" stroke="#16a34a" stroke-width="2"/>
  <polygon points="120,60 116,68 124,68" fill="#16a34a"/>
  <text x="135" y="68" font-size="10" fill="#16a34a">Upthrust = W</text>
  <line x1="120" y1="125" x2="120" y2="145" stroke="#ef4444" stroke-width="2"/>
  <polygon points="120,145 116,135 124,135" fill="#ef4444"/>
  <text x="135" y="144" font-size="10" fill="#ef4444">Weight</text>
  <text x="120" y="235" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">FLOATS (ρ &lt; ρ_water)</text>
  <!-- Sinking object (right) - iron -->
  <rect x="275" y="165" width="90" height="40" fill="#64748b" rx="4"/>
  <text x="320" y="189" text-anchor="middle" font-size="11" fill="white">Iron block</text>
  <!-- Force arrows on iron -->
  <line x1="320" y1="165" x2="320" y2="145" stroke="#16a34a" stroke-width="2"/>
  <polygon points="320,145 316,153 324,153" fill="#16a34a"/>
  <text x="335" y="153" font-size="10" fill="#16a34a">Upthrust</text>
  <line x1="320" y1="205" x2="320" y2="230" stroke="#ef4444" stroke-width="2.5"/>
  <polygon points="320,230 316,220 324,220" fill="#ef4444"/>
  <text x="335" y="228" font-size="10" fill="#ef4444">Weight (bigger)</text>
  <text x="320" y="235" text-anchor="middle" font-size="11" fill="#991b1b" font-weight="bold">SINKS (ρ &gt; ρ_water)</text>
  <!-- Title labels -->
  <text x="120" y="68" text-anchor="middle" font-size="10" fill="#374151"></text>
</svg>`,
        caption: 'Left: upthrust = weight → floats. Right: weight > upthrust → sinks.',
      },
    },
    {
      id: 'h-ships',
      type: 'heading',
      data: { text: 'Ships and Hollow Objects', level: 2 },
    },
    {
      id: 'para-ships',
      type: 'paragraph',
      data: { text: 'Steel ships float even though steel is much denser than water. This is because the ship is <em>hollow</em> — it contains a large volume of air. The <strong>average density</strong> of the ship (steel + air) is less than water. When loaded, ships displace a large volume of water, generating sufficient upthrust.' },
    },
    {
      id: 'list-float-conditions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Floats:</strong> average object density < fluid density (e.g. wood in water, ships, icebergs)' },
          { text: '<strong>Sinks:</strong> average object density > fluid density (e.g. iron, stone)' },
          { text: '<strong>Neutral buoyancy (hovers):</strong> object density = fluid density (e.g. submarines, fish with swim bladder)' },
        ],
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Icebergs',
        text: 'Ice has density ≈ 917 kg/m³, water ≈ 1000 kg/m³. So about 917/1000 = 91.7% of an iceberg is submerged — only about 8% is above the surface. This follows from upthrust = weight at equilibrium.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Archimedes\' principle: upthrust = weight of fluid displaced. Objects float if density < fluid density (balanced when upthrust = weight). Ships float because their average density (hollow) < water. Sinks when weight > upthrust.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Upthrust = weight of displaced fluid; float when object density < fluid density.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State Archimedes\' principle.', answer: 'An object submerged in a fluid experiences an upthrust equal to the weight of fluid it displaces.' },
      { id: 'cue-2', blockId: 'para-float', prompt: 'An object has density 800 kg/m³. Will it float or sink in water (1000 kg/m³)? Explain.', answer: 'It floats — its density (800) is less than water (1000), so upthrust can balance its weight.' },
      { id: 'cue-3', blockId: 'para-ships', prompt: 'Explain why a hollow steel ship floats even though steel is denser than water.', answer: 'The ship is hollow, so its average density (steel + trapped air) is less than water. It displaces enough water so that upthrust equals its total weight.' },
      { id: 'cue-4', blockId: 'list-float-conditions', prompt: 'What condition gives neutral buoyancy (object neither sinks nor rises)?', answer: 'Object density = fluid density, so upthrust exactly equals weight. The object hovers at that depth.' },
    ],
  },
  evidence: [],
  mentions: [],
};
