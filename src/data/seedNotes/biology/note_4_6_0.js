export const note_biology_4_6_0 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand how to culture microorganisms and the aseptic techniques required." }
    },
    {
      id: "h-culturing",
      type: "heading",
      data: { text: "Culturing Microorganisms", level: 2 }
    },
    {
      id: "p-culture",
      type: "paragraph",
      data: { text: "To study microorganisms like bacteria and fungi, they must be grown (cultured) in a lab. They require a culture medium containing carbohydrates for energy, nitrogen for protein synthesis, plus essential minerals and vitamins." }
    },
    {
      id: "list-media",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Nutrient Broth: A liquid medium used to grow large volumes of bacteria.",
          "Agar Plates: A solid medium made by adding agar to nutrient broth and pouring it into Petri dishes. Used to grow visible colonies."
        ]
      }
    },
    {
      id: "h-aseptic",
      type: "heading",
      data: { text: "Aseptic Techniques", level: 2 }
    },
    {
      id: "p-aseptic",
      type: "paragraph",
      data: { text: "Aseptic technique involves practices that prevent the contamination of the culture by unwanted environmental microbes, and protect the experimenter from potential pathogens." }
    },
    {
      id: "list-aseptic",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Work near a Bunsen burner flame: Convection currents lift microbes away from the working area.",
          "Sterilise equipment: Pass innoculating loops through a roaring blue flame until glowing red hot.",
          "Minimise exposure: Keep lids on Petri dishes as much as possible; hold lids at an angle when inoculating.",
          "Flaming the neck: Pass the neck of broth bottles through the flame when opening and closing to prevent airborne microbes from settling.",
          "Taping the dish: Tape the Petri dish cross-wise (not fully sealed, to prevent the growth of dangerous anaerobic bacteria)."
        ]
      }
    },
{ 'id': 'callout-examiner-6e0c2f3b', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Aseptic Techniques vs Sterile', 'text': 'Students often confuse the terms **aseptic** and **sterile**. Aseptic technique aims to *prevent contamination* from undesired microorganisms, whereas sterile means *completely free* of all living microorganisms. You should always refer to \'aseptic technique\' when describing lab procedures.' } },
{ 'id': 'callout-examiner-480b80db', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Incubation Temperature', 'text': 'Remember that in school and college laboratories, microbial cultures must not be incubated at 37 °C (human body temperature). This prevents the growth of human pathogens. They are typically cultured at around 25 °C or a maximum of 30 °C.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Sterilisation Etiquette",
        text: "Pass the inoculating loop through a roaring Bunsen flame until red hot. Do NOT place it down on the bench to cool; hold it near the flame to prevent contamination from the air."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-culture", prompt: "What basic nutrients must a culture medium contain?" },
      { id: "cue-2", blockId: "list-aseptic", prompt: "Why should you work near a Bunsen burner when culturing bacteria?" },
      { id: "cue-3", blockId: "list-aseptic", prompt: "Why must a Petri dish not be fully sealed with tape?" }
    ],
    summaryText: "Microorganisms require a nutrient-rich medium (broth or agar). Aseptic techniques (Bunsen updraft, flaming loops, partial taping) prevent contamination and the growth of dangerous anaerobic pathogens.",
    ready: true
  },
  evidence: []
};