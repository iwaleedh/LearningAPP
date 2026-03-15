#!/usr/bin/env python3
"""
Rewrites WMA11 Topic 1 seed notes 10–14 with full A-level content.
"""

import os

BASE = "src/data/seedNotes/mathematics/"

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_10  ·  Simultaneous Equations (Quadratic)
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_10 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 10
 * "Simultaneous equations (quadratic)"
 */

export const note_mathematics_1_1_10 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/simultaneous-equations--quadratic.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve simultaneous equations where one equation is quadratic and one is linear, using the substitution method; interpret solutions geometrically.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'Quadratic Simultaneous Equations', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A pair of simultaneous equations is quadratic when at least one of the equations contains terms of degree 2. At A-level, you will typically have <strong>one linear equation</strong> and <strong>one quadratic equation</strong>. The solution pairs (x, y) represent the points where the straight line and the curve intersect. There are usually two solution pairs, but there can be one (tangent) or none.' },
            terms: []
        },
        {
            id: 'key-method',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Principle',
                text: 'You must use <strong>substitution</strong> to solve quadratic simultaneous equations. The elimination method only works when both equations are linear. Rearrange the linear equation first, then substitute into the quadratic.'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Substitution into the Quadratic', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Label the equations ① (linear) and ② (quadratic).' },
                    { text: 'Rearrange equation ① to make one variable the subject (e.g. y = … or x = …).' },
                    { text: 'Substitute the expression into equation ②. This creates a single quadratic in one variable.' },
                    { text: 'Solve the quadratic (factorisation or formula).' },
                    { text: 'Substitute each solution back into the rearranged linear equation to find the paired value.' },
                    { text: 'Check both pairs in the original quadratic equation.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example',
                text: 'Solve simultaneously:  y = 2x − 1  ①  and  y = x² − 3  ②<br/><br/>From ①, y = 2x − 1. Substitute into ②:<br/>2x − 1 = x² − 3<br/>x² − 2x − 2 = 0<br/><br/>Quadratic formula: x = (2 ± √(4+8))/2 = (2 ± √12)/2 = 1 ± √3<br/><br/>x₁ = 1 + √3 → y₁ = 2(1+√3) − 1 = 1 + 2√3<br/>x₂ = 1 − √3 → y₂ = 2(1−√3) − 1 = 1 − 2√3<br/><br/><strong>Solutions: (1+√3,  1+2√3) and (1−√3,  1−2√3)</strong>'
            },
            terms: []
        },
        {
            id: 'svg-intersect',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" style="width:100%;max-width:360px;display:block;margin:0 auto;"><defs><marker id="ah10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l10{font-family:sans-serif;font-size:11px;fill:#374151}.h10{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}.g10{font-family:sans-serif;font-size:11px;fill:#10b981;font-weight:600}</style><line x1="15" y1="140" x2="285" y2="140" stroke="#374151" stroke-width="1.5" marker-end="url(#ah10)"/><line x1="150" y1="215" x2="150" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah10)"/><polyline points="40,175 70,160 100,140 130,115 160,86 190,53 220,20" fill="none" stroke="#10b981" stroke-width="2" stroke-linejoin="round"/><polyline points="60,200 80,175 100,155 120,140 140,132 160,130 180,134 200,145 220,162 240,185" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="90" cy="148" r="5" fill="#ef4444"/><circle cx="175" cy="93" r="5" fill="#ef4444"/><text x="55" y="140" class="h10">(x\u2081, y\u2081)</text><text x="180" y="86" class="h10">(x\u2082, y\u2082)</text><text x="222" y="25" class="g10">y = 2x\u22121</text><text x="242" y="190" class="l10" style="fill:#4f46e5">y = x\u00b2\u22123</text><text x="278" y="155" class="l10">x</text><text x="155" y="12" class="l10">y</text><text x="153" y="154" class="l10">O</text></svg>',
                caption: 'Geometric interpretation: solution pairs are the intersection points of the line y = 2x−1 and the parabola y = x²−3'
            },
            terms: []
        },
        {
            id: 'h-disc',
            type: 'heading',
            data: { text: 'Using the Discriminant', level: 2 },
            terms: []
        },
        {
            id: 'p-disc',
            type: 'paragraph',
            data: { text: 'After substituting the linear equation into the quadratic, you get a new quadratic equation. The discriminant of this quadratic tells you the number of intersection points: Δ > 0 means two points; Δ = 0 means one point (line is tangent); Δ < 0 means no intersection.' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always use substitution — elimination does not work here.<br/>• Pair up your answers: match each x with its corresponding y from the linear equation.<br/>• State solutions clearly as coordinate pairs (x, y).<br/>• If asked "how many intersections?", check the discriminant instead of solving fully.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Quadratic simultaneous equations (one linear, one quadratic) are solved by substitution: rearrange the linear equation for one variable, substitute into the quadratic, solve the resulting quadratic, then substitute each root back. Solutions are intersection points of the line and curve. The discriminant of the resulting quadratic gives the number of solutions.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-method', prompt: 'Why must you use substitution to solve quadratic simultaneous equations?' },
            { id: 'cue-2', blockId: 'list-method', prompt: 'List the six steps for solving a linear + quadratic simultaneous pair.' },
            { id: 'cue-3', blockId: 'worked-1', prompt: 'Solve y = 2x − 1 and y = x² − 3 simultaneously.' },
            { id: 'cue-4', blockId: 'p-disc', prompt: 'What does the discriminant of the resulting quadratic tell you geometrically?' },
            { id: 'cue-5', blockId: 'svg-intersect', prompt: 'How many intersection points can a line and a parabola have? Give all cases.' }
        ],
        summaryText: 'Solve by substitution: rearrange linear → substitute into quadratic → solve quadratic → find y pairs. Δ>0: two points; Δ=0: tangent; Δ<0: no intersection.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_11  ·  Elimination (Linear Simultaneous Equations)
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_11 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 11
 * "Elimination"
 */

export const note_mathematics_1_1_11 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/elimination.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve pairs of linear simultaneous equations using the elimination method; interpret solutions as intersection points of straight lines.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What are Linear Simultaneous Equations?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'Two (or more) equations that must all be true at the same time are called <strong>simultaneous equations</strong>. An equation is <em>linear</em> if no unknown is raised to a power other than 1. Graphically, each linear equation in two unknowns produces a straight line, and the solution is the point where the lines intersect.' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'The Elimination Method', level: 2 },
            terms: []
        },
        {
            id: 'p-method',
            type: 'paragraph',
            data: { text: 'The elimination method removes one variable by adding or subtracting the two equations. This only works once the coefficients of one variable are <strong>equal in size</strong>. Multiply one (or both) equations by suitable constants to match the coefficient you want to eliminate.' },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Label</strong> the equations ① and ②.' },
                    { text: '<strong>Match coefficients:</strong> multiply ① and/or ② by constants so a chosen variable has equal coefficients in both equations.' },
                    { text: '<strong>Same sign → subtract; different signs → add</strong> the equations to eliminate that variable.' },
                    { text: '<strong>Solve</strong> the resulting single-variable equation.' },
                    { text: '<strong>Back-substitute</strong> into the simpler original equation to find the other variable.' },
                    { text: '<strong>Check</strong> both values in the equation not used in step 5.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-elim',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example',
                text: 'Solve:  3x + 2y = 11  ①   and   2x − y = 1  ②<br/><br/>Multiply ② by 2:  4x − 2y = 2  ③<br/>(This matches the coefficient of y: +2 in ① and −2 in ③, different signs → add)<br/><br/>① + ③:  7x = 13  →  <strong>x = 13/7</strong>... Let\'s use simpler numbers:<br/><br/>New example:  3x + 2y = 11  ①   and   x + y = 4  ②<br/>Multiply ② by 2:  2x + 2y = 8  ③<br/>Same sign → ① − ③:  x = 3<br/>Into ②:  3 + y = 4  →  <strong>y = 1</strong><br/><strong>∴ Solution: x = 3, y = 1</strong><br/>Check in ①: 9 + 2 = 11 ✓'
            },
            terms: []
        },
        {
            id: 'h-geo',
            type: 'heading',
            data: { text: 'Geometric Interpretation', level: 2 },
            terms: []
        },
        {
            id: 'p-geo',
            type: 'paragraph',
            data: { text: 'Each linear equation represents a straight line. The solution to the simultaneous pair is the coordinates of the point of intersection. If the lines are parallel (same gradient, different intercepts) there is no solution. If the equations represent the same line, there are infinitely many solutions.' },
            terms: []
        },
        {
            id: 'svg-lines',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l11{font-family:sans-serif;font-size:11px;fill:#374151}.h11{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><line x1="15" y1="130" x2="265" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah11)"/><line x1="130" y1="190" x2="130" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah11)"/><line x1="20" y1="50" x2="260" y2="170" stroke="#4f46e5" stroke-width="2"/><line x1="20" y1="170" x2="260" y2="60" stroke="#10b981" stroke-width="2"/><circle cx="148" cy="103" r="5.5" fill="#ef4444"/><text x="152" y="98" class="h11">(x, y)</text><text x="22" y="45" style="font-family:sans-serif;font-size:10px;fill:#4f46e5">Line ①</text><text x="22" y="185" style="font-family:sans-serif;font-size:10px;fill:#10b981">Line ②</text><text x="258" y="145" class="l11">x</text><text x="135" y="12" class="l11">y</text></svg>',
                caption: 'Two straight lines intersect at exactly one point — the unique solution (x, y)'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• Forgetting to multiply the <em>entire</em> equation (including the right-hand side) when balancing coefficients.<br/>• Subtracting when you should add (and vice versa): if same sign → subtract; different sign → add.<br/>• Writing the final answer as x = _, y = _ but not checking in the unused equation.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always label your equations ① and ② and show which multiple you use.<br/>• After finding one variable, substitute into the <em>simpler</em> equation for the other.<br/>• The final check step only takes seconds and guarantees full marks.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'To eliminate: match coefficients of one variable by multiplying equations, then add (different signs) or subtract (same signs) to remove that variable. Solve for one variable, substitute back for the other, and check in the unused equation. Geometrically the solution is the intersection point of the two lines.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-steps', prompt: 'List the six steps for solving simultaneous linear equations by elimination.' },
            { id: 'cue-2', blockId: 'p-method', prompt: 'When do you add the equations? When do you subtract them?' },
            { id: 'cue-3', blockId: 'worked-elim', prompt: 'Solve 3x + 2y = 11 and x + y = 4 by elimination.' },
            { id: 'cue-4', blockId: 'p-geo', prompt: 'What does it mean geometrically if two simultaneous equations have no solution?' },
            { id: 'cue-5', blockId: 'callout-warning', prompt: 'What is the most common error students make in the elimination method?' }
        ],
        summaryText: 'Elimination: match one coefficient → same sign subtract / different sign add → solve one variable → back-substitute → check. Solution = intersection of the two lines.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_12  ·  Substitution (Linear Simultaneous Equations)
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_12 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 12
 * "Substitution"
 */

export const note_mathematics_1_1_12 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/substitution.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve pairs of linear simultaneous equations using the substitution method, and know when substitution is preferable to elimination.' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'The Substitution Method', level: 2 },
            terms: []
        },
        {
            id: 'p-method',
            type: 'paragraph',
            data: { text: 'The substitution method involves expressing one variable in terms of the other using one equation, then substituting this into the second equation. This is especially efficient when one equation is already in the form y = … or x = …, or when dealing with quadratic simultaneous equations (where substitution is the <em>only</em> valid method).' },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Label</strong> the equations ① and ②.' },
                    { text: '<strong>Choose one equation</strong> and rearrange it to make one variable (x or y) the subject.' },
                    { text: '<strong>Substitute</strong> this expression into the other equation, creating a single-variable equation.' },
                    { text: '<strong>Solve</strong> the resulting equation.' },
                    { text: '<strong>Back-substitute</strong> the found value into the rearranged equation from step 2 to find the other variable.' },
                    { text: '<strong>Check</strong> both values in the equation not used in step 5.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-sub',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Linear Substitution',
                text: 'Solve:  2x + 3y = 12  ①   and   y = x − 1  ②<br/><br/>② is already in the form y = …, so substitute directly into ①:<br/>2x + 3(x − 1) = 12<br/>2x + 3x − 3 = 12<br/>5x = 15<br/><strong>x = 3</strong><br/><br/>Substitute into ②: y = 3 − 1 = <strong>2</strong><br/><strong>∴ Solution: x = 3, y = 2</strong><br/>Check in ①: 2(3) + 3(2) = 6 + 6 = 12 ✓'
            },
            terms: []
        },
        {
            id: 'h-compare',
            type: 'heading',
            data: { text: 'Substitution vs Elimination — When to Use Each', level: 2 },
            terms: []
        },
        {
            id: 'table-compare',
            type: 'comparisonTable',
            data: {
                headers: ['Situation', 'Preferred Method'],
                rows: [
                    ['One equation is already in the form x = … or y = …', 'Substitution (no rearranging needed)'],
                    ['Both equations are in ax + by = c form with no easy rearrangement', 'Elimination'],
                    ['One of the equations is quadratic', 'Substitution (must use this)'],
                    ['Coefficients share a common factor making elimination convenient', 'Elimination']
                ],
                caption: 'Choosing between substitution and elimination'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• If one equation is y = f(x), use substitution immediately — it is faster.<br/>• For quadratic simultaneous equations, <em>always</em> use substitution.<br/>• When expanding after substitution, be careful with signs (especially double negatives).<br/>• Both methods give the same answers — use whichever is faster for the given pair.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Substitution: rearrange one equation to make x or y the subject → substitute the expression into the other equation → solve for one variable → back-substitute → check. Prefer substitution when one equation starts as y = … or x = …, and when one equation is quadratic (mandatory).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-steps', prompt: 'List the six steps for the substitution method.' },
            { id: 'cue-2', blockId: 'worked-sub', prompt: 'Solve 2x + 3y = 12 and y = x − 1 by substitution.' },
            { id: 'cue-3', blockId: 'table-compare', prompt: 'When must you use substitution rather than elimination?' },
            { id: 'cue-4', blockId: 'h-compare', prompt: 'When is elimination more convenient than substitution for linear equations?' }
        ],
        summaryText: 'Substitution: rearrange one equation → substitute into the other → solve → back-substitute → check. Must use substitution for quadratic simultaneous equations.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_13  ·  Linear Inequalities
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_13 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 13
 * "Linear inequalities"
 */

export const note_mathematics_1_1_13 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/linear.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve linear inequalities in one variable; express solutions using inequality notation and on a number line; understand when the inequality sign must be reversed.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'What is a Linear Inequality?', level: 2 },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: { text: 'An inequality states that one expression is greater than (or less than, or equal to) another. A <strong>linear inequality</strong> contains the variable only to the first power. Linear inequalities are solved using the same steps as linear equations, with one critical exception: <strong>multiplying or dividing by a negative number reverses the inequality sign</strong>.' },
            terms: []
        },
        {
            id: 'key-rule',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Golden Rule',
                text: 'When you multiply or divide both sides of an inequality by a <em>negative</em> number, the inequality sign reverses direction.<br/><br/>e.g.  −2x < 6  ÷(−2)  →  x > −3  (sign flips!)'
            },
            terms: []
        },
        {
            id: 'h-solve',
            type: 'heading',
            data: { text: 'Solving a Linear Inequality', level: 2 },
            terms: []
        },
        {
            id: 'p-solve',
            type: 'paragraph',
            data: { text: 'Solve a linear inequality using the same steps as a linear equation: collect x-terms on one side, constants on the other, then divide. The only extra care is tracking whether you are dividing by a positive or negative number.' },
            terms: []
        },
        {
            id: 'worked-basic',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Standard Linear Inequality',
                text: 'Solve  3x − 5 > x + 3<br/><br/>3x − x > 3 + 5<br/>2x > 8<br/><strong>x > 4</strong>'
            },
            terms: []
        },
        {
            id: 'worked-neg',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Division by Negative',
                text: 'Solve  5 − 3x ≥ 11<br/><br/>−3x ≥ 6<br/>Dividing by −3 (negative!): sign reverses:<br/><strong>x ≤ −2</strong>'
            },
            terms: []
        },
        {
            id: 'h-double',
            type: 'heading',
            data: { text: 'Double Inequalities', level: 2 },
            terms: []
        },
        {
            id: 'p-double',
            type: 'paragraph',
            data: { text: 'A double (compound) inequality such as a < f(x) < b can be solved by performing the same operations on all three parts simultaneously.' },
            terms: []
        },
        {
            id: 'worked-double',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Double Inequality',
                text: 'Solve  −1 < 3x + 2 ≤ 14<br/><br/>Subtract 2 from all parts:  −3 < 3x ≤ 12<br/>Divide by 3:  <strong>−1 < x ≤ 4</strong><br/>(x is greater than −1 and at most 4)'
            },
            terms: []
        },
        {
            id: 'svg-numline',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80" style="width:100%;max-width:380px;display:block;margin:0 auto;"><style>.ln{font-family:sans-serif;font-size:11px;fill:#374151}.hl{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><line x1="20" y1="40" x2="280" y2="40" stroke="#374151" stroke-width="1.5"/><line x1="273" y1="37" x2="280" y2="40" stroke="#374151" stroke-width="1.5"/><line x1="273" y1="43" x2="280" y2="40" stroke="#374151" stroke-width="1.5"/><line x1="20" y1="35" x2="20" y2="45" stroke="#374151" stroke-width="1"/><line x1="80" y1="35" x2="80" y2="45" stroke="#374151" stroke-width="1"/><line x1="140" y1="35" x2="140" y2="45" stroke="#374151" stroke-width="1"/><line x1="200" y1="35" x2="200" y2="45" stroke="#374151" stroke-width="1"/><line x1="260" y1="35" x2="260" y2="45" stroke="#374151" stroke-width="1"/><text x="14" y="60" class="ln">\u22122</text><text x="74" y="60" class="ln">\u22121</text><text x="138" y="60" class="ln">0</text><text x="197" y="60" class="ln">1</text><text x="258" y="60" class="ln">2</text><line x1="80" y1="40" x2="270" y2="40" stroke="#4f46e5" stroke-width="3"/><circle cx="80" cy="40" r="5" fill="white" stroke="#4f46e5" stroke-width="2"/><circle cx="270" cy="40" r="5" fill="#4f46e5" stroke="#4f46e5" stroke-width="2"/><text x="68" y="25" class="hl">\u22121</text><text x="260" y="25" class="hl">2</text><text x="88" y="22" style="font-family:sans-serif;font-size:10px;fill:#6b7280">open = strict &lt;</text></svg>',
                caption: 'Number line: open circle = strict inequality (< or >); filled circle = inclusive (≤ or ≥). Example shows −1 < x ≤ 2.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Use open circles ○ on a number line for strict inequalities (< or >).<br/>• Use filled circles ● for inclusive inequalities (≤ or ≥).<br/>• The safest way to avoid sign errors: <em>always</em> rearrange so you are dividing by a positive coefficient.<br/>• For a double inequality, apply every operation to all three parts simultaneously.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Solve linear inequalities like equations, but reverse the inequality sign whenever you multiply or divide by a negative number. Express solutions using inequality notation (x > a, x ≤ b, etc.) or on a number line (open circle for strict, filled for inclusive). Double inequalities are solved by acting on all three parts at once.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-rule', prompt: 'State the golden rule for inequalities when dividing by a negative number.' },
            { id: 'cue-2', blockId: 'worked-neg', prompt: 'Solve 5 − 3x ≥ 11 and explain the sign reversal step.' },
            { id: 'cue-3', blockId: 'worked-double', prompt: 'Solve the double inequality −1 < 3x + 2 ≤ 14.' },
            { id: 'cue-4', blockId: 'svg-numline', prompt: 'What is the difference between an open and a filled circle on a number line inequality?' }
        ],
        summaryText: 'Linear inequalities: same steps as equations BUT reverse sign when multiplying or dividing by a negative. Open circle = strict (</>); filled circle = inclusive (≤/≥). Apply all operations to all three parts in a double inequality.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_14  ·  Quadratic Inequalities
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_14 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 14
 * "Quadratic inequalities"
 */

export const note_mathematics_1_1_14 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/inequalities--quadratic.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve quadratic inequalities by finding roots and sketching the parabola; express solutions correctly using inequality notation or set notation.' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method for Solving a Quadratic Inequality', level: 2 },
            terms: []
        },
        {
            id: 'p-method',
            type: 'paragraph',
            data: { text: 'Unlike linear inequalities, you cannot simply rearrange and divide. Instead, find the roots of the corresponding quadratic equation, sketch the parabola, and use the sketch to identify which region satisfies the inequality.' },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Rearrange so one side is 0: ax² + bx + c ○ 0.' },
                    { text: 'Find the roots x₁ and x₂ (where x₁ < x₂) by solving ax² + bx + c = 0.' },
                    { text: 'Sketch the parabola: ∪ shape if a > 0, ∩ if a < 0.' },
                    { text: 'Identify the region from the sketch: <ul><li>ax²+bx+c &lt; 0 with a&gt;0: parabola is <em>below</em> x-axis → x₁ &lt; x &lt; x₂</li><li>ax²+bx+c &gt; 0 with a&gt;0: parabola is <em>above</em> x-axis → x &lt; x₁ or x &gt; x₂</li></ul>' }
                ]
            },
            terms: []
        },
        {
            id: 'key-results',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Results (a > 0, roots x₁ < x₂)',
                text: '<strong>f(x) < 0  →  x₁ < x < x₂</strong>  (inside the roots, between)<br/><strong>f(x) > 0  →  x < x₁  or  x > x₂</strong>  (outside the roots)<br/><br/>For a < 0: the parabola is ∩-shaped, so reverse the regions above.'
            },
            terms: []
        },
        {
            id: 'worked-below',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Inequality < 0 (inside roots)',
                text: 'Solve  x² − 5x + 6 < 0<br/><br/>Find roots: x² − 5x + 6 = 0 → (x−2)(x−3) = 0 → x = 2 and x = 3<br/>a = 1 > 0 → ∪ shape → parabola is below x-axis between the roots<br/><strong>∴ Solution: 2 < x < 3</strong>'
            },
            terms: []
        },
        {
            id: 'worked-above',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Inequality > 0 (outside roots)',
                text: 'Solve  x² + x − 6 > 0<br/><br/>Find roots: x² + x − 6 = 0 → (x+3)(x−2) = 0 → x = −3 and x = 2<br/>a = 1 > 0 → ∪ shape → parabola is above x-axis outside the roots<br/><strong>∴ Solution: x < −3  or  x > 2</strong>'
            },
            terms: []
        },
        {
            id: 'svg-quad-ineq',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" style="width:100%;max-width:400px;display:block;margin:0 auto;"><defs><marker id="ah14" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l14{font-family:sans-serif;font-size:11px;fill:#374151}.h14{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><line x1="15" y1="130" x2="305" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah14)"/><line x1="160" y1="195" x2="160" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah14)"/><path d="M60,190 Q95,90 130,130 Q160,155 190,130 Q225,90 260,190" fill="#4f46e5" fill-opacity="0.1" stroke="none"/><polyline points="60,190 80,162 100,140 120,130 130,130 140,126 160,125 180,126 190,130 200,138 220,157 240,178 260,190" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="130" cy="130" r="4.5" fill="#4f46e5"/><circle cx="190" cy="130" r="4.5" fill="#4f46e5"/><circle cx="160" cy="125" r="4" fill="#10b981"/><text x="116" y="148" class="h14">x\u2081</text><text x="181" y="148" class="h14">x\u2082</text><text x="162" y="120" style="font-family:sans-serif;font-size:10px;fill:#10b981">min</text><text x="64" y="120" style="font-family:sans-serif;font-size:10px;fill:#6b7280">x &lt; x\u2081</text><text x="197" y="120" style="font-family:sans-serif;font-size:10px;fill:#6b7280">x &gt; x\u2082</text><text x="128" y="175" style="font-family:sans-serif;font-size:10px;fill:#4f46e5">x\u2081 &lt; x &lt; x\u2082</text><rect x="127" y="130" width="63" height="40" fill="#4f46e5" fill-opacity="0.07" stroke="none"/><text x="297" y="145" class="l14">x</text><text x="165" y="12" class="l14">y</text></svg>',
                caption: 'For a > 0: f(x) < 0 between the roots (shaded); f(x) > 0 outside the roots'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• Writing x > x₁ or x > x₂ — this is WRONG. For ">" with a > 0, the two conditions must use "<" and ">" going in <em>opposite</em> directions: x < x₁ <strong>or</strong> x > x₂.<br/>• Combining with "and" instead of "or": x < −3 <strong>and</strong> x > 2 is impossible — always write "or" for the outside region.<br/>• Not rearranging to = 0 first — never divide or "solve" as with a linear inequality.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always sketch the parabola — it is the safest way to identify the correct inequality region.<br/>• For "< 0" with a > 0: the solution is a single interval (between the roots).<br/>• For "> 0" with a > 0: the solution is two disjoint intervals (outside both roots).<br/>• Include = when the question uses ≤ or ≥ (include the roots in the solution).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'To solve a quadratic inequality: rearrange to ax²+bx+c ○ 0, find roots x₁ and x₂, sketch the parabola. For a>0: f(x)<0 → x₁<x<x₂ (between roots); f(x)>0 → x<x₁ or x>x₂ (outside roots). For a<0: reverse regions. Always sketch — never attempt to solve by algebra alone.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-results', prompt: 'For a > 0 and roots x₁ < x₂: what is the solution when f(x) < 0? When f(x) > 0?' },
            { id: 'cue-2', blockId: 'worked-below', prompt: 'Solve x² − 5x + 6 < 0.' },
            { id: 'cue-3', blockId: 'worked-above', prompt: 'Solve x² + x − 6 > 0.' },
            { id: 'cue-4', blockId: 'list-steps', prompt: 'List the four steps for solving a quadratic inequality.' },
            { id: 'cue-5', blockId: 'callout-warning', prompt: 'Why is it wrong to write "x > x₁ and x > x₂" for a quadratic inequality solution?' }
        ],
        summaryText: 'Quadratic inequality: find roots x₁,x₂ → sketch parabola. a>0: f<0 → x₁<x<x₂; f>0 → x<x₁ or x>x₂. a<0: reverse. Always sketch. Use "or" not "and" for outside-roots region.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# Write all files
# ─────────────────────────────────────────────────────────────────────────────
files = {
    "note_1_1_10.js": NOTE_1_1_10,
    "note_1_1_11.js": NOTE_1_1_11,
    "note_1_1_12.js": NOTE_1_1_12,
    "note_1_1_13.js": NOTE_1_1_13,
    "note_1_1_14.js": NOTE_1_1_14,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"✓  Wrote {path}")

print("\nDone — 5 files rewritten.")
