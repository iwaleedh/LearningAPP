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
          { text: 'Nitration: conc H₂SO₄ generates NO₂⁺ from HNO₃', checked: false },
          { text: 'Halogenation: Lewis acid (AlBr₃) activates Br₂ to Br⁺', checked: false },
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
        text: 'All benzene EAS reactions follow a two-step mechanism: (1) slow electrophile attack forms unstable arenium ion (delocalisation disrupted), (2) fast H⁺ loss regenerates aromatic ring. In nitration, conc H₂SO₄ generates NO₂⁺ from HNO₃. In halogenation, Lewis acid (e.g. AlCl₃) activates Cl₂ to Cl⁺. Step 1 is rate-limiting. The regeneration of aromaticity in Step 2 drives the reaction forward.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-general-1', prompt: 'Outline the general two-step mechanism of electrophilic aromatic substitution.' },
      { id: 'cue-1a', blockId: 'callout-eas-energetics', prompt: 'Explain the energy changes that occur during electrophilic aromatic substitution and why the activation energy is high.' },
      { id: 'cue-2', blockId: 'eq-nitronium-formation', prompt: 'How is the nitronium ion (NO₂⁺) generated in benzene nitration?' },
      { id: 'cue-2a', blockId: 'p-nitration-conditions', prompt: 'State the reagents and conditions required for the nitration of benzene, and explain why the temperature must be controlled.' },
      { id: 'cue-3', blockId: 'p-halogenation-mech-polarisation', prompt: 'Explain how a Lewis acid catalyst like AlCl₃ activates Cl₂ in the halogenation of benzene.' },
      { id: 'cue-4', blockId: 'p-rate', prompt: 'Which step is rate-determining in EAS, and what factors affect the rate?' }
    ],
    summaryText: 'EAS: Step 1 (slow) — E⁺ attacks π electrons → arenium ion (delocalisation broken). Step 2 (fast) — H⁺ lost → aromatic ring regenerated. Nitration: H₂SO₄ protonates HNO₃ → NO₂⁺. Halogenation: AlBr₃ polarises Br₂ → Br⁺. Step 1 is rate-determining. Regenerating aromaticity drives reaction.',
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
    }
  ]
};
