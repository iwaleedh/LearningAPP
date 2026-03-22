export const note_economics_3_14_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Calculate and interpret short-run cost concepts: TFC, TVC, TC, AFC, AVC, ATC and MC, and explain their U-shaped curves.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Short-Run Cost Relationships', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Key Cost Definitions', text: '<strong>TFC</strong> (Total Fixed Cost) — costs that do not vary with output (rent, insurance).<br/><strong>TVC</strong> (Total Variable Cost) — costs that rise with output (labour, raw materials).<br/><strong>TC</strong> = TFC + TVC.<br/><strong>AFC</strong> = TFC / Q (always falling).<br/><strong>AVC</strong> = TVC / Q (U-shaped).<br/><strong>ATC</strong> = TC / Q = AFC + AVC (U-shaped).<br/><strong>MC</strong> = ΔTC/ΔQ (U-shaped, steepest fall/rise).' } },
    { id: 'h-2', type: 'heading', data: { text: 'U-Shaped Cost Curves Explained', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>MC falls then rises</strong> because MP first rises (specialisation) then falls (diminishing returns) — MC and MP mirror each other.' }, { text: '<strong>AVC U-shape</strong>: mirrors AP of labour mirror; falls when MC < AVC, rises when MC > AVC.' }, { text: '<strong>ATC U-shape</strong>: ATC = AFC + AVC; AFC falls continuously pulling ATC down; then rising AVC dominates → ATC rises.' }, { text: '<strong>MC intersects AVC and ATC at their minima</strong> — a mathematical property (marginal pulls average when below it).' }] } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Quick Example', text: 'Q=100, TFC=£200, TVC=£300.<br/>TC = £500, ATC = £5, AVC = £3, AFC = £2.<br/>If Q rises to 101 and TC rises to £507 → MC = £7 (so ATC will rise from Q=101 onward).' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Examiners test the MC-ATC relationship: <strong>"MC cuts ATC and AVC at their lowest points."</strong> Also note AFC is always downward-sloping and never U-shaped.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Short-run costs: TFC constant; TVC/TC rise with Q. AFC falls; AVC and ATC are U-shaped due to diminishing returns. MC is the steepest U, cutting AVC then ATC at their minima.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "In short-run cost calculations, always start with fixed costs (unchanged) then add variable costs proportional to output. The AC curve = (FC + VC)/Q; UC-shaped due to diminishing returns and fixed cost spreading. Graph this relationship to cement understanding."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'TC = TFC + TVC. ATC = AFC + AVC. All average cost curves are U-shaped (except AFC). MC cuts AVC and ATC at their minimum points.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'Define Marginal Cost (MC) and state its relationship to ATC.', answer: 'MC = ΔTC/ΔQ, the cost of producing one more unit. MC cuts ATC at its minimum point: when MC < ATC, ATC falls; when MC > ATC, ATC rises.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why are the ATC and AVC curves U-shaped?', answer: 'Because of diminishing marginal returns in the short run. As extra workers are added to fixed capital, MP rises then falls, so MC first falls then rises — this pulls AVC and ATC down then back up.' },
    ]
  },
  evidence: [], mentions: []
};
