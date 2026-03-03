export const note_chemistry_4_14_0 = {
  blocks: [
    {
      id: 'obj-brønsted',
      type: 'objective',
      data: {
        text: 'Understand the Brønsted-Lowry acid-base model; define acids and bases in terms of proton transfer; identify strong and weak acids and bases; explain amphoteric substances'
      }
    },
    {
      id: 'h-brønsted-def',
      type: 'heading',
      data: { text: 'Brønsted-Lowry Acid-Base Model', level: 2 }
    },
    {
      id: 'p-brønsted',
      type: 'paragraph',
      data: {
        text: 'The Brønsted-Lowry model defines acids and bases in terms of proton (H⁺) transfer. An acid is a proton donor—a species that releases H⁺ ions. A base is a proton acceptor—a species that accepts H⁺ ions. This model is more general than the Arrhenius model because it applies to non-aqueous systems and better explains the behaviour of weak acids and bases.'
      }
    },
    {
      id: 'p-examples',
      type: 'paragraph',
      data: {
        text: 'HCl is an acid because it donates a proton: HCl → H⁺ + Cl⁻. NH₃ is a base because it accepts a proton: NH₃ + H⁺ → NH₄⁺. H₂O can act as both: in the presence of HCl, water acts as a base (H₂O + H⁺ → H₃O⁺); in the presence of NH₃, water acts as an acid (H₂O → H⁺ + OH⁻). Water is amphoteric.'
      }
    },
    {
      id: 'h-strong-acids',
      type: 'heading',
      data: { text: 'Strong Acids and Bases', level: 2 }
    },
    {
      id: 'p-strong-acid',
      type: 'paragraph',
      data: {
        text: 'Strong acids completely dissociate in water, releasing all their protons. The three strong acids you must know are HCl, HBr, HI (hydrohalic acids) and HNO₃ and H₂SO₄ (oxyacids). When a strong acid is dissolved in water, essentially 100% of the acid molecules are converted to H⁺ and the conjugate base. For example, HCl(aq) → H⁺(aq) + Cl⁻(aq) is essentially complete; there is negligible HCl remaining in solution.'
      }
    },
    {
      id: 'p-strong-base',
      type: 'paragraph',
      data: {
        text: 'Strong bases completely dissociate to produce OH⁻ ions. The most common strong bases are Group 1 hydroxides (LiOH, NaOH, KOH) and some Group 2 hydroxides (Ca(OH)₂, Sr(OH)₂, Ba(OH)₂). For example, NaOH(aq) → Na⁺(aq) + OH⁻(aq) is essentially complete in dilute solution.'
      }
    },
    {
      id: 'tbl-strong',
      type: 'comparisonTable',
      data: {
        headers: ['Strong Acids', 'Strong Bases'],
        rows: [
          ['HCl, HBr, HI', 'Group 1 hydroxides (LiOH, NaOH, KOH)'],
          ['HNO₃', 'Ca(OH)₂, Sr(OH)₂, Ba(OH)₂'],
          ['H₂SO₄ (first dissociation)', ''],
          ['All completely dissociate (~100%)', 'All completely dissociate (~100%)'],
          ['Ka >> 1 (or infinite)', 'Kb >> 1 (or infinite)']
        ],
        caption: 'Strong acids and bases (all common in A-Level)'
      }
    },
    {
      id: 'h-weak-acids',
      type: 'heading',
      data: { text: 'Weak Acids and Bases', level: 2 }
    },
    {
      id: 'p-weak-acid',
      type: 'paragraph',
      data: {
        text: 'Weak acids only partially dissociate in water, establishing an equilibrium between the molecular acid and its conjugate base. Examples include carboxylic acids (CH₃COOH, HCOOH), weak mineral acids (HF), and hydrogen sulfide (H₂S). In solution, both the acid HA and its conjugate base A⁻ are present in significant amounts. The dissociation is incomplete, typically 1-10% depending on the acid and its concentration.'
      }
    },
    {
      id: 'p-weak-base',
      type: 'paragraph',
      data: {
        text: 'Weak bases only partially accept protons in water. Ammonia (NH₃) is the classic weak base; it reacts with water to form NH₄⁺ and OH⁻ but the equilibrium lies to the left, so mostly NH₃ molecules remain. Other weak bases include amines (RNH₂) and carbonate ions (CO₃²⁻). Like weak acids, weak bases are described by an equilibrium constant (Kb) with Ka and Kb values much less than 1.'
      }
    },
    {
      id: 'h-amphoteric',
      type: 'heading',
      data: { text: 'Amphoteric Substances', level: 2 }
    },
    {
      id: 'p-ampho',
      type: 'paragraph',
      data: {
        text: 'An amphoteric substance can act as both a proton donor (acid) and a proton acceptor (base). Water is the classic example: H₂O ⇌ H⁺ + OH⁻ (acid side) and H₂O + H⁺ → H₃O⁺ (base side). Other amphoteric species include hydrogen carbonate (HCO₃⁻), hydrogen sulfate (HSO₄⁻), and amino acids. Whether an amphoteric substance acts primarily as an acid or base depends on what it is mixed with.'
      }
    },
    {
      id: 'ex-ampho',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Water as Amphoteric',
        text: 'In pure water, water acts as both acid and base simultaneously: H₂O + H₂O ⇌ H₃O⁺ + OH⁻. Each water molecule can donate a proton to another water molecule or accept one. In a solution with HCl (strong acid), water acts as a base accepting the proton from HCl. In a solution with NaOH (strong base), water acts as an acid, donating a proton to the hydroxide ion.'
      }
    },
    {
      id: 'h-more-ampho',
      type: 'heading',
      data: { text: 'More Amphoteric Examples', level: 2 }
    },
    {
      id: 'list-ampho-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'HCO₃⁻ (hydrogen carbonate): can donate H⁺ → CO₃²⁻ or accept H⁺ → H₂CO₃',
          'HSO₄⁻ (hydrogen sulfate): can donate H⁺ → SO₄²⁻ or accept H⁺ → H₂SO₄',
          'Amino acids: contain both −COOH (acidic) and −NH₂ (basic) groups',
          'Al(H₂O)₃₊ (metal aqua ion): can donate H⁺ (acidic) or accept OH⁻ (basic)'
        ]
      }
    },
    {
      id: 'p-summary-ampho',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Amphoteric Summary',
        text: 'An amphoteric substance has both acidic and basic properties. In acidic solution, it acts as a base. In basic solution, it acts as an acid. In pure water or with other amphoteric species, it can do both simultaneously. Water is the most important amphoteric substance in chemistry.'
      }
    },
    {
      id: 'checklist-brønsted',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can define acid and base using Brønsted-Lowry model', checked: false },
          { text: 'Know the three strong acids and strong bases', checked: false },
          { text: 'Can identify weak acids and bases', checked: false },
          { text: 'Can explain amphoteric substances and give examples', checked: false },
          { text: 'Understand the difference between strong and weak', checked: false }
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
        text: 'Understand: Brønsted-Lowry acids donate protons; bases accept protons. This definition extends beyond aqueous solutions and explains amphoteric behaviour (e.g. water acts as both acid and base).\n\nApply: Identify the acid, base, conjugate acid, and conjugate base in: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.\n\nAnalyze: Why is HCl a strong acid in water but a weak acid in glacial acetic acid? Relate to solvent levelling.\n\nEvaluate: Compare Brønsted-Lowry with Lewis acid-base theory. Which is more general and why?'
      },
      terms: []
    },
    {
      id: 'summary-brønsted',
      type: 'summary',
      data: {
        text: 'Acid = proton donor, Base = proton acceptor (Brønsted-Lowry). Strong acids (HCl, HNO₃, H₂SO₄) and bases (NaOH, KOH, Ca(OH)₂) completely dissociate. Weak acids and bases partially dissociate. Amphoteric substances (e.g., H₂O, HCO₃⁻) can both donate and accept protons.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-brønsted',
        prompt: 'Define an acid and a base according to the Brønsted-Lowry model.'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-strong',
        prompt: 'List the three strong acids and three common strong bases.'
      },
      {
        id: 'cue-3',
        blockId: 'p-weak-acid',
        prompt: 'What is the key difference between a strong acid and a weak acid?'
      },
      {
        id: 'cue-4',
        blockId: 'p-ampho',
        prompt: 'Explain why water is amphoteric and give an example of water acting as each an acid and a base.'
      },
      {
        id: 'cue-5',
        blockId: 'list-ampho-examples',
        prompt: 'Give two examples of amphoteric species other than water.'
      }
    ],
    summaryText: 'Acid = H⁺ donor, Base = H⁺ acceptor (Brønsted-Lowry). Strong acids: HCl, HNO₃, H₂SO₄. Strong bases: NaOH, KOH, Ca(OH)₂. Weak acids/bases partially dissociate. Amphoteric = can act as acid or base (e.g., H₂O, HCO₃⁻).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Brønsted-Lowry Acid-Base Definition',
      detail: 'Defines acids and bases in terms of proton transfer; more general than Arrhenius model.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['acid-base', 'Brønsted-Lowry', 'strong acids', 'weak acids', 'amphoteric']
    }
  ]
};
