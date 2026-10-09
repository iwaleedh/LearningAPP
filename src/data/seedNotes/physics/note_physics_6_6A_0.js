/**
 * Seed note: Physics · Unit 6 · Topic 6A · Subtopic 0
 * "Advanced measurement and instrumentation techniques"
 */

export const note_physics_6_6A_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Select and use advanced instruments — data loggers, light gates, oscilloscopes and sensors — and explain how they improve accuracy and precision."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Beyond Rulers and Stopwatches",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Unit 6 investigations often involve quantities that change quickly or are very small. Electronic instruments remove human reaction time, record many readings per second and allow measurements that would otherwise be impossible."
      }
    },
    {
      "id": "tbl-instruments",
      "type": "comparisonTable",
      "data": {
        "caption": "Advanced instruments",
        "headers": [
          "Instrument",
          "Measures",
          "Advantage"
        ],
        "rows": [
          [
            "Light gate + data logger",
            "Time for a card to pass; speed and acceleration",
            "No reaction-time error; high time resolution"
          ],
          [
            "Oscilloscope",
            "Voltage against time; period and peak voltage of a.c. signals",
            "Displays rapidly changing signals; time-base sets s/div"
          ],
          [
            "Data logger with sensors",
            "Temperature, pressure, current, voltage over time",
            "Large data sets recorded automatically at a set rate"
          ],
          [
            "Travelling microscope",
            "Very small distances (e.g. ring diameters)",
            "Fine resolution, often 0.01 mm"
          ],
          [
            "Ratemeter/GM tube",
            "Count rate of radiation",
            "Counts over long periods; background can be subtracted"
          ]
        ]
      }
    },
    {
      "id": "worked-osc",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Reading an Oscilloscope",
        "text": "A trace shows one full wave occupying 4.0 divisions. Time-base = 2 ms/div.\nPeriod T = 4.0 × 2 ms = 8.0 ms → f = 1/T = 125 Hz\nPeak height 3.0 divisions, Y-gain 5 V/div → peak voltage = 15 V"
      }
    },
    {
      "id": "key-accuracy",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Accuracy vs Precision",
        "text": "An <strong>accurate</strong> measurement is close to the true value. A <strong>precise</strong> set of measurements has little spread. Resolution is the smallest change an instrument can detect. Electronic instruments improve precision; calibration is needed for accuracy."
      }
    },
    {
      "id": "h-radiation",
      "type": "heading",
      "data": {
        "text": "Radiation Measurements",
        "level": 2
      }
    },
    {
      "id": "p-radiation",
      "type": "paragraph",
      "data": {
        "text": "Radioactive decay is random, so count for a long time (or repeat) and subtract the <strong>background count rate</strong>, measured with the source removed. Larger counts have smaller percentage uncertainty."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Sampling Rate",
        "text": "Set a data logger's sampling rate high enough to capture the change — e.g. many readings per second for a falling object, but one every few seconds for cooling."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Choose a suitable advanced instrument for a measurement",
            "checked": false
          },
          {
            "text": "Read period and peak voltage from an oscilloscope trace",
            "checked": false
          },
          {
            "text": "Explain accuracy, precision and resolution",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Light gates, data loggers, oscilloscopes, travelling microscopes and GM tubes remove reaction time and record rapid or tiny changes. Read oscilloscope period from the time-base and voltage from the Y-gain; subtract background in radiation work; distinguish accuracy, precision and resolution."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Light gates, data loggers, oscilloscopes, travelling microscopes and GM tubes remove reaction time and record rapid or tiny changes. Read oscilloscope period from the time-base and voltage from the Y-gain; subtract background in radiation work; distinguish accuracy, precision and resolution.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "worked-osc",
        "prompt": "One wave covers 4.0 divisions at 2 ms/div. Calculate the frequency.",
        "answer": "T = 8.0 ms, so f = 125 Hz."
      },
      {
        "id": "cue-2",
        "blockId": "key-accuracy",
        "prompt": "Distinguish accuracy and precision.",
        "answer": "Accuracy: close to the true value. Precision: little spread between repeated readings."
      },
      {
        "id": "cue-3",
        "blockId": "p-radiation",
        "prompt": "Why must background count rate be subtracted in radioactivity experiments?",
        "answer": "Background radiation adds counts not from the source, which would make the measured count rate too high."
      }
    ]
  },
  "evidence": []
};

export default note_physics_6_6A_0;
