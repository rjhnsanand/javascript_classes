/*
let a = 100;
const b = 200;
var c = 300;





if(true){
    let a = 10;
    const b = 20;
    var c = 30;

    console.log(a);
    console.log(b);

}

console.log(c);


function One() {
    const username = "Anand"

    function Two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);

    Two()
}

One()


if(true){
    const username = "Anand"
    
    if(username === "Anand"){
        const website = "Youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);
*/



//Hoisting


addOne(5)
function addOne(num1) {
    return num1+1    
}



addTwo(7)
const addTwo =   function(num2) {
    return num2+2   
}

//Declaraion of the function plays a key role in it's execution. Here a function is stored in a variable which results in an error in execution because
// JS can't initialize it properly. These issues will be dealt in Hoisting.


