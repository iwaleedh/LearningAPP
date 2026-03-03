export const note_chemistry_1_3_11 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Explain the physical properties of metals — electrical conductivity, thermal conductivity, malleability, ductility, and high melting point — in terms of metallic bonding and structure.'
    }
  }, {
    id: 'h-properties',
    type: 'heading',
    data: {
      text: 'Properties of Metals Explained by Bonding',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["The unique properties of metals arise directly from their structure: a giant lattice of positive ions held together by a sea of delocalised electrons.", "Each property can be explained by referring to the mobile electrons and/or the lattice of ions."]
    }
  }, {
    id: 'h-conductivity',
    type: 'heading',
    data: {
      text: 'Electrical Conductivity',
      level: 2
    }
  }, {
    id: 'p-conductivity',
    type: "list",
    data: {
      style: "unordered",
      items: ["Metals are excellent electrical conductors in both solid and liquid states.", "The delocalised electrons are free to move throughout the metallic lattice.", "When a potential difference (voltage) is applied, these electrons flow in one direction \u2014 constituting an electric current.", "Unlike ionic compounds, metals do not need to be melted or dissolved to conduct."]
    }
  }, {
    id: 'h-thermal',
    type: 'heading',
    data: {
      text: 'Thermal Conductivity',
      level: 2
    }
  }, {
    id: 'p-thermal',
    type: "list",
    data: {
      style: "unordered",
      items: ["Metals are also good thermal conductors.", "When one end of a metal is heated, the delocalised electrons in that region gain kinetic energy and move rapidly through the lattice, transferring energy to other parts of the metal quickly.", "Vibrations of the metal ions also contribute to heat transfer."]
    }
  }, {
    id: 'h-malleability',
    type: 'heading',
    data: {
      text: 'Malleability and Ductility',
      level: 2
    }
  }, {
    id: 'p-malleability',
    type: "list",
    data: {
      style: "unordered",
      items: ["Metals can be hammered into sheets (malleability) and drawn into wires (ductility) without breaking.", "When a force is applied, layers of metal ions slide over each other.", "Because the metallic bond is non-directional, the delocalised electrons can adjust to any new arrangement of ions \u2014 the electrostatic attraction is maintained regardless of the relative positions of the ions.", "This is in contrast to ionic compounds, where layer shifts bring like charges together, causing repulsion and fracture."]
    }
  }, {
    id: 'svg-malleable',
    type: 'svg',
    data: {
      caption: 'Why metals are malleable — layers slide without breaking the non-directional metallic bond',
      svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Before deformation -->
  <text x="90" y="18" text-anchor="middle" fill="#374151" font-weight="bold" font-size="11">Before</text>
  <g fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5">
    <circle cx="40" cy="50" r="16"/><circle cx="90" cy="50" r="16"/><circle cx="140" cy="50" r="16"/>
    <circle cx="40" cy="90" r="16"/><circle cx="90" cy="90" r="16"/><circle cx="140" cy="90" r="16"/>
    <circle cx="40" cy="130" r="16"/><circle cx="90" cy="130" r="16"/><circle cx="140" cy="130" r="16"/>
  </g>
  <text x="60" y="54" text-anchor="middle" fill="#1e40af" font-size="9">M⁺</text>
  <text x="110" y="54" text-anchor="middle" fill="#1e40af" font-size="9">M⁺</text>
  <text x="60" y="94" text-anchor="middle" fill="#1e40af" font-size="9">M⁺</text>
  <!-- Force arrow -->
  <line x1="170" y1="50" x2="200" y2="50" stroke="#ef4444" stroke-width="2.5" marker-end="url(#fArr)"/>
  <text x="185" y="42" fill="#ef4444" font-size="10">Force</text>
  <!-- After deformation -->
  <text x="320" y="18" text-anchor="middle" fill="#374151" font-weight="bold" font-size="11">After (layer slides)</text>
  <g fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5">
    <circle cx="265" cy="50" r="16"/><circle cx="315" cy="50" r="16"/><circle cx="365" cy="50" r="16"/>
    <circle cx="240" cy="90" r="16"/><circle cx="290" cy="90" r="16"/><circle cx="340" cy="90" r="16"/>
    <circle cx="265" cy="130" r="16"/><circle cx="315" cy="130" r="16"/><circle cx="365" cy="130" r="16"/>
  </g>
  <!-- electron sea dots -->
  <text x="297" y="72" fill="#6366f1" font-size="12">e⁻</text>
  <text x="340" y="72" fill="#6366f1" font-size="12">e⁻</text>
  <text x="255" y="112" fill="#6366f1" font-size="12">e⁻</text>
  <text x="70" y="158" text-anchor="middle" fill="#16a34a" font-size="10">Regular lattice</text>
  <text x="310" y="158" text-anchor="middle" fill="#16a34a" font-size="10">Shifted — bond maintained (non-directional)</text>
  <defs>
    <marker id="fArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ef4444"/></marker>
  </defs>
</svg>`
    }
  }, {
    id: 'h-mp',
    type: 'heading',
    data: {
      text: 'High Melting and Boiling Points',
      level: 2
    }
  }, {
    id: 'p-mp',
    type: "list",
    data: {
      style: "unordered",
      items: ["Most metals have high melting and boiling points because a large amount of energy is needed to overcome the strong electrostatic attraction between the positive ions and the delocalised electrons throughout the giant metallic lattice.", "Exceptions include mercury (liquid at room temperature) and the alkali metals (relatively low mp due to large ions and only 1 delocalised electron each)."]
    }
  }, {
    id: 'table-properties',
    type: 'comparisonTable',
    data: {
      caption: 'Summary of metal properties and their explanations',
      headers: ['Property', 'Observation', 'Explanation in terms of metallic bonding'],
      rows: [['Electrical conductivity', 'Conduct in solid and liquid', 'Delocalised electrons free to move and carry charge'], ['Thermal conductivity', 'Conduct heat well', 'Delocalised electrons transfer kinetic energy rapidly'], ['Malleability', 'Can be hammered flat', 'Layers of ions slide; non-directional bond maintained by electron sea'], ['Ductility', 'Can be drawn into wires', 'Same layer-sliding mechanism; bond not broken'], ['High melting point', 'Most solid at room temperature', 'Strong electrostatic attraction in giant lattice requires much energy to break'], ['Lustre', 'Shiny appearance', 'Delocalised electrons absorb and re-emit light of all wavelengths']]
    }
  }, {
    id: 'callout-key',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key contrast — metals vs ionic compounds',
      text: 'Both metals and ionic compounds have giant structures with high melting points.\n\nKey differences:\n• Metals conduct electricity as solids (mobile e⁻); ionic compounds only when molten/dissolved\n• Metals are malleable (non-directional bond, layer sliding); ionic compounds are brittle (layer shift → repulsion)\n• Metals insoluble in water; many ionic compounds soluble'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — always mention delocalised electrons',
      text: 'For any metal property question, link your answer to the delocalised electrons:\n• Conductivity → "delocalised electrons free to move"\n• Malleability → "layers slide, non-directional bond maintained by electron sea"\n• High mp → "strong electrostatic attraction between ions and electron sea"\nNever just say "metallic bonds are strong" without explaining what makes them strong.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — metals conduct because of "free electrons"',
      text: 'Say "delocalised electrons" not just "free electrons". Also, metals conduct as SOLIDS (unlike ionic compounds which need to melt first). Do not say "metals conduct when melted" — they conduct in both states.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Explain electrical conductivity of metals in terms of delocalised electrons',
        checked: false
      }, {
        text: 'Explain thermal conductivity in terms of electron movement',
        checked: false
      }, {
        text: 'Explain malleability and ductility in terms of non-directional bonding',
        checked: false
      }, {
        text: 'Explain why metals have high melting points',
        checked: false
      }, {
        text: 'Contrast metal properties with those of ionic compounds',
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
      text: 'Understand: Metal properties are direct consequences of metallic bonding. Stronger bonding with more delocalised electrons and smaller ionic radius.\n\nApply: Predict and explain m.p. trend across Na → Mg → Al.\n\nAnalyze: W has m.p. 3422°C while Hg is liquid at r.t. Analyze bonding factors explaining this enormous difference.\n\nEvaluate: "Metallic bonding is weaker than ionic bonding because metals have lower m.p." Use counter-examples to evaluate.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Metal properties from delocalised electrons + M⁺ lattice: electrical conductivity (e⁻ move freely), thermal conductivity (e⁻ transfer KE), malleability/ductility (layers slide, non-directional bond maintained), high mp (strong electrostatic attraction). Key contrast: metals conduct as solids; ionic compounds only when molten/dissolved. Metals malleable; ionic compounds brittle.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'p-conductivity',
      prompt: 'Why do metals conduct electricity as solids? Why don\'t ionic compounds?'
    }, {
      id: 'cue-2',
      blockId: 'p-malleability',
      prompt: 'Explain why metals are malleable but ionic compounds are brittle.'
    }, {
      id: 'cue-3',
      blockId: 'p-mp',
      prompt: 'Why do most metals have high melting points?'
    }, {
      id: 'cue-4',
      blockId: 'p-thermal',
      prompt: 'How do delocalised electrons contribute to the thermal conductivity of metals?'
    }, {
      id: 'cue-5',
      blockId: 'callout-key',
      prompt: 'State two key differences between the properties of metals and ionic compounds.'
    }],
    summaryText: 'Delocalised e⁻ → electrical + thermal conductivity. Non-directional bond → malleable/ductile (layers slide). Strong electrostatic attraction → high mp. Conducts as solid (unlike ionic). Malleable (unlike brittle ionic).',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Metal properties: conductivity, malleability, ductility, melting point',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['metallic bonding', 'metal properties']
  }]
};