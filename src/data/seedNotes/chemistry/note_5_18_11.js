export const note_chemistry_5_18_11 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the free radical substitution reaction of the methyl side-chain in methylbenzene with halogens.'
      }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: {
        text: 'Methylbenzene (Toluene)',
        level: 2
      }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Methylbenzene consists of a methyl group (–CH₃) attached to a benzene ring. When discussing its reactions with halogens, it is crucial to distinguish between reactions happening <em>on the ring</em> (electrophilic substitution) and those happening <em>on the alkyl side-chain</em> (free radical substitution).'
      }
    },
    {
      id: 'callout-photochemical',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Photochemical Reaction',
        text: 'The reaction between methylbenzene and chlorine happens in the presence of <strong>ultraviolet light</strong>. This is a <strong>photochemical reaction</strong>. <em>(Note: Do not call this photocatalysis; light acts as the energy source, not a substance-based catalyst.)</em> In the absence of light and presence of a catalyst, substitution happens on the benzene ring instead.'
      }
    },
    {
      id: 'eq-main',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + Cl<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl + HCl',
        caption: 'Overall equation for the monosubstitution of methylbenzene by chlorine.'
      }
    },
    {
      id: 'p-product',
      type: 'paragraph',
      data: {
        text: 'The organic product is <strong>(chloromethyl)benzene</strong>. The brackets in the name emphasise that the chlorine is attached to the methyl group, not directly to the benzene ring. One hydrogen atom in the methyl group is replaced by a chlorine atom.'
      }
    },
    {
      id: 'h-mechanism',
      type: 'heading',
      data: {
        text: 'Free Radical Mechanism',
        level: 2
      }
    },
    {
      id: 'p-mechanism-intro',
      type: 'paragraph',
      data: {
        text: 'The reaction follows the exact same three-stage chain mechanism (initiation, propagation, and termination) as the free radical substitution of alkanes (e.g. methane). The benzene ring is largely unreactive under these conditions and acts essentially as a spectator group.'
      }
    },
    {
      id: 'h-init',
      type: 'heading',
      data: {
        text: 'Stage 1: Initiation',
        level: 3
      }
    },
    {
      id: 'p-init',
      type: 'paragraph',
      data: {
        text: 'UV light provides the energy to break the strong Cl–Cl bond via <strong>homolytic fission</strong>, forming two chlorine radicals.'
      }
    },
    {
      id: 'eq-init',
      type: 'equation',
      data: {
        html: 'Cl<sub>2</sub> → 2Cl•'
      }
    },
    {
      id: 'h-prop',
      type: 'heading',
      data: {
        text: 'Stage 2: Propagation',
        level: 3
      }
    },
    {
      id: 'list-prop',
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'The chlorine radical abstracts a hydrogen atom from the methyl group of methylbenzene, producing hydrogen chloride and a reactive (phenylmethyl) radical: <strong>C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + Cl• → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>• + HCl</strong>',
          'The new radical reacts with another chlorine molecule, reforming the chlorine radical and producing (chloromethyl)benzene: <strong>C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>• + Cl<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl + Cl•</strong>'
        ]
      }
    },
    {
      id: 'h-term',
      type: 'heading',
      data: {
        text: 'Stage 3: Termination',
        level: 3
      }
    },
    {
      id: 'p-term',
      type: 'paragraph',
      data: {
        text: 'Two radicals collide and combine to form a stable molecule. This stops the chain. Possible collision combinations include:'
      }
    },
    {
      id: 'list-term',
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'Two chlorine radicals: <strong>2Cl• → Cl<sub>2</sub></strong>',
          'A chlorine radical and a (phenylmethyl) radical: <strong>C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>• + Cl• → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl</strong>',
          'Two (phenylmethyl) radicals: <strong>2C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>• → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CH<sub>2</sub>C<sub>6</sub>H<sub>5</sub></strong> <em>(1,2-diphenylethane)</em>'
        ]
      }
    },
    {
      id: 'callout-multiple-sub',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Multiple Substitution',
        text: 'Like all free radical substitutions, the reaction does not stop at monosubstitution. The remaining hydrogen atoms on the methyl group can also be sequentially replaced by chlorine atoms, producing (dichloromethyl)benzene and (trichloromethyl)benzene in the mixture.'
      }
    },
    {
      id: 'svg-benzene-reactions',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 430" font-family="system-ui,sans-serif"><defs><marker id="bz-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#2d2d72"/></marker></defs><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">BENZENE — ELECTROPHILIC SUBSTITUTION (EAS) MAP</text><!-- Central benzene --><circle cx="350" cy="220" r="52" fill="#6366f1" stroke="#a5b4fc" stroke-width="2"/><text x="350" y="213" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b">BENZENE</text><text x="350" y="229" text-anchor="middle" font-size="9" fill="#2d2d72">C₆H₆</text><text x="350" y="243" text-anchor="middle" font-size="8" fill="#2d2d72">EAS mechanism</text><!-- Mechanism shorthand --><rect x="210" y="292" width="280" height="22" rx="6" fill="rgba(99,102,241,0.3)" stroke="#818cf8" stroke-width="1"/><text x="350" y="307" text-anchor="middle" font-size="8.5" fill="#2d2d72">C₆H₆ + E⁺ → C₆H₅-E + H⁺  (electrophilic substitution, NOT addition)</text><!-- TOP: Nitration --><line x1="350" y1="168" x2="350" y2="98" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#bz-arr)"/><rect x="228" y="34" width="244" height="64" rx="10" fill="rgba(239,68,68,0.18)" stroke="#ef4444" stroke-width="1.5"/><text x="350" y="54" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="700">NITRATION → C₆H₅NO₂</text><text x="350" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">conc. HNO₃ + conc. H₂SO₄, 50°C</text><text x="350" y="82" text-anchor="middle" font-size="8.5" fill="#7f1d1d">Electrophile: NO₂⁺ (nitronium ion, generated in situ)</text><!-- TOP-RIGHT: Halogenation --><line x1="392" y1="185" x2="478" y2="136" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#bz-arr)"/><rect x="476" y="68" width="214" height="78" rx="10" fill="rgba(251,146,60,0.18)" stroke="#fb923c" stroke-width="1.5"/><text x="583" y="88" text-anchor="middle" font-size="10" fill="#fb923c" font-weight="700">HALOGENATION → C₆H₅X</text><text x="583" y="104" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">+ X₂ + halogen carrier (AlCl₃)</text><text x="583" y="118" text-anchor="middle" font-size="8.5" fill="#532407">Electrophile: X⁺ (from X₂ + AlX₃)</text><text x="583" y="132" text-anchor="middle" font-size="8.5" fill="#532407">AlCl₃ = Lewis acid catalyst</text><!-- RIGHT: Friedel-Crafts acylation --><line x1="402" y1="220" x2="476" y2="220" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#bz-arr)"/><rect x="476" y="182" width="214" height="76" rx="10" fill="rgba(52,211,153,0.18)" stroke="#34d399" stroke-width="1.5"/><text x="583" y="202" text-anchor="middle" font-size="10" fill="#34d399" font-weight="700">FRIEDEL-CRAFTS ACYLATION</text><text x="583" y="218" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">RCOCl + AlCl₃ → ketone ArCOR</text><text x="583" y="234" text-anchor="middle" font-size="8.5" fill="#065f46">Electrophile: RCO⁺ (acylium cation)</text><text x="583" y="250" text-anchor="middle" font-size="8.5" fill="#065f46">Gives single pure product (no further reaction)</text><!-- BOTTOM-RIGHT: Friedel-Crafts alkylation --><line x1="390" y1="258" x2="468" y2="320" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#bz-arr)"/><rect x="466" y="318" width="224" height="76" rx="10" fill="rgba(96,165,250,0.18)" stroke="#60a5fa" stroke-width="1.5"/><text x="578" y="338" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="700">FRIEDEL-CRAFTS ALKYLATION</text><text x="578" y="354" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">RCl + AlCl₃ → alkylbenzene ArR</text><text x="578" y="370" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Electrophile: R⁺ (carbocation)</text><text x="578" y="386" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Issue: polyalkylation (product reacts again)</text><!-- BOTTOM-LEFT: Sulfonation --><line x1="308" y1="258" x2="234" y2="320" stroke="#a5b4fc" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#bz-arr)"/><rect x="10" y="318" width="224" height="76" rx="10" fill="rgba(232,121,249,0.15)" stroke="#e879f9" stroke-width="1.5"/><text x="122" y="338" text-anchor="middle" font-size="10" fill="#e879f9" font-weight="700">SULFONATION → C₆H₅SO₃H</text><text x="122" y="354" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">fuming H₂SO₄ (oleum), heat</text><text x="122" y="370" text-anchor="middle" font-size="8.5" fill="#4a1040">Electrophile: SO₃ (sulfur trioxide)</text><text x="122" y="386" text-anchor="middle" font-size="8.5" fill="#4a1040">Reversible at high T; used in detergents</text><!-- LEFT: Side-chain vs ring --><rect x="10" y="68" width="220" height="100" rx="10" fill="rgba(244,114,182,0.15)" stroke="#f472b6" stroke-width="1.5"/><text x="120" y="88" text-anchor="middle" font-size="10" fill="#f472b6" font-weight="700">RING vs SIDE-CHAIN</text><text x="20" y="107" font-size="8.5" fill="#4a1040">ArCH₃ + Cl₂ (UV light)</text><text x="20" y="121" font-size="8.5" fill="#4a1040">→ Free radical at side-chain CH₃</text><text x="20" y="135" font-size="8.5" fill="#4a1040">ArCH₃ + Cl₂ (halogen carrier)</text><text x="20" y="149" font-size="8.5" fill="#4a1040">→ EAS at ring (C₆H₄ClCH₃)</text><text x="120" y="161" text-anchor="middle" font-size="8" fill="#f472b6">UV = side chain | AlCl₃ = ring substitution</text></svg>',
        caption: 'Benzene EAS Reactions Map — 5 key electrophilic substitution reactions. All follow the same EAS mechanism (curved arrows: ring attacks E⁺, H⁺ lost to restore aromaticity). Aromaticity is always preserved — this is why addition does NOT occur.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-photochemical',
        prompt: 'What condition is required for the free radical substitution of the methyl group in methylbenzene?'
      },
      {
        id: 'cue-2',
        blockId: 'eq-main',
        prompt: 'Write the overall equation for the reaction of methylbenzene with chlorine under UV light.'
      },
      {
        id: 'cue-3',
        blockId: 'list-prop',
        prompt: 'What are the two propagation steps in the reaction of methylbenzene with chlorine?'
      },
      {
        id: 'cue-4',
        blockId: 'list-term',
        prompt: 'Give an example of a termination step in this reaction that produces a hydrocarbon.'
      }
    ],
    summaryText: 'Methylbenzene reacts with Cl₂ under UV light (photochemical) to give (chloromethyl)benzene via free radical substitution on the side chain. Initiation: Cl₂ → 2Cl•. Propagation: C₆H₅CH₃ + Cl• → C₆H₅CH₂• + HCl, then C₆H₅CH₂• + Cl₂ → C₆H₅CH₂Cl + Cl•. Termination includes pairing of the C₆H₅CH₂• radical to form 1,2-diphenylethane. Multiple substitutions can occur.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Chemguide — Methylbenzene and Chlorine Free Radical Substitution',
      detail: 'Details photochemical side-chain substitution on methylbenzene, emphasizing structural distinctions from ring substitution.',
      year: '2023',
      source: 'chemguide.co.uk',
      tags: ['arenes', 'free radical', 'substitution', 'photochemical']
    }
  ]
};