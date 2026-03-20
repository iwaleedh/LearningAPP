/**
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
