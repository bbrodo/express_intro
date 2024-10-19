const express = require("express");

const app = express();

app.get("/", (request, response) => {
  //   response.send("<h1>Hello world</h1>");
  response.json({
    message: "Hello World",
  });
});

app.post("/", (request, response) => {
  response.json({
    message: "POST request received!",
  });
});

const pokemonController = require("./controllers/pokemonController.js");
app.use("/pokemon", pokemonController);

module.exports = {
    app
}