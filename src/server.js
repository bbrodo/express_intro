const express = require("express");

const app = express();

app.use(express.json());

function xanderMiddleware(request, response, next) {
  response.customData = {
    ...request.customData,
    xander: "cool programmer",
  };
  next();
}

app.get("/", xanderMiddleware, (request, response) => {
  //   response.send("<h1>Hello world</h1>");
  response.json({
    message: "Hello World",
    customStuff: response.customData,
  });
});

app.post("/", (request, response) => {
  response.json({
    message: "POST request received!",
  });
});

const pokemonController = require("./controllers/pokemonController.js");
app.use("/pokemon", pokemonController);

const userController = require("./controllers/userController.js");
app.use("/users", userController);

module.exports = {
  app,
};
