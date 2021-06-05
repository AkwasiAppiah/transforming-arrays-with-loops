function objectToSentence (object){
    const sentence = `${object.name} is a ${object.type.toLowerCase()} Pokemon`;
    return sentence ;
}

function pokemonTypes (arrayofObjects){
    const convertedObjects = arrayofObjects.map(objectToSentence);
    return convertedObjects
}

console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]), "should be", '["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."]')