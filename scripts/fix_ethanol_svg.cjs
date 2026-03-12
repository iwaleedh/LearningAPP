const fs = require('fs');

const path = 'src/data/seedNotes/chemistry/note_2_10_4.js';
let content = fs.readFileSync(path, 'utf8');

const regex = /<svg viewBox="0 0 650 350".*?<\/svg>/s;
const match = content.match(regex);

if (match) {
    const newSvg = `<svg viewBox="0 0 650 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="14">
  <defs>
    <marker id="arrowhead-prim" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#ef4444" />
    </marker>
    <style>
      .txt { fill: #1f2937; }
      .atom { fill: #111827; font-family: monospace; font-size: 16px; }
      .charge { fill: #ef4444; font-weight: bold; font-size: 14px; }
      .bond { stroke: #111827; stroke-width: 1.5; }
      .curve { fill: none; stroke: #ef4444; stroke-width: 1.5; marker-end: url(#arrowhead-prim); }
      .hd { fill: #1e40af; font-weight: bold; }
    </style>
  </defs>

  <!-- ======================== STEP 1 ======================== -->
  <text x="20" y="30" class="hd">1. Protonation of the alcohol</text>
  
  <text x="75" y="80" class="atom" text-anchor="middle">CH&#8323;</text>
  <path d="M 94 75 L 108 75" class="bond" />
  <text x="125" y="80" class="atom" text-anchor="middle">CH&#8322;</text>
  <path d="M 144 75 L 165 75" class="bond" />
  <text x="180" y="80" class="atom" text-anchor="middle">O</text>
  <path d="M 185 68 L 195 58" class="bond"/>
  <text x="200" y="56" class="atom" text-anchor="start">H</text>

  <!-- Lone pairs -->
  <circle cx="177" cy="58" r="1.5" class="txt" />
  <circle cx="183" cy="58" r="1.5" class="txt" />
  <circle cx="194" cy="72" r="1.5" class="txt" />
  <circle cx="194" cy="78" r="1.5" class="txt" />

  <text x="240" y="80" class="atom" text-anchor="middle">+</text>
  <text x="285" y="80" class="atom" text-anchor="middle" fill="#2563eb">H</text>
  <text x="295" y="70" class="charge" text-anchor="start">+</text>

  <path d="M 199 75 Q 230 105 275 85" class="curve" />

  <text x="340" y="80" class="atom">&#8594;</text>

  <text x="400" y="80" class="atom" text-anchor="middle">CH&#8323;</text>
  <path d="M 419 75 L 433 75" class="bond" />
  <text x="450" y="80" class="atom" text-anchor="middle">CH&#8322;</text>
  <path d="M 469 75 L 485 75" class="bond" />
  <text x="500" y="80" class="atom" text-anchor="middle">O</text>
  <text x="510" y="66" class="charge" text-anchor="start">+</text>

  <path d="M 500 64 L 500 44" class="bond" />
  <text x="500" y="40" class="atom" text-anchor="middle">H</text>
  
  <path d="M 508 68 L 522 58" class="bond"/>
  <text x="528" y="58" class="atom" text-anchor="start">H</text>

  <text x="565" y="80" class="txt" font-size="12" text-anchor="start">protonated</text>
  <text x="565" y="96" class="txt" font-size="12" text-anchor="start">alcohol</text>

  <!-- ======================== STEP 2 ======================== -->
  <text x="20" y="180" class="hd">2. Concerted elimination: base removes H&#8314; and water leaves simultaneously</text>
  
  <!-- Base -->
  <text x="50" y="270" class="atom" text-anchor="middle" fill="#2563eb">B</text>
  <text x="60" y="260" class="charge" text-anchor="start">-</text>
  <circle cx="65" cy="254" r="1.5" class="txt" fill="#2563eb" />
  <circle cx="65" cy="260" r="1.5" class="txt" fill="#2563eb" />

  <text x="135" y="270" class="atom" text-anchor="middle">CH&#8322;</text>
  <path d="M 152 265 L 168 265" class="bond" />
  <text x="185" y="270" class="atom" text-anchor="middle">CH&#8322;</text>
  <path d="M 202 265 L 220 265" class="bond" />
  <text x="235" y="270" class="atom" text-anchor="middle">O</text>
  <text x="245" y="256" class="charge" text-anchor="start">+</text>

  <!-- C-H bond down -->
  <path d="M 135 254 L 135 234" class="bond" />
  <text x="135" y="230" class="atom" text-anchor="middle">H</text>

  <!-- O-H bonds up/right -->
  <path d="M 235 254 L 235 234" class="bond" />
  <text x="235" y="230" class="atom" text-anchor="middle">H</text>
  <path d="M 240 258 L 260 248" class="bond"/>
  <text x="267" y="248" class="atom" text-anchor="start">H</text>

  <!-- Mechanism arrows -->
  <!-- Base taking H -->
  <path d="M 75 257 Q 105 240 120 235" class="curve" />
  <!-- C-H electrons forming pi bond -->
  <path d="M 142 244 Q 160 244 160 260" class="curve" />
  <!-- C-O electrons leaving with O -->
  <path d="M 215 264 Q 220 250 235 250" class="curve" />

  <text x="290" y="270" class="atom">&#8594;</text>

  <text x="355" y="270" class="atom" text-anchor="middle">CH&#8322;</text>
  <text x="385" y="270" class="atom" text-anchor="middle">=</text>
  <text x="415" y="270" class="atom" text-anchor="middle">CH&#8322;</text>
  
  <text x="470" y="270" class="atom" text-anchor="middle">+</text>
  <text x="515" y="270" class="atom" text-anchor="middle" fill="#2563eb">BH</text>
  
  <text x="560" y="270" class="atom" text-anchor="middle">+</text>
  <text x="600" y="270" class="atom" text-anchor="middle">H&#8322;O</text>

</svg>`;

    content = content.replace(match[0], newSvg);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Replaced SVG dashes with actual paths!");
} else {
    console.log("Could not find SVG.");
}
