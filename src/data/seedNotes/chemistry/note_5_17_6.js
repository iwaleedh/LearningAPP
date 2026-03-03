export const note_chemistry_5_17_6 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-substitution',
      data: {
        text: 'Understand ligand substitution mechanisms; predict products from complex ion + ligand reactions; explain colour changes; use Fe³⁺ + SCN⁻ as a qualitative test for iron(III).'
      }
    },
    {
      type: 'heading',
      id: 'h-substitution-intro',
      data: { text: 'Ligand Substitution Reactions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-substitution-def',
      data: {
        text: 'A <strong>ligand substitution reaction</strong> occurs when one or more ligands in a complex ion are replaced by different ligands. The overall reaction involves breaking the coordinate bond(s) between the existing ligand and the metal ion, followed by formation of new coordinate bond(s) with the incoming ligand. The reaction is driven by factors such as ligand field strength, chelate effect, and solubility of products. During substitution, the coordination number and geometry typically remain constant.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-substitution-driving-force',
      data: {
        text: 'Ligand substitution reactions are favoured when:<br/>' +
        '• The incoming ligand is a stronger field ligand (forms more stable complexes)<br/>' +
        '• The incoming ligand is polydentate (chelate effect increases stability)<br/>' +
        '• The product complex is significantly more stable than the reactant complex<br/>' +
        '• A precipitate forms, removing product from solution (Le Chatelier principle)<br/>' +
        '• The entropy increases (polydentate ligands releasing more water molecules)'
      }
    },
    {
      type: 'heading',
      id: 'h-copper-water-chloride',
      data: { text: 'Copper Reaction: [Cu(H₂O)₆]²⁺ + Cl⁻', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-cu-h2o-cl-reaction',
      data: {
        text: '<strong>Reaction:</strong> [Cu(H₂O)₆]²⁺(aq) + 4Cl⁻(aq) → [CuCl₄]²⁻(aq) + 6H₂O(l)<br/>' +
        '<strong>Observation:</strong> The solution changes from <strong>pale blue</strong> to <strong>yellow/green</strong>.<br/>' +
        '<strong>Explanation:</strong><br/>' +
        '• [Cu(H₂O)₆]²⁺ is octahedral with weak field H₂O ligands → pale blue (small Δ)<br/>' +
        '• [CuCl₄]²⁻ is tetrahedral with weak field Cl⁻ ligands → yellow/green (different geometry and splitting)<br/>' +
        '• The reaction is favoured by the different coordination geometry and the stability of the CuCl₄²⁻ complex.<br/>' +
        '<strong>Reversibility:</strong> Adding water shifts the equilibrium back towards [Cu(H₂O)₆]²⁺ (pale blue returns).'
      }
    },
    {
      type: 'callout',
      id: 'callout-cu-substitution',
      data: {
        style: 'worked',
        title: 'Copper Complex Substitution',
        text: 'This reaction is commonly performed in the lab: add concentrated HCl to blue CuSO₄ solution → colour changes to yellow/green (CuCl₄²⁻ forms). Heat the solution or add water → colour changes back to blue. This reversibility demonstrates the equilibrium nature of complex formation.'
      }
    },
    {
      type: 'heading',
      id: 'h-copper-water-ammonia',
      data: { text: 'Copper Reaction: [Cu(H₂O)₆]²⁺ + NH₃', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-cu-h2o-nh3-reaction',
      data: {
        text: '<strong>Reaction:</strong> [Cu(H₂O)₆]²⁺(aq) + 4NH₃(aq) → [Cu(NH₃)₄(H₂O)₂]²⁺(aq) + 4H₂O(l)<br/>' +
        '<strong>Initial observation:</strong> A pale blue precipitate of Cu(OH)₂ forms (copper(II) hydroxide is insoluble at high pH because NH₃ is a weak base).<br/>' +
        '<strong>Final observation:</strong> The precipitate dissolves in excess ammonia, forming a <strong>deep blue</strong> solution.<br/>' +
        '<strong>Explanation:</strong><br/>' +
        '• NH₃ is a stronger field ligand than H₂O<br/>' +
        '• [Cu(NH₃)₄(H₂O)₂]²⁺ is octahedral with stronger field NH₃ ligands → deeper blue (larger Δ than [Cu(H₂O)₆]²⁺)<br/>' +
        '• The pale blue precipitate dissolves because the NH₃ complex is highly stable and soluble.'
      }
    },
    {
      type: 'heading',
      id: 'h-cobalt-water-chloride',
      data: { text: 'Cobalt Reaction: [Co(H₂O)₆]²⁺ + Cl⁻', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-co-h2o-cl-reaction',
      data: {
        text: '<strong>Reaction:</strong> [Co(H₂O)₆]²⁺(aq) + 4Cl⁻(aq) → [CoCl₄]²⁻(aq) + 6H₂O(l)<br/>' +
        '<strong>Observation:</strong> The solution changes from <strong>pink</strong> to <strong>blue</strong>.<br/>' +
        '<strong>Explanation:</strong><br/>' +
        '• [Co(H₂O)₆]²⁺ is octahedral with weak field H₂O ligands → pink colour<br/>' +
        '• [CoCl₄]²⁻ is tetrahedral with weak field Cl⁻ ligands → blue colour<br/>' +
        '• The colour change arises from the change in coordination geometry (octahedral → tetrahedral) and the different d-orbital splitting patterns in each geometry.<br/>' +
        '<strong>Reversibility:</strong> Similar to copper, adding water shifts the equilibrium back (blue → pink).'
      }
    },
    {
      type: 'heading',
      id: 'h-iron-thiocyanate',
      data: { text: 'Iron(III) Test: Fe³⁺ + SCN⁻', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-fe-scn-intro',
      data: {
        text: 'The reaction between iron(III) ions and thiocyanate ions is a classic qualitative test for the presence of Fe³⁺ in solution. This test is highly sensitive and produces a distinctive colour change that is diagnostic for iron(III).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-fe-scn-reaction',
      data: {
        text: '<strong>Reaction:</strong> Fe³⁺(aq) + SCN⁻(aq) → [Fe(SCN)]²⁺(aq) + ... (further substitution possible)<br/>' +
        '<strong>Initial complex:</strong> [Fe(H₂O)₆]³⁺ (brown/yellow, very weak absorption of visible light due to small Δ)<br/>' +
        '<strong>Product:</strong> [Fe(SCN)(H₂O)₅]²⁺ or [Fe(SCN)ₓ]^(3−x)+ (depending on SCN⁻ concentration)<br/>' +
        '<strong>Observation:</strong> The solution turns <strong>blood red</strong> or <strong>deep red</strong>.<br/>' +
        '<strong>Explanation:</strong><br/>' +
        '• SCN⁻ is a moderately strong field ligand<br/>' +
        '• The Fe³⁺-SCN⁻ complex has a larger d-orbital splitting (Δ) than [Fe(H₂O)₆]³⁺<br/>' +
        '• This larger Δ shifts the absorption wavelength into the visible region, producing the intense blood-red colour<br/>' +
        '• The intensity of the red colour indicates the concentration of Fe³⁺ (can be used semi-quantitatively)'
      }
    },
    {
      type: 'callout',
      id: 'callout-fe-scn-test',
      data: {
        style: 'key',
        title: 'Qualitative Test for Fe³⁺',
        text: 'Add a few drops of KSCN or NH₄SCN solution to a solution suspected to contain Fe³⁺. An intense blood-red colour indicates the presence of Fe³⁺. This test is highly sensitive and specific—very small concentrations of Fe³⁺ (< 0.01 mol dm⁻³) produce a visible colour. Colourless = no Fe³⁺; red = Fe³⁺ present.'
      }
    },
    {
      type: 'heading',
      id: 'h-equilibrium-aspects',
      data: { text: 'Equilibrium Nature of Substitution Reactions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-equilibrium-nature',
      data: {
        text: 'Ligand substitution reactions are equilibria, not irreversible processes. The position of equilibrium depends on the relative stability of the reactant and product complexes. If the product complex is significantly more stable, the equilibrium lies to the right. However, adding excess incoming ligand shifts the equilibrium forward (Le Chatelier), while removing the incoming ligand (or adding the displaced ligand) shifts it backward.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-equilibrium-examples',
      data: {
        text: '<strong>Example 1: Copper + chloride</strong><br/>' +
        '[Cu(H₂O)₆]²⁺ + 4Cl⁻ ⇌ [CuCl₄]²⁻ + 6H₂O<br/>' +
        'With concentrated HCl: equilibrium shifts right (yellow/green)<br/>' +
        'With water (dilute solution): equilibrium shifts left (blue returns)<br/>' +
        '<br/><strong>Example 2: Iron(III) + thiocyanate</strong><br/>' +
        '[Fe(H₂O)₆]³⁺ + SCN⁻ ⇌ [Fe(SCN)(H₂O)₅]²⁺ + H₂O<br/>' +
        'Adding more SCN⁻: red colour intensifies (equilibrium shifts right)<br/>' +
        'Adding AgNO₃ (precipitates SCN⁻): red colour fades (equilibrium shifts left)'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-substitution',
      data: {
        items: [
          { text: 'Ligand substitution: breaking old coordinate bonds, forming new ones', checked: false },
          { text: '[Cu(H₂O)₆]²⁺ (pale blue) + Cl⁻ → [CuCl₄]²⁻ (yellow/green)', checked: false },
          { text: '[Cu(H₂O)₆]²⁺ (pale blue) + NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ (deep blue)', checked: false },
          { text: '[Co(H₂O)₆]²⁺ (pink) + Cl⁻ → [CoCl₄]²⁻ (blue)', checked: false },
          { text: 'Fe³⁺ + SCN⁻ → blood-red [Fe(SCN)]²⁺ (qualitative test)', checked: false },
          { text: 'Substitution reactions are equilibria, driven by ligand stability and concentration', checked: false }
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
        text: 'Understand: Ligand substitution occurs when one ligand replaces another. The reaction is driven by the stability of the new complex (often chelate effect or stronger ligand).\n\nApply: Write the equation for [Cu(H₂O)₆]²⁺ + 4Cl⁻ → [CuCl₄]²⁻ + 6H₂O. Describe the colour change.\n\nAnalyze: Why does adding excess NH₃ to [Cu(H₂O)₆]²⁺ only replace 4 of the 6 H₂O ligands?\n\nEvaluate: The reaction Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ (blood red) is used as a qualitative test. Assess its reliability compared to other Fe³⁺ tests.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-substitution',
      data: {
        text: 'Ligand substitution reactions occur when ligands replace one another in complex ions. Key examples: [Cu(H₂O)₆]²⁺ (pale blue) + Cl⁻ → [CuCl₄]²⁻ (yellow/green); [Cu(H₂O)₆]²⁺ + NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ (deep blue, stronger field ligand → deeper colour); [Co(H₂O)₆]²⁺ (pink) + Cl⁻ → [CoCl₄]²⁻ (blue). The Fe³⁺ + SCN⁻ → blood-red [Fe(SCN)]²⁺ reaction is a diagnostic qualitative test for iron(III). All substitutions are reversible equilibria, shifted by ligand concentration and solubility.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-substitution-intro',
        prompt: 'Define a ligand substitution reaction and list the factors that favour it.'
      },
      {
        id: 'cue-2',
        blockId: 'p-cu-h2o-cl-reaction',
        prompt: 'Write the equation and describe the colour change when [Cu(H₂O)₆]²⁺ reacts with Cl⁻.'
      },
      {
        id: 'cue-3',
        blockId: 'p-cu-h2o-nh3-reaction',
        prompt: 'Describe the observations when ammonia is added to [Cu(H₂O)₆]²⁺. Explain the colour changes.'
      },
      {
        id: 'cue-4',
        blockId: 'h-iron-thiocyanate',
        prompt: 'What is the qualitative test for Fe³⁺? Describe the colour change and the complex formed.'
      },
      {
        id: 'cue-5',
        blockId: 'p-equilibrium-nature',
        prompt: 'Explain why ligand substitution reactions are equilibria and how concentration affects the position of equilibrium.'
      }
    ],
    summaryText: '[Cu(H₂O)₆]²⁺ (pale blue) + Cl⁻ → [CuCl₄]²⁻ (yellow/green). [Cu(H₂O)₆]²⁺ + NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ (deep blue, stronger field). [Co(H₂O)₆]²⁺ (pink) + Cl⁻ → [CoCl₄]²⁻ (blue). Fe³⁺ + SCN⁻ → blood-red [Fe(SCN)]²⁺ (test for Fe³⁺). All reactions are equilibria, reversible by concentration changes.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Ligand Substitution and Complex Stability',
      detail: 'Ligand substitution reactions in transition metal complexes are common laboratory procedures used to demonstrate complex formation, colour changes, and complex stability relative to ligand field strength.',
      year: '2023',
      source: 'A-Level Practical Chemistry',
      tags: ['substitution', 'colour-change', 'qualitative-test']
    }
  ]
};
