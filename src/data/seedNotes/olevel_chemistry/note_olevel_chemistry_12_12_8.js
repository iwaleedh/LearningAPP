export const note_olevel_chemistry_12_12_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-3-3-identification-of-gases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the tests used to identify hydrogen, oxygen, carbon dioxide, chlorine, ammonia, sulfur dioxide and hydrogen chloride gases, and state the observations.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Gas Tests Summary Table', level: 2 }
    },
    {
      id: 'tbl-gases',
      type: 'comparisonTable',
      data: {
        caption: 'Chemical tests to identify gases',
        headers: ['Gas', 'Test', 'Positive result'],
        rows: [
          ['Hydrogen (H₂)', 'Hold lighted splint to mouth of test tube', 'Squeaky pop (gas ignites rapidly)'],
          ['Oxygen (O₂)', 'Insert a glowing splint into tube of gas', 'Splint relights'],
          ['Carbon dioxide (CO₂)', 'Bubble gas through limewater (Ca(OH)₂ solution)', 'Limewater turns milky/cloudy (white precipitate of CaCO₃)'],
          ['Chlorine (Cl₂)', 'Hold damp litmus paper in/near gas', 'Paper first turns red (acidic) then bleaches to white'],
          ['Ammonia (NH₃)', 'Hold damp red litmus paper near gas; introduce concentrated HCl', 'Litmus turns blue; dense white fumes of NH₄Cl form with HCl'],
          ['Sulfur dioxide (SO₂)', 'Place moist potassium dichromate paper; or bubble through acidified KMnO₄', 'Dichromate paper changes from orange → green; acidified KMnO₄ is decolourised'],
          ['Hydrogen chloride (HCl)', 'Hold open bottle of ammonia near gas', 'Dense white fumes (NH₄Cl) form']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Equations for Gas Tests', level: 2 }
    },
    {
      id: 'call-eqns',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Equations',
        text: '<strong>CO₂ with limewater:</strong><br/>CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O<br/><br/><strong>NH₃ with HCl (white fumes):</strong><br/>NH₃(g) + HCl(g) → NH₄Cl(s)<br/><br/><strong>Cl₂ bleaching:</strong><br/>Cl₂ + H₂O → HCl + HOCl; HOCl oxidises dye → colourless<br/>(or: wet Cl₂ + litmus → bleached white)<br/><br/><strong>H₂ burning:</strong><br/>2H₂ + O₂ → 2H₂O'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Additional Notes on Key Tests', level: 2 }
    },
    {
      id: 'call-notes',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Important Distinctions',
        text: '<strong>Cl₂ vs SO₂:</strong> Both are acidic and both bleach litmus, but Cl₂ bleaches litmus paper permanently white while SO₂ only turns litmus red (acid) and does not bleach. Use potassium dichromate paper to distinguish — only SO₂ turns it green.<br/><br/><strong>NH₃ vs HCl white fumes:</strong> Both produce white fumes of NH₄Cl when mixed — to identify which is present, test with damp litmus: NH₃ turns red litmus blue; HCl turns blue litmus red.<br/><br/><strong>CO₂ vs SO₂ in limewater:</strong> Both turn limewater milky. SO₂ can be distinguished by potassium dichromate test (turns orange → green with SO₂ but not CO₂).<br/><br/><strong>Pure H₂ vs impure H₂:</strong> Pure H₂ gives a quiet pop. Impure H₂ + air mixture gives a loud bang (potentially explosive mixture).'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'How to Collect and Test a Gas', level: 2 }
    },
    {
      id: 'list-collect',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Upward delivery:</strong> for dense gases (heavier than air): Cl₂, CO₂, HCl, SO₂ — collect in inverted tube; test tube filled, stopper removed for testing' },
          { text: '<strong>Downward delivery:</strong> for gases lighter than air: H₂, NH₃' },
          { text: '<strong>Over water:</strong> for gases insoluble in water (H₂, O₂) — displacement of water' },
          { text: '<strong>Gas syringe:</strong> most accurate way to collect a measured gas volume' }
        ]
      }
    },
    {
      id: 'svg-gas-collection',
      type: 'svg',
      data: {
        caption: 'Common methods for gas collection',
        svg: `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradients -->
    <linearGradient id="flask-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="var(--color-surface)" />
      <stop offset="90%" stop-color="#e2e8f0" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#94a3b8" stop-opacity="0.5" />
    </linearGradient>
    <linearGradient id="water-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3498db" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#2980b9" stop-opacity="0.8" />
    </linearGradient>
  </defs>

  <!-- Panel 1: Upward Delivery (for dense gases) -->
  <g transform="translate(50, 40)">
    <text x="100" y="-15" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="var(--color-text)">Upward Delivery</text>
    <text x="100" y="5" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">For gases denser than air</text>
    <text x="100" y="20" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">(e.g., CO₂, Cl₂)</text>
    
    <!-- Delivery tube -->
    <path d="M 40,200 L 40,70 Q 40,60 50,60 L 100,60 L 100,160" fill="none" stroke="#7f8c8d" stroke-width="4" stroke-linecap="round" />
    <path d="M 40,200 L 40,70 Q 40,60 50,60 L 100,60 L 100,160" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" />
    
    <!-- Gas tube (upright) -->
    <path d="M 75,60 L 75,180 Q 75,190 100,190 Q 125,190 125,180 L 125,60" fill="url(#flask-grad)" stroke="#2c3e50" stroke-width="2" />
    <ellipse cx="100" cy="60" rx="25" ry="5" fill="none" stroke="#2c3e50" stroke-width="2" />
    
    <!-- Gas particles accumulating at bottom -->
    <g fill="#95a5a6" opacity="0.6">
      <circle cx="90" cy="180" r="3" />
      <circle cx="110" cy="175" r="3" />
      <circle cx="95" cy="165" r="3" />
      <circle cx="105" cy="155" r="3" />
      <circle cx="85" cy="140" r="3" />
      <circle cx="115" cy="145" r="3" />
      <circle cx="100" cy="130" r="3" />
      <circle cx="90" cy="115" r="3" />
      <circle cx="110" cy="105" r="3" />
    </g>
    
    <!-- Air being displaced upwards -->
    <path d="M100,80 L100,40 M90,80 L80,50 M110,80 L120,50" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-linecap="round" stroke-dasharray="4,4" />
    <polygon points="100,30 95,40 105,40" fill="#1e293b" />
    <polygon points="75,40 80,50 85,45" fill="#1e293b" />
    <polygon points="125,40 115,45 120,50" fill="#1e293b" />
    <text x="100" y="25" text-anchor="middle" font-family="var(--font-sans)" font-size="10" fill="#95a5a6" font-style="italic">Air</text>
  </g>

  <!-- Panel 2: Downward Delivery (for light gases) -->
  <g transform="translate(300, 40)">
    <text x="100" y="-15" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="var(--color-text)">Downward Delivery</text>
    <text x="100" y="5" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">For gases lighter than air</text>
    <text x="100" y="20" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">(e.g., H₂, NH₃)</text>
    
    <!-- Delivery tube -->
    <path d="M 40,200 L 40,180 Q 40,170 50,170 L 100,170 L 100,70" fill="none" stroke="#7f8c8d" stroke-width="4" stroke-linecap="round" />
    <path d="M 40,200 L 40,180 Q 40,170 50,170 L 100,170 L 100,70" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" />
    
    <!-- Gas tube (inverted) -->
    <path d="M 75,180 L 75,60 Q 75,50 100,50 Q 125,50 125,60 L 125,180" fill="url(#flask-grad)" stroke="#2c3e50" stroke-width="2" />
    <ellipse cx="100" cy="180" rx="25" ry="5" fill="none" stroke="#2c3e50" stroke-width="2" />
    
    <!-- Gas particles accumulating at top -->
    <g fill="#95a5a6" opacity="0.6">
      <circle cx="90" cy="65" r="3" />
      <circle cx="110" cy="70" r="3" />
      <circle cx="95" cy="80" r="3" />
      <circle cx="105" cy="90" r="3" />
      <circle cx="85" cy="105" r="3" />
      <circle cx="115" cy="100" r="3" />
      <circle cx="100" cy="115" r="3" />
      <circle cx="90" cy="130" r="3" />
      <circle cx="110" cy="140" r="3" />
    </g>
    
    <!-- Air being displaced downwards -->
    <path d="M100,160 L100,200 M90,160 L80,190 M110,160 L120,190" fill="none" stroke="#bdc3c7" stroke-width="2" stroke-linecap="round" stroke-dasharray="4,4" />
    <polygon points="100,210 95,200 105,200" fill="#1e293b" />
    <polygon points="75,200 80,190 85,195" fill="#1e293b" />
    <polygon points="125,200 115,195 120,190" fill="#1e293b" />
    <text x="100" y="220" text-anchor="middle" font-family="var(--font-sans)" font-size="10" fill="#95a5a6" font-style="italic">Air</text>
  </g>

  <!-- Panel 3: Collection over Water -->
  <g transform="translate(550, 40)">
    <text x="100" y="-15" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="var(--color-text)">Over Water</text>
    <text x="100" y="5" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">For insoluble gases</text>
    <text x="100" y="20" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">(e.g., O₂, H₂)</text>
    
    <!-- Trough -->
    <path d="M 20,130 L 20,190 Q 20,200 30,200 L 170,200 Q 180,200 180,190 L 180,130" fill="none" stroke="#2c3e50" stroke-width="2" />
    <!-- Trough Water -->
    <path d="M 22,150 L 178,150 L 178,190 Q 178,198 170,198 L 30,198 Q 22,198 22,190 Z" fill="url(#water-grad)" />
    <!-- Beehive shelf -->
    <path d="M 70,198 L 70,170 L 130,170 L 130,198" fill="none" stroke="#7f8c8d" stroke-width="2" />
    <path d="M 100,170 L 100,178" fill="none" stroke="#7f8c8d" stroke-width="2" />
    
    <!-- Delivery tube -->
    <path d="M 10,200 L 10,185 Q 10,180 20,180 L 100,180 L 100,165" fill="none" stroke="#7f8c8d" stroke-width="4" stroke-linecap="round" />
    <path d="M 10,200 L 10,185 Q 10,180 20,180 L 100,180 L 100,165" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" />
    
    <!-- Inverted Gas Cylinder -->
    <!-- Gas section -->
    <path d="M 75,170 L 75,60 Q 75,50 100,50 Q 125,50 125,60 L 125,170" fill="url(#flask-grad)" stroke="#2c3e50" stroke-width="2" />
    <!-- Water section inside cylinder -->
    <path d="M 76,100 L 124,100 L 124,170 L 76,170 Z" fill="url(#water-grad)" />
    
    <!-- Bubbles -->
    <g fill="#1e293b" opacity="0.8">
      <circle cx="100" cy="160" r="3" />
      <circle cx="95" cy="150" r="4" />
      <circle cx="105" cy="140" r="3" />
      <circle cx="98" cy="130" r="5" />
      <circle cx="102" cy="115" r="4" />
      <circle cx="96" cy="105" r="3" />
    </g>
    
    <!-- Gas label inside -->
    <text x="100" y="80" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#7f8c8d">Gas</text>
  </g>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'H₂: squeaky pop with lit splint. O₂: relights glowing splint. CO₂: turns limewater milky. Cl₂: bleaches damp litmus white. NH₃: turns damp red litmus blue; white fumes with HCl. SO₂: turns moist K₂Cr₂O₇ paper from orange to green. HCl: white fumes with NH₃.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'H₂=squeaky pop. O₂=relights splint. CO₂=limewater milky. Cl₂=bleaches litmus white. NH₃=blue litmus+white HCl fumes. SO₂=K₂Cr₂O₇ orange→green. HCl=white fumes with NH₃.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-gases', prompt: 'How would you test for the presence of oxygen? What is the positive result?', answer: 'Insert a glowing (not burning) splint into the gas. A positive result is the splint relighting.' },
      { id: 'cue-2', blockId: 'tbl-gases', prompt: 'How is chlorine gas identified using damp litmus paper? What happens in two stages?', answer: 'Damp litmus paper turns red first (Cl₂ dissolves in water forming HCl, an acid), then bleaches to white (hypochlorous acid HOCl formed oxidises the dye).' },
      { id: 'cue-3', blockId: 'call-notes', prompt: 'How can you distinguish SO₂ from CO₂ if you cannot use limewater (since both turn it milky)?', answer: 'Use moist potassium dichromate paper — SO₂ changes the paper from orange to green (reduction of Cr₂O₇²⁻ to Cr³⁺). CO₂ does not cause this colour change.' },
      { id: 'cue-4', blockId: 'call-eqns', prompt: 'What observation, and what is the equation for the reaction, when testing for ammonia gas with concentrated hydrochloric acid?', answer: 'Dense white fumes of ammonium chloride (NH₄Cl) are produced. Equation: NH₃(g) + HCl(g) → NH₄Cl(s).' }
    ]
  },
  evidence: [],
  mentions: []
};
