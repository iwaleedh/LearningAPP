export const note_chemistry_4_15_0 = {
  blocks: [
    {
      id: 'obj-chirality',
      type: 'objective',
      data: {
        text: 'Understand chirality, chiral centres, enantiomers, and optical isomerism; predict stereochemistry using structural analysis.'
      }
    },
    {
      id: 'h-chiral-centre',
      type: 'heading',
      data: { text: 'Chiral Centre Definition', level: 2 }
    },
    {
      id: 'p-chiral-intro',
      type: 'paragraph',
      data: {
        text: 'A chiral centre (or stereogenic centre) is a carbon atom bonded to four different groups. The presence of a chiral centre in a molecule gives rise to optical isomerism — the molecule exists as two non-superimposable mirror images called enantiomers. Not all carbon atoms are chiral; only those with four distinct substituents (C* notation used for clarity).'
      }
    },
    {
      id: 'p-chiral-requirement',
      type: 'paragraph',
      data: {
        text: 'Requirements for a carbon to be chiral: (1) It must be sp³ hybridised (tetrahedral geometry). (2) It must have four different groups attached. (3) If two or more groups are identical, the centre is achiral (no optical isomerism). Examples: butan-2-ol (CH₃–CHO₂H–CH₂–CH₃) has a chiral centre at C2 because it bears H, OH, CH₃, and C₂H₅ — four different groups.'
      }
    },
    {
      id: 'svg-chiral-centre',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><defs><style>.bond { stroke: #1f2937; stroke-width: 2; } .atom { fill: #6366f1; } .label { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; } .group { font-size: 13px; fill: #1f2937; }</style></defs><!-- Central carbon --><circle cx="150" cy="100" r="18" class="atom"/><text x="150" y="106" text-anchor="middle" fill="white" class="label">C*</text><!-- Bond to H (up) --><line x1="150" y1="82" x2="150" y2="40" class="bond"/><circle cx="150" cy="30" r="8" fill="#fff" stroke="#1f2937" stroke-width="1.5"/><text x="150" y="35" text-anchor="middle" fill="#1f2937" class="group">H</text><!-- Bond to OH (down-right) --><line x1="164" y1="112" x2="210" y2="150" class="bond"/><circle cx="220" cy="160" r="8" fill="#fff" stroke="#1f2937" stroke-width="1.5"/><text x="220" y="165" text-anchor="middle" fill="#1f2937" class="group">OH</text><!-- Bond to R₁ (down-left) --><line x1="136" y1="112" x2="90" y2="150" class="bond"/><circle cx="80" cy="160" r="8" fill="#fff" stroke="#1f2937" stroke-width="1.5"/><text x="80" y="165" text-anchor="middle" fill="#1f2937" class="group">R₁</text><!-- Bond to R₂ (left) --><line x1="132" y1="100" x2="70" y2="100" class="bond"/><circle cx="60" cy="100" r="8" fill="#fff" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="105" text-anchor="middle" fill="#1f2937" class="group">R₂</text><!-- Label --><text x="150" y="190" text-anchor="middle" fill="#1f2937" font-size="12" font-weight="bold">Tetrahedral chiral centre with 4 different groups</text></svg>',
        caption: 'A chiral centre C* with four different substituents: H, OH, R₁, and R₂. The three-dimensional arrangement leads to non-superimposable mirror images.'
      }
    },
    {
      id: 'h-enantiomers',
      type: 'heading',
      data: { text: 'Enantiomers & Optical Isomerism', level: 2 }
    },
    {
      id: 'p-enantiomers-def',
      type: 'paragraph',
      data: {
        text: 'Enantiomers are pairs of stereoisomers that are non-superimposable mirror images of each other. If you hold a model of one enantiomer up to a mirror, the reflection is the other enantiomer. The two forms cannot be made identical by any rotation or translation in three-dimensional space. Despite having identical molecular formulae and connectivity, they have different three-dimensional arrangements (stereochemistry).'
      }
    },
    {
      id: 'callout-optical-activity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Optical Isomerism',
        text: 'The key property of enantiomers is that they rotate plane-polarised light in opposite directions: one form rotates it clockwise (dextrorotatory, +), the other anti-clockwise (laevorotatory, −). The magnitude of rotation is identical but the direction is opposite. This is why enantiomers are called optical isomers.'
      }
    },
    {
      id: 'p-examples',
      type: 'paragraph',
      data: {
        text: 'Classic example: butan-2-ol, CH₃–CHO₂H–CH₂–CH₃, has a chiral centre at C2. The two enantiomers are (+)-butan-2-ol and (−)-butan-2-ol. They have identical physical properties (boiling point, melting point, solubility) except for the direction of optical rotation. Another example is lactic acid (2-hydroxypropanoic acid), which exists as (+) and (−) forms; the (+) form is produced naturally during anaerobic respiration.'
      }
    },
    {
      id: 'h-plane-polarised',
      type: 'heading',
      data: { text: 'Plane Polarised Light & Optical Activity', level: 2 }
    },
    {
      id: 'p-polarised-light',
      type: 'paragraph',
      data: {
        text: 'Ordinary light vibrates in all planes perpendicular to its direction of travel. Plane-polarised light vibrates in only one plane (produced by passing ordinary light through a Polaroid filter). When plane-polarised light passes through a solution containing enantiomers, the plane of vibration is rotated. A solution of (+) enantiomer rotates light clockwise; a (−) enantiomer rotates it anti-clockwise by the same amount. The angle of rotation depends on the concentration, path length, temperature, wavelength of light, and the nature of the solvent.'
      }
    },
    {
      id: 'callout-tip-optical',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The (+) and (−) labels do NOT indicate priority or stereochemical configuration (R/S). They only describe the direction of optical rotation. A compound with R configuration might be (+) or (−) — you must determine rotation experimentally. The angles are typically small (a few degrees), so polarimetry requires precise measurement.'
      }
    },
    {
      id: 'h-recognition',
      type: 'heading',
      data: { text: 'Recognising Chiral Centres', level: 2 }
    },
    {
      id: 'list-recognition',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Look for a carbon with four single bonds (sp³, tetrahedral).',
          'Identify the four groups attached. If all are different → chiral.',
          'If any two groups are identical (including H–H, or two CH₃) → achiral.',
          'Multiple chiral centres in one molecule → more enantiomer pairs (2ⁿ possible stereoisomers, where n = number of chiral centres).',
          'sp² carbons (C=C, C=O) are never chiral, even if bonded to four different "effective" groups.'
        ]
      }
    },
    {
      id: 'callout-warning-mistakes',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students sometimes confuse achiral molecules with identical groups. For example, CH₂Cl–CH₂–CH₂Cl has no chiral centre because C1 and C3 are identical (both CH₂Cl). Remember: symmetry destroys chirality. Also, a C=O carbon is sp² and cannot be a chiral centre, even if it has four different atoms bonded somehow (one is the double bond to O).'
      }
    },
    {
      id: 'checklist-chiral',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can identify a chiral centre by checking for a C with four different groups.', checked: false },
          { text: 'I understand that enantiomers are non-superimposable mirror images.', checked: false },
          { text: 'I can explain how enantiomers rotate plane-polarised light in opposite directions.', checked: false },
          { text: 'I know that lactic acid and butan-2-ol are common enanomeric examples.', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: A chiral centre is a carbon bonded to four different groups. Enantiomers are non-superimposable mirror images with identical physical properties but opposite optical rotation.\n\nApply: Identify the chiral centre in 2-bromobutane and draw both enantiomers.\n\nAnalyze: Why do enantiomers have identical boiling points and solubility but different biological activity?\n\nEvaluate: Thalidomide\'s R-enantiomer is therapeutic while the S-enantiomer is teratogenic. Discuss the importance of chirality in drug design.'
      },
      terms: []
    },
    {
      id: 'summary-chiral',
      type: 'summary',
      data: {
        text: 'A chiral centre is a carbon bonded to four different groups. Molecules with one chiral centre exist as two enantiomers — non-superimposable mirror images that rotate plane-polarised light in opposite directions (+/−). Optical isomerism is detected experimentally using a polarimeter. Recognise chirality by looking for sp³ carbons with four distinct substituents; identical groups or sp² carbons are not chiral.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-chiral-requirement',
        prompt: 'What are the requirements for a carbon atom to be a chiral centre?'
      },
      {
        id: 'cue-2',
        blockId: 'p-enantiomers-def',
        prompt: 'Define enantiomers and explain why they are non-superimposable.'
      },
      {
        id: 'cue-3',
        blockId: 'p-polarised-light',
        prompt: 'How does plane-polarised light interact with solutions of enantiomers?'
      },
      {
        id: 'cue-4',
        blockId: 'list-recognition',
        prompt: 'How do you recognise a chiral centre in a molecular structure?'
      },
      {
        id: 'cue-5',
        blockId: 'callout-warning-mistakes',
        prompt: 'Why is a C=O carbon never chiral?'
      }
    ],
    summaryText: 'A chiral centre is an sp³ carbon bonded to four different groups. Enantiomers are mirror-image stereoisomers that rotate plane-polarised light in opposite directions. Optical activity is detected by polarimetry. To identify chirality, check for a carbon with four distinct substituents (not sp² and no identical pairs).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Lactic acid biological chirality',
      detail: 'The (+)-enantiomer of lactic acid is produced in muscles during anaerobic respiration; the (−) form is found in sour milk fermentation. Only the (+) form is efficiently metabolised by the body, highlighting the biological importance of stereochemistry in drugs and natural products.',
      year: '2023',
      source: 'A-Level Chemistry Specification',
      tags: ['biochemistry', 'enantiomers', 'chirality']
    }
  ]
};
