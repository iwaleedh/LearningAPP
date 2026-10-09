/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 8
 * "Volumetric Analysis and Titrations"
 * Source: Pearson Edexcel IAL Chemistry — Section 8D
 */
export const note_chemistry_2_8_8 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand how to prepare standard solutions, perform titrations, carry out calculations involving concentrations, and analyse errors/uncertainties.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Core Practicals 3 and 4: standardise, then use the concentration",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "A standard solution has an accurately known concentration. For a suitable solid acid, weigh accurately, dissolve fully, transfer quantitatively to a volumetric flask with rinsings, make up to the mark at an appropriate temperature and mix thoroughly. Use its known amount and the balanced reaction to determine the concentration of sodium hydroxide by titration. This is the Core Practical 4 context. A standardised alkali can then determine hydrochloric acid concentration in Core Practical 3.<br/><br/>Rinse the pipette with the solution it will deliver and the burette with the titrant; rinse the conical flask with distilled water. Extra water in the flask changes concentration but not the moles already pipetted, so it does not change the ideal titre. Remove air from the burette tip, read the meniscus at eye level and add titrant dropwise near the endpoint."
  }
},
{
            id: 'h-standard',
            type: 'heading',
            data: { text: 'Making a Standard Solution (Core Practical 4)', level: 2 },
            terms: []
        },
        {
            id: 'list-standard',
            type: 'list',
            data: {
                style: 'ordered',
                items: [
                    'Weigh an exact mass of the solid accurately on a balance using a weighing boat.',
                    'Transfer to a beaker and add distilled water. Stir with a glass rod until fully dissolved.',
                    'Pour the solution via a funnel into a 250 cm³ <strong>volumetric flask</strong>.',
                    'Rinse the beaker, stirring rod, and funnel with distilled water several times, and add the washings to the flask.',
                    'Make up to the mark exactly (bottom of meniscus on the line) using distilled water horizontally at eye-level.',
                    'Stopper the flask and invert several times to thoroughly mix.'
                ]
            },
            terms: ['Standard solution', 'Volumetric flask']
        },
        {
      id: 'callout-cp4',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Core Practical 4: Preparing a Standard Solution',
        text: 'This method is used to prepare solutions of known concentration, such as making a standard solution of an acid (e.g. sulfamic acid) or a primary standard alkali like sodium carbonate (Na₂CO₃) to be used in titrations.'
      },
      terms: []
    },
    {
      id: 'h-primary-standard',
      type: 'heading',
      data: { text: 'Primary Standards', level: 2 },
      terms: []
    },
    {
      id: 'table-primary-standard',
      type: 'comparisonTable',
      data: {
        caption: 'Requirements for a Primary Standard',
        headers: ['Requirement', 'Explanation'],
        rows: [
          ['<strong>High Purity</strong>', 'Must be very pure (≥99.9%) so the calculated mass precisely matches the moles.'],
          ['<strong>Stable</strong>', 'Doesn\'t decompose or react with air/heat.'],
          ['<strong>Soluble</strong>', 'Dissolves completely in water without leaving residue.'],
          ['<strong>High Molar Mass (Mr)</strong>', 'Reduces the percentage error when weighing the mass.'],
          ['<strong>Non-hygroscopic</strong>', 'Doesn\'t absorb water from the air (which would artificially increase its mass).']
        ]
      },
      terms: ['Primary standard']
    },
    {
      id: 'callout-standard-examples',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Examples & Non-Examples',
        text: '<strong>Good Primary Standards:</strong><br/>• Sodium carbonate (Na₂CO₃) — for standardising acids.<br/>• Potassium hydrogen phthalate (KHP) — for standardising bases.<br/><br/><strong>NOT Suitable as Primary Standards:</strong><br/>• <strong>NaOH:</strong> Strongly hygroscopic (absorbs water) and reacts with CO₂ in the air.<br/>• <strong>HCl:</strong> Volatile (evaporates easily) and precise concentrations are hard to maintain.<br/>• <strong>H₂SO₄:</strong> Absorbs water from the air.'
      },
      terms: []
    },
        {
            id: 'h-titrations',
            type: 'heading',
            data: { text: 'Performing Titrations (Core Practical 3)', level: 2 },
            terms: []
        },
        {
            id: 'p-titrations',
            type: 'paragraph',
            data: { text: 'A pipette is used to accurately measure a fixed volume (e.g. 25.0 cm³) of the analyte into a conical flask. A burette is filled with the titrant (often the standard solution). An indicator is added to the conical flask (typically 3 drops max). Titrant is added drop-wise near the end-point while continually swirling the flask until a permanent colour change is observed. You should read the burette from the bottom of the meniscus to the nearest 0.05 cm³ against a white tile to see the indicator change clearly.' },
            terms: ['Burette', 'Pipette', 'End-point']
        },
        {
            id: 'callout-cp3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Core Practical 3: Finding Concentration of HCl',
                text: 'In CP3, you determine the concentration of an unknown hydrochloric acid (HCl) solution by titrating it against a standard solution of sodium hydroxide (NaOH).<br/><br/><strong>Method:</strong><br/>1. Pipette 25.0 cm³ of the unknown HCl into a conical flask.<br/>2. Add 2-3 drops of <strong>phenolphthalein</strong> indicator.<br/>3. Titrate with the standard NaOH from the burette.<br/>4. <strong>Colour change:</strong> The solution in the flask will change from <em>colourless</em> (in acid) to a <em>permanent pale pink</em> (at exactly the end-point in neutral/slightly alkaline).'
            },
            terms: []
        },
        {
            id: 'callout-rinsing',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Rinsing Apparatus correctly',
                text: '• <strong>Burette & Pipette:</strong> Rinse with deionized water FIRST to clean, and then rinse with the <em>solution they are going to contain</em>. If only rinsed with water, the droplets left behind would dilute the solution.<br/>• <strong>Conical Flask:</strong> Rinse ONLY with deionized water. If rinsed with the analyte, you would add extra unmeasured moles, resulting in an incorrect calculated concentration.'
            },
            terms: []
        },
        {
            id: 'p-indicators',
            type: 'paragraph',
            data: { text: '<strong>Note on Indicators:</strong> Universal indicator is NEVER suitable for titrations because its gradual colour change does not provide a sharp, instant end-point. Instead, use <em>Methyl Orange</em> (red in acid, yellow in alkali) or <em>Phenolphthalein</em> (colourless in acid, pink in alkali).' },
            terms: ['Indicators']
        },
    {
      id: 'callout-concordant',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Concordant Results & Rough Titres',
        text: 'You must repeat the titration until you get <strong>concordant results</strong> — usually defined as two titres being within 0.10 cm³ or 0.20 cm³ of each other (depending on the exam board).<br/><br/>• The <strong>mean (average) titre</strong> is calculated ONLY using these concordant values.<br/>• <strong>Rough (trial) titres</strong> are used to find the approximate end-point quickly. They must <em>never</em> be included in the mean titre calculation, even if they happen to look concordant.<br/>• <strong>Overshooting:</strong> If you miss the end-point (e.g. indicator goes dark pink instead of pale pink), that result is anomalous and must be ignored.'
      },
      terms: ['Concordant results', 'Titre']
    },
        {
            id: 'h-errors',
            type: 'heading',
            data: { text: 'Errors, Mistakes, and Uncertainties', level: 2 },
            terms: []
        },
        {
            id: 'table-errors',
            type: 'comparisonTable',
            data: {
                caption: 'Mistakes vs. Errors',
                headers: ['Type', 'Definition', 'Examples'],
                rows: [
                    ['Mistake', 'An avoidable careless act by a skilled operator.', 'Misreading a thermometer, spilling solid during transfer.'],
                    ['Random Error', 'Unpredictable variations in conditions.', 'Changes in room temperature/pressure during gas collection.'],
                    ['Systematic Error', 'Inherent, predictable flaws in the apparatus or method leading to values being consistently too high or too low.', 'An incorrectly calibrated balance or pipette.']
                ]
            },
            terms: ['Random error', 'Systematic error']
        },
        {
            id: 'p-precision-accuracy',
            type: 'paragraph',
            data: { text: 'When evaluating results, we distinguish between two concepts:<br/>• <strong>Accuracy:</strong> How close the experimental values are to the true or accepted value.<br/>• <strong>Precision:</strong> How close the experimental values are to each other (independent of accuracy).' },
            terms: ['Accuracy', 'Precision']
        },
        {
            id: 'callout-uncertainty',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Calculating Percentage Uncertainty',
                text: '<strong>Formula:</strong> % Uncertainty = (Total uncertainty / Measured value) × 100<br/><br/>If a burette has a single-reading uncertainty of ±0.05 cm³, a titre requires TWO readings (initial and final).<br/>Total uncertainty = 2 × 0.05 = ±0.10 cm³.<br/>If the titre was 25.00 cm³:<br/>% Uncertainty = (0.10 / 25.00) × 100 = <strong>0.40%</strong><br/><br/><strong>Apparatus Choice:</strong> A 250 cm³ volumetric flask typically has an uncertainty of ±0.30 cm³, giving a % uncertainty of (0.30 / 250) × 100 = 0.12%. In contrast, a 250 cm³ measuring cylinder might have an uncertainty of ±2.0 cm³, yielding (2.0 / 250) × 100 = 0.8%. Therefore, volumetric flasks are far more precise when making standard solutions.<br/><br/><em>Note:</em> The uncertainty for measuring mass by difference requires multiplying the balance uncertainty by 2. When combining apparatus pieces in a final calculation, <strong>add their individual percentage uncertainties together</strong>.'
            },
            terms: ['Uncertainty', 'Percentage uncertainty']
        }
    ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "An illustrative standard diprotic acid H₂A has concentration 0.0500 mol dm⁻³. A 25.0 cm³ aliquot reacts with 24.80 cm³ NaOH: H₂A + 2NaOH → Na₂A + 2H₂O. Acid amount = 0.0500 × 0.0250 = 0.00125 mol; alkali amount = 0.00250 mol. c(NaOH) = 0.00250/0.02480 = <strong>0.1008 mol dm⁻³</strong> (about 0.101 to three significant figures). Use the acid’s actual stoichiometry."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not use c₁V₁ = c₂V₂ without checking the mole ratio. A rough titre guides the endpoint; use suitable concordant accurate titres for the mean and follow the stated concordance criterion."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "What is a standard solution?",
        "checked": false
      },
      {
        "text": "What is the purpose of Core Practical 4?",
        "checked": false
      },
      {
        "text": "Why does distilled water in the conical flask not change the ideal titre?",
        "checked": false
      },
      {
        "text": "Why is a 1:1 concentration-volume shortcut wrong for H₂A and NaOH?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "A standard solution has an accurately known concentration. For a suitable solid acid, weigh accurately, dissolve fully, transfer quantitatively to a volumetric flask with rinsings, make up to the mark at an appropriate temperature and mix thoroughly. Use its known amount and the balanced reaction to determine the concentration of sodium hydroxide by titration. This is the Core Practical 4 context. A standardised alkali can then determine hydrochloric acid concentration in Core Practical 3."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "What is a standard solution?",
      "answer": "A solution with an accurately known concentration."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "What is the purpose of Core Practical 4?",
      "answer": "Use a standard solution made from a solid acid to determine sodium hydroxide concentration by titration."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Why does distilled water in the conical flask not change the ideal titre?",
      "answer": "It dilutes the aliquot without changing its moles of analyte."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Why is a 1:1 concentration-volume shortcut wrong for H₂A and NaOH?",
      "answer": "The balanced equation requires two moles of NaOH per mole of the diprotic acid."
    }
  ],
  "summaryText": "A standard solution has an accurately known concentration. For a suitable solid acid, weigh accurately, dissolve fully, transfer quantitatively to a volumetric flask with rinsings, make up to the mark at an appropriate temperature and mix thoroughly. Use its known amount and the balanced reaction to determine the concentration of sodium hydroxide by titration. This is the Core Practical 4 context. A standardised alkali can then determine hydrochloric acid concentration in Core Practical 3.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_8_8;
