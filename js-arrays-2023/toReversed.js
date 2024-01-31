

/**
 * El método reverse() modifica el arreglo original cambiando el orden de los elementos
 */
const numbers = [1,2,3,4,5];

console.log("original",numbers);

numbers.reverse()

console.log('reverse',numbers);

/**
 * toReversed() -> cambia  el orden al rever sin modificar el arreglo orginal , copia
 */

const numbers2 = [11,22,33,44,55]

console.log('original',numbers2);
const reverseNumbers = numbers2.toReversed()
console.log('toReversed',reverseNumbers);