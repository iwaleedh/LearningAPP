export const note_olevel_physics_3_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-4-4-uses-of-seismic-waves.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how seismometers at multiple stations are used to locate earthquake epicentres by triangulation. Describe other uses of seismic waves including resource exploration and nuclear test monitoring.' },
    },
    {
      id: 'h-seismometers',
      type: 'heading',
      data: { text: 'Locating Earthquakes Using Seismometers', level: 2 },
    },
    {
      id: 'para-ps',
      type: 'paragraph',
      data: { text: 'When seismic waves from an earthquake arrive at a seismograph station, P-waves arrive <strong>before</strong> S-waves (because P-waves are faster). The <strong>time difference (t<sub>S</sub> − t<sub>P</sub>)</strong> between the P and S wave arrivals at a station is proportional to the station\'s distance from the epicentre — a larger time difference means a more distant earthquake.' },
    },
    {
      id: 'callout-key-ps',
      type: 'callout',
      data: {
        style: 'key',
        title: 'P–S Time Difference → Distance to Epicentre',
        text: 'Longer P–S arrival time gap = earthquake was further away\n\nBy reading the P–S time difference from a seismogram and comparing with travel-time curves for P and S waves, seismologists can calculate the distance from any station to the epicentre.',
      },
    },
    {
      id: 'h-triangulation',
      type: 'heading',
      data: { text: 'Triangulation from Three Stations', level: 2 },
    },
    {
      id: 'para-triangulation',
      type: 'paragraph',
      data: { text: 'Knowing the distance from one station only tells us the epicentre lies somewhere on a <strong>circle</strong> centred on that station. To locate the epicentre precisely, measurements from <strong>at least three stations</strong> are needed. Each station provides a circle; the single point where all three circles intersect is the epicentre.' },
    },
    {
      id: 'svg-triangulation',
      type: 'svg',
      data: {
        caption: 'Triangulation of earthquake epicentre using P–S time differences from three seismograph stations',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 380" width="460" height="380">
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <!-- Background map-like  -->
  <rect x="0" y="0" width="460" height="380" fill="#0a2e1a" rx="4"/>
  <!-- Station A (left) with circle -->
  <circle cx="90" cy="280" r="4" fill="#3b82f6"/>
  <text x="78" y="300" fill="#3b82f6">Station A</text>
  <!-- Station B (right) with circle -->
  <circle cx="370" cy="290" r="4" fill="#10b981"/>
  <text x="358" y="310" fill="#10b981">Station B</text>
  <!-- Station C (top) with circle -->
  <circle cx="230" cy="50" r="4" fill="#f59e0b"/>
  <text x="218" y="42" fill="#f59e0b">Station C</text>
  <!-- Epicentre (where circles meet) -->
  <circle cx="225" cy="215" r="7" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
  <text x="235" y="212" fill="#ef4444" font-weight="bold">Epicentre</text>
  <!-- Circle from Station A: radius = distance A to epicentre -->
  <!-- A=(90,280), E=(225,215): distance = sqrt(135²+65²) ≈ 149 -->
  <circle cx="90" cy="280" r="149" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.7"/>
  <!-- Circle from Station B: radius = distance B to epicentre -->
  <!-- B=(370,290), E=(225,215): distance = sqrt(145²+75²) ≈ 163 -->
  <circle cx="370" cy="290" r="163" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.7"/>
  <!-- Circle from Station C: radius = distance C to epicentre -->
  <!-- C=(230,50), E=(225,215): distance = sqrt(5²+165²) ≈ 165 -->
  <circle cx="230" cy="50" r="165" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.7"/>
  <!-- Distance lines from stations to epicentre -->
  <line x1="90" y1="280" x2="225" y2="215" stroke="#3b82f6" stroke-width="1" opacity="0.5"/>
  <line x1="370" y1="290" x2="225" y2="215" stroke="#10b981" stroke-width="1" opacity="0.5"/>
  <line x1="230" y1="50" x2="225" y2="215" stroke="#f59e0b" stroke-width="1" opacity="0.5"/>
  <!-- Seismogram sketches near each station -->
  <!-- Station A seismogram -->
  <rect x="10" y="180" width="75" height="40" fill="#1e293b" stroke="#3b82f6" stroke-width="1" rx="2"/>
  <text x="47" y="193" text-anchor="middle" fill="#3b82f6" font-size="9">Seismogram A</text>
  <path d="M15,212 L25,212 L27,204 L29,220 L31,212 L37,212 L40,200 L43,224 L46,212 L52,212 L53,207 L55,217 L57,212 L80,212" stroke="#3b82f6" stroke-width="1.2" fill="none"/>
  <text x="47" y="230" text-anchor="middle" fill="#94a3b8" font-size="8">P  S  →time</text>
</svg>`,
      },
    },
    {
      id: 'list-triangulation-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'At each seismograph station, read the seismogram and measure the P–S arrival time difference' },
          { text: 'Use travel-time curves to convert each time difference into a distance from that station to the epicentre' },
          { text: 'Draw a circle (on a globe or map) around each station with the calculated radius (distance)' },
          { text: 'The epicentre is at the single point where all three circles intersect' },
        ],
      },
    },
    {
      id: 'h-other',
      type: 'heading',
      data: { text: 'Other Uses of Seismic Waves', level: 2 },
    },
    {
      id: 'h-explore',
      type: 'heading',
      data: { text: 'Exploration Seismology', level: 3 },
    },
    {
      id: 'para-explore',
      type: 'paragraph',
      data: { text: '<strong>Exploration seismology</strong> uses artificially generated seismic waves (usually from explosions or vibrating trucks) to probe Earth\'s crust for valuable resources. Reflected and refracted waves detected at the surface reveal underground structures:' },
    },
    {
      id: 'list-explore',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Oil and gas exploration</strong> — seismic surveys reveal the shape of underground rock layers, identifying potential reservoirs' },
          { text: '<strong>Mineral exploration</strong> — locating ore deposits and mapping subsurface geology' },
          { text: '<strong>Geothermal energy</strong> — identifying where hot rock is accessible underground' },
        ],
      },
    },
    {
      id: 'h-nuclear',
      type: 'heading',
      data: { text: 'Nuclear Test Monitoring', level: 3 },
    },
    {
      id: 'para-nuclear',
      type: 'paragraph',
      data: { text: 'Underground nuclear explosions generate seismic waves detectable worldwide. The <strong>Comprehensive Nuclear-Test-Ban Treaty (CTBT)</strong> is monitored by a global network of seismograph stations (the IMS — International Monitoring System). Scientists can distinguish between earthquakes and nuclear explosions from the wave pattern and the P-to-S wave ratio.' },
    },
    {
      id: 'h-hazard',
      type: 'heading',
      data: { text: 'Earthquake Hazard Mapping', level: 3 },
    },
    {
      id: 'para-hazard',
      type: 'paragraph',
      data: { text: 'Historical earthquake records combined with detailed knowledge of fault lines allow scientists to produce <strong>seismic hazard maps</strong> showing the probability of strong shaking in different regions. These maps guide building codes, land-use planning, and emergency response preparation.' },
    },
    {
      id: 'tbl-uses',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of uses of seismic waves',
        headers: ['Application', 'How seismic waves are used', 'Benefit'],
        rows: [
          ['Locating epicentres', 'P–S time difference at 3+ stations → triangulation', 'Rapid disaster response and public warning'],
          ['Studying Earth\'s interior', 'Wave paths and shadow zones', 'We know Earth has a liquid outer core and solid inner core'],
          ['Oil/gas exploration', 'Reflected waves from subsurface rock boundaries', 'Find underground reservoirs without drilling'],
          ['Nuclear test detection', 'Global seismograph network detects explosion waves', 'Enforce international test ban treaties'],
          ['Hazard mapping', 'Historical data + fault mapping', 'Guide building codes and reduce earthquake deaths'],
        ],
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Three Stations?',
        text: 'One station gives a circle of possibilities (epicentre anywhere on the circle). Two stations give two intersection points (still ambiguous). Three stations give ONE unique intersection point — the epicentre.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Seismograph stations measure the P–S arrival time difference, which indicates distance to the epicentre. Three or more stations are needed for triangulation to pinpoint the epicentre. Seismic waves are also used for: exploration seismology (finding oil/gas/minerals), nuclear test detection, and earthquake hazard mapping.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'P–S time gap → distance. 3 stations needed for triangulation → unique epicentre. Also used for oil exploration and nuclear test monitoring.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-ps', prompt: 'How is the P–S arrival time difference used to find the distance to an earthquake epicentre?', answer: 'The P–S time difference is larger for distant earthquakes (because P and S waves travel at different speeds, they get further apart with increasing distance). By comparing the measured time gap with standard travel-time curves, the distance from the station to the epicentre can be calculated.' },
      { id: 'cue-2', blockId: 'callout-tip1', prompt: 'Why are at least three seismograph stations needed to locate an epicentre?', answer: 'One station gives only a circle of possible locations. Two stations give two intersection points (ambiguous). Three stations give a single unique intersection point — the epicentre.' },
      { id: 'cue-3', blockId: 'para-explore', prompt: 'How is seismology used to find oil and gas deposits?', answer: 'Exploration seismology uses controlled explosions or vibrating trucks to generate seismic waves. These waves reflect off underground rock layer boundaries. Sensors at the surface record the reflected waves; the pattern of reflections reveals the shape and depth of underground rock structures, indicating potential oil/gas traps.' },
      { id: 'cue-4', blockId: 'para-nuclear', prompt: 'How can seismograph networks detect underground nuclear tests?', answer: 'Nuclear explosions generate seismic waves that are detected by a global network of seismometers. The wave pattern from an explosion differs from a natural earthquake (different P/S ratio, different wave type), allowing scientists to identify and locate clandestine nuclear tests.' },
    ],
  },
  evidence: [],
  mentions: [],
};
