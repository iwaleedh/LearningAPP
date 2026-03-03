/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 10
 * Core Practical 8: unknown analysis
 */

export const note_chemistry_1_2_10_10 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe Core Practical 8: using chemical tests and IR spectroscopy to identify an unknown organic compound. Apply a systematic approach to distinguish between alcohols, aldehydes, ketones, carboxylic acids and halogenoalkanes.'
    }
  }, {
    id: 'h-aim',
    type: 'heading',
    data: {
      text: 'Aim',
      level: 2
    }
  }, {
    id: 'p-aim',
    type: "list",
    data: {
      style: "unordered",
      items: ["To identify an unknown organic compound by carrying out a series of chemical tests and interpreting the results alongside IR spectroscopy data."]
    }
  }, {
    id: 'h-tests',
    type: 'heading',
    data: {
      text: 'Chemical Tests for Organic Functional Groups',
      level: 2
    },
    terms: ['Functional group']
  }, {
    id: 'table-tests',
    type: 'comparisonTable',
    data: {
      caption: 'Chemical tests for identification of organic functional groups',
      headers: ['Test / Reagent', 'Positive result', 'Functional group identified'],
      rows: [['Acidified K₂Cr₂O₇', 'Orange → green', 'Alcohol (primary or secondary) or aldehyde'], ['Fehling\'s / Benedict\'s solution', 'Blue → brick-red precipitate', 'Aldehyde (not ketone)'], ['Tollens\' reagent (ammoniacal AgNO₃)', 'Silver mirror forms', 'Aldehyde (not ketone)'], ['Acidified AgNO₃ (after hydrolysis with NaOH)', 'White/cream/yellow precipitate', 'Halogenoalkane (halide ion confirmed)'], ['Na₂CO₃ solution', 'Effervescence (CO₂)', 'Carboxylic acid'], ['Bromine water', 'Orange → colourless', 'Alkene (C=C)'], ['Universal indicator / litmus', 'Turns red', 'Acidic compound (carboxylic acid)'], ['Sodium metal', 'Fizzing (H₂)', 'O–H group present (alcohol or carboxylic acid)']]
    }
  }, {
    id: 'callout-systematic-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Systematic Identification Flowchart',
      text: 'Step 1 — Add Na₂CO₃: effervescence → carboxylic acid; no reaction → not carboxylic acid\nStep 2 — Add K₂Cr₂O₇/H₂SO₄: orange → green → alcohol or aldehyde; no change → ketone or other\nStep 3 — Add Tollens\' reagent: silver mirror → aldehyde; no mirror → ketone or alcohol\nStep 4 — AgNO₃ after NaOH hydrolysis: precipitate → halogenoalkane\nStep 5 — Confirm with IR: look for C=O, O–H, C–X absorptions\nStep 6 — Compare fingerprint region with reference spectrum'
    }
  }, {
    id: 'callout-tollens-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Distinguishing Aldehyde from Ketone',
      text: 'Both aldehydes and ketones contain C=O group.\nBoth are oxidised by K₂Cr₂O₇... wait, NO:\n  Aldehyde: oxidised by K₂Cr₂O₇ (orange → green) AND gives silver mirror with Tollens\'\n  Ketone: NOT oxidised by Tollens\' or Fehling\'s — NO silver mirror, NO brick-red ppt\n\nTollens\' reagent: [Ag(NH₃)₂]⁺ + e⁻ → Ag  (silver mirror on inside of test tube)\nFehling\'s: Cu²⁺(blue) → Cu₂O (brick-red precipitate)\n\nBoth are specific for ALDEHYDES only.'
    }
  }, {
    id: 'callout-safety',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Safety',
      text: 'K₂Cr₂O₇: carcinogenic; avoid skin contact; wear gloves\nTollens\' reagent: prepare fresh; do not store (forms explosive silver nitride on standing)\nHalogenoalkanes: volatile; flammable; use in fume cupboard\nSodium metal: highly reactive with water; use small pieces only'
    }
  }, {
    id: 'callout-tip-cp8',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Core Practical 8',
      text: 'When asked to identify an unknown compound:\n  1. Always describe a complete series of tests (not just one)\n  2. State the reagent, observation AND conclusion for each test\n  3. Use IR to confirm (quote wavenumber)\n  4. State what you would expect NOT to observe to rule out other possibilities\n\n"The absence of a silver mirror with Tollens\' reagent suggests the compound is a ketone, not an aldehyde."'
    }
  }, {
    id: 'h-checklist',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Na₂CO₃: effervescence → carboxylic acid',
        checked: false
      }, {
        text: 'K₂Cr₂O₇/H₂SO₄: orange → green → alcohol or aldehyde (not ketone or tertiary)',
        checked: false
      }, {
        text: 'Tollens\': silver mirror → aldehyde only (not ketone)',
        checked: false
      }, {
        text: "Fehling's/Benedict's: brick-red ppt → aldehyde only",
        checked: false
      }, {
        text: 'AgNO₃ after NaOH hydrolysis: ppt → halogenoalkane',
        checked: false
      }, {
        text: 'IR: broad O–H, sharp C=O, fingerprint region',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Core Practical 8 uses a systematic series of chemical tests: Na₂CO₃ (carboxylic acid), K₂Cr₂O₇ (alcohol/aldehyde), Tollens\' (aldehyde), Fehling\'s (aldehyde), AgNO₃ (halide), bromine water (alkene). IR spectroscopy confirms functional groups and the fingerprint region confirms identity. Always give reagent, observation and conclusion.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-tests',
      prompt: 'State the reagent and result for identifying: (a) an aldehyde, (b) a carboxylic acid, (c) a halogenoalkane.'
    }, {
      id: 'cue-2',
      blockId: 'callout-tollens-key',
      prompt: 'How do you distinguish between an aldehyde and a ketone? State TWO tests that work.'
    }, {
      id: 'cue-3',
      blockId: 'callout-systematic-key',
      prompt: 'Describe a systematic approach to identifying an unknown organic compound using chemical tests and IR spectroscopy.'
    }],
    summaryText: 'Core Practical 8: chemical tests for functional groups, systematic identification, IR confirmation.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Core Practical 8: Unknown organic analysis',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Core Practical', 'Organic analysis']
  }]
};