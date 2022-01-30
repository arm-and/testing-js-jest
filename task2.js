const pascalTriangle = function(n) {

    let result = [[1]];
    let sums = [];

    for(let i=1; i<n; i++) {
        for(let j=0; j<result[i-1].length-1; j++) {
            sums.push(result[i-1][j] + result[i-1][j+1]);
        }

        result[i] = [1, ...sums, 1];
        sums = [];
    }

    return result;
}
console.log(pascalTriangle(5));

module.exports = {pascalTriangle};
