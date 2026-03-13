export const note_biology_5_7_16 = {
    "noteId": "note:biology:5:7:16",
    "subject": "biology",
    "qualificationCode": "IAL",
    "unitCode": "WBI15",
    "unitId": 5,
    "topicId": 7,
    "subtopicIndex": 16,
    "unitTitle": "Respiration, Internal Environment, Coordination and Gene Technology",
    "topicTitle": "Topic 7: Run for Your Life",
    "subtopicTitle": "Ultrafiltration and reabsorption",
    "blocks": [
        {
            "type": "objective",
            "id": "obj-1",
            "data": {
                "text": "Understand the processes of ultrafiltration in the Bowman's capsule and selective reabsorption in the proximal convoluted tubule."
            }
        },
        {
            "type": "heading",
            "id": "h-ultra",
            "data": {
                "level": 2,
                "text": "Ultrafiltration"
            }
        },
        {
            "type": "paragraph",
            "id": "p-ultra",
            "data": {
                "text": "Ultrafiltration occurs between the **glomerulus** (a capillary knot) and the **Bowman’s capsule**."
            }
        },
        {
            "type": "list",
            "id": "l-ultra-pressure",
            "data": {
                "style": "bullet",
                "items": [
                    "The **afferent arteriole** entering the glomerulus is wider than the **efferent arteriole** leaving it.",
                    "This creates **high hydrostatic pressure** within the glomerular capillaries.",
                    "High pressure forces small molecules out of the blood and into the Bowman's capsule to form the **glomerular filtrate**."
                ]
            }
        },
        {
            "type": "heading",
            "id": "h-filters",
            "data": {
                "level": 3,
                "text": "The Filtration Layers"
            }
        },
        {
            "type": "list",
            "id": "l-filters",
            "data": {
                "style": "numbered",
                "items": [
                    "**Capillary endothelium:** Possesses gaps (pores/fenestrations) allowing fluid passage.",
                    "**Basement membrane:** A mesh-like layer of collagen and glycoproteins acting as the main filter. It blocks large molecules.",
                    "**Capsule epithelium (Podocytes):** Cells with foot-like extensions (pedicels) that wrap around capillaries, maintaining gaps for the filtrate to pass into the capsule lumen."
                ]
            }
        },
        {
            "type": "comparisonTable",
            "id": "tbl-filtrate",
            "data": {
                "headers": [
                    "In the Filtrate",
                    "Remain in the Blood"
                ],
                "rows": [
                    [
                        "Water, amino acids, glucose, urea, and inorganic ions",
                        "Red blood cells, white blood cells, platelets, and large plasma proteins"
                    ]
                ],
                "caption": "Composition of the glomerular filtrate vs blood"
            }
        },
        {
            "type": "heading",
            "id": "h-selective",
            "data": {
                "level": 2,
                "text": "Selective Reabsorption"
            }
        },
        {
            "type": "paragraph",
            "id": "p-selective",
            "data": {
                "text": "Not all substances in the filtrate are excreted; many are reabsorbed into the blood. This mostly takes place in the **proximal convoluted tubule (PCT)**."
            }
        },
        {
            "type": "list",
            "id": "l-select",
            "data": {
                "style": "bullet",
                "items": [
                    "All glucose and amino acids are reabsorbed, along with most water and salts.",
                    "Reabsorption involves **active transport** and **co-transporter proteins**.",
                    "Water follows passively by **osmosis** down the water potential gradient created by the active transport of ions."
                ]
            }
        },
        {
            "type": "checklist",
            "id": "chk-1",
            "data": {
                "items": [
                    {
                        "text": "I can explain how high hydrostatic pressure is generated."
                    },
                    {
                        "text": "I can name the three filtration layers."
                    },
                    {
                        "text": "I can explain selective reabsorption in the PCT."
                    }
                ]
            }
        },
        {
            "type": "summary",
            "id": "sum-1",
            "data": {
                "text": "Ultrafiltration is driven by high hydrostatic pressure inside the glomerulus, pushing small molecules into the Bowman's capsule. In the PCT, useful substances like all glucose and amino acids are selectively reabsorbed by active transport."
            }
        }
    ],
    "recall": {
        "enabled": true,
        "cues": [
            {
                "id": "q1",
                "blockId": "l-ultra-pressure",
                "prompt": "How is high hydrostatic pressure created in the glomerulus?"
            },
            {
                "id": "q2",
                "blockId": "l-filters",
                "prompt": "What are the three filtration layers in the Bowman's capsule?"
            },
            {
                "id": "q3",
                "blockId": "p-selective",
                "prompt": "Where does most selective reabsorption occur?"
            }
        ],
        "summaryText": "Ultrafiltration uses high pressure to force small molecules through the filter. The PCT selectively reabsorbs all glucose/amino acids via active transport.",
        "ready": true
    },
    "evidence": []
};
