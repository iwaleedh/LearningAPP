export const note_olevel_biology_8_8_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/8 Transport In Plants/8-1-4-transpiration.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain the effects of light intensity, temperature, humidity, and wind speed on the rate of transpiration, and describe how a potometer is used to measure transpiration.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Factors Affecting Transpiration Rate', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The rate of transpiration depends on the <strong>concentration gradient of water vapour</strong> between inside the leaf and the surrounding air, and on whether the stomata are open or closed. Four key environmental factors affect this rate: light intensity, temperature, humidity, and wind speed.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Light Intensity', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>More light → faster transpiration.</strong> Light causes guard cells to open the stomata (for photosynthesis to occur). When stomata are open, water vapour can escape more rapidly. At night or in low light, stomata close and transpiration falls to nearly zero.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Temperature', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<strong>Higher temperature → faster transpiration.</strong> Heat gives water molecules more kinetic energy, increasing the rate of evaporation from leaf cell surfaces. Higher temperature also reduces the relative humidity of the air, steepening the water potential gradient between inside and outside the leaf.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Humidity', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: '<strong>Lower humidity → faster transpiration.</strong> If the air outside the leaf already contains a lot of water vapour (high humidity), the concentration gradient of water vapour between the leaf air spaces and the outside air is less steep, so diffusion is slower. Dry air (low humidity) maintains a steep gradient, speeding up transpiration.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Wind Speed', level: 3 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: '<strong>Higher wind speed → faster transpiration.</strong> Moving air carries water vapour away from the leaf surface, preventing a build-up of humid air near the stomata. This maintains a steep concentration gradient, so diffusion of water vapour out of the leaf is faster. In still air, a humid layer forms around the leaf, reducing the gradient.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Summary — factors affecting transpiration rate',
        headers: ['Factor', 'Change', 'Effect on transpiration rate', 'Explanation'],
        rows: [
          ['Light intensity', 'Increases', 'Faster', 'Stomata open wider → more water vapour escapes'],
          ['Temperature', 'Increases', 'Faster', 'More kinetic energy → faster evaporation; lower air humidity'],
          ['Humidity', 'Increases', 'Slower', 'Smaller water potential gradient between leaf and air'],
          ['Wind speed', 'Increases', 'Faster', 'Removes water vapour → maintains steep gradient'],
          ['Leaf area', 'Increases', 'Faster', 'More stomata → more water vapour can escape']
        ]
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'Measuring Transpiration — The Potometer', level: 2 }
    },
    {
      id: 'para-6',
      type: 'paragraph',
      data: {
        text: 'A <strong>potometer</strong> measures the <strong>rate of water uptake</strong> by a cut shoot, which is used as an estimate of the transpiration rate (assuming most water taken up is transpired). A bubble of air is introduced into the capillary tube; as the shoot transpires, water is drawn up and the bubble moves towards the shoot. The distance moved per minute is measured.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Potometer — Important Exam Points',
        text: 'A potometer measures <strong>water uptake</strong>, not directly transpiration — but we assume nearly all water absorbed is transpired.<br/>To ensure a fair test: cut the shoot underwater to prevent air bubbles blocking xylem; seal all joints airtight; allow the shoot to adjust before starting measurements.<br/>To increase transpiration rate in the experiment: use a fan (wind), use a lamp (light), increase temperature.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students often confuse <strong>humidity</strong> and <strong>wind</strong> effects. High humidity SLOWS transpiration (less gradient). High wind SPEEDS UP transpiration (removes vapour to maintain gradient). Both involve concentration gradients — but in opposite ways!'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Transpiration rate increases with: more light (stomata open), higher temperature (faster evaporation), lower humidity (steeper gradient), and higher wind speed (vapour removed). A potometer measures water uptake as a proxy for transpiration rate.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Transpiration is faster in brighter light, higher temperature, lower humidity, and higher wind speed. A potometer measures water uptake as a proxy for transpiration.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-4',
        prompt: 'Explain why low humidity increases the rate of transpiration.',
        answer: 'Low humidity means less water vapour in the air outside the leaf, so the concentration gradient of water vapour between the leaf and the air is steeper, increasing the rate of diffusion.'
      },
      {
        id: 'cue-2',
        blockId: 'para-5',
        prompt: 'Explain how wind speed affects the rate of transpiration.',
        answer: 'Moving air removes water vapour from near the stomata, maintaining a steep concentration gradient between the inside of the leaf and the air, so transpiration is faster.'
      },
      {
        id: 'cue-3',
        blockId: 'para-6',
        prompt: 'State what a potometer actually measures and explain why it is used as a measure of transpiration.',
        answer: 'A potometer measures the rate of water uptake by a cut shoot. It is used as a measure of transpiration because most water absorbed is lost by transpiration.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-1',
        prompt: 'State four factors that increase the rate of transpiration.',
        answer: 'Increased light intensity, increased temperature, decreased humidity, increased wind speed.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_8_8_2;
