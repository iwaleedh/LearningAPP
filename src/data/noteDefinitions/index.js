import { accountingDefinitions } from './accountingDefinitions.js';
import { biologyDefinitions } from './biologyDefinitions.js';
import { businessDefinitions } from './businessDefinitions.js';
import { chemistryDefinitions } from './chemistryDefinitions.js';
import { economicsDefinitions } from './economicsDefinitions.js';
import { mathematicsDefinitions } from './mathematicsDefinitions.js';
import { physicsDefinitions } from './physicsDefinitions.js';

export const noteDefinitionsBySubject = {
    chemistry: chemistryDefinitions,
    biology: biologyDefinitions,
    physics: physicsDefinitions,
    math: mathematicsDefinitions,
    mathematics: mathematicsDefinitions,
    business: businessDefinitions,
    economics: economicsDefinitions,
    accounting: accountingDefinitions,
};

export function getDefinitionsForSubject(subject) {
    const key = String(subject || '').toLowerCase();
    return noteDefinitionsBySubject[key] || {};
}

export function getOfficialDefinition(subject, term) {
    const definitions = getDefinitionsForSubject(subject);
    return definitions[term] || '';
}
