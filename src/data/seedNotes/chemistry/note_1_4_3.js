/**
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
  ,
    {
      id: 'callout-exam-4-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Error: Conservation of Atoms",
        text: "In cracking equations, ensure the number of carbon AND hydrogen atoms balances exactly. A common mistake is producing too many alkene molecules and exceeding the reactant's initial hydrogen count."
      }
    }
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
