export const note_biology_2_3_8 = {
  "blocks": [
    {
      "id": "obj-2",
      "type": "objective",
      "data": {
        "text": "Explain how gene expression is regulated by transcription factors."
      }
    },
    {
      "id": "h-gene-exp",
      "type": "heading",
      "data": {
        "text": "Regulation of Gene Expression",
        "level": 2
      }
    },
    {
      "id": "p-intro",
      "type": "paragraph",
      "data": {
        "text": "Not all genes are expressed in every cell. A cell differentiates because some genes are switched \"on\" (transcribed and translated into functional proteins), and others are switched \"off\". Altering the rate of transcription controls gene expression."
      }
    },
    {
      "id": "h-tf",
      "type": "heading",
      "data": {
        "text": "Transcription Factors",
        "level": 3
      }
    },
    {
      "id": "p-tf",
      "type": "paragraph",
      "data": {
        "text": "Transcription factors are proteins that bind to specific DNA sites (promoter regions) near their target target genes. They either:"
      }
    },
    {
      "id": "list-tf",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Activators: Stimulate or increase the rate of transcription by helping RNA polymerase bind to the DNA promoter region.",
          "Repressors: Inhibit or decrease the rate of transcription by preventing RNA polymerase from binding."
        ]
      }
    },
    {
      "id": "h-operon",
      "type": "heading",
      "data": {
        "text": "The Lac Operon (in Prokaryotes)",
        "level": 3
      }
    },
    {
      "id": "p-operon",
      "type": "paragraph",
      "data": {
        "text": "In E. coli, lactose induces the production of the enzyme lactase. If lactose is absent, a repressor protein binds to the operator region, blocking RNA polymerase from transcribing the lactase gene. When lactose is present, it binds to the repressor, changing its shape so it detaches from the operator. RNA polymerase can then freely transcribe the lactase gene."
      }
    }
  ,
    {
        "id": "svg-diag-2-3-8-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M50,80 L300,80 L300,90 L50,90 Z' fill='#e2e8f0'/><rect x='100' y='80' width='40' height='10' fill='#f6ad55'/><text x='100' y='110' font-size='10' fill='#dd6b20'>Promoter</text><rect x='150' y='80' width='100' height='10' fill='#9ae6b4'/><text x='170' y='110' font-size='10' fill='#38a169'>Target Gene</text><circle cx='120' cy='60' r='15' fill='#fc8181'/><text x='80' y='40' font-size='10' fill='#c53030'>Transcription Factor</text><rect x='160' y='40' width='40' height='40' rx='10' fill='#b794f4' opacity='0.7'/><text x='165' y='65' font-size='8'>RNA Pol.</text><path d='M135,60 L155,60' stroke='#333' marker-end='url(#arrow)'/></svg>",
            "caption": "Transcription Factor Binding"
        }
    },
    {
        "id": "svg-diag-2-3-8-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='80' width='250' height='15' fill='#e2e8f0'/><rect x='60' y='80' width='30' height='15' fill='#f6ad55'/><rect x='90' y='80' width='30' height='15' fill='#fc8181'/><text x='95' y='110' font-size='10' fill='#c53030'>Operator</text><rect x='120' y='80' width='150' height='15' fill='#9ae6b4'/><rect x='90' y='65' width='30' height='15' fill='#718096'/><text x='85' y='55' font-size='10'>Repressor Protein</text><rect x='30' y='50' width='50' height='30' fill='#b794f4' opacity='0.5'/><circle cx='95' cy='65' r='5' fill='#63b3ed'/><text x='105' y='45' font-size='8' fill='#3182ce'>Inducer (binds repressor)</text><text x='150' y='110' font-size='10' fill='#38a169'>Structural Genes (e.g. lacZ)</text><path d='M50,45 Q70,20 130,40' fill='none' stroke='#333' marker-end='url(#arrow)' stroke-dasharray='4'/></svg>",
            "caption": "Operon Model (Prokaryotic Regulation)"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-tf",
        "prompt": "How do activator transcription factors work?"
      },
      {
        "id": "cue-2",
        "blockId": "p-operon",
        "prompt": "What happens to the lac repressor protein when lactose is present?"
      }
    ],
    "summaryText": "Gene expression is controlled at transcription by transcription factors. Activators promote RNA polymerase binding; repressors block it. The lac operon uses a repressor that is inactivated by lactose.",
    "ready": true
  },
  "evidence": []
};
