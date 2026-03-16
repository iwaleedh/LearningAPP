export const note_olevel_physics_4_2_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-9-sensing-circuits.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe LDR and thermistor characteristics and explain how they are used in sensing and control circuits.' },
    },
    {
      id: 'h-ldr',
      type: 'heading',
      data: { text: 'Light Dependent Resistor (LDR)', level: 2 },
    },
    {
      id: 'para-ldr',
      type: 'paragraph',
      data: {
        text: 'An <strong>LDR (Light Dependent Resistor)</strong> is a semiconductor component whose resistance changes with light intensity. As <strong>light increases</strong>, resistance <strong>decreases</strong>. In darkness, resistance can be hundreds of kΩ; in bright light, it drops to a few hundred Ω.',
      },
    },
    {
      id: 'call-key-ldr',
      type: 'callout',
      data: {
        style: 'key',
        title: 'LDR Rule',
        text: '<strong>More light → less resistance</strong> (more photons give more charge carriers in the semiconductor). Symbol: resistor with arrows pointing inward.',
      },
    },
    {
      id: 'h-thermistor',
      type: 'heading',
      data: { text: 'Thermistor (NTC)', level: 2 },
    },
    {
      id: 'para-thermistor',
      type: 'paragraph',
      data: {
        text: 'An <strong>NTC thermistor</strong> (Negative Temperature Coefficient) is a semiconductor resistor whose resistance <strong>decreases as temperature increases</strong>. At high temperatures, more charge carriers are freed, enabling easier current flow.',
      },
    },
    {
      id: 'call-key-thermistor',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Thermistor Rule',
        text: '<strong>Higher temperature → lower resistance</strong>. NTC = Negative Temperature Coefficient. Symbol: resistor with a T and arrow.',
      },
    },
    {
      id: 'h-combined',
      type: 'heading',
      data: { text: 'Sensors in Potential Divider Circuits', level: 2 },
    },
    {
      id: 'para-combined',
      type: 'paragraph',
      data: {
        text: 'Connecting an LDR or thermistor as part of a potential divider converts a physical quantity (light/temperature) into a voltage that can be used to control another device:',
      },
    },
    {
      id: 'svg-ldr-divider',
      type: 'svg',
      data: {
        caption: 'LDR in potential divider: V_out increases as light increases (LDR resistance falls, more voltage across fixed R).',
        svg: `<svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <!-- Supply rails -->
  <text x="20" y="45" fill="#ef4444" font-weight="bold">+V_in</text>
  <line x1="50" y1="40" x2="160" y2="40" stroke="#374151" stroke-width="2"/>
  <text x="20" y="200" fill="#3b82f6" font-weight="bold">0 V</text>
  <line x1="50" y1="195" x2="160" y2="195" stroke="#374151" stroke-width="2"/>

  <!-- LDR (top) -->
  <rect x="135" y="40" width="50" height="50" rx="6" fill="#fef9c3" stroke="#f59e0b" stroke-width="2"/>
  <text x="160" y="62" text-anchor="middle" fill="#92400e" font-weight="bold">LDR</text>
  <!-- arrows for light -->
  <line x1="103" y1="55" x2="130" y2="55" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#larr)"/>
  <line x1="103" y1="70" x2="130" y2="70" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#larr)"/>
  <text x="75" y="67" fill="#92400e" font-size="10">Light</text>
  <defs>
    <marker id="larr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#f59e0b"/>
    </marker>
    <marker id="vout-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#16a34a"/>
    </marker>
  </defs>

  <!-- Junction mid-point -->
  <line x1="160" y1="90" x2="160" y2="120" stroke="#374151" stroke-width="2"/>
  <circle cx="160" cy="120" r="4" fill="#374151"/>

  <!-- Fixed resistor R (bottom) -->
  <rect x="135" y="120" width="50" height="50" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="160" y="150" text-anchor="middle" fill="#1d4ed8" font-weight="bold">R</text>
  <line x1="160" y1="170" x2="160" y2="195" stroke="#374151" stroke-width="2"/>

  <!-- V_out output across R -->
  <line x1="185" y1="120" x2="240" y2="120" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="185" y1="195" x2="240" y2="195" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="240" y1="120" x2="240" y2="195" stroke="#16a34a" stroke-width="2"/>
  <text x="260" y="162" fill="#15803d" font-weight="bold" font-size="11">V_out</text>

  <text x="160" y="218" text-anchor="middle" fill="#64748b" font-size="10">More light → R_LDR ↓ → V_out ↑</text>
</svg>`,
      },
    },
    {
      id: 'table-apps',
      type: 'comparisonTable',
      data: {
        caption: 'Applications of sensing circuits',
        headers: ['Sensor', 'Application', 'How it works'],
        rows: [
          ['LDR in potential divider', 'Automatic street light / security light', 'Dark → R_LDR high → V_out low → transistor switches light ON'],
          ['LDR in potential divider', 'Camera exposure meter', 'Bright light → LDR low → higher current → shorter exposure'],
          ['Thermistor in potential divider', 'Thermostat / temperature alarm', 'Hot → R_therm low → V_out high → switches cooling/alarm ON'],
          ['Thermistor in potential divider', 'Incubator temperature control', 'Low temp → R_therm high → V_out low → switches heater ON'],
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'LDR: more light → lower resistance. NTC thermistor: higher temperature → lower resistance. Both used in potential dividers to produce a control voltage that changes with the environment.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'LDR (light↑ → R↓), thermistor (temp↑ → R↓); both used in potential dividers for automatic sensing and control.',
    cues: [
      { id: 'cue-1', blockId: 'para-ldr', prompt: 'How does the resistance of an LDR change with light intensity?', answer: 'Resistance decreases as light intensity increases.' },
      { id: 'cue-2', blockId: 'para-thermistor', prompt: 'What does NTC mean for a thermistor?', answer: 'Negative Temperature Coefficient — resistance decreases as temperature increases.' },
      { id: 'cue-3', blockId: 'svg-ldr-divider', prompt: 'In a potential divider with LDR as upper resistor and fixed R as lower, what happens to V_out when light increases?', answer: 'LDR resistance decreases → less voltage drop across LDR → more voltage appears across R → V_out increases.' },
      { id: 'cue-4', blockId: 'table-apps', prompt: 'Describe how a thermistor-based circuit could control a heater in an incubator.', answer: 'At low temperature, thermistor resistance is high → V_out is low → transistor turns on heater. As temperature rises, thermistor resistance falls → V_out rises → transistor switches heater off.' },
    ],
  },
  evidence: [],
  mentions: [],
};
