export const note_olevel_chemistry_9_9_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-1-2-uses-of-metals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Relate the uses of metals to their properties.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Uses of Metals Related to Properties', level: 2 }
    },
    {
      id: 'tbl-uses',
      type: 'comparisonTable',
      data: {
        caption: 'Uses of metals linked to their properties',
        headers: ['Metal', 'Key Properties', 'Main Uses'],
        rows: [
          ['Aluminium (Al)', 'Low density, corrosion-resistant (forms protective Al₂O₃ layer), good conductor', 'Aircraft bodies, food cans, overhead power cables, cooking foil'],
          ['Iron / Steel', 'Strong, hard, magnetic, high melting point', 'Building/structural construction, vehicles, machines, tools'],
          ['Copper (Cu)', 'Excellent electrical conductor, malleable, good thermal conductor, corrosion resistant', 'Electrical wiring, water pipes, cooking utensils, printed circuits'],
          ['Gold (Au)', 'Unreactive (does not corrode/tarnish), good conductor, malleable', 'Jewellery, electrical contacts, dental crowns'],
          ['Titanium (Ti)', 'High strength, low density, corrosion resistant, biocompatible', 'Aircraft, spacecraft, surgical implants, sports equipment']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Approach',
        text: 'Always link use → specific property:<br/>• Electrical wiring → copper (best conductor after silver, but less expensive)<br/>• Aircraft → aluminium (low density = lighter aircraft; fuel savings)<br/>• Coins → copper/zinc/nickel alloys (hard, resistant to wear, malleable)<br/>• Pipes → copper (corrosion-resistant, malleable)<br/>• Jewellery → gold (unreactive = does not tarnish or irritate skin)<br/><br/>State the <strong>specific</strong> property, not just "because it is a metal".'
      }
    },
    {
      id: 'call-strength',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Steel vs Pure Iron',
        text: 'Pure iron is too soft and malleable for most uses.<br/><strong>Steel</strong> = iron + carbon (small %) — harder and stronger than pure iron because carbon atoms disrupt the regular layers of iron ions, preventing them from sliding.<br/><br/>Stainless steel = iron + carbon + chromium (~18%) → resists corrosion (Cr₂O₃ layer). Used in cutlery, medical instruments.'
      }
    },
    {
      id: 'svg-iron-steel',
      type: 'svg',
      data: {
        caption: 'Pure Iron (regular layers slide) vs Steel (carbon atoms disrupt layers)',
        svg: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <rect width="500" height="250" fill="var(--color-surface)" rx="8"/>
  
  <!-- Pure Iron -->
  <text x="125" y="40" font-family="sans-serif" font-size="18" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Pure Iron (Soft)</text>
  <g transform="translate(65, 70)">
    <!-- Layers of atoms -->
    <circle cx="20" cy="20" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="56" cy="20" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="92" cy="20" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="128" cy="20" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    
    <circle cx="20" cy="56" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="56" cy="56" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="92" cy="56" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="128" cy="56" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>

    <circle cx="20" cy="92" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="56" cy="92" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="92" cy="92" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="128" cy="92" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    
    <!-- Force arrows showing sliding -->
    <path d="M 0 5 L 148 5" stroke="var(--color-error)" stroke-width="3" stroke-dasharray="4" marker-end="url(#arrow-error)"/>
    <text x="74" y="-5" font-family="sans-serif" font-size="12" fill="var(--color-error)" text-anchor="middle">Layers slide easily</text>
  </g>

  <line x1="250" y1="30" x2="250" y2="220" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="4"/>

  <!-- Steel -->
  <text x="375" y="40" font-family="sans-serif" font-size="18" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Steel (Hard)</text>
  <g transform="translate(315, 70)">
    <!-- Irregular lattice with smaller carbon atoms -->
    <circle cx="20" cy="20" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="56" cy="20" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="96" cy="18" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="132" cy="22" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    
    <circle cx="22" cy="58" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="62" cy="62" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="98" cy="54" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="134" cy="58" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>

    <circle cx="18" cy="94" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="54" cy="98" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="94" cy="94" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>
    <circle cx="130" cy="94" r="16" fill="var(--color-primary-50)" stroke="var(--color-primary)" stroke-width="2"/>

    <!-- Carbon atoms -->
    <circle cx="78" cy="38" r="6" fill="var(--color-accent)" stroke="var(--color-text)" stroke-width="1"/>
    <circle cx="40" cy="78" r="6" fill="var(--color-accent)" stroke="var(--color-text)" stroke-width="1"/>
    <circle cx="118" cy="74" r="6" fill="var(--color-accent)" stroke="var(--color-text)" stroke-width="1"/>
    
    <path d="M 0 5 L 148 5" stroke="var(--color-success)" stroke-width="3" stroke-dasharray="4" marker-end="url(#arrow-success)"/>
    <line x1="74" y1="-5" x2="74" y2="15" stroke="var(--color-success)" stroke-width="4"/>
    <text x="74" y="-10" font-family="sans-serif" font-size="12" fill="var(--color-success)" text-anchor="middle">Layers locked by C atoms</text>
  </g>

  <defs>
    <marker id="arrow-error" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="var(--color-error)"/>
    </marker>
    <marker id="arrow-success" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="var(--color-success)"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Al: light + corrosion-resistant → aircraft, cables. Cu: best electrical conductor → wires, pipes. Au: unreactive → jewellery, contacts. Ti: strong + light + corrosion-resistant → aerospace, implants. Steel: iron + C → stronger than pure iron.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Al (light/corrosion-resist) → aircraft. Cu (conductor) → wires. Au (unreactive) → jewellery. Ti (strong+light) → aerospace/implants.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-uses', prompt: 'Give two reasons why aluminium is used to make aircraft bodies.', answer: 'It has a low density (making aircraft lighter) and is corrosion-resistant (it forms a protective oxide layer).' },
      { id: 'cue-2', blockId: 'tbl-uses', prompt: 'Why is copper used for electrical wiring?', answer: 'Copper is an excellent electrical conductor and is malleable (can be drawn into thin wires easily).' },
      { id: 'cue-3', blockId: 'call-strength', prompt: 'Why is steel harder and stronger than pure iron?', answer: 'Steel contains carbon atoms that disrupt the regular lattice of iron ions, preventing the layers from sliding over each other. This makes it harder and less malleable.' }
    ]
  },
  evidence: [],
  mentions: []
};
