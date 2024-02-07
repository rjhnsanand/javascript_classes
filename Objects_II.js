
/*
const obj1 = {
    name: "anand",
    id: 1234
}

const obj2 = {
    price: 999,
    location: "India"
}


// const obj3 =  Object.assign( {},obj1, obj2 )

const obj3 = {...obj1, ...obj2}

 console.log(obj3);

*/

// How to make objects using constructor

     const twitterUser =   new Object()      //This is called a singleton object

    //const twitterUser = {}

    twitterUser.id = 12234,
    twitterUser.name = "Anand",
    twitterUser.isLoggedIn = false

//console.log(twitterUser);


// Working with Objects/arrays inside an Object.

const regularUser = {
    email: "xyz@gmail.com",
    fullname:{
        username:{
            firstName: "Anand",
            lastName: "Rajhans"
        }
    }
}
//console.log(regularUser.fullname.username.firstName);

const users = [
    {
        id: 123,
        email: "xyz@google.com"
    },
    {
        id:234,
        email: "abc@google.com"
    },
    {},
    {},
    {}
]

// Identification of keys and values

   console.log(Object.keys(twitterUser))

    console.log(Object.values(twitterUser))

///+++++++++++++++++++++++++++++++++++++            Object destructure

const  course = {
    coursename: "Fullstack",
    Price: 999,
    courseInstructor: "Mukesh"
}

const {courseInstructor: instuctor} = course

console.log(instuctor);


//++++++++++++++++++++++++++++++++++++++++   APIs

//API files are mostly serverd in the form of JSON files.


