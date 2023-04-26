const { response } = require("express");

function script(){
    let index = 1;
    let link = "https://pokeapi.co/api/v2/pokemon/1"+index;
    let pokemonName = document.getElementById("pokemon-name");
    let pokemonNumber = document.getElementById("pokemon-number");
    let pokemonImg = document.getElementById("pokemon-img");
    let leftArrow = document.getElementById("left-arr")
    let rightArrow = document.getElementById("right-arr")

    rightArrow.addEventListener('click', async ()=>{
        index++;
        link = "https://pokeapi.co/api/v2/pokemon/"+index;
        console.log(link);
        await fetch(link)
            .then(response => response.json())
            .then(pokemon => {
                console.log(pokemon);
                pokemonName.innerText = pokemon.name;
                pokemonImg.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
                pokemonNumber.innerText = index});
    })

    leftArrow.addEventListener('click', async ()=>{
        if(index!=1){
            index--;
        }
        link = "https://pokeapi.co/api/v2/pokemon/"+index;
        console.log(link);
        await fetch(link)
            .then(response => response.json())
            .then(pokemon => {
                pokemonName.innerText = pokemon.name
                pokemonNumber.innerText = index
                });
    })

    function doFetch(arrow){}
    //query selectors do span do nome
    //Event listeners
    //função para fazer o fetch
    //fazer o fetch somente se a variavel não for 0
    //adicione mais um a uma variavel e concatene ao link
    //faça o fetch
    //armazene o nome do filho da puta
    // fetch(link)
    //     .then(response => response.json())
    //     .then(pokemon => console.log(pokemon.name));


}//Dom