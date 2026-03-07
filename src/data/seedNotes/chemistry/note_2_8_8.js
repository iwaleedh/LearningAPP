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
    ],
    recall: {
      enabled: true,
      cues: [
        { id: 'c-primary1', blockId: 'table-primary-standard', prompt: 'List 4 essential requirements for a chemical to be suitable as a primary standard.' },
        { id: 'c-primary2', blockId: 'callout-standard-examples', prompt: 'Why is Sodium Hydroxide (NaOH) completely unsuitable to be used as a primary standard?' },
        { id: 'c1', blockId: 'list-standard', prompt: 'After transferring dissolved solid from a beaker into a volumetric flask, what crucial step must you take with the beaker and glass rod to ensure accuracy?' },
        { id: 'c2', blockId: 'list-standard', prompt: 'What must you do after making the volumetric flask up to the mark to ensure the concentration is uniform?' },
        { id: 'c3', blockId: 'callout-concordant', prompt: 'What are "concordant titres" and how are they used differently from a "rough titre"?' },
        { id: 'c4', blockId: 'callout-rinsing', prompt: 'Why must a burette be rinsed with the titrant solution after being washed with deionized water, whereas a conical flask is ONLY rinsed with deionized water?' },
        { id: 'c5', blockId: 'p-indicators', prompt: 'Why is Universal Indicator unsuitable for an acid-base titration? Give an example of a suitable indicator.' },
        { id: 'c6', blockId: 'table-errors', prompt: 'Define a "Systematic Error" and give an example.' },
        { id: 'c7', blockId: 'p-precision-accuracy', prompt: 'Distinguish between accuracy and precision.' },
        { id: 'c8', blockId: 'callout-uncertainty', prompt: 'A student uses a balance with a reading uncertainty of ±0.005 g. They measure the mass by difference (measuring the boat, then boat+solid). What is the total mass uncertainty?' },
        { id: 'c9', blockId: 'callout-cp3', prompt: 'What is the exact colour change for the phenolphthalein indicator at the end-point when titrating HCl with NaOH (NaOH in burette)?' },
        { id: 'c10', blockId: 'callout-uncertainty', prompt: 'Why is a 250 cm³ volumetric flask preferred over a 250 cm³ measuring cylinder when preparing a standard solution?' }
      ],
      summaryText: 'Standard solution: accurate mass dissolved, transferred with ALL washings, made to mark, inverted to mix. Primary Standards MUST be: high purity, stable, soluble, high Mr, and non-hygroscopic (NaOH is too hygroscopic). Titration: apparatus properly rinsed; phenolphthalein changes colourless to pale pink. Calculate mean titre ONLY from concordant results (within 0.1-0.2 cm³). Do not use rough titres in the mean. Precision vs Accuracy differentiates grouping vs correctness.',
      ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_8;
