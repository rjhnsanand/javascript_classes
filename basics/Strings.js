
let name = "anand"
const repoCount = 50

//This is called string concatenation
//console.log(name + repoCount + " is the number of my repositories");  


//This is called string interpolation
//console.log(`Hello my name is ${name.toUpperCase()} and my Github repositories are ${repoCount} in number`);


//One way to declare string using new keyword

const gameName = new String("Vice city")

//console.log(gameName[0]);
//console.log(gameName.length);
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf("c"));


let url = "https://ipl.com/mumbai%20indians"

console.log(url.replace('%20', '-'));

console.log(url.includes('csk'));