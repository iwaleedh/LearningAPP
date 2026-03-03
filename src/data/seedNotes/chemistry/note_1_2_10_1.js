/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 1
 * Mechanism concepts
 */

export const note_chemistry_1_2_10_1 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Understand reaction mechanisms: curly arrow notation, homolytic and heterolytic fission, and the meaning of nucleophile, electrophile and free radical.' } },
        { id: 'h-mechanisms', type: 'heading', data: { text: 'Reaction Mechanisms', level: 2 }, terms: ['Mechanism', 'Curly arrow'] },
        { id: 'callout-arrow-key', type: 'callout', data: { style: 'key', title: '💡 Curly Arrow Notation', text: 'Curly arrows show the movement of ELECTRON PAIRS in mechanisms.\n\nFull curly arrow (→): movement of a PAIR of electrons\nHalf-headed (fish-hook) arrow (⇀): movement of a SINGLE electron\n\nArrows start from: a bond (being broken) or a lone pair\nArrows point to: where the electrons go (new bond or leaving)\n\nNEVER draw arrows from atoms or from nothing — always from electrons.' } },
        { id: 'h-fission', type: 'heading', data: { text: 'Bond Fission', level: 2 }, terms: ['Homolytic fission', 'Heterolytic fission'] },
        { id: 'table-fission', type: 'comparisonTable', data: { caption: 'Homolytic vs heterolytic bond fission', headers: ['Type', 'Electrons split', 'Products', 'Arrow type', 'Example'], rows: [['Homolytic', 'One electron to each atom', 'Two radicals (neutral)', 'Fish-hook (half arrows)', 'Cl₂ → 2Cl• (UV light)'], ['Heterolytic', 'Both electrons to one atom', 'Cation + anion', 'Full curly arrows', 'HBr → H⁺ + Br⁻']] } },
        { id: 'callout-fission-key', type: 'callout', data: { style: 'key', title: '💡 Homolytic vs Heterolytic', text: 'Homolytic fission: A–B → A• + B•\n  Each atom gets ONE electron from the bond\n  Produces FREE RADICALS (unpaired electrons)\n  Occurs in UV light (e.g. halogen radical chain reactions)\n\nHeterolytic fission: A–B → A⁺ + B⁻  (or A⁻ + B⁺)\n  One atom gets BOTH electrons from the bond\n  Produces IONS (cation + anion)\n  Occurs in polar solvents or with polar reagents\n  Used in nucleophilic substitution and electrophilic addition' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Curly arrows: full = electron pair; half-headed = single electron', checked: false }, { text: 'Arrows start from lone pair or bond; point to new bond location', checked: false }, { text: 'Homolytic: one e⁻ to each atom → radicals; fish-hook arrows', checked: false }, { text: 'Heterolytic: both e⁻ to one atom → ions; full curly arrows', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Curly arrows show electron pair movement; half-headed arrows show single electron movement. Homolytic fission splits a bond equally → radicals. Heterolytic fission gives both electrons to one atom → ions. Full curly arrows represent electron pairs; fish-hook arrows represent single electrons.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-arrow-key', prompt: 'What does a full curly arrow represent in a mechanism? What about a half-headed arrow? Where must arrows start from?' },
            { id: 'cue-2', blockId: 'table-fission', prompt: 'Distinguish between homolytic and heterolytic fission. What type of species does each produce?' },
        ],
        summaryText: 'Curly arrows, homolytic vs heterolytic fission, radicals vs ions.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Mechanisms', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Mechanisms', 'Organic chemistry'] }],
};
