export const note_biology_5_7_21 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Core Practical 17: Investigate the effects of exercise on tidal volume, breathing rate, respiratory minute ventilation, and oxygen consumption using spirometer data."
      }
    },
    {
      "id": "h-spirometer",
      "type": "heading",
      "data": {
        "text": "Measuring Breathing with a Spirometer",
        "level": 2
      }
    },
    {
      "id": "p-spiro",
      "type": "paragraph",
      "data": {
        "text": "A **spirometer** is an apparatus used to measure different aspects of lung volumes and breathing rates. The subject breathes in and out through the spirometer. A chamber of oxygen moves up and down as they breathe, drawing a trace on a rotating kymograph or a digital computer."
      }
    },
    {
      "id": "p-sodalime",
      "type": "paragraph",
      "data": {
        "text": "**Soda lime** is used within the set-up to absorb the carbon dioxide exhaled by the subject. This prevents the CO\u2082 concentration in the rebreathed air from becoming dangerously high."
      }
    },
    {
      "id": "table-defs",
      "type": "comparisonTable",
      "data": {
        "caption": "Key Respiratory Definitions",
        "headers": [
          "Term",
          "Definition",
          "How to calculate from trace"
        ],
        "rows": [
          [
            "**Breathing Rate**",
            "Number of breaths taken in one minute.",
            "Count the number of peaks (breaths) present in a 60-second window."
          ],
          [
            "**Tidal Volume**",
            "Volume of air breathed in/out during normal resting breathing.",
            "Calculate the vertical distance (volume) between the peak and trough of a single resting breath."
          ],
          [
            "**Respiratory Minute Ventilation**",
            "Total volume of air breathed in/out in one minute.",
            "Tidal Volume $\\times$ Breathing Rate."
          ],
          [
            "**Oxygen Consumption**",
            "Volume of oxygen used up by the subject per minute.",
            "Measure the drop in the overall baseline of the trace over a minute (since $CO_2$ is absorbed, the volume loss is pure $O_2$ consumed)."
          ]
        ]
      }
    },
    {
      "id": "h-investigate",
      "type": "heading",
      "data": {
        "text": "Investigating Exercise",
        "level": 2
      }
    },
    {
      "id": "list-method",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "A person at rest breathes into the spirometer for one minute. The resting trace is recorded.",
          "The person is disconnected from the spirometer and exercises (e.g. on a treadmill) for a set time (e.g. 2 minutes).",
          "Meanwhile, the spirometer chamber is refilled with pure oxygen.",
          "Immediately after exercise stops, the person connects back to the spirometer and breathes into it for another minute.",
          "The pre-exercise and post-exercise traces are compared: breathing rate and tidal volume will both be visibly higher on the post-exercise trace."
        ]
      }
    },
    {
      "id": "callout-trace",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Analysing Oxygen Consumption",
        "text": "Because soda lime absorbs the exhaled $CO_2$, the total volume of gas inside the spirometer steadily falls over time. This creates a downward-sloping trace. The gradient of this slope (Volume fallen $\\div$ Time) gives the rate of **oxygen consumption**."
      }
    },
    {
      "id": "summary-cp17",
      "type": "summary",
      "data": {
        "text": "A spirometer trace accurately reveals tidal volume (depth of a breath) and breathing rate (frequency of breaths). Multiplying these yields the respiratory minute ventilation. Exercise increases the metabolic demand for ATP, driving up oxygen consumption and requiring a greater minute ventilation to clear accumulating carbon dioxide."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "c1",
        "blockId": "p-sodalime",
        "prompt": "Why is soda lime used in a spirometer?"
      },
      {
        "id": "c2",
        "blockId": "table-defs",
        "prompt": "State the formula for respiratory minute ventilation."
      },
      {
        "id": "c3",
        "blockId": "callout-trace",
        "prompt": "How is oxygen consumption calculated from a spirometer trace containing soda lime?"
      }
    ],
    "summaryText": "Soda lime absorbs exhaled CO\u2082, making the overall loss in spirometer volume exactly equal to the oxygen consumed. Tidal volume multiplied by breathing rate gives the minute ventilation, which spikes markedly after exercise to restore blood pH and oxygenate tissues.",
    "ready": true
  }
};
