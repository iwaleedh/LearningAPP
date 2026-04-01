export const note_olevel_physics_4_4_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-4-8-magnetic-properties-of-materials.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between hard and soft magnetic materials, give examples and uses of each, and describe methods of demagnetisation.' },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Magnetic Materials', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: {
        text: 'Not all materials respond to magnetic fields in the same way. <strong>Ferromagnetic</strong> materials (iron, steel, nickel, cobalt) are attractted by magnets and can be magnetised. They are classified into <strong>hard</strong> and <strong>soft</strong> types based on how easily they are magnetised and how well they retain their magnetism.',
      },
    },
    {
      id: 'h-hard',
      type: 'heading',
      data: { text: 'Hard Magnetic Materials', level: 2 },
    },
    {
      id: 'para-hard',
      type: 'paragraph',
      data: {
        text: '<strong>Hard magnetic materials</strong> are <em>difficult to magnetise</em> but <em>retain their magnetism</em> for a long time once magnetised. They are used for <strong>permanent magnets</strong>.',
      },
    },
    {
      id: 'list-hard',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Examples:</strong> steel, alnico (Al-Ni-Co alloy), ferrite (ceramic magnet), neodymium alloys' },
          { text: '<strong>Properties:</strong> high retentivity (hold magnetism), high coercivity (hard to demagnetise)' },
          { text: '<strong>Uses:</strong> permanent magnets, fridge magnets, compass needles, speaker magnets, hard disk drives' },
        ],
      },
    },
    {
      id: 'h-soft',
      type: 'heading',
      data: { text: 'Soft Magnetic Materials', level: 2 },
    },
    {
      id: 'para-soft',
      type: 'paragraph',
      data: {
        text: '<strong>Soft magnetic materials</strong> are <em>easily magnetised</em> and <em>quickly lose their magnetism</em> when the magnetising field is removed. They are ideal where temporary magnetisation is needed.',
      },
    },
    {
      id: 'list-soft',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Examples:</strong> soft iron, mumetal, silicon steel' },
          { text: '<strong>Properties:</strong> low retentivity (lose magnetism easily), low coercivity (easy to demagnetise)' },
          { text: '<strong>Uses:</strong> transformer cores, electromagnet cores, relay armatures, electric motor pole pieces' },
        ],
      },
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Hard vs Soft Magnetic Materials',
        headers: ['Property', 'Hard (e.g. steel)', 'Soft (e.g. iron)'],
        rows: [
          ['Magnetisation', 'Difficult to magnetise', 'Easy to magnetise'],
          ['Retentivity', 'High — retains magnetism', 'Low — loses magnetism quickly'],
          ['Coercivity', 'High — hard to demagnetise', 'Low — easy to demagnetise'],
          ['Typical use', 'Permanent magnets', 'Transformer cores, electromagnets'],
          ['Examples', 'Steel, alnico, ferrite', 'Soft iron, mumetal'],
        ],
      },
    },
    {
      id: 'h-demag',
      type: 'heading',
      data: { text: 'Demagnetisation Methods', level: 2 },
    },
    {
      id: 'para-demag',
      type: 'paragraph',
      data: {
        text: 'A magnetised material can be demagnetised by disrupting the alignment of its magnetic domains:',
      },
    },
    {
      id: 'list-demag',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Hammering / vibration:</strong> Repeated impacts vibrate the domains out of alignment' },
          { text: '<strong>Heating (above Curie temperature):</strong> Thermal energy disrupts domain alignment; once cooled the material is demagnetised' },
          { text: '<strong>Placing in a reversing AC coil:</strong> Alternating field repeatedly reverses domains; slowly withdrawing the magnet from the coil demagnetises it' },
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The distinction between hard and soft magnetic materials is key. Examiners often ask for an example of each and one use. Remember: "hard → permanent" (both H-words), "soft → temporary electromagnets / transformer core".',
      },
    },
    {
      id: 'svg-materials',
      type: 'svg',
      data: {
        caption: 'Magnetic domains: unmagnetised (random), magnetised (aligned), and demagnetised',
        svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Box 1: Unmagnetised (random domains) -->
  <rect x="10" y="30" width="120" height="100" rx="6" fill="#0f172a" stroke="#9ca3af" stroke-width="2"/>
  <text x="30" y="21" fill="#374151" font-weight="bold">Unmagnetised</text>
  <!-- random arrows -->
  <line x1="28" y1="55" x2="48" y2="55" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="80" y1="70" x2="60" y2="70" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="40" y1="90" x2="60" y2="78" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="90" y1="55" x2="90" y2="75" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="60" y1="105" x2="80" y2="105" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="30" y1="115" x2="50" y2="105" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="100" y1="95" x2="80" y2="85" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
  <text x="18" y="148" fill="#6b7280">Domains random</text>
  <text x="22" y="160" fill="#6b7280">No net field</text>

  <!-- Box 2: Magnetised (aligned domains) -->
  <rect x="160" y="30" width="120" height="100" rx="6" fill="#2d1b69" stroke="#1d4ed8" stroke-width="2"/>
  <text x="165" y="21" fill="#374151" font-weight="bold">Magnetised</text>
  <!-- aligned arrows all pointing right -->
  <line x1="175" y1="55" x2="195" y2="55" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="210" y1="55" x2="230" y2="55" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="245" y1="55" x2="265" y2="55" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="175" y1="75" x2="195" y2="75" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="210" y1="75" x2="230" y2="75" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="245" y1="75" x2="265" y2="75" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="175" y1="95" x2="195" y2="95" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="210" y1="95" x2="230" y2="95" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="245" y1="95" x2="265" y2="95" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr2)"/>
  <text x="165" y="148" fill="#1d4ed8">Domains aligned</text>
  <text x="162" y="160" fill="#1d4ed8">Strong net N pole →</text>

  <!-- Box 3: Hard vs Soft retention -->
  <rect x="310" y="30" width="120" height="100" rx="6" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/>
  <text x="315" y="21" fill="#374151" font-weight="bold">Applications</text>
  <text x="316" y="52" fill="#065f46" font-weight="bold">HARD (steel)</text>
  <text x="316" y="66" fill="#374151">Permanent magnet</text>
  <text x="316" y="80" fill="#374151">Compass needle</text>
  <line x1="315" y1="88" x2="425" y2="88" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4"/>
  <text x="316" y="100" fill="#065f46" font-weight="bold">SOFT (iron)</text>
  <text x="316" y="114" fill="#374151">Transformer core</text>
  <text x="316" y="128" fill="#374151">Electromagnet core</text>

  <!-- Arrow markers -->
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/>
    </marker>
    <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#1d4ed8"/>
    </marker>
  </defs>
  <text x="10" y="195" fill="#6b7280">Demagnetisation: hammer it, heat it, or use an AC coil (reverses domains, then withdraw)</text>
</svg>`,
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Hard (steel): difficult to magnetise, high retentivity → permanent magnets. Soft (iron): easy to magnetise, loses magnetism quickly → transformer cores, electromagnets. Demagnetise by hammering, heating, or AC coil.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Hard = permanent (steel). Soft = temporary (iron). Demagnetise: hammer, heat, AC coil.',
    cues: [
      { id: 'cue-1', blockId: 'table-compare', prompt: 'What is the difference in retentivity between hard and soft magnetic materials?', answer: 'Hard: high retentivity (keeps magnetism). Soft: low retentivity (loses magnetism quickly).' },
      { id: 'cue-2', blockId: 'list-hard', prompt: 'Give two examples of hard magnetic materials and one use.', answer: 'Steel, alnico. Use: permanent magnets, compass needles.' },
      { id: 'cue-3', blockId: 'list-soft', prompt: 'Why is soft iron used in transformer cores?', answer: 'It is easily magnetised and demagnetised by the changing AC field. It does not retain magnetism (low retentivity) so energy is not wasted.' },
      { id: 'cue-4', blockId: 'list-demag', prompt: 'Name three ways to demagnetise a permanent magnet.', answer: '1. Repeated hammering (vibration disrupts domains). 2. Heating above Curie temperature (thermal energy destroys alignment). 3. Placing in a slowly withdrawn AC coil (alternating field randomises domains).' },
    ],
  },
  evidence: [],
  mentions: [],
};
