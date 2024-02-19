
//(Primitive datatypes)

let name = "Anand"   //  String datatype
//let age = 18         // number

let IsLoggedIn = false  //boolean (true/false) (0/1)

let temp = null;        //standalone value  (Object)

//Undefined is a datatype;

//symbol  =  unique

  //to check the datatype that we have received

  //console.log(typeof "Anand");
 // console.log(typeof name);
 // console.log(typeof age);
  //console.log(typeof null);
 // console.log(typeof IsLoggedIn);
 // console.log(typeof undefined);


/*   Non-primitive Datatypes:

  Basically of 3 types:
  Array, Object, Function

*/

//Array eg:

let MarvelHeros = ["Ironman", "Captain America", "Hulk", "Loki"]

//Object (Stored in a key-value pair):

let car = {
  brand: "Honda",
  distance_trveled: 25,
  color: "Red",
  Sun_roof: false,
  availability: null
}

// Function (modular block of codes that can be used muliple times)

const printing = function(){
  console.log("Hello world");
}











//                                              Conversion operation in Datatypes

let score = "33abc"

//console.log(typeof score);

let valueInnumber = Number(score)

//console.log(typeof valueInnumber);              //When we try to convert a string into number we get NaN

//console.log(valueInnumber);                          //  NaN not a number


let age = 18

let ageInString = String(age)

console.log(typeof ageInString);
console.log(ageInString);


//                        operatins in datatypes

// Addition(+), Subtraction(-), Multiplication(*), Division(/), Reminder(%)

add = (2+2)
sub = (2-2)
divide = (2/2)