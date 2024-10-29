const express = require("express");
const router = express.Router();

router.get("/", checkIfAdmin, getUsersFromDatabase, (request, response) => {
  response.json({
    users: request.userData,
  });
});

module.exports = router;
