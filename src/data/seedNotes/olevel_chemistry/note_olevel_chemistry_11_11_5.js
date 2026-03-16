export const note_olevel_chemistry_11_11_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-2-alkanes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the general formula, structure, and reactions of alkanes including complete and incomplete combustion, and substitution with chlorine.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Alkanes', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts about Alkanes',
        text: '<strong>General formula:</strong> CₙH₂ₙ₊₂<br/><strong>Bonding:</strong> Only single bonds (C–C and C–H) — <strong>saturated</strong><br/><strong>First four members:</strong><br/>• Methane CH₄ (gas — main component of natural gas)<br/>• Ethane C₂H₆ (gas)<br/>• Propane C₃H₈ (gas — in LPG)<br/>• Butane C₄H₁₀ (gas — in LPG/lighters)<br/><br/><strong>Properties:</strong><br/>• Relatively unreactive (inert) at room temperature due to strong, non-polar C–C and C–H bonds<br/>• Insoluble in water<br/>• Less dense than water<br/>• Good fuels — combust to give CO₂ and H₂O'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Combustion Reactions', level: 2 }
    },
    {
      id: 'call-combust',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Complete vs Incomplete Combustion',
        text: '<strong>Complete combustion</strong> (excess O₂):<br/>CH₄ + 2O₂ → CO₂ + 2H₂O (blue flame, no smoke)<br/>C₃H₈ + 5O₂ → 3CO₂ + 4H₂O<br/><br/><strong>Incomplete combustion</strong> (limited O₂):<br/>Products include carbon monoxide (CO) and/or carbon (soot):<br/>2CH₄ + 3O₂ → 2CO + 4H₂O (yellow/sooty flame)<br/>CH₄ + O₂ → C + 2H₂O (very limited O₂ → soot)<br/><br/><strong>Carbon monoxide (CO):</strong><br/>• Toxic gas — binds to haemoglobin, preventing O₂ transport<br/>• Colourless and odourless — a silent killer; detected by CO alarms'
      }
    },
    {
      id: 'call-subst',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Substitution with Chlorine (Photochemical)',
        text: 'Alkanes react with chlorine in the presence of UV light (sunlight) — a <strong>free radical substitution</strong>:<br/><br/>CH₄ + Cl₂ → CH₃Cl + HCl (UV light)<br/>(methane + chlorine → chloromethane + hydrogen chloride)<br/><br/>Further substitution continues:<br/>CH₃Cl + Cl₂ → CH₂Cl₂ + HCl → CHCl₃ + HCl → CCl₄ + HCl<br/><br/>• Reaction does NOT occur in the dark<br/>• UV light provides energy to break Cl–Cl bond (initiation step)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alkanes (CₙH₂ₙ₊₂): saturated, relatively unreactive. Complete combustion → CO₂ + H₂O. Incomplete combustion (limited O₂) → CO (toxic) and/or soot. Substitution with Cl₂ under UV light: CH₄ + Cl₂ → CH₃Cl + HCl.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Alkanes: CₙH₂ₙ₊₂, saturated. Complete combustion → CO₂ + H₂O. Incomplete → CO (toxic). Cl₂ substitution needs UV light.',
    cues: [
      { id: 'cue-1', blockId: 'call-combust', prompt: 'Write the equation for complete combustion of propane.', answer: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O' },
      { id: 'cue-2', blockId: 'call-combust', prompt: 'Why is carbon monoxide produced in incomplete combustion dangerous?', answer: 'Carbon monoxide binds to haemoglobin in red blood cells more strongly than oxygen, preventing oxygen transport. It is colourless and odourless, making it particularly dangerous.' },
      { id: 'cue-3', blockId: 'call-subst', prompt: 'Describe the conditions needed for the substitution of methane with chlorine.', answer: 'UV light (sunlight) is required. Methane + chlorine → chloromethane + hydrogen chloride: CH₄ + Cl₂ → CH₃Cl + HCl. The reaction does NOT occur in the dark.' }
    ]
  },
  evidence: [],
  mentions: []
};
