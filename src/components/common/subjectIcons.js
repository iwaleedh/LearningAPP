import { Atom, BookOpen, Briefcase, Calculator, Dna, FlaskConical, Landmark, Languages, Sigma } from 'lucide-react';

// One drawn icon per subject, shared by every subject picker, list and search result.
const ICON_BY_SUBJECT = {
    chemistry: FlaskConical,
    biology: Dna,
    physics: Atom,
    mathematics: Sigma,
    maths: Sigma,
    business: Briefcase,
    economics: Landmark,
    accounting: Calculator,
    cae: Languages,
    cpe: Languages,
    english: Languages,
};

// Accepts any subject id the app uses: 'chemistry', 'olevel_maths_core', 'olevel-chemistry', 'cae'…
export function subjectIconFor(subjectId = '') {
    const base = String(subjectId)
        .toLowerCase()
        .replace(/^(olevel|igcse)[_-]/, '')
        .replace(/[_-].*$/, '');
    return ICON_BY_SUBJECT[base] || BookOpen;
}
