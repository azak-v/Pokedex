function script(){
    let index = 1;
    let link = "https://pokeapi.co/api/v2/pokemon/"+index;
    let pokemonName = document.getElementById("pokemon-name");
    let pokemonNumber = document.getElementById("pokemon-number");
    let leftArrow = document.getElementById("left-arr")
    let rightArrow = document.getElementById("right-arr")

    rightArrow.addEventListener('click', ()=>{
        index++;
        

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