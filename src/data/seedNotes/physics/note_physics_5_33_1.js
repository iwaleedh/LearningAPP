export const note_physics_5_33_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe the experimental procedure for Core Practical 16: investigating resonance in a mechanical system; plot amplitude vs driving frequency graphs; identify the resonant frequency; explain the effect of damping on resonance curves" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 16: Investigating Resonance", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "Resonance occurs when a driven oscillating system is forced at its natural frequency f₀." },
      { text: "At resonance, energy is transferred most efficiently from the driver to the oscillator, causing the amplitude to reach a maximum." },
      { text: "This practical investigates how the steady-state amplitude of a driven oscillator varies with driving frequency, and examines how damping affects the resonance peak." },
      { text: "The typical system used is a mass on a spring driven by a mechanical oscillator (vibration generator), or a Barton's pendulum arrangement." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Theory: Forced Oscillations and Resonance When a system with natural frequency f₀ is driven at frequency f_d: If f_d < f₀: the system oscillates in phase with the driver; amplitude is below maximum. If f_d = f₀ (resonance): amplitude is maximum; phase difference between displacement and driver force is π/2 (90°). If f_d > f₀: the system oscillates approximately in antiphase (180° out of phase) with the driver; amplitude decreases. The resonant frequency of an undamped system is f₀ = (1/2π)√(k/m) for a mass-spring." }] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="175" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Resonance Curves: Effect of Damping</text><line x1="30" y1="150" x2="375" y2="150" stroke="#212529" stroke-width="2"/><line x1="30" y1="150" x2="30" y2="25" stroke="#212529" stroke-width="2"/><text x="205" y="165" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Driving frequency f_d</text><text x="14" y="90" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle" transform="rotate(-90 14,90)">Amplitude</text><line x1="200" y1="150" x2="200" y2="20" stroke="#adb5bd" stroke-width="1" stroke-dasharray="2,2"/><text x="200" y="170" font-family="sans-serif" font-size="9" fill="#868e96" text-anchor="middle">f₀</text><path d="M 30 148 Q 100 145 160 130 Q 185 110 200 32 Q 215 110 240 130 Q 290 145 375 148" stroke="#fa5252" stroke-width="2.5" fill="none"/><text x="355" y="145" font-family="sans-serif" font-size="8" fill="#c92a2a">Light damping</text><path d="M 30 148 Q 100 140 160 122 Q 180 108 200 72 Q 220 108 250 122 Q 310 140 375 148" stroke="#339af0" stroke-width="2" fill="none"/><text x="355" y="133" font-family="sans-serif" font-size="8" fill="#1864ab">Medium damp.</text><path d="M 30 147 Q 120 138 165 118 Q 185 110 200 98 Q 220 110 250 118 Q 320 138 375 147" stroke="#40c057" stroke-width="2" fill="none"/><text x="355" y="120" font-family="sans-serif" font-size="8" fill="#2b8a3e">Heavy damp.</text><text x="200" y="38" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">At f₀: max amplitude</text><text x="200" y="50" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">(lightly damped)</text></svg>', caption: 'Resonance curves: peak at f₀. Light damping: tall, narrow peak. Heavy damping: broad, lower peak, resonant frequency shifts slightly lower.' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Equipment Vibration generator (mechanical oscillator) connected to a signal generator to control frequency." },
      { text: "Mass on a spring (or pendulum) connected to the vibration generator." },
      { text: "Ruler or motion sensor to measure amplitude." },
      { text: "A way to introduce controlled damping: add a card perpendicular to the motion (air damping), or use a magnet and copper tube (eddy current damping), or add mass." },
      { text: "Stroboscope or slow-motion camera can be used to observe phase." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Procedure (1) Determine the natural frequency f₀ of the oscillator by letting it oscillate freely and timing 20 oscillations." },
      { text: "(2) Connect the vibration generator and set it to a frequency well below f₀." },
      { text: "Record the steady-state amplitude (using a ruler or motion sensor)" },
      { text: "(3) Slowly increase the driving frequency in small steps (e.g. 0.2–0.5 Hz increments)" },
      { text: "At each frequency, wait for steady-state and record amplitude." },
      { text: "(4) Continue past the resonant peak until well above f₀." },
      { text: "(5) Plot amplitude vs driving frequency f_d." },
      { text: "(6) Repeat with increased damping (add card or change mass) and compare curves." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="165" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Barton\'s Pendulums Setup</text><line x1="40" y1="35" x2="360" y2="35" stroke="#212529" stroke-width="3"/><line x1="200" y1="35" x2="200" y2="100" stroke="#339af0" stroke-width="2.5"/><circle cx="200" cy="108" r="10" fill="#339af0" stroke="#1864ab" stroke-width="1.5"/><text x="215" y="112" font-family="sans-serif" font-size="9" fill="#1864ab">Driver</text><text x="215" y="124" font-family="sans-serif" font-size="9" fill="#1864ab">(same l as</text><text x="215" y="136" font-family="sans-serif" font-size="9" fill="#1864ab">C = resonance)</text><line x1="100" y1="35" x2="100" y2="72" stroke="#495057" stroke-width="2"/><circle cx="100" cy="80" r="7" fill="#868e96" stroke="#495057" stroke-width="1.5"/><text x="85" y="100" font-family="sans-serif" font-size="8" fill="#495057">short l</text><line x1="145" y1="35" x2="145" y2="85" stroke="#495057" stroke-width="2"/><circle cx="145" cy="93" r="7" fill="#868e96" stroke="#495057" stroke-width="1.5"/><line x1="255" y1="35" x2="255" y2="108" stroke="#495057" stroke-width="2"/><circle cx="255" cy="116" r="7" fill="#868e96" stroke="#495057" stroke-width="1.5"/><line x1="305" y1="35" x2="305" y2="120" stroke="#495057" stroke-width="2"/><circle cx="305" cy="128" r="7" fill="#868e96" stroke="#495057" stroke-width="1.5"/><text x="305" y="148" font-family="sans-serif" font-size="8" fill="#495057" text-anchor="middle">long l</text><text x="200" y="152" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">Pendulum C (same length as driver) oscillates with largest amplitude</text></svg>', caption: "Barton's pendulums: pendulum with same length as driver resonates with largest amplitude; shorter/longer pendulums oscillate with smaller amplitude." } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Effect of Damping on Resonance Curves Light damping: sharp, tall resonance peak; resonant frequency very close to natural frequency f₀." },
      { text: "Medium damping: broader, lower peak; resonant frequency slightly below f₀." },
      { text: "Heavy (critical) damping: very broad, low peak; system barely resonates; acts like it absorbs energy continuously." },
      { text: "At resonance, the phase difference between driver displacement and oscillator displacement is π/2 (90°)" },
      { text: "Above resonance, the phase difference approaches π (180°)" },
      { text: "The bandwidth (width of the peak at amplitude = A_max/√2) increases with damping." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Real-World Applications of Resonance Desirable: musical instruments (strings, air columns, percussion — designed to resonate efficiently)" },
      { text: "MRI scanners use nuclear magnetic resonance (NMR)" },
      { text: "Radio tuners are resonant circuits." },
      { text: "Microwave ovens drive water molecules at resonant frequency." },
      { text: "Undesirable: Tacoma Narrows Bridge (1940) — wind-driven oscillations near structural resonant frequency caused catastrophic collapse." },
      { text: "Earthquake damage to buildings near resonant frequency of seismic waves." },
      { text: "Vehicle suspension must avoid resonance with road surface frequencies." },
      { text: "Engineers deliberately add damping to avoid resonance (e.g. dampers in tall buildings, shock absorbers in cars)." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Points', text: 'Resonance: maximum amplitude when f_d = f₀ (natural frequency). Phase: π/2 at resonance, 0 below, π above. Light damping: tall narrow peak. Heavy damping: broad low peak, resonant frequency shifts slightly lower. Barton\'s pendulums: longest equal-length pendulum resonates. Applications: musical instruments, MRI, radio tuners (desirable); bridges, buildings (undesirable — need damping).' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Describe the experimental procedure for investigating resonance using a driven mass-spring system, including what to measure and plot", checked: false },
      { text: "Sketch amplitude vs driving frequency curves for light and heavy damping, and describe how they differ", checked: false },
      { text: "Give one example each of desirable and undesirable resonance, and explain what is done in the undesirable case to prevent damage", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Forced oscillations: driving at natural frequency f₀ → resonance (maximum amplitude). Phase: 0 below f₀; π/2 at f₀; π above f₀. Resonance curve: plot amplitude vs f_d. Light damping: sharp tall peak at f₀. Heavy damping: broad low peak, peak shifts slightly below f₀. Barton's pendulums demonstrate resonance with same-length pendulum resonating. Real applications: musical instruments (desirable); Tacoma Bridge collapse (undesirable — add damping)." } },
    { id: 'enr-svg-1', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#0f172a"/><g font-family="sans-serif" font-size="10" fill="#495057"><text x="200" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#212529">Phase Angle vs Driving Frequency</text><text x="200" y="193" text-anchor="middle" font-size="9">Driving frequency f_d →</text><text x="42" y="170" text-anchor="middle">0</text><text x="32" y="103" text-anchor="middle">π/2</text><text x="42" y="40" text-anchor="middle">π</text><text x="200" y="186" text-anchor="middle" font-size="9" fill="#868e96">f₀</text></g><line x1="55" y1="175" x2="368" y2="175" stroke="#212529" stroke-width="1.5"/><line x1="55" y1="175" x2="55" y2="28" stroke="#212529" stroke-width="1.5"/><path d="M 60 168 Q 130 165 200 100 Q 270 35 365 32" stroke="#3b82f6" stroke-width="2.5" fill="none"/><line x1="200" y1="28" x2="200" y2="175" stroke="#adb5bd" stroke-width="1" stroke-dasharray="3,3"/></svg>', caption: 'Phase angle of oscillator displacement relative to driver: 0 at low f_d; π/2 at resonance (f_d = f₀); approaches π above f₀.' } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Finding the Resonant Frequency', text: 'A mass-spring system has spring constant k = 15 N m⁻¹ and mass m = 0.6 kg. Find the natural frequency.<br><br>f₀ = (1/2π)√(k/m) = (1/2π)√(15/0.6) = (1/2π)√25 = 5/(2π) ≈ <strong>0.80 Hz</strong>.<br>The vibration generator must be set to 0.80 Hz to drive the system into resonance.' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Phase and Damping Common Mistakes', text: 'The phase difference at resonance is π/2 (90°) — not zero. Below f₀ the oscillator is in phase (≈ 0) with the driver; above f₀ it is in antiphase (≈ π). Damping both lowers and broadens the peak, and shifts maximum amplitude slightly below the undamped f₀.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip: Improving Practical Accuracy",
        text: "In resonance experiments, suggest using a fiducial marker placed exactly at the equilibrium position to help count oscillations, as the mass moves fastest there and is least likely to be obscured."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'What happens to the amplitude and phase of a driven oscillator when the driving frequency equals the natural frequency? What is this condition called?' },
    { id: 'cue-2', blockId: 'para-6', prompt: 'Sketch and describe how the resonance curve changes when damping is increased. What happens to the peak height, width, and position?' },
    { id: 'cue-3', blockId: 'para-7', prompt: 'Give one example of useful resonance and one of harmful resonance. What is done to prevent harmful resonance in engineering?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
