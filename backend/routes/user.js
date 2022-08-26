const express = require("express");

//controller functions

const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

//login

router.post("/login", loginUser);

//signout
router.post("/signup", signupUser);

module.exports = router;