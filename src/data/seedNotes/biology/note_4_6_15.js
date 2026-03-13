export const note_biology_4_6_15 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand how succession, forensic entomology, body temperature (algor mortis), and muscle contraction (rigor mortis) are used to estimate the time of death.' }
    },
    {
      id: 'h-succession',
      type: 'heading',
      data: { text: 'Stage of Succession', level: 2 }
    },
    {
      id: 'p-succession',
      type: 'paragraph',
      data: { text: 'In forensics, succession refers to the predictable sequence in which different types of organisms colonise a dead body. Unlike ecological succession (where early pioneer species are replaced), on a dead body, all arriving species tend to remain as decomposition progresses.' }
    },
    {
      id: 'list-succession',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Bacteria:** Found immediately after TOD.',
          '**Flies:** Tissue decomposition creates ideal moist conditions for flies to lay eggs and for larvae (maggots) to hatch.',
          '**Beetles:** As soft tissue is consumed by fly larvae, conditions become favourable for beetles.',
          '**Drying out:** Over time, the tissue dries out. Flies leave because they prefer moisture, but beetles remain capable of decomposing dry tissue.'
        ]
      }
    },
    {
      id: 'h-entomology',
      type: 'heading',
      data: { text: 'Forensic Entomology', level: 2 }
    },
    {
      id: 'p-entomology',
      type: 'paragraph',
      data: { text: 'Forensic entomology is the study of insect colonies on a dead body. By identifying the different species present and understanding their life cycles, scientists can accurately estimate the TOD.' }
    },
    {
      id: 'list-entomology',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Flies arrive within hours; beetles colonise later.',
          'The **stage of life cycle** acts as a biological clock. For example, blowfly eggs take about 24 hours to hatch. If blowfly larvae are present, the person died more than 24 hours ago.',
          'The progression of insect life cycles can be affected by drugs in the body, humidity, oxygen availability, and temperature.'
        ]
      }
    },
    {
      id: 'h-algor',
      type: 'heading',
      data: { text: 'Body Temperature (Algor Mortis)', level: 2 }
    },
    {
      id: 'p-algor',
      type: 'paragraph',
      data: { text: 'Living humans maintain a body temperature of roughly 37°C. After death, metabolic reactions that produce heat cease. The body slowly cools until it matches the surrounding ambient temperature—a process known as **algor mortis**.' }
    },
    {
      id: 'list-algor',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The core body temperature generally decreases by **1.5 to 2.0°C per hour**.',
          'The exact rate of cooling is affected by the starting temperature, air temperature, the body\'s surface area to volume ratio, the presence of clothing, and percentage body fat.'
        ]
      }
    },
    {
      id: 'h-rigor',
      type: 'heading',
      data: { text: 'Muscle Contraction (Rigor Mortis)', level: 2 }
    },
    {
      id: 'p-rigor',
      type: 'paragraph',
      data: { text: 'About 4–6 hours after death, muscles begin to contract and stiffen. This is known as **rigor mortis** and occurs due to chemical changes at the cellular level:' }
    },
    {
      id: 'list-rigor',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Muscle cells run out of oxygen and start to respire anaerobically, producing **lactic acid**.',
          'The accumulation of lactic acid decreases the pH inside muscle cells, which denatures the enzymes responsible for producing ATP.',
          'Without ATP, myosin heads cannot detach from the actin filaments, locking the muscle in a contracted, stiff state.',
          'Rigor mortis progresses systematically: starting in the small muscles of the head, and finishing in the large lower-body muscles.',
          'It is fully established around 12–18 hours, but wears off after 24–36 hours as muscle proteins physically degrade.'
        ]
      }
    },
    {
      id: 'callout-tod',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Estimates Only',
        text: 'Time of death can never be pinpointed with 100% accuracy. Because so many external variables (temperature, clothing, location) affect everything from decomposition and algor mortis to insect development, forensic estimates must combine all evidence to deduce the most reliable timeframe.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'In forensic succession, what causes flies to be replaced primarily by beetles over time?' },
      { id: 'cue-2', prompt: 'What is the characteristic cooling rate of a human body during algor mortis?' },
      { id: 'cue-3', prompt: 'Describe the biochemical cause of rigor mortis.' }
    ],
    summaryText: 'Flies require a moisture-rich environment and leave as the dead tissue dries out; beetles remain because they can decompose dry tissue. During algor mortis, a body typically cools at a rate of 1.5–2.0°C per hour. Rigor mortis is caused by anaerobic respiration producing lactic acid, which drops pH and denatures ATP-producing enzymes; without ATP, myosin heads cannot detach from actin filaments, locking muscles in a stiffened state.'
  }
};
