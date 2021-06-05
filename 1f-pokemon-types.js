function pokemonTypes (arrayofObjects){
    sentenceArray = [];
    for (let object of arrayofObjects){
        sentence = `${object.name} is a ${object.type.toLowerCase()} Pokemon`
        sentenceArray.push(sentence)
    }
    return sentenceArray
}

console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]))