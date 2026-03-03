export const note_chemistry_5_19_5 = {
  blocks: [
    {
      id: 'obj-amino-acids',
      type: 'objective',
      data: {
        text: 'Explain amino acid structure and zwitterion formation; understand isoelectric points and charge variation with pH; describe amino acid movement in electrophoresis at different pH values; explain the role of side chains'
      }
    },
    {
      id: 'h-amino-acid-structure',
      type: 'heading',
      data: { text: 'Amino Acid Structure and Zwitterion Formation', level: 2 }
    },
    {
      id: 'p-structure-1',
      type: 'paragraph',
      data: {
        text: 'All amino acids have the same basic structure: an amino group (−NH₂), a carboxyl group (−COOH), a hydrogen atom, and a side chain (R group) bonded to the same central carbon atom (the α-carbon). The general formula is H₂N−CHR−COOH. The side chain R varies among the 20 standard amino acids and determines the chemical properties of each amino acid.'
      }
    },
    {
      id: 'eq-amino-acid-structure',
      type: 'equation',
      data: {
        html: 'General structure: H₂N−CHR−COOH<br />R = side chain (varies)<br />Examples:<br />Glycine: R = H<br />Alanine: R = CH₃<br />Valine: R = CH(CH₃)₂<br />Leucine: R = CH₂CH(CH₃)₂'
      }
    },
    {
      id: 'p-structure-2',
      type: 'paragraph',
      data: {
        text: 'In solution, amino acids do not exist as H₂N−CHR−COOH. Instead, an internal proton transfer occurs: the carboxyl group donates a proton to the amino group, forming a zwitterion (or dipolar ion). The zwitterion has both a positively charged amino group (−NH₃⁺) and a negatively charged carboxyl group (−COO⁻) on the same molecule: ⁺H₃N−CHR−COO⁻.'
      }
    },
    {
      id: 'eq-zwitterion-formation',
      type: 'equation',
      data: {
        html: 'H₂N−CHR−COOH ⇌ ⁺H₃N−CHR−COO⁻<br />(Molecular form) ⇌ (Zwitterion form)<br />The zwitterion is the predominant form in neutral solution (pH ≈ 7).'
      }
    },
    {
      id: 'callout-zwitterion-why',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Zwitterions Form',
        text: 'The −COOH group is more acidic (pKa ≈ 2) than −NH₃⁺ is basic (pKa ≈ 9). In any neutral/physiological pH, the COOH donates its proton to the NH₂. The zwitterion form is more stable and hydrated in aqueous solution. Amino acids are amphoteric: they can act as acids or bases depending on pH.'
      }
    },
    {
      id: 'h-ph-effects',
      type: 'heading',
      data: { text: 'Amino Acid Charge Variation with pH', level: 2 }
    },
    {
      id: 'p-ph-1',
      type: 'paragraph',
      data: {
        text: 'The ionisation state of an amino acid depends on the pH of the solution. At different pH values, the −NH₃⁺ and −COO⁻ groups can accept or donate protons, changing the overall charge.'
      }
    },
    {
      id: 'p-ph-2',
      type: 'paragraph',
      data: {
        text: 'At very low pH (< 2, strongly acidic): The carboxyl group is protonated (−COOH), and the amino group is protonated (−NH₃⁺). The zwitterion becomes positively charged: ⁺H₃N−CHR−COOH (net charge +1). The amino acid has an overall positive charge.'
      }
    },
    {
      id: 'p-ph-3',
      type: 'paragraph',
      data: {
        text: 'At neutral pH (≈ 7): The amino acid exists predominantly as the zwitterion: ⁺H₃N−CHR−COO⁻ (net charge 0). The amino acid has no net charge overall. This form is most stable in cells and body fluids.'
      }
    },
    {
      id: 'p-ph-4',
      type: 'paragraph',
      data: {
        text: 'At very high pH (> 10, strongly basic): The amino group is deprotonated (−NH₂), and the carboxyl group remains deprotonated (−COO⁻). The amino acid becomes negatively charged: H₂N−CHR−COO⁻ (net charge −1). The amino acid has an overall negative charge.'
      }
    },
    {
      id: 'eq-ph-states',
      type: 'equation',
      data: {
        html: 'Low pH (< 2): ⁺H₃N−CHR−COOH (charge = +1)<br />Neutral pH (≈ 7): ⁺H₃N−CHR−COO⁻ (charge = 0, zwitterion)<br />High pH (> 10): H₂N−CHR−COO⁻ (charge = −1)'
      }
    },
    {
      id: 'h-isoelectric-point',
      type: 'heading',
      data: { text: 'Isoelectric Point (pI)', level: 2 }
    },
    {
      id: 'p-pi-1',
      type: 'paragraph',
      data: {
        text: 'The isoelectric point (pI) is the pH at which an amino acid has no net electric charge. At this pH, the positive charges and negative charges balance exactly. For a simple amino acid (without a charged side chain), the isoelectric point is approximately pH 6−7, close to neutral pH.'
      }
    },
    {
      id: 'p-pi-2',
      type: 'paragraph',
      data: {
        text: 'At the isoelectric point, the amino acid exists as a zwitterion with equal amounts of positive and negative charge. Different amino acids have different pI values depending on their side chains. For example, lysine (with a basic side chain −(CH₂)₄NH₂) has a higher pI (≈ 10.5) because its side chain is positively charged at neutral pH. Aspartate (with an acidic side chain −CH₂COOH) has a lower pI (≈ 3) because its side chain is negatively charged.'
      }
    },
    {
      id: 'h-electrophoresis',
      type: 'heading',
      data: { text: 'Amino Acids in Electrophoresis', level: 2 }
    },
    {
      id: 'p-electrophoresis-1',
      type: 'paragraph',
      data: {
        text: 'Electrophoresis is a technique to separate amino acids or proteins based on their electrical charge. An electrical field is applied across a gel or solution. Charged molecules move towards the oppositely charged electrode. The direction and speed of movement depend on the net charge and the mass of the molecule.'
      }
    },
    {
      id: 'p-electrophoresis-2',
      type: 'paragraph',
      data: {
        text: 'At pH below the isoelectric point: The amino acid has a net positive charge (−NH₃⁺ dominates). It moves towards the negative electrode (cathode). At pH above the isoelectric point: The amino acid has a net negative charge (−COO⁻ dominates). It moves towards the positive electrode (anode). At pH equal to the isoelectric point: The amino acid has no net charge and does not move.'
      }
    },
    {
      id: 'callout-electrophoresis-principle',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Electrophoresis at Different pH Values',
        text: 'pH < pI: positive charge → moves to cathode (−). pH = pI: no charge → no movement. pH > pI: negative charge → moves to anode (+). This principle is used to separate amino acids and identify them by their isoelectric points.'
      }
    },
    {
      id: 'h-side-chain-effects',
      type: 'heading',
      data: { text: 'Effect of Side Chains on Charge and pI', level: 2 }
    },
    {
      id: 'p-side-chain-1',
      type: 'paragraph',
      data: {
        text: 'Some amino acids have ionisable groups in their side chains. These affect the overall charge and pI of the amino acid. Acidic amino acids (aspartate, glutamate) have −COOH side chains that become −COO⁻ at neutral pH, adding negative charge. Basic amino acids (lysine, arginine) have −NH₂ side chains that become −NH₃⁺ at neutral pH, adding positive charge. Neutral amino acids (glycine, alanine, valine, etc.) have non-ionisable side chains and maintain the basic two-group system.'
      }
    },
    {
      id: 'checklist-zwitterions',
      type: 'checklist',
      data: {
        items: [
          { text: 'Amino acids form zwitterions in neutral solution (⁺H₃N−CHR−COO⁻)', checked: false },
          { text: 'Low pH: protonated form ⁺H₃N−CHR−COOH (charge +1)', checked: false },
          { text: 'Neutral pH: zwitterion ⁺H₃N−CHR−COO⁻ (charge 0)', checked: false },
          { text: 'High pH: deprotonated form H₂N−CHR−COO⁻ (charge −1)', checked: false },
          { text: 'Isoelectric point (pI): pH where net charge = 0; varies by side chain', checked: false }
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
        text: 'Understand: Amino acids are amphoteric — they exist as zwitterions (⁺H₃N−CHR−COO⁻) at the isoelectric point (pI). Below pI they are cationic; above pI they are anionic.\n\nApply: Draw the structure of alanine at pH 1, pH 6 (pI), and pH 12.\n\nAnalyze: In electrophoresis at pH 7, amino acid X moves to the cathode. Is its pI above or below 7? Explain.\n\nEvaluate: Why is the pI important in protein purification techniques like isoelectric focusing?'
      },
      terms: []
    },
    {
      id: 'summary-zwitterions',
      type: 'summary',
      data: {
        text: 'Amino acids have −NH₂, −COOH, and R group attached to the α-carbon. In solution, they form zwitterions (⁺H₃N−CHR−COO⁻) via internal proton transfer. Charge varies with pH: low pH gives positive charge (⁺H₃N−CHR−COOH), neutral pH gives zwitterion (charge 0), high pH gives negative charge (H₂N−CHR−COO⁻). The isoelectric point (pI) is the pH where net charge = 0; it varies among amino acids based on side chains. In electrophoresis, amino acids move towards opposite electrodes depending on their charge: positive charge moves to cathode (−), negative to anode (+), no movement at pI.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-structure-2', prompt: 'What is a zwitterion, and why do amino acids form them in solution?' },
      { id: 'cue-2', blockId: 'eq-ph-states', prompt: 'Write the ionic forms of an amino acid at low, neutral, and high pH.' },
      { id: 'cue-3', blockId: 'p-pi-1', prompt: 'Define the isoelectric point (pI). What is the charge at the pI?' },
      { id: 'cue-4', blockId: 'p-electrophoresis-2', prompt: 'Explain how amino acids move during electrophoresis at different pH values.' }
    ],
    summaryText: 'Amino acids: H₂N−CHR−COOH. In solution, form zwitterion ⁺H₃N−CHR−COO⁻ (neutral pH, charge 0). Low pH: ⁺H₃N−CHR−COOH (charge +1). High pH: H₂N−CHR−COO⁻ (charge −1). Isoelectric point (pI): pH where net charge = 0. Electrophoresis: pH < pI → positive → cathode; pH = pI → no charge → no movement; pH > pI → negative → anode.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Amino acids, zwitterions, and isoelectric points',
      detail: 'Zwitterion structure and formation; charge variation with pH; pI values for common amino acids; electrophoresis principles and application to amino acid separation',
      year: '2023',
      source: 'chemguide.co.uk — amino acids and zwitterions',
      tags: ['amino acid', 'zwitterion', 'isoelectric', 'pH', 'electrophoresis', 'charge']
    }
  ]
};
