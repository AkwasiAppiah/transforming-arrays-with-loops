function invertNumbers (numbersarray){
    const invertarray = []
    for (let number of numbersarray){
        const invertedNumber = number * -1
        invertarray.push(invertedNumber)
    }
    return invertarray
}

console.log(invertNumbers([1, -3, 2, 8, -10]))