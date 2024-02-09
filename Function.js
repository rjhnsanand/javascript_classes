

// A block of code that can be used at multiple instances

// Try to name functions depending on the work it's supposed to do it improves readibility

//Case 1

function MyName(/* parameters  */){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

//MyName( /* Arguments */  )


//A function should take some input and return an output where there is some obvious relationship between the input and the output.

//Case 2
// function to add two numbers

function addTwoNumbers (num1, num2){

    let num3 = num1 + num2
    return num3
}

 const result =   addTwoNumbers(2, 3)

// console.log(result);


 //Case 3

// Handle texts and messages

function LoginUserMessage (username) {

    if (username === undefined){
        console.log("Please provide username")
        return
    } 

      return `${username} just logged in `
}

 //console.log(LoginUserMessage("anandrjhns"));  


 // Case 4

 // How to handle unknown number of inputs while making a function to add numbers  (generally used in Ecommerce)

 function CalculateCartPrice(val1, val2,  ...num1){
    return num1

 }

   // console.log(CalculateCartPrice(200, 400, 500, 1000)); 

   //Case 5 
   // How to handle objects and functions or how to use functions to manipulate the values stored in objects

   function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); 
  myFunc(mycar);
  console.log(mycar.make); 




  const microsoft_user = {
    name: "Anand",
    age: 18,
    "full_name": "Anand Rajhans",
    location: "India",
    email: "anand@microsoft.com",
    isLoggedIn: false,
    Last_Login_Days: ["Monday", "Tuesday", "Saturday"]
}

function change(xyz){
    xyz.name = "Mukesh"
}

change(microsoft_user)
console.log(microsoft_user)


// Case 6
// How to use functions to manipulate the values stored in Arrays.



function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); 
  myFunc(arr);
  console.log(arr[0]); 


  const myarray = [0, 1, 2, 3, 4, 5, "Anand", null, true]

  function manipulateArray(duck){
    duck[5] = 90
  }

  manipulateArray(myarray)
  console.log(myarray)