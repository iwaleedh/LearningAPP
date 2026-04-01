export const note_olevel_physics_2_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-1-2-state-changes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Name and describe the changes of state; explain in terms of energy and particle behaviour why temperature remains constant during a phase change; interpret a heating curve for water.',
      },
    },
    {
      id: 'h-changes',
      type: 'heading',
      data: { text: 'Changes of State', level: 2 },
    },
    {
      id: 'p-changes-intro',
      type: 'paragraph',
      data: {
        text: 'Matter can change from one state to another when energy is supplied or removed. Each change of state has a specific name. The changes are reversible — heating causes transitions from solid → liquid → gas; cooling causes the reverse.',
      },
    },
    {
      id: 'table-changes',
      type: 'comparisonTable',
      data: {
        caption: 'Names of changes of state',
        headers: ['Change', 'From → To', 'Energy change'],
        rows: [
          ['Melting (fusion)', 'Solid → Liquid', 'Energy absorbed'],
          ['Freezing (solidification)', 'Liquid → Solid', 'Energy released'],
          ['Boiling / Vaporisation', 'Liquid → Gas', 'Energy absorbed'],
          ['Condensation', 'Gas → Liquid', 'Energy released'],
          ['Sublimation', 'Solid → Gas (directly)', 'Energy absorbed'],
          ['Deposition', 'Gas → Solid (directly)', 'Energy released'],
        ],
      },
    },
    {
      id: 'callout-sublimation',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Example of Sublimation',
        text: 'Dry ice (solid CO₂) sublimates directly to gas at room temperature and pressure — it never forms a liquid puddle. Iodine crystals also sublime when gently heated.',
      },
    },
    {
      id: 'h-latent',
      type: 'heading',
      data: { text: 'Why Temperature Stays Constant During a Phase Change', level: 2 },
    },
    {
      id: 'p-latent',
      type: 'paragraph',
      data: {
        text: 'When a pure substance is melting or boiling, its temperature does not rise even though energy is being continuously supplied. This energy is called <strong>latent heat</strong> — it is used to <em>break the intermolecular bonds</em> between particles rather than to increase the kinetic energy of the particles. Because temperature is linked to average kinetic energy, and the KE is not changing, the temperature stays constant.',
      },
    },
    {
      id: 'callout-latent-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Idea: Latent Heat',
        text: 'During a phase change, the energy supplied (latent heat) is used to <strong>overcome intermolecular forces</strong> (break bonds), not to raise kinetic energy. Therefore temperature remains constant until the change of state is complete.',
      },
    },
    {
      id: 'p-latent-reverse',
      type: 'paragraph',
      data: {
        text: 'The reverse is also true: when a gas condenses or a liquid freezes, bonds form between particles and energy is <em>released</em> to the surroundings — yet temperature stays constant while the change of state is occurring.',
      },
    },
    {
      id: 'h-heating-curve',
      type: 'heading',
      data: { text: 'Heating Curve for Water', level: 2 },
    },
    {
      id: 'svg-heating-curve',
      type: 'svg',
      data: {
        caption: 'Heating curve for water — temperature vs time at constant heating rate',
        svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" font-size="12">
  <!-- Axes -->
  <line x1="60" y1="270" x2="520" y2="270" stroke="#374151" stroke-width="2"/>
  <line x1="60" y1="270" x2="60" y2="20" stroke="#374151" stroke-width="2"/>
  <!-- Axis labels -->
  <text x="290" y="300" text-anchor="middle" fill="#374151" font-size="13" font-weight="600">Time (s)</text>
  <text x="18" y="150" text-anchor="middle" fill="#374151" font-size="13" font-weight="600" transform="rotate(-90,18,150)">Temperature (°C)</text>

  <!-- Y gridlines & labels -->
  <line x1="55" y1="220" x2="520" y2="220" stroke="#e5e7eb" stroke-width="1"/>
  <text x="50" y="224" text-anchor="end" fill="#6b7280">0</text>
  <line x1="55" y1="120" x2="520" y2="120" stroke="#e5e7eb" stroke-width="1"/>
  <text x="50" y="124" text-anchor="end" fill="#6b7280">100</text>

  <!-- Heating curve path -->
  <!-- Segment 1: ice warming -20°C → 0°C -->
  <line x1="60" y1="250" x2="140" y2="220" stroke="#3b82f6" stroke-width="3"/>
  <!-- Segment 2: melting plateau at 0°C -->
  <line x1="140" y1="220" x2="220" y2="220" stroke="#ef4444" stroke-width="3"/>
  <!-- Segment 3: water warming 0°C → 100°C -->
  <line x1="220" y1="220" x2="340" y2="120" stroke="#3b82f6" stroke-width="3"/>
  <!-- Segment 4: boiling plateau at 100°C -->
  <line x1="340" y1="120" x2="450" y2="120" stroke="#ef4444" stroke-width="3"/>
  <!-- Segment 5: steam warming above 100°C -->
  <line x1="450" y1="120" x2="520" y2="80" stroke="#3b82f6" stroke-width="3"/>

  <!-- Phase labels -->
  <text x="90" y="245" text-anchor="middle" fill="#3b82f6" font-size="11">Ice warming</text>
  <text x="180" y="210" text-anchor="middle" fill="#ef4444" font-size="11">Melting</text>
  <text x="180" y="200" text-anchor="middle" fill="#ef4444" font-size="11">(0 °C)</text>
  <text x="280" y="175" text-anchor="middle" fill="#3b82f6" font-size="11">Water warming</text>
  <text x="395" y="110" text-anchor="middle" fill="#ef4444" font-size="11">Boiling</text>
  <text x="395" y="100" text-anchor="middle" fill="#ef4444" font-size="11">(100 °C)</text>
  <text x="492" y="95" text-anchor="middle" fill="#3b82f6" font-size="11">Steam</text>

  <!-- Dashed reference lines -->
  <line x1="140" y1="220" x2="140" y2="270" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="340" y1="120" x2="340" y2="270" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="60" y1="250" x2="60" y2="250"/>
  <text x="100" y="283" text-anchor="middle" fill="#9ca3af" font-size="10">Melting starts</text>
  <text x="395" y="283" text-anchor="middle" fill="#9ca3af" font-size="10">Boiling starts</text>

  <!-- Arrow annotations -->
  <text x="170" y="240" fill="#ef4444" font-size="10">Latent heat</text>
  <text x="170" y="252" fill="#ef4444" font-size="10">of fusion</text>
  <text x="358" y="140" fill="#ef4444" font-size="10">Latent heat</text>
  <text x="358" y="152" fill="#ef4444" font-size="10">of vaporisation</text>
</svg>`,
      },
    },
    {
      id: 'p-curve-explain',
      type: 'paragraph',
      data: {
        text: 'The heating curve shows two <strong>horizontal plateaus</strong>: one at 0°C (melting of ice) and one at 100°C (boiling of water). During each plateau the temperature does not change because all the energy supplied is used as latent heat to break intermolecular bonds. The sloped sections show temperature rising as kinetic energy increases in each pure state. Note that the slope is less steep for water than for ice, reflecting water\'s higher specific heat capacity.',
      },
    },
    {
      id: 'callout-exam-curve',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students often think that no energy is being supplied during the flat sections of the heating curve. In fact energy <em>is</em> being supplied continuously — it is just being used to break bonds (latent heat) rather than to raise the temperature.',
      },
    },
    {
      id: 'h-particle-model',
      type: 'heading',
      data: { text: 'Particle Model Explanation of Phase Changes', level: 2 },
    },
    {
      id: 'list-particle-model',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Melting:</strong> Energy breaks the strong lattice bonds in a solid, allowing particles to move past one another. Kinetic energy (temperature) does not increase until all bonds are broken.' },
          { text: '<strong>Boiling:</strong> Energy breaks the remaining intermolecular forces in a liquid, giving particles enough energy to completely escape and become gas. The liquid temperature stays at 100°C until all liquid has vaporised.' },
          { text: '<strong>Condensation/freezing:</strong> Particles lose kinetic energy to surroundings; bonds form, releasing latent heat. Temperature stays constant during the phase change.' },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Changes of state — melting, freezing, boiling, condensing, sublimation — involve energy being absorbed or released. During any phase change temperature stays constant because the energy (latent heat) is used to break or form intermolecular bonds, not to change kinetic energy. A heating curve for water shows horizontal plateaus at 0°C (melting) and 100°C (boiling).',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Named phase changes; temperature constant during phase change because energy breaks bonds (latent heat), not KE; heating curve has plateaus at 0°C and 100°C.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-changes',
        prompt: 'What is the name for the change of state from liquid to gas, and from solid directly to gas?',
        answer: 'Liquid → Gas is called boiling or vaporisation. Solid → Gas directly is called sublimation.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-latent-key',
        prompt: 'Why does the temperature of a substance remain constant while it is melting?',
        answer: 'The energy supplied (latent heat) is used to break intermolecular bonds, not to increase the kinetic energy of particles. Since temperature is linked to average KE, the temperature stays constant until all bonds are broken.',
      },
      {
        id: 'cue-3',
        blockId: 'svg-heating-curve',
        prompt: 'Describe the shape of a heating curve for water and explain what the flat sections represent.',
        answer: 'The curve has sloped sections (temperature rising) and two horizontal plateaus — one at 0°C (melting) and one at 100°C (boiling). The flat sections represent phase changes where latent heat is absorbed at constant temperature.',
      },
      {
        id: 'cue-4',
        blockId: 'list-particle-model',
        prompt: 'In terms of particles, what happens during boiling?',
        answer: 'During boiling, energy (latent heat of vaporisation) breaks the remaining intermolecular forces in the liquid. Particles gain enough energy to escape completely and become a gas. Temperature stays at 100°C until all liquid vaporises.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
