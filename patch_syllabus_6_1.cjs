const fs = require('fs');
let content = fs.readFileSync('src/data/biologySyllabus.js', 'utf8');

const newTopic6 = `                    id: 6,
                    title: 'Topic 6: Immunity, Infection and Forensics',
                    subtopics: [
                        'Culturing Microorganisms', // 0
                        'Measuring the Growth of Microorganisms', // 1
                        'The Bacterial Growth Curve', // 2
                        'Core Practical 13: Rate of Growth of Microorganisms', // 3
                        'Comparison of Bacterial & Viral Structure', // 4
                        'Pathogen mechanisms', // 5
                        'Non-specific immune response', // 6
                        'B cells and antibodies', // 7
                        'T cells', // 8
                        'Vaccination and immunity', // 9
                        'Antibiotic types', // 10
                        'Antibiotic resistance', // 11
                        'Core Practical 14: antibiotic sensitivity', // 12
                        'Decomposition', // 13
                        'Forensic time-of-death', // 14
                        'PCR and gel electrophoresis', // 15
                    ],`;

content = content.replace(/id: 6,\s+title: 'Topic 6: Immunity, Infection and Forensics',[\s\S]*?],/, newTopic6);
fs.writeFileSync('src/data/biologySyllabus.js', content);
console.log("Updated biologySyllabus.js for topic 6.1");
