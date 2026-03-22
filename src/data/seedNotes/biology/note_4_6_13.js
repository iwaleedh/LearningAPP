export const note_biology_4_6_13 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Investigate the effect of different antibiotics (or plant extracts) on bacterial growth using diffusion assays." }
    },
    {
      id: "h-cp14",
      type: "heading",
      data: { text: "Core Practical 14: Antibiotic Sensitivity", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "This practical uses the disc diffusion method to test how effective various antimicrobials are against a specific bacterium." }
    },
    {
      id: "list-method",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Seed the plate: Use aseptic technique to spread a known bacterial broth evenly over the surface of a sterile agar plate, creating a 'lawn'.",
          "Place discs: Soak paper discs in different antibiotics (or different concentrations of one antibiotic) and place them spaced out on the agar using sterile forceps. Include a control disc soaked in sterile water.",
          "Incubate: Tape the lid crosswise. Incubate upside down at ~25°C for 24-48 hours. Do not incubate at 37°C to avoid growing human pathogens.",
          "Measure: The antibiotic diffuses out of the disc. If it kills bacteria, a clear 'zone of inhibition' forms around the disc.",
          "Calculate: Measure the diameter of the clear zone and calculate its area (πr²). The larger the zone, the more effective the antibiotic."
        ]
      }
    },
    {
      id: "callout-controls",
      type: "callout",
      data: { style: "key", title: "Key Controls", text: "Control the volume/concentration of antibiotic on the discs, the size of the discs, the strain/concentration of bacteria used, the thickness of the agar, and the incubation time/temperature." }
    },
{ 'id': 'callout-examiner-a72c6832', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Zone of Inhibition', 'text': 'The larger the clear zone, the more effective the antimicrobial agent. Remember to measure the diameter using a ruler across the disc, ensuring you do not open the Petri dish fully.' } },
{ 'id': 'callout-examiner-5cf1b28d', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Incubation Temperature', 'text': 'For school practicals, incubation must be at 25°C, not 37°C, to avoid culturing human pathogens.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Comparing Inhibition Zones",
        text: "A larger zone of inhibition (clear area) indicates the antibiotic is more effective at killing the bacteria\u2014but remember this assumes both antibiotics diffuse through the agar at the same rate."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-method", prompt: "Why are school bacterial cultures incubated at 25°C rather than 37°C?" },
      { id: "cue-2", blockId: "list-method", prompt: "What does the 'zone of inhibition' represent?" },
      { id: "cue-3", blockId: "callout-controls", prompt: "Name three variables that must be controlled during the disc diffusion assay." }
    ],
    summaryText: "Core Practical 14 places antibiotic-soaked discs on a bacterial lawn. After incubation at 25°C, the chemical diffuses. A clear zone of inhibition indicates bacterial death. The area of the clear zone (πr²) indicates an antibiotic's effectiveness.",
    ready: true
  },
  evidence: []
};