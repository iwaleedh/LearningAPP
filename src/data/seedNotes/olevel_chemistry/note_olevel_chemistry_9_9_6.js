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
