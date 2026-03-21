export const note_chemistry_4_15_1 = {
  blocks: [
    {
      id: 'obj-racemate',
      type: 'objective',
      data: {
        text: 'Understand racemates, optical inactivity, polarimetry, and the biological significance of chirality in pharmaceuticals.'
      }
    },
    {
      id: 'h-racemate-def',
      type: 'heading',
      data: { text: 'Racemates & Optical Inactivity', level: 2 }
    },
    {
      id: 'callout-racemate-exam-def',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Exam Definition: Racemic Mixture',
        text: 'A <strong>racemic mixture</strong> is an <strong>equimolar</strong> (50:50) mixture of the two enantiomers of a chiral compound.\n\nKey exam words:\n• \'Equimolar\' or \'equal amounts\' — MUST specify 50:50\n• \'Shows NO optical activity\' — because the rotations of the two enantiomers cancel exactly\n• Also written as (±) or as the racemate'
      }
    },
    {
      id: 'list-racemate-points',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Each enantiomer individually</strong> rotates plane-polarised light (one +, one −)',
          '<strong>In a racemic mixture</strong>: 50% rotate it clockwise, 50% rotate it anti-clockwise → exact cancellation',
          '<strong>Net rotation = 0°</strong> → no optical activity detected by the analyser',
          'The compound is still chiral at the molecular level — it just shows no <em>macroscopic</em> optical activity',
          'Most lab syntheses produce racemates — <strong>unless</strong> a chiral catalyst, chiral reagent, or enzyme is used',
          '<strong>Common example:</strong> SN1 reaction at a chiral centre always produces a racemic mixture'
        ]
      }
    },
    {
      id: 'p-why-racemate',
      type: 'paragraph',
      data: {
        text: 'Most laboratory syntheses of compounds with chiral centres produce racemates because the reaction mechanism does not favour one enantiomer over the other. Unless a chiral reagent, chiral catalyst, or enzymatic pathway is used, a carbon with four different groups can be formed equally easily in both stereochemical configurations. For example, reduction of a ketone with a standard reducing agent (like NaBH₄) attacks from either face of the C=O bond with equal probability, giving both (R) and (S) products as a 1:1 mixture.'
      }
    },
    {
      id: 'callout-racemate-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Optical Inactivity of Racemates',
        text: 'A racemate is optically inactive not because the molecules are non-chiral, but because equal numbers of (+) and (−) enantiomers cancel out the optical rotation. If you separate a racemate into its component enantiomers (optical resolution), each pure enantiomer will again be optically active. Resolution can be done by crystallisation with a chiral reagent, chromatography, or enzymatic degradation.'
      }
    },
    {
      id: 'h-polarimetry',
      type: 'heading',
      data: { text: 'Polarimetry & Measuring Optical Rotation', level: 2 }
    },
    {
      id: 'p-polarimetry-method',
      type: 'paragraph',
      data: {
        text: 'A polarimeter measures the angle through which plane-polarised light is rotated by a solution. The apparatus consists of: (1) a light source, (2) a polariser (produces plane-polarised light), (3) a sample cell (path length typically 10 cm), (4) an analyser (second polariser), and (5) a detector. The angle of rotation (α, in degrees) is recorded. The specific rotation [α] is defined as: [α] = α / (c × l), where c is concentration (g cm⁻³) and l is path length (dm). This allows comparison of optical activity between different substances.'
      }
    },
    {
      id: 'equation-rotation',
      type: 'equation',
      data: {
        html: '[α] = <span class="nb-frac"><span class="nb-num">α</span><span class="nb-den">c × l</span></span>',
        caption: 'Specific rotation: α = measured rotation (°), c = concentration (g cm⁻³), l = path length (dm). Typical [α] values range from −180° to +180°.'
      }
    },
    {
      id: 'p-polarimetry-use',
      type: 'paragraph',
      data: {
        text: 'Polarimetry is a quick analytical tool for: (1) confirming the presence of a chiral centre, (2) determining enantiomer purity (if [α]observed ≠ [α]theoretical, the sample is not pure), (3) monitoring reactions that create or destroy stereochemistry. Temperature and wavelength must be controlled because [α] is temperature- and wavelength-dependent (often measured at 589 nm, the sodium D-line, and 20°C).'
      }
    },
    {
      id: 'h-biological-chirality',
      type: 'heading',
      data: { text: 'Biological Importance of Chirality', level: 2 }
    },
    {
      id: 'p-drug-chirality',
      type: 'paragraph',
      data: {
        text: 'Chirality is crucial in pharmaceutical design because living systems are chiral. Enzymes, receptors, and membrane proteins are asymmetric structures that recognise and bind specific enantiomers. Often, only one enantiomer of a drug is therapeutically active, while the other may be inactive or even toxic. This has led to stricter regulations on drug synthesis: modern drugs must be produced as single enantiomers (enantiopure) rather than racemates.'
      }
    },
    {
      id: 'callout-thalidomide',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Thalidomide — A Cautionary Tale',
        text: 'Thalidomide was marketed in the 1950s–60s as a cure for morning sickness in pregnancy.\n\n• Sold as a <strong>racemic mixture (50:50)</strong> of both enantiomers\n• The <strong>left-handed enantiomer</strong> was an effective <strong>anti-emetic</strong> (stopped nausea) — therapeutic\n• The <strong>right-handed enantiomer</strong> was <strong>highly teratogenic</strong> — caused severe birth defects, particularly limb deformities (phocomelia), interfering with limb formation\n• Most women took it in the first trimester (when morning sickness peaks) — exactly when limb formation occurs\n• The drug was withdrawn from the market\n• <strong>Key lesson:</strong> enantiomers can interact very differently with biological systems (receptors, enzymes) even with the same molecular formula and connectivity\n• Led to strict pharmaceutical regulations requiring separate testing of each enantiomer'
      }
    },
    {
      id: 'p-natural-products',
      type: 'paragraph',
      data: {
        text: 'Natural products are typically enantiopure. Glucose exists almost exclusively as the D-(+) isomer in nature; the L-(−) isomer is rarely found and is not metabolised efficiently. Amino acids in proteins are all L-(−) forms. This chirality in nature reflects the evolutionary history of life and the stereospecificity of biological processes (enzyme catalysis, DNA replication, protein synthesis).'
      }
    },
    {
      id: 'list-chiral-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Ibuprofen: only the (S)-enantiomer is a painkiller; the (R)-enantiomer is converted to (S) in the body but causes side effects.',
          'Limonene: (R)-(+)-limonene smells like orange; (S)-(−)-limonene smells like lemon — identical molecules but different smells due to different receptor binding.',
          'Aspartame: the artificial sweetener; only one enantiomer is sweet; the other is bitter or tasteless.',
          'Dopamine: the neurotransmitter; only (L)-(−)-dopamine is active in the brain.'
        ]
      }
    },
    {
      id: 'h-racemate-resolution',
      type: 'heading',
      data: { text: 'Optical Resolution Techniques', level: 2 }
    },
    {
      id: 'p-resolution',
      type: 'paragraph',
      data: {
        text: 'Separating a racemate into its pure enantiomers is called optical resolution. Common methods include: (1) Crystallisation with a chiral resolving agent (e.g., (+)-tartaric acid reacts with racemic amines to form salts with different solubilities). (2) Chromatography on a chiral stationary phase (chiral HPLC). (3) Enzymatic resolution using enantioselective enzymes. (4) Fractional crystallisation from a suitable solvent. Modern industry often uses chiral catalysts or enzymatic synthesis to make single enantiomers directly, avoiding the need for post-synthesis resolution.'
      }
    },
    {
      id: 'checklist-racemate',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand why racemates are optically inactive despite containing chiral molecules.', checked: false },
          { text: 'I can calculate specific rotation using [α] = α / (c × l).', checked: false },
          { text: 'I know why thalidomide is a cautionary example of the importance of drug chirality.', checked: false },
          { text: 'I can explain why enzymes and receptors recognise specific enantiomers.', checked: false }
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
        text: 'Understand: A racemic mixture contains equal amounts of both enantiomers, producing zero net optical rotation. Racemisation occurs in SN1 but not SN2 reactions.\n\nApply: Explain why SN1 reactions at a chiral centre produce racemic mixtures using the carbocation intermediate.\n\nAnalyze: How does a polarimeter distinguish between a pure enantiomer and a racemic mixture?\n\nEvaluate: Is it possible to resolve a racemic mixture into pure enantiomers? Discuss practical methods.'
      },
      terms: []
    },
    {
      id: 'summary-racemate',
      type: 'summary',
      data: {
        text: 'A racemate is a 50:50 mixture of enantiomers that is optically inactive because rotations cancel. Laboratory syntheses typically produce racemates unless a chiral reagent or catalyst is used. Polarimetry measures optical rotation (specific rotation [α] = α / (c × l)). Chirality is biologically significant: drugs and natural products are usually single enantiomers because enzymes and receptors are chiral. The thalidomide tragedy illustrates the dangers of ignoring stereochemistry in pharmaceuticals. Optical resolution separates racemates into pure enantiomers.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Racemate Exam Definition: Equimolar 50:50",
        text: "Exam definition: 'A racemic mixture is an equimolar (50:50) mixture of the two enantiomers.' You must use the word 'equimolar' or 'equal amounts' \u2014 vague definitions lose marks. Shows NO optical activity in polarimeter because rotations cancel."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'key',
        title: "Thalidomide: Drug Chirality Matters (Clinical Importance)",
        text: "Thalidomide was sold as a racemate. One enantiomer stopped nausea (therapeutic). The other caused severe birth defects (teratogenic). Taken in first trimester (when limbs form), it caused phocomelia. This tragedy led to strict pharmaceutical regulations requiring separate testing of each enantiomer. Exams ask about this."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-racemate-intro',
        prompt: 'What is a racemate and why is it optically inactive?'
      },
      {
        id: 'cue-2',
        blockId: 'p-why-racemate',
        prompt: 'Why do most laboratory syntheses of chiral compounds produce racemates?'
      },
      {
        id: 'cue-3',
        blockId: 'equation-rotation',
        prompt: 'Define specific rotation [α] and write the formula.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-thalidomide',
        prompt: 'Explain the thalidomide tragedy and its relevance to drug chirality.'
      },
      {
        id: 'cue-5',
        blockId: 'p-resolution',
        prompt: 'Name three methods for optical resolution (separating enantiomers from a racemate).'
      }
    ],
    summaryText: 'A racemate is a 50:50 mixture of enantiomers; rotations cancel making it optically inactive. Polarimetry measures specific rotation [α] = α/(c×l). Laboratory syntheses without chiral reagents produce racemates. Biological systems are chiral; one enantiomer of a drug may be active while the other is inactive or toxic (e.g., thalidomide). Optical resolution separates enantiomers by crystallisation, chromatography, or enzymatic methods.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Ibuprofen single-enantiomer formulation',
      detail: 'Early ibuprofen was sold as a racemate, but modern formulations contain only the (S)-(+)-enantiomer, which is the active form. This reduces side effects and improves efficacy, demonstrating the pharmaceutical industry shift toward enantiopure drugs following thalidomide and other stereochemical disasters.',
      year: '2023',
      source: 'Pharmaceutical Chemistry Literature',
      tags: ['drug development', 'chirality', 'racemates', 'enantiomers']
    }
  ]
};
