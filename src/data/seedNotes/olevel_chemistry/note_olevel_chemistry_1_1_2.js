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
