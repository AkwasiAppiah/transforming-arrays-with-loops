function greetings (namesarray){

    const greetingsarray = []

    for (let name of namesarray){
    const greetingmessage = `Hello, ${name}!`
    greetingsarray.push(greetingmessage)
    }
    
    return greetingsarray
}

console.log(greetings(["Ash", "Beth", "Ciara"]))