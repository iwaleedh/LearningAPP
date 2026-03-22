export const note_economics_2_10_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain what is meant by equilibrium real output in the Keynesian model, and interpret the 45-degree Keynesian cross diagram.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Equilibrium Real Output', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Equilibrium real output</strong> is the level of real GDP at which the economy\'s planned spending (aggregate demand) exactly equals the economy\'s actual output (aggregate supply). At this point, there is no tendency for national income to rise or fall. The two equivalent ways to express this equilibrium are:<br/>1. <strong>Planned AD = Planned AS</strong><br/>2. <strong>Planned Injections (J) = Planned Withdrawals (W)</strong>' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Keynesian 45-Degree Cross Diagram', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>Keynesian cross</strong> (or income-expenditure) diagram plots <strong>planned total expenditure (E)</strong> on the vertical axis and <strong>real output / national income (Y)</strong> on the horizontal axis. A 45-degree line from the origin represents all points where <strong>output equals expenditure (Y = E)</strong>. The <strong>AD line</strong> (planned expenditure) is flatter than 45 degrees because as income rises, not all additional income is spent (households save, pay taxes, and import).' }] } },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Keynesian 45-degree cross diagram showing equilibrium where AD = Y',
        svg: '<svg viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13"><rect width="480" height="400" fill="#0f172a"/><text x="240" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Keynesian 45° Cross Diagram</text><!-- Axes --><line x1="60" y1="360" x2="450" y2="360" stroke="#334155" stroke-width="2"/><line x1="60" y1="360" x2="60" y2="30" stroke="#334155" stroke-width="2"/><text x="255" y="392" text-anchor="middle" fill="#334155" font-size="13">Real Output / Income (Y)</text><text x="18" y="200" text-anchor="middle" fill="#334155" font-size="13" transform="rotate(-90,18,200)">Planned Expenditure (E)</text><!-- 45 degree line --><line x1="60" y1="360" x2="430" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/><text x="435" y="28" fill="#94a3b8" font-size="11">45°</text><text x="435" y="42" fill="#94a3b8" font-size="11">(Y=E)</text><!-- AD line (flatter, intercept above zero) --><line x1="60" y1="260" x2="430" y2="100" stroke="#dc2626" stroke-width="2.5"/><text x="432" y="98" fill="#dc2626" font-size="12">AD</text><!-- Equilibrium --><circle cx="270" cy="195" r="6" fill="#1e293b"/><text x="255" y="187" fill="#1e293b" font-size="11">E*</text><!-- Dashed lines to axes --><line x1="270" y1="195" x2="270" y2="360" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,3"/><line x1="60" y1="195" x2="270" y2="195" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,3"/><text x="262" y="378" fill="#1e293b" font-size="11">Y*</text><text x="40" y="199" fill="#1e293b" font-size="11">E*</text><!-- Labels --><text x="135" y="310" fill="#dc2626" font-size="10">Deficient demand</text><text x="320" y="155" fill="#16a34a" font-size="10">Excess demand</text></svg>'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'How Equilibrium is Reached', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'If the economy is <strong>below</strong> equilibrium output (Y < Y*): planned expenditure exceeds actual output (AD > AS). Firms see their inventories being run down and respond by increasing production — national income rises toward Y*.<br/><br/>If the economy is <strong>above</strong> equilibrium output (Y > Y*): actual output exceeds planned spending — unsold goods accumulate in inventories. Firms reduce production — national income falls toward Y*.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Keynesian Equilibrium Need Not Be Full Employment',
        text: 'Unlike the classical model, the Keynesian equilibrium Y* <strong>may not be at the full-employment level of output (Y<sub>f</sub>)</strong>. If AD is too low, the economy can settle at a <strong>deflationary gap</strong> — a persistent recessionary equilibrium below Yf. This justifies government intervention to boost AD.'
      }
    },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: '\\text{Equilibrium: } AD = Y \\quad \\Leftrightarrow \\quad I + G + X = S + T + M',
        caption: 'Two equivalent conditions for macroeconomic equilibrium'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When drawing the Keynesian cross, ensure the 45-degree line bisects the angle and the AD line has a <strong>positive intercept</strong> (autonomous spending exists even at zero income) and a <strong>slope less than 1</strong> (MPC < 1, reflecting withdrawals).'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Equilibrium real output occurs where AD = AS, but this does not guarantee full employment or zero unemployment. Examiners test whether you recognise that equilibrium can exist at any level of output\u2014below full employment (demand-deficient unemployment) or above it (demand-pull inflation). Always compare equilibrium to potential output."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Equilibrium real output (Y*) occurs where planned AD = planned AS (or J = W); the Keynesian cross shows this as the intersection of the AD line with the 45-degree line, and equilibrium need not be at full employment.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'State two equivalent conditions for macroeconomic equilibrium.', answer: 'Planned AD = Planned AS, or Planned Injections (J) = Planned Withdrawals (W).' },
      { id: 'cue-2', blockId: 'para-2', prompt: 'What does the 45-degree line represent in the Keynesian cross?', answer: 'All points where planned expenditure equals real output (E = Y).' },
      { id: 'cue-3', blockId: 'para-3', prompt: 'What happens if actual output exceeds planned spending?', answer: 'Unsold goods accumulate in inventories; firms cut production until output falls back to Y*.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'Why is the Keynesian equilibrium significant compared to the classical view?', answer: 'The Keynesian equilibrium (Y*) may lie below full-employment output (Yf), meaning the economy can be stuck in a deflationary gap — justifying government demand management.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_10_3;
