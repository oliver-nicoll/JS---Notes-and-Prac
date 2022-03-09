// Math Object - JavaScript built in object

console.log(Math) // Displays Math obj {abs:.....}

console.log(Math.PI) //Displays 3.1415926.....

console.log(Math.E) //Displays what E is 2.7....

//more Math obj examples

const area = 7.7;

//using round method with the Math object
console.log(Math.round(area)) //will round to the nearest integer dependent on what the decimal is - will round to 8

console.log(Math.floor(area)) //Will floor the integer Below - will result in 7

console.log(Math.ceil(area)) //This does the opposite of floor, this will round up and return 8

console.log(Math.trunc(area)) //This will take away the decimal and leave the integer - results in 7

//Random Numbers:

const random = Math.random() //This will return a random number between 0 and 1

console.log(random)

console.log(Math.round(random * 100)) //random number between 1 and 100

