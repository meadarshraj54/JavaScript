let marvel = ["thor", "ironman", "spiderman"]

let dc = ["superman", "batman", "flash"]

// marvel.push(dc); // add new array as a single lement

console.log(marvel);

let newArr = marvel.concat(dc);
console.log(newArr);

let newArr2 = [...marvel, ...dc]; //spread operator
console.log(newArr2);

let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a,b,c));

console.log(Array.isArray("ADARSH"));
console.log(Array.of("ADARSH"));
console.log(Array.from("ADARSH"));


