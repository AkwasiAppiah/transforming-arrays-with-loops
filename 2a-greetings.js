function sayHello (name){
    return `Hello, ${name}!`
}

function greetings(nameArray){
    const helloArray = nameArray.map(sayHello)
    return helloArray
}

console.log(greetings(["Ash", "Beth", "Ciara"]))