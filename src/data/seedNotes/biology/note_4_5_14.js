export const note_biology_4_5_14 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Calculate Net Primary Productivity (NPP) from Gross Primary Productivity (GPP) and plant respiration (R)." }
    },
    {
      id: "h-gpp-npp-focus",
      type: "heading",
      data: { text: "Primary Productivity Calculations", level: 2 }
    },
    {
      id: "p-recap",
      type: "paragraph",
      data: { text: "Primary productivity is the rate at which energy is converted into organic substances by photosynthetic producers. It is typically measured in units like kJ m⁻² yr⁻¹." }
    },
    {
      id: "callout-eq1",
      type: "callout",
      data: { style: "key", title: "NPP Equation", text: "NPP = GPP - R" }
    },
    {
      id: "h-secondary",
      type: "heading",
      data: { text: "Secondary Productivity (Consumers)", level: 2 }
    },
    {
      id: "p-secondary",
      type: "paragraph",
      data: { text: "Just as plants have primary productivity, consumers have secondary productivity. Net Secondary Productivity (NSP) is the energy stored in the consumer's biomass available to the next trophic level." }
    },
    {
      id: "callout-eq2",
      type: "callout",
      data: { style: "worked", title: "Secondary Productivity Equation", text: "NSP = I - (F + R)\nWhere I is chemical energy in ingested food, F is chemical energy lost in faeces and urine, and R is respiratory losses." }
    },
{ 'id': 'callout-examiner-3c043763', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': 'Be prepared to use the equation **NPP = GPP - R**. Sometimes exam questions will give you values in standard form or ask you to calculate the percentage efficiency; always check the units carefully.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "callout-eq1", prompt: "What does NPP = GPP - R mean?" },
      { id: "cue-2", blockId: "callout-eq2", prompt: "How do you calculate net production for a consumer (NSP)?" }
    ],
    summaryText: "NPP is the energy available for plant growth (GPP minus respiration). For consumers, Net Secondary Productivity (NSP) is the ingested energy minus energy lost in faeces/urine and respiration.",
    ready: true
  },
  evidence: []
};