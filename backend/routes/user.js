const express = require("express");

const router = express.Router();

//controller functions
const { loginUSer, signupUSer } = require("../controllers/userController");

//login route

router.post("/login", (req, res) => {});

//signup router
router.post("/signup", (req, res) => {});

module.exports = router;