import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/chemistry'

# ===========================================================================
# NOTE 1_4_9 — Fractional Distillation, Cracking, Isomerisation, Reforming
# ===========================================================================

content_9 = """export const note_chemistry_1_4_9 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe fractional distillation of crude oil; explain how fractions are used as fuels and relate the process to intermolecular forces.' } },
    { id: 'h-crude', type: 'heading', data: { text: 'Crude Oil \u2014 Composition', level: 2 } },
    { id: 'h-fractional', type: 'heading', data: { text: 'Fractional Distillation', level: 2 } },
    { id: 'callout-key-fd', type: 'callout', data: { style: 'key', title: 'Fractional Distillation \u2014 Principle', text: 'Crude oil is separated by fractional distillation in a fractionating column. The mixture is heated to vaporise it, then vapours rise up the column and condense at different heights according to their boiling points. Shorter-chain alkanes have lower boiling points (weaker London forces) and condense near the top; longer-chain alkanes condense near the bottom.' } },
    { id: 'svg-column', type: 'svg', data: { svg: `<svg viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <text x="230" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#374151">Fractionating Column</text>
  <rect x="120" y="30" width="80" height="320" rx="6" fill="#2d2f72" stroke="#4f46e5" stroke-width="2"/>
  <line x1="100" y1="50" x2="100" y2="340" stroke="#ef4444" stroke-width="2"/>
  <polygon points="100,40 96,55 104,55" fill="#ef4444"/>
  <text x="95" y="200" text-anchor="middle" font-size="11" fill="#ef4444" transform="rotate(-90,95,200)">Temperature increases \u2193</text>
  <rect x="210" y="32" width="10" height="30" fill="#1250a0" rx="2"/>
  <text x="225" y="42" font-size="11" fill="#1e40af">Refinery gas (C\u2081\u2013C\u2084)</text>
  <text x="225" y="54" font-size="10" fill="#6b7280">b.p. below 25 \u00b0C \u2014 bottled gas, heating</text>
  <rect x="210" y="82" width="10" height="35" fill="#78350f" rx="2"/>
  <text x="225" y="94" font-size="11" fill="#92400e">Petrol/gasoline (C\u2085\u2013C\u2081\u2080)</text>
  <text x="225" y="106" font-size="10" fill="#6b7280">25\u201375 \u00b0C \u2014 motor fuel</text>
  <rect x="210" y="132" width="10" height="30" fill="#2d1b69" rx="2"/>
  <text x="225" y="144" font-size="11" fill="#5b21b6">Naphtha (C\u2086\u2013C\u2081\u2080)</text>
  <text x="225" y="156" font-size="10" fill="#6b7280">75\u2013190 \u00b0C \u2014 chemical feedstock</text>
  <rect x="210" y="177" width="10" height="35" fill="#065f46" rx="2"/>
  <text x="225" y="189" font-size="11" fill="#065f46">Kerosene (C\u2081\u2080\u2013C\u2081\u2086)</text>
  <text x="225" y="201" font-size="10" fill="#6b7280">150\u2013250 \u00b0C \u2014 jet fuel</text>
  <rect x="210" y="227" width="10" height="35" fill="#f97316" rx="2"/>
  <text x="225" y="239" font-size="11" fill="#7c2d12">Diesel (C\u2081\u2084\u2013C\u2082\u2080)</text>
  <text x="225" y="251" font-size="10" fill="#6b7280">220\u2013350 \u00b0C \u2014 road diesel</text>
  <rect x="210" y="277" width="10" height="30" fill="#64748b" rx="2"/>
  <text x="225" y="289" font-size="11" fill="#1e293b">Fuel oil (C\u2082\u2080\u2013C\u2085\u2080)</text>
  <text x="225" y="301" font-size="10" fill="#6b7280">300\u2013370 \u00b0C \u2014 ships, power stations</text>
  <rect x="120" y="350" width="80" height="15" fill="#1f2937" rx="3"/>
  <text x="160" y="377" text-anchor="middle" font-size="11" fill="#374151">Bitumen residue (C\u2085\u2080+) \u2014 road surfacing</text>
  <rect x="110" y="380" width="100" height="28" rx="4" fill="#3d1212" stroke="#ef4444" stroke-width="1.5"/>
  <text x="160" y="399" text-anchor="middle" font-size="11" fill="#991b1b">Furnace \u2014 heat crude oil</text>
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
  <text x="147" y="72" text-anchor="middle" fill="#374151">C1\u2013C4</text>
  <text x="228" y="72" text-anchor="middle" fill="#374151">below 25\u00b0C</text>
  <text x="305" y="72" text-anchor="middle" fill="#374151">Gas</text>
  <text x="339" y="72" fill="#374151">LPG, bottled fuel gas</text>
  <rect x="0" y="86" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="108" fill="#374151" font-weight="bold">Petrol (gasoline)</text>
  <text x="147" y="108" text-anchor="middle" fill="#374151">C5\u2013C10</text>
  <text x="228" y="108" text-anchor="middle" fill="#374151">25\u201375\u00b0C</text>
  <text x="305" y="108" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="108" fill="#374151">Motor vehicle fuel</text>
  <rect x="0" y="122" width="580" height="36" fill="#f1f5f9"/>
  <text x="4" y="144" fill="#374151" font-weight="bold">Naphtha</text>
  <text x="147" y="144" text-anchor="middle" fill="#374151">C6\u2013C10</text>
  <text x="228" y="144" text-anchor="middle" fill="#374151">75\u2013190\u00b0C</text>
  <text x="305" y="144" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="144" fill="#374151">Chemical feedstock</text>
  <rect x="0" y="158" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="180" fill="#374151" font-weight="bold">Kerosene</text>
  <text x="147" y="180" text-anchor="middle" fill="#374151">C10\u2013C16</text>
  <text x="228" y="180" text-anchor="middle" fill="#374151">150\u2013250\u00b0C</text>
  <text x="305" y="180" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="180" fill="#374151">Jet fuel, domestic heating</text>
  <rect x="0" y="194" width="580" height="36" fill="#f1f5f9"/>
  <text x="4" y="216" fill="#374151" font-weight="bold">Diesel (gas oil)</text>
  <text x="147" y="216" text-anchor="middle" fill="#374151">C14\u2013C20</text>
  <text x="228" y="216" text-anchor="middle" fill="#374151">220\u2013350\u00b0C</text>
  <text x="305" y="216" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="216" fill="#374151">Road transport, heating</text>
  <rect x="0" y="230" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="252" fill="#374151" font-weight="bold">Fuel oil</text>
  <text x="147" y="252" text-anchor="middle" fill="#374151">C20\u2013C50</text>
  <text x="228" y="252" text-anchor="middle" fill="#374151">300\u2013370\u00b0C</text>
  <text x="305" y="252" text-anchor="middle" fill="#374151">Liquid</text>
  <text x="339" y="252" fill="#374151">Ships, power stations</text>
  <rect x="0" y="266" width="580" height="36" fill="#f1f5f9"/>
  <text x="4" y="288" fill="#374151" font-weight="bold">Bitumen (residue)</text>
  <text x="147" y="288" text-anchor="middle" fill="#374151">C50+</text>
  <text x="228" y="288" text-anchor="middle" fill="#374151">&gt;370\u00b0C</text>
  <text x="305" y="288" text-anchor="middle" fill="#374151">Solid</text>
  <text x="339" y="288" fill="#374151">Road surfacing, roofing</text>
  <line x1="115" y1="22" x2="115" y2="302" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="180" y1="22" x2="180" y2="302" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="275" y1="22" x2="275" y2="302" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="334" y1="22" x2="334" y2="302" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Seven main fractions from crude oil: refinery gas (top) to bitumen (bottom). Shorter chains = lower boiling points = top of column.' } },
    { id: 'h-cracking', type: 'heading', data: { text: 'Cracking \u2014 Converting Unwanted Fractions', level: 2 } },
    { id: 'svg-cracking', type: 'svg', data: { svg: `<svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Thermal vs Catalytic Cracking</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="65" y="40" text-anchor="middle" fill="white" font-weight="bold">Property</text>
  <text x="240" y="40" text-anchor="middle" fill="white" font-weight="bold">Thermal Cracking</text>
  <text x="465" y="40" text-anchor="middle" fill="white" font-weight="bold">Catalytic Cracking</text>
  <rect x="0" y="50" width="580" height="36" fill="#fff7ed"/>
  <text x="4" y="72" fill="#374151" font-weight="bold">Conditions</text>
  <text x="133" y="68" fill="#374151">400\u2013900\u00b0C, very high pressure</text>
  <text x="355" y="68" fill="#374151">~500\u00b0C, atmospheric</text>
  <text x="355" y="81" fill="#374151">pressure</text>
  <rect x="0" y="86" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="108" fill="#374151" font-weight="bold">Catalyst</text>
  <text x="240" y="108" text-anchor="middle" fill="#374151">None</text>
  <text x="355" y="108" fill="#374151">Zeolite (SiO\u2082/Al\u2082O\u2083)</text>
  <rect x="0" y="122" width="580" height="36" fill="#fff7ed"/>
  <text x="4" y="144" fill="#374151" font-weight="bold">Mechanism</text>
  <text x="133" y="138" fill="#374151">Homolytic \u2014 free radicals</text>
  <text x="133" y="151" fill="#374151">(C\u2013C bond homolysis)</text>
  <text x="355" y="138" fill="#374151">Heterolytic \u2014 ionic</text>
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
    { id: 'callout-cracking-mechanisms', type: 'callout', data: { style: 'worked', title: 'Cracking Intermediates and Steam Cracking', text: '&#x2022; <strong>Catalytic cracking</strong> involves an ionic intermediate. The zeolite catalyst removes a hydrogen atom along with its electrons from the alkane to form a positive <strong>carbocation</strong> (carbonium ion) intermediate.<br/>&#x2022; <strong>Thermal cracking</strong> breaks carbon\u2013carbon bonds homolytically, forming <strong>free radicals</strong> (species with an unpaired electron).<br/>&#x2022; <strong>Steam cracking</strong> is an alternative method used to produce a high proportion of alkenes. The hydrocarbon feedstock (e.g. naphtha) is vaporised, mixed with steam, and heated to 800\u2013900\u00b0C for less than a second. The steam acts as a diluent and prevents carbon formation.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: '&#x2022; Fractional distillation is a PHYSICAL process \u2014 no new substances are made, only separated.<br/>&#x2022; Cracking is a CHEMICAL process \u2014 covalent bonds are broken; new substances are formed.<br/>&#x2022; Always link boiling point differences to London dispersion forces (longer chain \u2192 more electrons \u2192 stronger London forces \u2192 higher b.p.).' } },
    { id: 'h-isomerisation', type: 'heading', data: { text: 'Improving Octane Rating: Isomerisation', level: 2 } },
    { id: 'h-reforming', type: 'heading', data: { text: 'Improving Octane Rating: Reforming', level: 2 } },
    { id: 'svg-iso-reform', type: 'svg', data: { svg: `<svg viewBox="0 0 580 175" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Isomerisation and Reforming \u2014 Upgrading Naphtha</text>
  <rect x="8" y="23" width="272" height="148" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <rect x="8" y="23" width="272" height="28" rx="5" fill="#1d4ed8"/>
  <text x="144" y="42" text-anchor="middle" fill="white" font-weight="bold" font-size="11">ISOMERISATION</text>
  <text x="14" y="68" fill="#374151" font-weight="bold">Catalyst:</text>
  <text x="80" y="68" fill="#1d4ed8">Pt / zeolite</text>
  <text x="14" y="88" fill="#374151" font-weight="bold">Temperature:</text>
  <text x="90" y="88" fill="#1d4ed8">~250\u00b0C, 1\u20133 atm</text>
  <text x="14" y="108" fill="#374151" font-weight="bold">Purpose:</text>
  <text x="70" y="108" fill="#374151">Straight \u2192 branched alkane</text>
  <text x="14" y="125" fill="#374151" font-weight="bold">Example:</text>
  <text x="14" y="140" fill="#0369a1" font-size="9">n-heptane \u2192 2,2-dimethylpentane</text>
  <text x="14" y="162" fill="#6b7280" font-size="9">Molecular formula unchanged; higher octane rating</text>
  <rect x="300" y="23" width="272" height="148" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <rect x="300" y="23" width="272" height="28" rx="5" fill="#0f766e"/>
  <text x="436" y="42" text-anchor="middle" fill="white" font-weight="bold" font-size="11">REFORMING</text>
  <text x="306" y="68" fill="#374151" font-weight="bold">Catalyst:</text>
  <text x="372" y="68" fill="#0f766e">Pt / Al\u2082O\u2083</text>
  <text x="306" y="88" fill="#374151" font-weight="bold">Temperature:</text>
  <text x="382" y="88" fill="#0f766e">~500\u00b0C</text>
  <text x="306" y="108" fill="#374151" font-weight="bold">Purpose:</text>
  <text x="362" y="108" fill="#374151">Straight \u2192 aromatic + H\u2082</text>
  <text x="306" y="125" fill="#374151" font-weight="bold">Example:</text>
  <text x="306" y="140" fill="#065f46" font-size="9">hexane \u2192 benzene + 4H\u2082</text>
  <text x="306" y="155" fill="#6b7280" font-size="9">(also: hexane \u2192 cyclohexane \u2192 benzene)</text>
  <text x="306" y="162" fill="#6b7280" font-size="9">Higher octane; H\u2082 is a useful by-product</text>
</svg>`, caption: 'Isomerisation (Pt/zeolite, 250\u00b0C): straight \u2192 branched. Reforming (Pt/Al\u2082O\u2083, 500\u00b0C): straight \u2192 aromatic + H\u2082. Both increase octane rating.' } },
    { id: 'callout-fluid-catalytic', type: 'callout', data: { style: 'key', title: 'Catalyst Comparison: Isomerisation vs Reforming', text: 'Note the use of Platinum (Pt). Isomerisation uses Pt on zeolite at 250\u00b0C, while reforming uses Pt on aluminium oxide at 500\u00b0C. These are vital for upgrading naphtha into high-octane petrol components.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Crude oil separated by FD (physical process). Short chains: low b.p., top of column. Long chains: high b.p., bottom. Cracking (chemical) converts long chains to alkenes + branched alkanes. Catalytic cracking: zeolite, 500\u00b0C, carbocations. Thermal cracking: 400\u2013900\u00b0C, free radicals. Isomerisation: Pt/zeolite, 250\u00b0C, straight to branched. Reforming: Pt/Al\u2082O\u2083, 500\u00b0C, produces aromatics + H\u2082.',
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
"""

# ===========================================================================
# NOTE 1_4_10 — Combustion of Alkanes + Pollutants + Catalytic Converter
# ===========================================================================

content_10 = """export const note_chemistry_1_4_10 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Write equations for complete and incomplete combustion of alkanes; explain the formation and environmental impact of combustion pollutants.' } },
    { id: 'h-combustion', type: 'heading', data: { text: 'Combustion of Alkanes', level: 2 } },
    { id: 'h-complete', type: 'heading', data: { text: 'Complete Combustion', level: 2 } },
    { id: 'callout-key-complete', type: 'callout', data: { style: 'key', title: 'Complete Combustion', text: 'When an alkane burns in excess oxygen, complete combustion occurs producing only carbon dioxide (CO\u2082) and water (H\u2082O). No pollutants other than CO\u2082 are formed.' } },
    { id: 'eq-methane', type: 'equation', data: { html: 'CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O', caption: 'Complete combustion of methane \u2014 \u0394H is highly exothermic.' } },
    { id: 'eq-octane', type: 'equation', data: { html: '2C\u2088H\u2081\u2088 + 25O\u2082 \u2192 16CO\u2082 + 18H\u2082O', caption: 'Complete combustion of octane (a major component of petrol).' } },
    { id: 'eq-general', type: 'equation', data: { html: 'C\u2099H\u2082\u2099\u208a\u2082 + <span class="nb-frac"><span class="nb-num">3n+1</span><span class="nb-den">2</span></span>O\u2082 \u2192 nCO\u2082 + (n+1)H\u2082O', caption: 'General equation for complete combustion of alkane C\u2099H\u2082\u2099\u208a\u2082.' } },
    { id: 'h-incomplete', type: 'heading', data: { text: 'Incomplete Combustion', level: 2 } },
    { id: 'callout-key-incomplete', type: 'callout', data: { style: 'key', title: 'Incomplete Combustion', text: 'When oxygen supply is limited, incomplete combustion occurs. Products include carbon monoxide (CO), carbon (soot/particulates), and water \u2014 as well as some unburned hydrocarbons. Less energy is released than in complete combustion.' } },
    { id: 'eq-incomplete', type: 'equation', data: { html: '2CH\u2084 + 3O\u2082 \u2192 2CO + 4H\u2082O &nbsp;(limited O\u2082 \u2192 CO)', caption: 'Incomplete combustion of methane producing toxic carbon monoxide.' } },
    { id: 'h-combustion-trends', type: 'heading', data: { text: 'Trends in Flammability and Combustion', level: 2 } },
    { id: 'callout-combustion-trends', type: 'callout', data: { style: 'key', title: 'How Chain Length Affects Combustion', text: '<strong>Ignition difficulty:</strong> As alkanes grow larger, they become harder to ignite. Larger molecules have stronger London (van der Waals) forces and do not vaporise as easily, so combustion requires more activation energy.<br/><strong>Flame colour:</strong> Short-chain alkanes burn with a clean blue flame (complete combustion). As chain length increases, combustion is less complete \u2014 resulting in a yellow, smoky flame due to glowing, unburned carbon particles (soot).' } },
    { id: 'h-pollutants', type: 'heading', data: { text: 'Combustion Pollutants and Their Effects', level: 2 } },
    { id: 'svg-pollutants', type: 'svg', data: { svg: `<svg viewBox="0 0 580 310" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Air Pollutants from Hydrocarbon Combustion</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="52" y="40" text-anchor="middle" fill="white" font-weight="bold">Pollutant</text>
  <text x="166" y="40" text-anchor="middle" fill="white" font-weight="bold">Source</text>
  <text x="335" y="40" text-anchor="middle" fill="white" font-weight="bold">Effect</text>
  <text x="510" y="40" text-anchor="middle" fill="white" font-weight="bold">Reduction</text>
  <rect x="0" y="50" width="580" height="38" fill="#fee2e2"/>
  <text x="4" y="67" fill="#dc2626" font-weight="bold">CO\u2082</text>
  <text x="108" y="67" fill="#374151">Complete combustion</text>
  <text x="228" y="67" fill="#374151">Greenhouse gas;</text>
  <text x="228" y="80" fill="#374151">enhanced greenhouse effect</text>
  <text x="450" y="72" text-anchor="middle" fill="#374151">Alternative fuels; reduce use</text>
  <rect x="0" y="88" width="580" height="38" fill="#fff7ed"/>
  <text x="4" y="105" fill="#c2410c" font-weight="bold">CO</text>
  <text x="108" y="105" fill="#374151">Incomplete combustion</text>
  <text x="228" y="101" fill="#374151">Toxic: binds irreversibly to</text>
  <text x="228" y="114" fill="#374151">haemoglobin (carboxyHb)</text>
  <text x="450" y="109" text-anchor="middle" fill="#374151">Catalytic converter</text>
  <rect x="0" y="126" width="580" height="38" fill="#f1f5f9"/>
  <text x="4" y="143" fill="#374151" font-weight="bold">Carbon (soot)</text>
  <text x="108" y="143" fill="#374151">Very incomplete combustion</text>
  <text x="228" y="139" fill="#374151">Respiratory disease;</text>
  <text x="228" y="152" fill="#374151">carcinogenic; global dimming</text>
  <text x="450" y="147" text-anchor="middle" fill="#374151">Particulate filter (DPF)</text>
  <rect x="0" y="164" width="580" height="38" fill="#fef9c3"/>
  <text x="4" y="181" fill="#713f12" font-weight="bold">NO\u2093</text>
  <text x="108" y="177" fill="#374151">N\u2082 + O\u2082 at high temp</text>
  <text x="108" y="190" fill="#374151">in engine cylinders</text>
  <text x="228" y="177" fill="#374151">Acid rain; photochemical</text>
  <text x="228" y="190" fill="#374151">smog; respiratory irritant</text>
  <text x="450" y="185" text-anchor="middle" fill="#374151">Catalytic converter</text>
  <rect x="0" y="202" width="580" height="38" fill="#faf5ff"/>
  <text x="4" y="219" fill="#7e22ce" font-weight="bold">SO\u2082</text>
  <text x="108" y="215" fill="#374151">Sulfur impurities</text>
  <text x="108" y="228" fill="#374151">in fossil fuels</text>
  <text x="228" y="215" fill="#374151">Acid rain; respiratory</text>
  <text x="228" y="228" fill="#374151">damage</text>
  <text x="450" y="219" text-anchor="middle" fill="#374151">Desulfurisation of fuel</text>
  <rect x="0" y="240" width="580" height="38" fill="#ecfdf5"/>
  <text x="4" y="257" fill="#065f46" font-weight="bold">Unburned HCs</text>
  <text x="108" y="257" fill="#374151">Incomplete combustion</text>
  <text x="228" y="253" fill="#374151">Carcinogenic; photochemical</text>
  <text x="228" y="266" fill="#374151">smog precursor</text>
  <text x="450" y="261" text-anchor="middle" fill="#374151">Catalytic converter</text>
  <rect x="0" y="278" width="580" height="32" fill="#f0f9ff"/>
  <text x="4" y="298" fill="#0369a1" font-weight="bold">Ozone (O\u2083)</text>
  <text x="108" y="295" fill="#374151">NO\u2093 + HCs + UV (secondary)</text>
  <text x="228" y="295" fill="#374151">Low-level irritant; smog</text>
  <text x="450" y="295" text-anchor="middle" fill="#374151">Reduce NO\u2093 / HCs</text>
  <line x1="104" y1="22" x2="104" y2="310" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="224" y1="22" x2="224" y2="310" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="400" y1="22" x2="400" y2="310" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Seven major combustion pollutants: sources, effects, and how to reduce them.' } },
    { id: 'h-catalytic', type: 'heading', data: { text: 'Catalytic Converters', level: 2 } },
    { id: 'callout-catalytic', type: 'callout', data: { style: 'key', title: 'Catalytic Converter \u2014 Reactions and Limitations', text: '<strong>Key equation:</strong> 2CO + 2NO \u2192 2CO\u2082 + N\u2082 (CO oxidised; NO reduced simultaneously)<br/><strong>Also:</strong> unburned hydrocarbons + O\u2082 \u2192 CO\u2082 + H\u2082O<br/><strong>Catalyst:</strong> Pt, Rh, Pd on a honeycomb ceramic support \u2014 provides large surface area; lowers activation energy without being consumed.<br/><strong>Limitation:</strong> Does NOT remove CO\u2082 (a greenhouse gas). Less effective when cold \u2014 requires ~300\u00b0C to operate; cold-start emissions are not fully treated.' } },
    { id: 'h-acid-rain', type: 'heading', data: { text: 'Acid Rain \u2014 Formation', level: 2 } },
    { id: 'callout-acid-rain', type: 'callout', data: { style: 'key', title: 'Acid Rain Formation from SO\u2082 and NO\u2093', text: '<strong>From SO\u2082:</strong> SO\u2082 + H\u2082O \u2192 H\u2082SO\u2083 (sulfurous acid); 2SO\u2082 + O\u2082 \u2192 2SO\u2083; SO\u2083 + H\u2082O \u2192 H\u2082SO\u2084 (sulfuric acid, strong)<br/><strong>From NO\u2093:</strong> NO + \u00bdO\u2082 \u2192 NO\u2082; 3NO\u2082 + H\u2082O \u2192 2HNO\u2083 + NO (nitric acid)<br/><strong>Effects:</strong> pH typically 4\u20135 (normal rain ~5.6); kills aquatic life, damages tree roots, corrodes limestone buildings and metal structures.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '&#x2022; For CO toxicity: state it binds to haemoglobin (forming carboxyhaemoglobin) and PREVENTS oxygen transport \u2014 do not just say "it is toxic".<br/>&#x2022; For NO\u2093 formation: explain it forms at high temperatures in engine cylinders where N\u2082 and O\u2082 from air react.<br/>&#x2022; CO\u2082 is NOT directly toxic \u2014 its effect is as a greenhouse gas causing global warming.<br/>&#x2022; Learn the catalytic converter equation: 2CO + 2NO \u2192 2CO\u2082 + N\u2082.' } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '&#x2022; Saying CO\u2082 causes acid rain \u2014 it does not (it forms very weak carbonic acid). Acid rain is primarily from SO\u2082 and NO\u2093.<br/>&#x2022; Forgetting that NO\u2093 comes from the nitrogen in AIR, not from the fuel itself (in petrol/diesel engines).<br/>&#x2022; Confusing soot (carbon particles) with CO \u2014 soot is solid carbon; CO is a colourless, odourless gas.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'Complete combustion: CO\u2082 + H\u2082O. Incomplete: CO + soot. CO binds haemoglobin \u2192 prevents O\u2082 transport. Pollutants: CO\u2082 (greenhouse), CO (toxic), soot (respiratory), NO\u2093 (acid rain, from air N\u2082), SO\u2082 (acid rain, from S impurities), HCs (smog). Catalytic converter: 2CO + 2NO \u2192 2CO\u2082 + N\u2082. Acid rain pH ~4\u20135.',
    cues: [
      { id: 'cue-1', blockId: 'eq-methane', prompt: 'Write the equation for complete combustion of methane. Write the general equation for complete combustion of any alkane CnH2n+2.' },
      { id: 'cue-2', blockId: 'callout-key-incomplete', prompt: 'What products form in incomplete combustion? Why is CO dangerous at the molecular level?' },
      { id: 'cue-3', blockId: 'svg-pollutants', prompt: 'Name 5 pollutants from hydrocarbon combustion, their sources, and harmful effects.' },
      { id: 'cue-4', blockId: 'callout-catalytic', prompt: 'Write the key catalytic converter equation. What are two limitations of catalytic converters?' },
      { id: 'cue-5', blockId: 'callout-acid-rain', prompt: 'Write equations showing how SO\u2082 and NO\u2093 form acid rain. What is the typical pH of acid rain?' }
    ],
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH11 Specification', detail: 'Combustion equations, pollutant formation, catalytic converters, and acid rain are all required for Topic 4.', year: '2018', source: 'Pearson Edexcel', tags: ['combustion', 'pollutants', 'acid rain'] }
  ],
  mentions: []
};
"""

# ===========================================================================
# NOTE 1_4_11 — Alternative Fuels, Carbon Neutrality, Greenhouse Effect
# ===========================================================================

content_11 = """export const note_chemistry_1_4_11 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Evaluate alternative fuels including hydrogen, biofuels and alcohols; explain the concept of carbon neutrality and assess sustainability.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Why Alternative Fuels?', level: 2 } },
    { id: 'h-carbon-neutral', type: 'heading', data: { text: 'Carbon Neutrality', level: 2 } },
    { id: 'callout-key-cn', type: 'callout', data: { style: 'key', title: 'Carbon Neutral \u2014 Definition', text: 'A process is carbon neutral if the amount of CO\u2082 released into the atmosphere equals the amount removed (absorbed) from the atmosphere over the same period. Net CO\u2082 release = zero.' } },
    { id: 'callout-cn-practice', type: 'callout', data: { style: 'tip', title: 'Carbon Neutrality in Practice', text: 'In theory, burning a biofuel is carbon neutral because the CO\u2082 released during combustion equals the CO\u2082 absorbed by the plant during photosynthesis when it grew.<br/>In practice, energy used in planting, harvesting, transporting and processing the crop means biofuels are rarely truly carbon neutral \u2014 they are only approximately carbon neutral.' } },
    { id: 'h-hydrogen', type: 'heading', data: { text: 'Hydrogen as a Fuel', level: 2 } },
    { id: 'eq-hydrogen', type: 'equation', data: { html: '2H\u2082 + O\u2082 \u2192 2H\u2082O', caption: 'Combustion of hydrogen \u2014 only product is water (no CO\u2082, no pollutants).' } },
    { id: 'svg-hydrogen', type: 'svg', data: { svg: `<svg viewBox="0 0 580 252" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Hydrogen as a Fuel \u2014 Advantages and Disadvantages</text>
  <rect x="0" y="22" width="290" height="28" fill="#15803d" rx="3"/>
  <text x="145" y="40" text-anchor="middle" fill="white" font-weight="bold" font-size="11">ADVANTAGES</text>
  <rect x="290" y="22" width="290" height="28" fill="#dc2626" rx="3"/>
  <text x="435" y="40" text-anchor="middle" fill="white" font-weight="bold" font-size="11">DISADVANTAGES</text>
  <rect x="0" y="50" width="580" height="40" fill="#f0fdf4"/>
  <text x="4" y="67" fill="#15803d">\u2714 Only product is water (H\u2082O)</text>
  <text x="4" y="80" fill="#166534" font-size="9">Zero CO\u2082 or pollutants at point of use</text>
  <text x="294" y="67" fill="#dc2626">\u2718 Most H\u2082 from fossil fuels (steam</text>
  <text x="294" y="80" fill="#7f1d1d" font-size="9">reforming of methane) \u2014 not truly clean</text>
  <rect x="0" y="90" width="580" height="40" fill="#f8fafc"/>
  <text x="4" y="107" fill="#15803d">\u2714 Very high energy per kg</text>
  <text x="4" y="120" fill="#166534" font-size="9">141 MJ kg\u207b\u00b9 vs 47 MJ kg\u207b\u00b9 for petrol</text>
  <text x="294" y="107" fill="#dc2626">\u2718 Difficult and expensive to store</text>
  <text x="294" y="120" fill="#7f1d1d" font-size="9">Needs very high pressure or \u2212253\u00b0C (cryogenic)</text>
  <rect x="0" y="130" width="580" height="40" fill="#f0fdf4"/>
  <text x="4" y="147" fill="#15803d">\u2714 Usable in fuel cells (highly efficient)</text>
  <text x="4" y="160" fill="#166534" font-size="9">No combustion needed; direct electricity generation</text>
  <text x="294" y="147" fill="#dc2626">\u2718 Highly flammable and explosive</text>
  <text x="294" y="160" fill="#7f1d1d" font-size="9">Safety concerns in storage and transport</text>
  <rect x="0" y="170" width="580" height="40" fill="#f8fafc"/>
  <text x="4" y="187" fill="#15803d">\u2714 Renewable if from electrolysis</text>
  <text x="4" y="200" fill="#166534" font-size="9">Using renewable electricity \u2192 green hydrogen</text>
  <text x="294" y="187" fill="#dc2626">\u2718 Electrolysis is energy-intensive</text>
  <text x="294" y="200" fill="#7f1d1d" font-size="9">Currently expensive; limited infrastructure</text>
  <rect x="0" y="210" width="580" height="42" fill="#f0fdf4"/>
  <text x="4" y="227" fill="#15803d">\u2714 No toxic combustion products</text>
  <text x="4" y="240" fill="#166534" font-size="9">No acid rain, no CO, no soot from combustion</text>
  <text x="294" y="227" fill="#dc2626">\u2718 Absent fuelling infrastructure</text>
  <text x="294" y="240" fill="#7f1d1d" font-size="9">Pipelines and stations largely absent</text>
  <line x1="290" y1="22" x2="290" y2="252" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Hydrogen as a fuel: environmentally clean at point of use, but storage, production, and infrastructure challenges remain.' } },
    { id: 'h-biofuels', type: 'heading', data: { text: 'Biofuels', level: 2 } },
    { id: 'callout-key-biofuel', type: 'callout', data: { style: 'key', title: 'Biofuel \u2014 Definition', text: 'A biofuel is a fuel produced from biological materials (biomass) \u2014 i.e. recently living organisms. Examples include bioethanol (fermented from sugars/starch), biodiesel (from plant oils), and biogas (methane from anaerobic digestion of organic waste).' } },
    { id: 'svg-biofuels', type: 'svg', data: { svg: `<svg viewBox="0 0 580 252" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Biofuels \u2014 Advantages and Disadvantages</text>
  <rect x="0" y="22" width="290" height="28" fill="#15803d" rx="3"/>
  <text x="145" y="40" text-anchor="middle" fill="white" font-weight="bold" font-size="11">ADVANTAGES</text>
  <rect x="290" y="22" width="290" height="28" fill="#dc2626" rx="3"/>
  <text x="435" y="40" text-anchor="middle" fill="white" font-weight="bold" font-size="11">DISADVANTAGES</text>
  <rect x="0" y="50" width="580" height="40" fill="#f0fdf4"/>
  <text x="4" y="67" fill="#15803d">\u2714 Renewable resource</text>
  <text x="4" y="80" fill="#166534" font-size="9">Crops can be replanted; not finite</text>
  <text x="294" y="67" fill="#dc2626">\u2718 Land use competition</text>
  <text x="294" y="80" fill="#7f1d1d" font-size="9">Competes with food crops; may cause deforestation</text>
  <rect x="0" y="90" width="580" height="40" fill="#f8fafc"/>
  <text x="4" y="107" fill="#15803d">\u2714 Approximately carbon neutral</text>
  <text x="4" y="120" fill="#166534" font-size="9">CO\u2082 released \u2248 CO\u2082 fixed during plant growth</text>
  <text x="294" y="107" fill="#dc2626">\u2718 Not truly carbon neutral</text>
  <text x="294" y="120" fill="#7f1d1d" font-size="9">Energy for farming, processing, transport adds CO\u2082</text>
  <rect x="0" y="130" width="580" height="40" fill="#f0fdf4"/>
  <text x="4" y="147" fill="#15803d">\u2714 Uses existing engine infrastructure</text>
  <text x="4" y="160" fill="#166534" font-size="9">Blended fuels (e.g. E10) need minimal engine changes</text>
  <text x="294" y="147" fill="#dc2626">\u2718 Lower energy density</text>
  <text x="294" y="160" fill="#7f1d1d" font-size="9">More fuel needed per km than petrol</text>
  <rect x="0" y="170" width="580" height="40" fill="#f8fafc"/>
  <text x="4" y="187" fill="#15803d">\u2714 Reduces fossil fuel dependence</text>
  <text x="4" y="200" fill="#166534" font-size="9">Improves energy security</text>
  <text x="294" y="187" fill="#dc2626">\u2718 Reduces biodiversity</text>
  <text x="294" y="200" fill="#7f1d1d" font-size="9">Monoculture farming harms local ecosystems</text>
  <rect x="0" y="210" width="580" height="42" fill="#f0fdf4"/>
  <text x="4" y="227" fill="#15803d">\u2714 Biogas uses organic waste</text>
  <text x="4" y="240" fill="#166534" font-size="9">Anaerobic digestion of waste \u2192 methane; reduces landfill</text>
  <text x="294" y="227" fill="#dc2626">\u2718 Uses food crops (corn, sugar cane)</text>
  <text x="294" y="240" fill="#7f1d1d" font-size="9">Ethical concern; raises food prices</text>
  <line x1="290" y1="22" x2="290" y2="252" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Biofuels: approximately carbon neutral and renewable, but land use, energy costs of production, and food competition are key disadvantages.' } },
    { id: 'h-bioethanol', type: 'heading', data: { text: 'Bioethanol', level: 2 } },
    { id: 'eq-bioethanol', type: 'equation', data: { html: 'C\u2082H\u2085OH + 3O\u2082 \u2192 2CO\u2082 + 3H\u2082O', caption: 'Complete combustion of ethanol.' } },
    { id: 'h-alcohol-fuel', type: 'heading', data: { text: 'Alcohols as Fuels', level: 2 } },
    { id: 'svg-alcohol', type: 'svg', data: { svg: `<svg viewBox="0 0 580 272" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Ethanol vs Petrol as an Engine Fuel</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="100" y="40" text-anchor="middle" fill="white" font-weight="bold">Property</text>
  <text x="385" y="40" text-anchor="middle" fill="white" font-weight="bold">Ethanol (E100)</text>
  <text x="530" y="40" text-anchor="middle" fill="white" font-weight="bold">Petrol</text>
  <rect x="0" y="50" width="580" height="37" fill="#f8fafc"/>
  <text x="4" y="72" fill="#374151" font-weight="bold">Energy density (MJ L\u207b\u00b9)</text>
  <text x="385" y="72" text-anchor="middle" fill="#dc2626">~21 MJ L\u207b\u00b9</text>
  <text x="530" y="72" text-anchor="middle" fill="#15803d">~34 MJ L\u207b\u00b9 (higher)</text>
  <rect x="0" y="87" width="580" height="37" fill="#f1f5f9"/>
  <text x="4" y="109" fill="#374151" font-weight="bold">CO\u2082 emissions</text>
  <text x="385" y="109" text-anchor="middle" fill="#15803d">~zero net (if bio-sourced)</text>
  <text x="530" y="109" text-anchor="middle" fill="#dc2626">~2.3 kg per litre</text>
  <rect x="0" y="124" width="580" height="37" fill="#f8fafc"/>
  <text x="4" y="146" fill="#374151" font-weight="bold">Octane rating</text>
  <text x="385" y="146" text-anchor="middle" fill="#15803d">~108 (less engine knock)</text>
  <text x="530" y="146" text-anchor="middle" fill="#374151">~87\u201398</text>
  <rect x="0" y="161" width="580" height="37" fill="#f1f5f9"/>
  <text x="4" y="183" fill="#374151" font-weight="bold">Miscibility with water</text>
  <text x="385" y="183" text-anchor="middle" fill="#dc2626">Fully miscible</text>
  <text x="530" y="183" text-anchor="middle" fill="#15803d">Immiscible</text>
  <rect x="0" y="198" width="580" height="37" fill="#f8fafc"/>
  <text x="4" y="220" fill="#374151" font-weight="bold">Corrosiveness</text>
  <text x="385" y="220" text-anchor="middle" fill="#dc2626">Can corrode rubber/plastics</text>
  <text x="530" y="220" text-anchor="middle" fill="#15803d">Minimal</text>
  <rect x="0" y="235" width="580" height="37" fill="#f1f5f9"/>
  <text x="4" y="257" fill="#374151" font-weight="bold">Water absorption</text>
  <text x="385" y="257" text-anchor="middle" fill="#dc2626">Hygroscopic (absorbs water)</text>
  <text x="530" y="257" text-anchor="middle" fill="#15803d">Not hygroscopic</text>
  <line x1="200" y1="22" x2="200" y2="272" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="480" y1="22" x2="480" y2="272" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Ethanol vs petrol: higher octane but lower energy density; hygroscopic and can corrode some engine parts.' } },
    { id: 'h-greenhouse', type: 'heading', data: { text: 'The Greenhouse Effect and Global Warming', level: 2 } },
    { id: 'callout-greenhouse', type: 'callout', data: { style: 'key', title: 'The Enhanced Greenhouse Effect', text: '<strong>Natural greenhouse effect:</strong> CO\u2082, CH\u2084, and H\u2082O vapour absorb infrared radiation emitted from Earth and re-radiate it in all directions, keeping Earth warm enough for life.<br/><strong>Enhanced greenhouse effect:</strong> Increased CO\u2082 (from burning fossil fuels) and CH\u2084 (from livestock, landfill) trap more IR radiation \u2192 global warming.<br/><strong>Key facts:</strong> Pre-industrial CO\u2082 ~280 ppm; current level ~422 ppm (NOAA, 2024). CH\u2084 is ~28\u00d7 more potent than CO\u2082 over 100 years.<br/><strong>Consequences:</strong> Rising sea levels, more extreme weather, ecosystem disruption, ocean acidification.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '&#x2022; "Carbon neutral" means net CO\u2082 = zero over the life cycle \u2014 not zero CO\u2082 at the point of combustion.<br/>&#x2022; Hydrogen&#x2019;s only combustion product is water \u2014 always state this clearly.<br/>&#x2022; For biofuels, always evaluate BOTH advantages and disadvantages \u2014 exam questions often ask for a balanced assessment.<br/>&#x2022; The enhanced greenhouse effect is caused by INCREASED concentrations of greenhouse gases from human activity.' } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '&#x2022; Saying biofuels are "carbon neutral" without qualification \u2014 in practice they are not, due to energy costs of production.<br/>&#x2022; Confusing the greenhouse effect (natural, necessary) with the enhanced greenhouse effect (human-caused, problematic).<br/>&#x2022; Saying hydrogen "produces no pollution" without noting that current H\u2082 production is mainly from fossil fuels.' } }
  ],
  recall: {
    enabled: true,
    summaryText: 'H\u2082: clean combustion (H\u2082O only) but storage (cryogenic or compressed) and infrastructure issues; most H\u2082 from fossil fuels currently. Biofuels: approximately carbon neutral, renewable but land use concerns. Ethanol: higher octane than petrol but lower energy density. Enhanced greenhouse effect: increased CO\u2082/CH\u2084 from fossil fuels traps more IR radiation.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-cn', prompt: 'Define carbon neutral. In what way are biofuels only approximately carbon neutral?' },
      { id: 'cue-2', blockId: 'svg-hydrogen', prompt: 'Give 3 advantages and 3 disadvantages of hydrogen as a fuel.' },
      { id: 'cue-3', blockId: 'svg-biofuels', prompt: 'Give 3 advantages and 3 disadvantages of biofuels.' },
      { id: 'cue-4', blockId: 'svg-alcohol', prompt: 'How does ethanol compare to petrol as an engine fuel in terms of energy density, octane rating, and water absorption?' },
      { id: 'cue-5', blockId: 'callout-greenhouse', prompt: 'Explain the enhanced greenhouse effect. What is the current atmospheric CO\u2082 concentration and two consequences of global warming?' }
    ],
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH11 Specification', detail: 'Alternative fuels, carbon neutrality and greenhouse effect are required content for Topic 4.', year: '2018', source: 'Pearson Edexcel', tags: ['biofuels', 'hydrogen', 'carbon neutral', 'greenhouse'] }
  ],
  mentions: []
};
"""

# Write files
with open(os.path.join(BASE, 'note_1_4_9.js'), 'w', encoding='utf-8') as f:
    f.write(content_9)
print(f"Written: note_1_4_9.js ({len(content_9)} bytes)")

with open(os.path.join(BASE, 'note_1_4_10.js'), 'w', encoding='utf-8') as f:
    f.write(content_10)
print(f"Written: note_1_4_10.js ({len(content_10)} bytes)")

with open(os.path.join(BASE, 'note_1_4_11.js'), 'w', encoding='utf-8') as f:
    f.write(content_11)
print(f"Written: note_1_4_11.js ({len(content_11)} bytes)")

print("Batch 4 complete.")
