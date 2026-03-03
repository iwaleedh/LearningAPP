export const note_chemistry_1_2_1 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define atomic number (Z) and mass number (A); use these to determine the number of protons, neutrons and electrons in atoms and ions.'
    }
  }, {
    id: 'h-definitions',
    type: 'heading',
    data: {
      text: 'Atomic Number and Mass Number',
      level: 2
    }
  }, {
    id: 'p-definitions',
    type: "list",
    data: {
      style: "unordered",
      items: ["Every element is uniquely identified by its atomic number (proton number), Z.", "The mass number, A, gives the total number of nucleons (protons + neutrons) in the nucleus."]
    }
  }, {
    id: 'table-ZA',
    type: 'comparisonTable',
    data: {
      caption: 'Key nuclear quantities',
      headers: ['Quantity', 'Symbol', 'Definition', 'Example (carbon-12)'],
      rows: [['Atomic number', 'Z', 'Number of protons in the nucleus', '6'], ['Mass number', 'A', 'Total number of protons + neutrons', '12'], ['Neutron number', 'N', 'A − Z', '6']]
    }
  }, {
    id: 'h-notation',
    type: 'heading',
    data: {
      text: 'Nuclide Notation',
      level: 2
    }
  }, {
    id: 'p-notation',
    type: "list",
    data: {
      style: "unordered",
      items: ["Atoms are represented using nuclide (nuclear) notation, which shows the mass number as a superscript and the atomic number as a subscript to the left of the element symbol."]
    }
  }, {
    id: 'eq-notation',
    type: 'equation',
    data: {
      html: '<span class="nb-frac" style="display:inline-flex;flex-direction:column;align-items:center;font-size:1em;margin-right:0.2em"><span style="font-size:0.85em">A</span><span style="font-size:0.85em">Z</span></span>X&nbsp;&nbsp; e.g. &nbsp;<span style="font-size:1.1em"><sup>12</sup><sub>6</sub>C &nbsp; <sup>23</sup><sub>11</sub>Na &nbsp; <sup>35</sup><sub>17</sub>Cl</span>',
      caption: 'Mass number (top) and atomic number (bottom) written to the left of the element symbol X'
    }
  }, {
    id: 'h-working',
    type: 'heading',
    data: {
      text: 'Calculating Particle Numbers',
      level: 2
    }
  }, {
    id: 'list-rules',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Number of protons = Z (atomic number) — defines the element', 'Number of neutrons = A − Z', 'Number of electrons (neutral atom) = Z', 'Number of electrons (ion) = Z − charge (subtract for cations, add for anions)']
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Particles in ³⁵Cl and Cl⁻',
      text: 'For ³⁵₁₇Cl (neutral atom):\n  Protons  = Z = 17\n  Neutrons = A − Z = 35 − 17 = 18\n  Electrons = Z = 17\n\nFor Cl⁻ (gained 1 electron):\n  Protons  = 17   (unchanged)\n  Neutrons = 18   (unchanged)\n  Electrons = 17 + 1 = 18'
    }
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Particles in ⁵⁶Fe³⁺',
      text: 'For ⁵⁶₂₆Fe³⁺:\n  Protons  = 26\n  Neutrons = 56 − 26 = 30\n  Electrons = 26 − 3 = 23'
    }
  }, {
    id: 'callout-key',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Point — Atomic number defines the element',
      text: 'Two atoms with the same atomic number are always the same element, regardless of their mass number. Changing the proton number changes the element entirely. Neutron number can vary (isotopes) without changing the element.'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — identifying elements on the periodic table',
      text: 'The atomic number on the periodic table is always the smaller of the two numbers shown for each element. If only one number is given, it is the atomic number (Z), not the mass number.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Define atomic number (Z) and mass number (A)',
        checked: false
      }, {
        text: 'Use nuclide notation ᴬ_Z X to identify an atom',
        checked: false
      }, {
        text: 'Calculate the number of neutrons from A and Z',
        checked: false
      }, {
        text: 'Determine the number of electrons in an ion given Z and charge',
        checked: false
      }, {
        text: 'Explain why atomic number defines the element',
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
      text: 'Understand: Atomic number defines the element; mass number defines the isotope. Changing protons changes the element entirely; changing neutrons only creates a different isotope.\n\nApply: Write the full isotope notation for an atom with 17 protons and 18 neutrons. How many electrons does its 1- ion have?\n\nAnalyze: Why do elements with many stable isotopes tend to have non-integer Aᵣ values?\n\nEvaluate: Could two different elements ever have the same mass number? Justify with examples (isobars).'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Atomic number Z = number of protons (defines the element). Mass number A = protons + neutrons. Neutrons = A − Z. In a neutral atom, electrons = Z. For ions, adjust electron count by the charge: subtract for cations, add for anions. Nuclide notation: ᴬ_Z X.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-ZA',
      prompt: 'What is the difference between atomic number (Z) and mass number (A)?'
    }, {
      id: 'cue-2',
      blockId: 'list-rules',
      prompt: 'How do you calculate the number of neutrons in an atom?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'How many electrons does a Cl⁻ ion have if Z = 17?'
    }, {
      id: 'cue-4',
      blockId: 'callout-we2',
      prompt: 'How many electrons does a ⁵⁶Fe³⁺ ion have?'
    }, {
      id: 'cue-5',
      blockId: 'callout-key',
      prompt: 'Why does changing the number of neutrons NOT change the element?'
    }],
    summaryText: 'Z = protons = defines element. A = protons + neutrons. Neutrons = A − Z. Electrons (neutral) = Z. Electrons (ion) = Z − charge (cation) or Z + |charge| (anion).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 'Atomic number, mass number, nuclide notation',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['atomic structure', 'specification']
  }]
};