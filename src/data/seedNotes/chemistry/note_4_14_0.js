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
      id: 'list-brønsted-def',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Acid</strong> = proton (H⁺) donor — releases H⁺ to another species',
          '<strong>Base</strong> = proton (H⁺) acceptor — takes H⁺ from an acid',
          'A base must have a <strong>lone pair of electrons</strong> to form a dative (coordinate) bond with H⁺',
          'More general than Arrhenius model — applies to non-aqueous systems and explains amphoteric behaviour'
        ]
      }
    },
    {
      id: 'h-bl-examples',
      type: 'heading',
      data: { text: 'Brønsted-Lowry Examples', level: 3 }
    },
    {
      id: 'list-bl-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'HCl + H₂O → H₃O⁺ + Cl⁻ &emsp; HCl = acid (donates H⁺); H₂O = base (accepts H⁺)',
          'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ &emsp; H₂O = acid (donates H⁺); NH₃ = base (accepts H⁺)',
          'Water can be acid OR base → it is <strong>amphoteric</strong>'
        ]
      }
    },
    {
      id: 'callout-bl-flow',
      type: 'callout',
      data: {
        style: 'tip',
        title: '🔢 Sequential Steps: Identify Acid/Base in Any Equation',
        text: '1. Write out the full equilibrium equation.\n2. Find the species that LOSES a H⁺ → that is the <strong>acid</strong>.\n3. Find the species that GAINS a H⁺ → that is the <strong>base</strong>.\n4. The acid minus H⁺ = its <strong>conjugate base</strong>.\n5. The base plus H⁺ = its <strong>conjugate acid</strong>.\n6. Each acid/conjugate-base pair (and base/conjugate-acid pair) are the two conjugate pairs.'
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
      id: 'h-protic',
      type: 'heading',
      data: { text: 'Number of Protons: Monoprotic to Triprotic', level: 2 }
    },
    {
      id: 'tbl-protic',
      type: 'comparisonTable',
      data: {
        headers: ['Term', 'Protons donated', 'Example acid', 'Example base'],
        rows: [
          ['Monoprotic / Monobasic / Monoacidic', '1', 'HCl, HNO₃, CH₃COOH', 'NaOH'],
          ['Diprotic / Dibasic', '2', 'H₂SO₄, H₂CO₃', 'Ca(OH)₂'],
          ['Triprotic / Tribasic', '3', 'H₃PO₄', '—']
        ],
        caption: 'Classification of acids/bases by number of transferable protons'
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
      id: 'callout-ampho-hno3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Unusual Amphoteric Example: HNO₃ acting as a BASE',
        text: 'HNO₃ is normally a strong acid. However, when mixed with concentrated H₂SO₄ (a stronger acid), HNO₃ acts as a BASE:\n\nH₂SO₄ + HNO₃ → HSO₄⁻ + H₂NO₃⁺\n\nHere H₂SO₄ donates H⁺ to HNO₃ → HNO₃ accepts H⁺ = base in this reaction.\nThis illustrates that acid/base character is relative — it depends on the partner species.'
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
