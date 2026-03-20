#!/usr/bin/env python3
"""Topic 4 · Batch 2: notes 3, 4, 5"""
import os
BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/chemistry'
def w(fname, txt):
    with open(os.path.join(BASE, fname), 'w') as f: f.write(txt)
    print(f'Written: {fname} ({txt.count(chr(10))} lines)')

# ═══ note_1_4_3: Crude oil, fractional distillation, cracking ════════════════
w('note_1_4_3.js', r"""/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 3
 * "Alkanes from crude oil — fractional distillation and cracking"
 */
export const note_chemistry_1_4_3 = {
  blocks: [
    { id: 'objective', type: 'objective', data: { text: 'Know that alkanes are obtained from crude oil by fractional distillation. Know the process of cracking and why it is economically important. Distinguish between thermal and catalytic cracking. Understand reforming.' } },
    { id: 'h-fd', type: 'heading', data: { text: 'Fractional Distillation of Crude Oil', level: 2 } },
    { id: 'svg-column', type: 'svg', data: {
      caption: 'Fractionating column — fractions condense at different temperatures based on chain length',
      svg: `<svg viewBox="0 0 580 390" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><text x="290" y="16" text-anchor="middle" font-weight="bold" fill="#1e293b" font-size="13">Fractional Distillation of Crude Oil</text><rect x="210" y="25" width="120" height="330" rx="4" fill="none" stroke="#475569" stroke-width="2"/><rect x="211" y="26" width="118" height="66" rx="3" fill="#bfdbfe"/><rect x="211" y="92" width="118" height="66" fill="#bbf7d0"/><rect x="211" y="158" width="118" height="66" fill="#fef08a"/><rect x="211" y="224" width="118" height="66" fill="#fed7aa"/><rect x="211" y="290" width="118" height="64" rx="3" fill="#d1d5db"/><line x1="211" y1="92" x2="329" y2="92" stroke="#475569" stroke-width="1"/><line x1="211" y1="158" x2="329" y2="158" stroke="#475569" stroke-width="1"/><line x1="211" y1="224" x2="329" y2="224" stroke="#475569" stroke-width="1"/><line x1="211" y1="290" x2="329" y2="290" stroke="#475569" stroke-width="1"/><text x="270" y="50" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="11">Gases / LPG</text><text x="270" y="63" text-anchor="middle" fill="#374151" font-size="10">C₁–C₄</text><text x="270" y="76" text-anchor="middle" fill="#374151" font-size="10">&lt; 25 °C</text><text x="270" y="116" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="11">Gasoline/Naphtha</text><text x="270" y="129" text-anchor="middle" fill="#374151" font-size="10">C₅–C₁₀</text><text x="270" y="143" text-anchor="middle" fill="#374151" font-size="10">25–100 °C</text><text x="270" y="182" text-anchor="middle" fill="#ca8a04" font-weight="bold" font-size="11">Kerosene</text><text x="270" y="195" text-anchor="middle" fill="#374151" font-size="10">C₁₀–C₁₅</text><text x="270" y="209" text-anchor="middle" fill="#374151" font-size="10">150–250 °C</text><text x="270" y="248" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="11">Diesel / Gas oil</text><text x="270" y="261" text-anchor="middle" fill="#374151" font-size="10">C₁₅–C₂₀</text><text x="270" y="275" text-anchor="middle" fill="#374151" font-size="10">250–350 °C</text><text x="270" y="314" text-anchor="middle" fill="#374151" font-weight="bold" font-size="11">Residue / Bitumen</text><text x="270" y="327" text-anchor="middle" fill="#374151" font-size="10">&gt; C₂₀</text><text x="270" y="341" text-anchor="middle" fill="#374151" font-size="10">&gt; 350 °C</text><line x1="50" y1="30" x2="50" y2="355" stroke="#94a3b8" stroke-width="1.5"/><text x="45" y="30" text-anchor="end" fill="#64748b" font-size="10">COOL</text><text x="45" y="358" text-anchor="end" fill="#ef4444" font-size="10">HOT</text><text x="48" y="62" text-anchor="end" fill="#374151" font-size="9">&lt;25°C</text><text x="48" y="128" text-anchor="end" fill="#374151" font-size="9">25°C</text><text x="48" y="194" text-anchor="end" fill="#374151" font-size="9">150°C</text><text x="48" y="260" text-anchor="end" fill="#374151" font-size="9">250°C</text><text x="48" y="326" text-anchor="end" fill="#374151" font-size="9">350°C+</text><text x="340" y="50" fill="#0369a1" font-size="10">Cooking gas, camping</text><text x="340" y="116" fill="#15803d" font-size="10">Car fuel, feedstock</text><text x="340" y="182" fill="#ca8a04" font-size="10">Jet fuel / aviation</text><text x="340" y="248" fill="#c2410c" font-size="10">Diesel engines, heating</text><text x="340" y="320" fill="#374151" font-size="10">Road surfacing, roofing</text><rect x="185" y="362" width="170" height="22" rx="4" fill="#fee2e2"/><text x="270" y="377" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold">Heat applied at base</text></svg>`
    }},
    { id: 'callout-trends', type: 'callout', data: {
      style: 'key', title: 'Physical Properties vs Chain Length',
      text: 'As the hydrocarbon chain length increases, London dispersion forces increase. This causes:<br/>&#x2022; <strong>Boiling point:</strong> Increases<br/>&#x2022; <strong>Volatility:</strong> Decreases (less easily evaporated)<br/>&#x2022; <strong>Viscosity:</strong> Increases (becomes thicker, flows less easily)<br/>&#x2022; <strong>Flammability:</strong> Decreases (harder to ignite)<br/>&#x2022; <strong>Colour:</strong> Becomes darker (from colourless gas to dark viscous liquid)'
    }},
    { id: 'h-cracking', type: 'heading', data: { text: 'Cracking', level: 2 } },
    { id: 'svg-cracking', type: 'svg', data: {
      caption: 'Thermal vs catalytic cracking — conditions and products compared',
      svg: `<svg viewBox="0 0 580 210" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="290" y="22" fill="white" font-weight="bold" font-size="13" text-anchor="middle">Cracking — Breaking Long Hydrocarbon Chains into Shorter, More Useful Ones</text><rect x="2" y="38" width="284" height="170" rx="6" fill="#fef9c3" stroke="#fbbf24" stroke-width="1.5"/><rect x="294" y="38" width="284" height="170" rx="6" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/><text x="144" y="56" text-anchor="middle" font-weight="bold" fill="#78350f" font-size="13">THERMAL CRACKING</text><text x="436" y="56" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="13">CATALYTIC CRACKING</text><text x="10" y="75" fill="#374151" font-size="11">Temperature: ~750°C</text><text x="302" y="75" fill="#374151" font-size="11">Temperature: ~450°C</text><text x="10" y="93" fill="#374151" font-size="11">Pressure: high</text><text x="302" y="93" fill="#374151" font-size="11">Pressure: low (near atmospheric)</text><text x="10" y="111" fill="#374151" font-size="11">Catalyst: none</text><text x="302" y="111" fill="#374151" font-size="11">Catalyst: zeolite (aluminosilicate)</text><text x="10" y="129" fill="#78350f" font-weight="bold" font-size="11">Products: mostly alkenes</text><text x="302" y="129" fill="#1d4ed8" font-weight="bold" font-size="11">Products: aromatics + branched alkanes</text><text x="10" y="147" fill="#374151" font-size="10">Good for manufacturing polymers</text><text x="302" y="147" fill="#374151" font-size="10">Better petrol octane rating</text><text x="10" y="165" fill="#374151" font-size="11">Mechanism: homolytic fission</text><text x="302" y="165" fill="#374151" font-size="11">Mechanism: ionic (carbocations)</text><text x="10" y="183" fill="#374151" font-size="10">→ free radical intermediates</text><text x="302" y="183" fill="#374151" font-size="10">→ heterolytic fission</text><text x="10" y="200" fill="#64748b" font-size="10">e.g. C₁₅H₃₂ → C₈H₁₈ + C₅H₁₀ + C₂H₄</text><text x="302" y="200" fill="#64748b" font-size="10">e.g. long chain → C₆H₆ + branched alkane</text></svg>`
    }},
    { id: 'callout-example', type: 'callout', data: {
      style: 'worked', title: 'Example Cracking Equation',
      text: 'C&#x2081;&#x2085;H&#x2083;&#x2082; &#x2192; C&#x2088;H&#x2081;&#x2088; + C&#x2085;H&#x2081;&#x2080; + C&#x2082;H&#x2084;<br/>(pentadecane &#x2192; octane + pentene + ethene)<br/><br/>Check: C atoms: 15 = 8+5+2 &#x2713; · H atoms: 32 = 18+10+4 &#x2713;<br/>At least one product must be an <strong>alkene</strong> (CₙH₂ₙ) as H must balance.'
    }},
    { id: 'callout-cracking-experiment', type: 'callout', data: {
      style: 'warning', title: 'Lab Cracking Safety — Preventing Suck-Back',
      text: 'In lab cracking, medicinal oil is heated over a catalyst (e.g. ceramic chips) and the gaseous product is collected over water.<br/><br/><strong>Critical:</strong> The delivery tube MUST be removed from the water <em>before</em> the heat is removed. If the heat stops first, cooling gas contracts and sucks cold water back into the hot test tube, causing it to crack (shatter)!'
    }},
    { id: 'h-reforming', type: 'heading', data: { text: 'Reforming', level: 2 } },
    { id: 'callout-reforming-examples', type: 'callout', data: {
      style: 'worked', title: 'Reforming — Converting Straight Chains to Branched/Cyclic',
      text: 'Reforming uses a <strong>platinum catalyst</strong> to convert straight-chain alkanes into branched/cyclic forms that burn more smoothly in engines (reducing &#x201C;knocking&#x201D;).<br/><br/>1. <strong>Straight &#x2192; cyclic:</strong> Pentane &#x2192; Cyclopentane + H&#x2082; (C&#x2085;H&#x2081;&#x2082; &#x2192; C&#x2085;H&#x2081;&#x2080; + H&#x2082;)<br/>2. <strong>Straight &#x2192; aromatic:</strong> Heptane &#x2192; Methylbenzene + 4H&#x2082; (C&#x2087;H&#x2081;&#x2086; &#x2192; C&#x2087;H&#x2088; + 4H&#x2082;)'
    }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'svg-column', prompt: 'State the approximate carbon chain length and boiling point range for: gases/LPG, gasoline, kerosene, and diesel fractions.' },
      { id: 'c2', blockId: 'callout-trends', prompt: 'Explain how boiling point, volatility, viscosity, and flammability change as hydrocarbon chain length increases.' },
      { id: 'c3', blockId: 'svg-cracking', prompt: 'Compare thermal and catalytic cracking in terms of temperature, catalyst, and type of products formed.' },
      { id: 'c4', blockId: 'callout-cracking-experiment', prompt: 'Why must the delivery tube be removed from the water before stopping the heat in lab cracking?' }
    ],
    summaryText: 'Crude oil = mixture of hydrocarbons separated by fractional distillation (longer chain = higher bp, more viscous). Cracking = breaking large alkanes into smaller, more useful ones. Thermal cracking: ~750°C, high pressure, no catalyst, makes alkenes (free radical). Catalytic cracking: ~450°C, low pressure, zeolite, makes aromatics/branched alkanes (ionic). Reforming: Pt catalyst, straight → branched/cyclic for better fuel quality.',
    ready: false
  },
  evidence: [], mentions: []
};
""")

# ═══ note_1_4_4: Combustion of alkanes ═══════════════════════════════════════
w('note_1_4_4.js', r"""/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 4
 * "Alkanes as fuels — combustion"
 */
export const note_chemistry_1_4_4 = {
  blocks: [
    { id: 'objective', type: 'objective', data: { text: 'Write balanced equations for complete and incomplete combustion of alkanes. Understand the environmental problems caused by combustion products. Know the role of catalytic converters. Compare alternative fuels.' } },
    { id: 'h-complete', type: 'heading', data: { text: 'Complete Combustion', level: 2 } },
    { id: 'callout-complete', type: 'callout', data: {
      style: 'key', title: 'Complete Combustion — excess O₂',
      text: 'Alkane + <em>excess</em> oxygen &#x2192; <strong>CO&#x2082;</strong> + <strong>H&#x2082;O</strong> only<br/><br/>General: Cₙ H₂ₙ₊₂ + (3n+1)/2 O&#x2082; &#x2192; n CO&#x2082; + (n+1) H&#x2082;O<br/><br/><strong>Methane:</strong> CH&#x2084;(g) + 2O&#x2082;(g) &#x2192; CO&#x2082;(g) + 2H&#x2082;O(l)<br/><strong>Octane:</strong> C&#x2088;H&#x2081;&#x2088;(l) + 25/2 O&#x2082;(g) &#x2192; 8CO&#x2082;(g) + 9H&#x2082;O(l)'
    }},
    { id: 'h-incomplete', type: 'heading', data: { text: 'Incomplete Combustion', level: 2 } },
    { id: 'callout-incomplete', type: 'callout', data: {
      style: 'key', title: 'Incomplete Combustion — limited O₂',
      text: 'When oxygen is limited: products include <strong>CO</strong> and/or <strong>C (soot)</strong> as well as H&#x2082;O.<br/><br/><strong>CO formation:</strong> 2CH&#x2084;(g) + 3O&#x2082;(g) &#x2192; 2CO(g) + 4H&#x2082;O(l)<br/><strong>Soot formation:</strong> CH&#x2084;(g) + O&#x2082;(g) &#x2192; C(s) + 2H&#x2082;O(l)<br/><br/>CO is <strong>toxic</strong>: binds irreversibly to haemoglobin, preventing O&#x2082; transport.'
    }},
    { id: 'h-pollutants', type: 'heading', data: { text: 'Combustion Pollutants', level: 2 } },
    { id: 'svg-pollutants', type: 'svg', data: {
      caption: 'Key pollutants from burning fossil fuels — source, problem and solution',
      svg: `<svg viewBox="0 0 580 255" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="55" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Pollutant</text><text x="175" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Source</text><text x="370" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Problem</text><text x="516" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Solution</text><line x1="100" y1="0" x2="100" y2="255" stroke="#475569" stroke-width="1"/><line x1="250" y1="0" x2="250" y2="255" stroke="#475569" stroke-width="1"/><line x1="490" y1="0" x2="490" y2="255" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="44" fill="#fef2f2"/><text x="10" y="58" font-weight="bold" fill="#dc2626" font-size="12">CO₂</text><text x="107" y="52" fill="#374151" font-size="10">Complete combustion</text><text x="107" y="66" fill="#374151" font-size="10">of any fossil fuel</text><text x="257" y="52" fill="#374151" font-size="10">Greenhouse gas — traps IR</text><text x="257" y="66" fill="#374151" font-size="10">radiation → global warming</text><text x="497" y="58" fill="#374151" font-size="10">Use less fossil fuel</text><rect x="0" y="78" width="580" height="44" fill="#fff7ed"/><text x="10" y="102" font-weight="bold" fill="#c2410c" font-size="12">CO</text><text x="107" y="96" fill="#374151" font-size="10">Incomplete combustion</text><text x="107" y="110" fill="#374151" font-size="10">(limited O₂)</text><text x="257" y="96" fill="#374151" font-size="10">Toxic — binds Hb; reduces</text><text x="257" y="110" fill="#374151" font-size="10">O₂ transport; odourless</text><text x="497" y="102" fill="#374151" font-size="10">Catalytic converter</text><rect x="0" y="122" width="580" height="44" fill="#fefce8"/><text x="10" y="144" font-weight="bold" fill="#ca8a04" font-size="12">NOₓ</text><text x="107" y="138" fill="#374151" font-size="10">High-temperature combustion</text><text x="107" y="152" fill="#374151" font-size="10">N₂ + O₂ react in engines</text><text x="257" y="138" fill="#374151" font-size="10">Acid rain; photochemical smog;</text><text x="257" y="152" fill="#374151" font-size="10">respiratory irritant</text><text x="497" y="144" fill="#374151" font-size="10">Catalytic converter</text><rect x="0" y="166" width="580" height="44" fill="#f0fdf4"/><text x="10" y="188" font-weight="bold" fill="#15803d" font-size="12">SO₂</text><text x="107" y="182" fill="#374151" font-size="10">Combustion of S-containing</text><text x="107" y="196" fill="#374151" font-size="10">fossil fuels</text><text x="257" y="182" fill="#374151" font-size="10">Acid rain: SO₂ + H₂O →</text><text x="257" y="196" fill="#374151" font-size="10">H₂SO₄; damages ecosystems</text><text x="497" y="188" fill="#374151" font-size="10">Desulfurisation of fuels</text><rect x="0" y="210" width="580" height="44" fill="#f5f3ff"/><text x="10" y="232" font-weight="bold" fill="#6d28d9" font-size="10">Soot (C)</text><text x="107" y="226" fill="#374151" font-size="10">Incomplete combustion</text><text x="107" y="240" fill="#374151" font-size="10">(very limited O₂)</text><text x="257" y="226" fill="#374151" font-size="10">Particulate pollution;</text><text x="257" y="240" fill="#374151" font-size="10">lung damage; cancer risk</text><text x="497" y="232" fill="#374151" font-size="10">Ensure sufficient O₂</text><rect x="0" y="0" width="580" height="255" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'callout-converter', type: 'callout', data: {
      style: 'key', title: 'Catalytic Converter (Pt/Rh catalyst)',
      text: 'Fitted to car exhausts; contains platinum/rhodium catalyst. Converts harmful gases to less harmful ones:<br/>&#x2022; CO + &#xBD;O&#x2082; &#x2192; CO&#x2082;<br/>&#x2022; 2NOₓ &#x2192; N&#x2082; + xO&#x2082;<br/>&#x2022; Unburnt hydrocarbons + O&#x2082; &#x2192; CO&#x2082; + H&#x2082;O<br/><br/>Overall: oxidises CO and hydrocarbons; reduces NOₓ to N&#x2082;.'
    }},
    { id: 'h-alt', type: 'heading', data: { text: 'Alternative Fuels', level: 2 } },
    { id: 'callout-carbon-neutral', type: 'callout', data: {
      style: 'key', title: 'Carbon Neutrality',
      text: 'A fuel is <strong>carbon neutral</strong> if burning it has zero net effect on atmospheric CO&#x2082;. For biofuels: CO&#x2082; absorbed by plants during growth equals CO&#x2082; released on combustion.<br/><br/>In practice, CO&#x2082; from transport, fertilisers, and processing means biofuels are <em>not</em> truly carbon neutral — but they are closer to neutral than fossil fuels.'
    }},
    { id: 'svg-alt-fuels', type: 'svg', data: {
      caption: 'Comparison of alternative fuels (bioethanol, hydrogen) vs natural gas',
      svg: `<svg viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="80" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Factor</text><text x="255" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Bioethanol (Biofuel)</text><text x="405" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Natural Gas</text><text x="520" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Hydrogen H₂</text><line x1="148" y1="0" x2="148" y2="220" stroke="#475569" stroke-width="1"/><line x1="335" y1="0" x2="335" y2="220" stroke="#475569" stroke-width="1"/><line x1="463" y1="0" x2="463" y2="220" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="46" fill="#f0fdf4"/><text x="10" y="53" font-weight="bold" fill="#15803d" font-size="11">Source</text><text x="155" y="53" fill="#374151" font-size="10">Sugarcane/crops</text><text x="155" y="66" fill="#15803d" font-size="10">RENEWABLE</text><text x="342" y="53" fill="#374151" font-size="10">Underground fossil fuel</text><text x="342" y="66" fill="#dc2626" font-size="10">NON-RENEWABLE</text><text x="470" y="53" fill="#374151" font-size="10">Electrolysis of water</text><text x="470" y="66" fill="#0369a1" font-size="10">renewable if green energy</text><rect x="0" y="80" width="580" height="46" fill="#fefce8"/><text x="10" y="99" font-weight="bold" fill="#92400e" font-size="11">CO₂</text><text x="155" y="99" fill="#374151" font-size="10">Near carbon-neutral in theory</text><text x="155" y="113" fill="#64748b" font-size="10">(transport/fertiliser add CO₂)</text><text x="342" y="99" fill="#dc2626" font-size="10">Not carbon neutral</text><text x="470" y="99" fill="#15803d" font-size="10">Burns to H₂O only — no CO₂!</text><text x="470" y="113" fill="#64748b" font-size="10">(if green electricity used)</text><rect x="0" y="126" width="580" height="46" fill="#f0f9ff"/><text x="10" y="145" font-weight="bold" fill="#0369a1" font-size="11">Issues</text><text x="155" y="145" fill="#374151" font-size="10">Large land area for crops;</text><text x="155" y="159" fill="#374151" font-size="10">food vs fuel debate</text><text x="342" y="145" fill="#374151" font-size="10">Finite resource; CO₂ from</text><text x="342" y="159" fill="#374151" font-size="10">combustion and extraction</text><text x="470" y="145" fill="#374151" font-size="10">Explosive; requires high-</text><text x="470" y="159" fill="#374151" font-size="10">pressure storage tanks</text><rect x="0" y="172" width="580" height="48" fill="#fdf4ff"/><text x="10" y="191" font-weight="bold" fill="#7c3aed" font-size="11">Transport</text><text x="155" y="191" fill="#374151" font-size="10">Liquid — easy, like petrol</text><text x="342" y="191" fill="#374151" font-size="10">Requires pipelines</text><text x="470" y="191" fill="#374151" font-size="10">Pressurised tanks needed</text><rect x="0" y="0" width="580" height="220" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-complete', prompt: 'Write a balanced equation for the complete combustion of propane (C₃H₈).' },
      { id: 'c2', blockId: 'callout-incomplete', prompt: 'What products form in incomplete combustion? Explain why CO is particularly dangerous.' },
      { id: 'c3', blockId: 'svg-pollutants', prompt: 'State two environmental problems caused by NOₓ emissions from car engines.' },
      { id: 'c4', blockId: 'callout-converter', prompt: 'Explain how a catalytic converter reduces pollution. Write equations for the conversion of CO and NOₓ.' },
      { id: 'c5', blockId: 'callout-carbon-neutral', prompt: 'What is meant by carbon neutral? Explain why biofuels are not truly carbon neutral in practice.' },
      { id: 'c6', blockId: 'svg-alt-fuels', prompt: 'Compare hydrogen and bioethanol as alternative fuels in terms of CO₂ output and storage difficulties.' }
    ],
    summaryText: 'Complete combustion: alkane + O₂ → CO₂ + H₂O. Incomplete: limited O₂ → CO (toxic, binds Hb) and soot. Pollutants: CO₂ (greenhouse), CO (toxic), NOₓ (acid rain), SO₂ (acid rain), soot. Catalytic converter: CO→CO₂, NOₓ→N₂. Carbon neutral = net zero CO₂. H₂ burns to H₂O only but explosive; bioethanol near-neutral but needs land.',
    ready: false
  },
  evidence: [], mentions: []
};
""")

# ═══ note_1_4_5: Free radical substitution ═══════════════════════════════════
w('note_1_4_5.js', r"""/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 5
 * "Free radical substitution of alkanes"
 */
export const note_chemistry_1_4_5 = {
  blocks: [
    { id: 'objective', type: 'objective', data: { text: 'Describe the mechanism of free radical substitution (FRS) of alkanes with halogens. Write equations for all three stages: initiation, propagation, and termination. Know the role of UV light and half-curly arrows.' } },
    { id: 'h-overview', type: 'heading', data: { text: 'Overview: Free Radical Substitution', level: 2 } },
    { id: 'svg-overview', type: 'svg', data: {
      caption: 'Free radical substitution of methane — three stages in order',
      svg: `<svg viewBox="0 0 580 175" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="2" y="2" width="173" height="171" rx="8" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/><rect x="203" y="2" width="173" height="171" rx="8" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1.5"/><rect x="404" y="2" width="173" height="171" rx="8" fill="#fef3c7" stroke="#fcd34d" stroke-width="1.5"/><text x="88" y="22" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="13">1. INITIATION</text><text x="289" y="22" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">2. PROPAGATION</text><text x="490" y="22" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="13">3. TERMINATION</text><text x="88" y="40" text-anchor="middle" fill="#374151" font-size="10">UV light required</text><text x="289" y="40" text-anchor="middle" fill="#374151" font-size="10">Two alternating steps; chain process</text><text x="490" y="40" text-anchor="middle" fill="#374151" font-size="10">Any two radicals combine</text><text x="10" y="65" font-family="monospace" fill="#1d4ed8" font-size="11">Cl₂ →(UV) 2 Cl•</text><text x="10" y="85" fill="#374151" font-size="10">Homolytic fission of Cl–Cl;</text><text x="10" y="98" fill="#374151" font-size="10">each Cl gets 1 electron.</text><text x="10" y="112" fill="#374151" font-size="10">Forms 2 chlorine radicals.</text><text x="10" y="130" fill="#64748b" font-size="10">Half-curly arrows show</text><text x="10" y="143" fill="#64748b" font-size="10">movement of ONE electron.</text><text x="10" y="157" fill="#1d4ed8" font-size="10">Must say: UV light needed.</text><text x="210" y="62" font-family="monospace" fill="#15803d" font-size="10">Step1: Cl• + CH₄ → HCl + CH₃•</text><text x="210" y="79" fill="#374151" font-size="10">Cl• abstracts an H from CH₄;</text><text x="210" y="92" fill="#374151" font-size="10">HCl formed + methyl radical.</text><text x="210" y="112" font-family="monospace" fill="#15803d" font-size="10">Step2: CH₃• + Cl₂ → CH₃Cl + Cl•</text><text x="210" y="129" fill="#374151" font-size="10">Methyl radical attacks Cl₂;</text><text x="210" y="142" fill="#374151" font-size="10">CH₃Cl formed + Cl• regenerated.</text><text x="210" y="158" fill="#15803d" font-size="10">Cycle repeats → lots of CH₃Cl.</text><text x="412" y="62" font-family="monospace" fill="#92400e" font-size="10">Cl• + Cl• → Cl₂</text><text x="412" y="78" font-family="monospace" fill="#92400e" font-size="10">CH₃• + CH₃• → C₂H₆</text><text x="412" y="94" font-family="monospace" fill="#92400e" font-size="10">CH₃• + Cl• → CH₃Cl</text><text x="412" y="116" fill="#374151" font-size="10">Two radicals combine;</text><text x="412" y="129" fill="#374151" font-size="10">no new radical formed.</text><text x="412" y="143" fill="#374151" font-size="10">Chain reaction stops.</text><text x="412" y="158" fill="#dc2626" font-size="10">C₂H₆ = unexpected by-product!</text><path d="M 178 85 L 200 85" stroke="#374151" stroke-width="2" marker-end="url(#arr)"/><path d="M 379 85 L 401 85" stroke="#374151" stroke-width="2" marker-end="url(#arr)"/><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#374151"/></marker></defs></svg>`
    }},
    { id: 'h-stages', type: 'heading', data: { text: 'The Three Stages — Detail', level: 2 } },
    { id: 'callout-init', type: 'callout', data: {
      style: 'key', title: 'Stage 1: Initiation',
      text: 'UV light causes <strong>homolytic fission</strong> of the Cl–Cl bond. Each Cl atom takes one electron from the shared pair, forming two chlorine radicals.<br/><br/>Cl&#x2082; &#x2192; 2Cl&#x2022; (UV light required)<br/><br/>The movement of a <em>single</em> electron is shown by a <strong>half-curly (fish-hook) arrow</strong> (&#x22C5;&#x25CB; &#x21BD;). A free radical has an unpaired electron, shown as &#x2022;.'
    }},
    { id: 'callout-prop', type: 'callout', data: {
      style: 'key', title: 'Stage 2: Propagation (two repeating steps)',
      text: '<strong>Step 1:</strong> Cl&#x2022; + CH&#x2084; &#x2192; HCl + CH&#x2083;&#x2022;<br/>Chlorine radical abstracts H from methane &#x2192; HCl + methyl radical.<br/><br/><strong>Step 2:</strong> CH&#x2083;&#x2022; + Cl&#x2082; &#x2192; CH&#x2083;Cl + Cl&#x2022;<br/>Methyl radical reacts with Cl&#x2082; &#x2192; chloromethane + Cl&#x2022; regenerated for step 1.<br/><br/>These steps are <strong>exothermic</strong> and repeat many thousands of times — the main source of CH&#x2083;Cl product.'
    }},
    { id: 'callout-term', type: 'callout', data: {
      style: 'key', title: 'Stage 3: Termination',
      text: 'The chain ends when any two radicals combine (producing no new radicals):<br/><br/>Cl&#x2022; + Cl&#x2022; &#x2192; Cl&#x2082;<br/>CH&#x2083;&#x2022; + CH&#x2083;&#x2022; &#x2192; C&#x2082;H&#x2086;<br/>CH&#x2083;&#x2022; + Cl&#x2022; &#x2192; CH&#x2083;Cl<br/><br/><strong>Note:</strong> Termination can produce unexpected by-products such as ethane (C&#x2082;H&#x2086;).'
    }},
    { id: 'callout-exam-trick', type: 'callout', data: {
      style: 'warning', title: 'Why is most CH₃Cl from propagation, not termination?',
      text: 'In propagation, CH&#x2083;Cl is produced <em>alongside a new Cl&#x2022; radical</em> — the cycle repeats continuously, accumulating large amounts of product.<br/><br/>In termination, radicals combine and the chain <em>stops</em> — very little product comes from this stage.<br/><br/>Therefore, the vast majority of chloromethane comes from the repeating propagation cycle.'
    }},
    { id: 'callout-further', type: 'callout', data: {
      style: 'warning', title: 'Mixture of Products — Further Substitution',
      text: 'FRS produces a mixture because substitution continues:<br/>CH&#x2084; &#x2192; CH&#x2083;Cl &#x2192; CH&#x2082;Cl&#x2082; &#x2192; CHCl&#x2083; &#x2192; CCl&#x2084;<br/>(chloromethane &#x2192; di &#x2192; tri &#x2192; tetrachloromethane)<br/><br/>This is why FRS is not used for producing pure single products — the mixture is difficult and expensive to separate.'
    }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-init', prompt: 'Describe the initiation step of FRS of methane with Cl₂. What type of bond breaking occurs and what does a half-curly arrow show?' },
      { id: 'c2', blockId: 'callout-prop', prompt: 'Write the two propagation steps for the chlorination of methane with Cl₂.' },
      { id: 'c3', blockId: 'callout-term', prompt: 'Write three possible termination steps for the chlorination of methane. What unexpected product commonly forms?' },
      { id: 'c4', blockId: 'callout-exam-trick', prompt: 'Explain why much more chloromethane is formed during propagation than in the termination step.' },
      { id: 'c5', blockId: 'callout-further', prompt: 'Why does FRS give a mixture of products? How does this limit its usefulness as a synthesis route?' }
    ],
    summaryText: 'FRS = H replaced by halogen in alkane; requires UV light. Initiation: UV → homolytic fission Cl₂ → 2Cl• (half-curly arrows). Propagation: Cl• + CH₄ → HCl + CH₃•; then CH₃• + Cl₂ → CH₃Cl + Cl• (chain repeats). Termination: two radicals combine, chain stops (gives unexpected products like C₂H₆). Most product comes from propagation.',
    ready: false
  },
  evidence: [], mentions: []
};
""")

print('Batch 2 complete — notes 3, 4, 5.')
