/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 8
 * Synthetic routes with alcohols and halogenoalkanes
 */

export const note_chemistry_1_2_10_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Plan multi-step synthetic routes using alcohols and halogenoalkanes as starting materials or intermediates. Identify reagents and conditions for each step.' } },
    { id: 'h-routes', type: 'heading', data: { text: 'Synthetic Routes', level: 2 }, terms: ['Synthetic route'] },
    { id: 'callout-routes-key', type: 'callout', data: { style: 'key', title: '💡 Key Reactions of Alcohols', text: 'From ALCOHOL:\n  → Halogenoalkane: + HBr (or NaBr/H₂SO₄) → R–Br  (substitution)\n  → Alkene: conc H₃PO₄/heat or conc H₂SO₄/170°C  (dehydration/elimination)\n  → Aldehyde: K₂Cr₂O₇/H₂SO₄, distil  (oxidation of primary)\n  → Carboxylic acid: K₂Cr₂O₇/H₂SO₄, reflux  (full oxidation of primary)\n  → Ketone: K₂Cr₂O₇/H₂SO₄, reflux  (oxidation of secondary)\n  → Ester: carboxylic acid + conc H₂SO₄ catalyst, reflux  (esterification)' } },
    { id: 'callout-halo-key', type: 'callout', data: { style: 'key', title: '💡 Key Reactions of Halogenoalkanes', text: 'From HALOGENOALKANE (R–X):\n  → Alcohol: NaOH(aq), warm  (nucleophilic substitution)\n  → Alkene: KOH/ethanol, heat  (elimination)\n  → Nitrile: KCN/ethanol, warm  (substitution; chain +1C)\n  → Amine: excess NH₃/ethanol, pressure  (substitution)\n  → Same halogenoalkane with different X: e.g. NaI/propanone (Finkelstein)' } },
    {
      id: 'svg-routes', type: 'svg', data: {
        caption: 'Summary of interconversions between alcohol, halogenoalkane and other functional groups', svg: `<svg viewBox="0 0 550 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organic synthesis routes map">
  <defs>
    <marker id="sr1" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#6366f1"/>
    </marker>
  </defs>
  <!-- Alcohol box -->
  <rect x="200" y="100" width="140" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="270" y="124" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Alcohol (R–OH)</text>
  <!-- Halogenoalkane box -->
  <rect x="10" y="100" width="140" height="40" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
  <text x="80" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">Halogenoalkane</text>
  <text x="80" y="130" text-anchor="middle" font-size="11" fill="#9d174d">(R–X)</text>
  <!-- Alkene box -->
  <rect x="400" y="10" width="130" height="40" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="465" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#14532d">Alkene</text>
  <!-- Aldehyde box -->
  <rect x="400" y="100" width="130" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="465" y="124" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Aldehyde</text>
  <!-- Carboxylic acid -->
  <rect x="400" y="190" width="130" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="465" y="207" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Carboxylic acid</text>
  <text x="465" y="220" text-anchor="middle" font-size="9" fill="#92400e">(reflux)</text>
  <!-- Nitrile -->
  <rect x="10" y="10" width="130" height="40" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
  <text x="75" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">Nitrile (R–CN)</text>
  <!-- Amine -->
  <rect x="10" y="190" width="130" height="40" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
  <text x="75" y="214" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">Amine (R–NH₂)</text>
  <!-- Arrows: Alcohol → Halogenoalkane -->
  <line x1="200" y1="115" x2="154" y2="115" stroke="#6366f1" stroke-width="1.5" marker-end="url(#sr1)"/>
  <text x="177" y="110" font-size="9" fill="#6366f1" text-anchor="middle">HBr</text>
  <!-- Halogenoalkane → Alcohol -->
  <line x1="150" y1="128" x2="196" y2="128" stroke="#6366f1" stroke-width="1.5" marker-end="url(#sr1)"/>
  <text x="173" y="139" font-size="9" fill="#6366f1" text-anchor="middle">NaOH(aq)</text>
  <!-- Alcohol → Alkene -->
  <line x1="320" y1="100" x2="396" y2="52" stroke="#6366f1" stroke-width="1.5" marker-end="url(#sr1)"/>
  <text x="345" y="68" font-size="9" fill="#16a34a">H₃PO₄/heat</text>
  <!-- Alcohol → Aldehyde -->
  <line x1="340" y1="118" x2="396" y2="118" stroke="#6366f1" stroke-width="1.5" marker-end="url(#sr1)"/>
  <text x="370" y="110" font-size="9" fill="#ca8a04" text-anchor="middle">K₂Cr₂O₇/distil</text>
  <!-- Aldehyde → Carboxylic acid -->
  <line x1="465" y1="140" x2="465" y2="186" stroke="#6366f1" stroke-width="1.5" marker-end="url(#sr1)"/>
  <text x="495" y="165" font-size="9" fill="#ca8a04" text-anchor="middle">[O]/reflux</text>
  <!-- Halogenoalkane → Nitrile -->
  <line x1="80" y1="100" x2="80" y2="54" stroke="#6366f1" stroke-width="1.5" marker-end="url(#sr1)"/>
  <text x="110" y="78" font-size="9" fill="#9333ea" text-anchor="middle">KCN/EtOH</text>
  <!-- Halogenoalkane → Amine -->
  <line x1="80" y1="140" x2="80" y2="186" stroke="#6366f1" stroke-width="1.5" marker-end="url(#sr1)"/>
  <text x="115" y="165" font-size="9" fill="#9333ea" text-anchor="middle">NH₃/EtOH</text>
</svg>` }
    },
    { id: 'callout-we-route', type: 'callout', data: { style: 'worked', title: '✏️ Worked Example — Multi-step Synthesis', text: 'Convert ethanol → ethanoic acid → and then show how to make an ester.\n\nStep 1: Ethanol → Ethanoic acid\n  Reagents: K₂Cr₂O₇/H₂SO₄; heat under reflux\n  CH₃CH₂OH + 2[O] → CH₃COOH + H₂O\n\nStep 2: Ethanoic acid + methanol → methyl ethanoate (ester)\n  Reagents: methanol + conc H₂SO₄ catalyst; heat under reflux\n  CH₃COOH + CH₃OH ⇌ CH₃COOCH₃ + H₂O' } },
    { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Alcohol → halogenoalkane: HBr or NaBr/H₂SO₄', checked: false }, { text: 'Halogenoalkane → alcohol: NaOH(aq)', checked: false }, { text: 'Alcohol → alkene: conc H₃PO₄/heat (dehydration)', checked: false }, { text: 'Primary alcohol → aldehyde: K₂Cr₂O₇/H₂SO₄/distil', checked: false }, { text: 'Primary alcohol → carboxylic acid: K₂Cr₂O₇/H₂SO₄/reflux', checked: false }, { text: 'Halogenoalkane → nitrile: KCN/ethanol (chain +1C)', checked: false }, { text: 'Halogenoalkane → amine: excess NH₃/ethanol', checked: false }] } },
    { id: 'summary', type: 'summary', data: { text: 'Alcohols and halogenoalkanes are versatile synthetic intermediates. Alcohols can be converted to halogenoalkanes, alkenes, aldehydes, ketones and carboxylic acids. Halogenoalkanes can be converted to alcohols, alkenes, nitriles (chain extension) and amines. Always state reagents and conditions for each step.' } },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-routes-key', prompt: 'Starting from ethanol, state reagents and conditions to make: (a) bromoethane, (b) ethene, (c) ethanal, (d) ethanoic acid.' },
      { id: 'cue-2', blockId: 'callout-halo-key', prompt: 'Starting from 1-bromopropane, state how to make: (a) propan-1-ol, (b) propene, (c) butanenitrile (4C nitrile).' },
    ],
    summaryText: 'Synthetic routes: alcohol and halogenoalkane interconversions, reagents and conditions.',
    ready: false,
  },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Synthetic routes', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Synthetic routes', 'Organic chemistry'] }],
};
