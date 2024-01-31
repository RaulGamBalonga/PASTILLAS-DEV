/**
 *  findIndex() -> encuentra el indice del elemento de izq a drch
 * findLastIndex() -> encuentra el indice del elemento de drch a izq
 */

const numbers = [10, 35, 55, 70, 80, 100, 20, 30];

const foundIndex = numbers.findIndex((x) => {
    console.log('x',x)
    return x === 100
})
const foundLastIndex = numbers.findLastIndex((y) => {
    console.log('y',y)
    return y === 100
})
console.log(foundIndex);
console.log(foundLastIndex);