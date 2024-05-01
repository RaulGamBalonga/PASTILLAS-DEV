// You are given a number variable called number from 1 to 10. Print Odd if the number is odd and print Even if the number is even. Print Invalid number if the number is not from 1 to 10. Use a switch statement.

function evenOdd(number) {
    // Write your code below this line
    switch (number) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log('Odd');
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log('Even');
        break;
    default:
        console.log('Invalid number');
}
}