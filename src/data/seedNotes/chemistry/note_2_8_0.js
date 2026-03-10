/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 0
 * "Definitions of Oxidation and Reduction (Redox Basics)"
 * Source: Pearson Edexcel IAL Chemistry — Section 8A.1
 * Enhanced: oxygen-transfer, hydrogen-transfer, electron-transfer definitions; OIL RIG; oxidising/reducing agents; SVG diagrams; flowchart.
 */
export const note_chemistry_2_8_0 = {
    blocks: [
        // ── Objective ─────────────────────────────────────────────────────────
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Define oxidation and reduction using three definitions (oxygen transfer, hydrogen transfer, electron transfer); identify oxidising and reducing agents; apply OIL RIG to electron-transfer redox reactions.' },
            terms: []
        },

        // ── Overview Table ────────────────────────────────────────────────────
        {
            id: 'h-overview',
            type: 'heading',
            data: { text: 'Three Definitions of Oxidation and Reduction', level: 2 },
            terms: []
        },
        {
            id: 'table-overview',
            type: 'comparisonTable',
            data: {
                caption: 'Summary: Three Definitions of Redox',
                headers: ['Definition', 'OXIDATION', 'REDUCTION', 'Main use'],
                rows: [
                    ['1. Oxygen transfer', 'Gain of oxygen', 'Loss of oxygen', 'Inorganic reactions (e.g. metal extraction)'],
                    ['2. Hydrogen transfer', 'Loss of hydrogen', 'Gain of hydrogen', 'Organic chemistry (e.g. alcohol oxidation)'],
                    ['3. Electron transfer ★', 'Loss of electrons (OIL)', 'Gain of electrons (RIG)', 'Most important — used throughout A-Level']
                ]
            },
            terms: ['Redox', 'Oxidation', 'Reduction']
        },

        // ── Definition 1: Oxygen Transfer ─────────────────────────────────────
        {
            id: 'h-oxygen',
            type: 'heading',
            data: { text: 'Definition 1: Oxygen Transfer', level: 2 },
            terms: []
        },
        {
            id: 'list-oxygen-def',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Oxidation</strong> = gain of oxygen by a substance.',
                    '<strong>Reduction</strong> = loss of oxygen by a substance.',
                    'Both processes occur <strong>simultaneously</strong> → the reaction is called a <strong>redox reaction</strong>.',
                    '<strong>Oxidising agent</strong> = gives oxygen to another substance (is itself reduced).',
                    '<strong>Reducing agent</strong> = removes oxygen from another substance (is itself oxidised).'
                ]
            },
            terms: ['Oxidising agent', 'Reducing agent']
        },
        {
            id: 'svg-oxygen-redox',
            type: 'svg',
            data: {
                caption: 'Blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂ — oxygen-transfer redox reaction',
                svg: `<svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">
  <rect width="520" height="185" rx="10" fill="#f8f9ff"/>
  <text x="260" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Blast Furnace — Oxygen-Transfer Redox</text>
  <text x="260" y="46" text-anchor="middle" font-size="14" font-weight="600" fill="#1e293b">Fe₂O₃(s)  +  3CO(g)  →  2Fe(s)  +  3CO₂(g)</text>

  <!-- Fe₂O₃ box -->
  <rect x="15" y="62" width="145" height="68" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
  <text x="87" y="84" text-anchor="middle" font-weight="700" fill="#be185d" font-size="14">Fe₂O₃</text>
  <text x="87" y="102" text-anchor="middle" fill="#9d174d" font-size="11">Iron(III) oxide</text>
  <text x="87" y="117" text-anchor="middle" fill="#9d174d" font-size="11" font-weight="600">OXIDISING AGENT</text>
  <text x="87" y="130" text-anchor="middle" fill="#9d174d" font-size="10">(gives O → is REDUCED)</text>

  <!-- CO box -->
  <rect x="180" y="62" width="145" height="68" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="252" y="84" text-anchor="middle" font-weight="700" fill="#15803d" font-size="14">CO</text>
  <text x="252" y="102" text-anchor="middle" fill="#166534" font-size="11">Carbon monoxide</text>
  <text x="252" y="117" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">REDUCING AGENT</text>
  <text x="252" y="130" text-anchor="middle" fill="#166534" font-size="10">(takes O → is OXIDISED)</text>

  <!-- Products -->
  <rect x="345" y="62" width="75" height="68" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="382" y="87" text-anchor="middle" font-weight="700" fill="#6d28d9" font-size="13">2Fe</text>
  <text x="382" y="105" text-anchor="middle" fill="#5b21b6" font-size="11">Iron</text>
  <text x="382" y="120" text-anchor="middle" fill="#5b21b6" font-size="11">REDUCED</text>

  <rect x="435" y="62" width="75" height="68" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="472" y="87" text-anchor="middle" font-weight="700" fill="#b45309" font-size="13">3CO₂</text>
  <text x="472" y="105" text-anchor="middle" fill="#92400e" font-size="11">Carbon dioxide</text>
  <text x="472" y="120" text-anchor="middle" fill="#92400e" font-size="11">OXIDISED</text>

  <!-- O transfer arrow -->
  <path d="M 108 62 Q 180 32 245 62" stroke="#ec4899" stroke-width="2" fill="none" stroke-dasharray="4,3" marker-end="url(#aP)"/>
  <text x="178" y="28" text-anchor="middle" fill="#be185d" font-size="11" font-weight="600">O transferred →</text>

  <defs>
    <marker id="aP" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#ec4899"/>
    </marker>
  </defs>

  <text x="260" y="176" text-anchor="middle" fill="#64748b" font-size="10">Fe₂O₃ is the oxidising agent; CO is the reducing agent</text>
</svg>`
            },
            terms: []
        },

        // ── Definition 2: Hydrogen Transfer ────────────────────────────────────
        {
            id: 'h-hydrogen',
            type: 'heading',
            data: { text: 'Definition 2: Hydrogen Transfer', level: 2 },
            terms: []
        },
        {
            id: 'list-hydrogen-def',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Oxidation</strong> = loss of hydrogen by a substance.',
                    '<strong>Reduction</strong> = gain of hydrogen by a substance.',
                    '<em>⚠ Notice:</em> This is the <strong>opposite</strong> of the oxygen definition — vital to remember!',
                    'Mainly used in <strong>organic chemistry</strong> (e.g. alcohol → aldehyde).',
                    '<strong>Oxidising agent</strong> = removes hydrogen from a substance (or gives oxygen to it).',
                    '<strong>Reducing agent</strong> = adds hydrogen to a substance (or removes oxygen from it).'
                ]
            },
            terms: []
        },
        {
            id: 'callout-hydrogen-ex',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Ethanol → Ethanal (Hydrogen-Transfer Oxidation)',
                text: '<strong>Reaction:</strong> CH₃CH₂OH → CH₃CHO<br/><br/>' +
                    '• Ethanol <em>loses</em> hydrogen atoms → it is <strong>OXIDISED</strong>.<br/>' +
                    '• An <strong>oxidising agent</strong> is required to remove the H atoms.<br/>' +
                    '• Common oxidising agent: acidified potassium dichromate(VI) — K₂Cr₂O₇ / dilute H₂SO₄.<br/><br/>' +
                    '<strong>Reverse — Reduction of ethanal:</strong> CH₃CHO → CH₃CH₂OH<br/>' +
                    '• Ethanal <em>gains</em> hydrogen → it is <strong>REDUCED</strong>.<br/>' +
                    '• A <strong>reducing agent</strong> is needed, e.g. NaBH₄ (sodium tetrahydridoborate).'
            },
            terms: ['Potassium dichromate(VI)']
        },
        {
            id: 'svg-hydrogen-flow',
            type: 'svg',
            data: {
                caption: 'Hydrogen-transfer redox: ethanol ⇌ ethanal (organic chemistry)',
                svg: `<svg viewBox="0 0 480 135" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">
  <rect width="480" height="135" rx="10" fill="#f0fdf4"/>
  <text x="240" y="22" text-anchor="middle" font-weight="700" font-size="14" fill="#14532d">Hydrogen-Transfer Redox in Organic Chemistry</text>

  <!-- Ethanol -->
  <rect x="20" y="38" width="155" height="62" rx="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="97" y="60" text-anchor="middle" font-weight="700" fill="#15803d" font-size="14">CH₃CH₂OH</text>
  <text x="97" y="78" text-anchor="middle" fill="#166534" font-size="12">Ethanol</text>
  <text x="97" y="94" text-anchor="middle" fill="#166534" font-size="11">More H atoms</text>

  <!-- Ethanal -->
  <rect x="305" y="38" width="155" height="62" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
  <text x="382" y="60" text-anchor="middle" font-weight="700" fill="#c2410c" font-size="14">CH₃CHO</text>
  <text x="382" y="78" text-anchor="middle" fill="#7c2d12" font-size="12">Ethanal</text>
  <text x="382" y="94" text-anchor="middle" fill="#7c2d12" font-size="11">Fewer H atoms</text>

  <!-- Forward arrow: oxidation -->
  <line x1="177" y1="58" x2="303" y2="58" stroke="#16a34a" stroke-width="2" marker-end="url(#aG)"/>
  <text x="240" y="51" text-anchor="middle" fill="#15803d" font-size="11" font-weight="600">[O] oxidising agent →</text>
  <text x="240" y="40" text-anchor="middle" fill="#15803d" font-size="10">OXIDATION (loss of H)</text>

  <!-- Backward arrow: reduction -->
  <line x1="303" y1="78" x2="177" y2="78" stroke="#ea580c" stroke-width="2" marker-end="url(#aO)"/>
  <text x="240" y="96" text-anchor="middle" fill="#c2410c" font-size="11" font-weight="600">← [H] reducing agent</text>
  <text x="240" y="111" text-anchor="middle" fill="#c2410c" font-size="10">REDUCTION (gain of H)</text>

  <defs>
    <marker id="aG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/>
    </marker>
    <marker id="aO" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#ea580c"/>
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },

        // ── Definition 3: Electron Transfer ────────────────────────────────────
        {
            id: 'h-electron',
            type: 'heading',
            data: { text: 'Definition 3: Electron Transfer ★ (Most Important at A-Level)', level: 2 },
            terms: []
        },
        {
            id: 'callout-oilrig',
            type: 'callout',
            data: {
                style: 'key',
                title: 'OIL RIG — Electron-Transfer Definitions',
                text: '• <strong>O</strong>xidation <strong>I</strong>s <strong>L</strong>oss of electrons (OIL).<br/>' +
                    '• <strong>R</strong>eduction <strong>I</strong>s <strong>G</strong>ain of electrons (RIG).<br/><br/>' +
                    '• Electrons <strong>cannot exist independently</strong> — electrons lost by one substance must be gained by another.<br/>' +
                    '• Therefore oxidation and reduction always occur <strong>simultaneously</strong> in any redox reaction.'
            },
            terms: ['Redox', 'Oxidation', 'Reduction']
        },
        {
            id: 'svg-oilrig',
            type: 'svg',
            data: {
                caption: 'OIL RIG mnemonic — Oxidation Is Loss, Reduction Is Gain (of electrons)',
                svg: `<svg viewBox="0 0 480 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">
  <rect width="480" height="165" rx="10" fill="#eef2ff"/>

  <!-- OIL side -->
  <rect x="20" y="25" width="200" height="120" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="52" text-anchor="middle" font-size="26" font-weight="900" fill="#dc2626">OIL</text>
  <text x="120" y="74" text-anchor="middle" font-size="13" font-weight="600" fill="#7f1d1d">Oxidation Is Loss</text>
  <text x="120" y="92" text-anchor="middle" font-size="12" fill="#991b1b">...of electrons</text>
  <text x="120" y="112" text-anchor="middle" font-size="11" fill="#991b1b">Electron count ↓</text>
  <text x="120" y="130" text-anchor="middle" font-size="11" fill="#991b1b">Oxidation number ↑</text>
  <text x="120" y="143" text-anchor="middle" font-size="11" fill="#991b1b">Species → loses e⁻</text>

  <!-- Divider -->
  <line x1="240" y1="25" x2="240" y2="145" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="240" y="92" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,240,92)">REDOX</text>

  <!-- RIG side -->
  <rect x="260" y="25" width="200" height="120" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="360" y="52" text-anchor="middle" font-size="26" font-weight="900" fill="#16a34a">RIG</text>
  <text x="360" y="74" text-anchor="middle" font-size="13" font-weight="600" fill="#14532d">Reduction Is Gain</text>
  <text x="360" y="92" text-anchor="middle" font-size="12" fill="#15803d">...of electrons</text>
  <text x="360" y="112" text-anchor="middle" font-size="11" fill="#15803d">Electron count ↑</text>
  <text x="360" y="130" text-anchor="middle" font-size="11" fill="#15803d">Oxidation number ↓</text>
  <text x="360" y="143" text-anchor="middle" font-size="11" fill="#15803d">Species → gains e⁻</text>

  <!-- Electron flow label -->
  <text x="240" y="158" text-anchor="middle" font-size="11" fill="#1e40af" font-weight="600">e⁻ flow: OXIDISED species ——→ REDUCED species</text>
</svg>`
            },
            terms: []
        },
        {
            id: 'list-half-eqs',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Oxidation half-equation:</strong> Reactant → Product + e⁻ (electrons on the right, lost by species).',
                    '<strong>Reduction half-equation:</strong> Reactant + e⁻ → Product (electrons on the left, gained by species).',
                    'To form the full ionic equation: balance the number of electrons in each half-equation, then add and cancel e⁻.',
                    'The species that loses electrons acts as the <strong>reducing agent</strong>.',
                    'The species that gains electrons acts as the <strong>oxidising agent</strong>.'
                ]
            },
            terms: ['Half-equation']
        },

        // ── Oxidising and Reducing Agents Summary ─────────────────────────────
        {
            id: 'h-agents',
            type: 'heading',
            data: { text: 'Oxidising and Reducing Agents — Full Summary', level: 2 },
            terms: []
        },
        {
            id: 'table-agents',
            type: 'comparisonTable',
            data: {
                caption: 'Oxidising and Reducing Agents (electron-transfer definition)',
                headers: ['Agent', 'Effect on other substance', 'What happens to it', 'Electrons'],
                rows: [
                    ['Oxidising Agent', 'Oxidises it (takes electrons)', 'Is itself REDUCED', 'GAINS electrons'],
                    ['Reducing Agent', 'Reduces it (gives electrons)', 'Is itself OXIDISED', 'LOSES electrons']
                ]
            },
            terms: ['Oxidising agent', 'Reducing agent']
        },
        {
            id: 'svg-cuo-mg',
            type: 'svg',
            data: {
                caption: 'Cu²⁺ + Mg → Cu + Mg²⁺: half-equations and identification of agents',
                svg: `<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13">
  <rect width="520" height="210" rx="10" fill="#fafafa"/>
  <text x="260" y="20" text-anchor="middle" font-weight="700" font-size="14" fill="#1e293b">CuO + Mg → Cu + MgO (Electron-Transfer Redox)</text>
  <text x="260" y="42" text-anchor="middle" font-size="13" fill="#334155">Ionic equation: Cu²⁺(aq)  +  Mg(s)  →  Cu(s)  +  Mg²⁺(aq)</text>

  <!-- Oxidation box -->
  <rect x="20" y="60" width="225" height="80" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="132" y="80" text-anchor="middle" font-weight="700" fill="#92400e">Oxidation Half-Equation</text>
  <text x="132" y="100" text-anchor="middle" fill="#78350f" font-size="14">Mg  →  Mg²⁺  +  2e⁻</text>
  <text x="132" y="118" text-anchor="middle" fill="#92400e" font-size="11">Mg LOSES 2e⁻  →  is OXIDISED</text>
  <text x="132" y="133" text-anchor="middle" fill="#92400e" font-size="11">∴ Mg is the REDUCING AGENT</text>

  <!-- Reduction box -->
  <rect x="275" y="60" width="225" height="80" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="387" y="80" text-anchor="middle" font-weight="700" fill="#4c1d95">Reduction Half-Equation</text>
  <text x="387" y="100" text-anchor="middle" fill="#4c1d95" font-size="14">Cu²⁺  +  2e⁻  →  Cu</text>
  <text x="387" y="118" text-anchor="middle" fill="#5b21b6" font-size="11">Cu²⁺ GAINS 2e⁻  →  is REDUCED</text>
  <text x="387" y="133" text-anchor="middle" fill="#5b21b6" font-size="11">∴ Cu²⁺ is the OXIDISING AGENT</text>

  <!-- Electron flow arrow -->
  <path d="M 247 100 Q 260 90 273 100" stroke="#dc2626" stroke-width="2.5" fill="none" marker-end="url(#aR)"/>
  <text x="260" y="87" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="700">2e⁻</text>

  <!-- Summary bar -->
  <rect x="20" y="155" width="480" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
  <text x="260" y="172" text-anchor="middle" fill="#0c4a6e" font-weight="600" font-size="12">Cu²⁺: +2 → 0 (reduced) | Mg: 0 → +2 (oxidised)</text>
  <text x="260" y="190" text-anchor="middle" fill="#0369a1" font-size="11">OIL RIG: electrons flow FROM Mg (oxidised) TO Cu²⁺ (reduced)</text>

  <defs>
    <marker id="aR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/>
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },

        // ── Exam Tip ──────────────────────────────────────────────────────────
        {
            id: 'callout-logic',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Logic for Working Out Oxidising/Reducing Agents',
                text: 'Rather than memorising, <em>reason it out</em> using OIL RIG:<br/><br/>' +
                    '<strong>Does an oxidising agent gain or lose electrons?</strong><br/>' +
                    '1. An oxidising agent <em>oxidises</em> something else.<br/>' +
                    '2. Oxidation = loss of electrons (OIL RIG).<br/>' +
                    '3. The other substance loses electrons → they go to the oxidising agent.<br/>' +
                    '4. ∴ The oxidising agent <strong>gains electrons</strong> (is reduced).<br/><br/>' +
                    '⚠ <strong>Common error:</strong> Confusing which species is the agent. The oxidising agent is the one BEING REDUCED.'
            },
            terms: []
        },

        // ── Flowchart: Identifying Redox ──────────────────────────────────────
        {
            id: 'svg-flowchart',
            type: 'svg',
            data: {
                caption: 'Flowchart: how to identify oxidation, reduction, and agents in any reaction',
                svg: `<svg viewBox="0 0 480 305" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <rect width="480" height="305" rx="10" fill="#f8fafc"/>
  <text x="240" y="20" text-anchor="middle" font-weight="700" font-size="14" fill="#1e293b">Identifying Redox — Step-by-Step</text>

  <!-- Step 1 -->
  <rect x="140" y="32" width="200" height="38" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="240" y="49" text-anchor="middle" fill="#1e40af" font-weight="600">Step 1</text>
  <text x="240" y="63" text-anchor="middle" fill="#1d4ed8" font-size="11">Assign oxidation numbers to all atoms</text>
  <line x1="240" y1="70" x2="240" y2="90" stroke="#64748b" stroke-width="1.5" marker-end="url(#aGr)"/>

  <!-- Step 2 -->
  <rect x="140" y="90" width="200" height="38" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="240" y="107" text-anchor="middle" fill="#1e40af" font-weight="600">Step 2</text>
  <text x="240" y="121" text-anchor="middle" fill="#1d4ed8" font-size="11">Compare ox. numbers before and after</text>
  <line x1="240" y1="128" x2="240" y2="148" stroke="#64748b" stroke-width="1.5" marker-end="url(#aGr)"/>

  <!-- Decision diamond -->
  <polygon points="240,148 355,180 240,212 125,180" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="240" y="176" text-anchor="middle" fill="#92400e" font-weight="600" font-size="12">Any change?</text>
  <text x="240" y="194" text-anchor="middle" fill="#92400e" font-size="10">(in ox. numbers)</text>

  <!-- YES branch -->
  <line x1="355" y1="180" x2="422" y2="180" stroke="#16a34a" stroke-width="1.5" marker-end="url(#aGn)"/>
  <text x="387" y="173" text-anchor="middle" fill="#15803d" font-size="11">YES</text>
  <rect x="424" y="158" width="50" height="44" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <text x="449" y="176" text-anchor="middle" fill="#14532d" font-size="10" font-weight="700">REDOX</text>
  <text x="449" y="192" text-anchor="middle" fill="#14532d" font-size="10">reaction</text>

  <!-- NO branch -->
  <line x1="125" y1="180" x2="58" y2="180" stroke="#dc2626" stroke-width="1.5" marker-end="url(#aRd)"/>
  <text x="90" y="173" text-anchor="middle" fill="#dc2626" font-size="11">NO</text>
  <rect x="6" y="158" width="50" height="44" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="31" y="176" text-anchor="middle" fill="#7f1d1d" font-size="10" font-weight="700">NOT</text>
  <text x="31" y="192" text-anchor="middle" fill="#7f1d1d" font-size="10">redox</text>

  <!-- Step 3 -->
  <line x1="240" y1="212" x2="240" y2="232" stroke="#64748b" stroke-width="1.5" marker-end="url(#aGr)"/>
  <rect x="85" y="232" width="310" height="60" rx="8" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
  <text x="240" y="250" text-anchor="middle" fill="#1e293b" font-weight="600">Step 3: Label each species</text>
  <text x="240" y="268" text-anchor="middle" fill="#475569" font-size="11">↑ Ox. number → OXIDISED → that species is the reducing agent</text>
  <text x="240" y="283" text-anchor="middle" fill="#475569" font-size="11">↓ Ox. number → REDUCED → that species is the oxidising agent</text>

  <defs>
    <marker id="aGr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#64748b"/>
    </marker>
    <marker id="aGn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/>
    </marker>
    <marker id="aRd" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/>
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },

        // ── Checklist ─────────────────────────────────────────────────────────
        {
            id: 'checklist-redox',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State the oxygen-transfer definition of oxidation and reduction.', checked: false },
                    { text: 'State the hydrogen-transfer definition and explain why it is the OPPOSITE of the oxygen definition.', checked: false },
                    { text: 'Write the OIL RIG mnemonic from memory and give a half-equation example.', checked: false },
                    { text: 'Identify the oxidising agent and reducing agent in Cu²⁺ + Mg → Cu + Mg²⁺.', checked: false },
                    { text: 'Explain what happens to the oxidising agent in terms of electrons (it is REDUCED / gains e⁻).', checked: false },
                    { text: 'Write half-equations for a given redox reaction and combine them into a full ionic equation.', checked: false }
                ]
            },
            terms: []
        },

        // ── Summary ───────────────────────────────────────────────────────────
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: '• Redox = simultaneous oxidation + reduction.\n• Definition 1 (Oxygen): oxidation = gain O; reduction = loss O.\n• Definition 2 (Hydrogen): oxidation = loss H; reduction = gain H (opposite to oxygen rules; mainly organic chemistry).\n• Definition 3 (Electron — most important): OIL RIG — Oxidation Is Loss, Reduction Is Gain of electrons.\n• Oxidising agent GAINS electrons (is reduced). Reducing agent LOSES electrons (is oxidised).\n• Use oxidation number changes to identify what is oxidised, what is reduced, and which species is each type of agent.'
            },
            terms: []
        }
    ],

    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-overview', prompt: 'Give the definition of oxidation and reduction in terms of (a) oxygen transfer and (b) hydrogen transfer. Which definition is opposite to the other?' },
            { id: 'c2', blockId: 'callout-oilrig', prompt: 'What does OIL RIG stand for? Why can\'t electrons exist separately in a redox reaction?' },
            { id: 'c3', blockId: 'table-agents', prompt: 'What happens to an oxidising agent in terms of electrons during a redox reaction?' },
            { id: 'c4', blockId: 'svg-cuo-mg', prompt: 'Write the two half-equations for Cu²⁺ + Mg → Cu + Mg²⁺ and identify the oxidising and reducing agents.' },
            { id: 'c5', blockId: 'callout-hydrogen-ex', prompt: 'Classify the reaction CH₃CH₂OH → CH₃CHO. What type of transfer defines this redox change? What reagent is commonly used?' },
            { id: 'c6', blockId: 'svg-flowchart', prompt: 'In Fe₂O₃ + 3CO → 2Fe + 3CO₂, which species is the oxidising agent and which is the reducing agent? Use the oxygen-transfer definition.' }
        ],
        summaryText: 'Three redox definitions: (1) Oxygen — oxidation = gain O, reduction = loss O; (2) Hydrogen — oxidation = loss H, reduction = gain H (opposite!); (3) Electron (most used) — OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons. Oxidising agent gains electrons and is reduced. Reducing agent loses electrons and is oxidised. Both occur simultaneously.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_0;
