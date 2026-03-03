function createAbortError() {
    const error = new Error('Grading request aborted.');
    error.name = 'AbortError';
    return error;
}

function ensureSignalNotAborted(signal) {
    if (signal?.aborted) throw createAbortError();
}

function wait(ms, signal) {
    return new Promise((resolve, reject) => {
        ensureSignalNotAborted(signal);

        const timeoutId = setTimeout(() => {
            cleanup();
            resolve();
        }, ms);

        const onAbort = () => {
            clearTimeout(timeoutId);
            cleanup();
            reject(createAbortError());
        };

        const cleanup = () => {
            if (signal) signal.removeEventListener('abort', onAbort);
        };

        if (signal) signal.addEventListener('abort', onAbort);
    });
}

function validateRequest(request) {
    if (!request || typeof request !== 'object') {
        throw new Error('A grading request object is required.');
    }

    if (!request.answer || !request.answer.trim()) {
        throw new Error('Answer text is required before grading.');
    }
}

function evaluateAnswer(answer) {
    const words = answer.toLowerCase();
    const feedback = [];
    let score = 0;

    if (words.includes('delocalized') || words.includes('delocalised') || words.includes('free electron')) {
        score += 2;
        feedback.push({ text: 'Correctly identified delocalized/free electrons.', type: 'good' });
    } else {
        feedback.push({ text: 'Missing: mention of delocalized/free electrons.', type: 'bad' });
    }

    if (words.includes('positive') && (words.includes('ion') || words.includes('cation'))) {
        score += 1;
        feedback.push({ text: 'Correctly identified positive metal ions.', type: 'good' });
    } else {
        feedback.push({ text: 'Missing: mention of positive metal ions/cations.', type: 'bad' });
    }

    if (words.includes('conduct') || words.includes('carry charge') || words.includes('flow')) {
        score += 1;
        feedback.push({ text: 'Linked electron movement to conductivity.', type: 'good' });
    } else {
        feedback.push({ text: 'Missing: explanation of why metals conduct electricity.', type: 'bad' });
    }

    if (words.includes('slide') || words.includes('malleable') || words.includes('layers')) {
        score += 1;
        feedback.push({ text: 'Explained malleability through ion layer sliding.', type: 'good' });
    } else {
        feedback.push({ text: 'Missing: explanation of malleability mechanism.', type: 'bad' });
    }

    if (words.includes('sea of electron') || words.includes('electron sea') || words.includes('metallic bond')) {
        score += 1;
        feedback.push({ text: 'Used key terminology (sea of electrons / metallic bond).', type: 'good' });
    }

    const maxScore = 6;
    return {
        score,
        maxScore,
        percentage: Math.round((score / maxScore) * 100),
        feedback,
    };
}

export async function mockGrader(request, options = {}) {
    validateRequest(request);
    const { signal, latencyMs = 700 } = options;
    await wait(latencyMs, signal);
    ensureSignalNotAborted(signal);
    return evaluateAnswer(request.answer);
}

const providers = new Map([
    ['mock', mockGrader],
]);

let defaultProvider = 'mock';

export function registerGradingProvider(name, providerFn) {
    if (!name || typeof providerFn !== 'function') {
        throw new Error('registerGradingProvider(name, providerFn) requires a valid name and function.');
    }
    providers.set(name, providerFn);
}

export function setDefaultGradingProvider(name) {
    if (!providers.has(name)) {
        throw new Error(`Unknown grading provider "${name}".`);
    }
    defaultProvider = name;
}

export async function gradeTheoryAnswer(request, options = {}) {
    const providerName = options.provider || defaultProvider;
    const provider = providers.get(providerName);

    if (!provider) {
        throw new Error(`Unknown grading provider "${providerName}".`);
    }

    const result = await provider(request, options);
    return {
        ...result,
        provider: providerName,
    };
}
