/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 0
 * "Rate of reaction and calculating from graphs"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.1
 */
export const note_chemistry_2_9_0 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Know what is meant by rate of reaction, and calculate it from the gradient of a tangent on a concentration-time graph.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Choose the correct gradient for the requested rate",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Rate measures the change in a quantity per unit time. The quantity may be concentration, gas volume or mass. Its units must match the graph axes. Average rate uses the change over an interval; instantaneous rate uses a tangent at a particular time. Initial rate is the tangent gradient at t = 0. A gas-volume curve commonly becomes less steep as reactants are used up.<br/><br/>Use a large triangle on the tangent line to reduce reading uncertainty. The points used to calculate its gradient need not be measured points on the curved data line. For reactant concentration, the gradient is negative as concentration falls; a quoted reaction rate is normally a positive magnitude after accounting for stoichiometry where required."
  }
},
{
            id: 'callout-definition',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Defining Rate of Reaction',
                text: 'The <strong>rate of reaction</strong> is defined as the change in concentration of a reactant or product per unit time.<br/><br/>Units: mol dm⁻³ s⁻¹ (or mol dm⁻³ min⁻¹ etc.)'
            },
            terms: ['Rate of reaction']
        },
        {
            id: 'h-graphs',
            type: 'heading',
            data: { text: 'Concentration-Time Graphs', level: 2 },
            terms: []
        },
        {
            id: 'p-graphs',
            type: 'paragraph',
            data: { text: 'To find the rate of a reaction at a specific instant in time from a curved concentration-time graph (like a volume-time or mass-time graph), you must draw a <strong>tangent</strong> to the curve at that specific time and calculate its gradient.' },
            terms: ['Tangent', 'Gradient']
        },
        {
            id: 'callout-gradient',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Calculating the Gradient',
                text: '1. Locate the time (e.g. t = 30s) on the x-axis and follow it up to the curve.<br/>2. Draw a straight line that touches the curve only at that point (the tangent).<br/>3. Choose two points on the tangent line that are far apart (to minimise uncertainty).<br/>4. Calculate: Gradient = (change in y) / (change in x).<br/><br/>If the curve represents a reactant being used up, the gradient will be negative, but the reaction rate is given as a positive value.'
            },
            terms: []
        },
        {
            id: 'h-shape',
            type: 'heading',
            data: { text: 'Changes in Rate Over Time', level: 2 },
            terms: []
        },
        {
            id: 'callout-shape',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why does the rate change during a reaction?',
                text: 'If you look at a typical volume vs. time curve for a reaction producing a gas:<br/>• <strong>Start:</strong> The curve is steepest. The rate is at its <strong>maximum</strong> because the concentration of reactant particles is at its highest, leading to the highest frequency of successful collisions.<br/>• <strong>Middle:</strong> The curve becomes less steep. The rate <strong>decreases</strong> because the reactants are being used up, so the frequency of successful collisions decreases.<br/>• <strong>End:</strong> The curve becomes perfectly horizontal. The rate is <strong>zero</strong> because the limiting reactant has been completely consumed.'
            },
            terms: ['Collision frequency', 'Limiting reactant']
        }
    ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "A tangent to a gas-volume curve passes through (10 s, 18 cm³) and (50 s, 42 cm³). Its gradient is (42 − 18)/(50 − 10) = <strong>0.60 cm³ s⁻¹</strong>. This gives the rate at the tangent’s contact time, not the average rate between those two times on the curved data."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Volume divided by total elapsed time is not generally the instantaneous rate. A steeper curve shows a faster rate; the final gas volume shows yield, so the two observations answer different questions."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "How is instantaneous rate obtained from a graph?",
        "checked": false
      },
      {
        "text": "How is initial rate obtained?",
        "checked": false
      },
      {
        "text": "What units follow from volume in cm³ and time in seconds?",
        "checked": false
      },
      {
        "text": "Does a larger final gas volume necessarily mean a faster reaction?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Rate measures the change in a quantity per unit time. The quantity may be concentration, gas volume or mass. Its units must match the graph axes. Average rate uses the change over an interval; instantaneous rate uses a tangent at a particular time. Initial rate is the tangent gradient at t = 0. A gas-volume curve commonly becomes less steep as reactants are used up."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "How is instantaneous rate obtained from a graph?",
      "answer": "Draw a tangent at the requested time and calculate its gradient with a large triangle."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "How is initial rate obtained?",
      "answer": "Use the tangent gradient at time zero."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "What units follow from volume in cm³ and time in seconds?",
      "answer": "cm³ s⁻¹."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Does a larger final gas volume necessarily mean a faster reaction?",
      "answer": "No. Final volume reflects amount produced; rate depends on the curve’s gradient."
    }
  ],
  "summaryText": "Rate measures the change in a quantity per unit time. The quantity may be concentration, gas volume or mass. Its units must match the graph axes. Average rate uses the change over an interval; instantaneous rate uses a tangent at a particular time. Initial rate is the tangent gradient at t = 0. A gas-volume curve commonly becomes less steep as reactants are used up.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_9_0;
