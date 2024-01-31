// Transforma cada número multiplicando por 2
 const multipliDos = [1,2,3].map( n => {
 return n * 2
 })
//  console.log(multipliDos);

// filtra la comida que no sea carne
const compra = [ '🍅', '🍇', '🍗', '🍌', '🍔' ]
// console.log(compra.length);

const vegeta =  compra.filter( n => n !== '🍗')
// console.log(vegeta.length);

//Encuentra y devuelve la gallina
// const FindChiken = ['🐶', '🐱', '🐔', '🐥', '🐮'].find( n => n === '🐔') // '🐔'
// console.log(FindChiken.length);
// // Donde está la gallina? 
// ['🐶', '🐱', '🐔', '🐥', '🐮'].findIndex( n => n === '🐔') // 2

//Rellena el array de dinero
const giveMoney = ['','',''].fill('💱');
// console.log(giveMoney);

//Esta todo ok?
const justVegs = ['🍅', '🍇', '🍌',].every( n => n !== '🍔')
// console.log(justVegs);

// hay algun error?
const isError = ['✅', '✅', '❌'].some( n => n === '❌')
console.log(isError);
