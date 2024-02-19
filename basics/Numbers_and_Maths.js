
//Let's declare a number using new keyword

const balance = new Number (1000000000)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toLocaleString('en-In'));
//console.log(balance.toFixed(2)); //to give decimals


const newNumber = 456.345
//console.log(newNumber.toPrecision(4));


//************************              MATHS                        */

//It is a default javascript library

//console.log(Math.abs(-19));
//console.log(Math.round(34.6));


// To control the logic of rounding off function we use ceiling and floor functions

//console.log(Math.ceil(34.2));
//console.log(Math.floor(56.9));

// To find the minimum and maximum value from an array of data we generally use min and max functions
//console.log(Math.min(2,3,4,6,7,8,9));


// You'll probably use random function the most while designing games.

//console.log(Math.random());

//It generates numbers between 0 and 1.

//console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);