export const note_biology_2_3_3 = {
  "blocks": [
    {
      "id": "obj-4",
      "type": "objective",
      "data": {
        "text": "Compare light microscopy with transmission and scanning electron microscopy."
      }
    },
    {
      "id": "h-micro",
      "type": "heading",
      "data": {
        "text": "Types of Microscopy",
        "level": 2
      }
    },
    {
      "id": "p-def",
      "type": "paragraph",
      "data": {
        "text": "Magnification is how many times larger the image is compared to the actual object. Resolution is the ability to distinguish between two separate points that are very close together."
      }
    },
    {
      "id": "list-micro",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Light Microscope: Uses light and lenses. Low resolution (~200nm) because the wavelength of light is relatively long. Max useful magnification ~x1500. Can view living, coloured specimens.",
          "Transmission Electron Microscope (TEM): Electromagnets focus a beam of electrons through a very thin section of the specimen. Denser parts absorb more electrons and appear darker. Very high resolution (0.1nm) allows internal organelle structures (like mitochondrial cristae) to be seen. Max mag ~x1,000,000. Specimen must be dead (in a vacuum) and images are 2D.",
          "Scanning Electron Microscope (SEM): Scans a beam of electrons across the surface of the specimen. This knocks electrons off, which are gathered in a cathode ray tube to form an image. Good resolution (20nm). Specimen must be dead, but images are 3D, showing surface details."
        ]
      }
    },
    {
      "id": "callout-eq",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Equation",
        "text": "Magnification = Image Size ÷ Actual Size\n(Ensure units are consistent, usually converting everything to micrometres, μm)."
      }
    }
  ,
    {
        "id": "svg-diag-2-3-3-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='160' height='120' fill='#1c3a64' stroke='#3182ce' rx='10'/><text x='40' y='40' font-weight='bold' font-size='12' fill='#2b6cb0'>Light Microscope</text><text x='30' y='65' font-size='10'>Resolution: ~200 nm</text><text x='30' y='85' font-size='10'>Magnification: ~x1500</text><text x='30' y='105' font-size='10'>Uses: Living cells, color</text><rect x='200' y='20' width='160' height='120' fill='#0a2e1a' stroke='#38a169' rx='10'/><text x='210' y='40' font-weight='bold' font-size='12' fill='#2f855a'>Electron Microscope</text><text x='210' y='65' font-size='10'>Resolution: ~0.1 nm</text><text x='210' y='85' font-size='10'>Magnification: ~x500,000</text><text x='210' y='105' font-size='10'>Uses: Dead cells, B&W (TEM/SEM)</text></svg>",
            "caption": "Light vs Electron Microscope"
        }
    },
    {
        "id": "svg-diag-2-3-3-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M30,50 Q80,20 130,50 T170,80' fill='none' stroke='#333' stroke-width='4'/><path d='M70,20 L100,50 L130,20' fill='none' stroke='#e53e3e' stroke-width='2' stroke-dasharray='4'/><text x='40' y='120' font-size='12' fill='#c53030'>SEM: Scans Surface (3D)</text><rect x='220' y='40' width='60' height='60' fill='#1e293b' stroke='#4a5568'/><circle cx='250' cy='70' r='10' fill='#a0aec0'/><path d='M250,20 L250,120' stroke='#3182ce' stroke-width='2' stroke-dasharray='4'/><text x='200' y='135' font-size='12' fill='#2b6cb0'>TEM: Passes Through (2D internal)</text></svg>",
            "caption": "Scanning (SEM) vs Transmission (TEM)"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-def",
        "prompt": "What is the definition of resolution?"
      },
      {
        "id": "cue-2",
        "blockId": "list-micro",
        "prompt": "What is a major advantage of an SEM over a TEM?"
      }
    ],
    "summaryText": "Light microscopes have lower resolution than electron microscopes. TEMs provide very high-resolution 2D internal images, while SEMs show 3D surface detail. Both require dead specimens in a vacuum.",
    "ready": true
  },
  "evidence": []
};
