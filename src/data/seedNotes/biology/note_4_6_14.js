export const note_biology_4_6_14 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand how the extent of decomposition can be used to estimate the time of death.' }
    },
    {
      id: 'h-decomp',
      type: 'heading',
      data: { text: 'Extent of Decomposition', level: 2 }
    },
    {
      id: 'p-decomp',
      type: 'paragraph',
      data: { text: 'The process of decomposition begins soon after death and is carried out by decomposer organisms such as bacteria and fungi. These organisms secrete enzymes that break down the biological molecules in dead tissue.' }
    },
    {
      id: 'h-stages',
      type: 'heading',
      data: { text: 'Stages of Decomposition', level: 3 }
    },
    {
      id: 'list-stages',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**A few days:** Decomposers break down individual cells and tissues. Discoloration occurs; the skin often appears greenish in colour.',
          '**A few days to weeks:** Further breakdown of tissues and organs by micro-organisms produces gases such as methane. This leads to **bloating** of the body.',
          '**Weeks:** The skin will blister and may fall off. The remaining soft tissues will turn to liquid, which becomes visible as it leaves the body.',
          '**Months or years:** This process continues until only a skeleton remains.',
          '**Decades or centuries:** The skeleton will eventually disintegrate until nothing remains.'
        ]
      }
    },
    {
      id: 'h-rates',
      type: 'heading',
      data: { text: 'Factors Affecting Decomposition Rate', level: 3 }
    },
    {
      id: 'p-rates',
      type: 'paragraph',
      data: { text: 'The rate at which a body decomposes is not constant and is significantly affected by environmental conditions:' }
    },
    {
      id: 'list-rates',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Temperature:** High temperatures speed up the rate of enzyme action, accelerating decomposition. Cold temperatures slow it down.',
          '**Oxygen availability:** Decomposition is slower in anaerobic conditions (such as underwater or buried deep in soil) because aerobic decomposers cannot function effectively.'
        ]
      }
    },
    {
      id: 'callout-tod',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Estimating Time of Death (TOD)',
        text: 'Because decomposition follows a predictable set of visual and physical stages, forensic scientists can often estimate the time since death by observing the appearance of the decomposing body. However, knowing the environmental conditions is crucial to calculate an accurate estimation.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Which organisms carry out decomposition on a dead body?' },
      { id: 'cue-2', prompt: 'What causes a dead body to undergo bloating during decomposition?' },
      { id: 'cue-3', prompt: 'Name two environmental factors that affect the rate of decomposition.' }
    ],
    summaryText: 'Decomposition is carried out by bacteria and fungi that secrete enzymes. Bloating is caused by the breakdown of tissues producing gases such as methane. The rate of decomposition is affected by temperature (higher temperature = faster breakdown) and oxygen availability (anaerobic conditions slow down decomposition).'
  }
};
