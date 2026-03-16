export const note_olevel_physics_1_9_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-9-1-pressure.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define pressure; recall and apply P = F/A; understand the pascal; explain everyday examples involving changing pressure by changing area.' },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is Pressure?', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: '<strong>Pressure</strong> is the <em>force acting per unit area</em>. The same force spreads over a larger area produces less pressure; concentrated over a smaller area produces more pressure.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pressure Formula',
        text: 'P = F/A<br><br>P = pressure (Pa or N/m²)<br>F = force (N)<br>A = area (m²)<br><br>1 pascal (Pa) = 1 newton per square metre (N/m²)',
      },
    },
    {
      id: 'eq-pressure',
      type: 'equation',
      data: {
        html: 'P = <span class="nb-frac"><span class="nb-num">F</span><span class="nb-den">A</span></span>',
        caption: 'Pressure (Pa) = Force (N) ÷ Area (m²)',
      },
    },
    {
      id: 'svg-pressure',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="380" height="200" fill="#f0fdf4" rx="10"/>
  <text x="190" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d">Same Force, Different Area → Different Pressure</text>
  <!-- Left: Small area (nail/knife) -->
  <rect x="30" y="100" width="120" height="60" fill="white" stroke="#e5e7eb" rx="5"/>
  <text x="90" y="120" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Small Area (nail)</text>
  <!-- Nail shape -->
  <polygon points="90,40 82,90 98,90" fill="#94a3b8"/>
  <rect x="80" y="30" width="20" height="12" rx="2" fill="#6b7280"/>
  <!-- Force arrow -->
  <line x1="90" y1="18" x2="90" y2="30" stroke="#dc2626" stroke-width="2"/>
  <polygon points="90,30 86,22 94,22" fill="#dc2626"/>
  <text x="108" y="22" font-size="9" fill="#dc2626">F = 50 N</text>
  <!-- Ground line -->
  <line x1="30" y1="98" x2="150" y2="98" stroke="#374151" stroke-width="2"/>
  <text x="90" y="140" text-anchor="middle" font-size="9" fill="#dc2626">A = 0.001 m²</text>
  <text x="90" y="155" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">P = 50 000 Pa</text>
  <text x="90" y="168" text-anchor="middle" font-size="9" fill="#dc2626">High pressure!</text>

  <!-- Right: Large area (snowshoe) -->
  <rect x="220" y="100" width="130" height="60" fill="white" stroke="#e5e7eb" rx="5"/>
  <text x="285" y="120" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Large Area (snowshoe)</text>
  <!-- Snowshoe / flat shape -->
  <ellipse cx="285" cy="95" rx="45" ry="10" fill="#9ca3af"/>
  <!-- Stick figure standing -->
  <circle cx="285" cy="62" r="10" fill="#6366f1"/>
  <line x1="285" y1="72" x2="285" y2="90" stroke="#374151" stroke-width="2"/>
  <line x1="268" y1="80" x2="302" y2="80" stroke="#374151" stroke-width="2"/>
  <!-- Force arrow -->
  <line x1="285" y1="26" x2="285" y2="52" stroke="#dc2626" stroke-width="2"/>
  <polygon points="285,52 281,44 289,44" fill="#dc2626"/>
  <text x="310" y="40" font-size="9" fill="#dc2626">F = 50 N</text>
  <text x="285" y="140" text-anchor="middle" font-size="9" fill="#16a34a">A = 0.5 m²</text>
  <text x="285" y="155" text-anchor="middle" font-size="10" font-weight="bold" fill="#16a34a">P = 100 Pa</text>
  <text x="285" y="168" text-anchor="middle" font-size="9" fill="#16a34a">Low pressure</text>
</svg>`,
        caption: 'Same 50 N force — nail (small area) → very high pressure; snowshoe (large area) → very low pressure.',
      },
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Real-World Examples', level: 2 },
    },
    {
      id: 'list-eg',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Sharp knife:</strong> very small edge area → very high pressure → cuts easily' },
          { text: '<strong>Snowshoes / skis:</strong> large area → low pressure → don\'t sink into snow' },
          { text: '<strong>Camel foot pads:</strong> large area → spread weight → don\'t sink in sand' },
          { text: '<strong>Drawing pin:</strong> sharp point (small A) on nail side; wide head reduces pressure on thumb' },
          { text: '<strong>Tractor tyres:</strong> very wide → low pressure → don\'t sink in soft soil' },
        ],
      },
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Pressure of a Box',
        text: 'A box weighs 600 N and its base is 0.5 m × 0.4 m. Calculate the pressure on the floor.<br><br>A = 0.5 × 0.4 = 0.2 m²<br>P = F/A = 600 ÷ 0.2 = <strong>3000 Pa</strong>',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Convert cm² to m²',
        text: 'Area is often given in cm². Convert to m²: 1 cm² = 1 × 10⁻⁴ m². Or: divide cm² by 10 000.<br>Example: 50 cm² = 50 ÷ 10 000 = 0.005 m².',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Pressure P = F/A. Units: pascals (Pa) = N/m². Increasing area → lower pressure for same force. Applications: sharp blades (small area = high pressure), snowshoes (large area = low pressure). Calculate area in m², not cm².' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'P = F/A. Units: Pa (N/m²). Small area → high pressure. Large area → low pressure.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Write the equation for pressure, state the unit, and explain what it means.', answer: 'P = F/A. Pressure is measured in pascals (Pa), where 1 Pa = 1 N/m². Pressure is the force per unit area — it tells you how concentrated the force is.' },
      { id: 'cue-2', blockId: 'call-we1', prompt: 'A 600 N box rests on a 0.5 m × 0.4 m base. Calculate the pressure it exerts on the floor.', answer: 'Area = 0.5 × 0.4 = 0.2 m². Pressure = 600 ÷ 0.2 = 3000 Pa.' },
      { id: 'cue-3', blockId: 'svg-pressure', prompt: 'Explain why snowshoes allow a person to walk on soft snow without sinking.', answer: 'Snowshoes have a large surface area. Since P = F/A, the larger the area, the smaller the pressure for the same weight. The low pressure means the snowshoe does not sink into the snow.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Convert 50 cm² to m² and explain why this conversion is important.', answer: '50 cm² = 50 ÷ 10 000 = 0.005 m². The conversion is important because the pressure formula requires area in m² and force in N to give pressure in Pa (N/m²). Using cm² would give a wrong answer by a factor of 10 000.' },
    ],
  },
  evidence: [],
  mentions: [],
};
