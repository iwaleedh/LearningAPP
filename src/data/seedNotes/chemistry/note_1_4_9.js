export const note_chemistry_1_4_9 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe fractional distillation of crude oil; explain how fractions are used as fuels and relate the process to intermolecular forces.' } },
    { id: 'h-crude', type: 'heading', data: { text: 'Crude Oil — Composition', level: 2 } },
    { id: 'h-fractional', type: 'heading', data: { text: 'Fractional Distillation', level: 2 } },
    { id: 'callout-key-fd', type: 'callout', data: { style: 'key', title: 'Fractional Distillation — Principle', text: 'Crude oil is separated by fractional distillation in a fractionating column. The mixture is heated to vaporise it, then vapours rise up the column and condense at different heights according to their boiling points. Shorter-chain alkanes have lower boiling points (weaker London forces) and condense near the top; longer-chain alkanes condense near the bottom.' } },
    { id: 'svg-column', type: 'svg', data: { svg: `<svg viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <text x="230" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#374151">Fractionating Column</text>
  <rect x="120" y="30" width="80" height="320" rx="6" fill="#2d2f72" stroke="#4f46e5" stroke-width="2"/>
  <line x1="100" y1="50" x2="100" y2="340" stroke="#ef4444" stroke-width="2"/>
  <polygon points="100,40 96,55 104,55" fill="#ef4444"/>
  <text x="95" y="200" text-anchor="middle" font-size="11" fill="#ef4444" transform="rotate(-90,95,200)">Temperature increases ↓</text>
  <rect x="210" y="32" width="10" height="30" fill="#1250a0" rx="2"/>
  <text x="225" y="42" font-size="11" fill="#1e40af">Refinery gas (C₁–C₄)</text>
  <text x="225" y="54" font-size="10" fill="#6b7280">b.p. below 25 °C — bottled gas, heating</text>
  <rect x="210" y="82" width="10" height="35" fill="#78350f" rx="2"/>
  <text x="225" y="94" font-size="11" fill="#92400e">Petrol/gasoline (C₅–C₁₀)</text>
  <text x="225" y="106" font-size="10" fill="#6b7280">25–75 °C — motor fuel</text>
  <rect x="210" y="132" width="10" height="30" fill="#2d1b69" rx="2"/>
  <text x="225" y="144" font-size="11" fill="#5b21b6">Naphtha (C₆–C₁₀)</text>
  <text x="225" y="156" font-size="10" fill="#6b7280">75–190 °C — chemical feedstock</text>
  <rect x="210" y="177" width="10" height="35" fill="#065f46" rx="2"/>
  <text x="225" y="189" font-size="11" fill="#065f46">Kerosene (C₁₀–C₁₆)</text>
  <text x="225" y="201" font-size="10" fill="#6b7280">150–250 °C — jet fuel</text>
  <rect x="210" y="227" width="10" height="35" fill="#f97316" rx="2"/>
  <text x="225" y="239" font-size="11" fill="#7c2d12">Diesel (C₁₄–C₂₀)</text>
  <text x="225" y="251" font-size="10" fill="#6b7280">220–350 °C — road diesel</text>
  <rect x="210" y="277" width="10" height="30" fill="#64748b" rx="2"/>
  <text x="225" y="289" font-size="11" fill="#1e293b">Fuel oil (C₂₀–C₅₀)</text>
  <text x="225" y="301" font-size="10" fill="#6b7280">300–370 °C — ships, power stations</text>
  <rect x="120" y="350" width="80" height="15" fill="#1f2937" rx="3"/>
  <text x="160" y="377" text-anchor="middle" font-size="11" fill="#374151">Bitumen residue (C₅₀+) — road surfacing</text>
  <rect x="110" y="380" width="100" height="28" rx="4" fill="#3d1212" stroke="#ef4444" stroke-width="1.5"/>
  <text x="160" y="399" text-anchor="middle" font-size="11" fill="#991b1b">Furnace — heat crude oil</text>
</svg>`, caption: 'Fractionating column: crude oil heated at bottom, fractions condense at different heights based on boiling point.' } },
    { id: 'h-fractions', type: 'heading', data: { text: 'Main Fractions and Their Uses', level: 2 } },
    { id: 'svg-fractions', type: 'svg', data: { svg: `<svg viewBox="0 0 580 302" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Crude Oil Fractions from Fractional Distillation</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="57" y="40" text-anchor="middle" fill="white" font-weight="bold">Fraction</text>
  <text x="147" y="40" text-anchor="middle" fill="white" font-weight="bold">Carbon chain</text>
  <text x="228" y="40" text-anchor="middle" fill="white" font-weight="bold">Boiling point</text>
  <text x="305" y="40" text-anchor="middle" fill="white" font-weight="bold">State</text>
  <text x="457" y="40" text-anchor="middle" fill="white" font-weight="bold">Main use</text>
  <rect x="0" y="50" width="580" height="36" fill="#dbeafe"/>
  <text x="4" y="72" fill="#1e40af" font-weight="bold">Refinery gas</text>
  <text x="147" y="72" text-anchor="middle" fill="#374151">C1–C4</text>
  <text x="228" y="72" text-anchor="middle" fill="#374151">below 25°C</text>
  <text x="305" y="72" text-anchor="middle" fill="#374151">Gas</text>
  <text x="339" y="72" fill="#374151">LPG, bottled fuel gas</text>
  <rect x="0" y="86" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="108" fill="#374151" font-weight="bold">Petrol (gasoline)</text>
  <text x="147" y="108" text-anchor="middle" fill="#374151">C5–C10</text>
  <text x="228" y="108" text-anchor="middle" fill="#374151">25–75°C</text>
  <text x="305" y="108" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="108" fill="#374151">Motor vehicle fuel</text>
  <rect x="0" y="122" width="580" height="36" fill="#f1f5f9"/>
  <text x="4" y="144" fill="#374151" font-weight="bold">Naphtha</text>
  <text x="147" y="144" text-anchor="middle" fill="#374151">C6–C10</text>
  <text x="228" y="144" text-anchor="middle" fill="#374151">75–190°C</text>
  <text x="305" y="144" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="144" fill="#374151">Chemical feedstock</text>
  <rect x="0" y="158" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="180" fill="#374151" font-weight="bold">Kerosene</text>
  <text x="147" y="180" text-anchor="middle" fill="#374151">C10–C16</text>
  <text x="228" y="180" text-anchor="middle" fill="#374151">150–250°C</text>
  <text x="305" y="180" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="180" fill="#374151">Jet fuel, domestic heating</text>
  <rect x="0" y="194" width="580" height="36" fill="#f1f5f9"/>
  <text x="4" y="216" fill="#374151" font-weight="bold">Diesel (gas oil)</text>
  <text x="147" y="216" text-anchor="middle" fill="#374151">C14–C20</text>
  <text x="228" y="216" text-anchor="middle" fill="#374151">220–350°C</text>
  <text x="305" y="216" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="216" fill="#374151">Road transport, heating</text>
  <rect x="0" y="230" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="252" fill="#374151" font-weight="bold">Fuel oil</text>
  <text x="147" y="252" text-anchor="middle" fill="#374151">C20–C50</text>
  <text x="228" y="252" text-anchor="middle" fill="#374151">300–370°C</text>
  <text x="305" y="252" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="252" fill="#374151">Ships, power stations</text>
  <rect x="0" y="266" width="580" height="36" fill="#f1f5f9"/>
  <text x="4" y="288" fill="#374151" font-weight="bold">Bitumen (residue)</text>
  <text x="147" y="288" text-anchor="middle" fill="#374151">C50+</text>
  <text x="228" y="288" text-anchor="middle" fill="#374151">&gt;370°C</text>
  <text x="305" y="288" text-anchor="middle" fill="#374151">Solid</text>
  <text x="339" y="288" fill="#374151">Road surfacing, roofing</text>
  <line x1="115" y1="22" x2="115" y2="302" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="180" y1="22" x2="180" y2="302" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="275" y1="22" x2="275" y2="302" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="334" y1="22" x2="334" y2="302" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Seven main fractions from crude oil: refinery gas (top) to bitumen (bottom). Shorter chains = lower boiling points = top of column.' } },
    { id: 'h-cracking', type: 'heading', data: { text: 'Cracking — Converting Unwanted Fractions', level: 2 } },
    { id: 'svg-cracking', type: 'svg', data: { svg: `<svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Thermal vs Catalytic Cracking</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="65" y="40" text-anchor="middle" fill="white" font-weight="bold">Property</text>
  <text x="240" y="40" text-anchor="middle" fill="white" font-weight="bold">Thermal Cracking</text>
  <text x="465" y="40" text-anchor="middle" fill="white" font-weight="bold">Catalytic Cracking</text>
  <rect x="0" y="50" width="580" height="36" fill="#fff7ed"/>
  <text x="4" y="72" fill="#374151" font-weight="bold">Conditions</text>
  <text x="133" y="68" fill="#374151">400–900°C, very high pressure</text>
  <text x="355" y="68" fill="#374151">~500°C, atmospheric</text>
  <text x="355" y="81" fill="#374151">pressure</text>
  <rect x="0" y="86" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="108" fill="#374151" font-weight="bold">Catalyst</text>
  <text x="240" y="108" text-anchor="middle" fill="#374151">None</text>
  <text x="355" y="108" fill="#374151">Zeolite (SiO₂/Al₂O₃)</text>
  <rect x="0" y="122" width="580" height="36" fill="#fff7ed"/>
  <text x="4" y="144" fill="#374151" font-weight="bold">Mechanism</text>
  <text x="133" y="138" fill="#374151">Homolytic — free radicals</text>
  <text x="133" y="151" fill="#374151">(C–C bond homolysis)</text>
  <text x="355" y="138" fill="#374151">Heterolytic — ionic</text>
  <text x="355" y="151" fill="#374151">(carbocation intermediate)</text>
  <rect x="0" y="158" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="180" fill="#374151" font-weight="bold">Main products</text>
  <text x="133" y="175" fill="#0369a1">Short-chain alkenes</text>
  <text x="133" y="188" fill="#0369a1">(ethene, propene)</text>
  <text x="355" y="175" fill="#065f46">Branched alkanes,</text>
  <text x="355" y="188" fill="#065f46">cycloalkanes, aromatics</text>
  <rect x="0" y="194" width="580" height="36" fill="#fff7ed"/>
  <text x="4" y="216" fill="#374151" font-weight="bold">Industrial use</text>
  <text x="133" y="210" fill="#374151">Polymer feedstock</text>
  <text x="133" y="223" fill="#374151">(polyethene, polypropene)</text>
  <text x="355" y="210" fill="#374151">High-octane petrol</text>
  <text x="355" y="223" fill="#374151">components</text>
  <line x1="130" y1="22" x2="130" y2="230" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="350" y1="22" x2="350" y2="230" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Thermal cracking uses extreme heat and forms free radicals; catalytic cracking uses a zeolite catalyst at lower temperatures and forms carbocations.' } },
    { id: 'callout-cracking-mechanisms', type: 'callout', data: { style: 'worked', title: 'Cracking Intermediates and Steam Cracking', text: '&#x2022; <strong>Catalytic cracking</strong> involves an ionic intermediate. The zeolite catalyst removes a hydrogen atom along with its electrons from the alkane to form a positive <strong>carbocation</strong> (carbonium ion) intermediate.<br/>&#x2022; <strong>Thermal cracking</strong> breaks carbon–carbon bonds homolytically, forming <strong>free radicals</strong> (species with an unpaired electron).<br/>&#x2022; <strong>Steam cracking</strong> is an alternative method used to produce a high proportion of alkenes. The hydrocarbon feedstock (e.g. naphtha) is vaporised, mixed with steam, and heated to 800–900°C for less than a second. The steam acts as a diluent and prevents carbon formation.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: '&#x2022; Fractional distillation is a PHYSICAL process — no new substances are made, only separated.<br/>&#x2022; Cracking is a CHEMICAL process — covalent bonds are broken; new substances are formed.<br/>&#x2022; Always link boiling point differences to London dispersion forces (longer chain → more electrons → stronger London forces → higher b.p.).' } },
    { id: 'h-isomerisation', type: 'heading', data: { text: 'Improving Octane Rating: Isomerisation', level: 2 } },
    { id: 'h-reforming', type: 'heading', data: { text: 'Improving Octane Rating: Reforming', level: 2 } },
    { id: 'svg-iso-reform', type: 'svg', data: { svg: `<svg viewBox="0 0 580 175" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Isomerisation and Reforming — Upgrading Naphtha</text>
  <rect x="8" y="23" width="272" height="148" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <rect x="8" y="23" width="272" height="28" rx="5" fill="#1d4ed8"/>
  <text x="144" y="42" text-anchor="middle" fill="white" font-weight="bold" font-size="11">ISOMERISATION</text>
  <text x="14" y="68" fill="#374151" font-weight="bold">Catalyst:</text>
  <text x="80" y="68" fill="#1d4ed8">Pt / zeolite</text>
  <text x="14" y="88" fill="#374151" font-weight="bold">Temperature:</text>
  <text x="90" y="88" fill="#1d4ed8">~250°C, 1–3 atm</text>
  <text x="14" y="108" fill="#374151" font-weight="bold">Purpose:</text>
  <text x="70" y="108" fill="#374151">Straight → branched alkane</text>
  <text x="14" y="125" fill="#374151" font-weight="bold">Example:</text>
  <text x="14" y="140" fill="#0369a1" font-size="9">n-heptane → 2,2-dimethylpentane</text>
  <text x="14" y="162" fill="#6b7280" font-size="9">Molecular formula unchanged; higher octane rating</text>
  <rect x="300" y="23" width="272" height="148" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <rect x="300" y="23" width="272" height="28" rx="5" fill="#0f766e"/>
  <text x="436" y="42" text-anchor="middle" fill="white" font-weight="bold" font-size="11">REFORMING</text>
  <text x="306" y="68" fill="#374151" font-weight="bold">Catalyst:</text>
  <text x="372" y="68" fill="#0f766e">Pt / Al₂O₃</text>
  <text x="306" y="88" fill="#374151" font-weight="bold">Temperature:</text>
  <text x="382" y="88" fill="#0f766e">~500°C</text>
  <text x="306" y="108" fill="#374151" font-weight="bold">Purpose:</text>
  <text x="362" y="108" fill="#374151">Straight → aromatic + H₂</text>
  <text x="306" y="125" fill="#374151" font-weight="bold">Example:</text>
  <text x="306" y="140" fill="#065f46" font-size="9">hexane → benzene + 4H₂</text>
  <text x="306" y="155" fill="#6b7280" font-size="9">(also: hexane → cyclohexane → benzene)</text>
  <text x="306" y="162" fill="#6b7280" font-size="9">Higher octane; H₂ is a useful by-product</text>
</svg>`, caption: 'Isomerisation (Pt/zeolite, 250°C): straight → branched. Reforming (Pt/Al₂O₃, 500°C): straight → aromatic + H₂. Both increase octane rating.' } },
    { id: 'callout-fluid-catalytic', type: 'callout', data: { style: 'key', title: 'Catalyst Comparison: Isomerisation vs Reforming', text: 'Note the use of Platinum (Pt). Isomerisation uses Pt on zeolite at 250°C, while reforming uses Pt on aluminium oxide at 500°C. These are vital for upgrading naphtha into high-octane petrol components.' } }
  ,
    {
      id: 'callout-exam-4-9',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Fractional Distillation Core Principle",
        text: "Examiners often ask why fractions separate. You must explicitly state that they have <strong>different boiling points</strong> due to differing chain lengths and consequently different London force strengths."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Crude oil separated by FD (physical process). Short chains: low b.p., top of column. Long chains: high b.p., bottom. Cracking (chemical) converts long chains to alkenes + branched alkanes. Catalytic cracking: zeolite, 500°C, carbocations. Thermal cracking: 400–900°C, free radicals. Isomerisation: Pt/zeolite, 250°C, straight to branched. Reforming: Pt/Al₂O₃, 500°C, produces aromatics + H₂.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-fd', prompt: 'What is the principle behind fractional distillation of crude oil? Why do fractions condense at different heights?' },
      { id: 'cue-2', blockId: 'svg-fractions', prompt: 'Name the 7 main fractions from crude oil distillation in order from top to bottom of the column.' },
      { id: 'cue-3', blockId: 'svg-cracking', prompt: 'Compare thermal and catalytic cracking: conditions, catalyst, mechanism, and main products.' },
      { id: 'cue-4', blockId: 'callout-cracking-mechanisms', prompt: 'What type of intermediate forms in catalytic cracking? What type forms in thermal cracking?' },
      { id: 'cue-5', blockId: 'svg-iso-reform', prompt: 'State the catalyst and temperature for isomerisation and reforming. What does each process convert?' }
    ],
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH11 Specification', detail: 'Fractional distillation, cracking, isomerisation and reforming are required content for Topic 4.', year: '2018', source: 'Pearson Edexcel', tags: ['fractional distillation', 'cracking', 'isomerisation'] }
  ],
  mentions: []
};
