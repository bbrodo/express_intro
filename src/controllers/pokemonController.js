const express = require("express");
const { getOrCreatePokemonNumber, getPokeApiData } = require("../middleware/pokeApiMiddleware");

const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "Pokemon routes live here"
    })
})

router.get("/random", async (request, response) => {
  let pokemonData = {};

  let randomNumber = Math.floor(Math.random() * 1025) + 1;
  let responseData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + randomNumber
  );
  pokemonData = await responseData.json();

  response.json({
    result: pokemonData,
  });
});

router.get(
  '/randommiddleware', 
  getOrCreatePokemonNumber,
  getPokeApiData,


  (request, response) => {
    response.json({
      result: 'todo'
    })
})

module.exports = router;
