export const note_chemistry_4_13_3 = {
  blocks: [
    {
      id: 'obj-le-chat',
      type: 'objective',
      data: {
        text: 'Understand Le Chatelier\'s principle and predict how changes in concentration, pressure, and temperature affect equilibrium position (but NOT the value of K itself, except for temperature changes)'
      }
    },
    {
      id: 'h-principle',
      type: 'heading',
      data: { text: 'Le Chatelier\'s Principle', level: 2 }
    },
    {
      id: 'p-principle',
      type: 'paragraph',
      data: {
        text: 'Le Chatelier\'s principle states that when a system at equilibrium is subjected to a change in conditions (concentration, pressure, or temperature), the equilibrium shifts to counteract the disturbance and re-establish equilibrium. The value of K remains constant unless the temperature changes.'
      }
    },
    {
      id: 'h-concentration',
      type: 'heading',
      data: { text: 'Effect of Concentration Changes', level: 2 }
    },
    {
      id: 'p-conc-increase',
      type: 'paragraph',
      data: {
        text: 'If the concentration of a reactant is increased, the equilibrium shifts to the right (forward) to consume the excess reactant and restore equilibrium. If the concentration of a product is increased, the equilibrium shifts to the left (backward) to consume the excess product. Kc remains constant; only the equilibrium concentrations change.'
      }
    },
    {
      id: 'ex-conc-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Increasing [N₂] in N₂ + 3H₂ ⇌ 2NH₃',
        text: 'At equilibrium: [N₂] = 0.75, [H₂] = 2.25, [NH₃] = 0.5 mol dm⁻³, Kc = 0.029 mol⁻² dm⁶. If [N₂] is increased to 1.5 mol dm⁻³, the system is no longer at equilibrium. The quotient Q < Kc, so the forward reaction proceeds until Q = Kc again. The new equilibrium will have more [NH₃] and less [H₂], but Kc remains 0.029.'
      }
    },
    {
      id: 'h-pressure',
      type: 'heading',
      data: { text: 'Effect of Pressure Changes', level: 2 }
    },
    {
      id: 'p-pressure-intro',
      type: 'paragraph',
      data: {
        text: 'Pressure changes affect equilibrium only if there is a change in the number of moles of gas (Δn ≠ 0). If Δn = 0, pressure changes have no effect. If Δn ≠ 0, increasing total pressure shifts the equilibrium towards the side with fewer moles of gas (to reduce total moles and lower pressure). Decreasing pressure shifts equilibrium towards the side with more moles of gas.'
      }
    },
    {
      id: 'ex-pressure-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Pressure Effect on N₂ + 3H₂ ⇌ 2NH₃',
        text: 'Left side: 1 + 3 = 4 moles of gas. Right side: 2 moles of gas. Δn = 2 − 4 = −2. Increasing pressure shifts equilibrium to the right (towards 2 moles). This increases [NH₃] and decreases [N₂] and [H₂]. Kp (and Kc) remain constant. This is the basis of the Haber process: high pressure favours ammonia production.'
      }
    },
    {
      id: 'ex-pressure-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: No Pressure Effect on 2NO₂ ⇌ N₂O₄',
        text: 'Left side: 2 moles. Right side: 1 mole. Δn = 1 − 2 = −1 ≠ 0. Pressure DOES affect this equilibrium. Increasing pressure shifts right, decreasing pressure shifts left. However, for N₂ ⇌ N₂ (hypothetically, or PCl₅ ⇌ PCl₃ + Cl₂ if Δn = 0), pressure has no effect.'
      }
    },
    {
      id: 'p-pressure-summary',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pressure Rule',
        text: 'Only affects equilibrium if Δn ≠ 0. Increase P → shifts towards fewer moles. Decrease P → shifts towards more moles. Does NOT change the value of K. Changing volume at constant T has the same effect as changing total pressure.'
      }
    },
    {
      id: 'h-inert',
      type: 'heading',
      data: { text: 'Inert Gas at Constant Volume', level: 3 }
    },
    {
      id: 'p-inert',
      type: 'paragraph',
      data: {
        text: 'Adding an inert gas (e.g. He or Ar) at constant volume does NOT change the partial pressures of the reactants and products, so it has NO effect on equilibrium. Adding an inert gas at constant total pressure decreases the partial pressures of all reactants and products, which is equivalent to decreasing pressure—the equilibrium shifts towards more moles.'
      }
    },
    {
      id: 'h-concentration-vs-pressure',
      type: 'heading',
      data: { text: 'Concentration Changes vs Pressure Changes', level: 2 }
    },
    {
      id: 'tbl-effects',
      type: 'comparisonTable',
      data: {
        headers: ['Change', 'Effect on Equilibrium', 'Effect on K'],
        rows: [
          ['Increase reactant concentration', 'Shifts right (forward)', 'No change'],
          ['Increase product concentration', 'Shifts left (backward)', 'No change'],
          ['Increase total pressure (Δn ≠ 0)', 'Shifts towards fewer moles', 'No change'],
          ['Decrease total pressure (Δn ≠ 0)', 'Shifts towards more moles', 'No change'],
          ['Add inert gas at constant V', 'No effect', 'No change'],
          ['Add inert gas at constant P', 'Shifts towards more moles', 'No change'],
          ['Catalyst added', 'Reaches equilibrium faster, no position change', 'No change']
        ],
        caption: 'Effects of changes on equilibrium position and K'
      }
    },
    {
      id: 'p-catalyst',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Catalyst Effect',
        text: 'A catalyst lowers the activation energy and speeds up both forward and backward reactions equally. It allows the system to reach equilibrium faster, but does NOT shift the equilibrium position or change K. The final equilibrium concentrations are unchanged.'
      }
    },
    {
      id: 'h-qc',
      type: 'heading',
      data: { text: 'The Reaction Quotient (Qc) — Quantifying Equilibrium Shifts', level: 2 }
    },
    {
      id: 'p-qc-def',
      type: 'paragraph',
      data: {
        text: 'Qc (the reaction quotient) is calculated exactly like Kc — products over reactants, each raised to their stoichiometric powers — but Qc can be evaluated at ANY point in the reaction, not just at equilibrium. At equilibrium, Qc = Kc. When a system is disturbed (e.g. a concentration is changed), Qc ≠ Kc, and the system shifts to restore Qc = Kc.'
      }
    },
    {
      id: 'co-cause-effect',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Critical: Cause and Effect — Get It the Right Way Round',
        text: 'Most students say: \u201cChanging concentration/pressure changes Kc.\u201d This is WRONG.\n\nThe correct framing:\nKc is constant at a given temperature. When you change concentration or pressure, Qc changes. The position of equilibrium then SHIFTS to restore Qc = Kc. Kc is the cause (the fixed target); the shift is the effect.\n\nAsk: \u201cIn order to keep Kc constant, which way must the equilibrium shift?\u201d'
      }
    },
    {
      id: 'co-qc-rule',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Qc vs Kc Rule',
        text: 'Qc < Kc → numerator (products) too small → equilibrium shifts RIGHT (towards products)\nQc > Kc → numerator (products) too large → equilibrium shifts LEFT (towards reactants)\nQc = Kc → system is at equilibrium — no net shift'
      }
    },
    {
      id: 'h-qc-conc-example',
      type: 'heading',
      data: { text: 'Worked Example: Increasing [H₂] in H₂ + I₂ ⇌ 2HI', level: 3 }
    },
    {
      id: 'co-qc-hi-example',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Equilibrium: [H₂] = 2, [I₂] = 2, [HI] = 4; then [H₂] increased to 10',
        text: 'Step 1 — Calculate Kc at equilibrium:\nKc = [HI]² / ([H₂][I₂]) = 4² / (2 × 2) = 16/4 = 4\n\nStep 2 — After [H₂] increases to 10, calculate Qc immediately:\nQc = 4² / (10 × 2) = 16/20 = 0.8\n\nStep 3 — Compare:\nQc = 0.8 < Kc = 4 → numerator too small → equilibrium shifts RIGHT\n\nStep 4 — Confirm by calculation: to re-establish Kc,\n[HI]² = 4 × 10 × 2 = 80, so [HI] must increase to 8.9\n\nThis confirms: adding H₂ shifts equilibrium to the right, producing more HI.'
      }
    },
    {
      id: 'h-competing-effects',
      type: 'heading',
      data: { text: 'When Qualitative Predictions Fail: Competing Effects', level: 2 }
    },
    {
      id: 'p-competing',
      type: 'paragraph',
      data: {
        text: 'The qualitative Le Chatelier approach sometimes gives the wrong answer when TWO competing effects act simultaneously. In such cases, calculating Qc and comparing it to Kc gives the definitive answer. A classic example is adding a gas to a constant-pressure system: the extra moles both push equilibrium one way AND expand the volume (which lowers all partial pressures), pushing it the other way.'
      }
    },
    {
      id: 'co-haber-n2-add',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Adding 0.14 mol N₂ to Haber Equilibrium at Constant Pressure',
        text: 'Equilibrium in 1.0 dm³: [N₂]=0.510, [H₂]=0.197, [NH₃]=0.204 mol dm⁻³\nKc = (0.204)² / (0.510 × (0.197)³) = 10.7\n\nQualitative prediction: adding N₂ → shift RIGHT towards NH₃. BUT at constant pressure, adding gas also expands the volume, lowering all concentrations — which shifts LEFT (fewer moles). These two effects COMPETE.\n\nQuantitative calculation:\n• Total moles before = 0.510 + 0.197 + 0.204 = 0.911 mol\n• After adding 0.14 mol N₂: total = 1.051 mol\n• New volume (V ∝ n at constant P and T): V₂ = 1.051/0.911 = 1.154 dm³\n• New [N₂] = (0.510 + 0.140)/1.154 = 0.650/1.154\n\nCalculate Qc with new concentrations (V = 1.154):\nQc = (0.204/1.154)² / ((0.650/1.154) × (0.197/1.154)³) = 11.15\n\nQc = 11.15 > Kc = 10.7 → denominator too small → shifts LEFT\n\nThe volume expansion effect WINS. Equilibrium shifts LEFT — opposite to the qualitative prediction. Only the quantitative Qc calculation reveals this.'
      }
    },
    {
      id: 'h-qp-pressure',
      type: 'heading',
      data: { text: 'Quantitative Pressure Changes Using Qp', level: 2 }
    },
    {
      id: 'p-qp-def',
      type: 'paragraph',
      data: {
        text: 'Qp is the reaction quotient calculated using partial pressures (same structure as Kp). When total pressure is changed, all partial pressures change proportionally, so Qp is immediately pushed away from Kp. The equilibrium shifts to restore Qp = Kp.'
      }
    },
    {
      id: 'co-haber-pressure-qp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Haber Process: Doubling Total Pressure (N₂ + 3H₂ ⇌ 2NH₃)',
        text: 'Let equilibrium partial pressures be: p(N₂) = a, p(H₂) = b, p(NH₃) = c atm.\nKp = c² / (a × b³)\n\nDouble total pressure: all partial pressures double → p(N₂)=2a, p(H₂)=2b, p(NH₃)=2c\n\nQp = (2c)² / (2a × (2b)³) = 4c² / (2a × 8b³) = 4c² / 16ab³ = c²/4ab³ = Kp/4\n\nQp = ¼Kp < Kp → numerator too small → shifts RIGHT (towards NH₃)\n\nThis confirms: increasing pressure shifts Haber equilibrium right, increasing NH₃ yield. The numerator (2c)² only quadruples while the denominator (2a × (2b)³) increases 16-fold, so Qp < Kp.'
      }
    },
    {
      id: 'co-hi-i2-solid-pressure',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'HI ⇌ I₂(s) + H₂: Solid omitted from Kp; Increasing Pressure Shifts Right',
        text: 'I₂ is a solid — omitted from Kp. Kp = p(H₂) / p(HI)²\n\nUsing random numbers at P = 6 atm: mole fractions 2/6 (H₂) and 4/6 (HI):\np(H₂) = 2 atm, p(HI) = 4 atm → Kp = 2/16 = 0.125\n\nDouble pressure to 12 atm: p(H₂) = 4, p(HI) = 8:\nQp = 4/64 = 0.0625 < Kp = 0.125\n\nQp < Kp → shifts RIGHT (more H₂oproduced). This is exam technique: assign simple numbers, double the pressure, compute Qp, then compare to Kp to determine direction.'
      }
    },
    {
      id: 'checklist-chat',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can explain Le Chatelier\'s principle', checked: false },
          { text: 'Can predict effects of concentration changes on equilibrium', checked: false },
          { text: 'Can determine when pressure affects equilibrium (Δn ≠ 0)', checked: false },
          { text: 'Know that catalysts do not shift equilibrium position', checked: false },
          { text: 'Understand Qc/Qp: Qc < Kc → shifts right; Qc > Kc → shifts left', checked: false },
          { text: 'Can identify when competing effects require quantitative Qc calculation', checked: false }
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
        text: 'Understand: Le Chatelier\'s principle predicts shifts but NOT changes to K. Only temperature changes K. Pressure and concentration change the position but NOT the equilibrium constant.\n\nApply: For N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ), predict the effect of increasing pressure, temperature, and adding N₂.\n\nAnalyze: Why does adding an inert gas at constant volume have no effect on equilibrium?\n\nEvaluate: High temperature increases rate but shifts this exothermic equilibrium backwards. How does industry compromise?'
      },
      terms: []
    },
    {
      id: 'summary-chat',
      type: 'summary',
      data: {
        text: 'Le Chatelier\'s principle: system shifts to counteract a disturbance. Concentration changes always shift equilibrium (left or right). Pressure changes shift equilibrium only if Δn ≠ 0 (towards fewer moles at high P). Catalysts speed up equilibrium but do not shift it. K remains constant except when T changes.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-principle',
        prompt: 'State Le Chatelier\'s principle and explain what it predicts.'
      },
      {
        id: 'cue-2',
        blockId: 'p-conc-increase',
        prompt: 'What happens to the equilibrium if you increase the concentration of a reactant?'
      },
      {
        id: 'cue-3',
        blockId: 'p-pressure-intro',
        prompt: 'When does a pressure change affect equilibrium position? What is the condition?'
      },
      {
        id: 'cue-4',
        blockId: 'ex-pressure-1',
        prompt: 'For N₂ + 3H₂ ⇌ 2NH₃, explain why increasing pressure favours the forward reaction.'
      },
      {
        id: 'cue-5',
        blockId: 'p-inert',
        prompt: 'Explain the difference between adding an inert gas at constant volume vs constant pressure.'
      }
    ],
    summaryText: 'Le Chatelier\'s principle predicts equilibrium shift. Concentration changes always shift equilibrium. Pressure affects equilibrium only if Δn ≠ 0; high P favours fewer moles. Catalysts do not shift equilibrium. K is constant (unless T changes).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Le Chatelier\'s Principle and Equilibrium Shifts',
      detail: 'Predicts equilibrium response to concentration, pressure, and temperature changes.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['equilibrium', 'Le Chatelier', 'concentration', 'pressure']
    }
  ]
};
