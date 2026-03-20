export const note_olevel_chemistry_9_9_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-1-3-alloys.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define an alloy, explain why alloys are harder than pure metals, and describe common alloys and their uses.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Alloys', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is an Alloy?',
        text: 'An <strong>alloy</strong> is a mixture of a metal with one or more other elements (metals or non-metals).<br/><br/>Purpose: to improve the properties of the base metal — usually to make it <strong>harder, stronger, or more corrosion-resistant</strong>.<br/><br/>Why alloys are harder than pure metals:<br/>The added atoms have a different size from the host metal atoms. This <strong>distorts the regular lattice</strong>, preventing layers of ions from sliding over each other → the alloy is harder and less malleable.'
      }
    },
    {
      id: 'svg-alloy-structure',
      type: 'svg',
      data: {
        caption: 'Pure metals have a regular lattice allowing layers to slide. In alloys, different-sized atoms disrupt the lattice, preventing sliding and making the metal harder.',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Pure Metal -->
  <text x="150" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Pure Metal</text>
  
  <!-- Row 1 (sliding) -->
  <circle cx="100" cy="70" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="140" cy="70" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="180" cy="70" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="220" cy="70" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  
  <path d="M 60 70 L 80 70" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-head-red)"/>

  <!-- Row 2 -->
  <circle cx="80" cy="110" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="120" cy="110" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="160" cy="110" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="200" cy="110" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>

  <!-- Row 3 -->
  <circle cx="100" cy="150" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="140" cy="150" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="180" cy="150" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="220" cy="150" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>

  <text x="150" y="195" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Regular lattice</text>
  <text x="150" y="215" font-family="var(--font-sans)" font-size="12" fill="#ef4444" font-weight="bold" text-anchor="middle">Layers slide easily (soft)</text>

  <!-- Alloy -->
  <text x="450" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Alloy (e.g., Steel)</text>

  <!-- Row 1 -->
  <circle cx="380" cy="70" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="420" cy="70" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <!-- Different sized atom -->
  <circle cx="460" cy="72" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <circle cx="505" cy="70" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>

  <!-- Row 2 -->
  <circle cx="370" cy="115" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="410" cy="115" r="22" fill="#44370a" stroke="#d97706" stroke-width="2"/>
  <circle cx="460" cy="120" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="500" cy="110" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>

  <!-- Row 3 -->
  <circle cx="390" cy="155" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="430" cy="160" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>
  <circle cx="475" cy="165" r="22" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <circle cx="520" cy="155" r="16" fill="#1250a0" stroke="#2563eb" stroke-width="2"/>

  <path d="M 330 90 L 350 90" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-head-red)"/>
  <line x1="365" y1="80" x2="365" y2="100" stroke="#ef4444" stroke-width="3"/>
  
  <text x="450" y="205" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Disrupted lattice</text>
  <text x="450" y="225" font-family="var(--font-sans)" font-size="12" fill="#ef4444" font-weight="bold" text-anchor="middle">Layers CANNOT slide (hard)</text>

  <defs>
    <marker id="arrow-head-red" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ef4444"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'tbl-alloys',
      type: 'comparisonTable',
      data: {
        caption: 'Common alloys and their uses',
        headers: ['Alloy', 'Composition', 'Properties improved', 'Uses'],
        rows: [
          ['Steel', 'Iron + carbon (~0.1–1.5%)', 'Harder, stronger than pure iron', 'Structures, vehicles, tools'],
          ['Stainless steel', 'Iron + carbon + chromium (~18%) + nickel', 'Hard + corrosion-resistant', 'Cutlery, medical instruments, kitchen equipment'],
          ['Brass', 'Copper (~70%) + zinc (~30%)', 'Harder than Cu, good conductivity, attractive colour', 'Musical instruments, taps, door fittings'],
          ['Bronze', 'Copper (~90%) + tin (~10%)', 'Harder than Cu, corrosion-resistant', 'Statues, medals, bearings, bells'],
          ['Duralumin', 'Aluminium + copper (~4%) + Mg, Mn', 'Much stronger than Al, still lightweight', 'Aircraft frames'],
          ['Solder', 'Lead + tin (~50:50)', 'Low melting point', 'Joining electronic components']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For any alloy question:<br/>1. State what the alloy is made of<br/>2. Explain that the different-sized atoms disrupt the regular lattice<br/>3. This prevents layers from sliding → harder/stronger<br/><br/>Never say "alloys have stronger bonds" — the explanation is about disrupted layers.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alloy = mixture of metal with other elements. Harder because different-sized atoms distort the regular lattice, preventing sliding. Key alloys: steel (Fe+C), brass (Cu+Zn), bronze (Cu+Sn), stainless steel (Fe+Cr+C), duralumin (Al+Cu).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Alloy = metal mixture. Harder because different atom sizes distort lattice → layers can\'t slide. Steel (Fe+C), brass (Cu+Zn), bronze (Cu+Sn), stainless steel (Fe+Cr).',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Explain why alloys are generally harder than the pure metals they contain.', answer: 'Alloys contain atoms of different sizes. These distort the regular arrangement of metal ions in the lattice, preventing the layers from sliding over each other, making the alloy harder.' },
      { id: 'cue-2', blockId: 'tbl-alloys', prompt: 'State the composition of brass and one use for it.', answer: 'Brass is an alloy of copper (~70%) and zinc (~30%). Uses include musical instruments, door fittings, and taps.' },
      { id: 'cue-3', blockId: 'tbl-alloys', prompt: 'Why is stainless steel preferred over regular steel for cutlery?', answer: 'Stainless steel contains chromium, which forms a thin layer of chromium oxide on the surface, preventing further corrosion. This makes it rust-resistant, unlike regular steel.' }
    ]
  },
  evidence: [],
  mentions: []
};
