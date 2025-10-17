const name = "Adarsh"
const age = 20

console.log("Name = " + name + " Age = " + age)

console.log(`Name = ${name} Age = ${age}`) //string interpolation -> Modern Syntax

const student = new String("Adarsh Raj")
console.log(student)
console.log(typeof (student))

console.log(student[0])
console.log(student[1])
console.log(student.toUpperCase())

console.log("              ")

const s = "Hello, World"
console.log(typeof s)

console.log(s.substring(0,8))

console.log(s.substring(-4,8))

console.log(s.slice(0,5))

console.log(s.split(','))


const fruit = "    apple     "
console.log(fruit.trim())
console.log(fruit.trimStart())
console.log(fruit.trimEnd())

const name2 = "Ada r s h"
console.log(name2.replace(" ",""))
console.log(name2.replaceAll(" ",""))

console.log(name2.includes(" "))

