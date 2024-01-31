// QUe esl el scope en JS? 

// function suma(a, b) {
//     return a + b
// }
// console.log(suma(1, 2));

const a = 1;

function suma() {
    const b = 2;
    return suma2();
}

const b = 3;
const c = 1

function suma2() {
    const c =3;
    return a + b + c;

}
console.log(suma());