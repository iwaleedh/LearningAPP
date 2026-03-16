export const note_physics_4_19_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Energy Stored by a <strong>Capacitor</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "Energy Stored by a <strong>Capacitor</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Energy Stored by a <strong>Capacitor</strong> Energy Stored by a <strong>Capacitor</strong> When charging a <strong>capacitor</strong>, the power supply 'pushes' electrons to one of the metal plates" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "It therefore does work on the electrons and electrical energy becomes stored on the plates The power supply 'pulls' electrons off of the other metal plate, attracting them to the positive terminal" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "This leaves one side positively charged, while the other side becomes negatively charged Hence, in this way, charge is 'stored' by the <strong>capacitor</strong> Gradually, this stored charge builds up" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Adding more electrons to the negative plate at first is relatively easy since there is little repulsion As the charge of the negative plate increases, i.e., becomes more negatively charged, the force of repulsion between the electrons on the plate and the new electrons being" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "pushed onto it increases This means a greater amount of work must be done to increase the charge on the negative plate or in other words: The <strong>potential difference</strong> across the <strong>capacitor</strong> increases as the amount of charge" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "increases As the charge on the negative plate builds up, more work needs to be done to add more charge Alternative Equations for Energy Stored" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "The energy stored by a <strong>capacitor</strong> is given by: W =1 2QV Substituting the charge Q with the <strong>capacitance</strong> equation Q = CV, the energy stored can" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "also be calculated by the following equation: W =1 2CV2 By substituting the <strong>potential difference</strong> V, the energy stored can also be defined in" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "terms of just the charge stored Q and the <strong>capacitance</strong>, C: W =Q2 2C Worked Example" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "Calculate the change in the energy stored in a <strong>capacitor</strong> of <strong>capacitance</strong> 1500 μ F when the <strong>potential difference</strong> across the <strong>capacitor</strong> changes from 10 V to 30 V." }] } },
    {
      id: 'svg-energy-capacitor',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="50,150 50,30 50,150 250,150" fill="none" stroke="#000" stroke-width="2"/><line x1="50" y1="150" x2="200" y2="50" stroke="#3B82F6" stroke-width="3"/><text x="25" y="90" font-family="Arial" font-size="14" transform="rotate(-90 25,90)">V (Volts)</text><text x="150" y="170" font-family="Arial" font-size="14">Q (Coulombs)</text><polygon points="50,150 200,150 200,50" fill="#93C5FD" fill-opacity="0.5"/><text x="140" y="125" font-family="Arial" font-size="14" fill="#1E3A8A">Area = Energy (W)</text></svg>',
        caption: 'Energy Stored in a Capacitor'
      }
    },
    {
      id: 'svg-energy-formulae',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#F8FAFC" rx="10"/><text x="175" y="40" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#1E3A8A">Energy Stored (W)</text><text x="175" y="75" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 Q V</text><text x="175" y="105" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 C V&sup2;</text><text x="175" y="135" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 Q&sup2; / C</text></svg>',
        caption: 'Energy Formulas'
      }
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><text x="120" y="18" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#1E3A8A">Q&#8211;V Graph (Energy Stored)</text><line x1="30" y1="210" x2="30" y2="32" stroke="#374151" stroke-width="1.5"/><line x1="30" y1="210" x2="215" y2="210" stroke="#374151" stroke-width="1.5"/><text x="24" y="28" font-family="Arial" font-size="12" text-anchor="end" fill="#374151">Q</text><text x="222" y="214" font-family="Arial" font-size="12" fill="#374151">V</text><line x1="30" y1="210" x2="195" y2="55" stroke="#3B82F6" stroke-width="2.5"/><polygon points="30,210 195,210 195,55" fill="#BFDBFE" fill-opacity="0.5"/><line x1="195" y1="210" x2="195" y2="214" stroke="#374151" stroke-width="1.5"/><text x="195" y="226" font-family="Arial" font-size="10" text-anchor="middle" fill="#374151">V&#8320;</text><line x1="26" y1="55" x2="30" y2="55" stroke="#374151" stroke-width="1.5"/><text x="22" y="59" font-family="Arial" font-size="10" text-anchor="end" fill="#374151">Q&#8320;</text><text x="80" y="130" font-family="Arial" font-size="11" text-anchor="middle" fill="#3B82F6">Q = CV</text><text x="165" y="182" font-family="Arial" font-size="10" text-anchor="middle" fill="#1E3A8A">Area = &#189;Q&#8320;V&#8320;</text><text x="165" y="194" font-family="Arial" font-size="10" text-anchor="middle" fill="#10B981">= Energy stored</text><text x="115" y="235" font-family="Arial" font-size="10" text-anchor="middle" fill="#374151">Area of triangle = energy stored in capacitor</text><line x1="235" y1="18" x2="235" y2="228" stroke="#D1D5DB" stroke-width="1.5" stroke-dasharray="5,3"/><text x="368" y="18" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#1E3A8A">Three Equivalent Formulae</text><rect x="308" y="38" width="120" height="36" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/><text x="368" y="56" font-family="Arial" font-size="13" font-weight="bold" text-anchor="middle" fill="#1E3A8A">E = &#189;QV</text><text x="368" y="70" font-family="Arial" font-size="9" text-anchor="middle" fill="#374151">area of Q&#8211;V triangle</text><line x1="342" y1="74" x2="302" y2="116" stroke="#6B7280" stroke-width="1.5"/><rect x="258" y="116" width="96" height="36" rx="6" fill="#F0FDF4" stroke="#10B981" stroke-width="1.5"/><text x="306" y="133" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#065F46">E = &#189;CV&#178;</text><text x="306" y="146" font-family="Arial" font-size="9" text-anchor="middle" fill="#374151">sub Q = CV</text><line x1="394" y1="74" x2="434" y2="116" stroke="#6B7280" stroke-width="1.5"/><rect x="386" y="116" width="96" height="36" rx="6" fill="#FFF7ED" stroke="#F59E0B" stroke-width="1.5"/><text x="434" y="133" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#92400E">E = Q&#178;/2C</text><text x="434" y="146" font-family="Arial" font-size="9" text-anchor="middle" fill="#374151">sub V = Q/C</text><text x="281" y="170" font-family="Arial" font-size="9" text-anchor="middle" fill="#065F46">use when V known</text><text x="452" y="170" font-family="Arial" font-size="9" text-anchor="middle" fill="#92400E">use when Q known</text><text x="368" y="198" font-family="Arial" font-size="10" text-anchor="middle" fill="#374151">All three are equivalent.</text><text x="368" y="214" font-family="Arial" font-size="10" text-anchor="middle" fill="#374151">1 F = 1 C/V = 1 C&#178;/J</text></svg>',
        caption: 'Q–V graph (area = energy stored) and three equivalent energy formulae'
      }
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Change in Energy Stored (C = 1500 μF)',
        text: 'C = 1500 μF = 1.5 × 10<sup>-3</sup> F<br><br><strong>Initial energy (V<sub>1</sub> = 10 V):</strong><br>E<sub>1</sub> = ½CV<sub>1</sub><sup>2</sup> = ½ × 1.5 × 10<sup>-3</sup> × 10<sup>2</sup> = 7.5 × 10<sup>-2</sup> J = 0.075 J<br><br><strong>Final energy (V<sub>2</sub> = 30 V):</strong><br>E<sub>2</sub> = ½CV<sub>2</sub><sup>2</sup> = ½ × 1.5 × 10<sup>-3</sup> × 30<sup>2</sup> = ½ × 1.5 × 10<sup>-3</sup> × 900 = 0.675 J<br><br><strong>Change in energy stored:</strong><br>ΔE = E<sub>2</sub> − E<sub>1</sub> = 0.675 − 0.075 = <strong>0.60 J</strong><br><br>Note: tripling V (×3) increases energy by factor 9 (×3<sup>2</sup> = 9), consistent with E ∝ V<sup>2</sup>.'
      }
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips: Energy in Capacitors',
        text: '<strong>Work done by supply vs energy stored:</strong> When charging from 0 to V, the supply does work W = QV, but only ½QV is stored. The remaining ½QV is dissipated as heat — even in ideal connecting wires.<br><br><strong>Choosing the right formula:</strong><br>• Use <strong>E = ½CV<sup>2</sup></strong> when V is given (most common in exams).<br>• Use <strong>E = Q<sup>2</sup>/2C</strong> when Q is given and V is unknown.<br>• Use <strong>E = ½QV</strong> for the area-under-graph approach.<br><br><strong>E ∝ V<sup>2</sup>:</strong> doubling V quadruples energy; tripling V gives ×9 energy. Energy is not proportional to V.'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Energy Stored by a <strong>Capacitor</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
