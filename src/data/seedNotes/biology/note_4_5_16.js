export const note_biology_4_5_16 = {
  noteId: 'biology:4:5:16',
  blocks: [
    {
      type: 'objective',
      id: 'obj-succession',
      data: {
        text: 'Understand the process of primary succession, from pioneer species to a climax community, and how species change the abiotic conditions.',
      },
    },
    {
      type: 'heading',
      id: 'h-succession',
      data: { text: 'Ecological Succession', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-succession',
      data: {
        text: 'Succession is the directional, predictable change in species composition in a community over time. Primary succession occurs on newly formed, barren land (e.g. bare rock from a volcanic eruption).',
      },
    },
    {
      type: 'list',
      id: 'list-succession-stages',
      data: {
        style: 'numbered',
        items: [
          '**Pioneer Species**: Species like lichens or algae colonise the harsh bare rock. They are adapted to extreme conditions.',
          '**Changing the Environment**: As pioneers die and decompose, they add organic matter (humus) to the rock, slowly forming a thin soil that retains moisture.',
          '**Competition**: The improved abiotic conditions allow new species (e.g. mosses, then grasses/ferns) to establish. These new species outcompete the pioneers.',
          '**Increasing Biodiversity**: Over time, soil deepens, nutrient levels rise, and larger plants (shrubs, then trees) take hold, increasing biomass and biodiversity.',
          '**Climax Community**: The final, stable stage (often a forest) in equilibrium with the climate, experiencing very little change.'
        ],
      },
    },
    {
      type: 'callout',
      id: 'callout-deflected-succession',
      data: {
        style: 'tip',
        title: 'Deflected Succession (Plagioclimax)',
        text: 'Human activities, such as grazing sheep or mowing lawns, can halt succession artificially. The resulting stable community is called a plagioclimax.',
      },
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-succession-stages', prompt: 'Describe the role of pioneer species in primary succession.' },
      { id: 'cue-2', blockId: 'list-succession-stages', prompt: 'How does biodiversity change as succession progresses to a climax community?' }
    ],
    summaryText: 'Primary succession begins with pioneer species colonising bare land, altering abiotic conditions (building soil), and allowing successively larger species to outcompete them until a stable climax community forms.',
    ready: true,
  },
  evidence: [],
  mentions: [],
};
