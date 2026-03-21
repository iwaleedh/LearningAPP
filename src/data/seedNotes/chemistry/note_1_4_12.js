export const note_chemistry_1_4_12 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe the mechanism of free-radical substitution of alkanes with halogens; write equations for initiation, propagation and termination steps.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Free-Radical Substitution — Overview', level: 2 } },
    { id: 'callout-photochemical-warning', type: 'callout', data: { style: 'warning', title: 'Photochemical vs Combustive', text: 'If a mixture of methane and chlorine is exposed to a flame, it simply explodes — producing carbon (soot) and hydrogen chloride. UV light is required to drive the gentle <strong>photochemical substitution reaction</strong>. <em>Note: Call it a photochemical reaction, not photocatalysis, as light provides the energy, rather than acting as a traditional substance-based catalyst.</em>' } },
    { id: 'callout-key-overview', type: 'callout', data: { style: 'key', title: 'Overall Reaction (Chlorination of Methane)', text: 'CH₄ + Cl₂ → CH₃Cl + HCl &nbsp;(UV light required)<br/><br/>The reaction is a substitution because one H atom on methane is replaced by one Cl atom. It proceeds by a free-radical chain mechanism with three stages: initiation, propagation, termination.' } },
    { id: 'callout-bromine-identical', type: 'callout', data: { style: 'tip', title: 'Equivalent Halogens: Bromination', text: 'The reaction between methane and bromine happens identically under UV light. You do not need to memorise a different mechanism — simply replace all Cl symbols with Br. The sequence of chain initiation, propagation, and termination remains exactly the same.<br/><br/>CH₄ + Br₂ → CH₃Br + HBr' } },
    { id: 'h-stages', type: 'heading', data: { text: 'The Three Stages of the Chain Mechanism', level: 2 } },
    { id: 'h-initiation', type: 'heading', data: { text: 'Stage 1: Initiation', level: 3 } },
    { id: 'eq-initiation', type: 'equation', data: { html: 'Cl–Cl <span style="font-size:0.9em">→<sup>UV</sup></span> 2Cl•', caption: 'Initiation: homolytic fission of Cl₂ by UV light → 2 chlorine radicals. Uses fish-hook (single-headed) curly arrows.' } },
    { id: 'callout-key-initiation', type: 'callout', data: { style: 'key', title: 'Initiation — Key Points', text: '&#x2022; Only the halogen–halogen bond is broken in initiation (not C–H).<br/>&#x2022; Requires UV light (photolysis) — the reaction does NOT occur in the dark.<br/>&#x2022; Produces the first free radicals to start the chain.<br/>&#x2022; Fish-hook arrows: one from each end of the Cl–Cl bond, one to each Cl atom.' } },
    { id: 'h-propagation', type: 'heading', data: { text: 'Stage 2: Propagation', level: 3 } },
    { id: 'eq-prop1', type: 'equation', data: { html: 'Cl• + CH₄ → HCl + CH₃•', caption: 'Propagation step 1: Cl• abstracts a H atom from methane → HCl + methyl radical.' } },
    { id: 'eq-prop2', type: 'equation', data: { html: 'CH₃• + Cl₂ → CH₃Cl + Cl•', caption: 'Propagation step 2: methyl radical reacts with Cl₂ → chloromethane + Cl• (radical regenerated).' } },
    { id: 'callout-key-propagation', type: 'callout', data: { style: 'key', title: 'Propagation — Key Points', text: '&#x2022; Two steps alternate in a cycle — the radical is regenerated at the end of each cycle.<br/>&#x2022; Each cycle consumes one CH₄ and one Cl₂ and produces one CH₃Cl and one HCl.<br/>&#x2022; The chain can repeat thousands of times before termination.<br/>&#x2022; Both steps involve homolytic fission and radical formation — draw with fish-hook arrows.' } },
    { id: 'h-termination', type: 'heading', data: { text: 'Stage 3: Termination', level: 3 } },
    { id: 'callout-termination-eqs', type: 'callout', data: { style: 'worked', title: 'Termination — Three Possible Steps', text: 'Cl• + Cl• → Cl₂<br/>CH₃• + CH₃• → C₂H₆ &nbsp;(ethane — minor by-product; evidence for CH₃• radicals)<br/>CH₃• + Cl• → CH₃Cl<br/><br/>In all cases: two radicals combine → stable molecule. No unpaired electrons remain.' } },
    { id: 'callout-key-termination', type: 'callout', data: { style: 'key', title: 'Termination — Key Points', text: '&#x2022; Two radicals combine → stable molecule (no unpaired electrons remain).<br/>&#x2022; Termination uses full double-headed arrows going FROM each radical TO the new bond (since this is combination, not fission — electrons come together).<br/>&#x2022; Formation of C₂H₆ (ethane) as a minor by-product is evidence for the presence of CH₃• radicals.' } },
    { id: 'h-summary-mech', type: 'heading', data: { text: 'Summary of All Steps', level: 2 } },
    { id: 'svg-mechanism', type: 'svg', data: { svg: `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <text x="220" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#374151">Free-Radical Chain Mechanism</text>
  <rect x="10" y="28" width="420" height="38" rx="5" fill="#44370a" stroke="#eab308" stroke-width="1.5"/>
  <text x="20" y="45" font-weight="bold" fill="#92400e" font-size="11">INITIATION</text>
  <text x="20" y="60" fill="#374151">Cl₂  →(UV)→  Cl•  +  Cl•</text>
  <rect x="10" y="74" width="420" height="60" rx="5" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="20" y="91" font-weight="bold" fill="#166534" font-size="11">PROPAGATION (repeats ~10,000×)</text>
  <text x="20" y="107" fill="#374151">Step 1:  Cl•  +  CH₄  →  HCl  +  CH₃•</text>
  <text x="20" y="125" fill="#374151">Step 2:  CH₃•  +  Cl₂  →  CH₃Cl  +  Cl•</text>
  <path d="M 405 107 Q 425 116 405 125" fill="none" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/>
    </marker>
  </defs>
  <rect x="10" y="143" width="420" height="72" rx="5" fill="#3d1212" stroke="#dc2626" stroke-width="1.5"/>
  <text x="20" y="160" font-weight="bold" fill="#991b1b" font-size="11">TERMINATION (any two radicals combine)</text>
  <text x="20" y="176" fill="#374151">Cl•  +  Cl•  →  Cl₂</text>
  <text x="20" y="193" fill="#374151">CH₃•  +  CH₃•  →  C₂H₆  (by-product — evidence for CH₃•)</text>
  <text x="20" y="210" fill="#374151">CH₃•  +  Cl•  →  CH₃Cl</text>
  <text x="220" y="240" text-anchor="middle" font-size="11" fill="#6b7280">Fish-hook arrows (↷) for all homolytic steps</text>
  <text x="220" y="254" text-anchor="middle" font-size="11" fill="#6b7280">UV light needed for initiation only</text>
</svg>`, caption: 'Free-radical chain mechanism: initiation (UV) → propagation (cycle) → termination (radicals combine).' } },
    { id: 'svg-mechanism-table', type: 'svg', data: { svg: `<svg viewBox="0 0 580 266" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Free-Radical Substitution — All Steps Summary</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="55" y="40" text-anchor="middle" fill="white" font-weight="bold">Stage</text>
  <text x="210" y="40" text-anchor="middle" fill="white" font-weight="bold">Equation</text>
  <text x="360" y="40" text-anchor="middle" fill="white" font-weight="bold">Arrow type</text>
  <text x="492" y="40" text-anchor="middle" fill="white" font-weight="bold">Radicals</text>
  <rect x="0" y="50" width="580" height="36" fill="#fef9c3"/>
  <text x="4" y="72" fill="#713f12" font-weight="bold">Initiation</text>
  <text x="114" y="72" fill="#374151">Cl₂ →(UV)→ 2Cl•</text>
  <text x="315" y="72" text-anchor="middle" fill="#374151">Fish-hook ↷</text>
  <text x="415" y="72" fill="#374151">0 consumed, 2 produced</text>
  <rect x="0" y="86" width="580" height="36" fill="#dcfce7"/>
  <text x="4" y="108" fill="#166534" font-weight="bold">Propagation 1</text>
  <text x="114" y="108" fill="#374151">Cl• + CH₄ → HCl + CH₃•</text>
  <text x="315" y="108" text-anchor="middle" fill="#374151">Fish-hook ↷</text>
  <text x="415" y="108" fill="#374151">1 consumed, 1 produced</text>
  <rect x="0" y="122" width="580" height="36" fill="#dcfce7"/>
  <text x="4" y="144" fill="#166534" font-weight="bold">Propagation 2</text>
  <text x="114" y="144" fill="#374151">CH₃• + Cl₂ → CH₃Cl + Cl•</text>
  <text x="315" y="144" text-anchor="middle" fill="#374151">Fish-hook ↷</text>
  <text x="415" y="144" fill="#374151">1 consumed, 1 produced</text>
  <rect x="0" y="158" width="580" height="36" fill="#fee2e2"/>
  <text x="4" y="180" fill="#991b1b" font-weight="bold">Termination</text>
  <text x="114" y="180" fill="#374151">Cl• + Cl• → Cl₂</text>
  <text x="315" y="180" text-anchor="middle" fill="#374151">Full arrows →</text>
  <text x="415" y="180" fill="#374151">2 consumed, 0 produced</text>
  <rect x="0" y="194" width="580" height="36" fill="#fee2e2"/>
  <text x="4" y="216" fill="#991b1b" font-weight="bold">Termination</text>
  <text x="114" y="216" fill="#374151">CH₃• + CH₃• → C₂H₆</text>
  <text x="315" y="216" text-anchor="middle" fill="#374151">Full arrows →</text>
  <text x="415" y="216" fill="#374151">2 consumed, 0 produced</text>
  <rect x="0" y="230" width="580" height="36" fill="#fee2e2"/>
  <text x="4" y="252" fill="#991b1b" font-weight="bold">Termination</text>
  <text x="114" y="252" fill="#374151">CH₃• + Cl• → CH₃Cl</text>
  <text x="315" y="252" text-anchor="middle" fill="#374151">Full arrows →</text>
  <text x="415" y="252" fill="#374151">2 consumed, 0 produced</text>
  <line x1="110" y1="22" x2="110" y2="266" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="310" y1="22" x2="310" y2="266" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="410" y1="22" x2="410" y2="266" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'All six steps of free-radical substitution: 1 initiation, 2 propagation, 3 termination. Fish-hook arrows for all homolytic (radical) steps.' } },
    { id: 'h-further', type: 'heading', data: { text: 'Further Substitution and Mixed Products', level: 2 } },
    { id: 'svg-further', type: 'svg', data: { svg: `<svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Further Substitution — Progressive Chlorination of Methane</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="25" y="40" text-anchor="middle" fill="white" font-weight="bold">Step</text>
  <text x="215" y="40" text-anchor="middle" fill="white" font-weight="bold">Reaction</text>
  <text x="480" y="40" text-anchor="middle" fill="white" font-weight="bold">Product name</text>
  <rect x="0" y="50" width="580" height="36" fill="#f8fafc"/>
  <text x="25" y="72" text-anchor="middle" fill="#374151" font-weight="bold">1</text>
  <text x="54" y="72" fill="#374151">CH₄ + Cl₂ → CH₃Cl + HCl</text>
  <text x="385" y="72" fill="#374151">Chloromethane (CH₃Cl)</text>
  <rect x="0" y="86" width="580" height="36" fill="#f1f5f9"/>
  <text x="25" y="108" text-anchor="middle" fill="#374151" font-weight="bold">2</text>
  <text x="54" y="108" fill="#374151">CH₃Cl + Cl₂ → CH₂Cl₂ + HCl</text>
  <text x="385" y="108" fill="#374151">Dichloromethane (CH₂Cl₂)</text>
  <rect x="0" y="122" width="580" height="36" fill="#f8fafc"/>
  <text x="25" y="144" text-anchor="middle" fill="#374151" font-weight="bold">3</text>
  <text x="54" y="144" fill="#374151">CH₂Cl₂ + Cl₂ → CHCl₃ + HCl</text>
  <text x="385" y="144" fill="#374151">Trichloromethane / chloroform</text>
  <rect x="0" y="158" width="580" height="36" fill="#f1f5f9"/>
  <text x="25" y="180" text-anchor="middle" fill="#374151" font-weight="bold">4</text>
  <text x="54" y="180" fill="#374151">CHCl₃ + Cl₂ → CCl₄ + HCl</text>
  <text x="385" y="180" fill="#374151">Tetrachloromethane (CCl₄)</text>
  <rect x="0" y="194" width="580" height="36" fill="#dbeafe"/>
  <text x="25" y="213" text-anchor="middle" fill="#1e40af" font-size="9">ℹ</text>
  <text x="54" y="210" fill="#1e40af" font-weight="bold" font-size="9">Key point:</text>
  <text x="120" y="210" fill="#374151" font-size="9">Excess CH₄ (relative to Cl₂) limits further substitution — fewer CH₃Cl molecules available</text>
  <text x="54" y="224" fill="#374151" font-size="9">for subsequent reactions. Use excess alkane to favour monosubstitution.</text>
  <line x1="50" y1="22" x2="50" y2="230" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="380" y1="22" x2="380" y2="194" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Chlorination does not stop at monosubstitution. Each product can react further with Cl₂, giving a mixture. Excess alkane favours monosubstitution.' } },
    { id: 'h-bromine', type: 'heading', data: { text: 'Bromination vs Chlorination', level: 2 } },
    { id: 'svg-br-cl', type: 'svg', data: { svg: `<svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <text x="290" y="15" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Chlorination vs Bromination of Alkanes</text>
  <rect x="0" y="22" width="580" height="28" fill="#1e293b" rx="3"/>
  <text x="87" y="40" text-anchor="middle" fill="white" font-weight="bold">Property</text>
  <text x="276" y="40" text-anchor="middle" fill="white" font-weight="bold">Chlorination</text>
  <text x="478" y="40" text-anchor="middle" fill="white" font-weight="bold">Bromination</text>
  <rect x="0" y="50" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="72" fill="#374151" font-weight="bold">Bond broken (initiation)</text>
  <text x="179" y="72" fill="#374151">Cl–Cl (243 kJ mol⁻¹)</text>
  <text x="381" y="72" fill="#374151">Br–Br (193 kJ mol⁻¹)</text>
  <rect x="0" y="86" width="580" height="36" fill="#f1f5f9"/>
  <text x="4" y="108" fill="#374151" font-weight="bold">Reaction rate</text>
  <text x="276" y="108" text-anchor="middle" fill="#15803d">Faster</text>
  <text x="478" y="108" text-anchor="middle" fill="#dc2626">Slower</text>
  <rect x="0" y="122" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="138" fill="#374151" font-weight="bold">Selectivity</text>
  <text x="179" y="134" fill="#dc2626">Low — attacks any C–H bond</text>
  <text x="179" y="148" fill="#dc2626">regardless of type</text>
  <text x="381" y="134" fill="#15803d">Higher — preferentially attacks</text>
  <text x="381" y="148" fill="#15803d">weaker C–H bonds (3°>2°>1°)</text>
  <rect x="0" y="158" width="580" height="36" fill="#f1f5f9"/>
  <text x="4" y="180" fill="#374151" font-weight="bold">Thermodynamics</text>
  <text x="276" y="180" text-anchor="middle" fill="#374151">More exothermic overall</text>
  <text x="478" y="180" text-anchor="middle" fill="#374151">Less exothermic overall</text>
  <rect x="0" y="194" width="580" height="36" fill="#f8fafc"/>
  <text x="4" y="216" fill="#374151" font-weight="bold">Practical observation</text>
  <text x="276" y="216" text-anchor="middle" fill="#374151">Vigorous under UV light</text>
  <text x="478" y="216" text-anchor="middle" fill="#374151">Slower; more selective mixture</text>
  <line x1="175" y1="22" x2="175" y2="230" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="377" y1="22" x2="377" y2="230" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`, caption: 'Chlorination is faster but less selective; bromination is slower but attacks weaker C–H bonds preferentially.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tips', text: '&#x2022; Always write ALL three stages (initiation, propagation ×2 steps, termination) — marks are given for each.<br/>&#x2022; Propagation steps must show the radical being regenerated — check both sides have one radical.<br/>&#x2022; Evidence for CH₃• radicals: trace amounts of ethane (C₂H₆) found in products.<br/>&#x2022; Use fish-hook (single-headed) arrows for ALL homolytic steps in the mechanism.<br/>&#x2022; State that UV light (not just "light") is required for initiation.' } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '&#x2022; Writing only one propagation step — there must be TWO steps that together form the cycle.<br/>&#x2022; Using full double-headed curly arrows for radical steps — must be fish-hook arrows.<br/>&#x2022; Forgetting that the chain continues because a radical is regenerated in each propagation cycle.<br/>&#x2022; Writing termination as a step involving a molecule (e.g. Cl₂ + CH₄) — termination is ONLY radical + radical.' } },
    { id: 'svg-alkane-reactions', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 440" font-family="system-ui,sans-serif"><defs><marker id="ak-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2d2d72"/></marker></defs><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">ALKANE REACTIONS MAP</text><rect x="270" y="154" width="160" height="68" rx="12" fill="#6366f1" stroke="#a5b4fc" stroke-width="2"/><text x="350" y="180" text-anchor="middle" font-size="14" font-weight="800" fill="#1e293b">ALKANE</text><text x="350" y="198" text-anchor="middle" font-size="10" fill="#2d2d72">CₙH₂ₙ₊₂</text><text x="350" y="212" text-anchor="middle" font-size="9" fill="#2d2d72">single C-H and C-C bonds</text><line x1="350" y1="154" x2="350" y2="96" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#ak-arr)"/><rect x="214" y="34" width="272" height="62" rx="10" fill="rgba(239,68,68,0.18)" stroke="#ef4444" stroke-width="1.5"/><text x="350" y="54" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="700">COMBUSTION</text><text x="350" y="70" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Complete: CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O</text><text x="350" y="86" text-anchor="middle" font-size="9" fill="#7f1d1d">Incomplete (limited O₂): produces CO and/or C (soot)</text><line x1="270" y1="188" x2="190" y2="188" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#ak-arr)"/><rect x="10" y="130" width="180" height="116" rx="10" fill="rgba(251,146,60,0.18)" stroke="#fb923c" stroke-width="1.5"/><text x="100" y="150" text-anchor="middle" font-size="10" fill="#fb923c" font-weight="700">FREE RADICAL SUBSTn.</text><text x="100" y="166" text-anchor="middle" font-size="9" fill="#1e293b">RH + Cl₂ → RCl + HCl</text><text x="100" y="182" text-anchor="middle" font-size="8.5" fill="#532407">Initiation: UV → Cl₂ → 2Cl•</text><text x="100" y="196" text-anchor="middle" font-size="8.5" fill="#532407">Propagation: Cl• + RH → R• + HCl</text><text x="100" y="210" text-anchor="middle" font-size="8.5" fill="#532407">then R• + Cl₂ → RCl + Cl•</text><text x="100" y="226" text-anchor="middle" font-size="8" fill="#78350f">Mixed products; monosub. if excess RH</text><line x1="295" y1="222" x2="225" y2="316" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#ak-arr)"/><rect x="10" y="316" width="235" height="100" rx="10" fill="rgba(52,211,153,0.18)" stroke="#34d399" stroke-width="1.5"/><text x="117" y="336" text-anchor="middle" font-size="10" fill="#34d399" font-weight="700">CATALYTIC CRACKING</text><text x="117" y="352" text-anchor="middle" font-size="9" fill="#1e293b">Long alkane → shorter alkene + alkane</text><text x="117" y="368" text-anchor="middle" font-size="8.5" fill="#065f46">Conditions: ~500°C, zeolite catalyst</text><text x="117" y="384" text-anchor="middle" font-size="8.5" fill="#065f46">Product: cycloalkanes, branched alkanes</text><text x="117" y="400" text-anchor="middle" font-size="8.5" fill="#065f46">Used for: petrol, feedstock for polymers</text><text x="117" y="416" text-anchor="middle" font-size="8" fill="#065f46">Lower activation energy than thermal cracking</text><line x1="405" y1="222" x2="470" y2="316" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#ak-arr)"/><rect x="454" y="316" width="236" height="100" rx="10" fill="rgba(232,121,249,0.15)" stroke="#e879f9" stroke-width="1.5"/><text x="572" y="336" text-anchor="middle" font-size="10" fill="#e879f9" font-weight="700">STEAM CRACKING</text><text x="572" y="352" text-anchor="middle" font-size="9" fill="#1e293b">Long alkane → smaller alkenes + H₂</text><text x="572" y="368" text-anchor="middle" font-size="8.5" fill="#4a1040">Conditions: 800-900°C, steam (no catalyst)</text><text x="572" y="384" text-anchor="middle" font-size="8.5" fill="#4a1040">Product: ethene, propene (monomers)</text><text x="572" y="400" text-anchor="middle" font-size="8.5" fill="#4a1040">Used for: making plastics and polymers</text><text x="572" y="416" text-anchor="middle" font-size="8" fill="#2d1b69">Higher temp needed: homolytic fission</text><rect x="510" y="134" width="180" height="80" rx="10" fill="rgba(96,165,250,0.14)" stroke="#60a5fa" stroke-width="1.5"/><text x="600" y="154" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="700">WHY NOT REACTIVE?</text><text x="600" y="170" text-anchor="middle" font-size="9" fill="#1e3a8a">C-H and C-C bonds are strong</text><text x="600" y="186" text-anchor="middle" font-size="9" fill="#1e3a8a">and non-polar</text><text x="600" y="202" text-anchor="middle" font-size="9" fill="#1e3a8a">No electrophilic attack possible</text><line x1="430" y1="188" x2="510" y2="188" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4,3"/></svg>`, caption: 'Alkane Reactions Map — alkanes have 4 main reaction types. Combustion and free radical substitution are the main chemical reactions; cracking (catalytic and thermal) are industrial processes.' } }
  ,
    {
      id: 'callout-exam-4-12',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Exam Trap: Termination Steps",
        text: "A frequent mistake in the termination step is combining entirely unrelated radicals, or trying to regenerate a radical. <strong>Two radicals must combine to form one stable non-radical molecule.</strong>"
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Initiation: Cl₂ →(UV)→ 2Cl• (homolytic). Propagation: Cl• + CH₄ → HCl + CH₃•; CH₃• + Cl₂ → CH₃Cl + Cl•. Termination: 2 radicals → stable molecule. Fish-hook arrows for all homolytic steps. Excess CH₄ → monosubstitution. Br• more selective than Cl•.',
    cues: [
      { id: 'cue-1', blockId: 'eq-initiation', prompt: 'Write the initiation step for chlorination of methane. What type of bond fission occurs and what energy input is required?' },
      { id: 'cue-2', blockId: 'eq-prop1', prompt: 'Write both propagation steps for chlorination of methane. Why is this called a chain reaction?' },
      { id: 'cue-3', blockId: 'callout-termination-eqs', prompt: 'Write three possible termination steps. Why does termination end the chain?' },
      { id: 'cue-4', blockId: 'svg-further', prompt: 'Why does chlorination of methane give a mixture of products? How can monosubstitution be favoured?' },
      { id: 'cue-5', blockId: 'svg-br-cl', prompt: 'Why is bromination of alkanes more selective than chlorination? How does this relate to thermodynamics?' }
    ],
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH11 Specification', detail: 'Free-radical substitution mechanism (initiation, propagation, termination) is required for Topic 4.', year: '2018', source: 'Pearson Edexcel', tags: ['free radical', 'substitution', 'mechanism'] },
    { id: 'ev-2', title: 'Chemguide — Methane and Chlorine Free Radical Substitution', detail: 'Detailed breakdown of the photochemical nature of the reaction vs explosive combustion, and the exact chain mechanism stages.', year: '2023', source: 'chemguide.co.uk', tags: ['free radical substitution', 'photochemical', 'chain reaction'] }
  ],
  mentions: []
};
