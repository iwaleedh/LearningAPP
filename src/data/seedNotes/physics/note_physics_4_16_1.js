export const note_physics_4_16_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Core Practical 9: Investigating <strong>Impulse</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 9: Investigating <strong>Impulse</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Core Practical 9: Investigating <strong>Impulse</strong> Core Practical 9: Investigating <strong>Impulse</strong> Aims of the Experiment To determine the change in <strong>momentum</strong> of a trolley due to a force acting on it" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "This is known as the <strong>impulse</strong> Variables Independent variable = accelerating mass, m Dependent variable = time taken to pass between two light gates, t" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "Control variables Overall mass of the system (trolley + accelerating masses) Tilt angle of the ramp Trolley and ramp used" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Size of interrupter card Equipment List Apparatus Purpose Dynamics trolley <strong>Momentum</strong> change of the trolley is being investigated" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "Ramp, slightly tilted For the trolley to travel down Bench pulley To pull trolley using the suspended masses String To connect the suspended mass and the trolley over the pulley" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "5 slotted masses (10 g) and hangerTo create the force to accelerate the trolley Light gates and computer or dataloggerTo measure the time taken and velocity of the trolley" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "passing through it Balance To measure the masses Resolution of measuring equipment Balance = 0.01 g" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [
      { text: "Method 1." },
      { text: "Measure the total mass, M, of the trolley and the five 10 g masses using the balance 2." },
      { text: "Set up the equipment: Secure the bench pulley to one end of the runway allowing one end to project over the." }
    ] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "end of the bench Tilt the ramp slightly This is to compensate for friction Place the mass hanger (without the masses on them) on the floor and move the trolley" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "backwards until the string becomes tight, with the mass on the floor Place the light gates at either end of the ramp There should be enough space on the ramp to allow the trolley to clear the light gate at the bottom before hitting the pulley" }] } },

  
    {
      id: 'svg-physics_4_16_1-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="220" fill="#0f172a" rx="8"/>
  <rect x="50" y="160" width="300" height="10" fill="#64748b"/>
  <rect x="100" y="120" width="60" height="40" fill="#3b82f6" rx="4"/>
  <circle cx="115" cy="150" r="10" fill="#334155"/>
  <circle cx="145" cy="150" r="10" fill="#334155"/>
  <rect x="250" y="100" width="20" height="60" fill="#ef4444"/>
  <path d="M 170 140 L 230 140" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)"/>
  <text x="200" y="130" font-family="Arial" font-size="14" fill="#10b981" text-anchor="middle">v</text>
  <text x="260" y="80" font-family="Arial" font-size="12" fill="#ef4444" text-anchor="middle">Force Sensor</text>
  <text x="200" y="30" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Investigating Impulse</text>
  <defs>
    <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
    </marker>
  </defs>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_1'
      }
    },
    {
      id: 'svg-physics_4_16_1-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <path d="M 60 170 L 340 170" stroke="#334155" stroke-width="2"/>
  <path d="M 60 170 L 60 40" stroke="#334155" stroke-width="2"/>
  <path d="M 120 170 L 140 60 L 160 150 L 180 170" stroke="#ef4444" stroke-width="2" fill="none"/>
  <text x="200" y="190" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">Time (s)</text>
  <text x="40" y="105" font-family="Arial" font-size="14" fill="#334155" transform="rotate(-90 40 105)" text-anchor="middle">Force (N)</text>
  <text x="250" y="100" font-family="Arial" font-size="12" fill="#1e293b">Data logger records</text>
  <text x="250" y="120" font-family="Arial" font-size="12" fill="#1e293b">Force vs Time graph</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_1'
      }
    },
    {
      id: 'enr-worked-impulse',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Impulse from Hanging Mass',
        text: 'A trolley (M = 0.50 kg) starts from rest and is pulled by a hanging mass (m = 0.050 kg).<br/>Net force: F = mg = 0.050 × 9.81 ≈ 0.49 N (friction compensated by ramp tilt).<br/>Trolley reaches v = 0.98 m/s in t = 1.0 s.<br/><br/><strong>Impulse</strong>: I = FΔt = 0.49 × 1.0 = <strong>0.49 N s</strong><br/>Change in <strong>momentum</strong>: Δp = MΔv = 0.50 × (0.98 − 0) = <strong>0.49 kg m s<sup>−1</sup></strong><br/><br/>I = Δp ✓  Confirms the <strong>impulse</strong>–<strong>momentum</strong> theorem; data from light gates and known masses verify this experimentally.'
      }
    },
    {
      id: 'enr-svg-ft',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="480" height="260" fill="#0f172a" rx="8"/>
  <line x1="60" y1="205" x2="425" y2="205" stroke="#334155" stroke-width="2"/>
  <line x1="60" y1="205" x2="60" y2="40" stroke="#334155" stroke-width="2"/>
  <text x="245" y="232" font-family="Arial" font-size="12" fill="#334155" text-anchor="middle">Time (s)</text>
  <text x="20" y="130" font-family="Arial" font-size="12" fill="#334155" text-anchor="middle" transform="rotate(-90 20 130)">Force F (N)</text>
  <line x1="142" y1="205" x2="142" y2="211" stroke="#334155" stroke-width="1.5"/>
  <line x1="312" y1="205" x2="312" y2="211" stroke="#334155" stroke-width="1.5"/>
  <text x="142" y="224" font-family="Arial" font-size="12" fill="#334155" text-anchor="middle">t₁</text>
  <text x="312" y="224" font-family="Arial" font-size="12" fill="#334155" text-anchor="middle">t₂</text>
  <rect x="142" y="95" width="170" height="110" fill="#6366f1" opacity="0.18"/>
  <polyline points="60,205 142,205 142,95 312,95 312,205 425,205" fill="none" stroke="#6366f1" stroke-width="3"/>
  <text x="227" y="147" font-family="Arial" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">Impulse</text>
  <text x="227" y="166" font-family="Arial" font-size="12" fill="#4338ca" text-anchor="middle">= F × Δt = Δp</text>
  <line x1="65" y1="95" x2="133" y2="95" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="58" y="99" font-family="Arial" font-size="12" fill="#64748b" text-anchor="end">F</text>
  <rect x="118" y="14" width="218" height="32" fill="#2d1b69" rx="6" stroke="#6366f1" stroke-width="1.5"/>
  <text x="227" y="35" font-family="Arial" font-size="11" fill="#4338ca" text-anchor="middle">Impulse = area under F–t graph = Δp</text>
</svg>`,
        caption: 'Impulse equals the area under a force–time graph'
      }
    },
    {
      id: 'enr-tip-impulse',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Impulse and F–t Graphs',
        text: '<strong>Impulse</strong> = FΔt = Δp (change in <strong>momentum</strong>). Units: N s = kg m s<sup>−1</sup>. Area under F–t graph = <strong>impulse</strong>. If F varies with time: use area (count squares or integrate).<br/><br/>"Explain why crumple zones reduce force" — same Δp, longer Δt → smaller F = Δp / Δt.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Data Logger Advantage",
        text: "Data logger eliminates reaction-time error compared to manual stopwatch timing."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Measurement Errors",
        text: "Card length L and interrupt time \u0394t measurement errors are the main sources of uncertainty \u2014 use precise photogate equipment and check card length before testing."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Core Practical 9: Investigating <strong>Impulse</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
