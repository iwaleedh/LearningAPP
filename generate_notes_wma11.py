import os

maths_syllabus = [
    # Topic 1
    ["Laws of indices", "Manipulating surds", "Rationalising the denominator",
    "Expanding brackets", "Factorisation", "Solving quadratic equations",
    "Discriminants", "Completing the square", "Hidden quadratics",
    "Quadratic graphs", "Simultaneous equations (quadratic)", "Elimination",
    "Substitution", "Linear", "Inequalities (quadratic)", "Inequalities on graphs",
    "Sketching polynomials", "Proportional relationships", "Translations",
    "Reflections", "Stretches", "Solving equations graphically",
    "Reciprocal graphs sketching"],
    # Topic 2
    ["Basic coordinate geometry", "Equation of a straight line",
    "Parallel and perpendicular gradients", "Modelling with straight lines"],
    # Topic 3
    ["Basic definitions", "Right angled triangles", "Trigonometry exact values",
    "Non right angled triangles", "Radian measure", "Graphs of trigonometric functions",
    "Transformations of trigonometric functions"],
    # Topic 4
    ["Definition of gradient", "Differentiation from first principles",
    "Differentiating powers of x", "Gradients, tangents and normals"],
    # Topic 5
    ["Integrating powers of x"]
]

out_dir = "src/data/seedNotes/mathematics"
if not os.path.exists(out_dir):
    os.makedirs(out_dir)

for topic_idx, subtopics in enumerate(maths_syllabus):
    t_id = topic_idx + 1
    for s_idx, title in enumerate(subtopics):
        content = f"""/**
 * Seed note: Mathematics · Unit 1 · Topic {t_id} · Subtopic {s_idx}
 * "{title}"
 */

export const note_mathematics_1_{t_id}_{s_idx} = {{
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
        with open(os.path.join(out_dir, f"note_1_{t_id}_{s_idx}.js"), "w") as f:
            f.write(content)
