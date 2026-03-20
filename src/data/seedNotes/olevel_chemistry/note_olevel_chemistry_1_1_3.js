export const note_olevel_chemistry_1_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/1 States Of Matter/1-1-4-diffusion.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define diffusion, describe experimental evidence for diffusion, and explain how temperature and molecular mass affect the rate of diffusion.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Diffusion?', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of Diffusion',
        text: '<strong>Diffusion</strong> is the net movement of particles from a region of <strong>higher concentration</strong> to a region of <strong>lower concentration</strong>, down the concentration gradient.<br/><br/>Diffusion occurs because particles are in constant, random motion (kinetic theory). No energy input is required — it is a passive process.<br/><br/>Diffusion occurs in gases and liquids, but not in solids (particles cannot move freely).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Experimental Evidence for Diffusion', level: 2 }
    },
    {
      id: 'call-nh3hcl',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Ammonia and Hydrogen Chloride Experiment',
        text: 'Two open tubes are placed at either end of a long glass tube. One is soaked in concentrated ammonia (NH₃), the other in concentrated hydrochloric acid (HCl).<br/><br/>Both gases diffuse along the tube and meet to form a white ring of <strong>ammonium chloride</strong> (NH₄Cl):<br/>NH₃(g) + HCl(g) → NH₄Cl(s)<br/><br/>The white ring forms <strong>closer to the HCl end</strong> because NH₃ molecules (Mr = 17) are lighter than HCl molecules (Mr = 36.5) and diffuse faster. This demonstrates that <strong>lighter molecules diffuse faster</strong>.'
      }
    },
    {
      id: 'svg-nh3-hcl',
      type: 'svg',
      data: {
        caption: 'Diffusion of ammonia and hydrogen chloride gases in a glass tube',
        svg: `<svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Glass tube gradient -->
    <linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="20%" stop-color="#ffffff" />
      <stop offset="80%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#e2e8f0" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.15"/>
    </filter>
  </defs>

  <g transform="translate(40, 50)">
    <!-- Main glass tube -->
    <rect x="100" y="40" width="520" height="60" rx="3" fill="url(#glass)" stroke="#cbd5e1" stroke-width="2" filter="url(#shadow)" />
    
    <!-- Left Cotton Wool (Ammonia) -->
    <path d="M 105,45 Q 120,40 130,55 Q 140,50 145,65 Q 150,80 135,90 Q 120,95 105,85 Q 95,70 105,45 Z" fill="#1e293b" stroke="#94a3b8" />
    <!-- Label -->
    <text x="80" y="30" text-anchor="middle" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6">Ammonia (NH₃)</text>
    <text x="80" y="115" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Cotton wool</text>
    <text x="80" y="130" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">soaked in conc. NH₃</text>
    <text x="80" y="150" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-style="italic" fill="var(--color-text-secondary)">Mr = 17 (Lighter, faster)</text>

    <!-- Right Cotton Wool (HCl) -->
    <path d="M 615,45 Q 600,40 590,55 Q 580,50 575,65 Q 570,80 585,90 Q 600,95 615,85 Q 625,70 615,45 Z" fill="#1e293b" stroke="#94a3b8" />
    <!-- Label -->
    <text x="640" y="30" text-anchor="middle" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444">Hydrochloric Acid (HCl)</text>
    <text x="640" y="115" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Cotton wool</text>
    <text x="640" y="130" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">soaked in conc. HCl</text>
    <text x="640" y="150" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-style="italic" fill="var(--color-text-secondary)">Mr = 36.5 (Heavier, slower)</text>

    <!-- End stoppers (Bungs) -->
    <rect x="80" y="38" width="20" height="64" rx="2" fill="#64748b" />
    <rect x="70" y="30" width="10" height="80" rx="2" fill="#475569" />
    
    <rect x="620" y="38" width="20" height="64" rx="2" fill="#64748b" />
    <rect x="640" y="30" width="10" height="80" rx="2" fill="#475569" />

    <!-- Diffusion Arrows -->
    <!-- NH3 arrows -->
    <!-- Long blue arrow for NH3 -->
    <path d="M 160,70 L 410,70" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" />
    <!-- Arrowhead -->
    <polygon points="410,70 400,65 400,75" fill="#3b82f6" />
    
    <!-- HCl arrows -->
    <!-- Shorter red arrow for HCl -->
    <path d="M 560,70 L 450,70" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4" />
    <!-- Arrowhead -->
    <polygon points="450,70 460,65 460,75" fill="#ef4444" />

    <!-- White Ring string (NH4Cl) -->
    <ellipse cx="430" cy="70" rx="10" ry="25" fill="#0f172a" stroke="#94a3b8" />
    <g fill="#1e293b">
      <circle cx="430" cy="50" r="4" />
      <circle cx="428" cy="62" r="5" />
      <circle cx="432" cy="75" r="4" />
      <circle cx="429" cy="85" r="5" />
    </g>

    <!-- White Ring Label -->
    <path d="M 430,95 L 430,120 M 430,45 L 430,20" fill="none" stroke="var(--color-text-secondary)" stroke-dasharray="2,2" />
    <text x="430" y="140" text-anchor="middle" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)">White ring of NH₄Cl</text>
    <text x="430" y="10" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-style="italic" fill="var(--color-text-secondary)">(Closer to HCl end)</text>
    
    <!-- Distance markers -->
    <path d="M 130,170 L 130,180 L 430,180 L 430,170" fill="none" stroke="#3b82f6" stroke-width="1.5" />
    <text x="280" y="195" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="#3b82f6">NH₃ travels further</text>

    <path d="M 430,170 L 430,180 L 590,180 L 590,170" fill="none" stroke="#ef4444" stroke-width="1.5" />
    <text x="510" y="195" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="#ef4444">HCl travels less</text>
  </g>
</svg>`
      }
    },
    {
      id: 'call-bromine',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bromine Diffusion in Air',
        text: 'A gas jar of brown bromine vapour is placed beneath a gas jar of air and the cover slip is removed. The brown colour gradually spreads upwards into the air jar as bromine molecules diffuse against gravity, demonstrating that gases diffuse in all directions due to random particle motion.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Factors Affecting Rate of Diffusion', level: 2 }
    },
    {
      id: 'tbl-factors',
      type: 'comparisonTable',
      data: {
        caption: 'Factors that affect the rate of diffusion',
        headers: ['Factor', 'Effect on Rate', 'Explanation'],
        rows: [
          ['Temperature', 'Higher temperature → faster diffusion', 'Particles have more kinetic energy and move faster'],
          ['Molecular mass (Mr)', 'Lower Mr → faster diffusion', 'Lighter molecules move faster at the same temperature'],
          ['Concentration gradient', 'Steeper gradient → faster diffusion', 'More particles moving from high to low concentration per unit time'],
          ['Distance', 'Shorter distance → faster overall', 'Less distance for particles to travel']
        ]
      }
    },
    {
      id: 'call-graham',
      type: 'callout',
      data: {
        style: 'key',
        title: "Graham's Law (Qualitative)",
        text: 'Lighter molecules (lower molecular mass) diffuse <strong>faster</strong> than heavier molecules at the same temperature. This is because at the same temperature, all molecules have the same average kinetic energy but lighter ones must move faster to have the same kinetic energy as heavier ones.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Why Diffusion is Slow',
        text: 'Even though individual molecules move very fast (~500 m/s), diffusion in air is slow because molecules undergo billions of collisions per second, changing direction constantly. The net movement from high to low concentration takes time.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Diffusion is the net movement of particles from high to low concentration due to their random kinetic motion. Lighter molecules diffuse faster (NH₃ faster than HCl). Rate increases with temperature, steeper concentration gradient, and lower molecular mass.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Diffusion is the net movement of particles from high to low concentration; lighter molecules diffuse faster at the same temperature.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Define diffusion.', answer: 'Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down the concentration gradient. It is passive and does not require energy.' },
      { id: 'cue-2', blockId: 'call-nh3hcl', prompt: 'In the ammonia/HCl experiment, why does the white ring form closer to the HCl end?', answer: 'NH₃ molecules (Mr = 17) are lighter than HCl molecules (Mr = 36.5) so they diffuse faster and travel further along the tube in the same time.' },
      { id: 'cue-3', blockId: 'tbl-factors', prompt: 'Name two factors that increase the rate of diffusion and explain each.', answer: '1. Higher temperature — particles have more kinetic energy and move faster. 2. Lower molecular mass — lighter molecules move faster at the same temperature.' },
      { id: 'cue-4', blockId: 'call-graham', prompt: 'Why do lighter molecules diffuse faster than heavier ones?', answer: 'At the same temperature, all molecules have the same average kinetic energy. Since KE = ½mv², lighter molecules (smaller m) must have a higher velocity v to have the same kinetic energy.' }
    ]
  },
  evidence: [],
  mentions: []
};
