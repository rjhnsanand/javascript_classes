
// if else statement

// if (condition) {
    // }

// condition is verified on the basis of true or false.

// const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log("User is logged In");
// }

// operator for comparisons: <, >, <=, >=, ==, !=, ===


const temp = 100

if (temp != 100) {
    console.log("temp is not equal to 100");    
}else
console.log("temp is equal to 100");

/*
const score = 200

if (score > 100) {
    var power = "fly"
   
}
console.log(`User power : ${power}`);
*/

// Above example is a wrong way to write code. You should avoid using var inside scopes.

// Shorthand notation:

const balance = 600

//  this is called implicit scope, similar to implicit returns in arrow functions
//if(balance > 500) console.log("test"), console.log("test 2"), console.log("test 3");

// Above is also a very wrong way to write code

// ++++++++++++++++++++++++++++++++++++   Nesting-conditions

if (balance < 500) {
    console.log("Send reward voucher 1");
} else if (balance <750){
    console.log("Send reward voucher 2");
}else if(balance < 900){
    console.log("Send reward voucher 3");
}else
console.log("Send reward voucher 4");



const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

 if (isUserLoggedIn && debitCard && loggedInFromEmail && loggedInFromGoogle) {
     console.log("Allow to shop");
 }else
 console.log("Provide compelte information");

//   (&&) is AND operator and it checks multiple conditions and only executes if all the conditions are true.

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is logged in");
}else{
    console.log("User is NOT logged in");
}

// (||) is OR operator and it checks multiple conditions and executes if even one is true