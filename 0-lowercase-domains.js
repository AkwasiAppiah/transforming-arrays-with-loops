// function changeDomainNames 

// parameters - array - of strings

// returns array - of strings 

// create new array 

// for domainNames in array
    // LowercaseDomainNames = domainNames.toLowerCase
    // push into new array

// return new array 

// console.log(changeDomainNames(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"])  is the same as ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"])


function changeDomainNames(array){

    newArray = [];

    for (let domainNames of array){

        const lowercaseDomainNames = domainNames.toLowerCase();
        newArray.push(lowercaseDomainNames);
    }

    return newArray
}

console.log(changeDomainNames(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),  "is the same as", ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"])