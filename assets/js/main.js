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


const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
        
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>
`
}

    const pokemonList = document.getElementById('pokemonList')
    

fetch(url)
    .then((response) => response.json())   
    .then ((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }

       
    })
    .catch((error) => console.error(error))