import json
import os
import re


maths_syllabus_all = [
    # unit 1 (index 0)
    [
        ["Laws of indices", "Manipulating surds", "Rationalising the denominator", "Expanding brackets", "Factorisation", "Solving quadratic equations", "Discriminants", "Completing the square", "Hidden quadratics", "Quadratic graphs", "Simultaneous equations (quadratic)", "Elimination", "Substitution", "Linear", "Inequalities (quadratic)", "Inequalities on graphs", "Sketching polynomials", "Proportional relationships", "Translations", "Reflections", "Stretches", "Solving equations graphically", "Reciprocal graphs sketching"],
        ["Basic coordinate geometry", "Equation of a straight line", "Parallel and perpendicular gradients", "Modelling with straight lines"],
        ["Basic definitions", "Right angled triangles", "Trigonometry exact values", "Non right angled triangles", "Radian measure", "Graphs of trigonometric functions", "Transformations of trigonometric functions"],
        ["Definition of gradient", "Differentiation from first principles", "Differentiating powers of x", "Gradients, tangents and normals"],
        ["Integrating powers of x"]
    ],
    # unit 2 (index 1)
    [
        ["Language of proof", "Proof by deduction", "Proof by exhaustion", "Disproof by counter example"],
        ["Rational expressions", "Polynomial division", "Factor theorem"],
        ["Equation of a circle", "Finding the centre and radius", "Angle in a semicircle", "Bisection of chords", "Radius and tangent"],
        ["Language of sequences and series", "Recurrence relations", "Arithmetic sequences", "Arithmetic series", "Geometric sequences", "Geometric series", "Sigma notation", "Binomial expansion", "Approximating values"],
        ["Exponential functions", "e", "Logarithmic functions", "Laws of logarithms", "Exponential equations", "Exponential growth and decay", "Modelling"],
        ["Simple identities", "Linear", "Quadratic", "Strategy for trigonometric equations"],
        ["Increasing and decreasing functions", "Stationary points and turning points", "Second order derivatives", "Concave and convex functions", "Points of inflection", "Sketching gradient functions", "Modelling with differentiation (optimisation)"],
        ["Definite integration", "Fundamental theorem of calculus", "Area under a curve", "Area between 2 curves", "Area between a curve and a line", "Trapezium rule numerical integration"]
    ],
    # unit 3 (index 2)
    [
        ["Language of functions", "Composite functions", "Inverse functions", "Modelling with functions", "Modulus functions sketching graphs", "Modulus functions solving equations", "Further modelling with functions"],
        ["Reciprocal and inverse trigonometric functions definitions", "Inverse trig functions", "Small angle approximations", "Compound angle formulae", "Double angle formulae", "Trigonometry further identities", "Harmonic form", "Strategy for further trigonometric equations", "Trigonometric proof", "Graphs", "Modelling"],
        ["Derivatives of exponential functions", "Logarithmic graphs"],
        ["Differentiating other functions", "Differentiation from first principles trig", "Chain rule", "Product rule", "Quotient rule", "Differentiating reciprocal and inverse trig functions", "Parametric differentiation", "Connected rates of change"],
        ["Integrating other functions", "Reverse chain rule", "Integrating f(x)f'(x)", "Integrating with trigonometric identities", "Integration by substitution"],
        ["Change of sign method", "Failure of the change of sign method", "x = g(x) iteration", "Newton Raphson method", "Numerical methods in context"]
    ],
    # unit 4 (index 3)
    [
        ["Proof by contradiction"],
        ["Linear denominators", "Squared linear denominators", "Improper algebraic fractions", "Combinations"],
        ["Basics", "Sketching graphs", "Eliminating the parameter", "Modelling"],
        ["General binomial expansion", "Multiple", "Subtleties", "Modelling"],
        ["Implicit differentiation"],
        ["Integration by parts", "Harder substitution", "Integration using partial fractions", "Separation of variables", "Solving and interpreting differential equations", "General solutions", "Particular solutions", "Modelling", "Integration decision making", "Integration as the limit of a sum", "Parametric integration"],
        ["Basic vectors", "Vector addition", "Magnitude and direction", "Position vectors", "Vectors in 3 dimensions", "Problem solving using vectors", "Problem solving using 3D vectors"]
    ]
]

def slugify(text):
    return text.lower().replace(" & ", "-and-").replace(" ", "-").replace("---", "-").strip("-")

topic_slugs = {
    "1_1": "algebra-and-functions",
    "1_2": "coordinate-geometry",
    "1_3": "trigonometry",
    "1_4": "differentiation",
    "1_5": "integration",
    "2_1": "proof",
    "2_2": "algebra-and-functions",
    "2_3": "coordinate-geometry",
    "2_4": "sequences-and-series",
    "2_5": "exponentials-and-logarithms",
    "2_6": "trigonometry",
    "2_7": "differentiation",
    "2_8": "integration",
    "3_1": "algebra-and-functions",
    "3_2": "trigonometry",
    "3_3": "exponentials-and-logarithms",
    "3_4": "differentiation",
    "3_5": "integration",
    "3_6": "numerical-methods",
    "4_1": "proof",
    "4_2": "algebra-and-functions",
    "4_3": "parametric-equations",
    "4_4": "binomial-expansion",
    "4_5": "differentiation",
    "4_6": "integration",
    "4_7": "vectors",
}

for u_idx, u_topics in enumerate(maths_syllabus_all):
    u_id = u_idx + 1
    for t_idx, subtopics in enumerate(u_topics):
        t_id = t_idx + 1
        tslug = topic_slugs.get(f"{u_id}_{t_id}", "unknown")
        
        for s_idx, title in enumerate(subtopics):
            # Special cases matching file names
            file_slug = slugify(title)
            if file_slug == "modelling-with-functions":
                file_slug = "modelling-with-functions--modelling"
            if file_slug == "further-modelling-with-functions":
                file_slug = "further-modelling-with-functions--modelling"
            if file_slug == "modelling-with-straight-lines":
                file_slug = "modelling-with-straight-lines"
            if file_slug == "modelling-with-differentiation-(optimisation)":
                file_slug = "modelling-with-differentiation-optimisation"
            if file_slug == "reciprocal-and-inverse-trigonometric-functions-definitions":
                file_slug = "reciprocal-and-inverse-trigonometric-functions--definitions"
            if file_slug == "basic-definitions":
                file_slug = "basic--definitions"
            if "simultaneous-equations-" in file_slug:
                file_slug = "simultaneous-equations--quadratic"
            if file_slug == "inequalities-(quadratic)":
                file_slug = "inequalities--quadratic"
            if file_slug == "arithmetic-sequences": file_slug = "arithmetic--sequences"
            if file_slug == "arithmetic-series": file_slug = "arithmetic--series"
            if file_slug == "geometric-sequences": file_slug = "geometric--sequences"
            if file_slug == "geometric-series": file_slug = "geometric--series"

            
            # Map back to exactly what generate_notes did, but edit the file
            js_path = f"src/data/seedNotes/mathematics/note_{u_id}_{t_id}_{s_idx}.js"
            if os.path.exists(js_path):
                with open(js_path, "r") as f:
                    content = f.read()
                
                # Check for "pdfPath:" already
                if "pdfPath: " not in content:
                    replacement = f"export const note_mathematics_{u_id}_{t_id}_{s_idx} = {{\n    pdfPath: '/notes/mathematics/{tslug}/{file_slug}.pdf',"
                    content = content.replace(f"export const note_mathematics_{u_id}_{t_id}_{s_idx} = {{", replacement)
                    with open(js_path, "w") as f:
                        f.write(content)
