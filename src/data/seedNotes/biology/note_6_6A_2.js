export const note_biology_6_6A_2 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Analyze data, process measurements into rates, and construct appropriate graphs." }
    },
    {
      id: "h-data",
      type: "heading",
      data: { text: "Data Processing", level: 2 }
    },
    {
      id: "list-process",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Rates: If dependent variable is a time (t), convert it to a rate using 1/t. Include standard units (e.g. s⁻¹).",
          "Magnification: Remember the formula I = A × M (Image Size = Actual Size × Magnification). Always convert units to match (usually micrometers, μm).",
          "Standard Deviation (SD): Evaluates the spread of data around the mean. If SD error bars overlap on a graph, the difference between those two means is NOT statistically significant."
        ]
      }
    },
    {
      id: "h-graph",
      type: "heading",
      data: { text: "Graph Drawing Rules", level: 3 }
    },
    {
      id: "list-graph",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "Axes: Independent variable on the X-axis, Dependent variable on the Y-axis.",
          "Scale: Must use at least 50% of the provided grid in both directions. Avoid awkward scales (like 1 square = 3 units).",
          "Labels: Full axis labels, including units in brackets (e.g., Temperature / °C).",
          "Points: Plotted precisely as neat crosses (×).",
          "Line: Draw a point-to-point line with a ruler, OR a smooth line of best fit (LOBF) if the trend is distinctly continuous. Never extrapolate beyond the last data point."
        ]
      }
    },
{ 'id': 'callout-examiner-8c7f2fae', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Examiner Tip', 'text': '' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-process", prompt: "What does it mathematically mean if standard deviation error bars overlap on a bar chart?" },
      { id: "cue-2", blockId: "list-graph", prompt: "Which variable always goes on the X-axis?" },
      { id: "cue-3", blockId: "list-process", prompt: "How do you calculate a rate of reaction if the only raw data collected was time taken (t)?" }
    ],
    summaryText: "Convert time to 1/t to find rates. Remember I=AM for magnification. On graphs: Independent variable on X-axis, use 50% of graph space, label units, and do not extrapolate. Overlapping Standard Deviation (SD) bars indicate no significant difference.",
    ready: true
  },
  evidence: []
};