/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 9
 * Infrared spectroscopy interpretation
 */

export const note_chemistry_1_2_10_9 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Interpret infrared (IR) spectra to identify functional groups. Use a data table of characteristic absorptions to identify O–H, C=O, C–O, N–H and C–H bonds. Understand the fingerprint region.'
    }
  }, {
    id: 'h-ir',
    type: 'heading',
    data: {
      text: 'Infrared Spectroscopy',
      level: 2
    },
    terms: ['Infrared spectroscopy']
  }, {
    id: 'p-ir',
    type: "list",
    data: {
      style: "unordered",
      items: ["Infrared spectroscopy identifies functional groups in organic molecules.", "IR radiation causes covalent bonds to vibrate (stretch and bend).", "Different bonds absorb IR at characteristic wavenumbers (cm\u207B\xB9).", "The spectrum shows % transmittance vs wavenumber \u2014 dips (troughs) indicate absorption."]
    }
  }, {
    id: 'callout-ir-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Key IR Absorptions to Know',
      text: 'O–H (alcohol): broad, 2500–3300 cm⁻¹ (very broad)\nO–H (carboxylic acid): very broad absorption 2500–3300 cm⁻¹ overlapping C=O\nN–H: 3100–3500 cm⁻¹ (sharp or broad)\nC–H: 2850–3100 cm⁻¹ (strong)\nC=O (carbonyl): strong, sharp ~1700–1750 cm⁻¹\n  • Aldehyde: ~1720–1740 cm⁻¹\n  • Ketone: ~1705–1725 cm⁻¹\n  • Carboxylic acid: ~1700–1725 cm⁻¹\n  • Ester: ~1730–1750 cm⁻¹\nC–O (alcohol/ester): 1000–1300 cm⁻¹\n\nFINGERPRINT REGION: 500–1500 cm⁻¹ — unique pattern for each molecule (used for identification by comparison with reference spectra)'
    }
  }, {
    id: 'table-ir',
    type: 'comparisonTable',
    data: {
      caption: 'Key IR absorptions for A-level identification',
      headers: ['Bond / functional group', 'Wavenumber (cm⁻¹)', 'Appearance', 'Example compound'],
      rows: [['O–H (alcohol)', '2500–3550', 'Broad', 'Ethanol'], ['O–H (carboxylic acid)', '2500–3300', 'Very broad', 'Ethanoic acid'], ['N–H (amine/amide)', '3100–3500', 'Medium, sometimes broad', 'Methylamine'], ['C–H', '2850–3100', 'Strong', 'All organic compounds'], ['C=O (aldehyde)', '1720–1740', 'Strong, sharp', 'Ethanal'], ['C=O (ketone)', '1705–1725', 'Strong, sharp', 'Propanone'], ['C=O (carboxylic acid)', '1700–1725', 'Strong, sharp', 'Ethanoic acid'], ['C=O (ester)', '1730–1750', 'Strong, sharp', 'Ethyl ethanoate'], ['C–O', '1000–1300', 'Strong', 'Alcohols, esters']]
    }
  }, {
    id: 'callout-fingerprint-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 The Fingerprint Region',
      text: 'The region below 1500 cm⁻¹ (fingerprint region) contains many overlapping absorptions unique to each molecule.\n\nCannot reliably assign individual bonds in this region.\nUsed to CONFIRM identity by comparing with a reference spectrum of a known compound.\n\n"If the fingerprint regions match exactly → the compounds are identical."'
    }
  }, {
    id: 'callout-tip-ir',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Interpreting IR Spectra',
      text: 'Step-by-step approach:\n  1. Look for broad O–H absorption around 2500–3550 cm⁻¹ → alcohol or carboxylic acid\n  2. Look for C=O absorption ~1700–1750 cm⁻¹ → carbonyl compound\n     • Broad O–H + C=O → carboxylic acid\n     • C=O without O–H → aldehyde, ketone or ester\n  3. Look for N–H → amine or amide\n  4. C–H always present in organic molecules\n  5. Use fingerprint region only for confirmation\n\nAlways quote the wavenumber from the spectrum in your answer.'
    }
  }, {
    id: 'callout-we-ir',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example — Identifying Functional Groups',
      text: 'An IR spectrum shows:\n  • Broad absorption at 2500–3300 cm⁻¹\n  • Strong sharp absorption at 1710 cm⁻¹\n  • No other distinctive absorptions above 1500 cm⁻¹\n\nInterpretation:\n  Broad at 2500–3300 → O–H (but very broad suggests carboxylic acid)\n  1710 cm⁻¹ → C=O\n  Both O–H and C=O present → CARBOXYLIC ACID confirmed\n\n∴ The compound is a carboxylic acid'
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
        text: 'Broad O–H at 2500–3550: alcohol or carboxylic acid',
        checked: false
      }, {
        text: 'C=O at ~1700–1750: aldehyde/ketone/acid/ester',
        checked: false
      }, {
        text: 'O–H + C=O together → carboxylic acid',
        checked: false
      }, {
        text: 'N–H at 3100–3500: amine or amide',
        checked: false
      }, {
        text: 'Fingerprint region (500–1500): unique; used for confirmation only',
        checked: false
      }, {
        text: 'Always quote wavenumber values in exam answers',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'IR spectroscopy identifies functional groups from characteristic absorptions: O–H (broad, 2500–3550), C=O (sharp, 1700–1750), N–H (3100–3500), C–H (2850–3100). Carboxylic acid shows both O–H and C=O. The fingerprint region (500–1500 cm⁻¹) is unique to each compound and used for identification by comparison.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-ir-key',
      prompt: 'State the wavenumber range and appearance for: O–H (alcohol), C=O (ketone) and N–H absorptions in IR spectroscopy.'
    }, {
      id: 'cue-2',
      blockId: 'callout-we-ir',
      prompt: 'An IR spectrum has a broad absorption at 2500–3300 cm⁻¹ and a sharp absorption at 1710 cm⁻¹. What functional group(s) are present? What type of compound is it?'
    }, {
      id: 'cue-3',
      blockId: 'callout-fingerprint-key',
      prompt: 'What is the fingerprint region? Why is it useful for identification?'
    }],
    summaryText: 'IR absorptions: O–H, C=O, N–H, C–H wavenumbers; fingerprint region; interpreting spectra.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 10: IR Spectroscopy',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'IR spectroscopy', 'Organic chemistry']
  }]
};