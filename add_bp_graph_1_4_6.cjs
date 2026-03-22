const fs = require('fs');
const filepath = 'src/data/seedNotes/chemistry/note_1_4_6.js';
let content = fs.readFileSync(filepath, 'utf8');

const svgStr = `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <!-- Background -->
  <rect x="0" y="0" width="500" height="300" rx="8" fill="#0b0f1a" />
  
  <!-- Title -->
  <text x="250" y="25" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Boiling Point vs Carbon Chain Length</text>
  
  <!-- Y-axis grid lines & labels -->
  <!-- 150 C -->
  <line x1="50" y1="50" x2="470" y2="50" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="54" text-anchor="end" fill="#94a3b8" font-size="10">150</text>
  <!-- 100 C -->
  <line x1="50" y1="78.6" x2="470" y2="78.6" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="82.6" text-anchor="end" fill="#94a3b8" font-size="10">100</text>
  <!-- 50 C -->
  <line x1="50" y1="107.1" x2="470" y2="107.1" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="111.1" text-anchor="end" fill="#94a3b8" font-size="10">50</text>
  <!-- 0 C cross line -->
  <line x1="50" y1="135.7" x2="470" y2="135.7" stroke="#475569" stroke-width="1.5" stroke-dasharray="4" />
  <text x="45" y="139.7" text-anchor="end" fill="#94a3b8" font-size="10">0</text>
  <!-- -50 C -->
  <line x1="50" y1="164.3" x2="470" y2="164.3" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="168.3" text-anchor="end" fill="#94a3b8" font-size="10">-50</text>
  <!-- -100 C -->
  <line x1="50" y1="192.9" x2="470" y2="192.9" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="196.9" text-anchor="end" fill="#94a3b8" font-size="10">-100</text>
  <!-- -150 C -->
  <line x1="50" y1="221.4" x2="470" y2="221.4" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="225.4" text-anchor="end" fill="#94a3b8" font-size="10">-150</text>
  <!-- -200 C -->
  <line x1="50" y1="250" x2="470" y2="250" stroke="#1e293b" stroke-width="1" />
  <text x="45" y="254" text-anchor="end" fill="#94a3b8" font-size="10">-200</text>
  
  <!-- Y-axis Label -->
  <text x="-150" y="15" transform="rotate(-90)" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="bold">Boiling Point (°C)</text>

  <!-- Axes -->
  <line x1="50" y1="40" x2="50" y2="260" stroke="#64748b" stroke-width="2" />
  <line x1="50" y1="250" x2="470" y2="250" stroke="#64748b" stroke-width="2" />
  
  <!-- X-axis Label -->
  <text x="260" y="290" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="bold">Number of Carbon Atoms (Chain Length)</text>

  <!-- X-axis Grid Lines and Labels -->
  <path d="M 60 250 L 60 255" stroke="#64748b" stroke-width="2" />
  <text x="60" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">1</text>
  <path d="M 117.1 250 L 117.1 255" stroke="#64748b" stroke-width="2" />
  <text x="117.1" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">2</text>
  <path d="M 174.3 250 L 174.3 255" stroke="#64748b" stroke-width="2" />
  <text x="174.3" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">3</text>
  <path d="M 231.4 250 L 231.4 255" stroke="#64748b" stroke-width="2" />
  <text x="231.4" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">4</text>
  <path d="M 288.6 250 L 288.6 255" stroke="#64748b" stroke-width="2" />
  <text x="288.6" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">5</text>
  <path d="M 345.7 250 L 345.7 255" stroke="#64748b" stroke-width="2" />
  <text x="345.7" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">6</text>
  <path d="M 402.8 250 L 402.8 255" stroke="#64748b" stroke-width="2" />
  <text x="402.8" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">7</text>
  <path d="M 460 250 L 460 255" stroke="#64748b" stroke-width="2" />
  <text x="460" y="268" text-anchor="middle" fill="#94a3b8" font-size="10">8</text>

  <!-- State shading backgrounds -->
  <rect x="51" y="124.3" width="419" height="125.7" fill="#ef4444" fill-opacity="0.05" />
  <text x="460" y="240" text-anchor="end" fill="#ef4444" font-size="11" font-style="italic" opacity="0.6">Gases</text>
  
  <rect x="51" y="40" width="419" height="84.3" fill="#3b82f6" fill-opacity="0.05" />
  <text x="460" y="55" text-anchor="end" fill="#3b82f6" font-size="11" font-style="italic" opacity="0.6">Liquids</text>

  <!-- Plotting the curve -->
  <path d="M 60 229.4 L 117.1 186.6 L 174.3 159.7 L 231.4 136.3 L 288.6 115.2 L 345.7 96.3 L 402.8 79.7 L 460 63.7" stroke="#10b981" stroke-width="3" fill="none" stroke-linejoin="round" />
  
  <!-- Data Points -->
  <circle cx="60" cy="229.4" r="4" fill="#10b981" />
  <circle cx="117.1" cy="186.6" r="4" fill="#10b981" />
  <circle cx="174.3" cy="159.7" r="4" fill="#10b981" />
  <circle cx="231.4" cy="136.3" r="4" fill="#10b981" />
  <circle cx="288.6" cy="115.2" r="4" fill="#10b981" />
  <circle cx="345.7" cy="96.3" r="4" fill="#10b981" />
  <circle cx="402.8" cy="79.7" r="4" fill="#10b981" />
  <circle cx="460" cy="63.7" r="4" fill="#10b981" />
  
  <!-- Data Value Labels -->
  <!-- Gases (red text) -->
  <text x="60" y="218" text-anchor="middle" fill="#fca5a5" font-size="9">-164</text>
  <text x="117.1" y="175" text-anchor="middle" fill="#fca5a5" font-size="9">-89</text>
  <text x="174.3" y="148" text-anchor="middle" fill="#fca5a5" font-size="9">-42</text>
  <text x="231.4" y="125" text-anchor="middle" fill="#fca5a5" font-size="9">-1</text>
  <!-- Liquids (blue text) -->
  <text x="288.6" y="104" text-anchor="middle" fill="#93c5fd" font-size="9">+36</text>
  <text x="345.7" y="85" text-anchor="middle" fill="#93c5fd" font-size="9">+69</text>
  <text x="402.8" y="68" text-anchor="middle" fill="#93c5fd" font-size="9">+98</text>
  <text x="460" y="52" text-anchor="middle" fill="#93c5fd" font-size="9">+126</text>

  <!-- Curve behavior explanation box -->
  <rect x="250" y="200" width="200" height="35" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <text x="260" y="215" fill="#e2e8f0" font-size="10">London forces strengthen with chain</text>
  <text x="260" y="228" fill="#e2e8f0" font-size="10">length, raising the boiling point.</text>
</svg>`;

const newBlock = `
    {
      id: 'svg-bp-graph',
      type: 'svg',
      data: {
        caption: 'Boiling point of alkanes rises with chain length due to increasing London forces',
        svg: \`${svgStr}\`
      }
    },`;

// Check if already injected
if (content.includes("id: 'svg-bp-graph'")) {
    console.log("Already injected.");
    process.exit(0);
}

const targetStr = `id: 'callout-bp-trend',\n      type: 'callout',\n      data: {\n        style: 'key',\n        title: 'Boiling Point Trend',\n        text: 'Longer alkane chains have more electrons &#x2192; larger, more polarisable electron clouds &#x2192; stronger <strong>London dispersion forces</strong> between adjacent molecules. More energy is needed to overcome these forces, so the boiling point rises.'\n      }\n    },`;

const splitParts = content.split(targetStr);

if (splitParts.length === 2) {
    const updated = splitParts[0] + targetStr + newBlock + splitParts[1];
    fs.writeFileSync(filepath, updated, 'utf8');
    console.log("Successfully added svg-bp-graph block.");
} else {
    console.error("Target string not found for split! Found: " + splitParts.length);
    console.log("Target String:", targetStr);
}
