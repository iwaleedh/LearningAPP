export const note_olevel_biology_10_10_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/10 Diseases And Immunity/10-1-4-vaccination-and-disease-control.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how vaccines work, describe the concept of herd immunity, and outline other measures used to control the spread of infectious diseases.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'How Vaccines Work', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Vaccine Definition',
        text: 'A <strong>vaccine</strong> is a preparation that stimulates the immune system to produce antibodies and memory cells against a specific pathogen, without causing the full disease.<br/><br/>Vaccines contain one of the following:<br/>• <strong>Weakened (attenuated) live pathogens</strong> — e.g. MMR (measles, mumps, rubella)<br/>• <strong>Dead (killed) pathogens</strong> — e.g. some flu vaccines, cholera vaccine<br/>• <strong>Isolated antigens (protein subunits)</strong> from the pathogen surface — e.g. hepatitis B vaccine<br/>• <strong>Toxoids</strong> — inactivated toxins — e.g. tetanus, diphtheria<br/>• <strong>mRNA</strong> (newer approach) — instructs cells to make an antigen — e.g. COVID-19 mRNA vaccines'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Steps in the Immune Response to a Vaccine', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Vaccine is introduced into the body (by injection, oral dose, or nasal spray).' },
          { text: 'Antigens in the vaccine are recognised by B-lymphocytes as foreign.' },
          { text: 'B-lymphocytes are activated and divide (clonal expansion) — some become plasma cells that secrete antibodies; others become <strong>memory B-cells</strong>.' },
          { text: 'Antibodies bind to vaccine antigens — clearing them from the body.' },
          { text: 'Memory B-cells remain in the body long-term.' },
          { text: 'If the real pathogen is encountered later, memory cells rapidly produce large quantities of antibodies → pathogen is destroyed before disease develops.' }
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'How vaccination leads to protection: vaccine antigens trigger memory cell production',
        svg: `<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="680" height="310" fill="#0f172a" rx="12"/>
  <text x="340" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">How Vaccination Works</text>
  <!-- Step boxes -->
  <!-- 1 Vaccine injected -->
  <rect x="20" y="48" width="110" height="68" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="75" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">1. Vaccine</text>
  <text x="75" y="84" text-anchor="middle" font-size="9" fill="#1e40af">injected — contains</text>
  <text x="75" y="97" text-anchor="middle" font-size="9" fill="#1e40af">antigens (safe)</text>
  <!-- arrow -->
  <line x1="130" y1="82" x2="152" y2="82" stroke="#475569" stroke-width="1.5" marker-end="url(#vax)"/>
  <!-- 2 Lymphocytes activated -->
  <rect x="155" y="48" width="120" height="68" rx="8" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <text x="215" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">2. B-lymphocytes</text>
  <text x="215" y="84" text-anchor="middle" font-size="9" fill="#065f46">recognise antigen</text>
  <text x="215" y="97" text-anchor="middle" font-size="9" fill="#065f46">→ divide &amp; multiply</text>
  <line x1="275" y1="82" x2="297" y2="82" stroke="#475569" stroke-width="1.5" marker-end="url(#vax)"/>
  <!-- 3 Split into plasma + memory -->
  <rect x="300" y="48" width="120" height="68" rx="8" fill="#44370a" stroke="#eab308" stroke-width="1.5"/>
  <text x="360" y="66" text-anchor="middle" font-size="10" font-weight="bold" fill="#713f12">3. Differentiate</text>
  <text x="360" y="80" text-anchor="middle" font-size="9" fill="#713f12">→ Plasma cells</text>
  <text x="360" y="93" text-anchor="middle" font-size="9" fill="#713f12">(make antibodies)</text>
  <text x="360" y="106" text-anchor="middle" font-size="9" fill="#713f12">+ Memory cells</text>
  <line x1="420" y1="82" x2="442" y2="82" stroke="#475569" stroke-width="1.5" marker-end="url(#vax)"/>
  <!-- 4 Memory cells persist -->
  <rect x="445" y="48" width="115" height="68" rx="8" fill="#2d1b69" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="502" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#4c1d95">4. Memory cells</text>
  <text x="502" y="84" text-anchor="middle" font-size="9" fill="#4c1d95">persist in blood</text>
  <text x="502" y="97" text-anchor="middle" font-size="9" fill="#4c1d95">for years</text>
  <!-- Second phase label -->
  <line x1="40" y1="145" x2="640" y2="145" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="340" y="162" text-anchor="middle" font-size="11" fill="#64748b" font-style="italic">Later — real pathogen encountered</text>
  <!-- 5 Real pathogen -->
  <rect x="20" y="175" width="115" height="60" rx="8" fill="#3d1212" stroke="#dc2626" stroke-width="1.5"/>
  <text x="77" y="197" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">5. Real pathogen</text>
  <text x="77" y="211" text-anchor="middle" font-size="9" fill="#991b1b">enters body with</text>
  <text x="77" y="224" text-anchor="middle" font-size="9" fill="#991b1b">same antigen</text>
  <line x1="135" y1="205" x2="157" y2="205" stroke="#475569" stroke-width="1.5" marker-end="url(#vax)"/>
  <!-- 6 Memory cells activate fast -->
  <rect x="160" y="175" width="140" height="60" rx="8" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <text x="230" y="197" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">6. Memory cells</text>
  <text x="230" y="211" text-anchor="middle" font-size="9" fill="#065f46">rapidly divide →</text>
  <text x="230" y="224" text-anchor="middle" font-size="9" fill="#065f46">massive antibody surge</text>
  <line x1="300" y1="205" x2="322" y2="205" stroke="#475569" stroke-width="1.5" marker-end="url(#vax)"/>
  <!-- 7 Pathogen destroyed -->
  <rect x="325" y="175" width="130" height="60" rx="8" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="390" y="197" text-anchor="middle" font-size="10" font-weight="bold" fill="#14532d">7. Antibodies</text>
  <text x="390" y="211" text-anchor="middle" font-size="9" fill="#14532d">destroy pathogen</text>
  <text x="390" y="224" text-anchor="middle" font-size="9" fill="#14532d">before disease develops</text>
  <!-- Protected label -->
  <rect x="475" y="182" width="100" height="46" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="525" y="202" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">PROTECTED</text>
  <text x="525" y="218" text-anchor="middle" font-size="10" fill="#14532d">No disease</text>
  <line x1="455" y1="205" x2="473" y2="205" stroke="#475569" stroke-width="1.5" marker-end="url(#vax)"/>
  <defs>
    <marker id="vax" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#475569"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Herd Immunity', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Herd Immunity',
        text: '<strong>Herd immunity</strong> occurs when a sufficiently high proportion of a population is immune to a disease (through vaccination or prior infection) that the pathogen can no longer spread efficiently, protecting even those who are not immune (e.g. newborns, immunocompromised individuals).<br/><br/>The <strong>herd immunity threshold</strong> varies by disease — measles requires ~95% immunity; polio ~80–85%. If vaccination rates drop below this threshold, outbreaks can occur.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Types of vaccine and examples',
        headers: ['Vaccine Type', 'Contains', 'Advantages', 'Example'],
        rows: [
          ['Live attenuated', 'Weakened but live pathogen', 'Strong, long-lasting immune response; often single dose', 'MMR (measles, mumps, rubella), oral polio'],
          ['Killed/inactivated', 'Dead pathogen', 'Safer — cannot cause disease; stable storage', 'Flu vaccine (injected), cholera'],
          ['Subunit / protein', 'Purified antigens from pathogen surface', 'Very safe; no pathogen material', 'Hepatitis B, whooping cough component'],
          ['Toxoid', 'Inactivated toxin', 'Protects against toxin-mediated diseases', 'Tetanus, diphtheria'],
          ['mRNA', 'mRNA instructing cells to make antigen', 'Rapid development; no pathogen needed', 'COVID-19 (Pfizer, Moderna)']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Other Methods of Disease Control', level: 2 }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Non-vaccine methods of controlling infectious disease',
        headers: ['Method', 'How it reduces spread', 'Example application'],
        rows: [
          ['Hygiene (hand washing)', 'Removes pathogens from hands, breaking transmission chains', 'Preventing spread of Salmonella, norovirus'],
          ['Safe water supply and sewage treatment', 'Prevents faecal contamination of drinking water', 'Eliminating cholera, typhoid'],
          ['Vector control', 'Reduces mosquito populations or exposure; insecticide-treated nets, draining stagnant water, indoor spraying', 'Malaria, dengue fever control'],
          ['Quarantine / isolation', 'Separates infected individuals to prevent contact with others', 'Ebola, COVID-19, TB management'],
          ['Antibiotic treatment', 'Kills or inhibits bacterial pathogens in infected individuals, reducing infectious period', 'TB, cholera, bacterial STIs'],
          ['Education and behaviour change', 'Informs population about transmission routes and prevention', 'HIV prevention, safe food handling'],
          ['Food safety regulations', 'Ensures proper cooking, storage, hygiene in food preparation', 'Preventing Salmonella, E. coli outbreaks']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Evaluating Disease Control Strategies',
        text: 'When asked to evaluate vaccination programmes, consider:<br/>• <strong>Benefits:</strong> individual protection, herd immunity, eradication possible (e.g. smallpox was eradicated by vaccination).<br/>• <strong>Limitations:</strong> cost of mass programmes, cold storage requirements, some people cannot be vaccinated (immunocompromised), anti-vaccine attitudes reducing uptake, some pathogens mutate rapidly (e.g. flu virus needs annual vaccine).'
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Vaccines and Antibiotics',
        text: 'Vaccines prevent <strong>viral and bacterial</strong> diseases. Antibiotics only treat <strong>bacterial</strong> infections. Vaccines do not treat existing infections — they <strong>prevent</strong> future ones by preparing the immune system. Never say "antibiotics cure viral diseases" — they do not.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Vaccines contain antigens (from weakened/dead pathogens or isolated proteins) that stimulate antibody production and memory cell formation without causing disease. Herd immunity protects the whole community when enough individuals are vaccinated. Other control measures include hygiene, safe water, vector control, quarantine, and antibiotic treatment.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Vaccines contain antigens → stimulate memory cells → long-term protection. Herd immunity = high enough % vaccinated → disease cannot spread. Other controls: hygiene, clean water, vector control, quarantine.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'List four types of vaccine with an example of each.', answer: 'Live attenuated (MMR), killed/inactivated (flu vaccine), subunit/protein (hepatitis B), toxoid (tetanus), mRNA (COVID-19 — if listed). Any four accepted.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Outline the six steps by which a vaccine provides protection when the real pathogen is later encountered.', answer: '1. Vaccine antigens injected. 2. B-lymphocytes recognise antigens and are activated. 3. Differentiate into plasma cells (antibodies) and memory B-cells. 4. Memory cells persist. 5. Real pathogen encountered — memory cells rapidly divide. 6. Large antibody surge destroys pathogen before disease develops.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Explain what herd immunity means and why it is important.', answer: 'Herd immunity occurs when enough of the population is immune (usually ≥80–95% depending on disease) so the pathogen cannot spread effectively, protecting even unvaccinated individuals (e.g. newborns or immunocompromised people who cannot receive vaccines).' },
      { id: 'cue-4', blockId: 'tbl-2', prompt: 'State three methods of controlling malaria other than vaccination.', answer: 'Insecticide-treated mosquito nets; draining stagnant water (removes breeding sites); indoor residual spraying with insecticides; anti-malarial drugs; biological control (e.g. introducing predators of mosquito larvae). Any three accepted.' },
      { id: 'cue-5', blockId: 'call-4', prompt: 'Why can\'t antibiotics be used to treat malaria or influenza?', answer: 'Malaria is caused by a protist (Plasmodium) and influenza by a virus. Antibiotics only target bacterial structures (e.g. bacterial cell walls or ribosomes). They have no effect on viruses or protists.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_10_10_3;
