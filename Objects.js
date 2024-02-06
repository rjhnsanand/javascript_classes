// singleton -   a unique object that we don't initiate multipe times in a code base, built using constructor
//constructor  -  built using new keyword, only a single instance is created. Object.create()
//literal  -  created using {}, multiple instances can be used.


const microsoft_user = {
    name: "Anand",
    age: 18,
    "full_name": "Anand Rajhans",
    location: "India",
    email: "anand@microsoft.com",
    isLoggedIn: false,
    Last_Login_Days: ["Monday", "Tuesday", "Saturday"]
}

//elements of objects are retreived using dot method. (.) 
//It has a limitation that it cannot grasp the value stored within a key with inverted commas ("")
//That's why [ ] can be a better way to retreive values fo=rom keys.

//console.log(microsoft_user.name);
//console.log(microsoft_user["email"]);
//console.log(microsoft_user["full_name"]);

microsoft_user.email = "xyz@google.com"

Object.freeze(microsoft_user)

microsoft_user.email = "abc@google.com"

console.log(microsoft_user);

//assign function is used to merge objects

const obj1 = {1:"1", 2:"2"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = Object.assign(obj1, obj2)
//console.log(obj3);


// spread method to combine objects  (...)

const obj3 = { ...obj1, ...obj2    }

console.log(obj3);