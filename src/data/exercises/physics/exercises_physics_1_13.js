export const exercises_physics_1_13 = {
    mcq: [
        // Equation for the Intensity of Radiation
        {
            id: 'mcq-t13-1',
            stem: 'Which equation correctly represents the intensity of radiation from a point source?',
            options: ['I = P/r²', 'I = P/r', 'I = E/r²', 'I = eP/4πr²', 'I = kT'],
            correctAnswer: 0,
            rationale: 'The intensity I of radiation from a point source follows the inverse square law: I = P/(4πr²), where P is the power emitted and r is the distance from the source. This is for a point source radiating uniformly in all directions (3D). Option B is for a line source (1D). Option C relates to a point on a sphere. Option D is for an extended source. Option E includes k (Stefan-Boltzmann constant) for blackbody radiation.',
            topic: 'Equation for the Intensity of Radiation'
        },
        {
            id: 'mcq-t13-2',
            stem: 'If you double the distance from a point source, what happens to the radiation intensity?',
            options: ['Intensity quadruples', 'Intensity doubles', 'Intensity halves', 'Intensity increases by a factor of 4', 'Cannot be determined'],
            correctAnswer: 0,
            rationale: 'Since I = P/(4πr²), intensity is inversely proportional to the square of distance (I ∝ 1/r²). Doubling distance would cause intensity to quadruple (2² = 4). Halving distance would cause intensity to quarter (1/4²). The intensity changes inversely with distance.',
            topic: 'Equation for the Intensity of Radiation'
        },
        {
            id: 'mcq-t13-3',
            stem: 'What is the unit of radiation intensity?',
            options: ['Watts per square metre (W/m²)', 'Joules per second (W/s²)', 'Lumens per square metre (lm/m²)', 'Watts per steradian (W/sr)'],
            correctAnswer: 0,
            rationale: 'Radiation intensity I is measured in watts per square metre (W/m²). This is power per unit area. Option B uses joules per second (W/s²), which is power, not intensity (power per area). Option C uses lumens (lm/m²), which is for luminous intensity. Option D uses watts per steradian (W/sr), which is for radiation from a point source.',
            topic: 'Equation for the Intensity of Radiation'
        },

        // Refraction
        {
            id: 'mcq-t13-4',
            stem: 'What is Snell\'s Law of refraction?',
            options: ['n₁sinθ₁ = n₂sinθ₂', 'n₁cosθ₁ = n₂cosθ₂', 'sinθ₁/n₂ = sinθ₂/cosθ₁', 'n₁/sinθ₁ = n₂/sinθ₂'],
            correctAnswer: 0,
            rationale: 'Snell\'s Law relates the angles of incidence and refraction: n₁sinθ₁ = n₂sinθ₂. When light travels from a less dense medium (n₁) to a more dense medium (n₂), it bends toward the normal. The ratio of sines equals the ratio of refractive indices: sinθ₁/sinθ₂ = n₂/n₁. Option A is incorrect — it reverses the indices. Option C reverses both the ratio and the division.',
            topic: 'Refraction'
        },
        {
            id: 'mcq-t13-5',
            stem: 'When light travels from a denser medium to a less dense medium at an angle of incidence greater than the critical angle, what happens?',
            options: ['It reflects back', 'It refracts and travels into the second medium', 'It reflects and travels along the boundary', 'Total internal reflection occurs'],
            correctAnswer: 2,
            rationale: 'When the angle of incidence exceeds the critical angle θc, total internal reflection occurs. The light is entirely reflected back inside the first medium with no transmission into the second medium. Option A suggests reflection occurs, but not total internal reflection. Option B describes refraction, which does happen, but doesn\'t specify that all light is internally reflected.',
            topic: 'Refraction'
        },
        {
            id: 'mcq-t13-6',
            stem: 'What is the critical angle?',
            options: ['θc = arcsin(n₂/n₁)', 'θc = arcsin(n₁/n₂)', 'θc = 90°', 'θc depends on both media'],
            correctAnswer: 1,
            rationale: 'The critical angle θc is given by θc = arcsin(n₂/n₁), where n₁ is the refractive index of the second medium and n₂ is the refractive index of the first medium. Total internal reflection occurs when the angle of incidence is greater than or equal to the critical angle. Option A incorrectly uses the indices in the wrong order.',
            topic: 'Refraction'
        },
        {
            id: 'mcq-t13-7',
            stem: 'A light ray travels from air (n=1.0) into glass (n=1.5) at an angle of 30°. What is the angle of refraction measured from the normal?',
            options: ['19.5°', '22.1°', '30°', '18.5°'],
            correctAnswer: 0,
            rationale: 'Using Snell\'s Law: n₁sinθ₁ = n₂sinθ₂. Therefore θ = arcsin(n₂sinθ₁/n₂) = arcsin(1.0 × sin30°/1.5) = arcsin(0.5/1.5) = arcsin(0.5/1.5) = arcsin(0.333) = 19.5°. Option A (30°) incorrectly uses the sine of the incident angle (sin30°). Option B is close but uses sin30° in the arcsin. Option C correctly computes arcsin(sinθ₁/sinθ₂) ≈ 19.5°.',
            topic: 'Refraction'
        },

        // Reflection
        {
            id: 'mcq-t13-8',
            stem: 'What type of reflection occurs when light strikes a smooth surface?',
            options: ['Diffuse reflection', 'Specular reflection', 'Total internal reflection'],
            correctAnswer: 2,
            rationale: 'For a smooth surface, diffuse reflection occurs where light reflects in many different directions. For a very smooth surface (polished mirror), specular reflection occurs where the angle of reflection equals the angle of incidence and all reflected rays are parallel (like a mirror). Between these extremes is specular reflection with rays reflected in similar directions. Option A (diffuse) describes rough scattering. Option C (specular) describes mirror-like reflection.',
            topic: 'Reflection'
        },
        {
            id: 'mcq-t13-9',
            stem: 'What is the relationship between the angle of incidence i and the angle of reflection r for a mirror?',
            options: ['i = r', 'i = 2r', 'i = r', 'i + r = 180°'],
            correctAnswer: 0,
            rationale: 'For a plane mirror, the angle of incidence i equals the angle of reflection r: i = r. The incident and reflected rays make equal angles with the normal. Option A incorrectly uses i = r twice. Option B describes them correctly but uses 2r instead of recognizing they are complementary angles summing to 180°.',
            topic: 'Reflection'
        },

        // Polarisation
        {
            id: 'mcq-t13-10',
            stem: 'When light passes through a polariser, how does the transmitted light behave?',
            options: ['Light is blocked', 'Light is partially blocked', 'Light is fully transmitted', 'Light intensity is reduced'],
            correctAnswer: 2,
            rationale: 'A polariser only transmits light whose electric field vector is parallel to the transmission axis. This light is fully transmitted with its electric field unchanged and maintains its original intensity. Option A (blocked) would mean no light gets through. Option C describes partial transmission where some light gets through but intensity is reduced.',
            topic: 'Polarisation'
        },

        // Lenses
        {
            id: 'mcq-t13-11',
            stem: 'Which type of lens has a positive focal length?',
            options: ['Convex lens', 'Concave lens', 'Both (converging lens)'],
            correctAnswer: 0,
            rationale: 'A convex lens converges parallel light rays to a real focus on the opposite side. A concave lens diverges parallel light rays, appearing to come from a virtual focus on the same side as the source. Converging (positive) lenses have f > 0 and real focal points. Diverging (negative) lenses have f < 0 and virtual focal points.',
            topic: 'Lenses'
        },
        {
            id: 'mcq-t13-12',
            stem: 'What is the power of a lens?',
            options: ['P = 1/f', 'P = f/2f', 'P = (n-1)/f', 'Depends on refractive index'],
            correctAnswer: 2,
            rationale: 'The power of a lens depends on its shape and refractive index. For thin lenses in air: P = (n-1)/f, where n is the refractive index of the lens material. For thick lenses: P = f/(2f), where f is the focal length. The formula shows that a lens with higher refractive index is more powerful for the same focal length.',
            topic: 'Lenses'
        },
        {
            id: 'mcq-t13-13',
            stem: 'What is the relationship between object distance u and image distance v for a thin convex lens?',
            options: ['1/f + 1/v = 1/f', '1/f = 1/v', '1/f + 1/v = 2/f', 'Cannot be determined'],
            correctAnswer: 3,
            rationale: 'The thin lens formula in air is 1/f + 1/v. If the object is at infinity, 1/v = 0, so 1/f = 1/v and both equations give 1/f. If the object is at 2f, then 1/f + 1/v = 1/2f = 3/(2f) or 1.5/f. Using this: 1/f + 1/(2f) = (2f+1)/(2f) = (3f+1)/(2f) = 3f/2f = 1.5/f. This shows that the lens power is maximum.',
            topic: 'Lenses'
        },

        // Optical Fibres
        {
            id: 'mcq-t13-14',
            stem: 'What is the main advantage of optical fibres over bulk glass?',
            options: ['Can carry more light', 'Less expensive', 'More flexible', 'Sharper images'],
            correctAnswer: 1,
            rationale: 'Optical fibres can carry much more light data than bulk glass due to total internal reflection. Multiple thin fibres are bundled together to transmit more channels simultaneously. They are also more flexible and can produce sharper images with less aberration.',
            topic: 'Optical Fibres'
        },

        // Total Internal Reflection
        {
            id: 'mcq-t13-15',
            stem: 'What condition must be met for total internal reflection to occur?',
            options: ['θc > 90°', 'n₁ < n₂', 'Smooth boundary', 'Thick boundary layer'],
            correctAnswer: 0,
            rationale: 'Total internal reflection occurs when: (1) the angle of incidence is greater than or equal to the critical angle θc, (2) light travels from a less dense medium (n₁) to a more dense medium (n₂), AND (3) the boundary is optically smooth (roughness much less than wavelength of light). Option A correctly identifies two conditions but misses the thick boundary requirement.',
            topic: 'Total Internal Reflection'
        }
    ],
    fillblank: [
        // Equation for the Intensity of Radiation
        {
            id: 'fb-t13-1',
            stem: 'The intensity of radiation from a point source is I = __BLANK__.',
            blanks: [{ answer: 'P/(4πr²)' }],
            rationale: 'I = P/(4πr²) relates power P to distance r. This applies to a point source radiating uniformly in all directions (spherical source).'
        },
        {
            id: 'fb-t13-2',
            stem: 'If distance is doubled, intensity changes by a factor of __BLANK__.',
            blanks: [{ answer: '4' }],
            rationale: 'Since I ∝ 1/r², doubling distance (r → 2r) causes intensity to quadruple (1/r² → 4/r²).'
        },

        // Refraction
        {
            id: 'fb-t13-3',
            stem: 'Snell\'s Law is n₁sinθ₁ = __BLANK__.',
            blanks: [{ answer: 'n₂sinθ₂' }],
            rationale: 'Snell\'s Law relates the angle of incidence θ₁ to the angle of refraction θ₂ measured from the normal: n₁sinθ₁ = n₂sinθ₂.'
        },
        {
            id: 'fb-t13-4',
            stem: 'Total internal reflection occurs when θc is __BLANK__ than or equal to θc.',
            blanks: [{ answer: 'greater' }],
            rationale: 'The critical angle θc is given by θc = arcsin(n₂/n₁). Total internal reflection occurs when the angle of incidence is greater than or equal to this critical angle.'
        },
        {
            id: 'fb-t13-5',
            stem: 'For refraction at an interface between air (n=1.0) and glass (n=1.5), the refracted ray bends __BLANK__ the normal.',
            blanks: [{ answer: 'towards' }],
            rationale: 'When light travels from a less dense medium (air, n=1.0) to a more dense medium (glass, n=1.5), it bends toward the normal. The normal is the line perpendicular to the boundary at the point of incidence, drawn into the denser medium.'
        },

        // Lenses
        {
            id: 'fb-t13-6',
            stem: 'The power of a thin lens in air is P = __BLANK__.',
            blanks: [{ answer: '(n-1)/f' }],
            rationale: 'For a thin lens in air (n ≈ 1), the lens maker\'s formula is P = (n-1)/f, where n is the refractive index of the lens material.'
        },
        {
            id: 'fb-t13-7',
            stem: 'A convex lens has a __BLANK__ focal length (real images are formed on the opposite side).',
            blanks: [{ answer: 'positive' }],
            rationale: 'A convex lens converges parallel light rays to a real focus. Converging (positive) lenses have f > 0 and real focal points. Diverging (negative) lenses have f < 0 and virtual focal points.'
        },

        // Total Internal Reflection
        {
            id: 'fb-t13-8',
            stem: 'For total internal reflection, in addition to θc > 90°, the boundary must be __BLANK__.',
            blanks: [{ answer: 'optically smooth' }],
            rationale: 'For total internal reflection, the boundary between the two media must be optically smooth (roughness much less than the wavelength of light).'
        }
    ],
    dragdrop: [
        // Types of Reflection
        {
            id: 'dd-t13-1',
            stem: 'Sort these reflection descriptions:',
            categories: ['Diffuse reflection', 'Specular reflection', 'Total internal reflection'],
            items: [
                { text: 'Rough surface scatters light in many random directions', category: 'Diffuse reflection' },
                { text: 'Polished mirror reflects rays parallel (like a mirror)', category: 'Specular reflection' },
                { text: 'Smooth surface can act as a good mirror for specular reflection', category: 'Specular reflection' }
            ]
        },
        {
            id: 'dd-t13-2',
            stem: 'Classify these reflection surfaces:',
            categories: ['Optically smooth (polished mirror)', 'Rough but not completely smooth', 'Very rough (diffuse)'],
            items: [
                { text: 'Glass mirror or very still water surface', category: 'Optically smooth (polished mirror)' },
                { text: 'Typical household mirror', category: 'Rough but not completely smooth' },
                { text: 'Matt white surface or paper', category: 'Very rough (diffuse)' }
            ]
        },

        // Lens Types
        {
            id: 'dd-t13-3',
            stem: 'Sort these lenses by their effect on light:',
            categories: ['Converging (f > 0)', 'Diverging (f < 0)', 'No power (parallel glass)'],
            items: [
                { text: 'Convex lens: converges parallel rays to real focus', category: 'Converging (f > 0)' },
                { text: 'Concave lens: diverges parallel rays from virtual focus', category: 'Diverging (f < 0)' },
                { text: 'Flat or parallel glass: no convergence or divergence', category: 'No power (parallel glass)' }
            ]
        },

        // Optical Fibres Applications
        {
            id: 'dd-t13-4',
            stem: 'Match the application with the advantage:',
            categories: ['Medical imaging', 'Telecommunications', 'Illumination', 'Data transmission', 'High image quality'],
            items: [
                { text: 'Endoscope with fibre bundles', category: 'Medical imaging' },
                { text: 'Undersea cables with repeaters', category: 'Telecommunications' },
                { text: 'LED lighting systems', category: 'Illumination' },
                { text: 'Server room fibre optics', category: 'Data transmission' },
                { text: 'High-quality camera lenses for photography', category: 'High image quality' }
            ]
        }
    ],
    sequence: [
        // Refraction Calculations
        {
            id: 'seq-t13-1',
            stem: 'Order these steps to calculate the refracted angle using Snell\'s Law:',
            steps: [
                'Identify the refractive indices n₁ and n₂ for both media',
                'Identify the angle of incidence θ₁',
                'Calculate sinθ₁ and cosθ₁',
                'Calculate sinθ₂ and cosθ₂',
                'Apply Snell\'s Law: n₁sinθ₁ = n₂sinθ₂ to find θ₂',
                'State whether the ray bends toward or away from the normal'
            ]
        },
        {
            id: 'seq-t13-2',
            stem: 'Order these steps to solve a critical angle problem:',
            steps: [
                'Identify which medium is incident (first) and which is refractive (second)',
                'Identify the refractive indices n₁ and n₂',
                'Calculate the critical angle using θc = arcsin(n₂/n₁)',
                'Compare the angle of incidence to the critical angle',
                'Determine if total internal reflection will occur (θc ≥ θc or θc ≤ 90° if n₁ < n₂)'
            ]
        },

        // Mirror Ray Diagrams
        {
            id: 'seq-t13-3',
            stem: 'Order these steps to draw ray diagrams for reflection from a plane mirror:',
            steps: [
                'Draw the plane mirror as a vertical line',
                'Draw the incident ray at the given angle to the normal',
                'Measure the angle of incidence i from the normal',
                'Draw the reflected ray such that angle r equals angle i (law of reflection)',
                'Add arrows to show incident and reflected rays travelling in opposite directions',
                'Label the incident angle, reflected angle, and normal line'
            ]
        },

        // Thin Lens Ray Diagrams
        {
            id: 'seq-t13-4',
            stem: 'Order these steps to draw ray diagrams for a thin convex lens:',
            steps: [
                'Draw the principal axis (horizontal line through the optical centre)',
                'Draw the lens as a vertical line with arrowheads at each end',
                'Draw the incident ray parallel to the principal axis from the left',
                'Mark and label the focal point F on the right side (since convex converges to real focus)',
                'Draw the refracted ray through the lens and extending beyond the focal point',
                'Add arrowheads to show direction of light travel'
            ]
        }
    ],
    keyword: [
        // Equation for the Intensity of Radiation
        {
            id: 'kw-t13-1',
            stem: 'Define the intensity of radiation from a point source. [2 marks]',
            marks: 2,
            keywords: ['intensity', 'point source', 'inverse square law', 'I = P/(4πr²)', 'power per unit area', 'W/m²'],
            modelAnswer: 'The intensity I of radiation from a point source is given by the inverse square law: I = P/(4πr²), where P is the power emitted and r is the distance from the source. Intensity measures power per unit area in W/m². This applies to a point source radiating uniformly in all directions.'
        },
        {
            id: 'kw-t13-2',
            stem: 'State Snell\'s Law of refraction. [2 marks]',
            marks: 2,
            keywords: ['Snell\'s Law', 'refraction', 'angle of incidence', 'angle of refraction', 'refractive indices', 'normal', 'bends towards', 'bends away'],
            modelAnswer: 'Snell\'s Law relates the angles of incidence and refraction: n₁sinθ₁ = n₂sinθ₂. n₁ is the refractive index of the incident medium and θ₁ is the angle of incidence measured from the normal. n₂ is the refractive index of the second medium and θ₂ is the angle of refraction measured from the normal. If n₁ < n₂, the ray bends toward the normal. If n₁ > n₂, the ray bends away from the normal.'
        },

        // Refraction
        {
            id: 'kw-t13-3',
            stem: 'Explain what happens when light travels from a less dense medium to a more dense medium at an angle greater than the critical angle. [3 marks]',
            marks: 3,
            keywords: ['total internal reflection', 'critical angle', 'less dense to more dense', 'refracts', 'boundary'],
            modelAnswer: 'When light travels from a less dense medium (lower n, e.g., air) to a more dense medium (higher n, e.g., glass) at an angle greater than the critical angle θc, total internal reflection occurs. The light is entirely reflected back into the first medium with no transmission into the second medium. The critical angle is given by θc = arcsin(n₂/n₁).'
        },
        {
            id: 'kw-t13-4',
            stem: 'Explain the difference between specular and diffuse reflection. [3 marks]',
            marks: 3,
            keywords: ['specular reflection', 'diffuse reflection', 'rough surface', 'smooth surface', 'parallel rays', 'scattering', 'law of reflection'],
            modelAnswer: 'Specular reflection occurs on very smooth surfaces where the angle of incidence equals the angle of reflection and all reflected rays are parallel (like a mirror). Diffuse reflection occurs on rough surfaces where light is reflected in many random directions. The law of reflection states that the angle of incidence i equals the angle of reflection r.'
        },

        // Reflection
        {
            id: 'kw-t13-5',
            stem: 'State the law of reflection for a plane mirror. [2 marks]',
            marks: 2,
            keywords: ['law of reflection', 'angle of incidence', 'angle of reflection', 'normal', 'parallel rays', 'plane mirror'],
            modelAnswer: 'For reflection from a plane mirror: the angle of incidence i equals the angle of reflection r (i = r). The incident ray, normal, and reflected ray all lie in the same plane, with the incident and reflected rays making equal angles with the normal on opposite sides of the mirror.'
        },
        {
            id: 'kw-t13-6',
            stem: 'Describe what conditions affect the type of reflection from a surface. [2 marks]',
            marks: 2,
            keywords: ['surface roughness', 'wavelength of light', 'specular vs diffuse', 'polishing', 'optical properties'],
            modelAnswer: 'The type of reflection depends on surface roughness relative to wavelength. For very smooth surfaces (wavelength >> roughness), specular reflection dominates. As roughness increases, diffuse reflection becomes more significant. For highly polished surfaces, specular reflection is nearly perfect. Polishing optical surfaces improves specular reflection quality.'
        },

        // Polarisation
        {
            id: 'kw-t13-7',
            stem: 'Explain how a polariser works. [3 marks]',
            marks: 3,
            keywords: ['polariser', 'polarising axis', 'transmission axis', 'parallel light', 'electric field', 'absorbs', 'transmits'],
            modelAnswer: 'A polariser contains a polarising filter (typically a dichroic sheet) with its transmission axis perpendicular to the incident light. Light with its electric field parallel to the transmission axis is fully transmitted. Light with its electric field perpendicular to the axis is absorbed. Light with other orientations is partially transmitted with reduced intensity.'
        },

        // Lenses
        {
            id: 'kw-t13-8',
            stem: 'Define the power of a lens and explain the lens maker\'s formula. [3 marks]',
            marks: 3,
            keywords: ['power', 'focal length', 'P = 1/f', 'P = (n-1)/f', 'refractive index', 'converging', 'diverging'],
            modelAnswer: 'The power of a lens is P = 1/f, where f is the focal length. For thin lenses in air (n ≈ 1): P = (n-1)/f. This means a lens with higher refractive index has more focusing power. Converging (positive f) lenses form real images; diverging (negative f) lenses form virtual images. Option B uses f (focal length) which applies to thick lenses.'
        },

        // Total Internal Reflection
        {
            id: 'kw-t13-9',
            stem: 'State the three conditions required for total internal reflection. [3 marks]',
            marks: 3,
            keywords: ['total internal reflection', 'critical angle', 'less dense to more dense', 'optically smooth', 'thick boundary'],
            modelAnswer: 'Total internal reflection requires: (1) the angle of incidence θc is greater than or equal to the critical angle, (2) light travels from a less dense medium (n₁) to a more dense medium (n₂), AND (3) the boundary between the media is optically smooth (roughness much less than wavelength).'
        },

        // Optical Fibres Applications
        {
            id: 'kw-t13-10',
            stem: 'Explain two advantages of optical fibres over bulk glass. [3 marks]',
            marks: 3,
            keywords: ['total internal reflection', 'data capacity', 'flexibility', 'signal quality', 'bandwidth'],
            modelAnswer: 'Optical fibres have two main advantages: (1) Total internal reflection within each fibre allows much more signal to be carried compared to bulk glass, preventing crosstalk between channels. (2) Multiple thin fibres can be bundled together, increasing the total data capacity and bandwidth compared to a single thick glass core.'
        }
    ],
    flashcards: [
        // Equation for the Intensity of Radiation
        {
            id: 'fc-t13-1',
            front: 'What is the formula for intensity from a point source?',
            back: 'I = P/(4πr²)\nWhere P = power (W), r = distance from source (m)\nIntensity measured in W/m²\nApplies to point sources radiating uniformly',
            topic: 'Equation for the Intensity of Radiation'
        },
        {
            id: 'fc-t13-2',
            front: 'What happens to intensity when distance increases?',
            back: 'Intensity decreases\nSince I ∝ 1/r², increasing distance causes intensity to decrease (inverse relationship)',
            topic: 'Equation for the Intensity of Radiation'
        },
        {
            id: 'fc-t13-3',
            front: 'State Snell\'s Law of refraction.',
            back: 'n₁sinθ₁ = n₂sinθ₂\nRelates angle of incidence θ₁ to angle of refraction θ₂\nn₁ is refractive index of incident medium\nn₂ is refractive index of refractive medium\nIf n₁ < n₂: ray bends toward normal\nIf n₁ > n₂: ray bends away from normal',
            topic: 'Refraction'
        },
        {
            id: 'fc-t13-4',
            front: 'What is total internal reflection?',
            back: '100% reflection\nLight reflected entirely back into first medium\nNo transmission to second medium\nOccurs when θc ≥ critical angle AND boundary is smooth\nθc = arcsin(n₂/n₁)',
            topic: 'Total Internal Reflection'
        },
        {
            id: 'fc-t13-5',
            front: 'What is the law of reflection for a plane mirror?',
            back: 'i = r\nAngle of incidence equals angle of reflection\nIncident ray, normal, and reflected ray all lie in same plane\nMake equal angles with normal on opposite sides',
            topic: 'Reflection'
        },
        {
            id: 'fc-t13-6',
            front: 'What affects the type of reflection from a surface?',
            back: 'Surface roughness relative to wavelength\nPolished specular reflection (smooth)\nRough diffuse reflection (rough)\nWavelength and surface finish',
            topic: 'Reflection'
        },
        {
            id: 'fc-t13-7',
            front: 'How does a polariser work?',
            back: 'Contains polarising filter\nTransmission axis perpendicular to incident light\nParallel light fully transmitted\nPerpendicular light absorbed\nOther orientations partially transmitted with reduced intensity',
            topic: 'Polarisation'
        },
        {
            id: 'fc-t13-8',
            front: 'What is the lens maker\'s formula for thin lenses?',
            back: 'P = (n-1)/f\nFor thin lenses in air (n≈1)\nDepends on refractive index n\nHigher n = more powerful lens\nConverging: positive f (real images)\nDiverging: negative f (virtual images)',
            topic: 'Lenses'
        },
        {
            id: 'fc-t13-9',
            front: 'What are the three conditions for total internal reflection?',
            back: 'θc ≥ critical angle\nn₁ < n₂\nOptically smooth boundary\nConditions must be met simultaneously',
            topic: 'Total Internal Reflection'
        },
        {
            id: 'fc-t13-10',
            front: 'What is the main advantage of optical fibres over bulk glass?',
            back: 'Total internal reflection within each fibre\nMuch higher data capacity and bandwidth\nReduced crosstalk between channels',
            topic: 'Optical Fibres'
        }
    ]
};
