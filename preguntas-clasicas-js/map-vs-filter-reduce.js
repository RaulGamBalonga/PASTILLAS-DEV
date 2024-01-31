const array = [1,2,3];
const arrayMapped = array.map( (item) => item * 2);
// console.log(arrayMapped);

const arrayFiltered = array.filter( (item) => item % 2 === 0);
// console.log(arrayFiltered); 

const reducer = (acumulador, element) => acumulador + element; 

const reducerArray = array.reduce(reducer)
console.log(reducerArray);