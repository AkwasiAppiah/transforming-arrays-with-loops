function namesToInitials (names){
    const firstLast = names.split(' ')
    return `${firstLast[0][0]}.${firstLast[1][0]}`
}

function onlyInitials (namesArray){
    const initialisedNames = namesArray.map(namesToInitials)
    return initialisedNames
}

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), 'should equal [A.K, L.H, Y.M]')