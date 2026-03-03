/**
 * WCH12 | Topic 6: Energetics | Subtopic 1
 * Enthalpy profile diagrams
 */

export const note_chemistry_1_2_6_1 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Draw and interpret enthalpy profile diagrams for exothermic and endothermic reactions. Label reactants, products, activation energy (Eₐ), ΔH, and the transition state. Understand the relationship between Eₐ and ΔH.'
    }
  },
  // ── WHAT IS AN ENTHALPY PROFILE DIAGRAM ──────────────────────────────
  {
    id: 'h-profile',
    type: 'heading',
    data: {
      text: 'Enthalpy Profile Diagrams',
      level: 2
    },
    terms: ['Enthalpy profile diagram', 'Activation energy']
  }, {
    id: 'p-profile',
    type: "list",
    data: {
      style: "unordered",
      items: ["An enthalpy profile diagram (also called a reaction profile or energy level diagram) shows how the enthalpy of the reacting system changes as the reaction proceeds.", "The x-axis shows the reaction coordinate (progress of reaction) and the y-axis shows enthalpy (H).", "The curve rises to a peak \u2014 the transition state \u2014 before falling to the products level."]
    },
    terms: ['Enthalpy profile diagram', 'Activation energy', 'Transition state']
  }, {
    id: 'callout-parts-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Key Features to Label',
      text: 'Reactants — starting enthalpy level\nProducts — final enthalpy level\nTransition state (‡) — the peak of the curve (highest energy point)\nActivation energy (Eₐ) — energy needed to start the reaction; the difference between reactants level and the peak\nΔH — overall enthalpy change; difference between reactants and products levels\n\nArrows for Eₐ: from reactants UP to the peak\nArrows for ΔH: from reactants DOWN to products (exothermic) or UP (endothermic)'
    },
    terms: ['Activation energy', 'Transition state', 'Enthalpy profile diagram']
  },
  // ── EXOTHERMIC PROFILE ────────────────────────────────────────────────
  {
    id: 'h-exo-profile',
    type: 'heading',
    data: {
      text: 'Exothermic Profile',
      level: 3
    },
    terms: ['Exothermic', 'Activation energy']
  }, {
    id: 'svg-exo',
    type: 'svg',
    data: {
      caption: 'Enthalpy profile for an exothermic reaction — products are at lower enthalpy than reactants',
      svg: `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exothermic enthalpy profile diagram">
  <defs>
    <marker id="arrd" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#374151"/>
    </marker>
    <marker id="arru" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 Z" fill="#374151"/>
    </marker>
    <marker id="arr-ea-r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#f97316"/>
    </marker>
    <marker id="arr-dh-r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="50" y1="20" x2="50" y2="190" stroke="#374151" stroke-width="2"/>
  <line x1="50" y1="190" x2="420" y2="190" stroke="#374151" stroke-width="2"/>
  <text x="20" y="110" font-size="10" fill="#374151" transform="rotate(-90,20,110)" text-anchor="middle">Enthalpy (H)</text>
  <text x="235" y="210" font-size="10" fill="#374151" text-anchor="middle">Reaction coordinate →</text>

  <!-- Reactants level -->
  <line x1="55" y1="100" x2="130" y2="100" stroke="#374151" stroke-width="2"/>
  <text x="92" y="93" font-size="10" fill="#374151" text-anchor="middle">Reactants</text>

  <!-- Reaction curve (exothermic: goes up to peak then down lower) -->
  <path d="M130,100 Q200,30 270,30 Q320,30 350,155" fill="none" stroke="#374151" stroke-width="2"/>

  <!-- Products level (lower) -->
  <line x1="350" y1="155" x2="415" y2="155" stroke="#374151" stroke-width="2"/>
  <text x="382" y="168" font-size="10" fill="#374151" text-anchor="middle">Products</text>

  <!-- Transition state label -->
  <text x="270" y="22" font-size="9" fill="#6b7280" text-anchor="middle">Transition state (‡)</text>

  <!-- Ea arrow: from reactants (100) up to peak (30) — on left side -->
  <line x1="160" y1="100" x2="160" y2="34" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arr-ea-r)"/>
  <text x="172" y="68" font-size="10" font-weight="bold" fill="#f97316">Eₐ</text>

  <!-- ΔH arrow: from reactants (100) down to products (155) — on right side -->
  <line x1="360" y1="100" x2="360" y2="151" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arr-dh-r)"/>
  <text x="372" y="130" font-size="10" font-weight="bold" fill="#dc2626">ΔH &lt; 0</text>

  <!-- Dashed horizontal line from reactants across to show ΔH reference -->
  <line x1="130" y1="100" x2="360" y2="100" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,3"/>
</svg>`
    },
    terms: ['Exothermic', 'Activation energy', 'Enthalpy profile diagram']
  },
  // ── ENDOTHERMIC PROFILE ───────────────────────────────────────────────
  {
    id: 'h-endo-profile',
    type: 'heading',
    data: {
      text: 'Endothermic Profile',
      level: 3
    },
    terms: ['Endothermic', 'Activation energy']
  }, {
    id: 'svg-endo',
    type: 'svg',
    data: {
      caption: 'Enthalpy profile for an endothermic reaction — products are at higher enthalpy than reactants',
      svg: `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Endothermic enthalpy profile diagram">
  <defs>
    <marker id="arr-ea-e" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#f97316"/>
    </marker>
    <marker id="arr-dh-e" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a"/>
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="50" y1="20" x2="50" y2="190" stroke="#374151" stroke-width="2"/>
  <line x1="50" y1="190" x2="420" y2="190" stroke="#374151" stroke-width="2"/>
  <text x="20" y="110" font-size="10" fill="#374151" transform="rotate(-90,20,110)" text-anchor="middle">Enthalpy (H)</text>
  <text x="235" y="210" font-size="10" fill="#374151" text-anchor="middle">Reaction coordinate →</text>

  <!-- Reactants level (lower) -->
  <line x1="55" y1="155" x2="130" y2="155" stroke="#374151" stroke-width="2"/>
  <text x="92" y="168" font-size="10" fill="#374151" text-anchor="middle">Reactants</text>

  <!-- Reaction curve (endothermic: goes up to peak then settles higher) -->
  <path d="M130,155 Q200,30 270,30 Q320,30 350,100" fill="none" stroke="#374151" stroke-width="2"/>

  <!-- Products level (higher) -->
  <line x1="350" y1="100" x2="415" y2="100" stroke="#374151" stroke-width="2"/>
  <text x="382" y="93" font-size="10" fill="#374151" text-anchor="middle">Products</text>

  <!-- Transition state label -->
  <text x="270" y="22" font-size="9" fill="#6b7280" text-anchor="middle">Transition state (‡)</text>

  <!-- Ea arrow: from reactants (155) up to peak (30) -->
  <line x1="160" y1="155" x2="160" y2="34" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arr-ea-e)"/>
  <text x="172" y="97" font-size="10" font-weight="bold" fill="#f97316">Eₐ</text>

  <!-- ΔH arrow: from reactants (155) up to products (100) — upward -->
  <line x1="360" y1="154" x2="360" y2="104" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arr-dh-e)"/>
  <text x="372" y="130" font-size="10" font-weight="bold" fill="#16a34a">ΔH &gt; 0</text>

  <!-- Dashed horizontal from reactants to ΔH reference -->
  <line x1="130" y1="155" x2="360" y2="155" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,3"/>
</svg>`
    },
    terms: ['Endothermic', 'Activation energy', 'Enthalpy profile diagram']
  },
  // ── KEY RELATIONSHIPS ─────────────────────────────────────────────────
  {
    id: 'h-relationships',
    type: 'heading',
    data: {
      text: 'Key Relationships',
      level: 2
    },
    terms: ['Activation energy']
  }, {
    id: 'table-relationships',
    type: 'comparisonTable',
    data: {
      caption: 'Summary of enthalpy profile features',
      headers: ['Feature', 'Exothermic', 'Endothermic'],
      rows: [['Products vs Reactants', 'Products LOWER than reactants', 'Products HIGHER than reactants'], ['ΔH sign', 'Negative (−)', 'Positive (+)'], ['Eₐ', 'From reactants up to peak', 'From reactants up to peak (always positive)'], ['Eₐ for reverse reaction', 'Eₐ(reverse) = Eₐ(forward) − |ΔH|', 'Eₐ(reverse) = Eₐ(forward) + |ΔH|'], ['Transition state', 'Highest point on curve', 'Highest point on curve']]
    },
    terms: ['Activation energy', 'Exothermic', 'Endothermic']
  }, {
    id: 'callout-ea-note',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Activation Energy — Important Points',
      text: 'Activation energy (Eₐ) is always POSITIVE — it is the minimum energy needed to break bonds in reactants and start the reaction.\n\nEₐ is independent of ΔH — a reaction can be very exothermic yet still have a high Eₐ (e.g. combustion of wood needs a spark).\n\nFor the reverse reaction:\n  Eₐ(reverse) = Eₐ(forward) − ΔH   [for exothermic forward]\n  Eₐ(reverse) = Eₐ(forward) − ΔH   [general: subtract signed ΔH]'
    },
    terms: ['Activation energy']
  }, {
    id: 'callout-warning-profile',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Common Mistakes in Profile Diagrams',
      text: 'Drawing Eₐ from PRODUCTS to the peak — it must always be from REACTANTS to the peak.\nLabelling ΔH as the full height of the peak — ΔH is reactants to products, NOT reactants to peak.\nForgetting to draw the curve through the transition state — a straight line between levels is WRONG.\nNot labelling the transition state (‡) — examiners expect it.'
    },
    terms: ['Activation energy', 'Enthalpy profile diagram']
  },
  // ── CATALYSTS AND PROFILES ────────────────────────────────────────────
  {
    id: 'h-catalyst',
    type: 'heading',
    data: {
      text: 'Effect of a Catalyst on the Profile',
      level: 2
    },
    terms: ['Catalyst', 'Activation energy']
  }, {
    id: 'p-catalyst',
    type: "list",
    data: {
      style: "unordered",
      items: ["A catalyst provides an alternative reaction pathway with a lower activation energy.", "On the profile diagram this is shown as a lower peak.", "The positions of the reactants and products levels do not change \u2014 only the peak is lower.", "\u0394H remains the same with or without a catalyst."]
    },
    terms: ['Catalyst', 'Activation energy']
  }, {
    id: 'callout-catalyst-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Catalyst Effect on Profile',
      text: 'Catalyst LOWERS Eₐ — shown as a lower peak on the profile\nΔH is UNCHANGED — reactants and products levels stay the same\nCatalyst is NOT consumed — it is regenerated at the end of the reaction\n\nOn the diagram: draw the original curve AND a second lower-peak curve to show the catalysed pathway.'
    },
    terms: ['Catalyst', 'Activation energy']
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-checklist',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Label reactants, products, transition state (‡), Eₐ and ΔH on every profile',
        checked: false
      }, {
        text: 'Eₐ arrow goes from reactants UP to the peak (always positive)',
        checked: false
      }, {
        text: 'ΔH arrow goes between reactants and products levels (sign depends on type)',
        checked: false
      }, {
        text: 'Exothermic: products BELOW reactants; ΔH negative',
        checked: false
      }, {
        text: 'Endothermic: products ABOVE reactants; ΔH positive',
        checked: false
      }, {
        text: 'Catalyst lowers Eₐ only — ΔH and energy levels of reactants/products unchanged',
        checked: false
      }, {
        text: 'Draw a smooth curve through the transition state — never a straight line',
        checked: false
      }]
    }
  },
  // ── SUMMARY ───────────────────────────────────────────────────────────
  {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Enthalpy profile diagrams show how enthalpy changes as a reaction progresses. Exothermic profiles have products below reactants (ΔH < 0); endothermic profiles have products above reactants (ΔH > 0). Activation energy (Eₐ) is always measured from the reactants level to the peak (transition state). A catalyst lowers Eₐ without changing ΔH or the energy levels of reactants/products.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-parts-key',
      prompt: 'List the 5 key features that must be labelled on an enthalpy profile diagram.'
    }, {
      id: 'cue-2',
      blockId: 'h-exo-profile',
      prompt: 'Sketch and describe the enthalpy profile for an exothermic reaction. Where are the products relative to the reactants?'
    }, {
      id: 'cue-3',
      blockId: 'h-endo-profile',
      prompt: 'Sketch and describe the enthalpy profile for an endothermic reaction. Where are the products relative to the reactants?'
    }, {
      id: 'cue-4',
      blockId: 'callout-ea-note',
      prompt: 'What is activation energy? Is it always positive? Can a highly exothermic reaction have a high Eₐ?'
    }, {
      id: 'cue-5',
      blockId: 'h-catalyst',
      prompt: 'How does a catalyst change the enthalpy profile diagram? What does NOT change?'
    }],
    summaryText: 'Enthalpy profile diagrams, activation energy, exothermic/endothermic profiles, catalyst effect.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry WCH12 Specification',
    detail: 'Topic 6: Energetics — enthalpy profile diagrams, activation energy, transition state, catalyst effect',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['Energetics', 'Enthalpy profile', 'WCH12']
  }]
};