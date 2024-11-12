const loadPokemonImages = function () {
  for (var i = 1; i <= 151; i++) {
    $(".PokemonImgs").append(
      `
                <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` +
      i +
      `.png"/>
            `
    );
  }
};

$(document).ready(function () {
  loadPokemonImages(); // Load pokemon images

  //Que pasa cuando hacemos click ?

  // Funcion para hacer fetch de los pokemon
  async function getPokemon(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Funcion para pintar en la pokedex los datos
  function displayPokemon(nombre, img, altura, peso, tipos) {
    // Nombre
    const pokeName = document.querySelector("#PokemonName");
    pokeName.innerHTML = nombre;

    // Imagen
    const image = document.querySelector(".PokedexImg");
    image.src = img;

    // Tipos
    // Limpiar y agregar tipos, porque algunois tienen solamente uno o más de uno
    const pokeTypesList = document.querySelector(".PokedexList");
    pokeTypesList.innerHTML = ""; // Limpiamos
    tipos.forEach((tipo) => {
      const li = document.createElement("li");
      li.textContent = tipo.type.name;
      pokeTypesList.appendChild(li);
    });

    // Altura
    const pokeHeight = document.querySelector("#PokedexHeight");
    pokeHeight.innerHTML = altura;

    // Peso
    const pokeWeight = document.querySelector("#PokedexWeight");
    pokeWeight.innerHTML = peso;
  }
  // displayPokemon();
  const pokemons = document.querySelectorAll(".pokemon");
  pokemons.forEach((pokemon) => {
    pokemon.addEventListener("click", async () => { // Necesitamos que la funcion click sea async
      const url = pokemon.getAttribute("src");
      const parts = url.split("/");
      const numberOfPokemon = parts[parts.length - 1].split(".")[0];
      try {
        const pokemonData = await getPokemon(numberOfPokemon);
        displayPokemon(pokemonData.name,
          url,
          pokemonData.height,
          pokemonData.weight,
          pokemonData.types
        );
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    });
  });
});