// You are given two variables of type String. The variables are string1 and string2. They are already declared have a string value like '52'. You can already use them without worrying about declaring them. Your job is to convert them into numbers and calculate their sum. Print the sum to complete the program.





function printSum(string1, string2) {
    // Write your code below this line
    let toNumber1 = Number(string1)
    let toNumber2 = Number(string2)
   const sum = toNumber1 + toNumber2
   console.log(sum)
}