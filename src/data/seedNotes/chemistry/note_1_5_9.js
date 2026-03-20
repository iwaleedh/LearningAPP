/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 9
 * "Free radical addition of HBr (Peroxide effect)"
 * Edexcel IAL Chemistry WCH11
 */
export const note_chemistry_1_5_9 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand the free radical addition of HBr to alkenes in the presence of organic peroxides (the peroxide effect). Explain the three stages of the chain mechanism and why — due to bond enthalpy considerations — only HBr, not HCl or HI, undergoes this reaction.' }
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'Overview: The Peroxide Effect', level: 2 }
    },
    {
      id: 'list-overview',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Normally, HBr adds to alkenes by electrophilic addition — following Markovnikov\'s rule: the H attaches to the carbon bearing more H atoms',
          'In the presence of organic peroxides (e.g. benzoyl peroxide, (C₆H₅COO)₂) or UV light, HBr instead reacts via a free radical mechanism',
          'For unsymmetrical alkenes, the free radical route produces the anti-Markovnikov product: Br• attaches to the less substituted (terminal) carbon',
          'Example with propene: electrophilic addition → CH₃CHBrCH₃ (2-bromopropane); free radical addition → CH₃CH₂CH₂Br (1-bromopropane)',
          'The peroxide effect applies only to HBr — not HF, HCl, or HI — due to bond enthalpy differences in the propagation steps'
        ]
      }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Electrophilic Addition', 'Free Radical Addition'],
        rows: [
          ['Conditions', 'HBr alone, in the dark', 'HBr + organic peroxide (or UV light)'],
          ['Bond fission type', 'Heterolytic — unequal split of electron pair', 'Homolytic — equal split, one electron to each atom'],
          ['Initiating species', 'H⁺ (from polar H–Br bond)', 'Br• (bromine radical)'],
          ['Reaction type', 'Ionic; single addition step', 'Radical chain: initiation, propagation, termination'],
          ['Intermediate', '2° carbocation: CH₃CH⁺CH₃', '2° carbon radical: CH₃CH•CH₂Br'],
          ['Product from propene', '2-bromopropane (Markovnikov)', '1-bromopropane (anti-Markovnikov)']
        ],
        caption: 'Comparison of electrophilic and free radical addition of HBr to propene'
      }
    },
    {
      id: 'h-mech',
      type: 'heading',
      data: { text: 'Mechanism: Free Radical Chain Reaction', level: 2 }
    },
    {
      id: 'list-mech-overview',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The free radical chain reaction has three stages: initiation → propagation → termination',
          'Each bond-breaking step involves homolytic fission — shown in mechanism diagrams by single-headed (half-arrow) curly arrows',
          'Free radicals are highly reactive species with one unpaired electron, represented by a dot (e.g. Br•, CH₃CH•)'
        ]
      }
    },
    {
      id: 'h-initiation',
      type: 'heading',
      data: { text: 'Stage 1 — Initiation', level: 3 }
    },
    {
      id: 'list-initiation',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Step 1: The weak O–O bond in the organic peroxide undergoes homolytic fission (by UV light or heat) → two alkoxy radicals: RO–OR → 2 RO•',
          'Step 2: Each alkoxy radical abstracts an H atom from HBr → an alcohol + a bromine radical: RO• + HBr → ROH + Br•',
          'The Br• produced then initiates the propagation chain'
        ]
      }
    },
    {
      id: 'h-propagation',
      type: 'heading',
      data: { text: 'Stage 2 — Propagation', level: 3 }
    },
    {
      id: 'list-propagation',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Propagation Step 1: Br• adds to the less substituted carbon (C-1) of the alkene → a secondary radical forms at C-2, which is more stable than the alternative primary radical at C-1: CH₃CH=CH₂ + Br• → CH₃CH•–CH₂Br',
          'Radical stability order: tertiary (3°) > secondary (2°) > primary (1°); the reaction favours the more stable secondary radical intermediate',
          'Propagation Step 2: The secondary carbon radical abstracts an H atom from another HBr molecule → anti-Markovnikov product + regenerated Br• radical: CH₃CH•–CH₂Br + HBr → CH₃CH₂CH₂Br + Br•',
          'The regenerated Br• repeats Step 1 — each propagation loop converts one alkene molecule; thousands of cycles occur per initiation event, making the chain reaction very efficient'
        ]
      }
    },
    {
      id: 'h-termination',
      type: 'heading',
      data: { text: 'Stage 3 — Termination', level: 3 }
    },
    {
      id: 'list-termination',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Termination occurs when any two free radicals collide and form a covalent bond, eliminating both unpaired electrons',
          'Possible termination reactions: 2 Br• → Br₂ ; Br• + CH₃CH•CH₂Br → CH₃CHBrCH₂Br ; 2 CH₃CH•CH₂Br → (CH₃CHBrCH₂Br)₂ dimer',
          'Multiple termination routes explain why free radical products may contain minor impurities (e.g. Br₂, dimerisation products) and why the method is generally less selective than ionic mechanisms'
        ]
      }
    },
    {
      id: 'callout-stability',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Br• Attaches to C-1 (Anti-Markovnikov Rule)',
        text: 'Radical stability: 3° > 2° > 1° (more alkyl groups donate electron density, delocalising the unpaired electron and lowering its energy)<br><br>For propene (CH<sub>3</sub>CH=CH<sub>2</sub>):<br>• Option A — Br• on C-1 → <strong>secondary radical on C-2</strong>: CH<sub>3</sub>CH•–CH<sub>2</sub>Br — <strong>more stable ✓</strong><br>• Option B — Br• on C-2 → <strong>primary radical on C-1</strong>: CH<sub>3</sub>CHBr–CH<sub>2</sub>• — less stable ✗<br><br>The reaction proceeds via the more stable intermediate → Br on C-1 → product is <strong>1-bromopropane</strong> (anti-Markovnikov)'
      }
    },
    {
      id: 'svg-products',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <defs>
    <marker id="arr9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#555"/>
    </marker>
  </defs>
  <text x="280" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Addition of HBr to Propene: Two Pathways</text>
  <rect x="200" y="28" width="160" height="50" rx="6" fill="#1c3a64" stroke="#4a90d9" stroke-width="1.5"/>
  <text x="280" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#1a237e">CH&#x2083;CH=CH&#x2082;</text>
  <text x="280" y="66" text-anchor="middle" font-size="11" fill="#1a237e">propene</text>
  <line x1="218" y1="78" x2="108" y2="108" stroke="#555" stroke-width="1.5" marker-end="url(#arr9)"/>
  <text x="140" y="89" text-anchor="middle" font-size="10" fill="#555">HBr alone, dark</text>
  <text x="140" y="102" text-anchor="middle" font-size="10" fill="#c62828">Electrophilic addition</text>
  <line x1="342" y1="78" x2="452" y2="108" stroke="#555" stroke-width="1.5" marker-end="url(#arr9)"/>
  <text x="418" y="89" text-anchor="middle" font-size="10" fill="#555">HBr + peroxide</text>
  <text x="418" y="102" text-anchor="middle" font-size="10" fill="#2e7d32">Free radical addition</text>
  <rect x="12" y="115" width="188" height="68" rx="6" fill="#4a1040" stroke="#c62828" stroke-width="1.5"/>
  <text x="106" y="133" text-anchor="middle" font-size="11" font-weight="bold" fill="#b71c1c">Markovnikov Product</text>
  <text x="106" y="151" text-anchor="middle" font-size="12" fill="#b71c1c">CH&#x2083;&#x2013;CHBr&#x2013;CH&#x2083;</text>
  <text x="106" y="168" text-anchor="middle" font-size="11" fill="#b71c1c">2-bromopropane</text>
  <rect x="360" y="115" width="188" height="68" rx="6" fill="#0a2e1a" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="454" y="133" text-anchor="middle" font-size="11" font-weight="bold" fill="#1b5e20">Anti-Markovnikov Product</text>
  <text x="454" y="151" text-anchor="middle" font-size="12" fill="#1b5e20">CH&#x2083;&#x2013;CH&#x2082;&#x2013;CH&#x2082;Br</text>
  <text x="454" y="168" text-anchor="middle" font-size="11" fill="#1b5e20">1-bromopropane</text>
  <text x="106" y="197" text-anchor="middle" font-size="10" fill="#888">via 2&#xB0; carbocation intermediate</text>
  <text x="454" y="197" text-anchor="middle" font-size="10" fill="#888">via 2&#xB0; carbon radical intermediate</text>
  <text x="280" y="222" text-anchor="middle" font-size="11" fill="#555">Both mechanisms proceed via a 2&#xB0; intermediate &#x2014; but react at</text>
  <text x="280" y="238" text-anchor="middle" font-size="11" fill="#555">different carbons, giving opposite regioselectivity</text>
</svg>`,
        caption: 'Propene + HBr: Markovnikov (electrophilic) vs anti-Markovnikov (free radical) products'
      }
    },
    {
      id: 'h-halides',
      type: 'heading',
      data: { text: 'Why Only HBr Undergoes the Peroxide Effect', level: 2 }
    },
    {
      id: 'list-halides-overview',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'For a free radical chain reaction to sustain itself, both propagation steps must be exothermic',
          'Bond enthalpy data determines whether each propagation step releases energy or requires an input of energy',
          'HBr is unique: both propagation steps are exothermic → the chain propagates rapidly; for HCl and HI, at least one step is endothermic, halting the chain'
        ]
      }
    },
    {
      id: 'table-halides',
      type: 'comparisonTable',
      data: {
        headers: ['Hydrogen Halide', 'Obstacle in the propagation steps', 'Result'],
        rows: [
          ['HF', 'H–F bond extremely strong (~570 kJ mol⁻¹); F• radicals formed are too reactive and non-selective; step 2 is highly endothermic', 'No peroxide effect — electrophilic addition dominates'],
          ['HCl', 'Propagation Step 2 (C-radical + HCl → product + Cl•) is endothermic: H–Cl bond (~432 kJ mol⁻¹) is stronger than the C–H bond formed, so energy input is required', 'No peroxide effect — chain cannot sustain; electrophilic dominates'],
          ['HBr', 'Both Step 1 (C–Br bond formed) and Step 2 (H–Br bond broken, ~366 kJ mol⁻¹ — relatively weak) are exothermic; the chain releases energy at every cycle', 'Peroxide effect occurs ✓ — sustained chain reaction'],
          ['HI', 'Propagation Step 1 (I• adds to alkene) forms a weak C–I bond — this step is endothermic; the activation energy barrier prevents the chain from starting effectively', 'No peroxide effect — chain cannot initiate; electrophilic dominates']
        ],
        caption: 'Why only HBr undergoes free radical addition to alkenes (bond enthalpy argument)'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Free Radical Addition of HBr to But-1-ene',
        text: 'Alkene: CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub> (but-1-ene); conditions: HBr + organic peroxide<br><br><strong>Initiation:</strong><br>ROOR → 2 RO• (homolytic fission of O–O bond)<br>RO• + HBr → ROH + Br•<br><br><strong>Propagation Step 1:</strong><br>Br• + CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub> → BrCH<sub>2</sub>–CH•–CH<sub>2</sub>CH<sub>3</sub><br>Br• attaches to C-1 → more stable 2° radical at C-2 (NOT primary radical at C-1)<br><br><strong>Propagation Step 2:</strong><br>BrCH<sub>2</sub>–CH•–CH<sub>2</sub>CH<sub>3</sub> + HBr → BrCH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>CH<sub>3</sub> + Br•<br>Product: 1-bromobutane (anti-Markovnikov); Br• regenerated → chain continues<br><br><strong>Termination (one example):</strong><br>2 Br• → Br<sub>2</sub>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Exam Mistakes',
        text: '• Do not confuse HBr alone in the dark (→ 2-bromopropane, Markovnikov) with HBr + peroxide (→ 1-bromopropane, anti-Markovnikov)<br>• In propagation, each step must regenerate the radical — Br• consumed in step 1 must reappear in step 2<br>• HCl, HF, and HI do NOT show the peroxide effect — never apply anti-Markovnikov to these halides<br>• The intermediate in free radical addition is a carbon radical (C•), NOT a carbocation (C⁺)<br>• Use single-headed (half) curly arrows for radical mechanisms — full-headed arrows are for ionic mechanisms only'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always state the bond fission type: homolytic for free radical steps, heterolytic for electrophilic steps<br>• To identify the anti-Markovnikov product: draw both possible radical intermediates → select the more stable one (2° > 1°; 3° > 2°)<br>• Conditions: free radical addition = "organic peroxide" or "UV light"; electrophilic addition = "HBr, anhydrous, dark"<br>• Any two radical species combining is a valid termination step — you are NOT limited to 2 Br• → Br₂<br>• "Peroxide effect" and "anti-Markovnikov addition" are synonymous — either term is acceptable in an exam answer'
      }
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'State that organic peroxides (or UV light) cause anti-Markovnikov addition of HBr to alkenes', checked: false },
          { text: 'Write the two initiation steps: ROOR → 2 RO•; RO• + HBr → ROH + Br•', checked: false },
          { text: 'Write propagation step 1: Br• adds to C-1 of propene → secondary radical at C-2', checked: false },
          { text: 'Explain using radical stability (3° > 2° > 1°) why Br• attacks the less-substituted carbon', checked: false },
          { text: 'Write propagation step 2: carbon radical abstracts H• from HBr → 1-bromopropane + Br•', checked: false },
          { text: 'Identify 1-bromopropane as the anti-Markovnikov product vs 2-bromopropane from the electrophilic route', checked: false },
          { text: 'Write a termination step showing any two radicals combining', checked: false },
          { text: 'Explain why HCl does not show the effect (step 2 endothermic) and HI does not (step 1 endothermic)', checked: false }
        ]
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Organic peroxides (or UV light) initiate free radical addition of HBr to alkenes. The Br• radical attaches to the less substituted carbon to form the more stable secondary radical; a second HBr supplies H•, giving the anti-Markovnikov product (1-bromopropane from propene). The chain terminates when any two radicals combine. Only HBr shows this effect because both propagation steps are exothermic; for HCl, step 2 is endothermic, and for HI, step 1 is endothermic — halting those chains.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'c-peroxide',
        blockId: 'list-overview',
        prompt: 'What effect do organic peroxides have on the addition of HBr to propene? Name the product formed and explain why it differs from the electrophilic product.'
      },
      {
        id: 'c-initiation',
        blockId: 'list-initiation',
        prompt: 'Write the two initiation steps for the free radical addition of HBr to an alkene.'
      },
      {
        id: 'c-propagation',
        blockId: 'list-propagation',
        prompt: 'Explain using radical stability why Br• attaches to C-1 of propene in propagation step 1, and write the two propagation steps.'
      },
      {
        id: 'c-termination',
        blockId: 'list-termination',
        prompt: 'What is a termination step in a free radical mechanism? Give two possible examples for this reaction.'
      },
      {
        id: 'c-hbr-only',
        blockId: 'table-halides',
        prompt: 'Explain using bond enthalpies why HCl and HI do not undergo the peroxide effect, but HBr does.'
      }
    ],
    summaryText: 'Peroxides initiate a radical chain. Br• attacks the less-substituted carbon to form the most stable radical (2° > 1°), giving the anti-Markovnikov product. HCl propagation step 2 is endothermic; HI propagation step 1 is endothermic — only HBr has both steps exothermic.',
    ready: true
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Chemguide: Alkene and HBr (Peroxide Effect)',
      detail: 'Organic peroxides initiate a free radical chain. Br• attacks to form the most stable secondary radical, giving 1-bromopropane from propene (anti-Markovnikov). Only HBr works because both propagation steps are exothermic, unlike HCl (step 2 endothermic) and HI (step 1 endothermic).',
      source: 'chemguide.co.uk/mechanisms/freerad/alkenehbr.html'
    }
  ]
};
