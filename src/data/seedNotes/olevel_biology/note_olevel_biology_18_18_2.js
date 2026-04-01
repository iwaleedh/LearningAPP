export const note_olevel_biology_18_18_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/18 Variation And Selection/18-1-3-natural-selection-and-evolution.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe Darwin\'s theory of natural selection and explain how it leads to evolution, using antibiotic resistance in bacteria as a worked example.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Darwin\'s Theory of Natural Selection', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>Natural selection</strong> is the process by which organisms with favourable adaptations survive, reproduce, and pass on their alleles — while those with less favourable features are less likely to survive. Over many generations, this changes the characteristics of a population. It is the mechanism behind <strong>evolution</strong>.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Five Steps of Natural Selection',
        text: '<strong>1. Variation:</strong> Individuals in a population show variation due to differences in their alleles (from mutation and sexual reproduction).<br/><br/><strong>2. Overproduction (struggle for existence):</strong> Organisms produce more offspring than can possibly survive. Resources (food, water, space) are limited, so there is competition.<br/><br/><strong>3. Selection pressure:</strong> Environmental conditions act as a selection pressure (e.g. predators, disease, climate).<br/><br/><strong>4. Survival of the fittest:</strong> Individuals with alleles that give beneficial adaptations are more likely to survive and reproduce. ("Fittest" means best adapted, not physically strongest.)<br/><br/><strong>5. Inheritance:</strong> Survivors pass their favourable alleles to offspring. Over many generations, the frequency of these alleles increases in the population.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Evolution', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of Evolution',
        text: '<strong>Evolution</strong> is the change in allele frequency in a population over many generations, driven by natural selection. Over very long time periods it can lead to the formation of new species.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Evidence for Evolution', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Fossil record:</strong> Fossils show how organisms have changed over millions of years. Transitional forms (e.g. Archaeopteryx — between dinosaurs and birds) support gradual change.' },
          { text: '<strong>Antibiotic resistance in bacteria:</strong> Bacteria evolve resistance to antibiotics very rapidly — a directly observable example of natural selection occurring within years or decades.' },
          { text: '<strong>Darwin\'s finches:</strong> On the Galapagos Islands, finches have evolved different beak shapes suited to different food sources — all descended from a common ancestor.' },
          { text: '<strong>Comparative anatomy:</strong> Homologous structures (e.g. pentadactyl limb in mammals) suggest a common ancestor.' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Worked Example: Antibiotic Resistance in Bacteria', level: 2 }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'How Antibiotic Resistance Evolves — Step by Step',
        text: '<strong>Step 1:</strong> A population of bacteria shows genetic variation — most are killed by an antibiotic, but a few carry a <em>random mutation</em> that gives resistance.<br/><br/><strong>Step 2:</strong> Antibiotic is applied — it acts as a <em>selection pressure</em>. Non-resistant bacteria are killed. Resistant bacteria survive.<br/><br/><strong>Step 3:</strong> Surviving resistant bacteria reproduce rapidly (bacteria can divide every 20 minutes) and pass on the resistance allele to offspring.<br/><br/><strong>Step 4:</strong> After many generations, the majority of the population is resistant.<br/><br/><strong>Step 5:</strong> The antibiotic is now ineffective — a new antibiotic is needed.<br/><br/><strong>Key implication:</strong> Overuse and misuse of antibiotics accelerates resistance. Always complete a full course of antibiotics.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Diagram showing natural selection leading to antibiotic resistance in bacteria over successive generations',
        svg: `<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Generation 1 -->
  <rect x="10" y="10" width="140" height="210" rx="8" fill="#3d1212" stroke="#ef4444" stroke-width="1.5"/>
  <text x="80" y="28" text-anchor="middle" font-weight="bold" font-size="10" fill="#991b1b">Generation 1</text>
  <text x="80" y="40" text-anchor="middle" font-size="9" fill="#7f1d1d">(Before antibiotic)</text>
  <!-- Many bacteria, one resistant -->
  <circle cx="40" cy="70" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <circle cx="65" cy="60" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <circle cx="90" cy="75" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <circle cx="115" cy="65" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <circle cx="50" cy="100" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <circle cx="80" cy="105" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <circle cx="110" cy="95" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <!-- Resistant bacterium (green) -->
  <circle cx="65" cy="130" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="65" y="133" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <circle cx="40" cy="160" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <circle cx="110" cy="155" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <circle cx="80" cy="170" r="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1"/>
  <text x="80" y="205" text-anchor="middle" font-size="9" fill="#4b5563">Most non-resistant</text>

  <!-- Arrow 1 -->
  <text x="162" y="105" font-size="10" fill="#3b82f6">&#9654;</text>
  <text x="155" y="120" font-size="8" fill="#3b82f6" text-anchor="middle">Antibiotic</text>
  <text x="155" y="130" font-size="8" fill="#3b82f6" text-anchor="middle">applied</text>

  <!-- Generation 2: After selection -->
  <rect x="180" y="10" width="140" height="210" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="250" y="28" text-anchor="middle" font-weight="bold" font-size="10" fill="#14532d">After Selection</text>
  <text x="250" y="40" text-anchor="middle" font-size="9" fill="#14532d">(antibiotic kills non-resistant)</text>
  <!-- Dead bacteria (crosses) -->
  <text x="210" y="75" font-size="14" fill="#ef4444" text-anchor="middle">&#10005;</text>
  <text x="240" y="65" font-size="14" fill="#ef4444" text-anchor="middle">&#10005;</text>
  <text x="270" y="80" font-size="14" fill="#ef4444" text-anchor="middle">&#10005;</text>
  <text x="295" y="70" font-size="14" fill="#ef4444" text-anchor="middle">&#10005;</text>
  <text x="220" y="105" font-size="14" fill="#ef4444" text-anchor="middle">&#10005;</text>
  <text x="280" y="100" font-size="14" fill="#ef4444" text-anchor="middle">&#10005;</text>
  <!-- Surviving resistant bacterium -->
  <circle cx="250" cy="140" r="11" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="250" y="144" text-anchor="middle" font-size="8" fill="#14532d">R</text>
  <text x="250" y="200" text-anchor="middle" font-size="9" fill="#4b5563">Only resistant</text>
  <text x="250" y="212" text-anchor="middle" font-size="9" fill="#4b5563">bacterium survives</text>

  <!-- Arrow 2 -->
  <text x="332" y="105" font-size="10" fill="#3b82f6">&#9654;</text>
  <text x="328" y="120" font-size="8" fill="#3b82f6" text-anchor="middle">Reproduce</text>

  <!-- Generation 3: All resistant -->
  <rect x="350" y="10" width="140" height="210" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="420" y="28" text-anchor="middle" font-weight="bold" font-size="10" fill="#14532d">New Generation</text>
  <text x="420" y="40" text-anchor="middle" font-size="9" fill="#14532d">(all resistant)</text>
  <!-- All green resistant bacteria -->
  <circle cx="385" cy="70" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="385" y="74" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <circle cx="415" cy="60" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="415" y="64" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <circle cx="445" cy="75" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="445" y="79" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <circle cx="390" cy="105" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="390" y="109" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <circle cx="425" cy="100" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="425" y="104" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <circle cx="455" cy="105" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="455" y="109" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <circle cx="400" cy="140" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="400" y="144" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <circle cx="435" cy="135" r="9" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="435" y="139" text-anchor="middle" font-size="7" fill="#14532d">R</text>
  <text x="420" y="200" text-anchor="middle" font-size="9" fill="#14532d">Antibiotic now</text>
  <text x="420" y="212" text-anchor="middle" font-size="9" fill="#14532d">ineffective</text>
</svg>`
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why We Must Use Antibiotics Responsibly',
        text: 'Antibiotic resistance is a major global health threat (e.g. MRSA — methicillin-resistant <em>Staphylococcus aureus</em>).<br/><br/>• Never use antibiotics for viral infections (they have no effect).<br/>• Always complete the full course — stopping early leaves the most resistant bacteria alive to reproduce.<br/>• Avoid unnecessary prescriptions — doctors should only prescribe when needed.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Natural selection: variation exists → overproduction → selection pressure → survival of fittest → inheritance of favourable alleles → change in population over generations. Evolution is the change in allele frequency over time. Antibiotic resistance is a real-world example: a random mutation gives resistance; the antibiotic kills non-resistant bacteria; resistant bacteria reproduce and pass on the gene.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Natural selection: variation → overproduction → selection pressure → survival of fittest → inheritance. Antibiotic resistance = natural selection in action.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'List the five steps of natural selection in order.',
        answer: '1. Variation in population. 2. Overproduction — more offspring than survive. 3. Selection pressure. 4. Survival of the fittest (best adapted survive and reproduce). 5. Favourable alleles inherited by offspring; their frequency increases over generations.'
      },
      {
        id: 'cue-2',
        blockId: 'call-2',
        prompt: 'Define evolution.',
        answer: 'Evolution is the change in allele frequency in a population over many generations, driven by natural selection.'
      },
      {
        id: 'cue-3',
        blockId: 'call-3',
        prompt: 'Explain how antibiotic resistance in bacteria is an example of natural selection.',
        answer: 'A random mutation gives some bacteria resistance. When antibiotic is applied, non-resistant bacteria are killed (selection pressure). Resistant bacteria survive and reproduce, passing the resistance allele to offspring. Over generations, the resistant allele increases in frequency — the antibiotic becomes ineffective.'
      },
      {
        id: 'cue-4',
        blockId: 'list-1',
        prompt: 'State two pieces of evidence for evolution.',
        answer: 'The fossil record (showing gradual change in organisms over time) and antibiotic resistance in bacteria (directly observable natural selection).'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_18_18_2;
