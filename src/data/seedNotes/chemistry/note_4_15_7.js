export const note_chemistry_4_15_7 = {
  blocks: [
    {
      id: 'obj-chromatography',
      type: 'objective',
      data: {
        text: 'Understand chromatography (paper, TLC, column, HPLC, GC) \u2014 mobile/stationary phases, Rf values, retention times. Use high-resolution mass spectrometry (HRMS) to determine molecular formulae. Apply GC-MS and HPLC-MS for identification of components in complex mixtures.'
      }
    },
    {
      id: 'h-principles',
      type: 'heading',
      data: { text: 'What is Chromatography?', level: 2 }
    },
    {
      id: 'list-what-is-chrom',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'A technique used to separate a mixture into its individual components',
          'Also used to identify those components by comparing their travel distance (or time) against known standards',
          'Key IAL use: determine the purity of organic compounds \u2014 a pure substance gives ONE spot; impurities give extra spots',
          'Colourless spots detected using UV light or ninhydrin spray (turns spots pink)'
        ]
      }
    },
    {
      id: 'h-phases',
      type: 'heading',
      data: { text: 'Mobile Phase vs Stationary Phase', level: 3 }
    },
    {
      id: 'list-phases',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Stationary phase \u2014 the solid or liquid that does NOT move (e.g. paper, silica plate, packed column)',
          'Mobile phase \u2014 the liquid or gas that DOES move, carrying components through the stationary phase',
          'Component strongly attracted to stationary phase \u2192 moves slowly (short distance / low Rf / long retention time)',
          'Component strongly attracted to mobile phase \u2192 moves quickly with solvent (long distance / high Rf / short retention time)',
          'Separation occurs because different components have different affinities for the two phases \u2014 "like dissolves like"'
        ]
      }
    },
    {
      id: 'h-paper',
      type: 'heading',
      data: { text: 'Paper Chromatography', level: 2 }
    },
    {
      id: 'list-paper-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Glass container (beaker) with a lid \u2014 lid prevents solvent evaporating, keeps atmosphere saturated',
          'Chromatography paper \u2014 porous cellulose paper made specifically for this purpose',
          'Baseline drawn in pencil (NOT pen) \u2014 pen ink travels with solvent and interferes with the chromatogram',
          'Solvent placed so it is BELOW the baseline \u2014 if solvent covers the spot it dissolves it away',
          'Spot of mixture placed at the centre of the baseline using a capillary tube (small, concentrated spot)',
          'Capillary action draws solvent up the paper, carrying components at different rates',
          'When solvent reaches near the top: remove the paper and immediately mark the solvent front (evaporates quickly)'
        ]
      }
    },
    {
      id: 'svg-paper-chrom',
      type: 'svg',
      data: {
        caption: 'Paper chromatography set-up and result. Solvent travels up, carrying components at different rates to produce separated spots.',
        svg: '<svg viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect x="140" y="60" width="220" height="260" rx="8" fill="#1c3a64" stroke="#6366f1" stroke-width="2.5"/><rect x="130" y="48" width="240" height="16" rx="4" fill="#6366f1" opacity="0.8"/><text x="250" y="60" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="11">Lid (prevents evaporation)</text><rect x="148" y="265" width="204" height="47" rx="4" fill="#1e3a8a" opacity="0.7"/><text x="250" y="295" text-anchor="middle" fill="#1e40af" font-weight="bold">Solvent (mobile phase)</text><rect x="226" y="75" width="48" height="230" rx="3" fill="#1e293b" stroke="#9ca3af" stroke-width="1.5"/><line x1="218" y1="260" x2="282" y2="260" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/><text x="295" y="264" fill="#374151" font-size="11">Baseline (pencil)</text><circle cx="250" cy="260" r="5" fill="#f59e0b"/><text x="250" y="282" text-anchor="middle" fill="#92400e" font-size="10">Mixture spot</text><circle cx="250" cy="210" r="5" fill="#ef4444"/><text x="136" y="214" fill="#ef4444" font-size="10" text-anchor="end">A (low Rf)</text><circle cx="250" cy="170" r="5" fill="#8b5cf6"/><text x="136" y="174" fill="#8b5cf6" font-size="10" text-anchor="end">B</text><circle cx="250" cy="120" r="5" fill="#10b981"/><text x="136" y="124" fill="#10b981" font-size="10" text-anchor="end">C (high Rf)</text><line x1="220" y1="88" x2="280" y2="88" stroke="#1d4ed8" stroke-width="1.5"/><text x="295" y="93" fill="#1d4ed8" font-size="11">Solvent front</text><line x1="305" y1="88" x2="305" y2="260" stroke="#6b7280" stroke-width="1"/><text x="318" y="178" fill="#6b7280" font-size="10">solvent dist.</text><line x1="325" y1="210" x2="325" y2="260" stroke="#ef4444" stroke-width="1"/><text x="332" y="240" fill="#ef4444" font-size="10">d(spot)</text></svg>'
      }
    },
    {
      id: 'callout-stationary-paper',
      type: 'callout',
      data: {
        style: 'warning',
        title: '\u26a0\ufe0f Exam Trap: Stationary Phase in Paper Chromatography',
        text: 'The stationary phase is NOT the paper itself \u2014 it is the water trapped within the fibres of the paper. The paper simply holds this water in place. This is a very common exam trap.\nMobile phase = the solvent (water or organic solvent such as ethanol) that travels up the paper.'
      }
    },
    {      id: 'h-paper-mechanism',
      type: 'heading',
      data: { text: 'Mechanism & Two-Way Paper Chromatography', level: 3 }
    },
    {
      id: 'list-paper-mechanism',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Partition Chromatography:</strong> When using a non-polar solvent, separation occurs via partition. The stationary phase (water bound to cellulose) is polar, and the mobile phase is non-polar.',
          'Polar molecules distribute more into the stationary water layer, moving slowly (low Rf).',
          'Non-polar molecules distribute more into the moving non-polar solvent, travelling further up the paper (high Rf).',
          '<strong>Two-Way Chromatography:</strong> Used for complex mixtures (e.g., amino acids) where spots have very similar Rf values and overlap.',
          '<strong>Method:</strong> Run the chromatogram normally in one solvent. Let it dry completely, rotate the paper 90°, and run it again in a completely different solvent.',
          '<strong>Result:</strong> Spots that previously overlapped will now separate because they are unlikely to have identical Rf values in two different solvents.'
        ]
      }
    },
    {      id: 'h-tlc',
      type: 'heading',
      data: { text: 'Thin-Layer Chromatography (TLC)', level: 2 }
    },
    {
      id: 'list-tlc',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Very similar principle to paper chromatography \u2014 same procedure, same Rf calculation',
          'Instead of paper, a thin sheet of glass (or aluminium) coated with silica (SiO\u2082) or alumina (Al\u2082O\u2083)',
          'Stationary phase = the silica or alumina coating (polar solid) \u2014 NOT the glass backing',
          'Mobile phase = solvent that travels up the plate by capillary action',
          'Advantage over paper: silica/alumina gives sharper spots and is more versatile',
          'Colourless compounds visualised under UV light or with ninhydrin spray'
        ]
      }
    },
    {
      id: 'h-tlc-theory',
      type: 'heading',
      data: { text: 'How TLC Separates: Adsorption', level: 3 }
    },
    {
      id: 'p-tlc-theory',
      type: 'paragraph',
      data: {
        text: 'Unlike paper chromatography (which relies mainly on partition), TLC separates components via <strong>adsorption</strong>. The stationary phase (silica gel, SiO₂) has surface silicon atoms bonded to <strong>−OH groups</strong>. This makes the surface extremely polar. As the mobile phase (solvent) travels up the plate, compounds constantly swap between being dissolved in the liquid and being adsorbed (temporarily stuck) onto the solid silica surface.'
      }
    },
    {
      id: 'list-tlc-adsorption',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Polar components:</strong> Form strong hydrogen bonds or dipole-dipole attractions with the −OH groups on the silica. They are strongly adsorbed, spend less time in the mobile phase, travel slower, and have <strong>lower R_f values</strong>.',
          '<strong>Non-polar components:</strong> Form only weak London dispersion forces with the silica. They are weakly adsorbed, stay dissolved in the mobile phase longer, travel faster, and have <strong>higher R_f values</strong>.'
        ]
      }
    },
    {
      id: 'callout-tlc-uv',
      type: 'callout',
      data: {
        style: 'tip',
        title: '💬 Isolating Colourless Spots: Fluorescence & Ninhydrin',
        text: 'Often, organic components (like amino acids) are colourless. Two main methods are used to find them:\n<br/><strong>1. UV Light:</strong> The silica plate contains a fluorescent substance that glows green/blue under UV. Organic spots mask this fluorescence, appearing as dark patches where you can circle them with a pencil.\n<br/><strong>2. Ninhydrin:</strong> Amino acid plates can be sprayed with ninhydrin solution. They react to form distinct purple/brown spots.'
      }
    },
    {
      id: 'h-rf',
      type: 'heading',
      data: { text: 'Rf Value (Retention / Retardation Factor)', level: 3 }
    },
    {
      id: 'eq-rf',
      type: 'equation',
      data: {
        html: 'R<sub>f</sub> = <span class="nb-frac"><span class="nb-num">distance travelled by spot (baseline \u2192 centre of spot)</span><span class="nb-den">distance travelled by solvent front (baseline \u2192 solvent front)</span></span>',
        caption: 'Rf is dimensionless (no units) and always between 0 and 1.'
      }
    },
    {
      id: 'list-rf-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Measured from the baseline to the centre of the spot',
          'No units \u2014 it is simply a ratio of two distances',
          'ALWAYS less than 1 \u2014 solvent front always travels further than any component; Rf > 1 = error',
          'Each compound has a characteristic Rf for a given solvent system \u2014 compare unknown to standards run under identical conditions',
          'Rf values change if the solvent changes \u2014 always compare to a reference in the same solvent system'
        ]
      }
    },
    {
      id: 'callout-rf-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: '\u270f\ufe0f Worked Example \u2014 Rf Calculation',
        text: 'A spot travels 4.2 cm from the baseline. The solvent front travels 7.0 cm.\n\nRf = 4.2 \u00f7 7.0 = 0.60\n\nNo units. To identify the compound, compare Rf = 0.60 against reference values in the same solvent system, or run a standard alongside on the same plate.'
      }
    },
    {
      id: 'h-column',
      type: 'heading',
      data: { text: 'Column Chromatography', level: 2 }
    },
    {
      id: 'list-column',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Same principle as TLC/paper but handles much larger samples (preparative scale)',
          'Uses a tall vertical glass column like a burette, with a tap at the bottom',
          'Stationary phase: silica or alumina packed tightly in the column, soaked in solvent',
          'Pour the mixture onto the TOP of the packed column, then add more solvent (mobile phase)',
          'Open tap \u2192 solvent flows down through silica by gravity, separating components',
          'Component more attracted to mobile phase travels faster \u2192 elutes (exits) first',
          'Component more attracted to stationary phase travels slower \u2192 elutes later',
          'Collect separate fractions into beakers/flasks as each component exits at the bottom'
        ]
      }
    },
    {
      id: 'svg-column',
      type: 'svg',
      data: {
        caption: 'Column chromatography: mixture separates as it passes through silica under gravity. More mobile-phase-attracted components elute first.',
        svg: '<svg viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect x="155" y="30" width="110" height="290" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="2.5"/><rect x="162" y="68" width="96" height="230" rx="3" fill="#2d2f72" opacity="0.85"/><text x="210" y="92" text-anchor="middle" fill="#3730a3" font-weight="bold" font-size="11">Silica</text><text x="210" y="106" text-anchor="middle" fill="#3730a3" font-size="10">(stationary phase)</text><ellipse cx="210" cy="66" rx="48" ry="8" fill="#0a2e1a" opacity="0.9"/><text x="210" y="50" text-anchor="middle" fill="#166534" font-weight="bold" font-size="11">Mixture + solvent added</text><rect x="164" y="225" width="92" height="22" rx="2" fill="#44370a" opacity="0.9"/><text x="264" y="239" fill="#713f12" font-size="10">More attracted to mobile (faster)</text><rect x="164" y="160" width="92" height="22" rx="2" fill="#1e3a8a" opacity="0.9"/><text x="264" y="174" fill="#1e3a8a" font-size="10">More attracted to stationary (slower)</text><rect x="198" y="316" width="24" height="20" rx="4" fill="#6366f1"/><text x="210" y="330" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold">Tap</text><line x1="210" y1="336" x2="210" y2="356" stroke="#f59e0b" stroke-width="3"/><ellipse cx="210" cy="368" rx="28" ry="10" fill="#44370a" stroke="#d97706" stroke-width="1.5"/><text x="210" y="371" text-anchor="middle" fill="#92400e" font-size="10">Collect fraction 1</text></svg>'
      }
    },
    {
      id: 'callout-column-elution',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Elution & Solvent Choice',
        text: 'Washing a compound through the column using a solvent is known as **elution** (the solvent is the **eluent**). For mixtures containing polar and non-polar compounds, you can speed up the elution of strongly adsorbed compounds by **changing the solvent** partway through:\n\n1. Use a non-polar solvent first to quickly elute non-polar compounds (which do not adsorb strongly to the polar silica).\n2. Switch to a **more polar solvent** to elute polar compounds faster. The polar solvent **competes for space** on the silica, preventing the polar molecules from sticking, and exerts a **greater attraction** to physically pull them into solution.'
      }
    },
    {
      id: 'h-hplc',
      type: 'heading',
      data: { text: 'High-Performance Liquid Chromatography (HPLC)', level: 2 }
    },
    {
      id: 'list-hplc-setup',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'System flow: solvent reservoir \u2192 pump \u2192 sample injector \u2192 HPLC column \u2192 UV detector \u2192 computer display',
          'Key difference from column chromatography: column uses gravity; HPLC uses HIGH PRESSURE to force mobile phase through',
          'High pressure + very small silica particle size \u2192 much better separation and faster analysis (hence "high performance")',
          'Stationary phase: silica (polar solid) packed in column; particle size much smaller than column chromatography',
          'Mobile phase: typically hexane (non-polar) for normal-phase, or water/acetonitrile for reverse-phase \u2014 always a liquid',
          'Detection: UV detector monitors effluent \u2192 produces chromatogram (signal vs. time)'
        ]
      }
    },
    {
      id: 'list-hplc-retention',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Retention time = time from injection to detection of a separated component at the UV detector (peak maximum)',
          'Each compound has a characteristic retention time under fixed conditions',
          'Retention time depends on: (1) nature/polarity of solvent, (2) pressure/flow rate, (3) nature/particle size of stationary phase, (4) temperature of column',
          'Shorter retention time = more attracted to mobile phase (elutes faster); longer = more attracted to stationary phase'
        ]
      }
    },
    {
      id: 'table-hplc-phases',
      type: 'comparisonTable',
      data: {
        caption: 'Normal Phase vs Reversed Phase HPLC',
        headers: ['Feature', 'Normal Phase HPLC', 'Reversed Phase HPLC (Most Common)'],
        rows: [
          ['Stationary Phase', 'Polar (tiny silica particles)', 'Non-polar (silica modified with long C8 or C18 hydrocarbon chains)'],
          ['Mobile Phase (Solvent)', 'Non-polar (e.g., hexane)', 'Polar (e.g., methanol/water mixture)'],
          ['Fastest Eluting (Short Retention Time)', 'Non-polar compounds (spend more time in the non-polar solvent)', 'Polar compounds (spend more time in the polar solvent)'],
          ['Slowest Eluting (Long Retention Time)', 'Polar compounds (adsorb strongly to polar silica)', 'Non-polar compounds (attracted to C8/C18 chains via van der Waals forces, partition out of polar solvent)']
        ]
      }
    },
    {
      id: 'callout-hplc-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why HPLC > Column Chromatography',
        text: '① High pressure replaces gravity \u2192 faster flow\n② Much smaller stationary-phase particles \u2192 greater surface area \u2192 better separation\n③ UV detector gives quantitative data (amount of UV light absorbed depends on concentration passing through)\n④ Fully automated \u2192 reproducible and precise results\n\n*Note on UV Solvents: The mobile phase (e.g. methanol/water) also absorbs UV, but only below certain wavelengths (< 205 nm). By setting the UV detector above this (e.g. 254 nm), the solvent is "invisible" to the detector, allowing you to measure just the target compounds.*'
      }
    },
    {
      id: 'h-gc',
      type: 'heading',
      data: { text: 'Gas Chromatography (GC)', level: 2 }
    },
    {
      id: 'list-gc-setup',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'System flow: carrier gas supply \u2192 heated injection port \u2192 coiled column in oven \u2192 detector \u2192 computer',
          'Mobile phase: inert carrier gas (helium or nitrogen) \u2014 unreactive so it does not interact chemically with the sample',
          'Stationary phase (Gas-Liquid Chromatography): a high boiling point liquid adsorbed onto a porous solid support (e.g. diatomaceous earth) packed into a coiled metal tube',
          'Column is 1-4 metres long and coiled \u2014 this gives a longer path and fits inside a thermostatically controlled oven',
          'Injection: very small liquid samples are injected via a rubber septum and immediately vaporised by the hot injection port'
        ]
      }
    },
    {
      id: 'list-gc-retention',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Separation depends on how molecules partition themselves between the liquid stationary phase and the carrier gas',
          'High boiling point \u2192 mostly condensed in the liquid phase \u2192 travels very slowly \u2192 long retention time',
          'High solubility in the liquid phase \u2192 spends more time absorbed in the stationary phase \u2192 long retention time',
          'Lower boiling point / lower solubility \u2192 spends more time in the carrier gas \u2192 shorter retention time',
          'Results: a chromatogram plotting signal (peak) vs. retention time'
        ]
      }
    },
    {
      id: 'callout-gc-theory',
      type: 'callout',
      data: {
        style: 'key',
        title: 'GC Temperature Profile & Detection',
        text: '**Column Temperature**: A low temperature gives great separation but takes forever. A high temperature is extremely fast but gives poorly separated peaks. **Solution**: Start the oven relatively cool and *gradually increase the temperature* under computer control to sequentially elute compounds of increasing "stickiness".\n\n**Detector (e.g. Flame Ionisation, FID)**: Organic compounds are burned in a hot hydrogen flame, producing ions and electrons that generate an electrical signal. The detector is kept in *an even hotter oven* than the column to ensure no compounds condense in the detector.'
      }
    },
    {
      id: 'svg-gc-flow',
      type: 'svg',
      data: {
        caption: 'GC system: carrier gas transports vaporised sample through the coiled column. Components separate by attraction to the stationary phase, then are detected and recorded.',
        svg: '<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect x="10" y="60" width="60" height="80" rx="10" fill="#0c4a6e" stroke="#0369a1" stroke-width="2"/><text x="40" y="92" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="11">Carrier</text><text x="40" y="107" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="11">Gas</text><text x="40" y="121" text-anchor="middle" fill="#0369a1" font-size="10">(He / N\u2082)</text><line x1="72" y1="100" x2="95" y2="100" stroke="#6b7280" stroke-width="2" marker-end="url(#ga)"/><rect x="97" y="70" width="65" height="60" rx="6" fill="#78350f" stroke="#d97706" stroke-width="2"/><text x="130" y="95" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">Injector</text><text x="130" y="110" text-anchor="middle" fill="#92400e" font-size="10">Port</text><text x="130" y="123" text-anchor="middle" fill="#92400e" font-size="10">(vaporise)</text><line x1="163" y1="100" x2="186" y2="100" stroke="#6b7280" stroke-width="2" marker-end="url(#ga)"/><rect x="188" y="30" width="180" height="140" rx="8" fill="#44370a" stroke="#ca8a04" stroke-width="2" stroke-dasharray="6,3"/><text x="278" y="50" text-anchor="middle" fill="#92400e" font-size="11">Oven (heated)</text><path d="M210,80 Q250,60 290,80 Q330,100 290,120 Q250,140 210,120 Q190,110 210,95" fill="none" stroke="#6d28d9" stroke-width="6" stroke-linecap="round"/><text x="278" y="116" text-anchor="middle" fill="#4c1d95" font-size="10">Coiled column</text><text x="278" y="130" text-anchor="middle" fill="#4c1d95" font-size="10">(stationary phase)</text><line x1="369" y1="100" x2="392" y2="100" stroke="#6b7280" stroke-width="2" marker-end="url(#ga)"/><rect x="394" y="70" width="70" height="60" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/><text x="429" y="96" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="11">Detector</text><text x="429" y="111" text-anchor="middle" fill="#14532d" font-size="10">(FID/UV)</text><line x1="465" y1="100" x2="488" y2="100" stroke="#6b7280" stroke-width="2" marker-end="url(#ga)"/><rect x="490" y="65" width="75" height="70" rx="6" fill="#2d2f72" stroke="#6366f1" stroke-width="2"/><text x="527" y="95" text-anchor="middle" fill="#3730a3" font-weight="bold" font-size="11">Computer</text><text x="527" y="112" text-anchor="middle" fill="#3730a3" font-size="10">Chromatogram</text><defs><marker id="ga" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#6b7280"/></marker></defs></svg>'
      }
    },
    {
      id: 'h-comparison',
      type: 'heading',
      data: { text: 'Chromatography \u2014 Full Comparison', level: 2 }
    },
    {
      id: 'table-chrom-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Technique', 'Stationary Phase', 'Mobile Phase', 'Driven by', 'ID measure'],
        rows: [
          ['Paper', 'Water trapped in cellulose fibres', 'Aqueous or organic solvent (liquid)', 'Capillary action (upward)', 'Rf value'],
          ['TLC', 'Silica or alumina on glass/Al plate', 'Organic solvent (liquid)', 'Capillary action (upward)', 'Rf value'],
          ['Column', 'Silica or alumina packed in glass column', 'Organic solvent (liquid)', 'Gravity (downward)', 'Order of elution'],
          ['HPLC', 'Fine silica (polar) or C\u2081\u2088 in pressurised column', 'Hexane (NP) or water/MeCN (RP)', 'High-pressure pump', 'Retention time'],
          ['GC', 'Liquid or solid coated inside coiled tube', 'Inert carrier gas (He or N\u2082)', 'Carrier gas + heat', 'Retention time']
        ],
        caption: 'NP = normal-phase; RP = reverse-phase; MeCN = acetonitrile.'
      }
    },
    {
      id: 'h-hrms',
      type: 'heading',
      data: { text: 'High-Resolution Mass Spectrometry (HRMS)', level: 2 }
    },
    {
      id: 'list-hrms-principle',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Standard MS gives Mr to nearest whole number \u2014 different compounds can share the same nominal Mr',
          'Example: C\u2084H\u2081\u2080, C\u2083H\u2086O, and C\u2082H\u2086N\u2082 all give Mr \u2248 58 by standard masses \u2014 indistinguishable',
          'HRMS gives Mr to 4+ decimal places \u2014 these can now be distinguished from each other',
          'Use accurate atomic masses: H = 1.0078, C = 12.0000, N = 14.0031, O = 15.9949',
          'C = exactly 12.0000 because carbon-12 is the reference standard against which all atomic masses are measured',
          'HRMS determines molecular formula only \u2014 does NOT determine structure (need fragmentation or NMR for structure)'
        ]
      }
    },
    {
      id: 'table-accurate-masses',
      type: 'comparisonTable',
      data: {
        headers: ['Element', 'Standard Mr (IAL)', 'Accurate mass (4 d.p.)'],
        rows: [
          ['Hydrogen (H)', '1', '1.0078'],
          ['Carbon (C)', '12', '12.0000'],
          ['Nitrogen (N)', '14', '14.0031'],
          ['Oxygen (O)', '16', '15.9949']
        ],
        caption: 'Accurate atomic masses for HRMS. C = 12.0000 exactly (carbon-12 is the reference standard).'
      }
    },
    {
      id: 'callout-hrms-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: '\u270f\ufe0f Worked Example 1 \u2014 Identify formula from Mr = 84.0573',
        text: 'Two candidate formulae: C\u2086H\u2081\u2082 or C\u2085H\u2088O\n\nC\u2086H\u2081\u2082:\n(6 \u00d7 12.0000) + (12 \u00d7 1.0078) = 72.0000 + 12.0936 = 84.0936 \u2717\n\nC\u2085H\u2088O:\n(5 \u00d7 12.0000) + (8 \u00d7 1.0078) + (1 \u00d7 15.9949) = 60.0000 + 8.0624 + 15.9949 = 84.0573 \u2713\n\nThe compound has formula C\u2085H\u2088O.'
      }
    },
    {
      id: 'callout-hrms-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: '\u270f\ufe0f Worked Example 2 \u2014 HRMS spectrum peaks with Mr \u2248 44',
        text: 'Three candidates:\n\nP = C\u2083H\u2088 (propane): (3 \u00d7 12.0000) + (8 \u00d7 1.0078) = 36.0000 + 8.0624 = 44.0624\nQ = C\u2082H\u2084O (ethanal): (2 \u00d7 12.0000) + (4 \u00d7 1.0078) + 15.9949 = 24.0000 + 4.0312 + 15.9949 = 44.0261\nR = CO\u2082: 12.0000 + (2 \u00d7 15.9949) = 43.9898\n\nSpectrum shows peaks at 44.0624 and 44.0261 \u2192 P (propane) and Q (ethanal) are present.\nR (43.9898) does NOT appear on this spectrum.'
      }
    },
    {
      id: 'h-gcms',
      type: 'heading',
      data: { text: 'GC-MS and HPLC-MS (Coupled Techniques)', level: 2 }
    },
    {
      id: 'list-gcms-why',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Problem: GC/HPLC alone identifies by retention time \u2014 but retention times can vary with conditions \u2192 not always definitive',
          'Solution: couple chromatography with MS \u2192 both separation AND structural identification in one system',
          'GC-MS = gas chromatography + mass spectrometer',
          'HPLC-MS = high-performance liquid chromatography + mass spectrometer'
        ]
      }
    },
    {
      id: 'svg-gcms-flow',
      type: 'svg',
      data: {
        caption: 'GC-MS workflow: mixture is separated by GC into components (A\u2013E by retention time), then each enters the MS one at a time to give its fragmentation pattern for database matching and identification.',
        svg: '<svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect x="10" y="80" width="90" height="80" rx="8" fill="#78350f" stroke="#d97706" stroke-width="2"/><text x="55" y="107" text-anchor="middle" fill="#92400e" font-weight="bold">Inject</text><text x="55" y="122" text-anchor="middle" fill="#92400e">mixture</text><text x="55" y="138" text-anchor="middle" fill="#92400e" font-size="10">(A,B,C,D,E)</text><line x1="101" y1="120" x2="123" y2="120" stroke="#6b7280" stroke-width="2" marker-end="url(#gca)"/><rect x="125" y="50" width="130" height="150" rx="8" fill="#2d1b69" stroke="#7c3aed" stroke-width="2"/><text x="190" y="78" text-anchor="middle" fill="#4c1d95" font-weight="bold">GC Column</text><text x="190" y="94" text-anchor="middle" fill="#4c1d95" font-size="10">separate by</text><text x="190" y="108" text-anchor="middle" fill="#4c1d95" font-size="10">retention time</text><polyline points="138,163 148,163 152,143 158,163 165,163 172,133 178,163 186,163 194,118 200,163 210,163 218,106 224,163 240,163" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="145" y="182" fill="#7c3aed" font-size="9">A  B    C     D      E</text><line x1="256" y1="120" x2="278" y2="120" stroke="#6b7280" stroke-width="2" marker-end="url(#gca)"/><rect x="280" y="78" width="90" height="84" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/><text x="325" y="101" text-anchor="middle" fill="#14532d" font-weight="bold" font-size="11">Each one</text><text x="325" y="116" text-anchor="middle" fill="#14532d">enters MS</text><text x="325" y="131" text-anchor="middle" fill="#14532d">separately</text><text x="325" y="148" text-anchor="middle" fill="#166534" font-size="10">A\u2192B\u2192C\u2192D\u2192E</text><line x1="371" y1="120" x2="393" y2="120" stroke="#6b7280" stroke-width="2" marker-end="url(#gca)"/><rect x="395" y="58" width="110" height="124" rx="8" fill="#3d1212" stroke="#e11d48" stroke-width="2"/><text x="450" y="82" text-anchor="middle" fill="#9f1239" font-weight="bold">Mass</text><text x="450" y="97" text-anchor="middle" fill="#9f1239" font-weight="bold">Spectrometer</text><text x="450" y="116" text-anchor="middle" fill="#9f1239" font-size="10">m/z spectrum</text><text x="450" y="131" text-anchor="middle" fill="#9f1239" font-size="10">fragmentation</text><text x="450" y="146" text-anchor="middle" fill="#9f1239" font-size="10">accurate Mr</text><text x="450" y="170" text-anchor="middle" fill="#9f1239" font-size="10">\u2192 identify compound</text><line x1="506" y1="120" x2="528" y2="120" stroke="#6b7280" stroke-width="2" marker-end="url(#gca)"/><rect x="530" y="72" width="78" height="96" rx="8" fill="#2d2f72" stroke="#6366f1" stroke-width="2"/><text x="569" y="100" text-anchor="middle" fill="#3730a3" font-weight="bold" font-size="11">Database</text><text x="569" y="116" text-anchor="middle" fill="#3730a3">compare</text><text x="569" y="132" text-anchor="middle" fill="#3730a3">\u2192 confirm</text><text x="569" y="148" text-anchor="middle" fill="#3730a3">identity</text><defs><marker id="gca" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#6b7280"/></marker></defs></svg>'
      }
    },
    {
      id: 'list-gcms-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '\u2460 Inject mixture into GC; components separate by retention time \u2192 chromatogram produced',
          '\u2461 As each component exits the column it immediately enters the MS individually',
          '\u2462 MS ionises and fragments the component \u2192 m/z spectrum with fragmentation pattern + accurate Mr',
          '\u2463 Match fragmentation pattern against a database of known spectra \u2192 confirmed identification',
          'Shortest retention time = most weakly attracted to stationary phase (elutes first)',
          'Longest retention time = most strongly attracted to stationary phase (elutes last)',
          'Combined power: GC separates; MS identifies \u2014 works on trace amounts in complex mixtures'
        ]
      }
    },
    {
      id: 'callout-gcms-apps',
      type: 'callout',
      data: {
        style: 'key',
        title: '\ud83d\udca1 Applications of GC-MS and HPLC-MS',
        text: '\u2022 Anti-doping in sport (Olympics, professional football): GC-MS detects anabolic steroids (e.g. nandrolone) in urine/blood \u2014 gives unfair advantage in strength/muscle growth; illegal unless medically prescribed. Legitimate uses: treating anaemia, osteoporosis, cancer\n\u2022 Forensics: identify drug residues, explosive traces, arson accelerants at crime scenes\n\u2022 Food safety: detect pesticide residues, contaminants, adulterants\n\u2022 Pharmaceuticals: HPLC-MS for drug purity and metabolite profiling\n\u2022 Environmental monitoring: trace pollutants in air, water, soil'
      }
    },
    {
      id: 'h-exam',
      type: 'heading',
      data: { text: 'Past-Paper Style Questions \u2014 Worked Answers', level: 2 }
    },
    {
      id: 'callout-exam-q1',
      type: 'callout',
      data: {
        style: 'tip',
        title: '\ud83d\udcac MCQ: Which statement about chromatography is true?',
        text: 'A) Can only be carried out at room temperature \u2717 \u2014 GC uses a heated oven (50\u2013350\u00b0C)\nB) Can be used for samples that decompose when vaporised \u2717 \u2014 GC vaporises samples so decomposition is a problem, not a feature\nC) Can be used for non-volatile substances \u2717 \u2014 GC requires volatile substances\nD) Can be used to measure the amount of each component in a mixture \u2713 \u2014 peak area/height \u221d amount\n\nAnswer: D'
      }
    },
    {
      id: 'callout-exam-q2',
      type: 'callout',
      data: {
        style: 'tip',
        title: '\ud83d\udcac MCQ: Polar stationary phase \u2014 which compound has the longest retention time?',
        text: 'Key rule: LIKE ATTRACTS LIKE \u2014 polar stationary phase strongly retains polar compounds.\nLook for the compound with an \u2013OH group \u2014 most polar due to hydrogen bonding ability.\n\nAnswer: pentan-1-ol (has \u2013OH; most polar of the options)'
      }
    },
    {
      id: 'callout-exam-q3',
      type: 'callout',
      data: {
        style: 'tip',
        title: '\ud83d\udcac MCQ: Most suitable carrier gas for GC?',
        text: 'Carrier gas MUST be inert \u2014 must not react with sample or stationary phase.\nWater \u2717 \u2014 reacts with many compounds\nOxygen \u2717 \u2014 oxidising, reacts with sample\nAmmonia \u2717 \u2014 basic, reacts with acids\nCarbon dioxide \u2713 \u2014 chemically inert under GC conditions\n\nAnswer: CO\u2082 (in practice He or N\u2082 are most common; if not available as options, choose the most inert gas given)'
      }
    },
    {
      id: 'callout-exam-q4',
      type: 'callout',
      data: {
        style: 'worked',
        title: '\u270f\ufe0f 5-Mark: Explain distribution between phases; compare GC vs HPLC phases',
        text: 'Part 1 \u2014 Why distribution/separation occurs (1 mark):\n\u2022 Components separated based on their relative attraction (affinity) to the mobile and stationary phases\n\u2022 Substances more attracted to stationary phase are retained longer; those more attracted to mobile phase travel faster\n\nPart 2 \u2014 Phases in GC vs HPLC (4 marks):\n\nGC:\n\u2022 Mobile phase: inert gas (e.g. helium or nitrogen) [1]\n\u2022 Stationary phase: liquid or solid coated on inside of coiled tube [1]\n\nHPLC:\n\u2022 Mobile phase: liquid solvent (e.g. hexane, or water/acetonitrile) [1]\n\u2022 Stationary phase: solid (e.g. silica) packed in pressurised column [1]'
      }
    },
    {
      id: 'checklist-chrom',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can define stationary phase and mobile phase for paper, TLC, column, HPLC and GC', checked: false },
          { text: 'I know stationary phase in paper chromatography is water trapped in cellulose fibres (NOT the paper itself)', checked: false },
          { text: 'I can calculate Rf and know it must be < 1, has no units, and is solvent-dependent', checked: false },
          { text: 'I know baseline must be drawn in pencil and solvent must stay below the baseline', checked: false },
          { text: 'I can explain how column chromatography works and why some components elute faster', checked: false },
          { text: 'I can describe HPLC system flow and explain why high pressure gives better separation than column', checked: false },
          { text: 'I can describe GC system flow and explain why the column is coiled and long', checked: false },
          { text: 'I can use accurate atomic masses (H=1.0078, C=12.0000, N=14.0031, O=15.9949) in HRMS calculations', checked: false },
          { text: 'I can describe GC-MS step by step and give three real-world applications', checked: false },
          { text: 'I can apply "like attracts like" to predict longest retention time on a polar column', checked: false }
        ]
      }
    },
    {
      id: 'summary-chrom',
      type: 'summary',
      data: {
        text: 'Chromatography separates by differential attraction to stationary vs mobile phases. Paper: stationary = water in cellulose fibres; separates via partition (if non-polar solvent); two-way chromatography rotates paper 90° for overlapping spots. Rf = dist(spot)/dist(front) (no units, <1). TLC: silica/alumina plate; adsorption. Column: silica in tube; gravity-driven; collect fractions. HPLC: high pressure forces liquid through fine silica; UV detector. GC: inert carrier gas (He/N₂); coiled column in heated oven. GC-MS: GC separates → components enter MS individually → fragmentation pattern database match = confirmed ID.'
      }
    }
  ],

  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-stationary-paper',
        prompt: 'What is the stationary phase in paper chromatography? Why is this an exam trap, and what is the mobile phase?'
      },
      {
        id: 'cue-paper-twoway',
        blockId: 'list-paper-mechanism',
        prompt: 'Describe how two-way paper chromatography works and why it is useful for complex mixtures like amino acids.'
      },
      { id: 'cue-tlc',
        blockId: 'list-tlc-adsorption',
        prompt: 'Explain the mechanism by which Thin Layer Chromatography (TLC) separates polar from non-polar molecules.'
      },
      {
        id: 'cue-column-elution',
        blockId: 'callout-column-elution',
        prompt: 'Explain what elution is and why you might change to a more polar solvent partway through column chromatography.'
      },
      {
        id: 'cue-2',
        blockId: 'list-rf-rules',
        prompt: 'State THREE rules about Rf values: units, range, and conditions for valid comparison.'
      },
      {
        id: 'cue-3',
        blockId: 'list-hplc-setup',
        prompt: 'Describe the sequential flow of an HPLC system and explain why high pressure gives better separation than column chromatography.'
      },
      {
        id: 'cue-hplc-phases',
        blockId: 'table-hplc-phases',
        prompt: 'Compare Normal Phase and Reversed Phase HPLC in terms of the polarity of the stationary phase, the solvent, and which types of compounds elute fastest.'
      },
      {
        id: 'cue-4',
        blockId: 'list-gc-retention',
        prompt: 'In Gas-Liquid Chromatography, what two properties (apart from temperature) cause a compound to have a LONG retention time?'
      },
      {
        id: 'cue-gc-temp',
        blockId: 'callout-gc-theory',
        prompt: 'Why is the GC column temperature usually programmed to start cool and gradually increase? Why must the detector oven be even hotter?'
      },
      {
        id: 'cue-5',
        blockId: 'callout-hrms-worked1',
        prompt: 'A compound has accurate Mr = 84.0573. Show how to use HRMS accurate atomic masses to determine whether the formula is C\u2086H\u2081\u2082 or C\u2085H\u2088O.'
      },
      {
        id: 'cue-6',
        blockId: 'list-gcms-steps',
        prompt: 'Describe GC-MS step by step. Why is coupling GC with MS more powerful than either technique alone? Give two applications.'
      }
    ],
    summaryText: 'Chromatography: separated by differential affinity for stationary vs mobile phase. Paper: stationary = water in fibres. TLC: silica/alumina on plate; separates via adsorption (polar molecules stick strongly via H-bonds, yielding lower Rf). Colourless spots found via UV/ninhydrin. Column: gravity, silica, collect fractions. HPLC: high pressure, fine silica, UV detector, retention time. GC: inert carrier gas, coiled column in oven, vaporised samples; weaker attraction = shorter retention time. HRMS: H=1.0078, C=12.0000, N=14.0031, O=15.9949; accurate Mr to 4 d.p. GC-MS: GC separates, each enters MS individually, database matching. Anti-doping, forensics, pharmaceuticals.',
    ready: false
  },

  evidence: [
    {
      id: 'ev-1',
      title: 'GC-MS in anti-doping: nandrolone detection',
      detail: 'Nandrolone (an anabolic steroid) is detectable in urine at concentrations below 2 ng/mL using GC-MS. Urine is concentrated by HPLC then GC-MS confirms identity via retention time and fragmentation pattern matched against a reference database. Legitimate medical uses (anaemia, osteoporosis, cancer treatment) must be declared to avoid false positives.',
      year: '2023',
      source: 'WADA Anti-Doping Science / Edexcel IAL Chemistry Unit 4',
      tags: ['GC-MS', 'anti-doping', 'nandrolone', 'forensics', 'chromatography']
    },
    {
      id: 'ev-2',
      title: 'HRMS in pharmaceutical drug development',
      detail: 'High-resolution mass spectrometry (Orbitrap or TOF) determines molecular formulae to <2 ppm mass accuracy. Pharmaceutical companies use HRMS to confirm drug candidate identity and distinguish structural isomers with the same nominal mass. Coupled with HPLC (HPLC-MS), it provides drug purity, metabolite profiling, and degradation product analysis in a single run.',
      year: '2023',
      source: 'Pharmaceutical Analysis & Mass Spectrometry',
      tags: ['HRMS', 'HPLC-MS', 'molecular formula', 'drug analysis', 'mass spectrometry']
    }
  ]
};
