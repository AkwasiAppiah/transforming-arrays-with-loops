function lettersToNumbers (string){
    return string.length;
}

function countStrings (stringsArray){
    const countedLettersArray = stringsArray.map(lettersToNumbers);
    return countedLettersArray;
}

console.log(countStrings(["one", "two", "three", "four"]))