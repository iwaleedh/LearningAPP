import test from 'node:test';
import assert from 'node:assert/strict';
import { note_mathematics_6_4_1 as correlation } from './seedNotes/mathematics/note_6_4_1.js';
import { note_chemistry_1_1_5 as combustion } from './seedNotes/chemistry/note_1_1_5.js';
import { note_physics_5_25_4 as boyle } from './seedNotes/physics/note_physics_5_25_4.js';
import { note_biology_2_4_15 as fibre } from './seedNotes/biology/note_2_4_15.js';
import { note_physics_5_26_1 as radiation } from './seedNotes/physics/note_physics_5_26_1.js';
import { note_olevel_chemistry_8_8_3 as halogens } from './seedNotes/olevel_chemistry/note_olevel_chemistry_8_8_3.js';
import { note_olevel_chemistry_6_6_4 as rates } from './seedNotes/olevel_chemistry/note_olevel_chemistry_6_6_4.js';

const data = (note, id) => note.blocks.find(block => block.id === id).data;
const close = (a, b, tolerance) => assert.ok(Math.abs(a - b) < tolerance, `${a} differs from ${b}`);

test('PMCC worked data are possible and produce the displayed correlation', () => {
    const text = data(correlation, 'callout-pmcc-worked').text;
    const x = text.match(/x = ([\d, ]+) and/)[1].split(',').map(Number);
    const y = text.match(/y = ([\d, ]+)\./)[1].split(',').map(Number);
    const sum = a => a.reduce((a, b) => a + b, 0);
    const sxx = sum(x.map(v => v * v)) - sum(x) ** 2 / x.length;
    const syy = sum(y.map(v => v * v)) - sum(y) ** 2 / y.length;
    const sxy = sum(x.map((v, i) => v * y[i])) - sum(x) * sum(y) / x.length;
    const r = sxy / Math.sqrt(sxx * syy);
    assert.ok(Math.abs(r) <= 1);
    close(r, Number(text.match(/= (0\.\d+) \(3 s\.f\.\)/)[1]), 0.0005);
    assert.equal(sum(y.map(v => v * v)), Number(text.match(/Σy² = (\d+)/)[1]));
});

test('combustion masses yield the stated empirical formula without arbitrary rounding', () => {
    const text = data(combustion, 'callout-pq1').text;
    const mass = Number(text.match(/Question:<\/strong> ([\d.]+) g/)[1]);
    const co2 = Number(text.match(/produce ([\d.]+) g of CO₂/)[1]);
    const water = Number(text.match(/and ([\d.]+) g of H₂O/)[1]);
    const c = co2 / 44, h = water / 18 * 2, o = (mass - c * 12 - h) / 16;
    close(c / o, 2, 1e-9); close(h / o, 4, 1e-9);
    assert.match(text, /Empirical formula: C₂H₄O/);
});

test('Boyle example consistently converts kPa and cm³ into SI units', () => {
    const items = data(boyle, 'para-7').items.map(item => item.text);
    const p = Number(items[0].match(/pressure (\d+) kPa/)[1]) * 1000;
    const v = Number(items[0].match(/volume (\d+) cm³/)[1]) / 1e6;
    close(p * v, Number(items[1].match(/= ([\d.]+) Pa m³/)[1]), 1e-9);
    const p2 = Number(items[1].match(/increases to (\d+) kPa/)[1]) * 1000;
    close(p * v / p2 * 1e6, Number(items[3].match(/(\d+) cm³/)[1]), 1e-9);
});

test('modulus example uses an elastic load and its extension with consistent units', () => {
    const text = data(fibre, 'callout-worked-8').text;
    const diameter = Number(text.match(/diameter = (\d+) μm/)[1]) * 1e-6;
    const length = Number(text.match(/original length = ([\d.]+) m/)[1]);
    const mass = Number(text.match(/a ([\d.]+) kg load/)[1]);
    const extension = Number(text.match(/extension of ([\d.]+) mm/)[1]) * 1e-3;
    const modulus = mass * 9.81 / (Math.PI * (diameter / 2) ** 2) / (extension / length) / 1e9;
    close(modulus, Number(text.match(/= ([\d.]+) GPa/)[1]), 0.05);
    assert.match(text, /linear elastic region/);
});

test('radiation example retains the fourth power and the Stefan-Boltzmann exponent', () => {
    const text = data(radiation, 'para-11').items[0].text;
    const area = Number(data(radiation, 'para-9').items[0].text.match(/A = (\d+) m²/)[1]);
    const temperature = Number(data(radiation, 'para-9').items[0].text.match(/= (\d+) K/)[1]);
    const power = 5.67e-8 * area * temperature ** 4;
    close(power, Number(text.match(/≈ (\d+) W/)[1]), 1);
    assert.match(data(radiation, 'para-4').items[0].text, /σAT⁴/);
    assert.match(data(radiation, 'para-10').items[0].text, /10⁻⁸/);
});

test('corrected iron chlorination and rate-example equations conserve atoms', () => {
    const sub = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4' };
    const count = side => {
        const result = {};
        for (const term of side.split('+')) {
            const normalized = term.trim().replace(/\((?:aq|s|l|g)\)/g, '').replace(/[₀-₄]/g, digit => sub[digit]);
            const coefficient = Number(normalized.match(/^\d+/)?.[0] || 1);
            for (const match of normalized.replace(/^\d+/, '').matchAll(/([A-Z][a-z]?)(\d*)/g)) {
                result[match[1]] = (result[match[1]] || 0) + coefficient * Number(match[2] || 1);
            }
        }
        return result;
    };
    const iron = data(halogens, 'call-reactions').text.match(/(\d*Fe\(s\).*?FeCl₃\(s\))/)[1];
    const examples = data(rates, 'tbl-methods').rows[0][2].split(';');
    for (const equation of [iron, ...examples]) {
        const [left, right] = equation.split('→');
        assert.deepEqual(count(left), count(right), equation);
    }
});
