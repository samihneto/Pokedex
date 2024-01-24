/*
FETCH API
Fetch retorna uma Promise
Promise: Promessa de resultado
Processamento Assíncrono: Vai ser executado e não tem uma resposta de imediato.
CATCH: Manipular o fracasso caso dê algum erro
FINALLY: Fazer uma operação toda vez que essa requisição terminasse independente de sucesso ou fracasso
Encadear vários thens, o que vai pro segundo é o retorno do primeiro.

Try Catch Finally


Simplificar o código Fetch: Usar Arrow Function
Arrow Function: Uma síntaxe reduzida da definição de uma função.
Não precisa declarar o corpo da função.
*/

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join(' ')}
            </ol>
        
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>
`
}

    const pokemonList = document.getElementById('pokemonList')
    

    pokeApi.getPokemons().then((pokemons) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtml

    })
