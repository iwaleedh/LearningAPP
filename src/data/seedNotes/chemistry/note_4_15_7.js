export const note_chemistry_4_15_7 = {
  blocks: [
    {
      id: 'obj-chromatography',
      type: 'objective',
      data: {
        text: 'Understand separation and analysis techniques: thin-layer chromatography (TLC), paper chromatography, HPLC, and gas chromatography (GC); applications in pharmaceuticals and food analysis.'
      }
    },
    {
      id: 'h-chromatography-principles',
      type: 'heading',
      data: { text: 'Chromatography Principles', level: 2 }
    },
    {
      id: 'p-chromatography-intro',
      type: 'paragraph',
      data: {
        text: 'Chromatography is a separation and analysis technique based on the different affinities of molecules for a stationary phase and a mobile phase. The stationary phase is a solid or liquid that stays fixed (in a column or on a surface). The mobile phase is a liquid or gas that moves, carrying the sample through or over the stationary phase. Molecules with stronger interactions with the stationary phase move slowly (high retention); those with weaker interactions move fast (low retention). This differential movement separates the components of a mixture.'
      }
    },
    {
      id: 'p-separation-basis',
      type: 'paragraph',
      data: {
        text: 'Separation depends on: (1) Molecular polarity: polar molecules interact strongly with polar stationary phases (silica gel, alumina) and weakly with non-polar mobile phases (hexane). (2) Molecular size: smaller molecules move faster through porous media. (3) Hydrogen bonding: molecules with O–H or N–H groups interact via H-bonding with polar stationary phases. (4) Functional groups: carbonyls, amines, carboxylic acids have different affinities. By choosing appropriate stationary and mobile phases, you can selectively separate compounds of interest.'
      }
    },
    {
      id: 'h-tlc',
      type: 'heading',
      data: { text: 'Thin-Layer Chromatography (TLC)', level: 2 }
    },
    {
      id: 'p-tlc-setup',
      type: 'paragraph',
      data: {
        text: 'Thin-layer chromatography uses a thin layer of stationary phase (typically silica gel SiO₂, alumina Al₂O₃, or cellulose) coated on a glass, plastic, or aluminium plate. The sample is spotted near the bottom of the plate using a capillary tube. The plate is then placed in a solvent tank containing the mobile phase (solvent mixture, e.g., hexane + ethyl acetate). Capillary action draws the solvent up the plate, carrying the sample components at different rates. After the solvent front has travelled to near the top, the plate is removed and dried. Components are located by UV light (if they absorb UV), staining (dyes or chemical reagents), or fluorescence.'
      }
    },
    {
      id: 'p-tlc-rf',
      type: 'paragraph',
      data: {
        text: 'The Rf (retention factor) is calculated as: Rf = distance travelled by spot / distance travelled by solvent front. Rf values range from 0 (does not move) to 1 (moves with the solvent). For a given stationary/mobile phase combination, each compound has a characteristic Rf. By comparing unknown samples with standards run on the same plate, you can identify compounds. TLC is quick (minutes to hours), requires small amounts of sample, and is inexpensive. It is widely used to check reaction progress, verify purity, and separate mixtures on a small scale.'
      }
    },
    {
      id: 'equation-rf',
      type: 'equation',
      data: {
        html: 'R<sub>f</sub> = <span class="nb-frac"><span class="nb-num">Distance travelled by spot (cm)</span><span class="nb-den">Distance travelled by solvent front (cm)</span></span>',
        caption: 'Retention factor Rf in chromatography. Values are specific to the stationary/mobile phase system and the compound.'
      }
    },
    {
      id: 'callout-tlc-tips',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'TLC Tips',
        text: 'Use a capillary tube (not a dropper) to apply samples — tiny spots give better resolution. Do not let the sample spot go below the solvent level (baseline) in the tank. Always use the same stationary phase and mobile phase for comparison. Mark the solvent front immediately upon removal from the tank (it evaporates quickly). Rf depends on temperature and humidity, so reproducibility requires consistent conditions. Multiple spots from one sample indicate a mixture or impurity.'
      }
    },
    {
      id: 'h-paper-chromatography',
      type: 'heading',
      data: { text: 'Paper Chromatography', level: 2 }
    },
    {
      id: 'p-paper-chrom',
      type: 'paragraph',
      data: {
        text: 'Paper chromatography is similar to TLC but uses filter paper (cellulose) as the stationary phase. A drop of sample is spotted on the paper, and the paper is hung vertically in a solvent tank (solvent climbs upward). The mobile phase can be aqueous or organic. Paper chromatography is often used for polar compounds (sugars, amino acids, organic acids) because cellulose is slightly polar. The separation principle is the same as TLC: compounds are separated by differential affinity for the paper and solvent. Rf values are calculated identically. Paper chromatography is less widely used today, as TLC and HPLC offer better resolution and speed.'
      }
    },
    {
      id: 'h-hplc',
      type: 'heading',
      data: { text: 'High-Performance Liquid Chromatography (HPLC)', level: 2 }
    },
    {
      id: 'p-hplc-intro',
      type: 'paragraph',
      data: {
        text: 'HPLC is a high-resolution, high-speed separation technique. The sample is injected into a pressurised column (typically 10–30 cm long, 3–5 mm diameter) packed with fine stationary phase particles (silica, 3–10 μm). The mobile phase (solvent or solvent mixture) is pumped through at high pressure (up to 300 bar). The high pressure forces the mobile phase through the tightly packed column, increasing resolution and speed compared to gravity-fed TLC. A detector (usually UV absorption at 254 nm) monitors the effluent, recording a chromatogram (signal vs. time).'
      }
    },
    {
      id: 'p-hplc-modes',
      type: 'paragraph',
      data: {
        text: 'Normal-phase HPLC: polar stationary phase (silica gel), non-polar mobile phase (hexane, etc.). Polar compounds elute slowly, non-polar fast. Reverse-phase HPLC: non-polar stationary phase (C₁₈ hydrocarbon chains bonded to silica), polar mobile phase (water + acetonitrile or methanol). Non-polar compounds elute slowly, polar fast. Reverse-phase is more commonly used (more stable, wider range of solvents, better for aqueous samples). The mobile phase composition can be varied during the run (gradient HPLC) to improve separation: start with weak solvent, gradually increase to strong solvent, eluting weakly-retained compounds first and strongly-retained later.'
      }
    },
    {
      id: 'p-hplc-advantages',
      type: 'paragraph',
      data: {
        text: 'Advantages of HPLC: (1) High resolution — can separate very similar compounds. (2) Quantitative — peak area/height proportional to concentration (with calibration). (3) Fast — analysis in minutes. (4) Sensitive — can detect μg or ng amounts (depending on detector). (5) Repeatable — precise pressure and flow control. Uses: drug purity testing, food contaminant analysis, environmental monitoring, pharmaceutical quality assurance. Disadvantages: expensive equipment, requires trained operators, solvent disposal cost, samples must be soluble in the mobile phase.'
      }
    },
    {
      id: 'h-gc',
      type: 'heading',
      data: { text: 'Gas Chromatography (GC)', level: 2 }
    },
    {
      id: 'p-gc-intro',
      type: 'paragraph',
      data: {
        text: 'Gas chromatography separates volatile compounds using a gas as the mobile phase. A sample is vaporised and injected into a heated column (50–350°C depending on compounds). The column is a coiled tube (10–60 m long, 0.1–0.5 mm diameter) packed with or coated with stationary phase (often a high-boiling oil or polymer). The carrier gas (usually helium, nitrogen, or hydrogen) flows through, carrying the vaporised sample. Compounds with lower boiling points elute faster; those with higher boiling points elute slower. A detector measures the amount of each component (flame ionisation detector, FID, is most common; also thermal conductivity, mass spectrometry).'
      }
    },
    {
      id: 'p-gc-retention-time',
      type: 'paragraph',
      data: {
        text: 'The retention time (tR, in minutes) is the time elapsed from injection to detection of a compound. For a given column and temperature, tR is characteristic of each compound. By comparing retention times of unknowns with standards, compounds can be identified. GC is quantitative: peak area (or height) is proportional to the amount of compound. GC-MS (gas chromatography–mass spectrometry) couples the chromatography with mass analysis, providing both retention time and molecular mass/structure information, making it very powerful for identification.'
      }
    },
    {
      id: 'p-gc-temperature',
      type: 'paragraph',
      data: {
        text: 'Temperature programming: The column temperature can be raised during the run (e.g., start at 50°C, raise 5°C/min until 250°C). This improves separation — early-eluting compounds (low bp) are well-separated at low temperature, while late-eluting compounds (high bp) resolve better at high temperature. GC is ideal for volatile organic compounds (hydrocarbons, ethers, aldehydes, esters, alcohols with lower molecular weight). Non-volatile or thermally unstable compounds are not suitable for GC (would not vaporise or would decompose at high temperature).'
      }
    },
    {
      id: 'table-chromatography-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Technique', 'Mobile Phase', 'Stationary Phase', 'Use'],
        rows: [
          ['TLC', 'Organic solvent (liquid)', 'Silica gel or alumina (on plate)', 'Quick separation, reaction monitoring, small scale'],
          ['Paper chromatography', 'Aqueous or organic solvent (liquid)', 'Cellulose filter paper', 'Polar compounds (amino acids, sugars), educational'],
          ['HPLC', 'Aqueous or organic solvent (liquid, pressurised)', 'Silica C₁₈ or other (reverse or normal phase)', 'High-resolution quantitative analysis, drug testing, food safety'],
          ['GC', 'Inert gas (He, N₂, H₂)', 'Oil or polymer coating on capillary tube', 'Volatile organic compounds, petroleum fractions, flavour/fragrance analysis']
        ],
        caption: 'Comparison of chromatography techniques: mobile and stationary phases, and typical applications.'
      }
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Applications in Drug & Food Analysis', level: 2 }
    },
    {
      id: 'list-applications',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Drug purity testing: HPLC to detect impurities and related substances in pharmaceutical products. Regulatory requirement (USP, European Pharmacopoeia).',
          'Doping control: HPLC-MS and GC-MS to detect banned substances in athletes\' urine/blood samples.',
          'Food analysis: HPLC to measure pesticide residues, additives, and contaminants (e.g., aflatoxins in grains). GC for volatile contaminants (e.g., hydrocarbons, solvents).',
          'Environmental monitoring: HPLC-UV for water pollutants; GC for air pollution and volatile organic compounds (VOCs).',
          'Forensics: GC-MS for drug/explosive residues, accelerant detection in arson cases.',
          'Clinical biochemistry: HPLC for blood glucose, cholesterol, hormone levels (e.g., cortisol) in hospital labs.'
        ]
      }
    },
    {
      id: 'callout-pharma-chromatography',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pharmaceutical Quality Assurance',
        text: 'All pharmaceutical products must undergo rigorous chromatographic analysis to ensure purity, potency, and safety. HPLC is the gold standard for quantifying active pharmaceutical ingredients (API) and detecting impurities (related substances, degradation products). GC-MS is used for volatile impurities (residual solvents). Regulatory agencies (FDA, EMA) require validated chromatographic methods before a drug can be approved for clinical use. Chromatography data are critical for every batch of manufactured drug.'
      }
    },
    {
      id: 'checklist-chromatography',
      type: 'checklist',
      data: {
        items: [
          { text: 'I understand the principle of chromatography: separation by differential affinity.', checked: false },
          { text: 'I can calculate Rf values for TLC and understand how they identify compounds.', checked: false },
          { text: 'I know the differences between TLC, paper, HPLC, and GC (phases, speed, applications).', checked: false },
          { text: 'I can explain why HPLC is used for drug analysis and GC for volatile compounds.', checked: false }
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
        text: 'Understand: TLC separates by differential adsorption; HPLC and GC separate by differential partition. Rf values, retention times, and peak areas provide qualitative and quantitative data.\n\nApply: A TLC plate shows Rf = 0.45 for compound X. What does this tell you about its polarity relative to the solvent?\n\nAnalyze: Why does changing the mobile phase polarity in TLC change the Rf values?\n\nEvaluate: Compare TLC with HPLC for analysing a drug mixture. When would HPLC be preferred?'
      },
      terms: []
    },
    {
      id: 'summary-chromatography',
      type: 'summary',
      data: {
        text: 'Chromatography separates molecules by differential affinity for stationary and mobile phases. TLC: fast, small-scale, Rf identification. Paper chromatography: polar compounds, educational. HPLC: high-resolution, quantitative, pressurised liquid system; reverse-phase (C₁₈ stationary, aqueous mobile) is standard. GC: volatile compounds, carrier gas, retention time identification; GC-MS couples mass spectrometry. Applications: pharmaceutical quality control (purity, API quantification), food safety (pesticides, additives), environmental monitoring, forensics, clinical diagnostics. Choice of technique depends on volatility, polarity, and required resolution.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-chromatography-intro',
        prompt: 'Explain the basic principle of chromatography: stationary phase, mobile phase, and separation.'
      },
      {
        id: 'cue-2',
        blockId: 'equation-rf',
        prompt: 'Define Rf (retention factor) and write the formula. What does Rf = 0.8 mean?'
      },
      {
        id: 'cue-3',
        blockId: 'p-hplc-intro',
        prompt: 'What is HPLC and how does high pressure improve separation compared to TLC?'
      },
      {
        id: 'cue-4',
        blockId: 'p-gc-intro',
        prompt: 'Explain how gas chromatography works: what is the mobile phase, stationary phase, and how are compounds detected?'
      },
      {
        id: 'cue-5',
        blockId: 'list-applications',
        prompt: 'Name three applications of chromatography in drug analysis or food safety.'
      }
    ],
    summaryText: 'Chromatography separates molecules by differential affinity for stationary (fixed) and mobile (moving) phases. TLC: capillary-driven, Rf = distance(spot)/distance(solvent); quick, small scale. Paper chromatography: cellulose, polar compounds. HPLC: pressurised liquid, reverse-phase (C₁₈/aqueous) standard; high resolution, quantitative, fast (minutes). GC: vaporised sample, carrier gas (He/N₂), volatile compounds; retention time for identification. GC-MS couples mass analysis. Applications: drug purity (HPLC-MS), food contaminants (HPLC, GC), environmental (VOCs), forensics, clinical diagnostics.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'HPLC in pharmaceutical manufacturing',
      detail: 'During manufacturing of a pharmaceutical drug, every batch is analysed by HPLC to quantify the active pharmaceutical ingredient (API) and detect impurities. A validated HPLC method is part of the drug\'s regulatory approval documentation. The method must be specific, accurate, and precise. For example, ibuprofen tablets are tested by HPLC to confirm the API content is within 90–110% of the label claim. This ensures patient safety and efficacy. Chromatography is thus a cornerstone of pharmaceutical quality assurance.',
      year: '2023',
      source: 'Pharmaceutical Manufacturing & Analysis',
      tags: ['chromatography', 'HPLC', 'drug analysis', 'quality control', 'pharmaceuticals']
    }
  ]
};
