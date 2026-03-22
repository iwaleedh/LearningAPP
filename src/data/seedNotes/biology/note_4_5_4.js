export const note_biology_4_5_4 = {
  blocks: [
    {
      id: "obj-1",
      type: "objective",
      data: { text: "Understand photosynthetic pigments, chromatography, and absorption/action spectra." }
    },
    {
      id: "h-pigments",
      type: "heading",
      data: { text: "Photosynthetic Pigments", level: 2 }
    },
    {
      id: "p-pigments",
      type: "paragraph",
      data: { text: "Chloroplasts contain a mix of pigments (chlorophyll a, chlorophyll b, carotene, and xanthophyll) so that the plant can absorb a wider range of wavelengths of light, maximizing light capture." }
    },
    {
      id: "h-spectra",
      type: "heading",
      data: { text: "Absorption and Action Spectra", level: 3 }
    },
    {
      id: "list-spectra",
      type: "list",
      data: {
        style: "bullet",
        items: [
          "Absorption Spectrum: A graph showing the percentage of light absorbed by photosynthetic pigments at different wavelengths (peaks in blue and red/orange, troughs in green).",
          "Action Spectrum: A graph showing the rate of photosynthesis at different wavelengths.",
          "Correlation: The two graphs superimpose well; the wavelengths that are absorbed most strongly are the ones that produce the highest rates of photosynthesis."
        ]
      }
    },
    {
      id: "h-chromatography",
      type: "heading",
      data: { text: "Chromatography Principles", level: 3 }
    },
    {
      id: "p-chroma",
      type: "paragraph",
      data: { text: "Pigments can be separated using paper or thin-layer chromatography (TLC). Pigments separate based on their solubility in the solvent and their affinity for the stationary phase. More soluble pigments travel further." }
    },
    {
      id: "callout-rf",
      type: "callout",
      data: { style: "key", title: "Rf Value", text: "Rf = distance moved by pigment / distance moved by solvent front" }
    },
{ 'id': 'callout-examiner-3fecc52e', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Common Mistake', 'text': 'Avoid confusing absorption spectra and action spectra. An absorption spectrum shows the amount of light absorbed by pigments at different wavelengths, whereas an action spectrum shows the overall rate of photosynthesis achieved at those wavelengths.' } },
    {
      id: 'callout-tip-u4-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Absorption vs Action Spectra",
        text: "Be prepared to overlay these graphs. If the peaks of the absorption spectrum perfectly align with the action spectrum, it provides evidence that those specific pigments are responsible for photosynthesis."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: "cue-1", blockId: "p-pigments", prompt: "Why do plants contain multiple photosynthetic pigments?" },
      { id: "cue-2", blockId: "list-spectra", prompt: "What is the difference between an absorption spectrum and an action spectrum?" },
      { id: "cue-3", blockId: "callout-rf", prompt: "How do you calculate the Rf value in chromatography?" }
    ],
    summaryText: "Multiple pigments allow absorption over a wider spectrum. An absorption spectrum shows light absorbed, while an action spectrum shows photosynthesis rate. Chromatography separates pigments based on solubility (Rf = pigment distance / solvent distance).",
    ready: true
  },
  evidence: []
};