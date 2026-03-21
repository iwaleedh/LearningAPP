export const note_chemistry_1_4_10 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Write equations for complete and incomplete combustion of alkanes; explain the formation and environmental impact of combustion pollutants.' } },
    { id: 'h-combustion', type: 'heading', data: { text: 'Combustion of Alkanes', level: 2 } },
    { id: 'h-complete', type: 'heading', data: { text: 'Complete Combustion', level: 2 } },
    { id: 'callout-key-complete', type: 'callout', data: { style: 'key', title: 'Complete Combustion', text: 'When an alkane burns in excess oxygen, complete combustion occurs producing only carbon dioxide (CO₂) and water (H₂O). No pollutants other than CO₂ are formed.' } },
    { id: 'eq-methane', type: 'equation', data: { html: 'CH₄ + 2O₂ → CO₂ + 2H₂O', caption: 'Complete combustion of methane — ΔH is highly exothermic.' } },
    { id: 'eq-octane', type: 'equation', data: { html: '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O', caption: 'Complete combustion of octane (a major component of petrol).' } },
    { id: 'eq-general', type: 'equation', data: { html: 'CₙH₂ₙ₊₂ + <span class="nb-frac"><span class="nb-num">3n+1</span><span class="nb-den">2</span></span>O₂ → nCO₂ + (n+1)H₂O', caption: 'General equation for complete combustion of alkane CₙH₂ₙ₊₂.' } },
    { id: 'h-incomplete', type: 'heading', data: { text: 'Incomplete Combustion', level: 2 } },
    { id: 'callout-key-incomplete', type: 'callout', data: { style: 'key', title: 'Incomplete Combustion', text: 'When oxygen supply is limited, incomplete combustion occurs. Products include carbon monoxide (CO), carbon (soot/particulates), and water — as well as some unburned hydrocarbons. Less energy is released than in complete combustion.' } },
    { id: 'eq-incomplete', type: 'equation', data: { html: '2CH₄ + 3O₂ → 2CO + 4H₂O &nbsp;(limited O₂ → CO)', caption: 'Incomplete combustion of methane producing toxic carbon monoxide.' } },
    { id: 'h-combustion-trends', type: 'heading', data: { text: 'Trends in Flammability and Combustion', level: 2 } },
    { id: 'callout-combustion-trends', type: 'callout', data: { style: 'key', title: 'How Chain Length Affects Combustion', text: '<strong>Ignition difficulty:</strong> As alkanes grow larger, they become harder to ignite. Larger molecules have stronger London (van der Waals) forces and do not vaporise as easily, so combustion requires more activation energy.<br/><strong>Flame colour:</strong> Short-chain alkanes burn with a clean blue flame (complete combustion). As chain length increases, combustion is less complete — resulting in a yellow, smoky flame due to glowing, unburned carbon particles (soot).' } },
    { id: 'h-pollutants', type: 'heading', data: { text: 'Combustion Pollutants and Their Effects', level: 2 } },
    { id: 'svg-pollutants', type: 'svg', data: { svg: `<svg viewBox="0 0 580 310" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Air Pollutants from Hydrocarbon Combustion</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="52" y="40" text-anchor="middle" fill="white" font-weight="bold">Pollutant</text>
  <text x="166" y="40" text-anchor="middle" fill="white" font-weight="bold">Source</text>
  <text x="335" y="40" text-anchor="middle" fill="white" font-weight="bold">Effect</text>
  <text x="510" y="40" text-anchor="middle" fill="white" font-weight="bold">Reduction</text>
  <rect x="0" y="50" width="580" height="38" fill="#fee2e2"/>
  <text x="4" y="67" fill="#dc2626" font-weight="bold">CO₂</text>
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
  <text x="4" y="181" fill="#713f12" font-weight="bold">NOₓ</text>
  <text x="108" y="177" fill="#374151">N₂ + O₂ at high temp</text>
  <text x="108" y="190" fill="#374151">in engine cylinders</text>
  <text x="228" y="177" fill="#374151">Acid rain; photochemical</text>
  <text x="228" y="190" fill="#374151">smog; respiratory irritant</text>
  <text x="450" y="185" text-anchor="middle" fill="#374151">Catalytic converter</text>
  <rect x="0" y="202" width="580" height="38" fill="#faf5ff"/>
  <text x="4" y="219" fill="#7e22ce" font-weight="bold">SO₂</text>
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
  <text x="4" y="298" fill="#0369a1" font-weight="bold">Ozone (O₃)</text>
  <text x="108" y="295" fill="#374151">NOₓ + HCs + UV (secondary)</text>
  <text x="228" y="295" fill="#374151">Low-level irritant; smog</text>
  <text x="450" y="295" text-anchor="middle" fill="#374151">Reduce NOₓ / HCs</text>
  <line x1="104" y1="22" x2="104" y2="310" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="224" y1="22" x2="224" y2="310" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="400" y1="22" x2="400" y2="310" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Seven major combustion pollutants: sources, effects, and how to reduce them.' } },
    { id: 'h-catalytic', type: 'heading', data: { text: 'Catalytic Converters', level: 2 } },
    { id: 'callout-catalytic', type: 'callout', data: { style: 'key', title: 'Catalytic Converter — Reactions and Limitations', text: '<strong>Key equation:</strong> 2CO + 2NO → 2CO₂ + N₂ (CO oxidised; NO reduced simultaneously)<br/><strong>Also:</strong> unburned hydrocarbons + O₂ → CO₂ + H₂O<br/><strong>Catalyst:</strong> Pt, Rh, Pd on a honeycomb ceramic support — provides large surface area; lowers activation energy without being consumed.<br/><strong>Limitation:</strong> Does NOT remove CO₂ (a greenhouse gas). Less effective when cold — requires ~300°C to operate; cold-start emissions are not fully treated.' } },
    { id: 'h-acid-rain', type: 'heading', data: { text: 'Acid Rain — Formation', level: 2 } },
    { id: 'callout-acid-rain', type: 'callout', data: { style: 'key', title: 'Acid Rain Formation from SO₂ and NOₓ', text: '<strong>From SO₂:</strong> SO₂ + H₂O → H₂SO₃ (sulfurous acid); 2SO₂ + O₂ → 2SO₃; SO₃ + H₂O → H₂SO₄ (sulfuric acid, strong)<br/><strong>From NOₓ:</strong> NO + ½O₂ → NO₂; 3NO₂ + H₂O → 2HNO₃ + NO (nitric acid)<br/><strong>Effects:</strong> pH typically 4–5 (normal rain ~5.6); kills aquatic life, damages tree roots, corrodes limestone buildings and metal structures.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '&#x2022; For CO toxicity: state it binds to haemoglobin (forming carboxyhaemoglobin) and PREVENTS oxygen transport — do not just say "it is toxic".<br/>&#x2022; For NOₓ formation: explain it forms at high temperatures in engine cylinders where N₂ and O₂ from air react.<br/>&#x2022; CO₂ is NOT directly toxic — its effect is as a greenhouse gas causing global warming.<br/>&#x2022; Learn the catalytic converter equation: 2CO + 2NO → 2CO₂ + N₂.' } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '&#x2022; Saying CO₂ causes acid rain — it does not (it forms very weak carbonic acid). Acid rain is primarily from SO₂ and NOₓ.<br/>&#x2022; Forgetting that NOₓ comes from the nitrogen in AIR, not from the fuel itself (in petrol/diesel engines).<br/>&#x2022; Confusing soot (carbon particles) with CO — soot is solid carbon; CO is a colourless, odourless gas.' } }
  ,
    {
      id: 'callout-exam-4-10',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Incomplete Combustion Products",
        text: "When writing incomplete combustion equations, read the question carefully to see if it specifically asks for carbon (soot, C) or carbon monoxide (CO) as the required product."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Complete combustion: CO₂ + H₂O. Incomplete: CO + soot. CO binds haemoglobin → prevents O₂ transport. Pollutants: CO₂ (greenhouse), CO (toxic), soot (respiratory), NOₓ (acid rain, from air N₂), SO₂ (acid rain, from S impurities), HCs (smog). Catalytic converter: 2CO + 2NO → 2CO₂ + N₂. Acid rain pH ~4–5.',
    cues: [
      { id: 'cue-1', blockId: 'eq-methane', prompt: 'Write the equation for complete combustion of methane. Write the general equation for complete combustion of any alkane CnH2n+2.' },
      { id: 'cue-2', blockId: 'callout-key-incomplete', prompt: 'What products form in incomplete combustion? Why is CO dangerous at the molecular level?' },
      { id: 'cue-3', blockId: 'svg-pollutants', prompt: 'Name 5 pollutants from hydrocarbon combustion, their sources, and harmful effects.' },
      { id: 'cue-4', blockId: 'callout-catalytic', prompt: 'Write the key catalytic converter equation. What are two limitations of catalytic converters?' },
      { id: 'cue-5', blockId: 'callout-acid-rain', prompt: 'Write equations showing how SO₂ and NOₓ form acid rain. What is the typical pH of acid rain?' }
    ],
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH11 Specification', detail: 'Combustion equations, pollutant formation, catalytic converters, and acid rain are all required for Topic 4.', year: '2018', source: 'Pearson Edexcel', tags: ['combustion', 'pollutants', 'acid rain'] }
  ],
  mentions: []
};
