const fetchPokemonData = (pokemonName)=> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`) 
  .then(response => {
    if(!response.ok) {
      throw Error(response.statusText)
    } 
    return response.json(); 
  })
  
  .catch( 
    err => console.log(`Error,  ${err}`)
  );
}


let fetchPokemon1 = fetchPokemonData(Math.floor(Math.random() * 151) + 1);//fetches random pokemon everytime the page loads or refreshes
let fetchPokemon2 = fetchPokemonData(Math.floor(Math.random() * 151) + 1);


Promise.all([fetchPokemon1, fetchPokemon2]).then((pokemonData) => {
  
  const pokemonData1 = pokemonData[0];
  const pokemonImageUrl1 = pokemonData1.sprites.back_default;
  const pokemonName1 = pokemonData1.name.toUpperCase();
  document.getElementById(`pokemon-0-image`).src = pokemonImageUrl1;
  document.getElementById(`pokemon-0-name`).innerText = pokemonName1;

  
  const pokemonData2 = pokemonData[1];
  let pokemonImageUrl2 = pokemonData2.sprites.front_default;
  let pokemonName2 = pokemonData2.name.toUpperCase();
  document.getElementById(`pokemon-1-image`).src = pokemonImageUrl2;
  document.getElementById(`pokemon-1-name`).innerText = pokemonName2;

  pokemonBattle(pokemonData1, pokemonData2);
});

const pokemonBattle = (pokemon1, pokemon2) => {
  let baseExperiencePokemon1 = pokemon1.base_experience;
  let baseExperiencePokemon2 = pokemon2.base_experience;

  if (baseExperiencePokemon1 > baseExperiencePokemon2) {
    document.getElementById('pokemon-0').classList.add('victor')
  }
  else {
    document.getElementById('pokemon-1').classList.add('victor')
  }
}