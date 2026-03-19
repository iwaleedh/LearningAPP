export const igcsePhysicsSyllabus = {
    qualification: 'Cambridge IGCSE Physics',
    source: 'Cambridge IGCSE Physics 0625',
    units: [
        {
            id: 1,
            code: '4PH1',
            title: 'IGCSE Physics',
            topics: [
                {
                    id: '1',
                    title: 'Forces and Motion',
                    subtopics: [
                        'Units and Motion',
                        'Distance-Time Graphs',
                        'Velocity-Time Graphs',
                        'Acceleration',
                        'Forces',
                        'Newton\'s Laws of Motion',
                        'Momentum',
                        'Weight and Gravity',
                        'Terminal Velocity',
                        'Stopping Distance',
                        'Moments',
                        'Centre of Mass',
                        'Circular Motion',
                    ]
                },
                {
                    id: '2',
                    title: 'Electricity',
                    subtopics: [
                        'Charge and Current',
                        'Current-Voltage Characteristics',
                        'Resistance',
                        'Ohm\'s Law',
                        'Electrical Circuits',
                        'Series and Parallel Circuits',
                        'Electrical Power',
                        'Mains Electricity',
                        'Electrical Safety',
                        'Energy Transfer',
                    ]
                },
                {
                    id: '3',
                    title: 'Waves',
                    subtopics: [
                        'Properties of Waves',
                        'The Wave Equation',
                        'Transverse and Longitudinal Waves',
                        'Reflection',
                        'Refraction',
                        'Total Internal Reflection',
                        'Sound Waves',
                        'Ultrasound',
                        'Electromagnetic Spectrum',
                        'Uses of EM Waves',
                        'Dangers of EM Waves',
                    ]
                },
                {
                    id: '4',
                    title: 'Energy Resources and Energy Transfer',
                    subtopics: [
                        'Energy Stores',
                        'Energy Transfers',
                        'Conservation of Energy',
                        'Work Done',
                        'Power',
                        'Efficiency',
                        'Energy Resources',
                        'Fossil Fuels',
                        'Nuclear Energy',
                        'Renewable Energy',
                        'Sankey Diagrams',
                    ]
                },
                {
                    id: '5',
                    title: 'Solids, Liquids and Gases',
                    subtopics: [
                        'States of Matter',
                        'Density',
                        'Pressure',
                        'Kinetic Theory',
                        'Absolute Zero',
                        'Gas Laws',
                        'Boyle\'s Law',
                        'Charles\'s Law',
                        'Pressure-Temperature Relationship',
                        'Internal Energy',
                    ]
                },
                {
                    id: '6',
                    title: 'Magnetism and Electromagnetism',
                    subtopics: [
                        'Magnets and Magnetic Fields',
                        'Electromagnetism',
                        'The Motor Effect',
                        'Fleming\'s Left-Hand Rule',
                        'Electromagnetic Induction',
                        'The Generator Effect',
                        'Transformers',
                        'Transformer Equations',
                    ]
                },
                {
                    id: '7',
                    title: 'Radioactivity and Particles',
                    subtopics: [
                        'Atomic Structure',
                        'Isotopes',
                        'Radioactive Decay',
                        'Alpha, Beta and Gamma Radiation',
                        'Background Radiation',
                        'Half-Life',
                        'Nuclear Equations',
                        'Nuclear Fission',
                        'Nuclear Fusion',
                        'Uses of Radioactivity',
                        'Dangers of Radioactivity',
                    ]
                },
                {
                    id: '8',
                    title: 'Astrophysics',
                    subtopics: [
                        'The Solar System',
                        'Orbital Motion',
                        'The Life Cycle of Stars',
                        'The Universe',
                        'Red Shift',
                        'Big Bang Theory',
                        'Light Years',
                        'Parallax',
                        'Cepheid Variables',
                    ]
                },
            ]
        },
    ]
};

export function getIGCSEPhysicsUnitById(unitId) {
    return igcsePhysicsSyllabus.units.find((unit) => String(unit.id) === String(unitId));
}

export function getIGCSEPhysicsTopicById(unitId, topicId) {
    const unit = getIGCSEPhysicsUnitById(unitId);
    if (!unit) return null;
    return unit.topics.find((topic) => String(topic.id) === String(topicId));
}
