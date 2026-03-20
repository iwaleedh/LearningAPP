export const note_olevel_chemistry_9_9_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-2-4-galvanising-and-sacrificial-protection.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and explain methods of rust prevention including painting, galvanising, sacrificial protection, and electroplating.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Preventing Rust', level: 2 }
    },
    {
      id: 'tbl-methods',
      type: 'comparisonTable',
      data: {
        caption: 'Methods of preventing rusting',
        headers: ['Method', 'How it works', 'Examples'],
        rows: [
          ['Painting', 'Physical barrier — excludes both O₂ and H₂O', 'Cars, bridges, gates'],
          ['Oiling / greasing', 'Physical barrier — excludes O₂ and H₂O', 'Machine parts, bicycle chains'],
          ['Electroplating', 'Coat with another metal (e.g. tin, chromium) — barrier', 'Tin cans (food tins = steel coated with tin)'],
          ['Galvanising', 'Coat with zinc (by hot-dipping or electroplating); zinc acts as both barrier AND sacrificial protection', 'Corrugated roofing, fences, car body panels'],
          ['Sacrificial protection', 'More reactive metal (Mg or Zn) attached and corrodes preferentially, protecting iron', 'Ship hulls (Mg blocks), underground pipelines (Mg/Zn rods)'],
          ['Alloying (stainless steel)', 'Chromium forms a thin, invisible oxide layer that self-repairs', 'Cutlery, surgical instruments']
        ]
      }
    },
    {
      id: 'call-galv',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Galvanising is Superior to Tin-Plating',
        text: '<strong>Tin-plating:</strong> tin acts only as a physical barrier. If the coating is scratched, the exposed iron is now in contact with a less reactive metal (tin) → iron corrodes <strong>faster</strong> (galvanic effect).<br/><br/><strong>Galvanising (zinc coating):</strong> zinc provides <strong>two layers of protection</strong>:<br/>1. Physical barrier — coating excludes O₂ and H₂O<br/>2. Sacrificial protection — if coating is scratched, zinc is more reactive than iron → zinc corrodes first, protecting the iron beneath.<br/><br/>Zn → Zn²⁺ + 2e⁻ (zinc oxidised; iron protected)'
      }
    },
    {
      id: 'call-sacr',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Sacrificial Protection',
        text: 'A block of <strong>magnesium</strong> or <strong>zinc</strong> is attached directly to the iron/steel structure.<br/><br/>Because Mg and Zn are more reactive than Fe, they are preferentially oxidised (they "sacrifice" themselves):<br/>Mg → Mg²⁺ + 2e⁻<br/><br/>These electrons flow into the iron, keeping iron as the cathode — it cannot be oxidised.<br/><br/>Used on:<br/>• Ship hulls (Mg/Zn blocks bolted on)<br/>• Underground pipelines (attached anode rods)<br/>• Oil rigs<br/><br/>The sacrificial block must be periodically replaced as it corrodes away.'
      }
    },
    {
      id: 'svg-sacrificial',
      type: 'svg',
      data: {
        caption: 'Sacrificial protection of a steel ship hull using blocks of a more reactive metal (zinc or magnesium).',
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Water -->
  <path d="M 0 100 Q 125 110, 250 100 T 500 100 L 500 240 L 0 240 Z" fill="#1250a0" opacity="0.3" />
  <text x="450" y="210" font-family="var(--font-sans)" font-size="12" fill="#3b82f6" font-style="italic">Seawater</text>

  <!-- Ship Hull -->
  <path d="M 50 20 L 50 160 C 50 190, 80 220, 150 220 L 400 220 C 470 220, 480 160, 480 80 L 480 20 Z" fill="#94a3b8" stroke="#475569" stroke-width="4"/>
  <text x="265" y="60" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Steel Ship Hull (Iron)</text>

  <!-- Sacrificial Blocks -->
  <rect x="120" y="160" width="30" height="15" fill="#532407" stroke="#ca8a04" stroke-width="2" rx="2" />
  <rect x="235" y="180" width="30" height="15" fill="#532407" stroke="#ca8a04" stroke-width="2" rx="2" />
  <rect x="350" y="160" width="30" height="15" fill="#532407" stroke="#ca8a04" stroke-width="2" rx="2" />
  
  <!-- Labels -->
  <path d="M 250 180 L 250 125 L 300 125" fill="none" stroke="var(--color-text)" stroke-width="1.5" />
  <text x="305" y="129" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)">Zinc or Magnesium block</text>

  <rect x="160" y="25" width="220" height="40" fill="rgba(255,255,255,0.8)" rx="4" />
  <text x="270" y="40" font-family="var(--font-sans)" font-size="12" fill="#ef4444" text-anchor="middle">More reactive metal oxidises first:</text>
  <text x="270" y="55" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">Mg → Mg²⁺ + 2e⁻</text>
  
  <text x="145" y="200" font-family="var(--font-sans)" font-size="10" fill="#ca8a04">e⁻</text>
  <text x="260" y="215" font-family="var(--font-sans)" font-size="10" fill="#ca8a04">e⁻</text>
  <text x="340" y="200" font-family="var(--font-sans)" font-size="10" fill="#ca8a04">e⁻</text>
  
  <path d="M 135 155 L 140 145" stroke="#ca8a04" stroke-width="1.5" marker-end="url(#arrow-head)" />
  <path d="M 250 175 L 255 165" stroke="#ca8a04" stroke-width="1.5" marker-end="url(#arrow-head)" />
  <path d="M 365 155 L 360 145" stroke="#ca8a04" stroke-width="1.5" marker-end="url(#arrow-head)" />

  <defs>
    <marker id="arrow-head" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ca8a04"/>
    </marker>
  </defs>

</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rust prevention: physical barriers (paint, oil, electroplating) exclude O₂/H₂O. Galvanising (Zn coat) protects as both barrier and sacrificial metal. Sacrificial protection uses a more reactive metal (Mg, Zn) attached to iron — it corrodes instead. Stainless steel is self-protecting via Cr₂O₃ layer.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Galvanising (Zn coat) = barrier + sacrificial. Sacrificial protection: more reactive metal corrodes instead of iron. Tin-plating only a barrier — scratched tin makes iron rust faster.',
    cues: [
      { id: 'cue-1', blockId: 'call-galv', prompt: 'Why is galvanising a better protection than tin-plating, even if both coatings are scratched?', answer: 'Zinc is more reactive than iron, so if the zinc coating is scratched, zinc corrodes preferentially (sacrificial protection), protecting the iron. But tin is less reactive than iron, so scratched tin-plating causes the exposed iron to rust faster.' },
      { id: 'cue-2', blockId: 'call-sacr', prompt: 'Describe how sacrificial protection works.', answer: 'A block of more reactive metal (Mg or Zn) is attached to the iron. Because it is more reactive, it oxidises preferentially (M → M²⁺ + 2e⁻), keeping the iron as the cathode and preventing it from corroding.' },
      { id: 'cue-3', blockId: 'tbl-methods', prompt: 'Give two methods that prevent rusting by forming a physical barrier.', answer: 'Any two of: painting, oiling/greasing, electroplating, or galvanising — all form a barrier that excludes water and oxygen.' }
    ]
  },
  evidence: [],
  mentions: []
};
