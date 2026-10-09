import { getDefinitionsForSubject } from '../../data/noteDefinitions/index.js';
import { plainText } from './guidedLesson.js';

const plainDefinitions = {
    atom: 'One tiny particle of an element.',
    element: 'A substance containing only one type of atom.',
    solute: 'The substance that is dissolved.',
    solvent: 'The substance that dissolves the solute.',
    solution: 'The mixture formed when a solute dissolves in a solvent.',
    ion: 'An atom or a group of atoms with an electrical charge.',
    molecule: 'A separate group of atoms held together by covalent bonds.',
    'empirical formula': 'The simplest whole-number ratio of atoms in a compound.',
    'molecular formula': 'The number of atoms of each element in one molecule.',
    mole: 'A counting unit for particles. One mole contains about 6.02 × 10²³ particles.',
    catalyst: 'A substance that speeds up a reaction and is not used up overall.',
    isotopes: 'Atoms of the same element with different numbers of neutrons.',
    proton: 'A particle with a positive charge in the atom’s nucleus.',
    neutron: 'A particle with no charge in the atom’s nucleus.',
    electron: 'A particle with a negative charge outside the atom’s nucleus.',
    force: 'A push or pull. A resultant force can change an object’s motion.',
    velocity: 'Speed in a stated direction.',
    acceleration: 'How quickly velocity changes.',
    diffusion: 'Particles spread from a region of higher concentration to a region of lower concentration.',
    enzyme: 'A biological catalyst: it speeds up a reaction in a living system.',
    revenue: 'Income a business receives from its sales.',
    profit: 'Revenue left after subtracting costs.',
    'opportunity cost': 'The next best option you give up when you make a choice.',
    asset: 'A resource owned or controlled by a business.',
    liability: 'An amount a business owes.',
};

const englishDefinitions = {
    register: 'The style of language you choose for a situation, such as formal or informal language.',
    collocation: 'Words commonly used together, such as “make a decision”.',
    idiom: 'An expression whose meaning is different from the literal meaning of its words, such as “a piece of cake” for something easy.',
    inference: 'An idea you work out from clues, even when the text does not state it directly.',
    cohesion: 'The way words and sentences link together, for example through pronouns and linking words.',
    coherence: 'How clearly the ideas fit together and make sense as a whole.',
    paraphrase: 'Express the same meaning using different words.',
    preposition: 'A word showing a relationship, such as “in”, “on” or “after”.',
    pronoun: 'A word that refers to a person or thing, such as “she”, “it” or “they”.',
    conjunction: 'A word that connects words or ideas, such as “and”, “but” or “because”.',
    'auxiliary verb': 'A helping verb used with another verb, such as “has” in “has finished”.',
    intonation: 'The way your voice rises and falls as you speak.',
    'syllable stress': 'Giving one part of a word more emphasis when you say it.',
};

export function getLessonGlossary(subject, step) {
    const normalized = String(subject || '').replace(/^olevel_/, '').replace(/^maths_(core|extended)$/, 'mathematics');
    const definitions = ['cae', 'cpe'].includes(normalized) ? englishDefinitions : getDefinitionsForSubject(normalized);
    const text = plainText((step?.blocks || []).map(block => {
        const data = block.data || {};
        return [data.text, data.html, data.caption, ...(data.headers || []), ...(data.rows || []).flat(), ...(data.items || []).map(item => typeof item === 'string' ? item : item.text)].filter(Boolean).join(' ');
    }).join(' ')).toLowerCase();
    return Object.entries(definitions)
        .filter(([term]) => {
            const escaped = term.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return new RegExp(`\\b${escaped}s?\\b`).test(text);
        })
        .sort(([a], [b]) => b.length - a.length)
        .slice(0, 3)
        .map(([term, definition]) => ({ term, definition: plainDefinitions[term.toLowerCase()] || definition }));
}
