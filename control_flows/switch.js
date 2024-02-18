
// If we have to go through checking multiple/large amount of conditions then it is more practicle to use switch statements.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = "march"

switch (month) {
    case "jan":
        console.log("Month is January");
        break;
    case "feb":
        console.log("Month is Feb");
        break;
    case "march":
        console.log("Month is March");
        break;
    case "april":
        console.log("Month is April");
        break;
    case "may":
        console.log("Month is May");
        break;

    default:
        console.log("default case match");
        break;
}


//  Truthy and Falsy values


const userEmail = " "
if (userEmail) {
 console.log("Got user email");    
} else
console.log("Don't have user email");


// Truthy values: "0", "false", " ", [], {}, function() { }
// Falsy values: 0, -0, BigInt 0n, "", null, undefined, Nan


// Nullish coalescing operator (??) : used with null, undefined.

let val1;

val1 = 5 ?? 10
val1 = null ?? 20
val1 = undefined ?? 30
val1 = null ?? 10 ?? 40 ?? 60

console.log(val1);


// Terniary operator:     condition ? true : flase

const price = 1000

price <= 800 ? console.log("less than 800") : console.log("more than 800");

// this will be seen in React and JS frameworks.