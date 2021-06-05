function countStrings (stringsArray){

    const countStringArray = [];

    for (let string of stringsArray){
        const countedstring = string.length
        countStringArray.push(countedstring)
    }

    return countStringArray
}

console.log(countStrings(["one", "two", "three", "four"]), "should equal [3, 3, 5, 4]")