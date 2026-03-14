import os
import re

SVGS = {
    "4_22_0": [
        {
            "id": "svg-4-22-0-1",
            "title": "Alpha Particle Scattering",
            "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><path d=\"M50 100 L150 100 M150 100 L350 30 M150 100 L350 170 M150 100 L50 40\" stroke=\"#e74c3c\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><circle cx=\"150\" cy=\"100\" r=\"10\" fill=\"#f1c40f\"/><text x=\"150\" y=\"125\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Gold Nucleus</text><text x=\"40\" y=\"100\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#e74c3c\">α particles</text><text x=\"360\" y=\"30\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#e74c3c\">Deflected</text><text x=\"40\" y=\"40\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#e74c3c\">Backscattered</text></svg>"
        },
        {
            "id": "svg-4-22-0-2",
            "title": "Nucleon Notation",
            "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"150\" fill=\"#f8f9fa\" rx=\"8\"/><text x=\"150\" y=\"90\" font-family=\"sans-serif\" font-size=\"64\" font-weight=\"bold\" text-anchor=\"middle\">X</text><text x=\"110\" y=\"55\" font-family=\"sans-serif\" font-size=\"24\" font-weight=\"bold\" fill=\"#3498db\">A</text><text x=\"110\" y=\"115\" font-family=\"sans-serif\" font-size=\"24\" font-weight=\"bold\" fill=\"#e74c3c\">Z</text><path d=\"M90 45 L50 45\" stroke=\"#7f8c8d\" stroke-width=\"2\"/><text x=\"45\" y=\"50\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"14\">Nucleon Number</text><path d=\"M90 105 L50 105\" stroke=\"#7f8c8d\" stroke-width=\"2\"/><text x=\"45\" y=\"110\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"14\">Proton Number</text></svg>"
        }
    ],
    "4_22_1": [
        {
            "id": "svg-4-22-1-1",
            "title": "Thermionic Emission",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><path d=\"M50 100 Q 100 20 150 100 Q 200 180 250 100\" stroke=\"#e67e22\" stroke-width=\"4\" fill=\"none\"/><circle cx=\"150\" cy=\"100\" r=\"4\" fill=\"#3498db\"/><circle cx=\"170\" cy=\"80\" r=\"4\" fill=\"#3498db\"/><circle cx=\"130\" cy=\"70\" r=\"4\" fill=\"#3498db\"/><circle cx=\"180\" cy=\"120\" r=\"4\" fill=\"#3498db\"/><text x=\"150\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Heated Filament</text><text x=\"200\" y=\"70\" text-anchor=\"start\" fill=\"#3498db\" font-family=\"sans-serif\" font-size=\"14\">Electrons Emitted</text></svg>"
        },
        {
            "id": "svg-4-22-1-2",
            "title": "Electron Gun",
            "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><rect x=\"50\" y=\"80\" width=\"20\" height=\"40\" fill=\"#e67e22\"/><rect x=\"120\" y=\"50\" width=\"10\" height=\"100\" fill=\"#95a5a6\"/><rect x=\"180\" y=\"50\" width=\"10\" height=\"100\" fill=\"#95a5a6\"/><path d=\"M125 100 L350 100\" stroke=\"#3498db\" stroke-width=\"4\" stroke-dasharray=\"5 5\"/><text x=\"60\" y=\"140\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Cathode (-)</text><text x=\"150\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Anode (+)</text><text x=\"260\" y=\"90\" text-anchor=\"middle\" fill=\"#3498db\" font-family=\"sans-serif\" font-size=\"14\">Electron Beam</text></svg>"
        }
    ],
    "4_22_2": [
        {
            "id": "svg-4-22-2-1",
            "title": "Particle Accelerator - LINAC",
            "svg": "<svg viewBox=\"0 0 400 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"150\" fill=\"#ecf0f1\" rx=\"8\"/><rect x=\"50\" y=\"60\" width=\"40\" height=\"30\" fill=\"#34495e\"/><rect x=\"110\" y=\"60\" width=\"60\" height=\"30\" fill=\"#34495e\"/><rect x=\"190\" y=\"60\" width=\"80\" height=\"30\" fill=\"#34495e\"/><rect x=\"290\" y=\"60\" width=\"100\" height=\"30\" fill=\"#34495e\"/><path d=\"M30 75 L380 75\" stroke=\"#e74c3c\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><text x=\"200\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Increasing drift tube length as particle accelerates</text></svg>"
        },
        {
            "id": "svg-4-22-2-2",
            "title": "Cyclotron Path",
            "svg": "<svg viewBox=\"0 0 300 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"300\" fill=\"#f8f9fa\" rx=\"8\"/><path d=\"M 150 150 A 10 10 0 0 1 150 140 A 20 20 0 0 0 150 160 A 30 30 0 0 1 150 130 A 40 40 0 0 0 150 170 A 50 50 0 0 1 150 120 A 60 60 0 0 0 150 180 A 70 70 0 0 1 150 110 A 80 80 0 0 0 150 190 A 90 90 0 0 1 150 100 A 100 100 0 0 0 150 200\" stroke=\"#9b59b6\" stroke-width=\"2\" fill=\"none\"/><rect x=\"145\" y=\"50\" width=\"10\" height=\"200\" fill=\"#f8f9fa\"/><line x1=\"145\" y1=\"50\" x2=\"145\" y2=\"250\" stroke=\"#2c3e50\" stroke-width=\"2\"/><line x1=\"155\" y1=\"50\" x2=\"155\" y2=\"250\" stroke=\"#2c3e50\" stroke-width=\"2\"/><text x=\"150\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Dee Gap (Electric Field)</text></svg>"
        }
    ],
    "4_22_3": [
        {
            "id": "svg-4-22-3-1",
            "title": "Particle Detectors",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><rect x=\"50\" y=\"50\" width=\"200\" height=\"100\" fill=\"#bdc3c7\"/><path d=\"M50 100 L250 100\" stroke=\"#e74c3c\" stroke-width=\"2\" stroke-dasharray=\"4 8\"/><circle cx=\"100\" cy=\"100\" r=\"2\" fill=\"#2c3e50\"/><circle cx=\"150\" cy=\"100\" r=\"2\" fill=\"#2c3e50\"/><circle cx=\"200\" cy=\"100\" r=\"2\" fill=\"#2c3e50\"/><text x=\"150\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Ionisation Track</text></svg>"
        },
        {
            "id": "svg-4-22-3-2",
            "title": "Cloud Chamber",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#ecf0f1\" rx=\"8\"/><path d=\"M50 150 C 100 150, 150 100, 250 50\" stroke=\"#34495e\" stroke-width=\"3\" fill=\"none\"/><path d=\"M50 150 C 100 150, 150 180, 200 190\" stroke=\"#c0392b\" stroke-width=\"2\" fill=\"none\"/><text x=\"260\" y=\"50\" font-family=\"sans-serif\" font-size=\"12\">High Momentum</text><text x=\"210\" y=\"190\" font-family=\"sans-serif\" font-size=\"12\">Low Momentum</text><text x=\"150\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Tracks in Magnetic Field</text></svg>"
        }
    ],
    "4_22_4": [
        {
            "id": "svg-4-22-4-1",
            "title": "Energy-Mass Equivalence",
            "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"150\" fill=\"#fdfefe\" rx=\"8\"/><text x=\"150\" y=\"90\" font-family=\"serif\" font-style=\"italic\" font-size=\"48\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2c3e50\">E = mc²</text><text x=\"60\" y=\"130\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#e74c3c\">Energy</text><text x=\"170\" y=\"130\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#2980b9\">Mass</text><text x=\"260\" y=\"130\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#8e44ad\">Speed of Light</text></svg>"
        },
        {
            "id": "svg-4-22-4-2",
            "title": "Pair Production",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><path d=\"M50 100 L140 100\" stroke=\"#f1c40f\" stroke-width=\"3\" stroke-dasharray=\"4 4\"/><text x=\"90\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Photon (γ)</text><circle cx=\"150\" cy=\"100\" r=\"8\" fill=\"#95a5a6\"/><text x=\"150\" y=\"130\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Nucleus</text><path d=\"M160 95 C 190 70, 220 50, 250 50\" stroke=\"#3498db\" stroke-width=\"2\" fill=\"none\"/><circle cx=\"250\" cy=\"50\" r=\"6\" fill=\"#3498db\"/><text x=\"265\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\">e⁻</text><path d=\"M160 105 C 190 130, 220 150, 250 150\" stroke=\"#e74c3c\" stroke-width=\"2\" fill=\"none\"/><circle cx=\"250\" cy=\"150\" r=\"6\" fill=\"#e74c3c\"/><text x=\"265\" y=\"155\" font-family=\"sans-serif\" font-size=\"14\">e⁺</text></svg>"
        }
    ],
    "4_22_5": [
        {
            "id": "svg-4-22-5-1",
            "title": "Radius of Particles",
            "svg": "<svg viewBox=\"0 0 350 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"350\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"#bdc3c7\"/><circle cx=\"250\" cy=\"100\" r=\"20\" fill=\"#95a5a6\"/><path d=\"M60 150 L140 150\" stroke=\"#2c3e50\" stroke-width=\"2\" marker-end=\"url(#arrow)\" marker-start=\"url(#arrow)\"/><path d=\"M230 130 L270 130\" stroke=\"#2c3e50\" stroke-width=\"2\" marker-end=\"url(#arrow)\" marker-start=\"url(#arrow)\"/><text x=\"100\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">r (larger mass/charge)</text><text x=\"250\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">r (smaller)</text><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\"/></marker></defs></svg>"
        },
        {
            "id": "svg-4-22-5-2",
            "title": "Magnetic Deflection",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><pattern id=\"cross\" x=\"0\" y=\"0\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><text x=\"0\" y=\"15\" font-family=\"sans-serif\" font-size=\"16\" fill=\"#bdc3c7\">×</text></pattern><rect x=\"50\" y=\"50\" width=\"200\" height=\"100\" fill=\"url(#cross)\"/><path d=\"M20 100 L80 100 C 120 100, 150 70, 150 30\" stroke=\"#3498db\" stroke-width=\"3\" fill=\"none\"/><circle cx=\"150\" cy=\"30\" r=\"5\" fill=\"#3498db\"/><text x=\"150\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">p (+)</text><path d=\"M20 100 L80 100 C 120 100, 150 130, 150 170\" stroke=\"#e74c3c\" stroke-width=\"3\" fill=\"none\"/><circle cx=\"150\" cy=\"170\" r=\"5\" fill=\"#e74c3c\"/><text x=\"150\" y=\"190\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">e (-)</text><text x=\"150\" y=\"105\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"#2c3e50\">B Field Into Page</text></svg>"
        }
    ],
    "4_22_6": [
        {
            "id": "svg-4-22-6-1",
            "title": "Subatomic Particles Hierarchy",
            "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><rect x=\"130\" y=\"20\" width=\"140\" height=\"40\" rx=\"5\" fill=\"#3498db\"/><text x=\"200\" y=\"45\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"14\">Fundamental Particles</text><path d=\"M200 60 L100 100 M200 60 L300 100\" stroke=\"#7f8c8d\" stroke-width=\"2\"/><rect x=\"40\" y=\"100\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#e74c3c\"/><text x=\"100\" y=\"125\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"14\">Quarks</text><rect x=\"240\" y=\"100\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#2ecc71\"/><text x=\"300\" y=\"125\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"14\">Leptons</text></svg>"
        },
        {
            "id": "svg-4-22-6-2",
            "title": "Antimatter",
            "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"150\" fill=\"#f8f9fa\" rx=\"8\"/><circle cx=\"100\" cy=\"75\" r=\"30\" fill=\"#3498db\"/><text x=\"100\" y=\"80\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"18\">e⁻</text><circle cx=\"200\" cy=\"75\" r=\"30\" fill=\"#e74c3c\"/><text x=\"200\" y=\"80\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"18\">e⁺</text><text x=\"100\" y=\"130\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Electron (Matter)</text><text x=\"200\" y=\"130\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Positron (Antimatter)</text></svg>"
        }
    ],
    "4_22_7": [
        {
            "id": "svg-4-22-7-1",
            "title": "Electric Field Force",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><line x1=\"50\" y1=\"40\" x2=\"250\" y2=\"40\" stroke=\"#e74c3c\" stroke-width=\"4\"/><text x=\"150\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#e74c3c\">Positive Plate (+)</text><line x1=\"50\" y1=\"160\" x2=\"250\" y2=\"160\" stroke=\"#3498db\" stroke-width=\"4\"/><text x=\"150\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#3498db\">Negative Plate (-)</text><path d=\"M100 50 L100 150 M150 50 L150 150 M200 50 L200 150\" stroke=\"#bdc3c7\" stroke-dasharray=\"4 4\"/><circle cx=\"150\" cy=\"100\" r=\"10\" fill=\"#e74c3c\"/><path d=\"M150 100 L150 130\" stroke=\"#2c3e50\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><text x=\"165\" y=\"120\" font-family=\"sans-serif\" font-size=\"14\">F = EQ</text></svg>"
        },
        {
            "id": "svg-4-22-7-2",
            "title": "Magnetic Field Force",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><pattern id=\"dot\" x=\"0\" y=\"0\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"2\" fill=\"#95a5a6\"/></pattern><rect x=\"50\" y=\"50\" width=\"200\" height=\"100\" fill=\"url(#dot)\"/><path d=\"M50 150 L120 150 C 150 150, 150 120, 150 90\" stroke=\"#2ecc71\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#arrow)\"/><circle cx=\"100\" cy=\"150\" r=\"6\" fill=\"#e74c3c\"/><text x=\"160\" y=\"100\" font-family=\"sans-serif\" font-size=\"14\">F = Bqv</text><text x=\"150\" y=\"40\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Magnetic Field Out of Page</text></svg>"
        }
    ],
    "4_22_8": [
        {
            "id": "svg-4-22-8-1",
            "title": "Mass Spectrometer Sectors",
            "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><rect x=\"50\" y=\"80\" width=\"60\" height=\"40\" fill=\"#3498db\"/><text x=\"80\" y=\"105\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">Ionise</text><rect x=\"140\" y=\"80\" width=\"80\" height=\"40\" fill=\"#e67e22\"/><text x=\"180\" y=\"105\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">Accelerate</text><path d=\"M250 100 C 300 100, 320 80, 320 40\" stroke=\"#9b59b6\" stroke-width=\"10\" fill=\"none\"/><text x=\"290\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Magnetic Deflection</text></svg>"
        },
        {
            "id": "svg-4-22-8-2",
            "title": "Velocity Selector",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><rect x=\"100\" y=\"60\" width=\"100\" height=\"10\" fill=\"#e74c3c\"/><rect x=\"100\" y=\"130\" width=\"100\" height=\"10\" fill=\"#3498db\"/><path d=\"M30 100 L270 100\" stroke=\"#f1c40f\" stroke-width=\"3\" marker-end=\"url(#arrow)\"/><text x=\"150\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Electric Field E</text><text x=\"150\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Magnetic Field B</text><text x=\"150\" y=\"185\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">v = E / B for zero deflection</text></svg>"
        }
    ],
    "4_22_9": [
        {
            "id": "svg-4-22-9-1",
            "title": "Relativistic Effects",
            "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"150\" fill=\"#f8f9fa\" rx=\"8\"/><path d=\"M50 120 C 150 120, 200 100, 250 20\" stroke=\"#e74c3c\" stroke-width=\"3\" fill=\"none\"/><line x1=\"50\" y1=\"120\" x2=\"270\" y2=\"120\" stroke=\"#2c3e50\" stroke-width=\"2\"/><line x1=\"50\" y1=\"120\" x2=\"50\" y2=\"20\" stroke=\"#2c3e50\" stroke-width=\"2\"/><text x=\"160\" y=\"140\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Speed (v)</text><text x=\"30\" y=\"70\" text-anchor=\"middle\" transform=\"rotate(-90 30,70)\" font-family=\"sans-serif\" font-size=\"12\">Mass (m)</text><line x1=\"250\" y1=\"120\" x2=\"250\" y2=\"20\" stroke=\"#95a5a6\" stroke-dasharray=\"4 4\"/><text x=\"250\" y=\"140\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">c</text></svg>"
        },
        {
            "id": "svg-4-22-9-2",
            "title": "Momentum in Particle Physics",
            "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"150\" fill=\"#f8f9fa\" rx=\"8\"/><text x=\"150\" y=\"80\" text-anchor=\"middle\" font-family=\"serif\" font-size=\"36\" font-weight=\"bold\" fill=\"#2c3e50\">p = mv / √(1 - v²/c²)</text><text x=\"150\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#c0392b\">Relativistic Momentum</text></svg>"
        }
    ],
    "4_23_0": [
        {
            "id": "svg-4-23-0-1",
            "title": "Standard Model Summary",
            "svg": "<svg viewBox=\"0 0 400 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"250\" fill=\"#f8f9fa\" rx=\"8\"/><rect x=\"40\" y=\"50\" width=\"140\" height=\"150\" fill=\"#e8bc8c\" rx=\"5\"/><text x=\"110\" y=\"75\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\">Quarks</text><text x=\"110\" y=\"110\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Up / Down</text><text x=\"110\" y=\"140\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Charm / Strange</text><text x=\"110\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Top / Bottom</text><rect x=\"210\" y=\"50\" width=\"140\" height=\"150\" fill=\"#82ccdd\" rx=\"5\"/><text x=\"280\" y=\"75\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\">Leptons</text><text x=\"280\" y=\"110\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Electron / νe</text><text x=\"280\" y=\"140\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Muon / νμ</text><text x=\"280\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Tau / ντ</text><text x=\"200\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\">Fermions</text></svg>"
        },
        {
            "id": "svg-4-23-0-2",
            "title": "Hadrons Structure",
            "svg": "<svg viewBox=\"0 0 350 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"350\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"#dfe6e9\"/><circle cx=\"85\" cy=\"85\" r=\"12\" fill=\"#e74c3c\"/><text x=\"85\" y=\"89\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"10\">q</text><circle cx=\"115\" cy=\"85\" r=\"12\" fill=\"#3498db\"/><text x=\"115\" y=\"89\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"10\">q</text><circle cx=\"100\" cy=\"115\" r=\"12\" fill=\"#2ecc71\"/><text x=\"100\" y=\"119\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"10\">q</text><text x=\"100\" y=\"165\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Baryon (3 quarks)</text><circle cx=\"250\" cy=\"100\" r=\"40\" fill=\"#dfe6e9\"/><circle cx=\"235\" cy=\"100\" r=\"12\" fill=\"#e74c3c\"/><text x=\"235\" y=\"104\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"10\">q</text><circle cx=\"265\" cy=\"100\" r=\"12\" fill=\"#9b59b6\"/><text x=\"265\" y=\"104\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"10\">q̄</text><text x=\"250\" y=\"165\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Meson (quark-antiquark)</text></svg>"
        }
    ],
    "4_23_1": [
        {
            "id": "svg-4-23-1-1",
            "title": "Proton and Neutron Quarks",
            "svg": "<svg viewBox=\"0 0 350 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"350\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><circle cx=\"100\" cy=\"90\" r=\"40\" fill=\"#ecf0f1\" stroke=\"#bdc3c7\" stroke-width=\"2\"/><circle cx=\"85\" cy=\"75\" r=\"14\" fill=\"#e74c3c\"/><text x=\"85\" y=\"80\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">u</text><circle cx=\"115\" cy=\"75\" r=\"14\" fill=\"#e74c3c\"/><text x=\"115\" y=\"80\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">u</text><circle cx=\"100\" cy=\"105\" r=\"14\" fill=\"#3498db\"/><text x=\"100\" y=\"110\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">d</text><text x=\"100\" y=\"155\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\">Proton (uud)</text><text x=\"100\" y=\"175\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Charge: +1</text><circle cx=\"250\" cy=\"90\" r=\"40\" fill=\"#ecf0f1\" stroke=\"#bdc3c7\" stroke-width=\"2\"/><circle cx=\"235\" cy=\"75\" r=\"14\" fill=\"#3498db\"/><text x=\"235\" y=\"80\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">d</text><circle cx=\"265\" cy=\"75\" r=\"14\" fill=\"#3498db\"/><text x=\"265\" y=\"80\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">d</text><circle cx=\"250\" cy=\"105\" r=\"14\" fill=\"#e74c3c\"/><text x=\"250\" y=\"110\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">u</text><text x=\"250\" y=\"155\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\">Neutron (udd)</text><text x=\"250\" y=\"175\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">Charge: 0</text></svg>"
        },
        {
            "id": "svg-4-23-1-2",
            "title": "Quark Charges",
            "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"#fdfefe\" rx=\"8\"/><rect x=\"40\" y=\"40\" width=\"100\" height=\"100\" rx=\"8\" fill=\"#e74c3c\"/><text x=\"90\" y=\"85\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"24\" font-weight=\"bold\">u</text><text x=\"90\" y=\"115\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"16\">+2/3e</text><rect x=\"160\" y=\"40\" width=\"100\" height=\"100\" rx=\"8\" fill=\"#3498db\"/><text x=\"210\" y=\"85\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"24\" font-weight=\"bold\">d</text><text x=\"210\" y=\"115\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"16\">-1/3e</text><text x=\"150\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\">Fundamental Charges</text></svg>"
        }
    ],
    "4_23_2": [
        {
            "id": "svg-4-23-2-1",
            "title": "Beta Minus Decay",
            "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><text x=\"200\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\">β⁻ Decay: n → p + e⁻ + ν̄e</text><path d=\"M100 100 L180 100\" stroke=\"#7f8c8d\" stroke-width=\"3\" marker-end=\"url(#arrow)\"/><circle cx=\"80\" cy=\"100\" r=\"15\" fill=\"#3498db\"/><text x=\"80\" y=\"105\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"14\">n</text><circle cx=\"200\" cy=\"100\" r=\"15\" fill=\"#e74c3c\"/><text x=\"200\" y=\"105\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"14\">p</text><path d=\"M215 100 L280 60\" stroke=\"#95a5a6\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><circle cx=\"290\" cy=\"50\" r=\"10\" fill=\"#f1c40f\"/><text x=\"290\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\">e⁻</text><path d=\"M215 100 L280 140\" stroke=\"#95a5a6\" stroke-width=\"2\" stroke-dasharray=\"4 4\" marker-end=\"url(#arrow)\"/><circle cx=\"290\" cy=\"150\" r=\"10\" fill=\"#9b59b6\"/><text x=\"290\" y=\"155\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">ν̄e</text></svg>"
        },
        {
            "id": "svg-4-23-2-2",
            "title": "Beta Plus Decay",
            "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><text x=\"200\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\">β⁺ Decay: p → n + e⁺ + νe</text><path d=\"M100 100 L180 100\" stroke=\"#7f8c8d\" stroke-width=\"3\" marker-end=\"url(#arrow)\"/><circle cx=\"80\" cy=\"100\" r=\"15\" fill=\"#e74c3c\"/><text x=\"80\" y=\"105\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"14\">p</text><circle cx=\"200\" cy=\"100\" r=\"15\" fill=\"#3498db\"/><text x=\"200\" y=\"105\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"14\">n</text><path d=\"M215 100 L280 60\" stroke=\"#95a5a6\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><circle cx=\"290\" cy=\"50\" r=\"10\" fill=\"#e67e22\"/><text x=\"290\" y=\"55\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">e⁺</text><path d=\"M215 100 L280 140\" stroke=\"#95a5a6\" stroke-width=\"2\" stroke-dasharray=\"4 4\" marker-end=\"url(#arrow)\"/><circle cx=\"290\" cy=\"150\" r=\"10\" fill=\"#1abc9c\"/><text x=\"290\" y=\"155\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">νe</text></svg>"
        }
    ],
    "4_23_3": [
        {
            "id": "svg-4-23-3-1",
            "title": "Conservation Laws",
            "svg": "<svg viewBox=\"0 0 350 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"350\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><text x=\"175\" y=\"40\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"bold\">Quantities Conserved in Interactions</text><rect x=\"50\" y=\"60\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#27ae60\"/><text x=\"110\" y=\"80\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">Charge (Q)</text><rect x=\"180\" y=\"60\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#2980b9\"/><text x=\"240\" y=\"80\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">Baryon Number (B)</text><rect x=\"50\" y=\"100\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#8e44ad\"/><text x=\"110\" y=\"120\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">Lepton Number (L)</text><rect x=\"180\" y=\"100\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#f39c12\"/><text x=\"240\" y=\"120\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">Energy-Mass</text><rect x=\"115\" y=\"140\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#c0392b\"/><text x=\"175\" y=\"160\" text-anchor=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-size=\"12\">Momentum (p)</text></svg>"
        },
        {
            "id": "svg-4-23-3-2",
            "title": "Equation Validation",
            "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"400\" height=\"200\" fill=\"#f8f9fa\" rx=\"8\"/><text x=\"200\" y=\"40\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"18\" font-weight=\"bold\" fill=\"#2c3e50\">n → p + e⁻ + ν̄e</text><text x=\"50\" y=\"80\" font-family=\"sans-serif\" font-size=\"14\">Q: 0 → (+1) + (-1) + 0</text><text x=\"300\" y=\"80\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#27ae60\">✓</text><text x=\"50\" y=\"120\" font-family=\"sans-serif\" font-size=\"14\">B: 1 → 1  +  0  +  0</text><text x=\"300\" y=\"120\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#27ae60\">✓</text><text x=\"50\" y=\"160\" font-family=\"sans-serif\" font-size=\"14\">L: 0 → 0  + (+1) + (-1)</text><text x=\"300\" y=\"160\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#27ae60\">✓</text></svg>"
        }
    ]
}

def escape_js_string(s):
    # Escape double quotes and backslashes for JS strings.
    s = s.replace("\\\\", "\\\\\\\\")
    s = s.replace('"', '\\\\"')
    return s

def inject_svgs():
    base_dir = "src/data/seedNotes/physics"
    
    for key, svg_list in SVGS.items():
        file_path = os.path.join(base_dir, f"note_physics_{key}.js")
        
        if not os.path.exists(file_path):
            print(f"File {file_path} not found. Skipping.")
            continue
            
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Build SVG block strings
        svg_blocks = []
        for svg in svg_list:
            escaped_title = escape_js_string(svg['title'])
            escaped_svg = escape_js_string(svg['svg'])
            block_str = f"    {{ id: '{svg['id']}', type: 'svg', data: {{ title: \"{escaped_title}\", svg: \"{escaped_svg}\" }} }},"
            svg_blocks.append(block_str)
            
        injection_str = "\\n".join(svg_blocks) + "\\n  ],\\n  recall:"
        
        # Check if already injected
        if svg_list[0]['id'] in content:
            print(f"SVGs already injected in {file_path}. Skipping.")
            continue
            
        # Replace
        # We look for   ],\n  recall:  or similar.
        pattern = re.compile(r"\s*\],\n\s*recall:")
        new_content = pattern.sub("\n" + injection_str, content)
        
        if new_content != content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Successfully injected into {file_path}")
        else:
            print(f"Failed to inject into {file_path}. Pattern not found.")

if __name__ == "__main__":
    inject_svgs()
