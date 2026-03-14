import os
import re

# SVGs data for topics 19, 20, 21
svg_data = {
    "note_physics_4_19_0.js": [
        ("svg-capacitor-basic", "Parallel Plate Capacitor", 
         """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="40" width="20" height="120" fill="#3B82F6" stroke="#1E40AF" stroke-width="2"/><rect x="280" y="40" width="20" height="120" fill="#EF4444" stroke="#991B1B" stroke-width="2"/><text x="110" y="30" font-family="Arial" font-size="14" text-anchor="middle" fill="#1E40AF">+Q</text><text x="290" y="30" font-family="Arial" font-size="14" text-anchor="middle" fill="#991B1B">-Q</text><path d="M125 60 L275 60" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><path d="M125 100 L275 100" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><path d="M125 140 L275 140" stroke="#9CA3AF" stroke-width="2" marker-end="url(#arrow)"/><text x="200" y="120" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Electric Field E</text><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#9CA3AF"/></marker></defs></svg>"""),
        ("svg-capacitance-formula", "Capacitance Relationship", 
         """<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="150" fill="#F8FAFC" rx="10"/><text x="150" y="60" font-family="Verdana" font-size="28" font-weight="bold" text-anchor="middle" fill="#1E3A8A">C = Q / V</text><text x="150" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">C = Capacitance (F)</text><text x="150" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">Q = Charge (C)</text><text x="150" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#475569">V = Potential Difference (V)</text></svg>""")
    ],
    "note_physics_4_19_1.js": [
        ("svg-energy-capacitor", "Energy Stored in a Capacitor", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="50,150 50,30 50,150 250,150" fill="none" stroke="#000" stroke-width="2"/><line x1="50" y1="150" x2="200" y2="50" stroke="#3B82F6" stroke-width="3"/><text x="25" y="90" font-family="Arial" font-size="14" transform="rotate(-90 25,90)">V (Volts)</text><text x="150" y="170" font-family="Arial" font-size="14">Q (Coulombs)</text><polygon points="50,150 200,150 200,50" fill="#93C5FD" fill-opacity="0.5"/><text x="140" y="125" font-family="Arial" font-size="14" fill="#1E3A8A">Area = Energy (W)</text></svg>"""),
        ("svg-energy-formulae", "Energy Formulas", 
         """<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#F8FAFC" rx="10"/><text x="175" y="40" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="#1E3A8A">Energy Stored (W)</text><text x="175" y="75" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 Q V</text><text x="175" y="105" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 C V&sup2;</text><text x="175" y="135" font-family="Arial" font-size="18" text-anchor="middle" fill="#333">W = 1/2 Q&sup2; / C</text></svg>""")
    ],
    "note_physics_4_19_2.js": [
        ("svg-charging-graph", "Charging a Capacitor", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="40,160 40,40 40,160 260,160" fill="none" stroke="#000" stroke-width="2"/><path d="M 40 160 Q 100 80 240 60" fill="none" stroke="#10B981" stroke-width="3"/><line x1="40" y1="60" x2="260" y2="60" stroke="#9CA3AF" stroke-dasharray="4"/><text x="20" y="100" font-family="Arial" font-size="14" transform="rotate(-90 20,100)">V or Q</text><text x="150" y="180" font-family="Arial" font-size="14">Time (t)</text><text x="250" y="50" font-family="Arial" font-size="12" fill="#4B5563">V_max</text></svg>"""),
        ("svg-discharging-graph", "Discharging a Capacitor", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="40,160 40,40 40,160 260,160" fill="none" stroke="#000" stroke-width="2"/><path d="M 40 60 Q 100 140 240 155" fill="none" stroke="#EF4444" stroke-width="3"/><text x="20" y="100" font-family="Arial" font-size="14" transform="rotate(-90 20,100)">V, Q or I</text><text x="150" y="180" font-family="Arial" font-size="14">Time (t)</text></svg>""")
    ],
    "note_physics_4_19_3.js": [
        ("svg-exponential-decay", "Exponential Decay & Time Constant", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="50,150 50,30 50,150 260,150" fill="none" stroke="#000" stroke-width="2"/><path d="M 50 40 Q 110 120 250 145" fill="none" stroke="#3B82F6" stroke-width="3"/><line x1="50" y1="80" x2="110" y2="80" stroke="#9CA3AF" stroke-dasharray="4"/><line x1="110" y1="150" x2="110" y2="80" stroke="#9CA3AF" stroke-dasharray="4"/><text x="20" y="45" font-family="Arial" font-size="12">V_0</text><text x="15" y="85" font-family="Arial" font-size="12">0.37 V_0</text><text x="105" y="170" font-family="Arial" font-size="12">t = RC</text><text x="25" y="90" font-family="Arial" font-size="14" transform="rotate(-90 25,90)">Voltage</text><text x="150" y="185" font-family="Arial" font-size="14">Time</text></svg>"""),
        ("svg-decay-formula", "Decay Equation", 
         """<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" fill="#F0FDF4" rx="10"/><text x="150" y="55" font-family="Times New Roman" font-size="24" font-weight="bold" font-style="italic" text-anchor="middle" fill="#065F46">x = x&#8320; e<tspan dy="-10" font-size="16">&#8722;t/RC</tspan></text><text x="150" y="85" font-family="Arial" font-size="14" text-anchor="middle" fill="#047857">Where x can be Q, V, or I</text></svg>""")
    ],
    "note_physics_4_19_4.js": [
        ("svg-parallel-capacitors", "Capacitors in Parallel", 
         """<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="75" x2="100" y2="75" stroke="#000" stroke-width="2"/><line x1="100" y1="40" x2="100" y2="110" stroke="#000" stroke-width="2"/><line x1="100" y1="40" x2="140" y2="40" stroke="#000" stroke-width="2"/><line x1="100" y1="110" x2="140" y2="110" stroke="#000" stroke-width="2"/><line x1="140" y1="20" x2="140" y2="60" stroke="#3B82F6" stroke-width="4"/><line x1="160" y1="20" x2="160" y2="60" stroke="#EF4444" stroke-width="4"/><line x1="140" y1="90" x2="140" y2="130" stroke="#3B82F6" stroke-width="4"/><line x1="160" y1="90" x2="160" y2="130" stroke="#EF4444" stroke-width="4"/><line x1="160" y1="40" x2="200" y2="40" stroke="#000" stroke-width="2"/><line x1="160" y1="110" x2="200" y2="110" stroke="#000" stroke-width="2"/><line x1="200" y1="40" x2="200" y2="110" stroke="#000" stroke-width="2"/><line x1="200" y1="75" x2="250" y2="75" stroke="#000" stroke-width="2"/><text x="150" y="15" font-family="Arial" font-size="14" text-anchor="middle">C&#8321;</text><text x="150" y="145" font-family="Arial" font-size="14" text-anchor="middle">C&#8322;</text><text x="150" y="75" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">C_total = C&#8321; + C&#8322;</text></svg>"""),
        ("svg-series-capacitors", "Capacitors in Series", 
         """<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="75" x2="100" y2="75" stroke="#000" stroke-width="2"/><line x1="100" y1="55" x2="100" y2="95" stroke="#3B82F6" stroke-width="4"/><line x1="120" y1="55" x2="120" y2="95" stroke="#EF4444" stroke-width="4"/><line x1="120" y1="75" x2="180" y2="75" stroke="#000" stroke-width="2"/><line x1="180" y1="55" x2="180" y2="95" stroke="#3B82F6" stroke-width="4"/><line x1="200" y1="55" x2="200" y2="95" stroke="#EF4444" stroke-width="4"/><line x1="200" y1="75" x2="250" y2="75" stroke="#000" stroke-width="2"/><text x="110" y="45" font-family="Arial" font-size="14" text-anchor="middle">C&#8321;</text><text x="190" y="45" font-family="Arial" font-size="14" text-anchor="middle">C&#8322;</text><text x="150" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">1/C_total = 1/C&#8321; + 1/C&#8322;</text></svg>""")
    ],
    "note_physics_4_20_0.js": [
        ("svg-magnetic-field-wire", "Magnetic Field of a Wire", 
         """<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="100" y1="20" x2="100" y2="180" stroke="#B45309" stroke-width="6"/><path d="M 95 30 L 100 20 L 105 30" fill="none" stroke="#FFF" stroke-width="2"/><circle cx="100" cy="100" r="40" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="4"/><path d="M 140 100 L 138 92 L 144 94" fill="none" stroke="#2563EB" stroke-width="2"/><circle cx="100" cy="100" r="70" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="6"/><path d="M 170 100 L 168 92 L 174 94" fill="none" stroke="#2563EB" stroke-width="2"/><text x="120" y="50" font-family="Arial" font-size="16" fill="#B45309">Current (I)</text></svg>"""),
        ("svg-flemings-left-hand", "Fleming's Left Hand Rule", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><line x1="150" y1="120" x2="150" y2="40" stroke="#3B82F6" stroke-width="4" marker-end="url(#arrow-blue)"/><text x="160" y="60" font-family="Arial" font-size="14" fill="#1E3A8A">Thrust / Force (Thumb)</text><line x1="150" y1="120" x2="230" y2="120" stroke="#10B981" stroke-width="4" marker-end="url(#arrow-green)"/><text x="160" y="140" font-family="Arial" font-size="14" fill="#065F46">Field (First Finger)</text><line x1="150" y1="120" x2="90" y2="180" stroke="#EF4444" stroke-width="4" marker-end="url(#arrow-red)"/><text x="60" y="170" font-family="Arial" font-size="14" fill="#991B1B">Current (Second Finger)</text><defs><marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#3B82F6"/></marker><marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#10B981"/></marker><marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#EF4444"/></marker></defs></svg>""")
    ],
    "note_physics_4_20_1.js": [
        ("svg-force-formula-wire", "Magnetic Force on a Wire", 
         """<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#F8FAFC" rx="10"/><text x="175" y="50" font-family="Arial" font-size="32" font-weight="bold" text-anchor="middle" fill="#1E40AF">F = B I l sin(&theta;)</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">B = Magnetic flux density (Tesla)</text><text x="175" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">I = Current (Amps), l = Length (m)</text><text x="175" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">&theta; = Angle between wire and field</text></svg>"""),
        ("svg-force-formula-charge", "Magnetic Force on a Charge", 
         """<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#FFFBEB" rx="10"/><text x="175" y="50" font-family="Arial" font-size="32" font-weight="bold" text-anchor="middle" fill="#065F46">F = B Q v</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">B = Magnetic flux density (Tesla)</text><text x="175" y="110" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Q = Charge (Coulombs)</text><text x="175" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">v = Velocity (m/s)</text></svg>""")
    ],
    "note_physics_4_20_2.js": [
        ("svg-circular-path", "Charged Particle in a Magnetic Field", 
         """<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="250" fill="#F1F5F9" rx="10"/><path d="M 20 20 L 30 30 M 30 20 L 20 30" stroke="#94A3B8" stroke-width="2"/><path d="M 80 20 L 90 30 M 90 20 L 80 30" stroke="#94A3B8" stroke-width="2"/><path d="M 140 20 L 150 30 M 150 20 L 140 30" stroke="#94A3B8" stroke-width="2"/><path d="M 200 20 L 210 30 M 210 20 L 200 30" stroke="#94A3B8" stroke-width="2"/><path d="M 260 20 L 270 30 M 270 20 L 260 30" stroke="#94A3B8" stroke-width="2"/><path d="M 20 80 L 30 90 M 30 80 L 20 90" stroke="#94A3B8" stroke-width="2"/><path d="M 80 80 L 90 90 M 90 80 L 80 90" stroke="#94A3B8" stroke-width="2"/><path d="M 140 80 L 150 90 M 150 80 L 140 90" stroke="#94A3B8" stroke-width="2"/><path d="M 200 80 L 210 90 M 210 80 L 200 90" stroke="#94A3B8" stroke-width="2"/><path d="M 260 80 L 270 90 M 270 80 L 260 90" stroke="#94A3B8" stroke-width="2"/><path d="M 20 140 L 30 150 M 30 140 L 20 150" stroke="#94A3B8" stroke-width="2"/><path d="M 80 140 L 90 150 M 90 140 L 80 150" stroke="#94A3B8" stroke-width="2"/><path d="M 140 140 L 150 150 M 150 140 L 140 150" stroke="#94A3B8" stroke-width="2"/><path d="M 200 140 L 210 150 M 210 140 L 200 150" stroke="#94A3B8" stroke-width="2"/><path d="M 260 140 L 270 150 M 270 140 L 260 150" stroke="#94A3B8" stroke-width="2"/><circle cx="150" cy="120" r="60" fill="none" stroke="#3B82F6" stroke-width="3"/><circle cx="150" cy="60" r="10" fill="#EF4444"/><text x="145" y="65" font-family="Arial" font-size="14" fill="#FFF" font-weight="bold">+</text><line x1="162" y1="60" x2="200" y2="60" stroke="#10B981" stroke-width="3" marker-end="url(#arrow-vel)"/><text x="210" y="65" font-family="Arial" font-size="16" fill="#065F46">v</text><line x1="150" y1="72" x2="150" y2="110" stroke="#9333EA" stroke-width="3" marker-end="url(#arrow-force)"/><text x="130" y="100" font-family="Arial" font-size="16" fill="#6B21A8">F</text><defs><marker id="arrow-vel" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#10B981"/></marker><marker id="arrow-force" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#9333EA"/></marker></defs></svg>"""),
        ("svg-circular-formula", "Radius of Circular Path Orbit", 
         """<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="120" fill="#F8FAFC" rx="10"/><text x="175" y="50" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#1E3A8A">r = mv / BQ</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Momentum (mv) balanced by Magnetic Force (BQv)</text></svg>""")
    ],
    "note_physics_4_21_0.js": [
        ("svg-magnetic-flux", "Magnetic Flux", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="100" height="100" fill="#DBEAFE" stroke="#2563EB" stroke-width="2" transform="skewY(20)"/><path d="M 50 120 L 250 120" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><path d="M 50 140 L 250 140" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><path d="M 50 160 L 250 160" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><text x="260" y="145" font-family="Arial" font-size="14" fill="#991B1B">B Field</text><text x="120" y="130" font-family="Arial" font-size="14" fill="#1E3A8A" transform="skewY(20)">Area (A)</text><defs><marker id="arrow-flux" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#EF4444"/></marker></defs></svg>"""),
        ("svg-flux-equation", "Magnetic Flux Formula", 
         """<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="120" fill="#F0FDF4" rx="10"/><text x="175" y="50" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#065F46">&Phi; = B A</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Flux (Weber, Wb) = Flux Density (T) &times; Area (m&sup2;)</text></svg>""")
    ],
    "note_physics_4_21_1.js": [
        ("svg-flux-linkage", "Magnetic Flux Linkage", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="30" width="80" height="120" fill="none" stroke="#D97706" stroke-width="4"/><rect x="105" y="35" width="70" height="110" fill="none" stroke="#D97706" stroke-width="4"/><rect x="110" y="40" width="60" height="100" fill="none" stroke="#D97706" stroke-width="4"/><path d="M 50 90 L 250 90" stroke="#3B82F6" stroke-width="3" marker-end="url(#arrow-fl)"/><path d="M 50 110 L 250 110" stroke="#3B82F6" stroke-width="3" marker-end="url(#arrow-fl)"/><text x="210" y="70" font-family="Arial" font-size="14" fill="#D97706">N turns</text><defs><marker id="arrow-fl" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3B82F6"/></marker></defs></svg>"""),
        ("svg-faradays-law", "Faraday's Law Formula", 
         """<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="140" fill="#FEF2F2" rx="10"/><text x="180" y="60" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#991B1B">&epsilon; = &#8722; N (&Delta;&Phi; / &Delta;t)</text><text x="180" y="95" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Induced EMF &propto; Rate of change of flux linkage</text><text x="180" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="#B91C1C">Negative sign denotes Lenz's Law</text></svg>""")
    ],
    "note_physics_4_21_2.js": [
        ("svg-lenzs-law", "Lenz's Law in Action", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="120" y="20" width="40" height="80" fill="#9CA3AF"/><rect x="120" y="20" width="40" height="40" fill="#EF4444"/><text x="140" y="45" font-family="Arial" font-size="16" fill="#FFF" text-anchor="middle">N</text><text x="140" y="85" font-family="Arial" font-size="16" fill="#FFF" text-anchor="middle">S</text><path d="M 140 110 L 140 140" stroke="#000" stroke-width="3" marker-end="url(#arrow-move)"/><rect x="100" y="160" width="80" height="20" fill="none" stroke="#D97706" stroke-width="4"/><text x="70" y="175" font-family="Arial" font-size="14" fill="#B45309">Coil</text><text x="210" y="175" font-family="Arial" font-size="14" fill="#065F46">Induced N pole</text><text x="210" y="190" font-family="Arial" font-size="12" fill="#047857">repels magnet</text><defs><marker id="arrow-move" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#000"/></marker></defs></svg>"""),
        ("svg-flemings-right-hand", "Fleming's Right Hand Rule", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><line x1="150" y1="120" x2="150" y2="40" stroke="#3B82F6" stroke-width="4" marker-end="url(#arrow-bluer)"/><text x="160" y="60" font-family="Arial" font-size="14" fill="#1E3A8A">Motion (Thumb)</text><line x1="150" y1="120" x2="70" y2="120" stroke="#10B981" stroke-width="4" marker-end="url(#arrow-greenr)"/><text x="60" y="100" font-family="Arial" font-size="14" fill="#065F46">Field (First Finger)</text><line x1="150" y1="120" x2="210" y2="180" stroke="#EF4444" stroke-width="4" marker-end="url(#arrow-redr)"/><text x="140" y="195" font-family="Arial" font-size="14" fill="#991B1B">Induced Current (Second Finger)</text><defs><marker id="arrow-bluer" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#3B82F6"/></marker><marker id="arrow-greenr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#10B981"/></marker><marker id="arrow-redr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#EF4444"/></marker></defs></svg>""")
    ],
    "note_physics_4_21_3.js": [
        ("svg-ac-generator", "Simple A.C. Generator", 
         """<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="60" height="100" fill="#EF4444"/><text x="60" y="105" font-family="Arial" font-size="20" fill="#FFF" text-anchor="middle">N</text><rect x="260" y="50" width="60" height="100" fill="#3B82F6"/><text x="290" y="105" font-family="Arial" font-size="20" fill="#FFF" text-anchor="middle">S</text><path d="M 90 70 L 260 70" stroke="#9CA3AF" stroke-dasharray="4"/><path d="M 90 100 L 260 100" stroke="#9CA3AF" stroke-dasharray="4"/><path d="M 90 130 L 260 130" stroke="#9CA3AF" stroke-dasharray="4"/><rect x="130" y="60" width="90" height="80" fill="none" stroke="#D97706" stroke-width="4" transform="rotate(30 175 100)"/><path d="M 150 145 C 130 180, 110 180, 110 200" fill="none" stroke="#D97706" stroke-width="3"/><path d="M 195 155 C 220 180, 240 180, 240 200" fill="none" stroke="#D97706" stroke-width="3"/></svg>"""),
        ("svg-ac-graph", "Alternating Current Output", 
         """<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><polyline points="20,120 20,20 20,70 280,70" fill="none" stroke="#000" stroke-width="2"/><path d="M 20 70 Q 50 -10 85 70 T 150 70 T 215 70 T 280 70" fill="none" stroke="#3B82F6" stroke-width="3"/><text x="15" y="30" font-family="Arial" font-size="12" text-anchor="end">V&#8320;</text><text x="15" y="120" font-family="Arial" font-size="12" text-anchor="end">-V&#8320;</text><text x="15" y="65" font-family="Arial" font-size="14" transform="rotate(-90 15,65)">Voltage</text><text x="250" y="90" font-family="Arial" font-size="14">Time (t)</text></svg>""")
    ],
    "note_physics_4_21_4.js": [
        ("svg-rms-values", "Root Mean Square (RMS) Concept", 
         """<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polyline points="30,160 30,30 30,160 280,160" fill="none" stroke="#000" stroke-width="2"/><path d="M 30 160 Q 60 40 90 160 T 150 160 T 210 160" fill="none" stroke="#93C5FD" stroke-width="2"/><path d="M 30 160 Q 60 10 90 160 T 150 160 T 210 160" fill="none" stroke="#EF4444" stroke-width="2"/><line x1="30" y1="85" x2="280" y2="85" stroke="#10B981" stroke-width="3" stroke-dasharray="6"/><text x="90" y="25" font-family="Arial" font-size="12" fill="#EF4444">Current Squared (I&sup2;)</text><text x="210" y="80" font-family="Arial" font-size="12" fill="#065F46">Mean Square Value</text><text x="20" y="90" font-family="Arial" font-size="12" transform="rotate(-90 20,90)">Value</text></svg>"""),
        ("svg-rms-formula", "RMS Formulas", 
         """<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#F8FAFC" rx="10"/><text x="175" y="50" font-family="Times New Roman" font-size="28" font-style="italic" font-weight="bold" text-anchor="middle" fill="#1E3A8A">V<tspan dy="6" font-size="16">rms</tspan> = V&#8320; / &radic;2</text><text x="175" y="90" font-family="Times New Roman" font-size="28" font-style="italic" font-weight="bold" text-anchor="middle" fill="#065F46">I<tspan dy="6" font-size="16">rms</tspan> = I&#8320; / &radic;2</text><text x="175" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">V&#8320; and I&#8320; are peak values (maximum amplitude)</text></svg>""")
    ],
    "note_physics_4_21_5.js": [
        ("svg-transformer-structure", "Transformer Structure", 
         """<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="250" height="120" fill="none" stroke="#6B7280" stroke-width="30"/><text x="175" y="105" font-family="Arial" font-size="14" text-anchor="middle" fill="#374151">Soft Iron Core</text><path d="M 20 60 Q 40 50 65 60 T 65 90 T 65 120 T 65 150 L 20 150" fill="none" stroke="#D97706" stroke-width="4"/><path d="M 330 50 Q 310 40 285 50 T 285 70 T 285 90 T 285 110 T 285 130 L 330 130" fill="none" stroke="#EF4444" stroke-width="4"/><text x="35" y="40" font-family="Arial" font-size="14" fill="#B45309">Primary (Np)</text><text x="290" y="30" font-family="Arial" font-size="14" fill="#991B1B">Secondary (Ns)</text></svg>"""),
        ("svg-transformer-equation", "Transformer Equation", 
         """<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="150" fill="#FEF3C7" rx="10"/><text x="175" y="55" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#92400E">Vp / Vs = Np / Ns</text><text x="175" y="100" font-family="Arial" font-size="16" text-anchor="middle" fill="#4B5563">For an ideal transformer (100% efficient):</text><text x="175" y="125" font-family="Courier New" font-size="20" font-weight="bold" text-anchor="middle" fill="#065F46">Ip Vp = Is Vs</text></svg>""")
    ]
}

def escape_string(s):
    # Escape single quotes and backslashes for JS string injection
    return s.replace('\\', '\\\\').replace("'", "\\'")

def process_files():
    base_dir = "src/data/seedNotes/physics"
    if not os.path.exists(base_dir):
        print(f"Directory {base_dir} not found.")
        return

    files_modified = 0
    
    for filename, svgs in svg_data.items():
        filepath = os.path.join(base_dir, filename)
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if '"svg"' in content and svgs[0][0] in content:
            print(f"SVGs already injected in {filename}")
            continue

        # Create new blocks
        new_blocks_str = ""
        for svg_id, caption, svg_content in svgs:
            js_svg_content = escape_string(svg_content)
            js_caption = escape_string(caption)
            new_blocks_str += f"""    {{
      "id": "{svg_id}",
      "type": "svg",
      "data": {{
        "svg": '{js_svg_content}',
        "caption": '{js_caption}'
      }}
    }},
"""

        # We look for the last brace of the blocks array.
        # usually: } \n  ],\n  "recall"  OR  } \n  ],\n  recall
        
        match = re.search(r'}(\s*\n\s*\]\,\n\s*"?recall"?:)', content)
        if match:
            clean_new_blocks = new_blocks_str.rstrip(",\n")
            replacement = '},\n' + clean_new_blocks + match.group(1)
            new_content = content[:match.start()] + replacement + content[match.end():]
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Injected SVGs into {filename}")
            files_modified += 1
        else:
            print(f"Could not carefully find the last brace before recall in {filename}")

if __name__ == "__main__":
    process_files()
