function numberAndString (array) {
    newarray = [];
    for (let number of array){
        const obj = 
        {asNumber: number,
         asString: number.toString()                       
        }
        newarray.push(obj)
    }
    return newarray
}

console.log(numberAndString([4, -3.2,5,9,8,7]))