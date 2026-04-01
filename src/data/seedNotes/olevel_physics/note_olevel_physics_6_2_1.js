export const note_olevel_physics_6_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/6 Space Physics/6-2-2-expanding-universe.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe the expanding universe using Hubble's law; explain redshift of galaxies; state implications for the origin of the universe." } },
    { id: 'h-hubble', type: 'heading', data: { text: "Hubble's Observations", level: 2 } },
    { id: 'para-hubble', type: 'paragraph', data: { text: 'In 1929, Edwin Hubble published his landmark observation: <strong>distant galaxies are moving away from us</strong>, and the further away a galaxy is, the faster it is receding. This was determined by measuring the <strong>redshift</strong> of light from these galaxies. Hubble concluded that the universe must be <strong>expanding</strong>.' } },
    { id: 'h-redshift', type: 'heading', data: { text: 'Redshift Explained', level: 2 } },
    { id: 'para-redshift', type: 'paragraph', data: { text: 'When a source of light moves away from an observer, the wavelength of the light is stretched — shifted toward the red (longer wavelength) end of the spectrum. This is called <strong>redshift</strong>. This is an example of the Doppler effect applied to light.' } },
    { id: 'svg-redshift', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 220" width="480" height="220">
  <rect width="480" height="220" fill="#0f172a" rx="8"/>
  <text x="240" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#78350f">Redshift: Light from a Receding Galaxy</text>
  <!-- Expected spectrum from lab -->
  <text x="30" y="55" font-size="10" fill="#1e293b">Lab spectrum</text>
  <text x="30" y="68" font-size="9" fill="#94a3b8">(stationary source)</text>
  <!-- Spectrum bar lab -->
  <defs>
    <linearGradient id="spec-lab" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1d4ed8"/>
      <stop offset="30%" stop-color="#2563eb"/>
      <stop offset="50%" stop-color="#16a34a"/>
      <stop offset="70%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <linearGradient id="spec-red" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1e40af"/>
      <stop offset="20%" stop-color="#1d4ed8"/>
      <stop offset="45%" stop-color="#2563eb"/>
      <stop offset="65%" stop-color="#16a34a"/>
      <stop offset="85%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>
  <rect x="160" y="45" width="280" height="30" fill="url(#spec-lab)" rx="3"/>
  <!-- Dark absorption lines (lab) -->
  <line x1="225" y1="45" x2="225" y2="75" stroke="black" stroke-width="2.5"/>
  <line x1="275" y1="45" x2="275" y2="75" stroke="black" stroke-width="2.5"/>
  <line x1="330" y1="45" x2="330" y2="75" stroke="black" stroke-width="2.5"/>
  <!-- Label: violet to red -->
  <text x="163" y="87" font-size="9" fill="#1d4ed8">violet</text>
  <text x="415" y="87" font-size="9" fill="#dc2626">red</text>
  <!-- Galaxy spectrum (redshifted) -->
  <text x="30" y="125" font-size="10" fill="#1e293b">Galaxy spectrum</text>
  <text x="30" y="138" font-size="9" fill="#94a3b8">(receding source)</text>
  <rect x="160" y="115" width="280" height="30" fill="url(#spec-red)" rx="3"/>
  <!-- Dark absorption lines (shifted right) -->
  <line x1="255" y1="115" x2="255" y2="145" stroke="black" stroke-width="2.5"/>
  <line x1="308" y1="115" x2="308" y2="145" stroke="black" stroke-width="2.5"/>
  <line x1="365" y1="115" x2="365" y2="145" stroke="black" stroke-width="2.5"/>
  <text x="163" y="157" font-size="9" fill="#1d4ed8">violet</text>
  <text x="415" y="157" font-size="9" fill="#dc2626">red</text>
  <!-- Arrows showing shift -->
  <path d="M225,100 L255,110" fill="none" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr2)"/>
  <path d="M275,100 L308,110" fill="none" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr2)"/>
  <path d="M330,100 L365,110" fill="none" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr2)"/>
  <text x="240" y="108" font-size="8" fill="#f59e0b">lines shift toward red end</text>
  <!-- Receding galaxy -->
  <ellipse cx="85" cy="130" rx="30" ry="12" fill="#1e40af" opacity="0.7"/>
  <text x="85" y="126" text-anchor="middle" font-size="8" fill="#1e293b">Galaxy</text>
  <text x="85" y="138" text-anchor="middle" font-size="8" fill="#1e293b">receding →</text>
  <line x1="115" y1="130" x2="148" y2="130" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr2)"/>
  <text x="240" y="195" text-anchor="middle" font-size="10" fill="#94a3b8">Absorption lines shift toward longer wavelengths (red) = galaxy moving away</text>
  <defs>
    <marker id="arr2" markerWidth="7" markerHeight="7" refX="3" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#f59e0b"/>
    </marker>
  </defs>
</svg>`, caption: 'Redshift: absorption lines in galaxy spectra are shifted toward the red end, indicating recession.' } },
    { id: 'h-hubble-law', type: 'heading', data: { text: "Hubble's Law", level: 2 } },
    { id: 'para-hubble2', type: 'paragraph', data: { text: "Hubble found a linear relationship between a galaxy's recession speed and its distance from us:" } },
    { id: 'eq-hubble', type: 'equation', data: { html: 'v = H<sub>0</sub> × d', caption: 'v = recession speed (km/s), H₀ = Hubble constant (≈ 70 km/s per Mpc), d = distance to galaxy (Mpc); 1 Mpc = 3.09 × 10²² m' } },
    { id: 'para-raisin', type: 'paragraph', data: { text: "An analogy: imagine raisins in a rising bread loaf. As the dough expands, every raisin sees every other raisin moving away from it — and the further the raisin, the faster it recedes. There is no special centre to the expansion. This is exactly how the universe expands: <em>every</em> galaxy sees every other galaxy receding." } },
    { id: 'h-implications', type: 'heading', data: { text: 'Implications: Evidence for the Big Bang', level: 2 } },
    { id: 'list-implications', type: 'list', data: { style: 'bullet', items: [
      { text: "If galaxies are moving apart now, then in the past they were closer together." },
      { text: "Going back far enough in time, all matter would have been in one place — the Big Bang." },
      { text: "The rate of expansion can be used to estimate the age of the universe: age ≈ 1/H₀ ≈ 13.8 billion years." },
    ]}},
    { id: 'call-blueshift', type: 'callout', data: { style: 'tip', title: 'Blueshift Exception', text: 'A few nearby galaxies (like Andromeda) show blueshift — their light is shifted toward shorter wavelengths, meaning they are moving toward us. This is due to the random motion of galaxies within our local group, which overcomes the general expansion at small scales.' } },
    { id: 'sum-1', type: 'summary', data: { text: "The universe is expanding: all distant galaxies are receding and the further away a galaxy, the faster it recedes (Hubble's law: v = H₀d). Redshift of light is evidence of recession. Running the expansion backwards implies a Big Bang origin ~13.8 billion years ago." } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: "Hubble's law: v = H₀d. Galaxies recede; faster the further away. Redshift = shifted toward longer wavelengths. Evidence for Big Bang.",
    cues: [
      { id: 'cue-1', blockId: 'para-hubble', prompt: "Summarise Hubble's 1929 discovery.", answer: 'Distant galaxies are moving away from us, and the speed of recession is proportional to distance — the universe is expanding.' },
      { id: 'cue-2', blockId: 'para-redshift', prompt: 'What is redshift and why does it indicate a galaxy is receding?', answer: "When a source moves away, its light wavelength is stretched (Doppler effect), shifting absorption lines toward the red end of the spectrum." },
      { id: 'cue-3', blockId: 'eq-hubble', prompt: "State Hubble's law.", answer: 'v = H₀ × d, where v is recession speed, H₀ is the Hubble constant, and d is the distance to the galaxy.' },
      { id: 'cue-4', blockId: 'para-raisin', prompt: 'Where is the centre of the expanding universe?', answer: "There is no centre — every galaxy sees every other galaxy receding from it, just like raisins in rising bread dough." },
      { id: 'cue-5', blockId: 'list-implications', prompt: "How does the expanding universe imply a Big Bang?", answer: "If galaxies are moving apart now, going backwards in time they must have been closer together — eventually all in one place (the Big Bang)." },
    ],
  },
  evidence: [], mentions: [],
};
