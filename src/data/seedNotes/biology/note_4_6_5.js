export const note_biology_4_6_5 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the biological basis of Tuberculosis (TB) and HIV infection." }
    },
    {
      id: "h-tb",
      type: "heading",
      data: { text: "Tuberculosis (TB)", level: 2 }
    },
    {
      id: "p-tb",
      type: "paragraph",
      data: { text: "TB is caused by the bacterium Mycobacterium tuberculosis. It infects phagocytes (macrophages) in the lungs." }
    },
    {
      id: "list-tb",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Infection: M. tuberculosis is engulfed by lung macrophages.",
          "Survival: The bacteria have a thick, waxy coat that allows them to survive inside macrophages, resisting digestion by lysosomes.",
          "Dormancy: The immune system forms tight nodules called tubercles around the infected macrophages. The bacteria remain dormant inside.",
          "Activation: If the immune system weakens, the bacteria break out of the tubercles, multiply rapidly, and destroy lung tissue, causing severe coughing, bloody sputum, and eventually death if untreated."
        ]
      }
    },
    {
      id: "h-hiv",
      type: "heading",
      data: { text: "Human Immunodeficiency Virus (HIV)", level: 2 }
    },
    {
      id: "p-hiv",
      type: "paragraph",
      data: { text: "HIV is a retrovirus (contains RNA and reverse transcriptase) that destroys T helper cells." }
    },
    {
      id: "list-hiv",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Attachment: HIV attachment proteins bind to CD4 receptors on the surface of T helper cells.",
          "Replication: The virus injects its RNA. Reverse transcriptase copies the RNA into DNA, which is integrated into the host's chromosome by integrase.",
          "Lysis: The host cell machinery produces new viral proteins and RNA. New viruses assemble and burst out (lysis), destroying the T helper cell.",
          "AIDS: As T helper cell numbers crash, the patient's immune system fails. They develop Acquired Immune Deficiency Syndrome (AIDS) and die from opportunistic infections (like TB or pneumonia)."
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-tb", prompt: "How does M. tuberculosis survive inside the body during its dormant phase?" },
      { id: "cue-2", blockId: "list-hiv", prompt: "Which exact cell type does HIV infect, and which receptor is involved?" },
      { id: "cue-3", blockId: "list-hiv", prompt: "What leads to the development of AIDS?" }
    ],
    summaryText: "TB bacteria survive digestion inside lung macrophages by entering a dormant state within tubercles. HIV attaches to CD4 on T helper cells, uses reverse transcriptase to insert its genome, and bursts the cells, eventually causing AIDS via T-cell depletion.",
    ready: true
  },
  evidence: []
};