export const note_olevel_chemistry_12_12_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-1-2-solutions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define solute, solvent and solution; calculate and use concentration in g/dm³ and mol/dm³; perform dilution calculations.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Solutions — Key Terms', level: 2 }
    },
    {
      id: 'call-terms',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Solute, Solvent and Solution',
        text: '<strong>Solute:</strong> substance that dissolves (could be solid, liquid, or gas)<br/><strong>Solvent:</strong> liquid that does the dissolving (often water)<br/><strong>Solution:</strong> homogeneous mixture of solute dissolved in solvent<br/><strong>Aqueous solution:</strong> solvent is water; state symbol (aq)<br/><br/><strong>Saturated solution:</strong> no more solute can dissolve at that temperature'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Concentration', level: 2 }
    },
    {
      id: 'call-conc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Concentration Formulae',
        text: '<strong>Concentration in g/dm³:</strong><br/>concentration (g/dm³) = mass of solute (g) ÷ volume of solution (dm³)<br/><br/><strong>Concentration in mol/dm³:</strong><br/>concentration (mol/dm³) = moles of solute (mol) ÷ volume of solution (dm³)<br/><br/><strong>Converting between units:</strong><br/>concentration (g/dm³) = concentration (mol/dm³) × molar mass (g/mol)<br/><br/><strong>Useful rearrangement:</strong><br/>n = c × V (moles = concentration × volume in dm³)<br/>Remember: volume in cm³ ÷ 1000 = volume in dm³'
      }
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Calculate concentration',
        text: 'A solution contains 5.85 g of sodium chloride (NaCl) dissolved in 250 cm³ of solution.<br/>Calculate: (a) concentration in g/dm³; (b) concentration in mol/dm³ (M<sub>r</sub>(NaCl) = 58.5)<br/><br/>(a) Volume = 250 cm³ = 0.250 dm³<br/>    Concentration = 5.85 ÷ 0.250 = <strong>23.4 g/dm³</strong><br/><br/>(b) Moles of NaCl = 5.85 ÷ 58.5 = 0.100 mol<br/>    Concentration = 0.100 ÷ 0.250 = <strong>0.400 mol/dm³</strong>'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Dilution', level: 2 }
    },
    {
      id: 'call-dilution',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Dilution Principle',
        text: 'When a solution is diluted, the <strong>number of moles of solute stays the same</strong> — only the volume increases.<br/><br/><strong>Dilution equation:</strong> C₁V₁ = C₂V₂<br/>where C₁ and C₂ are concentrations and V₁ and V₂ are volumes (same units).<br/><br/>Dilution factor = V₂ ÷ V₁ (how many times more dilute)<br/><br/><strong>Common procedure:</strong> take a measured volume (V₁) and make up to a larger volume (V₂) in a volumetric flask; the concentration decreases proportionally.'
      }
    },
    {
      id: 'call-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Dilution calculation',
        text: '25.0 cm³ of 2.00 mol/dm³ HCl is diluted to 500 cm³. Find the new concentration.<br/><br/>C₁V₁ = C₂V₂<br/>2.00 × 25.0 = C₂ × 500<br/>C₂ = 50.0 ÷ 500 = <strong>0.100 mol/dm³</strong>'
      }
    },
    {
      id: 'svg-dilution',
      type: 'svg',
      data: {
        caption: 'Dilution Process: Number of moles remains constant while volume increases.',
        svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Beaker 1 -->
  <path d="M 60 40 L 60 140 Q 60 150, 70 150 L 130 150 Q 140 150, 140 140 L 140 40" fill="none" stroke="var(--color-text)" stroke-width="3"/>
  <path d="M 62 100 L 138 100 L 138 140 Q 138 148, 130 148 L 70 148 Q 62 148, 62 140 Z" fill="#93c5fd" opacity="0.6"/>
  
  <text x="100" y="170" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Concentrated</text>
  <text x="100" y="185" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">C₁, V₁</text>

  <!-- Moles as dots -->
  <circle cx="80" cy="115" r="4" fill="#1d4ed8" />
  <circle cx="100" cy="120" r="4" fill="#1d4ed8" />
  <circle cx="120" cy="110" r="4" fill="#1d4ed8" />
  <circle cx="75" cy="135" r="4" fill="#1d4ed8" />
  <circle cx="105" cy="135" r="4" fill="#1d4ed8" />
  <circle cx="125" cy="140" r="4" fill="#1d4ed8" />
  
  <text x="100" y="80" font-family="var(--font-sans)" font-size="14" fill="#1d4ed8" text-anchor="middle">6 moles</text>


  <!-- Plus Water -->
  <path d="M 170 100 L 250 100" fill="none" stroke="#3b82f6" stroke-width="4" marker-end="url(#arrow-blue)"/>
  <text x="210" y="90" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">+ pure water</text>

  <!-- Volumetric Flask / Beaker 2 -->
  <path d="M 330 40 L 330 140 Q 330 150, 340 150 L 460 150 Q 470 150, 470 140 L 470 40" fill="none" stroke="var(--color-text)" stroke-width="3"/>
  <path d="M 332 60 L 468 60 L 468 140 Q 468 148, 460 148 L 340 148 Q 332 148, 332 140 Z" fill="#93c5fd" opacity="0.3"/>

  <text x="400" y="170" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Diluted</text>
  <text x="400" y="185" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">C₂, V₂</text>

  <!-- Moles as dots (spread out) -->
  <circle cx="350" cy="115" r="4" fill="#1d4ed8" />
  <circle cx="400" cy="120" r="4" fill="#1d4ed8" />
  <circle cx="450" cy="110" r="4" fill="#1d4ed8" />
  <circle cx="360" cy="75" r="4" fill="#1d4ed8" />
  <circle cx="420" cy="85" r="4" fill="#1d4ed8" />
  <circle cx="440" cy="140" r="4" fill="#1d4ed8" />

  <text x="400" y="40" font-family="var(--font-sans)" font-size="14" fill="#1d4ed8" text-anchor="middle">Still 6 moles</text>
  <text x="400" y="55" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">(larger volume → lower conc.)</text>

  <defs>
    <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#3b82f6"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Solution = solute dissolved in solvent. Concentration = moles ÷ volume(dm³) [mol/dm³] or mass ÷ volume(dm³) [g/dm³]. n = cV. Dilution: C₁V₁ = C₂V₂ — moles unchanged, volume increases.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Concentration (mol/dm³) = n ÷ V. n = cV. Dilution: C₁V₁ = C₂V₂. Volume must be in dm³ (÷1000 from cm³).',
    cues: [
      { id: 'cue-1', blockId: 'call-conc', prompt: 'State the formula linking moles, concentration, and volume.', answer: 'n = c × V, where n is moles (mol), c is concentration (mol/dm³), and V is volume (dm³).' },
      { id: 'cue-2', blockId: 'call-we1', prompt: 'How do you convert concentration from mol/dm³ to g/dm³?', answer: 'Multiply the concentration in mol/dm³ by the molar mass (g/mol) of the solute: concentration (g/dm³) = concentration (mol/dm³) × Mᵣ.' },
      { id: 'cue-3', blockId: 'call-dilution', prompt: 'What remains constant when a solution is diluted, and what formula expresses this?', answer: 'The number of moles of solute remains constant. This gives the dilution equation C₁V₁ = C₂V₂.' }
    ]
  },
  evidence: [],
  mentions: []
};
