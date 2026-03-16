export const note_olevel_chemistry_7_7_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-2-4-hydrated-and-anhydrous-salts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between hydrated and anhydrous salts, and describe water of crystallisation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Water of Crystallisation', level: 2 }
    },
    {
      id: 'call-definitions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hydrated vs Anhydrous',
        text: 'Some salts crystallise with a fixed number of water molecules incorporated into their crystal lattice. These are called <strong>water of crystallisation</strong>.<br/><br/><strong>Hydrated salt</strong>: contains water of crystallisation, shown as ·nH₂O in the formula.<br/><strong>Anhydrous salt</strong>: has had the water of crystallisation removed.<br/><br/>Examples:<br/>• CuSO₄·5H₂O = <strong>hydrated</strong> copper(II) sulfate (blue crystals)<br/>• CuSO₄ = <strong>anhydrous</strong> copper(II) sulfate (white powder)<br/>• Na₂CO₃·10H₂O = hydrated sodium carbonate (washing soda)<br/>• CaCl₂·6H₂O = hydrated calcium chloride'
      }
    },
    {
      id: 'call-reversible',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reversible Nature',
        text: 'CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(g)<br/><br/>• Heating drives the forward reaction → removes water → blue turns white<br/>• Adding water to anhydrous salt drives reverse → white turns blue<br/><br/>Uses:<br/>• Anhydrous CuSO₄ and CoCl₂ are used as <strong>drying agents</strong> and to detect water.<br/>• CuSO₄: white → blue indicates water present.<br/>• Anhydrous cobalt chloride paper: blue → pink in presence of water (moisture test).'
      }
    },
    {
      id: 'svg-heating-hydrated',
      type: 'svg',
      data: {
        caption: 'Heating hydrated copper(II) sulfate removes water of crystallisation, turning blue crystals into white powder.',
        svg: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Before Heating (Blue Crystals) -->
  <text x="120" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Hydrated CuSO₄·5H₂O</text>
  
  <path d="M 80 150 L 160 150 L 150 170 L 90 170 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
  <path d="M 80 150 C 120 160 160 150 160 150" fill="none" stroke="#64748b" stroke-width="1"/>
  
  <polygon points="100,140 110,145 105,155 95,150" fill="#3b82f6"/>
  <polygon points="120,135 135,135 130,150 115,145" fill="#2563eb"/>
  <polygon points="140,140 150,145 145,155 135,150" fill="#60a5fa"/>
  <polygon points="110,145 125,148 120,158 105,155" fill="#1d4ed8"/>
  <text x="120" y="195" font-family="var(--font-sans)" font-size="12" fill="#2563eb" text-anchor="middle">Blue crystals</text>

  <!-- Heat Arrow -->
  <path d="M 190 140 L 260 140" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-head-red)" />
  <text x="225" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">HEAT</text>
  <path d="M 260 160 L 190 160" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-head-blue)" />
  <text x="225" y="180" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#3b82f6" text-anchor="middle">+ H₂O</text>

  <!-- After Heating (White Powder) -->
  <text x="380" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Anhydrous CuSO₄</text>

  <path d="M 340 150 L 420 150 L 410 170 L 350 170 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
  <path d="M 340 150 C 380 160 420 150 420 150" fill="none" stroke="#64748b" stroke-width="1"/>

  <path d="M 350 150 Q 380 135 410 150 L 410 153 Q 380 140 350 153 Z" fill="#f8fafc"/>
  <circle cx="360" cy="148" r="1.5" fill="#e2e8f0"/>
  <circle cx="380" cy="142" r="1" fill="#e2e8f0"/>
  <circle cx="400" cy="147" r="1.5" fill="#e2e8f0"/>
  <text x="380" y="195" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">White powder</text>

  <!-- Water vapor -->
  <path d="M 360 120 Q 370 100 365 80" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
  <path d="M 390 125 Q 400 90 390 60" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="380" y="60" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">H₂O(g) escapes</text>

  <defs>
    <marker id="arrow-head-red" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ef4444"/>
    </marker>
    <marker id="arrow-head-blue" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#3b82f6"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculating Water of Crystallisation',
        text: '4.90 g of hydrated copper(II) sulfate is heated until mass is constant at 3.13 g.<br/><br/>Mass of water lost = 4.90 − 3.13 = 1.77 g<br/>Moles of H₂O = 1.77 ÷ 18 = 0.098 mol<br/>Moles of CuSO₄ = 3.13 ÷ 160 = 0.0196 mol<br/>Ratio H₂O : CuSO₄ = 0.098 : 0.0196 = 5 : 1<br/><br/>→ Formula: CuSO₄·5H₂O ✓'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Hydrated salts contain water of crystallisation (·nH₂O). Heating removes it → anhydrous form. Example: CuSO₄·5H₂O (blue) ⇌ CuSO₄ (white) + 5H₂O. Anhydrous cobalt chloride (blue) turns pink with water — used as a water test.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Hydrated = has water of crystallisation. Anhydrous = no water of crystallisation. CuSO₄·5H₂O: heating → white anhydrous; add water → blue again. CoCl₂ blue→pink = water present.',
    cues: [
      { id: 'cue-1', blockId: 'call-definitions', prompt: 'What is meant by "water of crystallisation"?', answer: 'Water molecules that are incorporated into the crystal structure of a hydrated salt in a fixed, definite ratio, shown as ·nH₂O in the formula.' },
      { id: 'cue-2', blockId: 'call-reversible', prompt: 'Describe the colour change when hydrated copper(II) sulfate is heated, and explain what causes it.', answer: 'The blue crystals (CuSO₄·5H₂O) turn white as the water of crystallisation is driven off, leaving anhydrous CuSO₄.' },
      { id: 'cue-3', blockId: 'call-reversible', prompt: 'How is anhydrous cobalt chloride used as a test for water?', answer: 'Anhydrous cobalt chloride paper (or cobalt(II) chloride) is blue. In the presence of water, it turns pink. This colour change indicates water is present.' }
    ]
  },
  evidence: [],
  mentions: []
};
