import os

maths_syllabus_wma12 = [
    ["Language of proof", "Proof by deduction", "Proof by exhaustion", "Disproof by counter example"],
    ["Rational expressions", "Polynomial division", "Factor theorem"],
    ["Equation of a circle", "Finding the centre and radius", "Angle in a semicircle", "Bisection of chords", "Radius and tangent"],
    ["Language of sequences and series", "Recurrence relations", "Arithmetic sequences", "Arithmetic series", "Geometric sequences", "Geometric series", "Sigma notation", "Binomial expansion", "Approximating values"],
    ["Exponential functions", "e", "Logarithmic functions", "Laws of logarithms", "Exponential equations", "Exponential growth and decay", "Modelling"],
    ["Simple identities", "Linear", "Quadratic", "Strategy for trigonometric equations"],
    ["Increasing and decreasing functions", "Stationary points and turning points", "Second order derivatives", "Concave and convex functions", "Points of inflection", "Sketching gradient functions", "Modelling with differentiation (optimisation)"],
    ["Definite integration", "Fundamental theorem of calculus", "Area under a curve", "Area between 2 curves", "Area between a curve and a line", "Trapezium rule numerical integration"]
]

maths_syllabus_wma13 = [
    ["Language of functions", "Composite functions", "Inverse functions", "Modelling with functions", "Modulus functions sketching graphs", "Modulus functions solving equations", "Further modelling with functions"],
    ["Reciprocal and inverse trigonometric functions definitions", "Inverse trig functions", "Small angle approximations", "Compound angle formulae", "Double angle formulae", "Trigonometry further identities", "Harmonic form", "Strategy for further trigonometric equations", "Trigonometric proof", "Graphs", "Modelling"],
    ["Derivatives of exponential functions", "Logarithmic graphs"],
    ["Differentiating other functions", "Differentiation from first principles trig", "Chain rule", "Product rule", "Quotient rule", "Differentiating reciprocal and inverse trig functions", "Parametric differentiation", "Connected rates of change"],
    ["Integrating other functions", "Reverse chain rule", "Integrating f(x)f'(x)", "Integrating with trigonometric identities", "Integration by substitution"],
    ["Change of sign method", "Failure of the change of sign method", "x = g(x) iteration", "Newton Raphson method", "Numerical methods in context"]
]

maths_syllabus_wma14 = [
    ["Proof by contradiction"],
    ["Linear denominators", "Squared linear denominators", "Improper algebraic fractions", "Combinations"],
    ["Basics", "Sketching graphs", "Eliminating the parameter", "Modelling"],
    ["General binomial expansion", "Multiple", "Subtleties", "Modelling"],
    ["Implicit differentiation"],
    ["Integration by parts", "Harder substitution", "Integration using partial fractions", "Separation of variables", "Solving and interpreting differential equations", "General solutions", "Particular solutions", "Modelling", "Integration decision making", "Integration as the limit of a sum", "Parametric integration"],
    ["Basic vectors", "Vector addition", "Magnitude and direction", "Position vectors", "Vectors in 3 dimensions", "Problem solving using vectors", "Problem solving using 3D vectors"]
]

out_dir = "src/data/seedNotes/mathematics"

def gen(unit_id, syllabus):
    for topic_idx, subtopics in enumerate(syllabus):
        t_id = topic_idx + 1
        for s_idx, title in enumerate(subtopics):
            content = f"""/**
 * Seed note: Mathematics · Unit {unit_id} · Topic {t_id} · Subtopic {s_idx}
 * "{title}"
 */

export const note_mathematics_{unit_id}_{t_id}_{s_idx} = {{
    blocks: [
        {{
            id: 'objective-block',
            type: 'objective',
            data: {{
                text: 'Understand the core concepts of {title}.'
            }},
            terms: []
        }},
        {{
            id: 'p-intro',
            type: 'paragraph',
            data: {{
                text: 'This is a placeholder seed note for the mathematics subject. Content for this section is currently empty and pending further expansion based on the PDF extraction.'
            }},
            terms: []
        }}
    ],
    recall: {{
        enabled: false,
        cues: [],
        summaryText: 'Placeholder note.',
        ready: false
    }},
    evidence: []
}};
"""
            with open(os.path.join(out_dir, f"note_{unit_id}_{t_id}_{s_idx}.js"), "w") as f:
                f.write(content)

gen(2, maths_syllabus_wma12)
gen(3, maths_syllabus_wma13)
gen(4, maths_syllabus_wma14)
