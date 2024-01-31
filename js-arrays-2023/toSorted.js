/**
 * sort() -> ordena los elementos y modifica el arreglo original
 */


const numbers = [11,5,7,23,44,12,10];

console.log('orignal Sort',numbers);

const sortNumbers = numbers.sort((a,b) => a - b );

console.log('sort()',sortNumbers);
console.log("orignalAfter Sort", numbers);

/**
 * toSorted() -> ordena los elementos y no modifica el arreglo original
 */
const numbersSorted = [44, 66, 22, 11, 55];

const toSortedNUmbers = numbersSorted.toSorted((a,b) => a - b )

console.log('original toSorted',numbersSorted);
console.log('toSorted()',toSortedNUmbers);
console.log("originalAfter toSorted", numbersSorted);
