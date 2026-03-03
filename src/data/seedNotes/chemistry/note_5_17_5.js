export const note_chemistry_5_17_5 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-colour',
      data: {
        text: 'Explain why transition metal complexes are coloured; understand d-orbital splitting by ligands (crystal field theory); use the spectrochemical series; predict how metal ion, oxidation state, ligand, and coordination number affect colour.'
      }
    },
    {
      type: 'heading',
      id: 'h-why-coloured',
      data: { text: 'Why Transition Metal Complexes Are Coloured', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-colour-origin',
      data: {
        text: 'Transition metal complexes are typically coloured because of transitions between d-orbital energy levels. In an isolated transition metal ion, all five d-orbitals have the same energy (they are degenerate). However, when ligands approach and form coordinate bonds, the electric field created by the ligands perturbs the d-orbitals, causing them to split into different energy levels. Electrons can now absorb visible light photons to jump from a lower-energy d-orbital to a higher-energy d-orbital. The colour observed is the <strong>complementary colour</strong> to the light that is absorbed.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-complementary-colour',
      data: {
        text: 'The relationship between absorbed light and observed colour is given by the colour wheel. For example:<br/>' +
        '• If red light is absorbed, green light is transmitted → complex appears green<br/>' +
        '• If yellow light is absorbed, blue light is transmitted → complex appears blue<br/>' +
        '• If blue light is absorbed, orange/yellow light is transmitted → complex appears yellow<br/>' +
        'The wavelength of light absorbed depends on the size of the d-orbital energy gap, which is controlled by the nature of the ligand.'
      }
    },
    {
      type: 'callout',
      id: 'callout-colour-mechanism',
      data: {
        style: 'key',
        title: 'D-Orbital Splitting and Colour',
        text: 'Ligands create an electric field that splits d-orbitals into groups of different energies. Electrons absorb visible light photons (energy = hν) to jump between these levels. The energy gap (Δ) determines the wavelength absorbed (λ = c/ν). The colour observed is complementary to the colour absorbed.'
      }
    },
    {
      type: 'heading',
      id: 'h-crystal-field-theory',
      data: { text: 'Crystal Field Theory (Qualitative)', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-cft-intro',
      data: {
        text: '<strong>Crystal field theory</strong> (CFT) provides a model to explain how ligands affect d-orbital energies. In CFT, ligands are treated as point charges that create an electric field around the metal ion. This electric field repels electrons in the d-orbitals, but the effect is not uniform across all five orbitals. Some d-orbitals point directly at the ligands (high repulsion, higher energy) while others point between the ligands (lower repulsion, lower energy). This directional effect causes d-orbital splitting.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-octahedral-splitting',
      data: {
        text: 'In an <strong>octahedral complex</strong>, the six ligands approach along the x, y, and z axes. The d-orbitals that point along these axes (d<sub>z²</sub> and d<sub>x²−y²</sub>) experience greater repulsion and are raised to higher energy. The d-orbitals that point between the axes (d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub>) experience less repulsion and are lowered in energy. This creates a splitting pattern with two higher-energy orbitals and three lower-energy orbitals, separated by an energy gap Δ<sub>o</sub> (delta octahedral).'
      }
    },
    {
      type: 'heading',
      id: 'h-spectrochemical-series',
      data: { text: 'The Spectrochemical Series', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-series-intro',
      data: {
        text: 'The <strong>spectrochemical series</strong> is an experimental ordering of ligands by their ability to split d-orbitals—that is, by the magnitude of Δ they produce. Ligands at the beginning of the series cause small d-orbital splitting (weak field ligands), while ligands at the end cause large splitting (strong field ligands). The series is empirically derived from spectroscopic measurements of transition metal complexes.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-series-order',
      data: {
        text: '<strong>Spectrochemical Series (weak field → strong field):</strong><br/>' +
        'I⁻ < Br⁻ < SCN⁻ < Cl⁻ < NO₃⁻ < F⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO<br/>' +
        '<strong>Mnemonic:</strong> "I Brought Small Chlorine, Nitrate Falls, Hydrate Never Ammoniated Enough, Numbers Never Caught Cyanide Completely" (or create your own!)<br/>' +
        '<br/><strong>Key points:</strong><br/>' +
        '• Halides (I⁻, Br⁻, Cl⁻, F⁻) are weak field<br/>' +
        '• H₂O is intermediate<br/>' +
        '• NH₃ is stronger field than H₂O<br/>' +
        '• CN⁻ is a very strong field ligand'
      }
    },
    {
      type: 'callout',
      id: 'callout-field-strength',
      data: {
        style: 'tip',
        title: 'Weak vs Strong Field Ligands',
        text: 'Weak field ligands: cause small Δ → colours are lighter, complexes are high-spin<br/>Strong field ligands: cause large Δ → colours are deeper, complexes are low-spin<br/>This affects not only colour but also magnetic properties and stability.'
      }
    },
    {
      type: 'heading',
      id: 'h-factors-affecting-colour',
      data: { text: 'Factors Affecting Complex Colour', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-factor-metal',
      data: {
        text: '<strong>1. Identity of the metal ion:</strong> Different metals have different d-orbital splitting patterns. For example, Cr³⁺ complexes are often green, while Co²⁺ complexes are often pink. The same ligand coordinated to different metals can produce different colours.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-factor-oxidation',
      data: {
        text: '<strong>2. Oxidation state of the metal:</strong> Increasing oxidation state increases the positive charge on the metal, which strengthens the electric field and increases Δ. This typically shifts the colour to shorter wavelengths. For example, [Fe(H₂O)₆]²⁺ is pale green, while [Fe(H₂O)₆]³⁺ is brown/yellow (higher oxidation state, larger Δ).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-factor-ligand',
      data: {
        text: '<strong>3. Nature of the ligand:</strong> The position of the ligand in the spectrochemical series directly determines Δ. Weak field ligands produce small Δ (light colours), while strong field ligands produce large Δ (dark colours). [Cu(H₂O)₆]²⁺ (weak field H₂O) is pale blue, while [Cu(NH₃)₄(H₂O)₂]²⁺ (stronger field NH₃) is deep blue.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-factor-coordination',
      data: {
        text: '<strong>4. Coordination number:</strong> Different coordination geometries (octahedral vs tetrahedral) produce different d-orbital splitting patterns and thus different Δ values. The same metal and ligand in octahedral and tetrahedral geometries will have different colours. For example, [CuCl₄]²⁻ (tetrahedral) is yellow/green, while [Cu(H₂O)₆]²⁺ (octahedral) is pale blue.'
      }
    },
    {
      type: 'heading',
      id: 'h-colour-examples',
      data: { text: 'Worked Examples: Predicting Colour', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-example-copper',
      data: {
        text: '<strong>Example 1: Copper complexes</strong><br/>' +
        '[Cu(H₂O)₆]²⁺: Octahedral, weak field H₂O ligand, small Δ, absorbs red light → <strong>pale blue</strong> colour<br/>' +
        '[Cu(NH₃)₄(H₂O)₂]²⁺: Octahedral, stronger field NH₃ ligand, larger Δ, absorbs blue light → <strong>deep blue</strong> colour<br/>' +
        '[CuCl₄]²⁻: Tetrahedral, weak field Cl⁻ ligand, different splitting pattern → <strong>yellow/green</strong> colour<br/>' +
        '<strong>Conclusion:</strong> Stronger field ligands → larger Δ → deeper colour.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-example-iron',
      data: {
        text: '<strong>Example 2: Iron oxidation state effect</strong><br/>' +
        '[Fe(H₂O)₆]²⁺: Fe²⁺ (lower charge), smaller Δ → <strong>pale green</strong> colour<br/>' +
        '[Fe(H₂O)₆]³⁺: Fe³⁺ (higher charge), larger Δ → <strong>brown/yellow</strong> colour<br/>' +
        '<strong>Conclusion:</strong> Higher oxidation state → larger Δ → colour shifts to shorter wavelengths (lighter shade or different colour).'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-colour',
      data: {
        items: [
          { text: 'Colour arises from d-orbital splitting and electron transitions absorbing visible light', checked: false },
          { text: 'Observed colour is complementary to absorbed colour', checked: false },
          { text: 'Spectrochemical series orders ligands from weak field (I⁻) to strong field (CN⁻)', checked: false },
          { text: 'Stronger field ligands → larger Δ → deeper colour', checked: false },
          { text: 'Higher oxidation state → larger Δ → colour shifts', checked: false },
          { text: 'Different coordination number (4 vs 6) → different splitting → different colour', checked: false }
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
        text: 'Understand: Colour arises from d-d transitions: ligands split d-orbitals, and electrons absorb specific wavelengths to jump between energy levels. The complementary colour is observed.\n\nApply: [Cu(H₂O)₆]²⁺ is pale blue. Replacing H₂O with NH₃ gives deep blue. Explain using the spectrochemical series.\n\nAnalyze: Why are Sc³⁺ (d⁰) and Zn²⁺ (d¹⁰) complexes colourless? Relate to d-d transitions.\n\nEvaluate: Crystal field theory explains colour but has limitations. Discuss cases where it fails (e.g. charge-transfer transitions).'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-colour',
      data: {
        text: 'Transition metal complexes are coloured because ligands split d-orbitals into different energy levels. Electrons absorb visible light (Δ = hν) to jump between levels; the observed colour is complementary to absorbed colour. The spectrochemical series (I⁻ to CN⁻) orders ligands by splitting power. Colour is affected by: (1) metal identity, (2) oxidation state (higher → larger Δ), (3) ligand type (stronger field → larger Δ), (4) coordination number (octahedral vs tetrahedral). [Cu(H₂O)₆]²⁺ is pale blue; [Cu(NH₃)₄(H₂O)₂]²⁺ is deep blue (stronger ligand, larger Δ).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-why-coloured',
        prompt: 'Why are transition metal complexes coloured? Explain the role of d-orbital splitting.'
      },
      {
        id: 'cue-2',
        blockId: 'p-complementary-colour',
        prompt: 'What is meant by "complementary colour"? Give two examples.'
      },
      {
        id: 'cue-3',
        blockId: 'p-series-order',
        prompt: 'State the spectrochemical series and explain what weak and strong field ligands are.'
      },
      {
        id: 'cue-4',
        blockId: 'p-factor-oxidation',
        prompt: 'How does the oxidation state of a metal ion affect the colour of its complexes?'
      },
      {
        id: 'cue-5',
        blockId: 'p-example-copper',
        prompt: 'Explain why [Cu(H₂O)₆]²⁺ is pale blue while [Cu(NH₃)₄(H₂O)₂]²⁺ is deep blue.'
      }
    ],
    summaryText: 'Transition metal complexes are coloured because ligands split d-orbitals; electrons absorb visible light to jump between levels; observed colour is complementary to absorbed. Spectrochemical series: I⁻ < Cl⁻ < H₂O < NH₃ < CN⁻. Four factors: (1) metal identity, (2) oxidation state (higher → larger Δ → deeper colour), (3) ligand (stronger field → larger Δ), (4) coordination number. H₂O is weak field (pale colour); NH₃ is stronger field (deeper colour).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Crystal Field Theory and Spectroscopy',
      detail: 'Crystal field theory qualitatively explains the colours of transition metal complexes through d-orbital splitting. The spectrochemical series is empirically derived from UV-Vis spectroscopy.',
      year: '2023',
      source: 'A-Level Chemistry Coordination Chemistry',
      tags: ['colour', 'crystal-field-theory', 'spectrochemical-series']
    }
  ]
};
