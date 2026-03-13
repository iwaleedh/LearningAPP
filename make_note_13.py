import json

note = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": { "text": "Understand the role of the hormone adrenaline in the 'fight or flight' response." }
    },
    {
      "id": "h-adrenaline",
      "type": "heading",
      "data": { "text": "The Fight or Flight Response", "level": 2 }
    },
    {
      "id": "p-adrenal",
      "type": "paragraph",
      "data": { "text": "During situations of stress, fear, or excitement, the sympathetic nervous system stimulates the **adrenal medulla** (the inner part of the adrenal glands) to secrete the hormone **adrenaline** into the bloodstream." }
    },
    {
      "id": "list-adrenaline",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Adrenaline travels through the blood and binds to receptors on specific target organs, initiating the 'fight or flight' response.",
          "It binds to the **SAN**, directly increasing the frequency of electrical excitation, thus speeding up the heart rate.",
          "It also stimulates the **cardiovascular control centre** in the medulla oblongata to reinforce sympathetic stimulation to the heart.",
          "This increases blood flow to muscles, supplying them with more $O_2$ and glucose for a higher rate of aerobic respiration to produce ATP for muscle contraction.",
          "Blood vessels to non-essential organs (like the skin and digestive system) **constrict** to divert blood toward the muscles."
        ]
      }
    },
    {
      "id": "callout-brain",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Examiner Tip: Brain Blood Flow",
        "text": "Note that blood flow to the brain remains **constant**, regardless of whether the body is in a state of stress or relaxation, as the brain must always receive a strict, continuous supply of oxygen and glucose."
      }
    },
    {
      "id": "summary-adrenaline",
      "type": "summary",
      "data": { "text": "Adrenaline works alongside the sympathetic nervous system to prepare the body for action. By directly accelerating the SAN and diverting blood flow from the digestive system to the skeletal muscles, it ensures a massive influx of oxygen and glucose is available to sustain rapid aerobic respiration in fight or flight scenarios." }
    }
  ],
  "recall": {
    "enabled": True,
    "cues": [
      { "id": "c1", "blockId": "p-adrenal", "prompt": "Which gland secretes adrenaline into the blood?" },
      { "id": "c2", "blockId": "list-adrenaline", "prompt": "State two distinct ways adrenaline acts to increase heart rate." },
      { "id": "c3", "blockId": "list-adrenaline", "prompt": "How does the distribution of blood change during the fight or flight response?" }
    ],
    "summaryText": "The adrenal medulla secretes adrenaline during stress. It increases heart rate directly at the SAN and via the cardiovascular centre, whilst constricting vessels to non-essential organs to divert heavily oxygenated blood to the working muscles.",
    "ready": True
  }
}

with open('src/data/seedNotes/biology/note_5_7_13.js', 'w') as f:
    f.write('export const note_biology_5_7_13 = ' + json.dumps(note, indent=2) + ';\n')
