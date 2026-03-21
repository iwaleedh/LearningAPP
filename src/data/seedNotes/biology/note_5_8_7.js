export const note_biology_5_8_7 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Compare the use of MRI, fMRI, PET, and CT scans in diagnosing brain disorders." }
    },
    {
      id: "h-scans",
      type: "heading",
      data: { text: "Brain Imaging Techniques", level: 2 }
    },
    {
      id: "list-scans",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "CT Scan (Computed Tomography): Uses 1000s of X-rays to visualize physical brain structures. Advantages: Shows bleeding, bone injuries, large tumors easily. Disadvantages: Uses ionizing radiation (cancer risk); low resolution for soft tissue; shows structure, not function.",
          "MRI (Magnetic Resonance Imaging): Uses powerful magnetic fields and radio waves to align hydrogen nuclei. Advantages: Superior high-resolution 3D images of soft tissues; no ionizing radiation. Disadvantages: High cost, claustrophobic, shows structure only.",
          "fMRI (Functional MRI): Monitors changes in blood oxygenation in the brain in real-time. Active brain areas require more oxygen. Advantages: Shows brain activity dynamically over time as patients perform tasks. High resolution.",
          "PET Scan (Positron Emission Tomography): Involves injecting a radioactive tracer (often radioactive glucose). Active brain regions rapidly absorb the glucose, emitting positrons that are mapped. Advantages: Extremely detailed functional data; great for Alzheimer's or cancer mapping."
        ]
      }
    },
{ 'id': 'callout-examiner-2a4fc551', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-scans", prompt: "Which imaging technique uses X-rays and poses a slight cancer risk?" },
      { id: "cue-2", blockId: "list-scans", prompt: "How does fMRI determine which parts of the brain are 'active'?" },
      { id: "cue-3", blockId: "list-scans", prompt: "Why is a radioactive glucose tracer used in PET scanning?" }
    ],
    summaryText: "CT uses X-rays for basic structural imaging. MRI uses magnets for high-quality soft tissue structures. fMRI tracks blood oxygenation to show dynamic real-time brain function. PET uses radioactive glucose to map high-metabolism actively areas.",
    ready: true
  },
  evidence: []
};