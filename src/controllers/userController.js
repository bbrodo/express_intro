const express = require("express");
const { checkIfAdmin } = require("../middleware/userMiddleware");
const { getUsersFromDatabase } = require("../middleware/databaseMiddleware");
const router = express.Router();

router.post("/", checkIfAdmin, getUsersFromDatabase, (request, response) => {
  response.json({
    users: request.userData,
  });
});

module.exports = router;
