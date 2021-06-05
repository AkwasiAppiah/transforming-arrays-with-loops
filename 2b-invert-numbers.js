function convertNumber (number){
    return number * -1;
}

function invertNumbers (numberArray){
    const changedNumbers = numberArray.map(convertNumber);
    return changedNumbers;
}

console.log(invertNumbers([1, -3, 2, 8, -10]))