function numbertoObject (number){
    const object = 
    { asNumber: number,
      asString: number.toString()};
    return object;
}

function numberAndString(numbersArray){
    const objectsArray = numbersArray.map(numbertoObject);
    return objectsArray;
}

console.log(numberAndString([4, -3.2]), 'should be', "[{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }]")