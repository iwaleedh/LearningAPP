export const note_olevel_physics_2_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-3-3-radiation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe thermal radiation as infrared radiation; state that it requires no medium; compare emission and absorption of different surfaces; and apply knowledge to everyday heating and cooling situations.'
      }
    },
    {
      id: 'h-radiation',
      type: 'heading',
      data: { text: 'Thermal Radiation', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: {
        text: '<strong>Thermal (infrared) radiation</strong> is the transfer of thermal energy by <strong>electromagnetic waves</strong> — mainly infrared radiation. Unlike conduction and convection, radiation does <em>not require a medium</em> (it can travel through a vacuum). This is how the Sun\'s energy reaches Earth through the vacuum of space.'
      }
    },
    {
      id: 'callout-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Properties of Thermal Radiation',
        text: '• Travels as <strong>infrared electromagnetic waves</strong> at the speed of light.<br/>• Requires <strong>no medium</strong> — works in a vacuum.<br/>• <strong>All objects above absolute zero (0 K)</strong> emit thermal radiation.<br/>• The hotter the object, the <strong>more radiation</strong> it emits, and at <strong>shorter wavelengths</strong>.'
      }
    },
    {
      id: 'h-surfaces',
      type: 'heading',
      data: { text: 'Effect of Surface Colour and Texture', level: 2 }
    },
    {
      id: 'p-surfaces',
      type: 'paragraph',
      data: {
        text: 'The rate of emission and absorption of thermal radiation depends on the surface properties of the object, not just its temperature. Experiments with Leslie\'s cube show clear differences between surface types.'
      }
    },
    {
      id: 'tbl-surfaces',
      type: 'comparisonTable',
      data: {
        caption: 'Emission and absorption properties of different surfaces',
        headers: ['Surface type', 'Emission rate', 'Absorption rate', 'Reflection rate'],
        rows: [
          ['Dull black / matt black', 'Best emitter', 'Best absorber', 'Poorest reflector'],
          ['Dull grey', 'Good emitter', 'Good absorber', 'Poor reflector'],
          ['White / light coloured', 'Poor emitter', 'Poor absorber', 'Good reflector'],
          ['Shiny / polished silver', 'Worst emitter', 'Worst absorber', 'Best reflector']
        ]
      }
    },
    {
      id: 'svg-surfaces',
      type: 'svg',
      data: {
        caption: 'Infrared emission from a black surface vs a polished silver surface at the same temperature',
        svg: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Black surface (left) -->
  <rect x="40" y="70" width="120" height="100" rx="6" fill="#222" stroke="#444" stroke-width="2"/>
  <text x="65" y="64" fill="#222" font-size="13" font-weight="bold">Dull Black</text>
  <text x="55" y="180" fill="#555" font-size="11">Best emitter</text>

  <!-- Black emission arrows (many, red-orange) -->
  <line x1="60" y1="70" x2="45" y2="30" stroke="#ff6622" stroke-width="2" marker-end="url(#arrir)"/>
  <line x1="80" y1="70" x2="70" y2="25" stroke="#ff6622" stroke-width="2" marker-end="url(#arrir)"/>
  <line x1="100" y1="70" x2="100" y2="22" stroke="#ff6622" stroke-width="2" marker-end="url(#arrir)"/>
  <line x1="120" y1="70" x2="130" y2="25" stroke="#ff6622" stroke-width="2" marker-end="url(#arrir)"/>
  <line x1="140" y1="70" x2="155" y2="30" stroke="#ff6622" stroke-width="2" marker-end="url(#arrir)"/>
  <line x1="60" y1="170" x2="45" y2="210" stroke="#ff6622" stroke-width="2" marker-end="url(#arrir)"/>
  <line x1="100" y1="170" x2="100" y2="215" stroke="#ff6622" stroke-width="2" marker-end="url(#arrir)"/>
  <line x1="140" y1="170" x2="155" y2="210" stroke="#ff6622" stroke-width="2" marker-end="url(#arrir)"/>

  <!-- Arrow count label -->
  <text x="48" y="16" fill="#ff6622" font-size="10">↑ Many IR rays</text>

  <!-- VS divider -->
  <text x="188" y="125" fill="#888" font-size="14" font-weight="bold">vs</text>

  <!-- Polished silver surface (right) -->
  <rect x="230" y="70" width="120" height="100" rx="6" fill="#1e293b" stroke="#aaa" stroke-width="2"/>
  <!-- Shine effect -->
  <ellipse cx="265" cy="95" rx="20" ry="8" fill="#1e293b" opacity="0.5"/>
  <text x="240" y="64" fill="#777" font-size="13" font-weight="bold">Shiny Silver</text>
  <text x="237" y="180" fill="#555" font-size="11">Worst emitter</text>

  <!-- Silver emission arrows (few, faint) -->
  <line x1="270" y1="70" x2="260" y2="35" stroke="#ffaa88" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrirfaint)"/>
  <line x1="310" y1="70" x2="320" y2="35" stroke="#ffaa88" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrirfaint)"/>
  <text x="248" y="18" fill="#ffaa88" font-size="10">↑ Few IR rays</text>

  <!-- Reflected rays (silver surface) -->
  <line x1="250" y1="95" x2="220" y2="75" stroke="#88ccff" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="340" y1="95" x2="370" y2="75" stroke="#88ccff" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="356" y="70" fill="#44aaee" font-size="9">Reflected</text>

  <!-- Temperature indicator -->
  <text x="90" y="200" fill="#e44" font-size="10">Same temperature →</text>

  <defs>
    <marker id="arrir" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#ff6622"/>
    </marker>
    <marker id="arrirfaint" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#ffaa88"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Applications', level: 2 }
    },
    {
      id: 'list-applications',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Solar panels / solar water heaters</strong> — painted matt black to maximise absorption of solar radiation.' },
          { text: '<strong>Thermos/vacuum flask silvered walls</strong> — shiny surfaces minimise emission and absorption of radiation, keeping contents hot or cold.' },
          { text: '<strong>Space blankets (emergency foil blankets)</strong> — shiny surface reflects the body\'s infrared radiation back, reducing heat loss.' },
          { text: '<strong>White painted buildings in hot climates</strong> — reflect solar radiation, keeping interiors cooler.' },
          { text: '<strong>Central heating radiators</strong> — despite the name, these actually transfer heat mainly by convection; painted white (adequate emitter but small compared to convection).' },
          { text: '<strong>Car radiators painted black</strong> — to maximise radiation loss of heat.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Remember: a good emitter is also a good absorber, and a poor emitter is also a poor absorber (good reflector). Black dull surfaces: best for both emitting and absorbing. Shiny surfaces: best reflectors, worst absorbers/emitters. These relationships are tested frequently.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Do Not Confuse with Light',
        text: 'Thermal radiation is <strong>infrared</strong>, which is invisible to the naked eye. Do not confuse it with visible light. A black object appears black because it <em>absorbs visible light</em>, but the same property also makes it the best <em>absorber and emitter of infrared radiation</em>. The underlying reason is the same.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Thermal radiation is infrared electromagnetic radiation that needs no medium. All objects emit IR; hotter objects emit more. Dull black surfaces are the best absorbers and emitters; shiny surfaces are the worst absorbers/emitters (best reflectors). Applications: solar panels (black), vacuum flask walls (shiny), emergency blankets (shiny).'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'IR radiation; no medium needed; dull black = best absorber/emitter; shiny = best reflector; hotter objects emit more and at shorter wavelengths.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-def', prompt: 'Give three key properties of thermal radiation that distinguish it from conduction and convection.' },
      { id: 'cue-2', blockId: 'tbl-surfaces', prompt: 'Which type of surface is the best emitter of thermal radiation, and which is the worst absorber?' },
      { id: 'cue-3', blockId: 'list-applications', prompt: 'Explain why solar water heating panels are painted matt black.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'A student says a shiny surface is a good absorber and poor emitter. Correct this statement and explain the relationship between emitting and absorbing.' }
    ]
  },
  evidence: []
};
