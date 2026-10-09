/**
 * Seed note: Physics · Unit 3 · Topic 3A · Subtopic 0
 * "Planning, measuring and recording data"
 */

export const note_physics_3_3A_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Plan an investigation by identifying variables, choosing suitable instruments and techniques, and record data in a clear results table."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Planning an Investigation",
        "level": 2
      }
    },
    {
      "id": "tbl-variables",
      "type": "comparisonTable",
      "data": {
        "caption": "Types of variable",
        "headers": [
          "Variable",
          "Meaning",
          "Example (pendulum period)"
        ],
        "rows": [
          [
            "Independent",
            "The quantity you deliberately change",
            "Length of the pendulum"
          ],
          [
            "Dependent",
            "The quantity you measure",
            "Time period T"
          ],
          [
            "Control",
            "Quantities kept constant so the test is fair",
            "Mass of bob, amplitude of swing (small angle)"
          ]
        ]
      }
    },
    {
      "id": "h-instruments",
      "type": "heading",
      "data": {
        "text": "Choosing Instruments",
        "level": 2
      }
    },
    {
      "id": "tbl-instruments",
      "type": "comparisonTable",
      "data": {
        "caption": "Common instruments and their resolution",
        "headers": [
          "Instrument",
          "Typical resolution",
          "Use for"
        ],
        "rows": [
          [
            "Metre rule",
            "1 mm",
            "Lengths above about 10 cm"
          ],
          [
            "Vernier calliper",
            "0.1 mm (0.01 cm)",
            "Diameters and short lengths, 1–10 cm"
          ],
          [
            "Micrometer screw gauge",
            "0.01 mm",
            "Wire diameters and thin sheets"
          ],
          [
            "Stopwatch",
            "0.01 s (but human reaction ≈ 0.2 s)",
            "Timing events longer than a few seconds"
          ],
          [
            "Digital multimeter",
            "Last digit on display",
            "Current, potential difference, resistance"
          ]
        ]
      }
    },
    {
      "id": "key-techniques",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Techniques That Improve Measurements",
        "text": "• Time many oscillations (e.g. 10) and divide, to reduce the effect of reaction time.\n• Use a fiducial marker at the centre of the oscillation.\n• Read scales at eye level to avoid parallax error.\n• Check for zero error on callipers and micrometers before measuring.\n• Measure a diameter at several points and orientations and average."
      }
    },
    {
      "id": "h-recording",
      "type": "heading",
      "data": {
        "text": "Recording Data",
        "level": 2
      }
    },
    {
      "id": "list-recording",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Column headings must show the <strong>quantity and unit</strong>, e.g. <em>l / m</em> or <em>t / s</em>."
          },
          {
            "text": "Record raw readings to the <strong>resolution of the instrument</strong> — be consistent within a column."
          },
          {
            "text": "Take <strong>repeat readings</strong> and calculate a mean; include a column for derived quantities such as T²."
          },
          {
            "text": "Aim for at least <strong>six values</strong> of the independent variable over as wide a range as possible."
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Safety",
        "text": "Always include a relevant safety precaution in a plan — e.g. clamp stands secured to the bench, goggles when stretching wires, and keeping fingers clear of masses that could fall."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Identify independent, dependent and control variables",
            "checked": false
          },
          {
            "text": "Choose an instrument with suitable resolution",
            "checked": false
          },
          {
            "text": "Draw up a results table with units and repeats",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Plan by identifying independent, dependent and control variables, choosing instruments with suitable resolution and using techniques that reduce uncertainty. Record raw data with quantity/unit headings, consistent precision, repeats and a wide range of values."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Plan by identifying independent, dependent and control variables, choosing instruments with suitable resolution and using techniques that reduce uncertainty. Record raw data with quantity/unit headings, consistent precision, repeats and a wide range of values.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-variables",
        "prompt": "Define independent, dependent and control variables.",
        "answer": "Independent: changed deliberately; dependent: measured; control: kept constant for a fair test."
      },
      {
        "id": "cue-2",
        "blockId": "tbl-instruments",
        "prompt": "Which instrument would you use to measure the diameter of a wire, and what is its resolution?",
        "answer": "A micrometer screw gauge, resolution 0.01 mm."
      },
      {
        "id": "cue-3",
        "blockId": "key-techniques",
        "prompt": "Why should you time 10 oscillations rather than one?",
        "answer": "It reduces the percentage uncertainty caused by reaction time."
      }
    ]
  },
  "evidence": []
};

export default note_physics_3_3A_0;
