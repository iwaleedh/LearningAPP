export const note_biology_2_4_5 = {
  "blocks": [
    {
      "id": "obj-6",
      "type": "objective",
      "data": {
        "text": "Describe how drugs are tested, comparing historical methods (William Withering) with contemporary clinical trials."
      }
    },
    {
      "id": "h-william",
      "type": "heading",
      "data": {
        "text": "William Withering and Foxglove",
        "level": 2
      }
    },
    {
      "id": "p-william",
      "type": "paragraph",
      "data": {
        "text": "In the 18th century, William Withering discovered that an extract of foxglove (containing digitalis) successfully treated dropsy (fluid accumulation due to heart failure). His testing method was precarious: he gave a standard crude extract recipe to a patient, and adjusted the dosage up or down based on dangerous side effects until he found the optimal dose."
      }
    },
    {
      "id": "h-modern",
      "type": "heading",
      "data": {
        "text": "Modern Clinical Drug Trials",
        "level": 2
      }
    },
    {
      "id": "list-modern",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Pre-clinical testing: The drug is tested on isolated human cells/tissues in the lab and then on live animals to check for toxicity and rough efficacy.",
          "Phase I: Tested on a small group of healthy human volunteers to determine safe dosage levels, monitor side effects, and see how the body metabolises the drug.",
          "Phase II: Tested on a small group of volunteer patients who HAVE the disease/condition. Efficacy starts to be monitored against safety.",
          "Phase III: A large-scale trial involving hundreds or thousands of patients. It uses a double-blind protocol with a placebo."
        ]
      }
    },
    {
      "id": "h-db",
      "type": "heading",
      "data": {
        "text": "The Double-Blind Placebo Protocol",
        "level": 3
      }
    },
    {
      "id": "p-db",
      "type": "paragraph",
      "data": {
        "text": "In Phase III, patients are randomly split into two groups. One receives the active drug, the other receives a placebo (an inactive dummy pill/treatment). A \"double-blind\" trial means that neither the patients nor the administering doctors know who is receiving which. This removes bias (both psychological placebo effects in patients and subconscious bias in doctors analysing data)."
      }
    },
{ 'id': 'callout-examiner-ef2ef945', 'type': 'callout', 'data': { 'style': 'tip', 'title': 'The Purpose of Phase 1', 'text': 'Examiners specifically look for the phrase \'healthy volunteers\' in Phase 1 trials. Its main purpose is to test for safety, side effects, and safe dosage, not efficacy.' } },
{ 'id': 'callout-examiner-78f4ce70', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Placebo vs Double-Blind', 'text': 'Do not mix up these terms. A placebo is a dummy drug used as a control. A double-blind trial means neither the patient nor the doctor knows who receives the drug or placebo, which removes observer bias.' } }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-modern",
        "prompt": "What is the purpose of Phase I testing, and who are the subjects?"
      },
      {
        "id": "cue-2",
        "blockId": "p-db",
        "prompt": "What is a double-blind placebo trial, and why is it used?"
      }
    ],
    "summaryText": "William Withering found optimum doses via trial-and-error side-effect tracking. Modern drugs undergo rigorous phases: animal testing, small healthy batches (Phase I), small sick batches (Phase II), and huge double-blind placebo tests (Phase III).",
    "ready": true
  },
  "evidence": []
};
