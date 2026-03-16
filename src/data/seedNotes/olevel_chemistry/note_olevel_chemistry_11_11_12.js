export const note_olevel_chemistry_11_11_12 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-3-2-addition-and-condensation-polymers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe examples of addition and condensation polymers, write equations for their formation, and draw repeat units from monomer structures.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Addition Polymers', level: 2 }
    },
    {
      id: 'tbl-add',
      type: 'comparisonTable',
      data: {
        caption: 'Common addition polymers',
        headers: ['Monomer', 'Polymer', 'Properties and uses'],
        rows: [
          ['Ethene CH₂=CH₂', 'Poly(ethene) [polyethylene]', 'Soft, flexible; bags, bottles, wrapping'],
          ['Propene CH₂=CHCH₃', 'Poly(propene) [polypropylene]', 'Harder than poly(ethene); ropes, crates, carpets'],
          ['Chloroethene (vinyl chloride) CH₂=CHCl', 'Poly(chloroethene) [PVC]', 'Rigid or flexible (with plasticiser); pipes, electrical insulation, clothing'],
          ['Tetrafluoroethene CF₂=CF₂', 'Poly(tetrafluoroethene) [PTFE/Teflon]', 'Non-stick, chemically inert, heat-resistant; non-stick coatings, waterproof fabric']
        ]
      }
    },
    {
      id: 'svg-addition-poly',
      type: 'svg',
      data: {
        caption: 'Formation of poly(ethene) via addition polymerisation.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; }
            .double-bond { stroke: var(--color-text); stroke-width: 2; }
            .bracket { fill: none; stroke: var(--color-text); stroke-width: 2; }
            .atom-c { font-family: var(--font-sans); font-size: 20px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .atom-h { font-family: var(--font-sans); font-size: 20px; fill: #7f8c8d; text-anchor: middle; dominant-baseline: middle; font-weight: bold; }
            .n-label { font-family: var(--font-sans); font-size: 24px; font-style: italic; fill: var(--color-text); }
            .label { font-family: var(--font-sans); font-size: 14px; font-weight: bold; fill: var(--color-text); text-anchor: middle; }
        </style>
    </defs>

    <!-- Monomers -->
    <g transform="translate(100, 100)">
        <text x="-60" y="5" class="n-label">n</text>
        
        <text x="-25" y="0" class="atom-c">C</text>
        <text x="25" y="0" class="atom-c">C</text>
        
        <!-- Double bond -->
        <line x1="-12" y1="-4" x2="12" y2="-4" class="double-bond"/>
        <line x1="-12" y1="4" x2="12" y2="4" class="double-bond"/>
        
        <!-- H atoms -->
        <text x="-50" y="-30" class="atom-h">H</text>
        <text x="-50" y="30" class="atom-h">H</text>
        <text x="50" y="-30" class="atom-h">H</text>
        <text x="50" y="30" class="atom-h">H</text>
        
        <line x1="-32" y1="-10" x2="-42" y2="-20" class="bond"/>
        <line x1="-32" y1="10" x2="-42" y2="20" class="bond"/>
        <line x1="32" y1="-10" x2="42" y2="-20" class="bond"/>
        <line x1="32" y1="10" x2="42" y2="20" class="bond"/>

        <text y="70" class="label">Monomer: ethene</text>
    </g>

    <!-- Arrow -->
    <g transform="translate(240, 100)">
        <line x1="0" y1="0" x2="80" y2="0" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)"/>
        <polygon points="80,-5 80,5 90,0" fill="var(--color-text)"/>
        <text x="40" y="-15" class="label" font-size="12">high pressure,</text>
        <text x="40" y="20" class="label" font-size="12">catalyst</text>
    </g>

    <!-- Polymer Repeat Unit -->
    <g transform="translate(480, 100)">
        <!-- Brackets -->
        <path d="M-60,-50 L-70,-50 L-70,50 L-60,50" class="bracket"/>
        <path d="M60,-50 L70,-50 L70,50 L60,50" class="bracket"/>
        
        <!-- trailing bonds (through brackets) -->
        <line x1="-80" y1="0" x2="-35" y2="0" class="bond" stroke-dasharray="4,2"/>
        <line x1="35" y1="0" x2="80" y2="0" class="bond" stroke-dasharray="4,2"/>

        <text x="-25" y="0" class="atom-c">C</text>
        <text x="25" y="0" class="atom-c">C</text>
        
        <!-- Single C-C bond -->
        <line x1="-12" y1="0" x2="12" y2="0" class="bond"/>
        
        <!-- H atoms -->
        <text x="-25" y="-40" class="atom-h">H</text>
        <text x="-25" y="40" class="atom-h">H</text>
        <text x="25" y="-40" class="atom-h">H</text>
        <text x="25" y="40" class="atom-h">H</text>
        
        <line x1="-25" y1="-15" x2="-25" y2="-25" class="bond"/>
        <line x1="-25" y1="15" x2="-25" y2="25" class="bond"/>
        <line x1="25" y1="-15" x2="25" y2="-25" class="bond"/>
        <line x1="25" y1="15" x2="25" y2="25" class="bond"/>

        <text x="80" y="60" class="n-label">n</text>

        <text y="80" class="label">Polymer: poly(ethene)</text>
    </g>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Condensation Polymers', level: 2 }
    },
    {
      id: 'call-cond',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nylon and Polyester',
        text: '<strong>Nylon</strong> (polyamide): formed from a diamine + diacid (or diacid chloride)<br/>• Monomers: hexane-1,6-diamine H₂N(CH₂)₆NH₂ + hexanedioic acid HOOC(CH₂)₄COOH<br/>• Linkage: <strong>–CO–NH–</strong> (amide bond/peptide-like bond)<br/>• H₂O released at each step<br/>• Uses: rope, clothing, tights, parachutes, toothbrush bristles<br/><br/><strong>Polyester</strong>: formed from a diol + diacid<br/>• Monomers: ethane-1,2-diol HO(CH₂)₂OH + benzene-1,4-dicarboxylic acid (terephthalic acid)<br/>• Linkage: <strong>–COO–</strong> (ester bond)<br/>• H₂O released at each step<br/>• Example: PET (polyethylene terephthalate) — plastic bottles, polyester clothing (Terylene)'
      }
    },
    {
      id: 'svg-condensation-poly-nylon',
      type: 'svg',
      data: {
        caption: 'Formation of nylon (a polyamide) via condensation polymerisation, showing the amide linkage.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250">
    <defs>
        <style>
            .bond { stroke: var(--color-text); stroke-width: 2; }
            .double-bond { stroke: var(--color-text); stroke-width: 2; }
            .box { fill: rgba(149, 165, 166, 0.2); stroke: var(--color-text); stroke-width: 2; }
            .box-black { fill: rgba(44, 62, 80, 0.4); stroke: var(--color-text); stroke-width: 2; }
            .atom-text { font-family: var(--font-sans); font-size: 20px; fill: var(--color-text); text-anchor: middle; dominant-baseline: middle; }
            .highlight { fill: none; stroke: rgba(52, 152, 219, 0.3); stroke-width: 30; stroke-linecap: round; stroke-linejoin: round; }
            .label { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); text-anchor: middle; }
            .water-group { fill: #e74c3c; font-weight: bold; }
        </style>
    </defs>

    <!-- Diamine monomer -->
    <g transform="translate(100, 80)">
        <text x="0" y="-30" class="label">Diamine</text>
        <text x="-40" y="0" class="atom-text">H</text>
        <text x="-25" y="0" class="atom-text">N</text>
        <line x1="-30" y1="0" x2="-20" y2="0" class="bond" stroke="#e74c3c"/>
        <text x="-40" y="25" class="atom-text water-group">H</text>
        <line x1="-25" y1="10" x2="-25" y2="15" class="bond"/>

        <line x1="-15" y1="0" x2="0" y2="0" class="bond"/>
        <rect x="0" y="-15" width="40" height="30" class="box"/>
        <line x1="40" y1="0" x2="55" y2="0" class="bond"/>
        
        <text x="65" y="0" class="atom-text">N</text>
        <text x="80" y="0" class="atom-text water-group">H</text>
        <line x1="70" y1="0" x2="75" y2="0" class="bond"/>
        <text x="80" y="25" class="atom-text">H</text>
        <line x1="65" y1="10" x2="65" y2="15" class="bond"/>
    </g>

    <text x="220" y="80" class="atom-text">+</text>

    <!-- Dicarboxylic acid monomer -->
    <g transform="translate(300, 80)">
        <text x="50" y="-30" class="label">Dicarboxylic Acid</text>
        
        <text x="-25" y="0" class="atom-text water-group">HO</text>
        <line x1="-5" y1="0" x2="5" y2="0" class="bond"/>

        <text x="20" y="0" class="atom-text">C</text>
        <text x="20" y="-30" class="atom-text">O</text>
        <line x1="15" y1="-10" x2="15" y2="-20" class="double-bond"/>
        <line x1="25" y1="-10" x2="25" y2="-20" class="double-bond"/>

        <line x1="30" y1="0" x2="50" y2="0" class="bond"/>
        <rect x="50" y="-15" width="40" height="30" class="box-black"/>
        <line x1="90" y1="0" x2="110" y2="0" class="bond"/>

        <text x="120" y="0" class="atom-text">C</text>
        <text x="120" y="-30" class="atom-text">O</text>
        <line x1="115" y1="-10" x2="115" y2="-20" class="double-bond"/>
        <line x1="125" y1="-10" x2="125" y2="-20" class="double-bond"/>

        <line x1="130" y1="0" x2="140" y2="0" class="bond"/>
        <text x="155" y="0" class="atom-text water-group">OH</text>

        <!-- dashed circle around H and OH to show water leaving -->
        <ellipse cx="-5" cy="0" rx="35" ry="20" fill="none" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="-5" y="30" class="label" fill="#e74c3c">H₂O removed</text>
    </g>

    <!-- Polymer unit -->
    <g transform="translate(180, 200)">
        <!-- Highlight amide link -->
        <line x1="100" y1="0" x2="150" y2="0" class="highlight"/>
        <text x="125" y="-50" class="label" fill="#3498db" font-weight="bold">Amide linkage (–CONH–)</text>
        <line x1="125" y1="-40" x2="125" y2="-15" stroke="#3498db" stroke-width="1.5" marker-end="url(#arrow)"/>

        <!-- Start bracket left -->
        <path d="M-10,-40 L-20,-40 L-20,40 L-10,40" fill="none" stroke="var(--color-text)" stroke-width="2"/>
        <line x1="-30" y1="0" x2="0" y2="0" stroke="var(--color-text)" stroke-width="2" stroke-dasharray="4,2"/>

        <text x="10" y="0" class="atom-text">N</text>
        <text x="10" y="25" class="atom-text">H</text>
        <line x1="10" y1="10" x2="10" y2="15" class="bond"/>

        <line x1="20" y1="0" x2="40" y2="0" class="bond"/>
        <rect x="40" y="-15" width="40" height="30" class="box"/>
        <line x1="80" y1="0" x2="100" y2="0" class="bond"/>

        <text x="110" y="0" class="atom-text">N</text>
        <text x="110" y="25" class="atom-text">H</text>
        <line x1="110" y1="10" x2="110" y2="15" class="bond"/>

        <line x1="120" y1="0" x2="140" y2="0" class="bond"/>
        
        <text x="150" y="0" class="atom-text">C</text>
        <text x="150" y="-30" class="atom-text">O</text>
        <line x1="145" y1="-10" x2="145" y2="-20" class="double-bond"/>
        <line x1="155" y1="-10" x2="155" y2="-20" class="double-bond"/>

        <line x1="160" y1="0" x2="180" y2="0" class="bond"/>
        <rect x="180" y="-15" width="40" height="30" class="box-black"/>
        <line x1="220" y1="0" x2="240" y2="0" class="bond"/>

        <text x="250" y="0" class="atom-text">C</text>
        <text x="250" y="-30" class="atom-text">O</text>
        <line x1="245" y1="-10" x2="245" y2="-20" class="double-bond"/>
        <line x1="255" y1="-10" x2="255" y2="-20" class="double-bond"/>

        <line x1="260" y1="0" x2="290" y2="0" stroke="var(--color-text)" stroke-width="2" stroke-dasharray="4,2"/>
        
        <!-- End bracket right -->
        <path d="M270,-40 L280,-40 L280,40 L270,40" fill="none" stroke="var(--color-text)" stroke-width="2"/>
        <text x="290" y="45" class="atom-text" font-style="italic">n</text>
        
        <text x="125" y="55" class="label">Polyamide (Nylon) repeat unit</text>
    </g>

    <!-- Side products -->
    <text x="500" y="200" class="atom-text">+  2n H₂O</text>
</svg>`
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Drawing repeat units',
        text: 'For addition polymers:<br/>Remove the C=C double bond and add one bond at each end of the unit:<br/>nCH₂=CH₂ → [–CH₂–CH₂–]ₙ<br/>Show square brackets with subscript n and bonds extending beyond.<br/><br/>For condensation, show the repeat unit between the two bonds with the small molecule (H₂O) noted as released.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Addition polymers: poly(ethene), poly(propene), PVC, PTFE — from alkene monomers. Condensation polymers: nylon (–CO–NH– linkage, diamine+diacid), polyester (–COO– linkage, diol+diacid) — release H₂O.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Addition: poly(ethene), PVC, poly(propene), PTFE from alkene monomers. Condensation: nylon (amide bond), polyester (ester bond) — both release H₂O.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-add', prompt: 'Name the monomer for PVC and draw the repeat unit structure.', answer: 'Monomer: chloroethene (CH₂=CHCl). Repeat unit: [–CH₂–CHCl–]ₙ' },
      { id: 'cue-2', blockId: 'call-cond', prompt: 'What type of bond links monomers in nylon, and what small molecule is released during its formation?', answer: 'Amide bond (–CO–NH–). Water (H₂O) is released each time an amide bond forms between the amine and acid groups.' },
      { id: 'cue-3', blockId: 'call-cond', prompt: 'Describe the monomers needed to make a polyester and give an example of a polyester product.', answer: 'A diol (2 –OH groups) and a diacid (2 –COOH groups). Example: PET from ethane-1,2-diol and terephthalic acid, used in plastic bottles and polyester clothing (Terylene).' }
    ]
  },
  evidence: [],
  mentions: []
};
