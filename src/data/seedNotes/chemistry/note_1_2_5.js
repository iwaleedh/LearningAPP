export const note_chemistry_1_2_5 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe how the model of the atom developed from Dalton to the modern quantum model; explain the evidence that led to each change in the model.'
    }
  }, {
    id: 'h-dalton',
    type: 'heading',
    data: {
      text: 'Dalton\'s Solid Sphere Model (1803)',
      level: 2
    }
  }, {
    id: 'p-dalton',
    type: "list",
    data: {
      style: "unordered",
      items: ["John Dalton proposed that atoms are tiny, indivisible solid spheres.", "Each element consists of identical atoms; atoms of different elements have different masses.", "Atoms combine in fixed ratios in chemical reactions but are never created or destroyed."]
    }
  }, {
    id: 'callout-dalton',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Dalton\'s model — key ideas',
      text: '• Atoms are indivisible solid spheres\n• All atoms of a given element are identical\n• Atoms combine in simple whole-number ratios\n• Atoms are neither created nor destroyed in reactions\n\nLimitation: could not explain why atoms had different properties, or account for charged particles.'
    }
  }, {
    id: 'h-thomson',
    type: 'heading',
    data: {
      text: 'Thomson\'s Plum Pudding Model (1897)',
      level: 2
    }
  }, {
    id: 'p-thomson',
    type: "list",
    data: {
      style: "unordered",
      items: ["J.", "Thomson discovered the electron using cathode ray experiments.", "He showed cathode rays were streams of negatively charged particles (electrons) deflected by electric and magnetic fields.", "This proved atoms were divisible.", "Thomson proposed the plum pudding model: a positive sphere of charge with electrons embedded throughout, like plums in a pudding."]
    }
  }, {
    id: 'callout-thomson',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Thomson\'s evidence — cathode ray tube',
      text: 'Cathode rays were deflected by electric fields (towards + plate) → negatively charged.\nDeflected the same way regardless of cathode material → electrons are a universal component of matter.\nCharge-to-mass ratio (e/m) was the same for all gases used.'
    }
  }, {
    id: 'h-rutherford',
    type: 'heading',
    data: {
      text: 'Rutherford\'s Nuclear Model (1911)',
      level: 2
    }
  }, {
    id: 'p-rutherford',
    type: "list",
    data: {
      style: "unordered",
      items: ["Ernest Rutherford's gold foil experiment (performed by Geiger and Marsden) fired \u03B1-particles at a thin sheet of gold foil.", "The results contradicted the plum pudding model and led to the nuclear model of the atom."]
    }
  }, {
    id: 'list-rutherford',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Observation: most α-particles passed straight through → atom is mostly empty space', 'Observation: small fraction deflected at large angles → there is a small, dense, positive charge in the atom', 'Observation: very few bounced back (>90°) → the nucleus is extremely dense and concentrated', 'Conclusion: atom has a tiny, dense, positively charged nucleus with electrons orbiting in empty space around it']
    }
  }, {
    id: 'svg-rutherford',
    type: 'svg',
    data: {
      caption: 'Rutherford\'s gold foil experiment — α-particle scattering',
      svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Gold foil -->
  <rect x="195" y="20" width="10" height="160" fill="#fbbf24" opacity="0.7"/>
  <text x="200" y="15" text-anchor="middle" fill="#92400e" font-size="9">Gold foil</text>
  <!-- Alpha source -->
  <rect x="20" y="88" width="36" height="24" rx="4" fill="#4f46e5"/>
  <text x="38" y="103" text-anchor="middle" fill="white" font-size="9">α source</text>
  <!-- Straight-through particles -->
  <line x1="56" y1="100" x2="380" y2="100" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="350" y="94" fill="#4f46e5" font-size="9">Most pass through</text>
  <!-- Small deflections -->
  <line x1="56" y1="100" x2="200" y2="100" stroke="#10b981" stroke-width="1.2"/>
  <line x1="200" y1="100" x2="350" y2="70" stroke="#10b981" stroke-width="1.2" marker-end="url(#arrowG)"/>
  <line x1="200" y1="100" x2="350" y2="130" stroke="#10b981" stroke-width="1.2" marker-end="url(#arrowG)"/>
  <text x="355" y="68" fill="#059669" font-size="9">Small deflection</text>
  <!-- Large deflection back -->
  <line x1="56" y1="100" x2="200" y2="100" stroke="#ef4444" stroke-width="1.5"/>
  <line x1="200" y1="100" x2="100" y2="50" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrowR)"/>
  <text x="60" y="46" fill="#ef4444" font-size="9">Large deflection (rare)</text>
  <!-- Nucleus dot -->
  <circle cx="200" cy="100" r="5" fill="#ef4444"/>
  <text x="210" y="118" fill="#ef4444" font-size="9">nucleus</text>
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowR" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#ef4444"/></marker>
    <marker id="arrowG" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#10b981"/></marker>
    <marker id="arrow2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#6366f1"/></marker>
  </defs>
</svg>`
    }
  }, {
    id: 'h-bohr',
    type: 'heading',
    data: {
      text: 'Bohr\'s Model (1913)',
      level: 2
    }
  }, {
    id: 'p-bohr',
    type: "list",
    data: {
      style: "unordered",
      items: ["Niels Bohr refined Rutherford's model by proposing that electrons orbit the nucleus in fixed, quantised energy levels (shells).", "Electrons can only exist at specific energies; they absorb energy to jump to a higher level and emit energy (as light) when falling to a lower level.", "This explained atomic emission spectra."]
    }
  }, {
    id: 'h-modern',
    type: 'heading',
    data: {
      text: 'Modern Quantum Mechanical Model',
      level: 2
    }
  }, {
    id: 'p-modern',
    type: "list",
    data: {
      style: "unordered",
      items: ["The modern model replaces fixed circular orbits with atomic orbitals \u2014 regions of space where there is a high probability of finding an electron.", "Electrons have wave-like as well as particle-like properties (wave-particle duality).", "Orbitals have specific shapes (s, p, d, f) and energy levels."]
    }
  }, {
    id: 'table-models',
    type: 'comparisonTable',
    data: {
      caption: 'Summary of atomic model development',
      headers: ['Scientist', 'Year', 'Model', 'Key Evidence / Contribution'],
      rows: [['Dalton', '1803', 'Solid sphere', 'Law of definite proportions; conservation of mass'], ['Thomson', '1897', 'Plum pudding', 'Cathode ray tube → discovered electron'], ['Rutherford', '1911', 'Nuclear model', 'Gold foil (α-scattering) → tiny dense positive nucleus'], ['Bohr', '1913', 'Planetary orbits', 'Atomic emission spectra → quantised energy levels'], ['Modern', '1920s+', 'Quantum/orbital', 'Wave-particle duality → probability orbitals (s,p,d,f)']]
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — always link observation to conclusion',
      text: 'In exam questions about the gold foil experiment, always state:\n• What was observed\n• What this tells us about atomic structure\n\nExample: "Most α-particles passed through [observation] → the atom is mostly empty space [conclusion]."'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Describe Dalton\'s solid sphere model and its limitations',
        checked: false
      }, {
        text: 'Describe Thomson\'s plum pudding model and the cathode ray evidence',
        checked: false
      }, {
        text: 'Describe Rutherford\'s gold foil experiment: method, observations and conclusions',
        checked: false
      }, {
        text: 'Explain how Bohr\'s model improved on Rutherford\'s',
        checked: false
      }, {
        text: 'Describe the modern quantum mechanical model and orbitals',
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
      text: 'Understand: Atomic models evolved as new evidence emerged — Dalton → Thomson → Rutherford → Bohr → quantum mechanical model.\n\nApply: How did Rutherford\'s gold foil experiment disprove Thomson\'s plum pudding model?\n\nAnalyze: Compare Bohr and quantum mechanical models. What can the quantum model explain that Bohr\'s cannot?\n\nEvaluate: "Scientific models are never true — they are useful approximations." Discuss using the progression of atomic models.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Atomic model timeline: Dalton (solid sphere, 1803) → Thomson (plum pudding + electron, 1897) → Rutherford (nuclear model from α-scattering, 1911) → Bohr (quantised orbits + emission spectra, 1913) → Modern quantum model (probability orbitals, 1920s+). Each model was refined by new experimental evidence.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'p-thomson',
      prompt: 'What experiment did Thomson use to discover the electron, and what did he conclude?'
    }, {
      id: 'cue-2',
      blockId: 'list-rutherford',
      prompt: 'State three observations from Rutherford\'s gold foil experiment and what each tells us.'
    }, {
      id: 'cue-3',
      blockId: 'p-bohr',
      prompt: 'How did Bohr improve on Rutherford\'s model, and what evidence supported it?'
    }, {
      id: 'cue-4',
      blockId: 'table-models',
      prompt: 'Place the atomic models in chronological order: Bohr, Dalton, Modern, Rutherford, Thomson.'
    }, {
      id: 'cue-5',
      blockId: 'p-modern',
      prompt: 'What does the modern quantum model say about the location of electrons?'
    }],
    summaryText: 'Dalton → Thomson (electron, cathode rays) → Rutherford (nucleus, α-scattering) → Bohr (quantised shells, emission spectra) → Modern (probability orbitals). Each advance driven by new experimental evidence.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 'Development of the atomic model',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['atomic model', 'history of chemistry']
  }]
};