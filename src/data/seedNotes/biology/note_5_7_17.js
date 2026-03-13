export const note_biology_5_7_17 = {
    "noteId": "note:biology:5:7:17",
    "subject": "biology",
    "qualificationCode": "IAL",
    "unitCode": "WBI15",
    "unitId": 5,
    "topicId": 7,
    "subtopicIndex": 17,
    "unitTitle": "Respiration, Internal Environment, Coordination and Gene Technology",
    "topicTitle": "Topic 7: Run for Your Life",
    "subtopicTitle": "Loop of Henle and ADH",
    "blocks": [
        {
            "type": "objective",
            "id": "obj-1",
            "data": {
                "text": "Understand the role of the Loop of Henle and how ADH regulates water reabsorption."
            }
        },
        {
            "type": "heading",
            "id": "h-henle",
            "data": {
                "level": 2,
                "text": "The Role of the Loop of Henle"
            }
        },
        {
            "type": "paragraph",
            "id": "p-henle",
            "data": {
                "text": "The loop of Henle acts as a **countercurrent multiplier system** to produce urine that is more concentrated than the blood, conserving water."
            }
        },
        {
            "type": "list",
            "id": "l-henle-steps",
            "data": {
                "style": "numbered",
                "items": [
                    "**Ascending limb:** Impermeable to water. Sodium and chloride ions are pumped out into the medulla, lowering its water potential.",
                    "**Descending limb:** Permeable to water. Water moves out by osmosis into the medulla due to the steep water potential gradient.",
                    "The water and ions that enter the medulla are carried away by the vasa recta (capillary network)."
                ]
            }
        },
        {
            "type": "heading",
            "id": "h-adh",
            "data": {
                "level": 2,
                "text": "Osmoregulation and ADH"
            }
        },
        {
            "type": "paragraph",
            "id": "p-osmo",
            "data": {
                "text": "**Osmoreceptors** in the **hypothalamus** monitor blood water potential."
            }
        },
        {
            "type": "list",
            "id": "l-adh-path",
            "data": {
                "style": "bullet",
                "items": [
                    "If blood water potential decreases, nerve impulses travel to the **posterior pituitary gland**.",
                    "The posterior pituitary gland releases **Antidiuretic Hormone (ADH)** into the blood.",
                    "ADH limits water loss in urine by increasing the permeability of the **distal convoluted tubule (DCT)** and **collecting duct** to water."
                ]
            }
        },
        {
            "type": "heading",
            "id": "h-aquaporins",
            "data": {
                "level": 3,
                "text": "Mechanism of ADH Action"
            }
        },
        {
            "type": "list",
            "id": "l-aquaporins",
            "data": {
                "style": "numbered",
                "items": [
                    "ADH binds to receptor proteins on the target cells of the collecting duct.",
                    "Vesicles containing water channel proteins (**aquaporins**) move to the cell surface.",
                    "The vesicles fuse with the luminal membrane, inserting the aquaporins.",
                    "This increases the membrane's permeability to water. More water is reabsorbed into the blood by osmosis."
                ]
            }
        },
        {
            "type": "checklist",
            "id": "chk-1",
            "data": {
                "items": [
                    {
                        "text": "I can explain how ion transport in the ascending limb affects the descending limb."
                    },
                    {
                        "text": "I know the roles of the hypothalamus and posterior pituitary gland."
                    },
                    {
                        "text": "I can explain how ADH causes aquaporins to be inserted into the membrane."
                    }
                ]
            }
        },
        {
            "type": "summary",
            "id": "sum-1",
            "data": {
                "text": "The loop of Henle acts as a countercurrent multiplier; active transport of ions out of the impermeable ascending limb creates a low water potential in the medulla, causing water to leave the permeable descending limb by osmosis. Blood water potential is monitored by osmoreceptors in the hypothalamus, which triggers ADH release from the posterior pituitary. ADH increases the permeability of the collecting duct by causing aquaporin-containing vesicles to fuse with the cell membrane, promoting water reabsorption."
            }
        }
    ],
    "recall": {
        "enabled": true,
        "cues": [
            {
                "id": "q1",
                "blockId": "l-henle-steps",
                "prompt": "Why doesn't water leave the ascending limb of the loop of Henle?"
            },
            {
                "id": "q2",
                "blockId": "l-adh-path",
                "prompt": "Which gland releases ADH, and where is it produced?"
            },
            {
                "id": "q3",
                "blockId": "l-aquaporins",
                "prompt": "How does ADH increase the permeability of the collecting duct to water?"
            }
        ],
        "summaryText": "The Loop of Henle uses a countercurrent multiplier to create a medullary water potential gradient. ADH binds to collecting duct cells to insert aquaporins, increasing water reabsorption.",
        "ready": true
    },
    "evidence": []
};
