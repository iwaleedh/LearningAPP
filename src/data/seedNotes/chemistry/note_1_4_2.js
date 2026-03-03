export const note_chemistry_1_4_2 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define homologous series and functional group; identify and name the major functional groups in organic chemistry.'
    }
  }, {
    id: 'h-homologous',
    type: 'heading',
    data: {
      text: 'Homologous Series',
      level: 2
    }
  }, {
    id: 'callout-key-homologous',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Homologous Series — Definition',
      text: 'A homologous series is a family of organic compounds that: (1) share the same functional group, (2) have the same general formula, (3) differ by a –CH₂– unit between successive members, and (4) show a gradual trend in physical properties.'
    }
  }, {
    id: 'p-trends',
    type: "list",
    data: {
      style: "unordered",
      items: ["Because each successive member adds one \u2013CH\u2082\u2013 unit (mass +14), physical properties such as boiling point, density and viscosity change gradually and predictably along the series.", "Chemical properties are similar throughout because they share the same functional group."]
    }
  }, {
    id: 'table-homologous',
    type: 'comparisonTable',
    data: {
      caption: 'Properties of the alkane homologous series',
      headers: ['Name', 'Formula', 'Mr', 'Boiling point / °C', 'State at r.t.p.'],
      rows: [['Methane', 'CH₄', '16', '−162', 'Gas'], ['Ethane', 'C₂H₆', '30', '−89', 'Gas'], ['Propane', 'C₃H₈', '44', '−42', 'Gas'], ['Butane', 'C₄H₁₀', '58', '−1', 'Gas'], ['Pentane', 'C₅H₁₂', '72', '+36', 'Liquid'], ['Hexane', 'C₆H₁₄', '86', '+69', 'Liquid'], ['Decane', 'C₁₀H₂₂', '142', '+174', 'Liquid']]
    }
  }, {
    id: 'h-functional',
    type: 'heading',
    data: {
      text: 'Functional Groups',
      level: 2
    }
  }, {
    id: 'callout-key-fg',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Functional Group — Definition',
      text: 'A functional group is an atom or group of atoms in an organic molecule that is responsible for the characteristic chemical reactions of that compound.'
    }
  }, {
    id: 'table-fg',
    type: 'comparisonTable',
    data: {
      caption: 'Major functional groups at A-level',
      headers: ['Functional group', 'Structure', 'Series name', 'General formula', 'Example'],
      rows: [['Alkane (C–C only)', 'C–C single bonds', 'Alkanes', 'CₙH₂ₙ₊₂', 'Ethane C₂H₆'], ['Alkene (C=C)', '>C=C<', 'Alkenes', 'CₙH₂ₙ', 'Ethene C₂H₄'], ['Alkyne (C≡C)', '–C≡C–', 'Alkynes', 'CₙH₂ₙ₋₂', 'Ethyne C₂H₂'], ['Halogenoalkane (C–X)', '–C–X (X = F, Cl, Br, I)', 'Halogenoalkanes', 'CₙH₂ₙ₊₁X', '1-chloropropane'], ['Alcohol (–OH)', '–C–OH', 'Alcohols', 'CₙH₂ₙ₊₁OH', 'Ethanol C₂H₅OH'], ['Aldehyde (–CHO)', '–CHO', 'Aldehydes', 'CₙH₂ₙO', 'Ethanal CH₃CHO'], ['Ketone (>C=O)', '>C=O (internal)', 'Ketones', 'CₙH₂ₙO', 'Propanone CH₃COCH₃'], ['Carboxylic acid (–COOH)', '–COOH', 'Carboxylic acids', 'CₙH₂ₙO₂', 'Ethanoic acid CH₃COOH'], ['Ester (–COO–)', '–COO–', 'Esters', 'CₙH₂ₙO₂', 'Ethyl ethanoate'], ['Amine (–NH₂)', '–NH₂', 'Amines', 'CₙH₂ₙ₊₁NH₂', 'Ethylamine C₂H₅NH₂'], ['Amide (–CONH₂)', '–CONH₂', 'Amides', '–', 'Ethanamide CH₃CONH₂'], ['Nitrile (–CN)', '–C≡N', 'Nitriles', 'CₙH₂ₙ₋₁N', 'Ethanenitrile CH₃CN'], ['Arene / Benzene ring', 'C₆H₆ ring', 'Arenes', '–', 'Benzene, methylbenzene']]
    }
  }, {
    id: 'h-general-formulae',
    type: 'heading',
    data: {
      text: 'General Formulae Summary',
      level: 2
    }
  }, {
    id: 'list-general',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['<strong>Alkanes:</strong> CₙH₂ₙ₊₂ (saturated, no functional group)', '<strong>Cycloalkanes:</strong> CₙH₂ₙ (saturated ring)', '<strong>Alkenes:</strong> CₙH₂ₙ (one C=C double bond)', '<strong>Alkynes:</strong> CₙH₂ₙ₋₂ (one C≡C triple bond)', '<strong>Alcohols:</strong> CₙH₂ₙ₊₁OH', '<strong>Carboxylic acids:</strong> CₙH₂ₙO₂ or CₙH₂ₙ₋₁COOH']
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Memory Aid — General Formulae',
      text: 'Alkanes: 2n+2 hydrogens. Each degree of unsaturation (double bond or ring) removes 2 H atoms:\n• 1 double bond or 1 ring → CₙH₂ₙ\n• 2 double bonds / rings / 1 triple bond → CₙH₂ₙ₋₂\nThis is called the "degree of unsaturation" or "index of hydrogen deficiency" (IHD).'
    }
  }, {
    id: 'h-ihd',
    type: 'heading',
    data: {
      text: 'Index of Hydrogen Deficiency (IHD)',
      level: 2
    }
  }, {
    id: 'eq-ihd',
    type: 'equation',
    data: {
      html: 'IHD = <span class="nb-frac"><span class="nb-num">2C + 2 + N − H − X</span><span class="nb-den">2</span></span>',
      caption: 'C = carbons, H = hydrogens, N = nitrogens, X = halogens. Each ring or double bond = IHD of 1; triple bond = IHD of 2.'
    }
  }, {
    id: 'callout-worked',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — IHD',
      text: 'Calculate the IHD of C₄H₈.\n\nIHD = (2×4 + 2 − 8) / 2 = (8 + 2 − 8) / 2 = 2/2 = 1\n\nIHD = 1 → one degree of unsaturation: either one C=C double bond (alkene) or one ring (cyclobutane). Both have the same molecular formula C₄H₈.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Confusing alkenes (CₙH₂ₙ) with cycloalkanes (CₙH₂ₙ) — they are isomers with the same general formula but different functional groups.\n• Forgetting that oxygen atoms do NOT appear in the IHD formula.\n• Calling the C=O group a "functional group" without specifying whether it is in an aldehyde, ketone, acid or ester.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define homologous series and list its four properties.',
        checked: false
      }, {
        text: 'I can define functional group and explain why it determines chemical properties.',
        checked: false
      }, {
        text: 'I can identify the functional group and series name for alkanes, alkenes, alcohols, aldehydes, ketones, carboxylic acids, and halogenoalkanes.',
        checked: false
      }, {
        text: 'I can write general formulae for alkanes, alkenes, cycloalkanes, and alkynes.',
        checked: false
      }, {
        text: 'I can calculate the IHD from a molecular formula.',
        checked: false
      }]
    }
  },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: A homologous series shares the same functional group, general formula, and gradual change in physical properties; members differ by CH₂.\n\nApply: Identify functional group, name, and general formula for CH₃OH, CH₃COOH, CH₃CH₂NH₂.\n\nAnalyze: Why do boiling points increase with chain length? Relate to London forces and electron count.\n\nEvaluate: "Functional groups determine chemical properties; chain length determines physical." Assess with examples.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'A homologous series shares a functional group and general formula, differs by –CH₂– units, and shows gradual trends in physical properties. The functional group (e.g. –OH, C=C, –COOH) determines the characteristic reactions. General formulae: alkanes CₙH₂ₙ₊₂, alkenes/cycloalkanes CₙH₂ₙ. IHD = (2C + 2 − H) / 2 for hydrocarbons.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-homologous',
      prompt: 'State the four defining characteristics of a homologous series.'
    }, {
      id: 'cue-2',
      blockId: 'callout-key-fg',
      prompt: 'What is a functional group and why is it important?'
    }, {
      id: 'cue-3',
      blockId: 'table-fg',
      prompt: 'What are the functional groups of alcohols, alkenes, and carboxylic acids?'
    }, {
      id: 'cue-4',
      blockId: 'eq-ihd',
      prompt: 'What is the IHD formula, and what does an IHD of 2 suggest?'
    }, {
      id: 'cue-5',
      blockId: 'list-general',
      prompt: 'Give the general formulae for alkanes, alkenes, and cycloalkanes.'
    }],
    summaryText: 'Homologous series: same functional group, general formula, differ by CH₂, gradual property trends. Functional group = source of reactions. Alkanes CₙH₂ₙ₊₂; alkenes = cycloalkanes = CₙH₂ₙ. IHD = degrees of unsaturation.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'IUPAC nomenclature recommendations',
    detail: 'IUPAC 2013 recommendations standardise functional group naming and general formulae worldwide.',
    year: '2013',
    source: 'IUPAC',
    tags: ['functional groups', 'nomenclature']
  }]
};