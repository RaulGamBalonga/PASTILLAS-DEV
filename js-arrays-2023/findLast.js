const numbers = [10, 35, 55, 70, 80, 100, 20, 30];

/**
 *  Primera forma de filtrar con find()
 */

// const foundNumber = numbers.find( x => x === 100);

/**
 *  Segunda forma de filtrar con find()
 */
// const foundNumber = numbers.find((x) => {
//   if (x === 100) {
//     return x;
//   }
// });

/**
 *  Tercera forma de filtrar con find()
 */

const foundNumber = numbers.find((x) => {
  console.log("with find()", x);
  return x === 100;
});

/**
 *   forma de filtrar con findLast() -> empieza por el ultimo elemento a filtrar
 */

const foundNumber2 = numbers.findLast((x) => {
  console.log("with findLast()", x);
  return x === 100;
});

console.log("find()", foundNumber);
console.log("findLast()", foundNumber2);
