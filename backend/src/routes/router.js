const express = require("express");
const connection = require("../database/connection");

const router = express.Router();

router.get("/", (req, res) => res.send("Hello World!"));

module.exports = router;
