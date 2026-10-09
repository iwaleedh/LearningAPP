import { createElement } from 'react';
import { subjectIconFor } from './subjectIcons.js';

export default function SubjectIcon({ subject, size = 18, className }) {
    return createElement(subjectIconFor(subject), { size, className, 'aria-hidden': true });
}
