const {findNumbers} = require('./task1');

describe('findNumbers test', () => {

    test('check that a function returns something', () => {
        expect(findNumbers).toBeDefined();
    });

    test('check if typeof result is number', () => {
        const result = findNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
        expect(typeof result).toBe('number');
    });

    test('check if return correct counter', () => {
        expect(findNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)).toBe(4);
        expect(findNumbers(12, 13, 14, 15)).toBe(1);
        expect(findNumbers(1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 15)).toBe(0);
    });

});
