export const note_biology_1_1_12 = {
  "blocks": [
    {
      "id": "obj-cp2",
      "type": "objective",
      "data": {
        "text": "Understand Core Practical 2: Determining the concentration of Vitamin C in a solution using DCPIP."
      }
    },
    {
      "id": "h-dcpip",
      "type": "heading",
      "data": {
        "text": "The DCPIP Titration Method",
        "level": 2
      }
    },
    {
      "id": "p-dcpip",
      "type": "paragraph",
      "data": {
        "text": "DCPIP is a blue dye that acts as an electron acceptor. Vitamin C (ascorbic acid) is a strong reducing agent (an antioxidant). When Vitamin C is added to DCPIP, it reduces the dye, causing it to change from blue to colorless."
      }
    },
    {
      "id": "list-method",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Measure an exact volume (e.g., 1 cm^3) of a standard known concentration of Vitamin C solution into a test tube.",
          "Fill a burette or precision syringe with DCPIP solution.",
          "Add DCPIP drop-by-drop to the Vitamin C solution, gently swirling the tube after each drop.",
          "Stop when the blue color of the DCPIP no longer disappears (the end-point, indicating the Vitamin C has all been oxidised). Record the volume of DCPIP added.",
          "Repeat the process with the unknown fruit juice extract.",
          "Calculate the concentration of Vitamin C in the juice by comparing the volume of DCPIP needed for the juice relative to the standard."
        ]
      }
    },
    {
      "id": "callout-controls",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Controlled Variables",
        "text": "When comparing different fruit juices, ensure you control the volume of the juice sample used, the concentration of the DCPIP, and the age/storage conditions of the juices (as Vitamin C degrades over time and with exposure to heat/oxygen)."
      }
    }
  ,
    {
        "id": "svg-diag-1-1-12-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'><rect x='115' y='30' width='10' height='120' fill='#1e293b' stroke='#4a5568'/><text x='135' y='90' font-size='12'>Burette</text><path d='M90,180 L150,180 L140,220 L100,220 Z' fill='#3d1212' stroke='#4a5568' stroke-width='2'/><text x='30' y='210' font-size='10'>Vitamin C Extract</text><circle cx='120' cy='160' r='3' fill='#3182ce'/><circle cx='120' cy='170' r='3' fill='#3182ce'/><text x='135' y='165' font-size='10' fill='#3182ce'>DCPIP Drops</text></svg>",
            "caption": "DCPIP Titration Setup"
        }
    },
    {
        "id": "svg-diag-1-1-12-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><circle cx='70' cy='50' r='25' fill='#3182ce'/><text x='55' y='55' fill='#1e293b' font-size='12'>Blue</text><text x='115' y='55' font-size='12' font-family='sans-serif'>+ Vitamin C →</text><circle cx='230' cy='50' r='25' fill='none' stroke='#4a5568' stroke-width='2'/><text x='205' y='55' font-size='12'>Colourless</text></svg>",
            "caption": "DCPIP End Point"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-dcpip",
        "prompt": "What is the color change observed when Vitamin C reduces DCPIP?"
      },
      {
        "id": "cue-2",
        "blockId": "list-method",
        "prompt": "Why must you titrate against a standard Vitamin C solution first?"
      },
      {
        "id": "cue-3",
        "blockId": "callout-controls",
        "prompt": "Name two variables that must be controlled when comparing the Vitamin C content of different fruit juices."
      }
    ],
    "summaryText": "Vitamin C is a reducing agent that turns blue DCPIP colorless. By titrating DCPIP into a standard Vitamin C solution and comparing the volume used against unknown juices, the concentration can be calculated.",
    "ready": true
  },
  "evidence": []
};
