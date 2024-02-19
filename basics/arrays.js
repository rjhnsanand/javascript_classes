//[] to denote arrays

// Index of array always strat from 0.

const myarray = [0, 1, 2, 3, 4, 5, "Anand", null, true]

//console.log(myarray.length);

// another method to declare arrays using new keyeord

//const myArray2 = new Array(1,2,3,4)

//no need to use [] while using new keyword.


//++++++++++++++++++++++++ methods and functions of Arrays

myarray.push(9)
//console.log(myarray);

// adds elemnts at the end of an array

//pop()

myarray.pop()
//console.log(myarray);

//unshift()

myarray.unshift(9)
//console.log(myarray);

// not a very efficient way to add an element to an array as it changes the whole index


//shift()

myarray.shift()
//console.log(myarray);

//includes()

//console.log(myarray.includes("online"))

//indexof()

//console.log(myarray.indexOf(9))


const elements = ['Fire', 'Air', 'Water'];

const newarray = elements.join() 

//console.log(typeof newarray);


const newarray2 = myarray.join()
//console.log(newarray2);


// Slice & Splice

/* 
const myArr = [0, 1, 2, 3, 4, 5]
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log("B ", myn1);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C ", myArr);

*/


const marvel_heroes = ["spiderman", "Ironman", "Thor"]
const dc_heroes = ["Batman", "Superman", "Flash"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes.length);
//console.log(marvel_heroes[3][2]);  // not a good way to write code

const all_heros = marvel_heroes.concat(dc_heroes)
//console.log(all_heros);

//only used for 2 arrays, can cause problems if we are using more than 2 arrays.

//spread operator  (...)  People prefer to use spread operator to merge arrays, there is no limitation on the number of arrays that can be merged.

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes);


const nestedArray = [1,2,3,[4,5,6],7,[6,8,[5,6,7]]]

const new_nested_array = nestedArray.flat(1)
//console.log(new_nested_array);



//console.log(Array.isArray("Anand"));

let balance = 1000
let balance2 = 15000
let balance3 = 20000

console.log(Array.of(balance, balance2, balance3));

   













