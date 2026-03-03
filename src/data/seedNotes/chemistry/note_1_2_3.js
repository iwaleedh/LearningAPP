export const note_chemistry_1_2_3 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the principles of mass spectrometry; interpret a mass spectrum to identify isotopes, calculate relative atomic mass, and understand how a time-of-flight (TOF) mass spectrometer works.'
    }
  }, {
    id: 'h-principle',
    type: 'heading',
    data: {
      text: 'What is Mass Spectrometry?',
      level: 2
    }
  }, {
    id: 'p-principle',
    type: "list",
    data: {
      style: "unordered",
      items: ["Mass spectrometry is an analytical technique that separates ions according to their mass-to-charge ratio (m/z).", "It is used to determine the masses and abundances of isotopes, calculate accurate relative atomic masses, and identify unknown compounds.", "The instrument used is called a mass spectrometer."]
    }
  }, {
    id: 'h-tof',
    type: 'heading',
    data: {
      text: 'Time-of-Flight (TOF) Mass Spectrometer — Four Stages',
      level: 2
    }
  }, {
    id: 'list-stages',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Ionisation — Sample is vaporised. Electrons are removed (electrospray ionisation or electron bombardment) to form positive ions: X → X⁺ + e⁻', 'Acceleration — Positive ions are accelerated by an electric field. All ions gain the same kinetic energy: ½mv² = zV (where V = accelerating voltage, z = charge)', 'Ion drift — Ions travel through a field-free drift tube. Lighter ions travel faster (same KE, less mass → higher velocity)', 'Detection — Ions hit a detector plate. Time of arrival is recorded — lighter ions arrive sooner. Signal intensity ∝ abundance of that isotope']
    }
  }, {
    id: 'svg-tof',
    type: 'svg',
    data: {
      caption: 'Simplified diagram of a time-of-flight mass spectrometer',
      svg: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Sample inlet -->
  <rect x="10" y="60" width="60" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="40" y="78" text-anchor="middle" fill="#1e40af" font-weight="600">Sample</text>
  <text x="40" y="92" text-anchor="middle" fill="#1e40af">inlet</text>
  <!-- Arrow to ionisation -->
  <line x1="70" y1="80" x2="100" y2="80" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- Ionisation -->
  <rect x="100" y="55" width="80" height="50" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="140" y="76" text-anchor="middle" fill="#5b21b6" font-weight="600">Ionisation</text>
  <text x="140" y="91" text-anchor="middle" fill="#5b21b6">X → X⁺ + e⁻</text>
  <!-- Arrow -->
  <line x1="180" y1="80" x2="210" y2="80" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- Acceleration -->
  <rect x="210" y="55" width="80" height="50" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="250" y="76" text-anchor="middle" fill="#92400e" font-weight="600">Acceleration</text>
  <text x="250" y="91" text-anchor="middle" fill="#92400e">electric field</text>
  <!-- Arrow -->
  <line x1="290" y1="80" x2="320" y2="80" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- Drift tube -->
  <rect x="320" y="55" width="80" height="50" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="360" y="76" text-anchor="middle" fill="#14532d" font-weight="600">Drift tube</text>
  <text x="360" y="91" text-anchor="middle" fill="#14532d">field-free</text>
  <!-- Arrow -->
  <line x1="400" y1="80" x2="430" y2="80" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- Detector -->
  <rect x="430" y="55" width="60" height="50" rx="6" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="460" y="76" text-anchor="middle" fill="#9d174d" font-weight="600">Detector</text>
  <text x="460" y="91" text-anchor="middle" fill="#9d174d">records t</text>
  <!-- Stage labels -->
  <text x="140" y="120" text-anchor="middle" fill="#7c3aed" font-size="9">Stage 1</text>
  <text x="250" y="120" text-anchor="middle" fill="#92400e" font-size="9">Stage 2</text>
  <text x="360" y="120" text-anchor="middle" fill="#14532d" font-size="9">Stage 3</text>
  <text x="460" y="120" text-anchor="middle" fill="#9d174d" font-size="9">Stage 4</text>
  <!-- Arrow marker -->
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#6b7280"/>
    </marker>
  </defs>
</svg>`
    }
  }, {
    id: 'h-spectrum',
    type: 'heading',
    data: {
      text: 'Interpreting a Mass Spectrum',
      level: 2
    }
  }, {
    id: 'p-spectrum',
    type: "list",
    data: {
      style: "unordered",
      items: ["A mass spectrum is a bar chart of relative abundance (y-axis) against m/z ratio (x-axis).", "For a monatomic element with singly charged ions (z = 1), m/z = mass number.", "Each peak represents one isotope; peak height gives its relative abundance."]
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Aᵣ from a mass spectrum of neon',
      text: 'Neon mass spectrum shows:\n  m/z = 20, abundance = 90.9%\n  m/z = 21, abundance = 0.3%\n  m/z = 22, abundance = 8.8%\n\nAᵣ = (20 × 90.9 + 21 × 0.3 + 22 × 8.8) ÷ 100\n   = (1818 + 6.3 + 193.6) ÷ 100\n   = 2017.9 ÷ 100\n   = 20.18\n\n∴ Aᵣ(Ne) ≈ 20.2'
    }
  }, {
    id: 'callout-key',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key equation — kinetic energy in TOF',
      text: 'All ions are accelerated through the same potential difference V, gaining equal kinetic energy:\n\n½mv² = zV\n\nRearranging: v = √(2zV/m)\n\nLighter ions (smaller m) have greater velocity → arrive at the detector first → recorded at shorter time t.'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — electrospray vs electron bombardment',
      text: 'Electrospray ionisation (ESI): sample dissolved, sprayed through needle, gains H⁺ → gives [M+H]⁺ ions. Used for large/fragile molecules.\nElectron bombardment: high-energy electrons knock out an electron → X⁺. Used for small molecules and elements.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — m/z vs mass number',
      text: 'Mass spectrometers measure m/z, not mass directly. For singly charged ions (z = 1), m/z = mass number. For doubly charged ions (z = 2), m/z = mass ÷ 2. Always check the charge state of the ions if given.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Describe the four stages of a TOF mass spectrometer',
        checked: false
      }, {
        text: 'Explain why lighter ions arrive at the detector first',
        checked: false
      }, {
        text: 'Read isotope masses and abundances from a mass spectrum',
        checked: false
      }, {
        text: 'Calculate Aᵣ from mass spectrum data',
        checked: false
      }, {
        text: 'Distinguish between electrospray and electron bombardment ionisation',
        checked: false
      }]
    }
  },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: Mass spectrometry separates ions by m/z ratio. Ionisation, acceleration, deflection, detection each serve a specific purpose.\n\nApply: A mass spectrum shows peaks at m/z = 20 (90.5%), 21 (0.3%), 22 (9.2%). Calculate Aᵣ and identify the element.\n\nAnalyze: Why must the mass spectrometer operate under vacuum? What would happen to ions if air molecules were present?\n\nEvaluate: Compare electron impact vs electrospray ionisation for large biological molecules.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'TOF mass spectrometer: (1) ionisation → X⁺, (2) acceleration by electric field (equal KE), (3) drift tube — lighter ions faster, (4) detection by arrival time. Mass spectrum: peaks at m/z values, height = abundance. Aᵣ = Σ(m/z × %) ÷ 100.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'list-stages',
      prompt: 'List the four stages of a time-of-flight mass spectrometer.'
    }, {
      id: 'cue-2',
      blockId: 'callout-key',
      prompt: 'Why do lighter ions arrive at the detector first in a TOF instrument?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'Calculate the Aᵣ of neon given peaks at m/z 20 (90.9%), 21 (0.3%), 22 (8.8%).'
    }, {
      id: 'cue-4',
      blockId: 'p-spectrum',
      prompt: 'What do the x-axis and y-axis of a mass spectrum represent?'
    }, {
      id: 'cue-5',
      blockId: 'callout-tip',
      prompt: 'What is the difference between electrospray and electron bombardment ionisation?'
    }],
    summaryText: 'TOF stages: ionisation → acceleration (equal KE) → drift (lighter = faster) → detection. Aᵣ = Σ(m/z × %) ÷ 100. m/z = mass for singly charged ions.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 'Mass spectrometry, TOF instrument, mass spectrum interpretation',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['mass spectrometry', 'atomic structure']
  }]
};