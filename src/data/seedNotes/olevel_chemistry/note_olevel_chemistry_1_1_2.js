export const note_olevel_chemistry_1_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/1 States Of Matter/1-1-3-pressure-and-temperature-in-gases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain the relationship between gas pressure and temperature at constant volume using the kinetic particle theory, and understand the Kelvin temperature scale and absolute zero.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Gas Pressure and Particle Collisions', level: 2 }
    },
    {
      id: 'call-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What Causes Gas Pressure?',
        text: 'Gas pressure is caused by the <strong>collisions of gas particles with the walls of the container</strong>. Each collision exerts a tiny force on the wall. The total of all these forces per unit area gives the gas pressure.<br/><br/>Pressure depends on:<br/>• How <strong>often</strong> particles hit the walls (frequency of collisions)<br/>• How <strong>hard</strong> each collision is (force per collision, related to speed/kinetic energy)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Effect of Temperature on Gas Pressure (Constant Volume)', level: 2 }
    },
    {
      id: 'call-pT',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pressure–Temperature Relationship',
        text: 'At <strong>constant volume</strong>, if the temperature of a gas increases:<br/>1. Particles gain more <strong>kinetic energy</strong> and move faster<br/>2. Collisions with the walls are more <strong>frequent</strong> and each collision delivers more <strong>force</strong><br/>3. Therefore, <strong>pressure increases</strong><br/><br/>Conversely, cooling a gas at constant volume decreases pressure because particles move more slowly and collide less often and less forcefully.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Kelvin Temperature Scale', level: 2 }
    },
    {
      id: 'call-kelvin',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Kelvin Scale and Absolute Zero',
        text: '<strong>Absolute zero (0 K = −273°C)</strong> is the lowest possible temperature. At absolute zero, particles have minimum kinetic energy — they cease all motion (in classical terms).<br/><br/>The <strong>Kelvin scale</strong> starts at absolute zero:<br/>• 0 K = −273°C<br/>• 273 K = 0°C (melting point of ice)<br/>• 373 K = 100°C (boiling point of water)<br/><br/>Conversion: <strong>K = °C + 273</strong><br/>Conversion: <strong>°C = K − 273</strong>'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Temperature Conversion Examples',
        text: 'Convert 25°C to Kelvin:<br/>K = 25 + 273 = <strong>298 K</strong><br/><br/>Convert 500 K to Celsius:<br/>°C = 500 − 273 = <strong>227°C</strong><br/><br/>The boiling point of water (100°C) in Kelvin:<br/>K = 100 + 273 = <strong>373 K</strong>'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Effect of Volume on Gas Pressure (Constant Temperature)', level: 2 }
    },
    {
      id: 'call-volume',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pressure–Volume Relationship',
        text: 'At <strong>constant temperature</strong>, decreasing the volume of a gas <strong>increases its pressure</strong>:<br/>• Particles are confined to a smaller space<br/>• They collide with the walls more <strong>frequently</strong><br/>• Pressure increases<br/><br/>This is described by Boyle\'s Law: pressure × volume = constant (at fixed temperature).'
      }
    },
    {
      id: 'svg-gas-pressure',
      type: 'svg',
      data: {
        caption: 'Effect of Temperature and Volume on Gas Pressure',
        svg: `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gas" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#93c5fd" />
      <stop offset="100%" stop-color="#3b82f6" />
    </radialGradient>
    <marker id="arrow-move" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0,0 L 10,5 L 0,10 z" fill="#ef4444" />
    </marker>
    <!-- Heat icon -->
    <path id="flame" d="M10,20 Q5,15 10,5 Q15,15 10,20 M10,18 Q8,14 10,10 Q12,14 10,18" fill="#ef4444" />
  </defs>

  <!-- Base State Container -->
  <g transform="translate(60, 40)">
    <text x="60" y="-15" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="var(--color-text)">1. Initial State</text>
    <path d="M 10,10 L 10,130 L 110,130 L 110,10" fill="none" stroke="var(--color-border)" stroke-width="3" />
    <!-- Piston top -->
    <rect x="5" y="10" width="110" height="15" fill="#94a3b8" />
    <rect x="50" y="-20" width="20" height="30" fill="#1e293b" />
    
    <!-- Particles -->
    <circle cx="30" cy="50" r="6" fill="url(#gas)" />
    <path d="M 30,50 L 45,40" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />
    
    <circle cx="80" cy="40" r="6" fill="url(#gas)" />
    <path d="M 80,40 L 70,25" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />
    
    <circle cx="50" cy="90" r="6" fill="url(#gas)" />
    <path d="M 50,90 L 30,100" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />
    
    <circle cx="85" cy="110" r="6" fill="url(#gas)" />
    <path d="M 85,110 L 100,120" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />
    
    <circle cx="40" cy="115" r="6" fill="url(#gas)" />
    <path d="M 40,115 L 55,125" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />

    <text x="60" y="150" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Pressure = P</text>
    <text x="60" y="165" text-anchor="middle" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)">Temp = T, Vol = V</text>
  </g>

  <!-- Increased Temp (Constant Volume) -->
  <g transform="translate(320, 40)">
    <text x="60" y="-15" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="var(--color-text)">2. Increase Temp</text>
    <path d="M 10,10 L 10,130 L 110,130 L 110,10" fill="none" stroke="var(--color-border)" stroke-width="3" />
    <rect x="5" y="10" width="110" height="15" fill="#94a3b8" />
    <rect x="50" y="-20" width="20" height="30" fill="#1e293b" />
    
    <!-- Heat applied -->
    <use href="#flame" x="40" y="130" transform="scale(1.5) translate(-10, 0)" />
    <use href="#flame" x="80" y="130" transform="scale(1.5) translate(-25, 0)" />
    
    <!-- Particles moving faster (longer arrows) -->
    <circle cx="30" cy="50" r="6" fill="url(#gas)" />
    <path d="M 30,50 L 60,30" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-move)" />
    <!-- Impact lines -->
    <path d="M 10,50 Q 15,45 10,40" fill="none" stroke="#ef4444" stroke-width="1" />
    
    <circle cx="80" cy="40" r="6" fill="url(#gas)" />
    <path d="M 80,40 L 60,10" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-move)" />
    
    <circle cx="50" cy="90" r="6" fill="url(#gas)" />
    <path d="M 50,90 L 10,110" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-move)" />
    <path d="M 50,90 Q 55,85 60,90" fill="none" stroke="#ef4444" stroke-width="1" />
    
    <circle cx="85" cy="110" r="6" fill="url(#gas)" />
    <path d="M 85,110 L 110,125" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-move)" />
    <!-- Impact lines -->
    <path d="M 110,110 Q 105,105 110,100" fill="none" stroke="#ef4444" stroke-width="1" />
    
    <circle cx="40" cy="115" r="6" fill="url(#gas)" />
    <path d="M 40,115 L 70,130" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-move)" />

    <text x="60" y="195" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-primary)">High Pressure</text>
    <text x="60" y="210" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">Faster particles,</text>
    <text x="60" y="225" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">harder &amp; more frequent collisions</text>
  </g>

  <!-- Decreased Volume (Constant Temp) -->
  <g transform="translate(580, 40)">
    <text x="60" y="-15" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="var(--color-text)">3. Decrease Volume</text>
    <path d="M 10,10 L 10,130 L 110,130 L 110,10" fill="none" stroke="var(--color-border)" stroke-width="3" />
    
    <!-- Piston pushed down -->
    <rect x="5" y="70" width="110" height="15" fill="#94a3b8" />
    <rect x="50" y="10" width="20" height="60" fill="#1e293b" />
    <!-- Push force arrow -->
    <path d="M 60,0 L 60,10" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-move)" />
    
    <!-- Area above piston dimmed -->
    <rect x="10" y="10" width="100" height="60" fill="#1e293b" opacity="0.8" />
    
    <!-- Particles crowded in smaller space -->
    <circle cx="30" cy="90" r="6" fill="url(#gas)" />
    <path d="M 30,90 L 45,80" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />
    
    <circle cx="80" cy="120" r="6" fill="url(#gas)" />
    <path d="M 80,120 L 70,105" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />
    
    <circle cx="50" cy="110" r="6" fill="url(#gas)" />
    <path d="M 50,110 L 30,120" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />
    <!-- Impact lines -->
    <path d="M 10,100 Q 15,95 10,90" fill="none" stroke="#ef4444" stroke-width="1" />
    <path d="M 110,120 Q 105,115 110,110" fill="none" stroke="#ef4444" stroke-width="1" />
    <path d="M 60,130 Q 65,125 70,130" fill="none" stroke="#ef4444" stroke-width="1" />
    
    <circle cx="90" cy="95" r="6" fill="url(#gas)" />
    <path d="M 90,95 L 105,105" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />
    
    <circle cx="65" cy="85" r="6" fill="url(#gas)" />
    <path d="M 65,85 L 80,75" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-move)" />

    <text x="60" y="165" text-anchor="middle" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-primary)">High Pressure</text>
    <text x="60" y="180" text-anchor="middle" font-family="var(--font-sans)" font-size="11" fill="var(--color-text-secondary)">Less space, more frequent collisions</text>
  </g>

  <!-- Separation lines -->
  <path d="M 230,20 L 230,150" fill="none" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4,4" />
  <path d="M 510,20 L 510,150" fill="none" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4,4" />
</svg>`
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When explaining pressure changes, always refer to: (1) kinetic energy of particles, (2) frequency of collisions with walls, and (3) force per collision. Do not just say "particles move faster" — explain the link to pressure.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Gas pressure is caused by particle collisions with container walls. Increasing temperature (at constant volume) increases pressure because particles move faster and collide more often and more forcefully. Absolute zero (0 K = −273°C) is the lowest possible temperature; K = °C + 273.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Gas pressure is caused by particle collisions with walls; higher temperature means faster particles and greater pressure at constant volume.',
    cues: [
      { id: 'cue-1', blockId: 'call-key1', prompt: 'What causes gas pressure?', answer: 'Gas pressure is caused by collisions of gas particles with the walls of the container. The frequency and force of these collisions determine the pressure.' },
      { id: 'cue-2', blockId: 'call-pT', prompt: 'Using kinetic theory, explain why gas pressure increases when temperature increases at constant volume.', answer: 'Higher temperature gives particles more kinetic energy so they move faster. They collide with the container walls more frequently and with greater force, increasing pressure.' },
      { id: 'cue-3', blockId: 'call-kelvin', prompt: 'What is absolute zero and how do you convert between Celsius and Kelvin?', answer: 'Absolute zero (0 K = −273°C) is the lowest possible temperature where particles have minimum kinetic energy. K = °C + 273; °C = K − 273.' },
      { id: 'cue-4', blockId: 'call-volume', prompt: 'Why does decreasing the volume of a gas increase its pressure (at constant temperature)?', answer: 'Smaller volume means particles are confined to less space, so they hit the walls more frequently, increasing pressure.' }
    ]
  },
  evidence: [],
  mentions: []
};
