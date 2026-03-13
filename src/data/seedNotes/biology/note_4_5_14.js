export const note_biology_4_5_14 = {
  noteId: 'biology:4:5:14',
  blocks: [
    {
      type: 'objective',
      id: 'obj-gpp-npp',
      data: {
        text: 'Understand the concepts of Gross Primary Productivity (GPP) and Net Primary Productivity (NPP) and calculate them using the equation NPP = GPP - R.',
      },
    },
    {
      type: 'heading',
      id: 'h-gpp-npp',
      data: { text: 'Ecological Productivity (GPP and NPP)', level: 2 },
    },
    {
      type: 'list',
      id: 'list-gpp',
      data: {
        style: 'bullet',
        items: [
          '**Gross Primary Productivity (GPP)**: The total rate at which producers turn light energy into chemical energy (glucose) via photosynthesis.',
          '**Plant Respiration (R)**: Plants use roughly 90% of the energy they synthesise to fuel their own metabolic processes (respiration, active transport).',
          '**Net Primary Productivity (NPP)**: The rate at which energy is stored as plant biomass and available to the next trophic level.'
        ],
      },
    },
    {
      type: 'equation',
      id: 'eq-npp',
      data: {
        html: 'NPP = GPP − R',
        caption: 'Equation for Net Primary Productivity',
      },
    },
    {
      type: 'callout',
      id: 'callout-productivity-units',
      data: {
        style: 'warning',
        title: 'Units of Productivity',
        text: 'Productivity is a rate, so units must include time. Typical units are kJ m⁻² yr⁻¹ (kilojoules per square metre per year).',
      },
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-gpp', prompt: 'Define Gross Primary Productivity (GPP).' },
      { id: 'cue-2', blockId: 'eq-npp', prompt: 'What is the relationship between GPP, NPP, and R?' }
    ],
    summaryText: 'GPP is the total energy converted by plants; NPP is the energy remaining as biomass after subtracting respiratory losses (R). NPP is what is available to herbivores.',
    ready: true,
  },
  evidence: [],
  mentions: [],
};
