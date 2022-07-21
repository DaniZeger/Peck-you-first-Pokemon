let pokemons = [];
let wrapDiv = document.getElementById("wraper");
let pokeballs = document.getElementById("pokeballs");

let firstPokemon = {
  name: "Bulbasaur",
  color: "Green",
  pic: '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="a cute grass pokemon">',
  type: "Grass | Poisen",
};
let secondPokemon = {
  name: "Charmander",
  color: "Orange",
  pic: '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="a cute fire pokemon">',
  type: "Fire",
};
let thirdPokemon = {
  name: "Squirtle",
  color: "Blue | Brown",
  pic: '<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="a cute water pokemon">',
  type: "Water",
};

secondPokemon.note = "my favorit";

function render() {
  pokemons.push(firstPokemon, secondPokemon, thirdPokemon);
  console.log(pokemons);

  for (list of pokemons) {
    wrapDiv.innerHTML += `<div class = "inner-html" onClick = "chosen()">
    <div class = "image"> ${list.pic} </div>
    <h2 id = "'${list.name}'" > ${list.name} </h2>
    <p> <span> Type: </span> ${list.type} </p>
    <p> <span> Color: </span> ${list.color} </p>   
    `;
  }

  pokeballs.style.display = "none";
}
