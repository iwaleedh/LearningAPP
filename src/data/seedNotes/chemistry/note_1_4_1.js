/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 1
 * "IUPAC nomenclature of alkanes and branched-chain compounds"
 */
export const note_chemistry_1_4_1 = {
  blocks: [
    { id: 'objective', type: 'objective', data: { text: 'Apply IUPAC nomenclature rules to name straight-chain and branched-chain alkanes, halogenoalkanes, and alcohols. Identify the longest carbon chain and correctly number substituents.' } },
    {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Name the structure systematically",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Find the longest continuous carbon chain; it may bend across the drawing. Name the parent alkane, identify side chains and number the parent to give the lowest set of substituent positions at the first point of difference. Do not simply choose the smallest sum of locants. When equivalent numbering remains, give the lower number to the substituent cited first alphabetically. List substituents alphabetically, ignoring di-, tri- and tetra-. Use commas between numbers and hyphens between numbers and words. A simple alkane name contains no spaces."
  }
},
{ id: 'h-prefix', type: 'heading', data: { text: 'Carbon Chain Prefixes', level: 2 } },
    { id: 'svg-prefix', type: 'svg', data: {
      caption: 'IUPAC prefixes for carbon chain length (must be memorised)',
      svg: `<svg viewBox="0 0 580 338" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="60" y="22" fill="white" font-weight="bold" font-size="12" text-anchor="middle">C Atoms</text><text x="190" y="22" fill="white" font-weight="bold" font-size="12" text-anchor="middle">Prefix</text><text x="350" y="22" fill="white" font-weight="bold" font-size="12" text-anchor="middle">Alkane Name</text><text x="502" y="22" fill="white" font-weight="bold" font-size="12" text-anchor="middle">Molecular Formula</text><line x1="110" y1="0" x2="110" y2="338" stroke="#475569" stroke-width="1"/><line x1="270" y1="0" x2="270" y2="338" stroke="#475569" stroke-width="1"/><line x1="430" y1="0" x2="430" y2="338" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="38" fill="#e0f2fe"/><text x="60" y="58" font-weight="bold" fill="#0369a1" font-size="14" text-anchor="middle">1</text><text x="190" y="58" font-weight="bold" fill="#0369a1" font-size="14" text-anchor="middle">meth-</text><text x="350" y="58" fill="#0c4a6e" font-size="13" text-anchor="middle">methane</text><text x="502" y="58" fill="#0c4a6e" font-family="monospace" text-anchor="middle">CH₄</text><rect x="0" y="72" width="580" height="38" fill="#f0fdf4"/><text x="60" y="96" font-weight="bold" fill="#15803d" font-size="14" text-anchor="middle">2</text><text x="190" y="96" font-weight="bold" fill="#15803d" font-size="14" text-anchor="middle">eth-</text><text x="350" y="96" fill="#14532d" font-size="13" text-anchor="middle">ethane</text><text x="502" y="96" fill="#14532d" font-family="monospace" text-anchor="middle">C₂H₆</text><rect x="0" y="110" width="580" height="38" fill="#fef3c7"/><text x="60" y="134" font-weight="bold" fill="#92400e" font-size="14" text-anchor="middle">3</text><text x="190" y="134" font-weight="bold" fill="#92400e" font-size="14" text-anchor="middle">prop-</text><text x="350" y="134" fill="#713f12" font-size="13" text-anchor="middle">propane</text><text x="502" y="134" fill="#713f12" font-family="monospace" text-anchor="middle">C₃H₈</text><rect x="0" y="148" width="580" height="38" fill="#fce7f3"/><text x="60" y="172" font-weight="bold" fill="#9d174d" font-size="14" text-anchor="middle">4</text><text x="190" y="172" font-weight="bold" fill="#9d174d" font-size="14" text-anchor="middle">but-</text><text x="350" y="172" fill="#831843" font-size="13" text-anchor="middle">butane</text><text x="502" y="172" fill="#831843" font-family="monospace" text-anchor="middle">C₄H₁₀</text><rect x="0" y="186" width="580" height="38" fill="#ede9fe"/><text x="60" y="210" font-weight="bold" fill="#6d28d9" font-size="14" text-anchor="middle">5</text><text x="190" y="210" font-weight="bold" fill="#6d28d9" font-size="14" text-anchor="middle">pent-</text><text x="350" y="210" fill="#4c1d95" font-size="13" text-anchor="middle">pentane</text><text x="502" y="210" fill="#4c1d95" font-family="monospace" text-anchor="middle">C₅H₁₂</text><rect x="0" y="224" width="580" height="38" fill="#e0f2fe"/><text x="60" y="248" font-weight="bold" fill="#0369a1" font-size="14" text-anchor="middle">6</text><text x="190" y="248" font-weight="bold" fill="#0369a1" font-size="14" text-anchor="middle">hex-</text><text x="350" y="248" fill="#0c4a6e" font-size="13" text-anchor="middle">hexane</text><text x="502" y="248" fill="#0c4a6e" font-family="monospace" text-anchor="middle">C₆H₁₄</text><rect x="0" y="262" width="580" height="38" fill="#f0fdf4"/><text x="60" y="286" font-weight="bold" fill="#15803d" font-size="14" text-anchor="middle">7</text><text x="190" y="286" font-weight="bold" fill="#15803d" font-size="14" text-anchor="middle">hept-</text><text x="350" y="286" fill="#14532d" font-size="13" text-anchor="middle">heptane</text><text x="502" y="286" fill="#14532d" font-family="monospace" text-anchor="middle">C₇H₁₆</text><rect x="0" y="300" width="580" height="38" fill="#fef3c7"/><text x="60" y="324" font-weight="bold" fill="#92400e" font-size="14" text-anchor="middle">8</text><text x="190" y="324" font-weight="bold" fill="#92400e" font-size="14" text-anchor="middle">oct-</text><text x="350" y="324" fill="#713f12" font-size="13" text-anchor="middle">octane</text><text x="502" y="324" fill="#713f12" font-family="monospace" text-anchor="middle">C₈H₁₈</text><rect x="0" y="0" width="580" height="338" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'h-rules', type: 'heading', data: { text: 'IUPAC Naming Rules — 7 Steps', level: 2 } },
    { id: 'svg-naming', type: 'svg', data: {
      caption: 'Systematic IUPAC naming procedure for organic compounds',
      svg: `<svg viewBox="0 0 580 324" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="290" y="22" fill="white" font-weight="bold" font-size="13" text-anchor="middle">IUPAC Naming — Step by Step</text><rect x="0" y="34" width="580" height="41" fill="#f8fafc"/><circle cx="22" cy="55" r="13" fill="#3b82f6"/><text x="22" y="60" fill="white" font-weight="bold" font-size="13" text-anchor="middle">1</text><text x="42" y="52" fill="#1e293b" font-weight="bold" font-size="12">Find the longest continuous carbon chain</text><text x="42" y="67" fill="#374151" font-size="11">This gives the parent name prefix (e.g. 5 carbons = pent- → pentane)</text><rect x="0" y="75" width="580" height="41" fill="#f0f9ff"/><circle cx="22" cy="96" r="13" fill="#0369a1"/><text x="22" y="101" fill="white" font-weight="bold" font-size="13" text-anchor="middle">2</text><text x="42" y="93" fill="#1e293b" font-weight="bold" font-size="12">Identify the principal functional group</text><text x="42" y="108" fill="#374151" font-size="11">Gives the suffix: –ane (alkane), –ene (alkene), –ol (alcohol), –al (aldehyde)</text><rect x="0" y="116" width="580" height="41" fill="#f8fafc"/><circle cx="22" cy="137" r="13" fill="#3b82f6"/><text x="22" y="142" fill="white" font-weight="bold" font-size="13" text-anchor="middle">3</text><text x="42" y="134" fill="#1e293b" font-weight="bold" font-size="12">Number the chain from the end giving the lowest locant to the main group</text><text x="42" y="149" fill="#374151" font-size="11">Principal functional group (C=C, –OH, etc.) must have lowest possible number</text><rect x="0" y="157" width="580" height="41" fill="#f0f9ff"/><circle cx="22" cy="178" r="13" fill="#0369a1"/><text x="22" y="183" fill="white" font-weight="bold" font-size="13" text-anchor="middle">4</text><text x="42" y="175" fill="#1e293b" font-weight="bold" font-size="12">If no principal group, number to give substituents the lowest locants</text><text x="42" y="190" fill="#374151" font-size="11">Choose the end closest to the first branch point</text><rect x="0" y="198" width="580" height="41" fill="#f8fafc"/><circle cx="22" cy="219" r="13" fill="#3b82f6"/><text x="22" y="224" fill="white" font-weight="bold" font-size="13" text-anchor="middle">5</text><text x="42" y="216" fill="#1e293b" font-weight="bold" font-size="12">Name substituents with alkyl or halogen prefixes</text><text x="42" y="231" fill="#374151" font-size="11">Alkyl: methyl (–CH₃), ethyl (–C₂H₅). Halogen: fluoro, chloro, bromo, iodo</text><rect x="0" y="239" width="580" height="41" fill="#f0f9ff"/><circle cx="22" cy="260" r="13" fill="#0369a1"/><text x="22" y="265" fill="white" font-weight="bold" font-size="13" text-anchor="middle">6</text><text x="42" y="257" fill="#1e293b" font-weight="bold" font-size="12">Use multipliers for repeated substituents</text><text x="42" y="272" fill="#374151" font-size="11">di- (×2), tri- (×3), tetra- (×4). These are ignored when sorting alphabetically</text><rect x="0" y="280" width="580" height="44" fill="#f8fafc"/><circle cx="22" cy="302" r="13" fill="#3b82f6"/><text x="22" y="307" fill="white" font-weight="bold" font-size="13" text-anchor="middle">7</text><text x="42" y="296" fill="#1e293b" font-weight="bold" font-size="12">Write substituents alphabetically, then add the base chain name</text><text x="42" y="310" fill="#374151" font-size="11">Numbers from letters: hyphens (2-methyl). Numbers from numbers: commas (2,3-di)</text><rect x="0" y="0" width="580" height="324" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'callout-examples', type: 'callout', data: {
      style: 'worked', title: 'Worked Examples',
      text: '<strong>CH₃CH(CH₃)CH₂CH₃:</strong><br/>Longest chain = 4 C (butane). Methyl branch on C-2.<br/>Name: <strong>2-methylbutane</strong><br/><br/><strong>CH₃CH(CH₃)CH(CH₃)CH₃:</strong><br/>Longest chain = 4 C (butane). Two methyl groups on C-2 and C-3.<br/>Name: <strong>2,3-dimethylbutane</strong><br/><br/><strong>CH₃CH(Br)CH₂CH₃:</strong><br/>Longest chain = 4 C (butane). Bromo group on C-2.<br/>Name: <strong>2-bromobutane</strong><br/><br/><strong>Past paper trick:</strong> A 4-C chain with Cl on C-2 and methyl on C-3 is <strong>2-chloro-3-methylbutane</strong> (alphabetical: chloro before methyl).'
    }}
  ,
    {
      id: 'callout-exam-4-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip: Alphabetical Naming",
        text: "Ensure you place substituents in alphabetical order (e.g., ethyl before methyl), completely disregarding numerical prefixes like 'di' or 'tri'."
      }
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "CH₃CH(CH₃)CH(CH₃)CH₂CH₃ has a five-carbon parent. Numbering from the left gives 2,3 rather than 3,4, so the name is <strong>2,3-dimethylpentane</strong>. For CH₃CH₂CH(CH₂CH₃)CH₂CH₂CH₃, the longest chain contains six carbons and an ethyl group is attached at C-3: <strong>3-ethylhexane</strong>. Drawing the named structure back is a useful final check."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "A horizontal row is not necessarily the longest chain. Count carbons in branches as well, and distinguish an ethyl side chain from two separate methyl groups."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Name CH₃CH(CH₃)CH(CH₃)CH₂CH₃.",
        "checked": false
      },
      {
        "text": "How do you compare two possible numbering directions?",
        "checked": false
      },
      {
        "text": "Does “di” affect alphabetical order?",
        "checked": false
      },
      {
        "text": "Where are commas and hyphens used?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Find the longest continuous carbon chain; it may bend across the drawing. Name the parent alkane, identify side chains and number the parent to give the lowest set of substituent positions at the first point of difference. Do not simply choose the smallest sum of locants. When equivalent numbering remains, give the lower number to the substituent cited first alphabetically. List substituents alphabetically, ignoring di-, tri- and tetra-. Use commas between numbers and hyphens between numbers and words. A simple alkane name contains no spaces."
  }
}
  ],
  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Name CH₃CH(CH₃)CH(CH₃)CH₂CH₃.",
      "answer": "2,3-dimethylpentane: the parent has five carbons and methyl groups at positions 2 and 3."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "How do you compare two possible numbering directions?",
      "answer": "Compare the ordered sets of locants at the first difference, choosing the lower set; do not compare only their sums."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Does “di” affect alphabetical order?",
      "answer": "No. Alphabetise using the substituent name, so ethyl comes before methyl regardless of di- or tri-."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Where are commas and hyphens used?",
      "answer": "Commas separate numbers; hyphens separate numbers from words. Simple alkane names do not contain spaces."
    }
  ],
  "summaryText": "Find the longest continuous carbon chain; it may bend across the drawing. Name the parent alkane, identify side chains and number the parent to give the lowest set of substituent positions at the first point of difference. Do not simply choose the smallest sum of locants. When equivalent numbering remains, give the lower number to the substituent cited first alphabetically. List substituents alphabetically, ignoring di-, tri- and tetra-. Use commas between numbers and hyphens between numbers and words. A simple alkane name contains no spaces.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}], mentions: []
};
