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
