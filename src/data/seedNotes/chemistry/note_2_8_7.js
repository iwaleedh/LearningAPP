/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 7
 * "Halides with Sulfuric Acid, Tests for Halides, HF Anomalies, and Chlorine Manufacture"
 * Source: Pearson Edexcel IAL Chemistry — Section 8C.3 + chemguide.co.uk/inorganic/group7
 */
export const note_chemistry_2_8_7 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the reducing ability of halide ions with concentrated H₂SO₄, the silver nitrate test for aqueous halides (with ammonia confirmation), the anomalous properties of HF, and the industrial manufacture of chlorine by electrolysis of brine.' },
            terms: []
        },
        {
            id: 'h-reducing',
            type: 'heading',
            data: { text: 'Reducing Ability of Halide Ions', level: 2 },
            terms: []
        },
        {
            id: 'p-reducing',
            type: 'paragraph',
            data: { text: 'Reducing ability increases down Group 7: F⁻ < Cl⁻ < Br⁻ < I⁻. This trend is the opposite of oxidising ability. Iodide ions are the strongest reducing agents — they can reduce sulfur from +6 all the way down to −2.' },
            terms: ['Reducing agent', 'Oxidation state']
        },
        {
            id: 'svg-reducing-trend',
            type: 'svg',
            data: {
                caption: 'Reducing ability increases down Group 7: I⁻ is the strongest, F⁻ the weakest reducing agent',
                svg: '<svg viewBox="0 0 380 80" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="190" y="14" text-anchor="middle" font-size="11" fill="#1e293b" font-weight="bold">Reducing Ability of X⁻</text><defs><marker id="ar" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="#3b82f6"/></marker></defs><line x1="35" y1="45" x2="345" y2="45" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#ar)"/><text x="50" y="37" text-anchor="middle" font-size="12" fill="#ef4444">F⁻</text><text x="138" y="37" text-anchor="middle" font-size="12" fill="#f59e0b">Cl⁻</text><text x="226" y="37" text-anchor="middle" font-size="12" fill="#22c55e">Br⁻</text><text x="315" y="37" text-anchor="middle" font-size="12" fill="#3b82f6">I⁻</text><text x="50" y="68" text-anchor="middle" font-size="9" fill="#ef4444">Weakest</text><text x="315" y="68" text-anchor="middle" font-size="9" fill="#3b82f6">Strongest</text></svg>'
            },
            terms: []
        },
        {
            id: 'callout-reducing-thermo',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Thermochemical Explanation of Reducing Ability Trend',
                text: 'To compare reducing ability, consider the energy required to convert the solid halide to X₂(g) (oxidation of X⁻). Key energy contributions:<br/>• Lattice enthalpy of NaX (energy to break the crystal lattice)<br/>• Removing the electron from X⁻ (= reverse of EA)<br/>• Minus the energy from forming X₂ from atoms (atomisation, reversed)<br/><br/><strong>Most important factor: lattice enthalpy.</strong> It falls by ~87 kJ mol⁻¹ from NaCl to NaI. Smaller lattice enthalpy = easier to liberate ions from the crystal = easier to donate electrons = stronger reducing agent. Electron affinity changes are a secondary factor (fall by ~54 kJ mol⁻¹).<br/><br/><strong>F⁻ anomaly:</strong> F⁻ has a very HIGH lattice enthalpy (tiny ion → very strong ionic interactions) and a very LOW energy recovered from forming F₂ (weak F–F bond). Both factors make F⁻ very difficult to oxidise → weakest reducing agent in the group.'
            },
            terms: []
        },
        {
            id: 'h-h2so4',
            type: 'heading',
            data: { text: 'Reactions of Solid Halides with Concentrated H₂SO₄', level: 2 },
            terms: []
        },
        {
            id: 'p-acid',
            type: 'paragraph',
            data: { text: 'When solid halides are treated with concentrated sulfuric acid, the products depend on the reducing power of the halide ion. F⁻ and Cl⁻ are poor reducing agents — only an acid-base reaction occurs. Br⁻ and I⁻ are stronger reducing agents and can also reduce the sulfur in H₂SO₄ to lower oxidation states.' },
            terms: ['Reducing power', 'Sulfuric acid']
        },
        {
            id: 'table-h2so4',
            type: 'comparisonTable',
            data: {
                caption: 'Products and observations when solid halides are treated with concentrated H₂SO₄',
                headers: ['Halide', 'Reaction type', 'S ox. state change', 'Products', 'Observations'],
                rows: [
                    ['F⁻', 'Acid-base only', 'None (+6 → +6)', 'HF(g)', 'Steamy colourless fumes of HF'],
                    ['Cl⁻', 'Acid-base only', 'None (+6 → +6)', 'HCl(g)', 'Steamy colourless choking HCl fumes'],
                    ['Br⁻', 'Acid-base + redox', '+6 → +4 (SO₂)', 'HBr(g), Br₂(g), SO₂(g)', 'Steamy HBr fumes + orange-brown Br₂ vapour + choking SO₂'],
                    ['I⁻', 'Acid-base + strong redox', '+6 → +4, 0, −2', 'HI(g), I₂(s/g), SO₂(g), S(s), H₂S(g)', 'Steamy HI fumes + purple/dark grey I₂ + yellow S solid + choking SO₂ + rotten-egg H₂S smell'],
                ]
            },
            terms: []
        },
        {
            id: 'callout-ionic-eqs',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Ionic Equations for Redox Reactions with Conc. H₂SO₄',
                text: '<strong>Bromide — reduces S(+6) to SO₂ (+4):</strong><br/>H₂SO₄ + 2H⁺ + 2Br⁻ → Br₂ + SO₂ + 2H₂O<br/>Br⁻ (−1) is oxidised to Br₂ (0); S (+6) is reduced to SO₂ (+4).<br/><br/><strong>Iodide — reduces S all the way to H₂S (−2):</strong><br/>H₂SO₄ + 8H⁺ + 8I⁻ → 4I₂ + H₂S + 4H₂O<br/>I⁻ (−1) is oxidised to I₂ (0); S (+6) is reduced to H₂S (−2). Intermediate steps via SO₂ (+4) and S⁰ (0) also occur, giving the full mixture of products observed.'
            },
            terms: []
        },
        {
            id: 'callout-hbr-hi-h3po4',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Preparing HBr and HI — Use H₃PO₄, NOT H₂SO₄',
                text: 'All hydrogen halides can be prepared by reacting the solid ionic halide with concentrated <strong>phosphoric acid (H₃PO₄)</strong>:<br/>NaX(s) + H₃PO₄(conc) → HX(g) + NaH₂PO₄<br/><br/><strong>Why not H₂SO₄ for HBr and HI?</strong> Conc. H₂SO₄ is a strong enough oxidising agent to oxidise Br⁻ and I⁻, so instead of simply protonating them, it converts them to Br₂ and I₂. The HBr/HI produced would be immediately re-oxidised. H₃PO₄ is a strong enough acid to protonate all four halides but NOT strong enough to oxidise Br⁻ or I⁻ → all four HX gases can be prepared cleanly.'
            },
            terms: []
        },
        {
            id: 'h-silvernitrate',
            type: 'heading',
            data: { text: 'Testing Aqueous Halide Ions — The Silver Nitrate Test', level: 2 },
            terms: []
        },
        {
            id: 'callout-silvernitrate',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Procedure',
                text: '1. Dissolve sample in water (if not already aqueous).<br/>2. Acidify with <strong>dilute nitric acid (HNO₃)</strong> — removes interfering CO₃²⁻, SO₃²⁻, and OH⁻ ions that would otherwise form unwanted precipitates with Ag⁺ (false positives).<br/>3. Add <strong>aqueous silver nitrate (AgNO₃)</strong> — AgX precipitate forms if halide is present.<br/>4. <strong>Confirm identity</strong> by adding dilute NH₃ then concentrated NH₃ to test solubility of precipitate.<br/><br/><strong>Important:</strong> F⁻ gives <em>NO precipitate</em> — AgF is soluble in water and cannot be detected by this test.'
            },
            terms: ['Silver nitrate test']
        },
        {
            id: 'table-precipitates',
            type: 'comparisonTable',
            data: {
                caption: 'Silver halide precipitates: colours, Ksp values, and solubility in ammonia',
                headers: ['Halide', 'AgX precipitate colour', 'Ksp (mol² dm⁻⁶)', 'Dilute NH₃', 'Conc. NH₃'],
                rows: [
                    ['F⁻', 'No precipitate (AgF is soluble)', '—', '—', '—'],
                    ['Cl⁻', 'White', '1.8 × 10⁻¹⁰', 'Dissolves', 'Dissolves'],
                    ['Br⁻', 'Very pale cream', '7.7 × 10⁻¹³', 'Insoluble', 'Dissolves'],
                    ['I⁻', 'Very pale yellow', '8.3 × 10⁻¹⁷', 'Insoluble', 'Insoluble in any concentration'],
                ]
            },
            terms: ['Ksp', 'Precipitate', 'Aqueous ammonia']
        },
        {
            id: 'callout-ammonia-mechanism',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why Ammonia Dissolves AgCl but NOT AgI — Ksp Explanation',
                text: 'Ammonia forms a complex ion with silver: Ag⁺(aq) + 2NH₃(aq) → [Ag(NH₃)₂]⁺(aq)<br/><br/>This removes Ag⁺ from solution. If [Ag⁺][X⁻] falls below the Ksp for that particular AgX, the precipitate dissolves (solid shifts to ionic form to restore equilibrium).<br/><br/>• <strong>AgCl</strong> (Ksp = 1.8 × 10⁻¹⁰): Even dilute NH₃ lowes [Ag⁺] enough → AgCl dissolves.<br/>• <strong>AgBr</strong> (Ksp = 7.7 × 10⁻¹³): Dilute NH₃ insufficient; conc. NH₃ can do it.<br/>• <strong>AgI</strong> (Ksp = 8.3 × 10⁻¹⁷): Even conc. NH₃ cannot reduce [Ag⁺] to the level needed. The product [Ag⁺][I⁻] still exceeds Ksp → AgI remains insoluble at any NH₃ concentration.'
            },
            terms: ['Complex ion', 'Ksp']
        },
        {
            id: 'h-hf',
            type: 'heading',
            data: { text: 'Anomalous Properties of HF', level: 2 },
            terms: []
        },
        {
            id: 'list-hf',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Anomalously high boiling point:</strong> HF bp = 293 K (20°C). Compare with HCl (188 K), HBr (206 K), HI (238 K). The bp of HCl, HBr, HI increases regularly with molecular mass (van der Waals forces only). HF is the anomaly.',
                    '<strong>Cause of high bp:</strong> F is the most electronegative element. Its lone pairs are in the 2-level, extremely close to the nucleus — the most concentrated lone pairs of any element. This creates exceptionally strong hydrogen bonds between HF molecules, requiring much more energy to break → very high bp.',
                    '<strong>HCl, HBr, HI are all strong acids</strong> (essentially fully ionised in water). <strong>HF is a weak acid</strong> — an important anomaly that requires the ion-pair model to explain properly.'
                ]
            },
            terms: ['Hydrogen bonding', 'Weak acid', 'Strong acid']
        },
        {
            id: 'callout-hf-weak-acid',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'WHY Is HF a Weak Acid? The Ion-Pair Model',
                text: '<strong>Common misconception:</strong> "HF is weak because the H–F bond is too strong to break." This is wrong — the very high hydration enthalpy of the tiny F⁻ ion should more than compensate for the high H–F bond energy.<br/><br/><strong>Correct explanation — ion-pair model:</strong><br/>Step 1: HF + H₂O ⇌ H₃O⁺·F⁻ &nbsp;&nbsp;(position well to the RIGHT — ionisation occurs readily)<br/>Step 2: H₃O⁺·F⁻ ⇌ H₃O⁺(free) + F⁻(free) &nbsp;&nbsp;(position well to the LEFT — ion pair remains strongly associated)<br/><br/>The F⁻ ion is so small and so highly charged that it forms a very stable, tightly bound ion pair with H₃O⁺. Free H₃O⁺ ions are not released in large numbers → pH is higher than expected → HF behaves as a weak acid.'
            },
            terms: []
        },
        {
            id: 'h-chlorine',
            type: 'heading',
            data: { text: 'Industrial Manufacture of Chlorine — Electrolysis of Brine', level: 2 },
            terms: []
        },
        {
            id: 'p-brine',
            type: 'paragraph',
            data: { text: 'Electrolysis of brine (concentrated NaCl(aq)) produces three commercially important products: chlorine (Cl₂) at the anode, hydrogen (H₂) at the cathode, and sodium hydroxide (NaOH) in the cathode compartment. Two industrial cell designs are used: the diaphragm cell and the membrane cell.' },
            terms: []
        },
        {
            id: 'callout-electrode-reactions',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Electrode Reactions in Brine Electrolysis',
                text: '<strong>At the ANODE (titanium) — oxidation:</strong><br/>2Cl⁻(aq) − 2e⁻ → Cl₂(g)<br/>Contamination: 4OH⁻(aq) − 4e⁻ → 2H₂O(l) + O₂(g) also occurs → Cl₂ is contaminated with O₂. O₂ is removed by liquefying Cl₂ under pressure (Cl₂ condenses but O₂ remains gaseous).<br/><br/><strong>At the CATHODE (steel or nickel) — reduction:</strong><br/>2H⁺(aq) + 2e⁻ → H₂(g)<br/>Removal of H⁺ shifts the water equilibrium: H₂O ⇌ H⁺ + OH⁻ → OH⁻ accumulates → NaOH builds up on cathode side.<br/><br/><strong>Why separation matters:</strong> Cl₂ + H₂ is explosive. Cl₂ reacting with NaOH forms NaClO (bleach), contaminating the Cl₂ product.'
            },
            terms: ['Anode', 'Cathode', 'Electrolysis']
        },
        {
            id: 'svg-cells',
            type: 'svg',
            data: {
                caption: 'Schematic comparison of the diaphragm cell (left) and the membrane cell (right)',
                svg: '<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10"><text x="110" y="14" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Diaphragm Cell</text><rect x="10" y="22" width="200" height="175" rx="6" fill="#0f172a" stroke="#94a3b8"/><rect x="20" y="45" width="80" height="140" rx="4" fill="#1e3a8a"/><text x="60" y="78" text-anchor="middle" fill="#1d4ed8">ANODE</text><text x="60" y="93" text-anchor="middle" fill="#1d4ed8">(titanium)</text><text x="60" y="120" text-anchor="middle" fill="#1d4ed8">Cl₂ ↑</text><text x="60" y="155" text-anchor="middle" fill="#1d4ed8" font-size="9">brine in →</text><line x1="104" y1="45" x2="104" y2="185" stroke="#475569" stroke-width="2" stroke-dasharray="4,3"/><text x="104" y="37" text-anchor="middle" font-size="9" fill="#475569">porous diaphragm</text><rect x="110" y="45" width="90" height="140" rx="4" fill="#0a2e1a"/><text x="155" y="78" text-anchor="middle" fill="#166534">CATHODE</text><text x="155" y="93" text-anchor="middle" fill="#166534">(steel)</text><text x="155" y="120" text-anchor="middle" fill="#166534">H₂ ↑</text><text x="155" y="145" text-anchor="middle" fill="#166534" font-size="9">NaOH(aq) dilute</text><text x="155" y="158" text-anchor="middle" fill="#166534" font-size="9">+ NaCl contamination</text><text x="370" y="14" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Membrane Cell</text><rect x="270" y="22" width="200" height="175" rx="6" fill="#0f172a" stroke="#94a3b8"/><rect x="280" y="45" width="77" height="140" rx="4" fill="#1e3a8a"/><text x="318" y="78" text-anchor="middle" fill="#1d4ed8">ANODE</text><text x="318" y="93" text-anchor="middle" fill="#1d4ed8">(titanium)</text><text x="318" y="120" text-anchor="middle" fill="#1d4ed8">Cl₂ ↑</text><text x="318" y="155" text-anchor="middle" fill="#1d4ed8" font-size="9">pure brine in →</text><rect x="359" y="45" width="6" height="140" fill="#3b82f6"/><text x="362" y="37" text-anchor="middle" font-size="9" fill="#3b82f6">membrane (Na⁺ only)</text><rect x="369" y="45" width="91" height="140" rx="4" fill="#0a2e1a"/><text x="414" y="78" text-anchor="middle" fill="#166534">CATHODE</text><text x="414" y="93" text-anchor="middle" fill="#166534">(nickel)</text><text x="414" y="120" text-anchor="middle" fill="#166534">H₂ ↑</text><text x="414" y="145" text-anchor="middle" fill="#166534" font-size="9">NaOH(aq) pure</text><text x="414" y="158" text-anchor="middle" fill="#166534" font-size="9">~30% — no NaCl</text></svg>'
            },
            terms: []
        },
        {
            id: 'table-cells',
            type: 'comparisonTable',
            data: {
                caption: 'Diaphragm cell versus membrane cell — key differences',
                headers: ['Feature', 'Diaphragm Cell', 'Membrane Cell'],
                rows: [
                    ['Separator', 'Porous asbestos or polymer diaphragm — liquid can flow through', 'Polymer ion-exchange membrane — only Na⁺ passes; Cl⁻ is blocked'],
                    ['Brine purity', 'Less critical', 'Must be highly pure — other cations contaminate NaOH product'],
                    ['NaOH quality', 'Dilute; contaminated with NaCl', '~30% solution; pure (NaCl-free)'],
                    ['NaCl removal', 'Evaporation — NaCl crystallises out; some residual NaCl always remains', 'Not needed — membrane prevents Cl⁻ from crossing to cathode side'],
                    ['Cathode material', 'Steel', 'Nickel'],
                    ['Notes', 'Older design; asbestos diaphragm is an environmental/health hazard', 'Modern preferred method; cleaner product; no asbestos'],
                ]
            },
            terms: []
        },
        {
            id: 'checklist-g7-7',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State and explain the trend in reducing ability of halide ions (F⁻ < Cl⁻ < Br⁻ < I⁻).', checked: false },
                    { text: 'Write ionic equations for Br⁻ and I⁻ reacting with conc. H₂SO₄ with oxidation state annotations.', checked: false },
                    { text: 'List all observations for Br⁻ + conc. H₂SO₄ and I⁻ + conc. H₂SO₄.', checked: false },
                    { text: 'Explain why HBr and HI cannot be made using conc. H₂SO₄; state the correct reagent (H₃PO₄).', checked: false },
                    { text: 'Describe the AgNO₃ test procedure, including why HNO₃ is added first.', checked: false },
                    { text: 'State ppt colours and Ksp values for AgCl, AgBr, AgI; state F⁻ gives no precipitate (AgF soluble).', checked: false },
                    { text: 'Explain why AgCl dissolves in dilute NH₃ but AgI does not, using [Ag(NH₃)₂]⁺ and Ksp.', checked: false },
                    { text: 'Explain why HF has a higher boiling point than HCl (hydrogen bonding, concentrated 2-level lone pairs).', checked: false },
                    { text: 'Explain why HF is a weak acid using the ion-pair model (H₃O⁺·F⁻ stays associated).', checked: false },
                    { text: 'Write the anode and cathode half-equations for brine electrolysis.', checked: false },
                    { text: 'Compare the diaphragm cell and membrane cell (separator type, NaOH purity, NaCl contamination).', checked: false },
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Reducing ability: F⁻ < Cl⁻ < Br⁻ < I⁻ (I⁻ strongest — driven mainly by lattice enthalpy decrease). Conc. H₂SO₄: Cl⁻ → HCl only; Br⁻ → HBr + Br₂ + SO₂; I⁻ → HI + I₂ + S + SO₂ + H₂S. Use H₃PO₄, not H₂SO₄, to prepare HBr/HI. AgNO₃ test: acidify with HNO₃ first. Cl⁻ = white AgCl (dissolves in dilute NH₃); Br⁻ = cream AgBr (conc. NH₃); I⁻ = yellow AgI (insoluble in any NH₃); F⁻ = no ppt. Ksp and [Ag(NH₃)₂]⁺ explain differential solubility. HF: high bp (H-bonding from compact 2-level lone pairs on F); weak acid (H₃O⁺·F⁻ ion pair stays associated, few free H₃O⁺). Brine electrolysis: Cl₂ at anode (Ti), H₂ at cathode, NaOH builds on cathode side. Membrane cell gives purer NaOH (~30%, NaCl-free) vs dilute contaminated NaOH from diaphragm cell.' }
        },
        {
            id: 'svg-group7-ladder',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 420" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">GROUP 7 HALIDE REACTIVITY LADDER</text><!-- Column headers --><rect x="10" y="32" width="680" height="30" rx="6" fill="rgba(99,102,241,0.25)" stroke="#60a5fa" stroke-width="1"/><text x="60" y="50" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">HALIDE</text><text x="185" y="50" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">REDUCING ABILITY</text><text x="370" y="50" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">WITH CONC. H₂SO₄</text><text x="580" y="50" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">AgNO₃ TEST (acidified)</text><!-- F- row --><rect x="10" y="62" width="680" height="70" rx="0" fill="rgba(96,165,250,0.08)"/><rect x="10" y="62" width="95" height="70" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1"/><text x="58" y="87" text-anchor="middle" font-size="13" font-weight="800" fill="#60a5fa">F⁻</text><text x="58" y="104" text-anchor="middle" font-size="8.5" fill="#1e3a8a">fluoride</text><text x="60" y="122" text-anchor="middle" font-size="8" fill="#1250a0">weakest reducing</text><text x="185" y="90" text-anchor="middle" font-size="9" fill="#1e3a8a">None — F⁻ is a very poor</text><text x="185" y="105" text-anchor="middle" font-size="9" fill="#1e3a8a">reducing agent</text><text x="185" y="120" text-anchor="middle" font-size="8.5" fill="#1250a0">F is most electronegative — hard to oxidise</text><text x="370" y="90" text-anchor="middle" font-size="9" fill="#1e3a8a">HF only produced</text><text x="370" y="105" text-anchor="middle" font-size="8.5" fill="#1250a0">(F⁻ cannot reduce H₂SO₄)</text><text x="580" y="90" text-anchor="middle" font-size="9" fill="#2d2d72">No precipitate</text><text x="580" y="105" text-anchor="middle" font-size="8.5" fill="#60a5fa">(AgF is soluble)</text><!-- Cl- row --><rect x="10" y="132" width="680" height="70" rx="0" fill="rgba(255,255,255,0.02)"/><rect x="10" y="132" width="95" height="70" fill="rgba(52,211,153,0.2)" stroke="#34d399" stroke-width="1"/><text x="58" y="157" text-anchor="middle" font-size="13" font-weight="800" fill="#34d399">Cl⁻</text><text x="58" y="174" text-anchor="middle" font-size="8.5" fill="#065f46">chloride</text><text x="185" y="160" text-anchor="middle" font-size="9" fill="#065f46">Weak — only HCl gas produced</text><text x="185" y="175" text-anchor="middle" font-size="9" fill="#065f46">Cannot reduce conc. H₂SO₄</text><text x="370" y="155" text-anchor="middle" font-size="9" fill="#065f46">HCl gas (steamy white fumes)</text><text x="370" y="170" text-anchor="middle" font-size="9" fill="#065f46">Cl⁻ + H₂SO₄ → HCl + HSO₄⁻</text><text x="370" y="187" text-anchor="middle" font-size="8" fill="#065f46">H₂SO₄ not reduced further</text><text x="580" y="157" text-anchor="middle" font-size="9" fill="#34d399">White precipitate</text><text x="580" y="172" text-anchor="middle" font-size="8.5" fill="#065f46">AgCl — dissolves in dilute NH₃</text><!-- Br- row --><rect x="10" y="202" width="680" height="70" rx="0" fill="rgba(255,255,255,0.04)"/><rect x="10" y="202" width="95" height="70" fill="rgba(251,146,60,0.2)" stroke="#fb923c" stroke-width="1"/><text x="58" y="227" text-anchor="middle" font-size="13" font-weight="800" fill="#fb923c">Br⁻</text><text x="58" y="244" text-anchor="middle" font-size="8.5" fill="#532407">bromide</text><text x="185" y="227" text-anchor="middle" font-size="9" fill="#532407">Medium — can reduce H₂SO₄ to SO₂</text><text x="185" y="243" text-anchor="middle" font-size="9" fill="#532407">Br⁻ → Br₂ (oxidised)</text><text x="370" y="222" text-anchor="middle" font-size="9" fill="#532407">HBr (fumes) + Br₂ (orange vapour)</text><text x="370" y="237" text-anchor="middle" font-size="9" fill="#532407">+ SO₂ (chokes)</text><text x="370" y="252" text-anchor="middle" font-size="8" fill="#78350f">Br⁻ reduces SO₄²⁻ to SO₂</text><text x="580" y="225" text-anchor="middle" font-size="9" fill="#fb923c">Cream precipitate</text><text x="580" y="240" text-anchor="middle" font-size="8.5" fill="#532407">AgBr — dissolves in conc. NH₃ only</text><!-- I- row --><rect x="10" y="272" width="680" height="84" rx="0" fill="rgba(244,114,182,0.06)"/><rect x="10" y="272" width="95" height="84" fill="rgba(244,114,182,0.2)" stroke="#f472b6" stroke-width="1"/><text x="58" y="297" text-anchor="middle" font-size="13" font-weight="800" fill="#f472b6">I⁻</text><text x="58" y="314" text-anchor="middle" font-size="8.5" fill="#4a1040">iodide</text><text x="58" y="330" text-anchor="middle" font-size="8" fill="#f472b6">strongest reducing</text><text x="185" y="297" text-anchor="middle" font-size="9" fill="#4a1040">Strong — reduces H₂SO₄ fully to H₂S</text><text x="185" y="313" text-anchor="middle" font-size="9" fill="#4a1040">I⁻ → I₂ (oxidised)</text><text x="185" y="328" text-anchor="middle" font-size="8.5" fill="#f472b6">Biggest ion, most polarisable, weakest H-I bond</text><text x="370" y="292" text-anchor="middle" font-size="9" fill="#4a1040">HI (fumes) + I₂ (purple/black solid)</text><text x="370" y="307" text-anchor="middle" font-size="9" fill="#4a1040">+ SO₂ + S (yellow) + H₂S (smells!)</text><text x="370" y="322" text-anchor="middle" font-size="8" fill="#78350f">I⁻ reduces SO₄²⁻ all the way to H₂S</text><text x="580" y="293" text-anchor="middle" font-size="9" fill="#f472b6">Yellow precipitate</text><text x="580" y="308" text-anchor="middle" font-size="8.5" fill="#4a1040">AgI — insoluble in any NH₃</text><!-- Key summary --><rect x="10" y="366" width="680" height="46" rx="8" fill="rgba(99,102,241,0.15)" stroke="#60a5fa" stroke-width="1"/><text x="350" y="383" text-anchor="middle" font-size="9.5" fill="#2d2d72" font-weight="700">KEY: Reducing ability F⁻ &lt; Cl⁻ &lt; Br⁻ &lt; I⁻ (down the group). Use H₃PO₄ (not H₂SO₄) to prepare pure HBr or HI.</text><text x="350" y="402" text-anchor="middle" font-size="9" fill="#2d2d72">AgNO₃ test: acidify with HNO₃ first to remove CO₃²⁻/SO₃²⁻ interference. Then add AgNO₃ and NH₃ for confirmation.</text></svg>',
                caption: 'Group 7 Halide Reactivity Ladder — reducing ability increases F⁻→I⁻. With conc. H₂SO₄: Cl⁻ gives only HCl; Br⁻ gives HBr+SO₂; I⁻ gives HI+S+SO₂+H₂S. AgNO₃ test: white (Cl⁻ / dil. NH₃), cream (Br⁻ / conc. NH₃), yellow (I⁻ / no NH₃).'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-h2so4', prompt: 'State all the products and observations when solid potassium iodide reacts with concentrated sulfuric acid.' },
            { id: 'c2', blockId: 'callout-ionic-eqs', prompt: 'Write the ionic equation for bromide ions reducing concentrated H₂SO₄. State the oxidation state change of sulfur.' },
            { id: 'c3', blockId: 'callout-hbr-hi-h3po4', prompt: 'Why is conc. H₂SO₄ unsuitable for preparing HBr from KBr? What acid must be used instead, and why is it safe to use?' },
            { id: 'c4', blockId: 'callout-silvernitrate', prompt: 'Why must dilute HNO₃ be added to the halide solution BEFORE adding silver nitrate in the halide test?' },
            { id: 'c5', blockId: 'callout-ammonia-mechanism', prompt: 'Explain why AgCl dissolves in dilute NH₃ but AgI does not, using Ksp values and the [Ag(NH₃)₂]⁺ complex ion.' },
            { id: 'c6', blockId: 'callout-hf-weak-acid', prompt: 'HF is a weak acid despite the high electronegativity of F. Explain this using the ion-pair (H₃O⁺·F⁻) model.' },
            { id: 'c7', blockId: 'table-cells', prompt: 'What is the key difference between the separator in a diaphragm cell and a membrane cell, and how does this affect the purity of the NaOH produced?' },
        ],
        summaryText: 'Reducing ability F⁻ < Cl⁻ < Br⁻ < I⁻ (lattice enthalpy most important factor). Conc. H₂SO₄: Cl⁻ → HCl; Br⁻ → HBr + Br₂ + SO₂ (H₂SO₄ + 2H⁺ + 2Br⁻ → Br₂ + SO₂ + 2H₂O); I⁻ → HI + I₂ + S + SO₂ + H₂S (H₂SO₄ + 8H⁺ + 8I⁻ → 4I₂ + H₂S + 4H₂O). Use H₃PO₄ for HBr/HI. AgNO₃: HNO₃ first; Cl⁻ white ppt/dilute NH₃; Br⁻ cream/conc NH₃; I⁻ yellow/no NH₃; F⁻ no ppt. [Ag(NH₃)₂]⁺ + Ksp explains NH₃ solubility. HF: strong H-bonds (2-level lone pairs) → high bp; ion-pair model → weak acid. Brine electrolysis: Cl₂ anode, H₂ cathode, NaOH cathode-side. Membrane cell: purer NaOH.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_7;
