export const note_olevel_chemistry_6_6_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-4-explaining-rates-using-collision-theory.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use collision theory to explain how concentration, temperature, surface area, and catalysts change the rate of reaction.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Explaining Rate Factors Using Collision Theory', level: 2 }
    },
    {
      id: 'call-conc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Concentration (solutions) / Pressure (gases)',
        text: '<strong>Increasing concentration</strong> (or pressure for gases) <strong>increases the rate</strong>.<br/><br/>Explanation: More particles per unit volume → particles are closer together → <strong>more frequent collisions</strong> per unit time → more successful collisions → faster rate.<br/><br/>The energies of the particles are unchanged — only collision frequency increases.'
      }
    },
    {
      id: 'call-temp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Temperature',
        text: '<strong>Increasing temperature increases the rate.</strong><br/><br/>Explanation (two effects):<br/>1. Particles move faster → <strong>more frequent collisions</strong><br/>2. Particles have more kinetic energy → <strong>greater proportion of particles have energy ≥ Eₐ</strong> → more successful collisions<br/><br/>Effect 2 is the more important/dominant effect. A 10 °C rise roughly doubles the rate for many reactions.'
      }
    },
    {
      id: 'call-sa',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Surface Area (Solid Reactants)',
        text: '<strong>Increasing surface area increases the rate.</strong><br/><br/>How: Break solid into smaller pieces (e.g. powder vs lumps).<br/><br/>Explanation: More surface exposed → more reactant particles available for collision at the surface → <strong>more frequent collisions</strong> between reactant particles → faster rate.<br/><br/>Example: Marble chips (CaCO₃) + HCl: powder reacts much faster than large lumps.'
      }
    },
    {
      id: 'call-catalyst',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Catalyst',
        text: '<strong>A catalyst increases the rate without being used up.</strong><br/><br/>Explanation: Provides an alternative reaction pathway with a <strong>lower activation energy (Eₐ)</strong> → larger fraction of particles have energy ≥ Eₐ → more successful collisions → faster rate.<br/><br/>On the Maxwell–Boltzmann curve: Eₐ line moves left; same curve but larger shaded area under it.<br/><br/>The enthalpy change (ΔH) is NOT affected by a catalyst.'
      }
    },
    {
      id: 'svg-maxwell-boltzmann',
      type: 'svg',
      data: {
        caption: 'Maxwell-Boltzmann distribution curve showing the effect of a catalyst. The activation energy lowers (shifts left), dramatically increasing the number of particles with enough energy to react (shaded area).',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250">
    <defs>
        <style>
            .axis { stroke: var(--color-text); stroke-width: 2; fill: none; }
            .curve { stroke: var(--color-primary); stroke-width: 3; fill: none; }
            .ea-line { stroke: var(--color-text); stroke-width: 2; stroke-dasharray: 5,5; }
            .ea-line-cat { stroke: var(--color-success); stroke-width: 2; stroke-dasharray: 5,5; }
            .fill-original { fill: rgba(99, 102, 241, 0.5); }
            .fill-catalyst { fill: rgba(16, 185, 129, 0.3); }
            .text { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .text-sm { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text); }
        </style>
    </defs>
    
    <g transform="translate(60, 20)">
        <!-- Axes -->
        <line x1="0" y1="180" x2="400" y2="180" class="axis"/>
        <line x1="0" y1="0" x2="0" y2="180" class="axis"/>
        
        <text x="200" y="215" class="text" text-anchor="middle">Energy</text>
        <text x="-90" y="-30" class="text" transform="rotate(-90)" text-anchor="middle">Number of particles</text>
        
        <!-- Areas under curve (drawn before curve) -->
        <path d="M 280 180 L 280 43 C 320 28, 360 15, 390 5 L 390 180 Z" class="fill-original"/>
        <path d="M 220 180 L 220 81 C 250 58, 280 43, 300 34 L 300 180 Z" class="fill-catalyst"/>
        
        <!-- Curve -->
        <!-- Starts at 0,0, rises to peak, tails off -->
        <!-- M 0 180 C 30 180, 50 20, 100 20 C 150 20, 220 180, 400 180 roughly-->
        <path d="M 0 180 C 30 180, 40 20, 90 20 C 150 20, 200 100, 400 5" class="curve"/>
        
        <!-- Uncatalyzed Ea -->
        <line x1="280" y1="180" x2="280" y2="43" class="ea-line"/>
        <text x="280" y="195" class="text-sm" text-anchor="middle">Eₐ</text>
        
        <!-- Catalyzed Ea -->
        <line x1="220" y1="180" x2="220" y2="81" class="ea-line-cat"/>
        <text x="220" y="195" class="text-sm" text-anchor="middle">Eₐ (cat)</text>
        
        <!-- Labels -->
        <circle cx="280" cy="110" r="3" fill="var(--color-primary)"/>
        <text x="290" y="115" class="text-sm">Particles able to react</text>
        
        <circle cx="230" cy="140" r="3" fill="var(--color-success)"/>
        <text x="240" y="145" class="text-sm">Extra particles able to react</text>
    </g>
</svg>`
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Marble Chips in HCl',
        text: 'CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)<br/><br/>If you increase HCl concentration from 1 mol/dm³ to 2 mol/dm³:<br/>• More H⁺ ions per unit volume<br/>• More frequent collisions with CaCO₃ surface<br/>• CO₂ produced faster<br/><br/>If you use CaCO₃ powder instead of lumps:<br/>• Greater surface area exposed<br/>• More frequent collisions<br/>• CO₂ produced faster (but total amount produced is the SAME)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Concentration/pressure and surface area increase collision frequency. Temperature increases both frequency and the proportion with energy ≥ Eₐ. Catalysts lower Eₐ so more particles succeed — without being consumed. All speed up rate; none change the total amount of product.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Conc/pressure/SA affect collision frequency. Temperature affects frequency + proportion ≥ Eₐ. Catalyst lowers Eₐ.',
    cues: [
      { id: 'cue-1', blockId: 'call-temp', prompt: 'Give two collision-theory reasons why heating speeds up a reaction.', answer: '(1) More frequent collisions because particles move faster; (2) more particles have energy ≥ activation energy, so a higher proportion of collisions are successful.' },
      { id: 'cue-2', blockId: 'call-sa', prompt: 'Why does crushing a solid into powder speed up a reaction?', answer: 'It increases the surface area, exposing more reactant particles at the surface and allowing more frequent collisions with the other reactant.' },
      { id: 'cue-3', blockId: 'call-catalyst', prompt: 'What happens to the Maxwell–Boltzmann curve when a catalyst is added?', answer: 'The curve itself does not change. The activation energy line (Eₐ) shifts to the left (lower value), so the shaded area — representing particles with enough energy to react — becomes larger.' }
    ]
  },
  evidence: [],
  mentions: []
};
