/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 9
 * "Free radical addition of HBr (Peroxide effect)"
 * Source: chemguide.co.uk/mechanisms/freerad/alkenehbr.html
 */
export const note_chemistry_1_5_9 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand the free radical addition of hydrogen bromide to alkenes in the presence of organic peroxides (the peroxide effect or anti-Markovnikov addition). Explain the mechanism and why other hydrogen halides do not behave this way.' },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The Peroxide Effect', level: 2 },
      terms: []
    },
    {
      id: 'callout-peroxide',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Anti-Markovnikov Addition',
        text: 'Normally, hydrogen halides (like HBr) react with alkenes via an <strong>electrophilic addition mechanism</strong>, which follows <strong>Markovnikov\'s Rule</strong> (the hydrogen attaches to the carbon with more hydrogens).<br/><br/>However, in the presence of <strong>organic peroxides</strong> (or oxygen from the air), HBr adds via a <strong>free radical mechanism</strong>. For unsymmetrical alkenes like propene, the HBr adds the "wrong way around" — this is known as the <strong>Peroxide Effect</strong> or <strong>Anti-Markovnikov addition</strong>.'
      },
      terms: ['Peroxide effect', 'Anti-Markovnikov addition', 'Electrophilic addition', 'Free radical mechanism']
    },
    {
      id: 'h-mech',
      type: 'heading',
      data: { text: 'Mechanism: Free Radical Addition of HBr', level: 2 },
      terms: []
    },
    {
      id: 'p-mech-intro',
      type: 'paragraph',
      data: { text: 'Instead of an electrophilic attack, organic peroxides trigger a free radical chain reaction. The reaction proceeds through three main stages: initiation, propagation, and termination.' },
      terms: []
    },
    {
      id: 'list-initiation',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>Chain Initiation:</strong> The weak oxygen-oxygen bond in the organic peroxide breaks to form two free radicals: RO–OR → 2RO•',
          'These peroxide radicals extract a hydrogen atom from an HBr molecule, leaving a bromine radical: RO• + HBr → ROH + Br•'
        ]
      },
      terms: ['Chain initiation']
    },
    {
      id: 'list-propagation',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>Chain Propagation (Step 1):</strong> The bromine radical (Br•) joins to the alkene (e.g., propene) using one of the electrons in the pi bond, forming a new carbon radical.',
          '<em>Crucial detail:</em> The Br• attaches so that the <strong>most stable radical</strong> is formed. For propene, it attaches to the end carbon (C-1) to form a secondary radical, which is more stable than the alternative primary radical. This is why the addition is anti-Markovnikov: CH₃CH=CH₂ + Br• → CH₃C•H–CH₂Br',
          '<strong>Chain Propagation (Step 2):</strong> The secondary radical reacts with another HBr molecule, extracting its hydrogen to produce 1-bromopropane and regenerating a bromine radical to continue the chain: CH₃C•H–CH₂Br + HBr → CH₃CH₂–CH₂Br + Br•'
        ]
      },
      terms: ['Chain propagation', 'Secondary radical', 'Primary radical']
    },
    {
      id: 'list-termination',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>Chain Termination:</strong> The reaction stops when any two free radicals collide and combine, eliminating the unpaired electrons. For example: 2Br• → Br₂'
        ]
      },
      terms: ['Chain termination']
    },
    {
      id: 'h-halides',
      type: 'heading',
      data: { text: 'Why Only Hydrogen Bromide?', level: 2 },
      terms: []
    },
    {
      id: 'p-halides',
      type: 'paragraph',
      data: { text: 'The peroxide effect only applies to HBr. With HF, HCl, and HI, the alternative electrophilic mechanism is much faster, so Markovnikov addition dominates. This is due to the bond enthalpies of the hydrogen halides during the propagation steps:' },
      terms: []
    },
    {
      id: 'table-halides',
      type: 'comparisonTable',
      data: {
        headers: ['Hydrogen Halide', 'Reason it fails the radical mechanism'],
        rows: [
          ['<strong>HF</strong>', 'The H–F bond is extremely strong. Fluorine radicals cannot be formed easily in the initiation step.'],
          ['<strong>HCl</strong>', 'The second step of propagation (reaction of the radical with HCl) is <strong>endothermic</strong> because the H–Cl bond is relatively strong, making the chain reaction too slow.'],
          ['<strong>HI</strong>', 'The first step of propagation (formation of the weak C–I bond) is <strong>endothermic</strong>, slowing the chain reaction down.'],
          ['<strong>HBr</strong>', '<strong>Both steps</strong> of the propagation stage are <strong>exothermic</strong>, driving the chain reaction forward quickly.']
        ],
        caption: 'Why only HBr undergoes free radical addition to alkenes'
      },
      terms: ['Endothermic', 'Exothermic', 'Bond enthalpy']
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'In the presence of organic peroxides, HBr adds to alkenes via a fast free radical mechanism rather than the usual electrophilic addition. For asymmetric alkenes, the Br attaches to the less substituted carbon, producing the anti-Markovnikov product. This only occurs with HBr because both of its propagation steps are exothermic.' },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'c-peroxide',
        blockId: 'callout-peroxide',
        prompt: 'What effect do organic peroxides have on the addition of HBr to asymmetric alkenes?'
      },
      {
        id: 'c-hbr-mech',
        blockId: 'list-propagation',
        prompt: 'During the propagation stage, why does Br• attack the less substituted carbon of propene?'
      },
      {
        id: 'c-halides',
        blockId: 'table-halides',
        prompt: 'Why does the peroxide effect not occur with HCl or HI?'
      }
    ],
    summaryText: 'Peroxides cause anti-Markovnikov addition via a free radical chain reaction. The Br• attacks to form the most stable intermediate radical. HCl and HI do not do this because one of their propagation steps is endothermic.',
    ready: true
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Chemguide: Alkene and HBr (Peroxide Effect)',
      detail: 'Hydrogen halides usually react via electrophilic addition. However, organic peroxides initiate a free radical chain reaction. When adding to unsymmetrical alkenes like propene, Br attaches to form the most stable secondary intermediate radical (anti-Markovnikov addition). The mechanism works uniquely for HBr because both propagation steps are exothermic, unlike HCl and HI which have endothermic steps.',
      source: 'https://www.chemguide.co.uk/mechanisms/freerad/alkenehbr.html'
    }
  ],
  mentions: []
};
