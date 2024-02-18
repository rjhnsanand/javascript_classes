// Loops: They are also called Iterators.

// For loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {

    const element = index;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

//  Just like we can write conditions inside a loop, we can also write loops inside a loop


//Code for printing of table

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop: ${i}`);

    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop: ${j}`);
       // console.log( i + "*" + j + "=" + i*j );
    }
    
}

// loop on Arrays

let myArray = ["Batman", "Flash", "Superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}



// Sometimes we may need to end a loop abruptly.

// Break statement is used to break the flow of loop

for (let i = 1; i <= 20; i++) {

     if (i == 5) {
      //  console.log("Loop detected 5");
        break;
     }
      //  console.log(i);
}


// Continue statement is used to skip the execution of a specific condition

for (let i = 1; i <= 20; i++) {

    if (i == 5) {
      // console.log("Loop detected 5");
       continue;
    }
       //console.log(i);
}


// ++++++++++++++++++++++++++++++++++++ While loop ++++++++++++++++++++++++++++++++


// while (condition) {
    
// }

let i = 0
while (i <= 10) {

   // console.log(i);
    i = i+3
    
}



let Superheros = ["Batman", "Flash", "Superman"]

let arr = 1

while (arr < Superheros.length) {
    
   // console.log(`Value is ${Superheros[arr]}`);
    arr++
}



// +++++++++++++++++++++++++ Do-while ++++++++++++++++++++++++++++++++++

//  This is a special case of while loop where execution happens alteast once

let score = 12

do {
    console.log(`Score is ${score}`);
    score++

} while (score <= 10);
