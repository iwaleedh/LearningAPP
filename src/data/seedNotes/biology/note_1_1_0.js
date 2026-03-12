export const note_biology_1_1_0 = {
  blocks: [
    {
      id: 'obj-water',
      type: 'objective',
      data: {
        text: 'Understand water as a polar solvent and its importance to living organisms, including hydrogen bonding, thermal properties, and solvent action.'
      }
    },
    {
      id: 'h-polarity',
      type: 'heading',
      data: {
        text: 'Water Polarity and Hydrogen Bonding',
        level: 2
      }
    },
    {
      id: 'p-polarity',
      type: 'paragraph',
      data: {
        text: 'Water is a polar molecule due to the electronegativity difference between oxygen and hydrogen atoms. Oxygen is highly electronegative, pulling electron density towards itself, creating a δ− charge on oxygen and δ+ charges on the hydrogen atoms. This asymmetric charge distribution makes water a dipole. The O−H bond is highly polar, and the bent geometry of the water molecule (104.5°) means the individual bond dipoles do not cancel, resulting in a net dipole moment.'
      }
    },
    {
      id: 'p-hbonds',
      type: 'paragraph',
      data: {
        text: 'Hydrogen bonding occurs between water molecules. The δ+ hydrogen of one water molecule is attracted to the δ− oxygen of a neighbouring water molecule. Although weaker than covalent bonds (20 kJ mol⁻¹ vs 467 kJ mol⁻¹ for O−H covalent), these hydrogen bonds are numerous and collectively significant. Each water molecule can form up to four hydrogen bonds: two as a hydrogen bond donor (via its two hydrogen atoms) and two as an acceptor (via its two lone pairs on oxygen). This extensive hydrogen bonding network gives water its unique properties.'
      }
    },
    {
      id: 'callout-key-hbond',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hydrogen Bonding',
        text: 'Forms between δ+ H of one molecule and δ− O of another. Responsible for water\'s cohesion, surface tension, and high heat capacity.'
      }
    },
    {
      id: 'svg-water-dipole',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><style>.lbl{fill:#1f2937;font-size:12px;}.delta{fill:#6366f1;font-size:13px;font-weight:bold;}.muted{fill:#6b7280;font-size:10px;}</style></defs><text x="160" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e1b4b">Water Molecule — Dipole Structure</text><!-- Oxygen atom --><circle cx="160" cy="110" r="22" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/><text x="160" y="115" text-anchor="middle" class="lbl" font-weight="bold">O</text><!-- Hydrogen atoms --><circle cx="85" cy="72" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="85" y="77" text-anchor="middle" class="lbl">H</text><circle cx="235" cy="72" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="235" y="77" text-anchor="middle" class="lbl">H</text><!-- Bonds --><line x1="97" y1="81" x2="140" y2="100" stroke="#374151" stroke-width="2"/><line x1="223" y1="81" x2="180" y2="100" stroke="#374151" stroke-width="2"/><!-- Bond angle arc --><path d="M 115 102 A 35 35 0 0 1 205 102" fill="none" stroke="#6b7280" stroke-width="1" stroke-dasharray="3 2"/><text x="160" y="148" text-anchor="middle" class="muted">104.5°</text><!-- Delta charges --><text x="70" y="60" text-anchor="middle" class="delta">δ+</text><text x="250" y="60" text-anchor="middle" class="delta">δ+</text><text x="160" y="145" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="bold">δ−</text><!-- Lone pairs (dots) --><circle cx="145" cy="90" r="2.5" fill="#dc2626"/><circle cx="152" cy="87" r="2.5" fill="#dc2626"/><circle cx="168" cy="87" r="2.5" fill="#dc2626"/><circle cx="175" cy="90" r="2.5" fill="#dc2626"/><text x="160" y="185" text-anchor="middle" class="muted" font-style="italic">Bond angle: 104.5° — lone pairs push bonds closer together</text></svg>',
        caption: 'Water molecule: bent shape with 104.5° H–O–H angle; oxygen carries δ− charge, hydrogen atoms carry δ+ charge'
      }
    },
    {
      id: 'h-thermal',
      type: 'heading',
      data: {
        text: 'Thermal Properties of Water',
        level: 2
      }
    },
    {
      id: 'p-specific-heat',
      type: 'paragraph',
      data: {
        text: 'Water has a high specific heat capacity (4.18 kJ kg⁻¹ K⁻¹), meaning large amounts of energy are required to raise its temperature. This is because hydrogen bonds must be partially broken and reformed as kinetic energy increases. The high specific heat capacity means water acts as a thermal buffer, moderating temperature changes in aquatic environments and organisms. This property is crucial for protecting aquatic ecosystems from rapid temperature fluctuations.'
      }
    },
    {
      id: 'p-latent-heat',
      type: 'paragraph',
      data: {
        text: 'Water has a high latent heat of vaporisation (2257 kJ kg⁻¹), requiring significant energy input to break hydrogen bonds and convert liquid to gas. This is why sweating is effective for thermoregulation in animals—evaporation of sweat from the skin surface removes large amounts of thermal energy. Plants also use transpiration to cool themselves and transport minerals. The high latent heat of vaporisation also means water is slow to evaporate, maintaining moisture in organisms and habitats.'
      }
    },
    {
      id: 'eq-latent-heat',
      type: 'equation',
      data: {
        html: 'Energy needed = mass (kg) × latent heat of vaporisation (kJ kg<sup>−1</sup>)',
        caption: 'Calculating energy for phase change'
      }
    },
    {
      id: 'h-solvent',
      type: 'heading',
      data: {
        text: 'Water as a Solvent',
        level: 2
      }
    },
    {
      id: 'p-solvent-ionic',
      type: 'paragraph',
      data: {
        text: 'Water is an excellent solvent for ionic compounds and polar molecules due to its polarity. When an ionic compound (e.g. NaCl) dissolves, the δ+ hydrogen atoms of water are attracted to anions, and the δ− oxygen atoms surround cations. This is called hydration. The water molecules form a hydration shell around each ion, separating them and preventing them from re-crystallising. This solvent property is essential for biological processes: glucose, amino acids, and many other biomolecules dissolve in water, allowing them to react and be transported within cells and organisms.'
      }
    },
    {
      id: 'p-cohesion',
      type: 'paragraph',
      data: {
        text: 'Cohesion refers to hydrogen bonds between water molecules, causing water to stick to itself. This creates surface tension — the tendency of the water surface to resist rupture — allowing small insects to walk on pond surfaces. Adhesion refers to hydrogen bonds between water molecules and other polar surfaces (e.g. cellulose walls of xylem vessels). Together, cohesion and adhesion enable capillary rise: water is pulled upward through narrow xylem vessels against gravity, driven by the evaporation (transpiration) from leaves. This cohesion-tension mechanism transports water and dissolved minerals from roots to leaves. Water\'s hydrogen bonding also makes it a reactant in key metabolic reactions: condensation (joining monomers, releasing H₂O), hydrolysis (breaking polymers, using H₂O), and photosynthesis (splitting H₂O in the light-dependent reactions to release O₂).'
      }
    },
    {
      id: 'p-density',
      type: 'paragraph',
      data: {
        text: 'Unusually, water reaches maximum density at 4°C rather than at its freezing point. Below 4°C, water expands as hydrogen bonds become more ordered and form a crystalline lattice in ice. Ice is less dense than liquid water, so it floats. This property protects aquatic life in winter: ice forms on the surface and insulates water below, maintaining a habitat for organisms at ~4°C. If ice were denser, it would sink, and aquatic ecosystems would freeze solid from the bottom up.'
      }
    },
    {
      id: 'table-properties',
      type: 'comparisonTable',
      data: {
        headers: ['Property', 'Value', 'Biological Significance'],
        rows: [
          ['Specific heat capacity', '4.18 kJ kg⁻¹ K⁻¹', 'Thermal buffer; stable aquatic environments'],
          ['Latent heat of vaporisation', '2257 kJ kg⁻¹', 'Efficient thermoregulation via evaporation'],
          ['Maximum density', '4°C', 'Ice floats; protects aquatic life in winter'],
          ['Solvent ability', 'Dissolves ionic and polar solutes', 'Transport of nutrients; enables biochemical reactions']
        ],
        caption: 'Key properties of water and their biological importance'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Water forms hydrogen bonds because of the electronegativity difference between O and H atoms. The δ+ hydrogen of one water molecule is attracted to the δ− oxygen of a neighbouring molecule. These numerous hydrogen bonds collectively create water\'s polarity and enable it to dissolve ionic compounds through dipole-dipole and ion-dipole interactions.',
        apply: 'A sample of sweat evaporates from skin. If 50 g of water evaporates, calculate the energy removed from the body. (Latent heat of vaporisation = 2257 kJ kg⁻¹)',
        analyze: 'Compare the properties of water and ethanol as solvents. Explain why water is better at dissolving ionic compounds such as NaCl, referring to intermolecular forces.',
        evaluate: 'Evaluate the claim that water\'s anomalous density is the single most important property for supporting aquatic life. Is thermal buffering or density more critical? Justify your answer with evidence.'
      },
      terms: []
    },
    {
      id: 'checklist-water',
      type: 'checklist',
      data: {
        items: [
          { text: 'Water is polar due to O being more electronegative than H', checked: false },
          { text: 'Hydrogen bonds form between δ+ H and δ− O atoms', checked: false },
          { text: 'High specific heat capacity moderates temperature changes', checked: false },
          { text: 'High latent heat of vaporisation enables sweating and transpiration', checked: false },
          { text: 'Water dissolves ionic and polar compounds by hydration', checked: false }
        ]
      }
    },
    {
      id: 'summary-water',
      type: 'summary',
      data: {
        text: 'Water\'s polar structure and extensive hydrogen bonding network give it unique properties: high specific and latent heat, excellent solvent ability, cohesion, surface tension, and anomalous density. These properties are essential for life, enabling temperature regulation, transport of solutes, and countless biochemical reactions. Water is truly the "universal solvent" and a prerequisite for all living systems.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-polarity',
        prompt: 'Why is water a polar molecule? How do the O and H atoms distribute charge?'
      },
      {
        id: 'cue-2',
        blockId: 'p-hbonds',
        prompt: 'Describe hydrogen bonding in water. How many hydrogen bonds can one water molecule form?'
      },
      {
        id: 'cue-3',
        blockId: 'p-specific-heat',
        prompt: 'What is specific heat capacity, and why does water have a high value?'
      },
      {
        id: 'cue-4',
        blockId: 'p-latent-heat',
        prompt: 'How does latent heat of vaporisation relate to thermoregulation in animals?'
      },
      {
        id: 'cue-5',
        blockId: 'p-density',
        prompt: 'Why does ice float, and why is this important for aquatic ecosystems?'
      }
    ],
    summaryText: 'Water is polar (δ+ H, δ− O) and forms hydrogen bonds between molecules. These bonds create high specific heat capacity, high latent heat of vaporisation, excellent solvent properties for ionic/polar compounds, cohesion, surface tension, and anomalous density (maximum at 4°C, ice floats). All essential for life.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Water Properties in A-Level Biology',
      detail: 'Comprehensive overview of water\'s physical and chemical properties as a solvent.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['water', 'solvent', 'hydrogen-bonding', 'thermal-properties']
    }
  ]
};
