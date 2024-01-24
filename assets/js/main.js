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
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 5
let offset = 0



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')} 
                </ol>
            
                <img src="${pokemon.photo}"
                 alt="${pokemon.name}">
            </div>
        </li>
    `).join('')


    pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit) 

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNexPage = offset + limit

    if (qtdRecordNexPage >= maxRecords) {
        const newLimit = qtdRecordNexPage - maxRecords
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
    loadPokemonItens(offset, limit)
    }
})