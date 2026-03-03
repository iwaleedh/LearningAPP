export const note_chemistry_5_19_1 = {
  blocks: [
    {
      id: 'obj-amine-basicity',
      type: 'objective',
      data: {
        text: 'Explain the basic nature of amines: lone pair on nitrogen accepts protons; compare basicity of alkylamines vs arylamines using Kb values; explain protonation reactions and salt formation'
      }
    },
    {
      id: 'h-amine-as-base',
      type: 'heading',
      data: { text: 'Amines as Bases: Lone Pair Acceptance', level: 2 }
    },
    {
      id: 'p-base-1',
      type: 'paragraph',
      data: {
        text: 'Amines are bases because the nitrogen atom has a lone pair of electrons. This lone pair can accept a proton (H⁺) from an acid, forming a positively charged ammonium ion (RNH₃⁺ or similar). The basicity of an amine depends on how readily this lone pair accepts a proton, which is quantified by the base dissociation constant Kb.'
      }
    },
    {
      id: 'eq-amine-protonation',
      type: 'equation',
      data: {
        html: 'RNH₂ + H⁺ ⇌ RNH₃⁺ (primary amine + acid → ammonium salt)<br />R₂NH + H⁺ ⇌ R₂NH₂⁺ (secondary amine + acid)<br />R₃N + H⁺ ⇌ R₃NH⁺ (tertiary amine + acid)'
      }
    },
    {
      id: 'p-base-2',
      type: 'paragraph',
      data: {
        text: 'All amines, whether primary, secondary, or tertiary, can form salts by protonation with acids. The resulting ammonium salts are ionic compounds that are typically soluble in water. For example, methylamine (CH₃NH₂) reacts with hydrochloric acid to form methylammonium chloride (CH₃NH₃⁺Cl⁻), a white crystalline solid.'
      }
    },
    {
      id: 'h-kb-and-strength',
      type: 'heading',
      data: { text: 'Base Strength and Kb Values', level: 2 }
    },
    {
      id: 'p-kb-1',
      type: 'paragraph',
      data: {
        text: 'Base strength is quantified by the base dissociation constant Kb, which measures how readily a base accepts a proton. The equilibrium is: RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻. A larger Kb indicates a stronger base (more H⁺ acceptance). For alkylamines, Kb values are typically in the range 10⁻³ to 10⁻⁴ M. For arylamines, Kb is much smaller, around 10⁻⁹ to 10⁻¹⁰ M.'
      }
    },
    {
      id: 'eq-kb-expression',
      type: 'equation',
      data: {
        html: 'Kb = [RNH₃⁺][OH⁻] / [RNH₂]<br />Larger Kb → stronger base (more readily accepts H⁺)<br />Smaller Kb → weaker base'
      }
    },
    {
      id: 'p-kb-2',
      type: 'paragraph',
      data: {
        text: 'Typical Kb values: methylamine ~4.4 × 10⁻⁴ M; ammonia (NH₃) ~1.8 × 10⁻⁵ M; phenylamine (aniline) ~4.3 × 10⁻¹⁰ M. This shows that methylamine is much stronger base than ammonia, which is much stronger than phenylamine.'
      }
    },
    {
      id: 'h-alkylamine-strength',
      type: 'heading',
      data: { text: 'Alkylamines: Stronger Bases Than Ammonia', level: 2 }
    },
    {
      id: 'p-alkyl-1',
      type: 'paragraph',
      data: {
        text: 'Alkylamines are stronger bases than ammonia. The alkyl groups are electron-donating through an inductive effect (pushing electron density through σ bonds). This increases the electron density on the nitrogen lone pair, making it more readily available to accept a proton. The larger the alkyl group and the more alkyl groups present, the stronger the base effect is, up to a point.'
      }
    },
    {
      id: 'p-alkyl-2',
      type: 'paragraph',
      data: {
        text: 'The basicity order for alkylamines is: primary > secondary > tertiary at one point, but then solvation effects (how the ammonium ion is stabilised in solution) become important. The actual experimental order is: secondary > primary ≈ tertiary. Secondary amines like dimethylamine are the strongest bases among alkylamines.'
      }
    },
    {
      id: 'callout-alkyl-donation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Electron-Donating Alkyl Groups',
        text: 'Alkyl groups push electron density towards N via inductive effect. This increases lone pair electron density. More electron density on N → easier protonation → stronger base. Alkylamine Kb > Ammonia Kb > Arylamine Kb.'
      }
    },
    {
      id: 'h-arylamine-weakness',
      type: 'heading',
      data: { text: 'Arylamines: Weaker Bases Than Ammonia', level: 2 }
    },
    {
      id: 'p-aryl-1',
      type: 'paragraph',
      data: {
        text: 'Arylamines like phenylamine are much weaker bases than ammonia or alkylamines. The reason is resonance: the lone pair on the nitrogen atom of phenylamine is delocalised into the aromatic ring. This means the electrons are spread out over the π system and are less available to accept a proton.'
      }
    },
    {
      id: 'p-aryl-2',
      type: 'paragraph',
      data: {
        text: 'The nitrogen lone pair can participate in resonance structures where the negative charge (if the N were lone pair electrons) would be distributed over the ring. This delocalisation stabilises the neutral phenylamine but destabilises the phenylamine cation (where the lone pair is gone). As a result, protonation is unfavourable, and phenylamine is a weak base.'
      }
    },
    {
      id: 'callout-aryl-delocalisation',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Arylamine Basicity Weakness',
        text: 'Phenylamine lone pair delocalised into ring → less available for H⁺ capture → weak base. Phenylamine pKb ≈ 9.4 (very weak base, Kb = 4 × 10⁻¹⁰). Compare: methylamine pKb ≈ 3.4, ammonia pKb ≈ 4.7.'
      }
    },
    {
      id: 'h-salt-formation',
      type: 'heading',
      data: { text: 'Amine Salt Formation', level: 2 }
    },
    {
      id: 'p-salt-1',
      type: 'paragraph',
      data: {
        text: 'Amines react with dilute hydrochloric acid to form amine salts (ammonium chlorides or similar). These salts are ionic compounds with the general formula [RNH₃⁺]Cl⁻ (primary), [R₂NH₂⁺]Cl⁻ (secondary), or [R₃NH⁺]Cl⁻ (tertiary). The salts are usually white solids that are highly soluble in water.'
      }
    },
    {
      id: 'eq-salt-formation',
      type: 'equation',
      data: {
        html: 'CH₃NH₂ + HCl → CH₃NH₃⁺Cl⁻ (methylammonium chloride)<br />C₆H₅NH₂ + HCl → C₆H₅NH₃⁺Cl⁻ (phenylammonium chloride)'
      }
    },
    {
      id: 'checklist-basicity',
      type: 'checklist',
      data: {
        items: [
          { text: 'Amines are bases due to lone pair on N', checked: false },
          { text: 'Kb measures base strength; larger Kb = stronger base', checked: false },
          { text: 'Alkylamines stronger bases than ammonia (alkyl group electron-donating)', checked: false },
          { text: 'Arylamines weaker bases than ammonia (lone pair delocalised into ring)', checked: false },
          { text: 'Amines form salts with HCl: RNH₂ + HCl → RNH₃⁺Cl⁻', checked: false }
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
        text: 'Understand: The lone pair on N accepts protons, making amines basic. Electron-donating alkyl groups increase base strength; electron-withdrawing aryl groups decrease it.\n\nApply: Arrange in order of increasing base strength: NH₃, CH₃NH₂, (CH₃)₂NH, C₆H₅NH₂. Explain.\n\nAnalyze: Why is phenylamine a much weaker base than cyclohexylamine? Use the delocalisation of the lone pair into the ring.\n\nEvaluate: In water, (CH₃)₃N is a weaker base than (CH₃)₂NH. In the gas phase, it is stronger. Explain this solvent effect.'
      },
      terms: []
    },
    {
      id: 'summary-basicity',
      type: 'summary',
      data: {
        text: 'Amines are bases because the nitrogen lone pair accepts protons. Alkylamines (e.g., methylamine) are stronger bases than ammonia because alkyl groups donate electron density via inductive effect, increasing lone pair availability. Arylamines (e.g., phenylamine) are weaker bases than ammonia because the lone pair is delocalised into the aromatic ring, making it less available for protonation. Basicity order: alkylamines > NH₃ > arylamines. All amines form salts with HCl: RNH₂ + HCl → RNH₃⁺Cl⁻.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-base-1', prompt: 'Why are amines basic, and what is the role of the lone pair?' },
      { id: 'cue-2', blockId: 'p-alkyl-1', prompt: 'Explain why alkylamines are stronger bases than ammonia.' },
      { id: 'cue-3', blockId: 'p-aryl-2', prompt: 'Why are arylamines weaker bases than ammonia?' },
      { id: 'cue-4', blockId: 'eq-salt-formation', prompt: 'Write the equation for phenylamine reacting with HCl to form a salt.' }
    ],
    summaryText: 'Amines are bases: N lone pair accepts H⁺. Alkylamines > NH₃ (alkyl groups donate electrons inductively, increasing lone pair density). Arylamines < NH₃ (lone pair delocalised into ring, less available). Kb: methylamine 4.4×10⁻⁴, ammonia 1.8×10⁻⁵, phenylamine 4.3×10⁻¹⁰. All form salts with HCl.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Amine basicity and Kb values',
      detail: 'Base dissociation constants for alkylamines, ammonia, and arylamines; resonance effects in phenylamine; protonation reactions and salt formation',
      year: '2023',
      source: 'chemguide.co.uk — amine basicity and reactions with acids',
      tags: ['basicity', 'Kb', 'alkylamine', 'arylamine', 'salt', 'protonation']
    }
  ]
};
