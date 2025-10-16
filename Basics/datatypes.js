"use strict"; // treat all js code as newer version

let name = "Adarsh" // String
let age = 20 // integer
let status = true // boolean

// null data type - standalone value
// undefined - not initialised value
// symbol - unique

// object

console.log(typeof(null)) // object
console.log(typeof(undefined))// undefined

//primitive
/*
1 string  // "Adarsh"
2 boolean // true false
3 number // 100, 500
4 null
5 undefined
6 symbol
7 BigInt  // large scale number
*/

//Refernvce or Non primitive
/*
1 Array    
2 Objects   
3 function
*/

const arr = [1,2,3] // it is object as well
const newObject = {
    name : "girl",
    age : 20
}

console.log(arr)
console.log(newObject)

console.log(typeof arr)
console.log(typeof newObject)

const fun = function(){
    console.log("Function calling")
} 

fun()
fun()
console.log(typeof fun)