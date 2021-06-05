function onlyInitials (namesArray){
   const initialsArray = [];
    for (let names of namesArray){
        const splitNames = names.split(' ')
        initialsArray.push(`${splitNames[0][0]}. ${splitNames[1][0]}`)
        }
    return initialsArray
    }

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]))

