const getOrCreatePokemonNumber = (request, response, next) => {
  let pokemonNumber =
    request.params.pokemonNumber || Math.floor(Math.random() * 1025) + 1;
  console.log(
    "we are going to retrieve data for pokemon with ID of " + pokemonNumber
  );

  request.pokemonStuff = {
    ...request.pokemonStuff,
    pokemonNumber,
  };
  next();
};

async function getPokeApiData(request, response, next) {
  let pokemonID = request.pokemonStuff.pokemonNumber;
  console.log(pokemonID);

  let responseData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonID
  );

  request.pokemonStuff = {
    ...request.pokemonStuff,
    responseData,
  };

  next();
}

async function trimPokeApiData(request, response, next) {
  let validData = await request.pokemonStuff.responseData.json();

  let trimmedData = {
    name: validData.name,
    image: validData.sprites.front_default,
  };

  response.json({
    result: trimmedData,
  });
}

module.exports = {
  getOrCreatePokemonNumber,
  getPokeApiData,
  trimPokeApiData,
};
