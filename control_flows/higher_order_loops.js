
// for (const iterator of object) {
    
// }

const greetings = "Hello World"

for (const greet of greetings) {
    
   // console.log(greet);
}

const myArray = [1,2,3,4,5]

for (const xyz of myArray) {
    
   // console.log(xyz);
}

// It is easier to work with than just for loop, will be used in DOM projects to capture a collection of data or HTML elements

// Maps - gives you an object with unique values and maintains order of entries.




// Maps is a special case of objects that are iterable and work with for-of

// example with objects:

const myObject = {
    "js": "Javascript",
    "py": "Python",
    "java": "Java",
    "rub":  "Ruby"
}

// for (const lanuage of myObject) {
//     console.log(lanuage);
// }

// Objects are ont iterable by for-of loop

for (const key in myObject) {
   
      //  console.log(key);

    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//const programming = ["js", "py", "java", "cpp"]

// for (const key in programming) {
   
//     //console.log(programming[key]);
// }

//  ++++++++++++++++++++++++++++++++++++   For-Each loop

// array.forEach(element => {
    
// });

function printMe(item){
    console.log(item);
}


const programming = ["js", "py", "java", "cpp"]

//programming.forEach(printMe)


// programming.forEach( (item) => {
//     console.log(item);
// }  )

programming.forEach( (item, index, arr) => {
   // console.log(item, index, arr);
}  )


// We can also access objects within an array with for each

const myCoding = [
    {
        "languageName" :  "Javascript",
        "languageFileName": "JS"
    },
    {
        "languageName" :  "Java",
        "languageFileName": "JAVA"
    },
    {
        "languageName" :  "Python",
        "languageFileName": "PY"
    },
    {
        "languageName" :  "C++",
        "languageFileName": "CPP"
    }
]

//     const values  =   myCoding.forEach(  (item)  => {
//                             console.log(item.languageFileName);

                           
//                         }  )
// console.log(values);

// for each doesn't return a value. That is why we use filter


const myNums = [1,2,3,4,5,6,7,8,9,10]

// Since we are returning a new value we'll use the method of implicit return that we studied in Arrow functions. If we use {} it starts a new scope
// which returns a new object which is empty

let Newnums =  myNums.filter( (num) => num > 5 )

//console.log(Newnums);

// +++++++++++++++++++++++++++++++++++++   Map   ++++++++++++++++++++++++++++++++++


const map = new Map()

map.set ("IN", "India")

map.set ("UK", "United Kingdom")

map.set ("UK", "United Kingdom")

map.set ("Fr", "France")

map.set ("Fr", "France")

//console.log(map);

for (const [key, value] of map) {
    
    //console.log(value);
}


const myNumbers = [1,2,3,4,5,6,7,8,9]


// This way of attaching ultiple methods in one block of code is called chaining.

let Newnum =  myNumbers.map( (num) => num+10 ).map( (num)  => num+1 )

//console.log(Newnum.filter( (num)  =>  num > 15 ))


// ++++++++++++++++++++++   Reduce     +++++++++++++++++++++

// It is posibly the most widely used method

const price = [200, 300, 500]

 let Totalprice =  price.reduce(  function (acc, curr)  {

    return acc + curr
}, 200)

console.log(Totalprice);
 













