export const note_biology_4_6_12 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand the codes of practice regarding antibiotic prescription and preventing hospital-acquired infections (HCAIs)." }
    },
    {
      id: "h-prescription",
      type: "heading",
      data: { text: "Antibiotic Prescription Codes of Practice", level: 2 }
    },
    {
      id: "p-intro",
      type: "paragraph",
      data: { text: "To slow the spread of antibiotic resistance, doctors follow strict guidelines when prescribing antibiotics." }
    },
    {
      id: "list-prescribe",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Only prescribe when necessary: Do not give antibiotics for minor or viral infections.",
          "Narrow-spectrum: Use specific, narrow-spectrum antibiotics based on a lab culture, rather than broad-spectrum antibiotics.",
          "Complete the course: Patients must finish the full course to ensure all bacteria (even the slightly resistant ones) are killed.",
          "Rotate antibiotics: Different antibiotics should be rotated to prevent a single resistance allele from becoming dominant.",
          "Restrict agricultural use: Stop the prophylactic use of antibiotics in healthy farm livestock."
        ]
      }
    },
    {
      id: "h-hcai",
      type: "heading",
      data: { text: "Hospital Acquired Infections (HCAIs)", level: 2 }
    },
    {
      id: "p-hcai",
      type: "paragraph",
      data: { text: "HCAIs (like MRSA or C. difficile) are caught by patients while in a hospital. Hospitals are hotspots because many patients have weakened immune systems and are surrounded by diverse pathogenic flora/antibiotics." }
    },
    {
      id: "list-prevention",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Hand-washing: Strict hand hygiene regimens for staff between every patient using alcohol gel or soap.",
          "Isolation: Placing infected patients in isolated wards to stop transmission.",
          "Sterilization: Deep cleaning of wards, beds, and equipment.",
          "Screening: Swabbing new patients for MRSA before they enter wards."
        ]
      }
    },
{ 'id': 'callout-examiner-d5f3b3c1', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Completing the Course', 'text': 'In exam answers, explain that completing the antibiotic course ensures that highly resistant bacteria are killed and cannot survive to reproduce.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "The Bacteria are Resistant",
        text: "Never write that the 'patient has become resistant' or 'immune' to the antibiotic. It is the *bacteria* that have acquired the resistance allele allowing them to survive the antibiotic."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-prescribe", prompt: "Why is it important for patients to finish their entire course of antibiotics?" },
      { id: "cue-2", blockId: "list-prescribe", prompt: "Why should broad-spectrum antibiotics be avoided if a narrow-spectrum alternative exists?" },
      { id: "cue-3", blockId: "list-prevention", prompt: "List three strategies hospitals use to prevent the spread of MRSA." }
    ],
    summaryText: "Antibiotic resistance is slowed by avoiding viral prescriptions, using narrow-spectrum drugs, finishing the course, and restricting agricultural use. Hospital infections (HCAIs) are combated via strict hand-washing, isolating infected patients, and screening new arrivals.",
    ready: true
  },
  evidence: []
};