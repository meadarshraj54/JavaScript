//Singelton
//Object.create() -> Constructor Method

// Object literal

const sym = Symbol("Cheetah")

const myObject = {
    name : "abc",
    age : 16,
    marks : 69,
    [sym] : "Sher"
}

// console.log(myObject.name);

// console.log(myObject["age"]);

// console.log(myObject[sym]);

myObject.email = "meadarshraj54@gmail.com" // add or edit existing values
myObject.name = "Adarsh"

// adding function as a value
myObject.greeting = function greet() { 
    return "Welcome"
}

myObject.greeting2 = function() {
    return `Hello, ${this.name}`;
}

Object.freeze(myObject) // no further change to objects

myObject.name = "Adarsh Raj"

// console.log(myObject);

console.log(myObject.greeting());

console.log(myObject.greeting2());
