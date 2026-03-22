export const note_biology_4_5_16 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Describe and explain primary and secondary succession." }
    },
    {
      id: "h-succession",
      type: "heading",
      data: { text: "Ecological Succession", level: 2 }
    },
    {
      id: "p-succession",
      type: "paragraph",
      data: { text: "Succession is the directional, predictable change in a community of organisms over time, from bare ground to a climax community." }
    },
    {
      id: "list-stages",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Pioneer species: The first species to colonise harsh, bare environments (e.g., lichens on bare rock). They are highly adapted to extreme abiotic conditions.",
          "Changing the environment: When pioneer species die, their decomposition adds humus (organic matter) to the ground, forming a basic soil.",
          "Successive colonsation: The newly formed soil retains water and nutrients, making the environment less hostile. New species with different competitive advantages colonise.",
          "Outcompeting: The new species outcompete the pioneer species. This process repeats, with biodiversity and biomass continually increasing.",
          "Climax Community: A stable, final community (often a mature woodland) that remains essentially unchanged unless disturbed."
        ]
      }
    },
    {
      id: "callout-secondary",
      type: "callout",
      data: { style: "key", title: "Secondary Succession", text: "Occurs on land that was previously inhabited and has soil already present (e.g., after a forest fire or agricultural clearance). It happens much faster because the soil and some seeds/spores are already there." }
    },
    {
      id: "p-deflected",
      type: "paragraph",
      data: { text: "Deflected succession/Plagioclimax: When human intervention (like mowing, grazing sheep, or controlled burning) prevents an ecosystem from reaching its natural climax community." }
    },
{ 'id': 'callout-examiner-c44c57cc', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': 'When discussing succession, clearly use the terms **pioneer species** and **climax community**. Highlight that as succession proceeds, soil depth increases and biodiversity usually increases until a stable climax community is reached.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-stages", prompt: "What is a pioneer species?" },
      { id: "cue-2", blockId: "list-stages", prompt: "How do pioneer species facilitate the arrival of new species?" },
      { id: "cue-3", blockId: "callout-secondary", prompt: "Why is secondary succession faster than primary succession?" }
    ],
    summaryText: "Succession starts with pioneer species on bare land, their decomposition creates soil, making the environment less hostile. Better competitors arrive and increase biodiversity until a stable climax community is reached. Secondary succession starts with soil already present.",
    ready: true
  },
  evidence: []
};