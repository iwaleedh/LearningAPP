/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 1
 * "Standard conditions and standard states"
 * Source: Pearson Edexcel IAL Chemistry — Section 6A
 */
export const note_chemistry_2_6_1 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Know standard conditions (100 kPa and a specified temperature, usually 298 K) and define standard state. Understand why defining standard conditions is necessary for comparing enthalpy changes.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Standard state is not the same as room conditions",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Standard thermochemical data specify a pressure of 100 kPa and a stated temperature, commonly 298 K. Use the temperature given rather than assuming “standard” always means 298 K. At this level, aqueous standard states are commonly represented by concentration 1.00 mol dm⁻³. The standard state of an element is its most stable form at the specified conditions; for example, graphite rather than diamond is the reference form for carbon at 298 K.<br/><br/>Standard conditions for enthalpy data are not the same as using a gas molar volume of approximately 24 dm³ mol⁻¹ at room temperature and pressure. A standard enthalpy of formation refers to making exactly one mole of a compound from elements in their reference states. Fractions in its equation are therefore allowed."
  }
},
{
            id: 'h-standard',
            type: 'heading',
            data: { text: 'Standard Conditions', level: 2 },
            terms: []
        },
        {
            id: 'p-why',
            type: 'paragraph',
            data: { text: 'The enthalpy change of a reaction depends on the conditions under which the reaction occurs (e.g. pressure and temperature). To allow chemists to compare enthalpy changes fairly, they are usually stated under <strong>standard conditions</strong>.' },
            terms: []
        },
        {
            id: 'callout-standard',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard conditions (⦵)',
                text: 'Standard conditions are denoted by the plimsoll symbol (⦵), e.g. ΔH⦵.<br/>They are defined as:<br/>• A pressure of <strong>100 kPa</strong> (approx 1 atmosphere).<br/>• A stated temperature, usually <strong>298 K</strong> (25°C).<br/>• A concentration of <strong>1.0 mol dm⁻³</strong> for all solutions.'
            },
            terms: ['Standard conditions']
        },
        {
            id: 'h-state',
            type: 'heading',
            data: { text: 'Standard State', level: 2 },
            terms: []
        },
        {
            id: 'callout-state',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Definition: Standard State',
                text: 'The <strong>standard state</strong> of a substance is its reference form at 100 kPa and the specified temperature (commonly 298 K).<br/><br/>If a substance can exist as different allotropes (like carbon), its standard state is its most thermodynamically stable allotrope at these conditions.'
            },
            terms: ['Standard state']
        },
        {
            id: 'table-states',
            type: 'comparisonTable',
            data: {
                caption: 'Standard states of common substances',
                headers: ['Element', 'Most stable allotrope / form', 'Standard state (298 K, 100 kPa)'],
                rows: [
                    ['Oxygen', 'O₂', 'Gas (g)'],
                    ['Bromine', 'Br₂', 'Liquid (l)'],
                    ['Iodine', 'I₂', 'Solid (s)'],
                    ['Carbon', 'Graphite (not diamond)', 'Solid (s)'],
                    ['Water', 'H₂O', 'Liquid (l)']
                ]
            },
            terms: []
        }
    ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "The formation equation for one mole of liquid water at 298 K is <strong>H₂(g) + ½O₂(g) → H₂O(l)</strong>. Writing 2H₂ + O₂ → 2H₂O describes two moles of water and twice the enthalpy change. Formation of CO₂ uses C(graphite), not diamond. The standard enthalpy of formation of an element in its reference state is zero by convention."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Water is a compound, not an element. Specify state symbols: water vapour and liquid water have different enthalpies. Do not equate standard state with the physical state alone when the reference form also matters."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "What pressure is used for standard thermochemical data?",
        "checked": false
      },
      {
        "text": "Must a standard enthalpy value always be measured at 298 K?",
        "checked": false
      },
      {
        "text": "Write the formation equation for liquid water.",
        "checked": false
      },
      {
        "text": "Why is graphite used in the formation equation for CO₂?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Standard thermochemical data specify a pressure of 100 kPa and a stated temperature, commonly 298 K. Use the temperature given rather than assuming “standard” always means 298 K. At this level, aqueous standard states are commonly represented by concentration 1.00 mol dm⁻³. The standard state of an element is its most stable form at the specified conditions; for example, graphite rather than diamond is the reference form for carbon at 298 K."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "What pressure is used for standard thermochemical data?",
      "answer": "100 kPa, together with a specified temperature."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Must a standard enthalpy value always be measured at 298 K?",
      "answer": "No. The temperature must be stated; 298 K is commonly used."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Write the formation equation for liquid water.",
      "answer": "H₂(g) + ½O₂(g) → H₂O(l), producing one mole of water."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Why is graphite used in the formation equation for CO₂?",
      "answer": "It is carbon’s reference form at the specified standard conditions near 298 K."
    }
  ],
  "summaryText": "Standard thermochemical data specify a pressure of 100 kPa and a stated temperature, commonly 298 K. Use the temperature given rather than assuming “standard” always means 298 K. At this level, aqueous standard states are commonly represented by concentration 1.00 mol dm⁻³. The standard state of an element is its most stable form at the specified conditions; for example, graphite rather than diamond is the reference form for carbon at 298 K.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_6_1;
