export const note_biology_4_6_6 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Know the main routes pathogens use to enter the body and the physical barriers that prevent them." }
    },
    {
      id: "h-entry",
      type: "heading",
      data: { text: "Pathogen Entry Routes", level: 2 }
    },
    {
      id: "p-entry",
      type: "paragraph",
      data: { text: "A pathogen is any microorganism that causes disease. To trigger an infection, they must bypass the body's primary defenses and enter the tissues or bloodstream." }
    },
    {
      id: "list-routes",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Respiratory system: Inhaling droplet nuclei containing pathogens (e.g., influenza, TB).",
          "Gastrointestinal tract: Ingesting contaminated food or water (e.g., Salmonella, cholera).",
          "Skin: Normally impermeable, but pathogens can enter through cuts, wounds, or insect bites (e.g., malaria via mosquitoes).",
          "Mucous membranes: The delicate tissues lining the nose, eyes, and genitals."
        ]
      }
    },
    {
      id: "h-barriers",
      type: "heading",
      data: { text: "Primary Physical, Chemical, and Biological Barriers", level: 2 }
    },
    {
      id: "list-barriers",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Skin: Acts as a tough physical barrier composed of dry dead cells containing keratin.",
          "Skin Flora: Harmless bacteria on the skin outcompete pathogenic bacteria for space and nutrients.",
          "Stomach Acid: Hydrochloric acid in the stomach (pH ~2) denatures pathogen enzymes and destroys them.",
          "Lysozyme: An antibacterial enzyme found in tears, saliva, and nasal secretions that digests the peptidoglycan cell walls of bacteria.",
          "Mucus and Cilia: Goblet cells secrete mucus to trap inhaled particles. Ciliated epithelial cells waft the mucus up to the throat to be swallowed."
        ]
      }
    },
{ 'id': 'callout-examiner-25b5106c', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Non-Specific vs Specific Pathways', 'text': 'Remember that barriers to entry (like the skin, stomach acid, and lysozyme enzymes in tears) constitute the **non-specific**, primary lines of defence. They prevent infection from a vast array of pathogens, regardless of their specific antigens.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Lysozyme is an Enzyme",
        text: "Lysozyme is found in tears, saliva, and sweat. It works by breaking down the peptidoglycan cell walls of bacteria. It is NOT an antibody and it is a non-specific defence."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-routes", prompt: "Name three routes by which a pathogen can enter the body." },
      { id: "cue-2", blockId: "list-barriers", prompt: "How does the skin flora prevent infection?" },
      { id: "cue-3", blockId: "list-barriers", prompt: "What is the function of lysozyme, and where is it found?" }
    ],
    summaryText: "Pathogens enter via respiratory, GI, or broken skin routes. Primary defenses include the physical skin barrier, competitive skin flora, lethal stomach acid, cell-wall destroying lysozyme in tears, and mucus/cilia in airways.",
    ready: true
  },
  evidence: []
};