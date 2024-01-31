const fibonacci = (num) => {

const fibonacci = [0,1]

for (let i = 2; i <= num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
} 
return fibonacci[num]
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log('hola mundo');