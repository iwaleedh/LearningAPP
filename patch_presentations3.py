import re
import os

notes_data = {
    "1_1_0": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Atomic & Formula Terms',
      subtitle: 'Chemistry Topic 1.0',
      elements: [
        { delay: 0, colSpan: 1, icon: '⚛️', title: 'The Atom', html: 'The smallest part of an <strong>element</strong> that still has its properties. e.g. Au (Gold)' },
        { delay: 1, colSpan: 1, icon: '🫧', title: 'Elements & Compounds', html: '<strong>Element</strong>: One type of atom.<br/><strong>Compound</strong>: Different elements chemically bonded.' },
        { delay: 2, colSpan: 1, icon: '🔗', title: 'Molecules', html: 'Two or more atoms joined together.<br/>• <em>Element:</em> O₂<br/>• <em>Compound:</em> HCl' },
        { delay: 3, colSpan: 1, icon: '⚡', title: 'Ions', html: 'Atoms that have gained or lost electrons.<br/>• <strong>Cation</strong> (+) lost e⁻<br/>• <strong>Anion</strong> (-) gained e⁻' },
        { delay: 4, colSpan: 2, icon: '🔢', title: 'Atom Counts', html: '<strong>Monatomic</strong>: Single atom (He, Ne).<br/><strong>Diatomic</strong>: Two atoms (H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂).<br/><strong>Polyatomic</strong>: Many atoms (P₄, S₈, SO₄²⁻).' },
        { delay: 5, colSpan: 3, icon: '📝', title: 'A-Level Equation Skills', html: '• Balance equations correctly.<br/>• State symbols: (s), (l), (g), (aq).<br/>• Arrows: <strong>→</strong> (irreversible) vs <strong>⇌</strong> (reversible).<br/>• Full vs simplest ionic equations.' }
      ]
    }
  ]""",
    "1_1_1": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'The Mole & Avogadro Constant',
      subtitle: 'Chemistry Topic 1.1',
      elements: [
        { delay: 0, colSpan: 2, icon: '⚖️', title: 'The Mole (mol)', html: 'The unit for amount of substance. 1 mole contains exactly <strong>6.02 × 10²³</strong> particles (atoms, molecules, or ions).' },
        { delay: 1, colSpan: 1, icon: '📈', title: 'Avogadro Constant (L)', html: 'The number of particles per mole: <strong>L = 6.02 × 10²³ mol⁻¹</strong>.' },
        { delay: 2, colSpan: 1, icon: '🧮', title: 'Molar Mass (M)', html: 'The mass per mole of a substance. Units: <strong>g mol⁻¹</strong>. Numerically equal to the Aᵣ or Mᵣ.' },
        { delay: 3, colSpan: 2, icon: '📐', title: 'Key Equation: Mass to Moles', html: 'Amount of substance (n) = Mass (m) ÷ Molar Mass (M)<br/><br/><div style="text-align:center;font-size:1.2em;"><strong>n = <span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">M</span></span></strong></div>' }
      ]
    }
  ]""",
    "1_1_2": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Writing Chemical Equations',
      subtitle: 'Chemistry Topic 1.2',
      elements: [
        { delay: 0, colSpan: 2, icon: '⚖️', title: 'Balancing Equations', html: 'Atoms cannot be created or destroyed. The number of atoms of each element must be identical on both sides of the arrow.' },
        { delay: 1, colSpan: 1, icon: '🧪', title: 'State Symbols', html: '<strong>(s)</strong> = solid<br/><strong>(l)</strong> = liquid<br/><strong>(g)</strong> = gas<br/><strong>(aq)</strong> = aqueous (dissolved in water)' },
        { delay: 2, colSpan: 3, icon: '⚔️', title: 'Ionic Equations', html: 'Simplest ionic equations show only the reacting species. Spectator ions are cancelled out.<br/><br/><em>Method:</em><ol><li>Write fully balanced equation with states.</li><li>Split (aq) ionic compounds into ions.</li><li>Cancel identical ions on both sides.</li></ol>' },
        { delay: 3, colSpan: 3, icon: '🔥', title: 'Common Reaction Patterns', html: '• Acid + Base → Salt + Water<br/>• Acid + Carbonate → Salt + Water + CO₂<br/>• Metal + Acid → Salt + Hydrogen' }
      ]
    }
  ]""",
    "1_1_3": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Relative Masses',
      subtitle: 'Chemistry Topic 1.3',
      elements: [
        { delay: 0, colSpan: 1, icon: '⚖️', title: 'Relative Atomic Mass (Aᵣ)', html: 'Weighted mean mass of an atom relative to 1/12th the mass of a Carbon-12 atom.' },
        { delay: 1, colSpan: 1, icon: '⚛️', title: 'Relative Isotopic Mass', html: 'Mass of an isotope relative to 1/12th the mass of a Carbon-12 atom.' },
        { delay: 2, colSpan: 1, icon: '🧪', title: 'Relative Formula Mass (Mᵣ)', html: 'Sum of Aᵣ values of all atoms in the formula (used for both molecules and ionic lattices).' },
        { delay: 3, colSpan: 3, icon: '🔬', title: 'Calculating Parts Per Million (ppm)', html: 'Trace concentrations are often measured in ppm.<br/>• <strong>Solutions:</strong> mass of solute ÷ mass of solution × 1,000,000<br/>• <strong>Gases:</strong> volume of gas ÷ volume of air × 1,000,000' }
      ]
    }
  ]""",
    "1_1_4": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Solutions and Concentration',
      subtitle: 'Chemistry Topic 1.4',
      elements: [
        { delay: 0, colSpan: 2, icon: '💧', title: 'Concentration Overview', html: 'Concentration measures how much solute is dissolved in a specific volume of solvent (usually water). Default volume unit is the decimetre cubed (dm³).' },
        { delay: 1, colSpan: 1, icon: '📏', title: 'Unit Conversions', html: '1 dm³ = 1000 cm³<br/>(Divide cm³ by 1000 to get dm³)' },
        { delay: 2, colSpan: 2, icon: '🧮', title: 'Moles and Volume Equation', html: 'Concentration (mol dm⁻³) = Moles (n) ÷ Volume (V)<br/><br/><div style="text-align:center;font-size:1.2em;"><strong>c = <span class="nb-frac"><span class="nb-num">n</span><span class="nb-den">V</span></span></strong></div>' },
        { delay: 3, colSpan: 1, icon: '⚖️', title: 'Mass Concentration', html: 'Concentration can also be measured in g dm⁻³.<br/><strong>Conc (g dm⁻³) = Conc (mol dm⁻³) × Molar Mass</strong>' }
      ]
    }
  ]""",
    "1_1_5": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Empirical & Molecular Formulae',
      subtitle: 'Chemistry Topic 1.5',
      elements: [
        { delay: 0, colSpan: 1, icon: '🔍', title: 'Empirical Formula', html: 'The simplest whole-number ratio of atoms of each element in a compound.' },
        { delay: 1, colSpan: 1, icon: '📦', title: 'Molecular Formula', html: 'The actual number of atoms of each element in a molecule.' },
        { delay: 2, colSpan: 1, icon: '🧮', title: 'Finding Empirical', html: '<ol><li>Mass (or %) of each element</li><li>Divide by Aᵣ to find moles</li><li>Divide by smallest mole value = Ratio</li></ol>' },
        { delay: 3, colSpan: 3, icon: '🔬', title: 'Empirical to Molecular', html: 'You need the molecular molar mass (Mᵣ).<br/>1. Calculate Mᵣ of the empirical formula.<br/>2. Multiplier = Actual Mᵣ ÷ Empirical Mᵣ<br/>3. Multiply empirical formula numbers by the multiplier.' }
      ]
    }
  ]""",
    "1_1_6": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Stoichiometry & Gas Volumes',
      subtitle: 'Chemistry Topic 1.6',
      elements: [
        { delay: 0, colSpan: 1, icon: '⚖️', title: 'Reacting Masses', html: 'Use the balanced equation to find mole ratios, then convert moles back to mass.' },
        { delay: 1, colSpan: 2, icon: '🎈', title: 'Molar Volume of Gases', html: 'At RTP, 1 mole of ANY gas occupies ~<strong>24 dm³ (24,000 cm³)</strong>.<br/><em>Formula:</em> Volume = moles × 24 (if measuring in dm³)' },
        { delay: 2, colSpan: 3, icon: '🌡️', title: 'Ideal Gas Equation', html: '<strong>pV = nRT</strong><br/>• p = Pressure (Pa)<br/>• V = Volume (m³)<br/>• n = Moles<br/>• R = 8.31 J K⁻¹ mol⁻¹<br/>• T = Temperature (K)' },
        { delay: 3, colSpan: 3, icon: '📏', title: 'Key Conversions for pV=nRT', html: '• °C to Kelvin: + 273<br/>• kPa to Pa: × 1000<br/>• dm³ to m³: ÷ 1000<br/>• cm³ to m³: ÷ 1,000,000' }
      ]
    }
  ]""",
    "1_1_7": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Percentage Yield & Atom Economy',
      subtitle: 'Chemistry Topic 1.7',
      elements: [
        { delay: 0, colSpan: 2, icon: '📉', title: 'Percentage Yield', html: 'Compares actual product made vs theoretical max.<br/><div style="text-align:center;font-size:1.1em;margin-top:0.5em;"><strong>% Yield = <span class="nb-frac"><span class="nb-num">Actual Yield</span><span class="nb-den">Theoretical Yield</span></span> × 100</strong></div>' },
        { delay: 1, colSpan: 1, icon: '🤷', title: 'Why is Yield < 100%?', html: '• Reversible reaction<br/>• Side reactions happening<br/>• Product left in apparatus/lost during transfer' },
        { delay: 2, colSpan: 2, icon: '♻️', title: 'Atom Economy', html: 'Measures how efficiently atoms are utilised in the desired product.<br/><div style="text-align:center;font-size:1.0em;margin-top:0.5em;"><strong>Atom Economy = <span class="nb-frac"><span class="nb-num">Molar Mass of Desired Product</span><span class="nb-den">Sum of Molar Masses of All Products</span></span> × 100</strong></div>' },
        { delay: 3, colSpan: 1, icon: '🌱', title: 'Green Chemistry', html: 'High atom economy means less waste. Addition reactions always have 100% atom economy.' }
      ]
    }
  ]""",
    "1_1_8": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Core Practical 1: Molar Volume',
      subtitle: 'Chemistry Topic 1.8',
      elements: [
        { delay: 0, colSpan: 2, icon: '🧪', title: 'The Experiment', html: 'React Magnesium with excess Hydrochloric Acid and measure the volume of Hydrogen gas produced using a gas syringe or inverted measuring cylinder.' },
        { delay: 1, colSpan: 1, icon: '⚖️', title: 'The Reaction', html: 'Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)' },
        { delay: 2, colSpan: 1, icon: '📉', title: 'Sources of Error', html: '• Gas escaping before bung is replaced<br/>• Syringe sticking<br/>• Mg ribbon covered in oxide layer' },
        { delay: 3, colSpan: 2, icon: '✨', title: 'Improvements', html: '• Clean Mg with emery paper (removes MgO layer).<br/>• Suspend the Mg inside the flask on a thread so bung can be sealed before reaction starts.' }
      ]
    }
  ]""",
    "1_1_9": """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Equations from Observations',
      subtitle: 'Chemistry Topic 1.9',
      elements: [
        { delay: 0, colSpan: 3, icon: '👀', title: 'Visual Observations', html: 'Whenever you write equations based on reactions, keep an eye on visible changes: effervescence (bubbles), colour changes, and precipitate formation.' },
        { delay: 1, colSpan: 1, icon: '🫧', title: 'Gas Tests', html: '• <strong>H₂:</strong> Squeaky pop with lit splint.<br/>• <strong>O₂:</strong> Relights glowing splint.<br/>• <strong>CO₂:</strong> Turns limewater cloudy.' },
        { delay: 2, colSpan: 1, icon: '⚔️', title: 'Displacement', html: 'A more reactive element takes the place of a less reactive element in a compound. e.g. Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)' },
        { delay: 3, colSpan: 1, icon: '🌧️', title: 'Precipitation', html: 'Two aqueous solutions mix to form an insoluble solid. e.g. Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' }
      ]
    }
  ]"""
}

base_path = "src/data/seedNotes/chemistry"

for key, presentation_block in notes_data.items():
    # The file names are "note_chemistry_1_1_0.js" or "note_1_1_0.js"?
    # The prompt explicitly said note_1_1_0.js, so I'll check what exists:
    filepath = f"{base_path}/note_{key}.js"
    if not os.path.exists(filepath):
        filepath = f"{base_path}/note_chemistry_{key}.js"
    if not os.path.exists(filepath):
        print(f"File not found: {key}")
        continue
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "presentationSlides:" in content:
        print(f"Already patched: {filepath}")
        continue
    
    new_content = content.replace("  recall: {", presentation_block + ",\n  recall: {")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Patched {filepath}")
