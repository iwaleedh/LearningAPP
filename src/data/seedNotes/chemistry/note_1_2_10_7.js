/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 7
 * Reflux and distillation methods
 */

export const note_chemistry_1_2_10_7 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Describe the techniques of reflux and distillation used in organic synthesis. Explain when each technique is used and identify the apparatus required.' } },
        { id: 'h-reflux', type: 'heading', data: { text: 'Reflux', level: 2 }, terms: ['Reflux'] },
        { id: 'callout-reflux-key', type: 'callout', data: { style: 'key', title: '💡 Reflux — Heating Without Loss of Reactants', text: 'Reflux is used when a reaction needs prolonged heating but volatile reactants/products must not escape.\n\nApparatus: round-bottomed flask + condenser attached vertically on top\nThe condenser cools vapour → liquid → runs back into flask\n\nWhen to use reflux:\n  • Oxidation of primary alcohol to carboxylic acid (excess K₂Cr₂O₇, heated for long time)\n  • Hydrolysis of halogenoalkane with NaOH(aq)\n  • Esterification (acid + alcohol + conc H₂SO₄ catalyst)\n  • Saponification (ester + NaOH)\n\nAdvantage: reactants are not lost; reaction goes to completion' } },
        { id: 'svg-reflux', type: 'svg', data: { caption: 'Reflux apparatus — condenser attached vertically, vapour condenses and returns to flask', svg: `<svg viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reflux apparatus diagram">
  <!-- Flask -->
  <ellipse cx="110" cy="220" rx="55" ry="40" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <rect x="95" y="175" width="30" height="50" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <!-- Condenser (vertical) -->
  <rect x="98" y="60" width="24" height="120" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <!-- Water jacket -->
  <rect x="92" y="65" width="36" height="110" fill="none" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Water in/out -->
  <line x1="92" y1="90" x2="70" y2="90" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="65" y="88" font-size="8" fill="#3b82f6" text-anchor="end">water in</text>
  <line x1="92" y1="150" x2="70" y2="150" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="65" y="148" font-size="8" fill="#3b82f6" text-anchor="end">water out</text>
  <!-- Heat source -->
  <rect x="55" y="258" width="110" height="18" rx="3" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="110" y="271" text-anchor="middle" font-size="9" fill="#92400e">heat source</text>
  <!-- Labels -->
  <text x="110" y="225" text-anchor="middle" font-size="9" fill="#1e40af">reaction mixture</text>
  <text x="110" y="50" text-anchor="middle" font-size="9" fill="#4338ca">condenser</text>
  <text x="175" y="120" font-size="8" fill="#6b7280">vapour rises,</text>
  <text x="175" y="130" font-size="8" fill="#6b7280">condenses,</text>
  <text x="175" y="140" font-size="8" fill="#6b7280">returns</text>
</svg>` } },
        { id: 'h-distillation', type: 'heading', data: { text: 'Distillation', level: 2 }, terms: ['Distillation'] },
        { id: 'callout-distil-key', type: 'callout', data: { style: 'key', title: '💡 Distillation — Collecting a Volatile Product', text: 'Distillation is used when the product is more volatile than the reaction mixture and needs to be collected.\n\nApparatus: round-bottomed flask + condenser at an angle + collection flask\n\nWhen to use distillation:\n  • Oxidation of primary alcohol to ALDEHYDE (distil off before it oxidises further)\n  • Collecting ester from esterification mixture\n  • Separating a product by boiling point\n\nSimple distillation: one component collected at its bp\nFractional distillation: separates mixture of close boiling points (e.g. crude oil)' } },
        { id: 'table-compare', type: 'comparisonTable', data: { caption: 'Reflux vs distillation — when to use each', headers: ['Technique', 'Condenser position', 'Purpose', 'Example use'], rows: [['Reflux', 'Vertical (upright)', 'Heat without losing reactants; complete reaction', 'Carboxylic acid from primary alcohol'], ['Distillation', 'At angle (side arm)', 'Collect volatile product as it forms', 'Aldehyde from primary alcohol']] } },
        { id: 'callout-tip-technique', type: 'callout', data: { style: 'tip', title: '💬 Exam Tip — Choosing the Technique', text: 'If the question asks HOW to make:\n  Aldehyde → distillation (collect as it forms; prevent over-oxidation)\n  Carboxylic acid → reflux (keep in flask; ensure full oxidation)\n  Ester → reflux first, then distillation to collect ester\n\nAlways state: "heat under reflux" or "heat and distil" with the specific reagents.' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Reflux: condenser vertical; vapour condenses and returns; used for complete reaction', checked: false }, { text: 'Distillation: condenser angled; product collected as it distils over', checked: false }, { text: 'Aldehyde: distil from primary alcohol + K₂Cr₂O₇/H₂SO₄ (add alcohol to oxidant)', checked: false }, { text: 'Carboxylic acid: reflux primary alcohol with excess K₂Cr₂O₇/H₂SO₄', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Reflux (condenser vertical) heats reactants without loss — used for complete oxidation to carboxylic acid. Distillation (condenser angled) collects volatile products as they form — used to isolate aldehyde before over-oxidation. Both use a condenser; position and collection method differ.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-reflux-key', prompt: 'Describe reflux apparatus. When is reflux used rather than simple heating? Give two organic chemistry examples.' },
            { id: 'cue-2', blockId: 'table-compare', prompt: 'How do reflux and distillation differ in apparatus and purpose? Which is used to make an aldehyde vs a carboxylic acid?' },
        ],
        summaryText: 'Reflux vs distillation: apparatus, purpose, when to use each in organic synthesis.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Practical techniques', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Reflux', 'Distillation'] }],
};
