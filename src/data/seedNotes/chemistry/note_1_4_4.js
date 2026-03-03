export const note_chemistry_1_4_4 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Classify organic reactions into the main reaction types and identify which type applies to a given transformation.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Why Classify Reactions?',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Organic chemistry involves hundreds of reactions, but they fall into a small number of <strong>reaction types</strong>.", "Recognising the type tells you the mechanism, the reagents needed, and the products expected.", "The main types at A-level are: addition, substitution, elimination, oxidation, and reduction."]
    }
  }, {
    id: 'h-types',
    type: 'heading',
    data: {
      text: 'The Main Reaction Types',
      level: 2
    }
  }, {
    id: 'table-types',
    type: 'comparisonTable',
    data: {
      caption: 'Overview of organic reaction types',
      headers: ['Reaction type', 'What happens', 'Key indicator', 'Example'],
      rows: [['Addition', 'Two molecules combine to form one product; a multiple bond becomes a single bond.', 'Unsaturated → saturated; molecular formula increases', 'Ethene + Br₂ → 1,2-dibromoethane'], ['Substitution', 'An atom or group in the molecule is replaced by another atom or group.', 'Same number of C atoms; one group swapped for another', 'CH₄ + Cl₂ → CH₃Cl + HCl (free-radical)'], ['Elimination', 'A small molecule (e.g. H₂O or HBr) is removed from adjacent carbons, forming a double bond.', 'Saturated → unsaturated; small molecule lost', 'Butan-2-ol → but-2-ene + H₂O (acid-catalysed)'], ['Oxidation', 'Gain of oxygen / loss of hydrogen (or increase in oxidation state of C).', 'C–H bonds → C–O bonds; new C=O or COOH appears', 'Ethanol → ethanal → ethanoic acid (with K₂Cr₂O₇)'], ['Reduction', 'Loss of oxygen / gain of hydrogen (or decrease in oxidation state of C).', 'C=O bonds → C–OH or C–H', 'Ethanal + H₂ → ethanol (hydrogenation)'], ['Hydrolysis', 'Water (or hydroxide) breaks a bond, splitting a molecule into two.', 'Ester or halogenoalkane splits with H₂O/OH⁻', 'Ester + NaOH → carboxylate salt + alcohol'], ['Polymerisation', 'Many monomer units join to form a very long chain.', 'Small unsaturated monomers → large polymer', 'n(CH₂=CH₂) → (–CH₂–CH₂–)ₙ'], ['Condensation', 'Two molecules join with loss of a small molecule (H₂O or HCl).', 'New bond formed + H₂O or HCl lost', 'Amino acid + amino acid → dipeptide + H₂O']]
    }
  }, {
    id: 'h-sub-types',
    type: 'heading',
    data: {
      text: 'Subtypes of Substitution',
      level: 2
    }
  }, {
    id: 'p-sub',
    type: "list",
    data: {
      style: "unordered",
      items: ["Substitution reactions are further classified by the mechanism and the nature of the attacking species:"]
    }
  }, {
    id: 'table-sub',
    type: 'comparisonTable',
    data: {
      caption: 'Substitution subtypes',
      headers: ['Subtype', 'Abbreviation', 'Attacking species', 'Example'],
      rows: [['Free-radical substitution', 'S_R', 'Free radical (•)', 'Alkane + halogen (UV light)'], ['Nucleophilic substitution', 'S_N1 / S_N2', 'Nucleophile (:)', 'Halogenoalkane + OH⁻ → alcohol'], ['Electrophilic substitution', 'S_E', 'Electrophile (+)', 'Benzene + Br₂ / AlBr₃ → bromobenzene']]
    }
  }, {
    id: 'h-add-types',
    type: 'heading',
    data: {
      text: 'Subtypes of Addition',
      level: 2
    }
  }, {
    id: 'table-add',
    type: 'comparisonTable',
    data: {
      caption: 'Addition subtypes',
      headers: ['Subtype', 'Attacking species', 'Example'],
      rows: [['Electrophilic addition', 'Electrophile (e.g. H⁺, Br⁺)', 'Alkene + HBr → halogenoalkane'], ['Nucleophilic addition', 'Nucleophile (e.g. CN⁻, H⁻)', 'Aldehyde + HCN → hydroxynitrile'], ['Addition polymerisation', 'Radical or ionic', 'Alkene monomers → polymer']]
    }
  }, {
    id: 'h-redox',
    type: 'heading',
    data: {
      text: 'Oxidation and Reduction in Organic Chemistry',
      level: 2
    }
  }, {
    id: 'p-redox',
    type: "list",
    data: {
      style: "unordered",
      items: ["In organic chemistry, oxidation and reduction are most easily recognised by changes in the number of C\u2013H and C\u2013O bonds:"]
    }
  }, {
    id: 'list-redox',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['<strong>Oxidation:</strong> gain of oxygen OR loss of hydrogen (increase in C–O bonds, decrease in C–H bonds)', '<strong>Reduction:</strong> loss of oxygen OR gain of hydrogen (decrease in C–O bonds, increase in C–H bonds)', 'Oxidising agents: acidified K₂Cr₂O₇ (orange → green), KMnO₄, O₂', 'Reducing agents: LiAlH₄ (lithium tetrahydridoaluminate), NaBH₄, H₂/Ni']
    }
  }, {
    id: 'callout-worked',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Classifying Reactions',
      text: 'Classify each of the following:\n\n1. CH₃CH₂OH + [O] → CH₃CHO\n→ Oxidation (loss of 2H; primary alcohol → aldehyde)\n\n2. CH₃Br + NaOH → CH₃OH + NaBr\n→ Nucleophilic substitution (–Br replaced by –OH)\n\n3. CH₂=CH₂ + H₂ → CH₃CH₃\n→ Addition (hydrogenation; double bond → single bond)\n\n4. CH₃CH₂OH → CH₂=CH₂ + H₂O\n→ Elimination (loss of H₂O; saturated → unsaturated)'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tip',
      text: 'In exam questions, look for these clues:\n• Addition: double bond disappears, molecular formula increases.\n• Elimination: double bond appears, small molecule lost.\n• Substitution: same carbon skeleton, one group replaced.\n• Oxidation: more oxygens or fewer hydrogens on carbon.\n• Reduction: fewer oxygens or more hydrogens on carbon.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can define and distinguish addition, substitution, elimination, oxidation, and reduction.',
        checked: false
      }, {
        text: 'I can classify a given organic reaction into the correct reaction type.',
        checked: false
      }, {
        text: 'I can name the three subtypes of substitution and their attacking species.',
        checked: false
      }, {
        text: 'I can identify oxidation and reduction of organic molecules by changes in C–H and C–O bonds.',
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
      text: 'Understand: Reactions classified as addition, substitution, elimination, oxidation, reduction, hydrolysis, condensation based on bond changes.\n\nApply: Classify: (a) CH₂=CH₂ + HBr → CH₃CH₂Br (b) CH₃CH₂Br + NaOH → CH₃CH₂OH + NaBr\n\nAnalyze: Why do alkenes undergo addition but alkanes undergo substitution? Relate to σ vs π bonds.\n\nEvaluate: "All reactions producing water are condensation reactions." Provide a counter-example.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'The main organic reaction types are: addition (multiple bond → single), substitution (group swapped), elimination (small molecule lost, double bond formed), oxidation (gain O / lose H), reduction (lose O / gain H), hydrolysis, polymerisation, and condensation. Substitution subtypes: free-radical (SR), nucleophilic (SN), electrophilic (SE).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-types',
      prompt: 'Define addition and elimination reactions and give one example of each.'
    }, {
      id: 'cue-2',
      blockId: 'table-sub',
      prompt: 'Name the three subtypes of substitution and the attacking species in each.'
    }, {
      id: 'cue-3',
      blockId: 'list-redox',
      prompt: 'How do you recognise oxidation vs reduction in organic chemistry?'
    }, {
      id: 'cue-4',
      blockId: 'callout-worked',
      prompt: 'Classify: CH₃Br + NaOH → CH₃OH + NaBr. What type of reaction is this?'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'What clues in a reaction equation tell you it is an elimination reaction?'
    }],
    summaryText: 'Addition: double bond → single; Substitution: group swapped; Elimination: small molecule lost, double bond formed; Oxidation: gain O/lose H; Reduction: lose O/gain H.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Topic 4 requires students to classify organic reactions by type and identify reaction mechanisms.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['reaction types', 'classification']
  }]
};