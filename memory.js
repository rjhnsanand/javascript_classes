//Two types
// primtive = stack memory == we get a copy of data == change made later do not reflect in original
//Non-primitive = Heap memory == we get a reference of data  == changes made later are reflected in original.


//Exmaple of primitive (stack memory)

let myEmail = "anand@google.com"

let anotherEmail = myEmail
anotherEmail = "xyz@google.com"


console.log(anotherEmail);
console.log(myEmail);


//Example of non-primitive (Heap memory)

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}


let userTwo = user

userTwo.email = "anand@google.com"

console.log(user.email);
console.log(userTwo.email);








