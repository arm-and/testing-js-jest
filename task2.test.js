const {pascalTriangle} = require('./task2')

describe('pascalTriangle test', () => {

    test('check that a function returns something', () => {
        expect(pascalTriangle).toBeDefined();
    });

    test('should calculate Pascal Triangle coefficients for specific line number', () => {
        expect(pascalTriangle(1)).toEqual([[1]]);
        expect(pascalTriangle(2)).toEqual([[1],[1, 1]]);
        expect(pascalTriangle(5)).toEqual([[1],[1, 1],[1, 2, 1],[1, 3, 3, 1],[1, 4, 6, 4, 1]]);
    });
})
