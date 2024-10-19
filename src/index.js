const express = require("express");

const app = express();

app.get("/", (request, response) => {
  //   response.send("<h1>Hello world</h1>");
  response.json({
    message: "Hello World",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server listening on localhost:${PORT}`);
});
