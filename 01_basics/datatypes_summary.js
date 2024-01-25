
// Data types 7
// string, boolean, number, null , undefined , symbol, bright


let scoreNumber = 56
let scoreNumberDecimal = 56.25
console.log(typeof scoreNumber);

console.log(typeof scoreNumberDecimal)

let isLoggedIn = true   // 
let outsideTemp = null // Object

console.log(isLoggedIn)
console.log(typeof outsideTemp)

let bigNumber = 234521342242423424123411n
console.log(bigNumber)
console.log(typeof bigNumber)


// const heroines['Deepika',]

const heros = ["shaktiman", "naagraj", "doga"]; // The type of output showing here is object
console.log(heros)
console.log(typeof heros)

const myFunction = function(){
    console.log("Hello world");
    console.log(34+"23")
    console.log("23"+ 34)
}
myFunction()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack 
/*
In stack we will get a copy of a memory.

In Heap 
In Heap we will get a reference of a memory and changes is done in the orginal form.
*/

let warmWishes = "Good Morning"
let welcome = warmWishes

console.log(welcome)

let user = {
    email : "Hello@gmail.com",
    passwd : "Damak123"
}

// user = user2

let user2 = user
user2.email = "bipson@gmail.com"

console.log(user.email)
console.log(user2.email)

const gameName = new String("bipson")