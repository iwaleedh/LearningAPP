export const note_olevel_physics_2_3_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-3-6-investigating-radiation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the Leslie\'s cube experiment to compare emission from different surfaces; describe the absorption experiment using black and shiny cans; interpret results in terms of surface properties; and draw conclusions about emissivity.'
      }
    },
    {
      id: 'h-leslie',
      type: 'heading',
      data: { text: 'Leslie\'s Cube — Comparing Emission', level: 2 }
    },
    {
      id: 'p-leslie',
      type: 'paragraph',
      data: {
        text: 'A <strong>Leslie\'s cube</strong> is a hollow metal cube with four different surface finishes on its four vertical faces. Hot water (or boiling water) is poured inside, so all four faces are at the <strong>same temperature</strong>. An infrared detector (thermopile or IR sensor) is placed at <strong>equal distances</strong> from each face in turn, and the reading recorded. Since temperature and distance are the same for all faces, any difference in detector reading is due to the <em>surface finish alone</em>.'
      }
    },
    {
      id: 'svg-leslie',
      type: 'svg',
      data: {
        caption: 'Leslie\'s cube experiment — all four faces at same temperature, IR detector at equal distance',
        svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Leslie's cube (isometric-style) -->
  <!-- Front face (dull black) -->
  <rect x="130" y="90" width="80" height="80" fill="#222" stroke="#444" stroke-width="2"/>
  <text x="148" y="135" fill="#1e293b" font-size="10" font-weight="bold">Dull Black</text>

  <!-- Right face (shiny silver) -->
  <polygon points="210,90 250,70 250,150 210,170" fill="#1e293b" stroke="#aaa" stroke-width="2"/>
  <text x="217" y="128" fill="#555" font-size="9">Shiny</text>

  <!-- Top face -->
  <polygon points="130,90 170,70 250,70 210,90" fill="#1e293b" stroke="#888" stroke-width="1.5"/>

  <!-- Left face (dull grey) — suggested label -->
  <text x="80" y="135" fill="#667" font-size="9">(White face</text>
  <text x="80" y="146" fill="#667" font-size="9"> on back)</text>

  <!-- Hot water inside indicator -->
  <text x="142" y="155" fill="#aaa" font-size="9">Hot H₂O</text>
  <text x="145" y="165" fill="#e44" font-size="9">inside</text>

  <!-- Emission arrows from front (dull black = many) -->
  <line x1="130" y1="120" x2="70" y2="100" stroke="#ff6622" stroke-width="2" marker-end="url(#arl)"/>
  <line x1="130" y1="130" x2="65" y2="130" stroke="#ff6622" stroke-width="2" marker-end="url(#arl)"/>
  <line x1="130" y1="140" x2="70" y2="155" stroke="#ff6622" stroke-width="2" marker-end="url(#arl)"/>

  <!-- Emission arrows from right face (shiny = few) -->
  <line x1="250" y1="100" x2="300" y2="90" stroke="#ffaa88" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arl2)"/>
  <line x1="250" y1="120" x2="305" y2="120" stroke="#ffaa88" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arl2)"/>

  <!-- Thermopile left of black face -->
  <rect x="22" y="115" width="42" height="32" rx="4" fill="#0f172a" stroke="#888" stroke-width="1.5"/>
  <text x="28" y="128" fill="#333" font-size="9">Thermo-</text>
  <text x="30" y="140" fill="#333" font-size="9">pile</text>
  <text x="20" y="160" fill="#e05020" font-size="9">High reading</text>

  <!-- Thermopile right of shiny face -->
  <rect x="316" y="105" width="42" height="32" rx="4" fill="#0f172a" stroke="#888" stroke-width="1.5"/>
  <text x="322" y="118" fill="#333" font-size="9">Thermo-</text>
  <text x="324" y="130" fill="#333" font-size="9">pile</text>
  <text x="314" y="150" fill="#888" font-size="9">Low reading</text>

  <!-- Equal distance markers -->
  <line x1="64" y1="195" x2="130" y2="195" stroke="#777" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arld)" marker-start="url(#arld2)"/>
  <text x="80" y="207" fill="#777" font-size="9">Equal d</text>
  <line x1="210" y1="195" x2="316" y2="195" stroke="#777" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arld)" marker-start="url(#arld2)"/>
  <text x="245" y="207" fill="#777" font-size="9">Equal d</text>

  <text x="100" y="245" fill="#444" font-size="11">Both at same temp → difference is due to surface finish only</text>

  <defs>
    <marker id="arl" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#ff6622"/>
    </marker>
    <marker id="arl2" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#ffaa88"/>
    </marker>
    <marker id="arld" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="#777"/>
    </marker>
    <marker id="arld2" markerWidth="5" markerHeight="5" refX="1" refY="2.5" orient="auto">
      <path d="M5,0 L0,2.5 L5,5 Z" fill="#777"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'tbl-leslie-results',
      type: 'comparisonTable',
      data: {
        caption: 'Leslie\'s cube results — ranking of emission from highest to lowest',
        headers: ['Face finish', 'Thermopile reading', 'Emission rate', 'Absorption rate'],
        rows: [
          ['Dull black', 'Highest', 'Best emitter', 'Best absorber'],
          ['Dull grey', 'High', 'Good emitter', 'Good absorber'],
          ['White / cream', 'Low', 'Poor emitter', 'Poor absorber'],
          ['Shiny polished silver', 'Lowest', 'Worst emitter', 'Worst absorber (best reflector)']
        ]
      }
    },
    {
      id: 'h-absorption',
      type: 'heading',
      data: { text: 'Absorption Experiment — Black vs Shiny Cans', level: 2 }
    },
    {
      id: 'p-absorption',
      type: 'paragraph',
      data: {
        text: 'To compare <strong>absorption</strong> of infrared radiation, two identical metal cans are used — one painted <strong>dull black</strong>, the other <strong>shiny/polished silver</strong>. Both are filled with the same volume of cold water at the same initial temperature. A heat lamp or IR source is placed equidistant from both cans and switched on. The temperature of the water in each can is recorded at regular intervals.'
      }
    },
    {
      id: 'list-absorption-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Fill two identical cans with equal volumes of water at the same temperature.' },
          { text: 'Place an IR heat lamp equidistant from both cans.' },
          { text: 'Switch on the lamp and record the temperature of each can every minute for 10 minutes.' },
          { text: 'Plot temperature vs time for both cans on the same graph.' }
        ]
      }
    },
    {
      id: 'p-absorption-result',
      type: 'paragraph',
      data: {
        text: '<strong>Result:</strong> The water in the <em>black can</em> shows a steeper temperature rise — it absorbs more infrared radiation per second. The <em>shiny can</em> temperature rises more slowly because shiny surfaces reflect most of the incident radiation. This confirms that dull black surfaces are the best absorbers.'
      }
    },
    {
      id: 'h-emission-expt',
      type: 'heading',
      data: { text: 'Emission Experiment — Cooling Rates', level: 2 }
    },
    {
      id: 'p-emission',
      type: 'paragraph',
      data: {
        text: 'Alternatively, both cans are filled with hot water at the same temperature, and the heat lamp is removed. The rate at which each can cools is monitored. The black can cools faster because it emits more thermal radiation. This demonstrates the link between high absorption and high emission: a good absorber is also a <strong>good emitter</strong>.'
      }
    },
    {
      id: 'h-fair-test',
      type: 'heading',
      data: { text: 'Fair Test — Controlling Variables', level: 2 }
    },
    {
      id: 'list-fair',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Same size and shape of cans</strong> — so that surface area is identical.' },
          { text: '<strong>Same volume of water</strong> — so that total thermal capacity is the same.' },
          { text: '<strong>Same initial temperature</strong> — starting conditions identical.' },
          { text: '<strong>Equal distance from heat source</strong> — so same intensity of radiation falls on both.' },
          { text: '<strong>Same surrounding air temperature</strong> — to eliminate variability in convection and conduction losses.' }
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Leslie\'s Cube',
        text: 'In Leslie\'s cube, the key point is that <strong>all faces are at the same temperature</strong> — the difference in thermopile readings is entirely due to surface finish. Emphasise this in your answer. If you are asked which surface is the best absorber, note that a <em>good emitter is always also a good absorber</em> — the same surface properties control both.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Confusion',
        text: 'Do not confuse the colour of <em>visible light</em> reflected with IR behaviour. A white surface reflects visible light, but for infrared some white paints are still good absorbers. For IGCSE purposes, black/dull = best absorber/emitter for IR, and shiny = worst absorber/emitter — stick to these rules unless told otherwise.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Leslie\'s cube compares IR emission from four surfaces at the same temperature: dull black emits most, shiny emits least. Absorption experiment compares temperature rise of black and shiny cans under IR: black absorbs more → heats faster. Good emitters are always good absorbers. All variables (size, volume, distance, temperature) must be controlled for a fair test.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Leslie\'s cube: same temperature, different surfaces → dull black emits most, shiny least; absorption experiment: black can heats/cools faster than shiny can.',
    cues: [
      { id: 'cue-1', blockId: 'p-leslie', prompt: 'Describe the Leslie\'s cube experiment, explaining why all four faces must be at the same temperature.' },
      { id: 'cue-2', blockId: 'tbl-leslie-results', prompt: 'State the order of surfaces from best to worst IR emitter in a Leslie\'s cube experiment.' },
      { id: 'cue-3', blockId: 'p-absorption', prompt: 'Describe the absorption experiment using black and shiny cans. What result would you expect, and why?' },
      { id: 'cue-4', blockId: 'list-fair', prompt: 'List three variables that must be controlled to make the absorption can experiment a fair test.' }
    ]
  },
  evidence: []
};
