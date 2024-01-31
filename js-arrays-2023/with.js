const flowers = ['Lily', 'Daisy', 'Iris', 'Lotus', 'Allium'];

/**
 * How to find the index of Allium
 */
// const foundIndex = flowers.findIndex((x) => {
//   console.log("x", x);
//   return x === 'Allium';
// });
// console.log(foundIndex);

// To Update an element of the array pero esto modifica el arreglo original
// flowers[4] = 'Rose'
// console.log(flowers);

/**
 * with() no modifica el arreglo original -> la posicion que quiero modificar y lo que quiero añadir , dos parametros
 */

const animals = ['cat', 'dog']

const animalsWidt = animals.with(1, 'rex')
console.log('with()',animalsWidt);
console.log(animals);





