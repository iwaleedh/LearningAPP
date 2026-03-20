export const note_olevel_physics_2_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-3-2-convection.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe thermal convection in fluids; explain convection in terms of density changes; describe convection currents in practical contexts including sea breezes and hot water systems; and explain why convection cannot occur in solids.'
      }
    },
    {
      id: 'h-convection',
      type: 'heading',
      data: { text: 'What is Convection?', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: {
        text: '<strong>Convection</strong> is the transfer of thermal energy in a <strong>fluid (liquid or gas)</strong> by the bulk movement of the fluid itself. It requires the fluid to be <em>free to flow</em> and <strong>cannot occur in solids</strong>, where particles are locked in fixed positions.'
      }
    },
    {
      id: 'h-mechanism',
      type: 'heading',
      data: { text: 'Mechanism of Convection', level: 2 }
    },
    {
      id: 'p-mechanism',
      type: 'paragraph',
      data: {
        text: 'When a fluid is heated from below, the fluid nearest the heat source expands and becomes <strong>less dense</strong> than the cooler fluid above it. Being less dense, it <strong>rises</strong>. The cooler, denser fluid sinks to take its place, where it is then heated in turn. This sets up a continuous circular flow called a <strong>convection current</strong>.'
      }
    },
    {
      id: 'callout-key-mech',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Convection Mechanism — Three Steps to Learn',
        text: '1. Fluid is heated → <strong>expands</strong> → becomes <strong>less dense</strong>.<br/>2. Less dense fluid <strong>rises</strong>; denser cold fluid <strong>sinks</strong>.<br/>3. A <strong>convection current</strong> is established — continuous circular flow of fluid.'
      }
    },
    {
      id: 'svg-convection',
      type: 'svg',
      data: {
        caption: 'Convection current in a tank of water — heat source at bottom left',
        svg: `<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Tank outline -->
  <rect x="40" y="40" width="330" height="180" rx="6" fill="#1c3a64" stroke="#5580a8" stroke-width="2.5"/>

  <!-- Water fill -->
  <rect x="42" y="42" width="326" height="176" rx="5" fill="#1c3a64" opacity="0.6"/>

  <!-- Hot region (bottom left) -->
  <rect x="42" y="180" width="80" height="38" rx="5" fill="#7c2d12" opacity="0.7"/>
  <text x="50" y="205" fill="#c33" font-size="11" font-weight="bold">🔥 Heat</text>

  <!-- Convection current arrows -->
  <!-- Rising hot water (left side, upward) -->
  <line x1="100" y1="175" x2="100" y2="65" stroke="#e05020" stroke-width="2.5" marker-end="url(#arrconv)"/>
  <text x="105" y="120" fill="#e05020" font-size="10">Hot water rises</text>

  <!-- Across top (left to right) -->
  <line x1="105" y1="60" x2="330" y2="60" stroke="#dd6622" stroke-width="2" marker-end="url(#arrconv)"/>

  <!-- Sinking cool water (right side, downward) -->
  <line x1="335" y1="65" x2="335" y2="175" stroke="#3366cc" stroke-width="2.5" marker-end="url(#arrconvb)"/>
  <text x="340" y="130" fill="#3366cc" font-size="10">Cools &amp; sinks</text>

  <!-- Across bottom (right to left) -->
  <line x1="330" y1="185" x2="110" y2="185" stroke="#3366cc" stroke-width="2" marker-end="url(#arrconvb)"/>

  <!-- Temperature gradient colour bands -->
  <text x="48" y="58" fill="#555" font-size="10">Warm (top)</text>
  <text x="48" y="196" fill="#555" font-size="10">Hottest</text>
  <text x="300" y="196" fill="#3366cc" font-size="10">Coolest</text>

  <!-- Why annotation -->
  <text x="110" y="235" fill="#444" font-size="11">Hot fluid: less dense → rises. Cool fluid: denser → sinks.</text>

  <defs>
    <marker id="arrconv" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#e05020"/>
    </marker>
    <marker id="arrconvb" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#3366cc"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Everyday Examples of Convection', level: 2 }
    },
    {
      id: 'list-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Hot water immersion heater</strong> — heater placed at the <em>bottom</em> of a tank so convection currents heat the whole volume. (If placed at top, only the top layer would be hot.)' },
          { text: '<strong>Domestic radiator</strong> — warms air near the wall. Warm air rises and moves across the room; cool air near the floor replaces it, creating a circulation current.' },
          { text: '<strong>Sea breeze (daytime)</strong> — land heats up faster than sea during daytime. Warm air over land rises → cooler air from the sea flows in to replace it → sea breeze blows inland.' },
          { text: '<strong>Land breeze (night-time)</strong> — land cools faster than sea at night. Air over sea is now warmer and rises → air from land flows out to sea → land breeze blows seaward.' },
          { text: '<strong>Gliders and birds of prey</strong> — use rising thermals (warm air convection currents) to gain altitude without flapping.' }
        ]
      }
    },
    {
      id: 'h-why-not-solid',
      type: 'heading',
      data: { text: 'Why Convection Cannot Occur in Solids', level: 2 }
    },
    {
      id: 'p-not-solid',
      type: 'paragraph',
      data: {
        text: 'Convection requires fluid to <strong>flow in bulk</strong>. In a solid, particles are locked in fixed positions and cannot move from place to place. There is no bulk movement of material, so convection is impossible. Solids transfer thermal energy only by <em>conduction</em>.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always use the word <strong>"density"</strong> in convection answers: "the heated fluid <em>expands and becomes less dense</em>, so it <em>rises</em>". Simply saying "hot air rises" does not earn full marks. You must explain <em>why</em> it rises — because it is less dense than the surrounding cooler air.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Position of Heater',
        text: 'A water heater must be at the <strong>bottom</strong> of the tank to heat all the water by convection. If placed at the top, warm water stays at the top (it is already less dense), and the cool water below is not heated. This is a favourite exam question.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Convection transfers thermal energy in fluids by bulk movement. Heated fluid expands → less dense → rises; cooler denser fluid sinks → convection current. Only in fluids — solids cannot convect. Examples: radiators, sea breeze (land heats faster during day), immersion heater at bottom of tank.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Heated fluid expands → less dense → rises; cool fluid sinks → convection current; only in fluids; density is the key word.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-mech', prompt: 'Describe the mechanism of a convection current in three steps, using the word "density".' },
      { id: 'cue-2', blockId: 'p-not-solid', prompt: 'Explain why convection cannot transfer thermal energy through a solid.' },
      { id: 'cue-3', blockId: 'list-examples', prompt: 'Explain why a sea breeze blows from the sea to the land during a sunny day, using convection.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'A student places an immersion heater at the top of a water tank. Explain why this is ineffective at heating all the water.' }
    ]
  },
  evidence: []
};
