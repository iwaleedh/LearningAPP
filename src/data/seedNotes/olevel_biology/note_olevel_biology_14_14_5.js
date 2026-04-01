export const note_olevel_biology_14_14_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/14 Coordination And Response/14-6-1-tropisms-in-plants.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define tropism and explain how auxin controls phototropism and gravitropism in plant shoots and roots.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is a Tropism?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Tropism Definition',
        text: 'A <strong>tropism</strong> is a directional growth response by a plant to a directional external stimulus.<br/><br/><strong>Positive tropism:</strong> Growth towards the stimulus.<br/><strong>Negative tropism:</strong> Growth away from the stimulus.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Types of tropism in plants',
        headers: ['Tropism', 'Stimulus', 'Shoot response', 'Root response'],
        rows: [
          ['Phototropism', 'Light', 'Positive — grows towards light', 'Negative — grows away from light'],
          ['Gravitropism (geotropism)', 'Gravity', 'Negative — grows upward (away from gravity)', 'Positive — grows downward (towards gravity)'],
          ['Hydrotropism', 'Water', 'Varies', 'Positive — roots grow towards water']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Role of Auxin (IAA)', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<strong>Auxin</strong> (also called <strong>IAA — indole acetic acid</strong>) is a plant hormone produced at the shoot tip. Auxin promotes <strong>cell elongation</strong>. Uneven distribution of auxin causes uneven growth, resulting in bending.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Phototropism — Shoot Bending Towards Light', level: 2 }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Auxin distribution in a shoot tip causes phototropism',
        svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="520" height="300" fill="#0a2e1a" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">Phototropism: Auxin Causes Shoot to Bend Towards Light</text>
  <!-- Light rays from left -->
  <line x1="20" y1="60" x2="120" y2="100" stroke="#fbbf24" stroke-width="2.5"/>
  <line x1="20" y1="100" x2="120" y2="120" stroke="#fbbf24" stroke-width="2.5"/>
  <line x1="20" y1="140" x2="120" y2="140" stroke="#fbbf24" stroke-width="2.5"/>
  <text x="10" y="55" font-size="12" fill="#b45309">☀ Light</text>
  <!-- Shoot -->
  <rect x="180" y="60" width="60" height="180" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <!-- Auxin dots — more on shaded side -->
  <circle cx="195" cy="90" r="4" fill="#1d4ed8"/>
  <circle cx="195" cy="110" r="4" fill="#1d4ed8"/>
  <circle cx="195" cy="130" r="4" fill="#1d4ed8"/>
  <circle cx="195" cy="150" r="4" fill="#1d4ed8"/>
  <circle cx="210" cy="100" r="4" fill="#1d4ed8"/>
  <circle cx="210" cy="120" r="4" fill="#1d4ed8"/>
  <circle cx="225" cy="90" r="4" fill="#1d4ed8" opacity="0.3"/>
  <circle cx="225" cy="120" r="4" fill="#1d4ed8" opacity="0.3"/>
  <!-- Arrow showing bend -->
  <path d="M240 80 Q280 110 250 150" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,3" marker-end="url(#redArr)"/>
  <text x="290" y="110" font-size="11" fill="#dc2626">Shoot bends</text>
  <text x="290" y="125" font-size="11" fill="#dc2626">towards light</text>
  <!-- Labels -->
  <text x="145" y="100" font-size="10" fill="#166534">Light</text>
  <text x="145" y="112" font-size="10" fill="#166534">side</text>
  <text x="248" y="100" font-size="10" fill="#1d4ed8">Shaded</text>
  <text x="248" y="112" font-size="10" fill="#1d4ed8">side</text>
  <text x="140" y="200" font-size="10" fill="#1d4ed8">(less auxin)</text>
  <text x="248" y="200" font-size="10" fill="#1d4ed8">(more auxin)</text>
  <text x="140" y="215" font-size="10" fill="#16a34a">less elongation</text>
  <text x="248" y="215" font-size="10" fill="#16a34a">more elongation</text>
  <!-- Explanation box -->
  <rect x="340" y="60" width="165" height="120" rx="6" fill="#2d1b69" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="422" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="#5b21b6">How it works:</text>
  <text x="422" y="98" text-anchor="middle" font-size="10" fill="#5b21b6">Auxin moves away</text>
  <text x="422" y="111" text-anchor="middle" font-size="10" fill="#5b21b6">from light to shaded</text>
  <text x="422" y="124" text-anchor="middle" font-size="10" fill="#5b21b6">side. More auxin =</text>
  <text x="422" y="137" text-anchor="middle" font-size="10" fill="#5b21b6">more elongation on</text>
  <text x="422" y="150" text-anchor="middle" font-size="10" fill="#5b21b6">shaded side → bend</text>
  <text x="422" y="165" text-anchor="middle" font-size="10" fill="#5b21b6">towards light.</text>
  <defs>
    <marker id="redArr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'How Phototropism Works — Step by Step',
        text: '1. Light hits the shoot tip from one side.<br/>2. Auxin (IAA) is produced at the tip and migrates to the <strong>shaded side</strong>.<br/>3. Higher auxin concentration on the shaded side causes those cells to <strong>elongate more</strong>.<br/>4. Greater elongation on the shaded side causes the shoot to <strong>bend towards the light</strong> (positive phototropism).<br/>5. In roots, auxin <strong>inhibits</strong> elongation at high concentrations → roots bend away from light (negative phototropism).'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Shoots vs Roots — Opposite Responses!',
        text: 'Auxin <strong>promotes</strong> cell elongation in shoots but <strong>inhibits</strong> elongation in roots (at the same concentration). This is why shoots and roots show opposite tropisms to the same stimulus.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Tropisms are directional plant growth responses. Auxin (IAA) produced at shoot tips redistributes unevenly in response to light/gravity, causing differential cell elongation. Shoots grow towards light (positive phototropism); roots grow towards gravity (positive gravitropism).' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Tropisms: directional growth responses. Auxin migrates to shaded/lower side; promotes elongation in shoots (opposite in roots). Shoot = positive phototropism; root = positive gravitropism.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Define tropism and give one example.', answer: 'A tropism is a directional growth response by a plant to a directional stimulus. Example: phototropism — shoot grows towards light.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'Explain why a shoot bends towards light using auxin.', answer: 'Auxin moves to the shaded side of the shoot tip. Higher auxin concentration causes greater cell elongation on the shaded side, so the shoot bends towards the light.' },
      { id: 'cue-3', blockId: 'call-3', prompt: 'Why do roots and shoots show opposite responses to auxin?', answer: 'High auxin concentrations promote elongation in shoots but inhibit elongation in roots, so the same redistribution of auxin causes opposite bending in roots vs shoots.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_14_14_5;
