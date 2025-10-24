const user = {
    name : "Adarsh",
    age : 20
}

function printInfo(user){
    console.log(`User name is ${user.name} and age is ${user.age}`)
}

printInfo(user)


function collectValues(...val){
    let ans = 0
    for(let v of val){
        ans += v
    }
    return ans
}

console.log(collectValues(100,200,300,400));
