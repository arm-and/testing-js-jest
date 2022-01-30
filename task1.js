// 178.б) Даны натуральные числа n, a1,..., an. Определить количество членов аК последовательности a1...an,
// кратных 3 и не кратных 5.
//
const findNumbers = (...args) => {
    let counter = 0;
    args.map(el => {
        if (el % 3 === 0 && el % 5 !== 0) {
            counter++
        }
    })
    return counter;
}
findNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

module.exports = {findNumbers};
