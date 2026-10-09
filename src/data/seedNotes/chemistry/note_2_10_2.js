/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 2
 * "Comparing rates of hydrolysis"
 * Source: Pearson Edexcel IAL Chemistry — Section 10B.2
 */
export const note_chemistry_2_10_2 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use experimental observations to compare the relative rates of hydrolysis of primary, secondary, and tertiary halogenoalkanes, and of chloro-, bromo-, and iodoalkanes.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Separate hydrolysis from the test that detects halide ions",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "In the aqueous silver nitrate test, ethanol helps dissolve the halogenoalkane and mix it with the aqueous reagent. Water acts as the nucleophile in hydrolysis. Released halide ions then react with Ag⁺ to form a precipitate. The precipitate is evidence for halide release; silver nitrate is not the species that replaces the halogen in the organic molecule.<br/><br/>Compare equal concentrations and volumes at the same temperature, using the same observation criterion. For comparable primary compounds, C–I is weaker than C–Br, which is weaker than C–Cl, so the iodoalkane usually releases halide most rapidly. For comparisons between primary, secondary and tertiary isomers, the reaction conditions and mechanism matter; the halogen atom alone is not the explanation."
  }
},
{
            id: 'h-silvernitrate',
            type: 'heading',
            data: { text: 'The Silver Nitrate Experiment', level: 2 },
            terms: []
        },
        {
            id: 'p-silvernitrate',
            type: 'paragraph',
            data: { text: 'To compare how fast different halogenoalkanes hydrolyse (<strong>Core Practical 5</strong>), we add them to a mixture of water, aqueous silver nitrate (AgNO₃), and ethanol. They are heated in a <strong>water bath</strong> at around 50°C.<br/>• <strong>Ethanol</strong> acts as a common solvent because halogenoalkanes are insoluble in water, but both they and aqueous AgNO₃ dissolve in ethanol.<br/>• A <strong>water bath</strong> is used because halogenoalkanes and ethanol are highly flammable, so naked flames must be avoided.<br/>As the C-X bond breaks (hydrolyses), an X⁻ halide ion is released. This free halide ion immediately reacts with the Ag⁺ ions to form a visible <strong>silver halide precipitate</strong>.' },
            terms: ['Silver nitrate', 'Water bath', 'Ethanol solvent']
        },
        {
            id: 'callout-precipitates',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Timing the precipitate',
                text: 'The <strong>time taken</strong> for the precipitate to appear tells us the <strong>rate of reaction</strong>.<br/>• AgCl = white precipitate<br/>• AgBr = cream precipitate<br/>• AgI = yellow precipitate<br/>A faster appearance means a faster rate of hydrolysis (the carbon-halogen bond broke more easily).'
            },
            terms: []
        },
        {
            id: 'h-trends',
            type: 'heading',
            data: { text: 'The Two Trends in Hydrolysis Rate', level: 2 },
            terms: []
        },
        {
            id: 'table-trends',
            type: 'comparisonTable',
            data: {
                caption: 'Trends in Hydrolysis Rates',
                headers: ['Variable being compared', 'Trend (Fastest to Slowest)', 'Reasoning (Exam Explanation)'],
                rows: [
                    ['Type of Halogen (C-X bond)', 'Iodoalkane > Bromoalkane > Chloroalkane', 'The rate relies solely on <strong>Bond Enthalpy</strong>. The C-I bond is the weakest and requires the least energy to break. The C-Cl bond is the strongest.'],
                    ['Classification of Halogenoalkane', 'Tertiary (3°) > Secondary (2°) > Primary (1°)', 'Depends on the mechanism (SN1 vs SN2). Tertiary halogenoalkanes hydrolyse via a much faster SN1 mechanism. Primary uses a slower SN2 mechanism.']
                ]
            },
            terms: ['Bond enthalpy']
        },
        {
            id: 'p-warning',
            type: 'paragraph',
            data: { text: 'Notice that <em>bond polarity</em> is NOT the determining factor for the halogen rate trend. The C-Cl bond is the most polar (which should theoretically attract the nucleophile faster), but bond enthalpy (strength) completely overrides this effect. The C-I bond is non-polar but extremely weak, so it breaks the fastest.' },
            terms: ['Bond polarity']
        }
    ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "Under controlled conditions, 1-iodobutane gives a yellow AgI precipitate sooner than 1-bromobutane gives cream AgBr, while 1-chlorobutane gives white AgCl more slowly. The delay reflects the hydrolysis rate under those conditions. Use equal halogenoalkane concentrations and a thermostatically controlled water bath for a fair comparison."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not attribute faster iodoalkane hydrolysis to a more polar C–I bond. C–I is less polar than C–Cl; weaker bond strength is the relevant explanation in this comparison."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Why is ethanol added in the silver nitrate hydrolysis test?",
        "checked": false
      },
      {
        "text": "What species acts as the nucleophile?",
        "checked": false
      },
      {
        "text": "What directly forms the precipitate?",
        "checked": false
      },
      {
        "text": "Why do comparable primary iodoalkanes usually hydrolyse faster than chloroalkanes?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "In the aqueous silver nitrate test, ethanol helps dissolve the halogenoalkane and mix it with the aqueous reagent. Water acts as the nucleophile in hydrolysis. Released halide ions then react with Ag⁺ to form a precipitate. The precipitate is evidence for halide release; silver nitrate is not the species that replaces the halogen in the organic molecule."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Why is ethanol added in the silver nitrate hydrolysis test?",
      "answer": "It helps dissolve the halogenoalkane and mix it with the aqueous reagent."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "What species acts as the nucleophile?",
      "answer": "Water in the aqueous silver nitrate/ethanol hydrolysis test."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "What directly forms the precipitate?",
      "answer": "Halide ions released by hydrolysis react with silver ions."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Why do comparable primary iodoalkanes usually hydrolyse faster than chloroalkanes?",
      "answer": "The C–I bond is weaker and more readily broken under the test conditions."
    }
  ],
  "summaryText": "In the aqueous silver nitrate test, ethanol helps dissolve the halogenoalkane and mix it with the aqueous reagent. Water acts as the nucleophile in hydrolysis. Released halide ions then react with Ag⁺ to form a precipitate. The precipitate is evidence for halide release; silver nitrate is not the species that replaces the halogen in the organic molecule.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_10_2;
