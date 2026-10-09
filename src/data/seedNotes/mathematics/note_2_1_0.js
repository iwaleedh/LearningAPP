/**
 * Seed note: Mathematics · Unit 2 · Topic 1 · Subtopic 0
 * "Language of proof"
 */

export const note_mathematics_2_1_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Use the language of proof correctly — including conjecture, theorem, implication (⇒, ⇐, ⇔), \"necessary\" and \"sufficient\" — and write mathematical arguments clearly."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Key Terms",
        "level": 2
      }
    },
    {
      "id": "tbl-terms",
      "type": "comparisonTable",
      "data": {
        "caption": "The vocabulary of proof",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Conjecture",
            "A statement believed to be true but not yet proved"
          ],
          [
            "Proof",
            "A logical argument showing a statement is always true"
          ],
          [
            "Theorem",
            "A statement that has been proved"
          ],
          [
            "Counter-example",
            "A single example showing a statement is false"
          ],
          [
            "Identity (≡)",
            "An equation true for all values of the variable"
          ]
        ]
      }
    },
    {
      "id": "h-implication",
      "type": "heading",
      "data": {
        "text": "Implication Symbols",
        "level": 2
      }
    },
    {
      "id": "list-implication",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "<strong>P ⇒ Q</strong> (\"P implies Q\"): if P is true then Q is true. Example: x = 3 ⇒ x² = 9."
          },
          {
            "text": "<strong>P ⇐ Q</strong> (\"P is implied by Q\"): Q ⇒ P."
          },
          {
            "text": "<strong>P ⇔ Q</strong> (\"P if and only if Q\"): both directions hold. Example: x + 2 = 5 ⇔ x = 3."
          }
        ]
      }
    },
    {
      "id": "warn-oneway",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Implication Is One-Way",
        "text": "x = 3 ⇒ x² = 9 is true, but x² = 9 ⇒ x = 3 is false (x could be −3). So x = 3 ⇔ x² = 9 is false. Always check both directions before using ⇔."
      }
    },
    {
      "id": "h-necessary",
      "type": "heading",
      "data": {
        "text": "Necessary and Sufficient",
        "level": 2
      }
    },
    {
      "id": "p-necessary",
      "type": "paragraph",
      "data": {
        "text": "If P ⇒ Q, then P is <strong>sufficient</strong> for Q, and Q is <strong>necessary</strong> for P. For example, \"n is divisible by 4\" is sufficient for \"n is even\"; \"n is even\" is necessary (but not sufficient) for \"n is divisible by 4\"."
      }
    },
    {
      "id": "h-writing",
      "type": "heading",
      "data": {
        "text": "Writing a Proof",
        "level": 2
      }
    },
    {
      "id": "list-writing",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "State clearly what you are assuming and what you will prove."
          },
          {
            "text": "Use correct notation: e.g. write an even number as 2n and an odd number as 2n + 1 where n ∈ ℤ."
          },
          {
            "text": "Move logically from one line to the next, justifying each step."
          },
          {
            "text": "Finish with a concluding statement, e.g. \"Hence the sum of two odd numbers is always even.\""
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Short Proof",
        "text": "Prove that the sum of two odd numbers is even.\nLet the odd numbers be 2m + 1 and 2n + 1, where m, n ∈ ℤ.\n(2m + 1) + (2n + 1) = 2m + 2n + 2 = 2(m + n + 1)\nm + n + 1 is an integer, so the sum is a multiple of 2.\nHence the sum of two odd numbers is always even. ∎"
      }
    },
    {
      "id": "tip-letters",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Different Letters",
        "text": "Use different letters (m and n) for two general numbers — using the same letter would only prove the result for two equal numbers."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Define conjecture, theorem, proof and counter-example",
            "checked": false
          },
          {
            "text": "Use ⇒, ⇐ and ⇔ correctly",
            "checked": false
          },
          {
            "text": "Distinguish necessary and sufficient conditions",
            "checked": false
          },
          {
            "text": "Write a clearly structured proof with a conclusion",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "A conjecture becomes a theorem once proved; one counter-example disproves a statement. ⇒ means implies, ⇔ means both directions; if P ⇒ Q then P is sufficient and Q necessary. Proofs use general notation (2n, 2n + 1), logical steps and a concluding statement."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "A conjecture becomes a theorem once proved; one counter-example disproves a statement. ⇒ means implies, ⇔ means both directions; if P ⇒ Q then P is sufficient and Q necessary. Proofs use general notation (2n, 2n + 1), logical steps and a concluding statement.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "warn-oneway",
        "prompt": "Is it correct to write x² = 9 ⇔ x = 3? Explain.",
        "answer": "No — x² = 9 also allows x = −3, so only x = 3 ⇒ x² = 9 holds."
      },
      {
        "id": "cue-2",
        "blockId": "p-necessary",
        "prompt": "If P ⇒ Q, which statement is necessary and which is sufficient?",
        "answer": "P is sufficient for Q; Q is necessary for P."
      },
      {
        "id": "cue-3",
        "blockId": "tip-letters",
        "prompt": "Why should a proof about two odd numbers use 2m + 1 and 2n + 1 rather than 2n + 1 twice?",
        "answer": "Using the same letter would only prove it for two equal odd numbers."
      }
    ]
  },
  "evidence": []
};

export default note_mathematics_2_1_0;
