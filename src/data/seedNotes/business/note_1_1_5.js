export const note_business_1_1_5 = {
  pdfPath: '/notes/business/wbs11-1.pdf',
  blocks: [
    {
        "id": "obj-1",
        "type": "objective",
        "data": {
            "text": "Differentiate between risk and uncertainty in the context of business decision-making."
        }
    },
    {
        "id": "h-1",
        "type": "heading",
        "data": {
            "text": "Defining Risk",
            "level": 2
        }
    },
    {
        "id": "p-1",
        "type": "paragraph",
        "data": {
            "text": "Risk refers to a situation where the possible outcomes of a decision are known, and mathematical probabilities can be assigned to those outcomes. Risks can often be quantified, planned for, or insured against."
        }
    },
    {
        "id": "h-2",
        "type": "heading",
        "data": {
            "text": "Defining Uncertainty",
            "level": 2
        }
    },
    {
        "id": "p-2",
        "type": "paragraph",
        "data": {
            "text": "Uncertainty refers to situations where events are unpredictable. With uncertainty, outcomes are unknown, and probabilities cannot be assigned mathematically. It is difficult or impossible to insure against uncertainty."
        }
    },
    {
        "id": "tbl-1",
        "type": "comparisonTable",
        "data": {
            "caption": "Difference between Risk and Uncertainty",
            "headers": [
                "Feature",
                "Risk",
                "Uncertainty"
            ],
            "rows": [
                [
                    "Predictability",
                    "Outcomes are known or can be estimated",
                    "Outcomes are completely unknown"
                ],
                [
                    "Probability",
                    "Can be calculated mathematically",
                    "Cannot be calculated"
                ],
                [
                    "Insurability",
                    "Often insurable (e.g., fire, theft)",
                    "Generally uninsurable (e.g., changes in consumer taste)"
                ],
                [
                    "Management",
                    "Managed through planned mitigation",
                    "Requires flexibility and contingency planning"
                ]
            ]
        }
    },
    {
        "id": "callout-1",
        "type": "callout",
        "data": {
            "style": "tip",
            "title": "Mitigating Risk",
            "text": "Businesses can mitigate risk through market research, diversification, and purchasing insurance policies."
        }
    },
    {
        "id": "sum-1",
        "type": "summary",
        "data": {
            "text": "While risk involves quantifiable and predictable potential negative occurrences that a business can plan or insure for, uncertainty involves unpredictable, unquantifiable events that require high strategic adaptability."
        }
    },
    {
        "id": "enr-h-risk-types",
        "type": "heading",
        "data": {
            "text": "Internal vs External Risk",
            "level": 2
        }
    },
    {
        "id": "enr-list-risk-types",
        "type": "list",
        "data": {
            "style": "bullet",
            "items": [
                {
                    "text": "Internal risks — within the business's control, e.g. equipment failure, employee fraud, poor product quality."
                },
                {
                    "text": "External risks — outside the business's control, e.g. economic recession, new legislation, natural disasters."
                },
                {
                    "text": "External risks blend into uncertainty when their likelihood or impact cannot be calculated in advance."
                }
            ]
        }
    },
    {
        "id": "enr-callout-brand-5",
        "type": "callout",
        "data": {
            "style": "warning",
            "title": "Real World: Kodak",
            "text": "Kodak dominated film photography for decades but failed to respond to the uncertainty posed by digital cameras — a technology it actually invented internally. Unable to predict how rapidly digital would displace film, Kodak filed for bankruptcy in 2012. This illustrates the danger of treating genuine market uncertainty as manageable, calculable risk."
        }
    },
    {
        "id": "enr-callout-student-5",
        "type": "callout",
        "data": {
            "style": "worked",
            "title": "Everyday Example: School Pop-Up Shop",
            "text": "A student setting up a pop-up shop selling revision cards faces both risk (e.g. a 20% estimated probability of equipment failure — a calculable, insurable risk) and uncertainty (e.g. whether the school will suddenly ban commercial activity on site — completely unpredictable). Planning for risks is straightforward; uncertainty demands flexibility and backup plans."
        }
    }
],
  recall: {
    "enabled": true,
    "ready": true,
    "summaryText": "Risk involves known outcomes that can be assigned probabilities and insured against. Uncertainty involves completely unpredictable future events with no calculable probability.",
    "cues": [
        {
            "id": "cue-1",
            "blockId": "p-1",
            "prompt": "What is business risk?",
            "answer": "A situation where the possible outcomes are known and quantifiable probabilities can be attached to them."
        },
        {
            "id": "cue-2",
            "blockId": "p-2",
            "prompt": "What is business uncertainty?",
            "answer": "A situation in which outcomes are completely unpredictable and mathematical probabilities cannot be assigned."
        },
        {
            "id": "cue-3",
            "blockId": "tbl-1",
            "prompt": "Which of the two – risk or uncertainty – is generally insurable?",
            "answer": "Risk is insurable, while uncertainty is not."
        },
        {
            "id": "cue-4",
            "blockId": "callout-1",
            "prompt": "State one way a firm can attempt to mitigate risk.",
            "answer": "By conducting market research, diversifying its product portfolio, or purchasing insurance."
        }
    ]
},
  evidence: [],
  mentions: []
};
