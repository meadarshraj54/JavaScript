let arr = [1,2,3,4,5]

console.log(typeof arr)

// console.log(arr[0])
// console.log(arr[1])

// arr[0] = 0

console.log(arr)

//Arrays Methods

arr.push(6) //add new element
console.log(arr)

arr.pop() // remove last element
console.log(arr)

arr.unshift(100) // begin insert
console.log(arr)

arr.shift() // begin delete
console.log(arr);

console.log(arr.includes(5))

console.log(arr.indexOf(5));

//slice and splice 

console.log(arr);

let newArr1 = arr.slice(1,3)

console.log(newArr1);
console.log("Slice: ", arr); // original array remain same 

let newArr2 = arr.splice(1,3);
console.log(newArr2);
console.log("Splice: ", arr); // original array changed


