export const note_chemistry_4_15_0 = {
  blocks: [
    {
      id: 'obj-chirality',
      type: 'objective',
      data: {
        text: 'Understand the isomerism hierarchy; define chirality and chiral centres; identify enantiomers; explain how plane-polarised light is rotated by optically active compounds; describe the polarimeter apparatus; use optical activity as evidence for SN1 vs SN2 mechanisms.'
      }
    },
    {
      id: 'h-isomer-hierarchy',
      type: 'heading',
      data: { text: 'Types of Isomers: The Full Hierarchy', level: 2 }
    },
    {
      id: 'list-isomer-types',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Chain isomers</strong> — same molecular formula, different length of longest chain (e.g., butane vs 2-methylpropane)',
          '<strong>Position isomers</strong> — same chain, different position of the functional group (e.g., butan-1-ol vs butan-2-ol)',
          '<strong>Functional group isomers</strong> — same molecular formula, different functional group (e.g., CH₂=CHCH₂CH₃ vs cyclobutane — same C₄H₈)',
          '<strong>Geometric (E/Z) isomers</strong> — <em>stereoisomers</em>: same connectivity, different arrangement around a C=C double bond. Introduced at Year 12.',
          '<strong>Optical isomers</strong> — <em>stereoisomers</em>: same connectivity, non-superimposable mirror images. New at Year 13 (A2).'
        ]
      }
    },
    {
      id: 'svg-isomer-hierarchy',
      type: 'svg',
      data: {
        svg: '<svg width="460" height="200" xmlns="http://www.w3.org/2000/svg"><defs><style>.box{rx:6;ry:6;fill:#f0f4ff;stroke:#6366f1;stroke-width:1.5}.hd{rx:6;ry:6;fill:#6366f1;stroke:none}.lbl{font-family:Arial;font-size:12px;fill:#1f2937;text-anchor:middle}.wlbl{font-family:Arial;font-size:12px;fill:#fff;text-anchor:middle;font-weight:bold}.ln{stroke:#6366f1;stroke-width:1.5;fill:none}</style></defs><rect class="hd" x="170" y="8" width="120" height="28"/><text class="wlbl" x="230" y="27">Isomers</text><line class="ln" x1="230" y1="36" x2="230" y2="52"/><line class="ln" x1="80" y1="52" x2="380" y2="52"/><line class="ln" x1="80" y1="52" x2="80" y2="68"/><line class="ln" x1="230" y1="52" x2="230" y2="68"/><line class="ln" x1="380" y1="52" x2="380" y2="68"/><rect class="box" x="30" y="68" width="100" height="28"/><text class="lbl" x="80" y="86">Structural</text><rect class="box" x="180" y="68" width="100" height="28"/><text class="lbl" x="230" y="86">Positional</text><rect class="box" x="330" y="68" width="100" height="28"/><text class="lbl" x="380" y="86">Stereoisomers</text><line class="ln" x1="80" y1="96" x2="80" y2="112"/><line class="ln" x1="55" y1="112" x2="105" y2="112"/><line class="ln" x1="55" y1="112" x2="55" y2="128"/><line class="ln" x1="105" y1="112" x2="105" y2="128"/><rect class="box" x="10" y="128" width="90" height="28"/><text class="lbl" x="55" y="146">Chain</text><rect class="box" x="60" y="128" width="90" height="28"/><text class="lbl" x="105" y="146">Func. Group</text><line class="ln" x1="380" y1="96" x2="380" y2="112"/><line class="ln" x1="325" y1="112" x2="435" y2="112"/><line class="ln" x1="325" y1="112" x2="325" y2="128"/><line class="ln" x1="435" y1="112" x2="435" y2="128"/><rect class="box" x="275" y="128" width="100" height="28"/><text class="lbl" x="325" y="146">Geometric (E/Z)</text><rect class="box" x="385" y="128" width="100" height="28"/><text class="lbl" x="435" y="146" fill="#6366f1" font-weight="bold">Optical ★</text><text font-family="Arial" font-size="10" fill="#6366f1" x="350" y="185">★ New at A2 — non-superimposable mirror images</text></svg>',
        caption: 'Full isomer hierarchy. Optical isomers are a type of stereoisomer — new content at A2 level.'
      }
    },
    {
      id: 'h-chiral-centre',
      type: 'heading',
      data: { text: 'Chiral Centre Definition', level: 2 }
    },
    {
      id: 'callout-hands-analogy',
      type: 'callout',
      data: {
        style: 'key',
        title: '🖑 Hands Analogy — The Easiest Way to Visualise Enantiomers',
        text: 'Your hands are the best real-world example of enantiomers:\n• Hold your hands palms facing DOWN, one on top of the other — they are NOT the same. Thumbs stick out on opposite sides. They are non-superimposable.\n• Hold your hands palms face-to-face — they are mirror images of each other.\n• No matter how you rotate one hand, you cannot make it identical to the other.\nThis is exactly what enantiomers are: non-superimposable mirror images.'
      }
    },
    {
      id: 'list-chiral-definition',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Chiral centre</strong> = a carbon atom bonded to <strong>four different groups</strong> of atoms',
          'Must be <strong>sp³ hybridised</strong> (tetrahedral geometry) — sp² carbons (C=O, C=C) are never chiral',
          'If any two groups are identical → NOT chiral',
          '<strong>Marked with an asterisk (*)</strong> in structural diagrams to show asymmetry: C*',
          'The molecule can then exist as two <strong>non-superimposable mirror images (enantiomers)</strong>',
          'Example: butan-2-ol — C2 is bonded to OH, H, CH₃, and C₂H₅ — four different groups → chiral',
          'Example: propan-2-ol — C2 is bonded to OH, H, CH₃, and CH₃ — two identical CH₃ groups → NOT chiral'
        ]
      }
    },
    {
      id: 'svg-chiral-centre',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="440" height="230"><defs><style>.bond{stroke:#1f2937;stroke-width:2;fill:none}.wbond{fill:#1f2937}.lbl{font-family:Arial;font-size:13px;fill:#1f2937;font-weight:bold}.ttl{font-family:Arial;font-size:11px;fill:#6366f1;font-weight:bold}.sub{font-family:Arial;font-size:11px;fill:#555}</style></defs><text class="ttl" x="70" y="16" text-anchor="middle">Enantiomer 1</text><text class="ttl" x="370" y="16" text-anchor="middle">Enantiomer 2</text><text class="sub" x="220" y="115" text-anchor="middle">↔ Mirror</text><line x1="220" y1="20" x2="220" y2="220" stroke="#ccc" stroke-width="1.5" stroke-dasharray="5,4"/><circle cx="80" cy="110" r="16" fill="#6366f1"/><text font-family="Arial" font-size="13" x="80" y="115" text-anchor="middle" fill="white" font-weight="bold">C*</text><line x1="80" y1="94" x2="80" y2="50" class="bond"/><text class="lbl" x="80" y="44" text-anchor="middle">W</text><line x1="80" y1="126" x2="80" y2="168" class="bond"/><text class="lbl" x="80" y="180" text-anchor="middle">X</text><polygon class="wbond" points="68,104 38,75 52,73"/><text class="lbl" x="25" y="72">Y</text><polygon class="wbond" points="94,116 132,140 118,148"/><text class="lbl" x="138" y="155">Z</text><text class="sub" x="80" y="205" text-anchor="middle">Clockwise from X: X→Z</text><circle cx="360" cy="110" r="16" fill="#6366f1"/><text font-family="Arial" font-size="13" x="360" y="115" text-anchor="middle" fill="white" font-weight="bold">C*</text><line x1="360" y1="94" x2="360" y2="50" class="bond"/><text class="lbl" x="360" y="44" text-anchor="middle">W</text><line x1="360" y1="126" x2="360" y2="168" class="bond"/><text class="lbl" x="360" y="180" text-anchor="middle">X</text><polygon class="wbond" points="372,104 402,75 388,73"/><text class="lbl" x="405" y="72">Z</text><polygon class="wbond" points="346,116 308,140 322,148"/><text class="lbl" x="296" y="155">Y</text><text class="sub" x="360" y="205" text-anchor="middle">Clockwise from X: X→Y</text></svg>',
        caption: 'Two enantiomers of a chiral molecule. Wedge bonds = coming out of paper; hash bonds = going in. Travel clockwise from X: left gives Z, right gives Y — they are different arrangements = enantiomers. Mark chiral carbon with *.'
      }
    },
    {
      id: 'h-enantiomers',
      type: 'heading',
      data: { text: 'Enantiomers & Optical Isomerism', level: 2 }
    },
    {
      id: 'list-enantiomers-points',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Enantiomers</strong> = pairs of stereoisomers that are non-superimposable mirror images of each other',
          'Also called <strong>optical isomers</strong> because they rotate plane-polarised light',
          'Holding models of both — you can NEVER overlap them by rotation or translation in 3D space',
          'They have the same molecular formula, same connectivity, same functional groups — only their 3D arrangement differs',
          'One enantiomer rotates plane-polarised light <strong>clockwise (+, dextrorotatory)</strong>',
          'The other rotates it <strong>anti-clockwise (−, laevorotatory)</strong>, by exactly the same angle',
          'Named with <strong>L and D notation</strong> (mainly for amino acids) or <strong>R and S notation</strong> (other compounds) — these notation systems are not required in detail for A-level'
        ]
      }
    },
    {
      id: 'callout-ld-rs',
      type: 'callout',
      data: {
        style: 'tip',
        title: '💬 L/D and R/S Notation — Awareness Only',
        text: '• <strong>L and D</strong>: used mainly for amino acids and sugars (biological convention). L-amino acids are in proteins; D-glucose is in energy metabolism.\n• <strong>R and S</strong>: IUPAC systematic notation based on priority of groups using Cahn-Ingold-Prelog rules. R = rectus (Latin: right), S = sinister (left).\n• You do NOT need to determine R or S in your A-level exam. You just need to know that two enantiomers exist and that one is the mirror image of the other.'
      }
    },
    {
      id: 'h-plane-polarised',
      type: 'heading',
      data: { text: 'Plane Polarised Light & the Polarimeter', level: 2 }
    },
    {
      id: 'list-polarised-light',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Unpolarised light</strong>: oscillates in ALL planes perpendicular to its direction of travel',
          '<strong>Polarised (monochromatic) light</strong>: oscillates in ONE plane only',
          'A <strong>polaroid filter (polariser)</strong> blocks all oscillations except one plane → produces plane-polarised light',
          'A second polaroid filter at right-angles to the first will <strong>block all the light</strong> — proof that it is plane-polarised',
          'If an <strong>optically active</strong> compound is placed between them, it <strong>rotates the plane of polarisation</strong>',
          '<strong>Clockwise rotation = positive angle</strong> (e.g., +60°, dextrorotatory)',
          '<strong>Anti-clockwise rotation = negative angle</strong> (e.g., −60°, laevorotatory)',
          'An <strong>analyser</strong> (second polaroid filter after the sample) measures the angle of rotation'
        ]
      }
    },
    {
      id: 'svg-polarimeter',
      type: 'svg',
      data: {
        svg: '<svg width="500" height="160" xmlns="http://www.w3.org/2000/svg"><defs><style>.bx{rx:6;ry:6;fill:#e0e7ff;stroke:#6366f1;stroke-width:1.5}.lbl{font-family:Arial;font-size:11px;fill:#1f2937;text-anchor:middle}.arr{stroke:#6366f1;stroke-width:2;marker-end:url(#ah)}.step{font-family:Arial;font-size:10px;fill:#6366f1;font-weight:bold;text-anchor:middle}</style><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#6366f1"/></marker></defs><rect class="bx" x="4" y="55" width="68" height="40"/><text class="lbl" x="38" y="72">💡 Light</text><text class="lbl" x="38" y="86">Source</text><line class="arr" x1="73" y1="75" x2="95" y2="75"/><rect class="bx" x="96" y="55" width="68" height="40"/><text class="lbl" x="130" y="72">Polariser</text><text class="lbl" x="130" y="86">(Filter 1)</text><line class="arr" x1="165" y1="75" x2="187" y2="75"/><rect x="188" y="45" width="100" height="60" rx="6" ry="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/><text class="lbl" x="238" y="68">Sample Tube</text><text class="lbl" x="238" y="82">(optically</text><text class="lbl" x="238" y="94">active?)</text><line class="arr" x1="289" y1="75" x2="311" y2="75"/><rect class="bx" x="312" y="55" width="68" height="40"/><text class="lbl" x="346" y="72">Analyser</text><text class="lbl" x="346" y="86">(Filter 2)</text><line class="arr" x1="381" y1="75" x2="403" y2="75"/><rect class="bx" x="404" y="55" width="80" height="40"/><text class="lbl" x="444" y="72">Detector</text><text class="lbl" x="444" y="86">(Angle α)</text><text class="step" x="38" y="145">¹ All planes</text><text class="step" x="130" y="145">² One plane</text><text class="step" x="238" y="145">³ Rotation?</text><text class="step" x="346" y="145">⁴ Measure α</text><text class="step" x="444" y="145">⁵ +ve or −ve</text></svg>',
        caption: 'Polarimeter apparatus: (1) unpolarised light → (2) polariser gives plane-polarised light → (3) sample rotates plane if optically active → (4) analyser measures angle → (5) positive (+) = clockwise, negative (−) = anti-clockwise'
      }
    },
    {
      id: 'h-enantiomer-properties',
      type: 'heading',
      data: { text: 'Properties of Enantiomers', level: 2 }
    },
    {
      id: 'tbl-enantiomer-properties',
      type: 'comparisonTable',
      data: {
        headers: ['Property', 'Same or Different?', 'Reason'],
        rows: [
          ['Boiling point', 'SAME', 'Same bonds and intermolecular forces'],
          ['Melting point', 'SAME', 'Same lattice energy in solid state'],
          ['Solubility', 'SAME', 'Same polarity and H-bonding ability'],
          ['Electrical conductivity', 'SAME', 'Same ionic character'],
          ['Rotation of plane-polarised light', 'DIFFERENT (opposite direction)', 'Different 3D arrangement of groups around C*'],
          ['Reactions with achiral reagents', 'SAME', 'Achiral reagents approach from equivalent faces'],
          ['Reactions with other chiral molecules', 'DIFFERENT', 'Different enantiomers of a chiral reagent react differently (e.g., enzymes, receptors)']
        ],
        caption: 'Enantiomers have identical physical and chemical properties EXCEPT their effect on plane-polarised light and reactions with other chiral species'
      }
    },
    {
      id: 'h-recognition',
      type: 'heading',
      data: { text: 'Identifying Chiral Centres in Exam Questions', level: 2 }
    },
    {
      id: 'list-recognition',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '1. Find all carbons with <strong>four single bonds only</strong> (sp³)',
          '2. List the four groups on each carbon',
          '3. If ALL four groups are different → chiral centre (mark with *)',
          '4. If ANY two groups are the same (including both H atoms, or two identical chains) → NOT chiral',
          '<strong>sp² carbons</strong> (C=O, C=C) are never chiral — they only make 3 bonds and use one bond twice',
          '<strong>In ring structures</strong>: each ring carbon usually has 2 H atoms unless specified otherwise — check the diagram carefully',
          '<strong>Multiple chiral centres</strong>: molecule can have 2ⁿ possible stereoisomers (n = number of chiral centres)'
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
          { text: 'Can identify a chiral centre: sp³ carbon with four different groups (mark with *)', checked: false },
          { text: 'Can explain using the hands analogy why enantiomers are non-superimposable', checked: false },
          { text: 'Can describe and draw the polarimeter apparatus (5 stages)', checked: false },
          { text: 'Know that clockwise rotation = positive (+), anti-clockwise = negative (−)', checked: false },
          { text: 'Know that enantiomers have identical physical properties EXCEPT rotation of plane-polarised light', checked: false },
          { text: 'Aware of L/D (amino acids) and R/S notation but not required to determine them', checked: false }
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
        text: 'Chiral centre = sp³ carbon bonded to four different groups (marked C*). Enantiomers = non-superimposable mirror images (like hands). Optical isomers rotate plane-polarised light in opposite directions: (+) = clockwise, (−) = anti-clockwise. Polarimeter: light → polariser → sample → analyser → detector. Enantiomers have identical physical and chemical properties EXCEPT rotation of plane-polarised light and reactions with other chiral molecules. L/D notation (amino acids), R/S notation (other compounds) — awareness only.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-chiral-definition',
        prompt: 'What are the requirements for a carbon atom to be a chiral centre? What notation marks it in a diagram?'
      },
      {
        id: 'cue-2',
        blockId: 'callout-hands-analogy',
        prompt: 'Use the hands analogy to explain what is meant by non-superimposable mirror images.'
      },
      {
        id: 'cue-3',
        blockId: 'svg-polarimeter',
        prompt: 'Describe the five stages of the polarimeter apparatus in order.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-enantiomer-properties',
        prompt: 'List two properties that are the SAME for both enantiomers and one property that is DIFFERENT. Explain why.'
      },
      {
        id: 'cue-5',
        blockId: 'list-recognition',
        prompt: 'How do you identify a chiral centre in a ring molecule drawn without explicit H atoms?'
      }
    ],
    summaryText: 'Optical isomers are a type of stereoisomer. Chiral centre = sp³ carbon bonded to exactly four different groups (marked C*). Enantiomers = non-superimposable mirror images. Polarimeter: source → polariser → sample → analyser → detector. Clockwise = +, anti-clockwise = −. Same physical/chemical properties EXCEPT rotation of plane-polarised light. L/D (amino acids), R/S (others) — awareness only.',
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
