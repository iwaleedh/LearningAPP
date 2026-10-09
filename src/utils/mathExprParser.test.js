import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateMathExpr, plotFunction } from './mathExprParser.js';

test('graph expressions follow mathematical exponent and sign precedence', () => {
    for (const [expression, expected] of [
        ['-x^2', -9], ['(-x)^2', 9], ['2^3^2', 512],
        ['2^-2', 0.25], ['2^-2^2', 0.0625], ['2x + 3sin(pi/2)', 9],
        ['1e-3 * x', 0.003], ['2\t*\n x', 6],
    ]) {
        assert.equal(evaluateMathExpr(expression, 3), expected, expression);
    }
});

test('graph expressions reject incomplete or trailing syntax', () => {
    for (const expression of ['(x+1', 'sin(x', 'sin x)', '1.2.3', '2)', '2^', '2@3', '.', '']) {
        assert.ok(Number.isNaN(evaluateMathExpr(expression, 3)), expression);
    }
});

test('division preserves IEEE 754 results and plotting omits undefined values', () => {
    assert.equal(evaluateMathExpr('-1/0', 0), -Infinity);
    assert.ok(Number.isNaN(evaluateMathExpr('0/0', 0)));
    assert.deepEqual(plotFunction('1/x', -1, 1, 2), [{ x: -1, y: -1 }, { x: 1, y: 1 }]);
    for (const steps of [0, -1, 1.5, Infinity, NaN]) {
        assert.deepEqual(plotFunction('x', 0, 1, steps), []);
    }
});
