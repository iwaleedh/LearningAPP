/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 6
 * "Simple molecular substances and their properties"
 * Source: Pearson Edexcel IAL Chemistry — Section 3D.1
 */
export const note_chemistry_1_3_6 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Explain the physical properties of simple molecular substances (low melting/boiling points, non-conductors) in terms of weak intermolecular forces. Distinguish between breaking intermolecular forces (melting/boiling) and breaking covalent bonds.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Simple Molecular Structure', level: 2 },
      terms: []
    },
    {
      id: 'svg-structure',
      type: 'svg',
      data: {
        caption: 'Simple molecular substances consist of discrete molecules with strong covalent bonds within (intramolecular) and weak intermolecular forces between molecules. When the solid melts or boils, ONLY the weak intermolecular forces are broken — the covalent bonds remain intact.',
        svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Structure diagram on left -->
  <rect x="5" y="8" width="310" height="244" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="160" y="26" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="13">Cl₂ Molecular Solid (schematic)</text>

  <!-- Cl2 molecule 1 -->
  <circle cx="65"  cy="75"  r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="65"  y="79"  text-anchor="middle" fill="#065f46" font-size="10">Cl</text>
  <line x1="81" y1="75" x2="99" y2="75" stroke="#1e40af" stroke-width="3"/>
  <circle cx="115" cy="75"  r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="115" y="79"  text-anchor="middle" fill="#065f46" font-size="10">Cl</text>

  <!-- Cl2 molecule 2 -->
  <circle cx="175" cy="80"  r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="175" y="84"  text-anchor="middle" fill="#065f46" font-size="10">Cl</text>
  <line x1="191" y1="80" x2="209" y2="80" stroke="#1e40af" stroke-width="3"/>
  <circle cx="225" cy="80"  r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="225" y="84"  text-anchor="middle" fill="#065f46" font-size="10">Cl</text>

  <!-- Cl2 molecule 3 -->
  <circle cx="60"  cy="155" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="60"  y="159" text-anchor="middle" fill="#065f46" font-size="10">Cl</text>
  <line x1="76" y1="155" x2="94" y2="155" stroke="#1e40af" stroke-width="3"/>
  <circle cx="110" cy="155" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="110" y="159" text-anchor="middle" fill="#065f46" font-size="10">Cl</text>

  <!-- Cl2 molecule 4 -->
  <circle cx="180" cy="160" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="180" y="164" text-anchor="middle" fill="#065f46" font-size="10">Cl</text>
  <line x1="196" y1="160" x2="214" y2="160" stroke="#1e40af" stroke-width="3"/>
  <circle cx="230" cy="160" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="230" y="164" text-anchor="middle" fill="#065f46" font-size="10">Cl</text>

  <!-- Weak IMF arrows (dashed) between molecules -->
  <line x1="131" y1="72" x2="159" y2="76" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="120" y1="88" x2="175" y2="95" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="100" y1="118" x2="90" y2="139" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="228" y1="96" x2="200" y2="144" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Labels -->
  <line x1="15" y1="75" x2="48" y2="75" stroke="#1e40af" stroke-width="2"/>
  <text x="12" y="78" text-anchor="end" fill="#1e40af" font-size="9.5">strong</text>
  <text x="12" y="90" text-anchor="end" fill="#1e40af" font-size="9.5">cov. bond</text>
  <text x="255" y="125" fill="#f97316" font-size="9.5">weak</text>
  <text x="255" y="138" fill="#f97316" font-size="9.5">London</text>
  <text x="255" y="151" fill="#f97316" font-size="9.5">forces</text>

  <text x="160" y="220" text-anchor="middle" fill="#374151" font-size="10">Covalent bonds within molecule: ~200–900 kJ mol⁻¹</text>
  <text x="160" y="238" text-anchor="middle" fill="#374151" font-size="10">London forces between molecules: ~1–40 kJ mol⁻¹</text>

  <!-- Properties panel -->
  <rect x="328" y="8" width="345" height="244" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="500" y="27" text-anchor="middle" fill="#334155" font-weight="bold" font-size="13">Physical Properties</text>

  <rect x="340" y="35" width="321" height="46" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
  <text x="500" y="55" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">🌡 Low Melting &amp; Boiling Points</text>
  <text x="500" y="73" text-anchor="middle" fill="#374151" font-size="10">Only weak IMF break on melting. Covalent bonds stay intact.</text>

  <rect x="340" y="90" width="321" height="46" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="1"/>
  <text x="500" y="110" text-anchor="middle" fill="#9d174d" font-weight="bold" font-size="11">⚡ Non-conductors (usually)</text>
  <text x="500" y="128" text-anchor="middle" fill="#374151" font-size="10">No ions or free electrons. Cannot carry charge.</text>

  <rect x="340" y="145" width="321" height="46" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="500" y="165" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">💧 Solubility: "Like dissolves like"</text>
  <text x="500" y="183" text-anchor="middle" fill="#374151" font-size="10">Polar molecules dissolve in polar solvents (water).</text>

  <rect x="340" y="200" width="321" height="44" rx="6" fill="#ede9fe" stroke="#1d4ed8" stroke-width="1"/>
  <text x="500" y="220" text-anchor="middle" fill="#4c1d95" font-weight="bold" font-size="11">📊 M.P. rises with molecular size</text>
  <text x="500" y="238" text-anchor="middle" fill="#374151" font-size="10">More electrons → stronger London forces → higher m.p.</text>
</svg>`
      },
      terms: ['Intermolecular force', 'London dispersion force', 'Covalent bond']
    },
    {
      id: 'key-distinction',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Critical Distinction: Intermolecular vs Intramolecular',
        text: '<strong>Intramolecular:</strong> forces within a molecule → strong covalent bonds (100–900 kJ mol⁻¹)<br/><strong>Intermolecular:</strong> forces between molecules → weak London/dipole-dipole/H-bonds (1–50 kJ mol⁻¹)<br/><br/>When a simple molecular substance <em>melts or boils</em>, only intermolecular forces are overcome. The molecules themselves remain intact — you still have H₂O molecules in steam, not individual H and O atoms.'
      },
      terms: ['Intramolecular', 'Intermolecular force']
    },
    {
      id: 'tip-mp-trend',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Trend: M.P. Down Group 7 (Halogens)',
        text: 'F₂ (−219°C)  &lt;  Cl₂ (−101°C)  &lt;  Br₂ (+7°C)  &lt;  I₂ (+114°C)<br/><br/>As molar mass increases, the number of electrons increases → larger instantaneous dipoles → stronger London (van der Waals) forces → higher melting point.<br/><br/>This trend is a common exam question — always explain through electron number, not "size" alone.'
      },
      terms: ['London dispersion force', 'Instantaneous dipole']
    }
  ],

  recall: {
    enabled: true,
    summaryText: 'Simple molecular substances: discrete molecules with strong covalent bonds inside, weak IMF between. Properties: low m.p./b.p. (only IMF broken), non-conductors (no ions/free e⁻), "like dissolves like". Melting / boiling ≠ breaking covalent bonds. Trend: larger molecules → more electrons → stronger London forces → higher m.p. (F₂ < Cl₂ < Br₂ < I₂).',
    cues: [
      { id: 'c1', blockId: 'svg-structure', prompt: 'Explain why simple molecular substances have low melting points. Which forces are broken when Cl₂ melts?' },
      { id: 'c2', blockId: 'key-distinction', prompt: 'Distinguish between intramolecular and intermolecular forces. Give typical energy ranges for each.' },
      { id: 'c3', blockId: 'svg-structure', prompt: 'Why are simple molecular substances (like I₂) usually non-conductors? Under what conditions might they conduct?' },
      { id: 'c4', blockId: 'tip-mp-trend', prompt: 'Why does melting point increase from F₂ to I₂? Explain in terms of electrons and London forces.' },
      { id: 'c5', blockId: 'key-distinction', prompt: 'Steam consists of H₂O molecules. What bonds are broken when steam condenses to water and when water is decomposed by electrolysis? Identify each type.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
