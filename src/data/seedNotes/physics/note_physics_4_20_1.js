export const note_physics_4_20_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Magnetic Force on a Charged Particle" } },
    { id: 'head-1', type: 'heading', data: { text: "Magnetic Force on a Charged Particle", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "Magnetic Force on a Charged Particle Magnetic Force on a Charged Particle The magnetic force on an isolated moving charged particle, such as a proton, is given by the equation:" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "F = BQv Where: F = magnetic force on the particle (N) B = <strong>magnetic flux</strong> density</strong> (T)" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "Q = charge of the particle (C) v = speed of the particle (m s) This is the maximum force on the charged particle, when F, B and v are mutually perpendicular" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Therefore if a particle travels parallel to a <strong>magnetic field</strong>, it will not experience a magnetic force Current is the rate of flow of positive charge This means that the direction of the 'current' for a flow of negative charge (e.g. an" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "electron beam) is in the opposite direction to its motion If the charged particle is moving at an angle  θ to the <strong>magnetic field</strong> lines, then the size of the magnetic force F is given by the equation: F = BQv sin θ" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "This equation shows that: The size of the magnetic force is zero if the angle θ is zero (i.e. the particle moves parallel to the field lines) The size of the magnetic force is maximum if the angle θ is 90° (i.e. the particle" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "moves perpendicular to field lines)-1 Worked Example A beta particle is incident at 70° to a <strong>magnetic field</strong> of flux density 0.5 mT, travelling at Calculate:" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "a) The magnitude of the magnetic force on the beta particle b) The magnitude of the maximum possible force on a beta particle in this <strong>magnetic field</strong>, travelling with the same speed Answer:" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "Part (a) Step 1: Write out the known quantities <strong>Magnetic flux</strong> density</strong> B = 0.5 mT = 0.5 × 10  T Speed v = 1.5 × 10 m s" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "Angle  θ between the flux and the velocity = 70° Step 2: Substitute quantities into the equation for magnetic force on a charged particle A beta particle is an electron" }] } },
    {
      id: 'svg-force-formula-wire',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#0f172a" rx="10"/><text x="175" y="50" font-family="Arial" font-size="32" font-weight="bold" text-anchor="middle" fill="#1E40AF">F = B I l sin(&theta;)</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">B = Magnetic flux density (Tesla)</text><text x="175" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">I = Current (Amps), l = Length (m)</text><text x="175" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">&theta; = Angle between wire and field</text></svg>',
        caption: 'Magnetic Force on a Wire'
      }
    },
    {
      id: 'svg-force-formula-charge',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#44370a" rx="10"/><text x="175" y="50" font-family="Arial" font-size="32" font-weight="bold" text-anchor="middle" fill="#065F46">F = B Q v</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">B = Magnetic flux density (Tesla)</text><text x="175" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Q = Charge (Coulombs)</text><text x="175" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">v = Velocity (m/s)</text></svg>',
        caption: 'Magnetic Force on a Charge'
      }
    },
    {
      id: 'enr-svg-flux',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg"><defs><marker id="bArrF" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#3B82F6"/></marker></defs><rect width="480" height="260" fill="#0f172a" rx="8"/><line x1="240" y1="0" x2="240" y2="260" stroke="#E2E8F0" stroke-width="1.5"/><text x="120" y="18" font-family="Arial" font-size="10" text-anchor="middle" fill="#6B7280">&#x03B8; = 0&#xB0;: &#x03A6; = BA (max flux)</text><ellipse cx="120" cy="140" rx="40" ry="70" fill="none" stroke="#B45309" stroke-width="3"/><line x1="10" y1="100" x2="222" y2="100" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArrF)"/><line x1="10" y1="140" x2="222" y2="140" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArrF)"/><line x1="10" y1="180" x2="222" y2="180" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArrF)"/><text x="228" y="143" font-family="Arial" font-size="12" fill="#3B82F6">B</text><text x="120" y="230" font-family="Arial" font-size="10" text-anchor="middle" fill="#4B5563">N&#x03A6; = NBA (flux linkage max)</text><text x="360" y="18" font-family="Arial" font-size="10" text-anchor="middle" fill="#6B7280">&#x03B8; = 90&#xB0;: &#x03A6; = 0 (min flux)</text><line x1="360" y1="70" x2="360" y2="210" stroke="#B45309" stroke-width="5"/><line x1="250" y1="100" x2="468" y2="100" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArrF)"/><line x1="250" y1="140" x2="468" y2="140" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArrF)"/><line x1="250" y1="180" x2="468" y2="180" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#bArrF)"/><text x="473" y="143" font-family="Arial" font-size="12" fill="#3B82F6">B</text><text x="360" y="230" font-family="Arial" font-size="10" text-anchor="middle" fill="#4B5563">N&#x03A6; = 0 (coil parallel to B)</text><text x="240" y="250" font-family="Arial" font-size="10" text-anchor="middle" fill="#4B5563">&#x03A6; = BAcos&#x03B8; — flux linkage = N&#x03A6;</text></svg>',
        caption: 'Magnetic flux: Φ = BAcosθ. Flux linkage = NΦ'
      }
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Flux and Flux Linkage Calculation',
        text: 'A coil has N = 200 turns, area A = 4.0 × 10⁻³ m², in field B = 0.25 T. (a) θ = 0° (B perpendicular to coil face): Φ = BAcosθ = 0.25 × 4.0 × 10⁻³ × cos 0° = 1.0 × 10⁻³ Wb. Flux linkage NΦ = 200 × 1.0 × 10⁻³ = 0.20 Wb turns. (b) θ = 30°: Φ = 0.25 × 4.0 × 10⁻³ × cos 30° = 8.66 × 10⁻⁴ Wb. NΦ = 200 × 8.66 × 10⁻⁴ = 0.173 Wb turns.'
      }
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Flux θ Convention',
        text: 'In Φ = BAcosθ, θ is the angle between B and the normal to the coil face (not the coil plane). Flux is maximum (Φ = BA) when B is perpendicular to coil face (θ = 0°). Flux is zero when B is parallel to coil face (θ = 90°). Flux linkage = NΦ (unit: Wb turns). 1 Wb = 1 T m². Apply Faraday\'s law: EMF = −Δ(NΦ)/Δt.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Flux Angle Convention Trap",
        text: "In \u03a6 = BAcos\u03b8, \u03b8 is the angle between B and the NORMAL to the coil face, NOT the angle between B and the coil plane itself. Maximum flux (\u03a6 = BA) when B is perpendicular to coil face (\u03b8 = 0\u00b0); zero flux when parallel to face (\u03b8 = 90\u00b0)."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Flux vs Flux Linkage Units",
        text: "Flux \u03a6 is measured in Weber (Wb); flux linkage N\u03a6 is measured in Wb turns. When exam questions give data for flux, multiply by N before applying Faraday's law: \u03b5 = \u2212N(\u0394\u03a6/\u0394t) or \u03b5 = \u2212\u0394(N\u03a6)/\u0394t."
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Magnetic Force on a Charged Particle' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
