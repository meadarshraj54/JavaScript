// stack store primitive datatypes
let name = "Adarsh"
let newName = name

console.log(name);
console.log(newName);

newName = "Pandey"
console.log(name);
console.log(newName);

console.log("               ")
// heap store non primitive and when assgned to variables its orinial is assigned not a copy of it
// thus changing in one variable cause changes in everywhere

let user = {
    name : "Adarsh Raj",
    age : 20,
    email : "meadarshraj54@gmail.com"
}
console.log(user.name)

let user2 = user
user2.name = "Adarsh Pandey" // chnaged user 2 name but also changed users name by default
console.log(user.name)
