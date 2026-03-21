export const note_chemistry_5_18_4 = {
  blocks: [
    {
      id: 'obj-eas-mechanisms',
      type: 'objective',
      data: {
        text: 'Explain the detailed mechanism of electrophilic aromatic substitution in benzene: formation of the arenium ion intermediate, role of delocalisation, electrophile generation (nitronium ion in nitration, Br⁺ in halogenation with AlBr₃ catalyst), and regeneration of the aromatic ring'
      }
    },
    {
      id: 'h-general-eas-mechanism',
      type: 'heading',
      data: { text: 'General Electrophilic Aromatic Substitution Mechanism', level: 2 }
    },
    {
      id: 'p-general-1',
      type: 'paragraph',
      data: {
        text: 'All electrophilic aromatic substitution reactions follow the same four-step mechanism. Only the identity of the electrophile changes — the steps are otherwise identical for nitration, bromination, Friedel-Crafts alkylation, and Friedel-Crafts acylation.'
      }
    },
    {
      id: 'table-4-steps',
      type: 'comparisonTable',
      data: {
        headers: ['Step', 'What Happens', 'Curly Arrow(s)'],
        rows: [
          ['Step 1', 'Electrophile (Y⁺) generated from reagent + Lewis acid/acid catalyst', 'e.g. Br₂ + AlBr₃ → Br⁺ + AlBr₄⁻'],
          ['Step 2 (slow, RDS)', 'Y⁺ attacks the delocalised π electrons of benzene → arenium ion intermediate (broken ring, positive charge)', 'Arrow FROM ring circle TO Y⁺'],
          ['Step 3 (fast)', 'H⁺ lost from the carbon bearing Y; two electrons from C−H bond rejoin the delocalised ring → aromatic system restored', 'Arrow FROM C−H bond TO ring (restores circle)'],
          ['Step 4', 'Lewis acid catalyst regenerated: accepts H⁺ in the form of HX product', 'e.g. AlBr₄⁻ + H⁺ → AlBr₃ + HBr']
        ],
        caption: 'The four-step EAS mechanism — common to all benzene substitution reactions'
      }
    },
    {
      id: 'callout-arenium-ion',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Arenium Ion (σ Complex) Intermediate',
        text: 'The arenium ion is a benzenoid carbocation with the electrophile attached to one ring carbon. Deloalisation is disrupted — drawn as a horseshoe (partial circle) with a + charge. The carbon bonded to Y and H is sp³ hybridised. Loss of H⁺ in Step 3 quickly restores full delocalisation — this is the driving force for substitution. Note: the arenium ion is a true intermediate (in an energy well), not just a transition state.'
      }
    },
    {
      id: 'callout-eas-energetics',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Energetics of EAS: Disruption of Delocalisation',
        text: 'Electrophilic aromatic substitution has a high **activation energy (approx. 150 kJ mol⁻¹)**. This is because **delocalisation is temporarily broken** when the electrophile bonds to the ring. The energy must be supplied to overcome this loss of stability. The reaction is driven to completion by the rapid loss of a proton, which completely restores the highly stable delocalised π system.'
      }
    },
    {
      id: 'svg-eas-general-mech',
      type: 'svg',
      data: {
        caption: 'General EAS mechanism for benzene + electrophile X⁺. Stage 1 (slow, rate-determining): X⁺ attacks the π electrons, breaking delocalisation → arenium ion (σ-complex) intermediate with partial ring and + charge. Stage 2 (fast): counter-ion Y⁻ removes the H⁺, restoring the full delocalised ring in the product.',
        svg: `<svg viewBox="0 0 500 355" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .hxg { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#64748b; stroke-width:1.5; fill:none; }
      .cur { fill:none; stroke:#2563eb; stroke-width:1.8; }
      .hd  { font-size:12px; font-weight:700; }
      .lbl { fill:#1f2937; font-size:11px; }
      .dim { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-gen-eas" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#64748b"/>
    </marker>
    <marker id="ca-gen-eas" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#2563eb"/>
    </marker>
  </defs>

  <!-- Stage 1 background (blue) -->
  <rect x="8" y="12" width="484" height="158" rx="5" fill="#1c3a64" stroke="#93c5fd" stroke-width="1.2"/>
  <!-- Stage 2 background (green) -->
  <rect x="8" y="178" width="484" height="165" rx="5" fill="#0a2e1a" stroke="#86efac" stroke-width="1.2"/>

  <!-- Stage 1 header -->
  <text x="20" y="30" class="hd" fill="#1d4ed8" text-anchor="start">Stage 1 (slow &#x2014; RDS): X&#x207a; attacks the &#x3c0; electrons</text>

  <!-- Benzene ring (Stage 1): pointy-top, center=(93,97), r=35 -->
  <!-- Vertices: top(93,62), UR(123,80), LR(123,114), bot(93,132), LL(63,114), UL(63,80) -->
  <polygon points="93 62, 123 80, 123 114, 93 132, 63 114, 63 80" class="hxg"/>
  <circle cx="93" cy="97" r="18" class="hxg"/>
  <text x="93" y="50" class="dim" text-anchor="middle">&#x3b4;&#x2212; &#x3c0; electrons</text>

  <!-- "+" operator -->
  <text x="145" y="101" class="atm" text-anchor="middle">+</text>
  <!-- X⁺ electrophile -->
  <text x="163" y="102" class="atm" text-anchor="middle">X</text>
  <text x="172" y="89" class="chg" text-anchor="start">+</text>

  <!-- Curly arrow: from upper-right hex vertex (123,80) → X⁺ approach (~161,93) -->
  <path d="M 122 82 Q 139 58 161 93" class="cur" marker-end="url(#ca-gen-eas)"/>

  <!-- Reaction arrow → -->
  <line x1="192" y1="95" x2="227" y2="95" class="rxn" marker-end="url(#ah-gen-eas)"/>
  <text x="209" y="113" class="dim" text-anchor="middle">ring</text>
  <text x="209" y="124" class="dim" text-anchor="middle">disrupted</text>

  <!-- Arenium ion (Stage 1): center=(313,95), r=35 -->
  <polygon points="313 60, 343 78, 343 112, 313 130, 283 112, 283 78" class="hxg"/>
  <!-- Partial arc 300°: center(313,95) r=18; from upper-right(329,86) clockwise to upper-left(297,86) -->
  <path d="M 329 86 A 18 18 0 1 1 297 86" class="hxg" fill="none"/>
  <!-- X at top carbon (313,60) going up -->
  <line x1="313" y1="60" x2="313" y2="42" stroke="#111827" stroke-width="1.8"/>
  <text x="313" y="34" class="atm" text-anchor="middle">X</text>
  <!-- H remaining at top carbon -->
  <text x="325" y="61" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="313" y="100" class="chg" text-anchor="middle" font-size="14">+</text>
  <text x="313" y="148" class="dim" text-anchor="middle">arenium ion</text>
  <text x="313" y="160" class="dim" text-anchor="middle">(&#x3c3;-complex)</text>

  <!-- Y⁻ counter-ion -->
  <text x="385" y="97" class="atm" text-anchor="middle">Y</text>
  <text x="394" y="84" class="chg" text-anchor="start">&#x2212;</text>
  <text x="385" y="115" class="dim" text-anchor="middle">(counter-ion</text>
  <text x="385" y="127" class="dim" text-anchor="middle">from X&#x207a;)</text>

  <!-- Stage 2 header -->
  <text x="20" y="196" class="hd" fill="#15803d" text-anchor="start">Stage 2 (fast): Y&#x207b; removes H&#x207a;, restoring the delocalised ring</text>

  <!-- Arenium ion (Stage 2): center=(93,268), r=35 -->
  <polygon points="93 233, 123 251, 123 285, 93 303, 63 285, 63 251" class="hxg"/>
  <!-- Partial arc: center(93,268) r=18; from upper-right(109,259) clockwise to upper-left(77,259) -->
  <path d="M 109 259 A 18 18 0 1 1 77 259" class="hxg" fill="none"/>
  <!-- X at top carbon -->
  <line x1="93" y1="233" x2="93" y2="215" stroke="#111827" stroke-width="1.8"/>
  <text x="93" y="207" class="atm" text-anchor="middle">X</text>
  <!-- H at top carbon -->
  <text x="106" y="234" class="lbl" text-anchor="start">H</text>
  <!-- + in ring -->
  <text x="93" y="272" class="chg" text-anchor="middle" font-size="14">+</text>

  <!-- Y⁻ approaching from upper-right -->
  <text x="158" y="218" class="atm" text-anchor="middle">Y</text>
  <text x="168" y="205" class="chg" text-anchor="start">&#x2212;</text>

  <!-- Curly arrow 1: Y⁻ lone pair → H (forms H-Y bond) -->
  <path d="M 154 224 Q 130 228 109 232" class="cur" marker-end="url(#ca-gen-eas)"/>
  <!-- Curly arrow 2: C-H bond electrons → restore ring arc (fills horseshoe gap) -->
  <path d="M 102 234 Q 106 248 108 257" class="cur" marker-end="url(#ca-gen-eas)"/>

  <!-- Reaction arrow → -->
  <line x1="186" y1="265" x2="221" y2="265" class="rxn" marker-end="url(#ah-gen-eas)"/>
  <text x="203" y="283" class="dim" text-anchor="middle">ring</text>
  <text x="203" y="294" class="dim" text-anchor="middle">restored ✓</text>

  <!-- Product: benzene-X, center=(320,268), r=35 -->
  <polygon points="320 233, 350 251, 350 285, 320 303, 290 285, 290 251" class="hxg"/>
  <!-- Full inner circle (delocalisation restored!) -->
  <circle cx="320" cy="268" r="18" class="hxg"/>
  <!-- X group at top -->
  <line x1="320" y1="233" x2="320" y2="215" stroke="#111827" stroke-width="1.8"/>
  <text x="320" y="207" class="atm" text-anchor="middle">X</text>
  <text x="320" y="318" class="dim" text-anchor="middle">full ring restored</text>

  <!-- "+" operator -->
  <text x="368" y="271" class="atm" text-anchor="middle">+</text>
  <!-- HY product -->
  <text x="400" y="271" class="atm" text-anchor="middle">HY</text>
  <text x="437" y="262" class="dim" text-anchor="start">(= H</text>
  <text x="455" y="254" class="chg">+</text>
  <text x="437" y="276" class="dim" text-anchor="start">+ Y&#x207b;)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-nitration-mechanism',
      type: 'heading',
      data: { text: 'Nitration Mechanism', level: 2 }
    },
    {
      id: 'p-nitration-conditions',
      type: 'paragraph',
      data: {
        text: 'The nitration of benzene requires **concentrated nitric acid** and **concentrated sulphuric acid** (acting as a catalyst). The reaction temperature must be kept **below 50°C** to prevent multiple substitutions (which would form e.g., 1,3-dinitrobenzene or 1,3,5-trinitrobenzene).'
      }
    },
    {
      id: 'h-nitration-step1',
      type: 'heading',
      data: { text: '1. Formation of the Electrophile (Nitronium Ion)', level: 3 }
    },
    {
      id: 'p-nitration-mech-1',
      type: 'paragraph',
      data: {
        text: 'The electrophile is the **nitronium ion** (or nitryl cation), NO₂⁺. The sulphuric acid is a stronger acid than nitric acid, so it forces the nitric acid to act as a base and accept a proton. The protonated nitric acid then loses a water molecule to form NO₂⁺.'
      }
    },
    {
      id: 'eq-nitronium-formation',
      type: 'equation',
      data: {
        html: 'HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> → NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>−</sup>'
      }
    },
    {
      id: 'h-nitration-step2',
      type: 'heading',
      data: { text: '2. Electrophilic Attack & Regeneration of Aromaticity', level: 3 }
    },
    {
      id: 'p-nitration-mech-2',
      type: 'paragraph',
      data: {
        text: 'The powerfully electrophilic NO₂⁺ attacks the delocalised π electrons of benzene, forming the arenium ion intermediate with the −NO₂ group attached and a positive charge distributed over the ring.'
      }
    },
    {
      id: 'eq-nitration-full',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + NO<sub>2</sub><sup>+</sup> → [C<sub>6</sub>H<sub>5</sub>−NO<sub>2</sub>]<sup>+</sup> (arenium ion)'
      }
    },
    {
      id: 'p-nitration-mech-3',
      type: 'paragraph',
      data: {
        text: 'In the fast second stage, the hydrogensulphate ion (HSO₄⁻, produced during the formation of the electrophile) acts as a base and removes a hydrogen ion (H⁺) from the arenium ion ring. This restores the full delocalised π system to form **nitrobenzene** and regenerates the sulphuric acid catalyst.'
      }
    },
    {
      id: 'eq-nitration-regen',
      type: 'equation',
      data: {
        html: '[C<sub>6</sub>H<sub>5</sub>−NO<sub>2</sub>]<sup>+</sup> + HSO<sub>4</sub><sup>−</sup> → C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub>'
      }
    },
    {
      id: 'svg-nitration-mech',
      type: 'svg',
      data: {
        caption: 'Nitration of benzene: Stage 1 — NO₂⁺ attacks the π electrons → arenium ion; Stage 2 — HSO₄⁻ (not bare H⁺) removes the proton → nitrobenzene + H₂SO₄ (catalyst regenerated).',
        svg: `<svg viewBox="0 0 540 370" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .hxg { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#64748b; stroke-width:1.5; fill:none; }
      .cur { fill:none; stroke:#2563eb; stroke-width:1.8; }
      .hd  { font-size:12px; font-weight:700; }
      .lbl { fill:#1f2937; font-size:11px; }
      .dim { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-nitr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#64748b"/>
    </marker>
    <marker id="ca-nitr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#2563eb"/>
    </marker>
  </defs>

  <!-- Stage 1 background (light blue) -->
  <rect x="8" y="8" width="524" height="182" rx="5" fill="#1c3a64" stroke="#93c5fd" stroke-width="1.2"/>
  <text x="20" y="27" class="hd" fill="#1d4ed8">Stage 1 (slow — RDS): NO₂⁺ attacks the π electrons</text>

  <!-- Benzene ring: center=(85,105), r=35, pointy-top hexagon -->
  <!-- Vertices: top(85,70), UR(115,88), LR(115,122), bot(85,140), LL(55,122), UL(55,88) -->
  <polygon points="85 70, 115 88, 115 122, 85 140, 55 122, 55 88" class="hxg"/>
  <circle cx="85" cy="105" r="18" class="hxg"/>
  <text x="85" y="59" class="dim" text-anchor="middle">δ⁻ π electrons</text>

  <!-- "+" operator and NO₂⁺ electrophile -->
  <text x="141" y="109" class="atm" text-anchor="middle">+</text>
  <text x="172" y="109" class="atm" text-anchor="middle">NO₂</text>
  <text x="190" y="96" class="chg" text-anchor="start">+</text>

  <!-- Curly arrow: from π ring (upper-right vertex ~115,88) curving toward NO₂⁺ (~163,101) -->
  <path d="M 114 90 Q 133 66 163 101" class="cur" marker-end="url(#ca-nitr)"/>

  <!-- Reaction arrow -->
  <line x1="215" y1="103" x2="252" y2="103" class="rxn" marker-end="url(#ah-nitr)"/>
  <text x="233" y="121" class="dim" text-anchor="middle">ring</text>
  <text x="233" y="132" class="dim" text-anchor="middle">disrupted</text>

  <!-- Arenium ion: center=(362,105), r=35 -->
  <!-- Vertices: top(362,70), UR(392,88), LR(392,122), bot(362,140), LL(332,122), UL(332,88) -->
  <polygon points="362 70, 392 88, 392 122, 362 140, 332 122, 332 88" class="hxg"/>
  <!-- Horseshoe arc (300°, gap at top): center(362,105), r=18; from (375,92) CW to (349,92) via bottom -->
  <path d="M 375 92 A 18 18 0 1 1 349 92" class="hxg" fill="none"/>
  <!-- NO₂ bonded at top carbon (362,70), going up -->
  <line x1="362" y1="70" x2="362" y2="50" stroke="#111827" stroke-width="1.8"/>
  <text x="362" y="44" class="atm" text-anchor="middle">NO₂</text>
  <!-- H beside top carbon -->
  <text x="377" y="71" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="362" y="109" class="chg" text-anchor="middle" font-size="14">+</text>
  <text x="362" y="157" class="dim" text-anchor="middle">arenium ion</text>

  <!-- Stage 2 background (light green) -->
  <rect x="8" y="195" width="524" height="170" rx="5" fill="#0a2e1a" stroke="#86efac" stroke-width="1.2"/>
  <text x="20" y="214" class="hd" fill="#15803d">Stage 2 (fast): HSO₄⁻ removes H⁺ → ring restored, H₂SO₄ regenerated</text>

  <!-- Arenium ion (Stage 2): center=(85,280), r=35 -->
  <!-- Vertices: top(85,245), UR(115,263), LR(115,297), bot(85,315), LL(55,297), UL(55,263) -->
  <polygon points="85 245, 115 263, 115 297, 85 315, 55 297, 55 263" class="hxg"/>
  <!-- Horseshoe arc: center(85,280), r=18; from (98,267) CW to (72,267) via bottom -->
  <path d="M 98 267 A 18 18 0 1 1 72 267" class="hxg" fill="none"/>
  <!-- NO₂ line up from top carbon -->
  <line x1="85" y1="245" x2="85" y2="225" stroke="#111827" stroke-width="1.8"/>
  <text x="85" y="219" class="atm" text-anchor="middle">NO₂</text>
  <!-- H beside top carbon -->
  <text x="100" y="246" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="85" y="284" class="chg" text-anchor="middle" font-size="14">+</text>

  <!-- HSO₄⁻ approaching (upper-right of arenium ion) with lone pair dots -->
  <text x="163" y="248" class="atm" text-anchor="middle">HSO₄</text>
  <text x="183" y="235" class="chg" text-anchor="start">&#x2212;</text>
  <!-- Lone pair dots on the O end (left side of label, facing toward ring H) -->
  <circle cx="141" cy="244" r="1.8" fill="#2563eb"/>
  <circle cx="141" cy="252" r="1.8" fill="#2563eb"/>

  <!-- Curly arrow 1: lone pair (O of HSO₄⁻) → H on ring -->
  <path d="M 142 248 Q 125 244 104 246" class="cur" marker-end="url(#ca-nitr)"/>
  <!-- Curly arrow 2: C–H bond electrons → fill horseshoe gap (restore ring) -->
  <path d="M 102 249 Q 103 258 99 267" class="cur" marker-end="url(#ca-nitr)"/>

  <!-- Reaction arrow -->
  <line x1="213" y1="280" x2="250" y2="280" class="rxn" marker-end="url(#ah-nitr)"/>
  <text x="231" y="298" class="dim" text-anchor="middle">ring</text>
  <text x="231" y="309" class="dim" text-anchor="middle">restored ✓</text>

  <!-- Nitrobenzene: center=(360,280), r=35 -->
  <!-- Vertices: top(360,245), UR(390,263), LR(390,297), bot(360,315), LL(330,297), UL(330,263) -->
  <polygon points="360 245, 390 263, 390 297, 360 315, 330 297, 330 263" class="hxg"/>
  <!-- Full inner circle (delocalisation fully restored) -->
  <circle cx="360" cy="280" r="18" class="hxg"/>
  <!-- NO₂ going up from top carbon -->
  <line x1="360" y1="245" x2="360" y2="225" stroke="#111827" stroke-width="1.8"/>
  <text x="360" y="219" class="atm" text-anchor="middle">NO₂</text>
  <text x="360" y="331" class="dim" text-anchor="middle">nitrobenzene</text>

  <!-- "+" operator -->
  <text x="408" y="283" class="atm" text-anchor="middle">+</text>
  <!-- H₂SO₄ product (catalyst regenerated) -->
  <text x="450" y="276" class="atm" text-anchor="middle">H₂SO₄</text>
  <text x="450" y="294" class="dim" text-anchor="middle">(catalyst</text>
  <text x="450" y="305" class="dim" text-anchor="middle">regenerated ✓)</text>
</svg>`
      }
    },
    {
      id: 'callout-hso4-sloppy',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Stage 2: Always Show HSO₄⁻ — Never Write H⁺ "Falling Off" Alone',
        text: 'Many textbooks show Stage 2 as H⁺ simply "falling off" the ring. Chemguide explicitly calls this **sloppy and unsatisfactory** for two reasons:\n\n1. **A bare proton (H⁺) never exists alone in solution.** It is a raw proton — the most intensely positive species imaginable — and will always bond immediately to a base.\n\n2. **Without showing HSO₄⁻, you cannot demonstrate that H₂SO₄ (the catalyst) is regenerated.** H₂SO₄ is consumed in Stage 1 (forming 2HSO₄⁻ when NO₂⁺ is generated) and must be shown being reformed in Stage 2. Omitting HSO₄⁻ hides the catalytic cycle entirely.\n\n**✅ Correct:** HSO₄⁻ donates a lone pair on O to remove the proton → H₂SO₄ reformed; the C−H electrons restore the aromatic delocalised ring.'
      }
    },
    {
      id: 'h-halogenation-mechanism',
      type: 'heading',
      data: { text: 'Halogenation Mechanism: Halogen Activation by Catalyst', level: 2 }
    },
    {
      id: 'p-halogenation-mech-1',
      type: 'paragraph',
      data: {
        text: 'Benzene reacts with chlorine or bromine in an electrophilic substitution reaction, requiring a catalyst such as aluminium chloride (AlCl₃) or iron. Strictly speaking, iron is not the catalyst; it reacts with the halogen to form iron(III) chloride (FeCl₃) or iron(III) bromide (FeBr₃), which then acts as the Lewis acid catalyst.'
      }
    },
    {
      id: 'p-halogenation-mech-polarisation',
      type: 'paragraph',
      data: {
        text: 'The halogen molecule (e.g. Cl₂) is not polar enough to act as an electrophile directly. As the chlorine molecule approaches the benzene ring, the delocalised electrons repel electrons in the Cl−Cl bond. The Lewis acid catalyst (such as AlCl₃) accepts electrons, further polarising the molecule to create a strong electrophile (acting as the slightly positive end, Cl⁺).'
      }
    },
    {
      id: 'eq-halogen-activation',
      type: 'equation',
      data: {
        html: 'Cl<sub>2</sub> + AlCl<sub>3</sub> ⇌ [Cl−Cl−AlCl<sub>3</sub>] or [Cl<sup>+</sup>][AlCl<sub>4</sub>]<sup>−</sup><br />(Lewis acid-base complex with polarised Cl<sup>+</sup>)'
      }
    },
    {
      id: 'p-halogenation-mech-2',
      type: 'paragraph',
      data: {
        text: 'The activated electrophile then attacks the π electrons of benzene, forming the arenium ion intermediate. Rapid deprotonation removes the hydrogen using the AlCl₄⁻ ion formed in the first stage, regenerating the aromatic ring, reforming the AlCl₃ catalyst, and producing HCl as a byproduct.'
      }
    },
    {
      id: 'eq-halogenation-full',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + Cl<sup>+</sup> (from complex) → [C<sub>6</sub>H<sub>5</sub>−Cl]<sup>+</sup> (arenium ion)<br />[C<sub>6</sub>H<sub>5</sub>−Cl]<sup>+</sup> + AlCl<sub>4</sub><sup>−</sup> → C<sub>6</sub>H<sub>5</sub>Cl + HCl + AlCl<sub>3</sub>'
      }
    },
    {
      id: 'callout-catalyst-role',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Why Lewis Acid Catalysts are Essential',
        text: 'The Cl₂ molecule has low polarity; Cl atoms are not sufficiently positive to attack aromatic π electrons directly. The catalyst (e.g., AlCl₃) accepts electron density from Cl₂, strongly polarising it to create an effective electrophile (Cl⁺). Without this activation, the reaction is too slow. The catalyst is regenerated in the second step.'
      }
    },
    {
      id: 'svg-halogenation-mech',
      type: 'svg',
      data: {
        caption: 'Halogenation mechanism (chlorobenzene synthesis). Stage 1 (slow, RDS): AlCl₃ polarises Cl₂ so the δ+ Cl attacks π electrons → arenium ion + AlCl₄⁻. Stage 2 (fast): AlCl₄⁻ removes H⁺ → chlorobenzene + HCl + AlCl₃ (catalyst regenerated).',
        svg: `<svg viewBox="0 0 540 370" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .hxg { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#64748b; stroke-width:1.5; fill:none; }
      .cur { fill:none; stroke:#2563eb; stroke-width:1.8; }
      .hd  { font-size:12px; font-weight:700; }
      .lbl { fill:#1f2937; font-size:11px; }
      .dim { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-halog" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#64748b"/>
    </marker>
    <marker id="ca-halog" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#2563eb"/>
    </marker>
  </defs>

  <!-- Stage 1 background -->
  <rect x="8" y="8" width="524" height="175" rx="5" fill="#1c3a64" stroke="#93c5fd" stroke-width="1.2"/>
  <text x="20" y="27" class="hd" fill="#1d4ed8" text-anchor="start">Stage 1 (slow — RDS): Cl₂ (activated by AlCl₃) attacks π electrons</text>

  <!-- Benzene ring: center=(75,100), pointy-top hex, r=35 -->
  <polygon points="75 65, 105 83, 105 117, 75 135, 45 117, 45 83" class="hxg"/>
  <circle cx="75" cy="100" r="18" class="hxg"/>
  <text x="75" y="54" class="dim" text-anchor="middle">δ⁻ π electrons</text>

  <!-- "+" operator -->
  <text x="120" y="104" class="atm" text-anchor="middle">+</text>

  <!-- Cl₂ molecule: δ+ Cl at x=150, δ− Cl at x=178 -->
  <text x="150" y="88" class="chg" text-anchor="middle">δ+</text>
  <text x="150" y="104" class="atm" text-anchor="middle">Cl</text>
  <line x1="160" y1="100" x2="171" y2="100" stroke="#111827" stroke-width="1.8"/>
  <text x="178" y="104" class="atm" text-anchor="middle">Cl</text>
  <text x="178" y="88" class="dim" text-anchor="middle">δ−</text>

  <!-- AlCl₃ label below Cl₂ -->
  <text x="163" y="120" class="lbl" text-anchor="middle">/ AlCl₃</text>
  <text x="163" y="131" class="dim" text-anchor="middle">(Lewis acid)</text>

  <!-- Curly arrow: from upper-right vertex (105,83) → δ+ Cl (150,96) -->
  <path d="M 104 85 Q 120 63 149 96" class="cur" marker-end="url(#ca-halog)"/>

  <!-- Reaction arrow → -->
  <line x1="203" y1="98" x2="246" y2="98" class="rxn" marker-end="url(#ah-halog)"/>
  <text x="224" y="116" class="dim" text-anchor="middle">Cl⁻ →</text>
  <text x="224" y="127" class="dim" text-anchor="middle">AlCl₄⁻</text>

  <!-- Arenium ion: center=(325,100), r=35 -->
  <polygon points="325 65, 355 83, 355 117, 325 135, 295 117, 295 83" class="hxg"/>
  <!-- Horseshoe arc (gap at top) -->
  <path d="M 338 87 A 18 18 0 1 1 312 87" class="hxg" fill="none"/>
  <!-- Cl bonded at top -->
  <line x1="325" y1="65" x2="325" y2="46" stroke="#111827" stroke-width="1.8"/>
  <text x="325" y="40" class="atm" text-anchor="middle">Cl</text>
  <!-- H beside top carbon -->
  <text x="340" y="66" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="325" y="104" class="chg" text-anchor="middle" font-size="14">+</text>
  <text x="325" y="152" class="dim" text-anchor="middle">arenium ion</text>

  <!-- AlCl₄⁻ produced -->
  <text x="378" y="96" class="atm" text-anchor="middle">AlCl₄</text>
  <text x="403" y="83" class="chg" text-anchor="start">−</text>

  <!-- Stage 2 background -->
  <rect x="8" y="190" width="524" height="174" rx="5" fill="#0a2e1a" stroke="#86efac" stroke-width="1.2"/>
  <text x="20" y="209" class="hd" fill="#15803d" text-anchor="start">Stage 2 (fast): AlCl₄⁻ removes H⁺ → ring restored, AlCl₃ regenerated</text>

  <!-- Arenium ion (Stage 2): center=(75,280), r=35 -->
  <polygon points="75 245, 105 263, 105 297, 75 315, 45 297, 45 263" class="hxg"/>
  <!-- Horseshoe arc -->
  <path d="M 88 267 A 18 18 0 1 1 62 267" class="hxg" fill="none"/>
  <!-- Cl going up -->
  <line x1="75" y1="245" x2="75" y2="226" stroke="#111827" stroke-width="1.8"/>
  <text x="75" y="220" class="atm" text-anchor="middle">Cl</text>
  <!-- H beside top carbon -->
  <text x="90" y="246" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="75" y="284" class="chg" text-anchor="middle" font-size="14">+</text>

  <!-- AlCl₄⁻ approaching -->
  <text x="153" y="250" class="atm" text-anchor="middle">AlCl₄</text>
  <text x="174" y="237" class="chg" text-anchor="start">−</text>

  <!-- Curly arrow 1: Al-Cl bond → H on ring -->
  <path d="M 133 247 Q 113 243 95 245" class="cur" marker-end="url(#ca-halog)"/>
  <!-- Curly arrow 2: C–H bond → restore ring -->
  <path d="M 92 248 Q 93 257 89 267" class="cur" marker-end="url(#ca-halog)"/>

  <!-- Reaction arrow → -->
  <line x1="200" y1="280" x2="239" y2="280" class="rxn" marker-end="url(#ah-halog)"/>
  <text x="219" y="298" class="dim" text-anchor="middle">ring</text>
  <text x="219" y="309" class="dim" text-anchor="middle">restored ✓</text>

  <!-- Chlorobenzene product: center=(315,280), r=35 -->
  <polygon points="315 245, 345 263, 345 297, 315 315, 285 297, 285 263" class="hxg"/>
  <!-- Full inner circle -->
  <circle cx="315" cy="280" r="18" class="hxg"/>
  <!-- Cl going up -->
  <line x1="315" y1="245" x2="315" y2="226" stroke="#111827" stroke-width="1.8"/>
  <text x="315" y="220" class="atm" text-anchor="middle">Cl</text>
  <text x="315" y="331" class="dim" text-anchor="middle">chlorobenzene</text>

  <!-- "+ HCl + AlCl₃" products -->
  <text x="359" y="283" class="atm" text-anchor="middle">+</text>
  <text x="385" y="276" class="atm" text-anchor="middle">HCl</text>
  <text x="415" y="283" class="atm" text-anchor="middle">+</text>
  <text x="455" y="272" class="atm" text-anchor="middle">AlCl₃</text>
  <text x="455" y="288" class="dim" text-anchor="middle">(cat. regen. ✓)</text>
</svg>`
      }
    },
    {
      id: 'h-sulphonation-mechanism',
      type: 'heading',
      data: { text: 'Sulphonation Mechanism', level: 2 }
    },
    {
      id: 'p-sulphonation-conditions',
      type: 'paragraph',
      data: {
        text: 'Benzene undergoes sulphonation to form **benzenesulphonic acid**. There are two equivalent methods:\n1. Heat benzene under reflux with **concentrated sulphuric acid** for several hours.\n2. Warm benzene under reflux at 40°C with **fuming sulphuric acid** (H₂S₂O₇) for 20–30 minutes.'
      }
    },
    {
      id: 'eq-sulphonation-overall',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + H<sub>2</sub>SO<sub>4</sub> → C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H + H<sub>2</sub>O'
      }
    },
    {
      id: 'p-sulphonation-electrophile',
      type: 'paragraph',
      data: {
        text: 'The true electrophile in this reaction is **sulphur trioxide (SO₃)**. Concentrated sulphuric acid contains trace amounts of SO₃ due to slight dissociation. Fuming sulphuric acid is effectively a solution of SO₃ in sulphuric acid, providing a much richer source of the electrophile. SO₃ is highly polar, with a significant partial positive charge on the central sulphur atom.'
      }
    },
    {
      id: 'p-sulphonation-step1',
      type: 'paragraph',
      data: {
        text: 'In the first stage, the highly polar SO₃ electrophile is attracted to the delocalised π electrons of the benzene ring. As the sulphur attacks the ring, a pair of electrons from a S=O double bond moves to an oxygen atom, forming the arenium ion intermediate with a negatively charged oxygen (−SO₃⁻).'
      }
    },
    {
      id: 'p-sulphonation-step2',
      type: 'paragraph',
      data: {
        text: 'In the fast second stage, the aromatic ring is regenerated by the transfer of the hydrogen ion (H⁺) from the ring to the negatively charged oxygen on the sulphonate group, yielding the neutral benzenesulphonic acid product.'
      }
    },
    {
      id: 'eq-sulphonation-mech',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + SO<sub>3</sub> → [C<sub>6</sub>H<sub>5</sub>−SO<sub>3</sub>]<sup>−/⊕</sup> (arenium intermediate)<br />[C<sub>6</sub>H<sub>5</sub>−SO<sub>3</sub>]<sup>−/⊕</sup> → C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H'
      }
    },
    {
      id: 'svg-sulphonation-mech',
      type: 'svg',
      data: {
        caption: 'Sulphonation mechanism. Stage 1 (slow, RDS): δ+S of SO₃ attacks π electrons → arenium ion; S bonds to ring, one O gains negative charge. Stage 2 (fast, UNIQUE): the O⁻ on the intermediate directly removes H⁺ from ring — no separate external ion. O⁻ must be on the same side as H.',
        svg: `<svg viewBox="0 0 540 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .hxg { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#64748b; stroke-width:1.5; fill:none; }
      .cur { fill:none; stroke:#2563eb; stroke-width:1.8; }
      .hd  { font-size:12px; font-weight:700; }
      .lbl { fill:#1f2937; font-size:11px; }
      .dim { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-sulph" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#64748b"/>
    </marker>
    <marker id="ca-sulph" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#2563eb"/>
    </marker>
  </defs>

  <!-- Stage 1 -->
  <rect x="8" y="8" width="524" height="205" rx="5" fill="#1c3a64" stroke="#93c5fd" stroke-width="1.2"/>
  <text x="20" y="26" class="hd" fill="#1d4ed8" text-anchor="start">Stage 1 (slow — RDS): δ+S of SO₃ attacks π electrons</text>

  <!-- Benzene ring: center=(72,140), r=35 -->
  <polygon points="72 105, 102 123, 102 157, 72 175, 42 157, 42 123" class="hxg"/>
  <circle cx="72" cy="140" r="18" class="hxg"/>
  <text x="72" y="93" class="dim" text-anchor="middle">δ⁻ π electrons</text>

  <text x="122" y="143" class="atm" text-anchor="middle">+</text>

  <!-- SO₃: S at (163,133) -->
  <text x="163" y="133" class="atm" text-anchor="middle">S</text>
  <text x="163" y="121" class="chg" text-anchor="middle">δ+</text>
  <line x1="163" y1="133" x2="163" y2="113" stroke="#111827" stroke-width="1.5"/>
  <line x1="163" y1="133" x2="147" y2="148" stroke="#111827" stroke-width="1.5"/>
  <line x1="163" y1="133" x2="179" y2="148" stroke="#111827" stroke-width="1.5"/>
  <text x="163" y="110" class="atm" text-anchor="middle">O</text>
  <text x="143" y="155" class="atm" text-anchor="middle">O</text>
  <text x="183" y="155" class="atm" text-anchor="middle">O</text>

  <!-- Curly arrow: ring upper-right (102,123) → S -->
  <path d="M 101 125 Q 122 100 158 131" class="cur" marker-end="url(#ca-sulph)"/>

  <line x1="207" y1="138" x2="247" y2="138" class="rxn" marker-end="url(#ah-sulph)"/>
  <text x="227" y="155" class="dim" text-anchor="middle">RDS</text>

  <!-- Arenium (Stage 1): center=(322,145), r=35 -->
  <polygon points="322 110, 352 128, 352 162, 322 180, 292 162, 292 128" class="hxg"/>
  <path d="M 335 128 A 18 18 0 1 1 309 128" class="hxg" fill="none"/>
  <line x1="322" y1="110" x2="322" y2="93" stroke="#111827" stroke-width="1.8"/>
  <text x="322" y="93" class="atm" text-anchor="middle">S</text>
  <!-- S-O⁻ straight up -->
  <line x1="322" y1="93" x2="322" y2="64" stroke="#111827" stroke-width="1.5"/>
  <text x="322" y="61" class="atm" text-anchor="middle">O</text>
  <text x="333" y="50" class="chg" text-anchor="start">−</text>
  <!-- S=O left -->
  <line x1="322" y1="93" x2="302" y2="74" stroke="#111827" stroke-width="1.5"/>
  <text x="298" y="72" class="atm" text-anchor="middle">O</text>
  <!-- S=O right -->
  <line x1="322" y1="93" x2="342" y2="74" stroke="#111827" stroke-width="1.5"/>
  <text x="346" y="72" class="atm" text-anchor="middle">O</text>
  <text x="337" y="110" class="lbl" text-anchor="start">H</text>
  <text x="322" y="149" class="chg" text-anchor="middle" font-size="14">+</text>
  <text x="322" y="197" class="dim" text-anchor="middle">arenium ion (σ-complex)</text>

  <!-- Stage 2 -->
  <rect x="8" y="213" width="524" height="199" rx="5" fill="#0a2e1a" stroke="#86efac" stroke-width="1.2"/>
  <text x="20" y="231" class="hd" fill="#15803d" text-anchor="start">Stage 2 (fast): O⁻ removes H⁺ internally — no separate ion!</text>

  <!-- Arenium (Stage 2): center=(72,335), r=35 -->
  <polygon points="72 300, 102 318, 102 352, 72 370, 42 352, 42 318" class="hxg"/>
  <path d="M 85 318 A 18 18 0 1 1 59 318" class="hxg" fill="none"/>
  <line x1="72" y1="300" x2="72" y2="281" stroke="#111827" stroke-width="1.8"/>
  <text x="72" y="281" class="atm" text-anchor="middle">S</text>
  <!-- S=O neutral left -->
  <line x1="72" y1="281" x2="52" y2="261" stroke="#111827" stroke-width="1.5"/>
  <text x="48" y="259" class="atm" text-anchor="middle">O</text>
  <!-- S-O⁻ upper-right, toward H -->
  <line x1="72" y1="281" x2="95" y2="261" stroke="#111827" stroke-width="1.5"/>
  <text x="101" y="259" class="atm" text-anchor="middle">O</text>
  <text x="112" y="249" class="chg" text-anchor="start">−</text>
  <circle cx="107" cy="256" r="1.5" fill="#dc2626"/>
  <circle cx="113" cy="256" r="1.5" fill="#dc2626"/>
  <!-- H beside top carbon -->
  <text x="87" y="301" class="lbl" text-anchor="start">H</text>
  <text x="72" y="339" class="chg" text-anchor="middle" font-size="14">+</text>

  <!-- Curly arrow 1: O⁻ → H -->
  <path d="M 112 253 Q 105 274 89 299" class="cur" marker-end="url(#ca-sulph)"/>
  <!-- Curly arrow 2: C-H → ring -->
  <path d="M 88 303 Q 83 314 80 320" class="cur" marker-end="url(#ca-sulph)"/>

  <line x1="133" y1="335" x2="170" y2="335" class="rxn" marker-end="url(#ah-sulph)"/>
  <text x="151" y="352" class="dim" text-anchor="middle">ring</text>
  <text x="151" y="363" class="dim" text-anchor="middle">restored ✓</text>

  <!-- Benzenesulphonic acid: center=(265,335), r=35 -->
  <polygon points="265 300, 295 318, 295 352, 265 370, 235 352, 235 318" class="hxg"/>
  <circle cx="265" cy="335" r="18" class="hxg"/>
  <line x1="265" y1="300" x2="265" y2="284" stroke="#111827" stroke-width="1.8"/>
  <text x="265" y="281" class="atm" text-anchor="middle">SO₃H</text>
  <text x="265" y="390" class="dim" text-anchor="middle">benzenesulphonic acid</text>

  <!-- Annotation -->
  <text x="338" y="268" class="lbl" fill="#15803d" font-weight="700" text-anchor="start">⚠ Unique to sulphonation:</text>
  <text x="338" y="282" class="dim" text-anchor="start">No external ion removes H⁺.</text>
  <text x="338" y="296" class="dim" text-anchor="start">The O⁻ on the intermediate</text>
  <text x="338" y="310" class="dim" text-anchor="start">takes the H⁺ directly.</text>
  <text x="338" y="326" class="dim" fill="#dc2626" font-weight="700" text-anchor="start">⚠ O⁻ must be on same side</text>
  <text x="338" y="340" class="dim" fill="#dc2626" font-weight="700" text-anchor="start">as H — curly arrows</text>
  <text x="338" y="354" class="dim" fill="#dc2626" font-weight="700" text-anchor="start">won’t work otherwise!</text>
</svg>`
      }
    },
    {
      id: 'callout-sulphonation-unique',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Sulphonation Stage 2 is Different From All Other EAS Reactions',
        text: 'In every other EAS reaction (nitration, halogenation, FC reactions), Stage 2 uses a separate external ion (HSO₄⁻, AlCl₄⁻) to remove H⁺ from the ring.\n\nIn sulphonation there is no separate ion. The negative oxygen on the arenium intermediate directly removes H⁺ via its lone pair, forming O−H. The C−H bond electrons restore the ring.\n\nCritical exam rule: O⁻ MUST be drawn on the same side as the H being removed. If O⁻ is on the wrong side, sensible curly arrows cannot be drawn.'
      }
    },
    {
      id: 'h-fc-acylation',
      type: 'heading',
      data: { text: 'Friedel-Crafts Acylation', level: 2 }
    },
    {
      id: 'p-fc-acylation-intro',
      type: 'paragraph',
      data: {
        text: 'Friedel-Crafts acylation involves substituting an **acyl group** (e.g., the ethanoyl group, CH₃CO−) into the benzene ring to form a ketone (e.g., phenylethanone). The reaction requires an **acyl chloride** (like ethanoyl chloride, CH₃COCl) and a **Lewis acid catalyst** (such as aluminium chloride, AlCl₃).'
      }
    },
    {
      id: 'eq-fc-acylation-overall',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl <span style="font-size:11px;color:#64748b">[AlCl<sub>3</sub> catalyst]</span>→ C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> + HCl<br />(phenylethanone — a ketone)'
      }
    },
    {
      id: 'h-fc-acylation-step1',
      type: 'heading',
      data: { text: '1. Formation of the Acylium Ion Electrophile', level: 3 }
    },
    {
      id: 'p-fc-acylation-mech-1',
      type: 'paragraph',
      data: {
        text: 'The electrophile is the **acylium ion**, CH₃CO⁺. It is generated when the aluminium chloride catalyst strongly pulls the chlorine atom away from the acyl chloride.'
      }
    },
    {
      id: 'eq-fc-acylation-activation',
      type: 'equation',
      data: {
        html: 'CH<sub>3</sub>COCl + AlCl<sub>3</sub> → CH<sub>3</sub>CO<sup>+</sup> + AlCl<sub>4</sub><sup>−</sup>'
      }
    },
    {
      id: 'callout-fc-alcl3-lewis',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why AlCl₃ Acts as a Lewis Acid in Friedel-Crafts Acylation',
        text: 'Aluminium chloride (AlCl₃) is electron-deficient: aluminium forms only 3 covalent bonds, leaving just **6 electrons** around the atom (not a full octet). This makes it a strong Lewis acid — it readily accepts electron pairs.\n\nIn FC acylation, AlCl₃ accepts the Cl from ethanoyl chloride via a **dative (coordinate) covalent bond** — both electrons in the new Al−Cl bond come from the leaving Cl atom. This simultaneously generates the **acylium ion (CH₃CO⁺)** and the tetrachloroaluminate ion **(AlCl₄⁻)**.\n\nIn Stage 2, the AlCl₄⁻ acts as a base: one Al−Cl bond breaks and both electrons remove the H⁺ from the ring → **HCl** formed + **AlCl₃ regenerated** (catalyst cycle complete).'
      }
    },
    {
      id: 'h-fc-acylation-step2',
      type: 'heading',
      data: { text: '2. Electrophilic Attack & Regeneration of Aromaticity', level: 3 }
    },
    {
      id: 'p-fc-acylation-mech-2',
      type: 'paragraph',
      data: {
        text: 'The electrophilic CH₃CO⁺ ion attacks the delocalised π electrons of the benzene ring, forming the broken arenium ion intermediate. In the fast second step, the AlCl₄⁻ ion removes a proton (H⁺) from the ring, forming HCl as a byproduct. This restores the fully delocalised aromatic system to yield phenylethanone and regenerates the AlCl₃ catalyst.'
      }
    },
    {
      id: 'eq-fc-acylation-regen',
      type: 'equation',
      data: {
        html: '[C<sub>6</sub>H<sub>5</sub>−COCH<sub>3</sub>]<sup>+</sup> + AlCl<sub>4</sub><sup>−</sup> → C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> + HCl + AlCl<sub>3</sub>'
      }
    },
    {
      id: 'svg-fc-acylation-mech',
      type: 'svg',
      data: {
        caption: 'Friedel-Crafts acylation mechanism. Stage 1 (slow, RDS): acylium ion CH₃CO⁺ attacks the π electrons → arenium ion with COCH₃ group attached. Stage 2 (fast): AlCl₄⁻ removes H⁺ via an Al−Cl bond → phenylethanone + HCl + AlCl₃ (catalyst regenerated).',
        svg: `<svg viewBox="0 0 540 370" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .hxg { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#64748b; stroke-width:1.5; fill:none; }
      .cur { fill:none; stroke:#2563eb; stroke-width:1.8; }
      .hd  { font-size:12px; font-weight:700; }
      .lbl { fill:#1f2937; font-size:11px; }
      .dim { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-fca" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#64748b"/>
    </marker>
    <marker id="ca-fca" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#2563eb"/>
    </marker>
  </defs>

  <!-- Stage 1 background (light blue) -->
  <rect x="8" y="8" width="524" height="175" rx="5" fill="#1c3a64" stroke="#93c5fd" stroke-width="1.2"/>
  <text x="20" y="27" class="hd" fill="#1d4ed8" text-anchor="start">Stage 1 (slow — RDS): CH₃CO⁺ attacks the π electrons</text>

  <!-- Benzene ring: center=(80,100), pointy-top hexagon, r=35 -->
  <polygon points="80 65, 110 83, 110 117, 80 135, 50 117, 50 83" class="hxg"/>
  <circle cx="80" cy="100" r="18" class="hxg"/>
  <text x="80" y="54" class="dim" text-anchor="middle">δ⁻ π electrons</text>

  <!-- "+" operator and CH₃CO⁺ electrophile -->
  <text x="133" y="104" class="atm" text-anchor="middle">+</text>
  <text x="165" y="104" class="atm" text-anchor="middle">CH₃CO</text>
  <text x="191" y="91" class="chg" text-anchor="start">+</text>

  <!-- Curly arrow: from upper-right vertex (110,83) → CH₃CO⁺ carbon (~168,97) -->
  <path d="M 109 85 Q 130 62 168 97" class="cur" marker-end="url(#ca-fca)"/>

  <!-- Reaction arrow → -->
  <line x1="213" y1="98" x2="252" y2="98" class="rxn" marker-end="url(#ah-fca)"/>
  <text x="232" y="116" class="dim" text-anchor="middle">ring</text>
  <text x="232" y="127" class="dim" text-anchor="middle">disrupted</text>

  <!-- Arenium ion: center=(340,100), r=35 -->
  <polygon points="340 65, 370 83, 370 117, 340 135, 310 117, 310 83" class="hxg"/>
  <!-- Horseshoe arc (300°, gap at top): center(340,100), r=18 -->
  <path d="M 353 87 A 18 18 0 1 1 327 87" class="hxg" fill="none"/>
  <!-- COCH₃ bonded at top carbon (340,65), going up -->
  <line x1="340" y1="65" x2="340" y2="46" stroke="#111827" stroke-width="1.8"/>
  <text x="340" y="39" class="atm" text-anchor="middle">COCH₃</text>
  <!-- H beside top carbon -->
  <text x="355" y="66" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="340" y="104" class="chg" text-anchor="middle" font-size="14">+</text>
  <text x="340" y="152" class="dim" text-anchor="middle">arenium ion</text>

  <!-- Stage 2 background (light green) -->
  <rect x="8" y="190" width="524" height="174" rx="5" fill="#0a2e1a" stroke="#86efac" stroke-width="1.2"/>
  <text x="20" y="209" class="hd" fill="#15803d" text-anchor="start">Stage 2 (fast): AlCl₄⁻ removes H⁺ → ring restored, AlCl₃ regenerated</text>

  <!-- Arenium ion (Stage 2): center=(80,280), r=35 -->
  <polygon points="80 245, 110 263, 110 297, 80 315, 50 297, 50 263" class="hxg"/>
  <!-- Horseshoe arc: center(80,280), r=18 -->
  <path d="M 93 267 A 18 18 0 1 1 67 267" class="hxg" fill="none"/>
  <!-- COCH₃ going up -->
  <line x1="80" y1="245" x2="80" y2="222" stroke="#111827" stroke-width="1.8"/>
  <text x="80" y="216" class="atm" text-anchor="middle">COCH₃</text>
  <!-- H beside top carbon -->
  <text x="95" y="246" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="80" y="284" class="chg" text-anchor="middle" font-size="14">+</text>

  <!-- AlCl₄⁻ approaching from upper-right of arenium ion -->
  <text x="158" y="250" class="atm" text-anchor="middle">AlCl₄</text>
  <text x="179" y="237" class="chg" text-anchor="start">−</text>

  <!-- Curly arrow 1: Al-Cl bond electrons → H on ring (Cl removes H) -->
  <path d="M 138 247 Q 120 243 100 245" class="cur" marker-end="url(#ca-fca)"/>
  <!-- Curly arrow 2: C–H bond electrons → fill horseshoe gap (restore ring) -->
  <path d="M 97 248 Q 98 257 94 267" class="cur" marker-end="url(#ca-fca)"/>

  <!-- Reaction arrow → -->
  <line x1="205" y1="280" x2="244" y2="280" class="rxn" marker-end="url(#ah-fca)"/>
  <text x="224" y="298" class="dim" text-anchor="middle">ring</text>
  <text x="224" y="309" class="dim" text-anchor="middle">restored ✓</text>

  <!-- Phenylethanone product: center=(322,280), r=35 -->
  <polygon points="322 245, 352 263, 352 297, 322 315, 292 297, 292 263" class="hxg"/>
  <!-- Full inner circle (delocalisation fully restored) -->
  <circle cx="322" cy="280" r="18" class="hxg"/>
  <!-- COCH₃ going up -->
  <line x1="322" y1="245" x2="322" y2="222" stroke="#111827" stroke-width="1.8"/>
  <text x="322" y="216" class="atm" text-anchor="middle">COCH₃</text>
  <text x="322" y="331" class="dim" text-anchor="middle">phenylethanone</text>

  <!-- "+ HCl + AlCl₃" products -->
  <text x="366" y="283" class="atm" text-anchor="middle">+</text>
  <text x="394" y="276" class="atm" text-anchor="middle">HCl</text>
  <text x="424" y="283" class="atm" text-anchor="middle">+</text>
  <text x="463" y="272" class="atm" text-anchor="middle">AlCl₃</text>
  <text x="463" y="288" class="dim" text-anchor="middle">(cat. regen. ✓)</text>
</svg>`
      }
    },
    {
      id: 'h-fc-alkylation',
      type: 'heading',
      data: { text: 'Friedel-Crafts Alkylation', level: 2 }
    },
    {
      id: 'p-fc-alkylation-intro',
      type: 'paragraph',
      data: {
        text: 'Friedel-Crafts alkylation involves substituting an **alkyl group** (like methyl, CH₃−) into the ring. This gives an alkylbenzene (e.g., methylbenzene). The reagents are a **chloroalkane** (e.g., chloromethane, CH₃Cl) and the same **aluminium chloride** catalyst (AlCl₃).'
      }
    },
    {
      id: 'eq-fc-alkylation-overall',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>Cl <span style="font-size:11px;color:#64748b">[AlCl<sub>3</sub> catalyst]</span>→ C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + HCl<br />(methylbenzene — once known as toluene)'
      }
    },
    {
      id: 'h-fc-alkylation-step1',
      type: 'heading',
      data: { text: '1. Formation of the Electrophile', level: 3 }
    },
    {
      id: 'p-fc-alkylation-mech-1',
      type: 'paragraph',
      data: {
        text: 'The electrophile is a carbocation, such as CH₃⁺. Similar to acylation, it forms when AlCl₃ removes the chloride ion from the chloroalkane.'
      }
    },
    {
      id: 'eq-fc-alkylation-activation',
      type: 'equation',
      data: {
        html: 'CH<sub>3</sub>Cl + AlCl<sub>3</sub> → CH<sub>3</sub><sup>+</sup> + AlCl<sub>4</sub><sup>−</sup>'
      }
    },
    {
      id: 'h-fc-alkylation-step2',
      type: 'heading',
      data: { text: '2. Electrophilic Attack & Regeneration', level: 3 }
    },
    {
      id: 'p-fc-alkylation-mech-2',
      type: 'paragraph',
      data: {
        text: 'The highly positive CH₃⁺ attacks the ring to form the arenium ion. Then, the AlCl₄⁻ removes a hydrogen ion from the ring to restore aromaticity, producing methylbenzene, HCl gas, and regenerating the AlCl₃ catalyst.'
      }
    },
        {
      id: 'eq-fc-alkylation-regen',
      type: 'equation',
      data: {
        html: '[C<sub>6</sub>H<sub>5</sub>−CH<sub>3</sub>]<sup>+</sup> + AlCl<sub>4</sub><sup>−</sup> → C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + HCl + AlCl<sub>3</sub>'
      }
    },
    {
      id: 'svg-fc-alkylation-mech',
      type: 'svg',
      data: {
        caption: 'Friedel-Crafts alkylation mechanism. Stage 1 (slow, RDS): CH₃⁺ attacks π electrons → arenium ion with CH₃ attached. Stage 2 (fast): AlCl₄⁻ removes H⁺ → methylbenzene + HCl + AlCl₃ (catalyst regenerated).',
        svg: `<svg viewBox="0 0 540 370" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .hxg { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#64748b; stroke-width:1.5; fill:none; }
      .cur { fill:none; stroke:#2563eb; stroke-width:1.8; }
      .hd  { font-size:12px; font-weight:700; }
      .lbl { fill:#1f2937; font-size:11px; }
      .dim { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-fcalk" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#64748b"/>
    </marker>
    <marker id="ca-fcalk" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#2563eb"/>
    </marker>
  </defs>

  <!-- Stage 1 background (light blue) -->
  <rect x="8" y="8" width="524" height="175" rx="5" fill="#1c3a64" stroke="#93c5fd" stroke-width="1.2"/>
  <text x="20" y="27" class="hd" fill="#1d4ed8" text-anchor="start">Stage 1 (slow — RDS): CH₃⁺ attacks the π electrons</text>

  <!-- Benzene ring: center=(80,100), pointy-top hexagon, r=35 -->
  <polygon points="80 65, 110 83, 110 117, 80 135, 50 117, 50 83" class="hxg"/>
  <circle cx="80" cy="100" r="18" class="hxg"/>
  <text x="80" y="54" class="dim" text-anchor="middle">δ⁻ π electrons</text>

  <!-- "+" operator and CH₃⁺ electrophile -->
  <text x="133" y="104" class="atm" text-anchor="middle">+</text>
  <text x="165" y="104" class="atm" text-anchor="middle">CH₃</text>
  <text x="180" y="91" class="chg" text-anchor="start">+</text>

  <!-- Curly arrow: from upper-right vertex (110,83) → CH₃⁺ (~163,97) -->
  <path d="M 109 85 Q 128 62 163 97" class="cur" marker-end="url(#ca-fcalk)"/>

  <!-- Reaction arrow → -->
  <line x1="205" y1="98" x2="248" y2="98" class="rxn" marker-end="url(#ah-fcalk)"/>
  <text x="226" y="116" class="dim" text-anchor="middle">ring</text>
  <text x="226" y="127" class="dim" text-anchor="middle">disrupted</text>

  <!-- Arenium ion: center=(335,100), r=35 -->
  <polygon points="335 65, 365 83, 365 117, 335 135, 305 117, 305 83" class="hxg"/>
  <!-- Horseshoe arc (300°, gap at top) -->
  <path d="M 348 87 A 18 18 0 1 1 322 87" class="hxg" fill="none"/>
  <!-- CH₃ bonded at top carbon (335,65), going up -->
  <line x1="335" y1="65" x2="335" y2="46" stroke="#111827" stroke-width="1.8"/>
  <text x="335" y="40" class="atm" text-anchor="middle">CH₃</text>
  <!-- H beside top carbon -->
  <text x="350" y="66" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="335" y="104" class="chg" text-anchor="middle" font-size="14">+</text>
  <text x="335" y="152" class="dim" text-anchor="middle">arenium ion</text>

  <!-- Stage 2 background (light green) -->
  <rect x="8" y="190" width="524" height="174" rx="5" fill="#0a2e1a" stroke="#86efac" stroke-width="1.2"/>
  <text x="20" y="209" class="hd" fill="#15803d" text-anchor="start">Stage 2 (fast): AlCl₄⁻ removes H⁺ → ring restored, AlCl₃ regenerated</text>

  <!-- Arenium ion (Stage 2): center=(80,280), r=35 -->
  <polygon points="80 245, 110 263, 110 297, 80 315, 50 297, 50 263" class="hxg"/>
  <!-- Horseshoe arc -->
  <path d="M 93 267 A 18 18 0 1 1 67 267" class="hxg" fill="none"/>
  <!-- CH₃ going up -->
  <line x1="80" y1="245" x2="80" y2="226" stroke="#111827" stroke-width="1.8"/>
  <text x="80" y="220" class="atm" text-anchor="middle">CH₃</text>
  <!-- H beside top carbon -->
  <text x="95" y="246" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="80" y="284" class="chg" text-anchor="middle" font-size="14">+</text>

  <!-- AlCl₄⁻ approaching from upper-right -->
  <text x="158" y="250" class="atm" text-anchor="middle">AlCl₄</text>
  <text x="179" y="237" class="chg" text-anchor="start">−</text>

  <!-- Curly arrow 1: Al-Cl bond → H on ring -->
  <path d="M 138 247 Q 120 243 100 245" class="cur" marker-end="url(#ca-fcalk)"/>
  <!-- Curly arrow 2: C–H bond → restore ring -->
  <path d="M 97 248 Q 98 257 94 267" class="cur" marker-end="url(#ca-fcalk)"/>

  <!-- Reaction arrow → -->
  <line x1="205" y1="280" x2="244" y2="280" class="rxn" marker-end="url(#ah-fcalk)"/>
  <text x="224" y="298" class="dim" text-anchor="middle">ring</text>
  <text x="224" y="309" class="dim" text-anchor="middle">restored ✓</text>

  <!-- Methylbenzene product: center=(320,280), r=35 -->
  <polygon points="320 245, 350 263, 350 297, 320 315, 290 297, 290 263" class="hxg"/>
  <!-- Full inner circle -->
  <circle cx="320" cy="280" r="18" class="hxg"/>
  <!-- CH₃ going up -->
  <line x1="320" y1="245" x2="320" y2="226" stroke="#111827" stroke-width="1.8"/>
  <text x="320" y="220" class="atm" text-anchor="middle">CH₃</text>
  <text x="320" y="331" class="dim" text-anchor="middle">methylbenzene</text>

  <!-- "+ HCl + AlCl₃" products -->
  <text x="364" y="283" class="atm" text-anchor="middle">+</text>
  <text x="390" y="276" class="atm" text-anchor="middle">HCl</text>
  <text x="420" y="283" class="atm" text-anchor="middle">+</text>
  <text x="460" y="272" class="atm" text-anchor="middle">AlCl₃</text>
  <text x="460" y="288" class="dim" text-anchor="middle">(cat. regen. ✓)</text>
</svg>`
      }
    },
    {
      id: 'callout-polyalkylation',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Polyalkylation Problem — Why Acylation is Preferred Over Direct Alkylation',
        text: 'The product of Friedel-Crafts alkylation (e.g. methylbenzene) is **more reactive than benzene** itself. The methyl group (CH₃) is electron-donating, which increases the electron density of the ring and activates it toward further electrophilic attack. This means the reaction does not stop at mono-alkylation — di-, tri-, and even fully-substituted products form, making separation very difficult.\n\n**Acylation avoids this problem:** the COCH₃ product group is electron-withdrawing (it deactivates the ring) — so the ring is LESS reactive after acylation, and further substitution does not occur.\n\n**Industrial solution:** Friedel-Crafts **acylation** → gives the ketone cleanly → then **reduce the C=O to CH₂** (Clemmensen: Zn/Hg, conc HCl; or Wolff-Kishner: NH₂NH₂, KOH) → net effect is the same as a pure mono-alkylation, but with much better selectivity.'
      }
    },
    {
      id: 'h-industrial-alkylation',
      type: 'heading',
      data: { text: 'Industrial Alkylation: Using Alkenes', level: 2 }
    },
    {
      id: 'p-industrial-alkylation-intro',
      type: 'paragraph',
      data: {
        text: 'Industrially, a cheaper variant of Friedel-Crafts alkylation is used to attach alkyl groups to benzene. Instead of using a haloalkane, the reaction uses an **alkene** along with a mixture of **hydrogen chloride (HCl) and aluminium chloride (AlCl₃)** as co-catalysts. This avoids the cost of manufacturing the chloroalkane first.'
      }
    },
    {
      id: 'h-industrial-alkylation-mech',
      type: 'heading',
      data: { text: 'Mechanism: Ethene and Propene', level: 3 }
    },
    {
      id: 'p-industrial-alkylation-ethene',
      type: 'paragraph',
      data: {
        text: 'For **ethene** (forming ethylbenzene), the alkene reacts with HCl to form an ethyl carbocation (CH₃CH₂⁺). The AlCl₃ immediately picks up the Cl⁻ ion to form AlCl₄⁻. The ethyl carbocation then acts as the electrophile, attacking the benzene ring exactly as in standard Friedel-Crafts alkylation.'
      }
    },
    {
      id: 'eq-ind-alkylation-ethene',
      type: 'equation',
      data: {
        html: 'CH<sub>2</sub>=CH<sub>2</sub> + HCl + AlCl<sub>3</sub> → CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> + AlCl<sub>4</sub><sup>−</sup>'
      }
    },
    {
      id: 'svg-ind-alkylation-mech',
      type: 'svg',
      data: {
        caption: 'Industrial alkylation mechanism (ethylbenzene synthesis). Stage 1 (slow, RDS): CH₃CH₂⁺ attacks π electrons → arenium ion with CH₂CH₃ attached. Stage 2 (fast): AlCl₄⁻ removes H⁺ → ethylbenzene + HCl + AlCl₃ (catalyst regenerated).',
        svg: `<svg viewBox="0 0 540 370" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .hxg { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#64748b; stroke-width:1.5; fill:none; }
      .cur { fill:none; stroke:#2563eb; stroke-width:1.8; }
      .hd  { font-size:12px; font-weight:700; }
      .lbl { fill:#1f2937; font-size:11px; }
      .dim { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-indalk" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#64748b"/>
    </marker>
    <marker id="ca-indalk" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#2563eb"/>
    </marker>
  </defs>

  <!-- Stage 1 background -->
  <rect x="8" y="8" width="524" height="175" rx="5" fill="#1c3a64" stroke="#93c5fd" stroke-width="1.2"/>
  <text x="20" y="27" class="hd" fill="#1d4ed8" text-anchor="start">Stage 1 (slow — RDS): CH₃CH₂⁺ attacks the π electrons</text>

  <!-- Benzene ring: center=(80,100), pointy-top hex, r=35 -->
  <polygon points="80 65, 110 83, 110 117, 80 135, 50 117, 50 83" class="hxg"/>
  <circle cx="80" cy="100" r="18" class="hxg"/>
  <text x="80" y="54" class="dim" text-anchor="middle">δ⁻ π electrons</text>

  <!-- "+" operator and CH₃CH₂⁺ electrophile -->
  <text x="133" y="104" class="atm" text-anchor="middle">+</text>
  <text x="173" y="104" class="atm" text-anchor="middle">CH₃CH₂</text>
  <text x="200" y="91" class="chg" text-anchor="start">+</text>

  <!-- Curly arrow: from upper-right vertex (110,83) → C of electrophile -->
  <path d="M 109 85 Q 130 60 163 97" class="cur" marker-end="url(#ca-indalk)"/>

  <!-- Reaction arrow → -->
  <line x1="218" y1="98" x2="255" y2="98" class="rxn" marker-end="url(#ah-indalk)"/>
  <text x="236" y="116" class="dim" text-anchor="middle">ring</text>
  <text x="236" y="127" class="dim" text-anchor="middle">disrupted</text>

  <!-- Arenium ion: center=(340,100), r=35 -->
  <polygon points="340 65, 370 83, 370 117, 340 135, 310 117, 310 83" class="hxg"/>
  <!-- Horseshoe arc (gap at top) -->
  <path d="M 353 87 A 18 18 0 1 1 327 87" class="hxg" fill="none"/>
  <!-- CH₂CH₃ bonded at top carbon, going up -->
  <line x1="340" y1="65" x2="340" y2="46" stroke="#111827" stroke-width="1.8"/>
  <text x="340" y="40" class="atm" text-anchor="middle">CH₂CH₃</text>
  <!-- H beside top carbon -->
  <text x="355" y="66" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="340" y="104" class="chg" text-anchor="middle" font-size="14">+</text>
  <text x="340" y="152" class="dim" text-anchor="middle">arenium ion (σ-complex)</text>

  <!-- Stage 2 background -->
  <rect x="8" y="190" width="524" height="174" rx="5" fill="#0a2e1a" stroke="#86efac" stroke-width="1.2"/>
  <text x="20" y="209" class="hd" fill="#15803d" text-anchor="start">Stage 2 (fast): AlCl₄⁻ removes H⁺ → ring restored, AlCl₃ regenerated</text>

  <!-- Arenium ion (Stage 2): center=(80,280), r=35 -->
  <polygon points="80 245, 110 263, 110 297, 80 315, 50 297, 50 263" class="hxg"/>
  <!-- Horseshoe arc -->
  <path d="M 93 267 A 18 18 0 1 1 67 267" class="hxg" fill="none"/>
  <!-- CH₂CH₃ going up -->
  <line x1="80" y1="245" x2="80" y2="226" stroke="#111827" stroke-width="1.8"/>
  <text x="80" y="220" class="atm" text-anchor="middle">CH₂CH₃</text>
  <!-- H beside top carbon -->
  <text x="95" y="246" class="lbl" text-anchor="start">H</text>
  <!-- + charge in ring -->
  <text x="80" y="284" class="chg" text-anchor="middle" font-size="14">+</text>

  <!-- AlCl₄⁻ approaching from right -->
  <text x="162" y="250" class="atm" text-anchor="middle">AlCl₄</text>
  <text x="183" y="237" class="chg" text-anchor="start">−</text>

  <!-- Curly arrow 1: Al-Cl bond electrons → H -->
  <path d="M 142 247 Q 122 243 102 245" class="cur" marker-end="url(#ca-indalk)"/>
  <!-- Curly arrow 2: C–H bond → restore ring -->
  <path d="M 97 248 Q 98 257 94 267" class="cur" marker-end="url(#ca-indalk)"/>

  <!-- Reaction arrow → -->
  <line x1="205" y1="280" x2="244" y2="280" class="rxn" marker-end="url(#ah-indalk)"/>
  <text x="224" y="298" class="dim" text-anchor="middle">ring</text>
  <text x="224" y="309" class="dim" text-anchor="middle">restored ✓</text>

  <!-- Ethylbenzene product: center=(320,280), r=35 -->
  <polygon points="320 245, 350 263, 350 297, 320 315, 290 297, 290 263" class="hxg"/>
  <!-- Full inner circle -->
  <circle cx="320" cy="280" r="18" class="hxg"/>
  <!-- CH₂CH₃ going up -->
  <line x1="320" y1="245" x2="320" y2="226" stroke="#111827" stroke-width="1.8"/>
  <text x="320" y="220" class="atm" text-anchor="middle">CH₂CH₃</text>
  <text x="320" y="331" class="dim" text-anchor="middle">ethylbenzene</text>

  <!-- "+ HCl + AlCl₃" products -->
  <text x="364" y="283" class="atm" text-anchor="middle">+</text>
  <text x="390" y="276" class="atm" text-anchor="middle">HCl</text>
  <text x="420" y="283" class="atm" text-anchor="middle">+</text>
  <text x="460" y="272" class="atm" text-anchor="middle">AlCl₃</text>
  <text x="460" y="288" class="dim" text-anchor="middle">(cat. regen. ✓)</text>
</svg>`
      }
    },
    {
      id: 'callout-propene-markovnikov',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Alkylation with Propene (Markovnikov Addition)',
        text: 'When using **propene**, addition of H⁺ leads to the more stable **secondary carbocation** (CH₃C⁺HCH₃) rather than a primary one. Because the positive charge is on the central carbon atom, the ring attaches there, forming **(1-methylethyl)benzene** (also known as isopropylbenzene or cumene), not propylbenzene.'
      }
    },
    {
      id: 'h-rate-determining-step',
      type: 'heading',
      data: { text: 'Rate-Determining Step and Reaction Rate', level: 3 }
    },
    {
      id: 'p-rate',
      type: 'paragraph',
      data: {
        text: 'Step 1 (electrophile attack, arenium ion formation) is slow and rate-determining. Step 2 (proton loss) is fast. The overall reaction rate depends on the electrophilicity of E⁺ and the electron density of the aromatic ring. Electron-donating groups on the ring accelerate EAS; electron-withdrawing groups decelerate it.'
      }
    },
    {
      id: 'checklist-mechanisms',
      type: 'checklist',
      data: {
        items: [
          { text: 'EAS mechanism: Two steps — slow arenium ion formation + fast H⁺ loss', checked: false },
          { text: 'Arenium ion breaks delocalisation; loss of H⁺ regenerates it', checked: false },
          { text: 'Nitration: conc H₂SO₄ generates NO₂⁺ from HNO₃; HSO₄⁻ removes H⁺ in Stage 2', checked: false },
          { text: 'Halogenation: AlCl₃ (or FeCl₃/AlBr₃/FeBr₃) polarises Cl₂ → δ+ Cl attacks ring; AlCl₄⁻ removes H⁺ in Stage 2 → chlorobenzene + HCl + AlCl₃ regenerated', checked: false },
          { text: 'Sulphonation: SO₃ (δ+ on S) attacks ring → arenium with O⁻; Stage 2 UNIQUE — O⁻ removes H⁺ directly (no external ion); O⁻ must be on same side as H', checked: false },
          { text: 'Friedel-Crafts acylation: AlCl₃ generates CH₃CO⁺ from CH₃COCl; AlCl₄⁻ removes H⁺ in Stage 2', checked: false },
          { text: 'Friedel-Crafts alkylation: AlCl₃ generates CH₃⁺ from CH₃Cl; AlCl₄⁻ removes H⁺ → methylbenzene; beware polyalkylation', checked: false },
          { text: 'Industrial alkylation: alkene + HCl + AlCl₃ → carbocation (CH₃CH₂⁺ from ethene; secondary cation from propene — Markovnikov); EAS mechanism identical; cheaper — no chloroalkane needed', checked: false },
          { text: 'Step 1 is rate-determining; Step 2 is fast', checked: false }
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
        text: 'Understand: The EAS mechanism involves: (1) electrophile generation, (2) attack on the π system forming a sigma complex (arenium ion), (3) loss of H⁺ restoring aromaticity.\n\nApply: Draw the full mechanism for the nitration of benzene, including formation of NO₂⁺.\n\nAnalyze: Why does the intermediate arenium ion lose H⁺ rather than gaining a nucleophile? Relate to delocalisation energy.\n\nEvaluate: The arenium ion is sometimes called a Wheland intermediate. Discuss whether it is truly an intermediate or a transition state.'
      },
      terms: []
    },
    {
      id: 'summary-mech',
      type: 'summary',
      data: {
        text: 'All benzene EAS reactions follow a two-step mechanism: (1) slow electrophile attack forms unstable arenium ion (delocalisation disrupted), (2) fast H⁺ loss regenerates aromatic ring. In nitration, conc H₂SO₄ generates NO₂⁺ from HNO₃; HSO₄⁻ (not bare H⁺) removes proton in Stage 2. In halogenation, Lewis acid (e.g. AlCl₃) activates Cl₂ to Cl⁺. In sulphonation, SO₃ (δ+ on S) is the electrophile; Stage 2 is unique — the O⁻ on the arenium directly removes H⁺ (no separate ion); O⁻ must be on the same side as H. In Friedel-Crafts acylation, AlCl₃ generates CH₃CO⁺ (acylium ion) from CH₃COCl; AlCl₄⁻ removes H⁺ in Stage 2 → phenylethanone + HCl + regenerated AlCl₃. In Friedel-Crafts alkylation, AlCl₃ generates CH₃⁺ from CH₃Cl; same Stage 2 gives methylbenzene — but polyalkylation is a problem (product is more reactive than starting material). Industrial alkylation uses alkene + HCl + AlCl₃ instead of a chloroalkane: HCl adds to the alkene to form the carbocation electrophile (CH₃CH₂⁺ from ethene; secondary cation from propene — Markovnikov); the EAS mechanism then proceeds identically. Step 1 is rate-limiting. The regeneration of aromaticity in Step 2 drives the reaction forward.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Friedel-Crafts Alkylation",
        text: "R-Cl + AlCl\u2083 \u2192 R\u207a (carbocation, electrophile). Benzene \u03c0-electrons attack R\u207a, form arenium, lose H\u207a. Limitation: R\u207a can rearrange if secondary (e.g., n-propyl halide gives isopropylbenzene). Cannot do F-C on amino or nitro-substituted benzenes (amine too reactive, nitro too deactivating)."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-general-1', prompt: 'Outline the general two-step mechanism of electrophilic aromatic substitution.' },
      { id: 'cue-0-svg', blockId: 'svg-eas-general-mech', prompt: 'Sketch the general EAS mechanism for benzene + X⁺. Label Stage 1 (attack, forms arenium ion) and Stage 2 (Y⁻ removes H⁺, ring restored). What feature of Stage 2 makes it thermodynamically favourable?' },
      { id: 'cue-1a', blockId: 'callout-eas-energetics', prompt: 'Explain the energy changes that occur during electrophilic aromatic substitution and why the activation energy is high.' },
      { id: 'cue-2', blockId: 'eq-nitronium-formation', prompt: 'How is the nitronium ion (NO₂⁺) generated in benzene nitration?' },
      { id: 'cue-2a', blockId: 'p-nitration-conditions', prompt: 'State the reagents and conditions required for the nitration of benzene, and explain why the temperature must be controlled.' },
      { id: 'cue-nitr-svg', blockId: 'svg-nitration-mech', prompt: 'Sketch the two-stage nitration mechanism for benzene. In Stage 2, what species removes the proton — and why is writing H⁺ "falling off" alone considered incorrect?' },
      { id: 'cue-3', blockId: 'p-halogenation-mech-polarisation', prompt: 'Explain how a Lewis acid catalyst like AlCl₃ activates Cl₂ in the halogenation of benzene.' },
      { id: 'cue-halog-svg', blockId: 'svg-halogenation-mech', prompt: 'Sketch the two-stage halogenation mechanism for benzene + Cl₂/AlCl₃. Show the δ+ Cl as electrophile in Stage 1 and identify the species that removes H⁺ in Stage 2. What is regenerated?' },
      { id: 'cue-sulphon-svg', blockId: 'svg-sulphonation-mech', prompt: 'Sketch the two-stage sulphonation mechanism. What is the electrophile? How does Stage 2 differ from every other benzene EAS reaction? Why must the O⁻ be drawn on a specific side of the arenium intermediate?' },
      { id: 'cue-fc-acyl-svg', blockId: 'svg-fc-acylation-mech', prompt: 'Sketch the two-stage Friedel-Crafts acylation mechanism. What is the electrophile? What removes H⁺ in Stage 2, and what is regenerated?' },
      { id: 'cue-fc-alkyl-svg', blockId: 'svg-fc-alkylation-mech', prompt: 'Sketch the two-stage Friedel-Crafts alkylation mechanism. What is the electrophile? Why does alkylation suffer from polyalkylation, and how is this avoided industrially?' },
      { id: 'cue-ind-alkyl-svg', blockId: 'svg-ind-alkylation-mech', prompt: 'Sketch the two-stage industrial alkylation mechanism for making ethylbenzene. How is the CH₃CH₂⁺ electrophile formed from ethene? Why is a secondary carbocation favoured with propene?' },
      { id: 'cue-4', blockId: 'p-rate', prompt: 'Which step is rate-determining in EAS, and what factors affect the rate?' }
    ],
    summaryText: 'EAS: Step 1 (slow) — E⁺ attacks π electrons → arenium ion (delocalisation broken). Step 2 (fast) — base removes H⁺ → aromatic ring regenerated. Nitration: H₂SO₄ protonates HNO₃ → NO₂⁺; Stage 2: HSO₄⁻ (NOT bare H⁺) removes proton → H₂SO₄ regenerated. Halogenation: AlCl₃ polarises Cl₂ so the δ+ Cl attacks ring → arenium ion + AlCl₄⁻; Stage 2: AlCl₄⁻ removes H⁺ → chlorobenzene + HCl + AlCl₃ regenerated. Step 1 is rate-determining. Regenerating aromaticity drives reaction.',
    ready: true
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Benzene EAS mechanisms and rate-determining steps',
      detail: 'Arenium ion intermediates, electrophile generation (NO₂⁺, Br⁺), rate laws, and experimental evidence for mechanism',
      year: '2023',
      source: 'chemguide.co.uk — benzene EAS mechanisms and intermediates',
      tags: ['mechanism', 'arenium', 'electrophile', 'rate-determining', 'nitronium']
    },
    {
      id: 'ev-2',
      title: 'Why benzene undergoes substitution, not addition — general EAS mechanism',
      detail: 'Benzene prefers substitution over addition because the delocalised π system (~150 kJ mol⁻¹ aromatic stabilisation) would be permanently destroyed in an addition product. In EAS: Stage 1 (slow) — X⁺ attacks π electrons → arenium ion (σ-complex) intermediate with partial ring and + charge; Stage 2 (fast) — Y⁻ (counter-ion from X⁺) removes H⁺, restoring full delocalisation. The restoration of aromaticity is the thermodynamic driving force that makes Stage 2 fast and irreversible.',
      source: 'https://www.chemguide.co.uk/mechanisms/elsub/whatis.html'
    },
    {
      id: 'ev-3',
      title: 'Nitration of benzene — full mechanism and HSO₄⁻ catalyst regeneration',
      detail: 'Reagents: conc HNO₃ + conc H₂SO₄, <50 °C. Electrophile: NO₂⁺ (nitronium ion). Stage 1: HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻; NO₂⁺ attacks π electrons → arenium ion. Stage 2: HSO₄⁻ (not bare H⁺) removes the proton → nitrobenzene + H₂SO₄ (catalyst regenerated). Writing H⁺ "falling off" alone is incorrect: bare proton cannot exist; HSO₄⁻ must be shown to demonstrate the catalytic cycle.',
      source: 'https://www.chemguide.co.uk/mechanisms/elsub/nitration.html'
    },
    {
      id: 'ev-4',
      title: 'Friedel-Crafts acylation — acylium ion formation and two-stage mechanism',
      detail: 'AlCl₃ (Lewis acid, only 6 electrons around Al) accepts Cl⁻ from ethanoyl chloride via a dative covalent bond → forms acylium ion CH₃CO⁺ + AlCl₄⁻. Stage 1 (slow, RDS): CH₃CO⁺ attacks benzene π electrons → arenium ion with COCH₃ attached and + charge in ring. Stage 2 (fast): AlCl₄⁻ donates an Al−Cl bond to remove H⁺ from ring → HCl formed, AlCl₃ regenerated, full aromatic delocalisation restored. Product: phenylethanone (a ketone). Overall: C₆H₆ + CH₃COCl → C₆H₅COCH₃ + HCl.',
      source: 'https://www.chemguide.co.uk/mechanisms/elsub/fcacyl.html'
    },
    {
      id: 'ev-5',
      title: 'Friedel-Crafts alkylation — carbocation electrophile and polyalkylation problem',
      detail: 'AlCl₃ accepts Cl⁻ from CH₃Cl (dative bond) → CH₃⁺ + AlCl₄⁻. Stage 1 (slow, RDS): CH₃⁺ attacks benzene π electrons → arenium ion. Stage 2 (fast): AlCl₄⁻ removes H⁺ → methylbenzene + HCl + AlCl₃ regenerated. Key problem: methylbenzene is MORE reactive than benzene (CH₃ is electron-donating), so further substitution occurs (polyalkylation). Acylation avoids this — COCH₃ is electron-withdrawing and deactivates the ring. Industrial route to pure mono-alkylbenzenes: Friedel-Crafts acylation then reduction of C=O (Clemmensen or Wolff-Kishner).',
      source: 'https://www.chemguide.co.uk/mechanisms/elsub/fcalkyl.html'
    },
    {
      id: 'ev-6',
      title: 'Industrial alkylation — alkene + HCl/AlCl₃ variant; secondary carbocation from propene',
      detail: 'Industrial variant: benzene + alkene + HCl + AlCl₃ (no chloroalkane needed). Electrophile CH₃CH₂⁺ formed by HCl adding to ethene (as per Markovnikov-type addition); AlCl₃ immediately traps Cl⁻ as AlCl₄⁻. Stage 1 (slow, RDS): CH₃CH₂⁺ attacks benzene π electrons → arenium ion. Stage 2 (fast): AlCl₄⁻ removes H⁺ → ethylbenzene + HCl + AlCl₃ regenerated. With propene: secondary carbocation (CH₃⁺CHCH₃) forms preferentially — more stable; product is (1-methylethyl)benzene (isopropylbenzene / cumene), not propylbenzene.',
      source: 'https://www.chemguide.co.uk/mechanisms/elsub/indalkyl.html',
      tags: ['mechanism', 'industrial', 'alkylation', 'carbocation', 'markovnikov', 'ethylbenzene', 'cumene']
    },
    {
      id: 'ev-7',
      title: 'Halogenation of benzene — Cl₂/AlCl₃ mechanism, Lewis acid activation, catalyst regeneration',
      detail: 'Benzene + Cl₂/AlCl₃ (or AlBr₃/FeCl₃/FeBr₃) → chlorobenzene/bromobenzene + HCl. Iron is not a true catalyst — it first reacts with Cl₂/Br₂ to form FeCl₃/FeBr₃ which then acts as Lewis acid. AlCl₃ is electron-deficient (3 bonding pairs around Al); it strongly polarises Cl₂, creating δ+ on nearer Cl. Stage 1 (slow, RDS): delocalised π electrons attack δ+ Cl; Cl–Cl bond breaks → AlCl₄⁻ forms; arenium ion (σ-complex) with Cl attached and + charge in ring. Stage 2 (fast): AlCl₄⁻ donates Al–Cl electrons to H on ring → HCl formed; ring delocalisation restored; AlCl₃ regenerated.',
      source: 'https://www.chemguide.co.uk/mechanisms/elsub/halogenation.html',
      tags: ['mechanism', 'halogenation', 'chlorobenzene', 'bromobenzene', 'lewis-acid', 'alcl3', 'fecl3', 'arenium', 'catalyst-regeneration']
    },
    {
      id: 'ev-8',
      title: 'Sulphonation of benzene — SO₃ electrophile, unique internal H-transfer in Stage 2',
      detail: 'Reagents: heat with conc H₂SO₄ (several hours) OR warm with fuming H₂SO₄ (H₂S₂O₇) at 40°C. Electrophile: SO₃ (from dissociation of H₂SO₄ or dissolved in H₂S₂O₇). SO₃ is highly polar — significant δ+ on S. Stage 1 (slow, RDS): δ+S attacks benzene π electrons → new C−S bond; two electrons from S=O forced onto O → O⁻ on arenium. Stage 2 (fast, UNIQUE): no external ion — O⁻ on the intermediate uses lone pair to remove H⁺ from ring; C−H electrons restore delocalisation → benzenesulphonic acid. Critical: O⁻ must be on the same side as H; wrong placement makes curly arrows impossible.',
      source: 'https://www.chemguide.co.uk/mechanisms/elsub/sulphonation.html',
      tags: ['mechanism', 'sulphonation', 'benzenesulphonic-acid', 'so3', 'internal-proton-transfer', 'unique-stage2']
    }
  ]
};
