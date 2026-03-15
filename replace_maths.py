import json

with open("src/data/mathematicsSyllabus.js", "w") as f:
    f.write("""export const mathematicsSyllabus = {
    qualification: 'Pearson Edexcel International A Level Mathematics (YMA01)',
    source: 'international-a-level-maths-spec.pdf (Issue 3, April 2019)',
    notes: 'Includes compulsory pure units and IAL Mathematics optional route units.',
    units: [
        {
            "id": 1,
            "code": "WMA11",
            "title": "Pure Mathematics 1",
            "topics": [
                {
                    "id": 1,
                    "title": "Algebra & Functions",
                    "subtopics": [
                        "Laws of indices", "Manipulating surds", "Rationalising the denominator",
                        "Expanding brackets", "Factorisation", "Solving quadratic equations",
                        "Discriminants", "Completing the square", "Hidden quadratics",
                        "Quadratic graphs", "Simultaneous equations (quadratic)", "Elimination",
                        "Substitution", "Linear", "Inequalities (quadratic)", "Inequalities on graphs",
                        "Sketching polynomials", "Proportional relationships", "Translations",
                        "Reflections", "Stretches", "Solving equations graphically",
                        "Reciprocal graphs sketching"
                    ]
                },
                {
                    "id": 2,
                    "title": "Coordinate Geometry",
                    "subtopics": [
                        "Basic coordinate geometry", "Equation of a straight line",
                        "Parallel and perpendicular gradients", "Modelling with straight lines"
                    ]
                },
                {
                    "id": 3,
                    "title": "Trigonometry",
                    "subtopics": [
                        "Basic definitions", "Right angled triangles", "Trigonometry exact values",
                        "Non right angled triangles", "Radian measure", "Graphs of trigonometric functions",
                        "Transformations of trigonometric functions"
                    ]
                },
                {
                    "id": 4,
                    "title": "Differentiation",
                    "subtopics": [
                        "Definition of gradient", "Differentiation from first principles",
                        "Differentiating powers of x", "Gradients, tangents and normals"
                    ]
                },
                {
                    "id": 5,
                    "title": "Integration",
                    "subtopics": ["Integrating powers of x"]
                }
            ]
        },
        {
            "id": 2,
            "code": "WMA12",
            "title": "Pure Mathematics 2",
            "topics": [
                {
                    "id": 1,
                    "title": "Proof",
                    "subtopics": [
                        "Language of proof", "Proof by deduction", "Proof by exhaustion", "Disproof by counter example"
                    ]
                },
                {
                    "id": 2,
                    "title": "Algebra & Functions",
                    "subtopics": ["Rational expressions", "Polynomial division", "Factor theorem"]
                },
                {
                    "id": 3,
                    "title": "Coordinate Geometry",
                    "subtopics": [
                        "Equation of a circle", "Finding the centre and radius",
                        "Angle in a semicircle", "Bisection of chords", "Radius and tangent"
                    ]
                },
                {
                    "id": 4,
                    "title": "Sequences & Series",
                    "subtopics": [
                        "Language of sequences and series", "Recurrence relations", "Arithmetic sequences",
                        "Arithmetic series", "Geometric sequences", "Geometric series", "Sigma notation",
                        "Binomial expansion", "Approximating values"
                    ]
                },
                {
                    "id": 5,
                    "title": "Exponentials & Logarithms",
                    "subtopics": [
                        "Exponential functions", "e", "Logarithmic functions", "Laws of logarithms",
                        "Exponential equations", "Exponential growth and decay", "Modelling"
                    ]
                },
                {
                    "id": 6,
                    "title": "Trigonometry",
                    "subtopics": ["Simple identities", "Linear", "Quadratic", "Strategy for trigonometric equations"]
                },
                {
                    "id": 7,
                    "title": "Differentiation",
                    "subtopics": [
                        "Increasing and decreasing functions", "Stationary points and turning points",
                        "Second order derivatives", "Concave and convex functions", "Points of inflection",
                        "Sketching gradient functions", "Modelling with differentiation (optimisation)"
                    ]
                },
                {
                    "id": 8,
                    "title": "Integration",
                    "subtopics": [
                        "Definite integration", "Fundamental theorem of calculus", "Area under a curve",
                        "Area between 2 curves", "Area between a curve and a line", "Trapezium rule numerical integration"
                    ]
                }
            ]
        },
        {
            "id": 3,
            "code": "WMA13",
            "title": "Pure Mathematics 3",
            "topics": [
                {
                    "id": 1,
                    "title": "Algebra & Functions",
                    "subtopics": [
                        "Language of functions", "Composite functions", "Inverse functions",
                        "Modelling with functions", "Modulus functions sketching graphs",
                        "Modulus functions solving equations", "Further modelling with functions"
                    ]
                },
                {
                    "id": 2,
                    "title": "Trigonometry",
                    "subtopics": [
                        "Reciprocal and inverse trigonometric functions definitions", "Inverse trig functions",
                        "Small angle approximations", "Compound angle formulae", "Double angle formulae",
                        "Trigonometry further identities", "Harmonic form", "Strategy for further trigonometric equations",
                        "Trigonometric proof", "Graphs", "Modelling"
                    ]
                },
                {
                    "id": 3,
                    "title": "Exponentials & Logarithms",
                    "subtopics": ["Derivatives of exponential functions", "Logarithmic graphs"]
                },
                {
                    "id": 4,
                    "title": "Differentiation",
                    "subtopics": [
                        "Differentiating other functions", "Differentiation from first principles trig",
                        "Chain rule", "Product rule", "Quotient rule",
                        "Differentiating reciprocal and inverse trig functions",
                        "Parametric differentiation", "Connected rates of change"
                    ]
                },
                {
                    "id": 5,
                    "title": "Integration",
                    "subtopics": [
                        "Integrating other functions", "Reverse chain rule", "Integrating f(x)f'(x)",
                        "Integrating with trigonometric identities", "Integration by substitution"
                    ]
                },
                {
                    "id": 6,
                    "title": "Numerical Methods",
                    "subtopics": [
                        "Change of sign method", "Failure of the change of sign method",
                        "x = g(x) iteration", "Newton Raphson method", "Numerical methods in context"
                    ]
                }
            ]
        },
        {
            "id": 4,
            "code": "WMA14",
            "title": "Pure Mathematics 4",
            "topics": [
                {
                    "id": 1,
                    "title": "Proof",
                    "subtopics": ["Proof by contradiction"]
                },
                {
                    "id": 2,
                    "title": "Algebra & Functions",
                    "subtopics": [
                        "Linear denominators", "Squared linear denominators",
                        "Improper algebraic fractions", "Combinations"
                    ]
                },
                {
                    "id": 3,
                    "title": "Coordinate Geometry",
                    "subtopics": [
                        "Basics", "Sketching graphs", "Eliminating the parameter", "Modelling"
                    ]
                },
                {
                    "id": 4,
                    "title": "Binomial Expansion",
                    "subtopics": ["General binomial expansion", "Multiple", "Subtleties", "Modelling"]
                },
                {
                    "id": 5,
                    "title": "Differentiation",
                    "subtopics": ["Implicit differentiation"]
                },
                {
                    "id": 6,
                    "title": "Integration",
                    "subtopics": [
                        "Integration by parts", "Harder substitution", "Integration using partial fractions",
                        "Separation of variables", "Solving and interpreting differential equations",
                        "General solutions", "Particular solutions", "Modelling", "Integration decision making",
                        "Integration as the limit of a sum", "Parametric integration"
                    ]
                },
                {
                    "id": 7,
                    "title": "Vectors",
                    "subtopics": [
                        "Basic vectors", "Vector addition", "Magnitude and direction", "Position vectors",
                        "Vectors in 3 dimensions", "Problem solving using vectors", "Problem solving using 3D vectors"
                    ]
                }
            ]
        },
        {
            "id": 5,
            "code": "WME01",
            "title": "Mechanics 1 (Optional)",
            "topics": [
                {
                    "id": 1,
                    "title": "Mathematical Models in Mechanics",
                    "subtopics": ["Particle and rigid-body assumptions", "Idealised mechanics modelling terms"]
                },
                {
                    "id": 2,
                    "title": "Vectors in Mechanics",
                    "subtopics": [
                        "Vector magnitude and direction", "Resolving vectors into components",
                        "Vector displacement and velocity", "Vector acceleration and force"
                    ]
                },
                {
                    "id": 3,
                    "title": "Kinematics in a Straight Line",
                    "subtopics": ["Constant-acceleration motion models", "Kinematics graphs and interpretation"]
                },
                {
                    "id": 4,
                    "title": "Dynamics of a Particle Moving in a Straight Line",
                    "subtopics": ["Newton’s laws and equations of motion", "Friction and inclined planes", "Connected particles and pulleys"]
                },
                {
                    "id": 5,
                    "title": "Statics of a Particle",
                    "subtopics": ["Forces in equilibrium", "Limiting equilibrium and friction"]
                },
                {
                    "id": 6,
                    "title": "Moments",
                    "subtopics": ["Moments and taking moments", "Rigid rods and uniform rods"]
                }
            ]
        },
        {
            "id": 6,
            "code": "WST01",
            "title": "Statistics 1 (Optional)",
            "topics": [
                {
                    "id": 1,
                    "title": "Mathematical Models in Statistics",
                    "subtopics": ["Statistical modelling process", "Data classification"]
                },
                {
                    "id": 2,
                    "title": "Representation and Summary of Data",
                    "subtopics": [
                        "Frequency distributions and histograms", "Measures of location (mean, median, mode)",
                        "Measures of dispersion (variance, standard deviation)"
                    ]
                },
                {
                    "id": 3,
                    "title": "Probability",
                    "subtopics": ["Venn diagrams and mutually exclusive events", "Independent events and conditional probability", "Tree diagrams"]
                },
                {
                    "id": 4,
                    "title": "Correlation and Regression",
                    "subtopics": ["Scatter diagrams and correlation", "Product moment correlation coefficient", "Regression lines and predictions"]
                },
                {
                    "id": 5,
                    "title": "Discrete Random Variables",
                    "subtopics": ["Probability distributions", "Expected value and variance"]
                },
                {
                    "id": 6,
                    "title": "The Normal Distribution",
                    "subtopics": ["Properties of the normal distribution", "Standard normal distribution calculations"]
                }
            ]
        }
    ]
};
""")
