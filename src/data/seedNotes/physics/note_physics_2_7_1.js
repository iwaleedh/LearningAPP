export const note_physics_2_7_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Core Practical 2: Investigating <strong>Resistivity</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 2: Investigating <strong>Resistivity</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Core Practical 2: Investigating <strong>Resistivity</strong> Core Practical 2: Investigating <strong>Resistivity</strong> Aims of the Experiment The aim of the experiment is to determine the <strong>resistivity</strong> of a length of wire" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Variables Independent variable = Length, L, of the wire (m) Dependent variable = The <strong>current</strong>, I, through the wire (A) Control variables:" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Voltage</strong> across the wire The material the wire is made from Equipment List Resolution of measuring equipment:" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Metre ruler = 1 mm Micrometer screw gauge = 0.01 mm Voltmeter = 0.1 V Ammeter = 0.01 A" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Method 1." },
      { text: "Measure the diameter of the wire using a micrometer." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "The measurement should be taken between 5−10 times randomly along the wire." }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Calculate the mean diameter from these values 2." },
      { text: "Set up the equipment so the wire is taped or clamped to the ruler with one end of the circuit attached to the wire where the ruler reads 0." }
    ] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [
      { text: "The ammeter is connected in series and the voltmeter in parallel with the wire 3." },
      { text: "Attach the flying lead to the test wire at 0.25 m and set the power supply at a <strong>voltage</strong> of 6.0 V." }
    ] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [
      { text: "Check that this is the <strong>voltage</strong> across the wire on the voltmeter 4." },
      { text: "Read and record the <strong>current</strong> from the ammeter, then switch off the <strong>current</strong> immediately after the reading This is to prevent the wire from heating up and changing the <strong>resistivity</strong>." }
    ] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [
      { text: "5." },
      { text: "Vary the distance between the fixed end of the wire and the flying lead in 0.25 m intervals (0.25 m, 0.50 m, 0.75 etc.) until the full length In this example, a 2.0 m wire is used." }
    ] } },

      {
      id: "svg-101",
      type: "svg",
      data: {
        caption: "Core Practical 2: Circuit setup for measuring resistivity of a wire",
        svg: "<svg viewBox='0 0 400 170' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='170' fill='#0f172a' rx='8'/><text x='200' y='18' font-family='sans-serif' font-size='12' font-weight='bold' fill='#1e293b' text-anchor='middle'>Resistivity Practical — Circuit Diagram</text><!-- Wire along ruler --><rect x='40' y='75' width='240' height='14' fill='#94a3b8' rx='3'/><text x='160' y='85' font-family='sans-serif' font-size='10' fill='#1e293b' text-anchor='middle'>Resistance Wire (taped to ruler)</text><!-- Ruler markings --><line x1='40' y1='92' x2='280' y2='92' stroke='#64748b' stroke-width='1'/><text x='40' y='104' font-family='sans-serif' font-size='9' fill='#475569' text-anchor='middle'>0</text><text x='100' y='104' font-family='sans-serif' font-size='9' fill='#475569' text-anchor='middle'>0.25</text><text x='160' y='104' font-family='sans-serif' font-size='9' fill='#475569' text-anchor='middle'>0.50</text><text x='220' y='104' font-family='sans-serif' font-size='9' fill='#475569' text-anchor='middle'>0.75</text><text x='280' y='104' font-family='sans-serif' font-size='9' fill='#475569' text-anchor='middle'>1.00 m</text><!-- Flying lead -->><circle cx='200' cy='75' r='5' fill='#ef4444'/><line x1='200' y1='70' x2='200' y2='45' stroke='#ef4444' stroke-width='2'/><text x='200' y='40' font-family='sans-serif' font-size='9' fill='#ef4444' text-anchor='middle'>Flying lead (L)</text><!-- Fixed end wire left --><line x1='40' y1='75' x2='40' y2='35' stroke='#334155' stroke-width='2'/><line x1='40' y1='35' x2='120' y2='35' stroke='#334155' stroke-width='2'/><!-- Ammeter --><circle cx='140' cy='35' r='14' fill='#1e293b' stroke='#0ea5e9' stroke-width='2'/><text x='140' y='39' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0ea5e9' text-anchor='middle'>A</text><line x1='154' y1='35' x2='200' y2='35' stroke='#334155' stroke-width='2'/><!-- Power supply --><rect x='200' y='24' width='40' height='22' fill='#78350f' stroke='#f59e0b' stroke-width='2' rx='3'/><text x='220' y='38' font-family='sans-serif' font-size='9' fill='#92400e' text-anchor='middle'>6 V</text><line x1='240' y1='35' x2='280' y2='35' stroke='#334155' stroke-width='2'/><line x1='280' y1='35' x2='280' y2='75' stroke='#334155' stroke-width='2'/><!-- Voltmeter branch --><line x1='40' y1='89' x2='40' y2='145' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='4'/><line x1='40' y1='145' x2='148' y2='145' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='4'/><circle cx='165' cy='145' r='12' fill='#1e293b' stroke='#f59e0b' stroke-width='2'/><text x='165' y='149' font-family='sans-serif' font-size='11' font-weight='bold' fill='#f59e0b' text-anchor='middle'>V</text><line x1='177' y1='145' x2='200' y2='145' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='4'/><line x1='200' y1='145' x2='200' y2='89' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='4'/><text x='320' y='70' font-family='sans-serif' font-size='9' fill='#334155'>R = V / I</text><text x='320' y='84' font-family='sans-serif' font-size='9' fill='#334155'>&#961; = RA / L</text><text x='320' y='98' font-family='sans-serif' font-size='9' fill='#334155'>A = &#960;r&#178;</text></svg>"
      },
      terms: []
    },
    {
      id: "svg-102",
      type: "svg",
      data: {
        caption: "Graph of resistance R against length L — gradient = ρ/A gives resistivity",
        svg: "<svg viewBox='0 0 400 170' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='170' fill='#0f172a' rx='8'/><text x='200' y='16' font-family='sans-serif' font-size='12' font-weight='bold' fill='#1e293b' text-anchor='middle'>R vs L Graph (Resistivity Practical)</text><!-- Axes --><line x1='55' y1='20' x2='55' y2='140' stroke='#334155' stroke-width='2' marker-end='url(#ay)'/><line x1='55' y1='140' x2='360' y2='140' stroke='#334155' stroke-width='2' marker-end='url(#ax)'/><text x='30' y='85' font-family='sans-serif' font-size='11' fill='#334155' text-anchor='middle' transform='rotate(-90,30,85)'>R / &#937;</text><text x='210' y='160' font-family='sans-serif' font-size='11' fill='#334155' text-anchor='middle'>L / m</text><!-- Grid lines --><line x1='55' y1='115' x2='355' y2='115' stroke='#e2e8f0' stroke-width='1'/><line x1='55' y1='90' x2='355' y2='90' stroke='#e2e8f0' stroke-width='1'/><line x1='55' y1='65' x2='355' y2='65' stroke='#e2e8f0' stroke-width='1'/><line x1='55' y1='40' x2='355' y2='40' stroke='#e2e8f0' stroke-width='1'/><!-- Best fit line through origin --><line x1='55' y1='140' x2='345' y2='35' stroke='#6366f1' stroke-width='2.5'/><text x='330' y='30' font-family='sans-serif' font-size='10' fill='#6366f1' text-anchor='middle'>best fit</text><!-- Data points --><circle cx='115' cy='122' r='4' fill='#ef4444'/><circle cx='175' cy='105' r='4' fill='#ef4444'/><circle cx='235' cy='87' r='4' fill='#ef4444'/><circle cx='295' cy='69' r='4' fill='#ef4444'/><circle cx='340' cy='52' r='4' fill='#ef4444'/><!-- Gradient triangle --><line x1='115' y1='122' x2='295' y2='122' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='4'/><line x1='295' y1='122' x2='295' y2='69' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='4'/><text x='205' y='136' font-family='sans-serif' font-size='9' fill='#f59e0b' text-anchor='middle'>&#916;L</text><text x='308' y='100' font-family='sans-serif' font-size='9' fill='#f59e0b'>&#916;R</text><text x='200' y='26' font-family='sans-serif' font-size='10' fill='#6366f1' text-anchor='middle'>gradient = &#916;R/&#916;L = &#961;/A  →  &#961; = gradient &#215; A</text><defs><marker id='ax' markerWidth='6' markerHeight='6' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#334155'/></marker><marker id='ay' markerWidth='6' markerHeight='6' refX='3' refY='0' orient='auto'><path d='M0,6 L3,0 L6,6 Z' fill='#334155'/></marker></defs></svg>"
      },
      terms: []
    },
    { id: 'enr-worked-bulb', type: 'callout', data: { style: 'worked', title: 'Worked Example: Tungsten Filament Bulb', text: 'Tungsten filament: at room temp R≈10Ω. At operating temp ~2700°C: R≈110Ω. <strong>Resistance</strong> increased 11×. At switch-on (cold): surge <strong>current</strong> = 230/10 = 23A. At steady state: 230/110 = 2.1A. This is why bulbs usually fail at switch-on — maximum thermal stress at that moment.' } },
    { id: 'enr-worked-thermistor', type: 'callout', data: { style: 'worked', title: 'Worked Example: NTC <strong>Thermistor</strong>', text: 'NTC <strong>thermistor</strong>: at 0°C R=47kΩ, at 25°C R=10kΩ, at 50°C R=3.4kΩ. Large R variation with temperature makes it useful as medical temperature probe, thermostat sensor, car engine management, phone battery temperature monitoring. Opposite of metals: semiconductor R decreases with temperature.' } },
    { id: 'enr-tip-temp-resistance', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Temperature & <strong>Resistance</strong>', text: 'Exam tip: Metal <strong>resistance</strong> increases with temperature (ions vibrate more, more collisions with electrons). Semiconductor (NTC <strong>thermistor</strong>) <strong>resistance</strong> decreases with temperature (more charge carriers excited). LDR: <strong>resistance</strong> decreases with light <strong>intensity</strong> (<strong>photons</strong> free electrons). Know all three for 6-mark explain questions.' } },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Core Practical 2: Investigating <strong>Resistivity</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
