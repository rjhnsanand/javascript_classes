
// syntax of arrow function



// The below method is called explicit return method in an arrow function
/*
const addThree = (num2) => {
    return num2+3
}
console.log(addThree)
*/
/*
const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo)
*/


// The below method is called implicit return because we are not mentioning return statement here and JS considers it to be implied automatically.

const addTwo = (num1, num2) => num1+num2
console.log(addTwo);


// This way of writing arrow functions will be used mostly in react
const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree);



const subTwo = (num1, num2) => ({username: "Anand"})
console.log(subTwo(7, 5));




