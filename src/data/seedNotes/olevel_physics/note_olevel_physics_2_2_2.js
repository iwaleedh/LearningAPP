export const note_olevel_physics_2_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-2-3-measuring-shc.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe the experimental method for measuring the specific heat capacity of a solid; identify sources of error; suggest improvements; and calculate c from the results using Q = mcΔθ and P = IV.'
      }
    },
    {
      id: 'h-apparatus',
      type: 'heading',
      data: { text: 'Apparatus and Setup', level: 2 }
    },
    {
      id: 'p-apparatus',
      type: 'paragraph',
      data: {
        text: 'To measure the SHC of a metal such as aluminium, a <strong>cylindrical metal block</strong> with two pre-drilled holes is used. One hole contains a <strong>cartridge heater</strong> connected to a low-voltage power supply and the other contains a <strong>thermometer</strong> or temperature probe. The mass of the block is measured on a balance before the experiment.'
      }
    },
    {
      id: 'list-equipment',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Metal block (e.g. aluminium) with two holes drilled in it' },
          { text: 'Electrical immersion heater (cartridge heater)' },
          { text: 'Thermometer (mercury or digital) or temperature probe' },
          { text: 'Joulemeter <em>or</em> ammeter + voltmeter + stopwatch (to find energy from P × t = I × V × t)' },
          { text: 'Low-voltage power supply (d.c.)' },
          { text: 'Thermal insulation: foam lagging or cotton wool wrapped around the block' }
        ]
      }
    },
    {
      id: 'svg-apparatus',
      type: 'svg',
      data: {
        caption: 'Labelled diagram of the metal block apparatus for measuring SHC',
        svg: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Insulating foam (outer) -->
  <rect x="80" y="80" width="160" height="120" rx="12" fill="#3d2b0a" stroke="#b8a080" stroke-width="2"/>
  <text x="85" y="218" fill="#a07840" font-size="11">Foam insulation</text>

  <!-- Metal block (inner) -->
  <rect x="100" y="95" width="120" height="90" rx="6" fill="#1c3a64" stroke="#6090b8" stroke-width="2"/>
  <text x="115" y="150" fill="#3060a0" font-size="12" font-weight="bold">Metal Block</text>
  <text x="115" y="165" fill="#3060a0" font-size="10">(e.g. aluminium)</text>

  <!-- Heater hole (left) -->
  <rect x="108" y="103" width="18" height="55" rx="3" fill="#e06030" stroke="#a04020" stroke-width="1.5"/>
  <text x="102" y="100" fill="#a04020" font-size="10">Heater</text>

  <!-- Thermometer hole (right) -->
  <rect x="185" y="103" width="12" height="60" rx="3" fill="#0a2e1a" stroke="#40a040" stroke-width="1.5"/>
  <!-- Thermometer bulb -->
  <circle cx="191" cy="163" r="5" fill="#e04040"/>
  <text x="200" y="100" fill="#207020" font-size="10">Thermometer</text>

  <!-- Wires from heater to ammeter / voltmeter / power supply -->
  <!-- Top wire -->
  <line x1="117" y1="103" x2="117" y2="50" stroke="#c44" stroke-width="2"/>
  <line x1="126" y1="103" x2="126" y2="50" stroke="#c44" stroke-width="2"/>

  <!-- Ammeter -->
  <rect x="60" y="20" width="40" height="24" rx="4" fill="#1e293b" stroke="#888" stroke-width="1.5"/>
  <text x="72" y="36" fill="#333" font-size="11" font-weight="bold">A</text>

  <!-- Voltmeter -->
  <rect x="200" y="20" width="40" height="24" rx="4" fill="#1e293b" stroke="#888" stroke-width="1.5"/>
  <text x="212" y="36" fill="#333" font-size="11" font-weight="bold">V</text>

  <!-- Power supply -->
  <rect x="300" y="30" width="100" height="40" rx="6" fill="#0f172a" stroke="#888" stroke-width="1.5"/>
  <text x="315" y="52" fill="#333" font-size="11">Power Supply</text>
  <line x1="117" y1="44" x2="80" y2="44" stroke="#c44" stroke-width="2"/>
  <line x1="100" y1="32" x2="100" y2="44" stroke="#c44" stroke-width="2"/>
  <line x1="126" y1="44" x2="200" y2="44" stroke="#c44" stroke-width="2"/>
  <line x1="240" y1="32" x2="240" y2="44" stroke="#c44" stroke-width="2"/>
  <line x1="240" y1="44" x2="300" y2="44" stroke="#c44" stroke-width="2"/>
  <line x1="400" y1="50" x2="400" y2="90" stroke="#c44" stroke-width="2"/>
  <line x1="117" y1="158" x2="80" y2="158" stroke="#c44" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="80" y1="90" x2="80" y2="158" stroke="#c44" stroke-width="2" stroke-dasharray="4,3"/>

  <!-- Labels -->
  <text x="62" y="16" fill="#555" font-size="10">Ammeter</text>
  <text x="197" y="16" fill="#555" font-size="10">Voltmeter</text>
</svg>`
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Measure the <strong>mass m</strong> of the metal block on a balance.' },
          { text: 'Record the <strong>initial temperature θ₁</strong> from the thermometer.' },
          { text: 'Switch on the heater. Note the ammeter reading <strong>I</strong> and voltmeter reading <strong>V</strong>.' },
          { text: 'Heat for a measured time <strong>t</strong> (e.g. 5 minutes = 300 s), then switch off.' },
          { text: 'Record the <strong>final temperature θ₂</strong> when the thermometer reading steadies.' },
          { text: 'Calculate: energy supplied <strong>Q = I × V × t</strong> (or read directly from joulemeter).' },
          { text: 'Calculate: temperature change <strong>Δθ = θ₂ − θ₁</strong>.' },
          { text: 'Calculate SHC: <strong>c = Q ÷ (m × Δθ)</strong>.' }
        ]
      }
    },
    {
      id: 'eq-power',
      type: 'equation',
      data: {
        html: 'Q = I × V × t &nbsp;&nbsp;→&nbsp;&nbsp; c = <span class="nb-frac"><span class="nb-num">I V t</span><span class="nb-den">m Δθ</span></span>',
        caption: 'I = current (A), V = voltage (V), t = time (s), m = mass (kg), Δθ = temperature change (K)'
      }
    },
    {
      id: 'h-errors',
      type: 'heading',
      data: { text: 'Sources of Error and Improvements', level: 2 }
    },
    {
      id: 'tbl-errors',
      type: 'comparisonTable',
      data: {
        caption: 'Sources of error and suggested improvements',
        headers: ['Source of error', 'Effect on result', 'Improvement'],
        rows: [
          ['Heat loss to surroundings', 'c measured too high (less temperature rise than expected)', 'Wrap block in foam or cotton wool insulation'],
          ['Thermal lag (temperature not uniform throughout block)', 'θ₂ read too early — may be lower than true equilibrium', 'Wait 2–3 min after switching off before recording θ₂'],
          ['Poor thermal contact between heater/thermometer and block', 'Inaccurate Q and θ readings', 'Use thermal paste (heat-sink compound) in the holes'],
          ['Power supply voltage fluctuating', 'Incorrect Q calc if I or V vary', 'Monitor ammeter and voltmeter throughout; average values']
        ]
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculating c from experimental data',
        text: 'A 0.8 kg aluminium block is heated by a 48 W heater for 200 s. The temperature rises from 22 °C to 48 °C.\n\nQ = P × t = 48 × 200 = 9600 J\nΔθ = 48 − 22 = 26 °C\nc = Q ÷ (m × Δθ) = 9600 ÷ (0.8 × 26) = 9600 ÷ 20.8 ≈ 462 J/(kg·K)\n\n(True value for aluminium is 900 J/(kg·K); the low result indicates significant heat loss.)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The measured value of c is nearly always <strong>lower</strong> than the true value because heat is lost to the surroundings — not all the electrical energy goes into the block. If asked why the calculated c is less than the accepted value, state that thermal energy was lost to the surroundings.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'SHC is measured by heating a metal block with an electrical heater, recording I, V, t and temperature rise. c = IVt ÷ (mΔθ). The main error is heat loss to surroundings, which makes the calculated c lower than the true value. Insulating the block reduces this error.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Measure mass, heat electrically (Q = IVt), record temperature rise; c = Q ÷ (mΔθ); insulate to reduce heat loss errors.',
    cues: [
      { id: 'cue-1', blockId: 'p-apparatus', prompt: 'Describe the apparatus needed to measure the specific heat capacity of a metal block.' },
      { id: 'cue-2', blockId: 'eq-power', prompt: 'Write the formula used to calculate the electrical energy supplied to a heater, given current I, voltage V and time t.' },
      { id: 'cue-3', blockId: 'tbl-errors', prompt: 'Give one source of error in the SHC experiment and explain how to reduce it.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'A student calculates a value of c that is much lower than the accepted value. Suggest why.' }
    ]
  },
  evidence: []
};
