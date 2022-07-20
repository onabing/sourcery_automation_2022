const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('A, 4, 5 is not right triangle', () => {
    expect(isRightTriangle('A', 4, 5)).toBe(false);
});

test('0, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

test('6.5, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(6.5, 4, 5)).toBe(false);
});

test('-4, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(-4, 4, 5)).toBe(false);
});

test('10000000000, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(10000000000, 4, 5)).toBe(false);
});