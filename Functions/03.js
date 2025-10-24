let a = 300 // ----> Global Scope

if(true){ // ---> Function or Local Scope Block Scope
    let a = 10
    const b = "abc"
}

console.log(a)
// console.log(b); ---> error


function one (){
    const name = "ADARSH"

    function two(){
        const age = 20
        console.log(name);
    }

    // console.log(age)
    two()
}

one()


// +++++++++++++++++++++++++++++++++
console.log(addOne(6)) // ----> phle access krr skte hai 

function addOne(num){
    return num + 1
}

console.log(addOne(8))

// console.log(addTwo(2)  ----> phle access nahi krr skte

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(2))
