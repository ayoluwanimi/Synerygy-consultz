const express = require("express");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.send("This is the users page");
});

module.exports = router;
