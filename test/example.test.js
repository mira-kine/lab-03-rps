import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('user:rock, comp:scissors', (expect) => {
    const expected = 'you win';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});

test('user:rock, comp:rock', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(actual, expected);
});

test('user:rock, comp:paper', (expect) => {
    const expected = 'you lose';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

