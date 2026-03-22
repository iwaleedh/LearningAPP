export const note_biology_4_6_1 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Know how to measure the growth of microorganisms using various techniques." }
    },
    {
      id: "h-growth",
      type: "heading",
      data: { text: "Measuring Growth", level: 2 }
    },
    {
      id: "p-growth",
      type: "paragraph",
      data: { text: "Bacterial growth means an increase in the number of cells in a population. Because bacteria are microscopic and multiply rapidly, special techniques are required to measure their numbers." }
    },
    {
      id: "h-cell-counts",
      type: "heading",
      data: { text: "Cell Counts", level: 3 }
    },
    {
      id: "list-counts",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Direct Cell Count: Using a haemocytometer (a specialized microscope slide with a grid). A known volume of culture is placed on the grid, cells are counted, and the total population is calculated. Issue: It counts both living (viable) and dead cells.",
          "Viable Cell Count: Counting only living cells. A culture is serially diluted, plated onto agar, and incubated. Each colony that grows represents one original living cell. Count the colonies and multiply by the dilution factor."
        ]
      }
    },
    {
      id: "h-turbidity",
      type: "heading",
      data: { text: "Turbidity (Optical Density)", level: 3 }
    },
    {
      id: "p-turbidity",
      type: "paragraph",
      data: { text: "As a bacterial broth culture grows, it becomes increasingly cloudy (turbid) because the cells scatter light." }
    },
    {
      id: "list-turbidity",
      type: "list",
      data: {
        style: "numbered",
        items: [
          "A colorimeter measures the absorbance or transmission of light passing through the broth.",
          "More bacteria = higher turbidity = higher absorbance (or lower transmission).",
          "A calibration curve is created beforehand relating absorbance to a known cell count.",
          "Limitation: Like direct counting, a colorimeter cannot distinguish between living and dead cells."
        ]
      }
    },
{ 'id': 'callout-examiner-4b5fc23c', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Viable vs Total Counts', 'text': 'A common mistake is confusing viable and total counts. **Viable counts** (like counting colonies from serial dilutions) only count living cells that can multiply. **Total counts** (like using a haemocytometer or measuring turbidity) include both living and dead cells.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Turbidity limitations",
        text: "Using a colorimeter to measure turbidity (cloudiness) gives a total cell count, which includes both living and dead cells. Only a serial dilution and plating will give a viable (living) cell count."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "list-counts", prompt: "What is the difference between a direct count and a viable count?" },
      { id: "cue-2", blockId: "h-turbidity", prompt: "How does a colorimeter measure bacterial growth?" }
    ],
    summaryText: "Measuring growth: Direct counting uses a haemocytometer (living + dead). Viable counting uses serial dilutions and agar plating (living only). Turbidity uses a colorimeter to measure light absorbance as cloudiness increases.",
    ready: true
  },
  evidence: []
};