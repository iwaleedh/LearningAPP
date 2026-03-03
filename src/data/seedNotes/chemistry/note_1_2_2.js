export const note_chemistry_1_2_2 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define isotopes and explain why they have identical chemical properties but different physical properties; use isotope notation and calculate relative atomic mass from isotope data.'
    }
  }, {
    id: 'h-isotopes',
    type: 'heading',
    data: {
      text: 'What Are Isotopes?',
      level: 2
    }
  }, {
    id: 'p-isotopes',
    type: "list",
    data: {
      style: "unordered",
      items: ["Isotopes are atoms of the same element (same atomic number, Z) that have different numbers of neutrons, and therefore different mass numbers (A).", "Because the proton number is unchanged, isotopes have the same number of electrons and the same electron configuration \u2014 so their chemical properties are identical."]
    }
  }, {
    id: 'callout-key-def',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Definition — Isotopes',
      text: 'Isotopes are atoms of the same element with the same atomic number (Z) but different mass numbers (A), due to different numbers of neutrons.'
    }
  }, {
    id: 'h-notation',
    type: 'heading',
    data: {
      text: 'Isotope Notation',
      level: 2
    }
  }, {
    id: 'p-notation',
    type: "list",
    data: {
      style: "unordered",
      items: ["g.", "carbon-12 and carbon-14.", "In nuclide notation, the mass number is placed as a superscript to the left of the element symbol."]
    }
  }, {
    id: 'table-chlorine',
    type: 'comparisonTable',
    data: {
      caption: 'The two stable isotopes of chlorine',
      headers: ['Isotope', 'Notation', 'Protons', 'Neutrons', 'Electrons', 'Natural abundance'],
      rows: [['Chlorine-35', '³⁵₁₇Cl', '17', '18', '17', '75%'], ['Chlorine-37', '³⁷₁₇Cl', '17', '20', '17', '25%']]
    }
  }, {
    id: 'h-properties',
    type: 'heading',
    data: {
      text: 'Chemical vs Physical Properties',
      level: 2
    }
  }, {
    id: 'list-properties',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Identical chemical properties — same number and arrangement of electrons → same bonding, reactivity, and reactions', 'Different physical properties — different mass → different density, melting/boiling points, rate of diffusion', 'Radioactive isotopes (radioisotopes) may also differ in nuclear stability']
    }
  }, {
    id: 'h-ram',
    type: 'heading',
    data: {
      text: 'Calculating Relative Atomic Mass (Aᵣ)',
      level: 2
    }
  }, {
    id: 'p-ram',
    type: "list",
    data: {
      style: "unordered",
      items: ["Because most elements exist as a mixture of isotopes, the relative atomic mass (A\u1D63) is a weighted average of the masses of all isotopes, taking into account their natural abundances."]
    }
  }, {
    id: 'eq-ram',
    type: 'equation',
    data: {
      html: 'A<sub>r</sub> = <span class="nb-frac"><span class="nb-num">Σ (isotope mass × % abundance)</span><span class="nb-den">100</span></span>',
      caption: 'Relative atomic mass as a weighted average of isotope masses'
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Aᵣ of Chlorine',
      text: 'Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%).\n\nAᵣ = (35 × 75 + 37 × 25) ÷ 100\n   = (2625 + 925) ÷ 100\n   = 3550 ÷ 100\n   = 35.5\n\nThis matches the value shown on the periodic table.'
    }
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Aᵣ of Boron',
      text: 'Boron: ¹⁰B (19.9%) and ¹¹B (80.1%).\n\nAᵣ = (10 × 19.9 + 11 × 80.1) ÷ 100\n   = (199 + 881.1) ÷ 100\n   = 1080.1 ÷ 100\n   = 10.8'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — confusing mass number with Aᵣ',
      text: 'Mass number (A) is always a whole number (count of nucleons). Relative atomic mass (Aᵣ) is a weighted average and is often not a whole number (e.g. chlorine Aᵣ = 35.5). Do not use the mass number of one isotope as the Aᵣ.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Define isotopes in terms of proton number and neutron number',
        checked: false
      }, {
        text: 'Explain why isotopes have the same chemical properties',
        checked: false
      }, {
        text: 'Explain why isotopes have different physical properties',
        checked: false
      }, {
        text: 'Write isotope notation for a given isotope',
        checked: false
      }, {
        text: 'Calculate Aᵣ from isotope masses and percentage abundances',
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
      text: 'Understand: Isotopes have identical electron configurations so identical chemical properties. Different masses affect physical properties like rate of diffusion and density.\n\nApply: Chlorine has ³⁵Cl (75.8%) and ³⁷Cl (24.2%). Predict m/z values and heights in the mass spectrum of Cl₂.\n\nAnalyze: Why does carbon-14 decay radioactively while carbon-12 does not? Relate to neutron-to-proton ratio.\n\nEvaluate: Evaluate the benefits and risks of radioisotopes in medicine, considering half-life and radiation type.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Isotopes: same Z, different A (different neutron number). Same electron configuration → identical chemical properties. Different mass → different physical properties. Aᵣ = weighted average of isotope masses × % abundances ÷ 100. Example: ³⁵Cl (75%) and ³⁷Cl (25%) give Aᵣ = 35.5.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-def',
      prompt: 'Define isotopes, using the terms atomic number and mass number.'
    }, {
      id: 'cue-2',
      blockId: 'list-properties',
      prompt: 'Why do isotopes have identical chemical properties but different physical properties?'
    }, {
      id: 'cue-3',
      blockId: 'eq-ram',
      prompt: 'Write the formula for calculating relative atomic mass from isotope data.'
    }, {
      id: 'cue-4',
      blockId: 'callout-we1',
      prompt: 'Calculate the Aᵣ of chlorine given ³⁵Cl (75%) and ³⁷Cl (25%).'
    }, {
      id: 'cue-5',
      blockId: 'callout-warning',
      prompt: 'Why is the Aᵣ of chlorine 35.5, not 35 or 37?'
    }],
    summaryText: 'Isotopes: same Z, different A. Same chemistry (same electrons), different physics (different mass). Aᵣ = Σ(mass × %) ÷ 100. Chlorine: Aᵣ = 35.5 from ³⁵Cl (75%) + ³⁷Cl (25%).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 'Isotopes, isotope notation, relative atomic mass',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['isotopes', 'atomic structure']
  }]
};