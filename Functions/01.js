function printCharacter(name, idx){
    if(idx >= name.length) return;

    console.log(name[idx])

    printCharacter(name,idx+1)
}

// printCharacter("ADARSH", 0)

function sum(a , b, c ){ // ----> parameters
    return a + b + c
}

console.log(sum(1,2,3)); // ---> arguement

function printHello(name){
    return `Welcome, ${name}`
}

console.log(printHello("ADARSH"))
