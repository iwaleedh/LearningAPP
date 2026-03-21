export const note_physics_4_21_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Root-Mean-Square Current & <strong>Potential Difference</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "Root-Mean-Square Current & <strong>Potential Difference</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Induced E.M.F in a Moving Coil Induced E.M.F in a Moving Coil Electromagnetic induction is a phenomenon which occurs when an e.m.f is induced when a conductor moves through a <strong>magnetic field</strong>" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "If there is a change in <strong>magnetic flux</strong> Φ or <strong>magnetic flux</strong> linkage N Φ Mechanical work (from moving the conductor in the field) is transformed into electrical energy Therefore, if attached to a complete circuit, a current will be induced in the conductor" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "This is known as electromagnetic induction and is defined as: The process in which an e.m.f is induced in a closed circuit due to changes in <strong>magnetic flux</strong> (linkage) This can occur either when:" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "A conductor cuts through a <strong>magnetic field</strong> The <strong>magnetic flux</strong> (linkage) through a coil changes, e.g. becomes more or less dense, or changes direction Electromagnetic induction is used in:" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "Electrical generators which convert mechanical energy to electrical energy Transformers which are used in electrical power transmission This phenomenon can easily be demonstrated with a magnet and a coil, or a wire and two magnets" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "Relative Motion between a Coil and a Magnet When a coil is connected to a sensitive voltmeter, a bar magnet can be moved in and out A bar magnet is moved through a coil connected to a voltmeter to induce an e.m.f The observations are:" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "When the bar magnet is not moving, the voltmeter shows a zero reading When the bar magnet is held still inside, or outside, the coil, the rate of change of flux is zero, so, there is no e.m.f induced When the bar magnet begins to move inside the coil, there is a reading on the voltmeter" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "As the bar magnet moves, its <strong>magnetic field</strong> lines ‘cut through' the coil, generating a change in <strong>magnetic flux</strong> ( ΔΦ ) This induces an e.m.f within the coil, shown momentarily by the reading on the voltmeter" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "When the bar magnet is taken back out of the coil, an e.m.f is induced in the opposite direction As the magnet changes direction, the direction of the current changes The voltmeter will momentarily show a reading with the opposite sign" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "Increasing the speed of the magnet induces an e.m.f with a higher magnitude As the speed of the magnet increases, the rate of change of flux increases The direction of the electric current, and e.m.f, induced in the conductor is such that it opposes the change that produces it" }] } },
    {
      id: 'svg-transformer-structure',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="250" height="120" fill="none" stroke="#6B7280" stroke-width="30"/><text x="175" y="105" font-family="Arial" font-size="14" text-anchor="middle" fill="#374151">Soft Iron Core</text><path d="M 20 60 Q 40 50 65 60 T 65 90 T 65 120 T 65 150 L 20 150" fill="none" stroke="#D97706" stroke-width="4"/><path d="M 330 50 Q 310 40 285 50 T 285 70 T 285 90 T 285 110 T 285 130 L 330 130" fill="none" stroke="#EF4444" stroke-width="4"/><text x="35" y="40" font-family="Arial" font-size="14" fill="#B45309">Primary (Np)</text><text x="290" y="30" font-family="Arial" font-size="14" fill="#991B1B">Secondary (Ns)</text></svg>',
        caption: 'Transformer Structure'
      }
    },
    {
      id: 'svg-transformer-equation',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#78350f" rx="10"/><text x="175" y="55" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#92400E">Vp / Vs = Np / Ns</text><text x="175" y="100" font-family="Arial" font-size="16" text-anchor="middle" fill="#4B5563">For an ideal transformer (100% efficient):</text><text x="175" y="125" font-family="Courier New" font-size="20" font-weight="bold" text-anchor="middle" fill="#065F46">Ip Vp = Is Vs</text></svg>',
        caption: 'Transformer Equation'
      }
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="#0f172a" rx="8"/><text x="250" y="20" font-family="Arial" font-size="13" font-weight="bold" text-anchor="middle" fill="#1E293B">AC Waveform: Peak vs R.M.S. Values</text><line x1="60" y1="30" x2="60" y2="210" stroke="#94A3B8" stroke-width="1.5"/><line x1="50" y1="130" x2="480" y2="130" stroke="#94A3B8" stroke-width="1.5"/><text x="484" y="134" font-family="Arial" font-size="11" fill="#64748B">t</text><text x="56" y="28" font-family="Arial" font-size="11" fill="#64748B">V</text><text x="52" y="134" font-family="Arial" font-size="10" text-anchor="end" fill="#94A3B8">0</text><polyline points="60,130 85,99 110,73 135,56 160,50 185,56 210,73 235,99 260,130 285,161 310,187 335,204 360,210 385,204 410,187 435,161 460,130" fill="none" stroke="#6366F1" stroke-width="2.5" stroke-linejoin="round"/><line x1="60" y1="73" x2="450" y2="73" stroke="#10B981" stroke-width="1.5" stroke-dasharray="6,4"/><text x="452" y="70" font-family="Arial" font-size="11" fill="#10B981">Vrms</text><line x1="60" y1="50" x2="158" y2="50" stroke="#6366F1" stroke-width="1" stroke-dasharray="3,3"/><text x="62" y="46" font-family="Arial" font-size="11" fill="#6366F1">V0 (peak)</text><line x1="152" y1="52" x2="152" y2="71" stroke="#F59E0B" stroke-width="1.5"/><text x="250" y="230" font-family="Arial" font-size="12" text-anchor="middle" fill="#475569">Vrms = V0 / √2 ≈ 0.707 × V0  |  Irms = I0 / √2 ≈ 0.707 × I0</text></svg>',
        caption: 'AC sinusoidal waveform: peak voltage V₀ vs R.M.S. voltage V₀/√2'
      }
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding R.M.S. Voltage',
        text: '<b>Given:</b> UK mains supply has a peak voltage V<sub>0</sub> = 325 V.<br><br><b>Find:</b> R.M.S. voltage V<sub>rms</sub><br><br><b>Formula:</b> V<sub>rms</sub> = V<sub>0</sub> ÷ √2<br><br><b>Substituting:</b> V<sub>rms</sub> = 325 ÷ 1.414 ≈ <b>230 V</b><br><br>This explains why UK mains is rated at 230 V r.m.s. even though the peak voltage reaches 325 V. The r.m.s. value is the equivalent steady DC that delivers the same power to a resistive load.'
      }
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: R.M.S. Values & Power Calculations',
        text: 'Always use r.m.s. values when calculating power in AC circuits: <b>P = V<sub>rms</sub> I<sub>rms</sub> = I<sub>rms</sub>² R = V<sub>rms</sub>²/R</b>. The r.m.s. value gives the equivalent DC producing the same heating effect. Note: V<sub>rms</sub> = V<sub>0</sub>/√2 and I<sub>rms</sub> = I<sub>0</sub>/√2 <b>only apply to sinusoidal</b> waveforms — for other waveforms (e.g. square wave) you must calculate r.m.s. from first principles.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Oscilloscope Reads Peak, Not RMS",
        text: "An oscilloscope displays PEAK voltage directly from the trace amplitude. To find power in a resistor, you must convert: Vrms = V\u2080/\u221a2 first, then use P = Vrms\u00b2/R. Many students forget this conversion step."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "UK Mains Voltage Facts for Exam Memory",
        text: "UK mains: 230 V RMS, 325 V peak (\u2248 230\u221a2), 50 Hz frequency, 20 ms period. These values appear frequently in exam questions. Peak-to-peak voltage is 650 V \u2014 remember the danger of the live wire."
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Root-Mean-Square Current & <strong>Potential Difference</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
