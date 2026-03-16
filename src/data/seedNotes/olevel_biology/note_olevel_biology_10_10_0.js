export const note_olevel_biology_10_10_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/10 Diseases And Immunity/10-1-1-pathogens-and-transmission.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify the types of pathogens, name diseases they cause, and describe how infectious diseases are transmitted between individuals.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What Is a Pathogen?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Pathogen Definition',
        text: 'A <strong>pathogen</strong> is a microorganism that causes disease in a host organism. Pathogens are infectious — they can be passed from one host to another. Not all microorganisms are pathogens; many are harmless or even beneficial.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Types of Pathogen', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Four major types of pathogen and examples of diseases they cause',
        headers: ['Type of Pathogen', 'Key features', 'Example disease', 'Causative organism'],
        rows: [
          ['Bacteria', 'Prokaryotic cells; reproduce rapidly; secrete toxins that damage host tissues', 'Cholera', 'Vibrio cholerae'],
          ['Bacteria', 'Prokaryotic; some produce endospores for survival', 'Tuberculosis (TB)', 'Mycobacterium tuberculosis'],
          ['Bacteria', 'Prokaryotic; produce toxins affecting nervous system / gut', 'Salmonella food poisoning', 'Salmonella enterica'],
          ['Viruses', 'Non-cellular; protein coat (capsid) + genetic material; replicate only inside host cells', 'Influenza (flu)', 'Influenza virus'],
          ['Viruses', 'Destroys T-helper lymphocytes, weakening immune system', 'AIDS', 'HIV'],
          ['Viruses', 'Highly contagious respiratory disease', 'Measles', 'Measles virus'],
          ['Fungi', 'Eukaryotic; absorb nutrients; grow on or in skin', 'Athlete\'s foot (Tinea pedis)', 'Tinea fungus'],
          ['Protists', 'Eukaryotic, single-celled; complex life cycles; often vector-transmitted', 'Malaria', 'Plasmodium']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Bacteria vs Viruses',
        text: 'Examiners frequently ask you to distinguish bacteria from viruses. Key difference: bacteria are <strong>living cells</strong> that can reproduce independently and are treated with <strong>antibiotics</strong>. Viruses are <strong>not cells</strong>, reproduce only inside host cells, and are <strong>not affected by antibiotics</strong>.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Methods of Disease Transmission', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'For a disease to spread, pathogens must move from an infected host to a new susceptible host. Different pathogens use different transmission routes depending on where they live and replicate in the body.' }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Methods of disease transmission with mechanisms and examples',
        headers: ['Transmission Route', 'Mechanism', 'Prevention', 'Example disease'],
        rows: [
          ['Droplet infection', 'Tiny liquid droplets containing pathogens expelled during coughing, sneezing or talking; inhaled by others nearby', 'Covering mouth; ventilation; masks', 'Influenza, TB, COVID-19, measles'],
          ['Direct contact', 'Touching an infected person\'s skin, surfaces they have touched, or bodily fluids', 'Hand washing; not sharing towels/equipment', 'Athlete\'s foot, impetigo'],
          ['Contaminated food or water', 'Consuming food or water containing pathogens or their toxins', 'Cooking food thoroughly; safe water supply; sewage treatment', 'Cholera, Salmonella, typhoid'],
          ['Vectors', 'An animal (usually an insect) carries the pathogen from one host to another without being the source of disease', 'Insecticides; mosquito nets; draining stagnant water', 'Malaria (Anopheles mosquito), dengue fever'],
          ['Sexual contact', 'Exchange of body fluids (semen, vaginal fluid, blood) during sexual activity', 'Barrier contraception (condoms); education', 'HIV/AIDS, gonorrhoea, syphilis'],
          ['Blood-to-blood', 'Sharing needles or contaminated blood products', 'Sterile needles; blood screening', 'HIV, hepatitis B']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Case Study: Cholera', level: 3 }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Cholera — A Waterborne Disease',
        text: '<strong>Pathogen:</strong> Vibrio cholerae (bacterium)<br/><strong>Transmission:</strong> Contaminated drinking water or food — the bacteria produce a toxin that causes the intestine to secrete large amounts of water, causing severe diarrhoea and dehydration.<br/><strong>Spread:</strong> Faeces from infected individuals contaminate water sources → other people drink or cook with that water.<br/><strong>Prevention:</strong> Clean water supply, sewage treatment, oral rehydration therapy (ORT), vaccination.<br/><strong>Why it spreads rapidly:</strong> In areas without sanitation, faecal contamination of shared water sources quickly affects many people.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Case Study: Malaria', level: 3 }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Malaria — A Vector-Borne Disease',
        text: '<strong>Pathogen:</strong> Plasmodium (protist)<br/><strong>Vector:</strong> Female Anopheles mosquito (bites infected person → carries Plasmodium → bites new person)<br/><strong>Plasmodium life cycle in brief:</strong> Mosquito injects Plasmodium into blood → travels to liver cells → multiplies → enters red blood cells → destroys them → causes fever, shivering, anaemia.<br/><strong>Prevention:</strong> Insecticide-treated mosquito nets, indoor spraying, anti-malarial drugs, draining stagnant water (mosquito breeding sites), biological control.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Transmission routes of pathogens — summary diagram',
        svg: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <!-- Background -->
  <rect width="700" height="380" fill="#f8fafc" rx="12"/>
  <!-- Title -->
  <text x="350" y="32" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">Routes of Disease Transmission</text>
  <!-- Central infected person -->
  <ellipse cx="350" cy="190" rx="54" ry="54" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="350" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">Infected</text>
  <text x="350" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">Person</text>
  <!-- Droplets node -->
  <ellipse cx="170" cy="90" rx="68" ry="30" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="170" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">Droplet</text>
  <text x="170" y="100" text-anchor="middle" font-size="10" fill="#1d4ed8">Cough / Sneeze</text>
  <line x1="240" y1="155" x2="222" y2="115" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- Direct contact -->
  <ellipse cx="530" cy="90" rx="68" ry="30" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="530" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Direct</text>
  <text x="530" y="100" text-anchor="middle" font-size="10" fill="#065f46">Contact</text>
  <line x1="460" y1="155" x2="478" y2="115" stroke="#10b981" stroke-width="1.5" marker-end="url(#arr2)"/>
  <!-- Food/water -->
  <ellipse cx="100" cy="240" rx="74" ry="30" fill="#fef9c3" stroke="#eab308" stroke-width="1.5"/>
  <text x="100" y="235" text-anchor="middle" font-size="11" font-weight="bold" fill="#713f12">Food /</text>
  <text x="100" y="250" text-anchor="middle" font-size="10" fill="#713f12">Water</text>
  <line x1="220" y1="210" x2="170" y2="238" stroke="#eab308" stroke-width="1.5" marker-end="url(#arr3)"/>
  <!-- Vector -->
  <ellipse cx="350" cy="330" rx="68" ry="30" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="350" y="325" text-anchor="middle" font-size="11" font-weight="bold" fill="#4c1d95">Vector</text>
  <text x="350" y="340" text-anchor="middle" font-size="10" fill="#4c1d95">(e.g. Mosquito)</text>
  <line x1="350" y1="244" x2="350" y2="300" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr4)"/>
  <!-- Sexual contact -->
  <ellipse cx="600" cy="240" rx="74" ry="30" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="600" y="235" text-anchor="middle" font-size="11" font-weight="bold" fill="#831843">Sexual</text>
  <text x="600" y="250" text-anchor="middle" font-size="10" fill="#831843">Contact</text>
  <line x1="480" y1="210" x2="530" y2="238" stroke="#db2777" stroke-width="1.5" marker-end="url(#arr5)"/>
  <!-- Arrow markers -->
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/></marker>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#10b981"/></marker>
    <marker id="arr3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#eab308"/></marker>
    <marker id="arr4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed"/></marker>
    <marker id="arr5" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#db2777"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-5',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Confusing Vector and Host',
        text: 'A <strong>vector</strong> (e.g. mosquito) carries and transmits the pathogen but does not cause disease in itself. The <strong>host</strong> is the organism that is harmed by the pathogen. Do not say the mosquito "causes" malaria — it <em>transmits</em> Plasmodium which causes malaria.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Pathogens are disease-causing microorganisms: bacteria, viruses, fungi, and protists. They are transmitted by droplets, direct contact, contaminated food/water, vectors, and sexual contact. Key examples: cholera (water), malaria (mosquito vector), influenza (droplets), HIV (sexual/blood contact).' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Pathogens = disease-causing microorganisms (bacteria, viruses, fungi, protists). Transmission routes: droplets, contact, contaminated food/water, vectors, sexual contact.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Name four types of pathogen and give one example of a disease caused by each.', answer: 'Bacteria (e.g. cholera caused by Vibrio cholerae), viruses (e.g. AIDS caused by HIV), fungi (e.g. athlete\'s foot caused by Tinea), protists (e.g. malaria caused by Plasmodium).' },
      { id: 'cue-2', blockId: 'tbl-2', prompt: 'What is a vector in disease transmission? Give a specific example.', answer: 'A vector is an animal that carries and transmits a pathogen from one host to another without being the source itself. Example: the female Anopheles mosquito transmits the protist Plasmodium, which causes malaria.' },
      { id: 'cue-3', blockId: 'tbl-2', prompt: 'How does cholera spread, and how can it be prevented?', answer: 'Cholera spreads via contaminated water or food containing Vibrio cholerae. Prevention: safe water supply, sewage treatment, cooking food thoroughly, and vaccination.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'Why are antibiotics effective against bacteria but not viruses?', answer: 'Bacteria are living cells with structures (e.g. cell walls) that antibiotics can target. Viruses are not cells — they are non-living particles that replicate inside host cells, so antibiotics cannot act on them.' },
      { id: 'cue-5', blockId: 'tbl-2', prompt: 'List three measures to reduce the spread of malaria.', answer: 'Insecticide-treated mosquito nets; indoor residual spraying with insecticides; draining stagnant water to eliminate mosquito breeding sites; anti-malarial drugs; biological control.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_10_10_0;
