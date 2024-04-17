let myString = "Hello, World!"

function strings(myString) {
  console.log(myString)
  let lastChar = myString.charAt(myString.length -1)
  console.log(lastChar)
  let newString = myString.substring(0,3)
  console.log(newString)
}
strings(myString)
