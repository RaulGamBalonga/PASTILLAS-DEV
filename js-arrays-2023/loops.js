// You are given a number variable called number. Write a program that loops from 0 to that number (not including) and calculates the sum of all even numbers in that range. You will have to use a for loop, and perhaps an if statement inside the for loop to check if the number is even. Try using math to check if the number is even. If you get stuck, Hint 1 will help you with the math.


function evenSum(number) {
    // Write your code below this line
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 2 === 0) sum += i;
    }

    console.log(sum);
}