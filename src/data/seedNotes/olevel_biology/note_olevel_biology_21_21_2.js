export const note_olevel_biology_21_21_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/21 Biotechnology And Genetic Modification/21-3-1-genetic-modification.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the process of genetic modification and evaluate its benefits and risks with examples.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Genetic Modification?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Genetic Modification (GM)',
        text: '<strong>Genetic modification (GM)</strong> is the process of changing an organism\'s DNA by inserting, deleting, or altering genes — often by transferring a gene from one species to another.<br/><br/>The resulting organism is called a <strong>genetically modified organism (GMO)</strong> or <strong>transgenic organism</strong>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Process of Genetic Modification', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Steps in GM — Example: Insulin Production',
        text: '1. <strong>Identify the gene</strong> — locate the human insulin gene on chromosome 11.<br/>2. <strong>Cut out the gene</strong> — using <strong>restriction enzymes</strong> (molecular scissors) that cut DNA at specific sequences, leaving sticky ends.<br/>3. <strong>Cut open the vector</strong> — a plasmid (circular piece of bacterial DNA) is cut with the same restriction enzyme, producing matching sticky ends.<br/>4. <strong>Splice in the gene</strong> — the insulin gene is joined to the plasmid using <strong>DNA ligase</strong> (joining enzyme) → recombinant plasmid.<br/>5. <strong>Insert vector into host</strong> — the recombinant plasmid is inserted into a bacterium (E. coli).<br/>6. <strong>Culture and harvest</strong> — bacteria multiply in fermenters and produce human insulin, which is extracted and purified.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Genetic modification process — gene transfer using a plasmid vector',
        svg: `<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="520" height="320" fill="#2d1b69" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#7e22ce">Genetic Modification — Plasmid Vector Method</text>
  <!-- Step 1: Human DNA with gene -->
  <rect x="20" y="45" width="120" height="35" rx="6" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="80" y="66" text-anchor="middle" font-size="10" fill="#1e40af">Human DNA</text>
  <text x="80" y="78" text-anchor="middle" font-size="10" fill="#1e40af">(insulin gene)</text>
  <!-- Arrow -->
  <line x1="140" y1="62" x2="165" y2="62" stroke="#374151" stroke-width="2" marker-end="url(#gm1)"/>
  <text x="148" y="55" font-size="9" fill="#374151">Restriction</text>
  <text x="148" y="65" font-size="9" fill="#374151">enzyme cuts</text>
  <!-- Isolated gene -->
  <rect x="168" y="47" width="90" height="30" rx="5" fill="#2d1b69" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="213" y="66" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">Insulin gene</text>
  <!-- Plasmid -->
  <circle cx="90" cy="170" r="40" fill="none" stroke="#16a34a" stroke-width="2.5"/>
  <text x="90" y="166" text-anchor="middle" font-size="10" fill="#166534">Bacterial</text>
  <text x="90" y="180" text-anchor="middle" font-size="10" fill="#166534">plasmid</text>
  <!-- Arrow down -->
  <line x1="80" y1="82" x2="80" y2="128" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="30" y="110" font-size="9" fill="#374151">Cut with same</text>
  <text x="30" y="122" font-size="9" fill="#374151">restriction enzyme</text>
  <!-- Arrow from gene to plasmid -->
  <line x1="213" y1="78" x2="128" y2="145" stroke="#7c3aed" stroke-width="2" marker-end="url(#gm2)"/>
  <text x="175" y="125" font-size="9" fill="#7c3aed">DNA ligase</text>
  <text x="175" y="136" font-size="9" fill="#7c3aed">joins gene</text>
  <!-- Recombinant plasmid -->
  <circle cx="280" cy="170" r="40" fill="none" stroke="#16a34a" stroke-width="2.5"/>
  <rect x="260" y="132" width="40" height="14" rx="4" fill="#2d1b69" stroke="#7c3aed" stroke-width="1"/>
  <text x="280" y="144" text-anchor="middle" font-size="8" fill="#1e293b">Ins. gene</text>
  <text x="280" y="175" text-anchor="middle" font-size="10" fill="#166534">Recombinant</text>
  <text x="280" y="188" text-anchor="middle" font-size="10" fill="#166534">plasmid</text>
  <!-- Arrow between plasmids -->
  <line x1="132" y1="170" x2="238" y2="170" stroke="#374151" stroke-width="2" marker-end="url(#gm3)"/>
  <!-- Bacterium -->
  <ellipse cx="440" cy="170" rx="55" ry="35" fill="#78350f" stroke="#b45309" stroke-width="2"/>
  <text x="440" y="166" text-anchor="middle" font-size="10" fill="#92400e">E. coli</text>
  <text x="440" y="180" text-anchor="middle" font-size="10" fill="#92400e">bacterium</text>
  <!-- Arrow to bacterium -->
  <line x1="322" y1="170" x2="383" y2="170" stroke="#374151" stroke-width="2" marker-end="url(#gm4)"/>
  <text x="348" y="162" font-size="9" fill="#374151">Insert into</text>
  <text x="348" y="173" font-size="9" fill="#374151">bacterium</text>
  <!-- Result -->
  <text x="260" y="260" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Bacteria multiply in fermenter → produce human insulin</text>
  <text x="260" y="278" text-anchor="middle" font-size="10" fill="#374151">Insulin extracted, purified and used to treat diabetes</text>
  <defs>
    <marker id="gm1" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#374151"/></marker>
    <marker id="gm2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#7c3aed"/></marker>
    <marker id="gm3" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#374151"/></marker>
    <marker id="gm4" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#374151"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Examples and Evaluation of GM', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and disadvantages of genetic modification',
        headers: ['Aspect', 'Advantages', 'Disadvantages/Risks'],
        rows: [
          ['Medicine', 'Human insulin from GM bacteria (safer, cheaper than animal insulin)', 'Unknown long-term effects of consuming GM products'],
          ['Agriculture', 'Herbicide-resistant crops reduce weed damage; Bt crops produce own insecticide', 'GM genes may spread to wild plants (gene flow); reduced biodiversity'],
          ['Nutrition', 'Golden rice contains beta-carotene (Vitamin A) to prevent deficiency', 'Ethical concerns about "playing God"; public mistrust'],
          ['Environment', 'Reduced pesticide use with pest-resistant crops', 'Unpredictable effects on ecosystems; superweeds']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Genetic modification transfers genes between organisms using restriction enzymes (to cut) and DNA ligase (to join), with plasmids as vectors. Examples: GM bacteria produce human insulin; GM crops include herbicide-resistant and Bt varieties. Benefits include medical and agricultural gains; concerns include ethical issues and ecological risks.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'GM process: restriction enzymes cut gene → ligase joins to plasmid → plasmid inserted into bacterium → bacterium produces protein. Examples: insulin from GM E. coli, herbicide-resistant crops, golden rice.',
    cues: [
      { id: 'cue-1', blockId: 'call-2', prompt: 'Name the two enzymes used in genetic modification and state the role of each.', answer: 'Restriction enzymes cut DNA at specific sequences (molecular scissors). DNA ligase joins the gene to the vector (molecular glue).' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'What is a plasmid and why is it used in genetic modification?', answer: 'A plasmid is a small circular piece of DNA found in bacteria. It is used as a vector — a carrier that transports the desired gene into the host bacterium.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Give one advantage and one disadvantage of GM crops.', answer: 'Advantage: herbicide-resistant crops can increase yield by reducing weed competition. Disadvantage: GM genes may spread to wild plants via pollen, creating herbicide-resistant weeds (superweeds).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_21_21_2;
