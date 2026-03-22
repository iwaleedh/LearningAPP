export const note_economics_3_15_7 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the key characteristics of monopoly and analyse its efficiency implications compared to a competitive market.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Characteristics of Monopoly', level: 2 } },
    { id: 'list-char', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Single seller</strong> — one firm dominates the entire market (100% market share in pure monopoly; CMA considers 25%+ as significant market power in UK).' }, { text: '<strong>Unique product</strong> — no close substitutes; consumer has no alternative.' }, { text: '<strong>High barriers to entry</strong> — prevent new rivals: economies of scale, legal protection (patents, licences), brand loyalty, sunk costs, control of key resources.' }, { text: '<strong>Price maker</strong> — faces downward-sloping demand curve; sets P by choosing Q (or sets Q by choosing P).' }, { text: '<strong>Supernormal profit in long run</strong> — barriers block competitive erosion of profit.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Efficiency Analysis', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Monopoly vs Perfect Competition', headers: ['Criterion', 'Perfect Competition', 'Monopoly'], rows: [['Output', 'Higher (P = MC)', 'Lower (MR = MC)'], ['Price', 'Lower (P = MC)', 'Higher (P > MC)'], ['Productive efficiency', 'Yes (P = min ATC)', 'No (P > min ATC)'], ['Allocative efficiency', 'Yes (P = MC)', 'No (P > MC)'], ['Dynamic efficiency', 'Low (no profit)', 'Possible (supernormal profit → R&D)'], ['Consumer surplus', 'Higher', 'Lower (deadweight loss)']] } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Deadweight Loss', text: 'Monopoly produces where <strong>MR = MC</strong> → output below allocatively efficient level → <strong>deadweight welfare loss</strong> (the triangle between the competitive and monopoly output levels, bounded by the demand and MC curves).' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Evaluation point: monopoly may be <strong>dynamically efficient</strong> if supernormal profit is reinvested in R&D, reducing costs over time (Schumpeter\'s "creative destruction"). Also, natural monopolies may achieve low costs via economies of scale.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Monopoly: single seller, barriers to entry, price maker, supernormal profit in LR. Allocatively and productively inefficient (P > MC, P > min ATC) but may be dynamically efficient via R&D investment.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Monopoly requires *barriers to entry*: legal (patents, licenses), structural (economies of scale, brand loyalty), or strategic (predatory pricing, vertical integration). When analyzing monopolies, always identify the *specific* barrier\u2014don't assume 'one firm = monopoly' without explanation."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Monopoly: one seller, barriers to entry, price maker. P > MC → allocative inefficiency. P > min ATC → productive inefficiency. Deadweight welfare loss. May be dynamically efficient.',
    cues: [
      { id: 'cue-1', blockId: 'list-char', prompt: 'What are the key characteristics of a pure monopoly?', answer: 'Single seller (100% market share), unique product with no close substitutes, high barriers to entry (economies of scale, patents, sunk costs), price maker facing downward-sloping demand, and supernormal profit maintained in the long run.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Explain why a monopoly is allocatively inefficient.', answer: 'A monopoly sets MR = MC to maximise profit, but this results in P > MC. Allocative efficiency requires P = MC (each unit is worth exactly its cost to produce). The excess of P over MC creates a deadweight welfare loss — output is below the socially optimal level.' },
    ]
  },
  evidence: [], mentions: []
};
