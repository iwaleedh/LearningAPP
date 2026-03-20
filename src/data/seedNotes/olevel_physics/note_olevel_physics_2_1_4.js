export const note_olevel_physics_2_1_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-1-5-diffusion.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe diffusion as the net movement of particles from a region of high concentration to low concentration; explain factors that affect diffusion rate; describe experimental evidence for diffusion.',
      },
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What is Diffusion?', level: 2 },
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: {
        text: '<strong>Diffusion</strong> is the <em>net</em> movement of particles from a region of <strong>high concentration</strong> to a region of <strong>low concentration</strong>, due to random particle motion. Diffusion continues until the concentration is uniform throughout (equilibrium). No container or pump is needed — it is driven solely by random particle motion.',
      },
    },
    {
      id: 'callout-net',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Idea: Net Movement',
        text: 'Particles move randomly in all directions at all times. However, there are more particles in the high-concentration region, so statistically more particles move towards the low-concentration region than move back. The <strong>net</strong> (overall) flow is from high to low concentration.',
      },
    },
    {
      id: 'h-svg',
      type: 'heading',
      data: { text: 'Diffusion — Particle View', level: 2 },
    },
    {
      id: 'svg-diffusion',
      type: 'svg',
      data: {
        caption: 'Net movement of particles from high concentration (left) to low concentration (right) over time',
        svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif" font-size="12">
  <!-- Box 1: Initial state -->
  <rect x="10" y="30" width="250" height="160" rx="8" fill="#3b1460" stroke="#9333ea" stroke-width="2"/>
  <text x="135" y="22" text-anchor="middle" fill="#9333ea" font-weight="600" font-size="13">Initial State</text>
  <!-- High conc left side -->
  <circle cx="45"  cy="70"  r="8" fill="#9333ea" opacity="0.9"/>
  <circle cx="80"  cy="60"  r="8" fill="#9333ea" opacity="0.9"/>
  <circle cx="60"  cy="100" r="8" fill="#9333ea" opacity="0.9"/>
  <circle cx="95"  cy="90"  r="8" fill="#9333ea" opacity="0.9"/>
  <circle cx="45"  cy="130" r="8" fill="#9333ea" opacity="0.9"/>
  <circle cx="80"  cy="145" r="8" fill="#9333ea" opacity="0.9"/>
  <circle cx="100" cy="125" r="8" fill="#9333ea" opacity="0.9"/>
  <circle cx="55"  cy="165" r="8" fill="#9333ea" opacity="0.9"/>
  <!-- Low conc right side — sparse -->
  <circle cx="165" cy="65"  r="8" fill="#9333ea" opacity="0.5"/>
  <circle cx="220" cy="110" r="8" fill="#9333ea" opacity="0.5"/>
  <circle cx="180" cy="155" r="8" fill="#9333ea" opacity="0.5"/>
  <!-- Divider dashed -->
  <line x1="130" y1="35" x2="130" y2="185" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="68"  y="195" text-anchor="middle" fill="#9333ea" font-size="10">High</text>
  <text x="195" y="195" text-anchor="middle" fill="#9333ea" font-size="10">Low</text>

  <!-- Arrow -->
  <text x="275" y="115" text-anchor="middle" fill="#374151" font-size="20">→</text>

  <!-- Box 2: After diffusion -->
  <rect x="300" y="30" width="250" height="160" rx="8" fill="#3b1460" stroke="#9333ea" stroke-width="2"/>
  <text x="425" y="22" text-anchor="middle" fill="#9333ea" font-weight="600" font-size="13">After Diffusion</text>
  <!-- Uniform distribution -->
  <circle cx="325" cy="65"  r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="365" cy="50"  r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="350" cy="100" r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="390" cy="80"  r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="430" cy="65"  r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="470" cy="55"  r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="325" cy="140" r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="370" cy="155" r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="415" cy="140" r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="460" cy="160" r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="500" cy="120" r="8" fill="#9333ea" opacity="0.75"/>
  <circle cx="490" cy="80"  r="8" fill="#9333ea" opacity="0.75"/>
  <text x="425" y="203" text-anchor="middle" fill="#9333ea" font-size="10">Uniform concentration</text>
</svg>`,
      },
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Factors Affecting the Rate of Diffusion', level: 2 },
    },
    {
      id: 'list-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Higher temperature:</strong> Particles have more kinetic energy → move faster → diffusion is quicker.' },
          { text: '<strong>Lower molecular mass:</strong> Lighter molecules move faster at the same temperature (Graham\'s law) → diffuse faster. E.g. H₂ diffuses much faster than SO₂.' },
          { text: '<strong>Steeper concentration gradient:</strong> Larger difference between high and low concentration regions → greater net movement per unit time.' },
          { text: '<strong>Smaller molecule size:</strong> Smaller molecules encounter less resistance and diffuse faster through a medium.' },
        ],
      },
    },
    {
      id: 'h-evidence',
      type: 'heading',
      data: { text: 'Experimental Evidence for Diffusion', level: 2 },
    },
    {
      id: 'callout-bromine',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Experiment 1: Bromine Gas in Air',
        text: '<strong>Setup:</strong> A gas jar containing air is placed above a gas jar of brown bromine gas. The cover slip between them is removed.<br/><strong>Observation:</strong> The brown colour gradually spreads upward into the air jar; both jars eventually become the same pale brown colour.<br/><strong>Explanation:</strong> Bromine molecules move randomly from high concentration (lower jar) to low concentration (upper jar) by diffusion until uniform.',
      },
    },
    {
      id: 'callout-ammonia',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Experiment 2: Ammonia and Hydrogen Chloride',
        text: '<strong>Setup:</strong> Cotton wool soaked in ammonia (NH₃) solution is placed at one end of a long tube; cotton wool soaked in hydrochloric acid (HCl) is placed at the other. The tube is sealed.<br/><strong>Observation:</strong> A white ring of ammonium chloride (NH₄Cl) forms inside the tube, noticeably closer to the HCl end.<br/><strong>Explanation:</strong> Both gases diffuse from their respective ends towards the middle. NH₃ molecules (M = 17 g/mol) are lighter than HCl molecules (M = 36.5 g/mol) and therefore move faster, travelling further before meeting — so the white ring forms closer to the HCl end.',
      },
    },
    {
      id: 'callout-diffusion-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Diffusion in Liquids',
        text: 'Diffusion also occurs in liquids, but much more slowly than in gases because liquid particles are closer together and interact more strongly. A classic demonstration: a crystal of purple potassium permanganate placed in still water gradually colours the surrounding water.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Diffusion is the net movement of particles from high to low concentration due to random motion — no energy input needed. Rate increases with higher temperature, lighter molecules, steeper concentration gradient. Evidence: bromine spreading through air; ammonia meeting HCl forming a white ring closer to the HCl end (lighter NH₃ travels further).',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Diffusion: net movement high→low concentration, random motion. Faster with higher T, lighter molecules, steeper gradient. Evidence: bromine in air; NH₃/HCl ring closer to HCl end.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-definition',
        prompt: 'Define diffusion and state what drives it.',
        answer: 'Diffusion is the net movement of particles from a region of high concentration to a region of low concentration. It is driven by the random thermal motion of particles — no external energy input is required.',
      },
      {
        id: 'cue-2',
        blockId: 'list-factors',
        prompt: 'Give three factors that increase the rate of diffusion.',
        answer: 'Higher temperature (faster particles), lower molecular mass (lighter molecules move faster), steeper concentration gradient (greater driving force).',
      },
      {
        id: 'cue-3',
        blockId: 'callout-ammonia',
        prompt: 'In the ammonia–HCl tube experiment, why does the white ring form closer to the HCl end?',
        answer: 'NH₃ molecules (M = 17) are lighter than HCl molecules (M = 36.5) and therefore diffuse faster. NH₃ travels further along the tube before meeting HCl, so the white ring (NH₄Cl) forms nearer the HCl end.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-net',
        prompt: 'If particles move randomly in all directions, why is there a net flow from high to low concentration?',
        answer: 'There are more particles in the high-concentration region. By random chance, more particles per second cross from the high-concentration side to the low-concentration side than in the reverse direction. The net overall flow is therefore from high to low concentration.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
