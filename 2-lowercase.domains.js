function inLowerCase(domainName) {
	return domainName.toLowerCase();
}

function lowercaseDomains(domainNames) {
	const cleanedDomains = domainNames.map(inLowerCase);
	return cleanedDomains; // or return the map call directly
}

console.log(lowercaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]))