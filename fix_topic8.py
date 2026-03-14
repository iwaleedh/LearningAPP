import os
import re

svgs = {
    "0": """    {
      "id": "svg-emf",
      "type": "svg",
      "data": {
        "caption": "Electromotive Force (E.M.F.): Converting energy to electrical energy in a cell",
        "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 250\\"><defs><linearGradient id=\\"cellGrad\\" x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"100%\\"><stop offset=\\"0%\\" stop-color=\\"#e2e8f0\\"/><stop offset=\\"100%\\" stop-color=\\"#94a3b8\\"/></linearGradient></defs><rect x=\\"150\\" y=\\"80\\" width=\\"100\\" height=\\"120\\" rx=\\"10\\" fill=\\"url(#cellGrad)\\" stroke=\\"#475569\\" stroke-width=\\"3\\"/><rect x=\\"180\\" y=\\"60\\" width=\\"40\\" height=\\"20\\" rx=\\"4\\" fill=\\"#cbd5e1\\" stroke=\\"#475569\\" stroke-width=\\"3\\"/><text x=\\"200\\" y=\\"140\\" font-family=\\"Arial\\" font-size=\\"24\\" font-weight=\\"bold\\" fill=\\"#1e293b\\" text-anchor=\\"middle\\">CELL</text><path d=\\"M180 80 L180 30 L50 30 L50 200 L150 200\\" fill=\\"none\\" stroke=\\"#3b82f6\\" stroke-width=\\"4\\"/><path d=\\"M220 80 L220 30 L350 30 L350 200 L250 200\\" fill=\\"none\\" stroke=\\"#ef4444\\" stroke-width=\\"4\\"/><circle cx=\\"50\\" cy=\\"115\\" r=\\"15\\" fill=\\"#fff\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><text x=\\"50\\" y=\\"122\\" font-family=\\"Arial\\" font-size=\\"20\\" fill=\\"#1e293b\\" text-anchor=\\"middle\\">e⁻</text><circle cx=\\"350\\" cy=\\"115\\" r=\\"15\\" fill=\\"#fff\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><text x=\\"350\\" y=\\"122\\" font-family=\\"Arial\\" font-size=\\"20\\" fill=\\"#1e293b\\" text-anchor=\\"middle\\">e⁻</text><text x=\\"200\\" y=\\"230\\" font-family=\\"Arial\\" font-size=\\"16\\" fill=\\"#475569\\" text-anchor=\\"middle\\">Chemical Energy → Electrical Energy</text></svg>"
      }
    }""",
    "1": """    {
      "id": "svg-internal-resistance",
      "type": "svg",
      "data": {
        "caption": "Model of a real cell: An ideal E.M.F source in series with an internal resistance (r)",
        "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 500 250\\"><rect x=\\"100\\" y=\\"50\\" width=\\"300\\" height=\\"150\\" rx=\\"15\\" fill=\\"#f8fafc\\" stroke=\\"#94a3b8\\" stroke-width=\\"2\\" stroke-dasharray=\\"8 4\\"/><text x=\\"250\\" y=\\"220\\" font-family=\\"Arial\\" font-size=\\"16\\" fill=\\"#64748b\\" text-anchor=\\"middle\\">Real Cell</text><path d=\\"M50 125 L150 125\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><path d=\\"M150 100 L150 150 M170 110 L170 140\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"4\\"/><text x=\\"160\\" y=\\"90\\" font-family=\\"Arial\\" font-size=\\"22\\" font-weight=\\"bold\\" font-style=\\"italic\\" fill=\\"#2563eb\\" text-anchor=\\"middle\\">ε</text><path d=\\"M170 125 L250 125\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><rect x=\\"250\\" y=\\"110\\" width=\\"80\\" height=\\"30\\" fill=\\"#fff\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><text x=\\"290\\" y=\\"132\\" font-family=\\"Arial\\" font-size=\\"22\\" font-style=\\"italic\\" fill=\\"#ef4444\\" text-anchor=\\"middle\\">r</text><path d=\\"M330 125 L450 125\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><circle cx=\\"50\\" cy=\\"125\\" r=\\"4\\" fill=\\"#1e293b\\"/><circle cx=\\"450\\" cy=\\"125\\" r=\\"4\\" fill=\\"#1e293b\\"/><text x=\\"250\\" y=\\"30\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"#334155\\" text-anchor=\\"middle\\">Terminal P.D. (V)</text><path d=\\"M50 40 L50 20 M450 40 L450 20 M50 20 L450 20\\" fill=\\"none\\" stroke=\\"#94a3b8\\" stroke-width=\\"2\\"/><path d=\\"M240 15 L250 20 L240 25 Z\\" fill=\\"#94a3b8\\"/><path d=\\"M260 15 L250 20 L260 25 Z\\" fill=\\"#94a3b8\\"/></svg>"
      }
    }""",
    "2": """    {
      "id": "svg-v-vs-i",
      "type": "svg",
      "data": {
        "caption": "Graph of Terminal P.D. against Current (V = \\u03b5 - Ir)",
        "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 300\\"><path d=\\"M50 250 L50 50 M50 250 L350 250\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><text x=\\"300\\" y=\\"280\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"#1e293b\\">Current, I (A)</text><text x=\\"30\\" y=\\"150\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"#1e293b\\" transform=\\"rotate(-90 30,150)\\">Terminal P.D., V (V)</text><path d=\\"M50 80 L300 250\\" fill=\\"none\\" stroke=\\"#3b82f6\\" stroke-width=\\"4\\"/><circle cx=\\"50\\" cy=\\"80\\" r=\\"5\\" fill=\\"#ef4444\\"/><text x=\\"60\\" y=\\"75\\" font-family=\\"Arial\\" font-size=\\"20\\" font-weight=\\"bold\\" font-style=\\"italic\\" fill=\\"#ef4444\\">\\u03b5 (E.M.F.)</text><path d=\\"M150 148 L220 148 L220 195\\" fill=\\"none\\" stroke=\\"#64748b\\" stroke-width=\\"2\\" stroke-dasharray=\\"4 4\\"/><text x=\\"228\\" y=\\"170\\" font-family=\\"Arial\\" font-size=\\"16\\" fill=\\"#475569\\">Gradient = -r</text><circle cx=\\"300\\" cy=\\"250\\" r=\\"5\\" fill=\\"#10b981\\"/><text x=\\"310\\" y=\\"240\\" font-family=\\"Arial\\" font-size=\\"16\\" fill=\\"#10b981\\">Short-circuit I</text></svg>"
      }
    }""",
    "3": """    {
      "id": "svg-emf-practical-circuit",
      "type": "svg",
      "data": {
        "caption": "Circuit to investigate E.M.F and internal resistance",
        "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 500 300\\"><path d=\\"M100 80 L350 80 L350 200 L100 200 Z\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><path d=\\"M100 60 L100 100 M80 70 L80 90\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"4\\"/><text x=\\"50\\" y=\\"85\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"#2563eb\\">Cell (\\u03b5, r)</text><circle cx=\\"225\\" cy=\\"80\\" r=\\"20\\" fill=\\"#fff\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><text x=\\"225\\" y=\\"88\\" font-family=\\"Arial\\" font-size=\\"20\\" font-weight=\\"bold\\" fill=\\"#1e293b\\" text-anchor=\\"middle\\">A</text><rect x=\\"175\\" y=\\"185\\" width=\\"100\\" height=\\"30\\" fill=\\"#fff\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><path d=\\"M160 225 L285 175 M275 170 L285 175 L280 185\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"2\\"/><text x=\\"225\\" y=\\"240\\" font-family=\\"Arial\\" font-size=\\"16\\" fill=\\"#475569\\" text-anchor=\\"middle\\">Variable Resistor (R)</text><path d=\\"M40 80 L40 140 L150 140 L150 80\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"2\\"/><circle cx=\\"95\\" cy=\\"140\\" r=\\"20\\" fill=\\"#fff\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><text x=\\"95\\" y=\\"148\\" font-family=\\"Arial\\" font-size=\\"20\\" font-weight=\\"bold\\" fill=\\"#1e293b\\" text-anchor=\\"middle\\">V</text><text x=\\"420\\" y=\\"145\\" font-family=\\"Arial\\" font-size=\\"16\\" fill=\\"#0f766e\\">Measure V &amp; I</text><text x=\\"420\\" y=\\"165\\" font-family=\\"Arial\\" font-size=\\"16\\" fill=\\"#0f766e\\">Vary R</text></svg>"
      }
    }""",
    "4": """    {
      "id": "svg-thermistor-graph",
      "type": "svg",
      "data": {
        "caption": "Resistance against Temperature for an NTC Thermistor",
        "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 300\\"><path d=\\"M50 250 L50 50 M50 250 L350 250\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><text x=\\"250\\" y=\\"280\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"#1e293b\\">Temperature (°C)</text><text x=\\"30\\" y=\\"150\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"#1e293b\\" transform=\\"rotate(-90 30,150)\\">Resistance (\\u03a9)</text><path d=\\"M70 60 Q 90 220 320 230\\" fill=\\"none\\" stroke=\\"#ef4444\\" stroke-width=\\"4\\"/><rect x=\\"200\\" y=\\"40\\" width=\\"150\\" height=\\"80\\" rx=\\"8\\" fill=\\"#f8fafc\\" stroke=\\"#cbd5e1\\" stroke-width=\\"2\\"/><text x=\\"275\\" y=\\"65\\" font-family=\\"Arial\\" font-size=\\"14\\" fill=\\"#334155\\" text-anchor=\\"middle\\">NTC Thermistor</text><text x=\\"275\\" y=\\"85\\" font-family=\\"Arial\\" font-size=\\"12\\" fill=\\"#64748b\\" text-anchor=\\"middle\\">As Temp \\u2191, n \\u2191</text><text x=\\"275\\" y=\\"105\\" font-family=\\"Arial\\" font-size=\\"12\\" fill=\\"#64748b\\" text-anchor=\\"middle\\">Resistance \\u2193 drops rapidly</text></svg>"
      }
    }""",
    "5": """    {
      "id": "svg-ldr-graph",
      "type": "svg",
      "data": {
        "caption": "Resistance against Light Intensity for an LDR",
        "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 300\\"><path d=\\"M50 250 L50 50 M50 250 L350 250\\" fill=\\"none\\" stroke=\\"#1e293b\\" stroke-width=\\"3\\"/><text x=\\"220\\" y=\\"280\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"#1e293b\\">Light Intensity (Lux)</text><text x=\\"30\\" y=\\"150\\" font-family=\\"Arial\\" font-size=\\"18\\" fill=\\"#1e293b\\" transform=\\"rotate(-90 30,150)\\">Resistance (\\u03a9)</text><path d=\\"M70 60 Q 100 220 320 230\\" fill=\\"none\\" stroke=\\"#eab308\\" stroke-width=\\"4\\"/><rect x=\\"200\\" y=\\"50\\" width=\\"160\\" height=\\"90\\" rx=\\"8\\" fill=\\"#fdfde8\\" stroke=\\"#fef08a\\" stroke-width=\\"2\\"/><text x=\\"280\\" y=\\"75\\" font-family=\\"Arial\\" font-size=\\"14\\" fill=\\"#ca8a04\\" text-anchor=\\"middle\\">LDR (Light Dependent Resistor)</text><text x=\\"280\\" y=\\"95\\" font-family=\\"Arial\\" font-size=\\"12\\" fill=\\"#a16207\\" text-anchor=\\"middle\\">Dark = High R (M\\u03a9)</text><text x=\\"280\\" y=\\"115\\" font-family=\\"Arial\\" font-size=\\"12\\" fill=\\"#854d0e\\" text-anchor=\\"middle\\">Light = Low R (\\u03a9)</text></svg>"
      }
    }"""
}

for i in range(6):
    file_path = f"src/data/seedNotes/physics/note_physics_2_8_{i}.js"
    if not os.path.exists(file_path):
        print(f"Skipping {file_path}, does not exist.")
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    svg_content = svgs.get(str(i))
    if svg_content:
        if "    {\n      \"id\": \"svg-" in content:
            print(f"SVG already in {file_path}")
            continue

        replacement = f"{svg_content},\n  ],\n  recall:"
        if "],\n  recall:" in content:
            content = content.replace("],\n  recall:", replacement)
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Injected SVG into {file_path}")
        else:
            print(f"Could not find insert point in {file_path}")

print("Done fixing Topic 8 SVGs")