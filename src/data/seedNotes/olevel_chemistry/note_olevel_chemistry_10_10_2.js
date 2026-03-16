export const note_olevel_chemistry_10_10_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-1-3-water-treatment.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the stages in the treatment of water for domestic use, including screening, sedimentation, filtration, and chlorination.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Water Treatment', level: 2 }
    },
    {
      id: 'svg-water-treatment',
      type: 'svg',
      data: {
        caption: 'The four main stages of water treatment to produce safe drinking water.',
        svg: `<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- River / Reservoir (Source) -->
  <path d="M 20 180 Q 50 190, 80 180 T 140 180 L 140 220 L 20 220 Z" fill="#93c5fd" />
  <text x="80" y="210" font-family="var(--font-sans)" font-size="12" fill="#1d4ed8" text-anchor="middle">Reservoir</text>

  <!-- Pipe from source to screens -->
  <path d="M 140 190 L 170 190 L 170 50 L 210 50" fill="none" stroke="#64748b" stroke-width="8" />

  <!-- Step 1: Screens -->
  <rect x="210" y="30" width="30" height="80" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
  <line x1="220" y1="30" x2="220" y2="110" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="230" y1="30" x2="230" y2="110" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
  
  <rect x="180" y="10" width="80" height="20" rx="4" fill="#3b82f6" />
  <text x="220" y="24" font-family="var(--font-sans)" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">1. Screens</text>
  <text x="220" y="130" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">Removes large</text>
  <text x="220" y="142" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">debris</text>

  <!-- Pipe 1 to 2 -->
  <path d="M 240 90 L 300 90" fill="none" stroke="#64748b" stroke-width="8" />

  <!-- Step 2: Sedimentation -->
  <rect x="300" y="60" width="80" height="80" fill="#bfdbfe" stroke="#94a3b8" stroke-width="2"/>
  <path d="M 300 120 L 380 120 L 380 140 L 300 140 Z" fill="#94a3b8" opacity="0.6"/> <!-- Sediment -->
  <text x="340" y="132" font-family="var(--font-sans)" font-size="10" fill="#334155" text-anchor="middle">Sediment</text>

  <rect x="300" y="30" width="80" height="20" rx="4" fill="#3b82f6" />
  <text x="340" y="44" font-family="var(--font-sans)" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">2. Sedimentation</text>
  <text x="340" y="155" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">Alum added.</text>
  <text x="340" y="167" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">Particles coagulate</text>
  <text x="340" y="179" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">& sink</text>

  <!-- Pipe 2 to 3 -->
  <path d="M 380 70 L 440 70" fill="none" stroke="#64748b" stroke-width="8" />

  <!-- Step 3: Filtration -->
  <rect x="440" y="50" width="70" height="120" fill="#bfdbfe" stroke="#94a3b8" stroke-width="2"/>
  <!-- Sand layer -->
  <rect x="440" y="100" width="70" height="30" fill="#fde047" opacity="0.6"/>
  <!-- Gravel layer -->
  <rect x="440" y="130" width="70" height="40" fill="#d1d5db" />
  <!-- Gravel dots -->
  <circle cx="450" cy="140" r="3" fill="#94a3b8"/><circle cx="460" cy="145" r="4" fill="#94a3b8"/>
  <circle cx="480" cy="138" r="5" fill="#94a3b8"/><circle cx="495" cy="142" r="3" fill="#94a3b8"/>
  <circle cx="455" cy="155" r="3" fill="#94a3b8"/><circle cx="485" cy="155" r="4" fill="#94a3b8"/>
  <circle cx="470" cy="160" r="3" fill="#94a3b8"/><circle cx="500" cy="160" r="4" fill="#94a3b8"/>

  <rect x="435" y="20" width="80" height="20" rx="4" fill="#3b82f6" />
  <text x="475" y="34" font-family="var(--font-sans)" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">3. Filtration</text>
  <text x="475" y="185" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">Sand & gravel</text>
  <text x="475" y="197" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">remove fine</text>
  <text x="475" y="209" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">particles</text>

  <!-- Pipe 3 to 4 -->
  <path d="M 510 160 L 560 160" fill="none" stroke="#64748b" stroke-width="8" />

  <!-- Step 4: Chlorination -->
  <rect x="560" y="110" width="60" height="100" fill="#bfdbfe" stroke="#94a3b8" stroke-width="2"/>
  
  <path d="M 590 60 L 590 100" fill="none" stroke="#16a34a" stroke-width="3" stroke-dasharray="4,2" marker-end="url(#arrow-head-green)"/>
  <rect x="565" y="40" width="50" height="20" rx="4" fill="#86efac" />
  <text x="590" y="54" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Chlorine</text>

  <rect x="550" y="10" width="80" height="20" rx="4" fill="#3b82f6" />
  <text x="590" y="24" font-family="var(--font-sans)" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">4. Chlorination</text>
  <text x="590" y="222" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">Kills bacteria</text>
  <text x="590" y="234" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">(& fluoridation)</text>

  <!-- Final Pipe to Homes -->
  <path d="M 620 180 L 680 180" fill="none" stroke="#64748b" stroke-width="8" marker-end="url(#arrow-head-pipe)" />
  <text x="650" y="170" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="var(--color-text)" text-anchor="middle">To Homes</text>

  <defs>
    <marker id="arrow-head-green" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#16a34a"/>
    </marker>
    <marker id="arrow-head-pipe" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#64748b"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-stages',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Stages in Water Treatment',
        text: '<strong>Stage 1 — Screening:</strong><br/>Large debris (sticks, leaves, fish) removed by mesh screens as water enters the treatment plant.<br/><br/><strong>Stage 2 — Sedimentation:</strong><br/>Water flows slowly into large tanks. Gravity causes larger suspended particles (silt, clay) to sink to the bottom forming sediment. This is made faster by adding <strong>aluminium sulfate Al₂(SO₄)₃</strong> (alum) — causes small particles to clump together (flocculation/coagulation), forming larger flocs that sink more rapidly.<br/><br/><strong>Stage 3 — Filtration:</strong><br/>Water passes through layers of sand and gravel, which filter out remaining fine particles and some bacteria. This produces clear (but not yet safe) water.<br/><br/><strong>Stage 4 — Chlorination:</strong><br/>Small amounts of chlorine gas (Cl₂) or chlorine compounds are added to the water. Chlorine <strong>kills bacteria and microorganisms</strong>, making the water safe to drink. The amount used is carefully controlled to be effective but not harmful.'
      }
    },
    {
      id: 'call-fluor',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Fluoridation (optional in some countries)',
        text: 'Small amounts of fluoride ions (F⁻) may be added to treated water to help prevent tooth decay (dental caries).<br/><br/>This is <strong>not a purification</strong> stage — it is an optional public health addition and is controversial in some regions.'
      }
    },
    {
      id: 'call-warn',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Order matters in exams',
        text: 'Typical exam question: "Describe how water is treated to make it safe to drink."<br/><br/>State ALL stages in order: screening → sedimentation (+ flocculation) → filtration through sand/gravel → chlorination.<br/><br/>The most important stages for safety are <strong>filtration</strong> and <strong>chlorination</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Water treatment stages: 1) Screening (large debris) → 2) Sedimentation/flocculation (Al₂(SO₄)₃ added; particles clump and sink) → 3) Filtration (sand/gravel removes fine particles) → 4) Chlorination (Cl₂ kills bacteria). Optional: fluoridation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Water treatment: screen → sediment/floc (Al₂(SO₄)₃) → filter through sand → chlorinate (kill bacteria).',
    cues: [
      { id: 'cue-1', blockId: 'call-stages', prompt: 'List the four main stages in the treatment of water for domestic use, in order.', answer: '1. Screening (remove large debris). 2. Sedimentation / flocculation (particles settle; Al₂(SO₄)₃ added). 3. Filtration through sand and gravel. 4. Chlorination (kills bacteria).' },
      { id: 'cue-2', blockId: 'call-stages', prompt: 'What is the role of aluminium sulfate in water treatment?', answer: 'Aluminium sulfate causes small suspended particles to coagulate (flocculation), forming larger clumps (flocs) that sink under gravity during sedimentation, making the water clearer.' },
      { id: 'cue-3', blockId: 'call-stages', prompt: 'Why is chlorine added to treated water?', answer: 'Chlorine kills bacteria and microorganisms in the water, making it safe to drink.' }
    ]
  },
  evidence: [],
  mentions: []
};
