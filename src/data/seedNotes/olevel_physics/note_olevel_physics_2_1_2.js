export const note_olevel_physics_2_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-1-3-evaporation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish evaporation from boiling; explain the cooling effect of evaporation using kinetic theory; identify factors that affect the rate of evaporation and relate them to particle behaviour.',
      },
    },
    {
      id: 'h-evap-vs-boil',
      type: 'heading',
      data: { text: 'Evaporation vs Boiling', level: 2 },
    },
    {
      id: 'p-evap-intro',
      type: 'paragraph',
      data: {
        text: 'Both evaporation and boiling involve a liquid changing into a gas, but they are fundamentally different processes. Understanding the distinction is important for exam questions.',
      },
    },
    {
      id: 'table-evap-boil',
      type: 'comparisonTable',
      data: {
        caption: 'Evaporation vs boiling',
        headers: ['Feature', 'Evaporation', 'Boiling'],
        rows: [
          ['Where it occurs', 'Surface of the liquid only', 'Throughout the entire liquid'],
          ['Temperature', 'Occurs at ANY temperature below boiling point', 'Occurs only at the boiling point'],
          ['Speed', 'Slow, gradual', 'Rapid'],
          ['Bubbles', 'No bubbles', 'Bubbles form throughout liquid'],
          ['Cooling effect', 'Cools the remaining liquid', 'No net cooling of surroundings'],
        ],
      },
    },
    {
      id: 'h-mechanism',
      type: 'heading',
      data: { text: 'Mechanism of Evaporation and Cooling', level: 2 },
    },
    {
      id: 'p-mechanism',
      type: 'paragraph',
      data: {
        text: 'At any given temperature, particles in a liquid do not all have the same kinetic energy — they have a <strong>range of speeds</strong>. Some particles near the surface happen to have enough kinetic energy to overcome the intermolecular forces holding them in the liquid and escape into the air as vapour.',
      },
    },
    {
      id: 'callout-cooling',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Idea: Why Evaporation Causes Cooling',
        text: 'The particles that escape are the <strong>fastest-moving</strong> (highest KE) particles. When they leave, the <em>average</em> kinetic energy of the remaining particles decreases. Since temperature is a measure of average KE, the temperature of the remaining liquid falls. This is why evaporation produces a <strong>cooling effect</strong>.',
      },
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Factors Affecting the Rate of Evaporation', level: 2 },
    },
    {
      id: 'list-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Higher temperature:</strong> More particles have enough KE to escape from the surface → faster evaporation.' },
          { text: '<strong>Larger surface area:</strong> More particles are near the surface at any instant → more can escape per second.' },
          { text: '<strong>Air movement (wind/draught):</strong> Removes vapour molecules from above the surface, reducing the chance of them re-entering the liquid → net evaporation rate increases.' },
          { text: '<strong>Lower humidity:</strong> Less water vapour in the surrounding air means fewer vapour molecules re-entering the liquid, so net evaporation is faster.' },
        ],
      },
    },
    {
      id: 'callout-tip-factors',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Link Factors to Particle Theory',
        text: 'For each factor, always explain <em>why</em> it works in particle terms. E.g. "higher temperature → more particles have sufficient KE to escape the liquid surface".',
      },
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Applications of Evaporative Cooling', level: 2 },
    },
    {
      id: 'list-applications',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Sweating:</strong> Sweat (mainly water) evaporates from the skin surface. Fast-moving water molecules escape, removing energy and lowering the skin temperature — a cooling effect for the body.' },
          { text: '<strong>Air conditioning / refrigerators:</strong> A volatile liquid (refrigerant) is pumped through pipes. It evaporates inside the fridge, absorbing latent heat from the contents and cooling them.' },
          { text: '<strong>Drying clothes:</strong> Water evaporates from wet fabric. Placing clothes in a warm, breezy location increases temperature and air movement, speeding evaporation.' },
          { text: '<strong>Alcohol swab:</strong> Applying alcohol to skin feels cold because alcohol evaporates rapidly, removing heat from the skin.' },
        ],
      },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Explaining Sweating',
        text: '<strong>Question:</strong> Explain, using kinetic theory, why sweating cools the human body.<br/><br/><strong>Answer:</strong><br/>1. Sweat is liquid water on the skin surface.<br/>2. Particles in the sweat have a range of kinetic energies.<br/>3. The fastest-moving particles at the surface have enough energy to overcome intermolecular forces and escape as water vapour (evaporation).<br/>4. The remaining particles have a lower average kinetic energy.<br/>5. Since temperature is proportional to average KE, the temperature of the skin decreases — the body is cooled.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Evaporation occurs at the surface at any temperature; boiling occurs throughout at the boiling point. Evaporation cools a liquid because the fastest particles escape, lowering the average KE (temperature) of those remaining. Rate increases with higher temperature, larger surface area, air movement and lower humidity. Applications: sweating, refrigeration, drying clothes.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Evaporation = surface only, any temperature, cooling effect. Cooling because fastest particles escape → lower average KE. Rate increased by higher temperature, larger area, wind, low humidity.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-evap-boil',
        prompt: 'State two differences between evaporation and boiling.',
        answer: 'Evaporation occurs only at the liquid surface at any temperature; boiling occurs throughout the liquid at the boiling point. Evaporation is slow and produces no bubbles; boiling is rapid and produces bubbles.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-cooling',
        prompt: 'Explain in terms of particles why evaporation causes the remaining liquid to cool.',
        answer: 'The fastest-moving (highest KE) particles escape from the surface. The average kinetic energy of the remaining particles therefore decreases. Since temperature is a measure of average KE, the temperature of the liquid falls — it is cooled.',
      },
      {
        id: 'cue-3',
        blockId: 'list-factors',
        prompt: 'Give four factors that increase the rate of evaporation.',
        answer: 'Higher temperature, larger surface area, increased air movement (wind), lower humidity.',
      },
      {
        id: 'cue-4',
        blockId: 'list-applications',
        prompt: 'Explain why sweating cools the body, using particle theory.',
        answer: 'Sweat water on the skin evaporates; the fastest molecules escape carrying KE away. The average KE of remaining liquid decreases, so skin temperature drops — the body loses thermal energy to the surroundings.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
